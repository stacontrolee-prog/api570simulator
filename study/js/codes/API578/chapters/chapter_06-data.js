// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 6
registerChapter('API578', {
    id: 6,
    title: "Positive Material Identification Methodology and Technology",
    titleEs: "Metodología y Tecnología de Identificación Positiva de Materiales",
    content: `<h3>6 Positive Material Identification Methodology and Technology</h3>
    <div class="subsection">
        <h4>6.1 General</h4>
        <p>A variety of PMI methods are available to determine the identity of alloy materials. The primary methods include portable spectroscopy and laboratory chemical analysis. A description of several test methods is listed below.</p>
        <p>In addition to these methods, there are a variety of alloy sorting techniques that may be appropriate for the purposes of this recommended practice, including magnetic testing to differentiate between ferritic and austenitic materials. It is important that users define the objectives and accuracies required of the PMI tool they wish to apply. All of the tools have benefits and limitations on the elements that can be detected, in addition to the accuracy and ability to differentiate between different material grades that have only slight variations in alloying elements. (See Annex A.)</p>
    </div>
    
    <div class="subsection">
        <h4>6.2 MVP Test Method Objectives</h4>
        <p>The test methods outlined in this document are intended to identify the grades of materials and are not necessarily intended to establish the exact conformance of a material to a particular specification. However, some PMI methods are capable of establishing conformance of materials. It is important that the owner/operator establish the purpose and objectives of the MVP, including PMI, before the technology and methodology are selected.</p>
        <p>Depending on the test method selected, the method may identify only the nominal composition of materials. Identification of materials by visual stamps/markings alone should not be considered as a substitute for PMI but may be an important component of an overall quality assurance program.</p>
    </div>
    
    <div class="subsection">
        <h4>6.3 PMI Procedure</h4>
        <p>The PMI procedure should include the following.</p>
        <ul>
            <li>The techniques to be applied; see 6.4.</li>
            <li>Equipment calibration.</li>
            <li>Personnel qualifications:
                <p>Person(s) performing PMI should be knowledgeable about all aspects of operation of the PMI equipment and the test method being applied. Qualifications of the person performing the test, including training and experience, should be submitted for review and approval by the owner/operator.</p>
                <p>The owner/operator is responsible for ensuring that all individuals performing PMI are trained and qualified in accordance with the applicable procedure approved and applied during the examination. Certification and qualification are two of the most effective aspects of the PMI procedure to enhance the likelihood that all requirements of the PMI procedure will be met.</p>
            </li>
            <li>Surface preparation requirements.</li>
            <li>Testing methodology applied.</li>
            <li>Acceptance criteria.</li>
            <li>Documentation requirements.</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>6.4 Sorting Analysis Techniques</h4>
        <div class="subsection">
            <h4>6.4.1 Resistivity Testing</h4>
            <p>The principle employed in this test method is known as the Seebeck effect, or thermoelectric principle. A heated junction of dissimilar metal is created when the heated probe [300 °F (150 °C)] and the metal being tested are in contact with each other. The voltage generated at this junction is representative of the chemistry and crystalline structure of the metal being tested. Every alloy of a given crystalline structure will generate the same voltage regardless of the geometry or size of the piece being tested or the pressure applied. By references to known standards, these instruments are capable of sorting and identifying a wide range of ferrous and nonferrous materials. Alloy sorters are not widely used and have not proved to be consistently capable of sorting low-alloys (&lt; 5 % Cr) and austenitic stainless steels.</p>
        </div>
        
        <div class="subsection">
            <h4>6.4.2 Other Alloy Sorting Techniques</h4>
            <p>Techniques such as eddy-current sorting, electromagnetic alloy sorting, triboelectric testing (e.g., ferrite meters), and thermoelectric testing are qualitative and as such may be appropriate only for limited sorting applications and not for specific alloy identification.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>6.5 Spectrometer Technology</h4>
        <div class="subsection">
            <h4>6.5.1 Portable X-ray Fluorescence</h4>
            <p>There are several variants of portable X-ray fluorescence (XRF) spectrometers available. The principle of operation is that one or more gamma ray or X-ray sources are used to generate a beam of low-energy radiation to excite the material under analysis. The material under analysis then emits a characteristic radiation spectrum that can be analyzed both qualitatively and quantitatively to determine which elements are present and in what quantity. The results of this analysis can be reported in either of the following formats:</p>
            <ul>
                <li>as a match against one of many reference spectra stored in the instrument (i.e., "316 Stainless Steel" or "5 Cr-1/2Mo Steel"), and/or</li>
                <li>each element present reported as a percentage (i.e., "Iron = 87.5%" or "Iron = 0.875" as part of an entire elemental list that should be normalized against 100 %).</li>
            </ul>
            <p>Several PMI instruments are available. These instruments can have the sensitivity to determine the elemental levels that meet the ASTM limits. Advancements in XRF technology, such as 50KV, X-ray tubes, and silica drift detectors (SOD), allow the user to detect light elements down to very low concentrations in steel substrates. For example, the latest generation of handheld XRF analyzers now measures light elements (Mg, Al, Si, P, and S) to very low limits of detection (see Annex A) and can provide for field measurement of silicon in steel down to very low concentrations.</p>
            <p>These advancements in technology allow for accurate, nondestructive measurements to be conducted. However, to get this near-laboratory-quality measurement, significant care regarding surface preparation and cleanliness is required, as contamination of the prepared surface can lead to inaccurate results. Most assets are exposed to environments that promote surface corrosion and contamination, which can interfere with the analysis. Typically, a small test area is prepared with a portable grinding disk (60 to 80 grit, minimum zirconium-aluminum-oxide disposable abrasive disk) to properly clean the sample location prior to analysis.</p>
            <p>The inherent limitations of the technique mean that it is not possible to detect all elements. XRF analyzers are capable of detecting elements from magnesium (Mg) to uranium (U) in the periodic tables. This excludes some of the important elements in carbon steels, such as carbon and boron. It is important to define exactly what elemental analysis is required and select an appropriate instrument.</p>
        </div>
        
        <div class="subsection">
            <h4>6.5.2 Portable Optical Emission Spectrometry</h4>
            <p>In optical emission spectrometry (OES), an electric arc, spark, or laser stimulates atoms in the test sample to emit a characteristic spectrum of light for each element in the sample. The combined light spectra from different elements are passed through a light guide to the optical analyzer. In the analyzer, the light is dispersed into its spectral components and then measured and evaluated against stored calibration curves.</p>
            <p>These devices fall into three groups.</p>
            <ol>
                <li>The first is a lightweight, portable, and operator-evaluated device that can typically identify up to 16 elements but depends upon operator evaluation of the light spectra. These devices do not directly indicate alloy grade or composition but produce an output in the form of visible light spectra-which permits semi-qualitative alloy identification. This technique is highly sensitive to operator skill and experience.</li>
                <li>The second group refers to field-portable, laboratory grade analyzers. These were originally difficult to use due to their size and weight; however, modern units are now available that can be considered lightweight, including the small argon cylinders required for operation. Some of these analyzers operate in a pure arc mode for routine PMI applications, whereas the more sophisticated units have a spark mode allowing laboratory quality analysis. The significant advantage of these instruments is the expansion of elements that can be analyzed, including carbon. Another advantage of these advanced instruments is that they are not subject to operator interpretation.</li>
                <p>Similar to XRF devices, results can be reported in either a spectral match or elemental percentage mode. As these techniques generate arcs and sparks, a potential ignition source occurs during their operation; therefore, prior to use of this technique in the field, a review shall be conducted to determine if gas testing and hot work permits are required.</p>
                <li>The third group is known as laser-induced breakdown spectroscopy (LIBS), in which an atomic emission spectroscopy technique uses highly energetic laser pulses. The laser is focused to form plasma, which atomizes and excites samples. Plasma light emissions provide the spectral signature of chemical composition for practically any material.</li>
                <p>When calibrated for metal analysis, LIBS can provide both qualitative and quantitative information to determine which elements are present and in what quantity.</p>
                <p>Considerable progress has been made during the past few years in LIBS technology. Handheld LIBS metal analyzers are becoming available that can provide fast in situ chemical analysis with appropriate precision and detection limits (see Annex A). The significant advantage of LIBS technology is its wide element range. In principle, LIBS can detect all elements, limited by the power of the laser, as well as the sensitivity and wavelength range of the spectrograph and detector. The LIBS technology also can provide low-level carbon analysis, which, in principle, enables LIBS to positively identify a wide range of ferrous alloys.</p>
                <p class="note">NOTE The accuracy of carbon equivalent (CE) elements is highly dependent upon calibration within the range of interest, especially to minimize bias. So, it is advisable to perform a "Type Cal" on the upper and lower bounds of the anticipated elemental CE boundaries.</p>
                <p>This technique generates a laser during operation, which is a potential ignition source. Therefore, before using this technique in the field, a review shall be conducted to determine if gas testing and hot work permits are required.</p>
            </ol>
        </div>
        
        <div class="subsection">
            <h4>6.5.3 Equipment Calibration</h4>
            <p>Persons performing PMI should calibrate and/or verify the test equipment performance as specified by the equipment manufacturer. The PMI procedure should provide the frequency interval for this calibration/verification. If calibration procedures are not provided by the equipment manufacturer, they should be established by the owner/operator. Typically, these procedures should include calibration/verification using certified standards. The owner/operator may consider requirement of equipment verification checks on a routine basis (e.g., once per shift) using certified standards of the same alloy family.</p>
        </div>
        
        <div class="subsection">
            <h4>6.5.4 Equipment Precision</h4>
            <p>The precision of the test equipment should be consistent with the established test objectives (see 6.2). When elemental composition is desired, the owner/operator should establish the acceptable precision and repeatability.</p>
            <p>Accuracy and the method in which it is determined need to be understood (see Annex A). For example, in some tools, the sensitivity may depend on duration of the test to improve signal averaging algorithms. Failure to understand these issues may produce inaccurate results.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>6.6 Chemical Analysis Techniques</h4>
        <div class="subsection">
            <h4>6.6.1 Laboratory Chemical Analysis</h4>
            <p>Owner/operator-approved material analysis laboratories using X-ray emission spectrometry, OES, or wet chemical analysis can provide the most accurate analytical results for all elements. The accuracy is typically much higher than is normally needed for PMI but may be necessary where field PMI techniques cannot accurately quantify small amounts of alloying or contaminating elements (e.g., C, S, Si, V, Cu, etc.). Laboratory analysis may involve the removal of significant amounts of material and is typically slower than field PMI techniques.</p>
        </div>
        
        <div class="subsection">
            <h4>6.6.2 Chemical Spot Testing</h4>
            <p>The chemical spot test is typically accomplished by electrochemically removing a minute amount of surface metal and depositing it onto moistened filter paper. Reagents dropped onto the paper produce distinct colors that are indicative of the presence of specific elements in the sample tested (e.g., this test is sometimes used to verify that an austenitic stainless steel contains molybdenum and is more likely to be Type 316 as opposed to Type 304). Chemical spot testing is much slower than the other field PMI methods, and interpretation is subjective and very qualitative.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>6.7 Safety Issues</h4>
        <div class="subsection">
            <h4>6.7.1 General</h4>
            <p>The specific requirements for each PMI technique should be clearly reviewed as to the amount of mechanical preparation. Consideration should be given to the anticipated thickness of the sample before mechanical methods are used to prepare the sample. In addition, considerations for electrical arcing and "hot spots" should be considered, as well as appropriate electrical and hot work permits. Chemical spot testing involves the use of a variety of chemicals. Appropriate safety precautions should be taken when handling these chemicals.</p>
        </div>
        
        <div class="subsection">
            <h4>6.7.2 XRF Analyzers</h4>
            <div class="subsection">
                <h4>6.7.2.1 Intrinsic Safety</h4>
                <p>XRF analyzers are not intrinsically safe. Pertinent hot work procedures should be followed in areas where nonintrinsically safe equipment is to be used.</p>
            </div>
            
            <div class="subsection">
                <h4>6.7.2.2 Radiation Safety</h4>
                <p>The user should be aware of potential radiation exposure hazards when operating an XRF device. The user is expected to observe local jurisdictional requirements that govern radiation safety and consult the manufacturer's instructions for safe operation.</p>
            </div>
        </div>
    </div>`,
    contentEs: `<h3>6 Metodología y Tecnología de Identificación Positiva de Materiales</h3>
    <div class="subsection">
        <h4>6.1 General</h4>
        <p>Existen diversos métodos de PMI disponibles para determinar la identidad de los materiales de aleación. Los métodos principales incluyen la espectroscopia portátil y el análisis químico de laboratorio. A continuación se describe una lista de varios métodos de prueba.</p>
        <p>Además de estos métodos, existen diversas técnicas de clasificación de aleaciones que pueden ser apropiadas para los propósitos de esta práctica recomendada, incluyendo pruebas magnéticas para diferenciar entre materiales ferríticos y austeníticos. Es importante que los usuarios definan los objetivos y las precisiones requeridas de la herramienta de PMI que desean aplicar. Todas las herramientas tienen beneficios y limitaciones en cuanto a los elementos que se pueden detectar, además de la precisión y capacidad para diferenciar entre diferentes grados de materiales que solo tienen ligeras variaciones en los elementos de aleación. (Ver Anexo A.)</p>
    </div>
    
    <div class="subsection">
        <h4>6.2 Objetivos del Método de Prueba MVP</h4>
        <p>Los métodos de prueba descritos en este documento están destinados a identificar los grados de los materiales y no necesariamente a establecer la conformidad exacta de un material con una especificación particular. Sin embargo, algunos métodos de PMI son capaces de establecer la conformidad de los materiales. Es importante que el propietario/operador establezca el propósito y los objetivos del MVP, incluyendo el PMI, antes de seleccionar la tecnología y la metodología.</p>
        <p>Dependiendo del método de prueba seleccionado, el método puede identificar solo la composición nominal de los materiales. La identificación de materiales mediante sellos/marcas visuales por sí sola no debe considerarse un sustituto del PMI, pero puede ser un componente importante de un programa general de aseguramiento de calidad.</p>
    </div>
    
    <div class="subsection">
        <h4>6.3 Procedimiento PMI</h4>
        <p>El procedimiento PMI debe incluir lo siguiente:</p>
        <ul>
            <li>Las técnicas que se aplicarán; ver 6.4.</li>
            <li>Calibración del equipo.</li>
            <li>Calificaciones del personal:
                <p>La(s) persona(s) que realicen PMI deben tener conocimientos sobre todos los aspectos de operación del equipo PMI y el método de prueba que se esté aplicando. Las calificaciones de la persona que realiza la prueba, incluyendo capacitación y experiencia, deben presentarse para su revisión y aprobación por parte del propietario/operador.</p>
                <p>El propietario/operador es responsable de garantizar que todas las personas que realicen PMI estén capacitadas y calificadas de acuerdo con el procedimiento aplicable aprobado y aplicado durante el examen. La certificación y calificación son dos de los aspectos más efectivos del procedimiento PMI para aumentar la probabilidad de que se cumplan todos los requisitos del procedimiento PMI.</p>
            </li>
            <li>Requisitos de preparación de la superficie.</li>
            <li>Metodología de prueba aplicada.</li>
            <li>Criterios de aceptación.</li>
            <li>Requisitos de documentación.</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>6.4 Técnicas de Análisis de Clasificación</h4>
        <div class="subsection">
            <h4>6.4.1 Prueba de Resistividad</h4>
            <p>El principio empleado en este método de prueba se conoce como efecto Seebeck, o principio termoeléctrico. Se crea una unión calentada de metal disímil cuando la sonda calentada [300 °F (150 °C)] y el metal que se está probando están en contacto entre sí. El voltaje generado en esta unión es representativo de la química y estructura cristalina del metal que se está probando. Cada aleación de una estructura cristalina dada generará el mismo voltaje independientemente de la geometría o tamaño de la pieza que se está probando o la presión aplicada. Mediante referencias a estándares conocidos, estos instrumentos son capaces de clasificar e identificar una amplia gama de materiales ferrosos y no ferrosos. Los clasificadores de aleaciones no se utilizan ampliamente y no han demostrado ser consistentemente capaces de clasificar aleaciones bajas (&lt; 5 % Cr) y aceros inoxidables austeníticos.</p>
        </div>
        
        <div class="subsection">
            <h4>6.4.2 Otras Técnicas de Clasificación de Aleaciones</h4>
            <p>Técnicas como la clasificación por corrientes parásitas, la clasificación electromagnética de aleaciones, la prueba triboeléctrica (ej., medidores de ferrita) y la prueba termoeléctrica son cualitativas y, como tales, pueden ser apropiadas solo para aplicaciones de clasificación limitadas y no para la identificación específica de aleaciones.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>6.5 Tecnología de Espectrómetro</h4>
        <div class="subsection">
            <h4>6.5.1 Fluorescencia de Rayos X Portátil</h4>
            <p>Existen varias variantes de espectrómetros de fluorescencia de rayos X (XRF) portátiles disponibles. El principio de operación es que una o más fuentes de rayos gamma o rayos X se utilizan para generar un haz de radiación de baja energía para excitar el material bajo análisis. El material bajo análisis luego emite un espectro de radiación característico que puede analizarse tanto cualitativa como cuantitativamente para determinar qué elementos están presentes y en qué cantidad. Los resultados de este análisis pueden reportarse en cualquiera de los siguientes formatos:</p>
            <ul>
                <li>como una coincidencia con uno de los muchos espectros de referencia almacenados en el instrumento (es decir, "Acero Inoxidable 316" o "Acero 5 Cr-1/2Mo"), y/o</li>
                <li>cada elemento presente reportado como un porcentaje (es decir, "Hierro = 87.5%" o "Hierro = 0.875" como parte de una lista elemental completa que debe normalizarse contra 100 %).</li>
            </ul>
            <p>Existen varios instrumentos PMI disponibles. Estos instrumentos pueden tener la sensibilidad para determinar los niveles elementales que cumplen con los límites ASTM. Los avances en la tecnología XRF, como los tubos de rayos X de 50KV y los detectores de deriva de sílice (SDD), permiten al usuario detectar elementos ligeros hasta concentraciones muy bajas en sustratos de acero. Por ejemplo, la última generación de analizadores XRF portátiles ahora mide elementos ligeros (Mg, Al, Si, P y S) hasta límites de detección muy bajos (ver Anexo A) y puede proporcionar la medición de campo de silicio en acero hasta concentraciones muy bajas.</p>
            <p>Estos avances en la tecnología permiten realizar mediciones precisas y no destructivas. Sin embargo, para obtener esta medición de calidad cercana a la de laboratorio, se requiere un cuidado significativo con respecto a la preparación y limpieza de la superficie, ya que la contaminación de la superficie preparada puede llevar a resultados inexactos. La mayoría de los activos están expuestos a entornos que promueven la corrosión y contaminación de la superficie, lo que puede interferir con el análisis. Típicamente, se prepara un área de prueba pequeña con un disco de esmerilado portátil (60 a 80 grano, mínimo disco abrasivo desechable de óxido de aluminio-zirconio) para limpiar adecuadamente la ubicación de la muestra antes del análisis.</p>
            <p>Las limitaciones inherentes de la técnica significan que no es posible detectar todos los elementos. Los analizadores XRF son capaces de detectar elementos desde el magnesio (Mg) hasta el uranio (U) en la tabla periódica. Esto excluye algunos de los elementos importantes en los aceros al carbono, como el carbono y el boro. Es importante definir exactamente qué análisis elemental se requiere y seleccionar un instrumento apropiado.</p>
        </div>
        
        <div class="subsection">
            <h4>6.5.2 Espectrometría de Emisión Óptica Portátil</h4>
            <p>En la espectrometría de emisión óptica (OES), un arco eléctrico, chispa o láser estimula los átomos en la muestra de prueba a emitir un espectro de luz característico para cada elemento en la muestra. Los espectros de luz combinados de diferentes elementos se pasan a través de una guía de luz al analizador óptico. En el analizador, la luz se dispersa en sus componentes espectrales y luego se mide y evalúa contra curvas de calibración almacenadas.</p>
            <p>Estos dispositivos se dividen en tres grupos.</p>
            <ol>
                <li>El primero es un dispositivo liviano, portátil y evaluado por el operador que típicamente puede identificar hasta 16 elementos pero depende de la evaluación del operador de los espectros de luz. Estos dispositivos no indican directamente el grado o composición de la aleación sino que producen una salida en forma de espectros de luz visible, lo que permite la identificación semi-cualitativa de aleaciones. Esta técnica es altamente sensible a la habilidad y experiencia del operador.</li>
                <li>El segundo grupo se refiere a analizadores de grado de laboratorio portátiles para campo. Originalmente eran difíciles de usar debido a su tamaño y peso; sin embargo, ahora están disponibles unidades modernas que pueden considerarse livianas, incluyendo los pequeños cilindros de argón necesarios para la operación. Algunos de estos analizadores operan en modo de arco puro para aplicaciones de PMI de rutina, mientras que las unidades más sofisticadas tienen un modo de chispa que permite el análisis de calidad de laboratorio. La ventaja significativa de estos instrumentos es la expansión de elementos que se pueden analizar, incluyendo el carbono. Otra ventaja de estos instrumentos avanzados es que no están sujetos a la interpretación del operador.</li>
                <p>De manera similar a los dispositivos XRF, los resultados pueden reportarse en modo de coincidencia espectral o porcentaje elemental. Dado que estas técnicas generan arcos y chispas, ocurre una fuente de ignición potencial durante su operación; por lo tanto, antes del uso de esta técnica en el campo, se debe realizar una revisión para determinar si se requieren pruebas de gas y permisos de trabajo en caliente.</p>
                <li>El tercer grupo se conoce como espectroscopía de emisión inducida por láser (LIBS), en la cual una técnica de espectroscopía de emisión atómica utiliza pulsos de láser altamente energéticos. El láser se enfoca para formar plasma, que atomiza y excita las muestras. Las emisiones de luz del plasma proporcionan la firma espectral de la composición química para prácticamente cualquier material.</li>
                <p>Cuando se calibra para el análisis de metales, LIBS puede proporcionar información tanto cualitativa como cuantitativa para determinar qué elementos están presentes y en qué cantidad.</p>
                <p>Se ha realizado un progreso considerable durante los últimos años en la tecnología LIBS. Los analizadores de metales LIBS portátiles están disponibles y pueden proporcionar un análisis químico in situ rápido con precisión y límites de detección apropiados (ver Anexo A). La ventaja significativa de la tecnología LIBS es su amplio rango de elementos. En principio, LIBS puede detectar todos los elementos, limitados por la potencia del láser, así como la sensibilidad y rango de longitud de onda del espectrógrafo y detector. La tecnología LIBS también puede proporcionar análisis de carbono de bajo nivel, lo que, en principio, permite a LIBS identificar positivamente una amplia gama de aleaciones ferrosas.</p>
                <p class="note">NOTA La precisión de los elementos de carbono equivalente (CE) depende en gran medida de la calibración dentro del rango de interés, especialmente para minimizar el sesgo. Por lo tanto, es recomendable realizar una "Calibración de Tipo" en los límites superior e inferior de los límites elementales de CE anticipados.</p>
                <p>Esta técnica genera un láser durante la operación, que es una fuente de ignición potencial. Por lo tanto, antes de usar esta técnica en el campo, se debe realizar una revisión para determinar si se requieren pruebas de gas y permisos de trabajo en caliente.</p>
            </ol>
        </div>
        
        <div class="subsection">
            <h4>6.5.3 Calibración del Equipo</h4>
            <p>Las personas que realizan PMI deben calibrar y/o verificar el rendimiento del equipo de prueba según lo especificado por el fabricante del equipo. El procedimiento PMI debe proporcionar el intervalo de frecuencia para esta calibración/verificación. Si el fabricante del equipo no proporciona procedimientos de calibración, deben ser establecidos por el propietario/operador. Típicamente, estos procedimientos deben incluir calibración/verificación utilizando estándares certificados. El propietario/operador puede considerar el requisito de verificaciones de equipo de manera rutinaria (ej., una vez por turno) utilizando estándares certificados de la misma familia de aleaciones.</p>
        </div>
        
        <div class="subsection">
            <h4>6.5.4 Precisión del Equipo</h4>
            <p>La precisión del equipo de prueba debe ser consistente con los objetivos de prueba establecidos (ver 6.2). Cuando se desea la composición elemental, el propietario/operador debe establecer la precisión y repetibilidad aceptables.</p>
            <p>La precisión y el método en que se determina deben entenderse (ver Anexo A). Por ejemplo, en algunas herramientas, la sensibilidad puede depender de la duración de la prueba para mejorar los algoritmos de promediado de señal. El no entender estos problemas puede producir resultados inexactos.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>6.6 Técnicas de Análisis Químico</h4>
        <div class="subsection">
            <h4>6.6.1 Análisis Químico de Laboratorio</h4>
            <p>Los laboratorios de análisis de materiales aprobados por el propietario/operador que utilizan espectrometría de emisión de rayos X, OES o análisis químico húmedo pueden proporcionar los resultados analíticos más precisos para todos los elementos. La precisión es típicamente mucho mayor de lo que normalmente se necesita para PMI, pero puede ser necesaria cuando las técnicas de PMI de campo no pueden cuantificar con precisión pequeñas cantidades de elementos de aleación o contaminantes (ej., C, S, Si, V, Cu, etc.). El análisis de laboratorio puede implicar la eliminación de cantidades significativas de material y típicamente es más lento que las técnicas de PMI de campo.</p>
        </div>
        
        <div class="subsection">
            <h4>6.6.2 Prueba Química de Puntos</h4>
            <p>La prueba química de puntos típicamente se realiza eliminando electroquímicamente una cantidad mínima de metal superficial y depositándola en papel de filtro humedecido. Los reactivos colocados sobre el papel producen colores distintos que indican la presencia de elementos específicos en la muestra probada (ej., esta prueba a veces se usa para verificar que un acero inoxidable austenítico contiene molibdeno y es más probable que sea Tipo 316 en lugar de Tipo 304). La prueba química de puntos es mucho más lenta que los otros métodos de PMI de campo, y la interpretación es subjetiva y muy cualitativa.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>6.7 Cuestiones de Seguridad</h4>
        <div class="subsection">
            <h4>6.7.1 General</h4>
            <p>Los requisitos específicos para cada técnica de PMI deben revisarse claramente en cuanto a la cantidad de preparación mecánica. Debe considerarse el grosor anticipado de la muestra antes de que se utilicen métodos mecánicos para preparar la muestra. Además, deben considerarse las consideraciones para arco eléctrico y "puntos calientes", así como los permisos eléctricos y de trabajo en caliente apropiados. La prueba química de puntos implica el uso de una variedad de productos químicos. Deben tomarse las precauciones de seguridad adecuadas al manipular estos productos químicos.</p>
        </div>
        
        <div class="subsection">
            <h4>6.7.2 Analizadores XRF</h4>
            <div class="subsection">
                <h4>6.7.2.1 Seguridad Intrínseca</h4>
                <p>Los analizadores XRF no son intrínsecamente seguros. Deben seguirse los procedimientos pertinentes de trabajo en caliente en áreas donde se utilizará equipo no intrínsecamente seguro.</p>
            </div>
            
            <div class="subsection">
                <h4>6.7.2.2 Seguridad Radiológica</h4>
                <p>El usuario debe ser consciente de los peligros potenciales de exposición a la radiación al operar un dispositivo XRF. Se espera que el usuario observe los requisitos jurisdiccionales locales que rigen la seguridad radiológica y consulte las instrucciones del fabricante para una operación segura.</p>
            </div>
        </div>
    </div>`
});