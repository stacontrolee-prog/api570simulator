// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 8
registerChapter('API574', {
    id: 8,
    title: "Strategies for Establishing Frequency of Inspection",
    titleEs: "Estrategias para Establecer la Frecuencia de Inspección",
    content: `<h3>8 Strategies for Establishing Frequency of Inspection</h3>
    <div class="subsection">
        <h4>8.1 Fixed Interval</h4>
        <p>The frequency and extent of piping inspections will range from often and extensive in piping classes where deterioration is extreme or high consequence to seldom and cursory in piping classes in noncorrosive or low-consequence services. The frequency of piping inspections should be determined by the following conditions:</p>
        <ul>
            <li>consequence of a failure (piping classification);</li>
            <li>degree of risk (likelihood and consequence of a failure);</li>
            <li>amount of corrosion allowance remaining;</li>
            <li>available historical data;</li>
            <li>regulatory requirements.</li>
        </ul>
        <p>API 570 requires classifying piping systems according to the consequences of failure unless RBI is used to determine piping inspection plans. Each owner-operator should review its piping systems and develop either a classification system using the information provided in API 570 or from an RBI analysis (similar to the elements in API 580 and the methodology in API 581). Either system helps establish minimum inspection frequencies for each piping classification; some inspections can and should be made while the piping is operating. Inspections that cannot be made during operation should be made while the piping is not in service. Elevated operating temperature can limit the inspections techniques that can be effectively used during operation.</p>
    </div>
    
    <div class="subsection">
        <h4>8.2 RBI</h4>
        <p>RBI creates inspection plans based on an assessment of the likelihood of failure and the consequence of failure of a piping system or circuit. RBI may be used to determine inspection intervals or due dates and the type and extent of future inspection/examinations. For more information regarding RBI, the following references may be used:</p>
        <ul>
            <li>API 580, for establishing an RBI program, including selection of methodology and sustainability of effort;</li>
            <li>API 581, for an example of an RBI methodology for evaluating probability, consequence, and risk, as well as inspection planning based on those results.</li>
        </ul>
        <p>Identifying and evaluating credible damage mechanisms, current piping conditions, and the effectiveness of past inspections are important steps in assessing the likelihood of a piping failure. The likelihood assessment should consider all forms of damage that could reasonably be expected to affect piping circuits in any particular service. Examples of those damage mechanisms include internal or external metal loss from an identified form of corrosion (localized or general), all forms of cracking, including hydrogen-assisted and SCC (from the inside or outside surfaces of piping), and any other forms of metallurgical, corrosion, or mechanical damage, such as fatigue, embrittlement, creep, etc. See API 571 for details of common damage mechanisms.</p>
        <p>Identifying and evaluating the process fluid(s), potential injuries, environmental damage, unit piping and equipment damage, and unit loss of production are important aspects in assessing the consequences associated with a failure of the piping.</p>
        <p>Any RBI assessment should be thoroughly documented in accordance with API 580, defining all the factors contributing to both the probability and consequence of a failure of the piping system.</p>
        <p>After an RBI assessment is conducted, the results may be used to establish the inspection plan and better define the following:</p>
        <ul>
            <li>the most appropriate inspection and NDE methods, tools, and techniques;</li>
            <li>the extent of NDE (e.g. percentage of piping to examine);</li>
            <li>the date for internal, external, and on-stream inspections;</li>
            <li>the need for pressure testing after damage has occurred or after repairs/alterations have been completed;</li>
            <li>the prevention and mitigation steps to reduce the probability and consequence of a piping failure (e.g. repairs, process changes, inhibitors, etc.).</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>8.3 Opportunities for Inspection</h4>
        <div class="subsection">
            <h4>8.3.1 Scheduled Shutdowns</h4>
            <p>This section is reserved for future content.</p>
        </div>
        <div class="subsection">
            <h4>8.3.2 Unscheduled Shutdowns</h4>
            <p>This section is reserved for future content.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>8.4 On-stream Inspection</h4>
        <div class="subsection">
            <h4>8.4.1 Technical Reasons for Inspecting On-stream</h4>
            <p>Certain kinds of external inspections should be done while the piping is operating. Vibration and swaying are evident with process flow through the pipe. The proper position and function of supports, hangers, and anchors are most apparent while piping is in operation at temperature. The inspector should look for distortion, settlement, or foundation movement, which could indicate improper design or fabrication. Pipe rollers and slide plates should be checked to ensure that they operate freely.</p>
            <p>Leakage is often more obvious during operation. Inspectors should look for signs of leakage both coming from each pipe and onto each pipe. The leakage from a pipe can indicate a hole in the pipe, and leakage onto a pipe can indicate a leak from an unobserved source (e.g. beneath insulation).</p>
            <p>Thermal imaging should be done under operating conditions. For example, thermal imaging:</p>
            <ul>
                <li>can show pluggage and/or maldistribution of flow that can affect corrosion mechanisms;</li>
                <li>can show wet insulation that can lead to CUI;</li>
                <li>can show a breakdown of internal insulating refractory, which can lead to high-temperature corrosion of the pipe wall;</li>
                <li>may show malfunctions of heat tracing, which could allow unexpected damage mechanisms to operate; for instance, tracing that is too hot may cause caustic SCC of carbon steel carrying caustic solutions, and tracing that is too cold may allow dew-point corrosion.</li>
            </ul>
            <p>RT can be as effective during operation as when the piping is offline. On-stream RT could detect fouling that might be washed out of piping during unit entry preparation.</p>
        </div>
        
        <div class="subsection">
            <h4>8.4.2 Practical Reasons for Inspecting On-stream</h4>
            <p>On-stream inspection can increase unit run lengths by giving assurance that piping is fit for continued service.</p>
            <p>When piping must be replaced, on-stream inspection allows an inspector to define the extent of replacement necessary and have replacement piping fabricated before the shutdown.</p>
            <p>Units are often crowded during a shutdown, and on-stream piping inspection can increase the safety and efficiency of shutdown operations by reducing the number of people who need to be in the unit during that time.</p>
            <p>On-stream inspection can reduce surges in work load and thus stabilize personnel requirements.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>8.5 Offline Inspection</h4>
        <p>A common limitation to on-stream inspection is temperature. The equipment used in some kinds of techniques cannot operate at temperatures much above ambient. In addition, the radiant heat from some piping can be too great for technicians to make measurements safely. In both instances, a piping inspection may need to be done when the piping is not in operation.</p>
        <p>Signs of wet insulation should be noted when piping is offline. Water dripping onto insulation may not show dampness during operation because heat from the pipe causes surface water to evaporate, but water deeper in the insulation can still cause CUI. If dampness is noted during a shutdown, the damp piping should be considered for CUI inspection.</p>
        <p>When piping is opened for any reason, it should be inspected internally as far as accessibility permits. Some piping is large enough for internal inspection, which can only occur while the piping is offline.</p>
        <p>Adequate follow-up inspections should be conducted to determine the causes of defects, such as leaks, misalignment, vibration, and swaying, that were detected while the unit was operating.</p>
    </div>
    
    <div class="subsection">
        <h4>8.6 Inspection Scope</h4>
        <p>Piping inspection should be frequent enough to ensure that all piping has sufficient thickness to provide both pressure containment and mechanical support. For pipes undergoing uniform corrosion, calculating the corrosion rate and remaining life at each CML and then setting the inspection interval based on the half life has traditionally provided that assurance. The inspector, often in consultation with corrosion specialists and piping engineers, determines the number and locations of CMLs (see API 570). RBI may be used to determine interval or due date and extent.</p>
        <p>For damage mechanisms other than uniform corrosion, the inspector should determine the type of inspection, the frequency, the extent, and the locations of CMLs. Corrosion specialists and piping engineers have typically helped in this process as well.</p>
    </div>
</div>`,
    contentEs: `<h3>8 Estrategias para Establecer la Frecuencia de Inspección</h3>
    <div class="subsection">
        <h4>8.1 Intervalo Fijo</h4>
        <p>La frecuencia y extensión de las inspecciones de tuberías variarán desde frecuente y extensa en clases de tuberías donde el deterioro es extremo o de alta consecuencia hasta rara vez y superficial en clases de tuberías en servicios no corrosivos o de baja consecuencia. La frecuencia de las inspecciones de tuberías debe determinarse por las siguientes condiciones:</p>
        <ul>
            <li>consecuencia de una falla (clasificación de tubería);</li>
            <li>grado de riesgo (probabilidad y consecuencia de una falla);</li>
            <li>cantidad de tolerancia de corrosión restante;</li>
            <li>datos históricos disponibles;</li>
            <li>requisitos regulatorios.</li>
        </ul>
        <p>API 570 requiere clasificar los sistemas de tubería según las consecuencias de falla a menos que se utilice RBI para determinar los planes de inspección de tuberías. Cada propietario-operador debe revisar sus sistemas de tubería y desarrollar un sistema de clasificación utilizando la información proporcionada en API 570 o a partir de un análisis RBI (similar a los elementos en API 580 y la metodología en API 581). Cualquier sistema ayuda a establecer frecuencias mínimas de inspección para cada clasificación de tubería; algunas inspecciones pueden y deben realizarse mientras la tubería está en operación. Las inspecciones que no pueden realizarse durante la operación deben hacerse cuando la tubería no está en servicio. La temperatura de operación elevada puede limitar las técnicas de inspección que pueden usarse eficazmente durante la operación.</p>
    </div>
    
    <div class="subsection">
        <h4>8.2 RBI</h4>
        <p>RBI crea planes de inspección basados en una evaluación de la probabilidad de falla y la consecuencia de falla de un sistema o circuito de tubería. RBI puede usarse para determinar intervalos de inspección o fechas de vencimiento y el tipo y extensión de futuras inspecciones/exámenes. Para obtener más información sobre RBI, se pueden utilizar las siguientes referencias:</p>
        <ul>
            <li>API 580, para establecer un programa RBI, incluyendo la selección de metodología y sostenibilidad del esfuerzo;</li>
            <li>API 581, para un ejemplo de una metodología RBI para evaluar probabilidad, consecuencia y riesgo, así como la planificación de inspección basada en esos resultados.</li>
        </ul>
        <p>La identificación y evaluación de mecanismos de daño creíbles, las condiciones actuales de la tubería y la efectividad de las inspecciones pasadas son pasos importantes para evaluar la probabilidad de una falla de tubería. La evaluación de probabilidad debe considerar todas las formas de daño que razonablemente podrían esperarse que afecten los circuitos de tubería en cualquier servicio particular. Ejemplos de esos mecanismos de daño incluyen pérdida de metal interna o externa de una forma identificada de corrosión (localizada o general), todas las formas de agrietamiento, incluyendo asistido por hidrógeno y SCC (desde las superficies internas o externas de las tuberías), y cualquier otra forma de daño metalúrgico, por corrosión o mecánico, como fatiga, fragilización, creep, etc. Véase API 571 para detalles de los mecanismos de daño comunes.</p>
        <p>La identificación y evaluación del fluido(s) de proceso, lesiones potenciales, daño ambiental, daño a la tubería y equipos de la unidad y pérdida de producción de la unidad son aspectos importantes para evaluar las consecuencias asociadas con una falla de la tubería.</p>
        <p>Cualquier evaluación RBI debe documentarse minuciosamente de acuerdo con API 580, definiendo todos los factores que contribuyen tanto a la probabilidad como a la consecuencia de una falla del sistema de tubería.</p>
        <p>Después de realizar una evaluación RBI, los resultados pueden usarse para establecer el plan de inspección y definir mejor lo siguiente:</p>
        <ul>
            <li>los métodos, herramientas y técnicas de inspección y NDE más apropiados;</li>
            <li>la extensión del NDE (ej. porcentaje de tubería a examinar);</li>
            <li>la fecha para inspecciones internas, externas y en línea;</li>
            <li>la necesidad de pruebas de presión después de que ha ocurrido un daño o después de que se hayan completado reparaciones/alteraciones;</li>
            <li>los pasos de prevención y mitigación para reducir la probabilidad y consecuencia de una falla de tubería (ej. reparaciones, cambios de proceso, inhibidores, etc.).</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>8.3 Oportunidades para Inspección</h4>
        <div class="subsection">
            <h4>8.3.1 Paradas Programadas</h4>
            <p>Esta sección está reservada para contenido futuro.</p>
        </div>
        <div class="subsection">
            <h4>8.3.2 Paradas No Programadas</h4>
            <p>Esta sección está reservada para contenido futuro.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>8.4 Inspección en Línea</h4>
        <div class="subsection">
            <h4>8.4.1 Razones Técnicas para Inspeccionar en Línea</h4>
            <p>Ciertos tipos de inspecciones externas deben realizarse mientras la tubería está en operación. La vibración y el balanceo son evidentes con el flujo de proceso a través de la tubería. La posición y función adecuadas de los soportes, colgadores y anclajes son más evidentes mientras la tubería está en operación a temperatura. El inspector debe buscar distorsión, asentamiento o movimiento de la cimentación, lo que podría indicar un diseño o fabricación inadecuados. Los rodillos de tubería y las placas deslizantes deben verificarse para garantizar que operen libremente.</p>
            <p>Las fugas a menudo son más obvias durante la operación. Los inspectores deben buscar signos de fugas tanto que provienen de cada tubería como sobre cada tubería. La fuga de una tubería puede indicar un agujero en la tubería, y la fuga sobre una tubería puede indicar una fuga de una fuente no observada (ej. debajo del aislamiento).</p>
            <p>La imagen térmica debe hacerse bajo condiciones de operación. Por ejemplo, la imagen térmica:</p>
            <ul>
                <li>puede mostrar obstrucción y/o mala distribución del flujo que puede afectar los mecanismos de corrosión;</li>
                <li>puede mostrar aislamiento húmedo que puede llevar a CUI;</li>
                <li>puede mostrar una descomposición del refractario aislante interno, que puede llevar a la corrosión por alta temperatura de la pared de la tubería;</li>
                <li>puede mostrar mal funcionamiento del rastreo térmico, lo que podría permitir que operen mecanismos de daño inesperados; por ejemplo, un rastreo demasiado caliente puede causar SCC cáustico del acero al carbono que transporta soluciones cáusticas, y un rastreo demasiado frío puede permitir la corrosión por punto de rocío.</li>
            </ul>
            <p>La RT puede ser tan efectiva durante la operación como cuando la tubería está fuera de línea. La RT en línea podría detectar incrustaciones que podrían lavarse de la tubería durante la preparación para la entrada a la unidad.</p>
        </div>
        
        <div class="subsection">
            <h4>8.4.2 Razones Prácticas para Inspeccionar en Línea</h4>
            <p>La inspección en línea puede aumentar la duración de las corridas de la unidad al dar la certeza de que la tubería es apta para continuar en servicio.</p>
            <p>Cuando sea necesario reemplazar la tubería, la inspección en línea permite al inspector definir la extensión del reemplazo necesario y tener la tubería de reemplazo fabricada antes de la parada.</p>
            <p>Las unidades a menudo están abarrotadas durante una parada, y la inspección de tuberías en línea puede aumentar la seguridad y eficiencia de las operaciones de parada al reducir el número de personas que necesitan estar en la unidad durante ese tiempo.</p>
            <p>La inspección en línea puede reducir los picos en la carga de trabajo y así estabilizar los requisitos de personal.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>8.5 Inspección Fuera de Línea</h4>
        <p>Una limitación común de la inspección en línea es la temperatura. El equipo utilizado en algunos tipos de técnicas no puede operar a temperaturas mucho más altas que la ambiental. Además, el calor radiante de algunas tuberías puede ser demasiado grande para que los técnicos realicen mediciones de manera segura. En ambos casos, una inspección de tuberías puede necesitar realizarse cuando la tubería no está en operación.</p>
        <p>Los signos de aislamiento húmedo deben notarse cuando la tubería está fuera de línea. El agua que gotea sobre el aislamiento puede no mostrar humedad durante la operación porque el calor de la tubería hace que el agua superficial se evapore, pero el agua más profunda en el aislamiento aún puede causar CUI. Si se nota humedad durante una parada, la tubería húmeda debe considerarse para inspección de CUI.</p>
        <p>Cuando la tubería se abre por cualquier razón, debe inspeccionarse internamente en la medida que lo permita la accesibilidad. Algunas tuberías son lo suficientemente grandes para la inspección interna, lo que solo puede ocurrir mientras la tubería está fuera de línea.</p>
        <p>Deben realizarse inspecciones de seguimiento adecuadas para determinar las causas de defectos, como fugas, desalineación, vibración y balanceo, que se detectaron mientras la unidad estaba en operación.</p>
    </div>
    
    <div class="subsection">
        <h4>8.6 Alcance de la Inspección</h4>
        <p>La inspección de tuberías debe ser lo suficientemente frecuente para garantizar que toda la tubería tenga un espesor suficiente para proporcionar tanto contención de presión como soporte mecánico. Para las tuberías que experimentan corrosión uniforme, calcular la tasa de corrosión y la vida útil restante en cada CML y luego establecer el intervalo de inspección basado en la mitad de la vida ha proporcionado tradicionalmente esa garantía. El inspector, a menudo en consulta con especialistas en corrosión e ingenieros de tuberías, determina el número y ubicaciones de los CML (ver API 570). RBI puede usarse para determinar el intervalo o fecha de vencimiento y extensión.</p>
        <p>Para mecanismos de daño distintos a la corrosión uniforme, el inspector debe determinar el tipo de inspección, la frecuencia, la extensión y las ubicaciones de los CMLs. Los especialistas en corrosión y los ingenieros de tuberías también suelen ayudar en este proceso.</p>
    </div>
</div>`
});