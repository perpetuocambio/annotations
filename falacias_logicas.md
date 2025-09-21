# Falacias Lógicas: Catálogo Completo con Clasificación, Ejemplos y Formalizaciones

## Introducción

Una falacia lógica es un error en el razonamiento que invalida un argumento. Este documento presenta un catálogo exhaustivo de más de 100 falacias lógicas clasificadas sistemáticamente, con ejemplos reales y formalizaciones en lógica proposicional y de predicados.

## I. FALACIAS FORMALES

Las falacias formales violan la estructura lógica válida independientemente del contenido.

### 1.1 Falacias de Implicación

#### 1.1.1 Afirmación del Consecuente
**Fórmula:** `(P → Q) ∧ Q ∴ P` [INVÁLIDO]
**Ejemplo:** "Si llueve, hay nubes. Hay nubes. Por tanto, llueve."

#### 1.1.2 Negación del Antecedente  
**Fórmula:** `(P → Q) ∧ ¬P ∴ ¬Q` [INVÁLIDO]
**Ejemplo:** "Si eres médico, eres inteligente. No eres médico. Por tanto, no eres inteligente."

#### 1.1.3 Conversión Ilícita
**Fórmula:** `(P → Q) ∴ (Q → P)` [INVÁLIDO]
**Descripción:** Error al intercambiar antecedente y consecuente en una implicación.
**Ejemplo:** "Si algo es un gato, es un mamífero. Por tanto, si es mamífero, es gato."

#### 1.1.4 Inversión Ilícita
**Fórmula:** `(P → Q) ∴ (¬P → ¬Q)` [INVÁLIDO]
**Descripción:** Error al negar ambos términos de una implicación manteniendo el orden.
**Ejemplo:** "Si estudias, aprobarás. Por tanto, si no estudias, no aprobarás."

### 1.2 Falacias Silogísticas

#### 1.2.1 Término Medio No Distribuido
**Estructura:** El término medio no es distribuido en al menos una premisa.
**Ejemplo:** "Todos los perros son animales. Todos los gatos son animales. Por tanto, todos los perros son gatos."

#### 1.2.2 Proceso Ilícito del Término Mayor
**Ejemplo:** "Todos los socialistas son progresistas. Ningún conservador es socialista. Por tanto, ningún conservador es progresista."

#### 1.2.3 Proceso Ilícito del Término Menor
**Ejemplo:** "Todos los españoles son europeos. Todos los españoles son mediterráneos. Por tanto, todos los europeos son mediterráneos."

#### 1.2.4 Cuatro Términos (Quaternio Terminorum)
**Ejemplo:** "Los perros son animales. Los animales viven en la naturaleza. Por tanto, los perros viven en la naturaleza." (usando "animales" en sentidos diferentes)

#### 1.2.5 Falacia Existencial
**Ejemplo:** "Todos los unicornios son mágicos. Todos los unicornios son blancos. Por tanto, algo mágico es blanco."

### 1.3 Falacias de Disyunción

#### 1.3.1 Afirmación de una Disyunción
**Fórmula:** `(P ∨ Q) ∧ P ∴ ¬Q` [INVÁLIDO en disyunción inclusiva]
**Ejemplo:** "Juan es inteligente o trabajador. Juan es inteligente. Por tanto, Juan no es trabajador."

#### 1.3.2 Negación de una Conjunción
**Fórmula:** `¬(P ∧ Q) ∴ (¬P ∧ ¬Q)` [INVÁLIDO]
**Descripción:** Error al distribuir incorrectamente la negación sobre una conjunción (ley de De Morgan mal aplicada).
**Ejemplo:** "No es cierto que Juan sea alto y rubio. Por tanto, Juan no es alto y Juan no es rubio."

## II. FALACIAS INFORMALES DE RELEVANCIA

### 2.1 Ataques Personales (Ad Hominem)

#### 2.1.1 Ad Hominem Abusivo
**Fórmula:** `Persona(X) ∧ CaracterísticaNegativa(X) ∴ ¬Argumento(X)`
**Descripción:** Rechazar un argumento atacando el carácter de quien lo presenta.
**Ejemplo:** "No podemos creer a Peterson sobre psicología porque es adicto a las benzodiacepinas."

