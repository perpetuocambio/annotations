# Guía Completa de Diagramas Mermaid con Fondo Negro
*Explorando todos los tipos de diagramas con las mejores paletas de colores*

## Índice de Contenidos

1. [Configuración Base Universal](#configuración-base-universal)
2. [Flowchart - Diagramas de Flujo](#1-flowchart---diagramas-de-flujo)
3. [Sequence - Diagramas de Secuencia](#2-sequence---diagramas-de-secuencia)
4. [Class - Diagramas de Clase](#3-class---diagramas-de-clase)
5. [State - Diagramas de Estado](#4-state---diagramas-de-estado)
6. [Entity Relationship - Diagramas ER](#5-entity-relationship---diagramas-er)
7. [User Journey - Mapas de Experiencia](#6-user-journey---mapas-de-experiencia)
8. [Gantt - Cronogramas](#7-gantt---cronogramas)
9. [Pie - Gráficos Circulares](#8-pie---gráficos-circulares)
10. [Requirement - Diagramas de Requisitos](#9-requirement---diagramas-de-requisitos)
11. [Gitgraph - Flujos de Git](#10-gitgraph---flujos-de-git)
12. [C4Context - Arquitectura de Software](#11-c4context---arquitectura-de-software)
13. [Mindmaps - Mapas Mentales](#12-mindmaps---mapas-mentales)
14. [Timeline - Líneas de Tiempo](#13-timeline---líneas-de-tiempo)
15. [Sankey - Diagramas de Flujo](#14-sankey---diagramas-de-flujo)
16. [XYChart - Gráficos XY](#15-xychart---gráficos-xy)
17. [Block - Diagramas de Bloques](#16-block---diagramas-de-bloques)

---

## Configuración Base Universal

**Fondo Negro Standard**: `#000000`  
**Tema Base**: `dark` con `darkMode: true`

```javascript
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '[PRIMARIO]',
    'primaryTextColor': '[TEXTO]',
    'primaryBorderColor': '[BORDE]',
    'lineColor': '[LINEA]',
    'secondaryColor': '[SECUNDARIO]',
    'tertiaryColor': '[TERCIARIO]',
    'fontSize': '12px'
  }
}}%%
```

---

## 1. FLOWCHART - Diagramas de Flujo

**Paleta Recomendada**: **Cyber Blue** - Para lógica clara y flujos de proceso

### Configuración Cyber Blue
```javascript
'background': '#000000',
'primaryColor': '#00d4ff',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#0099cc',
'lineColor': '#00ffff',
'secondaryColor': '#0066ff',
'tertiaryColor': '#3366ff'
```

### Ejemplo: Proceso de Toma de Decisiones

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#00d4ff',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#0099cc',
    'lineColor': '#00ffff',
    'secondaryColor': '#0066ff',
    'tertiaryColor': '#3366ff',
    'fontSize': '12px'
  }
}}%%

flowchart TD
    A[Inicio del Proceso] --> B{¿Datos Suficientes?}
    B -->|Sí| C[Análisis de Datos]
    B -->|No| D[Recopilar Información]
    D --> B
    C --> E{¿Resultados Claros?}
    E -->|Sí| F[Implementar Solución]
    E -->|No| G[Análisis Adicional]
    G --> C
    F --> H[Monitorear Resultados]
    H --> I{¿Objetivos Cumplidos?}
    I -->|Sí| J[Proceso Completo]
    I -->|No| K[Ajustar Estrategia]
    K --> C
```

**Casos de Uso**: Procesos empresariales, algoritmos, workflows, diagramas de decisión

---

## 2. SEQUENCE - Diagramas de Secuencia

**Paleta Recomendada**: **Matrix Green** - Para interacciones temporales claras

### Configuración Matrix Green
```javascript
'background': '#000000',
'primaryColor': '#00ff41',
'primaryTextColor': '#00ff41',
'primaryBorderColor': '#00cc33',
'lineColor': '#00ff88',
'secondaryColor': '#66ff66',
'tertiaryColor': '#99ff99',
'sequenceActorBorder': '#00ff41',
'sequenceActorBkg': '#003300',
'sequenceNoteBkg': '#004400'
```

### Ejemplo: Sistema de Autenticación

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#00ff41',
    'primaryTextColor': '#00ff41',
    'primaryBorderColor': '#00cc33',
    'lineColor': '#00ff88',
    'secondaryColor': '#66ff66',
    'tertiaryColor': '#99ff99',
    'sequenceActorBorder': '#00ff41',
    'sequenceActorBkg': '#003300',
    'sequenceNoteBkg': '#004400',
    'fontSize': '11px'
  }
}}%%

sequenceDiagram
    participant U as Usuario
    participant A as App Frontend
    participant S as Servidor Auth
    participant D as Base de Datos
    
    U->>A: Ingresa credenciales
    A->>S: POST /login
    S->>D: Verificar usuario
    D-->>S: Usuario válido
    S->>S: Generar JWT token
    S-->>A: Token + datos usuario
    A-->>U: Acceso concedido
    
    Note over U,D: Proceso de autenticación completado
    
    U->>A: Solicita recurso protegido
    A->>S: GET /resource (con token)
    S->>S: Validar token
    alt Token válido
        S-->>A: Datos solicitados
        A-->>U: Mostrar recurso
    else Token inválido
        S-->>A: Error 401
        A-->>U: Redirigir a login
    end
```

**Casos de Uso**: APIs, comunicación entre sistemas, protocolos de red, interacciones usuario-sistema

---

## 3. CLASS - Diagramas de Clase

**Paleta Recomendada**: **Purple Haze** - Para estructuras y relaciones complejas

### Configuración Purple Haze
```javascript
'background': '#000000',
'primaryColor': '#9966ff',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#7744cc',
'lineColor': '#bb88ff',
'secondaryColor': '#cc99ff',
'tertiaryColor': '#6633cc'
```

### Ejemplo: Sistema de Gestión de Biblioteca

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#9966ff',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#7744cc',
    'lineColor': '#bb88ff',
    'secondaryColor': '#cc99ff',
    'tertiaryColor': '#6633cc',
    'fontSize': '11px'
  }
}}%%

classDiagram
    class Usuario {
        +String nombre
        +String email
        +String telefono
        +Date fechaRegistro
        +prestarLibro(libro)
        +devolverLibro(libro)
        +consultarHistorial()
    }
    
    class Libro {
        +String titulo
        +String autor
        +String isbn
        +Boolean disponible
        +Date fechaPublicacion
        +marcarPrestado()
        +marcarDisponible()
        +obtenerInfo()
    }
    
    class Prestamo {
        +Date fechaPrestamo
        +Date fechaVencimiento
        +Date fechaDevolucion
        +Estado estado
        +calcularMulta()
        +renovar()
        +finalizar()
    }
    
    class Biblioteca {
        +String nombre
        +String direccion
        +List~Libro~ catalogo
        +List~Usuario~ usuarios
        +agregarLibro(libro)
        +registrarUsuario(usuario)
        +procesarPrestamo(usuario, libro)
    }
    
    Usuario ||--o{ Prestamo : "realiza"
    Libro ||--o{ Prestamo : "se presta en"
    Biblioteca ||--o{ Libro : "contiene"
    Biblioteca ||--o{ Usuario : "tiene registrado"
    
    class Estado {
        <<enumeration>>
        ACTIVO
        VENCIDO
        DEVUELTO
        RENOVADO
    }
    
    Prestamo --> Estado
```

**Casos de Uso**: Diseño de software OOP, arquitectura de sistemas, modelado de datos, documentación técnica

---

## 4. STATE - Diagramas de Estado

**Paleta Recomendada**: **Fire Orange** - Para transiciones dinámicas y estados activos

### Configuración Fire Orange
```javascript
'background': '#000000',
'primaryColor': '#ff6600',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#cc5500',
'lineColor': '#ff9944',
'secondaryColor': '#ffaa66',
'tertiaryColor': '#ff8833'
```

### Ejemplo: Estados de un Pedido E-commerce

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#ff6600',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#cc5500',
    'lineColor': '#ff9944',
    'secondaryColor': '#ffaa66',
    'tertiaryColor': '#ff8833',
    'fontSize': '11px'
  }
}}%%

stateDiagram-v2
    [*] --> Carrito
    
    Carrito --> Checkout : Proceder pago
    Checkout --> PendientePago : Validar datos
    Checkout --> Carrito : Cancelar
    
    PendientePago --> Pagado : Pago exitoso
    PendientePago --> Cancelado : Pago fallido
    PendientePago --> Carrito : Timeout
    
    Pagado --> Procesando : Confirmar pedido
    Procesando --> Empaquetado : Preparar envío
    Empaquetado --> EnTransito : Enviar
    
    EnTransito --> Entregado : Entrega exitosa
    EnTransito --> Devuelto : Dirección incorrecta
    
    Entregado --> [*]
    Cancelado --> [*]
    Devuelto --> Procesando : Reenviar
    
    state Checkout {
        [*] --> ValidandoDatos
        ValidandoDatos --> ProcesandoPago
        ProcesandoPago --> [*]
    }
    
    state Procesando {
        [*] --> VerificarStock
        VerificarStock --> ReservarItems
        ReservarItems --> [*]
        
        VerificarStock --> SinStock : Items no disponibles
        SinStock --> [*]
    }
```

**Casos de Uso**: Máquinas de estado, flujos de trabajo, ciclos de vida de objetos, procesos de negocio

---

## 5. ENTITY RELATIONSHIP - Diagramas ER

**Paleta Recomendada**: **Electric Blue** - Para relaciones de datos claras

### Configuración Electric Blue
```javascript
'background': '#000000',
'primaryColor': '#0099ff',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#0077cc',
'lineColor': '#33aaff',
'secondaryColor': '#66bbff',
'tertiaryColor': '#0055aa'
```

### Ejemplo: Base de Datos de Red Social

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#0099ff',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#0077cc',
    'lineColor': '#33aaff',
    'secondaryColor': '#66bbff',
    'tertiaryColor': '#0055aa',
    'fontSize': '11px'
  }
}}%%

erDiagram
    USUARIO {
        int user_id PK
        string username UK
        string email UK
        string password_hash
        string nombre_completo
        date fecha_nacimiento
        datetime fecha_registro
        boolean activo
    }
    
    POST {
        int post_id PK
        int user_id FK
        text contenido
        datetime fecha_creacion
        datetime fecha_modificacion
        int likes_count
        int comments_count
        boolean visible
    }
    
    COMENTARIO {
        int comment_id PK
        int post_id FK
        int user_id FK
        int parent_comment_id FK
        text contenido
        datetime fecha_creacion
        boolean editado
    }
    
    LIKE {
        int like_id PK
        int user_id FK
        int post_id FK
        datetime fecha_like
    }
    
    AMISTAD {
        int friendship_id PK
        int user_id_1 FK
        int user_id_2 FK
        datetime fecha_solicitud
        datetime fecha_aceptacion
        string estado
    }
    
    GRUPO {
        int group_id PK
        string nombre
        text descripcion
        int admin_user_id FK
        datetime fecha_creacion
        boolean publico
    }
    
    MIEMBRO_GRUPO {
        int membership_id PK
        int group_id FK
        int user_id FK
        datetime fecha_union
        string rol
    }
    
    USUARIO ||--o{ POST : "crea"
    USUARIO ||--o{ COMENTARIO : "escribe"
    POST ||--o{ COMENTARIO : "tiene"
    COMENTARIO }o--o| COMENTARIO : "responde_a"
    USUARIO ||--o{ LIKE : "da"
    POST ||--o{ LIKE : "recibe"
    USUARIO ||--o{ AMISTAD : "participa_en"
    USUARIO ||--o{ GRUPO : "administra"
    USUARIO ||--o{ MIEMBRO_GRUPO : "pertenece"
    GRUPO ||--o{ MIEMBRO_GRUPO : "contiene"
```

**Casos de Uso**: Diseño de bases de datos, modelado de datos, documentación de esquemas, arquitectura de información

---

## 6. USER JOURNEY - Mapas de Experiencia

**Paleta Recomendada**: **Sunset Gradient** - Para experiencias emocionales

### Configuración Sunset Gradient
```javascript
'background': '#000000',
'primaryColor': '#ff7f50',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#ff6347',
'lineColor': '#ffa07a',
'secondaryColor': '#ffb347',
'tertiaryColor': '#ff8c69'
```

### Ejemplo: Experiencia de Compra Online

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#ff7f50',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#ff6347',
    'lineColor': '#ffa07a',
    'secondaryColor': '#ffb347',
    'tertiaryColor': '#ff8c69',
    'fontSize': '11px'
  }
}}%%

journey
    title Experiencia de Compra en E-commerce
    
    section Descubrimiento
        Buscar producto: 3: Cliente
        Ver anuncios: 2: Cliente
        Visitar sitio web: 4: Cliente
        Navegar categorías: 3: Cliente
        
    section Evaluación
        Ver detalles producto: 4: Cliente
        Leer reseñas: 3: Cliente
        Comparar precios: 2: Cliente
        Consultar disponibilidad: 4: Cliente, Sistema
        
    section Compra
        Agregar al carrito: 5: Cliente
        Crear cuenta: 3: Cliente
        Ingresar datos envío: 4: Cliente
        Seleccionar pago: 4: Cliente
        Confirmar pedido: 5: Cliente, Sistema
        
    section Post-Compra
        Recibir confirmación: 5: Cliente, Sistema
        Rastrear envío: 4: Cliente, Sistema
        Recibir producto: 5: Cliente
        Dejar reseña: 3: Cliente
        
    section Soporte
        Contactar servicio: 2: Cliente, Soporte
        Resolver dudas: 4: Cliente, Soporte
        Procesar devolución: 3: Cliente, Soporte
```

**Casos de Uso**: UX Design, análisis de experiencia cliente, mapas de touchpoints, diseño de servicios

---

## 7. GANTT - Cronogramas

**Paleta Recomendada**: **Professional Green** - Para planificación temporal clara

### Configuración Professional Green
```javascript
'background': '#000000',
'primaryColor': '#28a745',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#1e7e34',
'lineColor': '#40c057',
'cScale0': '#28a745',
'cScale1': '#20c997',
'cScale2': '#6f42c1',
'gridColor': '#495057'
```

### Ejemplo: Desarrollo de Aplicación Web

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#28a745',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#1e7e34',
    'lineColor': '#40c057',
    'cScale0': '#28a745',
    'cScale1': '#20c997',
    'cScale2': '#6f42c1',
    'gridColor': '#495057',
    'fontSize': '11px'
  }
}}%%

gantt
    title Desarrollo de Aplicación Web - Q1 2024
    dateFormat YYYY-MM-DD
    section Planificación
        Análisis requisitos    :done, des1, 2024-01-01, 2024-01-15
        Diseño arquitectura    :done, des2, after des1, 10d
        Prototipado UI/UX     :active, des3, 2024-01-20, 15d
        
    section Desarrollo Backend
        Configurar entorno    :done, dev1, 2024-01-25, 5d
        API REST             :dev2, after dev1, 20d
        Base de datos        :dev3, after dev1, 15d
        Autenticación        :dev4, after dev2, 10d
        
    section Desarrollo Frontend
        Componentes base     :front1, 2024-02-05, 15d
        Integración API      :front2, after front1, 12d
        Responsive design    :front3, after front2, 8d
        
    section Testing
        Unit tests           :test1, after dev4, 10d
        Integration tests    :test2, after front3, 8d
        User acceptance      :test3, after test2, 7d
        
    section Deploy
        Configurar servidor  :deploy1, after test3, 3d
        Deploy producción    :deploy2, after deploy1, 2d
        Monitoreo           :deploy3, after deploy2, 5d
```

**Casos de Uso**: Gestión de proyectos, planificación temporal, seguimiento de tareas, cronogramas empresariales

---

## 8. PIE - Gráficos Circulares

**Paleta Recomendada**: **Rainbow Spectrum** - Para datos categóricos diversos

### Configuración Rainbow Spectrum
```javascript
'background': '#000000',
'primaryColor': '#ff0080',
'primaryTextColor': '#ffffff',
'pie1': '#ff0080',
'pie2': '#ff8000',
'pie3': '#ffff00',
'pie4': '#80ff00',
'pie5': '#00ff80',
'pie6': '#00ffff',
'pie7': '#0080ff',
'pie8': '#8000ff',
'pie9': '#ff0040',
'pie10': '#ff4000',
'pie11': '#ff8040',
'pie12': '#ffff80'
```

### Ejemplo: Distribución de Tráfico Web

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#ff0080',
    'primaryTextColor': '#ffffff',
    'pie1': '#ff0080',
    'pie2': '#ff8000',
    'pie3': '#ffff00',
    'pie4': '#80ff00',
    'pie5': '#00ff80',
    'pie6': '#00ffff',
    'pie7': '#0080ff',
    'pie8': '#8000ff',
    'fontSize': '12px'
  }
}}%%

pie title Fuentes de Tráfico Web - Marzo 2024
    "Búsqueda Orgánica" : 35.2
    "Tráfico Directo" : 28.7
    "Redes Sociales" : 15.3
    "Email Marketing" : 8.9
    "Publicidad PPC" : 6.4
    "Referidos" : 3.8
    "Otros" : 1.7
```

### Ejemplo: Análisis de Ventas por Categoría

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#00d4ff',
    'primaryTextColor': '#ffffff',
    'pie1': '#00d4ff',
    'pie2': '#ff6b35',
    'pie3': '#f7931e',
    'pie4': '#34a853',
    'pie5': '#9c27b0',
    'pie6': '#e91e63',
    'fontSize': '12px'
  }
}}%%

pie title Ventas por Categoría - Q1 2024
    "Electrónicos" : 42.1
    "Ropa y Accesorios" : 26.8
    "Hogar y Jardín" : 12.7
    "Deportes" : 9.3
    "Libros" : 5.8
    "Otros" : 3.3
```

**Casos de Uso**: Análisis estadístico, reportes empresariales, visualización de proporciones, dashboards

---

## 9. REQUIREMENT - Diagramas de Requisitos

**Paleta Recomendada**: **Corporate Blue** - Para documentación formal

### Configuración Corporate Blue
```javascript
'background': '#000000',
'primaryColor': '#1e3a8a',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#1e40af',
'lineColor': '#3b82f6',
'secondaryColor': '#60a5fa',
'tertiaryColor': '#93c5fd'
```

### Ejemplo: Sistema de Gestión de Inventarios

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#1e3a8a',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#1e40af',
    'lineColor': '#3b82f6',
    'secondaryColor': '#60a5fa',
    'tertiaryColor': '#93c5fd',
    'fontSize': '11px'
  }
}}%%

requirementDiagram

    requirement Gestión_Inventario {
        id: 1
        text: El sistema debe permitir gestión completa de inventarios
        risk: Medium
        verifymethod: Test
    }

    element Sistema_Inventario {
        type: System
    }

    functionalRequirement Registro_Productos {
        id: 1.1
        text: Registrar nuevos productos con código único
        risk: Low
        verifymethod: Test
    }

    functionalRequirement Control_Stock {
        id: 1.2
        text: Monitorear niveles de stock en tiempo real
        risk: High
        verifymethod: Analysis
    }

    functionalRequirement Alertas_Stock {
        id: 1.3
        text: Generar alertas automáticas de stock mínimo
        risk: Medium
        verifymethod: Test
    }

    performanceRequirement Tiempo_Respuesta {
        id: 2.1
        text: Tiempo de respuesta menor a 2 segundos
        risk: Medium
        verifymethod: Test
    }

    interfaceRequirement API_Externa {
        id: 3.1
        text: Integración con sistemas de facturación externos
        risk: High
        verifymethod: Integration
    }

    Gestión_Inventario - contains -> Registro_Productos
    Gestión_Inventario - contains -> Control_Stock
    Gestión_Inventario - contains -> Alertas_Stock
    Gestión_Inventario - satisfies -> Tiempo_Respuesta
    Sistema_Inventario - implements -> Gestión_Inventario
    Sistema_Inventario - implements -> API_Externa
```

**Casos de Uso**: Ingeniería de software, documentación de proyectos, análisis de sistemas, especificaciones técnicas

---

## 10. GITGRAPH - Flujos de Git

**Paleta Recomendada**: **Developer Dark** - Para workflows de desarrollo

### Configuración Developer Dark
```javascript
'background': '#000000',
'primaryColor': '#f78166',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#f25022',
'lineColor': '#7fb069',
'git0': '#f78166',
'git1': '#7fb069',
'git2': '#4c956c',
'git3': '#2f9599',
'git4': '#61a5c2',
'git5': '#a9c9dd',
'git6': '#c9ada7',
'git7': '#f2cc8f'
```

### Ejemplo: Flujo de Trabajo Feature Branch

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#f78166',
    'primaryTextColor': '#ffffff',
    'git0': '#f78166',
    'git1': '#7fb069',
    'git2': '#4c956c',
    'git3': '#2f9599',
    'git4': '#61a5c2',
    'fontSize': '11px'
  }
}}%%

gitgraph
    commit id: "Initial commit"
    commit id: "Setup project structure"
    
    branch develop
    checkout develop
    commit id: "Add base configuration"
    commit id: "Setup testing framework"
    
    branch feature/user-auth
    checkout feature/user-auth
    commit id: "Add login component"
    commit id: "Implement authentication"
    commit id: "Add password reset"
    
    checkout develop
    merge feature/user-auth
    commit id: "Update documentation"
    
    branch feature/dashboard
    checkout feature/dashboard
    commit id: "Create dashboard layout"
    commit id: "Add charts component"
    
    checkout develop
    branch hotfix/security-patch
    checkout hotfix/security-patch
    commit id: "Fix security vulnerability"
    
    checkout main
    merge hotfix/security-patch
    commit id: "v1.0.1 - Security patch"
    
    checkout develop
    merge hotfix/security-patch
    merge feature/dashboard
    
    checkout main
    merge develop
    commit id: "v1.1.0 - Dashboard release"
```

**Casos de Uso**: Control de versiones, workflows de desarrollo, documentación de releases, gestión de branches

---

## 11. C4CONTEXT - Arquitectura de Software

**Paleta Recomendada**: **Architecture Gray** - Para diagramas técnicos profesionales

### Configuración Architecture Gray
```javascript
'background': '#000000',
'primaryColor': '#6c757d',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#495057',
'lineColor': '#adb5bd',
'secondaryColor': '#74b9ff',
'tertiaryColor': '#00b894'
```

### Ejemplo: Contexto de Sistema E-commerce

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#6c757d',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#495057',
    'lineColor': '#adb5bd',
    'secondaryColor': '#74b9ff',
    'tertiaryColor': '#00b894',
    'fontSize': '11px'
  }
}}%%

C4Context
    title Contexto del Sistema E-commerce

    Person(cliente, "Cliente", "Usuario que realiza compras online")
    Person(admin, "Administrador", "Gestiona productos y pedidos")
    
    System(ecommerce, "Sistema E-commerce", "Plataforma de venta online con gestión de inventarios")
    
    System_Ext(payment, "Pasarela de Pago", "Procesa pagos con tarjeta")
    System_Ext(shipping, "Sistema Envíos", "Gestiona logística y tracking")
    System_Ext(email, "Servicio Email", "Envía notificaciones y confirmaciones")
    System_Ext(analytics, "Google Analytics", "Tracking de comportamiento usuario")
    
    Rel(cliente, ecommerce, "Navega, compra productos", "HTTPS")
    Rel(admin, ecommerce, "Gestiona catálogo, pedidos", "HTTPS")
    
    Rel(ecommerce, payment, "Procesa pagos", "API REST")
    Rel(ecommerce, shipping, "Crea envíos", "API REST")
    Rel(ecommerce, email, "Envía emails", "SMTP")
    Rel(ecommerce, analytics, "Envía eventos", "JavaScript")
    
    UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="1")
```

**Casos de Uso**: Arquitectura de sistemas, documentación técnica, diseño de microservicios, diagramas de contexto

---

## 12. MINDMAPS - Mapas Mentales

**Paleta Recomendada**: **Creative Rainbow** - Para brainstorming y creatividad

### Configuración Creative Rainbow
```javascript
'background': '#000000',
'primaryColor': '#ff6b6b',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#ee5a52',
'lineColor': '#4ecdc4',
'secondaryColor': '#45b7d1',
'tertiaryColor': '#f9ca24',
'quaternaryColor': '#6c5ce7',
'primaryColorLight': '#ffeaa7'
```

### Ejemplo: Estrategia de Marketing Digital

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#ff6b6b',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#ee5a52',
    'lineColor': '#4ecdc4',
    'secondaryColor': '#45b7d1',
    'tertiaryColor': '#f9ca24',
    'fontSize': '12px'
  }
}}%%

mindmap
  root)Marketing Digital(
    SEO
      Keywords Research
      Content Optimization
      Link Building
      Technical SEO
    
    SEM/PPC
      Google Ads
      Facebook Ads
      LinkedIn Ads
      Retargeting
      
    Content Marketing
      Blog Posts
      Videos
      Infografías
      Podcasts
      Webinars
      
    Social Media
      Facebook
      Instagram
      Twitter
      LinkedIn
      TikTok
      YouTube
      
    Email Marketing
      Newsletters
      Automation
      Segmentación
      A/B Testing
      
    Analytics
      Google Analytics
      Heat Maps
      Conversion Tracking
      KPI Dashboards
```

### Ejemplo: Planificación de Proyecto de Software

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#6c5ce7',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#5f3dc4',
    'lineColor': '#00b894',
    'secondaryColor': '#00cec9',
    'tertiaryColor': '#fdcb6e',
    'fontSize': '11px'
  }
}}%%

mindmap
  root((Proyecto App Mobile))
    Investigación
      Análisis Mercado
      Competencia
      User Research
      Personas
      
    Diseño
      Wireframes
      UI/UX Design
      Prototipo
      Design System
      
    Desarrollo
      Frontend
        React Native
        State Management
        Navigation
      Backend
        Node.js API
        Base de Datos
        Authentication
      Testing
        Unit Tests
        Integration Tests
        E2E Tests
        
    Deploy
      CI/CD Pipeline
      App Store
      Google Play
      Monitoring
      
    Marketing
      Landing Page
      ASO
      Social Media
      PR Campaign
```

**Casos de Uso**: Brainstorming, planificación estratégica, organización de ideas, mapas conceptuales

---

## 13. TIMELINE - Líneas de Tiempo

**Paleta Recomendada**: **Chronos Gold** - Para eventos temporales elegantes

### Configuración Chronos Gold
```javascript
'background': '#000000',
'primaryColor': '#ffd700',
'primaryTextColor': '#000000',
'primaryBorderColor': '#ffcc00',
'lineColor': '#ffa500',
'secondaryColor': '#ff8c00',
'tertiaryColor': '#ffb347'
```

### Ejemplo: Evolución de la Web

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#ffd700',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#ffcc00',
    'lineColor': '#ffa500',
    'secondaryColor': '#ff8c00',
    'tertiaryColor': '#ffb347',
    'fontSize': '11px'
  }
}}%%

timeline
    title Evolución de las Tecnologías Web
    
    1989 : World Wide Web : Tim Berners-Lee crea la primera propuesta de la WWW
    
    1993 : Primer navegador gráfico : Mosaic revoluciona la navegación web
    
    1995 : JavaScript nace : Brendan Eich crea JavaScript en Netscape
         : PHP se lanza : Rasmus Lerdorf desarrolla PHP
    
    1996 : CSS introducido : Hojas de estilo en cascada para diseño web
    
    1999 : AJAX emerge : XMLHttpRequest permite páginas dinámicas
    
    2004 : Web 2.0 era : Redes sociales y contenido generado por usuarios
    
    2006 : jQuery released : Simplifica manipulación DOM y AJAX
    
    2009 : Node.js launch : JavaScript del lado del servidor
    
    2010 : HTML5 standard : Nueva era de aplicaciones web ricas
         : Angular.js born : Google lanza el primer framework SPA mayor
    
    2013 : React.js released : Facebook revoluciona el desarrollo frontend
    
    2014 : Vue.js created : Evan You desarrolla Vue.js
    
    2016 : Progressive Web Apps : Google introduce PWAs
    
    2020 : JAMstack boom : Arquitecturas modernas con API, Markup y JavaScript
    
    2023 : AI Integration : ChatGPT y IA generativa transforman el desarrollo web
```

### Ejemplo: Roadmap de Producto

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#00d4ff',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#0099cc',
    'lineColor': '#33aaff',
    'secondaryColor': '#66bbff',
    'fontSize': '12px'
  }
}}%%

timeline
    title Roadmap Plataforma E-learning 2024
    
    section Q1 2024
        Enero : MVP Launch : Lanzamiento versión básica con cursos y usuarios
        Febrero : Mobile App : App iOS y Android con funciones core
        Marzo : Gamification : Sistema de badges y puntos para engagement
    
    section Q2 2024
        Abril : Live Streaming : Clases en vivo con interacción estudiantes
        Mayo : Advanced Analytics : Dashboard detallado para instructores
        Junio : Marketplace : Tienda de cursos de terceros
    
    section Q3 2024
        Julio : AI Recommendations : Sistema de recomendación personalizado
        Agosto : Certificates : Certificados verificables blockchain
        Septiembre : Enterprise Suite : Herramientas para empresas y equipos
    
    section Q4 2024
        Octubre : VR/AR Support : Experiencias inmersivas para ciertos cursos
        Noviembre : Global Expansion : Multi-idioma y localización
        Diciembre : API Platform : API pública para integraciones terceros
```

**Casos de Uso**: Historias corporativas, roadmaps de producto, cronologías históricas, planificación temporal

---

## 14. SANKEY - Diagramas de Flujo

**Paleta Recomendada**: **Flow Spectrum** - Para visualizar flujos de datos/energía

### Configuración Flow Spectrum
```javascript
'background': '#000000',
'primaryColor': '#00ffff',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#00cccc',
'lineColor': '#40e0d0',
'secondaryColor': '#48d1cc',
'tertiaryColor': '#20b2aa'
```

### Ejemplo: Flujo de Energía en Empresa

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#00ffff',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#00cccc',
    'lineColor': '#40e0d0',
    'secondaryColor': '#48d1cc',
    'tertiaryColor': '#20b2aa',
    'fontSize': '11px'
  }
}}%%

sankey-beta
    Energía Total,Electricidad,150
    Energía Total,Gas Natural,80
    Energía Total,Renovables,70
    
    Electricidad,Oficinas,60
    Electricidad,Producción,70
    Electricidad,Servidores,20
    
    Gas Natural,Calefacción,50
    Gas Natural,Producción,30
    
    Renovables,Oficinas,20
    Renovables,Producción,35
    Renovables,Venta Red,15
    
    Oficinas,CO2 Oficinas,40
    Oficinas,Eficiencia,40
    
    Producción,CO2 Industrial,60
    Producción,Productos,75
    
    Servidores,CO2 IT,15
    Servidores,Servicios Digital,5
```

### Ejemplo: Flujo de Usuarios en Aplicación

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#ff6b35',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#e55a2b',
    'lineColor': '#ff8c42',
    'secondaryColor': '#ffa62b',
    'fontSize': '11px'
  }
}}%%

sankey-beta
    Visitantes,Landing Page,10000
    Visitantes,Búsqueda Orgánica,8000
    Visitantes,Redes Sociales,5000
    Visitantes,Email Marketing,3000
    
    Landing Page,Registro,2500
    Landing Page,Abandono,7500
    
    Búsqueda Orgánica,Artículos Blog,4000
    Búsqueda Orgánica,Productos,3000
    Búsqueda Orgánica,Registro,1000
    
    Redes Sociales,Compartir,2000
    Redes Sociales,Registro,1500
    Redes Sociales,Abandono,1500
    
    Email Marketing,Conversión,1800
    Email Marketing,Unsuscribe,200
    Email Marketing,Abandono,1000
    
    Registro,Usuario Activo,3500
    Registro,Usuario Inactivo,1500
    
    Usuario Activo,Compra,1400
    Usuario Activo,Trial,2100
    
    Compra,Cliente Recurrente,1000
    Compra,Cliente Único,400
```

**Casos de Uso**: Análisis de flujos, visualización de procesos, análisis de conversión, diagramas energéticos

---

## 15. XYCHART - Gráficos XY

**Paleta Recomendada**: **Data Viz Blue** - Para análisis estadístico claro

### Configuración Data Viz Blue
```javascript
'background': '#000000',
'primaryColor': '#1f77b4',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#1a6ba8',
'lineColor': '#aec7e8',
'secondaryColor': '#ff7f0e',
'tertiaryColor': '#2ca02c'
```

### Ejemplo: Análisis de Rendimiento Web

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#1f77b4',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#1a6ba8',
    'lineColor': '#aec7e8',
    'secondaryColor': '#ff7f0e',
    'tertiaryColor': '#2ca02c',
    'fontSize': '11px'
  }
}}%%

