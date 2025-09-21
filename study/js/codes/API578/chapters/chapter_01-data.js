// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 1
registerChapter('API578', {
    id: 1,
    title: "Scope",
    titleEs: "Alcance",
    content: `<h3>1 Scope</h3>
    <div class="subsection">
        <h4>1.1 Purpose</h4>
        <p>The purpose of this document is to provide recommended practices for an owner/operator to develop and implement a material verification program (MVP) as part of an asset integrity program. The MVP uses positive material identification (PMI) and other testing and administrative methods to verify that the nominal composition of an asset, an asset component, or weldment (or any other tested item) is consistent with the selected or specified construction materials.</p>
        <p>A well-designed and well-implemented MVP is an important management system used to minimize the potential for release of hazardous substances due to nonconforming materials of construction.</p>
    </div>
    <div class="subsection">
        <h4>1.2 About This Document</h4>
        <p>This recommended practice addresses MVPs involving ferrous and nonferrous alloys during the construction, installation, maintenance, and inspection of new and existing process equipment. It applies to metallic materials purchased for use either directly by the owner/operator or indirectly, through distributors, fabricators, or contractors, and includes the supply, fabrication, and installation of these materials.</p>
        <p>This recommended practice is applicable to all refining and petrochemical industries and may be applied in other industries and or businesses at the discretion of the owner/operator. It is intended to be applied by any owner/operator wishing to verify and/or validate that the materials of construction received, fabricated, and/or installed are in accordance with purchase documents and/or company specification(s).</p>
    </div>
    `,
    contentEs: `<h3>1 Alcance</h3>
    <div class="subsection">
        <h4>1.1 Propósito</h4>
        <p>El propósito de este documento es proporcionar prácticas recomendadas para que un propietario-operador desarrolle e implemente un programa de verificación de materiales (MVP) como parte de un programa de integridad de activos. El MVP utiliza identificación positiva de materiales (PMI) y otros métodos de prueba y administrativos para verificar que la composición nominal de un activo, un componente del activo o una soldadura (o cualquier otro elemento probado) sea consistente con los materiales de construcción seleccionados o especificados.</p>
        <p>Un MVP bien diseñado e implementado es un sistema de gestión importante utilizado para minimizar el potencial de liberación de sustancias peligrosas debido a materiales de construcción no conformes.</p>
    </div>
    <div class="subsection">
        <h4>1.2 Acerca de Este Documento</h4>
        <p>Esta práctica recomendada aborda los MVP que involucran aleaciones ferrosas y no ferrosas durante la construcción, instalación, mantenimiento e inspección de equipos de proceso nuevos y existentes. Se aplica a materiales metálicos comprados para su uso ya sea directamente por el propietario-operador o indirectamente, a través de distribuidores, fabricantes o contratistas, e incluye el suministro, fabricación e instalación de estos materiales.</p>
        <p>Esta práctica recomendada es aplicable a todas las industrias de refinación y petroquímica y puede aplicarse en otras industrias y/o negocios a discreción del propietario-operador. Está destinada a ser aplicada por cualquier propietario-operador que desee verificar y/o validar que los materiales de construcción recibidos, fabricados y/o instalados estén de acuerdo con los documentos de compra y/o especificaciones de la empresa.</p>
    </div>
    `
});