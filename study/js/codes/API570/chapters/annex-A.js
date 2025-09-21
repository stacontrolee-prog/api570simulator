if (!getCode('API570')) {
    console.error('El código API570 no está registrado. Registrándolo ahora...');
    registerCode('API570', {
        title: "API 570 Piping Inspection Code",
        titleEs: "Código de Inspección de Tuberías API 570"
    });
}

// Registrar el anexo A
registerChapter('API570', {
    id: "A",
    title: "Inspector Certification",
    titleEs: "Certificación de Inspectores",
    content: `<h2>Annex A (normative)</h2>
    <h2>Inspector Certification</h2>
    <h3>A.1 Examination</h3>
    <p>A written examination to certify inspectors within the scope of API 570 shall be based on the current API 570 Inspector Certification Exam Body of Knowledge as published by API.</p>
    <p>To become an authorized API piping inspector, candidates must pass the examination.</p>
    
    <h3>A.2 Certification</h3>
    <p>To qualify for the certification examination, the applicant's education and experience, when combined, shall be equal to at least one of the following:</p>
    <ul>
        <li>a Bachelor of Science degree in engineering or technology, or 2 years of military service in a technical role (dishonorable discharge disqualifies credit), plus 1 year of experience in supervision of inspection activities or performance of inspection activities as described in API 570;</li>
        <li>a 2-year degree or certificate in engineering or technology, or 3 or more years of military service in a technical role (dishonorable discharge disqualifies credit), plus 2 years of experience in the design, fabrication, repair, inspection, or operation of piping systems, of which 1 year shall be in supervision of inspection activities or performance of inspection activities as described in API 570;</li>
        <li>a high school diploma or equivalent, plus 3 years of experience in the design, fabrication, repair, inspection, or operation of piping systems, of which 1 year shall be in supervision of inspection activities or performance of inspection activities as described in API 570;</li>
        <li>a minimum of 5 years of experience in the design, fabrication, repair, inspection, or operation of piping systems, of which 1 year shall be in supervision of inspection activities or performance of inspection activities as described in API 570.</li>
    </ul>
    
    <h3>A.3 Recertification</h3>
    <div class="subsection">
        <h4>A.3.1</h4>
        <p>Recertification is required 3 years from the date of issuance of the API 570 authorized piping inspector certification. Inspectors who are recertifying shall meet all recertification requirements as defined below. Recertification by written examination will be required for authorized piping inspectors who have not been actively engaged as authorized piping inspectors within the most recent 3-year certification period or fail to meet the recertification requirements prior to the end of their expiration grace period. Exams will be in accordance with all provisions contained in API 570.</p>
    </div>
    <div class="subsection">
        <h4>A.3.2</h4>
        <p>"Actively engaged as an authorized piping inspector" shall be defined as a minimum of 20 % of time spent performing inspection activities or supervision of inspection activities, or engineering support of inspection activities, as described in the API 570, over the most recent 3-year certification period.</p>
        <p>NOTE Inspection activities common to other API inspection documents (NDE, recordkeeping, review, of welding in its 3-year recertification requirements for API 570. The Individual Certification Programs will have a documents, etc.) may be considered here.</p>
    </div>
    <div class="subsection">
        <h4>A.3.3</h4>
        <p>A.3.3 API's Individual Certification Programs include continuing professional development (CPD) hours in their 3-year recertification requirements for API 570. The Individual Certification Programs will have a phased implementation of the CPD hour requirement. The full CPD requirements of 24 CPDs will be implemented for those expiring on or after January 1, 2025.</p>
    </div>
    <div class="subsection">
        <h4>A.3.4</h4>
        <p>Once every other recertification period (every 6 years), actively engaged inspectors shall demonstrate knowledge of revisions to API 570 and other relevant API documents that encompass the body of knowledge. These documents are identified in the relevant Web Quiz Publication Effectivity sheet that were instituted during the previous 6 years or are still a relevant edition. This requirement shall be effective 6 years from the inspector's initial certification date.</p>
    </div>`,
    contentEs: `<h2>Anexo A (normativo)</h2>
    <h2>Certificación de Inspectores</h2>
    <h3>A.1 Examen</h3>
    <p>Un examen escrito para certificar inspectores dentro del alcance de API 570 se basará en el Cuerpo de Conocimientos del Examen de Certificación de Inspector API 570 actual publicado por API.</p>
    <p>Para convertirse en un inspector autorizado de tuberías API, los candidatos deben aprobar el examen.</p>
    
    <h3>A.2 Certificación</h3>
    <p>Para calificar para el examen de certificación, la educación y experiencia del solicitante, cuando se combinan, deberán ser iguales a al menos uno de los siguientes:</p>
    <ul>
        <li>un título de Licenciatura en Ciencias en ingeniería o tecnología, o 2 años de servicio militar en un rol técnico (la deshonrosa descalifica el crédito), más 1 año de experiencia en supervisión de actividades de inspección o realización de actividades de inspección como se describe en API 570;</li>
        <li>un título de 2 años o certificado en ingeniería o tecnología, o 3 o más años de servicio militar en un rol técnico (la deshonrosa descalifica el crédito), más 2 años de experiencia en el diseño, fabricación, reparación, inspección o operación de sistemas de tuberías, de los cuales 1 año deberá ser en supervisión de actividades de inspección o realización de actividades de inspección como se describe en API 570;</li>
        <li>un diploma de escuela secundaria o equivalente, más 3 años de experiencia en el diseño, fabricación, reparación, inspección o operación de sistemas de tuberías, de los cuales 1 año deberá ser en supervisión de actividades de inspección o realización de actividades de inspección como se describe en API 570;</li>
        <li>un mínimo de 5 años de experiencia en el diseño, fabricación, reparación, inspección o operación de sistemas de tuberías, de los cuales 1 año deberá ser en supervisión de actividades de inspección o realización de actividades de inspección como se describe en API 570.</li>
    </ul>
    
    <h3>A.3 Recertificación</h3>
    <div class="subsection">
        <h4>A.3.1</h4>
        <p>Se requiere recertificación 3 años a partir de la fecha de emisión de la certificación de inspector autorizado de tuberías API 570. Los inspectores que se recertifican deberán cumplir con todos los requisitos de recertificación como se define a continuación. Se requerirá recertificación mediante examen escrito para los inspectores autorizados de tuberías que no han estado activamente comprometidos como inspectores autorizados de tuberías dentro del período de certificación más reciente de 3 años o no cumplan con los requisitos de recertificación antes del final de su período de gracia de expiración. Los exámenes estarán de acuerdo con todas las disposiciones contenidas en API 570.</p>
    </div>
    <div class="subsection">
        <h4>A.3.2</h4>
        <p>"Activamente comprometido como inspector autorizado de tuberías" se definirá como un mínimo del 20 % del tiempo dedicado a realizar actividades de inspección o supervisión de actividades de inspección, o apoyo de ingeniería a actividades de inspección, como se describe en API 570, durante el período de certificación más reciente de 3 años.</p>
        <p>NOTA Las actividades de inspección comunes a otros documentos de inspección API (NDE, mantenimiento de registros, revisión de soldadura en sus requisitos de recertificación de 3 años para API 570. Los Programas de Certificación Individual tendrán documentos, etc.) pueden considerarse aquí.</p>
    </div>
    <div class="subsection">
        <h4>A.3.3</h4>
        <p>A.3.3 Los Programas de Certificación Individual de API incluyen horas de desarrollo profesional continuo (CPD) en sus requisitos de recertificación de 3 años para API 570. Los Programas de Certificación Individual tendrán una implementación escalonada del requisito de horas CPD. Los requisitos completos de CPD de 24 CPD se implementarán para aquellos que expiren el 1 de enero de 2025 o después.</p>
    </div>
    <div class="subsection">
        <h4>A.3.4</h4>
        <p>Una vez cada otro período de recertificación (cada 6 años), los inspectores activamente comprometidos deberán demostrar conocimiento de las revisiones a API 570 y otros documentos API relevantes que abarcan el cuerpo de conocimientos. Estos documentos se identifican en la hoja de efectividad de publicación del cuestionario web relevante que se instituyeron durante los 6 años anteriores o todavía son una edición relevante. Este requisito será efectivo 6 años a partir de la fecha de certificación inicial del inspector.</p>
    </div>`
});