xychart-beta
    title "Rendimiento del Sitio Web - Últimos 6 meses"
    x-axis [Ene, Feb, Mar, Abr, May, Jun]
    y-axis "Tiempo (segundos)" 0 --> 10
    line "Tiempo de Carga" [2.3, 2.1, 1.8, 1.9, 1.6, 1.4]
    line "Time to Interactive" [4.5, 4.2, 3.8, 3.9, 3.4, 3.1]
    line "First Contentful Paint" [1.2, 1.1, 0.9, 1.0, 0.8, 0.7]
```

### Ejemplo: Crecimiento de Usuarios

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#2ca02c',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#229922',
    'lineColor': '#98df8a',
    'secondaryColor': '#d62728',
    'tertiaryColor': '#ff7f0e',
    'fontSize': '11px'
  }
}}%%

xychart-beta
    title "Crecimiento de Base de Usuarios - 2024"
    x-axis [Q1, Q2, Q3, Q4]
    y-axis "Usuarios (miles)" 0 --> 500
    bar "Usuarios Totales" [120, 180, 280, 420]
    line "Usuarios Activos" [85, 140, 210, 340]
    line "Usuarios Premium" [12, 25, 45, 78]
```

**Casos de Uso**: Análisis de datos, reportes de KPIs, gráficos estadísticos, dashboards de métricas

