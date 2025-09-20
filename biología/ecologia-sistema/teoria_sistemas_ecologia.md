# 1.2 Teoría General de Sistemas Aplicada a la Ecología

## Fundamentos de la Teoría General de Sistemas

La **Teoría General de Sistemas** (TGS), desarrollada por Ludwig von Bertalanffy en los años 1940-1950, proporciona el marco conceptual fundamental para entender sistemas complejos en todas las disciplinas científicas. Su aplicación a la ecología ha revolucionado nuestra comprensión de los fenómenos ecológicos como manifestaciones de sistemas dinámicos interconectados.

### Principios Fundamentales de la TGS

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#3b4252',
    'primaryColor': '#88c0d0',
    'primaryTextColor': '#d8dee9',
    'primaryBorderColor': '#5e81ac',
    'lineColor': '#81a1c1',
    'secondaryColor': '#bf616a',
    'tertiaryColor': '#a3be8c',
    'fontSize': '14px'
  }
}}%%

graph TB
    subgraph "PRINCIPIOS FUNDAMENTALES TGS"
        A[Holismo<br/>El todo > suma de partes]
        B[Jerarquía<br/>Niveles organizacionales]
        C[Emergencia<br/>Propiedades nuevas]
        D[Teleología<br/>Propósito y dirección]
        E[Equifinalidad<br/>Múltiples vías al mismo estado]
        F[Isomorfismo<br/>Patrones similares entre sistemas]
    end
    
    subgraph "APLICACIÓN ECOLÓGICA"
        A --> A1[Ecosistemas como totalidades<br/>funcionales integradas]
        B --> B1[Organismo → Población<br/>→ Comunidad → Ecosistema]
        C --> C1[Autoorganización<br/>Autorregulación sistémica]
        D --> D1[Sucesión dirigida<br/>Optimización energética]
        E --> E1[Múltiples vías sucesionales<br/>Estados alternativos]
        F --> F1[Patrones fractales<br/>Leyes de escalamiento]
    end
```

## Conceptos Básicos: Sistema, Elemento, Estructura, Función

### Definiciones Fundamentales

| Concepto | Definición | Ejemplo Ecológico | Propiedades Clave |
|----------|------------|-------------------|-------------------|
| **Sistema** | Conjunto organizado de elementos interrelacionados que funcionan como totalidad | Bosque templado | Límites definidos<br/>Propósito específico<br/>Comportamiento emergente |
| **Elemento** | Componentes individuales del sistema | Especies, individuos, recursos abióticos | Funciones específicas<br/>Interacciones múltiples<br/>Propiedades inherentes |
| **Estructura** | Patrón de organización y relaciones entre elementos | Redes tróficas, distribución espacial | Estabilidad relativa<br/>Jerarquía<br/>Conectividad |
| **Función** | Procesos y actividades que mantienen el sistema | Flujo energético, ciclos de nutrientes | Dinámicas temporales<br/>Eficiencia<br/>Retroalimentación |

### Relaciones Sistema-Elemento-Estructura-Función

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#3b4252',
    'primaryColor': '#88c0d0',
    'primaryTextColor': '#d8dee9',
    'primaryBorderColor': '#5e81ac',
    'lineColor': '#81a1c1',
    'secondaryColor': '#bf616a',
    'tertiaryColor': '#a3be8c',
    'fontSize': '12px'
  }
}}%%

graph LR
    subgraph "SISTEMA ECOLÓGICO"
        S[SISTEMA<br/>Ecosistema de laguna]
    end
    
    subgraph "ELEMENTOS"
        E1[Productores<br/>Fitoplancton, macrofitas]
        E2[Consumidores<br/>Zooplancton, peces, aves]
        E3[Descomponedores<br/>Bacterias, hongos]
        E4[Abióticos<br/>Agua, sedimentos, nutrientes]
    end
    
    subgraph "ESTRUCTURA"
        ST1[Red trófica<br/>Quién come a quién]
        ST2[Distribución espacial<br/>Zonas litorales/pelágicas]
        ST3[Estratificación<br/>Vertical del agua]
        ST4[Ciclado temporal<br/>Estacional]
    end
    
    subgraph "FUNCIONES"
        F1[Producción primaria<br/>Fotosíntesis]
        F2[Transferencia energética<br/>Entre niveles tróficos]
        F3[Ciclado de nutrientes<br/>N, P, C]
        F4[Regulación<br/>pH, O₂, temperatura]
    end
    
    S --> E1
    S --> E2
    S --> E3
    S --> E4
    
    E1 -.-> ST1
    E2 -.-> ST2
    E3 -.-> ST3
    E4 -.-> ST4
    
    ST1 --> F1
    ST2 --> F2
    ST3 --> F3
    ST4 --> F4
    
    F1 -.-> S
    F2 -.-> S
    F3 -.-> S
    F4 -.-> S
```

