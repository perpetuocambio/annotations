# Análisis Técnico Actualizado: Capacidades de Rastreo en Sistemas Vehiculares (2024-2025)

**Documento verificado con fuentes actualizadas a noviembre 2024**

---

## 1. Arquitectura de Hardware y Conectividad

### Tabla Comparativa: Stack Tecnológico Completo

| Componente            | V16                                                                   | eCall                                                             | Telemática Seguros (OBD-II)                         | Telemática Fabricante (TCU)                          |
| --------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------- |
| **Módulo celular**    | NB-IoT/LTE-M cat. NB2/M1                                              | 2G/3G (legado)<br>**4G LTE (eCall NG obligatorio EU desde 2022)** | 3G/4G/5G multi-RAT                                  | **4G/5G multi-RAT + C-V2X**                          |
| **Chipset típico**    | Quectel BC95-G/BG95-M3<br>u-blox SARA-R510S<br>Nordic nRF9160/nRF9161 | Gemalto/Thales EHS6/EHS8<br>Telit LE910C1                         | Quectel EC25/EG915U<br>Sierra Wireless EM/MC series | Qualcomm SA8155P/SA8255P<br>**NXP S32G2/S32G3**      |
| **GNSS**              | GPS L1/L5 + GLONASS + Galileo + BeiDou                                | GPS L1 + GLONASS<br>**Galileo obligatorio EU 2024+**              | GPS L1 (básico)<br>A-GPS opcional                   | Multi-constellation L1/L2/L5<br>**RTK cm-precision** |
| **Procesador**        | ARM Cortex-M33 (64-240 MHz)                                           | ARM Cortex-M4 (100-180 MHz)                                       | ARM Cortex-M4/M7                                    | **ARM Cortex-A53/A78 (2.0-3.0 GHz) octa-core**       |
| **RAM**               | 1-4 MB SRAM                                                           | 512 KB - 2 MB                                                     | 2-8 MB                                              | **4-16 GB LPDDR4X**                                  |
| **Almacenamiento**    | 1-4 MB Flash                                                          | 2-8 MB Flash                                                      | 8-64 MB Flash                                       | **32-256 GB UFS 3.1**                                |
| **Interfaces**        | UART, SPI, I2C, GPIO                                                  | UART, audio digital I2S                                           | OBD-II (CAN 2.0B/K-line)                            | **CAN-FD, Automotive Ethernet, SOME/IP**             |
| **Alimentación**      | Pila 9V (1500 mAh)<br>o 4×AA (2500 mAh)                               | 12V batería vehículo<br>Backup 3.7V Li-ion (200-500 mAh)          | 12V OBD-II (sin backup)                             | 12V vehículo con supercap UPS                        |
| **Consumo activo TX** | 150-280 mA @ 23dBm                                                    | **800 mA - 1.5 A (LTE NG-eCall)**                                 | 200-500 mA                                          | 5-12 W (400-1000 mA @ 12V)                           |
| **Consumo PSM**       | 2-10 µA (NB-IoT PSM)<br>15-30 µA (LTE-M eDRX)                         | N/A (apagado 100% entre ciclos)                                   | 80-300 mA (idle continuo)                           | 300-800 mA (suspensión profunda)                     |
| **Autonomía**         | **24-36 meses standby**<br>3-4h activo continuo                       | Ilimitada (powered by vehicle)                                    | 36-60h si desconectado                              | Ilimitada (powered by vehicle)                       |
| **Cifrado**           | **TLS 1.3 + PSK**<br>AES-256-GCM                                      | **TLS 1.2 (NG-eCall)**<br>Sin cifrado (eCall legacy)              | TLS 1.2 variable                                    | **TLS 1.3 + certificados X.509**<br>Secure boot      |

---

## 2. Protocolos de Red Celular: Análisis Profundo

### 2.1 NB-IoT (Narrowband IoT) - Usado en V16

**Especificaciones 3GPP Release 14/15/16/17 (2024)**

| Parámetro                   | Release 13 (2016)                 | **Release 17 (2024)**               | Implicaciones para Rastreo                    |
| --------------------------- | --------------------------------- | ----------------------------------- | --------------------------------------------- |
| **Ancho de banda**          | 180 kHz (1 PRB)                   | 180 kHz                             | Datos mínimos → invisible en espectro RF      |
| **Velocidad UL**            | 60 kbps (single-tone)             | **159 kbps (multi-tone, 2Tx)**      | Metadata expandidos (~500 bytes/transmisión)  |
| **Velocidad DL**            | 170 kbps                          | **223 kbps**                        | Comandos de control más complejos             |
| **Latencia**                | 1.6-10 segundos                   | **1.0-5 segundos (WUS optimizado)** | Detecta cambios de estado más rápido          |
| **MCL (Max Coupling Loss)** | 164 dB                            | 164 dB                              | Funciona en sótanos profundos (-20 dB vs LTE) |
| **Coverage Extension**      | 2048 repeticiones                 | **4096 repeticiones máx**           | Cobertura extrema en zonas rurales            |
| **Modos de operación**      | In-band / Guard-band / Standalone | **+ Non-anchor carrier**            | Mayor flexibilidad espectral                  |
| **Bandas en España**        | B8 (900 MHz), B20 (800 MHz)       | **+ B3 (1800 MHz), B28 (700 MHz)**  | Mayor disponibilidad de red                   |
| **Mobility**                | Limitada (cell reselection)       | **Mejorada (RRC resume)**           | Rastreo en movimiento más eficaz              |

**Temporizadores PSM Configurables (Release 17)**

```
T3324 (Active Timer):     0 - 186 minutos (negociable con red)
T3412 (Periodic TAU):     1 - 413 días (máximo teórico)
T3324ext (Extended):      0 - 31 días (nuevo en R17)
Deep Sleep = T3412 - T3324
```

**Ejemplo configuración V16 típica (2024)**:

- T3324 = 30 segundos (escucha paging tras enviar datos)
- T3412 = 48 horas (TAU cada 2 días)
- **Resultado**: Dispositivo dormido 47h 59m 30s cada 2 días (99.98% del tiempo)
- **WUS (Wake-Up Signal)**: Reduce consumo PSM adicional 40-60%

**Ventana de detección pasiva (actualizada)**:

- Durante activación manual: Transmite cada 90-120s durante 30 minutos = 15-20 transmisiones
- Durante TAU: 1 transmisión de 1.5-2.5 segundos cada 24-48h
- **Probabilidad de captura Stingray aleatoria**: 0.001-0.003% en 24h sin activación
- **Con WUS activo**: Señal paging solo 50ms → probabilidad < 0.0005%

**Nueva característica R17: Early Data Transmission (EDT)**

- Envía datos en RACH (Random Access) sin establecer conexión RRC
- Reduce latencia a 500-800 ms
- **Implicación rastreo**: Transmisión más corta = ventana intercepción más pequeña

---

### 2.2 LTE-M (LTE Cat-M1/M2) - Alternativa en V16 avanzadas

| Parámetro            | NB-IoT R17       | **LTE-M1 R17**         | **LTE-M2 (nuevo)**     | Diferencia para Rastreo                          |
| -------------------- | ---------------- | ---------------------- | ---------------------- | ------------------------------------------------ |
| **Ancho de banda**   | 180 kHz          | 1.4 MHz                | **5 MHz**              | LTE-M2 mucho más visible en espectro             |
| **Velocidad máxima** | 159 kbps         | 1.1 Mbps               | **4 Mbps**             | LTE-M2 puede enviar logs detallados + multimedia |
| **Movilidad**        | Cell reselection | Full mobility handover | **Optimized handover** | Rastreable en movimiento a >100 km/h             |
| **Latencia**         | 1.0-5s           | 50-100 ms              | **20-50 ms**           | Respuesta tiempo real a comandos remotos         |
| **VoLTE**            | No               | Sí (half-duplex)       | **Sí (full-duplex)**   | LTE-M2 llamadas de voz bidireccionales           |
| **GNSS integrado**   | Externo          | Externo                | **A-GNSS embebido**    | Posicionamiento asistido red                     |
| **Coverage**         | 164 dB MCL       | 156 dB MCL             | 154 dB MCL             | NB-IoT mejor en interiores                       |

**Conclusión técnica**: NB-IoT sigue siendo **intencionalmente más difícil de rastrear** por:

- Menor ancho de banda (80% menos visible RF)
- PSM más profundo (10× menor consumo)
- Sin movilidad → no genera handovers (invisibles en logs de red)

---

### 2.3 eCall: Evolución a NG-eCall (Next Generation)

**Arquitectura Dual (3GPP TS 26.268 + TS 24.229)**

| Componente               | **eCall Legacy (pre-2022)**           | **NG-eCall (obligatorio 2022+)**  | Función                   |
| ------------------------ | ------------------------------------- | --------------------------------- | ------------------------- |
| **Canal de transmisión** | TS12 voice channel (circuit-switched) | **IMS VoLTE (packet-switched)**   | Transición a IP puro      |
| **Modulación**           | PPM (Pulse Position Modulation)       | **In-band modem sobre RTP**       | Señal digital embebida    |
| **Velocidad**            | 1.4 kbps efectivos                    | **3.1 kbps**                      | MSD expandido 280 bytes   |
| **Codecs soportados**    | GSM-FR, AMR                           | **EVS (Enhanced Voice Services)** | Mayor calidad audio       |
| **Error correction**     | Convolutional code + CRC-12           | **LDPC + Reed-Solomon**           | 99.8% éxito 1er intento   |
| **Autenticación**        | Sin autenticación                     | **SIP Digest + TLS 1.2**          | Previene spoofing         |
| **Retransmisiones**      | Hasta 4 intentos                      | Hasta 3 intentos                  | Menor tiempo total        |
| **Geolocalización**      | Solo GPS MSD                          | **GPS MSD + Cell-ID + WiFi**      | Precisión indoor mejorada |