---

## 16. BLOCK - Diagramas de Bloques

**Paleta Recomendada**: **System Architecture** - Para diagramas técnicos modulares

### Configuración System Architecture
```javascript
'background': '#000000',
'primaryColor': '#4a90e2',
'primaryTextColor': '#ffffff',
'primaryBorderColor': '#357abd',
'lineColor': '#7bb3f0',
'secondaryColor': '#f5a623',
'tertiaryColor': '#bd10e0'
```

### Ejemplo: Arquitectura de Microservicios

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#4a90e2',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#357abd',
    'lineColor': '#7bb3f0',
    'secondaryColor': '#f5a623',
    'tertiaryColor': '#bd10e0',
    'fontSize': '10px'
  }
}}%%

block-beta
columns 3

  block:frontend:2
    A["Web Frontend<br/>React.js"]
    B["Mobile App<br/>React Native"]
  end
  
  C["Load Balancer<br/>NGINX"]

  block:gateway:3
    D["API Gateway<br/>Kong"]
  end

  block:services:3
    E["User Service<br/>Node.js"]
    F["Product Service<br/>Java"]
    G["Order Service<br/>Python"]
  end

  block:databases:3
    H["Users DB<br/>PostgreSQL"]
    I["Products DB<br/>MongoDB"]
    J["Orders DB<br/>MySQL"]
  end

  block:infrastructure:3
    K["Message Queue<br/>RabbitMQ"]
    L["Cache<br/>Redis"]
    M["File Storage<br/>AWS S3"]
  end

  A --> C
  B --> C
  C --> D
  D --> E
  D --> F
  D --> G
  E --> H
  F --> I
  G --> J
  E --> L
  F --> L
  G --> K
  F --> M
