# Teoría Evolutiva de Juegos (Evolutionary Game Theory)

## 1. Definición y origen

La Teoría Evolutiva de Juegos (TEJ) es la aplicación de la teoría de juegos a poblaciones biológicas en evolución. Proporciona un marco formal de contiendas, estrategias y payoffs con el que modelar la competencia darwiniana entre fenotipos o comportamientos heredables.

El campo nace formalmente en 1973 con el artículo de **John Maynard Smith** y **George R. Price**, *"The Logic of Animal Conflict"* (Nature), donde formalizan matemáticamente por primera vez los conflictos animales como contiendas estratégicas analizables con herramientas de teoría de juegos.

**Diferencia clave con la teoría de juegos clásica (von Neumann/Morgenstern):**

| Teoría de juegos clásica | Teoría evolutiva de juegos |
|---|---|
| Los jugadores son racionales y eligen su estrategia deliberadamente | Los jugadores no razonan: nacen con una estrategia heredada genéticamente |
| El equilibrio se busca vía razonamiento estratégico mutuo | El equilibrio emerge de la selección diferencial (reproducción de los más aptos) |
| Foco en el resultado de un juego puntual | Foco en la dinámica de cambio de frecuencias estratégicas en el tiempo |
| Payoff = utilidad | Payoff = *fitness* (éxito reproductivo relativo) |

## 2. Motivación original: el problema del comportamiento ritualizado

El campo surge para resolver una pregunta etológica concreta: ¿por qué la mayoría de los conflictos animales por recursos consisten en despliegues ritualizados y no en combates letales? Etólogos como **Niko Tinbergen** y **Konrad Lorenz** habían propuesto que este comportamiento existía "por el bien de la especie" (selección de grupo). Maynard Smith consideró esa explicación incompatible con la lógica darwiniana de selección a nivel individual, y —siguiendo una sugerencia de George Price— recurrió al aparato matemático de la teoría de juegos para demostrar que el comportamiento moderado podía emerger de estrategias puramente egoístas a nivel de gen, sin apelar a bien común alguno.

## 3. El mecanismo: dinámica de replicadores

El motor matemático central de la TEJ es la **ecuación de replicador** (*replicator equation*), que describe cómo cambia la frecuencia de una estrategia en la población en función de si su payoff está por encima o por debajo del payoff medio de la población.

Supuestos habituales del modelo continuo clásico:
- Población infinita
- Tiempo continuo
- Emparejamiento aleatorio completo (*complete mixing*)
- Reproducción asexual, sin mutación (herencia fiel de la estrategia)

Ciclo básico del modelo:
1. Una población con una mezcla de estrategias (P_n) se enfrenta en contiendas emparejadas.
2. Cada contienda produce un payoff en unidades de fitness según la matriz de pagos del juego.
3. Las estrategias con mayor fitness relativo se replican más; las de menor fitness son eliminadas (dinámica de replicador).
4. Se genera la siguiente generación (P_n+1) y el ciclo se repite indefinidamente.

El resultado de interés no es un único ganador sino, con frecuencia, un **estado estable de mezcla poblacional** que resiste la invasión de estrategias mutantes.

## 4. El concepto central: Estrategia Evolutivamente Estable (ESS)

La **ESS** (*Evolutionarily Stable Strategy*), formalizada por Maynard Smith, es el análogo evolutivo del equilibrio de Nash, con un criterio añadido: una estrategia es ESS si, cuando domina la población, ninguna estrategia mutante rara puede invadirla con éxito.

Puntualizaciones importantes sobre qué **no** es una ESS:
- No es necesariamente la estrategia que maximiza el fitness absoluto de la población.
- No es necesariamente única: pueden coexistir varios estados ESS posibles según las condiciones iniciales.
- No siempre existe: hay juegos (como el de "piedra-papel-tijera") sin ningún ESS puro, solo ciclos alrededor de un equilibrio de Nash.
- No es una estrategia "invencible" en sentido absoluto, solo no invadible en las condiciones del modelo.

## 5. Juegos representativos

### 5.1 Halcón-Paloma (Hawk-Dove)

El primer juego que analizó Maynard Smith. Modela una disputa por un recurso compartible entre dos morfotipos de una misma especie: el halcón, que escala el conflicto hasta ganar o resultar herido, y la paloma, que se retira ante la escalada.

Matriz de pagos (V = valor del recurso, C = coste de perder un enfrentamiento):

| | vs. Halcón | vs. Paloma |
|---|---|---|
| **Halcón** | (V−C)/2 | V |
| **Paloma** | 0 | V/2 |