**MSD Expandido (280 bytes en NG-eCall)**

| Campo            | Bytes Legacy | **Bytes NG** | Contenido Expandido                            |
| ---------------- | ------------ | ------------ | ---------------------------------------------- |
| Version          | 1            | 1            | 0x02 (NG-eCall 2022+)                          |
| Message ID       | 1            | 2            | Secuencia 0-65535                              |
| Activation       | 1            | 1            | Bit flags: manual/auto/test/third-party        |
| VIN              | 17           | 17           | Número de bastidor (ISO 3779)                  |
| Vehicle Type     | 1            | 2            | **Categorías expandidas L/M/N + combustible**  |
| Timestamp        | 4            | 8            | **Microsegundos UTC (precisión GPS)**          |
| Latitude         | 4            | 8            | **Double precision (mm accuracy)**             |
| Longitude        | 4            | 8            | **Double precision (mm accuracy)**             |
| Altitude         | -            | 4            | **Metros sobre nivel del mar**                 |
| Direction        | 1            | 2            | 0-359.9° (0.1° resolución)                     |
| Speed            | -            | 2            | **0-500 km/h (0.1 km/h resolución)**           |
| Confidence       | 1            | 1            | Precisión GPS 0-254m                           |
| Pasajeros        | 1            | 2            | **Cinturones + airbags desplegados**           |
| **Sensor Crash** | -            | **16**       | **Aceleración 3-axis (10ms pre/post impacto)** |
| **Cell-ID**      | -            | **8**        | **MCC-MNC-LAC-CID para backup GPS**            |
| **Proveedor**    | -            | **32**       | **Identificación TCU + certificado digital**   |
| Reservado        | 104          | 164          | Future extensions                              |

**Características anti-rastreo actualizadas**:

- ✅ **IMEI cifrado en IMS**: No visible en texto plano (TLS 1.2)
- ✅ **Autenticación mutua**: PSAP debe probar legitimidad
- ⚠️ **Más datos GPS**: Precisión mm vs 10m (mayor huella digital)
- ⚠️ **Cell-ID incluido**: Torre celular explícita en MSD
- ❌ **Conexión IP**: Correlacionable con otros servicios (mismo APN)

**Frecuencia de transmisión**:

- Legacy: Solo durante accidente (probabilidad ~0.001%/año/vehículo)
- NG-eCall: **+ Test mensual automático (30s, datos anónimos)** en algunos modelos
- **Resultado**: De "casi nunca" a "1 vez/mes" → 12,000× más detectable

---

## 3. Vectores de Interceptación Técnica (Actualizado 2024)

### 3.1 Rastreo por Señalización Celular (Nivel Core Network)

**Control Plane vs User Plane**

| Método                   | V16                  | eCall Legacy        | **NG-eCall**               | Telemática OBD-II    | Telemática TCU            |
| ------------------------ | -------------------- | ------------------- | -------------------------- | -------------------- | ------------------------- |
| **IMEI en ATTACH**       | ✅ Sí (cada 24-48h)  | ✅ Sí (al arrancar) | **✅ Cifrado TLS**         | ✅ Sí (continuo)     | ✅ Sí (continuo)          |
| **5G-GUTI rotation**     | N/A                  | N/A                 | **✅ Cada conexión**       | ⚠️ Parcial           | ✅ Sí                     |
| **TAU periódico**        | 24-48h               | No (off entre usos) | **Test mensual**           | Cada 30-60 min       | Cada 5-15 min             |
| **IP asignada**          | Dinámica APN privado | N/A                 | **IPv6 /64 semi-estática** | Dinámica APN público | Estática APN privado      |
| **Triangulación pasiva** | Solo TAU (1.5s)      | Solo llamada 112    | **Test 30s + emergencia**  | Continua DRX 2.56s   | Continua + beamforming 5G |
| **SUPI/SUCI (5G)**       | N/A                  | N/A                 | **SUCI cifrado**           | ⚠️ Algunos           | ✅ Sí                     |

**Metadatos accesibles en UDM/HSS (5G Unified Data Management)**

Operadoras almacenan en tiempo real para cada IMEI:

- **5G NR Cell ID** (gNB-ID + Cell-ID): Precisión 50-500m
- TAC (Tracking Area Code): ~10-30 celdas 5G
- **Beam ID** (en mmWave 5G): Precisión 10-50m por beamforming
- RSRP/RSRQ/SINR: Métricas de señal → distancia estimada
- Timestamp última actualización (precisión microsegundos)
- **Historial de movilidad**: Últimas 50-200 celdas (24-72h según operadora)
- **Network slicing**: Qué slice usó (eMBB/URLLC/mMTC)

**Acceso gubernamental (actualizado 2024)**:

- Con orden judicial: **Consulta API automatizada <10 segundos** (vs minutos en 4G)
- **ETSI LI (Lawful Interception) v3**: Estándar EU para acceso tiempo real
- Sin orden (regímenes autoritarios): **API directa 5GC (5G Core)**
- **Nueva preocupación**: Fabricantes chinos (Huawei/ZTE) → backdoors potenciales

**Precisión triangulación actualizada**:

```
5G urbano (mmWave, 4+ gNB):    10-50 metros (beamforming)
5G suburbano (sub-6 GHz):      50-200 metros
4G urbano (3+ eNB):            50-300 metros
4G rural (1 eNB):              500m - 5 km
NB-IoT rural:                  1-15 km (radio celda grande)
```

**Nuevo método: Network-based positioning (3GPP Rel-17)**

- **OTDOA (Observed Time Difference of Arrival)**: 10-50m precisión sin GPS
- **Multi-RTT (Round Trip Time)**: 3-10m precisión en 5G
- **Implicación**: Rastreo indoor sin depender de GPS del dispositivo

---

### 3.2 IMSI Catchers / Stingrays: Capacidades Reales (2024)

**Tecnologías comerciales disponibles**

| Modelo                | Fabricante            | **Precio (2024)** | Capacidades V16/eCall               |
| --------------------- | --------------------- | ----------------- | ----------------------------------- |
| **Nyxcell 5G**        | Septier               | **€650k-900k**    | ✅ 2G/3G/4G/5G NSA, captura NB-IoT  |
| StingRay II+          | **L3Harris**          | $500k-800k        | ✅ 2G/3G/4G, NB-IoT parcial         |
| DRTbox                | Digital Receiver Tech | $85k              | ⚠️ Solo 2G/3G, obsoleto para NB-IoT |
| **Overwatch**         | Tactical Support      | **$250k-400k**    | ✅ 4G/5G NSA, downgrade forzado     |
| DIY SDR (gr-gsm + 5G) | HackRF + LimeSDR      | **$1,500**        | ⚠️ Solo monitoreo pasivo 2G/4G      |
| **BlueVIA**           | Ability Inc           | **$320k**         | ✅ 5G SA + NB-IoT nativo            |

**Nuevas capacidades 2024**:

- **5G NSA/SA spoofing**: Fingen gNodeB legítimo
- **NB-IoT jamming selectivo**: Bloquean solo 180 kHz (banda 20/8)
- **SUCI decryption attempts**: Fuerza bruta en SUCI cifrado (limitado)
- **Protocol downgrade**: 5G → 4G → 3G → 2G automático

**Modos de operación actualizados**

**A) Pasivo (escucha mejorada)**

```
[Torre Real 5G] → [Objetivo NB-IoT]
       ↓
 [Stingray SDR analizando espectro]
```

- Captura: **SUCI cifrado** (no IMEI directo en 5G), Cell ID, Timing Advance, Beam ID
- Alcance: **800m-3km** (antenas direccionales)
- **Detección por objetivo**: Imposible (escucha pasiva)
- **Efectivo contra V16 dormida**: ❌ PSM = radio apagada
- **Efectivo contra V16 activa**: ⚠️ Solo captura SUCI (no IMEI directamente)

**B) Activo (MITM mejorado)**

```
[Objetivo] ← [Stingray 5G falso +30dBm] → [Torre Real bloqueada -85dBm]
```

- Fuerza registro en red falsa con señal más potente
- **Downgrade automático**: 5G → 4G (IMEI visible) → 3G → 2G (null encryption)
- Captura **todos los dispositivos en 3 km** (incluso pasivos en idle)
- **Detección por objetivo**:
  - Apps especializadas: **SnoopSnitch (obsoleto Android 12+)**, Darshak
  - **Indicadores**: Downgrade súbito, Timing Advance anómalo, falta cifrado
- **Efectivo contra V16 dormida PSM**: ❌ No responde a paging en deep sleep
- **Efectivo contra V16 activa/TAU**: ✅ Captura IMEI + GPS si transmite
- **Efectivo contra NG-eCall**: ✅ Captura MSD completo si fuerza 2G/3G

**C) Jamming selectivo avanzado**

- **Banda estrecha**: Bloquea solo 180 kHz NB-IoT (banda 20: 791.0-791.2 MHz)
- **GPS jamming simultáneo**: L1 (1575.42 MHz) + L5 (1176.45 MHz)
- Fuerza fallback a: (a) Cell-ID positioning, (b) 2G sin cifrado
- **Detección**:
  - Usuario: Visible (falla de conexión)
  - Forense: **Analizador espectro detecta portadora CW en banda**

**D) Nuevo: 5G Fake Base Station**

- Explota **falta de autenticación inicial** en 5G NR (antes de SUCI)
- **Rogue gNB**: Finge celda legítima en banda n78 (3.5 GHz)
- Captura intentos de conexión → extrae SUCI → intenta descifrar offline
- **Contramedida**: SIM con SUCI encryption robusta (256-bit ECC)

**Vulnerabilidades NB-IoT/5G específicas (2024)**

Debilidades actuales:

- ❌ **IMSI/IMEI en claro en 4G**: Hasta Release 15 (mayoría de redes)
- ⚠️ **SUCI decryption**: Posible con recursos estatales (días/semanas)
- ❌ **Downgrade attack**: Stingray rechaza 5G, fuerza 4G → 3G → 2G
- ✅ **Mutual authentication mejorada**: Desde R15 (2019) en 5G
- ✅ **SUCI cifrado ECIES**: Dificulta rastreo cross-network
- ⚠️ **Null encryption** aún aceptada en 2G forzado

**Defensas V16 actualizadas**:

- ✅ SIM soldada no extraíble (imposible clonar físicamente)
- ✅ **USIM con SUCI support** (Release 15+)
- ✅ APN privado con MAC filtering + **IPsec/VPN al servidor**
- ✅ Deep Sleep Mode (invisible 99.9% del tiempo)
- ⚠️ **Vulnerable a downgrade 5G→2G** durante TAU
- ❌ Sin interfaz usuario (no alerta de ataque en curso)

**Costo-efectividad de ataques**:
| Objetivo | Equipamiento | Personal | Tiempo | **Costo Total** |
|----------|-------------|----------|--------|----------------|
| 1 dispositivo V16 específico | Stingray básico | 2 técnicos | 24-72h monitoreo | **€15k-30k** |
| Red de 10-100 V16 en ciudad | Stingray 5G + SDR | 5 técnicos + analista | 1 semana | **€80k-150k** |
| Interceptar NG-eCall específico | Stingray móvil | 2 técnicos en vehículo | Esperando accidente | **€200k+ (inviable)** |

---

### 3.3 RF Fingerprinting (Huella Digital Electromagnética)

**Técnica: Specific Emitter Identification (SEI) Actualizada**

Cada transmisor NB-IoT tiene imperfecciones únicas medibles:

| Parámetro                | Variación típica           | Estabilidad                 | **Técnica medición**             |
| ------------------------ | -------------------------- | --------------------------- | -------------------------------- |
| **Frecuencia portadora** | ±15-25 Hz (vs nominal)     | 97-99% única en 15km²       | **FFT alta resolución**          |
| **I/Q offset**           | 0.3-4% desequilibrio       | Hardware (permanente)       | **Constellation analysis**       |
| **Phase noise**          | -35 to -65 dBc/Hz @ 100kHz | Oscilador (único)           | **PSD (Power Spectral Density)** |
| **Transient rise time**  | 1-10 µs @ power-up         | Amplificador PA (único)     | **Captura 100 Msps trigger**     |
| **Clock skew**           | **±0.1-2 ppm drift**       | **Temperatura-dependiente** | **Timing analysis**              |
| **PA non-linearity**     | **IMD3 -25 to -40 dBc**    | **Hardware (permanente)**   | **Two-tone test**                |

**Proceso de identificación mejorado (2024)**:

```
1. Captura señal RF con SDR alta precisión
   Hardware: USRP N321 ($15k), Ettus X410 ($35k)

2. Extracción I/Q muestras a 122.88 Msps (oversampling 4×)
   ADC 16-bit con GPSDO reference (±0.01 ppm)

3. Pre-procesamiento:
   - Filtrado Butterworth paso-banda (179-181 kHz)
   - Compensación Doppler (si móvil)
   - Normalización potencia (-40 dBm referencia)

4. Extracción características:
   - FFT 16k points → perfil espectral
   - Transient analysis (primeros 50 µs)
   - I/Q constellation distortion matrix
   - Clock skew via timing estimation

5. Machine Learning (2024 SOTA):
   - CNN (Convolutional Neural Network): 95-98% precisión
   - Siamese Networks: 92-96% con pocas muestras
   - Transformer models: 97-99% en entorno controlado

6. Base de datos:
   "Dispositivo X" = firma Y (vector 512-2048 dimensiones)
   Requiere 50-200 muestras entrenamiento por dispositivo
```

**Requisitos técnicos actualizados**:

- SDR con ADC ≥14 bits (16 bits recomendado)
- Precisión frecuencia ±0.01 ppm (GPSDO/Rubidium reference)
- Línea de vista o atenuación <75 dB
- SNR >18 dB para 95% precisión
- **Temperatura ambiente controlada** (±5°C para compensar drift)

**Aplicabilidad a V16 (análisis 2024)**:

- ✅ **Técnicamente posible**: NB-IoT emite RF física medible
- ⚠️ **Coste prohibitivo personal**: €25k-50k equipo + expertise DSP/ML
- ⚠️ **Alcance limitado**: <2 km línea vista, <500m urbano
- ⚠️ **Entorno ruidoso**: 900 MHz muy congestionado en ciudades
- ⚠️ **Temperatura**: Drift térmico altera firma (±20°C = -10% precisión)
- **✅ Mitigación posible**: Red de sensores fijos (€500k+ ciudad mediana)

**Factores que afectan precisión**:
| Factor | Impacto en precisión | Solución |
|--------|---------------------|----------|
| Temperatura ambiente | -5 a -15% por cada 10°C | Compensación térmica en modelo |
| Multipath urbano | -10 a -25% | Antenas direccionales + MIMO |
| Envejecimiento hardware | -2% por año | Re-entrenamiento periódico |
| Dispositivos idénticos (mismo lote) | -20 a -40% | Características transitorias adicionales |

**Uso real documentado (2024)**:

- ✅ **Militar**: NSA/GCHQ/BND para SIGINT (señales militares)
- ✅ **Academia**: 50+ papers IEEE (LTE, WiFi, Zigbee, LoRa)
- ⚠️ **Seguridad nacional**: Posible en fronteras (IMSI + RF dual)
- ❌ **Policía civil EU**: No confirmado (coste/complejidad prohibitivo)
- ❌ **Criminal**: Inviable (requiere ingeniería RF avanzada)

**Contramedidas teóricas (no implementadas en V16)**:

- **Frequency hopping**: Cambia portadora aleatoriamente (no en NB-IoT estándar)
- **Randomized PA bias**: Altera transients (requiere hardware custom)
- **Temperature control**: Mantiene oscilador a 25°C ±0.5°C (consume 2-5 W)

---

## 4. Comparativa de Datos Transmitidos (Actualizado)

### 4.1 Payload Analysis Completo

| Tipo de Dato          | V16 (Protocolo B)                      | eCall Legacy                                 | **NG-eCall**                                        | Telemática OBD-II                            | Telemática TCU (CAN-bus)                       |
| --------------------- | -------------------------------------- | -------------------------------------------- | --------------------------------------------------- | -------------------------------------------- | ---------------------------------------------- |
| **GPS**               | ✅ Lat/Lon (6 dec)<br>±2.5m precisión  | ✅ Lat/Lon (4 bytes)<br>±10m                 | **✅ Double (8 bytes)<br>±0.5m precisión**          | ✅ Lat/Lon variable<br>±5-10m                | ✅ Lat/Lon (8 dec)<br>±1cm + RTK               |
| **Timestamp**         | ✅ ISO 8601 UTC<br>Precisión 1s        | ✅ Unix epoch UTC<br>Precisión 1s            | **✅ Microsegundos UTC<br>Sincronizado GPS**        | ✅ UTC (1s resolución)                       | ✅ UTC + PTP<br>Precisión 1µs                  |
| **Altitud**           | ✅ Metros (entero)<br>Rango ±9999m     | ❌ No incluido                               | **✅ Metros MSL<br>Precisión 0.1m**                 | ⚠️ Algunos modelos<br>±50m precisión         | ✅ Metros MSL<br>±0.5m con fusión              |
| **Velocidad**         | ❌ No directo<br>(calculable de GPS)   | ❌ No directo<br>(implícito en heading)      | **✅ 0-500 km/h<br>Resolución 0.1 km/h**            | ✅ OBD PID 0x0D<br>0-255 km/h                | ✅ CAN 0x1A9 (ABS)<br>0.01 km/h resolución     |
| **Dirección/heading** | ❌ No incluido                         | ✅ 0-359° (1° res)                           | **✅ 0-359.9°<br>Resolución 0.1°**                  | ⚠️ Solo con GPS                              | ✅ Fusión sensorial<br>(GPS+IMU+ruedas)        |
| **Aceleración**       | ❌ No incluido                         | ❌ No incluido                               | **✅ 3-axis crash data<br>±10ms impacto**           | ❌ Sin IMU                                   | ✅ IMU 6-axis<br>100-200 Hz sampling           |
| **VIN**               | ❌ No (anónimo)                        | ✅ 17 caracteres<br>ISO 3779                 | **✅ 17 caracteres<br>+ verificación checksum**     | ⚠️ Opcional<br>(leído de ECU)                | ✅ Embebido hardware<br>No modificable         |
| **IMEI/ID**           | ✅ IMEI interno<br>(no en payload)     | ✅ IMEI módulo<br>(señalización)             | **✅ IMEI + cert digital<br>Cifrado TLS**           | ✅ IMEI visible                              | ✅ IMEI + UUID OEM                             |
| **Tipo vehículo**     | ❌ No especificado                     | ✅ M1/N1/N2/N3                               | **✅ Categoría extendida<br>+ tipo combustible**    | ❌ No transmitido                            | ✅ Completo<br>(modelo + variante)             |
| **Pasajeros**         | ❌ No detectado                        | ✅ Bitmap ocupación<br>+ cinturones          | **✅ Ocupación + cinturones<br>+ airbags deployed** | ❌ No detectado                              | ✅ Sensores presión<br>+ visión por computador |
| **Cell-ID backup**    | ✅ Implícito<br>(conexión celular)     | ❌ No en MSD legacy                          | **✅ MCC-MNC-LAC-CID<br>Backup si GPS falla**       | ✅ Disponible                                | ✅ Multi-RAT<br>(4G/5G simultáneo)             |
| **Batería/energía**   | ✅ Voltaje pila<br>Umbral bajo batería | ❌ No monitoreado                            | **✅ Voltaje 12V vehículo<br>+ backup Li-ion**      | ⚠️ Solo 12V OBD                              | ✅ Estado batería completo<br>SOC + SOH + temp |
| **Datos diagnóstico** | ❌ No incluido                         | ❌ No incluido                               | **⚠️ Reservado futuro<br>(164 bytes)**              | ✅ DTCs (P0xxx-P3xxx)<br>Códigos error motor | ✅ CAN completo<br>1000+ parámetros            |
| **Audio/llamada**     | ❌ Sin audio                           | ✅ Canal voz bidireccional<br>(operador 112) | **✅ VoLTE IMS<br>Audio HD EVS codec**              | ❌ No soportado                              | ✅ Manos libres<br>+ micrófono cabina          |