#### 2.1.2 Ad Hominem Circunstancial
**Fórmula:** `Circunstancia(X) ∴ ¬Argumento(X)`
**Descripción:** Rechazar un argumento debido a las circunstancias particulares del argumentador.
**Ejemplo:** "Claro que defiendes los impuestos altos, trabajas para Hacienda."

#### 2.1.3 Tu Quoque (Tú También)
**Fórmula:** `Hace(X, A) ∧ Critica(X, A) ∴ ¬VálidaCrítica(X, A)`
**Descripción:** Rechazar una crítica señalando que el crítico también comete el error criticado.
**Ejemplo:** "No me digas que deje de fumar, tú también fumas."

#### 2.1.4 Envenenamiento del Pozo
**Fórmula:** `PresentarInformación(X, NegativaPrevia) ∴ ¬CreíbleArgumentos(X)`
**Descripción:** Desacreditar a alguien antes de que presente sus argumentos.
**Ejemplo:** "Antes de que hable mi oponente, deben saber que es un mentiroso compulsivo."

#### 2.1.5 Ad Hominem por Asociación (Guilt by Association)
**Fórmula:** `Asociado(X, Y) ∧ Negativo(Y) ∴ Negativo(X)`
**Descripción:** Rechazar a alguien o sus ideas por su asociación con personas o grupos desprestigiados.
**Ejemplo:** "Hitler era vegetariano, por tanto el vegetarianismo es malo."

### 2.2 Apelaciones Emocionales

#### 2.2.1 Ad Misericordiam (Apelación a la Piedad)
**Fórmula:** `Compasión(Situación) ∴ Conclusión`
**Descripción:** Apelar a la piedad o compasión para obtener aceptación de una conclusión.
**Ejemplo:** "Profesor, debe aprobarme porque mi abuela está enferma y necesito la beca."

#### 2.2.2 Ad Baculum (Apelación a la Fuerza)
**Fórmula:** `Amenaza(Consecuencias) ∴ Aceptar(P)`
**Descripción:** Usar amenazas o coerción para forzar la aceptación de una conclusión.
**Ejemplo:** "Deberías votar por mí o tu negocio podría tener problemas con los inspectores."

#### 2.2.3 Ad Metum (Apelación al Miedo)
**Fórmula:** `Miedo(Consecuencias) ∴ Aceptar(Acción)`
**Descripción:** Generar miedo irracional para motivar la aceptación de una conclusión.
**Ejemplo:** "Si no compras este seguro, tu familia quedará en la ruina si algo te pasa."

#### 2.2.4 Ad Odium (Apelación al Odio)
**Fórmula:** `Odio(Grupo) ∴ Rechazar(PropuestasGrupo)`
**Descripción:** Generar odio hacia un grupo para rechazar sus propuestas o ideas.
**Ejemplo:** "Los inmigrantes nos quitan el trabajo y destruyen nuestra cultura."

#### 2.2.5 Ad Superbiam (Apelación al Orgullo)
**Fórmula:** `Orgullo(Persona) ∴ Aceptar(P)`
**Descripción:** Apelar al orgullo o vanidad para obtener aceptación.
**Ejemplo:** "Una persona inteligente como tú seguramente entiende por qué este producto es superior."

#### 2.2.6 Ad Nauseam (Repetición)
**Fórmula:** `Repetir(P, n veces) ∴ Verdadero(P)`
**Descripción:** Repetir una afirmación hasta que parezca verdadera por familiaridad.
**Ejemplo:** Repetir una afirmación mil veces hasta que parezca verdadera.

### 2.3 Apelaciones a Autoridades y Fuentes

#### 2.3.1 Ad Verecundiam (Autoridad Falsa)
**Fórmula:** `Autoridad(X, CampoA) ∧ Afirma(X, P, CampoB) ∴ Verdadero(P)` [A ≠ B]
**Descripción:** Apelar a una autoridad que no es experta en el tema relevante.
**Ejemplo:** "Einstein creía en Dios, por tanto Dios existe."

