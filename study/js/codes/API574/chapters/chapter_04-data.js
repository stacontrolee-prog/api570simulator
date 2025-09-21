// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 4
registerChapter('API574', {
    id: 4,
    title: "Introduction to Piping",
    titleEs: "Introducción a las Tuberías",
    content: `<h3>4 Introduction to Piping</h3>
    <div class="subsection">
        <h4>4.1 Piping Components</h4>
        <div class="subsection">
            <h4>4.1.1 Pipe</h4>
            <p>Steel and alloy pipe diameter is expressed as nominal pipe sizes (NPSs) and are manufactured to standard dimensions in NPSs up to 48 in. (1219 mm). The size refers to the approximate inside diameter (ID) of standard weight pipe for NPSs equal to or less than 12 in. (305 mm). For NPS equal to or greater than 14 in. (356 mm), the size denotes the actual outside diameter (OD).</p>
            <p>Pipe wall thicknesses are designated as pipe schedules in NPSs up to 36 in. (914 mm); refer to Annex B. The traditional thickness designations—standard weight, extra strong, and double extra strong—differ from schedules and are used for NPSs up to 48 in. (1219 mm). In all standard sizes, the OD remains nearly constant regardless of the thickness. Table B.1 and Table B.2 list the dimensions of ferritic and stainless steel pipe from NPS 1/8 [DN (diameter nominal) 6] up through NPS 24 (DN 600). See ASME B36.10M for the dimensions of welded and seamless wrought steel piping and ASME B36.19 for the dimensions of stainless steel piping.</p>
            <p>Allowable tolerances in pipe diameter differ from one piping material to another. Table B.3 lists the acceptable tolerances for diameter and thickness of most ASTM ferritic pipe standards. The actual thickness of seamless piping can vary from its nominal thickness by a manufacturing tolerance of as much as 12.5 %. The under tolerance for welded piping is 0.01 in. (0.25 mm). Cast piping has a thickness tolerance of +1/16 in. (1.6 mm) and −0 in. (0 mm), as specified in ASTM A53/A53M. Consult the ASTM or the equivalent ASME material specification to determine what tolerances are permitted for a specific material.</p>
            <p>Piping that has ends that are beveled or threaded with standard pipe threads can be obtained in various lengths. Piping can be obtained in different strength levels depending on the grades of material, including alloying material and the heat treatments specified.</p>
            <p>Cast iron piping is generally used for nonhazardous services, such as water; it is generally not recommended for pressurized hydrocarbon service because of its brittle nature. The standards and sizes for cast iron piping differ from those for welded and seamless piping.</p>
        </div>
        
        <div class="subsection">
            <h4>4.1.2 SBP, Secondary Piping, and Auxiliary Piping</h4>
            <p>SBP can be used as primary process piping, secondary piping, auxiliary piping, and for vents/drains. SBP vent/drain valves are normally connected to nipples 6 in. (152 mm) or less in length and are most often used to vent piping high points, drain piping low points, and provide a connection point for secondary/auxiliary piping. Secondary piping is normally isolated from the main process lines by closed valves and can be used for such functions as sample taps. Auxiliary piping is normally open to service but can be isolated from the primary process. Examples include flush lines, instrument piping, analyzer piping, lubrication, and seal oil piping for rotating equipment.</p>
            <p>Inspectors and piping engineers should be aware of design, maintenance, and operating issues that cause SBP failures and may require mitigation. Those issues include, but are not limited to, the following:</p>
            <ul>
                <li>mismatched union connections from differing manufacturers;</li>
                <li>the potential for thermal growth or contraction that could cause SBP stresses that may lead to failure;</li>
                <li>cyclic loading from thermal or mechanical loads that could cause fatigue cracking (e.g. overhung SBP piping systems, the potential for PRV chattering in certain relief scenarios, flow-induced vibration, vaporization, and cavitation);</li>
                <li>inadequate management of change (MOC) consideration that may cause unanticipated thermal, mechanical, or corrosive scenarios on SBP;</li>
                <li>inadequate design (e.g. support and pipe schedule) for the various unanticipated transient loads imposed on SBP;</li>
                <li>inadequate protection from external impacts (e.g. vehicular traffic and maintenance activities);</li>
                <li>inadequate protection or support for SBP that could be subject to being used as personnel or tool/equipment support (e.g. step, tie-off, handrail, pulley, and lever);</li>
                <li>improperly selected components for the class of service;</li>
                <li>inadequate consideration for the use of socket weld versus threaded fittings, both of which can lead to premature failure if not specified and/or installed properly;</li>
                <li>inadequate thickness for threaded SBP after accounting for the loss of thickness from thread cutting or lack of bottom gap when welding socket welded fittings;</li>
                <li>not including alloy SBP in positive material identification (PMI) procedures;</li>
                <li>not including SBP in piping damage mechanism reviews;</li>
                <li>replacement of SBP components with different alloys without adequate consideration for potential new damage mechanisms (e.g. "upgrading" to stainless steel in a wet chloride environment).</li>
            </ul>
            <p>Additional guidance on SBP may be found in API 570—Section 6.6.</p>
        </div>
        
        <div class="subsection">
            <h4>4.2 Tubing</h4>
            <p>Tubing is similar to piping in that it is used to convey fluid and is manufactured in many ODs and wall thicknesses. Tubing is generally seamless but can be welded. Its stated size is typically the actual OD rather than NPS. [ASTM B88 tubing, which is often used for steam tracing, is an exception in that its size designation is 1/8 in. (3.2 mm) less than the actual OD.] Methods used to join tubing sections include flared, flareless, and compression-type tube fittings instead of typical piping joints, such as threads, flanges, or welding. Tubing is usually made in small diameters and is often used for instrument connections, lubricating oil services, steam tracing, and similar services. Generally, tubing is more flexible than piping that allows it to be bent to desired shapes and configurations, as opposed to piping that relies much more frequently on elbows and other fittings for directional changes and is less often bent. When used for heat exchange applications, such as heaters, boilers, or other heat exchangers, the tubular component is commonly referred to as a tube rather than as tubing.</p>
            <p>Inspectors and piping engineers should be aware of design, maintenance, and operating issues that cause tubing failures and may require mitigation. Those issues include, but are not limited to, the following:</p>
            <ul>
                <li>inadequate protection from external impacts (e.g. vehicular traffic and maintenance activities);</li>
                <li>improperly selected components for the class of service;</li>
                <li>improper assembly of tubing joints;</li>
                <li>cyclic loading, vibration, shock, and thermal expansion and contraction;</li>
                <li>longitudinal defects from forming;</li>
                <li>chloride stress corrosion cracking (CSCC) of stainless steel tubing, particularly at tubing supports in elevated temperatures or offshore environments;</li>
                <li>inadequate support structure for tubing.</li>
            </ul>
        </div>
        
        <div class="subsection">
            <h4>4.3 Valves</h4>
            <div class="subsection">
                <h4>4.3.1 General</h4>
                <p>The basic types of valves are gate, globe, plug, ball, diaphragm, butterfly, check, and slide valves. Valves Body thicknesses, pressure ratings and other design data are provided in the applicable standards as shown in Table 1. Valve bodies can be cast, forged, machined from bar stock, or fabricated by welding a combination of two or more materials. The seating surfaces in the body can be integral with the body, or they can be made as inserts. The insert material can be the same as or different from the body material. When special nonmetallic material that could fail in a fire is used to prevent seat leakage, metal-to-metal backup seating surfaces can be provided (see API 607). Other parts of the valve trim can be made of any suitable material and can be cast, formed, forged, or machined from commercially rolled shapes. Valve ends can be flanged, threaded for threaded connections, recessed for socket welding, or beveled for butt welding. Although many valves are manually operated, they can be equipped with electric motors and gear operators or other power operators to accommodate a large size or inaccessible location or to permit actuation by instruments. Refer to API 615 for a complete overview of valve designs and reference standards.</p>
                
                <div class="table-container">
                    <table class="api-table">
                        <caption>Table 1—API and ASME Valve Design Standards and Codes</caption>
                        <thead>
                            <tr>
                                <th>Valve Design Standard</th>
                                <th>Applicable Valve Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>API 594</td>
                                <td>Check valves</td>
                            </tr>
                            <tr>
                                <td>API 599</td>
                                <td>Metal plug valves</td>
                            </tr>
                            <tr>
                                <td>API 600</td>
                                <td>Steel gate valves</td>
                            </tr>
                            <tr>
                                <td>API 602</td>
                                <td>Gate, globe, and check valves</td>
                            </tr>
                            <tr>
                                <td>API 603</td>
                                <td>Corrosion-resistant, bolted bonnet gate valves</td>
                            </tr>
                            <tr>
                                <td>API 607</td>
                                <td>Fire test for quarter-turn valves and valves equipped with nonmetallic seats</td>
                            </tr>
                            <tr>
                                <td>API 608</td>
                                <td>Metal ball valves</td>
                            </tr>
                            <tr>
                                <td>API 609</td>
                                <td>Butterfly valves</td>
                            </tr>
                            <tr>
                                <td>ASME B16.34</td>
                                <td>Valves: flanged, threaded, and welding end</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.2 Gate Valves</h4>
                <p>A gate valve consists of a body that contains a gate that interrupts the process flow. This type of valve is normally used in a fully open or fully closed position and as such is often called a "block valve," since it is not generally designed for regulating fluid flow. Gate valves larger than 2 in. (51 mm) usually have port openings that are approximately the same size as the valve end openings—this type of valve is called a "full-ported valve." Figure 1 shows a cross section of a full-ported wedge gate valve.</p>
                <p>Reduced port gate valves are also very common and have port openings that are smaller than the end openings. Reduced port valves should not be used as block valves associated with pressure-relief devices or in erosive applications, such as slurries, or lines that are to be "pigged."</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_01.png" class="figure-image">
                    <p class="figure-caption">Figure 1—Cross Section of a Typical Wedge Gate Valve</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.3 Globe Valves</h4>
                <p>A globe valve, which is commonly used to regulate fluid flow, consists of a valve body that contains a circular disc that moves parallel to the disc axis and contacts the seat. The stream flows upward generally, except for vacuum service or when required by system design (e.g. fail closed), through the seat area against the disc, and then changes direction to flow through the body to the outlet disc. The seating surface can be flat or tapered. For fine-throttling service, a very steep tapered seat can be used; this particular type of globe valve is referred to as a needle valve. A globe valve is commonly constructed with its inlet and outlet in line and with its port opening at right angles to the inlet and outlet. Figure 2 illustrates a cross section of a globe valve.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_02.png" class="figure-image">
                    <p class="figure-caption">Figure 2—Cross Section of a Typical Globe Valve</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.4 Plug Valves</h4>
                <p>A plug valve consists of a tapered or cylindrical plug fitted snugly into a correspondingly shaped seat in the valve body. Plug valves usually function as block valves to close off flow. When the valve is open, an opening in the plug is in line with the flow openings in the valve body. The valve is closed by turning the plug one-quarter turn so that its opening is at right angles to the openings in the valve body. Plug valves can be operated by a gear-operated device or by turning a wrench on the stem. Plug valves are either lubricated or nonlubricated; Figure 3 illustrates both types. Lubricated plug valves use a grease-like lubricant that is pumped into the valve through grooves in the body and plug surfaces to provide sealing for the valve and promote ease of operation. On the other hand, nonlubricated plug valves may use metal seats or nonmetallic sleeves, seats, or complete or partial linings or coatings.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_03.png" class="figure-image">
                    <p class="figure-caption">Figure 3—Cross Sections of Typical Lubricated and Nonlubricated Plug Valves</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.5 Ball Valves</h4>
                <p>A ball valve is another one-quarter turn valve like a plug valve except that the plug in a ball valve is spherical instead of tapered or cylindrical. Ball valves usually function as block valves to close off flow. They are well suited for conditions that require quick on/off or bubble-tight service. A ball valve is typically equipped with an elastomeric seating material that provides good shutoff characteristics; however, all-metal, high pressure ball valves are available. Figure 4 illustrates a ball valve.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_04.png" class="figure-image">
                    <p class="figure-caption">Figure 4—Cross Section of a Typical Ball Valve</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.6 Diaphragm Valves</h4>
                <p>A diaphragm valve is a packless valve that contains a diaphragm made of a flexible material that functions as both a closure and a seal. When the valve spindle is screwed down, it forces the flexible diaphragm against a seat, or dam, in the valve body and blocks the flow of fluid. These valves are not used extensively in the petrochemical industry, but they do have application in corrosive services below approximately 250 °F (121 °C), where a leak-tight valve is needed. Figure 5 illustrates a diaphragm valve.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_05.png" class="figure-image">
                    <p class="figure-caption">Figure 5—Cross Section of a Typical Diaphragm Valve</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.7 Butterfly Valves</h4>
                <p>A butterfly valve consists of a disc mounted on a stem in the flow path within the valve body. The body is usually flanged and of the lug or wafer type. A one-quarter turn of the stem changes the valve from fully closed to completely open. Butterfly valves are most often used in low-pressure service for coarse flow control. They are available in a variety of seating materials and configurations for tight shutoff in low- and high-pressure services. Large butterfly valves are generally mechanically operated. The mechanical feature is intended to prevent them from slamming shut in service. Figure 6 illustrates the type of butterfly valve usually specified for water service.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_06.png" class="figure-image">
                    <p class="figure-caption">Figure 6—Typical Butterfly Valve</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.8 Check Valves</h4>
                <p>A check valve is used to automatically prevent backflow. The most common types of check valves are swing, lift-piston, ball, axial flow, and spring-loaded wafer check valves. Figure 7 illustrates cross sections of each type of valve; these views portray typical methods of preventing backflow.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_07.png" class="figure-image">
                    <p class="figure-caption">Figure 7—Cross Sections of Typical Check Valves</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.9 Slide Valves</h4>
                <p>The slide valve is a specialized gate valve generally used in erosive or high-temperature service. It consists of a flat plate that slides against a seat. The slide valve uses a fixed orifice and one or two solid slides that move in guides, creating a variable orifice that make the valve suitable for throttling or blocking. Slide valves do not make a gas-tight shutoff. One popular application of this type of valve is controlling fluidized catalyst flow in fluid catalytic cracking (FCC) units. Internal surfaces of these valves that are exposed to high wear from the catalyst are normally covered with erosion-resistant refractory. Figure 8 illustrates a slide valve.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_08.png" class="figure-image">
                    <p class="figure-caption">Figure 8—Cross Section of a Typical Slide Valve</p>
                </div>
            </div>
        </div>
        
        <div class="subsection">
            <h4>4.4 Fittings</h4>
            <div class="subsection">
                <h4>4.4.1 Metallic Fittings</h4>
                <p>Fittings are used to connect pipe sections and change the direction of flow or allow the flow to be diverted or added to. Fittings can be cast, forged, drawn from seamless or welded pipe, or formed and welded. Fittings can be obtained with their ends flanged, recessed for socket welding, beveled for butt welding, or threaded for threaded connections. Fittings are made in many shapes, such as wyes, tees, elbows, crosses, laterals, and reducers. Figure 9 illustrates types of flanged and butt-welded fittings. Figure 10 illustrates types of threaded and socket-welded fittings.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_09.png" class="figure-image">
                    <p class="figure-caption">Figure 9—Flanged-end Fittings and Wrought Steel Butt-welded Fittings</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/api574_figure_10.png" class="figure-image">
                    <p class="figure-caption">Figure 10—Forged Steel Threaded and Socket-welded Fittings</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.4.2 Fiber-reinforced Plastic Fittings</h4>
                <p>Fiber-reinforced plastic (FRP) fittings are manufactured by different processes. Injection molding, filament winding, and contact molding are the most common techniques. The same criteria used to accept the pipe should be applied to fittings. Contact molded fittings should be inspected to ensure that they are manufactured to the same specification as the pipe. Contact molded fittings fabrication is critical because the layers of reinforcement must be overlapped to make sure that the strength of the layers is not compromised. One-piece contact molded fittings are the preferred method, but many items, such as tees and branch connections, are often manufactured using two pieces of pipe. The inspector must check to make sure that the reinforcement on those pieces and the gap between them is within the tolerance specified. The exposed cut edges must be protected accordingly.</p>
            </div>
        </div>
        
        <div class="subsection">
            <h4>4.5 Flanges</h4>
            <div class="subsection">
                <h4>4.5.1 Metallic Flanges</h4>
                <p>ASME B16.5 covers flanges of various materials through an NPS of 24 in. (610 mm). ASME B16.47 covers steel flanges that range from NPS 26 through NPS 60. The flanges of cast fittings or valves are usually integral with the fitting or the valve body.</p>
            </div>
            
            <div class="subsection">
                <h4>4.5.2 FRP Flanges</h4>
                <p>FRP flanges are manufactured using the same methods as the fittings. Contact molded flanges should be inspected for dimensions, drawback, and face flatness. The layers of reinforcement should extend onto the pipe to create the proper bond and hub reinforcement. More information on FRP flanges can be found in MTI Project 160-04. FRP flanges should have the proper torques and gaskets.</p>
            </div>
        </div>
        
        <div class="subsection">
            <h4>4.6 Expansion Joints</h4>
            <p>Expansion joints are devices used to absorb dimensional changes in piping systems, such as those caused by thermal expansion, to prevent excessive stresses/strains from being transmitted to other piping components, and connections to pressure vessels and rotating equipment. While there are several designs, those commonly found in a plant are metallic bellows and fabric joint designs. Metallic bellows can be single-wall or multilayered, containing convolutions to provide flexibility. Often, these joints will have other design features, such as guides, to limit the motion of the joint or the type of loading applied to the joint. Metallic bellows expansion joints can be used in higher-temperature services than nonmetallic joints.</p>
            <p>All expansion joints have specific design limits for allowable movement (axial, angular, and offset), as well as pressure and temperature design limits. These limits should be understood and not exceeded. An expansion joint may limit the pressure/temperature rating of a piping system well below the pressure/temperature rating of the piping itself. Fabric joints are often used in flue gas services at low pressure and where temperatures do not exceed the rating of the fabric material.</p>
        </div>
        
        <div class="subsection">
            <h4>4.7 Piping Supports</h4>
            <div class="subsection">
                <h4>4.7.1 General</h4>
                <p>There are many different pipe support designs, types, and styles. They include hanger type, support shoes, saddles, bearing surfaces (e.g. structural members, concrete plinth blocks, etc.), spring type, dummy legs (trunnions), slide plates, sway braces/snubbers/struts, stands, sleeves, rollers, straps, clamps, and restrictive guides or anchors.</p>
                <p>An understanding of the function and design of pipe supports is required to manage both their integrity and the integrity of piping systems. Pipe supports can be subject to various damage mechanisms (see 7.4.6) and significant stresses from static loading and thermal movements that can affect the pipe support itself, as well as the supported piping and piping components.</p>
            </div>
            
            <div class="subsection">
                <h4>4.7.2 Piping Support Design—General Considerations</h4>
                <p>Piping supports usually are designed to carry the weight of piping including valves, insulation, and the weight of the fluid contained in the pipe, including hydrostatic test conditions. Properly designed piping supports will ensure that:</p>
                <ul>
                    <li>pipes and piping components are not subjected to unacceptable stresses from sustained loads, external loads, or vibration;</li>
                    <li>the piping does not impose an unacceptable load on the connections to the equipment it services (e.g. pressure vessels, pumps, turbines, and tanks);</li>
                    <li>thermal movement is controlled within allowable displacements so as not to interfere with adjacent piping or equipment and be maintained within allowable stress levels;</li>
                    <li>the potential for corrosion, cracking, and other in-service damage is minimized.</li>
                </ul>
            </div>
            
            <div class="subsection">
                <h4>4.7.3 Piping Support Design—Specific Considerations</h4>
                <p>Pipe support design considerations can differ depending on the support type or style. While some pipe support manufacturers offer innovative and proprietary designs to eliminate or minimize some of the credible damage mechanisms, the following is a list of some special piping support design parameters to take into consideration.</p>
                <ul>
                    <li><strong>Pipe Shoes</strong>—It is important that the shoe is long enough and/or guides or stops are provided on the structural steel to prevent the shoe from coming off the support, which could cause tearing or other damage to the pipe. Also, some pipe shoes may trap water between the pipe and shoe (e.g. clamp-on, bolt-on, saddles that have been stitch welded, etc.) and make inspection difficult to determine the condition of the pipe.</li>
                    <li><strong>Pipe Sleeves</strong>—Pipe sleeves are often used where pipe passes through a wall, under a roadway, or through an earthen berm. When used, design precautions should be taken to prevent corrosion on both the pipe and the pipe sleeve. Centering devices should also be considered to keep the inner pipe centered and prevent coating damage and corrosion. Fully welded and/or sealed sleeves may be considered if loss of containment detection and control are necessary. It should be noted that sleeves can make future pipe inspections and examinations more difficult.</li>
                    <li><strong>Doubler Plates, Half Soles, and Wear Pads</strong>—Additional plates may be attached to a pipe system at points where the pipe rests on bearing surfaces. Plates should be fully welded to avoid crevice corrosion except in hydrogen-charging environments, where a weep hole should be included that will not lead to moisture ingress. The use of adhesive-bonded stainless steel or composite half soles may be considered, but it is very important to make sure that the adhesive is fully bonded and maintained to effectively eliminate water entrapment. Galvanic corrosion should also be considered when using dissimilar materials for this purpose.</li>
                    <li><strong>Dummy Legs (Trunnions)</strong>—Historically, dummy leg (trunnion) supports were simple open-ended lengths of pipe welded to a piping system from which the piping system was supported. An open-ended design can allow moisture and debris to become trapped inside the support and cause corrosion of the support and the pipe. Dummy leg design should include, as a minimum, drain holes no smaller than 1/4 in. (6 mm) located at a low point, with the unattached end of the support being fitted with a fully welded cap or end plate to prevent debris or animals from entering. Trunnion design can be improved by using solid sections, such as "C" channels or "І/H" beams, to reduce the risk of this problem. However, even solid member sections can trap water and debris depending upon their design and orientation. Incorporating a fully welded doubler pad to the pipe at the trunnion attachment location can provide additional corrosion protection and may help distribute loads more evenly. The end of a dummy leg support that is not attached to the pipe may or may not be anchored or restrained.</li>
                    <li><strong>Supports on Insulated Lines</strong>—Special attention is necessary for the design of supports on insulated lines to minimize the possibility of water ingress and wicking of water into the insulation.</li>
                    <li><strong>Accessibility</strong>—The accessibility, and therefore inspectability/maintainability, of pipe supports should be considered during design.</li>
                    <li><strong>Welding</strong>—Paths for water ingress into hollow supports can be minimized with the use of fully welded seams. Avoid welding undercut or excessive penetration. Welding defects associated with supports can contribute to loss of containment events and, in some cases, be of sufficiently small size to make leak detection and source identification difficult. In hydrogen-charging environments, a weep hole should be provided to avoid the buildup of pressure between the plate and pipe.</li>
                    <li><strong>Anchors and Restraints</strong>—A connection of a pipe to a stationary structure or foundation to restrict the movement of the pipe in one or more directions (X, Y and/or Z plane). The attachment of an anchor or restraint to a pipe should preferably encircle the pipe to distribute the stresses evenly about the circumference of the piping component(s).</li>
                </ul>
            </div>
        </div>
        
        <div class="subsection">
            <h4>4.8 Flexible Hoses</h4>
            <p>Flexible hoses are often temporarily used to transfer hydrocarbons and other process fluids to facilitate turnaround activities (clearing equipment, deinventorying, purging, etc.) and for transfer of process fluids/products to rail cars and/or tanker trucks for shipment. Flexible hoses may also be installed within process piping systems to mitigate the effects of thermal expansion, vibration, or movement during normal operations. Some sites will maintain several flexible hoses to be used as needed in multiple services.</p>
            <p>Flexible hoses come in a variety of different construction materials and designs. Owner-operators should ensure the design of the flexible hose is compatible with the process service in which it is used. In addition, have appropriate quality assurance and test and inspection systems in place to ensure the mechanical integrity of the hose is maintained while in service.</p>
        </div>
    </div>`,
    contentEs: `<h3>4 Introducción a las Tuberías</h3>
    <div class="subsection">
        <h4>4.1 Componentes de Tuberías</h4>
        <div class="subsection">
            <h4>4.1.1 Tubería</h4>
            <p>El diámetro de las tuberías de acero y aleación se expresa como tamaños nominales de tubería (NPS) y se fabrican con dimensiones estándar en NPS hasta 48 pulg. (1219 mm). El tamaño se refiere al diámetro interior (ID) aproximado de la tubería de peso estándar para NPS iguales o menores a 12 pulg. (305 mm). Para NPS iguales o mayores a 14 pulg. (356 mm), el tamaño denota el diámetro exterior (OD) real.</p>
            <p>Los espesores de pared de la tubería se designan como programas de tubería (schedules) en NPS hasta 36 pulg. (914 mm); consulte el Anexo B. Las designaciones de espesor tradicionales—peso estándar, resistencia extra y doble resistencia extra—difieren de los programas y se usan para NPS hasta 48 pulg. (1219 mm). En todos los tamaños estándar, el OD permanece casi constante independientemente del espesor. La Tabla B.1 y la Tabla B.2 enumeran las dimensiones de las tuberías de acero férrico y acero inoxidable desde NPS 1/8 [DN (diámetro nominal) 6] hasta NPS 24 (DN 600). Consulte ASME B36.10M para las dimensiones de tuberías de acero forjado y sin costura y ASME B36.19 para las dimensiones de tuberías de acero inoxidable.</p>
            <p>Las tolerancias admisibles en el diámetro de la tubería difieren de un material de tubería a otro. La Tabla B.3 enumera las tolerancias aceptables para el diámetro y el espesor de la mayoría de los estándares de tubería férrica ASTM. El espesor real de las tuberías sin costura puede variar de su espesor nominal en una tolerancia de fabricación de hasta 12.5 %. La tolerancia inferior para las tuberías soldadas es de 0.01 pulg. (0.25 mm). Las tuberías fundidas tienen una tolerancia de espesor de +1/16 pulg. (1.6 mm) y −0 pulg. (0 mm), según lo especificado en ASTM A53/A53M. Consulte el ASTM o la especificación de material ASME equivalente para determinar qué tolerancias están permitidas para un material específico.</p>
            <p>Se puede obtener tubería con extremos biselados o roscados con roscas de tubería estándar en varias longitudes. Se puede obtener tubería en diferentes niveles de resistencia dependiendo de los grados del material, incluido el material de aleación y los tratamientos térmicos especificados.</p>
            <p>Las tuberías de fundición de hierro generalmente se usan para servicios no peligrosos, como el agua; generalmente no se recomiendan para servicios de hidrocarburos a presión debido a su naturaleza frágil. Los estándares y tamaños para las tuberías de fundición de hierro difieren de los de las tuberías soldadas y sin costura.</p>
        </div>
        
        <div class="subsection">
            <h4>4.1.2 Tubería de Pequeño Diámetro (SBP), Tubería Secundaria y Tubería Auxiliar</h4>
            <p>La SBP puede usarse como tubería de proceso primaria, tubería secundaria, tubería auxiliar y para ventilaciones/drenajes. Las válvulas de ventilación/drenaje SBP normalmente están conectadas a niples de 6 pulg. (152 mm) o menos de longitud y se usan con mayor frecuencia para ventilar puntos altos de la tubería, drenar puntos bajos de la tubería y proporcionar un punto de conexión para tuberías secundarias/auxiliares. La tubería secundaria normalmente está aislada de las líneas de proceso principales por válvulas cerradas y puede usarse para funciones como tomas de muestra. La tubería auxiliar normalmente está abierta al servicio pero puede aislarse del proceso primario. Los ejemplos incluyen líneas de purga, tubería de instrumentos, tubería de analizador, lubricación y tubería de aceite de sello para equipos rotativos.</p>
            <p>Los inspectores e ingenieros de tuberías deben conocer los problemas de diseño, mantenimiento y operación que causan fallas en la SBP y pueden requerir mitigación. Esos problemas incluyen, pero no se limitan a, los siguientes:</p>
            <ul>
                <li>conexiones de unión desiguales de diferentes fabricantes;</li>
                <li>el potencial de crecimiento térmico o contracción que podría causar esfuerzos en la SBP que pueden llevar a una falla;</li>
                <li>carga cíclica por cargas térmicas o mecánicas que podrían causar agrietamiento por fatiga (ej. sistemas de tubería SBP en voladizo, el potencial de chattering de PRV en ciertos escenarios de alivio, vibración inducida por flujo, vaporización y cavitación);</li>
                <li>consideración inadecuada de gestión del cambio (MOC) que puede causar escenarios térmicos, mecánicos o corrosivos no anticipados en la SBP;</li>
                <li>diseño inadecuado (ej. soporte y programa de tubería) para las diversas cargas transitorias no anticipadas impuestas a la SBP;</li>
                <li>protección inadecuada contra impactos externos (ej. tráfico vehicular y actividades de mantenimiento);</li>
                <li>protección o soporte inadecuado para la SBP que podría estar sujeta a ser utilizada como soporte de personal o herramientas/equipos (ej. escalón, punto de anclaje, pasamanos, polea y palanca);</li>
                <li>componentes seleccionados incorrectamente para la clase de servicio;</li>
                <li>consideración inadecuada para el uso de conexiones de soldadura de enchufe versus roscadas, ambas de las cuales pueden llevar a una falla prematura si no se especifican y/o instalan correctamente;</li>
                <li>espesor inadecuado para la SBP roscada después de tener en cuenta la pérdida de espesor por el corte de roscas o la falta de espacio inferior al soldar conexiones de soldadura de enchufe;</li>
                <li>no incluir la SBP de aleación en los procedimientos de identificación positiva de materiales (PMI);</li>
                <li>no incluir la SBP en las revisiones de mecanismos de daño de tuberías;</li>
                <li>reemplazo de componentes de SBP con diferentes aleaciones sin considerar adecuadamente los posibles nuevos mecanismos de daño (ej. "actualizar" a acero inoxidable en un ambiente húmedo con cloruros).</li>
            </ul>
            <p>Se puede encontrar orientación adicional sobre la SBP en API 570—Sección 6.6.</p>
        </div>
        
        <div class="subsection">
            <h4>4.2 Tubos</h4>
            <p>Los tubos son similares a las tuberías en que se usan para transportar fluidos y se fabrican en muchos OD y espesores de pared. Los tubos generalmente son sin costura pero pueden ser soldados. Su tamaño declarado es típicamente el OD real en lugar del NPS. [Los tubos ASTM B88, que a menudo se usan para rastreo de vapor, son una excepción en que su designación de tamaño es 1/8 pulg. (3.2 mm) menos que el OD real.] Los métodos utilizados para unir secciones de tubos incluyen conexiones de tubo tipo flare, sin flare y de compresión en lugar de las juntas típicas de tuberías, como roscas, bridas o soldadura. Los tubos generalmente se fabrican en diámetros pequeños y a menudo se usan para conexiones de instrumentos, servicios de aceite lubricante, rastreo de vapor y servicios similares. Generalmente, los tubos son más flexibles que las tuberías, lo que permite doblarlos a las formas y configuraciones deseadas, a diferencia de las tuberías que dependen con mucha más frecuencia de codos y otros accesorios para los cambios de dirección y rara vez se doblan. Cuando se usan para aplicaciones de intercambio de calor, como calentadores, calderas u otros intercambiadores de calor, el componente tubular comúnmente se denomina tubo en lugar de tubo.</p>
            <p>Los inspectores e ingenieros de tuberías deben conocer los problemas de diseño, mantenimiento y operación que causan fallas en los tubos y pueden requerir mitigación. Esos problemas incluyen, pero no se limitan a, los siguientes:</p>
            <ul>
                <li>protección inadecuada contra impactos externos (ej. tráfico vehicular y actividades de mantenimiento);</li>
                <li>componentes seleccionados incorrectamente para la clase de servicio;</li>
                <li>ensamblaje incorrecto de juntas de tubos;</li>
                <li>carga cíclica, vibración, choque y expansión y contracción térmica;</li>
                <li>defectos longitudinales por formado;</li>
                <li>corrosión por cloruros bajo tensión (CSCC) de tubos de acero inoxidable, particularmente en soportes de tubos a temperaturas elevadas o en ambientes costa afuera;</li>
                <li>estructura de soporte inadecuada para los tubos.</li>
            </ul>
        </div>
        
        <div class="subsection">
            <h4>4.3 Válvulas</h4>
            <div class="subsection">
                <h4>4.3.1 General</h4>
                <p>Los tipos básicos de válvulas son compuerta, globo, tapón, bola, diafragma, mariposa, retención y deslizante. Los espesores del cuerpo de las válvulas, las clasificaciones de presión y otros datos de diseño se proporcionan en los estándares aplicables como se muestra en la Tabla 1. Los cuerpos de las válvulas pueden ser fundidos, forjados, mecanizados a partir de barras o fabricados mediante la soldadura de una combinación de dos o más materiales. Las superficies de asiento en el cuerpo pueden ser integrales con el cuerpo, o pueden fabricarse como inserciones. El material de inserción puede ser el mismo o diferente al material del cuerpo. Cuando se usa un material no metálico especial que podría fallar en un incendio para evitar fugas en el asiento, se pueden proporcionar superficies de asiento de respaldo metal-metal (ver API 607). Otras partes del interior de la válvula (trim) pueden fabricarse con cualquier material adecuado y pueden ser fundidas, formadas, forjadas o mecanizadas a partir de formas laminadas comercialmente. Los extremos de las válvulas pueden ser bridados, roscados para conexiones roscadas, rebajados para soldadura de enchufe o biselados para soldadura a tope. Aunque muchas válvulas son operadas manualmente, pueden equiparse con motores eléctricos y operadores de engranajes u otros operadores de potencia para acomodar un tamaño grande o una ubicación inaccesible o para permitir la actuación por instrumentos. Consulte API 615 para una descripción completa de los diseños de válvulas y estándares de referencia.</p>
                
                <div class="table-container">
                    <table class="api-table">
                        <caption>Tabla 1—Estándares y Códigos de Diseño de Válvulas API y ASME</caption>
                        <thead>
                            <tr>
                                <th>Estándar de Diseño de Válvula</th>
                                <th>Tipo de Válvula Aplicable</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>API 594</td>
                                <td>Válvulas de retención</td>
                            </tr>
                            <tr>
                                <td>API 599</td>
                                <td>Válvulas de tapón metálico</td>
                            </tr>
                            <tr>
                                <td>API 600</td>
                                <td>Válvulas de compuerta de acero</td>
                            </tr>
                            <tr>
                                <td>API 602</td>
                                <td>Válvulas de compuerta, globo y retención</td>
                            </tr>
                            <tr>
                                <td>API 603</td>
                                <td>Válvulas de compuerta resistentes a la corrosión, con bonete atornillado</td>
                            </tr>
                            <tr>
                                <td>API 607</td>
                                <td>Prueba de fuego para válvulas de cuarto de vuelta y válvulas equipadas con asientos no metálicos</td>
                            </tr>
                            <tr>
                                <td>API 608</td>
                                <td>Válvulas de bola metálicas</td>
                            </tr>
                            <tr>
                                <td>API 609</td>
                                <td>Válvulas de mariposa</td>
                            </tr>
                            <tr>
                                <td>ASME B16.34</td>
                                <td>Válvulas: extremos bridados, roscados y para soldadura</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.2 Válvulas de Compuerta</h4>
                <p>Una válvula de compuerta consiste en un cuerpo que contiene una compuerta que interrumpe el flujo del proceso. Este tipo de válvula normalmente se usa en una posición completamente abierta o completamente cerrada y, como tal, a menudo se llama "válvula de bloqueo", ya que generalmente no está diseñada para regular el flujo de fluidos. Las válvulas de compuerta más grandes de 2 pulg. (51 mm) generalmente tienen aberturas de puerto que son aproximadamente del mismo tamaño que las aberturas de los extremos de la válvula—este tipo de válvula se llama "válvula de paso completo". La Figura 1 muestra una sección transversal de una válvula de compuerta de cuña de paso completo.</p>
                <p>Las válvulas de compuerta de paso reducido también son muy comunes y tienen aberturas de puerto que son más pequeñas que las aberturas de los extremos. Las válvulas de paso reducido no deben usarse como válvulas de bloqueo asociadas con dispositivos de alivio de presión o en aplicaciones erosivas, como lodos, o líneas que van a ser "limpiadas con rasquetas" (pigged).</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_01.png" class="figure-image">
                    <p class="figure-caption">Figura 1—Sección Transversal de una Válvula de Compuerta de Cuña Típica</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.3 Válvulas de Globo</h4>
                <p>Una válvula de globo, que comúnmente se usa para regular el flujo de fluidos, consiste en un cuerpo de válvula que contiene un disco circular que se mueve paralelo al eje del disco y contacta con el asiento. La corriente fluye hacia arriba generalmente, excepto para servicio de vacío o cuando lo requiere el diseño del sistema (ej. falla cerrada), a través del área del asiento contra el disco, y luego cambia de dirección para fluir a través del cuerpo hacia el disco de salida. La superficie de asiento puede ser plana o cónica. Para servicio de estrangulación fina, se puede usar un asiento cónico muy pronunciado; este tipo particular de válvula de globo se conoce como válvula de aguja. Una válvula de globo comúnmente se construye con su entrada y salida en línea y con su abertura de puerto en ángulo recto con la entrada y salida. La Figura 2 ilustra una sección transversal de una válvula de globo.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_02.png" class="figure-image">
                    <p class="figure-caption">Figura 2—Sección Transversal de una Válvula de Globo Típica</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.4 Válvulas de Tapón</h4>
                <p>Una válvula de tapón consiste en un tapón cónico o cilíndrico que encaja ajustadamente en un asiento de forma correspondiente en el cuerpo de la válvula. Las válvulas de tapón generalmente funcionan como válvulas de bloqueo para cerrar el flujo. Cuando la válvula está abierta, una abertura en el tapón está alineada con las aberturas de flujo en el cuerpo de la válvula. La válvula se cierra girando el tapón un cuarto de vuelta para que su abertura esté en ángulo recto con las aberturas en el cuerpo de la válvula. Las válvulas de tapón pueden ser operadas por un dispositivo operado por engranajes o girando una llave en el vástago. Las válvulas de tapón son lubricadas o no lubricadas; la Figura 3 ilustra ambos tipos. Las válvulas de tapón lubricadas usan un lubricante similar a la grasa que se bombea hacia la válvula a través de ranuras en el cuerpo y las superficies del tapón para proporcionar sellado para la válvula y promover la facilidad de operación. Por otro lado, las válvulas de tapón no lubricadas pueden usar asientos metálicos o mangas, asientos o revestimientos o recubrimientos completos o parciales no metálicos.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_03.png" class="figure-image">
                    <p class="figure-caption">Figura 3—Secciones Transversales de Válvulas de Tapón Lubricadas y No Lubricadas Típicas</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.5 Válvulas de Bola</h4>
                <p>Una válvula de bola es otra válvula de cuarto de vuelta como una válvula de tapón excepto que el tapón en una válvula de bola esférica en lugar de cónico o cilíndrica. Las válvulas de bola generalmente funcionan como válvulas de bloqueo para cerrar el flujo. Son adecuadas para condiciones que requieren servicio rápido de apertura/cierre o hermético a burbujas. Una válvula de bola típicamente está equipada con un material de asiento elastomérico que proporciona buenas características de cierre; sin embargo, están disponibles válvulas de bola de alta presión totalmente metálicas. La Figura 4 ilustra una válvula de bola.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_04.png" class="figure-image">
                    <p class="figure-caption">Figura 4—Sección Transversal de una Válvula de Bola Típica</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.6 Válvulas de Diafragma</h4>
                <p>Una válvula de diafragma es una válvula sin prensaestopas que contiene un diafragma hecho de un material flexible que funciona tanto como cierre como sello. Cuando el husillo de la válvula se atornilla hacia abajo, fuerza el diafragma flexible contra un asiento, o presa, en el cuerpo de la válvula y bloquea el flujo de fluidos. Estas válvulas no se usan extensamente en la industria petroquímica, pero tienen aplicación en servicios corrosivos por debajo de aproximadamente 250 °F (121 °C), donde se necesita una válvula hermética. La Figura 5 ilustra una válvula de diafragma.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_05.png" class="figure-image">
                    <p class="figure-caption">Figura 5—Sección Transversal de una Válvula de Diafragma Típica</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.7 Válvulas de Mariposa</h4>
                <p>Una válvula de mariposa consiste en un disco montado en un vástago en la ruta de flujo dentro del cuerpo de la válvula. El cuerpo generalmente es bridado y del tipo oreja o oblea. Un cuarto de vuelta del vástago cambia la válvula de completamente cerrada a completamente abierta. Las válvulas de mariposa se usan con mayor frecuencia en servicios de baja presión para control de flujo grueso. Están disponibles en una variedad de materiales de asiento y configuraciones para cierre hermético en servicios de baja y alta presión. Las válvulas de mariposa grandes generalmente son operadas mecánicamente. La característica mecánica está destinada a evitar que se cierren bruscamente durante el servicio. La Figura 6 ilustra el tipo de válvula de mariposa generalmente especificada para servicio de agua.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_06.png" class="figure-image">
                    <p class="figure-caption">Figura 6—Válvula de Mariposa Típica</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.8 Válvulas de Retención</h4>
                <p>Una válvula de retención se usa para evitar automáticamente el flujo inverso. Los tipos más comunes de válvulas de retención son de columpio, de émbolo, de bola, de flujo axial y de oblea cargada por resorte. La Figura 7 ilustra secciones transversales de cada tipo de válvula; estas vistas representan métodos típicos para evitar el flujo inverso.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_07.png" class="figure-image">
                    <p class="figure-caption">Figura 7—Secciones Transversales de Válvulas de Retención Típicas</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.3.9 Válvulas Deslizantes</h4>
                <p>La válvula deslizante es una válvula de compuerta especializada generalmente usada en servicios erosivos o de alta temperatura. Consiste en una placa plana que se desliza contra un asiento. La válvula deslizante usa un orificio fijo y uno o dos deslizadores sólidos que se mueven en guías, creando un orificio variable que hace que la válvula sea adecuada para estrangulación o bloqueo. Las válvulas deslizantes no hacen un cierre hermético a gas. Una aplicación popular de este tipo de válvula es controlar el flujo de catalizador fluidizado en unidades de craqueo catalítico fluido (FCC). Las superficies internas de estas válvulas que están expuestas a un alto desgaste por el catalizador normalmente están cubiertas con refractario resistente a la erosión. La Figura 8 ilustra una válvula deslizante.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_08.png" class="figure-image">
                    <p class="figure-caption">Figura 8—Sección Transversal de una Válvula Deslizante Típica</p>
                </div>
            </div>
        </div>
        
        <div class="subsection">
            <h4>4.4 Accesorios</h4>
            <div class="subsection">
                <h4>4.4.1 Accesorios Metálicos</h4>
                <p>Los accesorios se usan para conectar secciones de tubería y cambiar la dirección del flujo o permitir que el flujo se desvíe o agregue. Los accesorios pueden ser fundidos, forjados, estirados de tubería sin costura o soldada, o formados y soldados. Se pueden obtener accesorios con sus extremos bridados, rebajados para soldadura de enchufe, biselados para soldadura a tope, o roscados para conexiones roscadas. Los accesorios se fabrican en muchas formas, como yees, tees, codos, cruces, laterales y reductores. La Figura 9 ilustra tipos de accesorios bridados y soldados a tope. La Figura 10 ilustra tipos de accesorios roscados y de soldadura de enchufe.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_09.png" class="figure-image">
                    <p class="figure-caption">Figura 9—Accesorios de Extremo Bridado y Accesorios de Acero Forjado Soldados a Tope</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/api574_figure_10.png" class="figure-image">
                    <p class="figure-caption">Figura 10—Accesorios de Acero Forjado Roscados y de Soldadura de Enchufe</p>
                </div>
            </div>
            
            <div class="subsection">
                <h4>4.4.2 Accesorios de Plástico Reforzado con Fibra</h4>
                <p>Los accesorios de plástico reforzado con fibra (FRP) se fabrican mediante diferentes procesos. El moldeo por inyección, el bobinado de filamento y el moldeo por contacto son las técnicas más comunes. Los mismos criterios utilizados para aceptar la tubería deben aplicarse a los accesorios. Los accesorios moldeados por contacto deben inspeccionarse para garantizar que se fabriquen según la misma especificación que la tubería. La fabricación de accesorios moldeados por contacto es crítica porque las capas de refuerzo deben superponerse para garantizar que la resistencia de las capas no se vea comprometida. El método preferido son los accesorios moldeados por contacto de una pieza, pero muchos artículos, como tees y conexiones de ramificación, a menudo se fabrican utilizando dos piezas de tubería. El inspector debe verificar que el refuerzo en esas piezas y el espacio entre ellas esté dentro de la tolerancia especificada. Los bordes cortados expuestos deben protegerse adecuadamente.</p>
            </div>
        </div>
        
        <div class="subsection">
            <h4>4.5 Bridas</h4>
            <div class="subsection">
                <h4>4.5.1 Bridas Metálicas</h4>
                <p>ASME B16.5 cubre bridas de varios materiales hasta un NPS de 24 pulg. (610 mm). ASME B16.47 cubre bridas de acero que van desde NPS 26 hasta NPS 60. Las bridas de accesorios o válvulas fundidas generalmente son integrales con el accesorio o el cuerpo de la válvula.</p>
            </div>
            
            <div class="subsection">
                <h4>4.5.2 Bridas FRP</h4>
                <p>Las bridas FRP se fabrican utilizando los mismos métodos que los accesorios. Las bridas moldeadas por contacto deben inspeccionarse para dimensiones, retroceso y planitud de la cara. Las capas de refuerzo deben extenderse sobre la tubería para crear el enlace adecuado y el refuerzo del cubo. Se puede encontrar más información sobre las bridas FRP en el Proyecto MTI 160-04. Las bridas FRP deben tener los pares de torsión y juntas adecuados.</p>
            </div>
        </div>
        
        <div class="subsection">
            <h4>4.6 Juntas de Expansión</h4>
            <p>Las juntas de expansión son dispositivos utilizados para absorber cambios dimensionales en los sistemas de tubería, como los causados por la expansión térmica, para evitar que esfuerzos/deformaciones excesivos se transmitan a otros componentes de tubería y conexiones a recipientes a presión y equipos rotativos. Si bien existen varios diseños, los que comúnmente se encuentran en una planta son los diseños de fuelles metálicos y juntas de tela. Los fuelles metálicos pueden ser de pared simple o multicapa, que contienen convoluciones para proporcionar flexibilidad. A menudo, estas juntas tendrán otras características de diseño, como guías, para limitar el movimiento de la junta o el tipo de carga aplicada a la junta. Las juntas de expansión de fuelles metálicos pueden usarse en servicios de mayor temperatura que las juntas no metálicas.</p>
            <p>Todas las juntas de expansión tienen límites de diseño específicos para el movimiento admisible (axial, angular y desplazamiento), así como límites de diseño de presión y temperatura. Estos límites deben entenderse y no excederse. Una junta de expansión puede limitar la clasificación de presión/temperatura de un sistema de tubería muy por debajo de la clasificación de presión/temperatura de la tubería misma. Las juntas de tela a menudo se usan en servicios de gas de combustión a baja presión y donde las temperaturas no exceden la clasificación del material de la tela.</p>
        </div>
        
        <div class="subsection">
            <h4>4.7 Soportes de Tubería</h4>
            <div class="subsection">
                <h4>4.7.1 General</h4>
                <p>Existen muchos diseños, tipos y estilos diferentes de soportes de tubería. Incluyen tipo colgante, zapatas de soporte, sillas, superficies de apoyo (ej. miembros estructurales, bloques de pedestal de hormigón, etc.), tipo resorte, patines falsos (trunniones), placas deslizantes, arriostramientos/amortiguadores/struts, soportes, manguitos, rodillos, correas, abrazaderas y guías o anclajes restrictivos.</p>
                <p>Se requiere una comprensión de la función y el diseño de los soportes de tubería para gestionar tanto su integridad como la integridad de los sistemas de tubería. Los soportes de tubería pueden estar sujetos a varios mecanismos de daño (ver 7.4.6) y esfuerzos significativos de carga estática y movimientos térmicos que pueden afectar al soporte de tubería en sí, así como a la tubería soportada y sus componentes.</p>
            </div>
            
            <div class="subsection">
                <h4>4.7.2 Diseño de Soportes de Tubería—Consideraciones Generales</h4>
                <p>Los soportes de tubería generalmente están diseñados para soportar el peso de la tubería, incluidas las válvulas, el aislamiento y el peso del fluido contenido en la tubería, incluidas las condiciones de prueba hidrostática. Los soportes de tubería diseñados adecuadamente garantizarán que:</p>
                <ul>
                    <li>las tuberías y sus componentes no estén sujetos a esfuerzos inaceptables de cargas sostenidas, cargas externas o vibración;</li>
                    <li>la tubería no imponga una carga inaceptable en las conexiones a los equipos que sirve (ej. recipientes a presión, bombas, turbinas y tanques);</li>
                    <li>el movimiento térmico se controle dentro de desplazamientos admisibles para no interferir con tuberías o equipos adyacentes y mantenerse dentro de los niveles de esfuerzo admisibles;</li>
                    <li>se minimice el potencial de corrosión, agrietamiento y otros daños en servicio.</li>
                </ul>
            </div>
            
            <div class="subsection">
                <h4>4.7.3 Diseño de Soportes de Tubería—Consideraciones Específicas</h4>
                <p>Las consideraciones de diseño de soportes de tubería pueden diferir dependiendo del tipo o estilo de soporte. Si bien algunos fabricantes de soportes de tubería ofrecen diseños innovadores y patentados para eliminar o minimizar algunos de los mecanismos de daño creíbles, la siguiente es una lista de algunos parámetros de diseño especiales de soportes de tubería a tener en cuenta.</p>
                <ul>
                    <li><strong>Zapatas de Tubería</strong>—Es importante que la zapata sea lo suficientemente larga y/o se proporcionen guías o topes en el acero estructural para evitar que la zapata se salga del soporte, lo que podría causar desgarro u otros daños a la tubería. Además, algunas zapatas de tubería pueden atrapar agua entre la tubería y la zapata (ej. de abrazadera, atornilladas, sillas que han sido soldadas con puntos, etc.) y dificultar la inspección para determinar la condición de la tubería.</li>
                    <li><strong>Manguitos de Tubería</strong>—Los manguitos de tubería a menudo se usan donde la tubería pasa a través de una pared, bajo una carretera o a través de un terraplén de tierra. Cuando se usan, se deben tomar precauciones de diseño para evitar la corrosión tanto en la tubería como en el manguito de tubería. También deben considerarse dispositivos de centrado para mantener la tubería interior centrada y evitar daños en el recubrimiento y corrosión. Pueden considerarse manguitos totalmente soldados y/o sellados si es necesaria la detección y control de pérdidas de contención. Debe tenerse en cuenta que los manguitos pueden dificultar las futuras inspecciones y exámenes de la tubería.</li>
                    <li><strong>Placas de Refuerzo, Medias Suelas y Almohadillas de Desgaste</strong>—Pueden adjuntarse placas adicionales a un sistema de tubería en puntos donde la tubería descansa sobre superficies de apoyo. Las placas deben estar completamente soldadas para evitar la corrosión por rendija, excepto en ambientes de carga de hidrógeno, donde debe incluirse un orificio de drenaje que no conduzca a la entrada de humedad. Puede considerarse el uso de medias suelas de acero inoxidable o compuestas unidas con adhesivo, pero es muy importante asegurarse de que el adhesivo esté completamente unido y mantenido para eliminar eficazmente el atrapamiento de agua. También debe considerarse la corrosión galvánica al usar materiales distintos para este propósito.</li>
                    <li><strong>Patines Falsos (Trunnions)</strong>—Históricamente, los soportes de patín falso (trunnion) eran simples longitudes de tubería de extremo abierto soldadas a un sistema de tubería desde el cual se soportaba el sistema de tubería. Un diseño de extremo abierto puede permitir que la humedad y los escombros queden atrapados dentro del soporte y causen corrosión del soporte y la tubería. El diseño del patín falso debe incluir, como mínimo, orificios de drenaje no menores de 1/4 pulg. (6 mm) ubicados en un punto bajo, con el extremo no adjunto del soporte equipado con una tapa o placa de extremo totalmente soldada para evitar que entren escombros o animales. El diseño del trunnion puede mejorarse utilizando secciones sólidas, como canales "C" o vigas "І/H", para reducir el riesgo de este problema. Sin embargo, incluso las secciones de miembros sólidos pueden atrapar agua y escombros dependiendo de su diseño y orientación. La incorporación de una placa de refuerzo totalmente soldada a la tubería en la ubicación de conexión del trunnion puede proporcionar protección adicional contra la corrosión y puede ayudar a distribuir las cargas de manera más uniforme. El extremo de un soporte de patín falso que no está adjunto a la tubería puede o no estar anclado o restringido.</li>
                    <li><strong>Soportes en Líneas Aisladas</strong>—Se necesita atención especial para el diseño de soportes en líneas aisladas para minimizar la posibilidad de entrada de agua y absorción de agua en el aislamiento.</li>
                    <li><strong>Accesibilidad</strong>—La accesibilidad, y por lo tanto la inspeccionabilidad/mantenibilidad, de los soportes de tubería debe considerarse durante el diseño.</li>
                    <li><strong>Soldadura</strong>—Las vías para la entrada de agua en soportes huecos pueden minimizarse con el uso de costuras totalmente soldadas. Evitar la soldadura con socavado o penetración excesiva. Los defectos de soldadura asociados con los soportes pueden contribuir a eventos de pérdida de contención y, en algunos casos, ser de tamaño suficientemente pequeño para dificultar la detección de fugas y la identificación de la fuente. En ambientes de carga de hidrógeno, debe proporcionarse un orificio de drenaje para evitar la acumulación de presión entre la placa y la tubería.</li>
                    <li><strong>Anclajes y Restricciones</strong>—Una conexión de una tubería a una estructura estacionaria o cimiento para restringir el movimiento de la tubería en una o más direcciones (plano X, Y y/o Z). La fijación de un anclaje o restricción a una tubería debe preferiblemente rodear la tubería para distribuir los esfuerzos uniformemente alrededor de la circunferencia de los componentes de la tubería.</li>
                </ul>
            </div>
        </div>
        
        <div class="subsection">
            <h4>4.8 Mangueras Flexibles</h4>
            <p>Las mangueras flexibles a menudo se usan temporalmente para transferir hidrocarburos y otros fluidos de proceso para facilitar las actividades de parada (limpieza de equipos, desinventario, purga, etc.) y para la transferencia de fluidos/productos de proceso a vagones de ferrocarril y/o camiones cisterna para su envío. Las mangueras flexibles también pueden instalarse dentro de los sistemas de tubería de proceso para mitigar los efectos de la expansión térmica, la vibración o el movimiento durante las operaciones normales. Algunas instalaciones mantendrán varias mangueras flexibles para usar según sea necesario en múltiples servicios.</p>
            <p>Las mangueras flexibles vienen en una variedad de diferentes materiales de construcción y diseños. Los propietarios-operadores deben garantizar que el diseño de la manguera flexible sea compatible con el servicio de proceso en el que se utiliza. Además, tener sistemas adecuados de aseguramiento de calidad y prueba e inspección para garantizar que se mantenga la integridad mecánica de la manguera mientras está en servicio.</p>
        </div>
    </div>`
});