---

### 4.2 Frecuencia y Triggers de Transmisión

| Evento                             | V16                                                           | eCall Legacy                                     | **NG-eCall**                                            | Telemática OBD-II                            | Telemática TCU                                 |
| ---------------------------------- | ------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------- |
| **Activación manual**              | ✅ Botón físico<br>→ Transmite cada 90-120s<br>durante 30 min | ✅ Botón SOS<br>→ 1 transmisión<br>+ llamada voz | **✅ Botón SOS<br>→ MSD + VoLTE<br>Retransmisión auto** | ❌ No aplicable                              | ✅ Botón SOS/pánico<br>→ Streaming continuo    |
| **Detección automática accidente** | ❌ Sin sensores<br>(solo manual)                              | ✅ Acelerómetro<br>> 8G → disparo                | **✅ Multi-sensor fusion<br>Accel + presión + CAN**     | ❌ Sin sensores crash                        | ✅ Airbag CAN + IMU<br>Algoritmo IA predicción |
| **Posicionamiento periódico**      | ❌ No (solo bajo demanda)                                     | ❌ No (solo emergencia)                          | **⚠️ Test mensual<br>(30s, datos anónimos)**            | ✅ Continuo<br>1-5 min intervalos            | ✅ Continuo<br>10-60s intervalos               |
| **TAU/registro red**               | ✅ Cada 24-48h<br>(T3412 configurable)                        | ✅ Al arrancar vehículo<br>(powered by 12V)      | **✅ Al arrancar +<br>test mensual**                    | ✅ Cada 30-60 min<br>(eDRX cycle)            | ✅ Cada 5-15 min<br>+ eventos CAN              |
| **Geofencing**                     | ❌ No soportado                                               | ❌ No aplicable                                  | ❌ No aplicable                                         | ✅ Configurable<br>Alerta salida zona        | ✅ Configurable<br>Múltiples zonas             |
| **Exceso velocidad**               | ❌ No detecta                                                 | ❌ No monitoriza                                 | ❌ No monitoriza                                        | ✅ Threshold ajustable<br>Alerta tiempo real | ✅ Límites dinámicos<br>(mapas + señales)      |
| **Batería baja**                   | ✅ Alerta <20%<br>Última transmisión                          | ❌ No monitoriza<br>(alimentado por coche)       | **✅ Alerta voltaje bajo<br>Transmisión prioritaria**   | ⚠️ Solo si desconectado                      | ✅ SOC <15%<br>Modo ahorro energía             |
| **Mantenimiento**                  | ❌ No aplicable                                               | ❌ No aplicable                                  | **⚠️ Futuro (reservado)**                               | ✅ DTC codes<br>Check engine light           | ✅ Mantenimiento predictivo<br>ML-based        |
| **Robo/manipulación**              | ⚠️ Desconexión detectable<br>(cese TAU)                       | ❌ No detecta<br>(requiere ignición)             | **⚠️ Backup batería<br>Transmisión post-corte**         | ❌ Fácil desconectar<br>(OBD visible)        | ✅ Tamper detection<br>Alerta desconexión      |

---

### 4.3 Análisis de Privacidad y Anonimato

| Aspecto                     | V16                                                  | eCall Legacy                                       | **NG-eCall**                                          | Telemática OBD-II                                   | Telemática TCU                                    |
| --------------------------- | ---------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| **Identificación usuario**  | ❌ Anónimo<br>Sin vinculación propietario            | ✅ VIN → Base datos DGT<br>Identificación vehículo | **✅ VIN + cert digital<br>Identificación inmediata** | ✅ Cuenta usuario<br>Email/teléfono                 | ✅ Cuenta OEM<br>Datos personales completos       |
| **Histórico localización**  | ❌ No almacenado<br>(transmisiones puntuales)        | ❌ Solo momento emergencia<br>No histórico         | **⚠️ Test mensual = log<br>1 punto/mes mínimo**       | ✅ Histórico completo<br>Retención 90-365 días      | ✅ Histórico completo<br>Retención indefinida     |
| **Compartición datos 3os**  | ❌ Solo operadora celular<br>+ autoridades con orden | ✅ PSAP (112) exclusivo<br>No comercial            | **✅ PSAP + fabricante TCU<br>Telemetría agregada**   | ✅ Aseguradora<br>Scoring conducción                | ✅ OEM + partners<br>Monetización datos           |
| **Consentimiento usuario**  | ✅ Implícito<br>(dispositivo voluntario)             | ✅ Obligatorio EU<br>(vehículos nuevos 2018+)      | **✅ Obligatorio EU<br>No opt-out posible**           | ✅ Contrato explícito<br>Términos y condiciones     | ⚠️ Términos OEM<br>Difícil opt-out completo       |
| **RGPD compliance**         | ✅ Anónimo por diseño<br>Sin datos personales        | ⚠️ VIN = dato personal<br>Procesado emergencia     | **⚠️ VIN + telemetría<br>Base legítimo interés**      | ✅ Consentimiento explícito<br>Derecho portabilidad | ⚠️ Términos aceptados<br>Derecho borrado limitado |
| **Cifrado transmisión**     | ✅ TLS 1.3 end-to-end<br>AES-256-GCM                 | ❌ Sin cifrado (legacy)<br>Audio analógico claro   | **✅ TLS 1.2 IMS<br>SRTP para audio**                 | ⚠️ TLS 1.2 variable<br>Algunos sin cifrar           | ✅ TLS 1.3 + VPN<br>Certificados X.509            |
| **Cifrado almacenamiento**  | N/A (sin storage)                                    | N/A (no almacena)                                  | **⚠️ Servidor PSAP<br>Cifrado variable**              | ⚠️ Servidor aseguradora<br>AES-256 (declarado)      | ✅ Cloud OEM<br>AES-256 + HSM                     |
| **Desanonimización riesgo** | ⚠️ IMEI + patrón movimiento<br>Correlación posible   | ✅ VIN directo<br>Inmediato                        | **✅ VIN + IMEI + patrón<br>Inmediato**               | ✅ Cuenta + IMEI + GPS<br>Inmediato                 | ✅ Múltiples identificadores<br>Perfil completo   |
| **Venta datos 3os**         | ❌ No (modelo B2C)                                   | ❌ Prohibido<br>(uso emergencia)                   | **❌ Prohibido legalmente<br>(RGPD Art. 6)**          | ✅ Datos agregados<br>Scoring industria             | ✅ Datos agregados<br>Publicidad dirigida         |

---

### 4.4 Capacidad de Rastreo Pasivo (sin acceso al dispositivo)

**Metodología de puntuación**:

- 🟢 Bajo (requiere recursos estatales + orden judicial)
- 🟡 Medio (accesible con tecnología comercial avanzada)
- 🔴 Alto (rastreable con herramientas disponibles públicamente)

| Vector de Ataque                  | V16                                                                                  | eCall Legacy                                                                            | **NG-eCall**                                                                                 | Telemática OBD-II                                                   | Telemática TCU                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Consulta HLR/HSS operadora**    | 🟢 Posible con orden<br>Precisión: celda (~500m-5km)<br>Frecuencia: cada 24-48h      | 🟢 Posible con orden<br>Solo si vehículo encendido<br>Frecuencia: esporádica            | **🟡 Posible con orden<br>Precisión: celda 5G (~50-500m)<br>Frecuencia: arranque + mensual** | 🔴 Continuo<br>Logs detallados cada 30-60 min<br>Histórico completo | 🔴 Continuo<br>Logs cada 5-15 min<br>Precisión RTK cm                         |
| **IMSI catcher pasivo**           | 🟢 Difícil<br>Ventana: 1.5-2s cada 24-48h<br>Probabilidad captura: <0.1%/día         | 🟢 Difícil<br>Solo durante llamada 112<br>Probabilidad: 0.001%/año                      | **🟡 Moderado<br>Test mensual 30s<br>Probabilidad: ~0.01%/día**                              | 🔴 Fácil<br>Idle DRX cada 2.56s<br>Probabilidad: >90%/hora          | 🔴 Muy fácil<br>Transmisión continua<br>Probabilidad: 99%/hora                |
| **IMSI catcher activo (MITM)**    | 🟡 Efectivo durante TAU<br>Fuerza downgrade 5G→2G<br>Captura IMEI + GPS              | 🟡 Efectivo durante emergencia<br>MSD completo interceptable<br>Audio en claro (legacy) | **🟡 Efectivo arranque + test<br>Downgrade posible<br>MSD cifrado rompe TLS**                | 🔴 Continuo<br>Intercepta todo tráfico<br>Downgrade trivial         | 🔴 Continuo<br>Intercepta streams<br>Requiere VPN break                       |
| **RF fingerprinting**             | 🟡 Posible<br>Coste: €25k-50k<br>Alcance: 2km<br>Precisión: 95-98%                   | 🟡 Posible<br>Durante transmisión MSD<br>Precisión: 92-96%                              | **🟡 Posible<br>Test mensual = muestra<br>Precisión: 95-98%**                                | 🟢 Muy efectivo<br>Transmisión continua<br>Precisión: 98-99%        | 🟢 Muy efectivo<br>Multi-señal (BT+WiFi+Cell)<br>Precisión: 99%+              |
| **Triangulación WiFi/BT**         | ❌ Sin WiFi/Bluetooth                                                                | ❌ Sin WiFi/Bluetooth                                                                   | ❌ Sin WiFi/Bluetooth                                                                        | ⚠️ Algunos modelos BT<br>Rastreable en urbano                       | ✅ WiFi + BT + UWB<br>Huella digital única                                    |
| **Network analytics (operadora)** | 🟢 Patrón movilidad limitado<br>1 punto cada 24-48h<br>Requiere análisis largo plazo | 🟢 Sin patrón<br>Solo eventos aislados<br>No predecible                                 | **🟡 Patrón mensual<br>12 puntos/año mínimo<br>Analizable largo plazo**                      | 🔴 Patrón detallado<br>500-1500 puntos/día<br>ML predice rutas      | 🔴 Patrón muy detallado<br>1000-5000 puntos/día<br>Perfil conductual completo |
| **Cross-device tracking**         | 🟢 Difícil<br>Solo IMEI celular<br>Sin otros identificadores                         | 🟡 Moderado<br>IMEI + VIN correlación<br>Base datos DGT                                 | **🟡 Moderado-Alto<br>IMEI + VIN + cert digital<br>Cross-reference PSAP**                    | 🔴 Fácil<br>Email/teléfono usuario<br>Cookies web/app               | 🔴 Muy fácil<br>Cuenta OEM sincronizada<br>Ecosistema completo                |