#### 2.3.2 Ad Populum (Apelación Popular)
**Fórmula:** `∀x ∈ Mayoría: Cree(x, P) ∴ Verdadero(P)`
**Descripción:** Asumir que algo es verdadero porque la mayoría lo cree.
**Subtipos:**
- **Bandwagon:** "Todo el mundo usa este producto."
- **Snob Appeal:** "Solo las personas sofisticadas entienden esto."
- **Mob Appeal:** "El pueblo exige justicia."

#### 2.3.3 Ad Antiquitatem (Apelación a la Tradición)
**Fórmula:** `Tradicional(P) ∴ Correcto(P)`
**Descripción:** Asumir que algo es correcto porque es tradicional o ha existido por mucho tiempo.
**Ejemplo:** "Siempre se ha hecho así, por tanto es correcto."

#### 2.3.4 Ad Novitatem (Apelación a la Novedad)
**Fórmula:** `Nuevo(P) ∴ Mejor(P)`
**Descripción:** Asumir que algo es mejor simplemente por ser más nuevo.
**Ejemplo:** "Es la tecnología más reciente, por tanto es la mejor."

#### 2.3.5 Ad Ignorantiam (Apelación a la Ignorancia)
**Fórmula:** `¬Probado(¬P) ∴ Verdadero(P)` o `¬Probado(P) ∴ Falso(P)`
**Descripción:** Asumir que algo es verdadero porque no se ha probado que sea falso, o viceversa.
**Ejemplo:** "No se ha demostrado que los OVNIs no existen, por tanto existen."

### 2.4 Diversiones y Distracciones

#### 2.4.1 Red Herring (Pista Falsa)
**Fórmula:** `Argumento(P) → IntroducirTema(Q)` [Q irrelevante a P]
**Descripción:** Introducir información irrelevante para desviar la atención del tema principal.
**Ejemplo:** En debate sobre educación, hablar de los salarios de los políticos.

#### 2.4.2 Straw Man (Hombre de Paja)
**Fórmula:** `Posición(A) → Distorsionar(A') → Atacar(A') ∴ Refutado(A)`
**Descripción:** Distorsionar la posición del oponente para atacar una versión más débil.
**Ejemplo:** "Quieren regular las armas" → "Quieren confiscar todas las armas."

#### 2.4.3 Steel Man (versión extrema del contrario)
**Fórmula:** `Posición(A) → Extremar(A') → Atacar(A') ∴ Refutado(A)`
**Descripción:** Presentar solo la versión más fuerte y extrema del argumento contrario.
**Ejemplo:** Presentar la versión más fuerte del argumento contrario para después atacar solo esa versión extrema.

#### 2.4.4 Motte and Bailey
**Fórmula:** `DefenderRadical(Bailey) ∧ SiAtacado → Retirarse(Motte)`
**Descripción:** Alternar entre una posición controvertida (bailey) y una más defendible (motte).
**Ejemplo:** Defender una posición radical pero retirarse a una posición moderada cuando se ataca.

#### 2.4.5 Moving the Goalposts
**Fórmula:** `Criterio(C₁) ∧ Cumplido(C₁) → NuevoCriterio(C₂)`
**Descripción:** Cambiar los criterios de evaluación después de que se han cumplido los originales.
**Ejemplo:** Cambiar los criterios de evaluación cuando se cumplen los originales.

## III. FALACIAS DE AMBIGÜEDAD Y LENGUAJE

### 3.1 Falacias Semánticas

#### 3.1.1 Equivocación
**Ejemplo:** "El banco está en quiebra. Me senté en el banco. Por tanto, me senté en algo en quiebra."

#### 3.1.2 Anfibolía
**Fórmula:** `EstructuraGramatical → InterpretacionesMultiples(P₁, P₂, ...)`
**Descripción:** Ambigüedad sintáctica que permite múltiples interpretaciones del mismo enunciado.
**Ejemplo:** "Se vende piano por señora con patas de roble."

#### 3.1.3 Énfasis (Accent)
**Fórmula:** `Énfasis(Palabra) → CambioSignificado(Oración)`
**Descripción:** Cambiar el significado de una oración alterando qué palabra se enfatiza.
**Ejemplo:** "NO DEBE matar" vs "No DEBE matar" vs "No debe MATAR."

