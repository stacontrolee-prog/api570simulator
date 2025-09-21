// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 2 para API 577
registerChapter('API577', {
    id: 2,
    title: "Normative References",
    titleEs: "Referencias Normativas",
    content: `<h2>Normative References</h2>
    <h3>2 Normative References</h3>
    <div class="subsection">
        <p>The following referenced documents are indispensable for the application of this document. For dated references, only the edition cited applies. For undated references, the latest edition of the referenced document (including any amendments) applies.</p>
        <ul>
            <li>API 510, Pressure Vessel Inspection Code: Maintenance, Inspection, Rating, Repair, and Alteration</li>
            <li>API 570, Piping Inspection Code: Inspection, Repair, Alteration, and Rerating of In-Service Piping Systems</li>
            <li>API Recommended Practice 571, Damage Mechanisms Affecting Fixed Equipment in the Refining Industry</li>
            <li>API Recommended Practice 574, Inspection Practices for Piping System Components</li>
            <li>API Recommended Practice 578, Material Verification Program for New and Existing Alloy Piping Systems</li>
            <li>API Recommended Practice 582, Recommended Practice and Supplementary Welding Guidelines for the Chemical, Oil, and Gas Industries</li>
            <li>API Recommended Practice 2201, Procedures for Welding or Hot Tapping on Equipment in Service</li>
            <li>ASME Boiler and Pressure Vessel Code<sup>1</sup>
                <ul>
                    <li>Section VIII, Rules for Construction of Pressure Vessels</li>
                    <li>Section IX, Qualification Standard for Welding and Brazing Procedures, Welders, Brazers, and Welding and Brazing Operators</li>
                    <li>Section XI, Rules for Inservice Inspection of Nuclear Power Plant Components</li>
                </ul>
            </li>
            <li>ASME B31, Code for Pressure Piping
                <ul>
                    <li>B31.1, Power Piping</li>
                    <li>B31.3, Process Piping</li>
                    <li>B31.4, Liquid Transportation Systems for Hydrocarbons, Liquid Petroleum Gas, Anhydrous Ammonia and Alcohols</li>
                    <li>B31.8, Gas Transmission and Distribution Piping Systems</li>
                </ul>
            </li>
            <li>ASME PCC-2, Repair of Pressure Equipment and Piping</li>
            <li>ASNT Central Certification Program CP-189<sup>2</sup>, Standard for Qualification and Certification of Nondestructive Testing Personnel</li>
            <li>ASNT Central Certification Program SNT-TC-1A, Personnel Qualification and Certification in Nondestructive Testing</li>
            <li>ASTM A833<sup>3</sup>, Standard Test Method for Indentation Hardness of Metallic Materials by Comparison Hardness Testers</li>
            <li>ASTM A956, Standard Test Method for Leeb Hardness Testing of Steel Products</li>
            <li>ASTM A1038, Standard Practice for Portable Hardness Testing by the Ultrasonic Contact Impedance Method</li>
            <li>ASTM E94, Standard Guide for Radiographic Examination</li>
            <li>ASTM E1316, Standard Terminology for Nondestructive Examinations</li>
            <li>AWS A3.0M/A3.0:2010<sup>4</sup>, Standard Welding Terms and Definitions</li>
            <li>AWS A5.XX, Series of Filler Metal Specifications</li>
            <li>ISO 9712<sup>5</sup>, Non-destructive testing—Qualification and certification of NDT personnel</li>
            <li>NACE SP0472<sup>6</sup>, Methods and Controls to Prevent In-Service Environmental Cracking of Carbon Steel Weldments in Corrosive Petroleum Refining Environments</li>
            <li>WRC Bulletin 342<sup>7</sup>, Stainless Steel Weld Metal: Prediction of Ferrite Content</li>
        </ul>
        
    </div>`,
    contentEs: `<h2>Referencias Normativas</h2>
    <h3>2 Referencias Normativas</h3>
    <div class="subsection">
        <p>Los siguientes documentos de referencia son indispensables para la aplicación de este documento. Para las referencias fechadas, solo se aplica la edición citada. Para las referencias sin fecha, se aplica la última edición del documento de referencia (incluyendo cualquier enmienda).</p>
        <ul>
            <li>API 510, Código de Inspección de Recipientes a Presión: Mantenimiento, Inspección, Clasificación, Reparación y Alteración</li>
            <li>API 570, Código de Inspección de Tuberías: Inspección, Reparación, Alteración y Reclasificación de Sistemas de Tuberías en Servicio</li>
            <li>API Práctica Recomendada 571, Mecanismos de Daño que Afectan al Equipo Fijo en la Industria de Refinación</li>
            <li>API Práctica Recomendada 574, Prácticas de Inspección para Componentes de Sistemas de Tuberías</li>
            <li>API Práctica Recomendada 578, Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes</li>
            <li>API Práctica Recomendada 582, Práctica Recomendada y Guías de Soldadura Suplementarias para las Industrias Química, del Petróleo y del Gas</li>
            <li>API Práctica Recomendada 2201, Procedimientos para Soldadura o Conexión en Caliente en Equipo en Servicio</li>
            <li>Código de Calderas y Recipientes a Presión ASME<sup>1</sup>
                <ul>
                    <li>Sección VIII, Reglas para la Construcción de Recipientes a Presión</li>
                    <li>Sección IX, Norma de Calificación para Procedimientos de Soldadura y Brazing, Soldadores, Brazeros y Operadores de Soldadura y Brazing</li>
                    <li>Sección XI, Reglas para la Inspección en Servicio de Componentes de Centrales Nucleares</li>
                </ul>
            </li>
            <li>ASME B31, Código para Tuberías a Presión
                <ul>
                    <li>B31.1, Tuberías de Energía</li>
                    <li>B31.3, Tuberías de Proceso</li>
                    <li>B31.4, Sistemas de Transporte de Líquidos para Hidrocarburos, Gas Licuado de Petróleo, Amoniaco Anhidro y Alcoholes</li>
                    <li>B31.8, Sistemas de Tuberías de Transmisión y Distribución de Gas</li>
                </ul>
            </li>
            <li>ASME PCC-2, Reparación de Equipos y Tuberías a Presión</li>
            <li>Programa de Certificación Central ASNT CP-189<sup>2</sup>, Norma para la Calificación y Certificación de Personal de Ensayos No Destructivos</li>
            <li>Programa de Certificación Central ASNT SNT-TC-1A, Calificación y Certificación de Personal en Ensayos No Destructivos</li>
            <li>ASTM A833<sup>3</sup>, Método de Ensayo Normalizado para la Dureza por Indentación de Materiales Metálicos mediante Comparadores de Dureza</li>
            <li>ASTM A956, Método de Ensayo Normalizado para Ensayos de Dureza Leeb en Productos de Acero</li>
            <li>ASTM A1038, Práctica Normalizada para Ensayos de Dureza Portátiles por el Método de Impedancia de Contacto Ultrasónico</li>
            <li>ASTM E94, Guía Normalizada para Examen Radiográfico</li>
            <li>ASTM E1316, Terminología Normalizada para Ensayos No Destructivos</li>
            <li>AWS A3.0M/A3.0:2010<sup>4</sup>, Términos y Definiciones Normalizadas de Soldadura</li>
            <li>AWS A5.XX, Serie de Especificaciones de Metales de Aporte</li>
            <li>ISO 9712<sup>5</sup>, Ensayos no destructivos—Calificación y certificación de personal END</li>
            <li>NACE SP0472<sup>6</sup>, Métodos y Controles para Prevenir el Agrietamiento Ambiental en Servicio de Soldaduras de Acero al Carbone en Ambientes Corrosivos de Refinerías de Petróleo</li>
            <li>Boletín WRC 342<sup>7</sup>, Metal de Soldadura de Acero Inoxidable: Predicción del Contenido de Ferrita</li>
        </ul>
     
    </div>`
});