## Propiedades Emergentes de los Sistemas

### Características de la Emergencia

Las **propiedades emergentes** son características que surgen de la interacción entre elementos del sistema y que no pueden predecirse estudiando los componentes individualmente. En ecología, estas propiedades son fundamentales para entender el comportamiento de los ecosistemas.

### Tipos de Emergencia en Sistemas Ecológicos

| Tipo de Emergencia | Definición | Ejemplos Ecológicos | Nivel de Complejidad |
|-------------------|------------|---------------------|---------------------|
| **Débil** | Propiedades predecibles desde componentes | Biomasa total de un ecosistema | Aditiva |
| **Fuerte** | Propiedades impredecibles, requieren interacciones | Autoorganización en enjambres | Sinérgica |
| **Radical** | Propiedades que cambian las reglas del sistema | Transiciones de estado ecosistémico | Transformativa |

### Mecanismos de Emergencia

**Fórmula de Emergencia Sistémica**:
```
E = f(C₁, C₂, ..., Cₙ, I₁₂, I₁₃, ..., Iₙₘ)
```
Donde:
- E = propiedad emergente
- C = componentes individuales  
- I = interacciones entre componentes

**Umbral de Emergencia**:
```
E_threshold = Σ(Cᵢ × Iᵢⱼ) > K
```
Donde K es el umbral crítico para la emergencia

### Ejemplos de Propiedades Emergentes

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#3b4252',
    'primaryColor': '#88c0d0',
    'primaryTextColor': '#d8dee9',
    'primaryBorderColor': '#5e81ac',
    'lineColor': '#81a1c1',
    'secondaryColor': '#bf616a',
    'tertiaryColor': '#a3be8c',
    'fontSize': '13px'
  }
}}%%

graph TB
    subgraph "COMPONENTES INDIVIDUALES"
        C1[Especies individuales<br/>Comportamientos básicos<br/>Necesidades fisiológicas]
        C2[Recursos abióticos<br/>Disponibilidad<br/>Distribución espacial]
        C3[Procesos físicos<br/>Flujos de agua<br/>Ciclos térmicos]
    end
    
    subgraph "INTERACCIONES"
        I1[Competencia<br/>Predación<br/>Mutualismo]
        I2[Modificación hábitat<br/>Ingeniería ecosistémica<br/>Efectos cascada]
        I3[Retroalimentaciones<br/>Ciclos biogeoquímicos<br/>Regulación climática]
    end
    
    subgraph "PROPIEDADES EMERGENTES"
        E1[Diversidad funcional<br/>Mayor eficiencia uso recursos<br/>Estabilidad comunitaria]
        E2[Autoorganización espacial<br/>Patrones de vegetación<br/>Zonación ecosistémica]
        E3[Resiliencia sistémica<br/>Capacidad adaptativa<br/>Estados alternativos]
        E4[Servicios ecosistémicos<br/>Regulación climática<br/>Purificación agua]
    end
    
    C1 --> I1
    C2 --> I2  
    C3 --> I3
    
    I1 --> E1
    I2 --> E2
    I3 --> E3
    I1 --> E4
    I2 --> E4
    I3 --> E4