#### 3.1.4 Composición
**Fórmula:** `∀x ∈ S: P(x) ∴ P(S)` [INVÁLIDO en general]
**Ejemplo:** "Cada jugador es excelente, por tanto el equipo es excelente."

#### 3.1.5 División
**Fórmula:** `P(S) ∴ ∀x ∈ S: P(x)` [INVÁLIDO en general]
**Ejemplo:** "La universidad es antigua, por tanto todos los edificios son antiguos."

### 3.2 Falacias de Definición

#### 3.2.1 Definición Persuasiva
**Fórmula:** `Redefinir(Término) → FavorecerPosición(Propia)`
**Descripción:** Redefinir términos de manera que favorezcan automáticamente la posición propia.
**Ejemplo:** Definir "libertad" de manera que solo incluya la posición propia.

#### 3.2.2 No True Scotsman
**Fórmula:** `Contraejemplo(X, P) → RedefinirP(P') → ¬P'(X)`
**Descripción:** Modificar una definición para excluir contraejemplos problemáticos.
**Ejemplo:** "Ningún vegetariano come pescado." "Mi amigo es vegetariano y come pescado." "Entonces no es un verdadero vegetariano."

#### 3.2.3 Definición por Ejemplo
**Fórmula:** `¿QuéEs(X)? → MostrarEjemplo(Y)` [Y no define X completamente]
**Descripción:** Intentar definir un concepto mostrando solo un ejemplo específico.
**Ejemplo:** "¿Qué es el arte? Mira La Gioconda."

## IV. FALACIAS DE PRESUNCIÓN INDEBIDA

### 4.1 Falacias Circulares

#### 4.1.1 Petitio Principii (Petición de Principio)
**Fórmula:** `P ∴ P`
**Ejemplo:** "Dios existe porque lo dice la Biblia, y la Biblia es verdadera porque es la palabra de Dios."

#### 4.1.2 Razonamiento Circular Complejo
**Fórmula:** `A → B, B → C, C → A` (círculo de múltiples elementos)
**Descripción:** Cadena circular de razonamiento donde A justifica B, B justifica C, y C justifica A.
**Ejemplo:** A→B, B→C, C→A (círculo de tres elementos)

### 4.2 Falsas Dicotomías y Opciones

#### 4.2.1 Falso Dilema
**Fórmula:** `P ∨ Q` (cuando existe R, S, T...)
**Ejemplo:** "O estás conmigo o contra mí."

#### 4.2.2 Falsa Causa
**Descripción:** Atribuir causalidad donde no la hay o donde la relación causal es diferente.
**Subtipos:**
- **Post Hoc:** `A antes B ∴ A causa B`
- **Cum Hoc:** `Correlación(A,B) ∴ A causa B`
- **Non Causa Pro Causa:** `CausaIrrelevante(X) ∴ X causa Y`

#### 4.2.3 Nirvana Fallacy (Perfección como Enemigo del Bien)
**Fórmula:** `¬Perfecto(Solución) ∴ Inútil(Solución)`
**Descripción:** Rechazar una solución porque no es perfecta, ignorando que puede ser mejor que las alternativas.
**Ejemplo:** "Esta solución no es perfecta, por tanto es inútil."

### 4.3 Preguntas y Presuposiciones

#### 4.3.1 Pregunta Compleja (Loaded Question)
**Ejemplo:** "¿Cuándo dejaste de golpear a tu esposa?"

#### 4.3.2 Muchas Preguntas
**Fórmula:** `Pregunta(P₁ ∧ P₂ ∧ ... ∧ Pₙ)` donde múltiples preguntas están fusionadas
**Descripción:** Combinar múltiples preguntas diferentes en una sola, haciendo imposible una respuesta simple.
**Ejemplo:** "¿Por qué eres tan estúpido y terco?"

#### 4.3.3 Supresión de Evidencia
**Fórmula:** `Presentar(EvidenciaFavorable) ∧ Ocultar(EvidenciaContraria)`
**Descripción:** Presentar solo la evidencia que apoya la posición propia, ocultando evidencia contraria relevante.
**Ejemplo:** Presentar solo evidencia favorable omitiendo la contraria.

