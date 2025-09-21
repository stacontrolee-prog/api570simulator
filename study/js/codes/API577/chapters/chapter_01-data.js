// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 1 para API 577
registerChapter('API577', {
    id: 1,
    title: "Scope",
    titleEs: "Alcance",
    content: `<h2>Welding Processes, Inspection, and Metallurgy</h2>
    <h3>1 Scope</h3>
    <div class="subsection">
        <p>This recommended practice (RP) provides guidance to the API authorized inspector on welding inspection as encountered with fabrication and repair of refinery and chemical plant equipment and piping, pipelines, and other related industries. This RP includes descriptions of common welding processes, welding procedures, welder qualifications, metallurgical effects from welding, and inspection techniques to aid the inspector in fulfilling their role implementing API 510, API 570, API 653, and API 582. The level of learning and training obtained from this document is not a replacement for the training and experience required to be a certified welding inspector under one of the established welding certification programs, such as the American Welding Society (AWS) Certified Welding Inspector (CWI), or Canadian and European equivalent schemes such as CWB, CSWIP, PCN, or EFW.</p>
        <p>This RP does not require all welds to be inspected, nor does it require welds to be inspected to specific techniques and extent. Welds selected for inspection, and the appropriate inspection techniques, should be determined by the welding inspectors, engineers, or other responsible personnel using the applicable code or standard. The importance, difficulty, and problems that could be encountered during welding should be considered by all involved. A welding engineer should be consulted on any critical, specialized, or complex welding issues.</p>
    </div>`,
    contentEs: `<h2>Procesos de Soldadura, Inspección y Metalurgia</h2>
    <h3>1 Alcance</h3>
    <div class="subsection">
        <p>Esta práctica recomendada (RP) proporciona orientación al inspector autorizado por API sobre la inspección de soldadura en lo que respecta a la fabricación y reparación de equipos y tuberías de refinerías y plantas químicas, tuberías y otras industrias relacionadas. Esta RP incluye descripciones de procesos de soldadura comunes, procedimientos de soldadura, calificaciones de soldadores, efectos metalúrgicos de la soldadura y técnicas de inspección para ayudar al inspector a cumplir su función implementando API 510, API 570, API 653 y API 582. El nivel de aprendizaje y capacitación obtenido de este documento no reemplaza la capacitación y la experiencia requeridas para ser un inspector de soldadura certificado bajo uno de los programas de certificación de soldadura establecidos, como el Inspector de Soldadura Certificado (CWI) de la Sociedad Americana de Soldadura (AWS), o esquemas equivalentes canadienses y europeos como CWB, CSWIP, PCN o EFW.</p>
        <p>Esta RP no requiere que todas las soldaduras sean inspeccionadas, ni exige que las soldaduras sean inspeccionadas con técnicas y alcance específicos. Las soldaduras seleccionadas para inspección y las técnicas de inspección apropiadas deben ser determinadas por los inspectores de soldadura, ingenieros u otro personal responsable utilizando el código o estándar aplicable. La importancia, dificultad y problemas que podrían encontrarse durante la soldadura deben ser considerados por todos los involucrados. Se debe consultar a un ingeniero de soldadura sobre cualquier cuestión crítica, especializada o compleja de soldadura.</p>
    </div>`
});