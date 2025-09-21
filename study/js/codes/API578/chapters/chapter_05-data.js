// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 5
registerChapter('API578', {
    id: 5,
    title: "Material Verification Programs",
    titleEs: "Programas de Verificación de Materiales",
    content: `<h3>5 Material Verification Programs</h3>
    <div class="subsection">
        <h4>5.1 General</h4>
        <p>The owner/operator shall establish a written MVP indicating the extent and type of PMI and/or other testing and administrative methods to be conducted during the construction of new assets, retroactively on existing assets, and during the maintenance, repair, or alteration of existing assets.</p>
        <p>For higher-risk systems, the owner/operator should consider the need for employing a higher extent of in-process and final examination (up to 100 %) rather than random sampling, which may be more appropriate for lower risk systems. The owner/operator should also consider the need to conduct examinations after fabrication is complete at the point of installation to ensure that inadvertent substitutions did not occur.</p>
    </div>
    
    <div class="subsection">
        <h4>5.2 Asset Components Included in an MVP</h4>
        <p>Examples of pressure-containing components exposed to process conditions that are found in equipment and systems that may require an MVP or PMI include, but are not limited to, the following:</p>
        <ul>
            <li>pipe lengths;</li>
            <li>pipe fittings, such as tees, elbows, reducers, caps, special pipe components, blinds, and plugs;</li>
            <li>fired heater tubes (plain);</li>
            <li>heater/cooler finned tubes;</li>
            <li>flanges;</li>
            <li>forgings;</li>
            <li>plate material;</li>
            <li>valves-process valves, control valves, and relief valves;</li>
            <li>welds;</li>
            <li>instrumentation;</li>
            <li>weld overlays, liners, and cladding;</li>
            <li>bolting;</li>
            <li>expansion joints and bellows;</li>
            <li>gaskets;</li>
            <li>rotating equipment.</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>5.3 Mill Test Reports and Usage in an MVP</h4>
        <p>MTRs should not be considered a substitute for PMI because such documents have historically not always been accurate. However, MTRs are an important part of an overall material quality assurance program.</p>
    </div>
    
    <div class="subsection">
        <h4>5.4 Roles and Responsibilities</h4>
        <p>An MVP may involve participation of several groups within the operating plant or the shop of a contractor, distributor, or fabricator. When establishing an MVP, consideration should be given to the roles and responsibilities that each group has within the specific organization. These roles and responsibilities should be clearly defined and documented. In the operating plant, this can include those groups responsible for purchasing, engineering, warehousing/receiving, operations, reliability, maintenance, and inspection.</p>
        <p>The owner/operator or designee should specify the following:</p>
        <ul>
            <li>extent of examination/verification of new construction and existing assets, with consideration for the number of items to be examined/verified;</li>
            <li>acceptable method(s) of examination/verification;</li>
            <li>locations for examination/verification, if applicable;</li>
            <li>examination/verification results acceptance criteria;</li>
            <li>timing of examination/verification in the work process;</li>
            <li>process for managing material nonconformances;</li>
            <li>qualification requirements for personnel performing PMI;</li>
            <li>method of documenting/identifying items acceptable for service.</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>5.5 New Construction MVP and PMI</h4>
        <div class="subsection">
            <h4>5.5.1 General</h4>
            <p>This section addresses MVP activities (e.g., PMI, MTR review, comparison to owner/operator specifications, product markings, certifications, etc.) during or after the fabrication stage, either in receiving, in the shop, or in the field, prior to the items being placed into service.</p>
        </div>
        
        <div class="subsection">
            <h4>5.5.2 Material Verification Test Procedure Review</h4>
            <p>The owner/operator or designee should review and approve the MVP requirements and the testing procedure(s) of the fabricator, material supplier, or third-party agency prior to fabrication.</p>
        </div>
        
        <div class="subsection">
            <h4>5.5.3 Timing of Material Verification During Receiving or Fabrication</h4>
            <p>MVP and PMI should be performed at the point in time that helps determine that proper materials and materials quality assurance/quality control documentation have been conducted and/or verified during the fabrication of a component or assembly.</p>
        </div>
        
        <div class="subsection">
            <h4>5.5.4 Positive Material Identification of Components Supplied by a Distributor</h4>
            <p>A higher degree of MVP activities, including PMI, should be conducted on materials supplied by stocking distributors due to the potential for unapproved material substitutions as a result of frequent handling by several parties.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>5.6 Retroactive PMI of Existing Installed Assets</h4>
        <div class="subsection">
            <h4>5.6.1 General</h4>
            <p>This section addresses assets that are already in service where the MVP procedures for the construction are not documented or not completed according to this recommended practice. It is important to recognize that previous maintenance activities, as well as new construction practices, may influence the likelihood of unapproved materials substitutions.</p>
        </div>
        
        <div class="subsection">
            <h4>5.6.2 Prioritizing Assets for Retro-PMI</h4>
            <div class="subsection">
                <h4>5.6.2.1 General Factors to Consider</h4>
                <p>If the owner/operator elects to prioritize equipment or systems for the MVP or needs to determine whether PMI is needed at all, the owner/operator should consider the following.</p>
                <ul>
                    <li>Likelihood of unapproved material substitutions during previous projects and maintenance activities-The effectiveness of the MVP when these activities occurred is an important consideration.</li>
                    <li>Consequences of a failure due to improper material being installed-Flammability and potential for spreading fire, toxicity, proximity to other equipment or community, temperature, pressure, mode of failure, and size of release should be considered.</li>
                    <li>Reason for a specific material specification (i.e., corrosion resistance or product purity).</li>
                    <li>Historical data/information relating to unapproved material substitutions-This may be related to previous experience with material nonconformities in the process unit/operating plant or within published information available within the company and industry.</li>
                </ul>
                <p>Taken together, these factors can be used to determine the risk associated with possible material nonconformances in an asset.</p>
                <p>The owner/operator should establish a methodology for estimating the relative priority for retro-PMI within a given process unit. This methodology may be based on a qualitative or quantitative risk analysis. API 580 discusses risk-based approaches and what should be considered when conducting a risk analysis (such as material, service conditions, service fluid, and mode of failure). The owner/operator may also want to consider the opportunity to conduct PMI relative to upcoming planned maintenance opportunities (e.g., outages, turnarounds).</p>
            </div>
            
            <div class="subsection">
                <h4>5.6.2.2 Site-specific Factors to Consider for Retro-PMI</h4>
                <p>Site-specific and/or experience-based factors should be considered when prioritizing equipment or piping systems.</p>
                <ul>
                    <li>Construction and maintenance practices-In assessing the likelihood of material nonconformances, the owner/operator should also consider the materials handling, material control, and any PMI procedures followed during construction of the process unit. Process-unit maintenance procedures are also important. Process units in which rigorous procedures for material verification are used would be expected to have a lower likelihood of nonconformances.</li>
                    <li>Reason for alloy specification-In some cases, alloys are used in equipment systems for reasons other than corrosion resistance or structural integrity. In these cases, the mechanical integrity of the system may not be compromised by material nonconformances. A retro-PMI may not be necessary in these systems. Two examples would be stainless steel lube oil systems in which stainless steel is used for maintaining oil purity or stainless steel in a chemical manufacturing process where corrosion of carbon steel might cause product discoloration where any grade of stainless steel would be an acceptable substitution.</li>
                </ul>
                <p>Based on experience, some types of components can have a higher likelihood of unapproved substitution of a nonspecified material. This can provide a basis for prioritizing specific equipment in a given system or process unit. Examples are as follows:</p>
                <ul>
                    <li>warm-up and bypass lines on pumps or check valves;</li>
                    <li>small-bore piping (2 NPS and below);</li>
                    <li>valves, valve assemblies, and valve bonnets;</li>
                    <li>removable devices such as rupture disks, spacer blinds, blind flanges, plugs, or ring joint gaskets;</li>
                    <li>thermowells;</li>
                    <li>bolting;</li>
                    <li>piping as a part of a packaged system;</li>
                    <li>components without recognized marking;</li>
                    <li>process systems with history of frequent maintenance requirements;</li>
                    <li>welds;</li>
                    <li>threaded components.</li>
                </ul>
            </div>
            
            <div class="subsection">
                <h4>5.6.2.3 Factors to Consider When Determining the Extent of PMI</h4>
                <p>Factors to consider when determining the extent of PMI for existing assets include the following:</p>
                <ul>
                    <li>historical inspection and MVP records;</li>
                    <li>number of plant modifications;</li>
                    <li>material control during original construction, equipment modifications, and maintenance activities;</li>
                    <li>MVP quality during construction and fabrication;</li>
                    <li>failure mode and consequence of a loss of containment;</li>
                    <li>likelihood of corrosion/degradation.</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="subsection">
        <h4>5.7 MVP as an Element of Maintenance Systems</h4>
        <div class="subsection">
            <h4>5.7.1 General</h4>
            <p>The principles associated with materials verification as part of an installation of new equipment shall also be applied as part of maintenance activities to provide confidence that proper materials are being installed. The roles and responsibilities noted in 5.4 should be reviewed and applied as applicable to the maintenance function.</p>
        </div>
        
        <div class="subsection">
            <h4>5.7.2 Responsibilities</h4>
            <p>It shall be the responsibility of the owner/operator to evaluate maintenance systems so that MVPs can be designed and implemented to effectively support the mechanical integrity needs of existing assets. The owner/operator shall establish a documented procedure for the MVP to be used for repair of existing assets during maintenance and turnaround activities.</p>
        </div>
        
        <div class="subsection">
            <h4>5.7.3 Control of Incoming Materials and Warehousing</h4>
            <p>An MVP should be directly applied to activities associated with receiving materials into a warehouse system. PMI may be performed as part of this receiving function or, when appropriate, may be performed at the supplier's location as a condition of release for shipment. The MVP that is adopted should provide for proper documentation and methods for indicating which materials have been PMI tested and are approved for use.</p>
            <p>The use of MVP principles to check materials received into a warehouse system should be regarded as a quality assurance practice to minimize the potential for discovering an alloy material discrepancy during subsequent PMI. Any identification within the warehouse should not be regarded as an alternative to the supplier's certified PMI of the fabricated assets when specified.</p>
        </div>
        
        <div class="subsection">
            <h4>5.7.4 PMI of Welding Consumables</h4>
            <div class="subsection">
                <h4>5.7.4.1 General</h4>
                <p>Performing PMI of a weld cap does not ensure that the root pass or subsequent weld passes are made with the specified chemistry. An acceptable method to address in-process PMI during welding is explained as follows.</p>
                <ul>
                    <li>Prior to use in fabrication, sample "buttons" should be welded using each heat of bare wire, lot of covered electrodes, or flux-cored electrodes. PMI can then be used to confirm that weld metal meets specification. The size of the weld button should be adequate to ensure accurate test results.</li>
                    <li>Some weld rods have the alloying elements contained in the flux and do not meet the alloy specification until welded.</li>
                    <li>It is not necessary to test a button of bare wire if the test chosen can identify the composition of the wire before welding.</li>
                </ul>
            </div>
            
            <div class="subsection">
                <h4>5.7.4.2 Longitudinal Pipe and Fitting Welds</h4>
                <p>Where there is reason to suspect incorrect weld metal or that such welds are included in a scheduled PMI effort, longitudinally welded alloy pipe and the welds for fittings in pipe systems should receive PMI verification of the weld metal in addition to the base metal. Typically, only the cap pass is subject to PMI that will not necessarily apply to the root and subsequent passes.</p>
            </div>
            
            <div class="subsection">
                <h4>5.7.4.3 Autogenous Welds</h4>
                <p>If the owner/operator determines that material verification testing is required on autogenous-welded (with no added filler metal) alloy pipe or fittings, it is appropriate to conduct testing on only the base metal. If repairs are made during original fabrication, the fabricator should be directed by the owner/operator to conduct testing on the base metal and the weld metal involved in the repairs (e.g., for type 316 stainless steel that may include Ni, Cr, and Mo).</p>
            </div>
            
            <div class="subsection">
                <h4>5.7.4.4 Dissimilar Metal Welds and Weld Overlays</h4>
                <p>Results from testing dissimilar metal welds should take into account the effects of dilution, which occurs during weld deposition. The owner/operator should establish the minimum compositional requirements of the as deposited weld metal necessary for the intended service.</p>
            </div>
        </div>
        
        <div class="subsection">
            <h4>5.7.5 MVP for Maintenance Activities</h4>
            <p>There are several in-service maintenance activities where material verification should be established. Some examples include, but are not limited to, the following.</p>
            <ul>
                <li>Temporary removal of piping spool pieces, including the removal of blind flanges used for access: These activities need to be properly managed to minimize the potential for unapproved material substitutions. Incidents have occurred when same-size spool pieces were removed and reinstalled in the wrong locations. Consideration should be given to a material control system, such as "tagging" spools as they are removed, or the use of PMI prior to reinstallation to prevent these incidences from occurring.</li>
                <li>Replacement of small-bore threaded pipe nipples and plugs, frequently found as drains and vents in process areas: An immediate need may necessitate the installation of nonconforming materials in a temporary repair; it is important to recognize even small changes need to be documented and reported for possible future follow-up.</li>
                <li>Replacement of welded-in valves: Manufacturers/distributors may substitute low-alloy valves for carbon steel valves in higher-temperature/pressure services, and if this is not communicated, the craftsmen may end up using the incorrect welding procedure during installation. This error may produce cracks in the new welds.</li>
                <li>In turnaround situations where many heat exchangers in varying services are disassembled for cleaning, inspection, and repair: It is essential that all original components, or correct replacement components, are returned to the same exchanger during reassembly. An adequate marking and tracking system, as well as PMI, can be used to ensure that the proper components are returned to the correct service.</li>
                <li>When tower internals, such as tray parts (e.g., clips, tray flapper valves or bubble caps, and fasteners) are replaced, one may consider performing point-of-installation PMI (or other material control program) to ensure that the replacement parts are as specified.</li>
            </ul>
            <p>It is important that repair procedures include consideration of PMI and appropriate other aspects of MVP and quality assurance/quality control to help ensure that the right materials are always used. Much of this can be controlled through awareness of the issues at all levels within the repair process. Consulting with those involved with implementing the programs where the repair will be performed, prior to commencement of work, can help ensure that systems, processes, and activities are in place to provide material control and verification.</p>
        </div>
    </div>`,
    contentEs: `<h3>5 Programas de Verificación de Materiales</h3>
    <div class="subsection">
        <h4>5.1 General</h4>
        <p>El propietario/operador debe establecer un MVP por escrito que indique el alcance y tipo de PMI y/u otros métodos de prueba y administrativos que se realizarán durante la construcción de nuevos activos, retroactivamente en activos existentes, y durante el mantenimiento, reparación o alteración de activos existentes.</p>
        <p>Para sistemas de mayor riesgo, el propietario/operador debe considerar la necesidad de emplear un mayor alcance de examen en proceso y final (hasta el 100 %) en lugar del muestreo aleatorio, que puede ser más apropiado para sistemas de menor riesgo. El propietario/operador también debe considerar la necesidad de realizar exámenes después de que la fabricación esté completa en el punto de instalación para garantizar que no ocurrieron sustituciones inadvertidas.</p>
    </div>
    
    <div class="subsection">
        <h4>5.2 Componentes de Activos Incluidos en un MVP</h4>
        <p>Ejemplos de componentes que contienen presión expuestos a condiciones de proceso que se encuentran en equipos y sistemas que pueden requerir un MVP o PMI incluyen, pero no se limitan a, los siguientes:</p>
        <ul>
            <li>tramos de tubería;</li>
            <li>accesorios de tubería, como tes, codos, reductores, tapas, componentes especiales de tubería, blindajes y tapones;</li>
            <li>tubos de calentador (lisos);</li>
            <li>tubos aletados de calentador/enfriador;</li>
            <li>bridas;</li>
            <li>forjados;</li>
            <li>material de placa;</li>
            <li>válvulas - válvulas de proceso, válvulas de control y válvulas de alivio;</li>
            <li>soldaduras;</li>
            <li>instrumentación;</li>
            <li>recubrimientos de soldadura, revestimientos y revestimientos metálicos;</li>
            <li>pernos;</li>
            <li>juntas de expansión y fuelles;</li>
            <li>empaquetaduras (juntas);</li>
            <li>equipos rotativos.</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>5.3 Informes de Prueba de Fábrica y Uso en un MVP</h4>
        <p>Los MTR no deben considerarse un sustituto del PMI porque dichos documentos históricamente no siempre han sido precisos. Sin embargo, los MTR son una parte importante de un programa general de aseguramiento de calidad de materiales.</p>
    </div>
    
    <div class="subsection">
        <h4>5.4 Roles y Responsabilidades</h4>
        <p>Un MVP puede involucrar la participación de varios grupos dentro de la planta de operación o el taller de un contratista, distribuidor o fabricante. Al establecer un MVP, debe considerarse los roles y responsabilidades que cada grupo tiene dentro de la organización específica. Estos roles y responsabilidades deben definirse claramente y documentarse. En la planta de operación, esto puede incluir aquellos grupos responsables de compras, ingeniería, almacenamiento/recepción, operaciones, confiabilidad, mantenimiento e inspección.</p>
        <p>El propietario/operador o su delegado debe especificar lo siguiente:</p>
        <ul>
            <li>alcance del examen/verificación de nueva construcción y activos existentes, considerando el número de artículos a examinar/verificar;</li>
            <li>método(s) aceptable(s) de examen/verificación;</li>
            <li>ubicaciones para el examen/verificación, si aplica;</li>
            <li>criterios de aceptación de resultados del examen/verificación;</li>
            <li>momento del examen/verificación en el proceso de trabajo;</li>
            <li>proceso para gestionar no conformidades de materiales;</li>
            <li>requisitos de calificación para el personal que realiza PMI;</li>
            <li>método de documentación/identificación de artículos aceptables para servicio.</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>5.5 MVP y PMI para Nueva Construcción</h4>
        <div class="subsection">
            <h4>5.5.1 General</h4>
            <p>Esta sección aborda las actividades del MVP (ej., PMI, revisión de MTR, comparación con especificaciones del propietario/operador, marcado de productos, certificaciones, etc.) durante o después de la etapa de fabricación, ya sea en recepción, en el taller o en el campo, antes de que los artículos se pongan en servicio.</p>
        </div>
        
        <div class="subsection">
            <h4>5.5.2 Revisión del Procedimiento de Prueba de Verificación de Materiales</h4>
            <p>El propietario/operador o su delegado debe revisar y aprobar los requisitos del MVP y los procedimientos de prueba del fabricante, proveedor de materiales o agencia de terceros antes de la fabricación.</p>
        </div>
        
        <div class="subsection">
            <h4>5.5.3 Momento de la Verificación de Materiales Durante la Recepción o Fabricación</h4>
            <p>El MVP y PMI deben realizarse en el momento que ayude a determinar que se han utilizado los materiales adecuados y que la documentación de aseguramiento/control de calidad de materiales se ha realizado y/o verificado durante la fabricación de un componente o conjunto.</p>
        </div>
        
        <div class="subsection">
            <h4>5.5.4 Identificación Positiva de Materiales de Componentes Suministrados por un Distribuidor</h4>
            <p>Un mayor grado de actividades del MVP, incluyendo PMI, debe realizarse en materiales suministrados por distribuidores de stockeo debido al potencial de sustituciones de materiales no aprobadas como resultado del manejo frecuente por varias partes.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>5.6 PMI Retroactivo de Activos Instalados Existentes</h4>
        <div class="subsection">
            <h4>5.6.1 General</h4>
            <p>Esta sección aborda activos que ya están en servicio donde los procedimientos del MVP para la construcción no están documentados o no se completaron según esta práctica recomendada. Es importante reconocer que las actividades de mantenimiento anteriores, así como las prácticas de nueva construcción, pueden influir en la probabilidad de sustituciones de materiales no aprobadas.</p>
        </div>
        
        <div class="subsection">
            <h4>5.6.2 Priorización de Activos para PMI Retroactivo</h4>
            <div class="subsection">
                <h4>5.6.2.1 Factores Generales a Considerar</h4>
                <p>Si el propietario/operador elige priorizar equipos o sistemas para el MVP o necesita determinar si se necesita PMI en absoluto, el propietario/operador debe considerar lo siguiente.</p>
                <ul>
                    <li>Probabilidad de sustituciones de materiales no aprobadas durante proyectos y actividades de mantenimiento anteriores - La efectividad del MVP cuando ocurrieron estas actividades es una consideración importante.</li>
                    <li>Consecuencias de una falla debido a la instalación de material inadecuado - Deben considerarse la inflamabilidad y potencial de propagación de incendio, toxicidad, proximidad a otros equipos o comunidad, temperatura, presión, modo de falla y tamaño de liberación.</li>
                    <li>Razón para una especificación de material específica (es decir, resistencia a la corrosión o pureza del producto).</li>
                    <li>Datos/información históricos relacionados con sustituciones de materiales no aprobadas - Esto puede estar relacionado con experiencia previa con no conformidades de materiales en la unidad de proceso/planta de operación o dentro de información publicada disponible dentro de la empresa y la industria.</li>
                </ul>
                <p>En conjunto, estos factores pueden usarse para determinar el riesgo asociado con posibles no conformidades de materiales en un activo.</p>
                <p>El propietario/operador debe establecer una metodología para estimar la prioridad relativa para el PMI retroactivo dentro de una unidad de proceso dada. Esta metodología puede basarse en un análisis de riesgo cualitativo o cuantitativo. API 580 discute enfoques basados en riesgo y qué debe considerarse al realizar un análisis de riesgo (como material, condiciones de servicio, fluido de servicio y modo de falla). El propietario/operador también puede querer considerar la oportunidad de realizar PMI en relación con las próximas oportunidades de mantenimiento planificadas (ej., paradas, turnarounds).</p>
            </div>
            
            <div class="subsection">
                <h4>5.6.2.2 Factores Específicos del Sitio a Considerar para PMI Retroactivo</h4>
                <p>Deben considerarse factores específicos del sitio y/o basados en la experiencia al priorizar equipos o sistemas de tuberías.</p>
                <ul>
                    <li>Prácticas de construcción y mantenimiento - Al evaluar la probabilidad de no conformidades de materiales, el propietario/operador también debe considerar el manejo de materiales, el control de materiales y cualquier procedimiento de PMI seguido durante la construcción de la unidad de proceso. Los procedimientos de mantenimiento de la unidad de proceso también son importantes. Se esperaría que las unidades de proceso en las que se utilizan procedimientos rigurosos para la verificación de materiales tengan una menor probabilidad de no conformidades.</li>
                    <li>Razón para la especificación de aleación - En algunos casos, las aleaciones se utilizan en sistemas de equipos por razones distintas a la resistencia a la corrosión o integridad estructural. En estos casos, la integridad mecánica del sistema puede no verse comprometida por no conformidades de materiales. Un PMI retroactivo puede no ser necesario en estos sistemas. Dos ejemplos serían sistemas de aceite lubricante de acero inoxidable en los que el acero inoxidable se utiliza para mantener la pureza del aceite o acero inoxidable en un proceso de fabricación química donde la corrosión del acero al carbono podría causar decoloración del producto donde cualquier grado de acero inoxidable sería una sustitución aceptable.</li>
                </ul>
                <p>Basado en la experiencia, algunos tipos de componentes pueden tener una mayor probabilidad de sustitución no aprobada de un material no especificado. Esto puede proporcionar una base para priorizar equipos específicos en un sistema o unidad de proceso dados. Los ejemplos son los siguientes:</p>
                <ul>
                    <li>líneas de calentamiento y derivación en bombas o válvulas de retención;</li>
                    <li>tuberías de pequeño diámetro (2 NPS y below);</li>
                    <li>válvulas, conjuntos de válvulas y bonetes de válvulas;</li>
                    <li>dispositivos removibles como discos de ruptura, espaciadores ciegos, bridas ciegas, tapones o juntas de anillo;</li>
                    <li>pozos termométricos;</li>
                    <li>pernos;</li>
                    <li>tuberías como parte de un sistema empaquetado;</li>
                    <li>componentes sin marcado reconocido;</li>
                    <li>sistemas de proceso con historial de requisitos de mantenimiento frecuentes;</li>
                    <li>soldaduras;</li>
                    <li>componentes roscados.</li>
                </ul>
            </div>
            
            <div class="subsection">
                <h4>5.6.2.3 Factores a Considerar al Determinar el Alcance del PMI</h4>
                <p>Los factores a considerar al determinar el alcance del PMI para activos existentes incluyen los siguientes:</p>
                <ul>
                    <li>registros históricos de inspección y MVP;</li>
                    <li>número de modificaciones de la planta;</li>
                    <li>control de materiales durante la construcción original, modificaciones de equipos y actividades de mantenimiento;</li>
                    <li>calidad del MVP durante la construcción y fabricación;</li>
                    <li>modo de falla y consecuencia de una pérdida de contención;</li>
                    <li>probabilidad de corrosión/degradación.</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="subsection">
        <h4>5.7 MVP como Elemento de Sistemas de Mantenimiento</h4>
        <div class="subsection">
            <h4>5.7.1 General</h4>
            <p>Los principios asociados con la verificación de materiales como parte de la instalación de nuevos equipos también deben aplicarse como parte de las actividades de mantenimiento para proporcionar confianza de que se están instalando los materiales adecuados. Los roles y responsabilidades mencionados en 5.4 deben revisarse y aplicarse según corresponda a la función de mantenimiento.</p>
        </div>
        
        <div class="subsection">
            <h4>5.7.2 Responsabilidades</h4>
            <p>Es responsabilidad del propietario/operador evaluar los sistemas de mantenimiento para que los MVP puedan diseñarse e implementarse para respaldar eficazmente las necesidades de integridad mecánica de los activos existentes. El propietario/operador debe establecer un procedimiento documentado para el MVP que se utilizará para la reparación de activos existentes durante las actividades de mantenimiento y turnaround.</p>
        </div>
        
        <div class="subsection">
            <h4>5.7.3 Control de Materiales Entrantes y Almacenamiento</h4>
            <p>Un MVP debe aplicarse directamente a las actividades asociadas con la recepción de materiales en un sistema de almacén. El PMI puede realizarse como parte de esta función de recepción o, cuando sea apropiado, puede realizarse en la ubicación del proveedor como condición de liberación para envío. El MVP que se adopte debe proporcionar una documentación adecuada y métodos para indicar qué materiales han sido sometidos a prueba PMI y están aprobados para su uso.</p>
            <p>El uso de los principios del MVP para verificar los materiales recibidos en un sistema de almacén debe considerarse una práctica de aseguramiento de calidad para minimizar el potencial de descubrir una discrepancia de material de aleación durante el PMI posterior. Cualquier identificación dentro del almacén no debe considerarse una alternativa al PMI certificado por el proveedor de los activos fabricados cuando se especifique.</p>
        </div>
        
        <div class="subsection">
            <h4>5.7.4 PMI de Consumibles de Soldadura</h4>
            <div class="subsection">
                <h4>5.7.4.1 General</h4>
                <p>Realizar PMI de un cordón de soldadura no garantiza que la pasada de raíz o las pasadas de soldadura posteriores estén hechas con la química especificada. Un método aceptable para abordar el PMI en proceso durante la soldadura se explica de la siguiente manera.</p>
                <ul>
                    <li>Antes de su uso en fabricación, deben soldarse muestras de "botones" utilizando cada colada de alambre desnudo, lote de electrodos revestidos o electrodos con núcleo fundente. Luego, el PMI puede usarse para confirmar que el metal de soldadura cumple con la especificación. El tamaño del botón de soldadura debe ser adecuado para garantizar resultados de prueba precisos.</li>
                    <li>Algunas varillas de soldadura tienen los elementos de aleación contenidos en el revestimiento y no cumplen con la especificación de la aleación hasta que se sueldan.</li>
                    <li>No es necesario probar un botón de alambre desnudo si la prueba elegida puede identificar la composición del alambre antes de soldar.</li>
                </ul>
            </div>
            
            <div class="subsection">
                <h4>5.7.4.2 Soldaduras Longitudinales de Tubería y Accesorios</h4>
                <p>Cuando haya razón para sospechar metal de soldadura incorrecto o que dichas soldaduras estén incluidas en un esfuerzo programado de PMI, la tubería de aleación soldada longitudinalmente y las soldaduras de accesorios en sistemas de tubería deben recibir verificación PMI del metal de soldadura además del metal base. Típicamente, solo la pasada de cordón está sujeta a PMI, lo que no necesariamente se aplicará a la raíz y las pasadas posteriores.</p>
            </div>
            
            <div class="subsection">
                <h4>5.7.4.3 Soldaduras Autógenas</h4>
                <p>Si el propietario/operador determina que se requiere prueba de verificación de materiales en tubería o accesorios de aleación soldados autógenamente (sin metal de aporte agregado), es apropiado realizar pruebas solo en el metal base. Si se realizan reparaciones durante la fabricación original, el fabricante debe ser dirigido por el propietario/operador a realizar pruebas en el metal base y el metal de soldadura involucrados en las reparaciones (ej., para acero inoxidable tipo 316 que puede incluir Ni, Cr y Mo).</p>
            </div>
            
            <div class="subsection">
                <h4>5.7.4.4 Soldaduras de Metales Disímiles y Recubrimientos de Soldadura</h4>
                <p>Los resultados de las pruebas de soldaduras de metales disímiles deben tener en cuenta los efectos de dilución, que ocurre durante la deposición de soldadura. El propietario/operador debe establecer los requisitos mínimos de composición del metal de soldadura depositado necesarios para el servicio previsto.</p>
            </div>
        </div>
        
        <div class="subsection">
            <h4>5.7.5 MVP para Actividades de Mantenimiento</h4>
            <p>Hay varias actividades de mantenimiento en servicio donde debe establecerse la verificación de materiales. Algunos ejemplos incluyen, pero no se limitan a, los siguientes.</p>
            <ul>
                <li>Remoción temporal de tramos de tubería, incluyendo la remoción de bridas ciegas utilizadas para acceso: Estas actividades necesitan gestionarse adecuadamente para minimizar el potencial de sustituciones de materiales no aprobadas. Han ocurrido incidentes cuando tramos del mismo tamaño se removieron y reinstalaron en las ubicaciones incorrectas. Debe considerarse un sistema de control de materiales, como "etiquetar" los tramos a medida que se retiran, o el uso de PMI antes de la reinstalación para prevenir que estos incidentes ocurran.</li>
                <li>Reemplazo de nipples y tapones de tubería roscada de pequeño diámetro, encontrados frecuentemente como drenajes y ventilaciones en áreas de proceso: Una necesidad inmediata puede necesitar la instalación de materiales no conformes en una reparación temporal; es importante reconocer que incluso los cambios pequeños necesitan documentarse y reportarse para posible seguimiento futuro.</li>
                <li>Reemplazo de válvulas soldadas: Los fabricantes/distribuidores pueden sustituir válvulas de baja aleación por válvulas de acero al carbono en servicios de mayor temperatura/presión, y si esto no se comunica, los artesanos pueden terminar utilizando el procedimiento de soldadura incorrecto durante la instalación. Este error puede producir grietas en las nuevas soldaduras.</li>
                <li>En situaciones de turnaround donde muchos intercambiadores de calor en servicios variados se desmontan para limpieza, inspección y reparación: Es esencial que todos los componentes originales, o componentes de reemplazo correctos, sean devueltos al mismo intercambiador durante el reensamblaje. Un sistema adecuado de marcado y seguimiento, así como PMI, puede usarse para garantizar que los componentes adecuados sean devueltos al servicio correcto.</li>
                <li>Cuando se reemplazan internos de torre, como partes de bandejas (ej., clips, válvulas de clapeta de bandeja o casquetes de burbuja, y sujetadores), puede considerarse realizar PMI en el punto de instalación (u otro programa de control de materiales) para garantizar que las piezas de repuesto sean las especificadas.</li>
            </ul>
            <p>Es importante que los procedimientos de reparación incluyan la consideración del PMI y otros aspectos apropiados del MVP y aseguramiento/control de calidad para ayudar a garantizar que siempre se utilicen los materiales correctos. Gran parte de esto puede controlarse mediante la conciencia de los problemas en todos los niveles dentro del proceso de reparación. Consultar con aquellos involucrados en la implementación de los programas donde se realizará la reparación, antes del inicio del trabajo, puede ayudar a garantizar que los sistemas, procesos y actividades estén en lugar para proporcionar control y verificación de materiales.</p>
        </div>
    </div>`
});