// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 11
registerChapter('API574', {
    id: 11,
    title: "Inspection Results",
    titleEs: "Resultados de la Inspección",
    content: `<h3>11 Inspection Results</h3>
    <div class="subsection">
        <h4>11.1 Evaluation of Inspection Results</h4>
        <p>Evaluating the results of the inspection and taking appropriate action based on that evaluation are necessary to gain the full benefit of any inspection. The purpose of the inspection is to determine the current condition and, when coupled with previous inspections, to determine the rate of damage. These data can then be used to estimate the remaining life of the asset, to determine if any corrective actions are required, and/or if adjustments need to be made to the current inspection plan or RBI assessment if applicable.</p>
        <p>Typical steps in the evaluation of inspection results may include, but are not limited to, the following:</p>
        <ul>
            <li>evaluate completeness and accuracy of the report to ensure that the inspection was executed per the inspection plan.</li>
            <li>review the inspection to determine if any relevant NDE indications are identified and ensure that they are properly sized.</li>
        </ul>
        <p>Determine suitability for continued operation for the time frame as prescribed by the owner-operator based on the results of inspection conducted.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Table 6—Comparison of Common Nonmetallic Piping NDE Techniques</caption>
                <thead>
                    <tr>
                        <th>Technique</th>
                        <th>Advantages</th>
                        <th>Limitations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ultrasonic</td>
                        <td>Can identify erosion damage and to some degree lack of adhesive in joints.</td>
                        <td>
                            <ul>
                                <li>UT of wall thickness requires special techniques and procedures to accommodate the unique characteristics of the nonmetallic materials construction.</li>
                                <li>Probe selection, typically at the low-frequency range of 0.25 MHz to 2.25 MHz, is critical for ultrasonic attenuation characteristics as these vary with the construction and manufacturing processes.</li>
                                <li>This technique cannot detect "kissing" bonds in thermal welds.</li>
                                <li>The design and availability of suitable calibration samples are essential to successful examination.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Radiography</td>
                        <td>
                            <ul>
                                <li>Can identify internal flaws of a volumetric nature and wall thickness variations.</li>
                                <li>Can be used to verify joint gaps, offsets, etc.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Specific exposure techniques may need to be defined in procedures to obtain the best resolution as the lower atomic weight elements used in nonmetallic construction generally require lower exposure energy and times.</li>
                                <li>Disbonding and lack of adhesion flaws may not be easily identifiable with this technique.</li>
                                <li>Examination of nonmetallic piping has most of the typical limitations, such as personnel safety, fluid absorption, and flaw orientation.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Acoustic emission</td>
                        <td>
                            <ul>
                                <li>A wide range of flaws can be detected.</li>
                                <li>AE has been used on vessels and tanks constructed from FRP for many years and these procedures are encompassed in ASME BPVC, Section V, Article 11.</li>
                                <li>Typical flaws identified include inadequate structural integrity due to weaknesses in design, production, or material damage, growth of delaminations, crack growth, fiber fracture and pull-out, inadequate curing, and physical leakage.</li>
                                <li>Ability to characterize the cracking of fibers and delaminating of the matrix in real time.</li>
                                <li>There is extensive successful reporting of the use of AE in relation to nonmetallic materials.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Some of the basic caveats related to AE still apply (e.g. the flaw must be active in emitting energy).</li>
                                <li>A clear definition of the flaw is only possible with other complementary NDE techniques.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Hardness</td>
                        <td>
                            <ul>
                                <li>Material property used to identify proper curing and long-term damage of the resin.</li>
                                <li>The most common hardness reference is ASTM D2583.</li>
                                <li>The Barcol hardness test method can be used to determine the hardness of both reinforced and nonreinforced rigid plastics.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Limited by available area (e.g. small-diameter bore pipe).</li>
                                <li>Wax inhibition can yield lower hardness values.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Thermography</td>
                        <td>Has been used to detect gross wall thickness changes due to erosion and lack of adhesive in bonded joints.</td>
                        <td>
                            <ul>
                                <li>Sensitive to surface or near-surface flaws.</li>
                                <li>Does not reveal through-wall damage in thick wall piping.</li>
                                <li>The limits of detection are relatively high with about a 0.25 in. difference in wall thickness and disbonded areas measuring 3 in. × 3 in.</li>
                                <li>Detection is a function of thermal differentials. If the process stream is significantly different in temperature than the surrounding ambient temperature, then good profiles could be obtained.</li>
                                <li>Alternate approaches are to introduce heat into the area of examination and monitor the rate of decay in relation to "good" samples.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Microwave</td>
                        <td>
                            <ul>
                                <li>Gigahertz or terahertz microwave used to detect laminar non-fusion, "kissing" bonds, and impact damage.</li>
                                <li>Has detected ingress of fluids into the substrate in woven materials.</li>
                                <li>Technique has the ability to detect disbonding at a nonmetallic/metallic interface.</li>
                            </ul>
                        </td>
                        <td>Unable to inspect through any metallic cladding or coating.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="subsection">
        <h4>11.2 Determination of Follow-up Actions</h4>
        <p>Taking the appropriate follow-up actions based on the evaluation of the inspection results is an important element of the mechanical integrity program. The appropriate follow up action for a given scenario is to be determined by the owner-operator. Several examples are listed below.</p>
        <ul>
            <li>When the remaining life is determined to be beyond the next planned inspection and/or planned outage, the inspection report is uploaded into the owner-operator system of record.</li>
            <li>When the remaining life is determined to be less than the next planned outage or next inspection window for equipment in-service, a repair recommendation, rerate, or combination of those should be initiated. This may include temporary repairs, a planned or unplanned outage for repair, additional inspections to monitor the damage, or other risk mitigation steps to ensure that the equipment is operated with sufficient safety margin. For example, a heavily corroded piping could have the deeper pits filled in by weld buildup and the piping could also be derated to account for the remaining pits that are not repaired.</li>
            <li>When the actual thickness is determined to be below the required thickness, a repair recommendation, rerate, or combination of those should be initiated. This may require temporary repairs, a planned or unplanned outage for repair, additional inspections to monitor the damage or other risk mitigation steps to ensure that the equipment is operated with sufficient safety margin.</li>
            <li>When equipment is out of service at the time of the inspection and the piping contains defects, the piping system is either repaired, rerated, or combination of those to a condition which extends the remaining life sufficiently to satisfy the owner-operator prior to returning to service.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>11.3 Using Fitness-For-Service</h4>
        <p>When reviewing inspection reports, both corrosion-related and non-corrosion-related damage are often evaluated.</p>
        <ul>
            <li>For corrosion-related damage, the preliminary evaluation may be against simple screening criteria, such as comparing the wall loss to the design corrosion allowance. Piping systems may then be further evaluated using API 579-1/ASME FFS-1 to determine if the piping can remain in-service.</li>
            <li>For non-corrosion-related damage, API 579-1/ASME FFS-1 should be utilized.</li>
        </ul>
        <p>Once the acceptable damage limits have been established, the rate of damage should be determined based on the equipment age, previous inspection reports, operating history, and other relevant information.</p>
        <p>The current condition, rate of damage, and acceptable damage limits together are used to estimate the remaining service life of the equipment.</p>
        <p>Some jurisdictions require the owner-operator to have an approved Fitness-For-Service program before API 579-1/ASME FFS-1 can be used.</p>
    </div>
    `,
    contentEs: `<h3>11 Resultados de la Inspección</h3>
    <div class="subsection">
        <h4>11.1 Evaluación de los Resultados de la Inspección</h4>
        <p>La evaluación de los resultados de la inspección y la toma de las medidas adecuadas basadas en dicha evaluación son necesarias para obtener el beneficio completo de cualquier inspección. El propósito de la inspección es determinar la condición actual y, junto con inspecciones anteriores, determinar la tasa de daño. Estos datos pueden utilizarse entonces para estimar la vida útil restante del activo, determinar si se requieren acciones correctivas y/o si es necesario realizar ajustes al plan de inspección actual o a la evaluación RBI, si corresponde.</p>
        <p>Los pasos típicos en la evaluación de los resultados de la inspección pueden incluir, pero no limitarse a, los siguientes:</p>
        <ul>
            <li>evaluar la integridad y precisión del informe para asegurar que la inspección se ejecutó según el plan de inspección.</li>
            <li>revisar la inspección para determinar si se identifican indicaciones relevantes de END y asegurar que estén dimensionadas correctamente.</li>
        </ul>
        <p>Determinar la aptitud para continuar operando durante el período prescrito por el propietario-operador basándose en los resultados de la inspección realizada.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Tabla 6—Comparación de Técnicas Comunes de END para Tuberías No Metálicas</caption>
                <thead>
                    <tr>
                        <th>Técnica</th>
                        <th>Ventajas</th>
                        <th>Limitaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ultrasonido</td>
                        <td>Puede identificar el daño por erosión y hasta cierto punto la falta de adhesivo en las juntas.</td>
                        <td>
                            <ul>
                                <li>El UT del espesor de pared requiere técnicas y procedimientos especiales para acomodar las características únicas de los materiales de construcción no metálicos.</li>
                                <li>La selección del transductor, típicamente en el rango de baja frecuencia de 0.25 MHz a 2.25 MHz, es crítica para las características de atenuación ultrasónica, ya que estas varían con la construcción y los procesos de fabricación.</li>
                                <li>Esta técnica no puede detectar uniones "besantes" ("kissing" bonds) en soldaduras térmicas.</li>
                                <li>El diseño y disponibilidad de muestras de calibración adecuadas son esenciales para un examen exitoso.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Radiografía</td>
                        <td>
                            <ul>
                                <li>Puede identificar defectos internos de naturaleza volumétrica y variaciones en el espesor de la pared.</li>
                                <li>Puede utilizarse para verificar huecos en juntas, desalineaciones, etc.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Pueden ser necesarias definir técnicas específicas de exposición en los procedimientos para obtener la mejor resolución, ya que los elementos de menor peso atómico utilizados en la construcción no metálica generalmente requieren menor energía y tiempos de exposición.</li>
                                <li>Los defectos de desprendimiento y falta de adhesión pueden no ser fácilmente identificables con esta técnica.</li>
                                <li>El examen de tuberías no metálicas tiene la mayoría de las limitaciones típicas, como la seguridad del personal, la absorción de fluidos y la orientación de los defectos.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Emisión acústica</td>
                        <td>
                            <ul>
                                <li>Se puede detectar una amplia gama de defectos.</li>
                                <li>La EA se ha utilizado en recipientes y tanques construidos con PRF durante muchos años y estos procedimientos están incluidos en ASME BPVC, Sección V, Artículo 11.</li>
                                <li>Los defectos típicos identificados incluyen integridad estructural inadecuada debido a debilidades en el diseño, producción o daño del material, crecimiento de delaminaciones, crecimiento de grietas, fractura y extracción de fibras, curado inadecuado y fugas físicas.</li>
                                <li>Capacidad para caracterizar la fisuración de las fibras y la delaminación de la matriz en tiempo real.</li>
                                <li>Existen numerosos informes exitosos sobre el uso de EA en relación con materiales no metálicos.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Algunas de las precauciones básicas relacionadas con la EA todavía se aplican (por ejemplo, el defecto debe estar activo emitiendo energía).</li>
                                <li>Una definición clara del defecto solo es posible con otras técnicas de END complementarias.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Dureza</td>
                        <td>
                            <ul>
                                <li>Propiedad del material utilizada para identificar el curado adecuado y el daño a largo plazo de la resina.</li>
                                <li>La referencia de dureza más común es ASTM D2583.</li>
                                <li>El método de ensayo de dureza Barcol puede utilizarse para determinar la dureza de plásticos rígidos reforzados y no reforzados.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Limitado por el área disponible (por ejemplo, tubería de diámetro pequeño).</li>
                                <li>La inhibición por cera puede producir valores de dureza más bajos.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Termografía</td>
                        <td>Se ha utilizado para detectar cambios importantes en el espesor de la pared debido a la erosión y la falta de adhesivo en juntas unidas.</td>
                        <td>
                            <ul>
                                <li>Sensible a defectos superficiales o cerca de la superficie.</li>
                                <li>No revela daños a través de la pared en tuberías de pared gruesa.</li>
                                <li>Los límites de detección son relativamente altos, con una diferencia de aproximadamente 0.25 pulgadas en el espesor de la pared y áreas desprendidas que miden 3 pulg. × 3 pulg.</li>
                                <li>La detección es una función de los diferenciales térmicos. Si la corriente del proceso es significativamente diferente en temperatura que la temperatura ambiente circundante, entonces podrían obtenerse buenos perfiles.</li>
                                <li>Los enfoques alternativos consisten en introducir calor en el área de examen y monitorear la tasa de decaimiento en relación con muestras "buenas".</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Microondas</td>
                        <td>
                            <ul>
                                <li>Microondas de gigahercios o terahercios utilizadas para detectar la falta de fusión laminar, uniones "besantes" ("kissing" bonds) y daños por impacto.</li>
                                <li>Ha detectado la entrada de fluidos en el sustrato en materiales tejidos.</li>
                                <li>La técnica tiene la capacidad de detectar desprendimientos en una interfaz no metálica/metálica.</li>
                            </ul>
                        </td>
                        <td>No puede inspeccionar a través de ningún revestimiento o recubrimiento metálico.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="subsection">
        <h4>11.2 Determinación de Acciones de Seguimiento</h4>
        <p>Tomar las acciones de seguimiento adecuadas basadas en la evaluación de los resultados de la inspección es un elemento importante del programa de integridad mecánica. La acción de seguimiento adecuada para un escenario determinado debe ser determinada por el propietario-operador. A continuación se enumeran varios ejemplos.</p>
        <ul>
            <li>Cuando se determina que la vida útil restante es más allá de la próxima inspección planificada y/o parada planificada, el informe de inspección se carga en el sistema de registro del propietario-operador.</li>
            <li>Cuando se determina que la vida útil restante es menor que la próxima parada planificada o la próxima ventana de inspección para equipos en servicio, debe iniciarse una recomendación de reparación, reclasificación o una combinación de estas. Esto puede incluir reparaciones temporales, una parada planificada o no planificada para reparación, inspecciones adicionales para monitorear el daño u otros pasos de mitigación de riesgos para asegurar que el equipo se opere con un margen de seguridad suficiente. Por ejemplo, una tubería fuertemente corroída podría tener las picaduras más profundas rellenadas mediante soldadura de acumulación y la tubería también podría ser reclasificada para tener en cuenta las picaduras restantes que no se reparan.</li>
            <li>Cuando se determina que el espesor real está por debajo del espesor requerido, debe iniciarse una recomendación de reparación, reclasificación o una combinación de estas. Esto puede requerir reparaciones temporales, una parada planificada o no planificada para reparación, inspecciones adicionales para monitorear el daño u otros pasos de mitigación de riesgos para asegurar que el equipo se opere con un margen de seguridad suficiente.</li>
            <li>Cuando el equipo está fuera de servicio en el momento de la inspección y la tubería contiene defectos, el sistema de tubería se repara, se reclasifica o una combinación de estas a una condición que extienda la vida útil restante suficientemente para satisfacer al propietario-operador antes de volver a ponerlo en servicio.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>11.3 Uso de Aptitud para el Servicio</h4>
        <p>Al revisar los informes de inspección, a menudo se evalúan tanto los daños relacionados con la corrosión como los no relacionados con la corrosión.</p>
        <ul>
            <li>Para los daños relacionados con la corrosión, la evaluación preliminar puede ser contra criterios de selección simples, como comparar la pérdida de pared con la tolerancia de corrosión de diseño. Los sistemas de tuberías pueden luego ser evaluados adicionalmente utilizando API 579-1/ASME FFS-1 para determinar si la tubería puede permanecer en servicio.</li>
            <li>Para los daños no relacionados con la corrosión, debe utilizarse API 579-1/ASME FFS-1.</li>
        </ul>
        <p>Una vez establecidos los límites de daño aceptables, la tasa de daño debe determinarse basándose en la edad del equipo, informes de inspección anteriores, historial de operación y otra información relevante.</p>
        <p>La condición actual, la tasa de daño y los límites de daño aceptables juntos se utilizan para estimar la vida útil de servicio restante del equipo.</p>
        <p>Algunas jurisdicciones requieren que el propietario-operador tenga un programa de Aptitud para el Servicio aprobado antes de que pueda utilizarse API 579-1/ASME FFS-1.</p>
    </div>
    `
});