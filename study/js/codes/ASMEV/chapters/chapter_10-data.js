// Registrar el código ASME BPVC.V-2023 si no existe
if (!getCode('ASMEV')) {
    console.error('El código ASME BPVC.V-2023 no está registrado. Registrándolo ahora...');
    registerCode('ASMEV', {
        title: "ASME Boiler and Pressure Vessel Code Section V - Nondestructive Examination",
        titleEs: "Código de Calderas y Recipientes a Presión ASME Sección V - Examen No Destructor"
    });
}

// Registrar el capítulo 10
registerChapter('ASMEV', {
    id: 10,
    title: "Leak Testing",
    titleEs: "Pruebas de Fugas",
    content: `<h3>ARTICLE 10 LEAK TESTING</h3>
    <div class="subsection">
        <h4>T-1010 SCOPE</h4>
        <p>This Article describes methods and requirements for the performance of leak testing.</p>
        <p>(a) When a leak testing method or technique of Article 10 is specified by a referencing Code Section, the leak test method or technique shall be used together with Article 1, General Requirements.</p>
        <p>(b) Definition of terms used in this Article are in Article 1, Mandatory Appendix I, I-121.7, LT — Leak Testing.</p>
        <p>(c) The test methods or techniques of these methods can be used for the location of leaks or the measurement of leakage rates.</p>
        <p>The specific test method(s) or technique(s) and Glossary of Terms of the methods in this Article are described in Mandatory Appendices I through X of Article 10 as follows:</p>
        <p>Mandatory Appendix I — Bubble Test — Direct Pressure Technique</p>
        <p>Mandatory Appendix II — Bubble Test — Vacuum Box Technique</p>
        <p>Mandatory Appendix III — Halogen Diode Detector Probe Test</p>
        <p>Mandatory Appendix IV — Helium Mass Spectrometer Test — Detector Probe Technique</p>
        <p>Mandatory Appendix V — Helium Mass Spectrometer Test — Tracer Probe Technique</p>
        <p>Mandatory Appendix VI — Pressure Change Test</p>
        <p>Mandatory Appendix VIII — Thermal Conductivity Detector Probe Test</p>
        <p>Mandatory Appendix IX — Helium Mass Spectrometer Test — Hood Technique</p>
        <p>Mandatory Appendix X — Ultrasonic Leak Detector Test</p>
        <p>Mandatory Appendix XI — Helium Mass Spectrometer — Helium-Filled-Container Leakage Rate Test</p>
        <p>Nonmandatory Appendix A — Supplementary Leak Testing Equation Symbols</p>
    </div>
    <div class="subsection">
        <h4>T-1020 GENERAL</h4>
        <div class="subsection">
            <h4>T-1021 WRITTEN PROCEDURE REQUIREMENTS</h4>
            <div class="subsection">
                <h4>T-1021.1 Requirements</h4>
                <p>Leak testing shall be performed in accordance with a written procedure, which shall, as a minimum, contain the requirements listed in the applicable Appendices, paras. I-1021 through X-1021 and Tables I-1021 through X-1021. The written procedure shall establish a single value, or range of values, for each requirement.</p>
            </div>
            <div class="subsection">
                <h4>T-1021.2 Modification of Requirements</h4>
                <p>Article 10 contains test techniques; therefore, there are requirements that cannot be modified by the organization through the demonstration process per T-150. Only those requirements listed in Tables I-1021 through X-1021 may be so modified by demonstration.</p>
            </div>
            <div class="subsection">
                <h4>T-1021.3 Procedure Qualification</h4>
                <p>When procedure qualification is specified by the referencing Code Section, a change of a requirement in the applicable Appendix Tables I-1021 through X-1021 identified as an essential variable shall require requalification of the written procedure by demonstration. A change of a requirement identified as a nonessential variable does not require requalification of the written procedure. All changes of essential and nonessential elements from those specified within the written procedure shall require revision of, or an addendum to, the written procedure.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-1022 REFERENCING CODE</h4>
            <p>For the leak testing method(s) or technique(s) specified by the referencing Code, the referencing Code Section shall then be consulted for the following:</p>
            <p>(a) personnel qualification/certification</p>
            <p>(b) technique(s)/calibration standards</p>
            <p>(c) extent of examination</p>
            <p>(d) acceptable test sensitivity or leakage rate</p>
            <p>(e) report requirements</p>
            <p>(f) retention of records</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1030 EQUIPMENT</h4>
        <div class="subsection">
            <h4>T-1031 GAGES</h4>
            <p>(a) Gage Range. When dial indicating and recording pressure gage(s) are used in leak testing, they should preferably have the dial(s) graduated over a range of approximately double the intended maximum pressure, but in no case shall the range be less than 11/2 nor more than four times that pressure. These range limits do not apply to dial indicating and recording vacuum gages. Range requirements for other types of gages given in an applicable Mandatory Appendix shall be as required by that Appendix.</p>
            <p>(b) Gage Location. When components are to be pressure/vacuum leak tested, the dial indicating gage(s) shall be connected to the component or to the component from a remote location, with the gage(s) readily visible to the operator controlling the pressure/vacuum throughout the duration of pressurizing, evacuating, testing, and depressurizing or venting of the component. For large vessels or systems where one or more gages are specified or required, a recording type gage is recommended, and it may be substituted for one of the two or more indicating type gages.</p>
            <p>(c) When other types of gage(s) are required by an applicable Mandatory Appendix, they may be used in conjunction with or in place of dial indicating or recording type gages.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1040 MISCELLANEOUS REQUIREMENTS</h4>
        <div class="subsection">
            <h4>T-1041 CLEANLINESS</h4>
            <p>The surface areas to be tested shall be free of oil, grease, paint, or other contaminants that might mask a leak. If liquids are used to clean the component or if a hydrostatic or hydropneumatic test is performed before leak testing, the component shall be dry before leak testing.</p>
        </div>
        <div class="subsection">
            <h4>T-1042 OPENINGS</h4>
            <p>All openings shall be sealed using plugs, covers, sealing wax, cement, or other suitable material that can be readily and completely removed after completion of the test. Sealing materials shall be tracer gas free.</p>
        </div>
        <div class="subsection">
            <h4>T-1043 TEMPERATURE</h4>
            <p>The minimum metal temperature for all components during a test shall be as specified in the applicable Mandatory Appendix of this Article or in the referencing Code Section for the hydrostatic, hydropneumatic, or pneumatic test of the pressure component or parts. The minimum or maximum temperature during the test shall not exceed that temperature compatible with the leak testing method or technique used.</p>
        </div>
        <div class="subsection">
            <h4>T-1044 PRESSURE/VACUUM (PRESSURE LIMITS)</h4>
            <p>Unless specified in the applicable Mandatory Appendix of this Article or by the referencing Code Section, components that are to be pressure-leak tested shall not be tested at a pressure exceeding 25% of the Design Pressure.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1050 PROCEDURE</h4>
        <div class="subsection">
            <h4>T-1051 PRELIMINARY LEAK TEST</h4>
            <p>Prior to employing a sensitive leak testing method, it may be expedient to perform a preliminary test to detect and eliminate gross leaks. This shall be done in a manner that will not seal or mask leaks during the specified test.</p>
        </div>
        <div class="subsection">
            <h4>T-1052 TEST SEQUENCE</h4>
            <p>It is recommended that leak testing be performed before hydrostatic or hydropneumatic testing.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1060 CALIBRATION</h4>
        <div class="subsection">
            <h4>T-1061 PRESSURE/VACUUM GAGES</h4>
            <p>(a) All dial indicating and recording type gages used shall be calibrated against a standard deadweight tester, a calibrated master gage, or a mercury column, and recalibrated at least once a year, when in use, unless specified differently by the referencing Code Section or Mandatory Appendix. All gages used shall provide results accurate to within the Manufacturer's listed accuracy and shall be recalibrated at any time that there is reason to believe they are in error.</p>
            <p>(b) When other than dial indicating or recording type gages are required by an applicable Mandatory Appendix, they shall be calibrated as required by that Mandatory Appendix or referencing Code Section.</p>
        </div>
        <div class="subsection">
            <h4>T-1062 TEMPERATURE MEASURING DEVICES</h4>
            <p>When temperature measurement is required by the referencing Code Section or Mandatory Appendix, the device(s) shall be calibrated in accordance with the requirements of that Code Section or Mandatory Appendix.</p>
        </div>
        <div class="subsection">
            <h4>T-1063 CALIBRATION LEAK STANDARDS</h4>
            <div class="subsection">
                <h4>T-1063.1 Reservoir Leak Standard</h4>
                <p>This standard leak shall have a reservoir of the tracer gas connected to the leak. The leak standard shall</p>
                <p>(a) have a leakage rate in the range and tracer gas species specified by the referencing Code Section or, if not specified, per the Mandatory Appendix.</p>
                <p>(b) be calibrated with discharge either to vacuum or to an air environment of 1 atm (101 kPa absolute) to match the test application or instrument type.</p>
            </div>
            <div class="subsection">
                <h4>T-1063.2 Nonreservoir Leak Standard</h4>
                <p>This standard leak does not have an inherent supply of tracer gas. The leak shall</p>
                <p>(a) have a leakage rate in the range and tracer gas species specified by the referencing Code Section or, if not specified, per the Mandatory Appendix.</p>
                <p>(b) be calibrated with discharge either to vacuum or to an air environment of 1 atm (101 kPa absolute) to match the test application.</p>
                <p>(c) be calibrated at a pressure differential across the leak of 1 atm (14.7 psi, 101 kPa) or at a differential that represents the differential to be used in the specific test procedure.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1070 TEST</h4>
        <p>See applicable Mandatory Appendix of this Article.</p>
    </div>
    <div class="subsection">
        <h4>T-1080 EVALUATION</h4>
        <div class="subsection">
            <h4>T-1081 ACCEPTANCE STANDARDS</h4>
            <p>Unless otherwise specified in the referencing Code Section, the acceptance criteria given for each method or technique of that method shall apply. The supplemental leak testing equations for calculating leakage rates for the method or technique used are stated in the Mandatory Appendices of this Article.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1090 DOCUMENTATION</h4>
        <div class="subsection">
            <h4>T-1091 TEST REPORT</h4>
            <p>The test report shall contain, as a minimum, the following information as applicable to the method or technique:</p>
            <p>(a) date of test</p>
            <p>(b) certified level and name of operator</p>
            <p>(c) test procedure (number) and revision number</p>
            <p>(d) test method or technique</p>
            <p>(e) test results</p>
            <p>(f) component identification</p>
            <p>(g) test instrument, standard leak, and material identification</p>
            <p>(h) test conditions, test pressure, tracer gas, and gas concentration</p>
            <p>(i) gage(s) — manufacturer, model, range, and identification number</p>
            <p>(j) temperature measuring device(s) and identification number(s)</p>
            <p>(k) sketch showing method or technique setup</p>
        </div>
        <div class="subsection">
            <h4>T-1092 RECORD RETENTION</h4>
            <p>The test report shall be maintained in accordance with the requirements of the referencing Code Section.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>MANDATORY APPENDIX I</h4>
        <h4>BUBBLE TEST — DIRECT PRESSURE TECHNIQUE</h4>
        <div class="subsection">
            <h4>I-1010 SCOPE</h4>
            <p>The objective of the direct pressure technique of bubble leak testing is to locate leaks in a pressurized component by the application of a solution or by immersion in liquid that will form bubbles as leakage gas passes through it.</p>
        </div>
        <div class="subsection">
            <h4>I-1020 GENERAL</h4>
            <div class="subsection">
                <h4>I-1021 WRITTEN PROCEDURE REQUIREMENTS</h4>
                <div class="subsection">
                    <h4>I-1021.1 Requirements</h4>
                    <p>The requirements of T-1021.1, Table I-1021, and the following as specified in this Article or referencing Code shall apply:</p>
                    <p>(a) soak time</p>
                    <p>(b) pressure gage</p>
                    <p>(c) test pressure</p>
                    <p>(d) acceptance criteria</p>
                    
                    <div class="figure-container">
                        <img src="images/asmev_figure_i-1021.png" class="figure-image">
                        <p class="figure-caption">Table I-1021 Requirements of a Direct Pressure Bubble Leak Testing Procedure</p>
                    </div>
                </div>
                <div class="subsection">
                    <h4>I-1021.2 Procedure Qualification</h4>
                    <p>The requirements of T-1021.3 and Table I-1021 shall apply.</p>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h4>I-1030 EQUIPMENT</h4>
            <div class="subsection">
                <h4>I-1031 GASES</h4>
                <p>Unless otherwise specified, the test gas will normally be air; however, inert gases may be used.</p>
                <p>NOTE: When inert gas is used, safety aspects of oxygen deficient atmosphere should be considered.</p>
            </div>
            <div class="subsection">
                <h4>I-1032 BUBBLE SOLUTION</h4>
                <p>(a) The bubble forming solution shall produce a film that does not break away from the area to be tested, and the bubbles formed shall not break rapidly due to air drying or low surface tension. Household soap or detergents are not permitted as substitutes for bubble testing solutions.</p>
                <p>(b) The bubble forming solution shall be compatible with the temperature of the test conditions.</p>
            </div>
            <div class="subsection">
                <h4>I-1033 IMMERSION BATH</h4>
                <p>(a) Water or another compatible solution shall be used for the bath.</p>
                <p>(b) The immersion solution shall be compatible with the temperature of the test conditions.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>I-1070 TEST</h4>
            <div class="subsection">
                <h4>I-1071 SOAK TIME</h4>
                <p>Prior to examination the test pressure shall be held for a minimum of 15 min.</p>
            </div>
            <div class="subsection">
                <h4>I-1072 SURFACE TEMPERATURE</h4>
                <p>As a standard technique, the temperature of the surface of the part to be examined shall not be below 40°F (5°C) nor above 125°F (50°C) throughout the examination. Local heating or cooling is permitted provided temperatures remain within the range of 40°F (5°C) to 125°F (50°C) during examination. Where it is impractical to comply with the foregoing temperature limitations, other temperatures may be used provided that the procedure is demonstrated.</p>
            </div>
            <div class="subsection">
                <h4>I-1073 APPLICATION OF SOLUTION</h4>
                <p>The bubble forming solution shall be applied to the surface to be tested by flowing, spraying, or brushing the solution over the examination area. The number of bubbles produced in the solution by application should be minimized to reduce the problem of masking bubbles caused by leakage.</p>
            </div>
            <div class="subsection">
                <h4>I-1074 IMMERSION IN BATH</h4>
                <p>The area of interest shall be placed below the surface of the bath in an easily observable position.</p>
            </div>
            <div class="subsection">
                <h4>I-1075 LIGHTING AND VISUAL AIDS</h4>
                <p>When performing the test, the requirements of Article 9, T-952 and T-953 shall apply.</p>
            </div>
            <div class="subsection">
                <h4>I-1076 INDICATION OF LEAKAGE</h4>
                <p>The presence of continuous bubble growth on the surface of the material indicates leakage through an orifice passage(s) in the region under examination.</p>
            </div>
            <div class="subsection">
                <h4>I-1077 POSTTEST CLEANING</h4>
                <p>After testing, surface cleaning may be required for product serviceability.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>I-1080 EVALUATION</h4>
            <div class="subsection">
                <h4>I-1081 LEAKAGE</h4>
                <p>Unless otherwise specified by the referencing Code Section, the area under test is acceptable when no continuous bubble formation is observed.</p>
            </div>
            <div class="subsection">
                <h4>I-1082 REPAIR/RETEST</h4>
                <p>When leakage is observed, the location of the leak(s) shall be marked. The component shall then be depressurized, and the leak(s) repaired as required by the referencing Code Section. After repairs have been made, the repaired area or areas shall be retested in accordance with the requirements of this Appendix.</p>
            </div>
        </div>
    </div>
    `,
    contentEs: `<h3>ARTÍCULO 10 PRUEBAS DE FUGAS</h3>
    <div class="subsection">
        <h4>T-1010 ALCANCE</h4>
        <p>Este Artículo describe métodos y requisitos para la realización de pruebas de fugas.</p>
        <p>(a) Cuando un método o técnica de prueba de fugas del Artículo 10 sea especificado por una Sección de Código de referencia, el método o técnica de prueba de fugas se utilizará junto con el Artículo 1, Requisitos Generales.</p>
        <p>(b) Las definiciones de los términos utilizados en este Artículo se encuentran en el Artículo 1, Apéndice Obligatorio I, I-121.7, LT — Pruebas de Fugas.</p>
        <p>(c) Los métodos de prueba o técnicas de estos métodos pueden utilizarse para la localización de fugas o la medición de tasas de fuga.</p>
        <p>El método(s) o técnica(s) de prueba específico(s) y el Glosario de Términos de los métodos en este Artículo se describen en los Apéndices Obligatorios I a X del Artículo 10 de la siguiente manera:</p>
        <p>Apéndice Obligatorio I — Prueba de Burbujas — Técnica de Presión Directa</p>
        <p>Apéndice Obligatorio II — Prueba de Burbujas — Técnica de Caja de Vacío</p>
        <p>Apéndice Obligatorio III — Prueba de Sonda de Detector de Halógeno</p>
        <p>Apéndice Obligatorio IV — Prueba de Espectrómetro de Masa de Helio — Técnica de Sonda Detectora</p>
        <p>Apéndice Obligatorio V — Prueba de Espectrómetro de Masa de Helio — Técnica de Sonda Rastreadora</p>
        <p>Apéndice Obligatorio VI — Prueba de Cambio de Presión</p>
        <p>Apéndice Obligatorio VIII — Prueba de Sonda de Detector de Conductividad Térmica</p>
        <p>Apéndice Obligatorio IX — Prueba de Espectrómetro de Masa de Helio — Técnica de Capucha</p>
        <p>Apéndice Obligatorio X — Prueba de Detector de Fugas Ultrasónico</p>
        <p>Apéndice Obligatorio XI — Espectrómetro de Masa de Helio — Prueba de Tasa de Fuga de Recipiente Lleno de Helio</p>
        <p>Apéndice No Obligatorio A — Símbolos de Ecuaciones Suplementarias de Pruebas de Fugas</p>
    </div>
    <div class="subsection">
        <h4>T-1020 GENERAL</h4>
        <div class="subsection">
            <h4>T-1021 REQUISITOS DE PROCEDIMIENTO ESCRITO</h4>
            <div class="subsection">
                <h4>T-1021.1 Requisitos</h4>
                <p>Las pruebas de fugas se realizarán de acuerdo con un procedimiento escrito que contendrá como mínimo los requisitos enumerados en los Apéndices aplicables, párrafos I-1021 a X-1021 y Tablas I-1021 a X-1021. El procedimiento escrito establecerá un valor único o un rango de valores para cada requisito.</p>
            </div>
            <div class="subsection">
                <h4>T-1021.2 Modificación de Requisitos</h4>
                <p>El Artículo 10 contiene técnicas de prueba; por lo tanto, hay requisitos que no pueden ser modificados por la organización a través del proceso de demostración según T-150. Solo aquellos requisitos enumerados en las Tablas I-1021 a X-1021 pueden ser modificados por demostración.</p>
            </div>
            <div class="subsection">
                <h4>T-1021.3 Calificación del Procedimiento</h4>
                <p>Cuando la calificación del procedimiento sea especificada por la Sección de Código de referencia, un cambio en un requisito en las Tablas de Apéndices aplicables I-1021 a X-1021 identificado como una variable esencial requerirá la recalificación del procedimiento escrito mediante demostración. Un cambio en un requisito identificado como una variable no esencial no requerirá la recalificación del procedimiento escrito. Todos los cambios de elementos esenciales y no esenciales con respecto a los especificados en el procedimiento escrito requerirán una revisión o un addendo al procedimiento escrito.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-1022 CÓDIGO DE REFERENCIA</h4>
            <p>Para el método(s) o técnica(s) de prueba de fugas especificado(s) por el Código de referencia, se deberá consultar la Sección de Código de referencia para lo siguiente:</p>
            <p>(a) calificación/certificación de personal</p>
            <p>(b) técnica(s)/estándares de calibración</p>
            <p>(c) alcance del examen</p>
            <p>(d) sensibilidad de prueba aceptable o tasa de fuga</p>
            <p>(e) requisitos de informe</p>
            <p>(f) retención de registros</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1030 EQUIPO</h4>
        <div class="subsection">
            <h4>T-1031 MEDIDORES</h4>
            <p>(a) Rango del Medidor. Cuando se utilizan medidores de presión indicadores y registradores en pruebas de fugas, preferiblemente deberán tener el(los) dial(es) graduados sobre un rango de aproximadamente el doble de la presión máxima prevista, pero en ningún caso el rango será menor de 11/2 ni mayor de cuatro veces esa presión. Estos límites de rango no se aplican a los medidores de vacío indicadores y registradores. Los requisitos de rango para otros tipos de medidores dados en un Apéndice Obligatorio aplicable serán los requeridos por ese Apéndice.</p>
            <p>(b) Ubicación del Medidor. Cuando los componentes van a ser sometidos a prueba de fugas de presión/vacío, el(los) medidor(es) indicador(es) deberá(n) conectarse al componente o al componente desde una ubicación remota, con el(los) medidor(es) fácilmente visible(s) para el operador que controla la presión/vacío durante toda la duración de la presurización, evacuación, prueba y despresurización o ventilación del componente. Para recipientes o sistemas grandes donde se especifican o requieren uno o más medidores, se recomienda un medidor tipo registrador, y puede sustituir a uno de los dos o más medidores tipo indicador.</p>
            <p>(c) Cuando se requieren otros tipos de medidor(es) por un Apéndice Obligatorio aplicable, pueden usarse en conjunción con o en lugar de medidores tipo indicador o registrador.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1040 REQUISITOS VARIOS</h4>
        <div class="subsection">
            <h4>T-1041 LIMPIEZA</h4>
            <p>Las áreas superficiales que se van a probar estarán libres de aceite, grasa, pintura u otros contaminantes que puedan enmascarar una fuga. Si se utilizan líquidos para limpiar el componente o si se realiza una prueba hidrostática o hidroneumática antes de la prueba de fugas, el componente estará seco antes de la prueba de fugas.</p>
        </div>
        <div class="subsection">
            <h4>T-1042 APERTURAS</h4>
            <p>Todas las aperturas se sellarán utilizando tapones, cubiertas, cera de sellado, cemento u otro material adecuado que pueda ser removido fácil y completamente después de la finalización de la prueba. Los materiales de sellado estarán libres de gas trazador.</p>
        </div>
        <div class="subsection">
            <h4>T-1043 TEMPERATURA</h4>
            <p>La temperatura mínima del metal para todos los componentes durante una prueba será la especificada en el Apéndice Obligatorio aplicable de este Artículo o en la Sección de Código de referencia para la prueba hidrostática, hidroneumática o neumática del componente de presión o partes. La temperatura mínima o máxima durante la prueba no excederá aquella temperatura compatible con el método o técnica de prueba de fugas utilizado.</p>
        </div>
        <div class="subsection">
            <h4>T-1044 PRESIÓN/VACÍO (LÍMITES DE PRESIÓN)</h4>
            <p>A menos que se especifique en el Apéndice Obligatorio aplicable de este Artículo o por la Sección de Código de referencia, los componentes que van a ser sometidos a prueba de fugas de presión no se probarán a una presión que exceda el 25% de la Presión de Diseño.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1050 PROCEDIMIENTO</h4>
        <div class="subsection">
            <h4>T-1051 PRUEBA PRELIMINAR DE FUGAS</h4>
            <p>Antes de emplear un método sensible de prueba de fugas, puede ser conveniente realizar una prueba preliminar para detectar y eliminar fugas graves. Esto se hará de una manera que no selle o enmascare las fugas durante la prueba especificada.</p>
        </div>
        <div class="subsection">
            <h4>T-1052 SECUENCIA DE PRUEBA</h4>
            <p>Se recomienda que las pruebas de fugas se realicen antes de las pruebas hidrostáticas o hidroneumáticas.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1060 CALIBRACIÓN</h4>
        <div class="subsection">
            <h4>T-1061 MEDIDORES DE PRESIÓN/VACÍO</h4>
            <p>(a) Todos los medidores tipo indicador y registrador utilizados se calibrarán contra un probador de peso muerto estándar, un medidor maestro calibrado o una columna de mercurio, y se recalibrarán al menos una vez al año, cuando estén en uso, a menos que se especifique lo contrario por la Sección de Código de referencia o Apéndice Obligatorio. Todos los medidores utilizados proporcionarán resultados precisos dentro de la exactitud listada por el Fabricante y se recalibrarán en cualquier momento que haya razones para creer que están en error.</p>
            <p>(b) Cuando se requieren otros tipos de medidor(es) por un Apéndice Obligatorio aplicable, se calibrarán según lo requerido por ese Apéndice Obligatorio o Sección de Código de referencia.</p>
        </div>
        <div class="subsection">
            <h4>T-1062 DISPOSITIVOS DE MEDICIÓN DE TEMPERATURA</h4>
            <p>Cuando la medición de temperatura sea requerida por la Sección de Código de referencia o Apéndice Obligatorio, el(los) dispositivo(s) se calibrará(n) de acuerdo con los requisitos de esa Sección de Código o Apéndice Obligatorio.</p>
        </div>
        <div class="subsection">
            <h4>T-1063 ESTÁNDARES DE FUGA DE CALIBRACIÓN</h4>
            <div class="subsection">
                <h4>T-1063.1 Estándar de Fuga con Reservorio</h4>
                <p>Este estándar de fuga deberá tener un reservorio del gas trazador conectado a la fuga. El estándar de fuga deberá:</p>
                <p>(a) tener una tasa de fuga en el rango y especie de gas trazador especificados por la Sección de Código de referencia o, si no se especifica, según el Apéndice Obligatorio.</p>
                <p>(b) calibrarse con descarga ya sea al vacío o a un ambiente de aire de 1 atm (101 kPa absolutos) para coincidir con la aplicación de prueba o tipo de instrumento.</p>
            </div>
            <div class="subsection">
                <h4>T-1063.2 Estándar de Fuga sin Reservorio</h4>
                <p>Este estándar de fuga no tiene un suministro inherente de gas trazador. La fuga deberá:</p>
                <p>(a) tener una tasa de fuga en el rango y especie de gas trazador especificados por la Sección de Código de referencia o, si no se especifica, según el Apéndice Obligatorio.</p>
                <p>(b) calibrarse con descarga ya sea al vacío o a un ambiente de aire de 1 atm (101 kPa absolutos) para coincidir con la aplicación de prueba.</p>
                <p>(c) calibrarse a un diferencial de presión a través de la fuga de 1 atm (14.7 psi, 101 kPa) o a un diferencial que represente el diferencial que se utilizará en el procedimiento de prueba específico.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1070 PRUEBA</h4>
        <p>Consultar el Apéndice Obligatorio aplicable de este Artículo.</p>
    </div>
    <div class="subsection">
        <h4>T-1080 EVALUACIÓN</h4>
        <div class="subsection">
            <h4>T-1081 ESTÁNDARES DE ACEPTACIÓN</h4>
            <p>A menos que se especifique lo contrario en la Sección de Código de referencia, se aplicarán los criterios de aceptación dados para cada método o técnica de ese método. Las ecuaciones suplementarias de pruebas de fugas para calcular las tasas de fuga para el método o técnica utilizado se establecen en los Apéndices Obligatorios de este Artículo.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-1090 DOCUMENTACIÓN</h4>
        <div class="subsection">
            <h4>T-1091 INFORME DE PRUEBA</h4>
            <p>El informe de prueba contendrá, como mínimo, la siguiente información según sea aplicable al método o técnica:</p>
            <p>(a) fecha de la prueba</p>
            <p>(b) nivel certificado y nombre del operador</p>
            <p>(c) procedimiento de prueba (número) y número de revisión</p>
            <p>(d) método o técnica de prueba</p>
            <p>(e) resultados de la prueba</p>
            <p>(f) identificación del componente</p>
            <p>(g) instrumento de prueba, estándar de fuga e identificación del material</p>
            <p>(h) condiciones de prueba, presión de prueba, gas trazador y concentración de gas</p>
            <p>(i) medidor(es) — fabricante, modelo, rango y número de identificación</p>
            <p>(j) dispositivo(s) de medición de temperatura y número(s) de identificación</p>
            <p>(k) boceto que muestra el método o técnica de configuración</p>
        </div>
        <div class="subsection">
            <h4>T-1092 RETENCIÓN DE REGISTROS</h4>
            <p>El informe de prueba se mantendrá de acuerdo con los requisitos de la Sección de Código de referencia.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>APÉNDICE OBLIGATORIO I</h4>
        <h4>PRUEBA DE BURBUJAS — TÉCNICA DE PRESIÓN DIRECTA</h4>
        <div class="subsection">
            <h4>I-1010 ALCANCE</h4>
            <p>El objetivo de la técnica de presión directa de prueba de fugas por burbujas es localizar fugas en un componente presurizado mediante la aplicación de una solución o por inmersión en líquido que formará burbujas cuando el gas de fuga pase a través de él.</p>
        </div>
        <div class="subsection">
            <h4>I-1020 GENERAL</h4>
            <div class="subsection">
                <h4>I-1021 REQUISITOS DE PROCEDIMIENTO ESCRITO</h4>
                <div class="subsection">
                    <h4>I-1021.1 Requisitos</h4>
                    <p>Se aplicarán los requisitos de T-1021.1, Tabla I-1021, y los siguientes según se especifican en este Artículo o Código de referencia:</p>
                    <p>(a) tiempo de inmersión</p>
                    <p>(b) medidor de presión</p>
                    <p>(c) presión de prueba</p>
                    <p>(d) criterios de aceptación</p>
                    
                    <div class="figure-container">
                        <img src="images/asmev_figure_i-1021.png" class="figure-image">
                        <p class="figure-caption">Tabla I-1021 Requisitos de un Procedimiento de Prueba de Fugas por Burbujas de Presión Directa</p>
                    </div>
                </div>
                <div class="subsection">
                    <h4>I-1021.2 Calificación del Procedimiento</h4>
                    <p>Se aplicarán los requisitos de T-1021.3 y Tabla I-1021.</p>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h4>I-1030 EQUIPO</h4>
            <div class="subsection">
                <h4>I-1031 GASES</h4>
                <p>A menos que se especifique lo contrario, el gas de prueba normalmente será aire; sin embargo, pueden usarse gases inertes.</p>
                <p>NOTA: Cuando se usa gas inerte, deben considerarse los aspectos de seguridad de la atmósfera deficiente en oxígeno.</p>
            </div>
            <div class="subsection">
                <h4>I-1032 SOLUCIÓN DE BURBUJAS</h4>
                <p>(a) La solución formadora de burbujas producirá una película que no se desprenda del área a probar, y las burbujas formadas no se romperán rápidamente debido al secado por aire o baja tensión superficial. No se permite el uso de jabón doméstico o detergentes como sustitutos de las soluciones de prueba de burbujas.</p>
                <p>(b) La solución formadora de burbujas será compatible con la temperatura de las condiciones de prueba.</p>
            </div>
            <div class="subsection">
                <h4>I-1033 BAÑO DE INMERSIÓN</h4>
                <p>(a) Se utilizará agua u otra solución compatible para el baño.</p>
                <p>(b) La solución de inmersión será compatible con la temperatura de las condiciones de prueba.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>I-1070 PRUEBA</h4>
            <div class="subsection">
                <h4>I-1071 TIEMPO DE INMERSIÓN</h4>
                <p>Antes del examen, la presión de prueba se mantendrá durante un mínimo de 15 min.</p>
            </div>
            <div class="subsection">
                <h4>I-1072 TEMPERATURA SUPERFICIAL</h4>
                <p>Como técnica estándar, la temperatura de la superficie de la pieza a examinar no será inferior a 40°F (5°C) ni superior a 125°F (50°C) durante todo el examen. Se permite el calentamiento o enfriamiento local siempre que las temperaturas permanezcan dentro del rango de 40°F (5°C) a 125°F (50°C) durante el examen. Cuando sea impracticable cumplir con las limitaciones de temperatura anteriores, pueden usarse otras temperaturas siempre que el procedimiento esté demostrado.</p>
            </div>
            <div class="subsection">
                <h4>I-1073 APLICACIÓN DE LA SOLUCIÓN</h4>
                <p>La solución formadora de burbujas se aplicará a la superficie a probar mediante flujo, pulverización o cepillado de la solución sobre el área de examen. El número de burbujas producidas en la solución por aplicación debe minimizarse para reducir el problema de enmascaramiento de burbujas causadas por fugas.</p>
            </div>
            <div class="subsection">
                <h4>I-1074 INMERSIÓN EN BAÑO</h4>
                <p>El área de interés se colocará debajo de la superficie del baño en una posición fácilmente observable.</p>
            </div>
            <div class="subsection">
                <h4>I-1075 ILUMINACIÓN Y AYUDAS VISUALES</h4>
                <p>Al realizar la prueba, se aplicarán los requisitos del Artículo 9, T-952 y T-953.</p>
            </div>
            <div class="subsection">
                <h4>I-1076 INDICACIÓN DE FUGA</h4>
                <p>La presencia de crecimiento continuo de burbujas en la superficie del material indica fuga a través de uno o más orificios en la región bajo examen.</p>
            </div>
            <div class="subsection">
                <h4>I-1077 LIMPIEZA POSTERIOR A LA PRUEBA</h4>
                <p>Después de la prueba, puede requerirse limpieza superficial para la servicio del producto.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>I-1080 EVALUACIÓN</h4>
            <div class="subsection">
                <h4>I-1081 FUGA</h4>
                <p>A menos que se especifique lo contrario por la Sección de Código de referencia, el área bajo prueba es aceptable cuando no se observa formación continua de burbujas.</p>
            </div>
            <div class="subsection">
                <h4>I-1082 REPARACIÓN/REPETICIÓN DE PRUEBA</h4>
                <p>Cuando se observa fuga, se marcará la ubicación de la(s) fuga(s). El componente se despresurizará luego, y la(s) fuga(s) se reparará(n) según lo requerido por la Sección de Código de referencia. Después de que se hayan realizado las reparaciones, el área o áreas reparadas se volverán a probar de acuerdo con los requisitos de este Apéndice.</p>
            </div>
        </div>
    </div>
    `
});