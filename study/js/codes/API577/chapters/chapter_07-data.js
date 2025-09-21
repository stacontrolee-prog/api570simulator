// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 7 para API 577
registerChapter('API577', {
    id: 7,
    title: "Welder Qualification",
    titleEs: "Calificación de Soldadores",
    content: `<h2>Welder Qualification</h2>
    <h3>7.1 General</h3>
    <p>ASME Section IX, Article III, lists welding processes separately with essential variables that apply to welder and welding operator performance qualifications. Unlike the WPS and PQR, the welding performance qualification (WPQ) is only limited by essential variables. See ASME Section IX, QW-350. It should be acknowledged that the essential variables for the WPS are separate from the essential variables for the WPQ. The welder is required to weld to perform production welding within the limits of the welder's WPQ. ASME Section IX, QW-423, provides the range of base metal qualification P-numbers based on the P-numbers used for the welder qualification.</p>
    <p>Filler metal F-numbers fundamentally determine the welder's ability to make satisfactory welds with a given filler metal. The F-numbers are provided in ASME Section IX, Table QW-432. It is important to note that the WPQ is used to document the welder's or welding operator's ability to make a sound weld per a qualified WPS. See ASME Section IX, QW-301.2.</p>
    
    <h3>7.2 Welders and Welding Operators</h3>
    <p>Welders and welding operators who are qualified to weld in accordance with one qualified WPS are also qualified to weld in accordance with other qualified WPSs using the same welding process, within the limits of the essential variables of QW-350 for welders and QW-360 for welding operators.</p>
    
    <h3>7.3 Examination Failure of a Production Weld</h3>
    <p>If a welder is to be qualified per a production weld and fails to meet the standards, the welder is considered to have failed the WPQ. The rejected weld will be examined in its entirety and repaired by a qualified welder or welding operator.</p>
    
    <h3>7.4 Retest for Qualification</h3>
    <p>An immediate retest may be granted if the conditions of ASME Section IX, QW-320, are met.</p>
    
    <h3>7.5 Expiration, Revocation, and Renewal of Welder or Welding Operator Qualification</h3>
    <p>A performance qualification will expire or be revoked if:</p>
    <ul>
        <li>a welder or welding operator has not welded with a specific process during a period of six months or more, or</li>
        <li>there is a specific reason to question the ability of the welder or welding operator to produce a production weld that meets the specifications of the WPS.</li>
    </ul>
    
    <h3>7.6 Welder Performance Qualification</h3>
    <p>The WPQ addresses all essential variables listed in QW-350 of ASME Section IX. A welder may perform a qualification test that may incorporate more than one welding process. The performance qualification test coupon is to be welded according to the appropriate, qualified WPS, and the welding is to be supervised and controlled by the welder's employer. The qualification is specific to the welding process(es) used, and each different welding process, or combination of welding processes, requires a specific, separate qualification. A change in any essential variable listed for the welding process will require the WPS to be requalified and the welder to qualify for that WPS.</p>
    <p>ASME Section IX QW-352 through QW-357 and Table QW-416 list the essential variables and referencing code paragraphs for different welding processes. The variable groups addressed are joints, base metals, filler metals, positions, gas, and electrical characteristics. Section IX QW-423 covers alternate base materials for welder performance qualification, and QW-433 covers alternate F-numbers.</p>
    <p>The record of the WPQ test includes all the essential variables, the type of test and test results, and the ranges qualified. The format of the WPQ is not fixed, provided it addresses all the required parameters. An example form is available in ASME Section IX, Form QW-484A, in Annex B.</p>
    <p>The required mechanical tests performed on welder and welding operator qualification test coupons are defined in ASME Section IX, QW-452. If radiographic examination is used for welder or welding operator qualification of coupons, the minimum length of coupon to be examined is 6 in. (150 mm) and includes the entire weld circumference for pipe coupons. Coupons are required to pass visual examination and mechanical testing, if used. Alternately, welders and welding operators making a groove weld using SMAW, SAW, GTAW, and GMAW (except short-circuit mode) may be qualified using radiography of the first production weld. For welders, a minimum of 6 in. (150 mm) length of the first production weld must be examined for performance qualification, while a minimum of 36 in. (900 mm) length must be examined for welding operators.</p>
    <p>There are rules (e.g. ASME Section IX) for the immediate retesting of welders or welding operators who fail a qualification test; this is commonly referred to as the "two for one rule" whereby the welder/operator must be tested on, and successfully complete, twice the original number of tests. Welders or welding operators who fail any part of the second test typically have to be retrained; however, no clear guidance is provided to inspectors regarding what constitutes retraining. Documented evidence of retraining and production of acceptable practice welds are presented to the inspector for approval before allowing a further test.</p>
    <p>Welder performance qualification expires if the welding process is not used during any six-month period. The welder's qualification can be revoked if there is a reason to question the welder's ability to make sound, code compliant welds. A welder's log or continuity report can be used to verify that a welder's qualifications have remained current.</p>
    <p>A welder's qualification is approved via signature; this cannot be delegated to another organization.</p>
    
    <h3>7.7 Reviewing a WPQ</h3>
    <h4>7.7.1 Review Prior to Welding</h4>
    <p>Prior to any welding, inspectors should review welders' WPQ to verify that they are qualified to perform the welding given its position, process, and other limitations. When reviewing a WPQ, items to check include:</p>
    <ul>
        <li>welder's name and stamp number;</li>
        <li>welding process and type;</li>
        <li>identification of WPS used for welding test coupon;</li>
        <li>backing (if used)—if qualified without backing, then welder is qualified to weld with backing;</li>
        <li>P-number(s) of base metals joined—see ASME Section IX, QW-423, for alternate base materials for WPQ;</li>
        <li>thickness of base metals and diameter of pipe;</li>
        <li>filler metal SFA number;</li>
        <li>filler metal F-number—see ASME Section IX, QW-433, for alternate F-numbers for WPQ;</li>
        <li>consumable insert (if used)—this is an essential variable only for PAW;</li>
        <li>NOTE This is an essential variable only for PAW and GTAW.</li>
        <li>deposited thickness (for each welding process used);</li>
        <li>welding position of the coupon;</li>
        <li>vertical weld progression;</li>
        <li>backing, shielding, and trailing gas used (could be a change of gas or deletion of gas, depending on the process);</li>
        <li>metal transfer mode (if GMAW);</li>
        <li>weld current type/polarity (if GTAW);</li>
        <li>if machine welded, refer to QW-484 for additional values required;</li>
        <li>guided bend test type and results, if used;</li>
        <li>visual examination results;</li>
        <li>additional requirements of the construction code;</li>
        <li>testing organization identification, acceptance via signature, and date;</li>
        <li>radiographic results (if used).</li>
    </ul>
    
    <h4>7.7.2 Verifying the Qualification Range</h4>
    <p>The following ASME Section IX references should be used to verify the qualification range:</p>
    <ul>
        <li>base metal qualification—QW-423.1 and QW-403.15;</li>
        <li>backing—QW-350 and QW-402.4;</li>
        <li>deposited weld metal thickness qualification—QW-452.1 (if transverse bend tests) and QW-404.30;</li>
        <li>groove weld small diameter limits—QW-452.3 and QW-403.16;</li>
        <li>position and diameter limits—QW-461.9, QW-405.3, and QW-403.16;</li>
        <li>F-number—QW-433 and QW-404.15.</li>
    </ul>
    
    <h4>7.7.3 Welder Qualifications for Tube-to-Tubesheet Welding</h4>
    <p>When a demonstration mockup in accordance with ASME IX, QW-193, is required by the construction code or proprietary company specifications, the welder qualification requirements have the same essential variables and acceptable ranges as in the PQR used to support the WPS.</p>
    
    <h3>7.8 Limitations for Welder Qualifications</h3>
    <p>Limitations for welders or welding operators are discussed in ASME Section IX, QW-305.</p>`,
    contentEs: `<h2>Calificación de Soldadores</h2>
    <h3>7.1 General</h3>
    <p>ASME Sección IX, Artículo III, enumera los procesos de soldadura por separado con variables esenciales que aplican a las calificaciones de desempeño de soldadores y operadores de soldadura. A diferencia de la WPS y PQR, la calificación de desempeño de soldadura (WPQ) solo está limitada por variables esenciales. Véase ASME Sección IX, QW-350. Debe reconocerse que las variables esenciales para la WPS son separadas de las variables esenciales para la WPQ. Se requiere que el soldador suelde para realizar soldaduras de producción dentro de los límites de la WPQ del soldador. ASME Sección IX, QW-423, proporciona el rango de números P de calificación de metal base basado en los números P utilizados para la calificación del soldador.</p>
    <p>Los números F de metal de aporte determinan fundamentalmente la capacidad del soldador para realizar soldaduras satisfactorias con un metal de aporte determinado. Los números F se proporcionan en ASME Sección IX, Tabla QW-432. Es importante tener en cuenta que la WPQ se utiliza para documentar la capacidad del soldador u operador de soldadura para realizar una soldadura sana según una WPS calificada. Véase ASME Sección IX, QW-301.2.</p>
    
    <h3>7.2 Soldadores y Operadores de Soldadura</h3>
    <p>Los soldadores y operadores de soldadura que están calificados para soldar de acuerdo con una WPS calificada también están calificados para soldar de acuerdo con otras WPS calificadas que utilizan el mismo proceso de soldadura, dentro de los límites de las variables esenciales de QW-350 para soldadores y QW-360 para operadores de soldadura.</p>
    
    <h3>7.3 Fallo en Examen de una Soldadura de Producción</h3>
    <p>Si un soldador va a ser calificado según una soldadura de producción y no cumple con los estándares, se considera que el soldador ha reprobado la WPQ. La soldadura rechazada será examinada en su totalidad y reparada por un soldador u operador de soldadura calificado.</p>
    
    <h3>7.4 Reprueba para Calificación</h3>
    <p>Se puede conceder una reprueba inmediata si se cumplen las condiciones de ASME Sección IX, QW-320.</p>
    
    <h3>7.5 Expiración, Revocación y Renovación de la Calificación de Soldador u Operador de Soldadura</h3>
    <p>Una calificación de desempeño expirará o será revocada si:</p>
    <ul>
        <li>un soldador u operador de soldadura no ha soldado con un proceso específico durante un período de seis meses o más, o</li>
        <li>hay una razón específica para cuestionar la capacidad del soldador u operador de soldadura para producir una soldadura de producción que cumpla con las especificaciones de la WPS.</li>
    </ul>
    
    <h3>7.6 Calificación de Desempeño del Soldador</h3>
    <p>La WPQ aborda todas las variables esenciales enumeradas en QW-350 de ASME Sección IX. Un soldador puede realizar una prueba de calificación que puede incorporar más de un proceso de soldadura. La probeta de prueba de calificación de desempeño debe ser soldada según la WPS calificada apropiada, y la soldadura debe ser supervisada y controlada por el empleador del soldador. La calificación es específica para el o los procesos de soldadura utilizados, y cada proceso de soldadura diferente, o combinación de procesos de soldadura, requiere una calificación específica y separada. Un cambio en cualquier variable esencial enumerada para el proceso de soldadura requerirá que la WPS sea recalificada y que el soldador se califique para esa WPS.</p>
    <p>ASME Sección IX QW-352 a QW-357 y la Tabla QW-416 enumeran las variables esenciales y los párrafos del código de referencia para diferentes procesos de soldadura. Los grupos de variables abordados son uniones, metales base, metales de aporte, posiciones, gas y características eléctricas. La Sección IX QW-423 cubre materiales base alternativos para la calificación de desempeño del soldador, y QW-433 cubre números F alternativos.</p>
    <p>El registro de la prueba WPQ incluye todas las variables esenciales, el tipo de prueba y los resultados de la prueba, y los rangos calificados. El formato de la WPQ no es fijo, siempre que aborde todos los parámetros requeridos. Un formulario de ejemplo está disponible en ASME Sección IX, Formulario QW-484A, en el Anexo B.</p>
    <p>Las pruebas mecánicas requeridas realizadas en las probetas de prueba de calificación de soldadores y operadores de soldadura se definen en ASME Sección IX, QW-452. Si se utiliza examen radiográfico para la calificación de soldadores u operadores de soldadura de probetas, la longitud mínima de probeta a examinar es de 6 pulg. (150 mm) e incluye toda la circunferencia de la soldadura para probetas de tubería. Se requiere que las probetas pasen el examen visual y las pruebas mecánicas, si se utilizan. Alternativamente, los soldadores y operadores de soldadura que realicen una soldadura de ranura utilizando SMAW, SAW, GTAW y GMAW (excepto el modo de cortocircuito) pueden ser calificados utilizando radiografía de la primera soldadura de producción. Para los soldadores, se debe examinar una longitud mínima de 6 pulg. (150 mm) de la primera soldadura de producción para la calificación de desempeño, mientras que para los operadores de soldadura se debe examinar una longitud mínima de 36 pulg. (900 mm).</p>
    <p>Existen reglas (por ejemplo, ASME Sección IX) para la reprueba inmediata de soldadores u operadores de soldadura que reprueban una prueba de calificación; esto comúnmente se conoce como la "regla de dos por uno" por la cual el soldador/operador debe ser sometido a prueba y completar con éxito el doble del número original de pruebas. Los soldadores u operadores de soldadura que reprueban cualquier parte de la segunda prueba típicamente tienen que ser re capacitados; sin embargo, no se proporciona una guía clara a los inspectores sobre lo que constituye la re capacitación. La evidencia documentada de re capacitación y la producción de soldaduras de práctica aceptables se presentan al inspector para su aprobación antes de permitir una prueba adicional.</p>
    <p>La calificación de desempeño del soldador expira si el proceso de soldadura no se utiliza durante cualquier período de seis meses. La calificación del soldador puede ser revocada si hay una razón para cuestionar la capacidad del soldador para realizar soldaduras sanas y conformes al código. Un registro de soldador o informe de continuidad puede utilizarse para verificar que las calificaciones de un soldador se han mantenido vigentes.</p>
    <p>La calificación de un soldador se aprueba mediante firma; esto no puede ser delegado a otra organización.</p>
    
    <h3>7.7 Revisión de una WPQ</h3>
    <h4>7.7.1 Revisión Antes de la Soldadura</h4>
    <p>Antes de cualquier soldadura, los inspectores deben revisar las WPQ de los soldadores para verificar que están calificados para realizar la soldadura dada su posición, proceso y otras limitaciones. Al revisar una WPQ, los elementos a verificar incluyen:</p>
    <ul>
        <li>nombre y número de sello del soldador;</li>
        <li>proceso y tipo de soldadura;</li>
        <li>identificación de la WPS utilizada para soldar la probeta de prueba;</li>
        <li>respaldo (si se utiliza)—si está calificado sin respaldo, entonces el soldador está calificado para soldar con respaldo;</li>
        <li>número(s) P de los metales base unidos—véase ASME Sección IX, QW-423, para materiales base alternativos para WPQ;</li>
        <li>espesor de los metales base y diámetro de la tubería;</li>
        <li>número SFA del metal de aporte;</li>
        <li>número F del metal de aporte—véase ASME Sección IX, QW-433, para números F alternativos para WPQ;</li>
        <li>inserto consumible (si se utiliza)—esta es una variable esencial solo para PAW;</li>
        <li>NOTA Esta es una variable esencial solo para PAW y GTAW.</li>
        <li>espesor depositado (para cada proceso de soldadura utilizado);</li>
        <li>posición de soldadura de la probeta;</li>
        <li>progresión de la soldadura vertical;</li>
        <li>respaldo, gas de protección y gas de arrastre utilizados (podría ser un cambio de gas o eliminación de gas, dependiendo del proceso);</li>
        <li>modo de transferencia de metal (si GMAW);</li>
        <li>tipo/polaridad de la corriente de soldadura (si GTAW);</li>
        <li>si es soldadura por máquina, consulte QW-484 para valores adicionales requeridos;</li>
        <li>tipo y resultados de la prueba de doblado guiado, si se utiliza;</li>
        <li>resultados del examen visual;</li>
        <li>requisitos adicionales del código de construcción;</li>
        <li>identificación de la organización de prueba, aceptación mediante firma y fecha;</li>
        <li>resultados radiográficos (si se utilizan).</li>
    </ul>
    
    <h4>7.7.2 Verificación del Rango de Calificación</h4>
    <p>Las siguientes referencias de ASME Sección IX deben utilizarse para verificar el rango de calificación:</p>
    <ul>
        <li>calificación de metal base—QW-423.1 y QW-403.15;</li>
        <li>respaldo—QW-350 y QW-402.4;</li>
        <li>calificación del espesor del metal de soldadura depositado—QW-452.1 (si pruebas de doblado transversal) y QW-404.30;</li>
        <li>límites de diámetro pequeño para soldadura de ranura—QW-452.3 y QW-403.16;</li>
        <li>límites de posición y diámetro—QW-461.9, QW-405.3 y QW-403.16;</li>
        <li>número F—QW-433 y QW-404.15.</li>
    </ul>
    
    <h4>7.7.3 Calificaciones de Soldador para Soldadura de Tubo a Placa Tubular</h4>
    <p>Cuando se requiere un modelo de demostración de acuerdo con ASME IX, QW-193, por el código de construcción o especificaciones propias de la empresa, los requisitos de calificación del soldador tienen las mismas variables esenciales y rangos aceptables que en el PQR utilizado para respaldar la WPS.</p>
    
    <h3>7.8 Limitaciones para las Calificaciones de Soldadores</h3>
    <p>Las limitaciones para soldadores u operadores de soldadura se discuten en ASME Sección IX, QW-305.</p>`
});