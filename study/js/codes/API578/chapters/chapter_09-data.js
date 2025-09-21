// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 9
registerChapter('API578', {
    id: 9,
    title: "Documentation and Recordkeeping",
    titleEs: "Documentación y Mantenimiento de Registros",
    content: `<h3>9 Documentation and Recordkeeping</h3>
    <div class="subsection">
        <h4>9.1 Shop and Field PMI Documentation</h4>
        <p>Those individuals performing PMI should obtain and follow the PMI procedure approved by the owner/operator. This procedure should include the technique used, equipment calibration, the qualification requirements of PMI personnel, the testing methodology, and documentation requirements.</p>
        <p>When documentation (e.g., drawings) is used in lieu of physical marking, the documentation should allow the owner/operator to identify which components were tested.</p>
    </div>
    
    <div class="subsection">
        <h4>9.2 New and Existing Equipment or System Documentation</h4>
        <p>When PMI is conducted on new or existing assets and systems, records of the results should be kept as long as the equipment exists in its original location. If equipment or a portion of an equipment system that has not received material verification is relocated, the owner/operator should consider the need for PMI prior to placing the relocated components into service.</p>
        <p>Where applicable, master PMI piping isometric drawings to track the components tested and test results may be considered. Since a single documentation system eliminates the need to search for data in multiple locations, such drawings would best be maintained and updated as piping modifications occur from projects or process changes.</p>
    </div>
    
    <div class="subsection">
        <h4>9.3 PMI Records</h4>
        <p>Typical PMI records should contain the following:</p>
        <ul>
            <li>reference to the PMI procedure(s) used;</li>
            <li>date of testing;</li>
            <li>test instrument identification number or serial number, where appropriate;</li>
            <li>name of each person performing the tests, with identification of their respective employer;</li>
            <li>results of the tests;</li>
            <li>basis and action for resolving and documenting PMI nonconformances, including those that have been left in service;</li>
            <li>documentation of the criteria used for prioritization of equipment or systems and extent of PMI performed.</li>
        </ul>
        <p>The information listed should be reported in such a manner that it is traceable to the point of installation.</p>
        <p>Alternatively, the owner/operator may choose to include this within the written material verification procedure. When included in the owner/operator's written material verification procedure, the date and edition number of the written procedure should be documented in the test record.</p>
    </div>`,
    contentEs: `<h3>9 Documentación y Mantenimiento de Registros</h3>
    <div class="subsection">
        <h4>9.1 Documentación de PMI en Taller y Campo</h4>
        <p>Aquellas personas que realicen PMI deben obtener y seguir el procedimiento de PMI aprobado por el propietario/operador. Este procedimiento debe incluir la técnica utilizada, la calibración del equipo, los requisitos de calificación del personal de PMI, la metodología de prueba y los requisitos de documentación.</p>
        <p>Cuando se utiliza documentación (ej., dibujos) en lugar del marcado físico, la documentación debe permitir al propietario/operador identificar qué componentes fueron probados.</p>
    </div>
    
    <div class="subsection">
        <h4>9.2 Documentación de Equipos o Sistemas Nuevos y Existentes</h4>
        <p>Cuando se realiza PMI en activos y sistemas nuevos o existentes, los registros de los resultados deben mantenerse mientras el equipo exista en su ubicación original. Si un equipo o una porción de un sistema de equipo que no ha recibido verificación de materiales es reubicado, el propietario/operador debe considerar la necesidad de PMI antes de poner los componentes reubicados en servicio.</p>
        <p>Cuando sea aplicable, pueden considerarse dibujos isométricos maestros de PMI de tuberías para rastrear los componentes probados y los resultados de las pruebas. Dado que un sistema único de documentación elimina la necesidad de buscar datos en múltiples ubicaciones, dichos dibujos serían mejor mantenidos y actualizados a medida que ocurren modificaciones de tuberías debido a proyectos o cambios de proceso.</p>
    </div>
    
    <div class="subsection">
        <h4>9.3 Registros de PMI</h4>
        <p>Los registros típicos de PMI deben contener lo siguiente:</p>
        <ul>
            <li>referencia a los procedimientos de PMI utilizados;</li>
            <li>fecha de las pruebas;</li>
            <li>número de identificación o número de serie del instrumento de prueba, cuando sea aplicable;</li>
            <li>nombre de cada persona que realiza las pruebas, con identificación de su respectivo empleador;</li>
            <li>resultados de las pruebas;</li>
            <li>base y acción para resolver y documentar no conformidades de PMI, incluyendo aquellas que han quedado en servicio;</li>
            <li>documentación de los criterios utilizados para la priorización de equipos o sistemas y el alcance de PMI realizado.</li>
        </ul>
        <p>La información listada debe reportarse de tal manera que sea rastreable hasta el punto de instalación.</p>
        <p>Alternativamente, el propietario/operador puede optar por incluir esto dentro del procedimiento de verificación de materiales por escrito. Cuando se incluye en el procedimiento de verificación de materiales por escrito del propietario/operador, la fecha y número de edición del procedimiento escrito deben documentarse en el registro de prueba.</p>
    </div>`
});