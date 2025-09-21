// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 7
registerChapter('API578', {
    id: 7,
    title: "Evaluation of Testing Results",
    titleEs: "Evaluación de Resultados de Pruebas",
    content: `<h3>7 Evaluation of Testing Results</h3>
    <div class="subsection">
        <p>The owner/operator may elect any one of the following methods of material acceptance.</p>
        <ul>
            <li>Materials can be confirmed to contain the nominal amounts of alloying elements specified in the relevant materials specification (e.g. ASME BPVC Section II or ASTM specifications).</li>
            <li>Materials can be classified through a qualitative sorting technique (see 6.4) to establish the conformance with the intended material.</li>
            <li>When PMI indicates that alloying elements are outside the ranges indicated in the material specification, the owner/operator may still choose to allow the use of the tested materials in situations where a person knowledgeable of the appropriate damage mechanisms confirms that the material will perform satisfactorily in the service.</li>
            <li>If testing using one of the portable or qualitative analysis methods leads to the potential rejection of a component, a more accurate analysis may be used to determine component acceptance (see Section 6).</li>
            <li>When the test results indicate an unacceptable material, then the material involved is rejected and replaced with the correct material.</li>
            <li>If any one of a representative sample is rejected, all items of that inspection lot should be considered suspect. A more extensive inspection of the remaining lot should be considered.</li>
        </ul>
    </div>`,
    contentEs: `<h3>7 Evaluación de Resultados de Pruebas</h3>
    <div class="subsection">
        <p>El propietario/operador puede elegir cualquiera de los siguientes métodos de aceptación de materiales.</p>
        <ul>
            <li>Los materiales pueden confirmarse para que contengan las cantidades nominales de elementos de aleación especificados en la especificación de materiales relevante (ej. Sección II del ASME BPVC o especificaciones ASTM).</li>
            <li>Los materiales pueden clasificarse mediante una técnica de clasificación cualitativa (ver 6.4) para establecer la conformidad con el material previsto.</li>
            <li>Cuando el PMI indica que los elementos de aleación están fuera de los rangos indicados en la especificación del material, el propietario/operador aún puede elegir permitir el uso de los materiales probados en situaciones donde una persona con conocimientos de los mecanismos de daño apropiados confirme que el material se desempeñará satisfactoriamente en el servicio.</li>
            <li>Si la prueba utilizando uno de los métodos de análisis portátiles o cualitativos lleva al rechazo potencial de un componente, puede utilizarse un análisis más preciso para determinar la aceptación del componente (ver Sección 6).</li>
            <li>Cuando los resultados de la prueba indican un material inaceptable, entonces el material involucrado es rechazado y reemplazado con el material correcto.</li>
            <li>Si alguno de una muestra representativa es rechazado, todos los artículos de ese lote de inspección deben considerarse sospechosos. Debe considerarse una inspección más extensa del lote restante.</li>
        </ul>
    </div>`
});