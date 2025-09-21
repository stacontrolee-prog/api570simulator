if (!getCode('API576')) {
    console.error('El código API576 no está registrado. Registrándolo ahora...');
    registerCode('API576', {
    title: "API 576 Inspection of Pressure-Relieving Devices",
    titleEs: "Inspección de Dispositivos de Alivio de Presión API 576"
});
}

// Registrar el Anexo B
registerChapter('API576', {
    id: 'B',
    title: "Sample Record and Report Forms",
    titleEs: "Formularios de Muestra de Registros e Informes",
    content: `<h3>Annex B</h3>
    <h4>(informative)</h4>
    <h3>Sample Record and Report Forms</h3>
    <p>The specification record for a pressure-relieving device shown in Figure B.1 is a typical permanent record for specifying a pressure-relief valve. This record holds the basic information needed to properly repair or replace the valve.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B1.png" class="figure-image">
        <p class="figure-caption">Figure B.1—Sample Form for Recording Pressure-relieving Device Specifications</p>
    </div>
    
    <p>The historical record for a pressure-relieving device shown in Figure B.2 is a typical permanent service record that holds the dates and results of periodic inspections and tests. The information recorded will form a basis for determining test intervals and design changes.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B2.png" class="figure-image">
        <p class="figure-caption">Figure B.2—Sample Historical Record</p>
    </div>
    
    <p>In the record and report program illustrated in Figure B.3, the engineering-inspection group maintains the records and periodically informs the operations group responsible for operating the pressure-relief valves of the due dates of any work to be done. A report such as that shown in Figure B.3 (with sample data) is a simple and effective means for initiating inspection, testing, and repair work. Its return to the engineering-inspection group indicates that the operations group responsible for operating the pressure-relief valves has taken action. The report should list all the pressure-relief devices at a given unit to help minimize oversights and clerical work.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B3.png" class="figure-image">
        <p class="figure-caption">Figure B.3—Sample Inspection and Repair Work Order Form</p>
    </div>
    
    <p>When a valve is sent to the shop for inspection, it is inspected and tested by the maintenance group in the "as-received" condition. A report such as the testing report for a pressure-relieving device shown in Figure B.4 is filled out to document the results of this inspection and testing.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B4.png" class="figure-image">
        <p class="figure-caption">Figure B.4—Sample Testing Report</p>
    </div>
    
    <p>Inspection and testing of a device may lead to its setting and repair by the maintenance group. Orders and records such as the condition, repair, and setting record for a pressure-relieving device and the setting record and repair order for pressure-relieving devices shown in Figure B.5 should be filled out as appropriate.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B5.png" class="figure-image">
        <p class="figure-caption">Figure B.5—Sample In-service Report</p>
    </div>
    
    <p>At the shop, the valve may have a part replaced with a spare part by the maintenance group. In this case, documentation is prepared indicating the replacement as well as other basic information on the condition, repair, and setting record for a pressure-relieving device form.</p>
    
    <p>After a pressure-relief valve has been returned to the process unit and installed by the operations group, the authority in the operations group responsible for writing the valve work orders should prepare a report such as the in-service report for a pressure-relieving device. This report is filled out to certify that the valve has been reinstalled in its proper location. The report should be sent to the engineering-inspection group. It serves as an independent check on earlier steps and as the final expected report on this particular inspection of the pressure-relief device.</p>
    
    <p class="note">The following samples are merely examples for illustration purposes only. (Each company should develop its own approach.)</p>
    `,
    contentEs: `<h3>Anexo B</h3>
    <h4>(informativo)</h4>
    <h3>Formularios de Muestra de Registros e Informes</h3>
    <p>El registro de especificaciones para un dispositivo de alivio de presión que se muestra en la Figura B.1 es un registro permanente típico para especificar una válvula de alivio de presión. Este registro contiene la información básica necesaria para reparar o reemplazar adecuadamente la válvula.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B1.png" class="figure-image">
        <p class="figure-caption">Figura B.1—Formulario de Muestra para Registrar Especificaciones de Dispositivos de Alivio de Presión</p>
    </div>
    
    <p>El registro histórico para un dispositivo de alivio de presión que se muestra en la Figura B.2 es un registro de servicio permanente típico que contiene las fechas y resultados de inspecciones y pruebas periódicas. La información registrada formará una base para determinar los intervalos de prueba y los cambios de diseño.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B2.png" class="figure-image">
        <p class="figure-caption">Figura B.2—Registro Histórico de Muestra</p>
    </div>
    
    <p>En el programa de registro e informes ilustrado en la Figura B.3, el grupo de ingeniería-inspección mantiene los registros e informa periódicamente al grupo de operaciones responsable de operar las válvulas de alivio de presión sobre las fechas de vencimiento de cualquier trabajo que deba realizarse. Un informe como el que se muestra en la Figura B.3 (con datos de muestra) es un medio simple y efectivo para iniciar trabajos de inspección, prueba y reparación. Su devolución al grupo de ingeniería-inspección indica que el grupo de operaciones responsable de operar las válvulas de alivio de presión ha tomado medidas. El informe debe enumerar todos los dispositivos de alivio de presión en una unidad determinada para ayudar a minimizar omisiones y trabajo administrativo.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B3.png" class="figure-image">
        <p class="figure-caption">Figura B.3—Formulario de Muestra de Orden de Trabajo de Inspección y Reparación</p>
    </div>
    
    <p>Cuando una válvula se envía al taller para inspección, es inspeccionada y probada por el grupo de mantenimiento en la condición "tal como se recibió". Se completa un informe como el informe de prueba para un dispositivo de alivio de presión que se muestra en la Figura B.4 para documentar los resultados de esta inspección y prueba.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B4.png" class="figure-image">
        <p class="figure-caption">Figura B.4—Informe de Prueba de Muestra</p>
    </div>
    
    <p>La inspección y prueba de un dispositivo pueden llevar a su ajuste y reparación por parte del grupo de mantenimiento. Deben completarse órdenes y registros como el registro de condición, reparación y ajuste para un dispositivo de alivio de presión y el registro de ajuste y orden de reparación para dispositivos de alivio de presión que se muestran en la Figura B.5 según corresponda.</p>
    
    <div class="figure-container">
        <img src="images/api576_figure_B5.png" class="figure-image">
        <p class="figure-caption">Figura B.5—Informe en Servicio de Muestra</p>
    </div>
    
    <p>En el taller, el grupo de mantenimiento puede reemplazar una pieza de la válvula con una pieza de repuesto. En este caso, se prepara documentación que indica el reemplazo así como otra información básica en el formulario de registro de condición, reparación y ajuste para un dispositivo de alivio de presión.</p>
    
    <p>Después de que una válvula de alivio de presión haya sido devuelta a la unidad de proceso e instalada por el grupo de operaciones, la autoridad en el grupo de operaciones responsable de escribir las órdenes de trabajo de la válvula debe preparar un informe como el informe en servicio para un dispositivo de alivio de presión. Este informe se completa para certificar que la válvula ha sido reinstalada en su ubicación adecuada. El informe debe enviarse al grupo de ingeniería-inspección. Sirve como una verificación independiente de los pasos anteriores y como el informe final esperado sobre esta inspección particular del dispositivo de alivio de presión.</p>
    
    <p class="note">Las siguientes muestras son meramente ejemplos para fines ilustrativos. (Cada empresa debe desarrollar su propio enfoque.)</p>
    `
});