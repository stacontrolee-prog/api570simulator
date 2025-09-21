// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 5
registerChapter('API574', {
    id: 5,
    title: "Piping Design and Construction",
    titleEs: "Diseño y Construcción de Tuberías",
    content: `<h3>5 Piping Design and Construction</h3>
    <div class="subsection">
        <h4>5.1 Design and Construction Standards</h4>
        <p>Piping should be fabricated in accordance with the appropriate construction standards for the application. Some commonly used construction standards are ASME B31.3 and ASME B31.1.</p>
    </div>
    
    <div class="subsection">
        <h4>5.2 Methods of Construction</h4>
        <div class="subsection">
            <h4>5.2.1 Pipe Joining Methods</h4>
            <div class="subsection">
                <h4>5.2.1.1 General</h4>
                <p>The common joining methods used to assemble piping components are welding, threading, and flanging. Welded joints are most used to connect piping spools and components. Some owner-operators still rely on threaded joints in SBP and where piping is connected to equipment that requires periodic maintenance. Flanged joints are most used where piping is connected to equipment or other flanged valves and fittings. Cast iron piping and thin-wall tubing require special connections/joining methods due to inherent design characteristics.</p>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.2 Threaded Joints</h4>
                <p>Threaded joints are generally limited to auxiliary piping in noncritical service (minor consequence should a leak occur) that has a nominal size of 2 in. (51 mm) or smaller. Threaded joints for NPSs of 24 in. (610 mm) and smaller are standardized (see ASME B1.20.1).</p>
                <p>Lengths of pipe can be joined by any of several types of threaded fittings (see 4.4). Couplings, which are sleeves tapped at both ends for receiving a pipe, are normally used to connect lengths of threaded pipe. When it is necessary to remove or disconnect the piping, threaded unions or mating flanges are required (see 5.2.1.4). Threaded joints that are located adjacent to rotating equipment or other specific sources of high vibration can be especially susceptible to failure due to fatigue. Special consideration should be given to these situations.</p>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.3 Welded Joints</h4>
                <div class="subsection">
                    <h7>5.2.1.3.1 General</h7>
                    <p>Where welded joints are used, the joints are either butt-welded (in various sizes of pipe) or socket-welded (typically NPS 2 and smaller).</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.3.2 Butt-welded Joints</h7>
                    <p>Butt-welded connections are the type most widely utilized in industry. The ends of the pipe, fitting, or valve are prepared (beveled) and aligned with adequate root opening in accordance with ASME B16.25 or any other end preparation that meets the welding procedure specification, permitting the ends to be joined by fusion welding.</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.3.3 Socket-welded Joints</h7>
                    <p>Socket-welded joints are made by inserting the end of the pipe into a recess in a fitting or valve and then fillet welding the joint. Two lengths of pipe or tubing can be connected by this method using a socket-weld coupling. Figure 11 illustrates a cross section of a socket-welded joint.</p>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_11.png" class="figure-image">
                        <p class="figure-caption">Figure 11—Cross Section of a Socket-welded Tee Connection</p>
                    </div>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.3.4 Welded Branch Connections</h7>
                    <p>Many piping failures occur at pipe-to-pipe welded branch connections. Branch connections often fail because they are subject to higher-than-normal stresses. These may be caused by excessive structural loadings from unsupported valves or piping, vibration, or thermal expansion, or other configurations that promote high stress. The result is concentrated tri-axial stresses (e.g. bending and torsional) that can cause fatigue cracking or other types of failures. Where joints are susceptible to such failures, a forged piping tee typically offers better reliability because it removes the weld from the point of highest stress concentration.</p>
                    <p>Self-reinforced branch connections also can offer better reliability if they are properly welded to the main pipe using appropriate weld procedures and meet the manufacturer's recommendations for full penetration welds.</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.4 Flanged Joints</h4>
                <p>Flanged joints are made by bolting two flanges together with some form of gasket between the seating surfaces. The gasket surfaces can be flat and range from serrated (concentric or spiral) to smooth (depending on the type of gasket, gasket material, and service conditions), or grooves can be cut for seating metal-ring gaskets. Flanged joints should be assembled by trained and qualified personnel (see Appendix A of ASME PCC-1). Consideration should be given to establishing a finished joint examination process. See 6.2 on flanged joint leakage.</p>
                <p>Figure 12 illustrates common flange facings for various gaskets. The common types of flanges are weld neck, slip-on welding, threaded, blind, lap joint, and socket-welded. Each type is illustrated in Figure 13.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_12.png" class="figure-image">
                    <p class="figure-caption">Figure 12—Flange Facings Commonly Used in Refinery and Chemical Plant Piping</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/api574_figure_13.png" class="figure-image">
                    <p class="figure-caption">Figure 13—Types of Flanges</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.5 Cast Iron Pipe Joints</h4>
                <p>Cast iron pipe joints can be of the flanged, packed, sleeve, hub-and-spigot-end or hub-and-plain-end, or bell-and-spigot-end or bell-and-plain-end type. Push-on joints with rubber or synthetic ring gaskets are available. Clamped joints are also used. The hub-and-plain-end joint is shown in Figure 14. Figure 15 illustrates cross sections of a bell-type mechanical joint, a sleeve connection, and a typical proprietary connection (see 5.2.1.7). These types of joints are rarely used in process piping service because of their low toughness and tendency toward brittle fracture.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_14.png" class="figure-image">
                    <p class="figure-caption">Figure 14—Cross Section of a Typical Bell-and-Spigot Joint</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/api574_figure_15.png" class="figure-image">
                    <p class="figure-caption">Figure 15—Cross Sections of Typical Packed and Sleeve Joints</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.6 Tubing Joints</h4>
                <p>Tubing can be joined by welding, soldering, or brazing or by using flared or compression fittings. Figure 16 illustrates flared and compression joints. Tubing joints should be assembled by trained and qualified personnel. Consideration should be given to establishing a finished joint examination process in accordance with tubing joint manufacturer's recommendations.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_16.png" class="figure-image">
                    <p class="figure-caption">Figure 16—Cross Sections of Typical Tubing Joints</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.7 Special Joints</h4>
                <p>Proprietary joints are available that incorporate unique gaskets, clamps, and bolting arrangements. These designs offer some advantages in some services over conventional joints in certain services, including the following:</p>
                <ul>
                    <li>higher pressure and temperature ratings;</li>
                    <li>smaller dimensions;</li>
                    <li>easier installation—axial and angular alignment requirements are less stringent;</li>
                    <li>greater force and moment toleration.</li>
                </ul>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.8 Nonmetallic Piping Joints</h4>
                <div class="subsection">
                    <h7>5.2.1.8.1 General</h7>
                    <p>There are several methods of joining FRP pipe and fittings. Joints in nonmetallic piping are often of several different designs depending upon the manufacturer of the pipe. Some common joint designs in FRP pipe systems include a bell and spigot, butt and wrap, taper-taper, and flange-flange.</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.8.2 Bell and Spigot/Taper-taper</h7>
                    <p>Bell-and-spigot and taper-taper joints are created by inserting the spigot end into the bell end. Proper surface preparation, insertion, and adequate adhesive are the key to making these types of joints.</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.8.3 Butt and Wrap</h7>
                    <p>Butt-and-wrap joints involve butting plain end pipe together and applying layers of resin and fiber reinforcement layers around the joint. These types of joints should be done by qualified personnel.</p>
                    <p>NOTE Fitting thickness is often greater than the matching pipe thickness. The proper taper of the fitting thickness is required to make the proper butt-and-wrap joint.</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.8.4 Flange-flange</h7>
                    <p>Proper flange joint makeup involves the use of appropriate gaskets, bolt torques, and alignment. Using a calibrated torque wrench helps ensure proper torquing and avoids damage by overstressing the FRP flanges. Proper flange alignment, flatness, and waviness according to the specification can prevent damage when torquing to specified values. Full-face gaskets are typically used for bolting full-face flanges. Flanges bolted to raised-face connections should be evaluated individually for required torque values and proper gasket requirements.</p>
                </div>
            </div>
        </div>
        
        <div class="subsection">
            <h4>5.2.2 Pipe Fabrication</h4>
            <div class="subsection">
                <h4>5.2.2.1 General</h4>
                <p>Pipe fabrication is the process of cutting, beveling, and welding piping components, such as pipes, tees, elbows flanges, etc. to provide a means to safely transport or process liquids, gases, and solids.</p>
            </div>
            
            <div class="subsection">
                <h4>5.2.2.2 Seamless Pipe</h4>
                <p>Seamless pipe is made as a continuous tube with no longitudinal weld. This type of pipe is generally known to withstand higher pressure and is widely used in industry. A common carbon steel seamless pipe is ASME SA106.</p>
            </div>
            
            <div class="subsection">
                <h4>5.2.2.3 Seam Welded Pipe</h4>
                <p>Seam welded pipe is formed by using a rolling machine to roll the longer sides of plate together to form a cylinder and then welding the seam together. The most common method of joining the seam is electric resistance welding. This produces a weld seam that cannot be seen or felt. This pipe is generally used in lower-pressure applications and services that would not be selectively corrosive to welds/heat-affected zone.</p>
            </div>
        </div>
    </div>
    
    <div class="subsection">
        <h4>5.3 Materials of Construction</h4>
        <div class="subsection">
            <h4>5.3.1 Base Material</h4>
            <p>Piping can be made from any material that can be rolled and welded, cast, or drawn through dies to form a tubular section. The two most common carbon steel piping materials used in the petrochemical industry are ASTM A53 and ASTM A106. The industry uses both seamless and electric resistance welded piping for process services, depending upon current economics and the potential for accelerated corrosion of the weld seam in service. Piping of a nominal size larger than 16 in. (406 mm) is usually made by rolling plates to size and welding the seams. Pipe can be centrifugally cast and then machined to any desired thickness.</p>
        </div>
        
        <div class="subsection">
            <h4>5.3.2 Pipe Linings</h4>
            <p>Internal linings can be incorporated into the piping design to reduce corrosion, erosion, product contamination, and pipe metal temperatures. The linings can generally be characterized as metallic and nonmetallic.</p>
            <p>Metallic liners are installed in various ways, such as cladding and weld overlay.</p>
            <ul>
                <li>Clad pipe has a metallic liner that is an integral part of the plate material rolled or explosion bonded before fabrication of the pipe.</li>
                <li>Corrosion-resistant metal can also be applied to the pipe surfaces by various weld overlay processes.</li>
                <li>Metallic liners can be made of any metal resistant to the corrosive or erosive environment, depending upon its purpose. These include stainless steels, high alloys, cobalt-based alloys, etc.</li>
            </ul>
            <p>Nonmetallic liners can be used to resist corrosion and erosion or to insulate and reduce the temperature on the pipe wall. Some common nonmetallic lining materials for piping are concrete, castable refractory, plastic, and thin-film coatings.</p>
        </div>
        
        <div class="subsection">
            <h4>5.3.3 Nonmetallic Piping</h4>
            <div class="subsection">
                <h4>5.3.3.1 General</h4>
                <p>Nonmetallic materials are not covered by API 570. The term "nonmetallic" has a broad definition, but this section refers to the fiber-reinforced plastics group encompassed by the generic acronyms FRP (fiber reinforced plastic) and GRP (glass-reinforced plastic). Another group of materials, for example high- and low-density polyethylene and polyvinyl, have a homogeneous structure produced by extrusion and are outside the scope of this document.</p>
                <p>Nonmetallic materials have limited application to specific piping systems in the process industry, such as in utilities. For example, typical service applications of FRP piping include service water, process water, cooling medium, potable water, sewage/gray water, nonhazardous waste, nonhazardous drains, nonhazardous vents, chemicals, firewater ring mains, firewater deluge systems, and produced and ballast water. Nonmetallic materials have significant advantages over more familiar metallic materials, but they also have unique construction and deterioration mechanisms that can lead to premature failures if not addressed adequately.</p>
                <p>The design of these piping systems is largely dependent on the application. Many companies have developed their own specifications that outline the materials, quality, fabrication requirements, and design factors. It is noted that other codes and standards have requirements and guidance. In particular:</p>
                <ul>
                    <li>ASME B31.3, Chapter VII, covers design requirements for nonmetallic piping;</li>
                    <li>the American Water Works Association is an organization that also provides guidance on FRP pipe design and testing.</li>
                </ul>
                <p>These codes and standards, however, do not offer guidance as to the right choice of corrosion barriers, resins, fabricating methods, and joint systems for a particular application. The user should consider other sources, such as resin and pipe manufacturers, for guidance on their application.</p>
            </div>
            
            <div class="subsection">
                <h4>5.3.3.2 FRP Pipe Manufacturing</h4>
                <p>Historically, while many of the failures in FRP piping are related to poor construction practices, a poor understanding of the application to a service or the manufacturing of the materials can also lead to failure. For example, a lack of familiarity with the materials can lead to a failure to recognize the detail of care that must be applied in construction.</p>
                <p>FRP materials require understanding of their manufacturing process and their service limitations. For example:</p>
                <ul>
                    <li>each manufacturing technique will generate a different set of physical properties;</li>
                    <li>each resin system has a temperature limitation, and each joint system has its advantages and disadvantages.</li>
                </ul>
                <p>FRP piping is manufactured in many ways. Every service application should be reviewed for proper resin, catalyst, corrosion barrier (liner) composition, and structural integrity. Although FRP is corrosion resistant, using the wrong resin or corrosion barrier can cause premature failure.</p>
                <p>FRP pipe can experience ultraviolet (UV) degradation over time if not adequately protected. Adding a UV inhibitor in the resin will help prevent premature fiber blooming caused by UV. The user should consider this option for all FRP piping applications and be aware that this would be a supplemental specification.</p>
                <p>Standardized FRP piping systems commonly called "commodity piping" are manufactured for a variety of services and are sold as products with a predetermined design, resin, corrosion barrier, and structure. Piping manufacturers typically have a quality control specification that identifies the level of quality and allowable tolerance that is built into their product.</p>
                <p>Custom fabricated pipe is typically designed and manufactured for a specific application. The resin, catalyst system, corrosion barrier, and structure are specified, and the pipe is manufactured to a specification and to a specified level of quality and tolerances.</p>
            </div>
            
            <div class="subsection">
                <h4>5.3.3.3 Qualification of Assemblers</h4>
                <p>The qualification of bonders and jointers is as important for FRP fabrication as the qualification of welders is for metal fabrication. Due to limitations in NDE methods, the emphasis must be placed on procedure and bonder qualifications and testing.</p>
                <p>Similarly, because the material stiffness is much less than metal and because FRP has different types of shear, small-bore connections will not withstand the same shear stress, weight loadings, or vibrations that are common with metallic piping. Supporting attachments, such as valves, etc., on small-bore connections should be analyzed in detail to prevent premature failure of the system.</p>
            </div>
            
            <div class="subsection">
                <h4>5.3.3.4 Inspection</h4>
                <p>All FRP piping should be inspected by a person who is knowledgeable in the curing, fabrication, and quality of FRP materials. The level of inspection should be determined by the user. ASME RTP-1—Table 6-1 can be used as a guide to identify liner and structure imperfections that are common in FRP laminates.</p>
                <p>The FRP inspector should verify by documentation and inspection that the piping system has been built with the proper materials, quality, hardness, and thickness as requested in the pipe specification. A final inspection should be performed at the job site to ensure that the pipe has not experienced any mechanical damage during shipment or assembly.</p>
            </div>
        </div>
    </div>`,
    contentEs: `<h3>5 Diseño y Construcción de Tuberías</h3>
    <div class="subsection">
        <h4>5.1 Estándares de Diseño y Construcción</h4>
        <p>Las tuberías deben fabricarse de acuerdo con los estándares de construcción apropiados para la aplicación. Algunos estándares de construcción comúnmente utilizados son ASME B31.3 y ASME B31.1.</p>
    </div>
    
    <div class="subsection">
        <h4>5.2 Métodos de Construcción</h4>
        <div class="subsection">
            <h4>5.2.1 Métodos de Unión de Tuberías</h4>
            <div class="subsection">
                <h4>5.2.1.1 General</h4>
                <p>Los métodos comunes de unión utilizados para ensamblar componentes de tuberías son soldadura, roscado y bridadas. Las juntas soldadas se utilizan principalmente para conectar tramos de tubería y componentes. Algunos propietarios-operadores todavía dependen de juntas roscadas en SBP y donde las tuberías están conectadas a equipos que requieren mantenimiento periódico. Las juntas bridadas se utilizan principalmente donde las tuberías están conectadas a equipos u otras válvulas y accesorios bridados. Las tuberías de fundición de hierro y los tubos de pared delgada requieren métodos de conexión/unión especiales debido a las características de diseño inherentes.</p>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.2 Juntas Roscadas</h4>
                <p>Las juntas roscadas generalmente se limitan a tuberías auxiliares en servicios no críticos (consecuencias menores en caso de fuga) que tienen un tamaño nominal de 2 pulg. (51 mm) o menor. Las juntas roscadas para NPS de 24 pulg. (610 mm) y menor están estandarizadas (ver ASME B1.20.1).</p>
                <p>Los tramos de tubería pueden unirse mediante varios tipos de accesorios roscados (ver 4.4). Los acoplamientos, que son manguetas roscadas en ambos extremos para recibir una tubería, normalmente se usan para conectar tramos de tubería roscada. Cuando es necesario remover o desconectar la tubería, se requieren uniones roscadas o bridas apareadas (ver 5.2.1.4). Las juntas roscadas que están ubicadas adyacentes a equipos rotativos u otras fuentes específicas de alta vibración pueden ser especialmente susceptibles a fallas por fatiga. Se debe dar consideración especial a estas situaciones.</p>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.3 Juntas Soldadas</h4>
                <div class="subsection">
                    <h7>5.2.1.3.1 General</h7>
                    <p>Donde se utilizan juntas soldadas, las juntas son soldadas a tope (en varios tamaños de tubería) o soldadas de enchufe (típicamente NPS 2 y menor).</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.3.2 Juntas Soldadas a Tope</h7>
                    <p>Las conexiones soldadas a tope son el tipo más ampliamente utilizado en la industria. Los extremos de la tubería, accesorio o válvula se preparan (biselan) y alinean con una abertura de raíz adecuada de acuerdo con ASME B16.25 o cualquier otra preparación de extremo que cumpla con la especificación del procedimiento de soldadura, permitiendo que los extremos se unan mediante soldadura por fusión.</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.3.3 Juntas Soldadas de Enchufe</h7>
                    <p>Las juntas soldadas de enchufe se hacen insertando el extremo de la tubería en una cavidad de un accesorio o válvula y luego soldando la junta con filete. Dos tramos de tubería o tubos pueden conectarse por este método utilizando un acoplamiento de soldadura de enchufe. La Figura 11 ilustra una sección transversal de una junta soldada de enchufe.</p>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_11.png" class="figure-image">
                        <p class="figure-caption">Figura 11—Sección Transversal de una Conexión de Tee Soldada de Enchufe</p>
                    </div>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.3.4 Conexiones de Ramal Soldadas</h7>
                    <p>Muchas fallas de tuberías ocurren en conexiones de ramal soldadas de tubería a tubería. Las conexiones de ramal a menudo fallan porque están sujetas a esfuerzos más altos de lo normal. Estos pueden ser causados por cargas estructurales excesivas de válvulas o tuberías no soportadas, vibración, o expansión térmica, u otras configuraciones que promueven alto esfuerzo. El resultado son esfuerzos triaxiales concentrados (ej. flexión y torsional) que pueden causar agrietamiento por fatiga u otros tipos de fallas. Donde las juntas son susceptibles a tales fallas, una tee de tubería forjada típicamente ofrece mejor confiabilidad porque remueve la soldadura del punto de mayor concentración de esfuerzo.</p>
                    <p>Las conexiones de ramal autorreforzadas también pueden ofrecer mejor confiabilidad si están debidamente soldadas a la tubería principal utilizando procedimientos de soldadura apropiados y cumplen con las recomendaciones del fabricante para soldaduras de penetración completa.</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.4 Juntas Bridadas</h4>
                <p>Las juntas bridadas se hacen atornillando dos bridas juntas con alguna forma de junta entre las superficies de asiento. Las superficies de la junta pueden ser planas y variar desde estriadas (concéntricas o en espiral) hasta lisas (dependiendo del tipo de junta, material de la junta y condiciones de servicio), o se pueden cortar ranuras para asentar juntas de anillo metálico. Las juntas bridadas deben ser ensambladas por personal capacitado y calificado (ver Apéndice A de ASME PCC-1). Se debe considerar establecer un proceso de examen de junta terminada. Ver 6.2 sobre fugas en juntas bridadas.</p>
                <p>La Figura 12 ilustra las caras de brida comunes para varias juntas. Los tipos comunes de bridas son cuello soldado, deslizante soldada, roscada, ciega, de brida libre y soldada de enchufe. Cada tipo se ilustra en la Figura 13.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_12.png" class="figure-image">
                    <p class="figure-caption">Figura 12—Caras de Brida Comúnmente Utilizadas en Tuberías de Refinería y Plantas Químicas</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/api574_figure_13.png" class="figure-image">
                    <p class="figure-caption">Figura 13—Tipos de Bridas</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.5 Juntas de Tubería de Fundición de Hierro</h4>
                <p>Las juntas de tubería de fundición de hierro pueden ser del tipo bridada, empaquetada, manguita, extremo de cubo y espiga o cubo y extremo liso, o extremo de campana y espiga o campana y extremo liso. Están disponibles juntas de empuje con juntas de anillo de goma o sintéticas. También se usan juntas abrazaderas. La junta de cubo y extremo liso se muestra en la Figura 14. La Figura 15 ilustra secciones transversales de una junta mecánica tipo campana, una conexión de manguita y una conexión propietaria típica (ver 5.2.1.7). Estos tipos de juntas rara vez se usan en servicio de tuberías de proceso debido a su baja tenacidad y tendencia hacia la fractura frágil.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_14.png" class="figure-image">
                    <p class="figure-caption">Figura 14—Sección Transversal de una Junta Típica de Campana y Espiga</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/api574_figure_15.png" class="figure-image">
                    <p class="figure-caption">Figura 15—Secciones Transversales de Juntas Típicas Empaquetadas y de Manguita</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.6 Juntas de Tubos</h4>
                <p>Los tubos pueden unirse mediante soldadura, soldadura blanda o fuerte o utilizando accesorios tipo flare o de compresión. La Figura 16 ilustra juntas flare y de compresión. Las juntas de tubos deben ser ensambladas por personal capacitado y calificado. Se debe considerar establecer un proceso de examen de junta terminada de acuerdo con las recomendaciones del fabricante de juntas de tubos.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_16.png" class="figure-image">
                    <p class="figure-caption">Figura 16—Secciones Transversales de Juntas Típicas de Tubos</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.7 Juntas Especiales</h4>
                <p>Están disponibles juntas propietarias que incorporan juntas, abrazaderas y arreglos de atornillado únicos. Estos diseños ofrecen algunas ventajas en algunos servicios sobre las juntas convencionales en ciertos servicios, incluyendo lo siguiente:</p>
                <ul>
                    <li>clasificaciones de presión y temperatura más altas;</li>
                    <li>dimensiones más pequeñas;</li>
                    <li>instalación más fácil—los requisitos de alineación axial y angular son menos estrictos;</li>
                    <li>mayor tolerancia a la fuerza y el momento.</li>
                </ul>
            </div>
            
            <div class="subsection">
                <h4>5.2.1.8 Juntas de Tuberías No Metálicas</h4>
                <div class="subsection">
                    <h7>5.2.1.8.1 General</h7>
                    <p>Existen varios métodos para unir tuberías y accesorios de FRP. Las juntas en tuberías no metálicas a menudo son de varios diseños diferentes dependiendo del fabricante de la tubería. Algunos diseños de juntas comunes en sistemas de tubería FRP incluyen campana y espiga, tope y envoltura, cónico-cónico, y brida-brida.</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.8.2 Campana y Espiga/Cónico-cónico</h7>
                    <p>Las juntas de campana y espiga y cónico-cónico se crean insertando el extremo espiga en el extremo campana. La preparación adecuada de la superficie, la inserción y el adhesivo adecuado son la clave para hacer estos tipos de juntas.</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.8.3 Tope y Envoltura</h7>
                    <p>Las juntas de tope y envoltura implican unir tuberías de extremo liso y aplicar capas de resina y capas de refuerzo de fibra alrededor de la junta. Estos tipos de juntas deben ser realizadas por personal calificado.</p>
                    <p>NOTA El espesor de los accesorios a menudo es mayor que el espesor de la tubería correspondiente. El conicado adecuado del espesor del accesorio es necesario para hacer la junta de tope y envoltura adecuada.</p>
                </div>
                
                <div class="subsection">
                    <h7>5.2.1.8.4 Brida-brida</h7>
                    <p>El montaje adecuado de juntas bridadas implica el uso de juntas, pares de torsión de tornillos y alineación adecuados. El uso de una llave de torsión calibrada ayuda a garantizar un torsionado adecuado y evita daños por sobreesfuerzo de las bridas FRP. La alineación adecuada de la brida, planitud y ondulación según la especificación puede prevenir daños al torsionar a los valores especificados. Normalmente se usan juntas de cara completa para atornillar bridas de cara completa. Las bridas atornilladas a conexiones de cara elevada deben evaluarse individualmente para los valores de torsión requeridos y los requisitos de junta adecuados.</p>
                </div>
            </div>
        </div>
        
        <div class="subsection">
            <h4>5.2.2 Fabricación de Tuberías</h4>
            <div class="subsection">
                <h4>5.2.2.1 General</h4>
                <p>La fabricación de tuberías es el proceso de cortar, biselar y soldar componentes de tuberías, como tubos, tees, codos, bridas, etc. para proporcionar un medio para transportar o procesar líquidos, gases y sólidos de manera segura.</p>
            </div>
            
            <div class="subsection">
                <h4>5.2.2.2 Tubería Sin Costura</h4>
                <p>La tubería sin costura se fabrica como un tubo continuo sin soldadura longitudinal. Este tipo de tubería generalmente se conoce por soportar mayor presión y es ampliamente utilizada en la industria. Una tubería común de acero al carbono sin costura es ASME SA106.</p>
            </div>
            
            <div class="subsection">
                <h4>5.2.2.3 Tubería Soldada con Costura</h4>
                <p>La tubería soldada con costura se forma utilizando una máquina de rodillo para enrollar los lados más largos de la placa juntos para formar un cilindro y luego soldar la costura juntos. El método más común para unir la costura es la soldadura por resistencia eléctrica. Esto produce una costura de soldadura que no se puede ver o sentir. Esta tubería generalmente se usa en aplicaciones de menor presión y servicios que no serían selectivamente corrosivos para la soldadura/zona afectada por el calor.</p>
            </div>
        </div>
    </div>
    
    <div class="subsection">
        <h4>5.3 Materiales de Construcción</h4>
        <div class="subsection">
            <h4>5.3.1 Material Base</h4>
            <p>Las tuberías pueden fabricarse con cualquier material que pueda ser laminado y soldado, fundido o estirado a través de matrices para formar una sección tubular. Los dos materiales de tubería de acero al carbono más comunes utilizados en la industria petroquímica son ASTM A53 y ASTM A106. La industria utiliza tanto tuberías sin costura como soldadas por resistencia eléctrica para servicios de proceso, dependiendo de la economía actual y el potencial de corrosión acelerada de la costura de soldadura en servicio. Las tuberías de tamaño nominal mayor de 16 pulg. (406 mm) generalmente se fabrican laminando placas al tamaño y soldando las costuras. La tubería puede ser fundida centrífugamente y luego mecanizada a cualquier espesor deseado.</p>
        </div>
        
        <div class="subsection">
            <h4>5.3.2 Revestimientos de Tubería</h4>
            <p>Los revestimientos internos pueden incorporarse en el diseño de la tubería para reducir la corrosión, erosión, contaminación del producto y temperaturas del metal de la tubería. Los revestimientos generalmente pueden caracterizarse como metálicos y no metálicos.</p>
            <p>Los revestimientos metálicos se instalan de varias maneras, como revestimiento metálico y soldadura de recubrimiento.</p>
            <ul>
                <li>La tubería con revestimiento metálico tiene un revestimiento metálico que es parte integral del material de la placa laminado o unido por explosión antes de la fabricación de la tubería.</li>
                <li>El metal resistente a la corrosión también puede aplicarse a las superficies de la tubería mediante varios procesos de soldadura de recubrimiento.</li>
                <li>Los revestimientos metálicos pueden fabricarse con cualquier metal resistente al ambiente corrosivo o erosivo, dependiendo de su propósito. Estos incluyen aceros inoxidables, aleaciones de alta aleación, aleaciones base cobalto, etc.</li>
            </ul>
            <p>Los revestimientos no metálicos pueden usarse para resistir la corrosión y erosión o para aislar y reducir la temperatura en la pared de la tubería. Algunos materiales comunes de revestimiento no metálico para tuberías son hormigón, refractario moldeable, plástico y recubrimientos de película delgada.</p>
        </div>
        
        <div class="subsection">
            <h4>5.3.3 Tuberías No Metálicas</h4>
            <div class="subsection">
                <h4>5.3.3.1 General</h4>
                <p>Los materiales no metálicos no están cubiertos por API 570. El término "no metálico" tiene una definición amplia, pero esta sección se refiere al grupo de plásticos reforzados con fibra abarcado por los acrónimos genéricos FRP (plástico reforzado con fibra) y GRP (plástico reforzado con vidrio). Otro grupo de materiales, por ejemplo polietileno de alta y baja densidad y polivinilo, tienen una estructura homogénea producida por extrusión y están fuera del alcance de este documento.</p>
                <p>Los materiales no metálicos tienen aplicación limitada a sistemas de tuberías específicos en la industria de procesos, como en servicios públicos. Por ejemplo, las aplicaciones de servicio típicas de las tuberías FRP incluyen agua de servicio, agua de proceso, medio de enfriamiento, agua potable, aguas residuales/grises, residuos no peligrosos, drenajes no peligrosos, ventilaciones no peligrosas, químicos, anillos principales de agua contra incendios, sistemas de rociado de agua contra incendios, y agua producida y lastre. Los materiales no metálicos tienen ventajas significativas sobre los materiales metálicos más familiares, pero también tienen mecanismos únicos de construcción y deterioro que pueden llevar a fallas prematuras si no se abordan adecuadamente.</p>
                <p>El diseño de estos sistemas de tuberías depende en gran medida de la aplicación. Muchas empresas han desarrollado sus propias especificaciones que describen los materiales, calidad, requisitos de fabricación y factores de diseño. Se nota que otros códigos y estándares tienen requisitos y orientación. En particular:</p>
                <ul>
                    <li>ASME B31.3, Capítulo VII, cubre los requisitos de diseño para tuberías no metálicas;</li>
                    <li>la American Water Works Association es una organización que también proporciona orientación sobre el diseño y prueba de tuberías FRP.</li>
                </ul>
                <p>Estos códigos y estándares, sin embargo, no ofrecen orientación sobre la elección correcta de barreras de corrosión, resinas, métodos de fabricación y sistemas de juntas para una aplicación particular. El usuario debe considerar otras fuentes, como fabricantes de resinas y tuberías, para orientación sobre su aplicación.</p>
            </div>
            
            <div class="subsection">
                <h4>5.3.3.2 Fabricación de Tuberías FRP</h4>
                <p>Históricamente, aunque muchas de las fallas en las tuberías FRP están relacionadas con prácticas de construcción deficientes, una comprensión deficiente de la aplicación a un servicio o la fabricación de los materiales también puede llevar a fallas. Por ejemplo, la falta de familiaridad con los materiales puede llevar a una falla en reconocer el detalle de cuidado que debe aplicarse en la construcción.</p>
                <p>Los materiales FRP requieren comprensión de su proceso de fabricación y sus limitaciones de servicio. Por ejemplo:</p>
                <ul>
                    <li>cada técnica de fabricación generará un conjunto diferente de propiedades físicas;</li>
                    <li>cada sistema de resina tiene una limitación de temperatura, y cada sistema de junta tiene sus ventajas y desventajas.</li>
                </ul>
                <p>Las tuberías FRP se fabrican de muchas maneras. Cada aplicación de servicio debe revisarse para una resina adecuada, catalizador, composición de barrera de corrosión (revestimiento) e integridad estructural. Aunque el FRP es resistente a la corrosión, usar la resina o barrera de corrosión incorrecta puede causar fallas prematuras.</p>
                <p>Las tuberías FRP pueden experimentar degradación por radiación ultravioleta (UV) con el tiempo si no están adecuadamente protegidas. Agregar un inhibidor de UV en la resina ayudará a prevenir la florecimiento prematura de la fibra causado por UV. El usuario debe considerar esta opción para todas las aplicaciones de tuberías FRP y ser consciente de que esto sería una especificación suplementaria.</p>
                <p>Los sistemas de tuberías FRP estandarizados comúnmente llamados "tubería de productos básicos" se fabrican para una variedad de servicios y se venden como productos con un diseño, resina, barrera de corrosión y estructura predeterminados. Los fabricantes de tuberías típicamente tienen una especificación de control de calidad que identifica el nivel de calidad y tolerancia admisible que está incorporada en su producto.</p>
                <p>La tubería fabricada a medida típicamente se diseña y fabrica para una aplicación específica. La resina, sistema catalizador, barrera de corrosión y estructura se especifican, y la tubería se fabrica según una especificación y a un nivel especificado de calidad y tolerancias.</p>
            </div>
            
            <div class="subsection">
                <h4>5.3.3.3 Calificación de Ensambladores</h4>
                <p>La calificación de los soldadores y unidores es tan importante para la fabricación FRP como la calificación de los soldadores para la fabricación de metal. Debido a limitaciones en los métodos NDE, el énfasis debe ponerse en el procedimiento y las calificaciones y pruebas del soldador.</p>
                <p>De manera similar, debido a que la rigidez del material es mucho menor que la del metal y porque el FRP tiene diferentes tipos de corte, las conexiones de pequeño diámetro no soportarán el mismo esfuerzo de corte, cargas de peso o vibraciones que son comunes con las tuberías metálicas. Los accesorios de soporte, como válvulas, etc., en conexiones de pequeño diámetro deben analizarse en detalle para prevenir fallas prematuras del sistema.</p>
            </div>
            
            <div class="subsection">
                <h4>5.3.3.4 Inspección</h4>
                <p>Todas las tuberías FRP deben ser inspeccionadas por una persona que tenga conocimiento del curado, fabricación y calidad de los materiales FRP. El nivel de inspección debe ser determinado por el usuario. ASME RTP-1—Tabla 6-1 puede usarse como guía para identificar imperfecciones de revestimiento y estructura que son comunes en laminados FRP.</p>
                <p>El inspector de FRP debe verificar mediante documentación e inspección que el sistema de tuberías ha sido construido con los materiales, calidad, dureza y espesor adecuados como se solicitó en la especificación de la tubería. Se debe realizar una inspección final en el sitio del trabajo para garantizar que la tubería no haya experimentado ningún daño mecánico durante el envío o montaje.</p>
            </div>
        </div>
    </div>`
});