# Guía de Migración Azure SQL Database
## bcp, sqlcmd y SqlPackage con Autenticación Federada y Service Principals

---

## Tabla de Contenidos
- [Requisitos Previos](#requisitos-previos)
- [Métodos de Autenticación](#métodos-de-autenticación)
- [SqlPackage - Migración Completa](#sqlpackage---migración-completa)
- [bcp - Copia de Datos por Tabla](#bcp---copia-de-datos-por-tabla)
- [sqlcmd - Scripts y Consultas](#sqlcmd---scripts-y-consultas)
- [Casos de Uso Completos](#casos-de-uso-completos)
- [Troubleshooting](#troubleshooting)

---

## Requisitos Previos

### Instalación de Herramientas

```bash
# Windows (con winget)
winget install Microsoft.SqlPackage
winget install Microsoft.SQLServer.CommandLine

# Linux (Ubuntu/Debian)
curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/20.04/prod.list)"
sudo apt-get update
sudo apt-get install mssql-tools18 unixodbc-dev sqlpackage

# macOS (con Homebrew)
brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release
brew update
brew install mssql-tools18 sqlpackage
```

### Verificar Versiones

```bash
bcp -v
sqlcmd -?
sqlpackage /version
```

Asegúrate de tener versión 15.0.1 o superior para soporte de autenticación federada.

---

## Métodos de Autenticación

### 1. Usuario Federado (Microsoft Entra ID / Azure AD)

**Ventajas:**
- Usa tu cuenta corporativa
- Soporte para MFA
- No requiere gestionar secretos

**Desventajas:**
- Requiere interacción manual (navegador)
- No apto para automatización

### 2. Service Principal (SPN)

**Ventajas:**
- Ideal para automatización y CI/CD
- No requiere interacción humana
- Tokens renovables

**Desventajas:**
- Requiere configuración previa en Azure
- Gestión de secretos (Client ID + Secret)

---

## SqlPackage - Migración Completa

### Configuración Inicial para Service Principal

#### Crear Service Principal (Azure CLI)

```bash
# Crear SPN de origen
az ad sp create-for-rbac --name "sql-migration-source-spn" --role contributor \
  --scopes /subscriptions/{subscription-id}/resourceGroups/{rg}/providers/Microsoft.Sql/servers/{servidor-origen}

# Crear SPN de destino
az ad sp create-for-rbac --name "sql-migration-dest-spn" --role contributor \
  --scopes /subscriptions/{subscription-id}/resourceGroups/{rg}/providers/Microsoft.Sql/servers/{servidor-destino}
```

Guarda los valores:
- `appId` → CLIENT_ID
- `password` → CLIENT_SECRET
- `tenant` → TENANT_ID

#### Asignar Permisos en Azure SQL

```sql
-- Conectarse a la BD ORIGEN como admin y ejecutar:
CREATE USER [sql-migration-source-spn] FROM EXTERNAL PROVIDER;
ALTER ROLE db_datareader ADD MEMBER [sql-migration-source-spn];
ALTER ROLE db_ddladmin ADD MEMBER [sql-migration-source-spn];
GO

-- Conectarse a la BD DESTINO como admin y ejecutar:
CREATE USER [sql-migration-dest-spn] FROM EXTERNAL PROVIDER;
ALTER ROLE db_datawriter ADD MEMBER [sql-migration-dest-spn];
ALTER ROLE db_ddladmin ADD MEMBER [sql-migration-dest-spn];
GO
```

### Opción A: Usuario Federado

#### Exportar Base de Datos Completa

```bash
sqlpackage /Action:Export \
  /SourceServerName:servidor-origen.database.windows.net \
  /SourceDatabaseName:mi_base_datos \
  /SourceAuthentication:ActiveDirectoryInteractive \
  /SourceTrustServerCertificate:True \
  /TargetFile:backup_completo.bacpac
```

#### Importar Base de Datos Completa

```bash
sqlpackage /Action:Import \
  /SourceFile:backup_completo.bacpac \
  /TargetServerName:servidor-destino.database.windows.net \
  /TargetDatabaseName:mi_base_datos_nueva \
  /TargetAuthentication:ActiveDirectoryInteractive \
  /TargetTrustServerCertificate:True
```

#### Exportar Solo un Schema Específico

```bash
sqlpackage /Action:Extract \
  /SourceServerName:servidor-origen.database.windows.net \
  /SourceDatabaseName:mi_base_datos \
  /SourceAuthentication:ActiveDirectoryInteractive \
  /SourceTrustServerCertificate:True \
  /TargetFile:mi_schema.dacpac \
  /p:ExtractAllTableData=true \
  /p:TableData=dbo.Clientes \
  /p:TableData=dbo.Pedidos \
  /p:TableData=dbo.Productos
```

### Opción B: Service Principal (SPN)

#### Variables de Entorno

```bash
# SPN Origen
export SOURCE_CLIENT_ID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
export SOURCE_CLIENT_SECRET="tu-secreto-origen"
export SOURCE_TENANT_ID="yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"

# SPN Destino
export DEST_CLIENT_ID="zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz"
export DEST_CLIENT_SECRET="tu-secreto-destino"
export DEST_TENANT_ID="yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
```

#### Exportar con SPN Origen

```bash
sqlpackage /Action:Export \
  /SourceServerName:servidor-origen.database.windows.net \
  /SourceDatabaseName:mi_base_datos \
  /SourceAuthentication:ActiveDirectoryServicePrincipal \
  /SourceUser:${SOURCE_CLIENT_ID}@${SOURCE_TENANT_ID} \
  /SourcePassword:${SOURCE_CLIENT_SECRET} \
  /SourceTrustServerCertificate:True \
  /TargetFile:backup_spn.bacpac
```

#### Importar con SPN Destino

```bash
sqlpackage /Action:Import \
  /SourceFile:backup_spn.bacpac \
  /TargetServerName:servidor-destino.database.windows.net \
  /TargetDatabaseName:mi_base_datos_nueva \
  /TargetAuthentication:ActiveDirectoryServicePrincipal \
  /TargetUser:${DEST_CLIENT_ID}@${DEST_TENANT_ID} \
  /TargetPassword:${DEST_CLIENT_SECRET} \
  /TargetTrustServerCertificate:True
```

### Opción C: Migración Directa sin Archivo Intermedio

**Con Usuario Federado:**

```bash
sqlpackage /Action:Export \
  /SourceServerName:servidor-origen.database.windows.net \
  /SourceDatabaseName:bd_origen \
  /SourceAuthentication:ActiveDirectoryInteractive \
  /TargetFile:temp.bacpac && \
sqlpackage /Action:Import \
  /SourceFile:temp.bacpac \
  /TargetServerName:servidor-destino.database.windows.net \
  /TargetDatabaseName:bd_destino \
  /TargetAuthentication:ActiveDirectoryInteractive
```

**Con SPNs Diferentes (Origen y Destino):**

```bash
sqlpackage /Action:Export \
  /SourceServerName:servidor-origen.database.windows.net \
  /SourceDatabaseName:bd_origen \
  /SourceAuthentication:ActiveDirectoryServicePrincipal \
  /SourceUser:${SOURCE_CLIENT_ID}@${SOURCE_TENANT_ID} \
  /SourcePassword:${SOURCE_CLIENT_SECRET} \
  /TargetFile:migration.bacpac && \
sqlpackage /Action:Import \
  /SourceFile:migration.bacpac \
  /TargetServerName:servidor-destino.database.windows.net \
  /TargetDatabaseName:bd_destino \
  /TargetAuthentication:ActiveDirectoryServicePrincipal \
  /TargetUser:${DEST_CLIENT_ID}@${DEST_TENANT_ID} \
  /TargetPassword:${DEST_CLIENT_SECRET} && \
rm migration.bacpac
```

### Parámetros Útiles para Evitar Problemas con Permisos

```bash
# Excluir usuarios, logins y permisos
sqlpackage /Action:Export \
  /p:ExcludeObjectTypes=Users;Logins;Permissions;RoleMembership \
  /p:VerifyExtraction=false \
  # ... resto de parámetros
```

---

## bcp - Copia de Datos por Tabla

### Opción A: Usuario Federado

#### Exportar Tabla

```bash
# Formato nativo (más rápido)
bcp "SELECT * FROM dbo.Clientes" queryout clientes.dat \
  -S servidor-origen.database.windows.net \
  -d mi_base_datos \
  -G \
  -N \
  -C 65001

# Formato texto (más compatible)
bcp "SELECT * FROM dbo.Clientes" queryout clientes.txt \
  -S servidor-origen.database.windows.net \
  -d mi_base_datos \
  -G \
  -c \
  -t "|" \
  -r "\n"
```

**Flags importantes:**
- `-G`: Autenticación Azure AD/Entra (usuario federado)
- `-N`: Mantener valores NULL
- `-C 65001`: Codificación UTF-8
- `-c`: Modo carácter (texto plano)
- `-t`: Delimitador de columna
- `-r`: Delimitador de fila

#### Importar Tabla

```bash
bcp dbo.Clientes in clientes.dat \
  -S servidor-destino.database.windows.net \
  -d mi_base_datos_nueva \
  -G \
  -N \
  -C 65001 \
  -b 10000 \
  -h "TABLOCK"
```

**Flags de rendimiento:**
- `-b 10000`: Tamaño de lote (ajustar según tamaño de tabla)
- `-h "TABLOCK"`: Bloqueo de tabla para mejor rendimiento

### Opción B: Service Principal (SPN)

#### Variables de Entorno

```bash
export CLIENT_ID="tu-client-id"
export CLIENT_SECRET="tu-client-secret"
export TENANT_ID="tu-tenant-id"
```

#### Exportar con SPN

```bash
bcp "SELECT * FROM dbo.Pedidos" queryout pedidos.dat \
  -S servidor-origen.database.windows.net \
  -d mi_base_datos \
  -U ${CLIENT_ID}@${TENANT_ID} \
  -P ${CLIENT_SECRET} \
  -N \
  -C 65001
```

**Nota:** Para SPN usa `-U` y `-P` en lugar de `-G`

#### Importar con SPN Diferente

```bash
export DEST_CLIENT_ID="otro-client-id"
export DEST_CLIENT_SECRET="otro-client-secret"

bcp dbo.Pedidos in pedidos.dat \
  -S servidor-destino.database.windows.net \
  -d mi_base_datos_nueva \
  -U ${DEST_CLIENT_ID}@${TENANT_ID} \
  -P ${DEST_CLIENT_SECRET} \
  -N \
  -C 65001 \
  -b 5000
```

### Script Bash: Exportar Múltiples Tablas

```bash
#!/bin/bash

ORIGEN_SERVER="servidor-origen.database.windows.net"
ORIGEN_DB="bd_origen"
DEST_SERVER="servidor-destino.database.windows.net"
DEST_DB="bd_destino"

# Lista de tablas
TABLAS=(
  "dbo.Clientes"
  "dbo.Pedidos"
  "dbo.Productos"
  "ventas.Facturas"
)

# Exportar con usuario federado
for tabla in "${TABLAS[@]}"; do
  archivo="${tabla//./\_}.dat"
  echo "Exportando $tabla a $archivo..."
  
  bcp "SELECT * FROM $tabla" queryout "$archivo" \
    -S $ORIGEN_SERVER \
    -d $ORIGEN_DB \
    -G \
    -N \
    -C 65001
done

# Importar con usuario federado
for tabla in "${TABLAS[@]}"; do
  archivo="${tabla//./\_}.dat"
  echo "Importando $archivo a $tabla..."
  
  bcp "$tabla" in "$archivo" \
    -S $DEST_SERVER \
    -d $DEST_DB \
    -G \
    -N \
    -C 65001 \
    -b 10000 \
    -h "TABLOCK"
  
  # Limpiar archivo temporal
  rm "$archivo"
done

echo "Migración completada!"
```

### Script PowerShell: Con SPNs

```powershell
# Configuración
$SourceServer = "servidor-origen.database.windows.net"
$SourceDB = "bd_origen"
$DestServer = "servidor-destino.database.windows.net"
$DestDB = "bd_destino"

# SPN Origen
$SourceClientId = $env:SOURCE_CLIENT_ID
$SourceSecret = $env:SOURCE_CLIENT_SECRET
$TenantId = $env:TENANT_ID

# SPN Destino
$DestClientId = $env:DEST_CLIENT_ID
$DestSecret = $env:DEST_CLIENT_SECRET

# Lista de tablas
$Tablas = @(
    "dbo.Clientes",
    "dbo.Pedidos",
    "dbo.Productos"
)

foreach ($tabla in $Tablas) {
    $archivo = "$($tabla.Replace('.','_')).dat"
    
    Write-Host "Exportando $tabla..." -ForegroundColor Green
    
    # Exportar
    bcp "SELECT * FROM $tabla" queryout $archivo `
        -S $SourceServer `
        -d $SourceDB `
        -U "$SourceClientId@$TenantId" `
        -P $SourceSecret `
        -N `
        -C 65001
    
    Write-Host "Importando $tabla..." -ForegroundColor Yellow
    
    # Importar
    bcp $tabla in $archivo `
        -S $DestServer `
        -d $DestDB `
        -U "$DestClientId@$TenantId" `
        -P $DestSecret `
        -N `
        -C 65001 `
        -b 10000 `
        -h "TABLOCK"
    
    Remove-Item $archivo
}

Write-Host "Proceso completado!" -ForegroundColor Cyan
```

---

## sqlcmd - Scripts y Consultas

### Opción A: Usuario Federado

#### Ejecutar Query Simple

```bash
sqlcmd -S servidor-origen.database.windows.net \
  -d mi_base_datos \
  -G \
  -Q "SELECT COUNT(*) FROM dbo.Clientes"
```

#### Ejecutar Script SQL desde Archivo

```bash
sqlcmd -S servidor-destino.database.windows.net \
  -d mi_base_datos \
  -G \
  -i crear_schema.sql \
  -o resultado.log
```

#### Generar Script de Schema (DDL)

```bash
# Obtener CREATE TABLE de una tabla
sqlcmd -S servidor-origen.database.windows.net \
  -d mi_base_datos \
  -G \
  -Q "SET NOCOUNT ON; SELECT 'CREATE TABLE ' + SCHEMA_NAME(schema_id) + '.' + name FROM sys.tables WHERE name = 'Clientes'" \
  -o schema_clientes.sql -h -1
```

### Opción B: Service Principal

```bash
export CLIENT_ID="tu-client-id"
export CLIENT_SECRET="tu-client-secret"
export TENANT_ID="tu-tenant-id"

sqlcmd -S servidor-origen.database.windows.net \
  -d mi_base_datos \
  -U ${CLIENT_ID}@${TENANT_ID} \
  -P ${CLIENT_SECRET} \
  -Q "SELECT * FROM dbo.Clientes"
```

### Uso Interactivo

```bash
# Modo interactivo con usuario federado
sqlcmd -S servidor-origen.database.windows.net \
  -d mi_base_datos \
  -G

# Dentro de sqlcmd:
1> SELECT COUNT(*) FROM dbo.Pedidos;
2> GO
1> EXIT
```

### Script: Copiar Schema de Tablas

```bash
#!/bin/bash

ORIGEN_SERVER="servidor-origen.database.windows.net"
ORIGEN_DB="bd_origen"
SCHEMA="dbo"

# Listar todas las tablas del schema
sqlcmd -S $ORIGEN_SERVER -d $ORIGEN_DB -G -Q \
  "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='$SCHEMA'" \
  -o tablas.txt -h -1 -W

# Leer cada tabla y generar su DDL (simplificado)
while IFS= read -r tabla; do
  echo "Generando DDL para $SCHEMA.$tabla..."
  
  sqlcmd -S $ORIGEN_SERVER -d $ORIGEN_DB -G -Q \
    "EXEC sp_help '${SCHEMA}.${tabla}'" \
    -o "ddl_${tabla}.txt"
done < tablas.txt

echo "Scripts DDL generados!"
```

---

## Casos de Uso Completos

### Caso 1: Migración Completa con Usuario Federado

```bash
# 1. Exportar estructura y datos
sqlpackage /Action:Export \
  /SourceServerName:prod-server.database.windows.net \
  /SourceDatabaseName:produccion_db \
  /SourceAuthentication:ActiveDirectoryInteractive \
  /TargetFile:backup_prod.bacpac

# 2. Importar a desarrollo
sqlpackage /Action:Import \
  /SourceFile:backup_prod.bacpac \
  /TargetServerName:dev-server.database.windows.net \
  /TargetDatabaseName:desarrollo_db \
  /TargetAuthentication:ActiveDirectoryInteractive \
  /p:DatabaseEdition=Basic \
  /p:DatabaseServiceObjective=Basic

# 3. Verificar
sqlcmd -S dev-server.database.windows.net \
  -d desarrollo_db \
  -G \
  -Q "SELECT COUNT(*) AS TotalTablas FROM sys.tables"
```

### Caso 2: Migración de Schema Específico con SPNs Diferentes

```bash
# Variables
SOURCE_SPN_USER="11111111-1111-1111-1111-111111111111@tenant-id"
SOURCE_SPN_PASS="secreto-origen"
DEST_SPN_USER="22222222-2222-2222-2222-222222222222@tenant-id"
DEST_SPN_PASS="secreto-destino"

# 1. Exportar solo schema 'ventas'
sqlpackage /Action:Extract \
  /SourceServerName:origen.database.windows.net \
  /SourceDatabaseName:empresa_db \
  /SourceAuthentication:ActiveDirectoryServicePrincipal \
  /SourceUser:$SOURCE_SPN_USER \
  /SourcePassword:$SOURCE_SPN_PASS \
  /TargetFile:ventas_schema.dacpac \
  /p:ExtractAllTableData=true \
  /p:TableData=ventas.*

# 2. Crear schema en destino (si no existe)
sqlcmd -S destino.database.windows.net \
  -d empresa_db_nueva \
  -U $DEST_SPN_USER \
  -P $DEST_SPN_PASS \
  -Q "IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'ventas') EXEC('CREATE SCHEMA ventas')"

# 3. Publicar (solo para DACPAC, no BACPAC)
sqlpackage /Action:Publish \
  /SourceFile:ventas_schema.dacpac \
  /TargetServerName:destino.database.windows.net \
  /TargetDatabaseName:empresa_db_nueva \
  /TargetAuthentication:ActiveDirectoryServicePrincipal \
  /TargetUser:$DEST_SPN_USER \
  /TargetPassword:$DEST_SPN_PASS
```

### Caso 3: Copiar Solo Datos de Tablas Grandes con bcp

```bash
#!/bin/bash

# Tablas muy grandes que queremos copiar
TABLAS_GRANDES=(
  "logs.EventosAuditoria"
  "transacciones.Historico"
  "analytics.DatosRaw"
)

SOURCE_SERVER="big-data-origen.database.windows.net"
SOURCE_DB="warehouse_db"
DEST_SERVER="big-data-destino.database.windows.net"
DEST_DB="warehouse_db_replica"

for tabla in "${TABLAS_GRANDES[@]}"; do
  archivo="${tabla//./\_}.dat"
  
  echo "========================================="
  echo "Procesando: $tabla"
  echo "========================================="
  
  # Exportar en bloques con formato nativo (más rápido)
  bcp "$tabla" out "$archivo" \
    -S $SOURCE_SERVER \
    -d $SOURCE_DB \
    -G \
    -N \
    -n \
    -C RAW \
    -b 50000
  
  # Importar con paralelización
  bcp "$tabla" in "$archivo" \
    -S $DEST_SERVER \
    -d $DEST_DB \
    -G \
    -N \
    -n \
    -C RAW \
    -b 50000 \
    -h "TABLOCK,CHECK_CONSTRAINTS" \
    -m 10
  
  # Verificar conteo
  count_origen=$(sqlcmd -S $SOURCE_SERVER -d $SOURCE_DB -G \
    -Q "SELECT COUNT(*) FROM $tabla" -h -1 -W)
  
  count_destino=$(sqlcmd -S $DEST_SERVER -d $DEST_DB -G \
    -Q "SELECT COUNT(*) FROM $tabla" -h -1 -W)
  
  echo "Registros origen: $count_origen"
  echo "Registros destino: $count_destino"
  
  if [ "$count_origen" == "$count_destino" ]; then
    echo "✓ Verificación exitosa para $tabla"
    rm "$archivo"
  else
    echo "✗ ERROR: Diferencia en conteo para $tabla"
  fi
done
```

### Caso 4: Migración Incremental (Solo Datos Nuevos)

```bash
#!/bin/bash

# Exportar solo registros nuevos basados en timestamp
ULTIMA_FECHA="2024-01-01"

bcp "SELECT * FROM dbo.Pedidos WHERE FechaCreacion > '$ULTIMA_FECHA'" queryout pedidos_nuevos.dat \
  -S origen.database.windows.net \
  -d ventas_db \
  -G \
  -N \
  -C 65001

# Importar datos incrementales
bcp dbo.Pedidos in pedidos_nuevos.dat \
  -S destino.database.windows.net \
  -d ventas_db_replica \
  -G \
  -N \
  -C 65001 \
  -b 5000 \
  -h "TABLOCK"

rm pedidos_nuevos.dat
```

### Caso 5: Pipeline CI/CD con Azure DevOps y SPNs

```yaml
# azure-pipelines.yml

trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  - group: sql-migration-secrets  # Contiene SPNs

steps:
- task: Bash@3
  displayName: 'Instalar SqlPackage'
  inputs:
    targetType: 'inline'
    script: |
      wget https://aka.ms/sqlpackage-linux -O sqlpackage.zip
      unzip sqlpackage.zip -d sqlpackage
      chmod +x sqlpackage/sqlpackage

- task: Bash@3
  displayName: 'Exportar Base de Datos'
  inputs:
    targetType: 'inline'
    script: |
      ./sqlpackage/sqlpackage /Action:Export \
        /SourceServerName:$(SOURCE_SERVER) \
        /SourceDatabaseName:$(SOURCE_DB) \
        /SourceAuthentication:ActiveDirectoryServicePrincipal \
        /SourceUser:$(SOURCE_CLIENT_ID)@$(TENANT_ID) \
        /SourcePassword:$(SOURCE_CLIENT_SECRET) \
        /TargetFile:$(Build.ArtifactStagingDirectory)/backup.bacpac

- task: Bash@3
  displayName: 'Importar a Staging'
  inputs:
    targetType: 'inline'
    script: |
      ./sqlpackage/sqlpackage /Action:Import \
        /SourceFile:$(Build.ArtifactStagingDirectory)/backup.bacpac \
        /TargetServerName:$(DEST_SERVER) \
        /TargetDatabaseName:$(DEST_DB) \
        /TargetAuthentication:ActiveDirectoryServicePrincipal \
        /TargetUser:$(DEST_CLIENT_ID)@$(TENANT_ID) \
        /TargetPassword:$(DEST_CLIENT_SECRET)

- task: PublishBuildArtifacts@1
  displayName: 'Publicar Artifact BACPAC'
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'database-backup'
```

---

## Troubleshooting

### Error: "Login failed for user"

**Solución para Usuario Federado:**
```bash
# Asegúrate de usar -G (no -U ni -P)
bcp dbo.tabla out archivo.dat -S servidor.database.windows.net -d bd -G
```

**Solución para SPN:**
```bash
# Formato correcto: client_id@tenant_id
export USER="${CLIENT_ID}@${TENANT_ID}"
bcp dbo.tabla out archivo.dat -S servidor.database.windows.net -d bd -U $USER -P $CLIENT_SECRET
```

### Error: "Cannot open database requested by the login"

```sql
-- Verificar que el SPN tenga acceso a la BD
-- Ejecutar como admin en la BD específica:
CREATE USER [nombre-spn] FROM EXTERNAL PROVIDER;
ALTER ROLE db_datareader ADD MEMBER [nombre-spn];
ALTER ROLE db_datawriter ADD MEMBER [nombre-spn];
```

### Error: "SSL Provider: Certificate chain was issued by an authority that is not trusted"

```bash
# Agregar flag para confiar en certificado
sqlpackage /SourceTrustServerCertificate:True ...
# O para bcp/sqlcmd versión 18+:
sqlcmd -S servidor.database.windows.net -d bd -G -C
```

### Error: "A connection was successfully established... existing connection was forcibly closed"

Esto suele ocurrir con archivos grandes. Soluciones:

```bash
# 1. Aumentar timeout en SqlPackage
sqlpackage /Action:Export /p:CommandTimeout=3600 ...

# 2. Para bcp, exportar en lotes más pequeños
bcp "SELECT TOP 100000 * FROM tabla" queryout lote1.dat ...
bcp "SELECT TOP 100000 * FROM tabla WHERE id > 100000" queryout lote2.dat ...
```

### Error: "BACPAC includes users without login"

```bash
# Excluir usuarios y permisos del export
sqlpackage /Action:Export \
  /p:ExcludeObjectTypes=Users;Logins;Permissions;RoleMembership \
  ...
```

### Verificar Conectividad y Firewall

```bash
# Test de conectividad
sqlcmd -S servidor.database.windows.net -d master -G -Q "SELECT @@VERSION"

# Si falla, verificar:
# 1. Regla de firewall permite tu IP
# 2. "Allow Azure services" está habilitado
# 3. No hay NSG bloqueando puerto 1433
```

### Mejores Prácticas de Rendimiento

**Para bcp:**
```bash
# Ajustar tamaño de lote según tamaño de tabla:
# - Tablas pequeñas (<1M filas): -b 10000
# - Tablas medianas (1M-10M): -b 50000
# - Tablas grandes (>10M): -b 100000

# Usar formato nativo para mejor rendimiento
bcp tabla out archivo.dat -n -C RAW -b 100000

# Deshabilitar constraints temporalmente en destino
sqlcmd -Q "ALTER TABLE dbo.tabla NOCHECK CONSTRAINT ALL"
# ... importar datos ...
sqlcmd -Q "ALTER TABLE dbo.tabla CHECK CONSTRAINT ALL"
```

**Para SqlPackage:**
```bash
# Comprimir BACPAC para archivos grandes
sqlpackage /Action:Export /p:CompressionOption=Maximum ...

# Ajustar memoria y paralelismo
sqlpackage /MaxParallelism:8 /p:CommandTimeout=7200 ...
```

### Logs y Debugging

```bash
# SqlPackage con diagnósticos
sqlpackage /Action:Export /DiagnosticsFile:export.log /Diagnostics:True ...

# bcp con errores detallados
bcp tabla out archivo.dat -S servidor -d bd -G -e errores.log

# sqlcmd con output detallado
sqlcmd -S servidor -d bd -G -i script.sql -o output.log -r 1
```

---

## Comandos de Referencia Rápida

### SqlPackage - Cheat Sheet

```bash
# Export completo
sqlpackage /a:Export /ssn:servidor.db.windows.net /sdn:bd /tf:backup.bacpac /sa:ActiveDirectoryInteractive

# Import completo
sqlpackage /a:Import /sf:backup.bacpac /tsn:servidor.db.windows.net /tdn:bd /ta:ActiveDirectoryInteractive

# Extract (DACPAC - solo schema)
sqlpackage /a:Extract /ssn:servidor.db.windows.net /sdn:bd /tf:schema.dacpac /sa:ActiveDirectoryInteractive

# Publish (DACPAC)
sqlpackage /a:Publish /sf:schema.dacpac /tsn:servidor.db.windows.net /tdn:bd /ta:ActiveDirectoryInteractive
```

### bcp - Cheat Sheet

```bash
# Export tabla completa (usuario federado)
bcp dbo.tabla out datos.dat -S servidor.db.windows.net -d bd -G -N -C 65001

# Export con query (usuario federado)
bcp "SELECT * FROM dbo.tabla WHERE activo=1" queryout datos.dat -S servidor.db.windows.net -d bd -G -N

# Import (usuario federado)
bcp dbo.tabla in datos.dat -S servidor.db.windows.net -d bd -G -N -b 10000 -h "TABLOCK"

# Export con SPN
bcp dbo.tabla out datos.dat -S servidor.db.windows.net -d bd -U clientid@tenantid -P secret -N

# Format file (generar archivo de formato)
bcp dbo.tabla format nul -S servidor.db.windows.net -d bd -G -f tabla.fmt -c
```

### sqlcmd - Cheat Sheet

```bash
# Ejecutar query (usuario federado)
sqlcmd -S servidor.db.windows.net -d bd -G -Q "SELECT COUNT(*) FROM dbo.tabla"

# Ejecutar script (usuario federado)
sqlcmd -S servidor.db.windows.net -d bd -G -i script.sql -o resultado.log

# Modo interactivo (usuario federado)
sqlcmd -S servidor.db.windows.net -d bd -G

# Con SPN
sqlcmd -S servidor.db.windows.net -d bd -U clientid@tenantid -P secret -Q "SELECT @@VERSION"

# Variables en script
sqlcmd -S servidor.db.windows.net -d bd -G -v tabla="Clientes" -i script_con_variables.sql
```

---

## Recursos Adicionales

- [Documentación oficial de SqlPackage](https://learn.microsoft.com/sql/tools/sqlpackage/)
- [Documentación oficial de bcp](https://learn.microsoft.com/sql/tools/bcp-utility)
- [Documentación oficial de sqlcmd](https://learn.microsoft.com/sql/tools/sqlcmd/)
- [Azure SQL Authentication](https://learn.microsoft.com/azure/azure-sql/database/authentication-aad-overview)
- [Service Principal para Azure SQL](https://learn.microsoft.com/azure/azure-sql/database/authentication-aad-service-principal)

---

**Última actualización:** Febrero 2026
