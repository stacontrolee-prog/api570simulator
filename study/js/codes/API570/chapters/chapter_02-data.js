if (!getCode('API570')) {
    console.error('El código API570 no está registrado. Registrándolo ahora...');
    registerCode('API570', {
        title: "API 570 Piping Inspection Code",
        titleEs: "Código de Inspección de Tuberías API 570"
    });
}

// Registrar el capítulo 2
registerChapter('API570', {
    id: 2,
    title: "Normative References",
    titleEs: "Referencias Normativas",
    content: `<h2>2 Normative References</h3>
    <p>The following documents are referred to in the text in such a way that some or all their content constitutes requirements of this document. For dated references, only the edition cited applies. For undated references, the latest edition of the referenced document, including any addenda, applies.</p>
    <ul>
        <li>API Recommended Practice 571, Damage Mechanisms Affecting Fixed Equipment in the Refining Industry</li>
        <li>API Recommended Practice 574, Inspection Practices for Piping System Components</li>
        <li>API Recommended Practice 576, Inspection of Pressure-relieving Devices</li>
        <li>API Recommended Practice 578, Material Verification Program for New and Existing Assets</li>
        <li>API Recommended Practice 577, Welding Processes, Inspection, and Metallurgy</li>
        <li>API Standard 579-1/ASME FFS-1, Fitness-For-Service</li>
        <li>API Recommended Practice 580, Elements of a Risk-based Inspection Program</li>
        <li>API Recommended Practice 583, Corrosion Under Insulation and Fireproofing</li>
        <li>API Recommended Practice 584, Integrity Operating Windows</li>
        <li>API Recommended Practice 585, Pressure Equipment Integrity Incident Investigation</li>
        <li>API Standard 598, Valve Inspection and Testing</li>
        <li>API Recommended Practice 751, Safe Operation of Hydrofluoric Acid Alkylation Units</li>
        <li>API Recommended Practice 939-C, Guidelines for Avoiding Sulfidation (Sulfidic) Corrosion Failures in Oil Refineries</li>
        <li>API Recommended Practice 2201, Safe Hot Tapping Practices in the Petroleum and Petrochemical Industries</li>
        <li>ASME B16.34, Valves—Flanged, Threaded, and Welding End</li>
        <li>ASME B31.3, Process Piping</li>
        <li>ASME Boiler and Pressure Vessel Code, Section V: Nondestructive Examination</li>
        <li>ASME Boiler and Pressure Vessel Code, Section IX: Welding, Brazing, and Fusing Qualifications</li>
        <li>ASME PCC-1, Guidelines for Pressure Boundary Bolted Flange Joint Assembly</li>
        <li>ASME PCC-2, Repair of Pressure Equipment and Piping</li>
        <li>ASNT CP-189, Standard for Qualification and Certification of Nondestructive Testing Personnel</li>
        <li>ASNT SNT-TC-1A, Personnel Qualification and Certification in Nondestructive Testing</li>
        <li>NACE SP0472, Methods and Controls to Prevent In-Service Environmental Cracking of Carbon Steel Weldments in Corrosive Petroleum Refining Environments</li>
        <li>NACE MR0103, Petroleum, Petrochemical and Natural Gas Industries—Metallic Materials Resistant to Sulfide Stress Cracking in Corrosive Petroleum Refining Environments</li>
        <li>NFPA 704, Standard System for the Identification of the Hazards of Materials for Emergency Response</li>
    </ul>`,
    contentEs: `<h3>2 Referencias Normativas</h3>
    <p>Los siguientes documentos son mencionados en el texto de tal manera que parte o todo su contenido constituye requisitos de este documento. Para referencias fechadas, solo se aplica la edición citada. Para referencias no fechadas, se aplica la última edición del documento referenciado, incluyendo cualquier adenda.</p>
    <ul>
        <li>API Recommended Practice 571, Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación</li>
        <li>API Recommended Practice 574, Prácticas de Inspección para Componentes de Sistemas de Tuberías</li>
        <li>API Recommended Practice 576, Inspección de Dispositivos de Alivio de Presión</li>
        <li>API Recommended Practice 578, Programa de Verificación de Materiales para Activos Nuevos y Existentes</li>
        <li>API Recommended Practice 577, Procesos de Soldadura, Inspección y Metalurgia</li>
        <li>API Standard 579-1/ASME FFS-1, Aptitud para el Servicio (Fitness-For-Service)</li>
        <li>API Recommended Practice 580, Elementos de un Programa de Inspección Basada en Riesgos</li>
        <li>API Recommended Practice 583, Corrosión Bajo Aislamiento y Protección contra Incendios</li>
        <li>API Recommended Practice 584, Ventanas Operativas de Integridad</li>
        <li>API Recommended Practice 585, Investigación de Incidentes de Integridad de Equipos a Presión</li>
        <li>API Standard 598, Inspección y Prueba de Válvulas</li>
        <li>API Recommended Practice 751, Operación Segura de Unidades de Alquilación con Ácido Fluorhídrico</li>
        <li>API Recommended Practice 939-C, Directrices para Evitar Fallos por Corrosión de Sulfuración (Sulfídica) en Refinerías de Petróleo</li>
        <li>API Recommended Practice 2201, Prácticas Seguras de Tapping en Caliente en las Industrias del Petróleo y Petroquímica</li>
        <li>ASME B16.34, Válvulas—Extremos Bridados, Roscados y de Soldadura</li>
        <li>ASME B31.3, Tuberías de Proceso</li>
        <li>ASME Boiler and Pressure Vessel Code, Sección V: Ensayos No Destructivos</li>
        <li>ASME Boiler and Pressure Vessel Code, Sección IX: Calificaciones de Soldadura, Brazing y Fusión</li>
        <li>ASME PCC-1, Directrices para el Ensamblaje de Juntas Bridadas Atornilladas de Límite de Presión</li>
        <li>ASME PCC-2, Reparación de Equipos a Presión y Tuberías</li>
        <li>ASNT CP-189, Norma para la Calificación y Certificación de Personal de Ensayos No Destructivos</li>
        <li>ASNT SNT-TC-1A, Calificación y Certificación de Personal en Ensayos No Destructivos</li>
        <li>NACE SP0472, Métodos y Controles para Prevenir el Agrietamiento Ambiental en Servicio de Soldaduras de Acero al Carbone en Ambientes Corrosivos de Refinerías de Petróleo</li>
        <li>NACE MR0103, Industrias del Petróleo, Petroquímica y Gas Natural—Materiales Metálicos Resistentes al Agrietamiento por Esfuerzos de Sulfuro en Ambientes Corrosivos de Refinerías de Petróleo</li>
        <li>NFPA 704, Sistema Estándar para la Identificación de los Peligros de los Materiales para Respuesta de Emergencia</li>
    </ul>`
});