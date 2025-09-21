if (!getCode('API576')) {
    console.error('El código API576 no está registrado. Registrándolo ahora...');
    registerCode('API576', {
    title: "API 576 Inspection of Pressure-Relieving Devices",
    titleEs: "Inspección de Dispositivos de Alivio de Presión API 576"
});
}

// Registrar el capítulo 8
registerChapter('API576', {
    id: 8,
    title: "Pressure-relief Valve Visual On-stream Inspection",
    titleEs: "Inspección Visual en Operación de Válvulas de Alivio de Presión",
    content: `<h3>8 Pressure-relief Valve Visual On-stream Inspection</h3>
    <div class="subsection">
        <h4>8.1 General</h4>
        <p>A full visual on-stream inspection includes, but is not limited to, ensuring the following:</p>
        <ul>
            <li>The correct relief device was installed.</li>
            <li>The company identification (such as a tag or stencil) provides means to establish the last test date and proper pressure setting for the equipment protected by the identified device.</li>
            <li>That information in 8.1 a) matches the equipment file records and that the established test interval has not been exceeded.</li>
            <li>No gags, blinds, closed valves, or piping obstructions would prevent the devices from functioning properly.</li>
            <li>Seals installed to protect the spring setting and ring pin setting have not been broken.</li>
            <li>The relief device does not leak. Pressure-relief valves that have opened in service frequently leak. Detection and correction of this leakage eliminates product loss and possible pollution and prevents fouling and subsequent sticking of the valve. If the valve is a bellows valve, the bellows vent should be checked for leakage.</li>
            <li>Bellows vents are open and clear, and the connected piping is routed to a safe location. These vents should always be referenced to atmospheric pressure.</li>
            <li>Upstream and downstream block valves are sealed or chained and locked in the proper position. Devices that ensure that a block valve is in its proper position include locking plastic bands, car seals, chains and padlocks, and special locking devices made especially for certain types of block valves. The field conditions should mirror the applicable piping and instrumentation diagrams (P&IDs).</li>
            <li>Vent stacks, outlet piping, and small nipples are properly supported to avoid breakage or leakage. Inadequately supported or anchored nipples can be damaged during maintenance and by vibration.</li>
            <li>Valve body drains and vent stack drains are open.</li>
            <li>Stack covers are installed properly (i.e. bug vents and rain hats).</li>
            <li>The drain holes on pressure-relief valve vent stacks are free of corrosion or are not plugged.</li>
            <li>Any lifting lever is operable and positioned properly.</li>
            <li>Any heat tracing, insulation, or purge that is critical to the proper operation of the relief system is intact and operating properly.</li>
            <li>A gauge installed as part of a combination of a rupture disk and a pressure-relief valve or a device for checking pressure between a pressure-relief valve and a block valve is serviceable. Verify that there is no pressure buildup between the rupture disk and pressure-relief valve.</li>
            <li>Any rupture disk is properly oriented.</li>
            <li>Remote pressure sense lines for pilot-operated valves are properly connected and open.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>8.2 Post-relief Event</h4>
        <p>Although the interval selected for on-stream inspection should vary with circumstances and experience, a visual inspection that includes a check for leakage, vibration, and/or damage (e.g. loose fasteners, insulation, missing rain caps, deformation of components, etc.) should follow each operation of a pressure-relief device. Operating personnel assigned to the process unit may make these inspections provided that they are experienced to recognize any leakage or vibration damage. For pressure-relieving devices in potentially fouling services, consideration should be given to servicing the pressure-relieving device as soon as possible.</p>
    </div>
    `,
    contentEs: `<h3>8 Inspección Visual en Operación de Válvulas de Alivio de Presión</h3>
    <div class="subsection">
        <h4>8.1 General</h4>
        <p>Una inspección visual completa en operación incluye, pero no se limita a, asegurar lo siguiente:</p>
        <ul>
            <li>Se instaló el dispositivo de alivio correcto.</li>
            <li>La identificación de la compañía (como una etiqueta o estarcido) proporciona medios para establecer la fecha de la última prueba y la presión de ajuste adecuada para el equipo protegido por el dispositivo identificado.</li>
            <li>Que la información en 8.1 a) coincide con los registros de archivos del equipo y que no se ha excedido el intervalo de prueba establecido.</li>
            <li>No hay calces, tapas ciegas, válvulas cerradas u obstrucciones en la tubería que impidan que los dispositivos funcionen correctamente.</li>
            <li>Los sellos instalados para proteger el ajuste del resorte y el ajuste del pasador del anillo no se han roto.</li>
            <li>El dispositivo de alivio no tiene fugas. Las válvulas de alivio de presión que se han abierto en servicio frecuentemente tienen fugas. La detección y corrección de esta fuga elimina la pérdida de producto y posible contaminación y evita el ensuciamiento y posterior atascamiento de la válvula. Si la válvula es una válvula de fuelle, la ventilación del fuelle debe verificarse en busca de fugas.</li>
            <li>Las ventilaciones de los fuelles están abiertas y despejadas, y la tubería conectada está dirigida a una ubicación segura. Estas ventilaciones siempre deben referenciarse a la presión atmosférica.</li>
            <li>Las válvulas de bloqueo aguas arriba y aguas abajo están selladas o encadenadas y bloqueadas en la posición adecuada. Los dispositivos que aseguran que una válvula de bloqueo está en su posición adecuada incluyen bandas de plástico de bloqueo, sellos de alambre, cadenas y candados, y dispositivos de bloqueo especiales hechos especialmente para ciertos tipos de válvulas de bloqueo. Las condiciones de campo deben reflejar los diagramas de tubería e instrumentación aplicables (P&IDs).</li>
            <li>Las pilas de ventilación, la tubería de salida y los pequeños racores están adecuadamente soportados para evitar roturas o fugas. Los racores inadecuadamente soportados o anclados pueden dañarse durante el mantenimiento y por vibración.</li>
            <li>Los drenajes del cuerpo de la válvula y los drenajes de la pila de ventilación están abiertos.</li>
            <li>Las cubiertas de la pila están instaladas correctamente (es decir, ventilaciones para insectos y sombreros para lluvia).</li>
            <li>Los orificios de drenaje en las pilas de ventilación de las válvulas de alivio de presión están libres de corrosión o no están obstruidos.</li>
            <li>Cualquier palanca de levantamiento es operable y está posicionada correctamente.</li>
            <li>Cualquier rastreo térmico, aislamiento o purga que sea crítico para el funcionamiento adecuado del sistema de alivio está intacto y funcionando correctamente.</li>
            <li>Un manómetro instalado como parte de una combinación de un disco de ruptura y una válvula de alivio de presión o un dispositivo para verificar la presión entre una válvula de alivio de presión y una válvula de bloqueo está en condiciones de servicio. Verificar que no haya acumulación de presión entre el disco de ruptura y la válvula de alivio de presión.</li>
            <li>Cualquier disco de ruptura está orientado correctamente.</li>
            <li>Las líneas de sensores de presión remotos para válvulas operadas por piloto están conectadas correctamente y abiertas.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>8.2 Post-evento de Alivio</h4>
        <p>Aunque el intervalo seleccionado para la inspección en operación debe variar según las circunstancias y la experiencia, debe seguir una inspección visual que incluya una verificación de fugas, vibración y/o daño (por ejemplo, sujetadores flojos, aislamiento, sombreros para lluvia faltantes, deformación de componentes, etc.) después de cada operación de un dispositivo de alivio de presión. El personal de operación asignado a la unidad de proceso puede realizar estas inspecciones siempre que tengan experiencia para reconocer cualquier fuga o daño por vibración. Para los dispositivos de alivio de presión en servicios potencialmente propensos al ensuciamiento, debe considerarse la posibilidad de dar servicio al dispositivo de alivio de presión lo antes posible.</p>
    </div>
    `
});