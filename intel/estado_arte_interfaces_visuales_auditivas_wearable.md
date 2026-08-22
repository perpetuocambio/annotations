# Estado del arte en interfaces visuales y auditivas wearable: lentes de contacto inteligentes, prótesis retinianas acústicas, audífonos y sustitución sensorial visual-auditiva

**Resumen**

Este documento presenta una revisión narrativa del estado del arte en tecnologías wearable que buscan ampliar, restaurar o sustituir la percepción visual y auditiva. Se analizan cuatro áreas principales: (1) lentes de contacto electrónicas con capacidad de display, incluyendo sistemas activos de proyección retiniana y elementos ópticos pasivos; (2) neuromodulación ultrasónica de la retina y prótesis retinianas acústicas; (3) audífonos, auriculares e interfaces auditivo-visuales; y (4) holografía acústica como tecnología de conformación de campos sonoros. La revisión se basa en literatura científica revisada por pares, revisiones especializadas y prototipos industriales documentados entre 2012 y agosto de 2026. Se concluye que **no existe evidencia científica de un dispositivo pasivo capaz de transmitir imágenes dinámicas a través de una lentilla o un audífono mediante sonido audible**. Las aproximaciones existentes requieren siempre una fuente de energía externa o de ambiente, y las resoluciones espaciales alcanzadas por la estimulación acústica neural están todavía muy por debajo de las necesidades de la visión funcional.

**Palabras clave**: lentes de contacto inteligentes, realidad aumentada en lentillas, prótesis retiniana acústica, neuromodulación por ultrasonido, sustitución sensorial visual-auditiva, audífonos, *earables*, holografía acústica.

---

## 1. Introducción

La miniaturización de la electrónica, los avances en materiales flexibles y la creciente comprensión de la neuroplasticidad han impulsado el desarrollo de dispositivos wearable destinados a ampliar o restaurar los sentidos. Dentro de este campo, dos ideas frecuentemente confundidas son especialmente relevantes: **transmitir imágenes a través de una lentilla de contacto de forma pasiva** y **que un audífono genere imágenes a partir del sonido**. Ambas nociones mezclan conceptos de óptica, neurofisiología, energía inalámbrica y sustitución sensorial, por lo que conviene distinguirlas con rigor.

Este documento tiene como objetivo sintetizar el conocimiento disponible hasta agosto de 2026 sobre las tecnologías más cercanas a esas ideas: lentes de contacto con display, prótesis retinianas acústicas, audífonos avanzados y sistemas de sustitución sensorial visual-auditiva. Se adopta un enfoque de revisión narrativa, priorizando fuentes revisadas por pares y complementando con informes técnicos de prototipos industriales cuando la literatura académica aún no los cubre.

## 2. Metodología

Se realizó una revisión narrativa de la literatura científica y técnica publicada entre 2012 y agosto de 2026. Los criterios de inclusión fueron:

- Artículos de investigación y revisiones en revistas indexadas sobre lentes de contacto electrónicas, displays oculares, neuromodulación por ultrasonido, prótesis retinianas acústicas, audífonos avanzados y sustitución sensorial visual-auditiva.
- Artículos de conferencias de alto impacto (ACM CHI, IEEE) en interfaces humano-computadora aplicadas a la accesibilidad auditiva.
- Informes técnicos y comunicados de prototipos industriales relevantes, identificados como tales cuando no existe equivalente académico revisado por pares.

Las búsquedas se orientaron con términos como *smart contact lens display*, *retinal projection contact lens*, *ultrasonic retinal stimulation*, *acoustic retinal prosthesis*, *visual-to-auditory sensory substitution*, *light-driven hearing aid* y *acoustic holography*.

## 3. Lentes de contacto electrónicas y displays

### 3.1 Panorama general

Las lentes de contacto electrónicas (*electronic contact lenses*, e-CL) integran sensores, circuitos, antenas y, en algunos diseños, microdisplays en un sustrato transparente y biocompatible que se apoya sobre la córnea. Shaker et al. (2023) revisan los principales avances, distinguiendo aplicaciones en salud (monitorización de presión intraocular, glucosa), corrección visual adaptativa, realidad aumentada (RA) y asistencia a personas con baja visión [1]. Xia et al. (2023) subrayan que la interacción humano-máquina mediante lentes inteligentes exige componentes de micrométrica escala, sistemas de energía inalámbrica y compatibilidad con el movimiento ocular y el intercambio de oxígeno [2].

