// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 6
registerChapter('API574', {
    id: 6,
    title: "Reasons for Inspection",
    titleEs: "Razones para la Inspección",
    content: `<h3>6 Reasons for Inspection</h3>
    <div class="subsection">
        <h4>6.1 General</h4>
        <p>The primary purposes of inspection are to observe, report, and quantify damage (see API 571) and then to specify needed repairs or replacements. Planning for inspection entails identifying credible damage mechanisms for the purposes of directing the inspection activity. The inspection activity requires obtaining information about the physical condition of the piping, which will lead to determining the causes of any deterioration and the rate of deterioration. By developing a database of inspection history, the user can predict and recommend future repairs and replacements, act to prevent or retard further deterioration, and most importantly, prevent loss of containment. These actions should result in increased operating safety, reduced maintenance costs, and more reliable and efficient operations. API 570 provides the basic requirements for a piping inspection program which addresses these issues and concerns.</p>
    </div>
    
    <div class="subsection">
        <h4>6.2 Process and Personnel Safety</h4>
        <p>A leak or failure in a piping system can be a minor inconvenience for low-consequence fluids or it can become a potential source of a process safety incident for higher-consequence fluids depending on the temperature, pressure, contents, and location of the piping. Piping in a petrochemical plant typically contains flammable fluids, acids, alkalis, toxic fluids, and other harmful fluids that would make leaks potentially hazardous to exposed personnel. Leaks in these kinds of piping systems can also have environmental consequences associated with their failure. Adequate inspection is a prerequisite for maintaining piping systems in a safe, reliable condition.</p>
        <p>Leakage can occur at flanged joints in piping systems for a variety of reasons, including corrosion, cracking, bolt tightness issues, and gasket issues. In addition, thermal expansion issues can cause leaks particularly for joints in high-temperature services during start-ups and shutdowns, and sometimes during normal operation. For these reasons, process plant practices should include quality assurance/control procedures to help ensure flanged joint integrity after maintenance activities where the joints have been disassembled. Procedures typically include, for example, proper gasket and fastener selection, assembler qualifications, proper assembly instruction, inspection, and testing requirements. Refer to ASME PCC-1 for flange joint assembly practices.</p>
    </div>
    
    <div class="subsection">
        <h4>6.3 Regulatory Requirements</h4>
        <p>Regulatory requirements may cover those piping systems that could affect personnel or process safety and environmental concerns. Process safety regulations, such as OSHA 29 CFR 1910.119 in the United States, have mandated that equipment, including piping, that handles significant quantities of hazardous chemicals be inspected according to accepted codes and standards, which includes API 570. Local and state regulations may also cover process piping inspection and maintenance.</p>
    </div>
    
    <div class="subsection">
        <h4>6.4 Reliable Operation</h4>
        <p>In addition to the need for inspection to provide for process and personnel safety, thorough inspection, data analysis, and maintenance of detailed inspection/repair/replacement records of piping systems are essential to the attainment of acceptable process reliability to meet the business plan. Piping maintenance and replacement schedules are developed to coincide with scheduled maintenance turnarounds to avoid unplanned outages and the consequences of lost production opportunities.</p>
    </div>
</div>`,
    contentEs: `<h3>6 Razones para la Inspección</h3>
    <div class="subsection">
        <h4>6.1 General</h4>
        <p>Los propósitos principales de la inspección son observar, informar y cuantificar el daño (ver API 571) y luego especificar las reparaciones o reemplazos necesarios. La planificación de la inspección implica identificar mecanismos de daño creíbles con el fin de dirigir la actividad de inspección. La actividad de inspección requiere obtener información sobre la condición física de la tubería, lo que llevará a determinar las causas de cualquier deterioro y la tasa de deterioro. Al desarrollar una base de datos del historial de inspección, el usuario puede predecir y recomendar futuras reparaciones y reemplazos, actuar para prevenir o retardar un mayor deterioro y, lo más importante, prevenir la pérdida de contención. Estas acciones deberían resultar en una mayor seguridad operativa, costos de mantenimiento reducidos y operaciones más confiables y eficientes. API 570 proporciona los requisitos básicos para un programa de inspección de tuberías que aborda estos problemas y preocupaciones.</p>
    </div>
    
    <div class="subsection">
        <h4>6.2 Seguridad del Proceso y del Personal</h4>
        <p>Una fuga o falla en un sistema de tuberías puede ser una molestia menor para fluidos de baja consecuencia o puede convertirse en una fuente potencial de un incidente de seguridad del proceso para fluidos de mayor consecuencia dependiendo de la temperatura, presión, contenido y ubicación de la tubería. La tubería en una planta petroquímica típicamente contiene fluidos inflamables, ácidos, álcalis, fluidos tóxicos y otros fluidos dañinos que harían que las fugas sean potencialmente peligrosas para el personal expuesto. Las fugas en estos tipos de sistemas de tuberías también pueden tener consecuencias ambientales asociadas con su falla. Una inspección adecuada es un requisito previo para mantener los sistemas de tuberías en una condición segura y confiable.</p>
        <p>Las fugas pueden ocurrir en juntas bridadas en sistemas de tuberías por una variedad de razones, incluyendo corrosión, agrietamiento, problemas de apriete de pernos y problemas de juntas. Además, los problemas de expansión térmica pueden causar fugas, particularmente para juntas en servicios de alta temperatura durante las puestas en marcha y paradas, y a veces durante la operación normal. Por estas razones, las prácticas de la planta de proceso deberían incluir procedimientos de aseguramiento/control de calidad para ayudar a garantizar la integridad de las juntas bridadas después de las actividades de mantenimiento donde las juntas han sido desmontadas. Los procedimientos típicamente incluyen, por ejemplo, la selección adecuada de juntas y sujetadores, calificaciones del ensamblador, instrucciones de ensamblaje adecuadas, requisitos de inspección y prueba. Consulte ASME PCC-1 para las prácticas de ensamblaje de juntas bridadas.</p>
    </div>
    
    <div class="subsection">
        <h4>6.3 Requisitos Regulatorios</h4>
        <p>Los requisitos regulatorios pueden cubrir aquellos sistemas de tuberías que podrían afectar la seguridad del personal o del proceso y las preocupaciones ambientales. Las regulaciones de seguridad del proceso, como OSHA 29 CFR 1910.119 en los Estados Unidos, han ordenado que los equipos, incluidas las tuberías, que manejen cantidades significativas de productos químicos peligrosos sean inspeccionados de acuerdo con códigos y estándares aceptados, que incluyen API 570. Las regulaciones locales y estatales también pueden cubrir la inspección y mantenimiento de tuberías de proceso.</p>
    </div>
    
    <div class="subsection">
        <h4>6.4 Operación Confiable</h4>
        <p>Además de la necesidad de inspección para proporcionar la seguridad del proceso y del personal, la inspección exhaustiva, el análisis de datos y el mantenimiento de registros detallados de inspección/reparación/reemplazo de los sistemas de tuberías son esenciales para alcanzar una confiabilidad de proceso aceptable que cumpla con el plan de negocio. Los programas de mantenimiento y reemplazo de tuberías se desarrollan para coincidir con las paradas de mantenimiento programadas para evitar paradas no planificadas y las consecuencias de las oportunidades de producción perdidas.</p>
    </div>
</div>`
});