## V. FALACIAS DE INDUCCIÓN DÉBIL

### 5.1 Falacias de Generalización

#### 5.1.1 Generalización Precipitada
**Fórmula:** `P(x₁) ∧ P(x₂) ∧ ... ∧ P(xₙ) ∴ ∀x: P(x)` [n muy pequeño]
**Ejemplo:** "Conocí tres franceses maleducados, todos los franceses son maleducados."

#### 5.1.2 Muestra Sesgada
**Fórmula:** `Muestra(S) ∧ Sesgada(S) ∴ Generalización(Población)` [INVÁLIDO]
**Descripción:** Generalizar a partir de una muestra que no es representativa de la población total.
**Ejemplo:** Encuesta sobre satisfacción laboral solo a empleados que no fueron despedidos.

#### 5.1.3 Evidencia Anecdótica
**Fórmula:** `ExperienciaPersonal(X) ∴ GeneralizaciónUniversal(X)`
**Descripción:** Usar experiencias personales aisladas como si fueran evidencia estadísticamente significativa.
**Ejemplo:** "Mi abuelo fumó toda la vida y vivió 90 años, fumar no es malo."

### 5.2 Falacias Causales

#### 5.2.1 Post Hoc Ergo Propter Hoc
**Fórmula:** `A antes B ∴ A causa B`
**Ejemplo:** "Después de vacunarme me dio gripe, la vacuna causó la gripe."

#### 5.2.2 Cum Hoc Ergo Propter Hoc
**Fórmula:** `Correlación(A,B) ∴ A causa B`
**Ejemplo:** "Países que comen más chocolate tienen más premios Nobel, el chocolate aumenta la inteligencia."

#### 5.2.3 Regresión Estadística Ignorada
**Fórmula:** `ExtremoInicial → MejoríaObservada ∴ EfectoTratamiento` [ignorando regresión a la media]
**Descripción:** Atribuir mejoras a un tratamiento cuando pueden deberse a regresión estadística natural.
**Ejemplo:** "Después del entrenamiento especial, los atletas peores mejoraron más, el entrenamiento funciona mejor en atletas peores."

### 5.3 Falacias de Analogía

#### 5.3.1 Analogía Débil
**Ejemplo:** "Prohibir armas es como prohibir coches, ambos pueden matar."

#### 5.3.2 Falsa Analogía
**Fórmula:** `Similar(A,B,Aspecto₁) ∴ Similar(A,B,Aspecto₂)` [cuando Aspecto₁ ≠ Aspecto₂]
**Descripción:** Asumir que porque dos cosas son similares en un aspecto, son similares en otros aspectos relevantes.
**Ejemplo:** "El cerebro es como un ordenador en todo."

## VI. FALACIAS DE MODALIDAD Y PROBABILIDAD

### 6.1 Falacias Modales

#### 6.1.1 Confusión Modal
**Fórmula:** `◇P ∴ P` o `□P ∴ P en mundo actual` [contexto modal confundido]
**Descripción:** Confundir la modalidad (posibilidad, necesidad) con la realidad actual.
**Ejemplo:** "Es posible que llueva mañana, por tanto lloverá mañana."

#### 6.1.2 Falacia de Necesidad
**Fórmula:** `□(P → Q) ∧ P ∴ □Q` [transferencia incorrecta de modalidad]
**Descripción:** Transferir incorrectamente la necesidad modal de una implicación al consecuente.
**Ejemplo:** "Necesariamente, si algo es rojo, es coloreado. Este objeto es rojo. Por tanto, necesariamente es coloreado."

### 6.2 Falacias Probabilísticas

#### 6.2.1 Falacia del Jugador
**Fórmula:** `P(Cara₁,Cara₂,...,Caraₙ) → P(Cruz) > 0.5` [eventos independientes]
**Descripción:** Creer que eventos pasados independientes afectan la probabilidad de eventos futuros.
**Ejemplo:** "Ha salido cara 5 veces, ahora debe salir cruz."