```

## Jerarquía de Sistemas Ecológicos

### Niveles de Organización Biológica

La jerarquía ecológica representa diferentes niveles de organización, cada uno con propiedades emergentes específicas y escalas espacio-temporales características.

| Nivel | Escala Espacial | Escala Temporal | Propiedades Emergentes | Procesos Dominantes |
|-------|----------------|-----------------|----------------------|-------------------|
| **Moléculas** | nm - μm | ns - ms | Estructura química | Reacciones enzimáticas |
| **Células** | μm - mm | ms - min | Metabolismo | Respiración, fotosíntesis |
| **Organismos** | mm - m | min - años | Comportamiento, fisiología | Crecimiento, reproducción |
| **Poblaciones** | m - km | días - décadas | Dinámicas poblacionales | Natalidad, mortalidad, dispersión |
| **Comunidades** | m - km | años - siglos | Diversidad, estructura trófica | Competencia, predación |
| **Ecosistemas** | km - 10³ km | décadas - milenios | Flujos energía/materia | Productividad, ciclado |
| **Paisajes** | 10² - 10⁴ km | siglos - milenios | Heterogeneidad espacial | Conectividad, fragmentación |
| **Biomas** | 10³ - 10⁵ km | milenios | Adaptaciones climáticas | Evolución, especiación |
| **Biosfera** | Global | Millones años | Regulación planetaria | Ciclos globales, clima |

### Teoría Jerárquica de Sistemas

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#3b4252',
    'primaryColor': '#88c0d0',
    'primaryTextColor': '#d8dee9',
    'primaryBorderColor': '#5e81ac',
    'lineColor': '#81a1c1',
    'secondaryColor': '#bf616a',
    'tertiaryColor': '#a3be8c',
    'fontSize': '11px'
  }
}}%%

graph TB
    subgraph "CONTROL DESCENDENTE"
        direction TB
        BS[Biosfera<br/>Clima global, ciclos biogeoquímicos]
        BM[Bioma<br/>Patrones climáticos regionales]
        PA[Paisaje<br/>Distribución de hábitats]
        EC[Ecosistema<br/>Disponibilidad recursos]
        CO[Comunidad<br/>Estructura de hábitat]
        PO[Población<br/>Densidad, estructura etaria]
        OR[Organismo<br/>Supervivencia individual]
    end
    
    subgraph "CONTROL ASCENDENTE"
        direction BT
        OR2[Organismo<br/>Comportamiento, fisiología]
        PO2[Población<br/>Abundancia, distribución]
        CO2[Comunidad<br/>Composición especies]
        EC2[Ecosistema<br/>Flujos energía/materia]
        PA2[Paisaje<br/>Conectividad]
        BM2[Bioma<br/>Productividad regional]
        BS2[Biosfera<br/>Regulación global]
    end
    
    BS --> BM --> PA --> EC --> CO --> PO --> OR
    OR2 --> PO2 --> CO2 --> EC2 --> PA2 --> BM2 --> BS2
    
    BS -.-> BS2
    OR -.-> OR2
```

### Principios Jerárquicos

**Principio de Anidamiento**:
```
Sistema(n) ⊃ Sistema(n-1) ⊃ ... ⊃ Sistema(1)
```

**Ley de Escala de Velocidad**:
```
v = k × M^(-α)
```
Donde: v = velocidad del proceso, M = masa del sistema, α ≈ 0.25

## Límites y Fronteras de Sistemas

### Tipos de Límites Sistémicos

| Tipo de Límite | Características | Ejemplos Ecológicos | Permeabilidad |
|----------------|----------------|---------------------|---------------|
| **Físicos** | Barreras geográficas tangibles | Cordilleras, océanos, ríos | Baja-Media |
| **Ecotónicos** | Zonas de transición gradual | Ecotonos bosque-pradera | Media-Alta |
| **Funcionales** | Definidos por procesos | Cuenca hidrográfica | Variable |
| **Conceptuales** | Definidos por el investigador | Parcelas de estudio | Artificial |
| **Temporales** | Cambios en el tiempo | Estaciones, ciclos | Cíclica |

### Permeabilidad de Fronteras

**Índice de Permeabilidad**:
```
P = (F_entrada + F_salida) / (E_interno)
```
Donde:
- F = flujos a través de la frontera
- E = energía/materia interna del sistema

### Efectos de Borde

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#3b4252',
    'primaryColor': '#88c0d0',
    'primaryTextColor': '#d8dee9',
    'primaryBorderColor': '#5e81ac',
    'lineColor': '#81a1c1',
    'secondaryColor': '#bf616a',
    'tertiaryColor': '#a3be8c',
    'fontSize': '12px'
  }
}}%%