Cuando el coste de perder (C) supera el valor del recurso (V) —la situación habitual en la naturaleza— el sistema converge a un ESS mixto donde la proporción de halcones en la población es V/C. Este resultado explica por qué la mayoría de los conflictos animales son ritualizados y no letales, sin necesidad de apelar a selección de grupo.

### 5.2 Guerra de desgaste (War of Attrition)

Modela disputas por un recurso no compartible donde el coste se acumula con el tiempo de espera/despliegue, en lugar de resolverse en un único combate. La solución óptima es una estrategia de "farol" (bluffing) con tiempos de espera aleatorios extraídos de una distribución específica (resuelta por Bishop y Cannings, 1978, y aplicada empíricamente por Parker y Thompson, 1980, al comportamiento de moscas del estiércol).

### 5.3 Estrategia "Bourgeois"

Introduce una asimetría —típicamente la posesión previa del recurso— como regla de desempate: atacar si se posee el recurso, retirarse si no. Se observa en contiendas de camarones mantis y de mariposas *Pararge aegeria*.

### 5.4 Dilema del prisionero iterado

El juego más estudiado en toda la teoría de juegos, central para explicar la evolución de la cooperación y el altruismo. En su versión repetida, la estrategia **Tit-for-Tat** (cooperar en la primera ronda, después replicar la última jugada del oponente), popularizada por los torneos computacionales de **Robert Axelrod**, resultó ser notablemente exitosa y robusta frente a estrategias rivales.

### 5.5 Piedra-papel-tijera (RPS) en poblaciones naturales

Un caso empírico célebre: la lagartija de mancha lateral (*Uta stansburiana*) presenta tres morfos de garganta (naranja, azul, amarillo) que compiten en un ciclo no transitivo de dominancia sin ESS puro, documentado por Sinervo y Lively (1996). Es uno de los ejemplos naturales más citados de dinámica evolutiva cíclica sin punto de equilibrio estable.

## 6. Extensiones teóricas relevantes

- **Selección de parentesco (kin selection) / fitness inclusivo** — W. D. Hamilton formalizó cómo el altruismo hacia parientes genéticos puede ser favorecido por selección natural cuando el beneficio ponderado por el grado de parentesco supera el coste.
- **Reciprocidad directa e indirecta** — marco para la cooperación entre no-parientes, desarrollado por Axelrod, Hamilton, y posteriormente Nowak y Sigmund (evolución de la reciprocidad indirecta vía reputación).
- **Teoría de juegos espaciales / evolutiva en grafos** — sustituye el emparejamiento aleatorio por interacción en una retícula o red, mostrando cómo focos locales de cooperación pueden invadir poblaciones de defectores (base de la *evolutionary graph theory*).
- **Efecto "green-beard"** — señales arbitrarias correlacionadas evolutivamente con la estrategia, relevante para el estudio del etnocentrismo y el reconocimiento de parentesco no genealógico.
- **Principio del hándicap** (Amotz Zahavi, formalizado matemáticamente por Alan Grafen) — explica señales costosas y aparentemente desadaptativas (como la cola del pavo real) como mecanismos de señalización honesta ligados al *resource holding potential*.
- **Coevolución competitiva y mutualista** — dinámicas de tipo Reina Roja (carrera armamentista, ej. tritón tóxico *Taricha granulosa* vs. serpiente jarretera) y dinámicas mutualistas (ej. orquídea de Darwin y su polinizador).

## 7. Aplicaciones fuera de la biología

La TEJ ha influido notablemente en:
- **Economía** — dinámica de convenciones, selección de equilibrios, economía institucional evolutiva (Kandori, 1997).
- **Sociología y antropología** — evolución del etnocentrismo (Hammond y Axelrod, 2006), normas sociales.
- **Redes y ciencias de la computación** — teoría de juegos en redes inalámbricas, algoritmos genéticos, sistemas multiagente.
- **Filosofía** — fundamentos evolutivos de la moral y la cooperación (ver *Stanford Encyclopedia of Philosophy*, enlace abajo).

## 8. Bibliografía primaria