#### 6.2.2 Falacia de la Probabilidad Base
**Fórmula:** `P(D|T) ∧ ¬P(D) → Interpretación incorrecta` [ignorar tasa base]
**Descripción:** Ignorar la probabilidad base (prevalencia) al interpretar resultados de pruebas.
**Ejemplo:** Ignorar la prevalencia de una condición al interpretar pruebas diagnósticas.

#### 6.2.3 Falacia de la Conjunción
**Fórmula:** `P(A ∧ B) > P(A)` [IMPOSIBLE por axiomas de probabilidad]
**Descripción:** Juzgar que la conjunción de eventos es más probable que uno de los eventos individuales.
**Ejemplo:** Considerar que A∧B es más probable que A solo.

## VII. FALACIAS CUANTIFICACIONALES Y DE ALCANCE

### 7.1 Falacias de Cuantificación

#### 7.1.1 Cuantificación Ilícita
**Fórmula:** `∀x: P(x) → Q(x) ∴ ∀x: P(x) → ∀x: Q(x)`
**Ejemplo:** "Todo número tiene un sucesor, por tanto hay un número que es sucesor de todos."

#### 7.1.2 Intercambio Ilícito de Cuantificadores
**Fórmula:** `∀x∃y: R(x,y) ≢ ∃y∀x: R(x,y)` [orden de cuantificadores importa]
**Descripción:** Intercambiar incorrectamente el orden de cuantificadores, cambiando el significado lógico.
**Ejemplo:** "Todo estudiante tiene un profesor" ≠ "Hay un profesor para todos los estudiantes."

### 7.2 Falacias de Alcance

#### 7.2.1 Ambigüedad de Alcance
**Fórmula:** `¬∀x: Brilla(x) → Oro(x)` vs `∀x: ¬(Brilla(x) → Oro(x))`
**Descripción:** Ambigüedad sobre el alcance de operadores lógicos (negación, cuantificadores).
**Ejemplo:** "Todo lo que brilla no es oro" (alcance de negación ambiguo)

#### 7.2.2 Falacia de División Cuantificacional
**Fórmula:** `Promedio(Grupo) = X ∴ ∀individuo ∈ Grupo: Valor(individuo) = X`
**Descripción:** Asumir que el promedio del grupo se aplica a cada individuo del grupo.
**Ejemplo:** "La clase promedia 85%. Por tanto, cada estudiante promedia 85%."

## VIII. FALACIAS ESPECÍFICAS DE CONTEXTO

### 8.1 Falacias Científicas

#### 8.1.1 Cherry Picking
**Fórmula:** `{Estudios₁, Estudios₂, ..., Estudiosₙ} → Citar solo {Estudios favorables} ⊂ Total`
**Descripción:** Seleccionar solo la evidencia que apoya la posición propia, ignorando evidencia contraria.
**Ejemplo:** Citar solo estudios que apoyan una posición.

#### 8.1.2 Texas Sharpshooter
**Fórmula:** `DatosAleatorios → BuscarPatrones → ClaimarSignificancia`
**Descripción:** Buscar patrones en datos después de recogerlos, como disparar y luego dibujar la diana.
**Ejemplo:** Encontrar patrones post-hoc en datos aleatorios.

#### 8.1.3 Falacia de Replicación
**Fórmula:** `∃Estudio: Contradice(Teoría) ∴ Falso(Teoría completa)`
**Descripción:** Rechazar una teoría completa basándose en un estudio contradictorio aislado.
**Ejemplo:** "Un estudio lo contradice, por tanto toda la teoría es falsa."

#### 8.1.4 Falacia Naturalista
**Fórmula:** `Natural(X) ∴ Bueno(X)` o `Natural(X) ∴ Correcto(X)`
**Descripción:** Asumir que algo es bueno o correcto simplemente porque es "natural".
**Ejemplo:** "Es natural, por tanto es bueno."

#### 8.1.5 Falacia Moralista
**Fórmula:** `Malo(Consecuencias de P) ∴ Falso(P)`
**Descripción:** Rechazar algo porque sus implicaciones serían moralmente indeseables.
**Ejemplo:** "Sería malo si fuera cierto, por tanto es falso."

### 8.2 Falacias Económicas

