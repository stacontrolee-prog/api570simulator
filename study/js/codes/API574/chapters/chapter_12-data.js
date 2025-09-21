// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 12
registerChapter('API574', {
    id: 12,
    title: "Rerating and Repair",
    titleEs: "Reclasificación y Reparación",
    content: `<h3>12 Rerating and Repair</h3>
    <div class="subsection">
        <h4>12.1 Rerating of Piping System</h4>
        <div class="subsection">
            <h4>12.1.1 General</h4>
            <p>Rerating of a piping system is an acceptable method of addressing specific types of damage. Rerating the piping can decrease the required thickness, or it can increase the piping system's corrosion allowance. Operating pressures (including process upsets or multiple operating scenarios) should be reviewed to determine to what pressure the piping could potentially be rerated. For example, where an inspection has found evidence that thinning has occurred, a rerate may be completed to decrease the MAWP and/or allowable temperature, which may decrease the required thickness and, therefore, increase the corrosion allowance.</p>
            <p>The relief valves associated with the rerate should be reviewed to ensure the settings agree with the new operating conditions. For example, the orifice size or valve may require changes to cover the new rerate conditions.</p>
            <p>Piping may be rerated to decrease the required thickness and therefore increase the corrosion allowance for future metal loss. This would increase the remaining life of the piping and increase the next inspection interval.</p>
        </div>
        <div class="subsection">
            <h4>12.1.2 Repairs and Alterations</h4>
            <p>Inspection of repairs and alterations to piping systems may involve several steps in the performance of the work to ensure that it complies with the applicable sections of API 570 and/or ASME PCC-2. The inspector should be involved in planning, execution, and documentation of repairs and alterations. The inspector may need to consult with a piping engineer and corrosion specialist to properly plan and execute the piping work.</p>
            <p>Some typical inspection activities involved with planning repairs and alterations include the following:</p>
            <ul>
                <li>Providing necessary field data, such as piping diameter, measured wall thickness, and material of construction; the required data can vary depending on the work to be performed and whether it is a temporary repair, a permanent repair, or an alteration.</li>
                <li>Developing and/or reviewing the scope of work; supporting engineering design calculations should be available for review with the assurance that they apply to the piping system and work being performed. Additional requirements, such as PWHT, are defined for the work.
                    <ol>
                        <li>If any restorative changes result in a change of design temperature or pressure, the requirements for rerating also should be satisfied.</li>
                        <li>Any welding, cutting, or grinding operation on a pressure-containing piping component not specifically considered an alteration is considered a repair.</li>
                    </ol>
                </li>
                <li>Developing an inspection test plan for the work; the inspector should establish appropriate NDE hold points to be used during the execution of the work. The inspection test plan should include any testing requirements as well as evaluation requirements to be used upon execution and completion of the work.</li>
                <li>Reviewing and accepting any weld procedures to be used for the work; ASME BPVC, Section IX, should be referenced when reviewing weld procedures and applicable procedure qualification records. API 577 should be reviewed for details on weld techniques and weld procedures. API 582 provides additional guidance on welding requirements for the industry.</li>
                <li>Reviewing welder qualifications to verify that they are qualified for the welding procedures to be used for the work; ASME BPVC, Section IX, and API 577 should be reviewed for details on welder performance qualifications.</li>
                <li>Reviewing material test reports, as required, to ensure that all materials of construction are per the piping specification and/or scope of work.</li>
                <li>Reviewing applicable NDE procedures and NDE examiner qualifications/certifications; verify that the NDE procedures are appropriate for the work to be performed and examiners are qualified/certified to perform the examination technique.</li>
            </ul>
            <p>During the execution of repairs, the inspector should ensure that the work is executed per the scope and meets code requirements. Typical inspector activities include the following:</p>
            <ul>
                <li>ensuring that NDE is performed at the hold points as stated in the inspection plan;</li>
                <li>reviewing examination results to ensure that they meet code and specification requirements;</li>
                <li>ensuring that any heat treatment is performed per the work scope;</li>
                <li>ensuring that testing requirements, such as hardness and pressure testing, are performed and acceptable.</li>
            </ul>
            <p>Documentation of repairs and alterations can include the written scope of work, supporting engineering design calculations, NDE and test results, heat-treatment charts, material test reports, welding procedure specifications, and welding performance qualification records.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>12.2 Repairing Pipe Damage</h4>
        <div class="subsection">
            <h4>12.2.1 General Comments on Repairing Piping</h4>
            <p>When repairing a piping system:</p>
            <ul>
                <li>The codes and standards governing the piping system's design, construction, and inspection should be reviewed. The repairs should not violate requirements. Several jurisdictions recognize API 570 as the proper code for repairing or altering petroleum or chemical piping systems.</li>
                <li>The repairs should require inspection, examination, and/or testing to verify that they have been properly executed.</li>
                <li>Where jurisdictions do not regulate the repair and alteration of piping systems, the owner-operator should have as part of the mechanical integrity program a method under which repairs and alterations have been completed and documented.</li>
                <li>The defects requiring repair and the repair procedures employed should be recorded in the permanent records maintained for the piping system.</li>
            </ul>
            <p>Refer to ASME PCC-2 for repair methods.</p>
        </div>
        <div class="subsection">
            <h4>12.2.2 Pressure Boundary Repairs</h4>
            <p>Corrosion losses are the most common defect to repair. Multiple repair methods apply to corroded piping system areas. The type of repair utilized will depend upon the extent of corrosion found and on the material accessibility (the time it takes to receive needed materials).</p>
            <p>Repairs should comply with API 570 and any jurisdictional requirements. API 570 and ASME PCC-2 provide detailed techniques that can be utilized for different repairs. Scattered pitting deeper than that corrosion allowance should be reviewed following guidelines set in API 579-1/ASME FFS-1 or repaired.</p>
            <p>Cracks are also common defects requiring repair. Cracks can be just surface cracks were grinding out the crack would not exceed the corrosion allowance or the piping system's excess wall (greater than the calculated minimum thickness). An engineer should evaluate cracks deeper than the corrosion allowance. The same applies to repairs not made per API 579-1/ASME FFS-1, Part 9.</p>
            <p>For repairs needing long lead items, temporary repairs can be utilized until repair materials arrive. The piping can be repaired as the items arrive or during the next turnaround.</p>
            <p>The cause of the problem resulting in the need to repair should be determined. Treating the source of the damage will, in many cases, prevent future problems.</p>
        </div>
        <div class="subsection">
            <h4>12.2.3 Repair Inspections</h4>
            <p>Refer to API 577 to guide fabrication and repair welding inspection of refinery and chemical plant equipment.</p>
            <p>For pipe walls crack repairs:</p>
            <ul>
                <li>The cracks can be arc gouged from end to end. Care should be used in arc gouging, as heat may cause the crack to enlarge or lengthen.</li>
                <li>Cutting a groove from both sides of the plate may be expedient if a crack extends completely through the plate.</li>
                <li>The crack must be completely removed before welding begins. MT or PT techniques can ensure that the crack is removed. If one plate has several cracks, it may be wise to replace the entire plate.</li>
                <li>Check the repairs carefully. Examine the crack weld repair after the first weld pass to verify that the crack has not reappeared.</li>
            </ul>
            <p>If the remaining metal, after flaw removal, provides adequate strength and corrosion protection, the repair may be completed without welding by tapering and blending the edges of the cavity.</p>
            <p>Welding repairs should be inspected to verify the execution, completion, and acceptability of the repair. Normally, a visual examination is sufficient for most minor repairs. However, the appropriate NDE as specified in the approved repair plan or application code of construction should be used on major repairs as approved by the owner-operator. Additionally, if required by the applicable construction code, RT or angle beam UT examination should also be performed.</p>
            <p>Pipe sections may replace locally deteriorated areas. For insert patches, the patch's joint efficiency should be equal to or greater than the original pipe joints' efficiency.</p>
            <p>Repairs of metallic linings require welding. PT or MT in addition to visual inspection of the repair welds after thorough slag removal is typically performed to check weld quality.</p>
            <p>In accordance with API 570, a pressure test may be required after repairs or alterations have been completed. Alternatively, specific NDE approved by the owner-operator may be used in lieu of a pressurized test. API 570 and/or ASME PCC-2, Article 500, should be used to determine pressure test requirements.</p>
        </div>
    </div>
    `,
    contentEs: `<h3>12 Reclasificación y Reparación</h3>
    <div class="subsection">
        <h4>12.1 Reclasificación del Sistema de Tubería</h4>
        <div class="subsection">
            <h4>12.1.1 General</h4>
            <p>La reclasificación de un sistema de tubería es un método aceptable para abordar tipos específicos de daño. La reclasificación de la tubería puede disminuir el espesor requerido, o puede aumentar la tolerancia de corrosión del sistema de tubería. Las presiones de operación (incluidas las alteraciones del proceso o múltiples escenarios de operación) deben revisarse para determinar a qué presión podría potencialmente reclasificarse la tubería. Por ejemplo, cuando una inspección ha encontrado evidencia de que ha ocurrido adelgazamiento, puede completarse una reclasificación para disminuir la MAWP y/o la temperatura permitida, lo que puede disminuir el espesor requerido y, por lo tanto, aumentar la tolerancia de corrosión.</p>
            <p>Las válvulas de alivio asociadas con la reclasificación deben revisarse para garantizar que los ajustes coincidan con las nuevas condiciones de operación. Por ejemplo, el tamaño del orificio o la válvula pueden requerir cambios para cubrir las nuevas condiciones de reclasificación.</p>
            <p>La tubería puede ser reclasificada para disminuir el espesor requerido y, por lo tanto, aumentar la tolerancia de corrosión para futuras pérdidas de metal. Esto aumentaría la vida útil restante de la tubería y aumentaría el próximo intervalo de inspección.</p>
        </div>
        <div class="subsection">
            <h4>12.1.2 Reparaciones y Alteraciones</h4>
            <p>La inspección de reparaciones y alteraciones a los sistemas de tubería puede involucrar varios pasos en la ejecución del trabajo para garantizar que cumpla con las secciones aplicables de API 570 y/o ASME PCC-2. El inspector debe participar en la planificación, ejecución y documentación de reparaciones y alteraciones. El inspector puede necesitar consultar con un ingeniero de tuberías y un especialista en corrosión para planificar y ejecutar adecuadamente el trabajo de tubería.</p>
            <p>Algunas actividades típicas de inspección involucradas en la planificación de reparaciones y alteraciones incluyen las siguientes:</p>
            <ul>
                <li>Proporcionar los datos de campo necesarios, como el diámetro de la tubería, el espesor de pared medido y el material de construcción; los datos requeridos pueden variar dependiendo del trabajo a realizar y si se trata de una reparación temporal, una reparación permanente o una alteración.</li>
                <li>Desarrollar y/o revisar el alcance del trabajo; los cálculos de diseño de ingeniería de apoyo deben estar disponibles para su revisión con la garantía de que se aplican al sistema de tubería y al trabajo que se está realizando. Se definen requisitos adicionales, como PWHT, para el trabajo.
                    <ol>
                        <li>Si cualquier cambio restaurativo resulta en un cambio de temperatura o presión de diseño, también deben satisfacerse los requisitos de reclasificación.</li>
                        <li>Cualquier operación de soldadura, corte o rectificado en un componente de tubería que contiene presión que no se considere específicamente una alteración se considera una reparación.</li>
                    </ol>
                </li>
                <li>Desarrollar un plan de prueba de inspección para el trabajo; el inspector debe establecer puntos de retención de END apropiados que se utilizarán durante la ejecución del trabajo. El plan de prueba de inspección debe incluir cualquier requisito de prueba así como los requisitos de evaluación que se utilizarán al ejecutar y completar el trabajo.</li>
                <li>Revisar y aceptar cualquier procedimiento de soldadura que se utilizará para el trabajo; debe hacerse referencia a ASME BPVC, Sección IX, al revisar los procedimientos de soldadura y los registros aplicables de calificación de procedimientos. Debe revisarse API 577 para obtener detalles sobre técnicas de soldadura y procedimientos de soldadura. API 582 proporciona orientación adicional sobre los requisitos de soldadura para la industria.</li>
                <li>Revisar las calificaciones de los soldadores para verificar que estén calificados para los procedimientos de soldadura que se utilizarán para el trabajo; deben revisarse ASME BPVC, Sección IX, y API 577 para obtener detalles sobre las calificaciones de rendimiento de los soldadores.</li>
                <li>Revisar los informes de prueba de materiales, según sea necesario, para garantizar que todos los materiales de construcción cumplan con la especificación de la tubería y/o el alcance del trabajo.</li>
                <li>Revisar los procedimientos de END aplicables y las calificaciones/certificaciones del examinador de END; verificar que los procedimientos de END sean apropiados para el trabajo a realizar y que los examinadores estén calificados/certificados para realizar la técnica de examen.</li>
            </ul>
            <p>Durante la ejecución de las reparaciones, el inspector debe garantizar que el trabajo se ejecute según el alcance y cumpla con los requisitos del código. Las actividades típicas del inspector incluyen las siguientes:</p>
            <ul>
                <li>garantizar que se realice END en los puntos de retención como se indica en el plan de inspección;</li>
                <li>revisar los resultados del examen para garantizar que cumplan con los requisitos del código y la especificación;</li>
                <li>garantizar que cualquier tratamiento térmico se realice según el alcance del trabajo;</li>
                <li>garantizar que se realicen y sean aceptables los requisitos de prueba, como dureza y prueba de presión.</li>
            </ul>
            <p>La documentación de reparaciones y alteraciones puede incluir el alcance del trabajo por escrito, los cálculos de diseño de ingeniería de apoyo, los resultados de END y pruebas, los gráficos de tratamiento térmico, los informes de prueba de materiales, las especificaciones del procedimiento de soldadura y los registros de calificación del rendimiento de la soldadura.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>12.2 Reparación de Daños en Tuberías</h4>
        <div class="subsection">
            <h4>12.2.1 Comentarios Generales sobre la Reparación de Tuberías</h4>
            <p>Al reparar un sistema de tubería:</p>
            <ul>
                <li>Deben revisarse los códigos y estándares que rigen el diseño, construcción e inspección del sistema de tubería. Las reparaciones no deben violar los requisitos. Varias jurisdicciones reconocen API 570 como el código adecuado para reparar o alterar sistemas de tubería petroleros o químicos.</li>
                <li>Las reparaciones deben requerir inspección, examen y/o prueba para verificar que se han ejecutado correctamente.</li>
                <li>Donde las jurisdicciones no regulen la reparación y alteración de sistemas de tubería, el propietario-operador debe tener como parte del programa de integridad mecánica un método bajo el cual se hayan completado y documentado las reparaciones y alteraciones.</li>
                <li>Los defectos que requieren reparación y los procedimientos de reparación empleados deben registrarse en los registros permanentes mantenidos para el sistema de tubería.</li>
            </ul>
            <p>Consulte ASME PCC-2 para obtener métodos de reparación.</p>
        </div>
        <div class="subsection">
            <h4>12.2.2 Reparaciones del Límite de Presión</h4>
            <p>Las pérdidas por corrosión son el defecto más común que reparar. Se aplican múltiples métodos de reparación a las áreas del sistema de tubería corroídas. El tipo de reparación utilizado dependerá de la extensión de la corrosión encontrada y de la accesibilidad del material (el tiempo que lleva recibir los materiales necesarios).</p>
            <p>Las reparaciones deben cumplir con API 570 y cualquier requisito jurisdiccional. API 570 y ASME PCC-2 proporcionan técnicas detalladas que pueden utilizarse para diferentes reparaciones. La picadura dispersa más profunda que la tolerancia de corrosión debe revisarse siguiendo las pautas establecidas en API 579-1/ASME FFS-1 o repararse.</p>
            <p>Las grietas también son defectos comunes que requieren reparación. Las grietas pueden ser solo grietas superficiales donde la eliminación por rectificado de la grieta no excedería la tolerancia de corrosión o el exceso de pared del sistema de tubería (mayor que el espesor mínimo calculado). Un ingeniero debe evaluar las grietas más profundas que la tolerancia de corrosión. Lo mismo se aplica a las reparaciones no realizadas según API 579-1/ASME FFS-1, Parte 9.</p>
            <p>Para reparaciones que necesitan artículos con largo tiempo de entrega, pueden utilizarse reparaciones temporales hasta que lleguen los materiales de reparación. La tubería puede repararse a medida que lleguen los artículos o durante la próxima parada.</p>
            <p>Debe determinarse la causa del problema que resulta en la necesidad de reparar. Tratar la fuente del daño evitará, en muchos casos, problemas futuros.</p>
        </div>
        <div class="subsection">
            <h4>12.2.3 Inspecciones de Reparación</h4>
            <p>Consulte API 577 para guiar la inspección de soldadura de fabricación y reparación de equipos de refinería y plantas químicas.</p>
            <p>Para reparaciones de grietas en paredes de tubería:</p>
            <ul>
                <li>Las grietas pueden ser eliminadas por biselado de arco de un extremo a otro. Debe tenerse cuidado en el biselado de arco, ya que el calor puede hacer que la grieta se agrande o alargue.</li>
                <li>Cortar una ranura desde ambos lados de la placa puede ser expeditivo si una grieta se extiende completamente a través de la placa.</li>
                <li>La grieta debe eliminarse completamente antes de comenzar la soldadura. Las técnicas MT o PT pueden garantizar que la grieta se haya eliminado. Si una placa tiene varias grietas, puede ser sabio reemplazar toda la placa.</li>
                <li>Verifique las reparaciones cuidadosamente. Examine la reparación de soldadura de la grieta después del primer pase de soldadura para verificar que la grieta no ha reaparecido.</li>
            </ul>
            <p>Si el metal restante, después de la eliminación del defecto, proporciona resistencia y protección contra la corrosión adecuadas, la reparación puede completarse sin soldadura mediante el afeitado y mezcla de los bordes de la cavidad.</p>
            <p>Las reparaciones de soldadura deben inspeccionarse para verificar la ejecución, finalización y aceptabilidad de la reparación. Normalmente, un examen visual es suficiente para la mayoría de las reparaciones menores. Sin embargo, debe utilizarse el END apropiado como se especifica en el plan de reparación aprobado o en el código de construcción de aplicación en las reparaciones mayores según lo aprobado por el propietario-operador. Además, si lo requiere el código de construcción aplicable, también debe realizarse un examen RT o UT de haz angular.</p>
            <p>Los tramos de tubería pueden reemplazar áreas deterioradas localmente. Para parches de inserción, la eficiencia de la junta del parche debe ser igual o mayor que la eficiencia de las juntas originales de la tubería.</p>
            <p>Las reparaciones de revestimientos metálicos requieren soldadura. PT o MT además de la inspección visual de las soldaduras de reparación después de una eliminación completa de escoria se realizan típicamente para verificar la calidad de la soldadura.</p>
            <p>De acuerdo con API 570, puede requerirse una prueba de presión después de que se hayan completado las reparaciones o alteraciones. Alternativamente, puede utilizarse un END específico aprobado por el propietario-operador en lugar de una prueba presurizada. Deben utilizarse API 570 y/o ASME PCC-2, Artículo 500, para determinar los requisitos de prueba de presión.</p>
        </div>
    </div>
    `
});