```

### Ejemplo: Sistema de Procesamiento de Datos

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#000000',
    'primaryColor': '#bd10e0',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#9a0fb0',
    'lineColor': '#d63af0',
    'secondaryColor': '#00d4aa',
    'tertiaryColor': '#ffa500',
    'fontSize': '11px'
  }
}}%%

block-beta
columns 4

  block:input:4
    A["Data Sources"]
    B["APIs"]
    C["Files"]
    D["Streams"]
  end

  block:ingestion:2
    E["Data Ingestion<br/>Apache Kafka"]
    F["ETL Pipeline<br/>Apache Airflow"]
  end
  
  block:processing:2
    G["Stream Processing<br/>Apache Spark"]
    H["Batch Processing<br/>Hadoop"]
  end

  block:storage:4
    I["Data Lake<br/>AWS S3"]
    J["Data Warehouse<br/>Snowflake"]
    K["Real-time DB<br/>Cassandra"]
    L["Cache Layer<br/>Redis"]
  end

  block:analytics:4
    M["BI Tools<br/>Tableau"]
    N["ML Platform<br/>SageMaker"]
    O["Monitoring<br/>Grafana"]
    P["APIs<br/>FastAPI"]
  end

  A --> E
  B --> E
  C --> F
  D --> E
  E --> G
  F --> H
  G --> I
  G --> K
  H --> J
  I --> M
  J --> M
  K --> N
  L --> O
  J --> P
```

