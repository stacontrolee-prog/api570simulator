if (!getCode('API570')) {
    console.error('El código API570 no está registrado. Registrándolo ahora...');
    registerCode('API570', {
        title: "API 570 Piping Inspection Code",
        titleEs: "Código de Inspección de Tuberías API 570"
    });
}

// Registrar el capítulo 1 para API 570
registerChapter('API570', {
    id: 1,
    title: "Scope",
    titleEs: "Alcance",
    content: `<h2>Piping Inspection Code: In-service Inspection, Rating, Repair, and Alteration of Piping Systems</h2>
    <h3>1 Scope</h3>
    <h3>1.1 General Application</h3>
    <div class="subsection">
        <h4>1.1.1 Coverage</h4>
        <p>API 570 covers inspection, rating, repair, and alteration procedures for metallic piping systems and their associated pressure-relieving devices (PRDs) that have been placed in-service. This inspection code applies to all hydrocarbon and chemical process piping covered in 1.2.1 that have been placed in-service unless specifically designated as optional per 1.2.2. This publication does not cover inspection of specialty equipment including impulse tubing, sensory tubing or tubing associated with instrumentation, exchanger tubes, and control valves. However, this piping code could be used by owner-operators in other industries and other services at their discretion.</p>
        <p>Process piping systems that have been decommissioned from service and abandoned in place are no longer covered by this in-service inspection code. However, abandoned in place piping may still need some amount of inspection and/or risk mitigation to ensure that it does not become a safety hazard due to continued deterioration. Process piping systems that are temporarily out of service or idled but have been mothballed (preserved for potential future use) are still covered by this code.</p>
    </div>
    <div class="subsection">
        <h4>1.1.2 Intent</h4>
        <p>The intent of this code is to specify the in-service inspection and condition-monitoring program, as well as repair guidance that is needed to determine and maintain the ongoing integrity of piping systems. That program should provide reasonably accurate and timely assessments to determine if any changes in the condition of piping could possibly compromise continued safe operation. It is also the intent of this code that owner-operators shall respond to any inspection results that require corrective actions to ensure that the continued integrity of piping is consistent with appropriate risk analysis. API 570 is intended for use by organizations that maintain or have access to an authorized inspection agency, a repair organization, and piping engineers, inspectors, and examiners, all as defined in Section 3.</p>
        <p>This code does not cover source inspection of newly fabricated pressure piping. Refer to API 588 for guidance on the surveillance of supplier vendors fabricating and/or repairing pressure piping that will be installed on-site. Owner-operators may engage the services of individuals qualified and certified in accordance with API 588 or this code.</p>
        <p>However, inspections after new piping systems arrive on-site may still be needed at owner-operator option depending upon quality of shop inspection services and owner-operator specifications during fabrication.</p>
    </div>
    <div class="subsection">
        <h4>1.1.3 Limitations</h4>
        <p>API 570 shall not be used as a substitute for the original construction requirements governing a piping system before it is placed in-service; nor shall it be used in conflict with any prevailing regulatory requirements. If the requirements of this code are more stringent than the regulatory requirements, then the requirements of this code shall govern.</p>
    </div>
    <h3>1.2 Special Applications</h3>
    <div class="subsection">
        <h4>1.2.1 Included Fluid Services</h4>
        <p>Except as provided in 1.2.2, API 570 applies to piping systems for process fluids that are hazardous to personnel, such as hydrocarbons, and similar flammable or toxic fluid services and processes.</p>
        <p>The following are processes, services, and product state that are applicable:</p>
        <ul>
            <li>catalyst lines;</li>
            <li>hydrogen, natural gas, fuel gas, and flare systems;</li>
            <li>sour water and hazardous waste streams;</li>
            <li>hazardous fluid services;</li>
            <li>cryogenic fluids, such as liquid N2, H2, O2, and air;</li>
            <li>gaseous He, H2, O2, and N2 at pressures greater than 150 psig.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>1.2.2 Optional Piping Systems and Fluid Services</h4>
        <p>The fluid services and classes of piping systems listed below are optional when applying requirements of API 570:</p>
        <ul>
            <li>hazardous fluid services below designated threshold limits, as defined by jurisdictional regulations;</li>
            <li>water (including fire protection systems), steam, steam-condensate, boiler feed water, and Category D fluid services as defined in ASME B31.3;</li>
            <li>other classes of piping that are exempted from the applicable process piping code.</li>
        </ul>
    </div>
    <h3>1.3 Fitness-For-Service and Risk-based Inspection</h3>
    <p>This inspection code recognizes Fitness-For-Service concepts for evaluating in-service damage of pressure-containing piping components. API 579-1/ASME FFS-1 provides detailed Fitness-For-Service assessment procedures for specific types of damage that are referenced in this code.</p>
    <p>This inspection code also recognizes risk-based inspection (RBI) concepts for determining inspection intervals or due dates and strategies. API 580 provides the basic minimum and recommended elements for developing, implementing, and maintaining an RBI program for fixed equipment, including piping. API 581 provides a set of methodologies for assessing risk (both probability of failure and consequence of failure) and for developing inspection plans.</p>`,
    contentEs: `<h2>Código de Inspección de Tuberías: Inspección en Servicio, Clasificación, Reparación y Alteración de Sistemas de Tuberías</h2>
    <h3>1 Alcance</h3>
    <h3>1.1 Aplicación General</h3>
    <div class="subsection">
        <h4>1.1.1 Cobertura</h4>
        <p>API 570 cubre los procedimientos de inspección, clasificación, reparación y alteración para sistemas de tuberías metálicas y sus dispositivos asociados de alivio de presión (PRD) que han sido puestos en servicio. Este código de inspección se aplica a todas las tuberías de procesos de hidrocarburos y químicos cubiertas en 1.2.1 que han sido puestas en servicio, a menos que se designen específicamente como opcionales según 1.2.2. Esta publicación no cubre la inspección de equipos especializados, incluyendo tuberías de impulso, tuberías sensoriales o tuberías asociadas con instrumentación, tubos de intercambiadores y válvulas de control. Sin embargo, este código de tuberías podría ser utilizado por propietarios-operadores en otras industrias y otros servicios a su discreción.</p>
        <p>Los sistemas de tuberías de proceso que han sido dados de baja del servicio y abandonados en su lugar ya no están cubiertos por este código de inspección en servicio. Sin embargo, las tuberías abandonadas en su lugar aún pueden necesitar alguna cantidad de inspección y/o mitigación de riesgos para garantizar que no se conviertan en un peligro de seguridad debido a la continua deterioración. Los sistemas de tuberías de proceso que están temporalmente fuera de servicio o inactivos pero han sido preservados (conservados para un posible uso futuro) aún están cubiertos por este código.</p>
    </div>
    <div class="subsection">
        <h4>1.1.2 Propósito</h4>
        <p>El propósito de este código es especificar el programa de inspección en servicio y monitoreo de condiciones, así como la guía de reparación necesaria para determinar y mantener la integridad continua de los sistemas de tuberías. Ese programa debe proporcionar evaluaciones razonablemente precisas y oportunas para determinar si algún cambio en las condiciones de las tuberías podría comprometer la operación segura continua. También es el propósito de este código que los propietarios-operadores respondan a cualquier resultado de inspección que requiera acciones correctivas para garantizar que la integridad continua de las tuberías sea consistente con el análisis de riesgos apropiado. API 570 está destinado a ser utilizado por organizaciones que mantienen o tienen acceso a una agencia de inspección autorizada, una organización de reparación, e ingenieros de tuberías, inspectores y examinadores, todos definidos en la Sección 3.</p>
        <p>Este código no cubre la inspección de origen de tuberías de presión recién fabricadas. Consulte API 588 para obtener orientación sobre la vigilancia de proveedores que fabrican y/o reparan tuberías de presión que se instalarán en sitio. Los propietarios-operadores pueden contratar los servicios de personas calificadas y certificadas de acuerdo con API 588 o este código.</p>
        <p>Sin embargo, las inspecciones después de que los nuevos sistemas de tuberías lleguen al sitio aún pueden ser necesarias a opción del propietario-operador, dependiendo de la calidad de los servicios de inspección en taller y las especificaciones del propietario-operador durante la fabricación.</p>
    </div>
    <div class="subsection">
        <h4>1.1.3 Limitaciones</h4>
        <p>API 570 no debe utilizarse como sustituto de los requisitos originales de construcción que rigen un sistema de tuberías antes de ser puesto en servicio; ni debe utilizarse en conflicto con cualquier requisito regulatorio vigente. Si los requisitos de este código son más estrictos que los requisitos regulatorios, entonces los requisitos de este código regirán.</p>
    </div>
    <h3>1.2 Aplicaciones Especiales</h3>
    <div class="subsection">
        <h4>1.2.1 Servicios de Fluidos Incluidos</h4>
        <p>Salvo lo previsto en 1.2.2, API 570 se aplica a sistemas de tuberías para fluidos de proceso que son peligrosos para el personal, como hidrocarburos, y servicios y procesos similares de fluidos inflamables o tóxicos.</p>
        <p>Los siguientes son procesos, servicios y estados de producto que son aplicables:</p>
        <ul>
            <li>líneas de catalizador;</li>
            <li>hidrógeno, gas natural, gas combustible y sistemas de antorcha;</li>
            <li>agua agria y corrientes de residuos peligrosos;</li>
            <li>servicios de fluidos peligrosos;</li>
            <li>fluidos criogénicos, como N2, H2, O2 y aire líquidos;</li>
            <li>He, H2, O2 y N2 gaseosos a presiones mayores de 150 psig.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>1.2.2 Sistemas de Tuberías y Servicios de Fluidos Opcionales</h4>
        <p>Los servicios de fluidos y clases de sistemas de tuberías que se enumeran a continuación son opcionales al aplicar los requisitos de API 570:</p>
        <ul>
            <li>servicios de fluidos peligrosos por debajo de los límites umbral designados, según lo definido por las regulaciones jurisdiccionales;</li>
            <li>agua (incluidos los sistemas de protección contra incendios), vapor, condensado de vapor, agua de alimentación de caldera y servicios de fluidos Categoría D según lo definido en ASME B31.3;</li>
            <li>otras clases de tuberías que están exentas del código de tuberías de proceso aplicable.</li>
        </ul>
    </div>
    <h3>1.3 Aptitud para el Servicio e Inspección Basada en Riesgos</h3>
    <p>Este código de inspección reconoce los conceptos de Aptitud para el Servicio (Fitness-For-Service) para evaluar el daño en servicio de componentes de tuberías que contienen presión. API 579-1/ASME FFS-1 proporciona procedimientos detallados de evaluación de Aptitud para el Servicio para tipos específicos de daño que se mencionan en este código.</p>
    <p>Este código de inspección también reconoce los conceptos de inspección basada en riesgos (RBI) para determinar intervalos o fechas de vencimiento de inspección y estrategias. API 580 proporciona los elementos mínimos básicos y recomendados para desarrollar, implementar y mantener un programa RBI para equipos fijos, incluyendo tuberías. API 581 proporciona un conjunto de metodologías para evaluar el riesgo (tanto la probabilidad de falla como la consecuencia de la falla) y para desarrollar planes de inspección.</p>`
});