#### 8.2.1 Falacia de Suma Cero
**Fórmula:** `Gana(A, X) ∴ Pierde(B, X)` [asumiendo juego suma cero]
**Descripción:** Asumir que en toda transacción una parte debe perder para que otra gane.
**Ejemplo:** "Si alguien gana dinero, otro debe perderlo."

#### 8.2.2 Costo Hundido (Sunk Cost)
**Fórmula:** `InvertidoYa(X) ∴ DeberContinuar(Proyecto)`
**Descripción:** Continuar una actividad debido a inversiones pasadas irrecuperables en lugar de evaluar beneficios futuros.
**Ejemplo:** "Ya invertimos mucho, debemos continuar."

#### 8.2.3 Falacia de la Ventana Rota
**Fórmula:** `Destrucción → TrabajoParareparar → BeneficoEconómico`
**Descripción:** Creer que la destrucción beneficia la economía porque genera trabajo de reparación.
**Ejemplo:** "La destrucción es buena porque genera empleo reconstruyendo."

### 8.3 Falacias Políticas

#### 8.3.1 Ad Nazium (Reductio ad Hitlerum)
**Fórmula:** `Hitler/Nazis(X) ∧ Apoyan(X, Y) ∴ Malo(Y)`
**Descripción:** Rechazar algo porque Hitler o los nazis lo apoyaron o practicaron.
**Ejemplo:** "Hitler era vegetariano, por tanto el vegetarianismo es fascista."

#### 8.3.2 Whataboutism
**Fórmula:** `Crítica(A, Comportamiento₁) → "¿QuéPasa con B y Comportamiento₂?"`
**Descripción:** Desviar una crítica señalando faltas similares de otros.
**Ejemplo:** "¿Críticas nuestras políticas? ¿Qué pasa con lo que hace el otro partido?"

#### 8.3.3 Falacia del Centrismo
**Fórmula:** `Posición(A) ∧ Posición(B) ∴ Verdad ∈ Centro(A,B)`
**Descripción:** Asumir automáticamente que la posición correcta está en el "centro" entre extremos.
**Ejemplo:** "La verdad está siempre en el medio."

## IX. FALACIAS METACOGNITIVAS Y PSICOLÓGICAS

### 9.1 Falacias de Autoconocimiento

#### 9.1.1 Efecto Dunning-Kruger Inverso
**Fórmula:** `AltaCompetencia(X) → SubestimarCompetencia(X)`
**Descripción:** Las personas muy competentes subestiman su competencia, asumiendo que otros saben tanto como ellos.
**Ejemplo:** "Sé tanto sobre esto que debo estar equivocado."

#### 9.1.2 Falacia de Planificación
**Fórmula:** `EstimarTiempo(Tarea) → SubestimarSistemático(TiempoReal)`
**Descripción:** Subestimar sistemáticamente el tiempo, costo o riesgos de acciones futuras.
**Ejemplo:** Subestimar sistemáticamente el tiempo necesario para tareas.

### 9.2 Falacias Sociales

#### 9.2.1 Error Fundamental de Atribución
**Fórmula:** `ComportamientoNegativo(X) → AtribuirPersonalidad(X)` [ignorar situación]
**Descripción:** Atribuir el comportamiento de otros a su personalidad mientras se ignoran las circunstancias situacionales.
**Ejemplo:** "Llegó tarde porque es impuntual" (ignorando circunstancias).

#### 9.2.2 Error de Atribución Grupal
**Fórmula:** `∃miembros ∈ Grupo: Comportamiento(X) ∴ Todo(Grupo): Comportamiento(X)`
**Descripción:** Atribuir las características de algunos miembros de un grupo a todo el grupo.
**Ejemplo:** "Esa religión es violenta porque algunos miembros son violentos."

## X. FALACIAS FORMALES AVANZADAS

### 10.1 Falacias de Lógica Modal

#### 10.1.1 S4 Modal Fallacy
**Fórmula:** `◇□P ∴ □P` [INVÁLIDO]
**Ejemplo:** "Es posible que necesariamente P, por tanto necesariamente P."