**Casos de Uso**: Arquitecturas de sistema, diagramas de infraestructura, modelos de datos, diseño de redes

---

## Guía de Selección de Paletas por Contexto

### 🔧 **Desarrollo y Tecnología**
- **Flowchart**: Cyber Blue - Lógica y procesos claros
- **Sequence**: Matrix Green - Comunicación entre sistemas
- **Class**: Purple Haze - Estructuras complejas
- **Gitgraph**: Developer Dark - Workflows de código

### 📊 **Análisis y Datos**
- **Pie**: Rainbow Spectrum - Datos categóricos diversos
- **XYChart**: Data Viz Blue - Análisis estadístico
- **Sankey**: Flow Spectrum - Flujos de información
- **Gantt**: Professional Green - Gestión temporal

### 🏢 **Empresa y Negocios**
- **User Journey**: Sunset Gradient - Experiencias emocionales
- **Requirement**: Corporate Blue - Documentación formal
- **Timeline**: Chronos Gold - Eventos importantes
- **C4Context**: Architecture Gray - Sistemas empresariales

### 🎨 **Creatividad y Estrategia**
- **Mindmap**: Creative Rainbow - Brainstorming libre
- **State**: Fire Orange - Transiciones dinámicas
- **Block**: System Architecture - Módulos técnicos
- **ER**: Electric Blue - Relaciones de datos

## Tips Finales de Implementación

### 1. **Consistencia Visual**
```javascript
// Usar la misma paleta para diagramas relacionados
const paletaProyecto = {
  'background': '#000000',
  'primaryColor': '#00d4ff',
  'primaryTextColor': '#ffffff',
  // ... resto de configuración
};
```

### 2. **Adaptación Contextual**
- **Presentaciones ejecutivas**: Colores corporativos suaves
- **Documentación técnica**: Paletas contrastantes y claras  
- **Workshops creativos**: Colores vibrantes y energéticos

### 3. **Accesibilidad**
- Mantener contraste mínimo 4.5:1 para texto
- No depender solo del color para información crítica
- Probar con simuladores de daltonismo

### 4. **Exportación y Compartir**
- Los diagramas mantienen el fondo negro al exportar a SVG
- Para presentaciones, considerar versión con fondo adaptable
- Documentar la paleta usada para futura referencia

---

**¿Qué tipo de diagrama necesitas crear?** Esta guía te ayudará a elegir tanto el formato como la paleta más adecuada para tu contexto específico, manteniendo siempre el elegante fondo negro como base visual consistente.