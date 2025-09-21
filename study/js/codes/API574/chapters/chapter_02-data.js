// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 2
registerChapter('API574', {
    id: 2,
    title: "Normative References",
    titleEs: "Referencias Normativas",
    content: `<h3>2 Normative References</h3>
    <div class="subsection">
        <p>The following documents are referred to in the text in such a way that some or all their content constitutes requirements of this document. For dated references, only the edition cited applies. For undated references, the latest edition of the referenced document, including any addenda, applies.</p>
        <ul>
            <li>API 570, Piping Inspection Code: In-service Inspection, Rating, Repair, and Alteration of Piping Systems</li>
            <li>API Recommended Practice 571, Damage Mechanisms Affecting Fixed Equipment in the Refining Industry</li>
            <li>API Recommended Practice 578, Material Verification Program for New and Existing Assets</li>
            <li>API 579-1/ASME FFS-1<sup>1</sup>, Fitness-For-Service</li>
            <li>API Recommended Practice 580, Elements of a Risk-based Inspection Program</li>
            <li>ASME B16.20, Metallic Gaskets for Pipe Flanges</li>
            <li>ASME B16.25, Buttwelding Ends</li>
            <li>ASME B16.34, Valves—Flanged, Threaded, and Welding End</li>
            <li>ASME B31.3, Process Piping</li>
            <li>ASME Boiler and Pressure Vessel Code (BPVC), Section V: Nondestructive Examination</li>
            <li>ASTM G57<sup>2</sup>, Standard Test Method for Measurement of Soil Resistivity Using the Wenner Four-Electrode Method</li>
        </ul>
    </div>`,
    contentEs: `<h3>2 Referencias Normativas</h3>
    <div class="subsection">
        <p>Los siguientes documentos son referenciados en el texto de tal manera que todo o parte de su contenido constituye requisitos de este documento. Para referencias fechadas, solo se aplica la edición citada. Para referencias no fechadas, se aplica la última edición del documento referenciado, incluyendo cualquier addenda.</p>
        <ul>
            <li>API 570, Código de Inspección de Tuberías: Inspección en Servicio, Clasificación, Reparación y Alteración de Sistemas de Tuberías</li>
            <li>Práctica Recomendada API 571, Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación</li>
            <li>Práctica Recomendada API 578, Programa de Verificación de Materiales para Activos Nuevos y Existentes</li>
            <li>API 579-1/ASME FFS-1<sup>1</sup>, Aptitud para el Servicio</li>
            <li>Práctica Recomendada API 580, Elementos de un Programa de Inspección Basado en Riesgos</li>
            <li>ASME B16.20, Juntas Metálicas para Bridas de Tubería</li>
            <li>ASME B16.25, Extremos para Soldadura a Tope</li>
            <li>ASME B16.34, Válvulas—Extremos Bridados, Roscados y para Soldadura</li>
            <li>ASME B31.3, Tuberías de Proceso</li>
            <li>Código de Calderas y Recipientes a Presión ASME (BPVC), Sección V: Ensayos No Destructivos</li>
            <li>ASTM G57<sup>2</sup>, Método de Ensayo Estándar para la Medición de la Resistividad del Suelo Utilizando el Método de Cuatro Electrodos de Wenner</li>
        </ul>
    </div>`
});