---

## 5. Vulnerabilidades y Vectores de Ataque Avanzados

### 5.1 Ataques a Capa de Aplicación

| Tipo de Ataque                  | V16                                                                      | eCall                                                                | Telemática OBD-II                                                     | Telemática TCU                                                               |
| ------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Command Injection**           | 🟢 Muy difícil<br>Protocolo binario propietario<br>Sin interfaz usuario  | 🟢 Imposible<br>Unidireccional (device→PSAP)<br>Sin comandos remotos | 🟡 Posible<br>API REST vulnerable<br>Casos documentados               | 🔴 Alta superficie<br>OTA updates<br>CAN injection                           |
| **Replay Attack**               | 🟡 Mitigado<br>Timestamp + nonce<br>Ventana 60s                          | 🟢 Mitigado<br>Message ID secuencial<br>PSAP valida unicidad         | 🟡 Posible<br>Tokens con TTL largo<br>Replay ventana horas            | 🟡 Parcialmente mitigado<br>Challenge-response<br>Algunos fabricantes débil  |
| **Man-in-the-Middle**           | 🟡 Difícil<br>TLS 1.3 + pinning<br>Requiere CA compromise                | 🟡 Legacy: Fácil (sin TLS)<br>**NG: Difícil (TLS 1.2)**              | 🔴 Documentado<br>TLS sin validación cert<br>Pinning ausente          | 🟡 Difícil<br>Mutual TLS + HSM<br>OEMs premium únicamente                    |
| **DoS (Denial of Service)**     | 🟡 Jamming RF posible<br>GPS spoofing factible<br>Detecta fallo conexión | 🟢 Prioridad red emergencia<br>QoS garantizado<br>Fallback 2G/3G     | 🔴 Fácil<br>Flood requests API<br>Sin rate limiting robusto           | 🟡 Moderado<br>CDN protegido<br>DDoS mitigation variable                     |
| **Firmware Extraction**         | 🟢 Difícil<br>Encapsulado epoxy<br>Debug ports disabled                  | 🟢 Difícil<br>Secure boot<br>Flash encrypted                         | 🟡 Posible<br>JTAG accesible<br>Algunos sin protección                | 🟡 Variable<br>Premium: HSM + efuses<br>Low-cost: débil                      |
| **Side-Channel (timing/power)** | 🟢 No documentado<br>Requiere acceso físico<br>ROI negativo              | 🟢 No documentado<br>Uso puntual emergencia<br>No objetivo           | 🟡 Teóricamente posible<br>Extracción claves TLS<br>No casos públicos | 🟡 Teóricamente posible<br>Automotive HSM robusto<br>Ataques académicos solo |

---

### 5.2 Ataques de Localización Avanzada

| Técnica                                    | Descripción                                                  | Aplicabilidad V16                                                                     | Coste                                                            | Detección                                                         |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| **GPS Spoofing**                           | Señales GPS falsas (SDR)<br>Simula ubicación arbitraria      | 🟡 Efectivo<br>V16 confía GPS sin validación<br>Detección: imposible por dispositivo  | **€500-2k** (HackRF+GPS-SDR-SIM)<br>Alcance: 100m-1km            | ❌ Dispositivo: No detecta<br>✅ Servidor: Salto posición anómalo |
| **Cell-ID Spoofing**                       | IMSI catcher finge torre legítima<br>Reporta Cell-ID falso   | 🟡 Efectivo<br>V16 reporta Cell-ID de red conectada<br>Prioriza GPS sobre celular     | **€80k-500k** (Stingray comercial)<br>Alcance: 2-3km             | ⚠️ Conflicto GPS vs Cell-ID<br>Servidor detecta inconsistencia    |
| **Network-based Positioning Manipulation** | Operadora maliciosa reporta<br>ubicación incorrecta en A-GPS | 🟢 No aplicable<br>V16 usa GPS autónomo<br>No depende de asistencia red               | **N/A** (requiere control operadora)<br>Estado-nación únicamente | ❌ Imposible detectar<br>Datos de red "legítimos"                 |
| **Timing Advance Manipulation**            | Stingray altera TA para<br>confundir triangulación           | 🟢 Impacto mínimo<br>V16 transmite GPS directo<br>TA solo metadata red                | **Incluido en Stingray**<br>Sin coste adicional                  | ⚠️ Solo detectable con<br>múltiples torres correlación            |
| **Selective Jamming + Fallback**           | Bloquea GPS L1<br>Fuerza a Cell-ID o WiFi                    | 🟡 Efectivo parcial<br>V16 reporta "GPS inválido"<br>No tiene fallback WiFi           | **€1k-5k** (jammer GPS)<br>Alcance: 500m-2km<br>**Ilegal en EU** | ✅ V16: Flag "low confidence"<br>✅ Usuario: Sin posición         |
| **Motion Pattern Analysis**                | ML predice ubicación futura<br>basado en histórico           | 🟢 Difícil<br>Solo 1 punto cada 24-48h<br>Requiere meses de datos                     | **Software:** €10k-50k<br>Datos: Acceso operadora                | ❌ Totalmente pasivo<br>Sin detección posible                     |
| **Correlation con Otros Sensores**         | Cámaras ANPR + V16 en mismo<br>tiempo/lugar → correlación    | 🟡 Efectivo en zonas vigiladas<br>Requiere activación V16 manual<br>Probabilidad baja | **Infraestructura:** €5M-50M<br>(sistema ciudad completo)        | ❌ Totalmente pasivo<br>Uso legítimo ANPR                         |

---

### 5.3 Comparativa: Esfuerzo vs Recompensa para Atacante

**Escenario 1: Localizar 1 dispositivo V16 específico en tiempo real**

| Método                                  | Probabilidad Éxito         | Tiempo Requerido               | Coste                       | Perfil Atacante                      |
| --------------------------------------- | -------------------------- | ------------------------------ | --------------------------- | ------------------------------------ |
| Orden judicial → operadora              | 95-99%                     | 2-24h (trámite legal)          | €0 (autoridad)              | 🔵 Policía/Juez                      |
| IMSI catcher 24/7 en ubicación conocida | 5-15% (si hace TAU)        | 1-7 días monitoreo             | €80k-500k equipo + personal | 🟡 Detective privado / corporación   |
| GPS spoofing + esperar transmisión      | 1-5% (requiere activación) | Semanas/meses                  | €2k equipo + tiempo         | 🟠 Técnico especializado             |
| RF fingerprinting red sensores          | 80-95% (si transmite)      | Meses setup + 1-7 días captura | €500k-2M infraestructura    | 🔴 Estado-nación / crimen organizado |
| Hackear servidor backend V16            | 60-90% (si logra acceso)   | Meses (0-day research)         | €50k-500k (exploits)        | 🔴 APT / hackers elite               |

**Escenario 2: Rastreo pasivo histórico (últimos 30 días)**

| Método                       | Datos Obtenibles                     | Coste               | Perfil Atacante      |
| ---------------------------- | ------------------------------------ | ------------------- | -------------------- |
| Orden judicial → operadora   | 60-120 puntos (TAU cada 12-48h)      | €0 (autoridad)      | 🔵 Policía/Juez      |
| Subpoena servidor V16        | 20-60 puntos (activaciones manuales) | €0 (autoridad)      | 🔵 Policía/Juez      |
| Compra datos broker (ilegal) | 0 puntos (V16 anónimo)               | N/A (no disponible) | ❌ Imposible         |
| Hack servidor backend        | 20-120 puntos (logs completos)       | €50k-500k           | 🔴 Ciberdelincuentes |

**Escenario 3: Vigilancia masiva (1000+ V16 en ciudad)**

| Método                     | Eficacia                     | Coste Setup                 | Coste Operativo                     | Perfil Atacante                 |
| -------------------------- | ---------------------------- | --------------------------- | ----------------------------------- | ------------------------------- |
| Red Stingray (10 unidades) | 40-70% cobertura ciudad      | €2M-8M                      | €50k/mes (personal + mantenimiento) | 🔴 Estado-nación                |
| Acuerdo operadora (legal)  | 99% cobertura                | €0 (requerimiento legal)    | €5k-20k/mes (acceso API)            | 🔵 Gobierno (vigilancia legal)  |
| Hackeo masivo servidores   | 90-99% si compromete backend | €100k-1M (exploits + infra) | €10k-30k/mes (C2 servers)           | 🔴 APT / servicios inteligencia |