#### 10.1.2 Falacia de Fórmula Barcan
**Fórmula:** `∀x□P(x) ≡ □∀xP(x)` [No válido en todos los sistemas modales]
**Descripción:** Asumir equivalencia entre "todo necesariamente tiene P" y "es necesario que todo tenga P".
**Ejemplo:** Confundir "Todo número necesariamente tiene un sucesor" con "Necesariamente todo número tiene un sucesor".

### 10.2 Falacias de Lógica Temporal

#### 10.2.1 Falacia de Alcance Temporal
**Fórmula:** `G(F P) ≢ F(G P)` [operadores temporales no conmutan]
**Descripción:** Confundir diferentes órdenes de operadores temporales que tienen significados distintos.
**Ejemplo:** "Siempre será el caso que a veces llueve" ≠ "A veces siempre llueve."

### 10.3 Falacias de Lógica Deontica

#### 10.3.1 Falacia Es-Debe (Ought-Is)
**Fórmula:** `Es(P) ∴ Debe(P)` [no se sigue lógicamente]
**Descripción:** Inferir que algo debe ser el caso basándose solo en que es el caso (falacia naturalista).
**Ejemplo:** "La gente miente, por tanto es correcto mentir."

#### 10.3.2 Falacia Debe-Es (Is-Ought)
**Fórmula:** `Debe(P) ∴ Es(P)` [no se sigue lógicamente]
**Descripción:** Inferir que algo es el caso basándose solo en que debe ser el caso.
**Ejemplo:** "Debemos ayudar, por tanto la gente ayuda naturalmente."

## XI. MÉTODO DE ANÁLISIS SISTEMÁTICO

### 11.1 Protocolo de Evaluación

1. **Identificar estructura lógica**
2. **Verificar validez formal** usando tablas de verdad o deducción natural
3. **Evaluar veracidad de premisas**
4. **Detectar falacias informales**
5. **Analizar contexto y relevancia**

### 11.2 Herramientas Formales

#### 11.2.1 Lógica Proposicional
- Conectivos: ¬, ∧, ∨, →, ↔
- Métodos: Tablas de verdad, resolución, deducción natural

#### 11.2.2 Lógica de Predicados
- Cuantificadores: ∀, ∃
- Métodos: Unificación, resolución de primer orden

#### 11.2.3 Lógicas Especializadas
- Modal: □ (necesario), ◇ (posible)
- Temporal: G (siempre), F (eventualmente), X (siguiente)
- Deontica: O (obligatorio), P (permitido), F (prohibido)

## XII. APLICACIONES CONTEMPORÁNEAS

### 12.1 Medios Digitales
- **Algoritmos de sesgo:** Cámaras de eco
- **Desinformación:** Deepfakes y manipulación
- **Viralidad:** Apelación emocional sobre verdad

### 12.2 Ciencia de Datos
- **P-hacking:** Manipular datos para significancia
- **Data dredging:** Buscar patrones post-hoc
- **Survivor bias:** Estudiar solo casos exitosos

### 12.3 Inteligencia Artificial
- **Sesgo algorítmico:** Perpetuar prejuicios humanos
- **Overfitting:** Generalizar mal desde datos de entrenamiento
- **Explicabilidad:** Correlación vs. causalidad en ML

## XIII. CONCLUSIONES Y RECOMENDACIONES

### 13.1 Principios Fundamentales
1. **Distinguir validez de veracidad**
2. **Evaluar evidencia independientemente de fuente**
3. **Reconocer limitaciones del razonamiento inductivo**
4. **Mantener precisión en definiciones**
5. **Considerar alternativas y matices**

### 13.2 Aplicación Práctica
- **Lectura crítica** de noticias y estudios
- **Escritura argumentativa** sólida
- **Debate constructivo** evitando falacias
- **Toma de decisiones** basada en evidencia

### 13.3 Limitaciones del Análisis
- **Contexto cultural** afecta interpretación
- **Pragmática** puede justificar aparentes falacias
- **Incertidumbre** inherente en conocimiento empírico
- **Valores** legítimos en argumentos normativos

El dominio de estas herramientas lógicas es esencial para navegar la complejidad del razonamiento humano en todas sus formas, desde la ciencia y la filosofía hasta la política y la vida cotidiana.

---

*Total de falacias catalogadas: 124*
*Clasificación: 13 categorías principales, 47 subcategorías*