graph LR
    subgraph "SISTEMA A"
        A1[Núcleo<br/>Condiciones estables<br/>Especies especialistas]
        A2[Borde<br/>Condiciones variables<br/>Especies generalistas]
    end
    
    subgraph "ECOTONO"
        E[Zona transición<br/>Máxima diversidad<br/>Especies únicas<br/>Gradientes ambientales]
    end
    
    subgraph "SISTEMA B"
        B2[Borde<br/>Condiciones variables<br/>Especies generalistas]
        B1[Núcleo<br/>Condiciones estables<br/>Especies especialistas]
    end
    
    A1 --> A2
    A2 --> E
    E --> B2
    B2 --> B1
    
    A2 -.-> B2
    E -.-> A1
    E -.-> B1
```

**Profundidad del Efecto de Borde**:
```
d = k × √A
```
Donde: d = profundidad, A = área del sistema, k = constante específica del sistema

## Sistemas Abiertos, Cerrados y Aislados

### Clasificación Termodinámica

| Tipo de Sistema | Intercambio de Materia | Intercambio de Energía | Ejemplos Ecológicos | Características |
|----------------|----------------------|----------------------|-------------------|----------------|
| **Aislado** | No | No | Ninguno (teórico) | Entropía máxima<br/>Estado final estático |
| **Cerrado** | No | Sí | Terrario sellado<br/>Ecosistemas en botellas | Entropía aumenta<br/>Estados estacionarios |
| **Abierto** | Sí | Sí | Todos los ecosistemas naturales | Entropía puede disminuir<br/>Estados dinámicos |

### Ecosistemas como Sistemas Abiertos

**Balance de Masa**:
```
dM/dt = I - O - R
```
Donde:
- M = masa del sistema
- I = entradas (inputs)
- O = salidas (outputs)  
- R = reacciones internas

**Balance de Energía**:
```
dE/dt = Ein - Eout - Eresp - Ealmac
```
Donde:
- E = energía del sistema
- Ein = energía entrante (solar, alimento)
- Eout = energía saliente (calor, biomasa)
- Eresp = respiración
- Ealmac = almacenamiento

### Flujos en Sistemas Abiertos

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#3b4252',
    'primaryColor': '#88c0d0',
    'primaryTextColor': '#d8dee9',
    'primaryBorderColor': '#5e81ac',
    'lineColor': '#81a1c1',
    'secondaryColor': '#bf616a',
    'tertiaryColor': '#a3be8c',
    'fontSize': '12px'
  }
}}%%

flowchart TB
    subgraph "ENTRADAS (INPUTS)"
        I1[Energía solar<br/>Radiación fotosintética]
        I2[Materia<br/>Nutrientes, agua, CO₂]
        I3[Organismos<br/>Migración, dispersión]
        I4[Información<br/>Señales, genes]
    end
    
    subgraph "ECOSISTEMA (SISTEMA ABIERTO)"
        S1[Productores<br/>Conversión energética]
        S2[Consumidores<br/>Transferencia trófica]
        S3[Descomponedores<br/>Reciclaje]
        S4[Pool abiótico<br/>Almacenamiento]
        
        S1 <--> S2
        S2 <--> S3
        S3 <--> S4
        S4 <--> S1
    end
    
    subgraph "SALIDAS (OUTPUTS)"
        O1[Calor<br/>Respiración, metabolismo]
        O2[Materia<br/>Exportación, lixiviación]
        O3[Organismos<br/>Emigración, dispersión]
        O4[Información<br/>Señales químicas]
    end
    
    I1 --> S1
    I2 --> S4
    I3 --> S2
    I4 --> S1
    
    S1 --> O1
    S4 --> O2
    S2 --> O3
    S1 --> O4
```

## Teoremas Fundamentales de Sistemas Aplicados a la Ecología

### Teorema de Incompletitud de Gödel en Ecología

Ningún sistema ecológico puede ser completamente descrito desde dentro del propio sistema. Siempre se requiere una perspectiva externa (nivel jerárquico superior) para comprender completamente el sistema.

**Aplicación ecológica**: Una población no puede entenderse completamente sin considerar la comunidad de la cual forma parte.

### Principio de Equifinalidad

**Definición**: Diferentes condiciones iniciales pueden llevar al mismo estado final en sistemas abiertos.