### 3.2 Displays activos y proyección retiniana

El prototipo más visible en el ámbito industrial es **Mojo Lens**, desarrollado por Mojo Vision. Se trata de una lentilla con un microdisplay MicroLED monocromo de aproximadamente 0,48 mm y 14.000 ppi situado delante de la pupila; la luz se proyecta directamente sobre la fóvea, permitiendo ver texto, gráficos o vídeo superpuestos al campo visual [3, 4]. El sistema requiere un dispositivo externo de muñeca o un smartphone para alimentación, procesamiento y comunicación inalámbrica, y ha recibido la designación *Breakthrough Device* de la FDA para ensayos en baja visión [3].

En el ámbito académico, Chen et al. (2019) propusieron un *foveated contact lens display* que adapta la resolución del contenido mostrado a la región foveal del ojo, reduciendo la carga computacional y energética [5]. Wu et al. (2018) presentaron un *retinal-projection-based near-eye display* en el que una lentilla de contacto colabora con un sistema externo para proyectar imágenes directamente sobre la retina [6]. Ambos enfoques son activos: necesitan una fuente luminosa, electrónica de control y energía.

### 3.3 Óptica pasiva: hologramas y metasuperficies

Una aproximación verdaderamente pasiva es la **lentilla holográfica**. Sano y Takaki (2021) describieron una lentilla de contacto con un elemento holográfico de fase integrado que genera imágenes tridimensionales enfocables a partir de la luz ambiente [7]. Al no requerir electricidad, este diseño resuelve el problema energético, pero a costa de la flexibilidad: la imagen está grabada en el holograma y no puede cambiarse dinánicamente. Por tanto, no permite "transmitir" vídeo o imágenes en tiempo real.

### 3.4 Energía y comunicación inalámbrica

La alimentación es uno de los cuellos de botella decisivos. Yuan et al. (2021) concluyen que la transferencia de energía por **acoplamiento inductivo** es la opción más prometedora para lentes de contacto electrónicas, empleando antenas de bucle en bandas ISM y tecnologías RFID/NFC [8]. Los sensores pasivos RFID pueden medir presión intraocular o glucosa, pero no generan luz ni displays.

Salzenstein et al. (2025) exploran fuentes autónomas, como baterías basadas en la salinidad del fluido lacrimal, nanogeneradores activados por el parpadeo y antenas de bucle de 900 MHz–1,1 GHz para comunicación [9]. Hsu (2019), citado por Xia et al. (2023), propuso una metodología para convertir la lentilla inteligente en un sistema **semi-pasivo**, es decir, con una fuente de energía ambiente o externa limitada [2].

### 3.5 Retos técnicos

Los retos principales para las lentes de contacto con display son:

- **Biocompatibilidad y confort**: el sustrato debe ser permeable al oxígeno, hidratante y mecánicamente estable.
- **Tasa de absorción específica (SAR)**: las antenas de RF cerca del ojo deben cumplir límites estrictos de exposición electromagnética [9].
- **Miniaturización**: integrar microdisplay, ASIC, antena y gestión de energía en menos de 15 mm de diámetro.
- **Corrección visual**: mantener la óptica de corrección de ametropías junto con el display.

## 4. Neuromodulación ultrasónica y prótesis retinianas acústicas

### 4.1 Fundamentos de estimulación retinal con ultrasonido

El **ultrasonido** (ondas mecánicas por encima de 20 kHz) puede modificar la actividad neuronal sin contacto directo. Menz et al. (2013) demostraron que el ultrasonido focalizado estimula la retina de salamandra con precisión espacial del orden de 90 µm, evocando respuestas ON y OFF similares a las visuales [10]. Naor et al. (2012) sentaron las bases de diseño de una prótesis retinal acústica multifocal, proponiendo un array de transductores que proyecte patrones acústicos complejos sobre la retina [11].

