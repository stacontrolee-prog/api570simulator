// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos a Presión y Tuberías"
    });
}

// Registrar el capítulo 101
registerChapter('ASMEPCC2', {
    id: 101,
    title: "Scope, Organization, and Intent",
    titleEs: "Alcance, Organización y Propósito",
    content: `<h3>101-1 SCOPE</h3>
    <p>This Standard provides methods for repair of equipment, piping, pipelines, and associated ancillary equipment within the scope of ASME Pressure Technology Codes and Standards<sup>1</sup> after they have been placed in service. These repair methods include relevant design, fabrication, examination, and testing practices and may be temporary or permanent, depending on the circumstances.</p>
    <p>The methods provided in this Standard address the repair of components when repair is deemed necessary based on appropriate inspection and flaw assessment. These inspection and flaw evaluation methods are not covered in this Standard, but are covered in other post-construction codes and standards.</p>
    <p>This Standard does not purport to address all of the safety concerns, if any, associated with its use. It is the responsibility of the user of this Standard to establish appropriate safety and health practices, and determine the applicability of regulatory limitations prior to use.</p>
    <p>Only technical procedures and information are provided; administrative or policy requirements are outside the scope of this Standard.</p>
    
    <h3>101-2 ORGANIZATION</h3>
    <p>This Standard is divided into five Parts.</p>
    <p>(a) Part 1 covers the scope, organization, and intent and is applicable to all articles in this Standard.</p>
    <p>(b) Part 2 covers repair methods and techniques that include the use of welding, brazing, soldering, or other methods involving metal deposit.</p>
    <p>(c) Part 3 covers mechanical repairs, with or without sealant, such as bolted clamps or fixtures and includes all repair methods not covered in Part 2 or Part 4.</p>
    <p>(d) Part 4 covers repairs using nonmetallic means, such as nonmetallic liners and wraps, and bonding (e.g., joining by epoxy), including bonding of metallic components.</p>
    <p>(e) Part 5 covers examination and testing methods.</p>
    
    <h3>101-3 INTENT</h3>
    <div class="subsection">
        <h4>101-3.1 General</h4>
        <p>This Standard provides technical information, procedures, and recommendations for repair methods that were determined by consensus to be recognized and generally accepted good engineering practice. Where equipment repair is subject to jurisdictional regulation, jurisdictional approvals may be required.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.2 Acronyms and Definitions (22)</h4>
        <p>The words shall, should, and may are defined in the Foreword of this Standard. When used in the repair articles of this Standard, they have the following intent:</p>
        <p><strong>shall:</strong> indicates an action that is an essential element of the repair method that cannot be eliminated.</p>
        <p><strong>should:</strong> indicates an action that when performed, is generally considered to be good practice; however, there are some circumstances when the action is not appropriate or required, so the word should is used to provide flexibility for the article to cover a broad range of circumstances. It is not mandatory unless so specified by others in the application of these articles.</p>
        <p><strong>may:</strong> indicates an action that is permitted, but not required.</p>
        
        <div class="subsection">
            <h4>101-3.2.l Acronyms</h4>
            <p><strong>API</strong> American Petroleum Institute</p>
            <p><strong>ASM (ASM International)</strong> American Society of Metals</p>
            <p><strong>ASME</strong> The American Society of Mechanical Engineers</p>
            <p><strong>ASNT</strong> American Society for Nondestructive Testing</p>
            <p><strong>AWS</strong> American Welding Society</p>
            <p><strong>AWWA</strong> American Water Works Association</p>
            <p><strong>BPVC</strong> Boiler and Pressure Vessel Code</p>
            <p><strong>BS (BSI)</strong> British Standards Institute</p>
            <p><strong>EPRI</strong> Electric Power Research Institute</p>
            <p><strong>ID</strong> Inside diameter</p>
            <p><strong>IDLH</strong> Immediately dangerous to life or health</p>
            <p><strong>ISO</strong> International Standards Organization</p>
            <p><strong>MAOP</strong> Maximum allowable operating pressure</p>
            <p><strong>MAWP</strong> Maximum allowable working pressure</p>
            <p><strong>NDE</strong> Nondestructive examination</p>
            <p><strong>NDT</strong> Nondestructive testing</p>
            <p><strong>NPS</strong> Nominal pipe size</p>
            <p><strong>OD</strong> Outside diameter</p>
            <p><strong>OSHA</strong> Occupational Safety and Health Administration</p>
            <p><strong>QA/QC</strong> Quality assurance/quality control</p>
            <p><strong>SMYS</strong> Specified minimum yield strength</p>
            <p><strong>SSPC-SP</strong> Steel Structures Painting Council Standards</p>
            <p><strong>UV</strong> Ultraviolet (radiation)</p>
            <p><strong>WRC</strong> Welding Research Council</p>
        </div>
        
        <div class="subsection">
            <h4>101-3.2.2 Definitions</h4>
            <p><strong>clad restoration:</strong> the application of corrosion-resistant weld metal on carbon steel or low alloy base metal, for the purpose of restoring the original corrosion-resistant weld overlay or cladding. The original cladding could have been applied by methods such as roll bonding or explosion bonding.</p>
            <p><strong>closure weld:</strong> the final weld connecting pressurized systems (e.g., piping or vessel) or components usually performed in the field.</p>
            <p><strong>effective depth:</strong> the depth below the finished weld surface at which weld metal chemical analysis is performed. The effective depth is as defined in ASME BPVC, Section IX, QW-462.S(a).</p>
            <p><strong>examination:</strong> the process of determining the condition of an area of interest by nondestructive means against established acceptance or rejection criteria.</p>
            <p><strong>fitness-for-service (FFS) assessment:</strong> methodology outlined in ASME/API FFS-1/API 579-1, whereby flaws or a damage state in a component is evaluated to determine the adequacy of the component for continued operation.</p>
            <p><strong>hydrostatic test:</strong> a pressure or tightness test where liquid, typically water, is the test medium (not to be confused with in-service leak test).</p>
            <p><strong>in-service leak test:</strong> a test using the process medium of the pressure equipment performed at start-up of the equipment.</p>
            <p><strong>inspection:</strong> the observation of any operation performed on materials and/or components to determine its acceptability in accordance with given criteria.</p>
            <p><strong>lamination:</strong> internal separation or weakness generally aligned parallel to the worked surface of the metal. May be the result of blisters, seams, inclusions, or segregation elongated and made directional by working.</p>
            <p><strong>owner:</strong> the company or entity that owns or is responsible for the equipment.</p>
            <p><strong>piping:</strong> assemblies of piping components (e.g., pipe, fittings, flanges, gaskets, bolting, valves) used to convey fluids.</p>
            <p><strong>pneumatic test:</strong> a pressure or tightness test where a gas, generally nitrogen or air, is the test medium.</p>
            <p><strong>pressure test:</strong> a test performed to ensure the gross integrity of the pressure component on new pressure equipment or on previously manufactured pressure and piping equipment that has been or is in service and that has undergone an alteration or repair to a pressure boundary(s) to determine the gross integrity of the pressure component. A pressure test may be performed with liquid (hydrostatic test), with gas (pneumatic test), or with a combination of both (hydro-pneumatic test).</p>
            <p><strong>ring-type joints (RTJ):</strong> flanges that have been hexagonally grooved to concentrate the bolt load over a small area producing high sealing stresses when fitted with a metal ring-type joint gasket (as detailed in ASME B16.20).</p>
            <p><strong>risk:</strong> the product of the probability of an event (likelihood) and its consequence (outcome). In some situations, risk is a deviation from the expected. When probability and consequence are expressed numerically, risk is the product.</p>
            <p><strong>risk analysis:</strong> the systematic use of information to identify sources and to estimate the risk. Risk analysis provides a basis for risk evaluation, mitigation, and acceptance. Information can include historical data, theoretical analysis, informed opinions, and concerns of stakeholders.</p>
            <p><strong>risk-based inspection (RBI):</strong> a risk assessment and management process outlined in ASME PCC-3 that is focused on loss of containment of pressurized equipment in processing facilities, due to material deterioration. These risks are managed primarily through equipment inspection.</p>
            <p><strong>safety data sheet (SDS):</strong> a data sheet for chemicals that defines important information such as the levels of toxicity, flammability, and first-aid actions required.</p>
            <p><strong>tightness test:</strong> a test that is performed to ensure overall leak tightness of the system or its connections before the process medium is introduced.</p>
            <p><strong>weld buildup:</strong> the application of weld metal that is the same chemistry as the base metal for the purpose of restoring metal thickness.</p>
            <p><strong>weld overlay:</strong> the application of weld metal that is different from the base metal for the purpose of a desired property (e.g., corrosion resistance, chloride resistance, etc.).</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>101-3.3 Administrative Requirements</h4>
        <p>For administrative requirements such as inspection, documentation, and quality control, the user is referred to an applicable post-construction code and to the jurisdictional requirements. In the absence of an applicable post-construction code or jurisdictional requirements, the owner of the pressure equipment or piping should establish the administrative requirements. A post-construction code is one that provides requirements and guidance for inspection and/or repair of equipment after it has been placed in service, and may include references to the original construction code. Examples of post-construction codes include NB-23, API 510, API 570, and API 653.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.4 Application</h4>
        <p>(a) Users of the articles contained in this Standard are cautioned that these articles have been developed generically and are recommended for general applications. They may not necessarily be suitable for all applications. Precautionary considerations are provided, but should not be considered all inclusive. Sound engineering practices and judgment should be used to determine the applicability of a specific method or part of a method to a specific application. The phrase engineering practices and judgment refers to technical judgments made by knowledgeable engineers or subject-matter experts experienced in the application of repair practices. Engineering judgments shall be consistent with good engineering practices, and such judgments shall never be used to overrule mandatory requirements or specific prohibitions of this Standard. Each repair should be subject to an appropriate review by qualified personnel, and this review should consider subsequent deterioration of the repaired component.</p>
        <p>(b) Additional limitations and considerations are contained in section 2 of the individual articles.</p>
        <p>(c) The repair methods provided in the articles in this Standard are applicable to a variety of damage mechanisms. Examples of damage mechanisms may be found in API Recommended Practice 571. Other applications of repair for damage mechanisms are provided for in individual articles.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.5 Alternative Use</h4>
        <p>While this Standard covers repair of equipment within the scope of ASME Pressure Technology Codes and Standards, it may be used on equipment constructed in accordance with other Codes and Standards.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.6 Articles' Independence</h4>
        <p>Individual articles in this Standard may be used independently of other articles, except when otherwise noted. However, Part 1 applies to all articles in this Standard.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.7 Repair Life</h4>
        <p>Many of the repair techniques included in this Standard are considered to be permanent, intended to remain in place for the life of the repaired component. Others may only be suitable for short-term service, and should be replaced with a more permanent repair at an appropriate opportunity. The anticipated life of a repair depends on many circumstances, and could include consideration of risk. As such, this Standard does not classify repair methods as permanent or temporary. Rather, technical considerations that affect the expected life of the repair are stated in the individual articles.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.8 Code References</h4>
        <p>Reference to specific codes is generally avoided in this Standard because the equipment or piping could have been constructed in accordance with a number of different codes. Where such a reference is provided, it is generally the intent to include, by reference, a specific technical provision.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.9 Welding</h4>
        <p>Requirements for welding, including qualification of welding procedures, welders, and welding operators should generally follow an applicable construction code or post-construction code, except when otherwise specified herein.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.10 Allowable Stress</h4>
        <p>Calculations involving the allowable stress use the allowable stress from the original construction code or post-construction code, unless otherwise specified in specific articles.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.11 Examination</h4>
        <p>When qualifications of examiners, methods of examination, extent of examination, and acceptance criteria are not specified, they should follow the requirements of an applicable construction code or post-construction code.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.12 Records</h4>
        <p>The owner should keep records that document the repair. Specific requirements for documentation are not provided in this Standard. The owner should retain records that comply with applicable jurisdictional and post-construction code requirements. Documentation may include such items as a description of the condition that required attention and its cause, repair procedures that were used, photos prior to and after the repair, examination procedures and records, heat treatment records, test records, and the names of the persons/firms performing the repair and examination and their certification. The documentation forms part of the history of the pressure component and should be retained as long as it is relevant.</p>
    </div>
    `,
    contentEs: `<h3>101-1 ALCANCE</h3>
    <p>Esta Norma proporciona métodos para la reparación de equipos, tuberías, oleoductos y equipos auxiliares asociados dentro del alcance de los Códigos y Estándares de Tecnología de Presión de ASME<sup>1</sup> después de que hayan sido puestos en servicio. Estos métodos de reparación incluyen prácticas relevantes de diseño, fabricación, examen y prueba, y pueden ser temporales o permanentes, dependiendo de las circunstancias.</p>
    <p>Los métodos proporcionados en esta Norma abordan la reparación de componentes cuando se considera necesaria la reparación basándose en una inspección y evaluación de defectos adecuada. Estos métodos de inspección y evaluación de defectos no están cubiertos en esta Norma, pero están cubiertos en otros códigos y estándares posteriores a la construcción.</p>
    <p>Esta Norma no pretende abordar todas las preocupaciones de seguridad, si las hubiera, asociadas con su uso. Es responsabilidad del usuario de esta Norma establecer prácticas de seguridad y salud apropiadas, y determinar la aplicabilidad de las limitaciones regulatorias antes de su uso.</p>
    <p>Solo se proporcionan procedimientos e información técnicos; los requisitos administrativos o de política están fuera del alcance de esta Norma.</p>
    
    <h3>101-2 ORGANIZACIÓN</h3>
    <p>Esta Norma se divide en cinco Partes.</p>
    <p>(a) La Parte 1 cubre el alcance, la organización y el propósito, y es aplicable a todos los artículos de esta Norma.</p>
    <p>(b) La Parte 2 cubre métodos y técnicas de reparación que incluyen el uso de soldadura, soldadura fuerte, soldadura blanda u otros métodos que involucran depósito de metal.</p>
    <p>(c) La Parte 3 cubre reparaciones mecánicas, con o sin sellante, como abrazaderas o accesorios atornillados, e incluye todos los métodos de reparación no cubiertos en la Parte 2 o la Parte 4.</p>
    <p>(d) La Parte 4 cubre reparaciones utilizando medios no metálicos, como revestimientos y envolturas no metálicas, y unión (por ejemplo, unión con epoxi), incluyendo la unión de componentes metálicos.</p>
    <p>(e) La Parte 5 cubre métodos de examen y prueba.</p>
    
    <h3>101-3 PROPÓSITO</h3>
    <div class="subsection">
        <h4>101-3.1 General</h4>
        <p>Esta Norma proporciona información técnica, procedimientos y recomendaciones para métodos de reparación que fueron determinados por consenso como reconocidos y generalmente aceptados como buenas prácticas de ingeniería. Cuando la reparación del equipo está sujeta a regulación jurisdiccional, pueden requerirse aprobaciones jurisdiccionales.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.2 Acrónimos y Definiciones (22)</h4>
        <p>Las palabras shall (deberá), should (debería) y may (puede) se definen en el Prólogo de esta Norma. Cuando se utilizan en los artículos de reparación de esta Norma, tienen el siguiente significado:</p>
        <p><strong>shall (deberá):</strong> indica una acción que es un elemento esencial del método de reparación que no puede ser eliminado.</p>
        <p><strong>should (debería):</strong> indica una acción que, cuando se realiza, generalmente se considera una buena práctica; sin embargo, hay algunas circunstancias en las que la acción no es apropiada o necesaria, por lo que se utiliza la palabra should para proporcionar flexibilidad para que el artículo cubra una amplia gama de circunstancias. No es obligatorio a menos que así lo especifiquen otros en la aplicación de estos artículos.</p>
        <p><strong>may (puede):</strong> indica una acción que está permitida, pero no es requerida.</p>
        
        <div class="subsection">
            <h4>101-3.2.l Acrónimos</h4>
            <p><strong>API</strong> Instituto Americano del Petróleo</p>
            <p><strong>ASM (ASM International)</strong> Sociedad Americana de Metales</p>
            <p><strong>ASME</strong> La Sociedad Americana de Ingenieros Mecánicos</p>
            <p><strong>ASNT</strong> Sociedad Americana de Ensayos No Destructivos</p>
            <p><strong>AWS</strong> Sociedad Americana de Soldadura</p>
            <p><strong>AWWA</strong> Asociación Americana de Obras Hidráulicas</p>
            <p><strong>BPVC</strong> Código de Calderas y Recipientes a Presión</p>
            <p><strong>BS (BSI)</strong> Instituto Británico de Estándares</p>
            <p><strong>EPRI</strong> Instituto de Investigación de Energía Eléctrica</p>
            <p><strong>ID</strong> Diámetro interior</p>
            <p><strong>IDLH</strong> Inmediatamente peligroso para la vida o la salud</p>
            <p><strong>ISO</strong> Organización Internacional de Estándares</p>
            <p><strong>MAOP</strong> Presión máxima de operación permitida</p>
            <p><strong>MAWP</strong> Presión máxima de trabajo permitida</p>
            <p><strong>NDE</strong> Examen no destructivo</p>
            <p><strong>NDT</strong> Ensayo no destructivo</p>
            <p><strong>NPS</strong> Tamaño nominal de tubería</p>
            <p><strong>OD</strong> Diámetro exterior</p>
            <p><strong>OSHA</strong> Administración de Seguridad y Salud Ocupacional</p>
            <p><strong>QA/QC</strong> Aseguramiento/control de calidad</p>
            <p><strong>SMYS</strong> Resistencia mínima especificada a la fluencia</p>
            <p><strong>SSPC-SP</strong> Estándares del Consejo de Pintura de Estructuras de Acero</p>
            <p><strong>UV</strong> Ultravioleta (radiación)</p>
            <p><strong>WRC</strong> Consejo de Investigación de Soldadura</p>
        </div>
        
        <div class="subsection">
            <h4>101-3.2.2 Definiciones</h4>
            <p><strong>restauración de revestimiento:</strong> la aplicación de metal de soldadura resistente a la corrosión sobre metal base de acero al carbono o baja aleación, con el propósito de restaurar el revestimiento o recubrimiento de soldadura original resistente a la corrosión. El revestimiento original podría haber sido aplicado por métodos como unión por laminación o unión por explosión.</p>
            <p><strong>soldadura de cierre:</strong> la soldadura final que conecta sistemas presurizados (por ejemplo, tubería o recipiente) o componentes, generalmente realizada en el campo.</p>
            <p><strong>profundidad efectiva:</strong> la profundidad por debajo de la superficie terminada de la soldadura a la que se realiza el análisis químico del metal de soldadura. La profundidad efectiva se define en ASME BPVC, Sección IX, QW-462.S(a).</p>
            <p><strong>examen:</strong> el proceso de determinar la condición de un área de interés por medios no destructivos contra criterios establecidos de aceptación o rechazo.</p>
            <p><strong>evaluación de aptitud para el servicio (FFS):</strong> metodología descrita en ASME/API FFS-1/API 579-1, mediante la cual se evalúan defectos o un estado de daño en un componente para determinar la adecuación del componente para operación continuada.</p>
            <p><strong>prueba hidrostática:</strong> una prueba de presión o estanqueidad donde el líquido, típicamente agua, es el medio de prueba (no debe confundirse con la prueba de fuga en servicio).</p>
            <p><strong>prueba de fuga en servicio:</strong> una prueba utilizando el medio de proceso del equipo a presión realizada en el arranque del equipo.</p>
            <p><strong>inspección:</strong> la observación de cualquier operación realizada en materiales y/o componentes para determinar su aceptabilidad de acuerdo con criterios dados.</p>
            <p><strong>laminación:</strong> separación o debilidad interna generalmente alineada paralelamente a la superficie trabajada del metal. Puede ser el resultado de ampollas, costuras, inclusiones o segregación alargada y hecha direccional por trabajo.</p>
            <p><strong>propietario:</strong> la compañía o entidad que posee o es responsable del equipo.</p>
            <p><strong>tubería:</strong> conjuntos de componentes de tubería (por ejemplo, tubo, accesorios, bridas, juntas, pernos, válvulas) utilizados para transportar fluidos.</p>
            <p><strong>prueba neumática:</strong> una prueba de presión o estanqueidad donde un gas, generalmente nitrógeno o aire, es el medio de prueba.</p>
            <p><strong>prueba de presión:</strong> una prueba realizada para garantizar la integridad general del componente a presión en equipos nuevos a presión o en equipos de presión y tubería previamente fabricados que han estado o están en servicio y que han sufrido una alteración o reparación en un límite(s) de presión para determinar la integridad general del componente a presión. Una prueba de presión puede realizarse con líquido (prueba hidrostática), con gas (prueba neumática), o con una combinación de ambos (prueba hidroneumática).</p>
            <p><strong>juntas tipo anillo (RTJ):</strong> bridas que han sido ranuradas hexagonalmente para concentrar la carga de los pernos en un área pequeña produciendo altos esfuerzos de sellado cuando se ajustan con una junta de anillo metálico tipo anillo (según se detalla en ASME B16.20).</p>
            <p><strong>riesgo:</strong> el producto de la probabilidad de un evento (probabilidad) y su consecuencia (resultado). En algunas situaciones, el riesgo es una desviación de lo esperado. Cuando la probabilidad y la consecuencia se expresan numéricamente, el riesgo es el producto.</p>
            <p><strong>análisis de riesgo:</strong> el uso sistemático de información para identificar fuentes y estimar el riesgo. El análisis de riesgo proporciona una base para la evaluación, mitigación y aceptación del riesgo. La información puede incluir datos históricos, análisis teóricos, opiniones informadas y preocupaciones de las partes interesadas.</p>
            <p><strong>inspección basada en riesgo (RBI):</strong> un proceso de evaluación y gestión de riesgos descrito en ASME PCC-3 que se centra en la pérdida de contención de equipos a presión en instalaciones de procesamiento, debido al deterioro del material. Estos riesgos se gestionan principalmente a través de la inspección del equipo.</p>
            <p><strong>hoja de datos de seguridad (SDS):</strong> una hoja de datos para químicos que define información importante como los niveles de toxicidad, inflamabilidad y acciones de primeros auxilios requeridas.</p>
            <p><strong>prueba de estanqueidad:</strong> una prueba que se realiza para garantizar la estanqueidad general del sistema o sus conexiones antes de introducir el medio de proceso.</p>
            <p><strong>construcción por soldadura:</strong> la aplicación de metal de soldadura que tiene la misma química que el metal base con el propósito de restaurar el espesor del metal.</p>
            <p><strong>revestimiento por soldadura:</strong> la aplicación de metal de soldadura que es diferente del metal base con el propósito de obtener una propiedad deseada (por ejemplo, resistencia a la corrosión, resistencia a los cloruros, etc.).</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>101-3.3 Requisitos Administrativos</h4>
        <p>Para los requisitos administrativos como inspección, documentación y control de calidad, se remite al usuario a un código posterior a la construcción aplicable y a los requisitos jurisdiccionales. En ausencia de un código posterior a la construcción aplicable o requisitos jurisdiccionales, el propietario del equipo a presión o tubería debe establecer los requisitos administrativos. Un código posterior a la construcción es aquel que proporciona requisitos y orientación para la inspección y/o reparación de equipos después de que hayan sido puestos en servicio, y puede incluir referencias al código de construcción original. Los ejemplos de códigos posteriores a la construcción incluyen NB-23, API 510, API 570 y API 653.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.4 Aplicación</h4>
        <p>(a) Se advierte a los usuarios de los artículos contenidos en esta Norma que estos artículos se han desarrollado genéricamente y se recomiendan para aplicaciones generales. Pueden no ser necesariamente adecuados para todas las aplicaciones. Se proporcionan consideraciones de precaución, pero no deben considerarse exhaustivas. Deben utilizarse buenas prácticas de ingeniería y juicio para determinar la aplicabilidad de un método específico o parte de un método a una aplicación específica. La frase prácticas y juicio de ingeniería se refiere a juicios técnicos realizados por ingenieros conocedores o expertos en la materia con experiencia en la aplicación de prácticas de reparación. Los juicios de ingeniería deben ser consistentes con las buenas prácticas de ingeniería, y dichos juicios nunca deben usarse para anular los requisitos obligatorios o prohibiciones específicas de esta Norma. Cada reparación debe estar sujeta a una revisión adecuada por parte de personal calificado, y esta revisión debe considerar el deterioro posterior del componente reparado.</p>
        <p>(b) Limitaciones y consideraciones adicionales se contienen en la sección 2 de los artículos individuales.</p>
        <p>(c) Los métodos de reparación proporcionados en los artículos de esta Norma son aplicables a una variedad de mecanismos de daño. Pueden encontrarse ejemplos de mecanismos de daño en la Práctica Recomendada API 571. Otras aplicaciones de reparación para mecanismos de daño se proporcionan en artículos individuales.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.5 Uso Alternativo</h4>
        <p>Si bien esta Norma cubre la reparación de equipos dentro del alcance de los Códigos y Estándares de Tecnología de Presión de ASME, puede utilizarse en equipos construidos de acuerdo con otros Códigos y Estándares.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.6 Independencia de los Artículos</h4>
        <p>Los artículos individuales de esta Norma pueden usarse independientemente de otros artículos, excepto cuando se indique lo contrario. Sin embargo, la Parte 1 se aplica a todos los artículos de esta Norma.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.7 Vida Útil de la Reparación</h4>
        <p>Muchas de las técnicas de reparación incluidas en esta Norma se consideran permanentes, destinadas a permanecer en su lugar durante la vida útil del componente reparado. Otras pueden ser adecuadas solo para servicio a corto plazo, y deben reemplazarse con una reparación más permanente en una oportunidad adecuada. La vida útil anticipada de una reparación depende de muchas circunstancias, y podría incluir la consideración del riesgo. Como tal, esta Norma no clasifica los métodos de reparación como permanentes o temporales. Más bien, las consideraciones técnicas que afectan la vida útil esperada de la reparación se establecen en los artículos individuales.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.8 Referencias de Códigos</h4>
        <p>Generalmente se evita hacer referencia a códigos específicos en esta Norma porque el equipo o la tubería podrían haber sido construidos de acuerdo con una serie de códigos diferentes. Cuando se proporciona dicha referencia, generalmente la intención es incluir, por referencia, una disposición técnica específica.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.9 Soldadura</h4>
        <p>Los requisitos para la soldadura, incluida la calificación de los procedimientos de soldadura, soldadores y operadores de soldadura, deben seguir generalmente un código de construcción o código posterior a la construcción aplicable, excepto cuando se especifique lo contrario en este documento.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.10 Esfuerzo Admisible</h4>
        <p>Los cálculos que involucran el esfuerzo admisible utilizan el esfuerzo admisible del código de construcción original o código posterior a la construcción, a menos que se especifique lo contrario en artículos específicos.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.11 Examen</h4>
        <p>Cuando no se especifican las calificaciones de los examinadores, los métodos de examen, la extensión del examen y los criterios de aceptación, deben seguir los requisitos de un código de construcción o código posterior a la construcción aplicable.</p>
    </div>
    
    <div class="subsection">
        <h4>101-3.12 Registros</h4>
        <p>El propietario debe mantener registros que documenten la reparación. No se proporcionan requisitos específicos para la documentación en esta Norma. El propietario debe conservar registros que cumplan con los requisitos jurisdiccionales aplicables y los requisitos de los códigos posteriores a la construcción. La documentación puede incluir elementos como una descripción de la condición que requería atención y su causa, los procedimientos de reparación que se utilizaron, fotografías antes y después de la reparación, procedimientos y registros de examen, registros de tratamiento térmico, registros de prueba, y los nombres de las personas/empresas que realizaron la reparación y el examen y su certificación. La documentación forma parte de la historia del componente a presión y debe conservarse mientras sea relevante.</p>
    </div>
    `
});