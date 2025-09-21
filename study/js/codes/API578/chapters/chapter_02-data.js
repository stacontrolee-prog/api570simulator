// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 2
registerChapter('API578', {
    id: 2,
    title: "Normative References",
    titleEs: "Referencias Normativas",
    content: `<h3>2 Normative References</h3>
    <div class="subsection">
        <p>The following documents are referred to in the text in such a way that some or all of their content constitutes requirements of this document. For dated references, only the edition cited applies. For undated references, the latest edition of the referenced document (including any addenda/errata) applies.</p>
        <ul>
            <li>API Recommended Practice 571, Damage Mechanisms Affecting Fixed Equipment in the Refining Industry</li>
            <li>API Recommended Practice 580, Risk-based Inspection</li>
            <li>API Recommended Practice 751, Safe Operation of Hydrofluoric Acid Alkylation Units</li>
            <li>API Recommended Practice 939-C, Guidelines for Avoiding Sulfidation (Sulfidic) Corrosion Failures in Oil Refineries</li>
            <li>ASME<sup>1</sup> Boiler and Pressure Vessel Code (BPVC), Section II: Materials (Part A: Ferrous Material Specifications; Part B: Nonferrous Material Specifications; Part C: Specifications for Welding Rods, Electrodes, and Filler Metals; Part D: Properties)</li>
        </ul>
        <p><small><sup>1</sup>ASME International, 3 Park Avenue, New York, NY 10016, www.asme.org.</small></p>
    </div>`,
    contentEs: `<h3>2 Referencias Normativas</h3>
    <div class="subsection">
        <p>Los siguientes documentos se mencionan en el texto de tal manera que parte o todo su contenido constituye requisitos de este documento. Para referencias fechadas, solo se aplica la edición citada. Para referencias no fechadas, se aplica la última edición del documento referenciado (incluyendo cualquier addenda/errata).</p>
        <ul>
            <li>API Recommended Practice 571, Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación</li>
            <li>API Recommended Practice 580, Inspección Basada en Riesgos</li>
            <li>API Recommended Practice 751, Operación Segura de Unidades de Alquilación con Ácido Fluorhídrico</li>
            <li>API Recommended Practice 939-C, Directrices para Evitar Fallos por Corrosión por Sulfuración (Sulfídica) en Refinerías de Petróleo</li>
            <li>ASME<sup>1</sup> Código de Calderas y Recipientes a Presión (BPVC), Sección II: Materiales (Parte A: Especificaciones de Materiales Ferrosos; Parte B: Especificaciones de Materiales No Ferrosos; Parte C: Especificaciones para Varillas de Soldadura, Electrodos y Metales de Aporte; Parte D: Propiedades)</li>
        </ul>
        <p><small><sup>1</sup>ASME International, 3 Park Avenue, New York, NY 10016, www.asme.org.</small></p>
    </div>`
});