Lo et al. (2020) revisaron los mecanismos fisiológicos y de ingeniería de la estimulación retinal con ultrasonido en el rango de 0,5 a 43 MHz, concluyendo que la neuromodulación ultrasónica es un campo emergente con potencial terapéutico, aunque todavía en etapa preclínica [12].

### 4.2 Arrays de transductores tipo lentilla

Gao et al. (2017) simularon un array de 256 elementos con forma de lentilla, operando a 2,5 MHz y acoplado a la córnea a través de la película lagrimal. La resolución lateral estimada fue de **1,3 mm** [13]. Para reducir la exposición del cristalino, Yu et al. (2019) propusieron un anillo de transductores de 5 MHz, que Xu et al. (2022) simularon mejorando la resolución a aproximadamente **0,6 mm** [14, 15].

Para contextualizar, una agudeza visual funcional requiere distinguir puntos separados por unos pocos micrómetros en la retina; las resoluciones actuales de la estimulación ultrasónica están tres órdenes de magnitud por encima de ese umbral.

### 4.3 Avances recientes: arrays flexibles y estimulación de alta resolución

Jiang et al. (2022) fabricaron **arrays piezoeléctricos flexibles** para estimulación retinal inducida por ultrasonido, con el objetivo de crear prótesis visuales biomiméticas que imiten la forma del ojo [16]. Qian et al. (2022) demostraron estimulación retinal no invasiva con alta resolución espaciotemporal en modelos animales con degeneración retinal, logrando respuestas neuronales reproducibles [17].

Un avance significativo se publicó en 2024: Lu et al. desarrollaron un sistema de **neuroestimulación ultrasónica guiada por imagen con patrones 2D arbitrarios**, aplicado a la restauración visual. Mediante un array de transductores y algoritmos de conformación del haz, consiguieron estimular regiones retinianas específicas con resolución y flexibilidad superiores a los enfoques anteriores [18].

### 4.4 Estimulación cortical visual

Más allá de la retina, el ultrasonido focalizado transcraneal puede modular la corteza visual primaria (V1). Lee et al. (2016) reportaron que la estimulación de V1 en humanos evoca **fosfenos** simples (manchas luminosas sin forma) y activa redes visuales asociadas [19]. Gong et al. (2023) combinaron ultrasonido con estimulación visual híbrida in vivo para estudiar la modulación cortical [20]. Estos trabajos confirman que el ultrasonido puede inducir sensaciones visuales, pero de muy baja complejidad.

### 4.5 Mecanismos, resolución y seguridad

Los mecanismos propuestos para la neuromodulación ultrasónica incluyen fuerza de radiación, cambios en la capacitancia de membrana, canales ionicos mecanosensibles y, en intensidades altas, cavitación y calentamiento [12]. La resolución espacial depende de la frecuencia y la apertura del transductor; frecuencias más altas mejoran la resolución pero aumentan la atenuación y el riesgo térmico en el cristalino. Por ello, cualquier prótesis retinal acústica clínica deberá operar dentro de los límites de seguridad de la FDA para ultrasonido oftalmológico [12].

## 5. Audífonos, auriculares e interfaces auditivo-visuales

### 5.1 Audífonos acústicos convencionales y limitaciones

Los audífonos modernos capturan sonido ambiente, lo procesan digitalmente y lo reproducen mediante un receptor acústico en el canal auditivo. A pesar de los avances en cancelación de ruido, micrófonos direccionales y conectividad inalámbrica, siguen limitados por el **feedback acústico**, la **occlusión del canal** y la dificultad de amplificar frecuencias muy altas o muy bajas en ajustes ventilados.

### 5.2 Audífonos de contacto accionados por luz

**Earlens** es un audífono comercial aprobado por la FDA en 2015 que utiliza un pequeño láser infrarrojo para transmitir señal y energía a una "lente" colocada en contacto directo con el tímpano [21]. La lente contiene un fotodetector y un motor que vibra el tímpano mecánicamente, ampliando el ancho de banda efectivo hasta 10 kHz [22]. Aunque se comercializa como "accionado por luz", no utiliza sonido como portador de información ni genera imágenes.

