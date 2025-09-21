// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}
// Registrar el capítulo 9
registerChapter('API574', {
    id: 9,
    title: "Safety Precautions and Preparatory Work",
    titleEs: "Precauciones de Seguridad y Trabajos Preparatorios",
    content: `<h3>9 Safety Precautions and Preparatory Work</h3>
    <div class="subsection">
        <h4>9.1 Safety Precautions</h4>
        <div class="subsection">
            <h4>9.1.1 General</h4>
            <p>Safety precautions should be taken before any inspection or examinations are performed. The appropriate personal protective equipment (PPE) should be utilized for each inspection. Procedures for the separation of piping, installation of blinds, and leak testing should be an integral part of safety practices. In general, the section of piping to be opened should be isolated from all sources of harmful liquids, gases, or vapors and purged to remove all oil and toxic or flammable gases and vapors.</p>
            <p>Hammer testing of pressured piping might cause failure and allow the contents of the piping to be released. Precautions should be taken before any hammer testing of in-service piping.</p>
            <p>RT must be performed in accordance with the applicable requirements of the site and jurisdiction due to potential radiation exposure.</p>
            <p>Caution should be taken when attempting to remove scale and deposits from the external surfaces of in service piping, especially when operating at high pressure or at temperature when the piping contains hazardous/flammable process fluids. Loss of containment incidents have occurred when deposits were removed while inspecting for CUI, support point corrosion, cooling water drift corrosion, etc. that were covering through-wall corrosion damage. The owner-operator may consider the following to mitigate the risk of a through-wall event:</p>
            <ul>
                <li>use of profile RT or UT NDE to inspect under deposits and determine the amount of corrosion damage, before disturbing the deposits;</li>
                <li>develop an emergency response plan in the event that a through-wall leak develops; this plan should include provisions to isolate the affected area, temporary repair provisions, and any additional PPE requirements.</li>
            </ul>
        </div>
        
        <div class="subsection">
            <h4>9.1.2 Precautions Regarding the Use of Breathing Air</h4>
            <p>This section is reserved for future content.</p>
        </div>
        
        <div class="subsection">
            <h4>9.1.3 Precaution Regarding Confined Space Entry</h4>
            <p>This section is reserved for future content.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>9.2 Communication</h4>
        <p>Before starting any piping system inspection and/or maintenance activities (e.g. NDE, pressure testing, repair, or alteration), personnel should obtain permission from operating personnel responsible for the piping to work in the vicinity.</p>
        <p>When individuals are inside large piping systems, all persons working around the equipment should be informed that people are working inside the piping. Individuals working inside the piping should be informed when any work is going to be done on the exterior of the piping.</p>
    </div>
    
    <div class="subsection">
        <h4>9.3 Preparatory Work</h4>
        <p>All possible preparatory work should be done before the scheduled start of the inspection. Scaffolds should be erected, insulation removed, and surface preparation completed where required. Buried piping should be excavated at the points to be inspected. Equipment required for personal safety should be checked to determine its availability and condition. Any necessary warning signs should be obtained in advance, and barricades should be erected around all excavations. The appropriate signs and barricades, as required by the site and jurisdiction, should be in place before RT is performed.</p>
        <p>All tools, equipment, and PPE used during piping work (i.e. inspection, NDE, pressure testing, repairs, and alterations) should be checked for damage and/or operability prior to use. NDE equipment and the repair organization's equipment are subject to the owner-operator's safety requirements for electrical equipment. Other equipment that might be needed for piping system access (e.g. planking, scaffolding, and portable ladders) should be checked for adequacy and safety before being used.</p>
        <p>During the preparation of piping systems for inspection, PPE should be worn when required either by regulations, the owner-operator, or the repair organization.</p>
        <p>The tools needed for inspection should be checked for availability, proper working condition, calibration, and accuracy. The following tools and instruments are often used in the inspection of piping:</p>
        <ul>
            <li>ACFM crack detection equipment;</li>
            <li>alloy analyzer (nuclear source for material identification);</li>
            <li>borescope and/or fiberoptic;</li>
            <li>camera;</li>
            <li>crayon or marker;</li>
            <li>direct-reading calipers with specially shaped legs;</li>
            <li>eddy current equipment;</li>
            <li>flashlight and additional portable lighting;</li>
            <li>hammer;</li>
            <li>ID and OD transfer calipers;</li>
            <li>infrared pyrometer and camera;</li>
            <li>knife;</li>
            <li>leak detector (sonic, gas test, or soap solution);</li>
            <li>liquid penetrant equipment;</li>
            <li>magnet;</li>
            <li>magnetic particle equipment;</li>
            <li>magnifying glass;</li>
            <li>material identification kit;</li>
            <li>microwave inspection equipment;</li>
            <li>mirror;</li>
            <li>notebook or sketches;</li>
            <li>paint;</li>
            <li>pit-depth gauge;</li>
            <li>portable hardness tester;</li>
            <li>radiographic equipment;</li>
            <li>remote television camera (for internal inspection);</li>
            <li>scraper;</li>
            <li>steel rule;</li>
            <li>thickness or hook gauge;</li>
            <li>ultrasonic equipment;</li>
            <li>wire brush.</li>
        </ul>
        <p>In addition to the list above, grit blasting or comparable equipment may be required to remove paint and other protective coatings, dirt, or corrosion products so that the surface is properly prepared for the inspection technique (e.g. inspection for cracks with MT).</p>
    </div>
    
    <div class="subsection">
        <h4>9.4 Cleaning and Surface Preparation for Inspection</h4>
        <p>This section is reserved for future content.</p>
    </div>
    
    <div class="subsection">
        <h4>9.5 Investigation of Active Leaks</h4>
        <p>On-stream piping leaks in process units can occur for various reasons. Those who investigate the leak may be particularly at risk to the consequence associated with the release of the process fluid. A site should create a general safety procedure to be followed during a piping leak investigation. A further precaution is to hold a safety review before any leak investigation. The review would consider the state of a piping system in terms of pressure, temperature, remaining inventory of process fluids, credible damage mechanisms, and similar factors. Where piping can be generally thinned rather than contain isolated defects, potential pipe rupture is more likely and should be taken into consideration when investigating leaks or during firefighting efforts. Reference API 2001 for more information on leak response protocol.</p>
        <p>The safety review team should define:</p>
        <ul>
            <li>a "hot zone" around the leak site and establish PPE and additional firefighting equipment requirements to perform work inside this zone;</li>
            <li>decontamination requirements upon exit from the hot zone and other requirements necessary to protect personnel and the environment.</li>
        </ul>
        <p>The safety review team must be careful in making assumptions about the leak's cause. Incidents have occurred where investigative personnel assumed they knew the cause of a small leak on an operating line and were caught unprepared when the leak suddenly became quite large.</p>
    </div>
</div>`,
    contentEs: `<h3>9 Precauciones de Seguridad y Trabajos Preparatorios</h3>
    <div class="subsection">
        <h4>9.1 Precauciones de Seguridad</h4>
        <div class="subsection">
            <h4>9.1.1 General</h4>
            <p>Deben tomarse precauciones de seguridad antes de realizar cualquier inspección o examen. Se debe utilizar el equipo de protección personal (PPE) apropiado para cada inspección. Los procedimientos para la separación de tuberías, instalación de ciegas y pruebas de fuga deben ser parte integral de las prácticas de seguridad. En general, la sección de tubería que va a abrirse debe aislarse de todas las fuentes de líquidos, gases o vapores dañinos y purgarse para eliminar todo el aceite y gases o vapores tóxicos o inflamables.</p>
            <p>El martilleo de tuberías a presión podría causar una falla y permitir que se libere el contenido de la tubería. Deben tomarse precauciones antes de cualquier martilleo de tuberías en servicio.</p>
            <p>La RT debe realizarse de acuerdo con los requisitos aplicables del sitio y la jurisdicción debido a la posible exposición a la radiación.</p>
            <p>Se debe tener precaución al intentar eliminar incrustaciones y depósitos de las superficies externas de las tuberías en servicio, especialmente cuando operan a alta presión o temperatura cuando la tubería contiene fluidos de proceso peligrosos/inflamables. Han ocurrido incidentes de pérdida de contención cuando se eliminaron depósitos mientras se inspeccionaba para CUI, corrosión en puntos de contacto, corrosión por deriva de agua de enfriamiento, etc. que estaban cubriendo daño por corrosión a través de la pared. El propietario-operador puede considerar lo siguiente para mitigar el riesgo de un evento a través de la pared:</p>
            <ul>
                <li>uso de RT de perfil o UT NDE para inspeccionar debajo de los depósitos y determinar la cantidad de daño por corrosión, antes de perturbar los depósitos;</li>
                <li>desarrollar un plan de respuesta de emergencia en caso de que se desarrolle una fuga a través de la pared; este plan debe incluir disposiciones para aislar el área afectada, disposiciones de reparación temporal y cualquier requisito adicional de PPE.</li>
            </ul>
        </div>
        
        <div class="subsection">
            <h4>9.1.2 Precauciones Regarding the Use of Breathing Air</h4>
            <p>Esta sección está reservada para contenido futuro.</p>
        </div>
        
        <div class="subsection">
            <h4>9.1.3 Precaution Regarding Confined Space Entry</h4>
            <p>Esta sección está reservada para contenido futuro.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>9.2 Comunicación</h4>
        <p>Antes de comenzar cualquier actividad de inspección y/o mantenimiento del sistema de tuberías (ej. NDE, pruebas de presión, reparación o alteración), el personal debe obtener permiso del personal de operación responsable de la tubería para trabajar en las inmediaciones.</p>
        <p>Cuando haya personas dentro de sistemas de tuberías grandes, todas las personas que trabajen alrededor del equipo deben ser informadas de que hay personas trabajando dentro de la tubería. Las personas que trabajan dentro de la tubería deben ser informadas cuando se vaya a realizar cualquier trabajo en el exterior de la tubería.</p>
    </div>
    
    <div class="subsection">
        <h4>9.3 Trabajos Preparatorios</h4>
        <p>Todos los trabajos preparatorios posibles deben realizarse antes del inicio programado de la inspección. Se deben erigir andamios, eliminar el aislamiento y completar la preparación de superficies donde se requiera. Las tuberías enterradas deben ser excavadas en los puntos que se van a inspeccionar. El equipo requerido para la seguridad personal debe ser verificado para determinar su disponibilidad y condición. Cualquier señal de advertencia necesaria debe obtenerse con anticipación, y se deben erigir barricadas alrededor de todas las excavaciones. Las señales y barricadas apropiadas, según lo requiera el sitio y la jurisdicción, deben estar en su lugar antes de realizar la RT.</p>
        <p>Todas las herramientas, equipos y PPE utilizados durante los trabajos de tubería (es decir, inspección, NDE, pruebas de presión, reparaciones y alteraciones) deben ser verificados para detectar daños y/o operabilidad antes de su uso. El equipo NDE y el equipo de la organización de reparación están sujetos a los requisitos de seguridad del propietario-operador para equipos eléctricos. Otro equipo que pueda ser necesario para el acceso al sistema de tuberías (ej. tablones, andamios y escaleras portátiles) debe ser verificado para adecuación y seguridad antes de ser utilizado.</p>
        <p>Durante la preparación de los sistemas de tuberías para la inspección, se debe usar PPE cuando lo exijan las regulaciones, el propietario-operador o la organización de reparación.</p>
        <p>Las herramientas necesarias para la inspección deben ser verificadas en cuanto a disponibilidad, condición de funcionamiento adecuada, calibración y precisión. Las siguientes herramientas e instrumentos se usan a menudo en la inspección de tuberías:</p>
        <ul>
            <li>equipo de detección de grietas ACFM;</li>
            <li>analizador de aleaciones (fuente nuclear para identificación de materiales);</li>
            <li>boroscopio y/o fibra óptica;</li>
            <li>cámara;</li>
            <li>lápiz o marcador;</li>
            <li>calibradores de lectura directa con patas de forma especial;</li>
            <li>equipo de corriente de Foucault;</li>
            <li>linterna e iluminación portátil adicional;</li>
            <li>martillo;</li>
            <li>calibradores de transferencia de ID y OD;</li>
            <li>pirómetro y cámara infrarroja;</li>
            <li>cuchillo;</li>
            <li>detector de fugas (sónico, prueba de gas o solución jabonosa);</li>
            <li>equipo de líquidos penetrantes;</li>
            <li>imán;</li>
            <li>equipo de partículas magnéticas;</li>
            <li>lupa;</li>
            <li>kit de identificación de materiales;</li>
            <li>equipo de inspección por microondas;</li>
            <li>espejo;</li>
            <li>cuaderno o bosquejos;</li>
            <li>pintura;</li>
            <li>medidor de profundidad de picaduras;</li>
            <li>probador de dureza portátil;</li>
            <li>equipo radiográfico;</li>
            <li>cámara de televisión remota (para inspección interna);</li>
            <li>raspador;</li>
            <li>regla de acero;</li>
            <li>calibrador de espesor o de gancho;</li>
            <li>equipo ultrasónico;</li>
            <li>cepillo de alambre.</li>
        </ul>
        <p>Además de la lista anterior, puede requerirse equipo de chorro de arena o comparable para eliminar pintura y otros recubrimientos protectores, suciedad o productos de corrosión para que la superficie esté adecuadamente preparada para la técnica de inspección (ej. inspección de grietas con MT).</p>
    </div>
    
    <div class="subsection">
        <h4>9.4 Limpieza y Preparación de Superficies para Inspección</h4>
        <p>Esta sección está reservada para contenido futuro.</p>
    </div>
    
    <div class="subsection">
        <h4>9.5 Investigación de Fugas Activas</h4>
        <p>Las fugas en tuberías en línea en unidades de proceso pueden ocurrir por varias razones. Quienes investigan la fuga pueden estar particularmente en riesgo frente a las consecuencias asociadas con la liberación del fluido de proceso. Un sitio debe crear un procedimiento de seguridad general que se siga durante una investigación de fuga de tubería. Una precaución adicional es realizar una revisión de seguridad antes de cualquier investigación de fuga. La revisión consideraría el estado de un sistema de tuberías en términos de presión, temperatura, inventario restante de fluidos de proceso, mecanismos de daño creíbles y factores similares. Donde la tubería puede estar generalmente adelgazada en lugar de contener defectos aislados, es más probable la ruptura de la tubería y debe tenerse en cuenta al investigar fugas o durante los esfuerzos de lucha contra incendios. Consulte API 2001 para obtener más información sobre el protocolo de respuesta a fugas.</p>
        <p>El equipo de revisión de seguridad debe definir:</p>
        <ul>
            <li>una "zona caliente" alrededor del sitio de la fuga y establecer requisitos de PPE y equipo de lucha contra incendios adicional para realizar trabajos dentro de esta zona;</li>
            <li>requisitos de descontaminación al salir de la zona caliente y otros requisitos necesarios para proteger al personal y al medio ambiente.</li>
        </ul>
        <p>El equipo de revisión de seguridad debe tener cuidado al hacer suposiciones sobre la causa de la fuga. Han ocurrido incidentes donde el personal de investigación asumió que conocía la causa de una pequeña fuga en una línea en operación y fueron sorprendidos sin preparación cuando la fuga de repente se volvió bastante grande.</p>
    </div>
</div>`
});