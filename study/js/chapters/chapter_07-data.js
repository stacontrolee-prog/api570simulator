// Registrar el capítulo 7
registerChapter({
    id: 7,
    title: "Inspection Data Evaluation, Analysis, and Recording",
    titleEs: "Evaluación, Análisis y Registro de Datos de Inspección",
    content: `<h2>Inspection Data Evaluation, Analysis, and Recording</h2>
    <h3>7.1 Corrosion Rate Determination</h3>
    <div class="subsection">
        <h4>7.1.1 General</h4>
        <p>The owner-operator may use either the point-to-point analysis method or a statistical analysis method, or a combination of both, to determine the LT or short-term (ST) corrosion rates.</p>
    </div>
    <div class="subsection">
        <h4>7.1.2 Point-to-Point Method</h4>
        <p>The LT corrosion rate of an individual CML shall be calculated from the following formula:</p>
        <p>Corrosion rate (LT) = (t<sub>initial</sub> - t<sub>actual</sub>) / time (years) between t<sub>initial</sub> and t<sub>actual</sub></p>
        <p>The ST corrosion rate of an individual CML shall be calculated from the following formula:</p>
        <p>Corrosion rate (ST) = (t<sub>previous</sub> - t<sub>actual</sub>) / time (years) between t<sub>previous</sub> and t<sub>actual</sub></p>
        <p>where</p>
        <p>t<sub>initial</sub> is the thickness, in inches (millimeters), at the same location as t<sub>actual</sub> measured at initial installation or at the commencement of a new corrosion rate environment;</p>
        <p>t<sub>previous</sub> is the thickness, in inches (millimeters), at the same location as t<sub>actual</sub> measured during one or more previous inspections.</p>
        <p>LT and ST corrosion rates should be compared to see which results in the shortest remaining life as part of the data assessment. The authorized inspector, in consultation with a corrosion specialist, shall select the corrosion rate that best reflects the current process (see 6.3.3 for inspection interval determination). Measurement error exists in all systems and should be well defined or understood and where possible contained in narrow error bands. This is particularly important in ST corrosion rate use where the error bands may result in misleading decisions.</p>
        <p>The inspector should consult with a corrosion specialist when the ST corrosion rate changes from the anticipated or previously identified rate to determine the cause (see API 574 for wider guidance). Appropriate responses to accelerated corrosion rates may include the following:</p>
        <ul>
            <li>obtaining additional UT thickness readings;</li>
            <li>using profile RT in lieu of, or to supplement UT readings;</li>
            <li>performing UT scans in suspect areas;</li>
            <li>performing other corrosion/process monitoring;</li>
            <li>reviewing changes in operations/process;</li>
            <li>revising the piping inspection plan;</li>
            <li>addressing non-conformances.</li>
        </ul>
        <p>Circuit corrosion rates should be estimated based on the anticipated damage mechanisms and operating conditions with a tolerance or range identified. Measured rates exceeding the established range signal the need to review the potential causes and adjust the inspection plan.</p>
    </div>
    <div class="subsection">
        <h4>7.1.3 Statistical Analysis Method</h4>
        <p>The owner-operator may elect to use a statistical analysis method (e.g. probability plots or related tools) to establish a representative corrosion, remaining life estimate, and/or reinspection date. Any statistical approach shall be documented. The statistical treatment of data should be based on representation of the various pipe components within the circuit. Statistical analysis employing point measurements is not applicable to piping circuits with significant localized unpredictable corrosion mechanisms (see additional notes and statistical analysis in 6.5.3). There are many statistical tools that can be employed once piping circuits have been properly established. While such calculations offer a convenient means to numerically summarize circuit data, it is often the combination of descriptive statistics plus data visualization through statistical plots that provide the most useful results.</p>
        <p>See API 574 for additional discussion on statistical analysis methods.</p>
    </div>
    <h3>7.2 Remaining Life Calculations</h3>
    <p>The remaining life shall be calculated from the following formula:</p>
    <p>Remaining life (years) = (t<sub>actual</sub> - t<sub>required</sub>) / corrosion rate [inches (mm) per year]</p>
    <p>where</p>
    <p>t<sub>actual</sub> is the actual thickness, in inches (millimeters), measured at the time of inspection for a given location or component as specified in 5.7.</p>
    <p>t<sub>required</sub> is the required thickness, in inches (millimeters), at the same location or component as the actual measurement computed by the design formulas (e.g. pressure and structural) before corrosion allowance and manufacturer's tolerance are added.</p>
    <h3>7.3 Newly Installed Piping Systems or Changes in Service</h3>
    <p>For a new piping system/circuit or for a piping system/circuit for which service conditions are being changed, one of the following methods shall be used to determine piping system/circuits probable corrosion rate. The remaining life and inspection interval can be determined from this rate.</p>
    <ul>
        <li>A corrosion rate may be calculated from data collected by the owner-operator on piping operating in the same or similar service.</li>
        <li>A corrosion rate may be determined through appropriately placed ultrasonic sensors on the piping.</li>
        <li>A corrosion rate may be estimated by a corrosion specialist.</li>
        <li>A corrosion rate may be estimated from published data on piping in same or similar service.</li>
    </ul>
    <p>If the probable corrosion rate cannot be determined by either method listed under a) or d) above, the initial thickness measurement should be established at appropriate intervals until a credible corrosion rate is established. Corrosion monitoring devices, such as corrosion coupons or corrosion probes, may be useful in establishing the timing of direct measurements. Subsequent measurements need to be established on appropriate intervals until the corrosion rate is established. If it is later determined that an inaccurate corrosion rate was assumed, the corrosion rate in the remaining life calculations shall be amended to reflect the actual corrosion rate.</p>
    <p>In a case where items listed a) through d) cannot be applied with confidence and to ensure that an unexpected, accelerated corrosion rate does not occur unidentified, the inspection plan shall include determining wall loss change rate on-stream by direct measurement techniques after 6 months of service. This may not determine an actual corrosion rate (because of potential measurement error) but ensuring that data are available to direct the inspection plan until a corrosion rate can be established. This is provided as a cautionary guideline due to the statistical variation in thickness readings taken in short interval, which may suggest a corrosion rate that is not truly indicative of the environment.</p>
    <h3>7.4 Existing and Replacement Piping</h3>
    <p>Corrosion rates shall be calculated using one of the methods identified in 7.1. For repaired or in-kind replacement piping, the corrosion rate shall be established based on the previous worst-case measured rate at the replacement location or the circuit average rate.</p>
    <p>If calculations indicate that an inaccurate rate of corrosion has been assumed, the rate to be used for the next period shall be adjusted to agree with the actual rate found.</p>
    <h3>7.5 MAWP Determination</h3>
    <p>The MAWP for the continued use of piping systems shall be established using the applicable code. Computations may be made for known materials if all the following essential details are known to comply with the principles of the applicable code:</p>
    <ul>
        <li>upper and/or lower temperature limits for specific materials;</li>
        <li>quality of materials and workmanship;</li>
        <li>inspection requirements;</li>
        <li>reinforcement of openings;</li>
        <li>any cyclical service requirements.</li>
    </ul>
    <p>For unknown materials, computations may be made assuming the lowest-grade material and joint efficiency in the applicable code. When the MAWP is recalculated, the wall thickness used in these computations shall be the actual thickness as determined by inspection minus twice the estimated corrosion loss before the date of the next inspection (see 6.3.3). Allowance shall be made for the other loadings in accordance with the applicable code. The applicable code allowances for pressure and temperature variations from the MAWP are permitted provided all the associated code criteria are satisfied.</p>
    <p>Annex C contains two examples of calculations of MAWP illustrating the use of the corrosion half-life concept.</p>
    <h3>7.6 Required Thickness Determination</h3>
    <p>The required thickness of a pipe shall be the greater of the pressure design thickness or the structural minimum thickness. For services with high risk, the piping engineer should consider increasing the required thickness to provide for unanticipated or unknown loadings, or undiscovered metal loss. See API 574, Section 10, for information on the determination of pressure design thicknesses, structural minimum thicknesses, minimum required thicknesses, and minimum alert thicknesses. Table 5 of API 574 provides examples of minimum alert thicknesses and default minimum structural thicknesses for carbon and low alloy steel piping operating below 400 °F (205 °C).</p>
    <h3>7.7 Assessment of Inspection Findings</h3>
    <p>Pressure-containing components found to have damage that could affect their load-carrying capability (pressure loads and other applicable loads, such as weight and wind) shall be evaluated for continued service, or the piping should be removed from service until corrective action/repairs are performed. Fitness For-Service evaluations, such as those documented in API 579-1/ASME FFS-1, should be used for this evaluation for the type of degradation being assessed.</p>
    <p>The following techniques may be used as applicable.</p>
    <ul>
        <li>To evaluate metal loss more than the corrosion allowance, a Fitness-For-Service assessment may be performed in accordance with one of the following parts of API 579-1/ASME FFS-1. This assessment requires the use of a future corrosion allowance, which shall be established based on 7.1.</li>
        <li>Assessment of general metal loss—API 579-1/ASME FFS-1, Part 4.</li>
        <li>Assessment of local metal loss—API 579-1/ASME FFS-1, Part 5.</li>
        <li>Assessment of pitting corrosion—API 579-1/ASME FFS-1, Part 6.</li>
        <li>To evaluate blisters and laminations, a Fitness-for-Service assessment should be performed in accordance with API 579-1/ASME FFS-1, Part 7. In some cases, this evaluation will require the use of a future corrosion allowance, which shall be established based on 7.1.</li>
        <li>To evaluate weld misalignment and piping distortions, a Fitness-for-Service assessment should be performed in accordance with API 579-1/ASME FFS-1, Part 8.</li>
        <li>To evaluate crack-like flaws, a Fitness-for-Service assessment should be performed in accordance with API 579-1/ ASME FFS-1, Part 9.</li>
        <li>To evaluate the effects of fire damage, a Fitness-for-Service assessment should be performed in accordance with API 579-1/ASME FFS-1, Part 11.</li>
    </ul>
    <h3>7.8 Piping Stress Analysis</h3>
    <p>Piping shall be supported and guided so that:</p>
    <ul>
        <li>its weight is carried safely;</li>
        <li>it has sufficient flexibility for thermal expansion or contraction;</li>
        <li>it does not vibrate excessively;</li>
        <li>accounts for other loads (e.g. those included in the original code of construction).</li>
    </ul>
    <p>Piping flexibility is of increasing concern the larger the diameter of the piping and the greater the difference between ambient and operating temperature conditions.</p>
    <p>Piping stress analysis to assess system flexibility and support adequacy is not normally performed as part of a piping inspection. However, many existing piping systems were analyzed as part of their original design or as part of a rerating or modification, and the results of these analyses can be useful in developing inspection plans. When unexpected movement of a piping system is observed, such as during an external visual inspection (see 5.5.5), the inspector should discuss these observations with the piping engineer and evaluate the need for conducting a piping stress analysis.</p>
    <p>Piping stress analysis can identify the most highly stressed components in a piping system and predict the thermal movement of the system when it is placed in operation. This information can be used to concentrate inspection efforts at the locations most prone to fatigue damage from thermal expansion (heat up and cool down) cycles and/or creep damage in high-temperature piping. Comparing predicted thermal movements with observed movement can help identify the occurrence of unexpected operating conditions and deterioration of guides and supports. Consultation with the piping engineer may be necessary to explain observed deviations from the analysis predictions, particularly for complicated systems involving multiple supports and guides between end points.</p>
    <p>Piping stress analysis also can be employed to help solve observed piping vibration problems. The natural frequencies in which a piping system will vibrate can be predicted by analysis. The effects of additional guiding can be evaluated to assess its ability to control vibration by increasing the system's natural frequencies beyond the frequency of exciting forces, such as machine rotational speed. It is important to determine that guides added to control vibration do not adversely restrict thermal expansion.</p>
    <h3>7.9 Reporting and Records for Piping System Inspection</h3>
    <div class="subsection">
        <h4>7.9.1 Records</h4>
        <p>Piping system owner-operators shall maintain records of their piping systems and PRDs. Records shall be maintained throughout the service life of each piping system. As a part of these records, inspection and maintenance records shall be regularly updated to include new information pertinent to the operation, inspection, and maintenance history of the piping system. See also API 574 for more information of piping system records.</p>
    </div>
    <div class="subsection">
        <h4>7.9.2 Types of Piping Records</h4>
        <p>Piping system and PRD records shall contain four types of information pertinent to mechanical integrity as follows.</p>
        <ul>
            <li>Fabrication, construction, and design information to the extent available—for example, manufacturer's data reports, material test reports, weld maps, welding procedure specification (WPS)/procedure qualification record (PQR), design specification data, piping design calculations, NDE records, heat treat records, PRD sizing calculations, and construction drawings.</li>
            <li>Inspection history—for example, inspection reports and data for each type of inspection conducted (e.g. internal, external, and thickness measurements) and inspection recommendations for repair. Inspection reports shall document the date of each inspection and/or examination, the date of the next scheduled inspection, the name (or initials) of the person who performed the inspection and/or examination, the serial number or other identifier of the equipment inspected, a description of the inspection and/or examination performed, and the results of the inspection and/or examination. When data are collected using equipment that requires calibration prior, during, or after use, calibration records should be provided with the inspection results. Piping RBI records should be in accordance with API 580.</li>
            <li>Repair, alteration, and engineering evaluation information—for example:
                <ul>
                    <li>repair and alteration forms if prepared;</li>
                    <li>reports indicating that piping systems still in-service with either identified deficiencies, temporary repairs, or recommendations for repair are suitable for continued service until repairs can be completed; and</li>
                    <li>rerating documentation, including rerating calculations and new design conditions.</li>
                </ul>
            </li>
            <li>Fitness-For-Service assessment documentation requirements are described in API 579-1/ASME FFS-1; specific documentation requirements for the type of flaw being assessed are provided in the appropriate part of API 579-1/ASME FFS-1.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.9.3 Operating and Maintenance Records</h4>
        <p>Site operating and maintenance records, such as operating conditions, including process upsets that may affect mechanical integrity, changes in-service, and mechanical damage from maintenance, should also be available to the inspector.</p>
    </div>
    <div class="subsection">
        <h4>7.9.4 Computer Records</h4>
        <p>A computer-based system for storing, calculating, and analyzing data—an IDMS—should be utilized when considering the volume of data that will be generated as part of a piping inspection program. The IDMS is useful for the following:</p>
        <ul>
            <li>storing and analyzing the actual thickness readings;</li>
            <li>calculating ST and LT corrosion rates, retirement dates, and minimum required thickness;</li>
            <li>highlighting areas of high corrosion rates, piping close to the minimum required thickness, and other information;</li>
            <li>inspection planning, including next inspection due dates, intervals, and deferrals;</li>
            <li>recommendations for repairs and their due dates;</li>
            <li>tracking temporary repairs.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.9.5 Piping Circuit Records</h4>
        <p>The following information should be recorded for each piping circuit on which CMLs are located:</p>
        <ul>
            <li>material of construction/piping specification;</li>
            <li>piping diameter;</li>
            <li>operating and design pressures and temperatures;</li>
            <li>ANSI flange rating;</li>
            <li>process fluids;</li>
            <li>piping classification (if RBI is not being used);</li>
            <li>insulation, heat tracing, postweld heat treatment (PWHT);</li>
            <li>whether the circuit is a deadleg, injection point, intermittent service, or other special circuit;</li>
            <li>the corrosion rate and remaining service life of, at least, the limiting examination point on the circuit;</li>
            <li>maximum interval for external inspection;</li>
            <li>maximum interval for thickness measurement inspection;</li>
            <li>any unusual or localized corrosion mode that would require specialized inspection techniques;</li>
            <li>circuit features that might subject it to rapid corrosion increases in the event of a process upset or loss of injection fluid flow.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.9.6 ISOs</h4>
        <p>The primary purpose of inspection ISOs is to identify the location of CMLs and to identify the location of any recommended maintenance. Inspection ISOs are recommended and should contain the following:</p>
        <ul>
            <li>all significant components of the piping circuits (e.g. all valves, elbows, tees, and branches);</li>
            <li>material of construction and specification breaks;</li>
            <li>all deadlegs, mix points, injection points, and other process connections to the primary piping system;</li>
            <li>diameter of piping;</li>
            <li>insulated or not;</li>
            <li>all secondary piping for Class 1 (or high-consequence RBI) piping circuits;</li>
            <li>secondary piping up to the block valve that is normally used for Class 2 (or appropriate RBI consequence) unit pipe;</li>
            <li>all CMLs with appropriate information to locate the CMLs;</li>
            <li>adequate orientation and scale to provide legible detail;</li>
            <li>piping-circuit numbers and changes;</li>
            <li>continuation drawing numbers;</li>
            <li>location and type of pipe supports.</li>
        </ul>
        <p>Inspection ISOs are recommended for all unit piping and all Class 1 (or high-consequence RBI) piperack piping on which CMLs have been identified for thickness measurement. Alternate methods for piperack piping that adequately describe the system without ISOs may be used.</p>
        <p>Inspection ISOs are recommended for Class 2 (or appropriate RBI consequence) rack piping with CMLs, except that grid type drawings may be used if all other details are shown. The use of local details or local isometrics is acceptable to show the location of CMLs on grid drawings.</p>
        <p>Inspection ISOs do not need to be drawn to scale or show dimensions unless necessary to locate CMLs.</p>
    </div>
    <div class="subsection">
        <h4>7.9.7 Inspection Reports and Records</h4>
        <p>Documented results (reports and/or records) of the inspection shall be approved by the responsible owner operator inspector, engineer, or qualified designee. These should be posted into the appropriate IDMS within 90 days of either the completion of the inspection or the operational start-up of the associated equipment.</p>
    </div>
    <h3>7.10 Inspection Recommendations for Repair or Replacement</h3>
    <div class="subsection">
        <h4>7.10.1 General</h4>
        <p>A management system for identifying, tracking, and periodically reviewing repair or replacement recommendations (includes recommendations for non-conformances) that impact piping integrity is required and shall be kept current. The recommendation tracking system shall include the following:</p>
        <ul>
            <li>recommended corrective action or repair;</li>
            <li>due or target date for completion of recommended action;</li>
            <li>piping system identifier (e.g. piping system or circuit number) that the recommendation affects;</li>
            <li>lists of temporary repairs that may require follow-up monitoring and eventual replacement;</li>
            <li>Fitness-For-Service or derating documentation, if necessary;</li>
            <li>any required monitoring or mitigation steps;</li>
            <li>date recommendation is made;</li>
            <li>planned repair date.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.10.2 Review of Inspection Repair Recommendations</h4>
        <p>Inspection repair recommendations can be changed or deleted after review by the inspector or inspection supervisor and optionally by piping engineer. If inspection repair recommendations are changed or deleted, inspection records shall record the reasoning, date of change/deletion, and name of person who did the review.</p>
    </div>
    <h3>7.11 Inspection Records for External Inspections</h3>
    <p>Results of external piping system inspections shall be documented. A combination of checklist and narrative recordkeeping is recommended when documenting inspection results. Checklists should serve the purpose of reminding recordkeepers of all the issues important to be included in piping inspection records, but narratives serve the purpose better than checklists for thoroughly documenting inspections results. The location of CUI inspections, either by insulation removal or NDE, should be identified. The location may be identified by establishing a CML on the appropriate inspection ISO or with marked-up construction ISOs and narrative reports.</p>
    <h3>7.12 Piping Failure and Near-miss Reports</h3>
    <p>Failures in piping that occur because of corrosion, cracking, or mechanical damage shall be recorded and reported to the owner-operator. Failures in piping systems shall be investigated to identify and correct the cause of failure. Near-misses in piping that occur from similar causes as failures should also be reported to the owner-operator and appropriately investigated to identify and correct the cause. See API 585 for more information on how to investigate piping incidents (i.e. failures, near-misses, and unanticipated discoveries). Temporary repairs to piping systems shall be documented in the inspection records.</p>
    <h3>7.13 Deferral of Inspections, Tests, and Examinations</h3>
    <div class="subsection">
        <h4>7.13.1 General</h4>
        <p>Inspections, tests, or examinations for piping and associated PRDs that cannot be completed by their due date may be deferred for a specified period, subject to the requirements in the following subsections. Piping or PRDs that are operated beyond the due date without a valid deferral in accordance with these requirements are not permitted by this code. Deferrals should be the occasional exception, not a frequent occurrence. All deferrals shall be documented. Piping or PRDs that were granted a deferral can be operated to the new due date without being considered overdue for the deferred inspections, tests, or examinations.</p>
    </div>
    <div class="subsection">
        <h4>7.13.2 Simplified Deferral</h4>
        <p>A simplified short-term deferral may be approved by the owner-operator if all the following conditions are met.</p>
        <ul>
            <li>The current due date for the inspection, test, or examination has not been previously deferred.</li>
            <li>The proposed new due date would not increase the current inspection/servicing interval or due date by more than 10 % or 6 months, whichever is less.</li>
            <li>A review of the current operating conditions, as well as the piping or PRD history, has been completed with results that support a short-term/one-time deferral.</li>
            <li>The deferral request has the consent of the inspector representing or employed by the owner-operator and an appropriate operations management representative(s).</li>
            <li>Updates to the piping or PRD records with deferral documentation are complete before it is operated beyond the original due date.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.13.3 Deferral</h4>
        <p>Deferral requests not meeting the conditions of a simplified deferral shall follow a documented deferral procedure/process that includes all the following minimum requirements.</p>
        <ul>
            <li>Perform a documented risk assessment or update an existing RBI assessment to determine if the proposed deferral date would increase risk above acceptable risk threshold levels as defined by the owner-operator. The risk assessment may include any of the following elements as deemed necessary by the owner-operator:
                <ul>
                    <li>fitness for service analysis results;</li>
                    <li>consequence of failure;</li>
                    <li>applicable damage mechanism susceptibilities and rates of degradation;</li>
                    <li>calculated remaining life;</li>
                    <li>historical conditions/findings from inspections, tests, and examinations and their technical significance;</li>
                    <li>extent and/or probability of detection (i.e. effectiveness) of previous inspections, tests, or examinations, as well as the amount of time that has elapsed since they were last performed;</li>
                    <li>considerations for any previous changes to inspection or test intervals (e.g. reductions in interval due to deteriorating conditions);</li>
                    <li>disposition(s) of any previous requests for deferral on the same piping or PRD;</li>
                    <li>historical conditions/findings for piping or PRDs in similar service, if available.</li>
                </ul>
            </li>
            <li>Determine if the deferral requires the implementation of or modification to existing IOWs or operating process control limits.</li>
            <li>Review the current inspection plan to determine if modifications are needed to support the deferral.</li>
            <li>Obtain the consent and approval of appropriate piping personnel, including the inspector representing or employed by the owner-operator and appropriate operations management representative(s).</li>
            <li>Updates to the piping or PRD records with deferral documentation are complete before it is operated beyond the original due date.</li>
        </ul>
    </div>
    <h3>7.14 Deferral of Inspection Repair Recommendation Due Dates</h3>
    <p>The deferral of inspection recommendations should be the occasional exception not a frequent occurrence. Inspection and repair recommendations that cannot be completed by their due date can be deferred for a specific period. The deferral, including the justification of the due date and approval of the deferral by appropriate site personnel, shall be documented in the inspection records. At a minimum, this shall include the inspector and inspection supervisor; however, the owner-operator should include the appropriate site management representative when the authority to accept higher-than-normal operating risk is required. Inspection recommendations that have not been completed by the required due date without a documented and approved deferral are considered overdue for completion. Piping and piping components shall remain at or above the minimum required thickness during the deferral period. The minimum required thickness can be determined using methods defined in 7.6.</p>`,
    contentEs: `<h2>Evaluación, Análisis y Registro de Datos de Inspección</h2>
    <h3>7.1 Determinación de la Tasa de Corrosión</h3>
    <div class="subsection">
        <h4>7.1.1 General</h4>
        <p>El propietario-operador puede utilizar el método de análisis punto a punto, un método de análisis estadístico o una combinación de ambos para determinar las tasas de corrosión a largo plazo (LT) o a corto plazo (ST).</p>
    </div>
    <div class="subsection">
        <h4>7.1.2 Método Punto a Punto</h4>
        <p>La tasa de corrosión LT de un CML individual se calculará mediante la siguiente fórmula:</p>
        <p>Tasa de corrosión (LT) = (t<sub>inicial</sub> - t<sub>actual</sub>) / tiempo (años) entre t<sub>inicial</sub> y t<sub>actual</sub></p>
        <p>La tasa de corrosión ST de un CML individual se calculará mediante la siguiente fórmula:</p>
        <p>Tasa de corrosión (ST) = (t<sub>anterior</sub> - t<sub>actual</sub>) / tiempo (años) entre t<sub>anterior</sub> y t<sub>actual</sub></p>
        <p>donde</p>
        <p>t<sub>inicial</sub> es el espesor, en pulgadas (milímetros), en la misma ubicación que t<sub>actual</sub> medido en la instalación inicial o al comienzo de un nuevo entorno de tasa de corrosión;</p>
        <p>t<sub>anterior</sub> es el espesor, en pulgadas (milímetros), en la misma ubicación que t<sub>actual</sub> medido durante una o más inspecciones anteriores.</p>
        <p>Las tasas de corrosión LT y ST deben compararse para ver cuál resulta en la vida útil restante más corta como parte de la evaluación de datos. El inspector autorizado, en consulta con un especialista en corrosión, seleccionará la tasa de corrosión que mejor refleje el proceso actual (véase 6.3.3 para la determinación del intervalo de inspección). Existe un error de medición en todos los sistemas y debe estar bien definido o entendido y, cuando sea posible, contenido en bandas de error estrechas. Esto es particularmente importante en el uso de la tasa de corrosión ST, donde las bandas de error pueden resultar en decisiones engañosas.</p>
        <p>El inspector debe consultar con un especialista en corrosión cuando la tasa de corrosión ST cambie con respecto a la tasa anticipada o identificada previamente para determinar la causa (véase API 574 para mayor orientación). Las respuestas apropiadas a las tasas de corrosión aceleradas pueden incluir las siguientes:</p>
        <ul>
            <li>obtener lecturas adicionales de espesor UT;</li>
            <li>utilizar perfil RT en lugar de, o para complementar las lecturas UT;</li>
            <li>realizar escaneos UT en áreas sospechosas;</li>
            <li>realizar otro monitoreo de corrosión/proceso;</li>
            <li>revisar cambios en las operaciones/proceso;</li>
            <li>revisar el plan de inspección de tuberías;</li>
            <li>abordar no conformidades.</li>
        </ul>
        <p>Las tasas de corrosión del circuito deben estimarse basándose en los mecanismos de daño anticipados y las condiciones de operación con una tolerancia o rango identificado. Las tasas medidas que exceden el rango establecido indican la necesidad de revisar las causas potenciales y ajustar el plan de inspección.</p>
    </div>
    <div class="subsection">
        <h4>7.1.3 Método de Análisis Estadístico</h4>
        <p>El propietario-operador puede optar por utilizar un método de análisis estadístico (por ejemplo, gráficos de probabilidad o herramientas relacionadas) para establecer una corrosión representativa, una estimación de vida útil restante y/o una fecha de reinspección. Cualquier enfoque estadístico deberá documentarse. El tratamiento estadístico de los datos debe basarse en la representación de los diversos componentes de tubería dentro del circuito. El análisis estadístico que emplea mediciones puntuales no es aplicable a circuitos de tuberías con mecanismos de corrosión localizados significativos e impredecibles (véanse notas adicionales y análisis estadístico en 6.5.3). Hay muchas herramientas estadísticas que pueden emplearse una vez que los circuitos de tuberías han sido establecidos adecuadamente. Si bien dichos cálculos ofrecen un medio conveniente para resumir numéricamente los datos del circuito, a menudo es la combinación de estadísticas descriptivas más la visualización de datos a través de gráficos estadísticos lo que proporciona los resultados más útiles.</p>
        <p>Consulte API 574 para obtener una discusión adicional sobre los métodos de análisis estadístico.</p>
    </div>
    <h3>7.2 Cálculos de Vida Útil Restante</h3>
    <p>La vida útil restante se calculará mediante la siguiente fórmula:</p>
    <p>Vida útil restante (años) = (t<sub>actual</sub> - t<sub>requerido</sub>) / tasa de corrosión [pulgadas (mm) por año]</p>
    <p>donde</p>
    <p>t<sub>actual</sub> es el espesor real, en pulgadas (milímetros), medido en el momento de la inspección para una ubicación o componente determinado según lo especificado en 5.7.</p>
    <p>t<sub>requerido</sub> es el espesor requerido, en pulgadas (milímetros), en la misma ubicación o componente que la medición real calculada por las fórmulas de diseño (por ejemplo, presión y estructural) antes de agregar la tolerancia de corrosión y la tolerancia del fabricante.</p>
    <h3>7.3 Sistemas de Tuberías Recién Instalados o Cambios en Servicio</h3>
    <p>Para un sistema/circuito de tuberías nuevo o para un sistema/circuito de tuberías cuyas condiciones de servicio están siendo modificadas, se utilizará uno de los siguientes métodos para determinar la tasa de corrosión probable del sistema/circuito de tuberías. La vida útil restante y el intervalo de inspección pueden determinarse a partir de esta tasa.</p>
    <ul>
        <li>Una tasa de corrosión puede calcularse a partir de datos recopilados por el propietario-operador en tuberías que operan en el mismo o similar servicio.</li>
        <li>Una tasa de corrosión puede determinarse mediante sensores ultrasónicos colocados adecuadamente en la tubería.</li>
        <li>Una tasa de corrosión puede ser estimada por un especialista en corrosión.</li>
        <li>Una tasa de corrosión puede estimarse a partir de datos publicados sobre tuberías en el mismo o similar servicio.</li>
    </ul>
    <p>Si la tasa de corrosión probable no puede determinarse mediante ninguno de los métodos enumerados en a) o d) anteriores, la medición inicial del espesor debe establecerse a intervalos apropiados hasta que se establezca una tasa de corrosión creíble. Los dispositivos de monitoreo de corrosión, como cupones de corrosión o sondas de corrosión, pueden ser útiles para establecer el momento de las mediciones directas. Las mediciones posteriores deben establecerse a intervalos apropiados hasta que se establezca la tasa de corrosión. Si posteriormente se determina que se asumió una tasa de corrosión inexacta, la tasa de corrosión en los cálculos de vida útil restante deberá modificarse para reflejar la tasa de corrosión real.</p>
    <p>En un caso en que los elementos enumerados de a) a d) no puedan aplicarse con confianza y para garantizar que no ocurra una tasa de corrosión acelerada inesperada sin identificar, el plan de inspección deberá incluir la determinación de la tasa de cambio de pérdida de pared en operación mediante técnicas de medición directa después de 6 meses de servicio. Esto puede no determinar una tasa de corrosión real (debido al posible error de medición), pero garantiza que haya datos disponibles para dirigir el plan de inspección hasta que pueda establecerse una tasa de corrosión. Esto se proporciona como una directriz de precaución debido a la variación estadística en las lecturas de espesor tomadas en intervalos cortos, que pueden sugerir una tasa de corrosión que no es verdaderamente indicativa del entorno.</p>
    <h3>7.4 Tuberías Existentes y de Reemplazo</h3>
    <p>Las tasas de corrosión se calcularán utilizando uno de los métodos identificados en 7.1. Para tuberías reparadas o de reemplazo del mismo tipo, la tasa de corrosión deberá establecerse basándose en la tasa medida del peor caso anterior en la ubicación de reemplazo o la tasa promedio del circuito.</p>
    <p>Si los cálculos indican que se ha asumido una tasa de corrosión inexacta, la tasa que se utilizará para el próximo período deberá ajustarse para coincidir con la tasa real encontrada.</p>
    <h3>7.5 Determinación de la MAWP</h3>
    <p>La MAWP para el uso continuado de sistemas de tuberías deberá establecerse utilizando el código aplicable. Los cálculos pueden realizarse para materiales conocidos si se conocen todos los siguientes detalles esenciales para cumplir con los principios del código aplicable:</p>
    <ul>
            <li>límites de temperatura superior y/o inferior para materiales específicos;</li>
            <li>calidad de materiales y mano de obra;</li>
            <li>requisitos de inspección;</li>
            <li>refuerzo de aberturas;</li>
            <li>cualquier requisito de servicio cíclico.</li>
        </ul>
    <p>Para materiales desconocidos, los cálculos pueden realizarse asumiendo el material de menor grado y la eficiencia de junta en el código aplicable. Cuando se recalcule la MAWP, el espesor de pared utilizado en estos cálculos será el espesor real determinado por inspección menos el doble de la pérdida de corrosión estimada antes de la fecha de la próxima inspección (véase 6.3.3). Deberá hacerse una provisión para otras cargas de acuerdo con el código aplicable. Las tolerancias del código aplicable para variaciones de presión y temperatura desde la MAWP están permitidas siempre que se satisfagan todos los criterios asociados del código.</p>
    <p>El Anexo C contiene dos ejemplos de cálculos de MAWP que ilustran el uso del concepto de vida media de corrosión.</p>
    <h3>7.6 Determinación del Espesor Requerido</h3>
    <p>El espesor requerido de una tubería será el mayor entre el espesor de diseño a presión o el espesor estructural mínimo. Para servicios con alto riesgo, el ingeniero de tuberías debe considerar aumentar el espesor requerido para proporcionar cargas imprevistas o desconocidas, o pérdida de metal no descubierta. Véase API 574, Sección 10, para obtener información sobre la determinación de espesores de diseño a presión, espesores estructurales mínimos, espesores mínimos requeridos y espesores mínimos de alerta. La Tabla 5 de API 574 proporciona ejemplos de espesores mínimos de alerta y espesores estructurales mínimos predeterminados para tuberías de acero al carbono y de baja aleación que operan por debajo de 400 °F (205 °C).</p>
    <h3>7.7 Evaluación de los Hallazgos de Inspección</h3>
    <p>Los componentes que contienen presión que se encuentren con daños que puedan afectar su capacidad de carga (cargas de presión y otras cargas aplicables, como peso y viento) deberán evaluarse para servicio continuado, o la tubería deberá retirarse de servicio hasta que se realicen acciones correctivas/reparaciones. Las evaluaciones de Aptitud para el Servicio (Fitness-For-Service), como las documentadas en API 579-1/ASME FFS-1, deben utilizarse para esta evaluación para el tipo de degradación que se está evaluando.</p>
    <p>Pueden utilizarse las siguientes técnicas según corresponda.</p>
    <ul>
            <li>Para evaluar la pérdida de metal mayor que la tolerancia de corrosión, puede realizarse una evaluación de Aptitud para el Servicio de acuerdo con una de las siguientes partes de API 579-1/ASME FFS-1. Esta evaluación requiere el uso de una tolerancia de corrosión futura, que deberá establecerse basándose en 7.1.</li>
            <li>Evaluación de pérdida general de metal—API 579-1/ASME FFS-1, Parte 4.</li>
            <li>Evaluación de pérdida local de metal—API 579-1/ASME FFS-1, Parte 5.</li>
            <li>Evaluación de corrosión por picaduras—API 579-1/ASME FFS-1, Parte 6.</li>
            <li>Para evaluar ampollas y laminaciones, debe realizarse una evaluación de Aptitud para el Servicio de acuerdo con API 579-1/ASME FFS-1, Parte 7. En algunos casos, esta evaluación requerirá el uso de una tolerancia de corrosión futura, que deberá establecerse basándose en 7.1.</li>
            <li>Para evaluar la desalineación de soldaduras y las distorsiones de tuberías, debe realizarse una evaluación de Aptitud para el Servicio de acuerdo con API 579-1/ASME FFS-1, Parte 8.</li>
            <li>Para evaluar defectos tipo grieta, debe realizarse una evaluación de Aptitud para el Servicio de acuerdo con API 579-1/ASME FFS-1, Parte 9.</li>
            <li>Para evaluar los efectos del daño por fuego, debe realizarse una evaluación de Aptitud para el Servicio de acuerdo con API 579-1/ASME FFS-1, Parte 11.</li>
        </ul>
    <h3>7.8 Análisis de Esfuerzos de Tuberías</h3>
    <p>Las tuberías deben estar soportadas y guiadas de manera que:</p>
    <ul>
            <li>su peso sea soportado de manera segura;</li>
            <li>tengan suficiente flexibilidad para la expansión o contracción térmica;</li>
            <li>no vibren excesivamente;</li>
            <li>se tengan en cuenta otras cargas (por ejemplo, las incluidas en el código de construcción original).</li>
        </ul>
    <p>La flexibilidad de las tuberías es de mayor preocupación cuanto mayor sea el diámetro de la tubería y mayor sea la diferencia entre las condiciones ambientales y de temperatura de operación.</p>
    <p>El análisis de esfuerzos de tuberías para evaluar la flexibilidad del sistema y la adecuación de los soportes normalmente no se realiza como parte de una inspección de tuberías. Sin embargo, muchos sistemas de tuberías existentes fueron analizados como parte de su diseño original o como parte de una reclasificación o modificación, y los resultados de estos análisis pueden ser útiles para desarrollar planes de inspección. Cuando se observe un movimiento inesperado de un sistema de tuberías, como durante una inspección visual externa (véase 5.5.5), el inspector debe discutir estas observaciones con el ingeniero de tuberías y evaluar la necesidad de realizar un análisis de esfuerzos de tuberías.</p>
    <p>El análisis de esfuerzos de tuberías puede identificar los componentes más esforzados en un sistema de tuberías y predecir el movimiento térmico del sistema cuando se pone en operación. Esta información puede utilizarse para concentrar los esfuerzos de inspección en las ubicaciones más propensas al daño por fatiga por ciclos de expansión térmica (calentamiento y enfriamiento) y/o daño por creep en tuberías de alta temperatura. La comparación de los movimientos térmicos previstos con el movimiento observado puede ayudar a identificar la ocurrencia de condiciones operativas inesperadas y el deterioro de guías y soportes. Puede ser necesaria la consulta con el ingeniero de tuberías para explicar las desviaciones observadas de las predicciones del análisis, particularmente para sistemas complicados que involucran múltiples soportes y guías entre puntos finales.</p>
    <p>El análisis de esfuerzos de tuberías también puede emplearse para ayudar a resolver problemas de vibración observados en las tuberías. Las frecuencias naturales en las que vibrará un sistema de tuberías pueden predecirse mediante análisis. Los efectos de guías adicionales pueden evaluarse para evaluar su capacidad para controlar la vibración aumentando las frecuencias naturales del sistema más allá de la frecuencia de las fuerzas excitadoras, como la velocidad de rotación de la máquina. Es importante determinar que las guías agregadas para controlar la vibración no restrinjan adversamente la expansión térmica.</p>
    <h3>7.9 Informes y Registros para la Inspección de Sistemas de Tuberías</h3>
    <div class="subsection">
        <h4>7.9.1 Registros</h4>
        <p>Los propietarios-operadores de sistemas de tuberías deberán mantener registros de sus sistemas de tuberías y PRD. Los registros deberán mantenerse durante toda la vida útil de servicio de cada sistema de tuberías. Como parte de estos registros, los registros de inspección y mantenimiento deberán actualizarse regularmente para incluir nueva información pertinente para la operación, inspección e historial de mantenimiento del sistema de tuberías. Véase también API 574 para obtener más información sobre los registros de sistemas de tuberías.</p>
    </div>
    <div class="subsection">
        <h4>7.9.2 Tipos de Registros de Tuberías</h4>
        <p>Los registros de sistemas de tuberías y PRD deberán contener cuatro tipos de información pertinentes para la integridad mecánica de la siguiente manera.</p>
        <ul>
            <li>Información de fabricación, construcción y diseño en la medida de lo disponible—por ejemplo, informes de datos del fabricante, informes de pruebas de materiales, mapas de soldaduras, especificación de procedimiento de soldadura (WPS)/registro de calificación de procedimiento (PQR), datos de especificación de diseño, cálculos de diseño de tuberías, registros NDE, registros de tratamiento térmico, cálculos de dimensionamiento de PRD y dibujos de construcción.</li>
            <li>Historial de inspección—por ejemplo, informes y datos de inspección para cada tipo de inspección realizada (por ejemplo, interna, externa y mediciones de espesor) y recomendaciones de inspección para reparación. Los informes de inspección deberán documentar la fecha de cada inspección y/o examen, la fecha de la próxima inspección programada, el nombre (o iniciales) de la persona que realizó la inspección y/o examen, el número de serie u otro identificador del equipo inspeccionado, una descripción de la inspección y/o examen realizado, y los resultados de la inspección y/o examen. Cuando los datos se recopilen utilizando equipos que requieren calibración antes, durante o después del uso, los registros de calibración deben proporcionarse con los resultados de la inspección. Los registros de RBI de tuberías deben estar de acuerdo con API 580.</li>
            <li>Información de reparación, alteración y evaluación de ingeniería—por ejemplo:
                <ul>
                    <li>formularios de reparación y alteración si se preparan;</li>
                    <li>informes que indican que los sistemas de tuberías todavía en servicio con deficiencias identificadas, reparaciones temporales o recomendaciones de reparación son adecuados para servicio continuado hasta que puedan completarse las reparaciones; y</li>
                    <li>documentación de reclasificación, incluyendo cálculos de reclasificación y nuevas condiciones de diseño.</li>
                </ul>
            </li>
            <li>Los requisitos de documentación de evaluación de Aptitud para el Servicio se describen en API 579-1/ASME FFS-1; los requisitos de documentación específicos para el tipo de defecto que se está evaluando se proporcionan en la parte correspondiente de API 579-1/ASME FFS-1.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.9.3 Registros de Operación y Mantenimiento</h4>
        <p>Los registros de operación y mantenimiento del sitio, como las condiciones de operación, incluyendo las alteraciones del proceso que puedan afectar la integridad mecánica, los cambios en servicio y los daños mecánicos por mantenimiento, también deberán estar disponibles para el inspector.</p>
    </div>
    <div class="subsection">
        <h4>7.9.4 Registros Informáticos</h4>
        <p>Debe utilizarse un sistema informático para almacenar, calcular y analizar datos—un IDMS—cuando se considere el volumen de datos que se generarán como parte de un programa de inspección de tuberías. El IDMS es útil para lo siguiente:</p>
        <ul>
            <li>almacenar y analizar las lecturas reales de espesor;</li>
            <li>calcular tasas de corrosión ST y LT, fechas de retiro y espesor mínimo requerido;</li>
            <li>destacar áreas de altas tasas de corrosión, tuberías cercanas al espesor mínimo requerido y otra información;</li>
            <li>planificación de inspecciones, incluyendo próximas fechas de vencimiento de inspección, intervalos y aplazamientos;</li>
            <li>recomendaciones para reparaciones y sus fechas de vencimiento;</li>
            <li>seguimiento de reparaciones temporales.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.9.5 Registros de Circuitos de Tuberías</h4>
        <p>Debe registrarse la siguiente información para cada circuito de tuberías en el que se encuentren CML:</p>
        <ul>
            <li>material de construcción/especificación de tubería;</li>
            <li>diámetro de tubería;</li>
            <li>presiones y temperaturas de operación y diseño;</li>
            <li>clasificación de bridas ANSI;</li>
            <li>fluidos de proceso;</li>
            <li>clasificación de tubería (si no se utiliza RBI);</li>
            <li>aislamiento, trazado térmico, tratamiento térmico postsoldadura (PWHT);</li>
            <li>si el circuito es un deadleg, punto de inyección, servicio intermitente u otro circuito especial;</li>
            <li>la tasa de corrosión y la vida útil de servicio restante de, al menos, el punto de examen limitante en el circuito;</li>
            <li>intervalo máximo para inspección externa;</li>
            <li>intervalo máximo para inspección de medición de espesor;</li>
            <li>cualquier modo de corrosión inusual o localizado que requiera técnicas de inspección especializadas;</li>
            <li>características del circuito que puedan someterlo a aumentos rápidos de corrosión en caso de una alteración del proceso o pérdida del flujo de fluido de inyección.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.9.6 ISOs</h4>
        <p>El propósito principal de los ISO de inspección es identificar la ubicación de los CML y identificar la ubicación de cualquier mantenimiento recomendado. Se recomiendan los ISO de inspección y deben contener lo siguiente:</p>
        <ul>
            <li>todos los componentes significativos de los circuitos de tuberías (por ejemplo, todas las válvulas, codos, tes y ramificaciones);</li>
            <li>material de construcción y cambios de especificación;</li>
            <li>todos los deadlegs, puntos de mezcla, puntos de inyección y otras conexiones de proceso al sistema de tuberías principal;</li>
            <li>diámetro de tubería;</li>
            <li>aislado o no;</li>
            <li>toda la tubería secundaria para circuitos de tuberías Clase 1 (o de alta consecuencia RBI);</li>
            <li>tubería secundaria hasta la válvula de bloqueo que normalmente se utiliza para tubería de unidad Clase 2 (o de consecuencia RBI apropiada);</li>
            <li>todos los CML con información adecuada para localizar los CML;</li>
            <li>orientación y escala adecuadas para proporcionar detalles legibles;</li>
            <li>números de circuito de tubería y cambios;</li>
            <li>números de dibujos de continuación;</li>
            <li>ubicación y tipo de soportes de tubería.</li>
        </ul>
        <p>Se recomiendan los ISO de inspección para todas las tuberías de unidad y todas las tuberías de rack Clase 1 (o de alta consecuencia RBI) en las que se hayan identificado CML para medición de espesor. Pueden utilizarse métodos alternativos para tuberías de rack que describan adecuadamente el sistema sin ISO.</p>
        <p>Se recomiendan los ISO de inspección para tuberías de rack Clase 2 (o de consecuencia RBI apropiada) con CML, excepto que pueden utilizarse dibujos tipo cuadrícula si se muestran todos los demás detalles. El uso de detalles locales o isométricos locales es aceptable para mostrar la ubicación de los CML en dibujos de cuadrícula.</p>
        <p>Los ISO de inspección no necesitan dibujarse a escala ni mostrar dimensiones a menos que sea necesario para localizar los CML.</p>
    </div>
    <div class="subsection">
        <h4>7.9.7 Informes y Registros de Inspección</h4>
        <p>Los resultados documentados (informes y/o registros) de la inspección deberán ser aprobados por el inspector, ingeniero o delegado calificado responsable del propietario operador. Estos deberán publicarse en el IDMS apropiado dentro de los 90 días posteriores a la finalización de la inspección o la puesta en operación del equipo asociado.</p>
    </div>
    <h3>7.10 Recomendaciones de Inspección para Reparación o Reemplazo</h3>
    <div class="subsection">
        <h4>7.10.1 General</h4>
        <p>Se requiere un sistema de gestión para identificar, rastrear y revisar periódicamente las recomendaciones de reparación o reemplazo (incluye recomendaciones para no conformidades) que afecten la integridad de las tuberías, y deberá mantenerse actualizado. El sistema de seguimiento de recomendaciones deberá incluir lo siguiente:</p>
        <ul>
            <li>acción correctiva o reparación recomendada;</li>
            <li>fecha de vencimiento o objetivo para completar la acción recomendada;</li>
            <li>identificador del sistema de tuberías (por ejemplo, número de sistema o circuito de tuberías) que afecta la recomendación;</li>
            <li>listas de reparaciones temporales que puedan requerir monitoreo de seguimiento y eventual reemplazo;</li>
            <li>documentación de Aptitud para el Servicio o reducción de clasificación, si es necesario;</li>
            <li>cualquier paso de monitoreo o mitigación requerido;</li>
            <li>fecha en que se hace la recomendación;</li>
            <li>fecha de reparación planificada.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.10.2 Revisión de las Recomendaciones de Reparación de Inspección</h4>
        <p>Las recomendaciones de reparación de inspección pueden cambiarse o eliminarse después de la revisión por parte del inspector o supervisor de inspección y opcionalmente por el ingeniero de tuberías. Si las recomendaciones de reparación de inspección se cambian o eliminan, los registros de inspección deberán registrar el razonamiento, la fecha de cambio/eliminación y el nombre de la persona que realizó la revisión.</p>
    </div>
    <h3>7.11 Registros de Inspección para Inspecciones Externas</h3>
    <p>Los resultados de las inspecciones externas de sistemas de tuberías deberán documentarse. Se recomienda una combinación de lista de verificación y narrativa al documentar los resultados de la inspección. Las listas de verificación deben servir para recordar a los registradores todos los temas importantes que deben incluirse en los registros de inspección de tuberías, pero las narrativas sirven mejor que las listas de verificación para documentar completamente los resultados de las inspecciones. La ubicación de las inspecciones CUI, ya sea por remoción de aislamiento o NDE, debe identificarse. La ubicación puede identificarse estableciendo un CML en el ISO de inspección apropiado o con ISO de construcción marcados e informes narrativos.</p>
    <h3>7.12 Informes de Fallas y Casi Accidentes de Tuberías</h3>
    <p>Las fallas en las tuberías que ocurren debido a corrosión, agrietamiento o daño mecánico deberán registrarse y reportarse al propietario-operador. Las fallas en los sistemas de tuberías deberán investigarse para identificar y corregir la causa de la falla. Los casi accidentes en tuberías que ocurren por causas similares a las fallas también deberán reportarse al propietario-operador e investigarse adecuadamente para identificar y corregir la causa. Véase API 585 para obtener más información sobre cómo investigar incidentes en tuberías (es decir, fallas, casi accidentes y descubrimientos no anticipados). Las reparaciones temporales a los sistemas de tuberías deberán documentarse en los registros de inspección.</p>
    <h3>7.13 Aplazamiento de Inspecciones, Pruebas y Exámenes</h3>
    <div class="subsection">
        <h4>7.13.1 General</h4>
        <p>Las inspecciones, pruebas o exámenes para tuberías y PRD asociados que no puedan completarse en su fecha de vencimiento pueden aplazarse por un período específico, sujeto a los requisitos en las siguientes subsecciones. No se permite que las tuberías o PRD operen más allá de la fecha de vencimiento sin un aplazamiento válido de acuerdo con estos requisitos. Los aplazamientos deben ser la excepción ocasional, no una ocurrencia frecuente. Todos los aplazamientos deberán documentarse. Las tuberías o PRD que hayan recibido un aplazamiento pueden operar hasta la nueva fecha de vencimiento sin considerarse atrasadas para las inspecciones, pruebas o exámenes aplazados.</p>
    </div>
    <div class="subsection">
        <h4>7.13.2 Aplazamiento Simplificado</h4>
        <p>Un aplazamiento simplificado a corto plazo puede ser aprobado por el propietario-operador si se cumplen todas las siguientes condiciones.</p>
        <ul>
            <li>La fecha de vencimiento actual para la inspección, prueba o examen no ha sido previamente aplazada.</li>
            <li>La nueva fecha de vencimiento propuesta no aumentaría el intervalo de inspección/servicio actual o la fecha de vencimiento en más del 10 % o 6 meses, lo que sea menor.</li>
            <li>Se ha completado una revisión de las condiciones de operación actuales, así como del historial de la tubería o PRD, con resultados que respaldan un aplazamiento a corto plazo/único.</li>
            <li>La solicitud de aplazamiento tiene el consentimiento del inspector que representa o es empleado por el propietario-operador y el/los representante(s) apropiado(s) de gestión de operaciones.</li>
            <li>Las actualizaciones a los registros de tubería o PRD con documentación de aplazamiento están completas antes de operar más allá de la fecha de vencimiento original.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>7.13.3 Aplazamiento</h4>
        <p>Las solicitudes de aplazamiento que no cumplan con las condiciones de un aplazamiento simplificado deberán seguir un procedimiento/proceso de aplazamiento documentado que incluya todos los siguientes requisitos mínimos.</p>
        <ul>
            <li>Realizar una evaluación de riesgos documentada o actualizar una evaluación RBI existente para determinar si la fecha de aplazamiento propuesta aumentaría el riesgo por encima de los niveles umbral de riesgo aceptables según lo definido por el propietario-operador. La evaluación de riesgos puede incluir cualquiera de los siguientes elementos según lo considere necesario el propietario-operador:
                <ul>
                    <li>resultados de análisis de aptitud para el servicio;</li>
                    <li>consecuencia de la falla;</li>
                    <li>susceptibilidades de mecanismos de daño aplicables y tasas de degradación;</li>
                    <li>vida útil restante calculada;</li>
                    <li>condiciones/hallazgos históricos de inspecciones, pruebas y exámenes y su significado técnico;</li>
                    <li>extensión y/o probabilidad de detección (es decir, efectividad) de inspecciones, pruebas o exámenes anteriores, así como la cantidad de tiempo que ha transcurrido desde que se realizaron por última vez;</li>
                    <li>consideraciones para cualquier cambio previo en los intervalos de inspección o prueba (por ejemplo, reducciones en el intervalo debido a condiciones deterioradas);</li>
                    <li>disposición(es) de cualquier solicitud previa de aplazamiento en la misma tubería o PRD;</li>
                    <li>condiciones/hallazgos históricos para tuberías o PRD en servicio similar, si están disponibles.</li>
                </ul>
            </li>
            <li>Determinar si el aplazamiento requiere la implementación o modificación de IOW existentes o límites de control de proceso operativo.</li>
            <li>Revisar el plan de inspección actual para determinar si se necesitan modificaciones para respaldar el aplazamiento.</li>
            <li>Obtener el consentimiento y aprobación del personal de tuberías apropiado, incluyendo el inspector que representa o es empleado por el propietario-operador y el/los representante(s) apropiado(s) de gestión de operaciones.</li>
            <li>Las actualizaciones a los registros de tubería o PRD con documentación de aplazamiento están completas antes de operar más allá de la fecha de vencimiento original.</li>
        </ul>
    </div>
    <h3>7.14 Aplazamiento de las Fechas de Vencimiento de las Recomendaciones de Reparación de Inspección</h3>
    <p>El aplazamiento de las recomendaciones de inspección debe ser la excepción ocasional, no una ocurrencia frecuente. Las recomendaciones de inspección y reparación que no puedan completarse en su fecha de vencimiento pueden aplazarse por un período específico. El aplazamiento, incluyendo la justificación de la fecha de vencimiento y la aprobación del aplazamiento por parte del personal apropiado del sitio, deberá documentarse en los registros de inspección. Como mínimo, esto deberá incluir al inspector y al supervisor de inspección; sin embargo, el propietario-operador debe incluir al representante apropiado de la gerencia del sitio cuando se requiera la autoridad para aceptar un riesgo operativo superior al normal. Las recomendaciones de inspección que no se hayan completado en la fecha de vencimiento requerida sin un aplazamiento documentado y aprobado se consideran atrasadas para su finalización. Las tuberías y componentes de tuberías deberán mantenerse en o por encima del espesor mínimo requerido durante el período de aplazamiento. El espesor mínimo requerido puede determinarse utilizando los métodos definidos en 7.6.</p>`
});