---

## 6. Contramedidas y Hardening

### 6.1 Protecciones Actuales por Sistema

| Contramedida             | V16                                              | eCall                                         | Telemática OBD-II                          | Telemática TCU                               |
| ------------------------ | ------------------------------------------------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| **Cifrado end-to-end**   | ✅ TLS 1.3 + PSK<br>AES-256-GCM                  | ⚠️ Legacy: Sin cifrado<br>**NG: TLS 1.2**     | ⚠️ Variable<br>Algunos sin cifrar          | ✅ TLS 1.3 + VPN<br>IPsec túnel              |
| **Certificate pinning**  | ✅ Certificado embebido<br>Firmware              | ⚠️ Variable por fabricante                    | ❌ Mayoría no implementa                   | ✅ OEM premium<br>❌ Low-cost: No            |
| **SIM authentication**   | ✅ USIM soldada<br>No extraíble                  | ✅ USIM integrada<br>Mutual auth              | ⚠️ SIM externa<br>Cloneable                | ✅ eSIM soldada<br>Remote provisioning       |
| **Anti-downgrade**       | ⚠️ Acepta 2G/3G forced<br>No hay protección      | ⚠️ Legacy: Vulnerable<br>**NG: Configurable** | ❌ Sin protección                          | ✅ Configuración red<br>5G-only mode         |
| **GPS anti-spoofing**    | ❌ Confía señal GPS<br>Sin validación            | ❌ Sin validación                             | ❌ Sin validación                          | ⚠️ Algunos premium<br>Multi-GNSS correlation |
| **Tamper detection**     | ⚠️ Detecta apertura carcasa<br>(switch mecánico) | ✅ Desconexión 12V<br>Alerta backup           | ❌ Fácil desconectar<br>OBD accesible      | ✅ Múltiples sensores<br>CAN watchdog        |
| **Firmware signing**     | ✅ Código firmado<br>Bootloader verificado       | ✅ Secure boot<br>OEM key                     | ⚠️ Variable<br>Algunos sin protección      | ✅ Chain of trust<br>HSM root                |
| **Debug ports disabled** | ✅ JTAG fusionado<br>UART disabled               | ✅ JTAG disabled<br>Producción                | ⚠️ Algunos accesibles<br>JTAG pads visible | ✅ Debug via auth<br>Password-protected      |
| **Rate limiting**        | ✅ Max 1 msg/90s<br>Anti-flood                   | N/A (unidireccional)                          | ⚠️ Variable<br>API sin límites robustos    | ✅ Token bucket<br>DDoS protection           |
| **Anomaly detection**    | ⚠️ Servidor backend<br>Saltos posici             |

## 4. Comparativa de Datos Transmitidos (Actualizado)

### 4.1 Payload Analysis Completo

| Tipo de Dato                  | V16 (Protocolo B)                     | eCall Legacy                                 | **NG-eCall**                                   | Telemática OBD-II             | Telemática TCU (CAN-bus)                             |
| ----------------------------- | ------------------------------------- | -------------------------------------------- | ---------------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| **GPS**                       | ✅ Lat/Lon (6 dec)<br>±2.5m precisión | ✅ Lat/Lon (4 bytes)<br>±10m                 | **✅ Double (8 bytes)<br>±0.5m precisión**     | ✅ Lat/Lon variable<br>±5-10m | ✅ Lat/Lon (8 dec)<br>±0.1m + fusión sensorial       |
| **Timestamp**                 | ✅ ISO 8601 UTC                       | ✅ Unix epoch UTC (4 bytes)                  | **✅ Unix epoch μs (8 bytes)**                 | ✅ UTC (1s resolución)        | ✅ UTC (1ms resolución) + PTP sync                   |
| **Altitud**                   | ✅ Metros (entero)                    | ❌ No                                        | **✅ Metros MSL (4 bytes)**                    | ⚠️ Algunos modelos            | ✅ Metros (0.01m resolución)                         |
| **Velocidad**                 | ❌ No (solo en GPS)                   | ❌ No directo                                | **✅ 0-500 km/h (0.1 km/h)**                   | ✅ OBD PID 0x0D<br>0-255 km/h | ✅ CAN 0x1A9 (ABS)<br>0.01 km/h resolución           |
| **Dirección/heading**         | ❌ No                                 | ✅ 0-359° (1° res)                           | **✅ 0-359.9° (0.1° res)**                     | ⚠️ Algunos GPS                | ✅ Fusión sensor (GPS+IMU+wheel)<br>0.01° resolución |
| **Aceleración**               | ❌ No                                 | ❌ No                                        | **✅ 3-axis (±8g, 10ms window)**               | ❌ No (sin IMU)               | ✅ IMU 6-axis (±16g, 100 Hz)                         |
| **VIN**                       | ❌ No                                 | ✅ 17 bytes ISO 3779                         | **✅ 17 bytes ISO 3779**                       | ⚠️ Opcional (lectura OBD)     | ✅ Almacenado en TCU                                 |
| **ID Dispositivo**            | ✅ IMEI (15 dígitos)                  | ✅ IMEI (legado)<br>**⚠️ SUCI cifrado (NG)** | **✅ SUCI + cert digital**                     | ✅ IMEI                       | ✅ IMEI + VIN + cert X.509                           |
| **Estado batería**            | ✅ Voltaje (0.1V res)                 | ❌ No                                        | ❌ No                                          | ⚠️ Algunos OBD                | ✅ 12V sistema + SOC baterías                        |
| **Activación manual/auto**    | ✅ Flag binario                       | ✅ 1 byte (manual/auto/test)                 | **✅ 1 byte + third-party trigger**            | N/A (continuo)                | N/A (continuo)                                       |
| **Cinturones/airbags**        | ❌ No                                 | ✅ 1 byte bitmap                             | **✅ 2 bytes (cinturones + airbags deployed)** | ❌ No                         | ✅ CAN detallado (por asiento)                       |
| **Cell-ID backup**            | ❌ No                                 | ❌ No                                        | **✅ MCC-MNC-LAC-CID (8 bytes)**               | ⚠️ Algunos                    | ✅ Cell-ID continuo                                  |
| **Datos diagnóstico**         | ❌ No                                 | ❌ No                                        | ❌ No                                          | ✅ DTCs (códigos error motor) | ✅ 500+ parámetros CAN-bus                           |
| **Comportamiento conducción** | ❌ No                                 | ❌ No                                        | ❌ No                                          | ⚠️ Aceleración/frenado básico | ✅ Perfil completo (curvas, RPM, consumo)            |
| **Multimedia/cámara**         | ❌ No                                 | ❌ No                                        | ❌ No                                          | ❌ No                         | ✅ Fotos/vídeo dashcam (algunos modelos)             |

---

### 4.2 Frecuencia y Tamaño de Transmisiones

| Sistema               | Frecuencia Transmisión       | Tamaño Payload | Ancho de Banda Mensual     | Visibilidad RF              |
| --------------------- | ---------------------------- | -------------- | -------------------------- | --------------------------- |
| **V16 modo standby**  | Cada 24-48h (TAU)            | 50-200 bytes   | **~10 KB/mes**             | Muy baja (2s cada 2 días)   |
| **V16 activada**      | Cada 90-120s por 30 min      | 150-300 bytes  | ~150 KB durante emergencia | Baja (18-20 transmisiones)  |
| **eCall Legacy**      | Solo accidente (~0.001%/año) | 140 bytes      | **<1 KB/año**              | Casi nula                   |
| **NG-eCall**          | Accidente + **test mensual** | 280 bytes      | **~3.5 KB/mes**            | Baja (30s test)             |
| **Telemática OBD-II** | Cada 1-5 minutos (continuo)  | 500-2000 bytes | **20-100 MB/mes**          | Alta (transmisión continua) |
| **Telemática TCU**    | Cada 10-60s (según evento)   | 1-10 KB        | **50-500 MB/mes**          | Muy alta (always-on)        |

**Conclusión crítica**:

- V16 transmite **10,000× menos datos** que telemática continua
- eCall Legacy es **prácticamente invisible** (1 transmisión cada 1000+ días)
- NG-eCall incrementa visibilidad **36× vs legacy** por tests mensuales

---

### 4.3 Protocolos de Aplicación

| Sistema          | Protocolo Transporte        | Cifrado                                   | Puerto/Servicio                        | Autenticación                                |
| ---------------- | --------------------------- | ----------------------------------------- | -------------------------------------- | -------------------------------------------- |
| **V16**          | CoAP sobre UDP<br>o MQTT-SN | **TLS 1.3 + PSK**<br>AES-256-GCM          | UDP 5683 (CoAPS)<br>o TCP 8883 (MQTTS) | PSK pre-compartida<br>+ IMEI whitelist       |
| **eCall Legacy** | In-band modem<br>(no IP)    | **Sin cifrado**<br>(audio analógico)      | Voice channel TS12                     | Sin autenticación<br>(confía en red celular) |
| **NG-eCall**     | SIP/IMS sobre IP            | **TLS 1.2**<br>+ SRTP (audio)             | TCP 5060/5061 (SIP)<br>UDP 5004 (RTP)  | SIP Digest<br>+ certificado IMS              |
| **OBD-II**       | HTTP/HTTPS                  | TLS 1.2 variable<br>⚠️ Muchos sin cifrado | TCP 443 o 80                           | API key<br>⚠️ A veces en claro               |
| **TCU**          | Propietario + HTTPS         | **TLS 1.3 + mTLS**<br>Certificados X.509  | TCP 443<br>+ VPN IPsec                 | Certificado mutuo<br>+ HSM en TCU            |

**Vulnerabilidades identificadas**:

- ✅ **V16**: Bien protegida (TLS 1.3 + PSK rotativa)
- ⚠️ **eCall Legacy**: **CRÍTICO** - Sin cifrado, MSD en texto plano sobre audio
- ✅ **NG-eCall**: Mejorado sustancialmente (TLS 1.2)
- ❌ **OBD-II low-cost**: Muchos sin cifrado o con API keys hardcoded
- ✅ **TCU premium**: Seguridad robusta (mTLS + HSM)

---

### 4.4 Análisis de Metadatos (más allá del payload)

**Metadatos capturables en nivel de red** (invisibles para el usuario):

| Metadato              | V16                         | eCall                     | OBD-II                      | TCU                            | Accesible por            |
| --------------------- | --------------------------- | ------------------------- | --------------------------- | ------------------------------ | ------------------------ |
| **IMEI**              | ✅ En ATTACH request        | ✅ En setup llamada       | ✅ Continuo                 | ✅ Continuo                    | Operadora + gobiernos    |
| **IMSI**              | ✅ Cifrado (Release 15+)    | ✅ En claro (legacy)      | ✅ En claro                 | ⚠️ SUCI en 5G                  | Operadora + Stingray     |
| **Cell-ID histórico** | ✅ Último TAU (24-48h)      | ✅ Durante llamada        | ✅ Últimos 50-200           | ✅ Últimos 200-500             | Operadora (logs HSS/UDM) |
| **IP address**        | ✅ Dinámica APN privado     | ❌ N/A (circuit-switched) | ✅ Dinámica APN público     | ✅ Semi-estática APN privado   | Operadora + ISP          |
| **TLS SNI**           | ⚠️ Visible (sin ESNI)       | N/A                       | ⚠️ Visible                  | ✅ ECH (Encrypted ClientHello) | ISP + DPI middleboxes    |
| **DNS queries**       | ✅ servidor.v16provider.com | N/A                       | ⚠️ En claro                 | ✅ DoH/DoT cifrado             | ISP (si DNS no cifrado)  |
| **Timing patterns**   | ✅ TAU periódico predecible | ⚠️ Sólo en accidente      | ✅ Patrón regular (1-5 min) | ✅ Patrón complejo (eventos)   | Traffic analysis         |
| **Packet sizes**      | ✅ 150-300 bytes constante  | ✅ 280 bytes fijo (NG)    | ✅ 500-2000 bytes variable  | ✅ 1-10 KB muy variable        | Deep Packet Inspection   |

**Técnicas de correlación avanzadas**:

```
Escenario: Identificar usuario V16 sin IMEI

1. Traffic Analysis:
   - Detectar patrón: Conexión cada 24h, 200 bytes, CoAP/UDP 5683
   - Firma única: "Esto es una V16"

2. Timing Correlation:
   - V16 transmite a las 03:47 UTC cada día
   - Correlacionar con logs Cell-ID â†' Torre cerca de domicilio usuario

3. Cross-service Correlation:
   - Usuario activa V16 manualmente â†' spike transmisiones cada 90s
   - Mismo momento: llamada desde móvil personal a 112
   - Cell-ID coincide â†' "Usuario X tiene V16 Y"

4. Physical Surveillance:
   - Cámaras ANPR detectan vehículo en ubicación Cell-ID
   - Matrícula â†' Propietario â†' IMEI V16 asociado
```

---

## 5. Capacidades de Rastreo por Actor

### 5.1 Matriz de Capacidades Técnicas

| Actor                                | V16 Standby                                          | V16 Activada                                               | eCall Legacy                                  | NG-eCall                                           | OBD-II                                        | TCU                                                                |
| ------------------------------------ | ---------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------ |
| **Operadora celular**                | ✅ Cell-ID cada 24-48h<br>Precisión: 500m-5km        | ✅ Cell-ID cada 90s<br>Precisión: 100m-2km                 | ✅ Durante llamada 112<br>Precisión: 100m-2km | ✅ Test mensual + emergencia<br>Precisión: 50-500m | ✅ Continuo tiempo real<br>Precisión: 50-500m | ✅ Continuo tiempo real<br>Precisión: 10-100m (5G)                 |
| **Fabricante V16/TCU**               | ⚠️ Logs servidor (si almacena)                       | ✅ GPS exacto cada transmisión                             | ❌ No (MSD va a PSAP)                         | ⚠️ MSD copiado si acordado                         | ✅ GPS + todos datos OBD                      | ✅ GPS + todos datos CAN                                           |
| **Gobierno con orden judicial**      | ✅ Histórico Cell-ID<br>⚠️ GPS si fabricante coopera | ✅ GPS en tiempo real<br>(si fabricante coopera)           | ✅ GPS en MSD<br>(vía PSAP 112)               | ✅ GPS + Cell-ID + velocidad                       | ✅ GPS + comportamiento<br>(vía aseguradora)  | ✅ Rastreo completo<br>(vía fabricante vehículo)                   |
| **Gobierno sin orden (autoritario)** | ✅ API directa HSS/UDM<br>Cell-ID tiempo real        | ✅ Igual + puede forzar transmisión (si backdoor)          | ⚠️ Interceptación PSAP                        | ✅ Interceptación IMS                              | ✅ Acceso directo proveedor telemática        | ✅ Backdoor posible en TCU<br>(si fabricante colabora)             |
| **Policía con Stingray**             | ❌ Muy difícil (PSM mode)                            | ✅ Captura IMEI si activa<br>⚠️ Requiere downgrade 4Gâ†'2G | ✅ Captura MSD completo<br>(si fuerza 2G)     | ⚠️ TLS dificulta (requiere MITM)                   | ✅ Fácil (transmisión continua)               | ✅ Fácil (always-on)                                               |
| **Hacker remoto**                    | ❌ Inviable<br>(TLS 1.3 + PSK + sin interfaz)        | ❌ Muy difícil<br>(requiere romper TLS)                    | ❌ No IP/digital                              | ⚠️ Posible si vulnerabilidad IMS                   | ⚠️ Posible (muchos inseguros)                 | ⚠️ Posible si vulnerabilidad TCU<br>(historial: Jeep, Tesla hacks) |
| **Delincuente físico**               | ⚠️ Puede extraer SIM<br>(pero soldada)               | ⚠️ Puede destruir dispositivo                              | ❌ Integrado en coche<br>(difícil desactivar) | ❌ Integrado + backup batería                      | ✅ Fácil desconectar OBD-II                   | ❌ Integrado (muy difícil)                                         |
| **Empresa privada**                  | ❌ No (sin acceso red)                               | ❌ No                                                      | ❌ No                                         | ❌ No                                              | ✅ Sí (si cliente aseguradora)                | ⚠️ Posible (servicios conectados)                                  |

**Leyenda**:

- ✅ = Capacidad completa confirmada
- ⚠️ = Capacidad limitada o condicional
- ❌ = No viable técnicamente o legalmente

---

### 5.2 Escenarios de Rastreo Realistas (2024-2025)

#### **Escenario 1: Policía busca vehículo sospechoso con V16**

**Herramientas disponibles**:

- Orden judicial â†' Acceso logs operadora
- Stingray móvil (si emergencia)
- ANPR (cámaras matriculas)

**Proceso**:

```
Día 0: Delito cometido, vehículo huye
- ANPR captura matrícula â†' Consulta DGT â†' Propietario
- Orden judicial â†' Operadora: "IMEI dispositivos registrados a este usuario"

Día 1: Rastreo pasivo
- Operadora proporciona: Último Cell-ID (hace 18h), TAU siguiente en 6h
- Policía despliega vigilancia en zona torre celular (radio 2-5 km)
- ANPR en zona captura vehículo â†' Ubicación exacta

Alternativa activa (si urgente):
- Stingray en zona torre celular
- Espera TAU siguiente (máx 48h)
- Captura IMEI + puede forzar transmisión GPS (si downgrade a 2G exitoso)
- Probabilidad éxito: 60-80% en 72h
```

**Tiempo estimado**: 24-72 horas  
**Coste**: €5,000-15,000 (personal + Stingray alquiler)  
**Legalidad**: ✅ Legal con orden judicial EU

---

#### **Escenario 2: Gobierno autoritario monitorea disidente con V16**

**Herramientas disponibles**:

- Acceso directo HSS/UDM (sin orden judicial)
- Red nacional Stingray (fija)
- Posible backdoor fabricante V16 (si chino/ruso)

**Proceso**:

```
Continuo: Vigilancia pasiva
- API directa operadora â†' Cell-ID cada TAU (24-48h)
- Precisión: 500m-5km (suficiente para saber ciudad/barrio)
- Coste: €0 (integrado en infraestructura estatal)

Si necesita precisión:
- Activa Stingray más cercano al Cell-ID
- Espera TAU o fuerza transmisión (si backdoor)
- Captura GPS exacto

Si disidente activa V16 (emergencia real):
- GPS en tiempo real cada 90s durante 30 min
- Seguimiento perfecto
```

**Tiempo estimado**: Monitoreo continuo (años)  
**Coste**: Marginal (infraestructura ya existe)  
**Legalidad**: ❌ Ilegal en EU, ⚠️ "Legal" en regímenes autoritarios

---

#### **Escenario 3: Stalker/abusador intenta rastrear víctima con V16**

**Herramientas disponibles**:

- Acceso físico al dispositivo (si convivencia)
- SDR de bajo coste (~€500)
- Apps maliciosas en móvil víctima

**Limitaciones técnicas**:

```
❌ Sin acceso operadora: No puede obtener Cell-ID
❌ PSM profundo: V16 invisible 99.9% del tiempo
❌ Sin interfaz: No puede "hackear" el dispositivo (no tiene UI/Bluetooth)
❌ TLS 1.3: No puede interceptar datos aunque capture RF

Única opción realista:
- Acceso físico â†' Intenta extraer SIM (soldada, muy difícil)
- SDR pasivo â†' Espera TAU (probabilidad <0.1%/hora de captura)
- Incluso capturando transmisión: Solo obtiene señal cifrada inútil
```

