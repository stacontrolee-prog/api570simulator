// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 1 para API 574
registerChapter('API574', {
    id: 1,
    title: "Scope",
    titleEs: "Alcance",
    content: `<h2>Inspection Practices for Piping System Components</h2>
    <h3>1 Scope</h3>
    <div class="subsection">
        <p>This recommended practice supplements API 570 by providing piping inspectors with information that can improve their skills and increase their basic knowledge of inspection practices. This recommended practice describes inspection practices for piping, tubing, valves (other than control valves), and fittings used in petroleum refineries and chemical plants. Common piping components, valve types, pipe joining methods, inspection planning processes, inspection intervals and techniques, and types of records are described to aid the inspectors in fulfilling their role in implementing API 570. This publication does not cover the inspection of specialty items, including instrumentation, furnace tubulars, and control valves.</p>
    </div>`,
    contentEs: `<h2>Prácticas de Inspección para Componentes de Sistemas de Tuberías</h2>
    <h3>1 Alcance</h3>
    <div class="subsection">
        <p>Esta práctica recomendada complementa el API 570 al proporcionar a los inspectores de tuberías información que puede mejorar sus habilidades y aumentar sus conocimientos básicos sobre prácticas de inspección. Esta práctica recomendada describe las prácticas de inspección para tuberías, tubos, válvulas (excepto válvulas de control) y accesorios utilizados en refinerías de petróleo y plantas químicas. Se describen los componentes comunes de tuberías, tipos de válvulas, métodos de unión de tuberías, procesos de planificación de inspección, intervalos y técnicas de inspección, y tipos de registros para ayudar a los inspectores a cumplir su función en la implementación del API 570. Esta publicación no cubre la inspección de elementos especiales, incluyendo instrumentación, tubulares de hornos y válvulas de control.</p>
    </div>`
});