**Fórmula de Equifinalidad**:
```
lim(t→∞) S(x₀,t) = S* ∀x₀ ∈ D
```
Donde S* es el estado final independiente de las condiciones iniciales x₀

**Aplicación ecológica**: Diferentes caminos sucesionales pueden llevar al mismo clímax.

### Principio de Multifinalidad

Estados iniciales similares pueden llevar a estados finales diferentes dependiendo de las condiciones del sistema.

**Aplicación ecológica**: Estados alternativos estables en ecosistemas.

### Ley de Variedad Requerida (Ashby)

**Enunciado**: Solo la variedad puede absorber variedad.

**Aplicación ecológica**: La estabilidad de un ecosistema requiere diversidad funcional proporcional a la variabilidad ambiental.

```
Diversidad_funcional ≥ Variabilidad_ambiental
```

## Retroalimentación y Control en Sistemas Ecológicos

### Tipos de Retroalimentación

| Tipo | Efecto | Estabilidad | Ejemplos Ecológicos |
|------|--------|-------------|-------------------|
| **Negativa** | Reduce desviaciones | Estabilizadora | Control poblacional<br/>Autorregulación |
| **Positiva** | Amplifica desviaciones | Desestabilizadora | Explosiones poblacionales<br/>Eutrofización |
| **Retardada** | Efectos diferidos | Variable | Ciclos predador-presa |

### Ecuaciones de Retroalimentación

**Retroalimentación Negativa**:
```
dx/dt = -kx + f(t)
```

**Retroalimentación Positiva**:
```
dx/dt = +kx + f(t)
```

**Sistema con Retroalimentación Múltiple**:
```
dx/dt = α₁f₁(x) + α₂f₂(x) + ... + αₙfₙ(x)
```

### Modelo Conceptual de Control Sistémico

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'background': '#3b4252',
    'primaryColor': '#88c0d0',
    'primaryTextColor': '#d8dee9',
    'primaryBorderColor': '#5e81ac',
    'lineColor': '#81a1c1',
    'secondaryColor': '#bf616a',
    'tertiaryColor': '#a3be8c',
    'fontSize': '12px'
  }
}}%%

graph TB
    subgraph "CONTROL JERÁRQUICO"
        H1[Nivel Superior<br/>Restricciones lentas]
        H2[Nivel Focal<br/>Dinámicas intermedias]
        H3[Nivel Inferior<br/>Procesos rápidos]
    end
    
    subgraph "RETROALIMENTACIONES"
        F1[Feedback Negativo<br/>Estabilización]
        F2[Feedback Positivo<br/>Amplificación]
        F3[Feedback Retardado<br/>Oscilaciones]
    end
    
    subgraph "PERTURBACIONES"
        P1[Internas<br/>Dinámicas propias]
        P2[Externas<br/>Ambiente]
        P3[Cruzadas<br/>Entre niveles]
    end
    
    H1 --> H2
    H2 --> H3
    H3 -.-> H2
    H2 -.-> H1
    
    H2 <--> F1
    H2 <--> F2
    H2 <--> F3
    
    P1 --> H2
    P2 --> H2
    P3 --> H2