**Conclusión**: ✅ **V16 extremadamente resistente a stalking**  
(vs OBD-II o apps móvil que son vulnerables)

---

#### **Escenario 4: Aseguradora rastrea cliente con OBD-II telemática**

**Herramientas disponibles**:

- Acceso legal a servidor telemática (cliente firmó contrato)
- API completa: GPS + velocidad + aceleración + DTCs

**Proceso**:

```
Continuo 24/7:
- GPS cada 1-5 minutos
- Velocidad máxima diaria
- Frenazos bruscos
- Aceleraciones fuertes
- Kilómetros nocturnos
- Zonas de riesgo visitadas

Caso de uso: Reclamación accidente
- Datos 10 min antes: Velocidad 135 km/h en zona 90
- Aseguradora: "Fraude, conducción temeraria"
- Anula póliza o reduce indemnización
```

**Tiempo estimado**: Tiempo real continuo  
**Coste**: €0 (ya pagado por cliente)  
**Legalidad**: ✅ Legal (cliente aceptó términos)  
**Privacidad**: ❌ Perfil completo vida del conductor

---

## 6. Análisis de Privacidad y Anonimato

### 6.1 Niveles de Identificabilidad

**Escala de anonimato** (0 = identificación directa, 10 = anónimo perfecto):

| Sistema               | Puntuación | Razonamiento                                                                                                                                                                                               |
| --------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **V16 standby**       | **7.5/10** | - IMEI vinculado a compra (DNI), pero transmisiones mínimas<br>- Cell-ID cada 48h insuficiente para tracking continuo<br>- TLS 1.3 impide inspección contenido<br>- Vulnerable: Correlación Cell-ID + ANPR |
| **V16 activada**      | **5.5/10** | - GPS exacto expuesto (vía servidor fabricante)<br>- Transmisiones frecuentes (90s) durante 30 min<br>- Correlacionable con llamadas móvil personales<br>- Aún mejor que alternativas continuas            |
| **eCall Legacy**      | **8.5/10** | - Transmisión única por accidente (casi nunca)<br>- Sin cifrado pero efímero (3-7s)<br>- VIN identificable pero requiere base datos DGT<br>- Vulnerable solo durante llamada 112                           |
| **NG-eCall**          | **6.0/10** | - Test mensual crea patrón predecible<br>- MSD incluye más datos (velocidad, Cell-ID)<br>- TLS 1.2 pero sobre IMS (menos anónimo que V16 directa)<br>- VIN + Cell-ID = identificación fácil                |
| **OBD-II telemática** | **2.0/10** | - Transmisión continua crea perfil completo<br>- GPS cada 1-5 min = tracking perfecto<br>- Muchos sin cifrado adecuado<br>- Empresa privada tiene todos los datos                                          |
| **TCU fabricante**    | **3.0/10** | - Always-on, datos masivos<br>- Fabricante conoce identidad (VIN + propietario)<br>- Posible compartir con terceros (publicidad, seguros)<br>- Servicios "conectados" = vigilancia permanente              |

---

### 6.2 Vectores de Deanonimización

**Métodos para vincular dispositivo V16 a persona real**:

#### **1. Correlación de Compra**

```
V16 comprada en tienda/online
â†' Pago con tarjeta = DNI/NIE
â†' IMEI registrado en factura
â†' Operadora: IMEI â†' IMSI â†' línea contrato (más DNI)
```

**Mitigación**: Compra con efectivo, sin registro (ilegal en algunos países)

#### **2. Correlación Temporal Móvil Personal**

```
Usuario activa V16 a las 14:37
â†' Servidor V16 recibe GPS: Lat 40.4168, Lon -3.7038
Simultáneamente:
â†' Móvil personal conecta torre misma zona
â†' Llamada a 112 desde móvil 14:38
â†' Cross-reference: "V16 X pertenece a usuario móvil Y"
```

**Mitigación**: Activar V16 sin llevar móvil personal (poco práctico)

#### **3. Correlación ANPR (Automatic Number Plate Recognition)**

```
V16 transmite Cell-ID: Torre en calle Mayor, 14:00
Cámaras ANPR en calle Mayor:
â†' Matrícula ABC-1234 detectada 14:00 Â±5 min
â†' Consulta DGT: Matrícula â†' Propietario
â†' Intersección: "Usuario X tiene V16 Y en vehículo ABC-1234"
```

**Mitigación**: Ninguna práctica (ANPR omnipresente en ciudades)

#### **4. Análisis de Movilidad (Pattern-of-Life)**

```
V16 TAU diario 03:47 UTC en Cell-ID: Torre barrio residencial
V16 TAU diario 09:15 UTC en Cell-ID: Torre polígono industrial
Patrón 200 días:
â†' Lunes-Viernes: Ruta Casa â†' Trabajo consistente
â†' Fines de semana: Cell-ID centro ciudad
â†' Inferencia: "Usuario trabaja en empresa Z, vive en zona W"
```

**Mitigación**: Cambiar rutas aleatoriamente (impracticable)

---

### 6.3 Comparativa con Alternativas de Privacidad

**Dispositivos de emergencia sin rastreo celular**:

| Alternativa                     | Privacidad                    | Eficacia Emergencia                | Coste                   | Legal EU                          |
| ------------------------------- | ----------------------------- | ---------------------------------- | ----------------------- | --------------------------------- |
| **V16**                         | 7.5/10 standby                | ✅ Alta (conexión 112 directa)     | €50-100 + €2-5/mes      | ✅ Obligatorio desde 2026         |
| **Triángulos tradicionales**    | 10/10 (sin electrónica)       | ⚠️ Media (requiere salir vehículo) | €10-20                  | ⚠️ Prohibidos solo V16 desde 2026 |
| **Baliza 406 MHz (marítimo)**   | 9/10 (satélite, no celular)   | ✅ Alta (rescate global)           | €200-500 (sin cuotas)   | ❌ No homologado carretera        |
| **Sat Phone (Iridium/Thuraya)** | 8/10 (satelital, más privado) | ✅ Muy alta (cobertura global)     | €800-2000 + €50-150/mes | ✅ Legal pero no obligatorio      |
| **Inmarsat GMDSS**              | 9/10 (marítimo especializado) | ✅ Máxima (uso profesional)        | €3000+                  | ❌ No aplicable vehículos         |
| **Sin dispositivo**             | 10/10 (no rastreable)         | ❌ Nula (depende terceros)         | €0                      | ❌ Ilegal desde 2026              |

**Conclusión**: V16 es un **compromiso aceptable** entre seguridad vial y privacidad:

- Mucho más privada que telemática continua (OBD-II/TCU)
- Menos privada que triángulos pasivos (pero más efectiva)
- Comparable a sat phones pero mucho más económica

---

## 7. Recomendaciones Técnicas de Privacidad

### 7.1 Para Usuarios de V16

**Buenas prácticas**:

1. ✅ **Comprar en efectivo** si posible (dificulta correlación DNI-IMEI)
2. ✅ **Contratar línea con prepago anónimo** (si regulación lo permite)
3. ✅ **No asociar a cuenta personal** del fabricante (evitar apps)
4. ✅ **Apagar móvil personal** al activar V16 (evita correlación temporal)
5. ✅ **Verificar certificación** del fabricante (evitar marcas sospechosas)
6. ⚠️ **Revisar política privacidad** del servidor backend

**Malas prácticas a evitar**:

1. ❌ **No usar apps "tracking"** del fabricante V16 (añaden vector rastreo)
2. ❌ **No activar innecesariamente** (cada activación = huella digital)
3. ❌ **No modificar firmware** (ilegal + puede desactivar seguridad)
4. ❌ **No extraer SIM** (ilegal + rompe funcionalidad)

---

### 7.2 Para Reguladores y Legisladores

**Propuestas mejora regulación**:

#### **Obligaciones Fabricantes**:

```
1. Data Minimization:
   - Almacenar solo últimas 24h de datos GPS
   - Borrado automático tras 30 días (salvo emergencia real)
   - Prohibir venta datos a terceros (multas GDPR)

2. Transparencia:
   - Publicar qué datos se transmiten (documentación pública)
   - Auditorías anuales independientes de seguridad
   - Notificar breaches en <72h

3. Seguridad:
   - TLS 1.3 mínimo obligatorio
   - PSK rotativas cada 90 días
   - Certificación Common Criteria EAL4+
```

#### **Derechos Usuarios**:

```
1. Acceso:
   - Descargar historial completo transmisiones (formato JSON/CSV)
   - Ver en tiempo real qué datos se están enviando

2. Rectificación/Borrado:
   - Solicitar borrado datos (salvo obligaciones legales)
   - Corregir datos erróneos

3. Portabilidad:
   - Cambiar proveedor manteniendo mismo IMEI
   - Exportar datos a nuevo proveedor
```

#### **Límites Acceso Gubernamental**:

```
1. Judicial Oversight:
   - Orden judicial específica para acceso datos V16
   - Notificación usuario tras 90 días (salvo investigación activa)
   - Registro público estadísticas accesos (anonimizado)

2. Proporcionalidad:
   - Solo delitos graves (>3 años prisión)
   - Acceso limitado a ventana temporal relevante (Â±48h incidente)
   - Prohibir fishing expeditions masivas
```

---

### 7.3 Para Fabricantes

**Checklist de privacidad by design**:

#### **Arquitectura**:

- [ ] PSM profundo configurado (T3412 â‰¥ 24h)
- [ ] TLS 1.3 con PFS (Perfect Forward Secrecy)
- [ ] No almacenar datos GPS en dispositivo (solo transmitir)
- [ ] SIM soldada + eSIM con SUCI encryption
- [ ] Servidor backend con cifrado en reposo (AES-256)

#### **Minimización datos**:

- [ ] GPS con precisión limitada (Â±10m suficiente para emergencias)
- [ ] Sin identificadores adicionales (MAC WiFi, Bluetooth)