### 5.3 Transductores de contacto en el tímpano

Vibrosonic ha desarrollado una "lentilla auditiva" con un microaltavoz piezoeléctrico situado directamente sobre el tímpano, capaz de amplificar frecuencias de 80 Hz a 12 kHz mediante estimulación mecánica directa [23]. Mejora la fidelidad sonora y reduce el feedback, pero sigue siendo un dispositivo exclusivamente auditivo.

### 5.4 Auriculares con sensores visuales y consciencia sonora en HMD

La integración de cámaras en auriculares (*earables*) es un área de desarrollo industrial. Aunque no existen productos comerciales anunciados de forma oficial hasta agosto de 2026, los análisis técnicos sugieren que las cámaras en auriculares podrían añadir contexto visual para subtitulado en vivo, localización de fuentes sonoras y traducción [24].

En el ámbito académico, Jain et al. (2015) diseñaron visualizaciones en **gafas de realidad aumentada** (Google Glass) para personas sordas o con pérdida auditiva, mostrando la dirección y el volumen de los hablantes mediante flechas y otros indicadores visuales [25]. Este trabajo demuestra una interfaz auditivo-visual, aunque la imagen se presenta en una pantalla externa, no en el oído.

### 5.5 Sustitución sensorial visual-auditiva

La sustitución sensorial convierte información visual en otro formato sensorial. El sistema más estudiado es **The vOICe**, desarrollado por Meijer (1992): una cámara captura una imagen y un algoritmo la transforma en un "paisaje sonoro" en el que la posición horizontal corresponde al tiempo y al panorama estéreo, la posición vertical a la frecuencia y el brillo al volumen [26].

Striem-Amit et al. (2012) demostraron que personas ciegas de nacimiento pueden alcanzar, tras entrenamiento, una **agudeza visual funcional** superior al umbral de ceguera de la OMS utilizando The vOICe [27]. Maidenbaum et al. (2014) y Proulx et al. (2014) revisaron el campo, destacando tanto el potencial de rehabilitación visual como la necesidad de estandarizar entrenamientos y medir resultados funcionales [28, 29].

Es importante subrayar que, en este caso, el sonido **codifica** información visual, pero no se genera dentro de un audífono convencional ni se produce una imagen real en el ojo.

## 6. Holografía acústica e imagen por sonido

### 6.1 Holografía acústica

La **holografía acústica** permite conformar campos de presión ultrasónica tridimensionales mediante metasuperficies o arrays de transductores. Burstow et al. (2025) revisaron las aplicaciones biomédicas, incluyendo neuroestimulación, liberación de fármacos y manipulación de partículas [30]. Jiménez-Gambín et al. (2019, 2020) demostraron hologramas acústicos capaces de enfocar campos ultrasónicos arbitrarios a través del cráneo [31, 32].

Aunque esta tecnología genera "imágenes acústicas" en el sentido de patrones de presión 3D, no produce imágenes visuales dentro del ojo humano ni puede ser considerada un display pasivo.

### 6.2 Cámaras acústicas e imagen fotoacústica

Las **cámaras acústicas** son arrays de micrófonos que localizan fuentes sonoras y las representan visualmente para diagnóstico industrial o monitoreo ambiental [33]. La **imagen fotoacústica** combina luz y ultrasonido para obtener imágenes biomédicas de alta resolución; en oftalmología, se ha propuesto para caracterizar retina y coroides [34]. Ambas tecnologías generan representaciones visuales externas, no imágenes proyectadas en el sistema visual del usuario.

## 7. Discusión

### 7.1 Síntesis comparativa

La Tabla 1 resume las principales tecnologías revisadas, indicando su principio de funcionamiento, su nivel de madurez y sus limitaciones más relevantes.

**Tabla 1. Comparación de tecnologías visuales y auditivas wearable.**

