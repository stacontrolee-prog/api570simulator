// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos a Presión y Tuberías"
    });
}

// Registrar el artículo 502
registerChapter('ASMEPCC2', {
    id: 502,
    title: "Nondestructive Examination in Lieu of Pressure Testing for Repairs and Alterations",
    titleEs: "Examen No Destructivo en Sustitución de Pruebas de Presión para Reparaciones y Alteraciones",
    content: `<h3>Article 502 Nondestructive Examination in Lieu of Pressure Testing for Repairs and Alterations</h3>
    
    <div class="subsection">
        <h4>502-1 DESCRIPTION</h4>
        <div class="subsection">
            <h4>502-1.1 Background</h4>
            <p>This Article provides alternatives to pressure testing after repairs or alterations. A pressure test in itself is a useful tool with respect to newly constructed equipment. Application of a pressure test, to equipment that has been in service for some time, is a matter that requires careful consideration of a variety of factors involved. There are instances where the application of a pressure test is not desirable, such as, the application of a pressure test may create damage.</p>
        </div>
        <div class="subsection">
            <h4>502-1.2 Application</h4>
            <p>This Article applies to equipment for which</p>
            <p>(a) NDE provides better assurance of integrity in future operation for elevated temperature or cyclic operation where crack initiation and propagation is a concern. Large flaws may not result in failure during a pressure test but may propagate in cyclic or creep service.</p>
            <p>(b) a pressure test is not practical and NDE can be shown to provide appropriate integrity assurance. A pressure test of equipment that has been repaired is primarily a leak test, or, in some cases, a test for gross fabrication flaws that could compromise structural integrity. Structural integrity of the design is usually not an issue for repairs. Even for most alterations, the integrity of the design can be verified by engineering analysis.</p>
            <p>(c) a pressure test is practical, but NDE can be shown to provide equivalent integrity assurance. In this case, overall cost may be a major consideration. It is essential that the appropriate NDE be performed based on the damage mechanisms anticipated during repairs or alterations.</p>
        </div>
        <div class="subsection">
            <h4>502-1.3 Pressure Testing</h4>
            <p>Pressure testing consists of three primary methods.</p>
            <p>(a) Hydrostatic Test. The fluid used is typically water; however, another suitable liquid can be substituted if there is a risk of damage due from any adverse effects of having water in the system.</p>
            <p>(b) Pneumatic Test. This is performed in some situations where the presence of any water or weight of the water in the system is an issue. The pneumatic test is potentially hazardous due from the stored energy of the compressed gas.</p>
            <p>(c) Hydro-Pneumatic Test. This is a combination of the two other test methods. Article 501 should be referred for pressure testing issues and precautions.</p>
        </div>
        <div class="subsection">
            <h4>502-1.4 Nondestructive Examination (NDE)</h4>
            <p>NDE has been defined as comprising those examination methods (see Mandatory Appendix 502-I) used to examine an object, material, or system without impairing future usefulness. It is used to investigate the material and component integrity.</p>
            <p>Determining the structural integrity of a pressure retaining device or component can be accomplished by a process involving a quantitative engineering evaluation coupled with NDE to obtain current wall thicknesses and provide detection and sizing of any in-service flaws or cracks (National Board Bulletin, Volume 61).</p>
        </div>
        <div class="subsection">
            <h4>502-1.5 Pressure Test</h4>
            <div class="subsection">
                <h4>502-1.5.1 Reasons for Pressure Testing in New Construction</h4>
                <p>(a) Checks for leakage of mechanical and welded joints</p>
                <p>(b) May avoid an in-service failure and associated safety issues</p>
                <p>(c) Screens out gross design, material, fabrication deficiencies</p>
                <p>(d) Reduces the stress-multiplying capability of sharp notches, metallurgical defects, discontinuities (flaw tip blunting)</p>
                <p>(e) Provides mechanical stress relief</p>
                <p>Also refer to 501-3.2.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>502-1.6 NDE Methods</h4>
            <p>The following is a limited list of the more common alternative NDE methods. Mandatory Appendix 502-1, Table 502-I-1 compares NDE methods, properties sensed or measured, typical discontinuities detected, representative applications, advantages, and limitations. Refer to section 502-5 for examination requirements.</p>
            
            <div class="subsection">
                <h4>502-1.6.1 Alternative NDE Methods: Volumetric</h4>
                <p>(a) Radiography</p>
                <p>(b) Ultrasonic shear wave</p>
                <p>(c) Automated ultrasonics, such as time-of-flight diffraction (TOFD) and phased array ultrasonics</p>
            </div>
            <div class="subsection">
                <h4>502-1.6.2 Alternative NDE Methods: Surface</h4>
                <p>(a) Magnetic particle</p>
                <p>(b) Liquid penetrant</p>
                <p>(c) Eddy current</p>
                <p>(d) Magnetic flux leakage</p>
            </div>
        </div>
        <div class="subsection">
            <h4>502-1.7 Brittle Fracture Risk</h4>
            <p>Performing pressure tests of an in-service device or component with inadequate fracture toughness could result in brittle fracture. Once a device or component has been subjected to a one-time (at new construction) hydrostatic test, any additional hydrostatic tests over the life of the component will serve minimal useful purpose regarding structural integrity or benefits of redistribution of stresses.</p>
            <p>In addition, performing a hydrostatic test above the normal working pressure of an in-service component can result in significant exposure to brittle fracture - especially if the material of construction:</p>
            <p>(a) has been subjected to some degree of embrittlement under normal service conditions</p>
            <p>(b) possesses poor fracture toughness as a result of steel melting practices</p>
            <p>(c) contains an undetected critical flaw from in-service exposure, or</p>
            <p>(d) will be pressure tested below the OTB transition temperature of any component</p>
        </div>
    </div>

    <div class="subsection">
        <h4>502-2 LIMITATIONS</h4>
        <div class="subsection">
            <h4>502-2.1 Alternative Requirements: Part 1 of ASME PCC-2</h4>
            <p>Part 1 of this Standard contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        </div>
        <div class="subsection">
            <h4>502-2.2 Repaired or Altered Pressure Equipment</h4>
            <p>The terms repaired and altered are as defined in the National Board Inspection Code (NBIC), ANSI/NB-23 Appendix 4, or API 510 and API 570 for pressure vessels and piping.</p>
        </div>
        <div class="subsection">
            <h4>502-2.3 Examples Where Pressure Test May Be Inadvisable</h4>
            <div class="subsection">
                <h4>502-2.3.1 Foundation or Support Structure</h4>
                <p>Where the foundation or supporting structure has not been designed to carry the weight of liquid-filled pressure equipment.</p>
            </div>
            <div class="subsection">
                <h4>502-2.3.2 Undesirable Reactions or Consequences</h4>
                <p>A safety concern where the application of test fluids could lead to an undesirable reaction with the residue of fluids contained in the pressure equipment.</p>
            </div>
            <div class="subsection">
                <h4>502-2.3.3 Design Reasons</h4>
                <p>(a) Where the design of the pressure equipment is based on other factors, such as bending, where stresses due to pressure may not be governing</p>
                <p>(b) Where a vessel for which the thickness of the pressure boundary components is governed by external pressure (buckling) considerations</p>
            </div>
            <div class="subsection">
                <h4>502-2.3.4 Painting/Coating/Lining Issues</h4>
                <p>Where painting/coating/lining could mask leaks that would otherwise have been detected during a pressure test. This includes damage to refractory or other insulating internal materials as well as damage to internal linings.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>502-2.4 Repairs and Alterations for Which Pressure Testing Is Not Normally Required (ANSI/NB-23)</h4>
            <p>The following types of repairs and/or alterations may be exempt from pressure testing or where pressure tests may be optional depending upon the needs of the owner user:</p>
            <p>(a) welding or brazing that does not penetrate the pressure boundary at any point</p>
            <p>(b) seal welds</p>
            <p>(c) cladding application/repairs</p>
            <p>(d) hard surfacing</p>
            <p>(e) welding to flange seating surfaces, when less than 50% of the axial thickness is replaced by welding</p>
            <p>(f) tube-to-tubesheet welds, provided less than 10% of the total number of tubes are replaced at any time after a full operational cycle</p>
            <p>(g) tube plugging or sleeving of heat exchangers, steam generators, or boiler tubes</p>
            <p>(h) hot tap fittings</p>
        </div>
    </div>

    <div class="subsection">
        <h4>502-3 DESIGN</h4>
        <p>See para. 502-2.3.3.</p>
    </div>

    <div class="subsection">
        <h4>502-4 FABRICATION (REPAIR OR ALTERATION)</h4>
        <p>In the context of this Article, this is not applicable.</p>
    </div>

    <div class="subsection">
        <h4>502-5 EXAMINATION - NONDESTRUCTIVE EXAMINATION (NDE)</h4>
        <p>The specific type and amount of surface and/or volumetric NDE that should be specified in lieu of pressure testing is at the owner-user's discretion, the extent of which should be based on the risk of leak or failure of the equipment. The NDE specified needs to match the likelihood of the type of defects that could occur with the particular materials and welding methods in use. See para. 502-1.6 for the more common NDE methods generally employed in lieu of pressure testing.</p>
    </div>

    <div class="subsection">
        <h4>502-6 TESTING</h4>
        <p>In the context of this Article, this is not applicable.</p>
    </div>

    <div class="subsection">
        <h4>502-7 REFERENCES</h4>
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        <p>ANSI/NB-23-2007, National Board Inspection Code</p>
        <p>Galanes, George. "Pressure Testing: Fact and Fiction," National Board Bulletin 61, no. 3 (Fall 2006):28 (https://www.nationalboard.org/SiteDocuments/Bulletins/FA06.pdf).</p>
        <p>Publisher: National Board of Boiler and Pressure Vessel Inspectors (NBBI), 1055 Crupper Avenue, Columbus, OH 43229 (www.nationalboard.org)</p>
        <p>API 510-2006, Pressure Vessel Inspection Code: Maintenance Inspection, Rating, Repair, and Alteration</p>
        <p>API 570, In-Service Inspection Code for Process Piping</p>
        <p>Publisher: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</p>
        <p>ASME Boiler and Pressure Vessel Code, 2007 Edition, Code Case 2235</p>
        <p>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section IV, Heating Boilers</p>
        <p>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section V, Nondestructive Examination</p>
        <p>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section VIII, Division 1 - Rules for Construction of Pressure Vessels</p>
        <p>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section IX, Welding and Brazing Qualifications</p>
        <p>Publisher: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</p>
        <p>ASNT Recommended Practice No. SNT-TC-1A, Personnel Qualification and Certification in Nondestructive Testing</p>
        <p>Publisher: American Society for Nondestructive Testing (ASNT), 1711 Arlingate Lane, P.O. Box 28518, Columbus, OH 43228 (www.asnt.org)</p>
    </div>

    <div class="subsection">
        <h4>Mandatory Appendix 502-1 Comparison of Selected NDE Methods</h4>
        <p>See Table 502-1-1.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Table 502-1-1 Comparison of Selected NDE Methods</caption>
                <thead>
                    <tr>
                        <th>NDE Method</th>
                        <th>Properties Sensed or Measured</th>
                        <th>Typical Discontinuities Detected</th>
                        <th>Representative Applications</th>
                        <th>Advantages</th>
                        <th>Limitations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Radiography</td>
                        <td>Density variations</td>
                        <td>Volumetric defects, porosity, inclusions</td>
                        <td>Weld examination, casting inspection</td>
                        <td>Permanent record, detects internal defects</td>
                        <td>Radiation safety, access to both sides required</td>
                    </tr>
                    <tr>
                        <td>Ultrasonic Shear Wave</td>
                        <td>Sound wave reflection/transmission</td>
                        <td>Internal flaws, lack of fusion, cracks</td>
                        <td>Weld inspection, thickness measurement</td>
                        <td>Deep penetration, quantitative sizing</td>
                        <td>Surface preparation required, operator dependent</td>
                    </tr>
                    <tr>
                        <td>Magnetic Particle</td>
                        <td>Magnetic flux leakage</td>
                        <td>Surface and near-surface cracks</td>
                        <td>Ferromagnetic materials, weld inspection</td>
                        <td>Rapid, sensitive to fine cracks</td>
                        <td>Limited to ferromagnetic materials, surface preparation</td>
                    </tr>
                    <tr>
                        <td>Liquid Penetrant</td>
                        <td>Capillary action</td>
                        <td>Surface-breaking defects</td>
                        <td>Non-porous materials, all metals</td>
                        <td>Simple, inexpensive, portable</td>
                        <td>Surface defects only, cleaning critical</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `,
    contentEs: `<h3>Artículo 502 Examen No Destructivo en Sustitución de Pruebas de Presión para Reparaciones y Alteraciones</h3>
    
    <div class="subsection">
        <h4>502-1 DESCRIPCIÓN</h4>
        <div class="subsection">
            <h4>502-1.1 Antecedentes</h4>
            <p>Este Artículo proporciona alternativas a las pruebas de presión después de reparaciones o alteraciones. Una prueba de presión en sí misma es una herramienta útil con respecto a equipos de nueva construcción. La aplicación de una prueba de presión a equipos que han estado en servicio durante algún tiempo es un asunto que requiere una consideración cuidadosa de una variedad de factores involucrados. Hay instancias donde la aplicación de una prueba de presión no es deseable, como, la aplicación de una prueba de presión puede crear daño.</p>
        </div>
        <div class="subsection">
            <h4>502-1.2 Aplicación</h4>
            <p>Este Artículo se aplica a equipos para los cuales</p>
            <p>(a) END proporciona una mejor garantía de integridad en operación futura para temperatura elevada u operación cíclica donde la iniciación y propagación de grietas es una preocupación. Grandes defectos pueden no resultar en falla durante una prueba de presión pero pueden propagarse en servicio cíclico o de fluencia.</p>
            <p>(b) una prueba de presión no es práctica y END puede demostrar que proporciona una garantía de integridad apropiada. Una prueba de presión de equipos que han sido reparados es principalmente una prueba de fugas, o, en algunos casos, una prueba de defectos de fabricación gruesos que podrían comprometer la integridad estructural. La integridad estructural del diseño generalmente no es un problema para las reparaciones. Incluso para la mayoría de las alteraciones, la integridad del diseño puede verificarse mediante análisis de ingeniería.</p>
            <p>(c) una prueba de presión es práctica, pero END puede demostrar que proporciona una garantía de integridad equivalente. En este caso, el costo total puede ser una consideración importante. Es esencial que se realice el END apropiado basado en los mecanismos de daño anticipados durante las reparaciones o alteraciones.</p>
        </div>
        <div class="subsection">
            <h4>502-1.3 Pruebas de Presión</h4>
            <p>Las pruebas de presión consisten en tres métodos principales.</p>
            <p>(a) Prueba Hidrostática. El fluido utilizado es típicamente agua; sin embargo, puede sustituirse otro líquido adecuado si existe riesgo de daño debido a efectos adversos de tener agua en el sistema.</p>
            <p>(b) Prueba Neumática. Esto se realiza en algunas situaciones donde la presencia de agua o el peso del agua en el sistema es un problema. La prueba neumática es potencialmente peligrosa debido a la energía almacenada del gas comprimido.</p>
            <p>(c) Prueba Hidro-Neumática. Esta es una combinación de los otros dos métodos de prueba. Debe referirse al Artículo 501 para problemas y precauciones de pruebas de presión.</p>
        </div>
        <div class="subsection">
            <h4>502-1.4 Examen No Destructivo (END)</h4>
            <p>END se ha definido como comprendiendo aquellos métodos de examen (ver Apéndice Obligatorio 502-I) utilizados para examinar un objeto, material o sistema sin afectar la utilidad futura. Se utiliza para investigar la integridad del material y del componente.</p>
            <p>Determinar la integridad estructural de un dispositivo o componente de retención de presión puede lograrse mediante un proceso que involucra una evaluación de ingeniería cuantitativa combinada con END para obtener espesores de pared actuales y proporcionar detección y dimensionamiento de cualquier defecto o grieta en servicio (National Board Bulletin, Volumen 61).</p>
        </div>
        <div class="subsection">
            <h4>502-1.5 Prueba de Presión</h4>
            <div class="subsection">
                <h4>502-1.5.1 Razones para las Pruebas de Presión en Nueva Construcción</h4>
                <p>(a) Verifica fugas en juntas mecánicas y soldadas</p>
                <p>(b) Puede evitar una falla en servicio y problemas de seguridad asociados</p>
                <p>(c) Filtra deficiencias de diseño, material, fabricación gruesas</p>
                <p>(d) Reduce la capacidad de multiplicación de tensiones de muescas agudas, defectos metalúrgicos, discontinuidades (embotamiento de punta de defecto)</p>
                <p>(e) Proporciona alivio de tensiones mecánico</p>
                <p>Consulte también 501-3.2.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>502-1.6 Métodos END</h4>
            <p>La siguiente es una lista limitada de los métodos END alternativos más comunes. El Apéndice Obligatorio 502-1, Tabla 502-I-1 compara métodos END, propiedades detectadas o medidas, discontinuidades típicas detectadas, aplicaciones representativas, ventajas y limitaciones. Consulte la sección 502-5 para los requisitos de examen.</p>
            
            <div class="subsection">
                <h4>502-1.6.1 Métodos END Alternativos: Volumétricos</h4>
                <p>(a) Radiografía</p>
                <p>(b) Ultrasonido de onda transversal</p>
                <p>(c) Ultrasonido automatizado, como difracción de tiempo de vuelo (TOFD) y ultrasonido de arreglo de fases</p>
            </div>
            <div class="subsection">
                <h4>502-1.6.2 Métodos END Alternativos: Superficiales</h4>
                <p>(a) Partículas magnéticas</p>
                <p>(b) Líquidos penetrantes</p>
                <p>(c) Corrientes de Foucault</p>
                <p>(d) Fuga de flujo magnético</p>
            </div>
        </div>
        <div class="subsection">
            <h4>502-1.7 Riesgo de Fractura Frágil</h4>
            <p>Realizar pruebas de presión de un dispositivo o componente en servicio con tenacidad a la fractura inadecuada podría resultar en fractura frágil. Una vez que un dispositivo o componente ha sido sometido a una prueba hidrostática única (en nueva construcción), cualquier prueba hidrostática adicional durante la vida del componente servirá para un propósito útil mínimo con respecto a la integridad estructural o los beneficios de redistribución de tensiones.</p>
            <p>Además, realizar una prueba hidrostática por encima de la presión de trabajo normal de un componente en servicio puede resultar en una exposición significativa a fractura frágil - especialmente si el material de construcción:</p>
            <p>(a) ha sido sometido a algún grado de fragilización bajo condiciones de servicio normales</p>
            <p>(b) posee pobre tenacidad a la fractura como resultado de prácticas de fusión de acero</p>
            <p>(c) contiene un defecto crítico no detectado por exposición en servicio, o</p>
            <p>(d) será sometido a prueba de presión por debajo de la temperatura de transición OTB de cualquier componente</p>
        </div>
    </div>

    <div class="subsection">
        <h4>502-2 LIMITACIONES</h4>
        <div class="subsection">
            <h4>502-2.1 Requisitos Alternativos: Parte 1 de ASME PCC-2</h4>
            <p>La Parte 1 de esta Norma contiene requisitos y limitaciones adicionales. Este Artículo debe usarse en conjunto con la Parte 1.</p>
        </div>
        <div class="subsection">
            <h4>502-2.2 Equipos a Presión Reparados o Alterados</h4>
            <p>Los términos reparado y alterado se definen como en el Código Nacional de Inspección (NBIC), ANSI/NB-23 Apéndice 4, o API 510 y API 570 para recipientes a presión y tuberías.</p>
        </div>
        <div class="subsection">
            <h4>502-2.3 Ejemplos Donde la Prueba de Presión Puede Ser Desaconsejable</h4>
            <div class="subsection">
                <h4>502-2.3.1 Cimentación o Estructura de Soporte</h4>
                <p>Donde la cimentación o estructura de soporte no ha sido diseñada para soportar el peso de equipos a presión llenos de líquido.</p>
            </div>
            <div class="subsection">
                <h4>502-2.3.2 Reacciones o Consecuencias Indeseables</h4>
                <p>Una preocupación de seguridad donde la aplicación de fluidos de prueba podría llevar a una reacción indeseable con el residuo de fluidos contenidos en el equipo a presión.</p>
            </div>
            <div class="subsection">
                <h4>502-2.3.3 Razones de Diseño</h4>
                <p>(a) Donde el diseño del equipo a presión se basa en otros factores, como flexión, donde las tensiones debidas a presión pueden no ser determinantes</p>
                <p>(b) Donde un recipiente para el cual el espesor de los componentes del límite de presión está gobernado por consideraciones de presión externa (pandeo)</p>
            </div>
            <div class="subsection">
                <h4>502-2.3.4 Problemas de Pintura/Recubrimiento/Revestimiento</h4>
                <p>Donde la pintura/recubrimiento/revestimiento podría enmascarar fugas que de otra manera habrían sido detectadas durante una prueba de presión. Esto incluye daño a materiales internos refractarios o aislantes, así como daño a revestimientos internos.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>502-2.4 Reparaciones y Alteraciones para las Cuales las Pruebas de Presión Normalmente No Son Requeridas (ANSI/NB-23)</h4>
            <p>Los siguientes tipos de reparaciones y/o alteraciones pueden estar exentos de pruebas de presión o donde las pruebas de presión pueden ser opcionales dependiendo de las necesidades del usuario propietario:</p>
            <p>(a) soldadura o soldadura fuerte que no penetra el límite de presión en ningún punto</p>
            <p>(b) soldaduras de sellado</p>
            <p>(c) aplicación/reparaciones de revestimiento</p>
            <p>(d) superficie dura</p>
            <p>(e) soldadura a superficies de asiento de bridas, cuando menos del 50% del espesor axial es reemplazado por soldadura</p>
            <p>(f) soldaduras tubo-placa de tubos, siempre que menos del 10% del número total de tubos sean reemplazados en cualquier momento después de un ciclo operativo completo</p>
            <p>(g) taponado o encamisado de tubos de intercambiadores de calor, generadores de vapor o tubos de calderas</p>
            <p>(h) accesorios de conexión en caliente</p>
        </div>
    </div>

    <div class="subsection">
        <h4>502-3 DISEÑO</h4>
        <p>Ver párrafo 502-2.3.3.</p>
    </div>

    <div class="subsection">
        <h4>502-4 FABRICACIÓN (REPARACIÓN O ALTERACIÓN)</h4>
        <p>En el contexto de este Artículo, esto no es aplicable.</p>
    </div>

    <div class="subsection">
        <h4>502-5 EXAMEN - EXAMEN NO DESTRUCTIVO (END)</h4>
        <p>El tipo y cantidad específicos de END superficial y/o volumétrico que deben especificarse en lugar de las pruebas de presión están a discreción del usuario propietario, cuya extensión debe basarse en el riesgo de fuga o falla del equipo. El END especificado debe coincidir con la probabilidad del tipo de defectos que podrían ocurrir con los materiales y métodos de soldadura particulares en uso. Ver párrafo 502-1.6 para los métodos END más comunes generalmente empleados en lugar de las pruebas de presión.</p>
    </div>

    <div class="subsection">
        <h4>502-6 PRUEBAS</h4>
        <p>En el contexto de este Artículo, esto no es aplicable.</p>
    </div>

    <div class="subsection">
        <h4>502-7 REFERENCIAS</h4>
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        <p>ANSI/NB-23-2007, Código Nacional de Inspección</p>
        <p>Galanes, George. "Pruebas de Presión: Hecho y Ficción," National Board Bulletin 61, no. 3 (Otoño 2006):28 (https://www.nationalboard.org/SiteDocuments/Bulletins/FA06.pdf).</p>
        <p>Editor: National Board of Boiler and Pressure Vessel Inspectors (NBBI), 1055 Crupper Avenue, Columbus, OH 43229 (www.nationalboard.org)</p>
        <p>API 510-2006, Código de Inspección de Recipientes a Presión: Inspección de Mantenimiento, Clasificación, Reparación y Alteración</p>
        <p>API 570, Código de Inspección en Servicio para Tuberías de Proceso</p>
        <p>Editor: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</p>
        <p>ASME Boiler and Pressure Vessel Code, Edición 2007, Caso de Código 2235</p>
        <p>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección IV, Calderas de Calefacción</p>
        <p>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección V, Examen No Destructivo</p>
        <p>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección VIII, División 1 - Reglas para Construcción de Recipientes a Presión</p>
        <p>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección IX, Calificaciones de Soldadura y Soldadura Fuerte</p>
        <p>Editor: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</p>
        <p>ASNT Recommended Practice No. SNT-TC-1A, Calificación y Certificación de Personal en Ensayos No Destructivos</p>
        <p>Editor: American Society for Nondestructive Testing (ASNT), 1711 Arlingate Lane, P.O. Box 28518, Columbus, OH 43228 (www.asnt.org)</p>
    </div>

    <div class="subsection">
        <h4>Apéndice Obligatorio 502-1 Comparación de Métodos END Seleccionados</h4>
        <p>Ver Tabla 502-1-1.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Tabla 502-1-1 Comparación de Métodos END Seleccionados</caption>
                <thead>
                    <tr>
                        <th>Método END</th>
                        <th>Propiedades Detectadas o Medidas</th>
                        <th>Discontinuidades Típicas Detectadas</th>
                        <th>Aplicaciones Representativas</th>
                        <th>Ventajas</th>
                        <th>Limitaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Radiografía</td>
                        <td>Variaciones de densidad</td>
                        <td>Defectos volumétricos, porosidad, inclusiones</td>
                        <td>Examen de soldaduras, inspección de fundiciones</td>
                        <td>Registro permanente, detecta defectos internos</td>
                        <td>Seguridad radiológica, acceso a ambos lados requerido</td>
                    </tr>
                    <tr>
                        <td>Ultrasonido de Onda Transversal</td>
                        <td>Reflexión/transmisión de ondas sonoras</td>
                        <td>Defectos internos, falta de fusión, grietas</td>
                        <td>Inspección de soldaduras, medición de espesor</td>
                        <td>Penetración profunda, dimensionamiento cuantitativo</td>
                        <td>Preparación de superficie requerida, dependiente del operador</td>
                    </tr>
                    <tr>
                        <td>Partículas Magnéticas</td>
                        <td>Fuga de flujo magnético</td>
                        <td>Grietas superficiales y subsuperficiales</td>
                        <td>Materiales ferromagnéticos, inspección de soldaduras</td>
                        <td>Rápido, sensible a grietas finas</td>
                        <td>Limitado a materiales ferromagnéticos, preparación de superficie</td>
                    </tr>
                    <tr>
                        <td>Líquidos Penetrantes</td>
                        <td>Acción capilar</td>
                        <td>Defectos que rompen la superficie</td>
                        <td>Materiales no porosos, todos los metales</td>
                        <td>Simple, económico, portátil</td>
                        <td>Solo defectos superficiales, limpieza crítica</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});