```

## Aplicaciones Prácticas de la TGS en Ecología

### Diseño de Estudios Ecológicos Sistémicos

**Principios de Diseño**:

1. **Identificación de límites del sistema**
2. **Definición de niveles jerárquicos relevantes**
3. **Mapeo de flujos de entrada y salida**
4. **Identificación de retroalimentaciones clave**
5. **Análisis de escalas espacio-temporales**

### Aplicaciones en Gestión Ecosistémica

| Aplicación | Principios TGS Utilizados | Herramientas | Resultados |
|------------|---------------------------|--------------|------------|
| **Restauración** | Equifinalidad, emergencia | Modelos de referencia | Estados deseados múltiples |
| **Conservación** | Jerarquía, retroalimentación | Diseño de reservas | Conectividad sistémica |
| **Manejo Adaptativo** | Sistemas abiertos, control | Monitoreo continuo | Gestión flexible |
| **Evaluación Impacto** | Límites, permeabilidad | Análisis multiescala | Efectos sistémicos |

## Ejercicios Prácticos

### Ejercicio 1: Análisis de Sistemas
**Objetivo**: Aplicar conceptos de TGS a un ecosistema local.

**Pasos**:
1. Seleccionar un ecosistema (ej: parque urbano)
2. Identificar elementos, estructura y funciones
3. Definir límites del sistema
4. Mapear entradas y salidas
5. Identificar retroalimentaciones

### Ejercicio 2: Jerarquía de Escalas
**Objetivo**: Analizar un fenómeno ecológico en múltiples escalas.

**Ejemplo**: Decline de polinizadores
- **Organismo**: Fisiología de abejas individuales
- **Población**: Dinámicas de colonias
- **Comunidad**: Redes planta-polinizador
- **Ecosistema**: Servicios de polinización
- **Paisaje**: Fragmentación de hábitat

### Ejercicio 3: Modelado de Retroalimentaciones
**Objetivo**: Construir un modelo conceptual de retroalimentaciones.

**Sistema**: Pastizal con herbívoros
```
Vegetación → Herbívoros → Presión pastoreo → Vegetación
```

## Herramientas Matemáticas y Computacionales

### Software Recomendado

| Herramienta | Aplicación | Ventajas | Limitaciones |
|-------------|------------|----------|--------------|
| **Vensim** | Dinámica de sistemas | Interface intuitiva | Licencia comercial |
| **Stella** | Modelado sistémico | Educativo | Limitado para análisis complejos |
| **R (DiagrammeR)** | Diagramas de sistemas | Gratuito, flexible | Curva de aprendizaje |
| **Python (NetworkX)** | Análisis de redes | Potente, extensible | Requiere programación |

### Fórmulas Clave para Aplicar

**Índice de Conectividad**:
```
C = 2L / (N(N-1))
```
Donde: L = enlaces, N = nodos

**Índice de Modularidad**:
```
Q = (1/2m) Σ(Aᵢⱼ - kᵢkⱼ/2m)δ(cᵢ,cⱼ)
```
Donde: m = total enlaces, A = matriz adyacencia, k = grado

**Entropía del Sistema**:
```
H = -Σ pᵢ log pᵢ
```
Donde: pᵢ = probabilidad del estado i

## Limitaciones y Críticas de la TGS en Ecología

### Limitaciones Teóricas

| Limitación | Descripción | Impacto en Ecología |
|------------|-------------|-------------------|
| **Complejidad excesiva** | Sistemas muy complejos para modelar | Modelos simplificados |
| **Fronteras artificiales** | Límites impuestos por el investigador | Sesgos en el análisis |
| **Escalas temporales** | Procesos en diferentes escalas | Dificultad integración |
| **No linealidad** | Comportamientos impredecibles | Predicción limitada |

### Críticas Metodológicas

**Reduccionismo oculto**: Riesgo de simplificar excesivamente las interacciones complejas.

**Determinismo sistémico**: Tendencia a buscar patrones deterministas en sistemas estocásticos.

**Antropocentrismo**: Imposición de conceptos humanos de "propósito" a sistemas naturales.

## Desarrollos Contemporáneos

### Teoría de Redes Complejas
Aplicación de teoría de grafos y redes complejas para entender conectividad ecosistémica.

### Sistemas Adaptativos Complejos (CAS)
Integración de adaptación, aprendizaje y evolución en el marco sistémico.

### Criticalidad Auto-Organizada (SOC)
Estados críticos que emergen naturalmente en sistemas ecológicos.

### Big Data y Ecoinformática
Uso de grandes volúmenes de datos para entender patrones sistémicos.

## Lecturas Recomendadas

### Textos Fundamentales
- von Bertalanffy, L. (1968). *General System Theory*
- Odum, H.T. (1994). *Ecological and General Systems*
- Kay, J.J. et al. (1999). *Ecosystems as self-organizing systems*

### Aplicaciones Contemporáneas
- Levin, S.A. (1998). *Ecosystems and the biosphere as complex adaptive systems*
- Ulanowicz, R.E. (2009). *A Third Window: Natural Life beyond Newton and Darwin*
- Fath, B.D. (2017). *Systems ecology, energy networks, and a path to sustainability*

### Artículos Clave
- O'Neill, R.V. et al. (1986). A hierarchical concept of ecosystems
- Holling, C.S. (2001). Understanding the complexity of economic, ecological, and social systems
- Levin, S.A. (1992). The problem of pattern and scale in ecology