| Tecnología | Principio | Energía | Resolución / información visual | Madurez | Limitaciones principales |
|---|---|---|---|---|---|
| Lentes de contacto activas (Mojo Lens, Chen, Wu) | MicroLED + proyección retiniana | Externa (RF/inductiva) | Hasta ~14.000 ppi (industrial) / diseños académicos | Prototipos / preclínico | Biocompatibilidad, SAR, alimentación, oxigenación |
| Lentes holográficas pasivas (Sano & Takaki) | Holograma de fase en lentilla | No requiere | Imagen 3D estática pregrabada | Laboratorio | No dinámica; imagen fija |
| Sensores RFID pasivos en lentillas | Modulación de RF | RF ambiente (lector) | Ninguna (datos biométricos) | Prototipos / preclínico | Sin capacidad de display |
| Prótesis retinal acústica (Gao, Yu, Lu) | Ultrasonido focalizado estimula retina | Externa | ~0,6–1,3 mm en simulación; patrones 2D recientes | Preclínico / animal | Baja resolución; seguridad térmica; mecanismos neuronales |
| Estimulación cortical visual por ultrasonido | Ultrasonido transcraneal sobre V1 | Externa | Fosfenos simples | Ensayos humanos tempranos | Resolución muy baja; atenuación craneal |
| Audífonos accionados por luz (Earlens) | Láser + vibración mecánica del tímpano | Batería + luz | Ninguna | Comercial | Requiere ajuste médico; no imágenes |
| Transductor de contacto (Vibrosonic) | Microaltavoz piezoeléctrico sobre tímpano | Batería | Ninguna | Comercial temprano | Solo audio; miniaturización |
| Sustitución sensorial visual-auditiva (vOICe) | Sonido codifica imagen de cámara | Batería (sistema externo) | Hasta ~25.000 píxeles teóricos; agudeza funcional >20/400 | Investigación / uso comunitario | Requiere entrenamiento prolongado; no es wearable ocular |
| Holografía acústica | Conformación de campos de presión | Externa | Patrones de presión 3D | Laboratorio / aplicaciones industriales | No genera imágenes visuales perceptuales |

### 7.2 Límites físicos y técnicos

La idea de una lentilla o un audífono **pasivo** que transmita imágenes dinámicas con solo sonido choca con varios principios físicos:

1. **Conservación de la energía**: generar luz o modificar un patrón óptico dinámico requiere energía. Un dispositivo pasivo puede moldear luz ambiente (holograma estático) o reflejar una señal RFID, pero no puede crear imágenes cambiantes sin fuente de energía.
2. **Difracción y resolución**: el sonido audible tiene longitudes de onda de centímetros, imposibles de enfocar con la precisión micrométrica requerida en la retina. Incluso el ultrasonido de alta frecuencia, con longitudes de onda de 0,1–1 mm, está lejos de la resolución de un fotoreceptor (~1–4 µm).
3. **Seguridad térmica y mecánica**: proyectar suficiente energía ultrasónica para crear patrones visuales detallados podría superar los límites de exposición segura para el cristalino y la retina.
4. **Codificación neural**: aunque el ultrasonido active neuronas visuales, el cerebro interpreta esas activaciones como fosfenos simples. La generación de imágenes reconocibles requeriría miles de canales independientes con latencias y topografías precisas.

### 7.3 Barreras clínicas y regulatorias

- **FDA / EMA**: los dispositivos que contactan la córnea o el tímpano requieren ensayos de biocompatibilidad, estabilidad mecánica y seguridad eléctrica/acústica.
- **Estandarización**: no existen aún normas específicas para displays en lentillas o para neuroestimulación ultrasónica ocular.
- **Evidencia clínica**: la mayoría de los avances en prótesis retinianas acústicas y lentes con display se encuentran en fase preclínica o en ensayos iniciales.

### 7.4 Direcciones futuras

- **Hibridación óptica-acústica**: combinar displays MicroLED con estimulación ultrasónica selectiva para usuarios con diferentes etiologías de ceguera.
- **Sistemas semi-pasivos avanzados**: integrar harvesting de energía del parpadeo, lágrimas o RF para reducir la dependencia de baterías [9].
- **Codificación asistida por IA**: usar algoritmos de aprendizaje profundo para convertir escenas visuales en patrones de estimulación neural o en representaciones sonoras más intuitivas.
- **Materiales nuevos**: hidrogeles conductores, metasuperficies flexibles y polímeros biocompatibles con alta permeabilidad al oxígeno.