- Maynard Smith, J.; Price, G. R. (1973). "The Logic of Animal Conflict". *Nature*, 246(5427): 15–18. DOI: [10.1038/246015a0](https://doi.org/10.1038/246015a0)
- Maynard Smith, J. (1982). *Evolution and the Theory of Games*. Cambridge University Press. ISBN 978-0-521-28884-2
- Axelrod, R. (1984). *The Evolution of Cooperation*. Basic Books. ISBN 0-465-02121-2
- Axelrod, R.; Hamilton, W. D. (1981). "The Evolution of Cooperation". *Science*, 211(4489): 1390–1396. DOI: [10.1126/science.7466396](https://doi.org/10.1126/science.7466396)
- Hofbauer, J.; Sigmund, K. (1998). *Evolutionary Games and Population Dynamics*. Cambridge University Press. ISBN 0-521-62570-X
- Weibull, J. W. (1995). *Evolutionary Game Theory*. MIT Press.
- Dawkins, R. (2006). *The Selfish Gene* (30th anniversary ed.). Oxford University Press. ISBN 978-0-19-929115-1
- Sandholm, W. H. *Population Games and Evolutionary Dynamics*. MIT Press. ISBN 0262195879
- Nowak, M. A. (2006). *Evolutionary Dynamics*. Harvard University Press. ISBN 978-0-674-02338-3
- Sigmund, K. *Games of Life*. Oxford University Press, 1993. ISBN 0198547838
- Vincent, T.; Brown, J. (2005). *Evolutionary Game Theory, Natural Selection, and Darwinian Dynamics*. Cambridge University Press. ISBN 978-0-521-84170-2
- Samuelson, L. (2002). "Evolution and Game Theory". *Journal of Economic Perspectives*, 16(2): 46–66. DOI: [10.1257/0895330027256](https://doi.org/10.1257/0895330027256)
- Nowak, M. A.; Sigmund, K. (1998). "Evolution of Indirect Reciprocity by Image Scoring". *Nature*, 393: 573–575. DOI: [10.1038/31225](https://doi.org/10.1038/31225)
- Sinervo, B.; Lively, C. M. (1996). "The Rock-Scissors-Paper Game and the Evolution of Alternative Male Strategies". *Nature*, 340: 246. 
- Bishop, D. T.; Cannings, C. (1978). "A Generalized War of Attrition". *Journal of Theoretical Biology*, 70: 85–124.
- Zahavi, A. (1975). "Mate Selection – A Selection for a Handicap". *Journal of Theoretical Biology*, 53(1): 205–214. DOI: [10.1016/0022-5193(75)90111-3](https://doi.org/10.1016/0022-5193(75)90111-3)
- Grafen, A. (1990). "Biological Signals as Handicaps". *Journal of Theoretical Biology*, 144(4): 517–546. DOI: [10.1016/S0022-5193(05)80088-8](https://doi.org/10.1016/S0022-5193(05)80088-8)
- Hammond, R. A.; Axelrod, R. (2006). "The Evolution of Ethnocentrism". *Journal of Conflict Resolution*, 50(6): 926–936. DOI: [10.1177/0022002706293470](https://doi.org/10.1177/0022002706293470)
- Nowak, M. A.; Tarnita, C. E.; Wilson, E. O. (2010). "The Evolution of Eusociality". *Nature*, 466: 1057–1062. DOI: [10.1038/nature09205](https://doi.org/10.1038/nature09205) (artículo controvertido que cuestiona la explicación estándar vía selección de parentesco)
- Bergstrom, C.; Lachmann, M. (2003). "The Red King Effect: When the Slowest Runner Wins the Coevolutionary Race". *PNAS*, 100(2): 593–598. DOI: [10.1073/pnas.0134966100](https://doi.org/10.1073/pnas.0134966100)
- Newton, J. (2018). "Evolutionary Game Theory: A Renaissance". *Games*, 9(2): 31. DOI: [10.3390/g9020031](https://doi.org/10.3390/g9020031) — [PDF](https://www.econstor.eu/bitstream/10419/179191/1/games-09-00031-v2.pdf)

## 9. Recursos y enlaces

- [Evolutionary game theory — Wikipedia (EN)](https://en.wikipedia.org/wiki/Evolutionary_game_theory)
- [Evolutionary Game Theory — Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/game-evolutionary/)
- [Número especial "Half a century of evolutionary games" — Philosophical Transactions of the Royal Society B (2023)](https://royalsocietypublishing.org/toc/rstb/2023/378/1876)
- [Networks, Crowds, and Markets — Cornell (Easley & Kleinberg), cap. 7 sobre teoría evolutiva de juegos (PDF)](https://www.cs.cornell.edu/home/kleinber/networks-book/networks-book-ch07.pdf)

---

*Nota metodológica: este documento sintetiza y reorganiza información de fuentes académicas y de la entrada de Wikipedia sobre el tema, reescrita en lenguaje propio. Para citas textuales o mayor detalle matemático, se recomienda acudir directamente a las fuentes primarias listadas en la bibliografía.*
