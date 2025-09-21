if (!getCode('API576')) {
    console.error('El código API576 no está registrado. Registrándolo ahora...');
    registerCode('API576', {
    title: "API 576 Inspection of Pressure-Relieving Devices",
    titleEs: "Inspección de Dispositivos de Alivio de Presión API 576"
});
}

// Registrar el capítulo 10
registerChapter('API576', {
    id: 10,
    title: "Records and Reports",
    titleEs: "Registros e Informes",
    content: `<h3>10 Records and Reports</h3>
    <div class="subsection">
        <h4>10.1 General</h4>
        <p>A suitable system of keeping records and generating reports is essential to the effective administration and control of any pressure-relieving device program in a process industry. The system should be as simple and clear as possible.</p>
        <p>The primary objective for keeping records is to make available the information needed to ensure that the performance of pressure-relieving devices meets the requirements of their various installations. Records may be considered as tools needed to implement the program, and reports may be considered as the means to distribute those tools to all the participants of the program so that they coordinate their work and effectively discharge their responsibilities. In most cases, reports may be retained in files and considered as permanent records.</p>
    </div>
    <div class="subsection">
        <h4>10.2 The Need to Keep Records</h4>
        <p>For each pressure-relieving device in service, a complete, permanent record should be kept. The record of each device should include its specification data, including sizing calculations and a continuously accumulating history of inspection and test results. The specification record provides the basic information needed to evaluate the adequacy of a device for a given installation or for a contemplated change in operating conditions, provides the correct dimensional and material information needed to minimize shop errors and expedite repairs, and provides design information that facilitates the purchase of a similar device and that is required to inventory spare parts. This information allows a pressure-relieving device to be assembled, tested, and exchanged with an identical device on the unit to minimize the time the unit's equipment is unprotected during a scheduled inspection.</p>
        <p>Historical records (service records) showing dates and results of inspections and tests are necessary for the follow-up or control phase of the pressure-relieving device program. They enable periodic reviews to determine whether the planned test intervals for a device are being realized. They also provide performance data that help evaluate the suitability of the device for its particular service, that can indicate problems in the device's design and materials, and that can even indicate a misapplication of the device. It is especially important that the records offer a practical and realistic basis for establishing and maintaining safe and economical inspection intervals for the device.</p>
    </div>
    <div class="subsection">
        <h4>10.3 Responsibilities</h4>
        <p>The duties and responsibilities entailed by the various facets of an inspection and testing program for pressure-relieving devices should be clearly defined to avoid confusion and be explicitly assigned to assure compliance. Some companies assign these duties and responsibilities to equipment inspectors or other equipment subject matter experts. Others have maintenance personnel in charge of an established pressure-relief valve service program under the guidance of the engineering-inspection group.</p>
        <p>This subsection is not designed to assign responsibilities to any individual. The following outline of duties is meant primarily to facilitate the understanding of how to use the sample record and report forms in Annex B. These duties are typical of a well-designed pressure-relieving device program in the process industries.</p>
        <div class="subsection">
            <h4>10.3.1 The responsibilities of engineering and/or inspection may include but are not limited to the following:</h4>
            <ul>
                <li>to furnish specifications and sizing calculations for relief devices and connected piping,</li>
                <li>to determine allowable pressure settings,</li>
                <li>to specify test intervals,</li>
                <li>to record service data,</li>
                <li>to prepare lists of devices due for inspection,</li>
                <li>to review inspection and overhaul results and identify and address issues,</li>
                <li>to review, approve, and/or purchase replacement valves or spare parts,</li>
                <li>to ensure P&IDs match the field installation and equipment protected,</li>
                <li>to conduct visual on-stream inspections at the requisite interval,</li>
                <li>to conduct profile radiograph of inlet and outlet piping at specified intervals looking for corrosion and fouling,</li>
                <li>to ensure that new or modified equipment is reviewed for adequate overpressure protection.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>10.3.2 The responsibilities of operations and/or inspection may include but are not limited to the following:</h4>
            <ul>
                <li>to initiate work requests,</li>
                <li>to see that devices are reinstalled in their proper location,</li>
                <li>to prepare in-service reports,</li>
                <li>to check for leaking valves and rupture disks,</li>
                <li>to ensure that the correct block valves (if any) are locked or sealed open or closed as required,</li>
                <li>to check vents and drains for operability,</li>
                <li>to check the upstream and downstream piping for blockage and to perform condition assessment inspections.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>10.3.3 The responsibilities of maintenance may include but are not limited to the following:</h4>
            <ul>
                <li>to perform the mechanical work required to repair, test, reinstall, and attach identification tags to the devices;</li>
                <li>to maintain specification records to facilitate repairs;</li>
                <li>to furnish test reports;</li>
                <li>to initiate purchase orders for spare parts.</li>
            </ul>
        </div>
    </div>
    `,
    contentEs: `<h3>10 Registros e Informes</h3>
    <div class="subsection">
        <h4>10.1 General</h4>
        <p>Un sistema adecuado para mantener registros y generar informes es esencial para la administración y control efectivos de cualquier programa de dispositivos de alivio de presión en la industria de procesos. El sistema debe ser tan simple y claro como sea posible.</p>
        <p>El objetivo principal de mantener registros es poner a disposición la información necesaria para asegurar que el rendimiento de los dispositivos de alivio de presión cumpla con los requisitos de sus diversas instalaciones. Los registros pueden considerarse como herramientas necesarias para implementar el programa, y los informes pueden considerarse como el medio para distribuir esas herramientas a todos los participantes del programa para que coordinen su trabajo y descarguen efectivamente sus responsabilidades. En la mayoría de los casos, los informes pueden conservarse en archivos y considerarse como registros permanentes.</p>
    </div>
    <div class="subsection">
        <h4>10.2 La Necesidad de Mantener Registros</h4>
        <p>Para cada dispositivo de alivio de presión en servicio, debe mantenerse un registro completo y permanente. El registro de cada dispositivo debe incluir sus datos de especificación, incluyendo los cálculos de dimensionamiento y un historial continuamente acumulativo de resultados de inspección y prueba. El registro de especificaciones proporciona la información básica necesaria para evaluar la adecuación de un dispositivo para una instalación determinada o para un cambio contemplado en las condiciones de operación, proporciona la información dimensional y de material correcta necesaria para minimizar errores en el taller y agilizar las reparaciones, y proporciona información de diseño que facilita la compra de un dispositivo similar y que se requiere para inventariar piezas de repuesto. Esta información permite que un dispositivo de alivio de presión sea ensamblado, probado e intercambiado con un dispositivo idéntico en la unidad para minimizar el tiempo que el equipo de la unidad está desprotegido durante una inspección programada.</p>
        <p>Los registros históricos (registros de servicio) que muestran fechas y resultados de inspecciones y pruebas son necesarios para la fase de seguimiento o control del programa de dispositivos de alivio de presión. Permiten revisiones periódicas para determinar si los intervalos de prueba planificados para un dispositivo se están cumpliendo. También proporcionan datos de rendimiento que ayudan a evaluar la idoneidad del dispositivo para su servicio particular, que pueden indicar problemas en el diseño y materiales del dispositivo, e incluso pueden indicar una aplicación incorrecta del dispositivo. Es especialmente importante que los registros ofrezcan una base práctica y realista para establecer y mantener intervalos de inspección seguros y económicos para el dispositivo.</p>
    </div>
    <div class="subsection">
        <h4>10.3 Responsabilidades</h4>
        <p>Los deberes y responsabilidades que conllevan los diversos aspectos de un programa de inspección y prueba para dispositivos de alivio de presión deben definirse claramente para evitar confusiones y asignarse explícitamente para asegurar el cumplimiento. Algunas empresas asignan estos deberes y responsabilidades a inspectores de equipos u otros expertos en equipos. Otros tienen personal de mantenimiento a cargo de un programa establecido de servicio de válvulas de alivio de presión bajo la guía del grupo de ingeniería-inspección.</p>
        <p>Esta subsección no está diseñada para asignar responsabilidades a ningún individuo. El siguiente esquema de deberes tiene como objetivo principal facilitar la comprensión de cómo usar los formularios de muestra de registro e informe en el Anexo B. Estos deberes son típicos de un programa bien diseñado de dispositivos de alivio de presión en las industrias de procesos.</p>
        <div class="subsection">
            <h4>10.3.1 Las responsabilidades de ingeniería y/o inspección pueden incluir pero no limitarse a lo siguiente:</h4>
            <ul>
                <li>proporcionar especificaciones y cálculos de dimensionamiento para dispositivos de alivio y tubería conectada,</li>
                <li>determinar los ajustes de presión permitidos,</li>
                <li>especificar los intervalos de prueba,</li>
                <li>registrar datos de servicio,</li>
                <li>preparar listas de dispositivos pendientes de inspección,</li>
                <li>revisar los resultados de inspección y revisión e identificar y abordar problemas,</li>
                <li>revisar, aprobar y/o comprar válvulas de repuesto o piezas de repuesto,</li>
                <li>asegurar que los P&IDs coincidan con la instalación de campo y el equipo protegido,</li>
                <li>realizar inspecciones visuales en operación en el intervalo requerido,</li>
                <li>realizar radiografías de perfil de la tubería de entrada y salida a intervalos especificados buscando corrosión y ensuciamiento,</li>
                <li>asegurar que el equipo nuevo o modificado sea revisado para una protección adecuada contra sobrepresión.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>10.3.2 Las responsabilidades de operaciones y/o inspección pueden incluir pero no limitarse a lo siguiente:</h4>
            <ul>
                <li>iniciar solicitudes de trabajo,</li>
                <li>verificar que los dispositivos se reinstalen en su ubicación correcta,</li>
                <li>preparar informes de servicio,</li>
                <li>verificar si hay válvulas y discos de ruptura fugando,</li>
                <li>asegurar que las válvulas de bloqueo correctas (si las hay) estén bloqueadas o selladas abiertas o cerradas según se requiera,</li>
                <li>verificar que las ventilaciones y drenajes sean operables,</li>
                <li>verificar la tubería aguas arriba y aguas abajo en busca de obstrucciones y realizar inspecciones de evaluación de condiciones.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>10.3.3 Las responsabilidades de mantenimiento pueden incluir pero no limitarse a lo siguiente:</h4>
            <ul>
                <li>realizar el trabajo mecánico necesario para reparar, probar, reinstalar y adjuntar etiquetas de identificación a los dispositivos;</li>
                <li>mantener registros de especificaciones para facilitar las reparaciones;</li>
                <li>proporcionar informes de prueba;</li>
                <li>iniciar órdenes de compra para piezas de repuesto.</li>
            </ul>
        </div>
    </div>
    `
});