## 8. Conclusiones

El estado del arte se organizan en cuatro familias bien diferenciadas:

1. **Displays activos en lentillas**, que proyectan luz pero requieren energía y procesamiento externos.
2. **Óptica pasiva en lentillas**, que puede mostrar imágenes estáticas pregrabadas mediante hologramas.
3. **Neuromodulación ultrasónica**, que estimula la retina o la corteza visual para generar fosfenos de baja resolución.
4. **Sustitución sensorial visual-auditiva**, que codifica imágenes en sonidos interpretables por el cerebro.

La investigación actual avanza de forma paralela en materiales, energía inalámbrica, neurofisiología acústica e interfaces multimodales. Sin embargo, los límites de energía, resolución espacial y seguridad biológica indican que cualquier dispositivo funcional será, durante las próximas décadas, activo, visible y regulado, lejos de la noción de una interfaz pasiva e invisible.

---

## Referencias

1. Shaker LM, Al-Amiery A, Takriff MS, Wan Isahak WNR, Mahdi AS, Al-Azzawi WK. The Future of Vision: A Review of Electronic Contact Lenses Technology. *ACS Photonics*. 2023;10(6):1671-1686. DOI: [10.1021/acsphotonics.3c00523](https://doi.org/10.1021/acsphotonics.3c00523)
2. Xia Y, et al. State-of-the-Art in Smart Contact Lenses for Human-Machine Interaction. *UCL Discovery*. 2023. https://discovery.ucl.ac.uk/id/eprint/10180151/1/State-of-the-Art%20in%20Smart%20Contact%20Lenses%20for%20Human-Machine%20Interaction.pdf
3. Wired. The Display of the Future Might Be in Your Contact Lens. 2020. https://www.wired.com/story/mojo-vision-smart-contact-lens/
4. MiniMicroLED. One New Micro LED Product In Development: AR Smart Contact Lenses. 2024. https://www.minimicroled.com/micro-led-ar-contact-lenses-new-innovations-in-wearable-displays/
5. Chen J, Mi L, Chen CP, Liu H, Jiang J, Zhang W. Design of foveated contact lens display for augmented reality. *Optics Express*. 2019;27(26):38204-38219. DOI: [10.1364/OE.381200](https://doi.org/10.1364/OE.381200)
6. Wu YH, Chen CP, Mi LT, Lu Y, Zhu M, Ren X, Tang R, Maitlo N. Design of retinal-projection-based near-eye display with contact lens. *Optics Express*. 2018;26(9):11553-11567. DOI: [10.1364/OE.26.011553](https://doi.org/10.1364/OE.26.011553)
7. Sano J, Takaki Y. Holographic contact lens display that provides focusable images for eyes. *Optics Express*. 2021;29(7):10568-10579. DOI: [10.1364/OE.419604](https://doi.org/10.1364/OE.419604)
8. Yuan M, Das R, McGlynn E, Ghannam R, Abbasi QH, Heidari H. Wireless communication and power harvesting in wearable contact lens sensors. *IEEE Sensors Journal*. 2021;21(11):12484-12497. DOI: [10.1109/JSEN.2021.3055077](https://doi.org/10.1109/JSEN.2021.3055077)
9. Salzenstein P, Guichardaz B, Bessou AM, Pavlyuchenko E, Comte M, Pogumirsky MV. Self-powered smart contact lenses: a multidisciplinary approach to micro-scale energy and 900 MHz–1.1 GHz bandwidth microfabricated loop antennas communication systems. *arXiv:2505.15593*. 2025. https://arxiv.org/abs/2505.15593
10. Menz MD, Oralkan Ö, Khuri-Yakub PT, Baccus SA. Precise neural stimulation in the retina using focused ultrasound. *Journal of Neuroscience*. 2013;33(10):4550-4560. DOI: [10.1523/JNEUROSCI.3521-12.2013](https://doi.org/10.1523/JNEUROSCI.3521-12.2013)
11. Naor O, Hertzberg Y, Zemel E, Kimmel E, Shoham S. Towards multifocal ultrasonic neural stimulation II: design considerations for an acoustic retinal prosthesis. *Journal of Neural Engineering*. 2012;9(2):026006. DOI: [10.1088/1741-2560/9/2/026006](https://doi.org/10.1088/1741-2560/9/2/026006)
12. Lo PA, Huang K, Zhou Q, Humayun MS, Yue L. Ultrasonic Retinal Neuromodulation and Acoustic Retinal Prosthesis. *Micromachines*. 2020;11(10):929. DOI: [10.3390/mi11100929](https://doi.org/10.3390/mi11100929)
13. Gao M, Yu Y, Zhao H, Li G, Jiang H, Wang C, Cai F, Chan LLH, Chiu B, Qian W, Qiu W, Zheng H. Simulation Study of an Ultrasound Retinal Prosthesis With a Novel Contact-Lens Array for Noninvasive Retinal Stimulation. *IEEE Transactions on Neural Systems and Rehabilitation Engineering*. 2017;25:1605-1611. DOI: [10.1109/TNSRE.2017.2682923](https://doi.org/10.1109/TNSRE.2017.2682923)
14. Yu Y, Zhang Z, Cai F, Su M, Thomas BB, Humayun MS, Zhou Q, Qian X. A Novel Racing Array Transducer for Noninvasive Ultrasonic Retinal Stimulation: A Simulation Study. *IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control*. 2019;66(12):1862-1870. DOI: [10.1109/TUFFC.2019.2935701](https://doi.org/10.1109/TUFFC.2019.2935701)
15. Xu C, Lu G, Kang H, Humayun MS, Zhou Q. Design and Simulation of a Ring Transducer Array for Ultrasound Retinal Stimulation. *Micromachines*. 2022;13(9):1536. DOI: [10.3390/mi13091536](https://doi.org/10.3390/mi13091536)
16. Jiang L, Lu G, Zeng Y, Sun Y, Kang H, Harford J, Gong C, Humayun MS, Chen Y, Zhou Q. Flexible ultrasound-induced retinal stimulating piezo-arrays for biomimetic visual prostheses. *Nature Communications*. 2022;13:3853. DOI: [10.1038/s41467-022-31599-4](https://doi.org/10.1038/s41467-022-31599-4)
17. Qian X, Lu G, Thomas BB, Li R, Chen X, Shung KK, Humayun MS, Zhou Q. Noninvasive Ultrasound Retinal Stimulation for Vision Restoration at High Spatiotemporal Resolution. *BME Frontiers*. 2022;2022:9829316. DOI: [10.34133/2022/9829316](https://doi.org/10.34133/2022/9829316)
18. Lu G, Gong C, Sun Y, Qian X, Rajendran Nair DS, Li R, Zeng Y, Ji J, Zhang J, Kang H, Jiang L, Chen J, Chang CF, Thomas BB, Humayun MS, Zhou Q. Noninvasive imaging-guided ultrasonic neurostimulation with arbitrary 2D patterns and its application for high-quality vision restoration. *Nature Communications*. 2024;15:4481. DOI: [10.1038/s41467-024-48683-6](https://doi.org/10.1038/s41467-024-48683-6)
19. Lee W, Kim HC, Jung Y, Chung YA, Song IU, Lee JH, Yoo SS. Transcranial focused ultrasound stimulation of human primary visual cortex. *Scientific Reports*. 2016;6:34026. DOI: [10.1038/srep34026](https://doi.org/10.1038/srep34026)
20. Gong C, Li R, Lu G, Ji J, Zeng Y, Chen J, Chang C, Zhang J, Xia L, Thomas BB, Humayun MS, Zhou Q. Non-Invasive Hybrid Ultrasound Stimulation of Visual Cortex In Vivo. *Bioengineering*. 2023;10(5):577. DOI: [10.3390/bioengineering10050577](https://doi.org/10.3390/bioengineering10050577)
21. Gantz BJ, Perkins R, Murray M, Carr Levy S, Puria S. Light-driven contact hearing aid for broad-spectrum amplification: Safety and effectiveness pivotal study. *Otology & Neurotology*. 2017;38(3):352-359. DOI: [10.1097/MAO.0000000000001284](https://doi.org/10.1097/MAO.0000000000001284)
22. Dundas D, Carr Levy S. The Earlens Light-Driven Hearing Aid: Top 10 Questions and Answers. *Hearing Review*. 2018;25(2):36-39. https://hearingreview.com/hearing-products/hearing-aids/ite/earlens-light-driven-hearing-aid-top-10-questions-answers
23. Fraunhofer IPA / Healthcare in Europe. A 'contact lens' for the ear. 2021. https://healthcare-in-europe.com/en/news/a-contact-lens-for-the-ear.html
24. Hearing Tracker. Apple’s Camera-Equipped AirPods Could Open New Possibilities for Hearing Accessibility. 2026. https://www.hearingtracker.com/news/could-apple-s-camera-equipped-airpods-reveal-new-vistas-for-hearing-accessibility-
25. Jain D, Findlater L, Gilkeson J, Holland B, Duraiswami R, Zotkin D, Vogler C, Froehlich JE. Head-Mounted Display Visualizations to Support Sound Awareness for the Deaf and Hard of Hearing. *Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems (CHI 2015)*. 2015. https://makeabilitylab.cs.washington.edu/media/publications/Jain_HeadMountedDisplayVisualizationsToSupportSoundAwarenessForTheDeafAndHardOfHearing_CHI2015.pdf
26. Meijer PBL. An experimental system for auditory image representations. *IEEE Transactions on Biomedical Engineering*. 1992;39(2):112-121. DOI: [10.1109/10.121642](https://doi.org/10.1109/10.121642)
27. Striem-Amit E, Guendelman M, Amedi A. ‘Visual’ Acuity of the Congenitally Blind Using Visual-to-Auditory Sensory Substitution. *PLoS ONE*. 2012;7(3):e33136. DOI: [10.1371/journal.pone.0033136](https://doi.org/10.1371/journal.pone.0033136)
28. Maidenbaum S, Abboud S, Amedi A. Sensory substitution: closing the gap between basic research and widespread practical visual rehabilitation. *Neuroscience & Biobehavioral Reviews*. 2014;41:3-15. DOI: [10.1016/j.neubiorev.2013.11.007](https://doi.org/10.1016/j.neubiorev.2013.11.007)
29. Proulx MJ, Brown DJ, Pasqualotto A, Meijer P. Multisensory perceptual learning and sensory substitution. *Neuroscience & Biobehavioral Reviews*. 2014;41:16-25. DOI: [10.1016/j.neubiorev.2012.11.017](https://doi.org/10.1016/j.neubiorev.2012.11.017)
30. Burstow R, Andrés D, Jiménez N, Camarena F, Thanou M, Tourneret JY. Acoustic holography in biomedical applications. *Physics in Medicine & Biology*. 2025;70(6):06TR01. DOI: [10.1088/1361-6560/adb89a](https://doi.org/10.1088/1361-6560/adb89a)
31. Jiménez-Gambín S, Jiménez N, Benlloch JM, Camarena F. Holograms to focus arbitrary ultrasonic fields through the skull. *Physical Review Applied*. 2019;12:014016. DOI: [10.1103/PhysRevApplied.12.014016](https://doi.org/10.1103/PhysRevApplied.12.014016)
32. Jiménez-Gambín S, Jiménez N, Camarena F. Transcranial focusing of ultrasonic vortices by acoustic holograms. *Physical Review Applied*. 2020;14:054070. DOI: [10.1103/PhysRevApplied.14.054070](https://doi.org/10.1103/PhysRevApplied.14.054070)
33. MFE Inspection Solutions. What Is Acoustic Imaging? https://mfe-is.com/acoustic-imaging/
34. Retinal Physician. Photoacoustic Microscopy of the Retina and Choroid. 2020. https://www.retinalphysician.com/issues/2020/januaryfebruary/photoacoustic-microscopy-of-the-retina-and-choroid/

---

