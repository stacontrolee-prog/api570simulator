// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 10 para API 574
registerChapter('API574', {
    id: 10,
    title: "Inspection Types, Methods, and Limitations",
    titleEs: "Tipos de Inspección, Métodos y Limitaciones",
    content: `<h2>Inspection Practices for Piping System Components</h2>
    <h3>10 Inspection Types, Methods, and Limitations</h3>
    <div class="subsection">
        <h4>10.1 External Visual Inspection</h4>
        <div class="subsection">
            <h4>10.1.1 General</h4>
            <p>External visual inspections are performed to determine the external condition of piping, insulation system, painting/coating system, and associated hardware as well as to check for signs of misalignment, vibration, and leakage. Annex A contains a sample checklist for external inspections that should be conducted in accordance with API 570—Section 5.5.5.</p>
        </div>
        <div class="subsection">
            <h4>10.1.2 Leaks</h4>
            <p>Leaks can be safety or fire hazards. They can cause a premature shutdown of equipment and often result in economic loss. Leaks in utility piping are seldom hazardous or cause shutdowns, but they do result in loss. Leaks in hot or volatile oil, gas, and chemical piping can result in a fire, an explosion, contamination of the surrounding atmosphere, a serious environmental problem, a premature shutdown, or production loss. Frequent visual surveillance by operators should be made for leaks. Particular attention should be given to flanged joints, packing glands, bonnets of valves, and expansion joints on piping that carries flammable, toxic, corrosive, or other harmful materials. Many leaks can be stopped or minimized by tightening packing glands.</p>
            <p>Tightening flange bolts in a pressurized line is only recommended when special steps are taken to avoid three potential problems:</p>
            <ul>
                <li>bolt interactions (e.g. when a bolt is tightened the adjacent bolts are loosened);</li>
                <li>a bolt can yield or fail due to overloading;</li>
                <li>tightening one side of a flange can cause deflections in the areas opposite and adjacent to it.</li>
            </ul>
            <p>Leaks of certain fluids can result in the cracking and/or corrosion of flange bolts; in such instances, the bolts should be replaced. The prompt repair of leaks will often prevent serious corrosion or erosion of gasket surfaces or packing glands. Temporary or permanent repairs may be made while lines are in service, but a proper evaluation of the work should be completed.</p>
            <p>Wet hydrogen sulfide stress cracking and hydrogen blistering in systems in sour (H2S laden) service may occur externally if trapped due to a leak that is clamped.</p>
            <p>Liquid that has leaked into the ground can usually be located by looking for liquid puddles on the ground or by discoloration of the earth. The liquid spill should be investigated to determine whether the liquid is corrosive to materials of construction that it could come into contact with. This includes pipe material of construction, protective coatings, or any insulation jacketing systems. If the liquid is corrosive to these materials, they may warrant inspection to assess any damage. Determining the composition of the liquid may involve chemical analysis of soil samples or the liquid, unless the source of the leak is known.</p>
        </div>
        <div class="subsection">
            <h4>10.1.3 Misalignment</h4>
            <p>Piping should be inspected for misalignment, which can be indicated by the following conditions:</p>
            <ul>
                <li>piping dislodged from one or more supports so that its weight is not being properly distributed on the remaining hangers or saddles;</li>
                <li>the deformation of a vessel or tank wall in the vicinity of a piping attachment, which may also be the result of thermal expansion in the piping system, major piping misalignment, or inadequate piping support;</li>
                <li>piping supports forced out of plumb by expansion or contraction of the piping;</li>
                <li>excessive replacement or repair of bearings, impellers, and turbine wheels of centrifugal pumps, compressors, and turbine seals to which piping is connected;</li>
                <li>the shifting of a base plate, breaking of a foundation, or shearing of foundation bolts of mechanical equipment to which piping is attached;</li>
                <li>cracks in connecting flanges or the cases of pumps or turbines to which piping is attached;</li>
                <li>expansion joints that are excessively deformed or not performing properly.</li>
            </ul>
            <p>If significant piping misalignment is discovered, it should be corrected as determined by damage extent and risk.</p>
        </div>
        <div class="subsection">
            <h4>10.1.4 Supports</h4>
            <div class="subsection">
                <h4>10.1.4.1 General Pipe Support Inspection</h4>
                <p>Support locations should be identified in appropriate record systems and inspected to verify that the supports are functioning properly and are not causing damage to the pipe.</p>
                <p>The prioritization of support inspections may be made on the basis of the likelihood of damage or may be made on the basis of a risk assessment that also considers the consequence of a failure.</p>
                <p>Statistical techniques may be used to determine the required inspection sample size to ensure the necessary degree of confidence. Site-specific data related to historical piping support problems should be referenced to better understand the vulnerability of particular support design, location, or application.</p>
                <p>Statistical analysis may be used to evaluate the inspection data collected during sampling inspections and determine if additional inspection, up to and including 100 % inspection of particular piping supports and/or designs is warranted. Close visual inspection of piping supports or contact point locations may provide additional data to help determine where more detailed, quantitative techniques are required.</p>
                <p>External inspection of supports should include the following examinations where applicable:</p>
                <ul>
                    <li>Visual examination for general physical damage, distortion, and deterioration of protective coatings or fireproofing.</li>
                    <li>Visual examination for evidence of corrosion, especially at or near contact points, the foundation attachments, and near dummy legs (trunnions).</li>
                    <li>Visual examination for signs of movement and restricted operation of pipe rollers, slide plates, pulleys, or pivot points in counterbalanced support systems. The inspection should also include a search for small branch connections that are against pipe supports that might be constraining the thermal movement of the larger line.</li>
                    <li>Visual examination for deterioration of concrete footings, foundations, or plinth blocks. If deterioration of concrete footings is found, the cause should be determined and corrective action should be taken.</li>
                    <li>Visual examination for failed fireproofing at support locations.</li>
                    <li>Visual examination for failed or loose foundation anchor bolts.</li>
                    <li>Visual examination for insecure attachment of brackets and beams to the support, or insecure attachment or improper adjustment of pipe hangers.</li>
                    <li>Visual examination of the spring can integrity and proper operation. For spring supports, the following items need to be inspected for any evidence of corrosion or mechanical overload:
                        <ul>
                            <li>spring can;</li>
                            <li>spring;</li>
                            <li>locking device;</li>
                            <li>hanger accessories (rods and support clamps);</li>
                            <li>piping under support clamps;</li>
                            <li>supporting structural steel.</li>
                        </ul>
                    </li>
                    <li>Thickness examination of the process pipe enclosed by dummy leg (trunnion) support attachments for corrosion damage; normally, profile RT is used to determine if corrosion damage exists on the process pipe. In some instances, ultrasonic thickness measurements may be possible. The examination should include the center of the pipe enclosed by the dummy leg (trunnion) support and as near as possible to the interior edge of the weld attachment where water may sit in the dummy leg.</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>10.1.4.2 Specialized NDE Technique for Contact Points</h4>
                <p>Several types of specialized NDE techniques may allow inspection of contact points without the lifting of the pipe or removal of the support:</p>
                <ul>
                    <li>Long-range UT: Ultrasonic Guided Wave Inspection—Low-frequency ultrasonic guided waves can be used for the detection of internal and external corrosion from a single point of access on the pipe to a distance of about 30 m (98 ft) in both directions.</li>
                    <li>Electromagnetic Acoustic Transducer (EMAT) Ultrasound—The EMAT system can be used to inspect pipe support locations on live, on-stream process piping.</li>
                    <li>Creeping Head Wave Method—The Creeping Head Wave Method can detect corrosion of a pipe at a distance from the point of access.</li>
                    <li>Shear Wave Angle Beam Techniques—Single or multiple angle shear wave beam techniques may be used to detect and size wall loss at contact point locations.</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>10.1.4.3 Pipe Support Risk Ranking</h4>
                <p>Risk assessment may be considered to identify vulnerable pipe supports and in deciding where sample inspection may and may not be used. Determination of the most vulnerable areas should consider the following:</p>
                <ul>
                    <li>Factors affecting the likelihood of damage, including:
                        <ul>
                            <li>Is the support of a type that has a history of giving problems?</li>
                            <li>Does the support design promote continuously moist conditions?</li>
                            <li>Is there an effective coating on the pipe in the area of the support?</li>
                            <li>Is the support in an area of the plant that is particularly wet?</li>
                            <li>Is the temperature in the area of contact elevated such that corrosion could be accelerated?</li>
                            <li>Could pipe movement result in distortion or high local stresses on the pipe in the area of the support?</li>
                            <li>How long (i.e. age) has the support been in service?</li>
                        </ul>
                    </li>
                    <li>Factors affecting the consequence of failure, such as health and safety hazards to personnel if leaks occur, the impact on the environment, the unavailability of equipment, and any resultant financial impact.</li>
                    <li>On-site and off-site areas; there is usually no distinction between on-site and off-site areas in terms of corrosion vulnerability. However, the location can have corrosion-contributing factors, such as flooding or lack of drainage, weeds, mud, etc.</li>
                </ul>
            </div>
        </div>
        <div class="subsection">
            <h4>10.1.5 Vibration</h4>
            <p>Routine operator rounds and external visual inspections that identify loud sounds or visual changes in piping either expected (e.g. slug flow) or unexpected that results in movement, dents, deformations, or changes in support conditions at piping guides, etc. should be reported to the inspector. Such reports should be reviewed with consideration of the potential impact on the integrity of the piping system and if further follow up should be undertaken (e.g. monitoring, inspection, engineering evaluation, operational change, etc.).</p>
            <p>Specific observation rounds should be considered after an unexpected process upset, heavy relief incident, or weather event. For example, large diameter thin-wall pipe may be specifically at risk from vortex-induced vibration and movement.</p>
            <p>If vibration or swaying is observed, welds should be inspected for cracks, particularly at points of restraint, such as areas where piping is attached to equipment or near anchors. Problems frequently occur at small welded and screwed connections that have a heavy valve that accentuates vibration and at small lines that are tied down to a larger line and forced to move with it. Additional support should be considered for poorly braced small-sized piping and valves and for the main vibrating line to which they are attached. In cases of severe vibration, it may be advisable to have a competent consultant recommend a remedy, particularly if specialized equipment, such as a pulsation bottle or sway stabilizers, may be required.</p>
        </div>
        <div class="subsection">
            <h4>10.1.6 External Corrosion</h4>
            <p>Defects in protective coatings or the jacketing of insulation systems will permit moisture to come into contact with the piping. When defects are found in the jacketing of the insulation system, the extent and severity of the corrosion should be determined by either removing insulation or radiographing the affected area.</p>
            <p>Sections of insulation may be removed from small connections, such as bleed lines and gauge connections, since difficulty in obtaining a good seal in the insulation makes these locations particularly vulnerable to external corrosion. Any time removal of insulation and jacketing is performed to conduct CUI inspection, it is important to repair/replace the removed insulation and jacketing and ensure proper sealing of removed materials and/or watershedding of the jacketing to prevent further water ingress. See API 583 for further information concerning CUI.</p>
            <p>All of these points should be investigated:</p>
            <ul>
                <li>lines that sweat are susceptible to deterioration at areas of support;</li>
                <li>corrosion can be found under clamps on suspended lines;</li>
                <li>piping mounted on rollers or welded support shoes is subject to moisture accumulation with resultant corrosion;</li>
                <li>liquid spilled on piping, the impingement of a jet of steam, and water dripping on a line can cause deterioration;</li>
                <li>loss of vapor-sealing mastic from the insulation of piping in cold service can result in local corrosion;</li>
                <li>pipe walls inside open-ended trunnion supports are subject to corrosion.</li>
            </ul>
            <p>A loss in thickness can be determined by comparing the pipe diameter at the corroded area with the original pipe diameter. The depth of pits can be determined with a pit-depth gauge.</p>
            <p>Bolting should also be checked, especially in marine environments and other corrosive environments.</p>
        </div>
        <div class="subsection">
            <h4>10.1.7 Hot Spots</h4>
            <p>Piping operating at temperatures higher than the design limit or in the creep range, even without higher pressure, can experience bulging. In piping that is protected from excessive temperatures by internal insulating refractory, failure of the refractory will result in overheating of the metal wall, causing a hot spot. Excessive temperature greatly reduces the strength of the metal and can cause bulging, scaling, localized buckling, metal deterioration, or complete failure.</p>
            <p>Another potential cause for a hot spot is where refractory-lined pipe becomes externally insulated. This can cause the metal wall temperature to increase potentially approaching the process temperature. One common occurrence creating this situation is when maintenance work is required near or on a refractory lined pipe and temporary blanket insulation is put on the pipe to prevent workers from being burned or overheated while performing their tasks. In worse situations, the temporary blanket insulation is forgotten and not removed. During external examinations of the refractory-lined pipe, the presence of external insulation should be noted and removed if not per design.</p>
            <p>Frequent inspections should be performed to detect hot spots on refractory-lined piping. Any bulging or scaling should be noted for further investigation when the equipment is shut down. Some hot spots can be detected by a red glow, particularly if the inspection is made in the dark. The skin temperature of indicated hot spots should be measured using a portable thermocouple, temperature-indicating crayons, temperature-indicating paints, thermography, or a pyrometer. To ensure that an in-service rupture does not occur, the amount of bulging should not exceed the amount of creep permitted for the material. As an interim measure, cooling severe hot spots with steam, water, or air may be desirable or necessary until the system can be removed from service (this situation should be reviewed by a piping engineer and/or corrosion specialist). The condition of both the pipe metal and the internal insulation near hot spots should be investigated during the next shutdown period.</p>
        </div>
        <div class="subsection">
            <h4>10.1.8 Extent of CUI Inspection</h4>
            <p>The intent of the CUI inspection requirements in API 570 is that the first step is a walk-down visual examination of the condition of insulated piping. This may be achieved in several ways either with direct human visual examination, utilizing cameras on poles, or unmanned aerial systems often referred to as drones. It is important for the inspector to be confident of the inspection coverage that will enable them to make an acceptable judgement in evaluating the observations.</p>
            <p>The assessment should include identifying areas where the weather jacket or insulation is damaged, as well as noting the remaining areas where no damage has been revealed. All piping is then evaluated against the guidance in API 570 as to whether it falls in the "susceptible to CUI" temperature ranges and what piping class it has been designated.</p>
            <p>After the walkdown, in the case where it has been determined that the pipe is not in the CUI susceptible range and no damage has been observed, then no further inspection is required. In the case where the piping is within the CUI susceptible range, the appropriate inspection planning should be implemented. Table 4 provides suggested guidance for the removal of insulation or application of appropriate NDE techniques that can identify pipe damage through the insulation.</p>
            <div class="table-container">
                <table class="api-table">
                    <caption>Table 4—Table 2 of API 570</caption>
                    <thead>
                        <tr>
                            <th>Pipe Class</th>
                            <th>At Damaged Insulation Locations</th>
                            <th>At Nondamaged Locations (No Visual Damage Identified during Visual Examination)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>75 %</td>
                            <td>50 %</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>50 %</td>
                            <td>33 %</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>25 %</td>
                            <td>10 %</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Optional</td>
                            <td>Optional</td>
                        </tr>
                    </tbody>
                </table>
                <p>a Susceptible piping is piping systems operating within the susceptible temperature ranges as indicated in API 583.</p>
                <p>b The third column is additional areas to consider inspecting and not progressive from the second column.</p>
            </div>
            <p>Subsequent inspection may be defined based on the findings from these initial examinations. Where CUI is identified, escalation of inspection may result in 100 % of insulation removal or NDE examination.</p>
            <p>Any time removal of insulation and jacketing is performed to conduct CUI inspection, it is important to repair/replace the removed insulation and jacketing and ensure proper sealing of removed materials and/or watershedding of the jacketing to prevent further water ingress.</p>
            <p>Refer to API 583 for further information concerning CUI and possible NDE techniques to identify damage.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>10.2 Internal Visual Inspection</h4>
        <div class="subsection">
            <h4>10.2.1 Corrosion, Erosion, and Fouling</h4>
            <p>Piping can be opened at various places by removing a valve or fitting or by springing the pipe apart at flanges to permit visual inspection. The internal surfaces of the piping should be inspected visually over the greatest possible area. A flashlight or extension light is usually sufficient for this task, but a probe, such as a borescope or a mirror and light, will permit a more detailed view. Other inspection methods include optical/laser and mechanical calipers. Internal inspection of process piping should be made at any old to new piping tie-points created during maintenance or project activities.</p>
            <p>Where nonuniform corrosion or erosion conditions are noted in areas that are accessible for visual examination, it may be advisable to perform inspection of the areas that are inaccessible. RT or UT thickness measurements can be performed. This allows an extension of inspection coverage and provides a higher degree of confidence in the overall inspection. This applies particularly to piping that could not be or was not inspected during operation. Nonuniform corrosion or erosion can also be pinpointed for closer examination by directing sunlight along the surface of the piping with a mirror or by shining a light parallel to the surface.</p>
            <p>The amount of fouling should be noted to determine whether cleaning is necessary. Fouling should be investigated to determine whether it consists of deposits from the product stream or is a buildup of corrosion products. Taking samples for chemical analysis may be necessary.</p>
        </div>
        <div class="subsection">
            <h4>10.2.2 Cracks</h4>
            <p>The locations most susceptible to cracking are welds and the heat-affected zones, including fillet welds, at locations other than pressure welds; heat-affected areas adjoining welds; and points of restraint or excessive strain. Other areas prone to cracking are locations that contain crevices, such as socket-welded piping, flange surfaces, or threaded joints. Locations that are subject to SCC, hydrogen attack, and caustic or amine embrittlement also require attention, as do exposed threads of threaded joints.</p>
            <p>The inspected surface should be clean if cracks are to be detected. Cleaning can be accomplished by wire brushing, sandblasting, or chemically removing coatings, deposits, and corrosion products. After a thorough cleaning, the area should be visually inspected for any indications of cracks. (Spot checking by MT, PT, or UT should be considered even if the visual inspection revealed no cracks.) Adequate lighting and a good magnifying glass will assist in locating such indications. Visual inspection may not differentiate between a surface scratch and a crack. Any apparent scratch should be further investigated by other methods. MT can be used on magnetic materials. PT and UT can be used on both nonmagnetic and magnetic materials. Only liquid penetrants with low or no chlorides should be used for austenitic materials. Other methods, such as shear- or surface-wave UT, ET, ACFM, or sample removal for microscopic inspection, may be used. The depth of a crack may be determined by NDE or by chipping or grinding until sound metal is reached. However, the inspector should determine if the area can be repaired properly before commencing to grind.</p>
        </div>
        <div class="subsection">
            <h4>10.2.3 Gasket Faces of Flanges</h4>
            <p>The gasket seating faces of flanged joints that have been opened should be visually inspected for corrosion and defects, such as scratches, cuts, and gouges that might cause leakage. The gasket faces should be checked for warping by placing a straight edge across the diameter of the face of the flange and rotating it around an axis through the flange centerline. Grooves and rings of ring joints should be checked for defects, including cracks at the bottom of the grooves or on the sealing surfaces.</p>
            <p>For HF alkylation services, see specific recommendations in API 751 on inspection for flange face corrosion.</p>
            <p>Phased-array UT is a potential method for inspecting for flange face corrosion without having to disassemble flanges.</p>
        </div>
        <div class="subsection">
            <h4>10.2.4 Valves</h4>
            <p>Normally, valves used in process piping systems have body thicknesses somewhat heavier than adjoining piping. For this reason, an adequate piping corrosion-monitoring program need not routinely include monitoring of valve body thicknesses. However, in piping circuits where corrosion rate monitoring of piping indicates severe corrosion or erosion, consideration should be given to routinely measuring thicknesses of selected valve bodies in the circuit.</p>
            <p>In severe services, such as HF, slurry, and fluidized catalyst services, valves may need to be dismantled and inspected at specified intervals to ensure that the internal parts are of sufficient integrity to provide reliable and safe operation.</p>
            <p>Whenever valves are removed from service for overhaul or refurbished for reuse, they should be inspected and tested to the requirements of API 598. When a valve is disassembled for inspection, the bonnet gasket should be replaced. Any valve parts that do not meet the minimum requirements of the applicable valve standard should be either repaired or replaced. The used valves should be restored for continued safe operation. Refer to API 621 for valve reconditioning.</p>
            <p>When body thicknesses are measured, the measurements should include locations that were inaccessible before dismantling, particularly in areas that show evidence of corrosion or erosion. Bodies of valves that operate in severe cyclic temperature service should be checked internally for cracks.</p>
            <p>Gate valves should be measured for thickness between the seats because turbulence can cause serious deterioration. This is a particularly weak location because of the wedging action of the disc, or wedge, when the valve is closed. The seating surfaces should be visually inspected for defects that might cause leakage. The wedge guides should be inspected for corrosion and erosion, both on the wedge and in the body.</p>
            <p>The stem and the threads on the stem and in the bonnet should be examined for corrosion. The connection between the stem and the wedge should be inspected to ensure that the wedge will not detach from the stem during operation.</p>
            <p>Swing-check valves can be inspected by removing the cover or cap. Check valves often flutter, making the shaft and hinges the principal points of deterioration. The disc should be checked for free rotation, and the nut holding either to the arm should be checked for security and the presence of a locking pin, lock washer, or tack weld. The arm should be free to swing, and the anchor pin or shaft should be inspected for wear. The seating surfaces on both the disc and the valve body can be checked for deterioration by feeling them with the fingers. It is extremely important that the cover is installed in the proper orientation for the wedge to operate properly. Refer to API 570 for requirements for the inspection of critical check valves.</p>
            <p>Quarter-turn valves can be inspected for ease of operation and the ability to open and close completely by operators. When they are serviced, all seating surfaces should be examined.</p>
            <p>When valves are reported by operators to have "operability" problems (e.g. leaking through the gate when fully closed), a review of the potential for that leakage to cause or accelerate deterioration downstream of the valve should be conducted. This helps establish the priority for valve replacement and the need of increased inspection of downstream piping.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>10.3 Specific Areas or Components for Inspection</h4>
        <div class="subsection">
            <h4>10.3.1 Inspection of Piping Welds</h4>
            <p>API 570 provides a detailed discussion of the inspection of in-service piping welds. In addition, API 577 provides details on the inspection of pipe welding. The inspector should be familiar with the material contained in these documents.</p>
        </div>
        <div class="subsection">
            <h4>10.3.2 Joints</h4>
            <div class="subsection">
                <h4>10.3.2.1 General</h4>
                <p>Methods of inspection for specific types of joints are discussed in 10.3.2.2 through 10.3.2.5.</p>
            </div>
            <div class="subsection">
                <h4>10.3.2.2 Flanged and Bolted Joints</h4>
                <p>Sites should have a program to ensure that flanges are made up properly. Proper makeup of every flange in a piping system is important for reliability. Proper makeup includes the use of the proper gasket and fastener (material, type, and size), proper positioning of the gasket, and proper torquing of the fasteners. The assurance program should include procedures for gasket and fastener selection and fastener torquing. ASME PCC-1 offers good guidance on the proper makeup of bolted flange joints.</p>
                <p>The program can incorporate varying degrees of sampling, visual inspection, field testing, and destructive testing of components. Gasket selection can usually be confirmed by visual examination of the gasket's color and markings on the OD surface. Spiral-wound gaskets should be marked and color-coded in accordance with ASME B16.20. Fasteners can be visually examined for proper stampings or markings and PMI tested in accordance with API 578.</p>
                <p>Proper gasket positioning and torquing depend on the training and craftsmanship of the pipefitters making up the flanges. Gasket positioning can be checked visually. However, proper torquing is difficult to check, but any observed flange deformation can be a sign of improperly torqued fasteners.</p>
                <p>Flanged joints should be visually inspected for cracks and metal loss caused by corrosion and erosion when they are opened. See 10.2.2 for methods of inspection for cracks. Inspection of gasket faces is covered in 10.2.3. Flange joints can be inspected while in service by applying single-element or phased-array UTs to the external surfaces to measure flange face corrosion and to detect ring groove cracking.</p>
                <p>Flange bolts should be inspected for stretching and corrosion. Where excessive bolt loading is indicated or where flanges are deformed, a simple inspection can be performed where a nut is rotated along the entire length of the stud. If the stud is stretched, the thread pitch will be changed and the nut will not turn freely. The inspection involves checking to determine whether bolts of the proper specification have been used, and it may involve chemical analysis or physical tests to determine the yield point and the ultimate strength of the material.</p>
                <p>If flanges are bolted too tightly, they can bend until the outer edges of the flanges are in contact. When this occurs, the pressure on the gasket can be insufficient to ensure a tight joint. Visual inspection of the gasket will reveal this condition. Permanently deformed flanges should be replaced or refaced.</p>
            </div>
            <div class="subsection">
                <h4>10.3.2.3 Welded Joints</h4>
                <p>In some services, welds can preferentially corrode. The inspection program should look at a sampling of welds if corrosion at welds is suspected.</p>
                <p>Welded joints may be subject to leaks caused either by cracks or by corrosion or erosion. Cracks in low alloy steel welds are often associated with excessive hardness resulting from improper control of preheat or PWHT. The hardness of air-hardenable, low-alloy steel welds should therefore be checked after heat treatment. Carbon steel welds in environmental cracking service should be checked for hardness.</p>
                <p>Corrosion can occur in the form of pitting that has penetrated the weld or the adjacent heat-affected metal. Both pitting and welding defects can be detected by RT. If severe defects are suspected and RT is not feasible, the affected area can be chipped or gouged out until sound metal is reached, and the groove can be rewelded.</p>
                <p>Welded joints in carbon steel and carbon-molybdenum steel exposed to elevated temperatures of 800 °F (426 °C) or greater can be subject to graphitization. When graphitization is suspected, a sample should be taken from a welded joint and examined metallurgically for evidence of excessive graphitization.</p>
            </div>
            <div class="subsection">
                <h4>10.3.2.4 Threaded Joints</h4>
                <p>Threaded joints can leak because of improper assembly, loose threads, corrosion, poor fabrication, cross threading, crack in the root of a thread, or threads that are dirty at the time of assembly. Lack of thread lubricant or the use of the wrong lubricant can also cause leaks. If the leak cannot be stopped by tightening the joint, the joint should be unscrewed and visually examined to determine the cause of the leak.</p>
                <p><strong>Caution</strong>—A leaking threaded joint should not be tightened while the system is in service under pressure unless there is reasonable certainty that the leak is not caused by a crack in the threads. An undetected crack in a thread root could open up significantly and cause a release of product with serious consequences.</p>
            </div>
            <div class="subsection">
                <h4>10.3.2.5 Clamped Joints</h4>
                <p>A clamped joint that depends on machined surfaces for tightness can leak because of dirt, corrosion of the mating faces, mechanical damage, or failure of the clamp to provide a sufficient force on the mating faces for proper contact. A clamped joint that depends on a gasket for tightness can leak because of damaged or dirty gasket seating surfaces or failure of the clamp to provide sufficient pressure on the gasket. If tightening the clamp does not stop the leak, the joint should be dismantled and visually inspected to determine the cause of the leak. ASME PCC-2, Article 306, provides useful guidance on the design, limitations, fabrication, installation, inspection, and testing of mechanical clamps.</p>
                <p>When evaluating the use of a clamp, consideration should be given to the possibility of full line separation and the consequence thereof. If credible, the design of a clamp should incorporate axial restraint whether inherent to the clamp design or through external restraints (e.g. strong backs). In addition, the pipe wall thickness should be checked to verify sufficient pipe wall thickness at the ends of the clamp to resist collapsing by the clamping forces. After clamp installation, inspections of the clamp should include verification any strong backs have not been compromised.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>10.3.3 Misalignment</h4>
            <p>Often, misalignment is not apparent until the piping has cooled and has moved to its cold position. The inspector should note, as in 10.1.3, indications of misalignment while the piping is cold. Note especially the hot and cold position of spring hangers to determine if the hangers are adjusting properly to the changes in piping positions from hot to cold. This is especially critical for large-diameter lines, such as catalyst transfer lines in FCC units.</p>
            <p>If misalignment of piping was noted during operation, the cause should be determined and corrected. Misalignment is usually caused by the following conditions:</p>
            <ul>
                <li>inadequate provision for expansion;</li>
                <li>broken or defective anchors or guides;</li>
                <li>excessive friction on sliding saddles, indicating a lack of lubrication or a need for rollers;</li>
                <li>broken rollers or rollers that cannot turn because of corrosion or lack of lubrication;</li>
                <li>broken or improperly adjusted hangers;</li>
                <li>hangers that are too short and thus limit movement or cause lifting of the piping;</li>
                <li>excessive operating temperature;</li>
                <li>failure to remove the spring blocks after system construction.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>10.3.4 Vibration</h4>
            <p>Where excessive vibration or swaying was noted during operation, an inspection should be made for points of abrasion and external wear and for cracks in welds at locations that could not be inspected during operation. The visual inspection methods described in 10.1.5 should be followed. This inspection should be supplemented by surface NDE methods as applicable. The conditions causing excessive vibration or swaying should be corrected.</p>
        </div>
        <div class="subsection">
            <h4>10.3.5 Hot Spots</h4>
            <p>The internal refractory should be visually inspected for bypassing or complete failure in locations of hot spots noted during operation on refractory-lined ping (see 10.1.7). The cause of the hot spot should be corrected. The pipe wall near the hot spot should be visually inspected for oxidation and resultant scaling. All of the scale should be removed, and the remaining sound metal should be examined for incipient cracks. The sound metal should be measured to ensure that sufficient thickness remains for the service. The OD of piping in high-temperature service—metal temperatures of about 800 °F (427 °C) and above—should be measured to check for creep or deformation with time under stress. To ensure that an in-service fracture will not occur, the amount of creep permitted should be based on established data for the desired service life.</p>
        </div>
        <div class="subsection">
            <h4>10.3.6 Expansion Joints</h4>
            <p>Inspection of expansion joints involves examinations both at maintenance outages and during operation. While in operation, the "hot" settings and position of connected pipe supports/guides and the expansion joint should be recorded prior to shutdown and shortly after start-up. Comparing these measurements allows for changes to be identified and subsequently evaluated. In addition, the joint and attached piping should be visually examined for alignment, distortion, cracks, and leaks. A check should be made prior to start-up to make sure all stops, and other restricting devices are removed, and all components are positioned in the cold setting. Temporary supports may be left in place if they will not interfere with the piping expansion in the hot setting.</p>
            <p>Infrared thermography examination of the joint in high-temperature services can identify hot spots and bulk temperature to determine if both the joint is operating within its design temperature and if any internal fiber blanket and liner associated with the joint is functioning as designed.</p>
            <p>During maintenance outages, additional inspection activities may be performed. As stated previously, the "cold" position and settings should be recorded and compared to previous "cold" and "hot" measurements. Changes should be reviewed against the design. The expansion joint should be visually examined externally and, if possible, internally. Any external coverings should be removed to facilitate the inspection. The fabric in fabric joints should be examined for rips, holes, and flexibility. Metal attachment rings and bolting should be examined for distortion and corrosion. Metallic bellows may be examined with dye penetrant examination, ET, and UT for cracking. Cracks can occur in convolutions, at piping attachment fillet welds, and on any internal liner attachment welds. Thinning and pitting can occur in some services, and evidence for these should be investigated during internal inspections.</p>
        </div>
        <div class="subsection">
            <h4>10.3.7 Flexible Hoses</h4>
            <p>Flexible hoses utilized in hydrocarbon or other hazardous service should be individually identified and include appropriate service (chemical) limitations and acceptable operating conditions. Generally, there are two purposes for flexible hoses: one being installed in lieu of hard piping and the other being used for short term purposes. The purpose of the flexible hose should be taken into consideration when determining if the flexible hose should be inspected and how it should be inspected.</p>
            <p>Flexible hoses used in permanent installations should be periodically inspected with the hard piping it is attached to or more frequently if determined necessary by the owner-operator. Flexible hoses used in temporary applications should be cleared of process material, cleaned, and stored appropriately (per manufacturer's instructions where available) when not in use to minimize both mechanical damage and exposure to environmental conditions and chemicals that could compromise one or more components of the hose assembly.</p>
            <p>Each flexible hose (new and used) should be inspected prior to being placed in service. This inspection should include a verification of its intended service (process chemicals and temperature/pressure rating) and overall condition (looking for mechanical damage to connections, fittings, flanges, etc.) and that the periodic inspection has been performed.</p>
            <p>A complete inspection of the hose should be performed periodically. This inspection should include the following:</p>
            <ul>
                <li>Ensure the hose has been individually identified (ID tag) and that the records contain appropriate design conditions and service limitations or compatibility.</li>
                <li>Verify diameter, length, and end fittings for individual assemblies and compare with existing ID tags and documentation.</li>
                <li>Verify the hose and fitting pressure ratings are within the design parameters for hydrostatic proof pressure test (generally 1.5 times MAWP) and check the condition of the fittings (thread condition and gasket or sealing surface condition to provide a proper seal). Fittings should also be examined for mechanical damage from overtightening of the threads or overtorquing of the bolted assembly, causing flange face rotation. The hose to fitting attachment point should also be inspected for loose or damaged clamps or compression fittings.</li>
                <li>Perform a visual inspection of the hose cover for any cuts, gouges, breaches, fraying, or other defects where reinforcement is exposed. The hose assembly should also be inspected for excessive abrasion damage to the outer covering/jacket and damage from heat (brittleness and/or cracking).</li>
                <li>Inspect for damage from excessive bending (kinking), which may produce partial crushing/flattening of the hose, crimping, or excessive strain at end connections. Check minimum installed bend radiuses to the manufacturer's recommendations.</li>
                <li>To the extent possible, examine the internal condition of the hose, looking for signs of erosion, cracking, or chemical attack/damage of a nonmetallic liner (swelling, tears, abrasion/roughness, etc.).</li>
                <li>Additional inspections may include the following:
                    <ul>
                        <li>visual inspection of the hose tube with a boroscope or videoprobe for general condition on the interior liner (looking for blisters, cracks, or other defects);</li>
                        <li>for fluoropolymer and thermoplastic hose equipped with an internal bonding, perform a test to ensure the electrical continuity between the end fittings;</li>
                        <li>if the transfer fluid inside the hose is nonconductive, then perform an electrical conductivity test to ensure the grounding/bonding of the hose;</li>
                        <li>check for appropriate alloy composition (PMI) per manufacturers and equipment records; note that this may only be an initial inspection unless hose fittings or other components may be changed or modified;</li>
                        <li>on-stream inspection using infrared thermography examination may help identify damage to one or more of the hose components/layers;</li>
                        <li>fittings may be examined with dye penetrant, ET, and/or UT methods to identify cracking or other damage;</li>
                        <li>perform a hydrostatic pressure test in accordance with the manufacturer's recommended design specifications (limited by the lowest pressure rating of included component);</li>
                        <li>perform the original equipment manufacturer's recommended inspection and testing activities.</li>
                    </ul>
                </li>
            </ul>
            <p>As effective inspections of process hoses are difficult, some owner-operators stamp and track process hoses, periodically pressure test them, and require replacement after a set amount of service time based on risk and type of hose. Additionally, visual inspection checklists can be used for issues that should be periodically checked to verify the integrity of the hose.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>10.4 Thickness Measurements</h4>
        <div class="subsection">
            <h4>10.4.1 Ultrasonic Examination</h4>
            <div class="subsection">
                <h4>10.4.1.1 General</h4>
                <p>Three factors considered when designing equipment intended to contain the pressure and load-bearing forces are shape, the material of construction, and thickness.</p>
                <p>Of the three main factors, the thickness can change with time due to corrosion. The industry relies predominantly on the remaining thickness of the component after the equipment is designed, fabricated, and installed to determine if it is fit for continued service. Once the equipment is in routine operation, thickness assessments become the most common practice for inspecting for thinning. However, the identification of credible damage mechanisms may also be included (e.g. cracking, embrittlement, distortion, etc.). Measuring the thickness of the equipment in various designated locations (i.e. CMLs) is the most common condition assessment practice performed on piping.</p>
                <p>Corrosion specialists in the industry have identified damage mechanisms, described in API 571, that result in loss of metal thickness. After the credible damage mechanisms have been identified, susceptible locations (e.g. CMLs) are determined and the wall thickness is measured and recorded. This occurs on a routine basis based on the risk and/or assigned/established corrosion rates.</p>
                <p>Numerous factors are considered when selecting the best tools to measure thickness, including the following:</p>
                <ul>
                    <li>component shape;</li>
                    <li>material of construction;</li>
                    <li>temperature during measurement;</li>
                    <li>damage predicted;</li>
                    <li>coatings on the ID and/or OD;</li>
                    <li>access;</li>
                    <li>available resources for conducting the measurements.</li>
                </ul>
                <p>Thickness measurement can be performed using audio, mechanical, sonic, radiation, and electromagnetic devices.</p>
                <p>Sonic devices use sound waves and electronics to measure wall thickness. The frequency of the sound waves used is considered "ultrasonic" meaning greater than 20K cycles per second; thus, the terminology "ultrasonic examination technique."</p>
                <p>Radiation is used as a means of energy to penetrate metal. The amount of radiation penetrating metal is measured by exposing film or imaging plates. The use of radiation to create an interpretable image is referred to as "radiographic examination technique." The most common RT technique is called "profile radiography." Wall thickness measurement and detection of wall loss patterns are most frequently performed using profile RT. Additionally, "density radiography" is also used to look for areas of localized corrosion and pitting of the ID surface of a component.</p>
                <p>The thickness of a material can be expressed in many ways. Some examples include the following:</p>
                <ul>
                    <li>Nominal Thickness—The thickness of the supplied material of construction, originally designated by the design criteria, but usually oversized due to the manufacturing process and its tolerances (or as made available by shop supplies).</li>
                    <li>Minimum Remaining Wall Thickness—Wall thickness measurement at the thinnest location.</li>
                    <li>Minimum Required Wall Thickness—The thickness without corrosion allowance for each component of a piping system based on the appropriate design code calculations and code allowable stress that consider pressure, temperature, mechanical, and structural loadings.</li>
                    <li>Average Wall Thickness—A number of thickness measurements collected at a single small area (e.g. a 2" diameter examination point) and used to calculate an average thickness at the CML.</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>10.4.1.2 Thickness Instruments</h4>
                <div class="subsection">
                    <h4>10.4.1.2.1 General</h4>
                    <p>UT instruments are the primary means of obtaining thickness measurements on equipment. RT and real time RT may also be used in a limited way to determine the thickness of piping components. Methods such as depth drilling (e.g. sentinel or tell-tale holes), the use of corrosion buttons, and the use of test holes may be applied at some special locations. However, these methods have generally been replaced by NDE methods of thickness gauging, such as ultrasonic thickness measurements.</p>
                    <p>Manufacturers of UT equipment have designed instruments specifically for thickness measurements and are referred to as ultrasonic thickness instruments and in some cases, the word "instrument" is substituted using the word "gauge." There are three types of digital ultrasonic thickness instruments: numeric thickness readout, A-scan with numeric thickness readout, and flaw detectors. The major advantages of UT instruments are as follows:</p>
                    <ul>
                        <li>Personnel safety is enhanced due to the compact size and minimal weight. This is advantageous when climbing, during rope access and in cases where physical exertion is necessary to obtain access.</li>
                        <li>Features that increase the accuracy of measurements when utilized on pipe with coatings, pipe operating at elevated temperatures, and pipe with uneven reflective surfaces due to corrosion.</li>
                        <li>The ability to connect to software programs used for managing mechanical integrity programs.</li>
                    </ul>
                    <p>UT instruments are simple to operate and economical to purchase compared to more sophisticated ultrasonic instruments for flaw detection, sizing, and characterization. However, the degree of training and experience required to ensure that true and accurate measurements are obtained can be considerable and should not be underestimated. Owner-operators should ensure that adequate training, examination, and certification of personnel takes place, such as outlined in ASNT SNT-TC-1A or equivalent international standards. Personnel using these devices should have training on the proper use of this equipment, including ultrasonic theory, high-temperature thickness measurements, corrosion evaluation, mid-wall anomalies, the potential for "doubling," and equipment operations.</p>
                </div>
                <div class="subsection">
                    <h4>10.4.1.2.2 Numeric Thickness Readout</h4>
                    <p>Thickness readout instruments are small handheld pulse-echo thickness gauges with only a numeric readout. These instruments are typically equipped with dual-element pitch-catch transducers. The instruments have a probe zero and a velocity setting for calibration on various materials. The range for these instruments is usually from 0.040 in. to 20.000 in., depending on the configuration. The instruments operate by measuring the time between the initial pulse (IP) and the first echo.</p>
                    <p>The use of numeric thickness readout-only instruments should be carefully considered as they have been misused and misapplied within the industry and can lead to erroneous and inaccurate results.</p>
                </div>
                <div class="subsection">
                    <h4>10.4.1.2.3 A-scan with Numeric Thickness Readout</h4>
                    <p>A-scan instruments with a numeric thickness readout are divided into two groups: thickness measurement (only) and flaw detectors.</p>
                    <p>A-scan thickness measurement instruments incorporate a numeric display and an electronic display for viewing an A-scan presentation. The displays are usually liquid crystal displays or light-emitting diodes. Some of these instruments can display both A- and B-scans.</p>
                    <p>The advantage of an A-scan display over a numeric display is that it allows the examiner to view the ultrasonic waveform to verify the proper signal is being measured by the instrument. This is extremely important in the case of doubling and for evaluating a laminar indication versus corrosion damage.</p>
                    <p>The A-scan display aids the examiner in distinguishing between a corroded surface and a mid-wall anomaly (e.g. laminar inclusion). The reflected signal from a laminar inclusion will come straight up from the baseline at a point prior to the reflected back wall signal indicating the depth. Often, while scanning a corroded area, the signal from corrosion will break the baseline at the back wall signal and the corrosion signal will move toward the IP signal until the minimum thickness is reached. This movement is due to the sound reflecting from the edges of the corrosion until the thinnest area is being reflected. This movement of the corroded signal is often referred to as "walking the signal."</p>
                    <p>A-scan instruments typically can operate in either of two-timing modes, the IP timing mode or the multiple echo mode. The IP timing mode measures the transit time from the IP to the first echo. The multiple echo mode allows the examiner to set the instrument to measure between a set of multiple successive echoes instead of the IP first in order to establish the thickness.</p>
                    <p>The multiple echo mode is used for measuring the remaining thickness on specimens with coated surfaces without including the coating thickness. This is accomplished by measuring the travel time between two successive back wall signals to obtain the thickness of the material and not including the travel time due to the thickness of the coating. When using this mode, the examiner should pay careful attention to the A-scan display to ensure that the proper signals are being measured.</p>
                    <p>Corrosion evaluation should be conducted using the IP timing mode. The reflected energy on rough and corroded or pitted surfaces is often only strong enough to produce a single signal. The instrument will indicate "0.000" when in multiple echo mode because it requires two echoes to measure.</p>
                    <p>In cases where a component is painted at the measurement location and is corroded on the reflection side (which can cause a lack of sufficient echo-to-echo signal and therefore measurement error), the paint should be removed for accurate thickness measurements.</p>
                    <p>UT thickness gauges and certain transducers can measure the thickness of paint and wall thickness simultaneously.</p>
                    <p>These instruments primarily use a 0.250 in. to 0.500 in. diameter, 2.0 MHz to 5.0 MHz, dual-element pitch catch search unit; however, some instruments have options to use single-element delay or even EMATs.</p>
                </div>
                <div class="subsection">
                    <h4>10.4.1.2.4 Ultrasonic Flaw Detectors with a Numeric Display</h4>
                    <p>Ultrasonic flaw detectors with a numeric display are similar to the A-scan thickness gauges in that they have both an A-scan and a numeric display and can be used with single- or dual-element transducers. These instruments are more advanced than the others and typically have more options and features, including the capability for angle beam examinations. However, modern UT thickness gauges utilize features that enhance the accuracy of thickness measurement, typically resulting in improved accuracy of measurement over flaw detectors.</p>
                    <p>Flaw detectors with numeric displays can be operated in either the IP or multiple echo timing modes.</p>
                    <p>Other applications requiring the use of ultrasonic flaw detectors are weld quality examinations, advanced flaw sizing, and high-temperature hydrogen attack detection. Weld quality examinations (angle beam) use specially designed transducer wedges to generate shear waves at 45°, 60°, or 70° for detecting, evaluating, and sizing flaws. Flaws that can be detected are cracks, slag, lack of fusion, incomplete penetration, and porosity.</p>
                    <p>Advanced crack-sizing techniques for measuring the through-wall extent of the cracks include the use of tip diffraction, high-angled L-waves, 30-70-70 search units, and bimodal search units. All of the advanced techniques require additional hours of classroom and field experience. The examiner is also required to pass a performance-based demonstration examination. Other advanced UT technologies available for detecting and evaluating and sizing flaws include time-of-flight diffraction and phased array.</p>
                    <p>High-temperature hydrogen attack can be detected and evaluated utilizing other highly specialized ultrasonic techniques as outlined in API 586.</p>
                </div>
                <div class="subsection">
                    <h4>10.4.1.2.5 Some Factors Affecting Measurement Accuracy</h4>
                    <p>Ultrasonic velocities are different in different materials. It is important to use the proper velocity to obtain accurate thickness measurements. An ultrasonic instrument determines the thickness by the following equation:</p>
                    <p>Thickness = 2⋅(time of round trip sound travel)⋅(velocity for material)</p>
                    <p>The round-trip sound travel is measured from pulse generation to the time the sound waves from the back wall or another reflector is received. The wrong velocity can either increase or decrease the as-measured ultrasonic thickness.</p>
                    <p>Laminar inclusions can also cause erroneous readings. Because laminar inclusions create a planar interface perpendicular to the direction of wave travel, they can reflect the sound back to the transducer. This reflected signal can be misinterpreted as being the back wall signal and will calculate a thinner reading.</p>
                    <p>If the ID surface is extremely rough or an irregular-shaped pit is encountered, often the only indication the examiner may encounter is a lower amplitude back wall signal or a complete loss of the back wall signal. This reduction or loss is due to the dispersion of the sound. In turn, there is not enough ultrasonic energy received by the instrument to produce a signal above the noise level. In cases such as these, the examiner should increase the gain setting on the instrument until the area where the diminished signal or loss of signal occurred can be fully evaluated to the extent the examiner can determine a minimum thickness.</p>
                    <p>Doubling occurs when measuring thin materials usually less than 0.100 in. (2.5 mm). Doubling results in reading much thicker than the actual wall thickness. The reflected back wall signal is masked by the noise from the IP, and the instrument reads the second or third reflection. Another occurrence of doubling can be caused in extremely thin materials below the instrument's (i.e. transducer) ability to separate the signals adequately for proper measurement of the gate function. This results in the sound reflecting in the material producing an extra skip distance before it is received, thereby doubling the travel time or sound distance and in turn doubling the measured thickness. It is equally important when using echo-to-echo mode due to mode-converted shear wave echoes occurring between the back wall echoes. The measuring gate can lock onto the signal mode converted shear wave echo, causing incorrect wall thickness measurement, as shown in Figure 29.</p>
                    
                    <div class="figure-container">
                    <img src="images/api574_figure_29.png" class="figure-image">
                    <p class="figure-caption">Figure 29—Case of Doubling due to Mode Converted Shear Wave Echo Occurring between the Backwall Echoes</p>
                    </div>

                    <p>Each search unit should be tested to determine the minimum measurable thickness. Sample steps are as follows:</p>
                    <ul>
                        <li>measure the thickness of a set of feeler gauges beginning at 0.100 in. (2.5 mm);</li>
                        <li>measure the 0.090 in. (2.3 mm), 0.080 in. (2.0 mm), and so on, subtracting 0.010 in. (0.25 mm) every reading until the as-measured thickness is two times or more than the actual thickness;</li>
                        <li>take the thickness where the doubling occurred and multiply by 1.5 times, and this should be the minimum measurable thickness for that search unit.</li>
                    </ul>
                </div>
            </div>
            <div class="subsection">
                <h4>10.4.1.3 Corrosion Evaluations</h4>
                <p>The best search units for conducting a corrosion evaluation are dual-element transducers. The piezoelectric elements in these search units are placed on slight angles for direct reflection of the transmitted sound toward the receiving transducer. This tilting of the transducers provides some pseudo-focusing of the sound beam. The dual-element search units provide better near-surface detection than conventional single element search units.</p>
                <p>The frequency for the majority of search units ranges from 2 MHz to 5 MHz and the diameter from 0.25 in. to 0.500 in. (6.3 mm to 12.7 mm). Special applications such as thick materials [> 6.00 in. (152 mm)], product forms such as castings, or coarse grain materials such as high-alloy or high-nickel steels can require lower frequencies (1 MHz) and/or larger diameter search units.</p>
                <p>Search units used for corrosion detection or evaluation should have a good wear surface on the face of the search unit to allow the examiner to scan corroded areas for the minimum reading and minimize the wear on the search unit. When conducting corrosion detection or evaluation, the examiner should scan the area of interest with the search unit in lieu of conducting individual point measurements. Scanning provides a greater chance of detecting small diameter (less than one-half of the search unit diameter) indications. The examiner should not scan faster than the A-scan displays refresh rate to avoid missing a small indication. This is typically 6 in./s (152 mm/s) or less. Additionally, the examiner should overlap each scan path by a minimum of 10 % of the transducer diameter.</p>
            </div>
            <div class="subsection">
                <h4>10.4.1.4 High-temperature Thickness Measurements</h4>
                <p>The search unit is the most important component of the thickness measurement equipment for high temperature measurements. Some high-temperature search units are designed to withstand temperatures up to 1000 °F (538 °C) for very brief durations of time.</p>
                <p>Special delay-line materials and water-cooled transducers are available that permit the use of pulse-echo instruments at temperatures up to 1100 °F (593 °C). Most high-temperature dual-element search units are manufactured with the delay material built into the case, whereas most single-element search units come with replaceable delays.</p>
                <p>The duty cycle is another critical factor for high-temperature search units. The search unit should be allowed to cool down between thickness measurements. This is especially critical in the case of dual-element search units. Even though these search units are manufactured to withstand high temperatures, continued use at elevated temperatures will cause these units to begin to breakdown. As a rule of thumb, the search unit should be allowed to cool down between thickness measurements where the examiner can comfortably hold it in their bare hand.</p>
                <p>The second most critical element for performing high-temperature thickness measurements is the ultrasonic couplant. There are several high-temperature couplants commercially available. The desirable characteristics of a couplant should be one with good acoustic properties, good chemical stability at elevated temperatures, the ability to withstand decomposition, the ability to remain on vertical surfaces for 10 seconds or longer, high boiling temperature, nonflammable, and nontoxic.</p>
                <p>The test specimen temperature also affects the UT thickness measurement. As the test specimen temperature increases above ambient temperature, the velocity of the material decreases, thereby increasing the as-measured ultrasonic thickness by a factor of 1 % / 100 °F (1 %/ 55 °C).</p>
                <p>Some modern UT thickness gauges have a feature that provides automatic temperature compensation. The surface temperature to be examined is measured with a pyrometer. The operator keys in the temperature of the surface being examined. The UT thickness gauge automatically compensates for the change in velocity due to elevated temperature (see Figure 30 for an example). The inspector should be cautioned when using such gauges. The UT thickness procedures should clearly describe how thickness data are collected when the metal temperature is greater than a defined temperature. The inspector should understand if and when the Inspection Data Management System (IDMS) that will be storing and analyzing the thickness data may also be used to compensate for temperature differences.</p>
                
                <div class="figure-container">
                <img src="images/api574_figure_30.png" class="figure-image">
                <p class="figure-caption">Figure 30—Example of Screen Display of UT Thickness Gauge with Automatic Temperature Compensation</p>
                </div>

                <p>The examiner must wear the proper PPE when conducting high-temperature thickness measurements for protection from the radiated heat.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>10.4.2 RT</h4>
            <p>Gamma-radiographic techniques provide accurate pipe wall measurements and permit inspection of the internals of some equipment. The primary functions of this method are to detect metal loss and check weld quality. RT has the following advantages:</p>
            <ul>
                <li>pipe insulation can remain intact;</li>
                <li>the metal temperature of the line has little bearing on the quality of the radiograph, provided the film cassette can be protected from the heat of the piping;</li>
                <li>radiographs of small pipe connections, such as nipples and couplings, can be examined for thread contact, corrosion, and weld quality;</li>
                <li>the film provides a permanent visual record of the condition of the piping at the time of the radiograph;</li>
                <li>the position of internal parts of valves (dropped gates) can be observed;</li>
                <li>radiographic equipment is easily maneuverable in the refinery or chemical plant;</li>
                <li>isotope RT is not an ignition source in the presence of hydrocarbons;</li>
                <li>pitting and other nonuniform corrosion can be identified;</li>
                <li>provides a view of a large area.</li>
            </ul>
            <p>Gamma rays traveling through the pipe wall between the outside and inside radii of the pipe must penetrate metal that is approximately four times the wall thickness of the pipe. Most of the rays are absorbed by the metal, leaving an unexposed area on the film. This area that is lighter on the darkened film represents a slightly enlarged projected image of the pipe wall. The image can be measured, and a correcting calculation can establish the thickness of the pipe wall. Any deposits or scale inside the pipe usually appear on the developed film as distinctly separate from the pipe wall. Pitting can also be visible on the film.</p>
            <p>Computed radiography can be utilized in place of film RT, reducing exposure times and producing a digital image that is easily archived and electronically transmitted.</p>
            <p>Because isotope RT gives the inspector an "internal look" at the pipe, the somewhat higher cost of this inspection can be more than offset by the data obtained.</p>
            <p>Ionizing radiation is the base principle in industrial RT, and the most common radiation sources are iridium and cobalt. There are significant safety issues surrounding the use of ionizing radiation such that personnel performing RT are required to be trained and certified as identified in API 570 and ASME BPVC, Section V, plus any jurisdictional requirements. Correct procedures must be established and implemented to ensure the safety of examiners and all other plant personnel.</p>
            <p>RT thickness measurement accuracy relies somewhat on the abilities of the radiographic technician exposing the films and the person reviewing them. When using RT for this purpose, it is advisable to develop a written practice defining the method(s) of film placement, exposure, and reading or interpreting them. Radiographic test shots should be taken of piping, which can be examined with UT thickness measurements to determine the limits of accuracy of the RT once it has been developed. In addition, a test piece of known thickness can be placed on the same plane as the radiograph, which will help define radiographic magnification factors. Multiple caliper thickness readings of the shot will improve the precision.</p>
            <p>When radiographic inspection is being performed, process-unit control systems, which use isotopes in liquid-level indicators and controls, occasionally give erroneous indications on control panels. Flame detectors used to indicate a furnace or boiler fire can also be affected. Unit operators must be warned of this possibility.</p>
            <p>Profile RT is particularly useful for identifying internal and external corrosion of small connections, such as bleed lines and gauge connections, which are especially susceptible to external corrosion from CUI because it is difficult to obtain a good seal in the insulation.</p>
            
            <p>Radiographs of piping are shown in Figure 31, Figure 32, and Figure 33.</p>
            <div class="figure-container">
            <img src="images/api574_figure_31.png" class="figure-image">
            <p class="figure-caption">Figure 31—Radiograph of a Catalytic Reformer Line</p>
            </div>

            <div class="figure-container">
            <img src="images/api574_figure_32.png" class="figure-image">
            <p class="figure-caption">Figure 32—Radiograph of Corroded Pipe Whose Internal Surface Is Coated with Iron Sulfide Scale </p>
            </div> 

            <div class="figure-container">
            <img src="images/api574_figure_33.png" class="figure-image">
            <p class="figure-caption">Figure 33—Sketch and Radiograph of Dead-end (Deadleg) Corrosion</p>
            </div>        
        </div>
        <div class="subsection">
            <h4>10.4.3 Caliper Thickness Measurements</h4>
            <p>When piping is opened, the thickness of the pipe and fittings can be measured behind the flange using transfer or indicating calipers. The thickness of inaccessible piping that cannot be measured by radiographic or ultrasonic instruments during operation can be measured with these instruments during a shutdown. If need be, the thickness of valve bodies and bonnets and pipe fittings can be measured using transfer or indicating calipers that have special legs designed to reach normally inaccessible areas.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>10.5 Determination of Minimum Required Thickness</h4>
        <div class="subsection">
            <h4>10.5.1 Piping</h4>
            <div class="subsection">
                <h4>10.5.1.1 General</h4>
                <p>ASME B31.3 contains formulas and data for determining the minimum required wall thickness for new uncorroded piping. The specification relates thickness, diameter, joint efficiency, and allowable stress to maximum safe working pressure. In specifying piping for original installation, ASME B31.3 requires that the following be considered when pipe thickness is determined:</p>
                <ul>
                    <li>corrosion allowance;</li>
                    <li>threads and other mechanical allowances (consideration should be given to crevice corrosion and loss of thickness due to cutting the threads);</li>
                    <li>stresses caused by mechanical loading, hydraulic surge pressure, thermal expansion, and other conditions;</li>
                    <li>reinforcement of openings.</li>
                </ul>
                <p>Additional thickness is nearly always required when item a) through item d) are considered. Normally, the engineer will select the pipe schedule that accommodates the required thickness plus the manufacturing tolerance permitted by the pipe material specification.</p>
                <p>Additional thickness is often needed near branch connections. This additional thickness is usually provided by one of the following:</p>
                <ul>
                    <li>a welding tee;</li>
                    <li>a saddle;</li>
                    <li>an integrally reinforced branch outlet (e.g. a weldolet); or</li>
                    <li>the header and/or run pipe thickness is greater than required by design conditions.</li>
                </ul>
                <p><strong>Caution</strong>—Caution should be exercised in calculating the retirement thickness for piping with branch connections reinforced per item d). These calculations should be performed by a piping engineer.</p>
                <p>For in-service piping subject to localized damage (e.g. pitting, cracking, blistering, gouging), as well as weld misalignment and distortion, the inspector may choose to evaluate the piping strength and suitability for continued service utilizing the approach discussed in API 579-1/ASME FFS-1. Such an analysis should be performed by, or under the direction of, a piping engineer.</p>
            </div>
            <div class="subsection">
                <h4>10.5.1.2 Pressure Design Thickness</h4>
                <p>ASME B31.3 contains a formula for determining the required thickness of new, uncorroded, straight pipe subject to internal pressure. API 570 permits the use of the simple Barlow formula to determine the required wall thickness for in-service piping. ASME B31.3 provides the guidance of when other equations are applicable. The Barlow formula is as follows:</p>
                <p>t = P·D / (2·S·E)</p>
                <p>where</p>
                <p>t is the pressure design thickness for internal pressure, in inches (millimeters);</p>
                <p>P is the internal design gauge pressure of the pipe, in pounds per square inch (kilopascals);</p>
                <p>D is the OD of the pipe, in inches (millimeters);</p>
                <p>S is the allowable unit stress at the design temperature, in pounds per square inch (kilopascals);</p>
                <p>E is the longitudinal quality factor.</p>
                <p>The Barlow formula gives results that are practically equivalent to those obtained by the more elaborate ASME B31.3 formula except in cases involving high pressures where thick-walled tubing is required. Metallic pipe for which t ≥ D/6 or P/SE > 0.385 requires special consideration.</p>
                <p>ASME B31.3 also contains the allowable stresses to be used in the formulas contained in that publication. These allowable stresses include a factor of safety and are functions of the pipe material and the temperature.</p>
            </div>
            <div class="subsection">
                <h4>10.5.1.3 Structural Minimum Thickness</h4>
                <p>In low-pressure and low-temperature applications, the required pipe thicknesses determined by the Barlow formula can be so small that the pipe would have insufficient structural strength. For this reason, an absolute minimum thickness to prevent sag, buckling, and collapse at supports should be determined by the user for each size of pipe, dependent upon the materials of construction. The pipe wall should not be permitted to deteriorate below this minimum thickness regardless of the results obtained by the ASME B31.3 or Barlow formulas.</p>
                <p>The owner-operator shall specify how structural minimum thicknesses are determined. An example table of calculated structural minimum thickness for straight spans of carbon steel pipe is provided in Table 5. Additional consideration and allowances may be required for the following conditions:</p>
                <ul>
                    <li>screwed piping and fittings;</li>
                    <li>piping diameters greater than 24 in. (610 mm);</li>
                    <li>temperatures exceeding 400 °F (205 °C) for carbon and low-alloy steel;</li>
                    <li>higher alloys (other than carbon steel and Cr-Mo);</li>
                    <li>spans in excess of 20 ft (6 m);</li>
                    <li>high external loads (e.g. refractory lined, pipe that is also used to support other pipe, rigging loads, and personnel support loading);</li>
                    <li>excessive vibration.</li>
                </ul>
                <p>Engineering calculations, typically using a computerized piping stress analysis program, may be required in these instances to determine structural minimum thickness.</p>
                <p>Austenitic stainless steel piping often has lower minimum structural thickness requirements based on their typically higher strength, higher toughness, and thinner initial thicknesses of piping components. Separate tables are often created for stainless steel piping.</p>
                <div class="table-container">
                    <table class="api-table">
                        <caption>Table 5—Minimum Structural Thickness and Minimum Alert Thicknesses for Carbon and Low-alloy Steel Pipe</caption>
                        <thead>
                            <tr>
                                <th>NPS in. (mm)</th>
                                <th>Default Minimum Structural Thickness for Temperatures < 400 °F (205 °C) in. (mm)</th>
                                <th>Minimum Alert Thickness for Temperatures < 400 °F (205 °C) in. (mm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1/2 to 1</td>
                                <td>0.07 (1.8)</td>
                                <td>0.08 (2.0)</td>
                            </tr>
                            <tr>
                                <td>11/2</td>
                                <td>0.07 (1.8)</td>
                                <td>0.09 (2.3)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>0.07 (1.8)</td>
                                <td>0.10 (2.5)</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>0.08 (2.0)</td>
                                <td>0.11 (2.8)</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>0.09 (2.3)</td>
                                <td>0.12 (3.1)</td>
                            </tr>
                            <tr>
                                <td>6 to 18</td>
                                <td>0.11 (2.8)</td>
                                <td>0.13 (3.3)</td>
                            </tr>
                            <tr>
                                <td>20 to 24</td>
                                <td>0.12 (3.1)</td>
                                <td>0.14 (3.6)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="subsection">
                <h4>10.5.1.4 Minimum Required Thickness</h4>
                <p>Generally, piping is replaced and/or repaired when it reaches the minimum required thickness unless a Fitness-For-Service analysis has been performed that defined additional remaining life. The minimum required thickness is the greater value of the pressure design thickness or the structural minimum thickness. The following steps should be followed when determining the minimum required thickness at a CML.</p>
                <ul>
                    <li>Step 1: Calculate the pressure design thickness per rating code.</li>
                    <li>Step 2: Determine the structural minimum thickness per the owner-operator table or engineering calculations.</li>
                    <li>Step 3: Select the minimum required thickness. This is the larger of the pressure design thickness or structural minimum thickness determined in Step 1 and Step 2.</li>
                </ul>
                <p>For services with high potential consequences if a failure were to occur, the piping engineer should consider increasing the minimum allowed thickness above the one determined above in Step 3. This would provide extra thickness for unanticipated or unknown loadings, undiscovered metal loss, or resistance to normal abuse.</p>
                <p><strong>EXAMPLE 1:</strong> Determine the minimum required thickness for an NPS 2, ASTM A106, Grade B pipe designed for 100 psig @ 100 °F. P = 100 psig, D = 2.375 in., S = 20,000 psi, E = 1.0 (since seamless), Y = 0.4.</p>
                <p>Step 1: Calculate pressure design thickness per rating code. (In this example, the ASME B31.3 design formula was used.)</p>
                <p>t = (P·D) / [2·(S·E + P·Y)] = (100·2.375) / [2·(20,000·1.0 + 100·0.4)] = 0.006 in.</p>
                <p><strong>NOTE</strong> If this NPS 2 pipe was 100 % supported (e.g. laying on flat ground), then 0.006 in. would hold the 100 psig of pressure. This thickness includes a 3-to-1 safety factor; however, it would not hold up in the pipe rack.</p>
                <p>Step 2: Determine structural minimum thickness per owner-operator table or engineering calculations. From Table 5, the default structural minimum thickness is 0.070 in.</p>
                <p>Step 3: Select the minimum required thickness. This is the larger of the pressure design thickness or structural minimum thickness determined in Step 1 and Step 2. The larger value of 0.006 in. and 0.070 in. is 0.070 in.</p>
                <p><strong>EXAMPLE 2:</strong> Determine the minimum required thickness for a 14 NPS, ASTM A106, Grade B pipe designed for 600 psig @ 100 °F, D = 14 in., S = 20,000 psi, E = 1.0 (seamless), Y = 0.4.</p>
                <p>Step 1: Calculate pressure design thickness per rating code. (In this example, the ASME B31.3 design formula was used.)</p>
                <p>t = (P·D) / [2·(S·E + P·Y)] = (600·14.0) / [2·(20,000·1.0 + 600·0.4)] = 0.208 in.</p>
                <p>Step 2: Determine structural minimum thickness per owner-operator table or engineering calculations. From Table 5, the structural minimum thickness is 0.110 in.</p>
                <p>Step 3: Select the minimum required thickness. This is the larger of the pressure design thickness or structural minimum thickness determined in Step 1 and Step 2. The larger value of 0.208 in. and 0.110 in. is 0.208 in.</p>
            </div>
            <div class="subsection">
                <h4>10.5.1.5 Minimum Alert Thickness</h4>
                <p>Users may establish a minimum alert thickness with values greater than either the minimum structural thickness or the pressure design thickness (whichever governs the minimum required thickness). Alert thicknesses are often input into the facility's IDMS. The alert thickness signals the inspector that it is time for a remaining life assessment. This could include a detailed engineering evaluation of the structural minimum thickness, a Fitness-For-Service assessment, or the development of future repair plans. In addition, when a CML reaches the alert thickness, it raises a flag to consider the extent and severity at other possible locations for the damage mechanism. Alert minimum thicknesses are usually not intended to mean that pipe components must be retired when one CML reaches the default limit. Table 5 shows an example of alert thicknesses for carbon and low-alloy steel pipe that could be used in conjunction with the default minimum structural thicknesses.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>10.5.2 Valves and Flanged Fittings tmin</h4>
            <p>Valves and flanged fittings are subject to stress both from internal pressure and from mechanical loadings and temperature changes. Valves are also subject to closing stresses and stress concentrations because of their shape. These stresses are difficult to calculate with certainty. For this reason, the thickness of valves and flanged fittings is substantially greater than that of a simple cylinder.</p>
            <p>ASME B16.34 establishes the minimum valve wall thickness at 1.5 times (1.35 times for Class 4500) the thickness of a simple cylinder designed for a stress of 7000 psi (48.26 MPa) and subjected to an internal pressure equal to the pressure rating class for valve Classes 150 to 2500. The actual valve wall thickness requirements provided in Table 3 of ASME B16.34 are approximately 0.1 in. (2.54 mm) thicker than the calculated values. Valves furnished in accordance with API 600 have thickness requirements for corrosion and erosion in addition to those provided in ASME B16.34.</p>
            <p>The formula for calculating the minimum required thickness of pipe can be adapted for valves and flanged fittings by using the factor of 1.5 and the allowable stress for the material specified in ASME B31.3.</p>
            <p>t = [1.5·P·D] / [2·S·E]</p>
            <p>where</p>
            <p>t is the pressure design thickness for internal pressure, in inches (millimeters);</p>
            <p>P is the internal design gauge pressure of the pipe, in pounds per square inch (kilopascals);</p>
            <p>D is the OD of the pipe, in inches (millimeters);</p>
            <p>S is the allowable unit stress at the design temperature, in pounds per square inch (kilopascals);</p>
            <p>E is the longitudinal quality factor.</p>
            <p>This calculated thickness will likely be too thin and impractical for structural loads (as is the case with many piping systems); therefore, minimum thicknesses should be established based on structural needs.</p>
            <p>The equations described above do not apply to welded fittings. The equations for pipe can be applied to welded fittings using appropriate corrections for shape, if necessary. A piping engineer should be consulted to see if such calculations are necessary.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>10.6 Other Inspection Methods/Techniques</h4>
        <div class="subsection">
            <h4>10.6.1 Special Methods of Detecting Mechanical Damage (Future Content)</h4>
        </div>
        <div class="subsection">
            <h4>10.6.2 Metallurgical Changes and In Situ Analysis of Metals (Future Content)</h4>
        </div>
        <div class="subsection">
            <h4>10.6.3 Positive Material Identification (Future Content)</h4>
        </div>
        <div class="subsection">
            <h4>10.6.4 Metal Sample Extraction (Future Content)</h4>
        </div>
        <div class="subsection">
            <h4>10.6.5 Hammer Testing</h4>
            <p>Hammer testing of piping, valves, and fittings for thickness is an outdated test method in which the component is struck with a hammer in order to listen to the sound or attenuation. The type of sound can be used by an experienced inspector in hammer testing to differentiate thin metal from thicker metal. While some experienced inspectors may gain some knowledge about a pipe's thinness using this technique, the difficulties of calibrating and standardizing a hammer test put this technique outside the scope of modern recommended practices.</p>
            <p>Hammer testing of on-stream piping has caused leaks where the hammer impact broke off corrosion scale and where the hammer penetrated thin wall presenting a safety and process safety hazard. For these reasons in addition to the fact it is a qualitative technique, most sites do not allow hammer testing. However, Hammer testing is still considered a valid test for the following:</p>
            <ul>
                <li>support anchor or flange bolt tightness by tapping on the nut and monitoring for movement;</li>
                <li>identifying loose or broken parts;</li>
                <li>checking the piping to ensure that it has drained properly of liquid or if it contains excess process or corrosion scale; tapping the pipe and hearing a dull thud rather than a ring (attenuation) is an indication of a problem.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>10.6.6 Tell-tale Hole Drilling</h4>
            <p>The use of tell-tale holes is a historical practice to determine when the corrosion allowance had been consumed by resulting in a leak that could then be observed. This practice has been abandoned by most users in favor of more conventional, industry-accepted, nondestructive inspection methods (e.g. digital UT, profile RT, etc.) However, some locations still have older piping systems that were designed with tell-tale holes and as such, it is important to identify these older systems and develop appropriate inspection, repair, and replacement plans.</p>
            <p>Tell-tale drilling (also referred to as sentinel holes or delforez holes) is the application of small pilot holes [e.g. 1/8 in. (3.2 mm) diameter] drilled into the pipe component wall using specified and controlled patterns and depths. The intended purpose of the tell-tale holes was to allow a small "controlled" leak that could be visually discovered while there is still sufficient pipe wall remaining to prevent a major rupture. There are several potential problems associated with mechanical integrity/inspection programs based on tell-tale holes and they should not be considered as a substitute for modern conventional inspection methods designed to target credible damage mechanisms in well-defined circuits. There have been a number of events in industry that tell-tale holes have failed to prevent (e.g. cases where there was localized corrosion, cases where a small tell-tale leak under insulation resulted in significant external corrosion of the pipe that went undetected, cases where the pipe failed because the tell-tale hole was plugged off with paint or corrosion products, etc.).</p>
            <p>The risk of even a small leak from a tell-tale in some services may be considered unacceptable (e.g. in high-pressure systems, services containing H2S/HF, or those that operate above the autoignition temperature). Piping with tell-tale holes may need its own inspection criteria (i.e. a more conservative retirement limit or tmin value to avoid a leak in a higher-risk system). Another key consideration when managing the risk of piping systems with tell-tale holes is identifying an appropriate response when a leak is discovered. Some sites allow the leaking holes to be "pinned" while in-service (this involves driving a tapered metal pin into the hole to stop the leak), and others have employed the use of nonengineered temporary clamps to stop the leak until a safe shutdown can be achieved. It is important to predetermine a response to a leaking tell-tale hole to minimize the risk potential.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>10.7 Nonmetallic Piping</h4>
        <div class="subsection">
            <h4>10.7.1 General</h4>
            <p>Nonmetallic piping systems are often used for fluids that are nontoxic, nonflammable, and environmentally benign. However, in some circumstances, even these piping systems are critical considering economic or operational consequences. Inspection intervals are best assessed using a risk-based approach. Factors that influence the initial inspection date are the amount and quality of the supervision and inspection performed during construction. The inspector should have adequate knowledge of FRP materials, resins, reinforcements, laminate imperfections, and manufacturing techniques.</p>
            <p>Generally, experience shows an initial inspection should be performed within the first 2 years of operation. Subsequent intervals can be extended or reduced based on initial findings. A site experiencing a significant number of failures in the early years of operation may need to increase inspection activities and shorten intervals.</p>
        </div>
        <div class="subsection">
            <h4>10.7.2 Initial Construction</h4>
            <p>Visual examination and pressure testing are the primary inspection and testing methods used during original construction. ASTM D2563 provides guidance for the visual examination of FRP components but is focused on manufacturing and assembly. Some of the more stringent specifications require RT and/or bond inspection tools of bonded nonmetallic joints. These are more advanced examinations to supplant the "coin tapping" method for locating delaminated or disbonded areas close to the surface of nonmetallic piping.</p>
            <p>Nonmetallic joints should be examined during installation and upon completion. Bell-and-spigot and taper taper joints should be inspected for proper specified gap and internally, when possible, for excess adhesive that can restrict the flow. The inspector should perform an external inspection to look for proper surface preparation, insertion, joint assembly, and alignment.</p>
            <p>Butt-and-wrap joints should be inspected internally for the proper gap, cut edge protection, and the required paste to fill the gap. Externally, the joint should be checked for proper alignment, gap tolerance, thickness, width, laminate sequence, and taper. In addition, where pipe and fittings are joined, ensure that the fitting is properly tapered if thicker than the pipe.</p>
            <p>Pressure testing at up to 1.5 times design pressure will reveal leaks from major flaws such as severe impact damage. Pressure tests, however, are not a guarantee of structural integrity. Joints with up to 85 % disbonding have reportedly passed pressure tests. The use of acoustic emission monitoring during pressure testing can identify material failure occurring prior to leakage, thereby increasing the sensitivity of the pressure test. This can be used in real time to prevent the pressure test from causing irreversible damage to the pipe that might otherwise occur without monitoring and lead to future in-service failure.</p>
        </div>
        <div class="subsection">
            <h4>10.7.3 On-stream Examination and Testing Techniques</h4>
            <p>Many traditional NDE techniques and testing are used to assess nonmetallic piping. These techniques include the following:</p>
            <ul>
                <li>UT;</li>
                <li>RT;</li>
                <li>AE;</li>
                <li>hardness testing;</li>
                <li>thermographic imaging;</li>
                <li>MW.</li>
            </ul>
            <p>See Table 6 for a comparison of those common nonmetallic piping NDE techniques.</p>
        </div>
    </div>`,
    contentEs: `<h2>Prácticas de Inspección para Componentes de Sistemas de Tuberías</h2>
    <h3>10 Tipos de Inspección, Métodos y Limitaciones</h3>
    <div class="subsection">
        <h4>10.1 Inspección Visual Externa</h4>
        <div class="subsection">
            <h4>10.1.1 General</h4>
            <p>Las inspecciones visuales externas se realizan para determinar la condición externa de las tuberías, el sistema de aislamiento, el sistema de pintura/recubrimiento y el hardware asociado, así como para verificar signos de desalineación, vibración y fugas. El Anexo A contiene una lista de verificación de muestra para inspecciones externas que deben realizarse de acuerdo con API 570—Sección 5.5.5.</p>
        </div>
        <div class="subsection">
            <h4>10.1.2 Fugas</h4>
            <p>Las fugas pueden ser peligrosos de seguridad o incendio. Pueden causar un cierre prematuro del equipo y a menudo resultan en pérdidas económicas. Las fugas en tuberías de servicios rara vez son peligrosas o causan cierres, pero sí resultan en pérdidas. Las fugas en tuberías de aceite caliente o volátil, gas y productos químicos pueden resultar en un incendio, una explosión, contaminación de la atmósfera circundante, un grave problema ambiental, un cierre prematuro o pérdida de producción. La vigilancia visual frecuente por parte de los operadores debe realizarse para detectar fugas. Se debe prestar especial atención a las juntas bridadas, las prensaestopas, los bonetes de válvulas y las juntas de expansión en tuberías que transportan materiales inflamables, tóxicos, corrosivos u otros materiales dañinos. Muchas fugas pueden detenerse o minimizarse apretando las prensaestopas.</p>
            <p>Se recomienda apretar los pernos de brida en una línea presurizada solo cuando se tomen medidas especiales para evitar tres problemas potenciales:</p>
            <ul>
                <li>interacciones de pernos (por ejemplo, cuando se aprieta un perno, los pernos adyacentes se aflojan);</li>
                <li>un perno puede ceder o fallar debido a sobrecarga;</li>
                <li>apretar un lado de una brida puede causar deflexiones en las áreas opuestas y adyacentes a ella.</li>
            </ul>
            <p>Las fugas de ciertos fluidos pueden resultar en la fisuración y/o corrosión de los pernos de brida; en tales casos, los pernos deben reemplazarse. La reparación oportuna de las fugas a menudo evitará una corrosión o erosión grave de las superficies de la junta o las prensaestopas. Pueden realizarse reparaciones temporales o permanentes mientras las líneas están en servicio, pero debe completarse una evaluación adecuada del trabajo.</p>
            <p>La fisuración por sulfuro de hidrógeno húmedo y la ampollamiento por hidrógeno en sistemas en servicio agrio (cargado de H2S) pueden ocurrir externamente si quedan atrapados debido a una fuga que está abrazada.</p>
            <p>El líquido que se ha filtrado en el suelo generalmente puede localizarse buscando charcos de líquido en el suelo o por decoloración de la tierra. El derrame de líquido debe investigarse para determinar si el líquido es corrosivo para los materiales de construcción con los que podría entrar en contacto. Esto incluye el material de construcción de la tubería, recubrimientos protectores o cualquier sistema de revestimiento de aislamiento. Si el líquido es corrosivo para estos materiales, pueden justificar una inspección para evaluar cualquier daño. La determinación de la composición del líquido puede implicar el análisis químico de muestras de suelo o del líquido, a menos que se conozca el origen de la fuga.</p>
        </div>
        <div class="subsection">
            <h4>10.1.3 Desalineación</h4>
            <p>Las tuberías deben inspeccionarse para detectar desalineación, que puede indicarse mediante las siguientes condiciones:</p>
            <ul>
                <li>tuberías desalojadas de uno o más soportes de modo que su peso no se distribuya adecuadamente en los soportes o monturas restantes;</li>
                <li>la deformación de una pared de recipiente o tanque en las proximidades de una conexión de tubería, que también puede ser el resultado de la expansión térmica en el sistema de tuberías, una desalineación importante de la tubería o soportes inadecuados de la tubería;</li>
                <li>soportes de tubería forzados fuera de plomo por la expansión o contracción de la tubería;</li>
                <li>reemplazo o reparación excesivos de cojinetes, impulsores y ruedas de turbina de bombas centrífugas, compresores y sellos de turbina a los que está conectada la tubería;</li>
                <li>el desplazamiento de una placa base, rotura de una cimentación o cortadura de pernos de cimentación de equipos mecánicos a los que está conectada la tubería;</li>
                <li>grietas en las bridas de conexión o las carcasas de bombas o turbinas a las que está conectada la tubería;</li>
                <li>juntas de expansión que están excesivamente deformadas o no funcionan correctamente.</li>
            </ul>
            <p>Si se descubre una desalineación significativa de la tubería, debe corregirse según lo determinado por el alcance del daño y el riesgo.</p>
        </div>
        <div class="subsection">
            <h4>10.1.4 Soportes</h4>
            <div class="subsection">
                <h4>10.1.4.1 Inspección General de Soportes de Tubería</h4>
                <p>Las ubicaciones de los soportes deben identificarse en los sistemas de registro apropiados e inspeccionarse para verificar que los soportes funcionan correctamente y no están causando daño a la tubería.</p>
                <p>La priorización de las inspecciones de soportes puede basarse en la probabilidad de daño o puede basarse en una evaluación de riesgos que también considere la consecuencia de una falla.</p>
                <p>Pueden utilizarse técnicas estadísticas para determinar el tamaño de muestra de inspección requerido para garantizar el grado necesario de confianza. Los datos específicos del sitio relacionados con problemas históricos de soportes de tubería deben referenciarse para comprender mejor la vulnerabilidad de diseños, ubicaciones o aplicaciones particulares de soportes.</p>
                <p>El análisis estadístico puede utilizarse para evaluar los datos de inspección recopilados durante las inspecciones por muestreo y determinar si se justifica una inspección adicional, hasta e incluyendo una inspección del 100 % de soportes de tubería particulares y/o diseños. La inspección visual cercana de los soportes de tubería o las ubicaciones de puntos de contacto puede proporcionar datos adicionales para ayudar a determinar dónde se necesitan técnicas más detalladas y cuantitativas.</p>
                <p>La inspección externa de los soportes debe incluir los siguientes exámenes cuando sea aplicable:</p>
                <ul>
                    <li>Examen visual para daño físico general, distorsión y deterioro de recubrimientos protectores o protección contra incendios.</li>
                    <li>Examen visual para evidencia de corrosión, especialmente en o cerca de los puntos de contacto, los accesorios de cimentación y cerca de patas falsas (troncos).</li>
                    <li>Examen visual para signos de movimiento y operación restringida de rodillos de tubería, placas de deslizamiento, poleas o puntos de pivote en sistemas de soporte contrapesados. La inspección también debe incluir una búsqueda de pequeñas conexiones de ramificación que estén contra los soportes de tubería que podrían estar restringiendo el movimiento térmico de la línea más grande.</li>
                    <li>Examen visual para deterioro de zapatas de hormigón, cimentaciones o bloques de pedestal. Si se encuentra deterioro de las zapatas de hormigón, debe determinarse la causa y tomarse medidas correctivas.</li>
                    <li>Examen visual para protección contra incendios fallida en las ubicaciones de los soportes.</li>
                    <li>Examen visual para pernos de anclaje de cimentación fallidos o sueltos.</li>
                    <li>Examen visual para fijación insegura de soportes y vigas al soporte, o fijación insegura o ajuste inadecuado de colgantes de tubería.</li>
                    <li>Examen visual de la integridad y funcionamiento adecuado del resorte. Para los soportes de resorte, los siguientes elementos deben inspeccionarse para detectar cualquier evidencia de corrosión o sobrecarga mecánica:
                        <ul>
                            <li>carcasa del resorte;</li>
                            <li>resorte;</li>
                            <li>dispositivo de bloqueo;</li>
                            <li>accesorios del colgante (varillas y abrazaderas de soporte);</li>
                            <li>tubería debajo de las abrazaderas de soporte;</li>
                            <li>acero estructural de soporte.</li>
                        </ul>
                    </li>
                    <li>Examen de espesor de la tubería de proceso encerrada por accesorios de soporte de patas falsas (troncos) para detectar daño por corrosión; normalmente, se utiliza RT de perfil para determinar si existe daño por corrosión en la tubería de proceso. En algunos casos, pueden ser posibles las mediciones de espesor ultrasónicas. El examen debe incluir el centro de la tubería encerrada por el soporte de pata falsa (tronco) y lo más cerca posible del borde interior de la soldadura de fijación donde el agua puede asentarse en la pata falsa.</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>10.1.4.2 Técnicas Especializadas de END para Puntos de Contacto</h4>
                <p>Varios tipos de técnicas especializadas de END pueden permitir la inspección de puntos de contacto sin levantar la tubería o quitar el soporte:</p>
                <ul>
                    <li>UT de Largo Alcance: Inspección por Ondas Guiadas Ultrasónicas—Las ondas guiadas ultrasónicas de baja frecuencia pueden usarse para la detección de corrosión interna y externa desde un único punto de acceso en la tubería a una distancia de aproximadamente 30 m (98 pies) en ambas direcciones.</li>
                    <li>Ultrasonido con Transductor Acústico Electromagnético (EMAT)—El sistema EMAT puede usarse para inspeccionar ubicaciones de soportes de tubería en tuberías de proceso en vivo, en operación.</li>
                    <li>Método de Onda de Frontera Deslizante—El Método de Onda de Frontera Deslizante puede detectar corrosión de una tubería a una distancia del punto de acceso.</li>
                    <li>Técnicas de Haz Angular de Onda de Corte—Pueden usarse técnicas de haz angular simple o múltiple de onda de corte para detectar y dimensionar la pérdida de pared en las ubicaciones de puntos de contacto.</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>10.1.4.3 Clasificación de Riesgo de Soportes de Tubería</h4>
                <p>Debe considerarse la evaluación de riesgos para identificar soportes de tubería vulnerables y decidir dónde puede y no puede usarse la inspección por muestreo. La determinación de las áreas más vulnerables debe considerar lo siguiente:</p>
                <ul>
                    <li>Factores que afectan la probabilidad de daño, incluyendo:
                        <ul>
                            <li>¿El soporte es de un tipo que tiene antecedentes de dar problemas?</li>
                            <li>¿El diseño del soporte promueve condiciones continuamente húmedas?</li>
                            <li>¿Hay un recubrimiento efectivo en la tubería en el área del soporte?</li>
                            <li>¿El soporte está en un área de la planta que es particularmente húmeda?</li>
                            <li>¿La temperatura en el área de contacto está elevada de modo que la corrosión podría acelerarse?</li>
                            <li>¿Podría el movimiento de la tubería resultar en distorsión o esfuerzos locales altos en la tubería en el área del soporte?</li>
                            <li>¿Cuánto tiempo (es decir, edad) ha estado el soporte en servicio?</li>
                        </ul>
                    </li>
                    <li>Factores que afectan la consecuencia de una falla, como peligros para la salud y seguridad del personal si ocurren fugas, el impacto en el medio ambiente, la indisponibilidad del equipo y cualquier impacto financiero resultante.</li>
                    <li>Áreas dentro y fuera del sitio; generalmente no hay distinción entre áreas dentro y fuera del sitio en términos de vulnerabilidad a la corrosión. Sin embargo, la ubicación puede tener factores que contribuyan a la corrosión, como inundaciones o falta de drenaje, malezas, lodo, etc.</li>
                </ul>
            </div>
        </div>
        <div class="subsection">
            <h4>10.1.5 Vibración</h4>
            <p>Las rondas de operadores de rutina y las inspecciones visuales externas que identifican sonidos fuertes o cambios visuales en las tuberías, ya sean esperados (por ejemplo, flujo de pistón) o inesperados, que resultan en movimiento, abolladuras, deformaciones o cambios en las condiciones de los soportes en las guías de tubería, etc., deben reportarse al inspector. Dichos informes deben revisarse considerando el impacto potencial en la integridad del sistema de tuberías y si se debe realizar un seguimiento adicional (por ejemplo, monitoreo, inspección, evaluación de ingeniería, cambio operativo, etc.).</p>
            <p>Deben considerarse rondas de observación específicas después de una alteración inesperada del proceso, un incidente grave de alivio o un evento climático. Por ejemplo, las tuberías de gran diámetro y pared delgada pueden estar específicamente en riesgo de vibración inducida por vórtices y movimiento.</p>
            <p>Si se observa vibración o balanceo, las soldaduras deben inspeccionarse para detectar grietas, particularmente en los puntos de restricción, como áreas donde la tubería está conectada a equipos o cerca de anclajes. Los problemas ocurren con frecuencia en conexiones soldadas y roscadas pequeñas que tienen una válvula pesada que acentúa la vibración y en líneas pequeñas que están sujetas a una línea más grande y forzadas a moverse con ella. Debe considerarse soporte adicional para tuberías y válvulas de tamaño pequeño con soporte inadecuado y para la línea vibrante principal a la que están conectadas. En casos de vibración severa, puede ser recomendable que un consultor competente recomiende un remedio, particularmente si se requiere equipo especializado, como una botella de pulsación o estabilizadores de balanceo.</p>
        </div>
        <div class="subsection">
            <h4>10.1.6 Corrosión Externa</h4>
            <p>Los defectos en los recubrimientos protectores o el revestimiento de los sistemas de aislamiento permitirán que la humedad entre en contacto con la tubería. Cuando se encuentran defectos en el revestimiento del sistema de aislamiento, el alcance y la gravedad de la corrosión deben determinarse mediante la remoción del aislamiento o la radiografía del área afectada.</p>
            <p>Las secciones de aislamiento pueden removerse de conexiones pequeñas, como líneas de purga y conexiones de manómetro, ya que la dificultad para obtener un buen sello en el aislamiento hace que estas ubicaciones sean particularmente vulnerables a la corrosión externa. Cada vez que se realice la remoción de aislamiento y revestimiento para realizar la inspección de CUI, es importante reparar/reemplazar el aislamiento y el revestimiento removidos y garantizar el sellado adecuado de los materiales removidos y/o el drenaje de agua del revestimiento para evitar una mayor entrada de agua. Consulte API 583 para obtener más información sobre CUI.</p>
            <p>Todos estos puntos deben investigarse:</p>
            <ul>
                <li>las líneas que sudan son susceptibles de deterioro en las áreas de soporte;</li>
                <li>la corrosión puede encontrarse debajo de las abrazaderas en las líneas suspendidas;</li>
                <li>las tuberías montadas sobre rodillos o zapatas de soporte soldadas están sujetas a la acumulación de humedad con la consiguiente corrosión;</li>
                <li>el líquido derramado sobre las tuberías, el impacto de un chorro de vapor y el goteo de agua sobre una línea pueden causar deterioro;</li>
                <li>la pérdida de mastique de sellado de vapor del aislamiento de las tuberías en servicio frío puede resultar en corrosión local;</li>
                <li>las paredes de las tuberías dentro de los soportes de troncos de extremo abierto están sujetas a corrosión.</li>
            </ul>
            <p>Una pérdida de espesor puede determinarse comparando el diámetro de la tubería en el área corroída con el diámetro original de la tubería. La profundidad de las picaduras puede determinarse con un calibrador de profundidad de picaduras.</p>
            <p>Los pernos también deben verificarse, especialmente en ambientes marinos y otros ambientes corrosivos.</p>
        </div>
        <div class="subsection">
            <h4>10.1.7 Puntos Calientes</h4>
            <p>Las tuberías que operan a temperaturas más altas que el límite de diseño o en el rango de creep, incluso sin mayor presión, pueden experimentar abombamiento. En las tuberías que están protegidas de temperaturas excesivas por refractario aislante interno, la falla del refractario resultará en el sobrecalentamiento de la pared metálica, causando un punto caliente. La temperatura excesiva reduce enormemente la resistencia del metal y puede causar abombamiento, descamación, pandeo localizado, deterioro del metal o falla completa.</p>
            <p>Otra causa potencial de un punto caliente es cuando la tubería revestida de refractario se aísla externamente. Esto puede hacer que la temperatura de la pared metálica aumente, acercándose potencialmente a la temperatura del proceso. Una ocurrencia común que crea esta situación es cuando se requiere trabajo de mantenimiento cerca o sobre una tubería revestida de refractario y se coloca aislamiento de manta temporal en la tubería para evitar que los trabajadores se quemen o sobrecalienten mientras realizan sus tareas. En situaciones peores, el aislamiento de manta temporal se olvida y no se retira. Durante los exámenes externos de la tubería revestida de refractario, debe notarse la presencia de aislamiento externo y retirarse si no está según el diseño.</p>
            <p>Deben realizarse inspecciones frecuentes para detectar puntos calientes en las tuberías revestidas de refractario. Cualquier abombamiento o descamación debe notarse para una mayor investigación cuando el equipo se desconecte. Algunos puntos calientes pueden detectarse por un resplandor rojo, particularmente si la inspección se realiza en la oscuridad. La temperatura de la piel de los puntos calientes indicados debe medirse utilizando un termopar portátil, crayones indicadores de temperatura, pinturas indicadoras de temperatura, termografía o un pirómetro. Para garantizar que no ocurra una ruptura en servicio, la cantidad de abombamiento no debe exceder la cantidad de creep permitida para el material. Como medida provisional, enfriar los puntos calientes severos con vapor, agua o aire puede ser deseable o necesario hasta que el sistema pueda sacarse de servicio (esta situación debe ser revisada por un ingeniero de tuberías y/o especialista en corrosión). La condición tanto del metal de la tubería como del aislamiento interno cerca de los puntos calientes debe investigarse durante el próximo período de parada.</p>
        </div>
        <div class="subsection">
            <h4>10.1.8 Alcance de la Inspección de CUI</h4>
            <p>La intención de los requisitos de inspección de CUI en API 570 es que el primer paso sea un examen visual a pie de la condición de las tuberías aisladas. Esto puede lograrse de varias maneras, ya sea con examen visual humano directo, utilizando cámaras en postes o sistemas aéreos no tripulados a menudo referidos como drones. Es importante que el inspector tenga confianza en la cobertura de inspección que le permita hacer un juicio aceptable al evaluar las observaciones.</p>
            <p>La evaluación debe incluir la identificación de áreas donde el revestimiento meteorológico o el aislamiento está dañado, así como la notación de las áreas restantes donde no se ha revelado daño. Todas las tuberías se evalúan luego contra la guía en API 570 para determinar si caen en los rangos de temperatura "susceptibles a CUI" y qué clase de tubería se ha designado.</p>
            <p>Después del recorrido a pie, en el caso en que se haya determinado que la tubería no está en el rango susceptible a CUI y no se ha observado daño, entonces no se requiere ninguna inspección adicional. En el caso en que la tubería esté dentro del rango susceptible a CUI, debe implementarse la planificación de inspección apropiada. La Tabla 4 proporciona una guía sugerida para la remoción de aislamiento o la aplicación de técnicas de END apropiadas que puedan identificar el daño de la tubería a través del aislamiento.</p>
            <div class="table-container">
                <table class="api-table">
                    <caption>Tabla 4—Tabla 2 de API 570</caption>
                    <thead>
                        <tr>
                            <th>Clase de Tubería</th>
                            <th>En Ubicaciones de Aislamiento Dañado</th>
                            <th>En Ubicaciones No Dañadas (Ningún Daño Visual Identificado durante el Examen Visual)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>75 %</td>
                            <td>50 %</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>50 %</td>
                            <td>33 %</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>25 %</td>
                            <td>10 %</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Opcional</td>
                            <td>Opcional</td>
                        </tr>
                    </tbody>
                </table>
                <p>a Las tuberías susceptibles son sistemas de tuberías que operan dentro de los rangos de temperatura susceptibles como se indica en API 583.</p>
                <p>b La tercera columna son áreas adicionales a considerar para inspeccionar y no progresivas de la segunda columna.</p>
            </div>
            <p>La inspección posterior puede definirse basándose en los hallazgos de estos exámenes iniciales. Donde se identifique CUI, la escalada de la inspección puede resultar en la remoción del 100 % del aislamiento o examen de END.</p>
            <p>Cada vez que se realice la remoción de aislamiento y revestimiento para realizar la inspección de CUI, es importante reparar/reemplazar el aislamiento y el revestimiento removidos y garantizar el sellado adecuado de los materiales removidos y/o el drenaje de agua del revestimiento para evitar una mayor entrada de agua.</p>
            <p>Consulte API 583 para obtener más información sobre CUI y posibles técnicas de END para identificar el daño.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>10.2 Inspección Visual Interna</h4>
        <div class="subsection">
            <h4>10.2.1 Corrosión, Erosión y Ensuciamiento</h4>
            <p>Las tuberías pueden abrirse en varios lugares eliminando una válvula o accesorio o separando la tubería en las bridas para permitir la inspección visual. Las superficies internas de las tuberías deben inspeccionarse visualmente sobre la mayor área posible. Una linterna o luz de extensión suele ser suficiente para esta tarea, pero una sonda, como un boroscopio o un espejo y luz, permitirá una vista más detallada. Otros métodos de inspección incluyen calibradores ópticos/láser y mecánicos. La inspección interna de las tuberías de proceso debe realizarse en cualquier punto de conexión de tuberías antiguas a nuevas creado durante actividades de mantenimiento o proyectos.</p>
            <p>Donde se noten condiciones de corrosión o erosión no uniformes en áreas accesibles para el examen visual, puede ser aconsejable realizar la inspección de las áreas inaccesibles. Pueden realizarse mediciones de espesor por RT o UT. Esto permite una extensión de la cobertura de inspección y proporciona un mayor grado de confianza en la inspección general. Esto se aplica particularmente a las tuberías que no pudieron o no fueron inspeccionadas durante la operación. La corrosión o erosión no uniforme también puede pinpointearse para un examen más cercano dirigiendo la luz solar a lo largo de la superficie de la tubería con un espejo o brillando una luz paralela a la superficie.</p>
            <p>La cantidad de ensuciamiento debe notarse para determinar si es necesaria la limpieza. El ensuciamiento debe investigarse para determinar si consiste en depósitos de la corriente del producto o es una acumulación de productos de corrosión. Puede ser necesario tomar muestras para análisis químico.</p>
        </div>
        <div class="subsection">
            <h4>10.2.2 Grietas</h4>
            <p>Las ubicaciones más susceptibles a la fisuración son las soldaduras y las zonas afectadas por el calor, incluyendo las soldaduras de filete, en ubicaciones distintas de las soldaduras de presión; áreas afectadas por el calor adyacentes a las soldaduras; y puntos de restricción o deformación excesiva. Otras áreas propensas a la fisuración son ubicaciones que contienen grietas, como tuberías con soldadura de enchufe, superficies de brida o juntas roscadas. Las ubicaciones que están sujetas a SCC, ataque de hidrógeno y fragilización cáustica o por aminas también requieren atención, al igual que los hilos expuestos de las juntas roscadas.</p>
            <p>La superficie inspeccionada debe estar limpia si se van a detectar grietas. La limpieza puede lograrse mediante cepillado con alambre, arenado o eliminación química de recubrimientos, depósitos y productos de corrosión. Después de una limpieza minuciosa, el área debe inspeccionarse visualmente para detectar cualquier indicación de grietas. (Debe considerarse la verificación por puntos con MT, PT o UT incluso si la inspección visual no reveló grietas.) Una iluminación adecuada y una buena lupa ayudarán a localizar dichas indicaciones. La inspección visual puede no diferenciar entre un rayón superficial y una grieta. Cualquier rayón aparente debe investigarse más a fondo por otros métodos. MT puede usarse en materiales magnéticos. PT y UT pueden usarse tanto en materiales no magnéticos como magnéticos. Solo deben usarse penetrantes líquidos con bajo o ningún contenido de cloruros para materiales austeníticos. Otros métodos, como UT de onda de corte o superficial, ET, ACFM, o remoción de muestras para inspección microscópica, pueden usarse. La profundidad de una grieta puede determinarse mediante END o mediante cincelado o molienda hasta alcanzar metal sano. Sin embargo, el inspector debe determinar si el área puede repararse adecuadamente antes de comenzar a moler.</p>
        </div>
        <div class="subsection">
            <h4>10.2.3 Superficies de Junta de Empaque de Bridas</h4>
            <p>Las superficies de asiento de junta de empaquetadura de las juntas bridadas que han sido abiertas deben inspeccionarse visualmente para detectar corrosión y defectos, como rayones, cortes y muescas que podrían causar fugas. Las superficies de junta deben verificarse para detectar alabeo colocando un borde recto a través del diámetro de la cara de la brida y rotándolo alrededor de un eje a través de la línea central de la brida. Las ranuras y anillos de las juntas de anillo deben verificarse para detectar defectos, incluyendo grietas en el fondo de las ranuras o en las superficies de sellado.</p>
            <p>Para servicios de alquilación de HF, consulte las recomendaciones específicas en API 751 sobre la inspección de corrosión de caras de brida.</p>
            <p>La UT de matriz en fase es un método potencial para inspeccionar la corrosión de caras de brida sin tener que desmontar las bridas.</p>
        </div>
        <div class="subsection">
            <h4>10.2.4 Válvulas</h4>
            <p>Normalmente, las válvulas utilizadas en los sistemas de tuberías de proceso tienen espesores de cuerpo algo mayores que las tuberías adyacentes. Por esta razón, un programa adecuado de monitoreo de corrosión de tuberías no necesita incluir rutinariamente el monitoreo de los espesores de cuerpo de válvula. Sin embargo, en circuitos de tuberías donde el monitoreo de la tasa de corrosión de la tubería indica corrosión o erosión severa, debe considerarse la medición rutinaria de los espesores de cuerpos de válvula seleccionados en el circuito.</p>
            <p>En servicios severos, como HF, lodos y servicios de catalizador fluidizado, las válvulas pueden necesitar ser desmontadas e inspeccionadas a intervalos especificados para garantizar que las partes internas tengan suficiente integridad para proporcionar un funcionamiento seguro y confiable.</p>
            <p>Cada vez que las válvulas se retiran del servicio para revisión o se reacondicionan para su reutilización, deben inspeccionarse y probarse según los requisitos de API 598. Cuando una válvula se desmonta para inspección, la junta de bonete debe reemplazarse. Cualquier parte de la válvula que no cumpla con los requisitos mínimos del estándar de válvula aplicable debe repararse o reemplazarse. Las válvulas usadas deben restaurarse para un funcionamiento seguro continuo. Consulte API 621 para el reacondicionamiento de válvulas.</p>
            <p>Cuando se midan los espesores del cuerpo, las mediciones deben incluir ubicaciones que eran inaccesibles antes del desmontaje, particularmente en áreas que muestran evidencia de corrosión o erosión. Los cuerpos de las válvulas que operan en servicios cíclicos de temperatura severa deben verificarse internamente para detectar grietas.</p>
            <p>Las válvulas de compuerta deben medirse para el espesor entre los asientos porque la turbulencia puede causar un deterioro grave. Esta es una ubicación particularmente débil debido a la acción de cuña del disco, o cuña, cuando la válvula está cerrada. Las superficies de asiento deben inspeccionarse visualmente para detectar defectos que podrían causar fugas. Las guías de cuña deben inspeccionarse para detectar corrosión y erosión, tanto en la cuña como en el cuerpo.</p>
            <p>El vástago y los hilos en el vástago y en el bonete deben examinarse para detectar corrosión. La conexión entre el vástago y la cuña debe inspeccionarse para garantizar que la cuña no se desprenderá del vástago durante la operación.</p>
            <p>Las válvulas de retención de columpio pueden inspeccionarse retirando la cubierta o el tapón. Las válvulas de retención a menudo fluctúan, haciendo que el eje y las bisagras sean los puntos principales de deterioro. El disco debe verificarse para una rotación libre, y la tuerca que sujeta cualquiera al brazo debe verificarse para seguridad y la presencia de un pasador de bloqueo, arandela de seguridad o soldadura de puntos. El brazo debe poder oscilar libremente, y el pasador de anclaje o el eje debe inspeccionarse para detectar desgaste. Las superficies de asiento tanto en el disco como en el cuerpo de la válvula pueden verificarse para detectar deterioro sintiéndolas con los dedos. Es extremadamente importante que la cubierta esté instalada en la orientación adecuada para que la cuña funcione correctamente. Consulte API 570 para conocer los requisitos para la inspección de válvulas de retención críticas.</p>
            <p>Las válvulas de cuarto de vuelta pueden inspeccionarse para la facilidad de operación y la capacidad de abrir y cerrar completamente por los operadores. Cuando se les da servicio, todas las superficies de asiento deben examinarse.</p>
            <p>Cuando los operadores informan que las válvulas tienen problemas de "operabilidad" (por ejemplo, fugas a través de la compuerta cuando está completamente cerrada), debe realizarse una revisión del potencial de que esa fuga cause o acelere el deterioro aguas abajo de la válvula. Esto ayuda a establecer la prioridad para el reemplazo de la válvula y la necesidad de una mayor inspección de las tuberías aguas abajo.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>10.3 Áreas o Componentes Específicos para Inspección</h4>
        <div class="subsection">
            <h4>10.3.1 Inspección de Soldaduras de Tubería</h4>
            <p>API 570 proporciona una discusión detallada de la inspección de soldaduras de tubería en servicio. Además, API 577 proporciona detalles sobre la inspección de soldadura de tuberías. El inspector debe estar familiarizado con el material contenido en estos documentos.</p>
        </div>
        <div class="subsection">
            <h4>10.3.2 Juntas</h4>
            <div class="subsection">
                <h4>10.3.2.1 General</h4>
                <p>Los métodos de inspección para tipos específicos de juntas se discuten en 10.3.2.2 a 10.3.2.5.</p>
            </div>
            <div class="subsection">
                <h4>10.3.2.2 Juntas Bridadas y Atornilladas</h4>
                <p>Los sitios deben tener un programa para garantizar que las bridas estén montadas correctamente. El montaje adecuado de cada brida en un sistema de tuberías es importante para la fiabilidad. El montaje adecuado incluye el uso de la junta de empaquetadura y el sujetador adecuados (material, tipo y tamaño), posicionamiento adecuado de la junta, y apriete adecuado de los sujetadores. El programa de garantía debe incluir procedimientos para la selección de juntas y sujetadores y el apriete de los sujetadores. ASME PCC-1 ofrece una buena guía sobre el montaje adecuado de las juntas bridadas atornilladas.</p>
                <p>El programa puede incorporar diversos grados de muestreo, inspección visual, pruebas de campo y pruebas destructivas de componentes. La selección de juntas generalmente puede confirmarse mediante el examen visual del color y las marcas en la superficie OD. Las juntas de espiral deben estar marcadas y codificadas por colores de acuerdo con ASME B16.20. Los sujetadores pueden examinarse visualmente para verificar las estampaciones o marcas adecuadas y probarse con PMI de acuerdo con API 578.</p>
                <p>El posicionamiento adecuado de la junta y el apriete dependen de la capacitación y la artesanía de los fontaneros que montan las bridas. El posicionamiento de la junta puede verificarse visualmente. Sin embargo, el apriete adecuado es difícil de verificar, pero cualquier deformación observada de la brida puede ser un signo de sujetadores apretados incorrectamente.</p>
                <p>Las juntas bridadas deben inspeccionarse visualmente para detectar grietas y pérdida de metal causada por corrosión y erosión cuando se abren. Consulte 10.2.2 para conocer los métodos de inspección de grietas. La inspección de las caras de junta se cubre en 10.2.3. Las juntas bridadas pueden inspeccionarse mientras están en servicio aplicando UT de elemento único o matriz en fase a las superficies externas para medir la corrosión de la cara de la brida y detectar grietas en la ranura del anillo.</p>
                <p>Los pernos de brida deben inspeccionarse para detectar estiramiento y corrosión. Donde se indique una carga excesiva de perno o donde las bridas estén deformadas, puede realizarse una inspección simple donde se gira una tuerca a lo largo de toda la longitud del espárrago. Si el espárrago está estirado, el paso de rosca habrá cambiado y la tuerca no girará libremente. La inspección implica verificar si se han utilizado pernos de la especificación adecuada, y puede implicar análisis químico o pruebas físicas para determinar el punto de fluencia y la resistencia última del material.</p>
                <p>Si las bridas están atornilladas demasiado apretadas, pueden doblarse hasta que los bordes exteriores de las bridas estén en contacto. Cuando esto ocurre, la presión sobre la junta puede ser insuficiente para garantizar una junta ajustada. La inspección visual de la junta revelará esta condición. Las bridas deformadas permanentemente deben reemplazarse o refrescarse.</p>
            </div>
            <div class="subsection">
                <h4>10.3.2.3 Juntas Soldadas</h4>
                <p>En algunos servicios, las soldaduras pueden corroerse preferentemente. El programa de inspección debe examinar una muestra de soldaduras si se sospecha corrosión en las soldaduras.</p>
                <p>Las juntas soldadas pueden estar sujetas a fugas causadas por grietas o por corrosión o erosión. Las grietas en las soldaduras de acero de baja aleación a menudo están asociadas con una dureza excesiva resultante de un control inadecuado del precalentamiento o PWHT. Por lo tanto, debe verificarse la dureza de las soldaduras de acero de baja aleación endurecibles al aire después del tratamiento térmico. Las soldaduras de acero al carbono en servicio de fisuración ambiental deben verificarse para detectar dureza.</p>
                <p>La corrosión puede ocurrir en forma de picaduras que han penetrado la soldadura o el metal adyacente afectado por el calor. Tanto las picaduras como los defectos de soldadura pueden detectarse mediante RT. Si se sospechan defectos graves y RT no es factible, el área afectada puede cincelarse o escariarse hasta alcanzar metal sano, y la ranura puede volver a soldarse.</p>
                <p>Las juntas soldadas en acero al carbono y acero carbono-molibdeno expuestas a temperaturas elevadas de 800 °F (426 °C) o más pueden estar sujetas a grafitización. Cuando se sospecha grafitización, debe tomarse una muestra de una junta soldada y examinarse metalúrgicamente para detectar evidencia de grafitización excesiva.</p>
            </div>
            <div class="subsection">
                <h4>10.3.2.4 Juntas Roscadas</h4>
                <p>Las juntas roscadas pueden tener fugas debido a un montaje inadecuado, hilos sueltos, corrosión, fabricación deficiente, roscado cruzado, grieta en la raíz de una rosca, o hilos que están sucios en el momento del montaje. La falta de lubricante de rosca o el uso del lubricante incorrecto también puede causar fugas. Si la fuga no puede detenerse apretando la junta, la junta debe desenroscarse y examinarse visualmente para determinar la causa de la fuga.</p>
                <p><strong>Precaución</strong>—Una junta roscada que tiene fugas no debe apretarse mientras el sistema está en servicio bajo presión a menos que haya una certeza razonable de que la fuga no es causada por una grieta en las roscas. Una grieta no detectada en la raíz de una rosca podría abrirse significativamente y causar una liberación de producto con consecuencias graves.</p>
            </div>
            <div class="subsection">
                <h4>10.3.2.5 Juntas Abrazaderas</h4>
                <p>Una junta abrazadera que depende de superficies mecanizadas para la estanqueidad puede tener fugas debido a suciedad, corrosión de las caras de acoplamiento, daño mecánico, o falla de la abrazadera para proporcionar una fuerza suficiente en las caras de acoplamiento para un contacto adecuado. Una junta abrazadera que depende de una junta de empaquetadura para la estanqueidad puede tener fugas debido a superficies de asiento de junta dañadas o sucias, o falla de la abrazadera para proporcionar una presión suficiente sobre la junta. Si apretar la abrazadera no detiene la fuga, la junta debe desmontarse e inspeccionarse visualmente para determinar la causa de la fuga. ASME PCC-2, Artículo 306, proporciona una guía útil sobre el diseño, limitaciones, fabricación, instalación, inspección y prueba de abrazaderas mecánicas.</p>
                <p>Al evaluar el uso de una abrazadera, debe considerarse la posibilidad de una separación completa de la línea y la consecuencia de la misma. Si es creíble, el diseño de una abrazadera debe incorporar restricción axial ya sea inherente al diseño de la abrazadera o a través de restricciones externas (por ejemplo, refuerzos). Además, el espesor de la pared de la tubería debe verificarse para garantizar un espesor de pared de tubería suficiente en los extremos de la abrazadera para resistir el colapso por las fuerzas de abrazamiento. Después de la instalación de la abrazadera, las inspecciones de la abrazadera deben incluir la verificación de que los refuerzos no se han comprometido.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>10.3.3 Desalineación</h4>
            <p>A menudo, la desalineación no es aparente hasta que la tubería se ha enfriado y se ha movido a su posición fría. El inspector debe notar, como en 10.1.3, indicaciones de desalineación mientras la tubería está fría. Observe especialmente la posición caliente y fría de los colgantes de resorte para determinar si los colgantes se están ajustando adecuadamente a los cambios en las posiciones de la tubería de caliente a fría. Esto es especialmente crítico para las líneas de gran diámetro, como las líneas de transferencia de catalizador en unidades FCC.</p>
            <p>Si se notó desalineación de la tubería durante la operación, debe determinarse y corregirse la causa. La desalineación generalmente es causada por las siguientes condiciones:</p>
            <ul>
                <li>provisión inadecuada para la expansión;</li>
                <li>anclajes o guías rotos o defectuosos;</li>
                <li>fricción excesiva en las monturas de deslizamiento, lo que indica falta de lubricación o necesidad de rodillos;</li>
                <li>rodillos rotos o rodillos que no pueden girar debido a corrosión o falta de lubricación;</li>
                <li>colgantes rotos o ajustados incorrectamente;</li>
                <li>colgantes que son demasiado cortos y por lo tanto limitan el movimiento o causan el levantamiento de la tubería;</li>
                <li>temperatura de operación excesiva;</li>
                <li>falla en retirar los bloques de resorte después de la construcción del sistema.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>10.3.4 Vibración</h4>
            <p>Donde se observó vibración o balanceo excesivo durante la operación, debe realizarse una inspección para detectar puntos de abrasión y desgaste externo y grietas en las soldaduras en ubicaciones que no pudieron inspeccionarse durante la operación. Deben seguirse los métodos de inspección visual descritos en 10.1.5. Esta inspección debe complementarse con métodos de END superficial según sea aplicable. Las condiciones que causan vibración o balanceo excesivo deben corregirse.</p>
        </div>
        <div class="subsection">
            <h4>10.3.5 Puntos Calientes</h4>
            <p>El refractario interno debe inspeccionarse visualmente para detectar desviación o falla completa en las ubicaciones de puntos calientes notados durante la operación en tubería revestida de refractario (ver 10.1.7). La causa del punto caliente debe corregirse. La pared de la tubería cerca del punto caliente debe inspeccionarse visualmente para detectar oxidación y la consiguiente descamación. Toda la escama debe removerse, y el metal sano restante debe examinarse para detectar grietas incipientes. El metal sano debe medirse para garantizar que queda un espesor suficiente para el servicio. El OD de las tuberías en servicio de alta temperatura—temperaturas del metal de aproximadamente 800 °F (427 °C) o más—debe medirse para verificar creep o deformación con el tiempo bajo esfuerzo. Para garantizar que no ocurra una fractura en servicio, la cantidad de creep permitida debe basarse en datos establecidos para la vida útil deseada.</p>
        </div>
        <div class="subsection">
            <h4>10.3.6 Juntas de Expansión</h4>
            <p>La inspección de las juntas de expansión implica exámenes tanto durante las paradas de mantenimiento como durante la operación. Mientras está en operación, deben registrarse los ajustes "calientes" y la posición de los soportes/guías de tubería conectados y la junta de expansión antes de la parada y poco después del arranque. La comparación de estas mediciones permite identificar cambios y evaluarlos posteriormente. Además, la junta y la tubería conectada deben examinarse visualmente para detectar alineación, distorsión, grietas y fugas. Debe realizarse una verificación antes del arranque para asegurarse de que todos los topes y otros dispositivos restrictivos se hayan retirado, y todos los componentes estén posicionados en el ajuste frío. Los soportes temporales pueden dejarse en su lugar si no interfieren con la expansión de la tubería en el ajuste caliente.</p>
            <p>El examen por termografía infrarroja de la junta en servicios de alta temperatura puede identificar puntos calientes y la temperatura general para determinar si tanto la junta está operando dentro de su temperatura de diseño y si cualquier manta de fibra interna y revestimiento asociado con la junta está funcionando según lo diseñado.</p>
            <p>Durante las paradas de mantenimiento, pueden realizarse actividades de inspección adicionales. Como se indicó anteriormente, deben registrarse la posición "fría" y los ajustes y compararse con las mediciones "frías" y "calientes" anteriores. Los cambios deben revisarse contra el diseño. La junta de expansión debe examinarse visualmente externamente y, si es posible, internamente. Cualquier revestimiento externo debe retirarse para facilitar la inspección. La tela en las juntas de tela debe examinarse para detectar desgarros, agujeros y flexibilidad. Los anillos de fijación metálicos y el atornillado deben examinarse para detectar distorsión y corrosión. Los fuelles metálicos pueden examinarse con examen de penetrante de tinte, ET y UT para detectar grietas. Las grietas pueden ocurrir en las convoluciones, en las soldaduras de filete de fijación de la tubería y en cualquier soldadura de fijación de revestimiento interno. El adelgazamiento y la picadura pueden ocurrir en algunos servicios, y la evidencia de estos debe investigarse durante las inspecciones internas.</p>
        </div>
        <div class="subsection">
            <h4>10.3.7 Mangueras Flexibles</h4>
            <p>Las mangueras flexibles utilizadas en servicios de hidrocarburos u otros peligrosos deben identificarse individualmente e incluir limitaciones de servicio (químico) apropiadas y condiciones de operación aceptables. Generalmente, hay dos propósitos para las mangueras flexibles: una instalada en lugar de tubería rígida y la otra utilizada para fines a corto plazo. El propósito de la manguera flexible debe tenerse en cuenta al determinar si la manguera flexible debe inspeccionarse y cómo debe inspeccionarse.</p>
            <p>Las mangueras flexibles utilizadas en instalaciones permanentes deben inspeccionarse periódicamente con la tubería rígida a la que están conectadas o con más frecuencia si lo determina necesario el propietario-operador. Las mangueras flexibles utilizadas en aplicaciones temporales deben limpiarse de material de proceso, limpiarse y almacenarse adecuadamente (según las instrucciones del fabricante cuando estén disponibles) cuando no estén en uso para minimizar tanto el daño mecánico como la exposición a condiciones ambientales y químicas que podrían comprometer uno o más componentes del conjunto de la manguera.</p>
            <p>Cada manguera flexible (nueva y usada) debe inspeccionarse antes de ser puesta en servicio. Esta inspección debe incluir una verificación de su servicio previsto (químicos del proceso y clasificación de temperatura/presión) y condición general (buscando daño mecánico en las conexiones, accesorios, bridas, etc.) y que se haya realizado la inspección periódica.</p>
            <p>Debe realizarse una inspección completa de la manguera periódicamente. Esta inspección debe incluir lo siguiente:</p>
            <ul>
                <li>Asegurarse de que la manguera esté identificada individualmente (etiqueta de ID) y que los registros contengan condiciones de diseño apropiadas y limitaciones de servicio o compatibilidad.</li>
                <li>Verificar el diámetro, la longitud y los accesorios finales para conjuntos individuales y comparar con las etiquetas de ID y documentación existentes.</li>
                <li>Verificar que las clasificaciones de presión de la manguera y los accesorios estén dentro de los parámetros de diseño para la prueba de presión de prueba hidrostática (generalmente 1.5 veces la MAWP) y verificar la condición de los accesorios (condición de la rosca y condición de la superficie de la junta o sello para proporcionar un sello adecuado). Los accesorios también deben examinarse para detectar daño mecánico por apriete excesivo de las roscas o par excesivo del conjunto atornillado, causando rotación de la cara de la brida. El punto de conexión de la manguera al accesorio también debe inspeccionarse para detectar abrazaderas o accesorios de compresión sueltos o dañados.</li>
                <li>Realizar una inspección visual del revestimiento de la manguera para detectar cortes, muescas, brechas, deshilachado u otros defectos donde el refuerzo esté expuesto. El conjunto de la manguera también debe inspeccionarse para detectar daño por abrasión excesiva del revestimiento/recubrimiento exterior y daño por calor (fragilidad y/o agrietamiento).</li>
                <li>Inspeccionar para detectar daño por flexión excesiva (retorcimiento), que puede producir un aplastamiento/achatamiento parcial de la manguera, pellizcado o tensión excesiva en las conexiones finales. Verificar los radios mínimos de flexión instalados con las recomendaciones del fabricante.</li>
                <li>En la medida de lo posible, examinar la condición interna de la manguera, buscando signos de erosión, agrietamiento o ataque químico/daño de un revestimiento no metálico (hinchazón, desgarros, abrasión/aspereza, etc.).</li>
                <li>Las inspecciones adicionales pueden incluir lo siguiente:
                    <ul>
                        <li>inspección visual del tubo de la manguera con un boroscopio o videoprobe para la condición general del revestimiento interior (buscando ampollas, grietas u otros defectos);</li>
                        <li>para mangueras de fluoropolímero y termoplástico equipadas con una unión interna, realizar una prueba para garantizar la continuidad eléctrica entre los accesorios finales;</li>
                        <li>si el fluido de transferencia dentro de la manguera no es conductor, entonces realizar una prueba de conductividad eléctrica para garantizar la puesta a tierra/conexión de la manguera;</li>
                        <li>verificar la composición de aleación apropiada (PMI) según los registros del fabricante y del equipo; tenga en cuenta que esto puede ser solo una inspección inicial a menos que los accesorios de la manguera u otros componentes puedan cambiarse o modificarse;</li>
                        <li>la inspección en corriente utilizando examen de termografía infrarroja puede ayudar a identificar el daño a uno o más de los componentes/capas de la manguera;</li>
                        <li>los accesorios pueden examinarse con métodos de penetrante de tinte, ET y/o UT para identificar grietas u otros daños;</li>
                        <li>realizar una prueba de presión hidrostática de acuerdo con las especificaciones de diseño recomendadas por el fabricante (limitado por la clasificación de presión más baja del componente incluido);</li>
                        <li>realizar las actividades de inspección y prueba recomendadas por el fabricante del equipo original.</li>
                    </ul>
                </li>
            </ul>
            <p>Dado que las inspecciones efectivas de las mangueras de proceso son difíciles, algunos propietarios-operadores estampan y rastrean las mangueras de proceso, las prueban periódicamente a presión y requieren su reemplazo después de una cantidad establecida de tiempo de servicio basado en el riesgo y el tipo de manguera. Además, se pueden usar listas de verificación de inspección visual para problemas que deben verificarse periódicamente para verificar la integridad de la manguera.</p>
        </div>
    </div>
    <div class="subsection">
    <h4>10.4 Mediciones de Espesor</h4>
    <div class="subsection">
        <h4>10.4.1 Examen Ultrasónico</h4>
        <div class="subsection">
            <h4>10.4.1.1 General</h4>
            <p>Tres factores considerados al diseñar equipos destinados a contener la presión y las fuerzas de carga son la forma, el material de construcción y el espesor.</p>
            <p>De los tres factores principales, el espesor puede cambiar con el tiempo debido a la corrosión. La industria depende predominantemente del espesor restante del componente después de que el equipo ha sido diseñado, fabricado e instalado para determinar si es apto para continuar en servicio. Una vez que el equipo está en operación rutinaria, las evaluaciones de espesor se convierten en la práctica más común para inspeccionar el adelgazamiento. Sin embargo, la identificación de mecanismos de daño creíbles también puede incluirse (por ejemplo, grietas, fragilización, distorsión, etc.). Medir el espesor del equipo en varias ubicaciones designadas (es decir, PML) es la práctica de evaluación de condición más común realizada en tuberías.</p>
            <p>Los especialistas en corrosión de la industria han identificado mecanismos de daño, descritos en API 571, que resultan en pérdida de espesor de metal. Después de que se han identificado los mecanismos de daño creíbles, se determinan las ubicaciones susceptibles (por ejemplo, PML) y se mide y registra el espesor de la pared. Esto ocurre de manera rutinaria basándose en el riesgo y/o las tasas de corrosión asignadas/establecidas.</p>
            <p>Numerosos factores se consideran al seleccionar las mejores herramientas para medir el espesor, incluyendo lo siguiente:</p>
            <ul>
                <li>forma del componente;</li>
                <li>material de construcción;</li>
                <li>temperatura durante la medición;</li>
                <li>daño previsto;</li>
                <li>recubrimientos en el ID y/o OD;</li>
                <li>acceso;</li>
                <li>recursos disponibles para realizar las mediciones.</li>
            </ul>
            <p>La medición del espesor puede realizarse utilizando dispositivos de audio, mecánicos, sónicos, de radiación y electromagnéticos.</p>
            <p>Los dispositivos sónicos utilizan ondas sonoras y electrónica para medir el espesor de la pared. La frecuencia de las ondas sonoras utilizadas se considera "ultrasónica" lo que significa mayor a 20K ciclos por segundo; por lo tanto, la terminología "técnica de examen ultrasónico".</p>
            <p>La radiación se utiliza como medio de energía para penetrar el metal. La cantidad de radiación que penetra el metal se mide exponiendo película o placas de imagen. El uso de radiación para crear una imagen interpretable se denomina "técnica de examen radiográfico". La técnica de RT más común se llama "radiografía de perfil". La medición del espesor de la pared y la detección de patrones de pérdida de pared se realizan con mayor frecuencia utilizando RT de perfil. Además, la "radiografía de densidad" también se utiliza para buscar áreas de corrosión localizada y picaduras de la superficie ID de un componente.</p>
            <p>El espesor de un material puede expresarse de muchas maneras. Algunos ejemplos incluyen lo siguiente:</p>
            <ul>
                <li>Espesor Nominal—El espesor del material de construcción suministrado, originalmente designado por los criterios de diseño, pero generalmente sobredimensionado debido al proceso de fabricación y sus tolerancias (o según lo disponible en los suministros del taller).</li>
                <li>Espesor Mínimo Restante de Pared—Medición de espesor en la ubicación más delgada.</li>
                <li>Espesor Mínimo Requerido de Pared—El espesor sin tolerancia de corrosión para cada componente de un sistema de tuberías basado en los cálculos del código de diseño apropiado y el esfuerzo admisible del código que consideran presión, temperatura, cargas mecánicas y estructurales.</li>
                <li>Espesor Promedio de Pared—Un número de mediciones de espesor recopiladas en un área pequeña única (por ejemplo, un punto de examen de 2" de diámetro) y utilizadas para calcular un espesor promedio en el PML.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>10.4.1.2 Instrumentos de Espesor</h4>
            <div class="subsection">
                <h4>10.4.1.2.1 General</h4>
                <p>Los instrumentos UT son el medio principal para obtener mediciones de espesor en el equipo. RT y RT en tiempo real también pueden usarse de manera limitada para determinar el espesor de los componentes de tubería. Métodos como la perforación de profundidad (por ejemplo, orificios centinela o testigos), el uso de botones de corrosión y el uso de orificios de prueba pueden aplicarse en algunas ubicaciones especiales. Sin embargo, estos métodos han sido reemplazados generalmente por métodos END de medición de espesor, como las mediciones de espesor ultrasónicas.</p>
                <p>Los fabricantes de equipos UT han diseñado instrumentos específicamente para mediciones de espesor y se denominan instrumentos ultrasónicos de espesor y en algunos casos, la palabra "instrumento" se sustituye por la palabra "calibrador". Hay tres tipos de instrumentos digitales ultrasónicos de espesor: lectura numérica de espesor, barrido A con lectura numérica de espesor, y detectores de defectos. Las principales ventajas de los instrumentos UT son las siguientes:</p>
                <ul>
                    <li>La seguridad del personal se mejora debido al tamaño compacto y peso mínimo. Esto es ventajoso al escalar, durante el acceso con cuerdas y en casos donde se requiere esfuerzo físico para obtener acceso.</li>
                    <li>Características que aumentan la precisión de las mediciones cuando se utilizan en tuberías con recubrimientos, tuberías que operan a temperaturas elevadas y tuberías con superficies reflectantes irregulares debido a la corrosión.</li>
                    <li>La capacidad de conectarse a programas de software utilizados para gestionar programas de integridad mecánica.</li>
                </ul>
                <p>Los instrumentos UT son simples de operar y económicos de comprar en comparación con los instrumentos ultrasónicos más sofisticados para la detección, dimensionamiento y caracterización de defectos. Sin embargo, el grado de capacitación y experiencia requerido para garantizar que se obtengan mediciones verdaderas y precisas puede ser considerable y no debe subestimarse. Los propietarios-operadores deben garantizar que se realice una capacitación, examen y certificación adecuados del personal, como se describe en ASNT SNT-TC-1A o estándares internacionales equivalentes. El personal que utiliza estos dispositivos debe tener capacitación sobre el uso adecuado de este equipo, incluyendo teoría ultrasónica, mediciones de espesor a alta temperatura, evaluación de corrosión, anomalías de pared media, el potencial de "duplicación", y operaciones del equipo.</p>
            </div>
            <div class="subsection">
                <h4>10.4.1.2.2 Lectura Numérica de Espesor</h4>
                <p>Los instrumentos de lectura de espesor son pequeños calibradores de espesor de pulso-eco de mano con solo una lectura numérica. Estos instrumentos están típicamente equipados con transductores duales de lanzamiento-recepción. Los instrumentos tienen un cero de sonda y una configuración de velocidad para la calibración en varios materiales. El rango para estos instrumentos suele ser de 0.040 pulg. a 20.000 pulg., dependiendo de la configuración. Los instrumentos operan midiendo el tiempo entre el pulso inicial (IP) y el primer eco.</p>
                <p>El uso de instrumentos de solo lectura numérica de espesor debe considerarse cuidadosamente ya que han sido mal utilizados y aplicados incorrectamente dentro de la industria y pueden llevar a resultados erróneos e inexactos.</p>
            </div>
            <div class="subsection">
                <h4>10.4.1.2.3 Barrido A con Lectura Numérica de Espesor</h4>
                <p>Los instrumentos de barrido A con lectura numérica de espesor se dividen en dos grupos: medición de espesor (solo) y detectores de defectos.</p>
                <p>Los instrumentos de medición de espesor de barrido A incorporan una pantalla numérica y una pantalla electrónica para ver una presentación de barrido A. Las pantallas suelen ser pantallas de cristal líquido o diodos emisores de luz. Algunos de estos instrumentos pueden mostrar tanto barridos A como B.</p>
                <p>La ventaja de una pantalla de barrido A sobre una pantalla numérica es que permite al examinador ver la forma de onda ultrasónica para verificar que la señal adecuada está siendo medida por el instrumento. Esto es extremadamente importante en el caso de la duplicación y para evaluar una indicación laminar versus el daño por corrosión.</p>
                <p>La pantalla de barrido A ayuda al examinador a distinguir entre una superficie corroída y una anomalía de pared media (por ejemplo, inclusión laminar). La señal reflejada de una inclusión laminar surgirá recta desde la línea base en un punto anterior a la señal de pared posterior reflejada que indica la profundidad. A menudo, mientras se escanea un área corroída, la señal de corrosión romperá la línea base en la señal de pared posterior y la señal de corrosión se moverá hacia la señal IP hasta que se alcance el espesor mínimo. Este movimiento se debe a que el sonido se refleja desde los bordes de la corrosión hasta que se refleja el área más delgada. Este movimiento de la señal corroída a menudo se denomina "caminar la señal".</p>
                <p>Los instrumentos de barrido A típicamente pueden operar en uno de dos modos de sincronización, el modo de sincronización IP o el modo de eco múltiple. El modo de sincronización IP mide el tiempo de tránsito desde el IP hasta el primer eco. El modo de eco múltiple permite al examinador configurar el instrumento para medir entre un conjunto de ecos sucesivos múltiples en lugar del IP primero para establecer el espesor.</p>
                <p>El modo de eco múltiple se utiliza para medir el espesor restante en especímenes con superficies recubiertas sin incluir el espesor del recubrimiento. Esto se logra midiendo el tiempo de viaje entre dos señales sucesivas de pared posterior para obtener el espesor del material y no incluir el tiempo de viaje debido al espesor del recubrimiento. Cuando se utiliza este modo, el examinador debe prestar cuidadosa atención a la pantalla de barrido A para garantizar que se estén midiendo las señales adecuadas.</p>
                <p>La evaluación de corrosión debe realizarse utilizando el modo de sincronización IP. La energía reflejada en superficies rugosas y corroídas o picadas a menudo solo es lo suficientemente fuerte como para producir una sola señal. El instrumento indicará "0.000" cuando esté en modo de eco múltiple porque requiere dos ecos para medir.</p>
                <p>En los casos en que un componente está pintado en la ubicación de medición y está corroído en el lado de reflexión (lo que puede causar una falta de señal suficiente de eco a eco y por lo tanto error de medición), la pintura debe eliminarse para mediciones de espesor precisas.</p>
                <p>Los calibradores de espesor UT y ciertos transductores pueden medir el espesor de la pintura y el espesor de la pared simultáneamente.</p>
                <p>Estos instrumentos utilizan principalmente una unidad de búsqueda de lanzamiento-recepción dual de 0.250 pulg. a 0.500 pulg. de diámetro, 2.0 MHz a 5.0 MHz; sin embargo, algunos instrumentos tienen opciones para usar elementos únicos con retardo o incluso EMAT.</p>
            </div>
            <div class="subsection">
                <h4>10.4.1.2.4 Detectores de Defectos Ultrasónicos con Pantalla Numérica</h4>
                <p>Los detectores de defectos ultrasónicos con pantalla numérica son similares a los calibradores de espesor de barrido A en que tienen tanto una pantalla de barrido A como una pantalla numérica y pueden usarse con transductores de elemento único o dual. Estos instrumentos son más avanzados que los otros y típicamente tienen más opciones y características, incluyendo la capacidad para exámenes de haz angular. Sin embargo, los calibradores de espesor UT modernos utilizan características que mejoran la precisión de la medición de espesor, lo que típicamente resulta en una precisión de medición mejorada sobre los detectores de defectos.</p>
                <p>Los detectores de defectos con pantallas numéricas pueden operar en el modo de sincronización IP o de eco múltiple.</p>
                <p>Otras aplicaciones que requieren el uso de detectores de defectos ultrasónicos son los exámenes de calidad de soldadura, el dimensionamiento avanzado de defectos y la detección de ataque de hidrógeno a alta temperatura. Los exámenes de calidad de soldadura (haz angular) utilizan cuñas de transductor especialmente diseñadas para generar ondas de corte a 45°, 60° o 70° para detectar, evaluar y dimensionar defectos. Los defectos que pueden detectarse son grietas, escoria, falta de fusión, penetración incompleta y porosidad.</p>
                <p>Las técnicas avanzadas de dimensionamiento de grietas para medir la extensión a través de la pared de las grietas incluyen el uso de difracción de punta, ondas L de alto ángulo, unidades de búsqueda 30-70-70, y unidades de búsqueda bimodales. Todas las técnicas avanzadas requieren horas adicionales de capacitación en el aula y experiencia de campo. El examinador también debe pasar un examen de demostración basado en el rendimiento. Otras tecnologías UT avanzadas disponibles para detectar, evaluar y dimensionar defectos incluyen difracción de tiempo de vuelo y matriz en fase.</p>
                <p>El ataque de hidrógeno a alta temperatura puede detectarse y evaluarse utilizando otras técnicas ultrasónicas altamente especializadas como se describe en API 586.</p>
            </div>
            <div class="subsection">
                <h4>10.4.1.2.5 Algunos Factores que Afectan la Precisión de la Medición</h4>
                <p>Las velocidades ultrasónicas son diferentes en diferentes materiales. Es importante utilizar la velocidad adecuada para obtener mediciones de espesor precisas. Un instrumento ultrasónico determina el espesor mediante la siguiente ecuación:</p>
                <p>Espesor = 2⋅(tiempo de viaje de sonido ida y vuelta)⋅(velocidad para el material)</p>
                <p>El tiempo de viaje de sonido ida y vuelta se mide desde la generación del pulso hasta el momento en que las ondas sonoras de la pared posterior u otro reflector se reciben. La velocidad incorrecta puede aumentar o disminuir el espesor ultrasónico medido.</p>
                <p>Las inclusiones laminares también pueden causar lecturas erróneas. Debido a que las inclusiones laminares crean una interfaz plana perpendicular a la dirección del viaje de la onda, pueden reflejar el sonido de vuelta al transductor. Esta señal reflejada puede interpretarse erróneamente como la señal de pared posterior y calculará una lectura más delgada.</p>
                <p>Si la superficie ID es extremadamente rugosa o se encuentra una picadura de forma irregular, a menudo la única indicación que el examinador puede encontrar es una señal de pared posterior de amplitud más baja o una pérdida completa de la señal de pared posterior. Esta reducción o pérdida se debe a la dispersión del sonido. A su vez, no hay suficiente energía ultrasónica recibida por el instrumento para producir una señal por encima del nivel de ruido. En casos como estos, el examinador debe aumentar la configuración de ganancia en el instrumento hasta que el área donde ocurrió la señal disminuida o pérdida de señal pueda evaluarse completamente en la medida en que el examinador pueda determinar un espesor mínimo.</p>
                <p>La duplicación ocurre al medir materiales delgados generalmente menores a 0.100 pulg. (2.5 mm). La duplicación resulta en una lectura mucho más gruesa que el espesor real de la pared. La señal de pared posterior reflejada está enmascarada por el ruido del IP, y el instrumento lee la segunda o tercera reflexión. Otra ocurrencia de duplicación puede ser causada en materiales extremadamente delgados por debajo de la capacidad del instrumento (es decir, del transductor) para separar las señales adecuadamente para la medición adecuada de la función de compuerta. Esto resulta en que el sonido se refleja en el material produciendo una distancia de salto adicional antes de ser recibido, duplicando así el tiempo de viaje o distancia de sonido y a su vez duplicando el espesor medido. Es igualmente importante cuando se utiliza el modo eco a eco debido a los ecos de onda de corte convertidos en modo que ocurren entre los ecos de pared posterior. La compuerta de medición puede bloquearse en la señal convertida en modo de onda de corte, causando una medición incorrecta del espesor de la pared, como se muestra en la Figura 29.</p>
                
                <div class="figure-container">
                <img src="images/api574_figure_29.png" class="figure-image">
                <p class="figure-caption">Figura 29—Caso de Doblamiento debido al Eco de Onda de Corte Convertido por Modo que Ocurre entre los Ecos de Pared Posterior</p>
                </div>

                <p>Cada unidad de búsqueda debe probarse para determinar el espesor medible mínimo. Los pasos de muestra son los siguientes:</p>
                <ul>
                    <li>medir el espesor de un conjunto de galgas comenzando en 0.100 pulg. (2.5 mm);</li>
                    <li>medir 0.090 pulg. (2.3 mm), 0.080 pulg. (2.0 mm), y así sucesivamente, restando 0.010 pulg. (0.25 mm) cada lectura hasta que el espesor medido sea dos veces o más que el espesor real;</li>
                    <li>tomar el espesor donde ocurrió la duplicación y multiplicar por 1.5 veces, y este debería ser el espesor medible mínimo para esa unidad de búsqueda.</li>
                </ul>
            </div>
        </div>
        <div class="subsection">
            <h4>10.4.1.3 Evaluaciones de Corrosión</h4>
            <p>Las mejores unidades de búsqueda para realizar una evaluación de corrosión son los transductores duales. Los elementos piezoeléctricos en estas unidades de búsqueda se colocan en ángulos ligeros para la reflexión directa del sonido transmitido hacia el transductor receptor. Esta inclinación de los transductores proporciona cierto enfoque pseudo del haz de sonido. Las unidades de búsqueda duales proporcionan una mejor detección de superficie cercana que las unidades de búsqueda convencionales de elemento único.</p>
            <p>La frecuencia para la mayoría de las unidades de búsqueda varía de 2 MHz a 5 MHz y el diámetro de 0.25 pulg. a 0.500 pulg. (6.3 mm a 12.7 mm). Las aplicaciones especiales como materiales gruesos [> 6.00 pulg. (152 mm)], formas de producto como fundiciones, o materiales de grano grueso como aceros de alta aleación o alto níquel pueden requerir frecuencias más bajas (1 MHz) y/o unidades de búsqueda de diámetro más grande.</p>
            <p>Las unidades de búsqueda utilizadas para la detección o evaluación de corrosión deben tener una buena superficie de desgaste en la cara de la unidad de búsqueda para permitir al examinador escanear áreas corroídas para la lectura mínima y minimizar el desgaste en la unidad de búsqueda. Al realizar la detección o evaluación de corrosión, el examinador debe escanear el área de interés con la unidad de búsqueda en lugar de realizar mediciones puntuales individuales. El escaneo proporciona una mayor oportunidad de detectar indicaciones de diámetro pequeño (menos de la mitad del diámetro de la unidad de búsqueda). El examinador no debe escanear más rápido que la tasa de actualización de las pantallas de barrido A para evitar perder una indicación pequeña. Esto es típicamente 6 pulg./s (152 mm/s) o menos. Además, el examinador debe superponer cada camino de escaneo en un mínimo del 10 % del diámetro del transductor.</p>
        </div>
        <div class="subsection">
            <h4>10.4.1.4 Mediciones de Espesor a Alta Temperatura</h4>
            <p>La unidad de búsqueda es el componente más importante del equipo de medición de espesor para mediciones a alta temperatura. Algunas unidades de búsqueda de alta temperatura están diseñadas para soportar temperaturas de hasta 1000 °F (538 °C) durante períodos de tiempo muy breves.</p>
            <p>Están disponibles materiales de línea de retardo especiales y transductores enfriados por agua que permiten el uso de instrumentos de pulso-eco a temperaturas de hasta 1100 °F (593 °C). La mayoría de las unidades de búsqueda duales de alta temperatura se fabrican con el material de retardo incorporado en la carcasa, mientras que la mayoría de las unidades de búsqueda de elemento único vienen con retardos reemplazables.</p>
            <p>El ciclo de trabajo es otro factor crítico para las unidades de búsqueda de alta temperatura. La unidad de búsqueda debe permitirse enfriarse entre las mediciones de espesor. Esto es especialmente crítico en el caso de las unidades de búsqueda duales. Aunque estas unidades de búsqueda se fabrican para soportar altas temperaturas, el uso continuo a temperaturas elevadas hará que estas unidades comiencen a deteriorarse. Como regla general, la unidad de búsqueda debe permitirse enfriarse entre las mediciones de espesor donde el examinador pueda sostenerla cómodamente con la mano desnuda.</p>
            <p>El segundo elemento más crítico para realizar mediciones de espesor a alta temperatura es el acoplante ultrasónico. Hay varios acoplantes de alta temperatura disponibles comercialmente. Las características deseables de un acoplante deben ser una con buenas propiedades acústicas, buena estabilidad química a temperaturas elevadas, la capacidad de soportar la descomposición, la capacidad de permanecer en superficies verticales durante 10 segundos o más, alta temperatura de ebullición, no inflamable y no tóxico.</p>
            <p>La temperatura de la pieza de prueba también afecta la medición de espesor UT. A medida que la temperatura de la pieza de prueba aumenta por encima de la temperatura ambiente, la velocidad del material disminuye, aumentando así el espesor ultrasónico medido en un factor de 1 % / 100 °F (1 %/ 55 °C).</p>
            <p>Algunos calibradores de espesor UT modernos tienen una característica que proporciona compensación automática de temperatura. La temperatura de la superficie a examinar se mide con un pirómetro. El operador introduce la temperatura de la superficie que se está examinando. El calibrador de espesor UT compensa automáticamente el cambio en velocidad debido a la temperatura elevada (consulte la Figura 30 para ver un ejemplo). El inspector debe tener cuidado al utilizar dichos calibradores. Los procedimientos de espesor UT deben describir claramente cómo se recopilan los datos de espesor cuando la temperatura del metal es mayor que una temperatura definida. El inspector debe comprender si y cuándo el Sistema de Gestión de Datos de Inspección (IDMS) que almacenará y analizará los datos de espesor también puede usarse para compensar las diferencias de temperatura.</p>
            <p>El examinador debe usar el EPP adecuado al realizar mediciones de espesor a alta temperatura para protegerse del calor radiado.</p>
            <div class="figure-container">
            <img src="images/api574_figure_30.png" class="figure-image">
            <p class="figure-caption">Figura 30—Ejemplo de Pantalla de Medidor de Espesor UT con Compensación Automática de Temperatura</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>10.4.2 RT</h4>
        <p>Las técnicas radiográficas gamma proporcionan mediciones precisas de la pared de la tubería y permiten la inspección de los internos de algunos equipos. Las funciones principales de este método son detectar la pérdida de metal y verificar la calidad de la soldadura. RT tiene las siguientes ventajas:</p>
        <ul>
            <li>el aislamiento de la tubería puede permanecer intacto;</li>
            <li>la temperatura del metal de la línea tiene poca incidencia en la calidad de la radiografía, siempre que el casete de la película pueda protegerse del calor de la tubería;</li>
            <li>las radiografías de pequeñas conexiones de tubería, como niples y acoplamientos, pueden examinarse para el contacto de rosca, corrosión y calidad de soldadura;</li>
            <li>la película proporciona un registro visual permanente de la condición de la tubería en el momento de la radiografía;</li>
            <li>la posición de las partes internas de las válvulas (compuertas caídas) puede observarse;</li>
            <li>el equipo radiográfico es fácil de maniobrar en la refinería o planta química;</li>
            <li>la RT de isótopos no es una fuente de ignición en presencia de hidrocarburos;</li>
            <li>la picadura y otra corrosión no uniforme pueden identificarse;</li>
            <li>proporciona una vista de un área grande.</li>
        </ul>
        <p>Los rayos gamma que viajan a través de la pared de la tubería entre los radios exterior e interior de la tubería deben penetrar metal que es aproximadamente cuatro veces el espesor de la pared de la tubería. La mayoría de los rayos son absorbidos por el metal, dejando un área no expuesta en la película. Esta área que es más clara en la película oscurecida representa una imagen proyectada ligeramente agrandada de la pared de la tubería. La imagen puede medirse, y un cálculo correctivo puede establecer el espesor de la pared de la tubería. Cualquier depósito o escama dentro de la tubería generalmente aparece en la película revelada como claramente separado de la pared de la tubería. La picadura también puede ser visible en la película.</p>
        <p>La radiografía computarizada puede utilizarse en lugar de RT con película, reduciendo los tiempos de exposición y produciendo una imagen digital que se archiva y transmite electrónicamente fácilmente.</p>
        <p>Debido a que la RT de isótopos le da al inspector una "mirada interna" a la tubería, el costo algo más alto de esta inspección puede compensarse con creces con los datos obtenidos.</p>
        <p>La radiación ionizante es el principio base en la RT industrial, y las fuentes de radiación más comunes son el iridio y el cobalto. Hay problemas de seguridad significativos que rodean el uso de radiación ionizante de modo que el personal que realiza RT debe estar capacitado y certificado como se identifica en API 570 y ASME BPVC, Sección V, más cualquier requisito jurisdiccional. Deben establecerse e implementarse procedimientos correctos para garantizar la seguridad de los examinadores y todo el demás personal de la planta.</p>
        <p>La precisión de la medición de espesor RT depende algo de las habilidades del técnico radiográfico que expone las películas y la persona que las revisa. Al usar RT para este propósito, es aconsejable desarrollar una práctica escrita que defina el(los) método(s) de colocación de la película, exposición y lectura o interpretación de las mismas. Las tomas de prueba radiográfica deben realizarse en tuberías, que pueden examinarse con mediciones de espesor UT para determinar los límites de precisión de la RT una vez que se ha revelado. Además, una pieza de prueba de espesor conocido puede colocarse en el mismo plano que la radiografía, lo que ayudará a definir los factores de magnificación radiográfica. Múltiples lecturas de espesor con calibrador de la toma mejorarán la precisión.</p>
        <p>Cuando se realiza la inspección radiográfica, los sistemas de control de la unidad de proceso, que usan isótopos en indicadores y controles de nivel de líquido, ocasionalmente dan indicaciones erróneas en los paneles de control. Los detectores de llama utilizados para indicar un fuego de horno o caldera también pueden verse afectados. Los operadores de la unidad deben ser advertidos de esta posibilidad.</p>
        <p>La RT de perfil es particularmente útil para identificar la corrosión interna y externa de pequeñas conexiones, como líneas de purga y conexiones de manómetro, que son especialmente susceptibles a la corrosión externa de CUI porque es difícil obtener un buen sello en el aislamiento.</p>
        
        <p>Las radiografías de tuberías se muestran en la Figura 31, Figura 32 y Figura 33.</p>
        <div class="figure-container">
            <img src="images/api574_figure_31.png" class="figure-image">
            <p class="figure-caption">Figura 31—Radiografía de una Línea de Reformador Catalítico</p>
        </div>

        <div class="figure-container">
            <img src="images/api574_figure_32.png" class="figure-image">
            <p class="figure-caption">Figura 32—Radiografía de Tubería Corroída con Superficie Interna Recubierta de Incrustación de Sulfuro de Hierro</p>
        </div> 

        <div class="figure-container">
            <img src="images/api574_figure_33.png" class="figure-image">
            <p class="figure-caption">Figura 33—Esquema y Radiografía de Corrosión en Tramo Ciego (Deadleg)</p>
        </div> 
    </div>
    <div class="subsection">
        <h4>10.4.3 Mediciones de Espesor con Calibrador</h4>
        <p>Cuando la tubería se abre, el espesor de la tubería y los accesorios puede medirse detrás de la brida utilizando calibradores de transferencia o indicadores. El espesor de la tubería inaccesible que no puede medirse mediante instrumentos radiográficos o ultrasónicos durante la operación puede medirse con estos instrumentos durante una parada. Si es necesario, el espesor de los cuerpos y bonetes de válvulas y los accesorios de tubería puede medirse utilizando calibradores de transferencia o indicadores que tengan patas especiales diseñadas para alcanzar áreas normalmente inaccesibles.</p>
    </div>
</div>
    <div class="subsection">
        <h4>10.5 Determinación del Espesor Mínimo Requerido</h4>
        <div class="subsection">
            <h4>10.5.1 Tubería</h4>
            <div class="subsection">
                <h4>10.5.1.1 General</h4>
                <p>ASME B31.3 contiene fórmulas y datos para determinar el espesor mínimo requerido de la pared para nuevas tuberías sin corrosión. La especificación relaciona el espesor, el diámetro, la eficiencia de la junta y el esfuerzo admisible con la presión máxima de trabajo segura. Al especificar tubería para la instalación original, ASME B31.3 requiere que se considere lo siguiente cuando se determine el espesor de la tubería:</p>
                <ul>
                    <li>tolerancia de corrosión;</li>
                    <li>roscas y otras tolerancias mecánicas (debe considerarse la corrosión por grietas y la pérdida de espesor debido al corte de las roscas);</li>
                    <li>esfuerzos causados por carga mecánica, presión de oleada hidráulica, expansión térmica y otras condiciones;</li>
                    <li>refuerzo de aberturas.</li>
                </ul>
                <p>Casi siempre se requiere un espesor adicional cuando se consideran los ítems a) a d). Normalmente, el ingeniero seleccionará la programación de la tubería que acomode el espesor requerido más la tolerancia de fabricación permitida por la especificación del material de la tubería.</p>
                <p>A menudo se necesita un espesor adicional cerca de las conexiones de ramificación. Este espesor adicional generalmente se proporciona mediante uno de los siguientes:</p>
                <ul>
                    <li>una tee de soldadura;</li>
                    <li>una silla;</li>
                    <li>una salida de ramificación integralmente reforzada (por ejemplo, un weldolet); o</li>
                    <li>el espesor del cabezal y/o la tubería de recorrido es mayor que el requerido por las condiciones de diseño.</li>
                </ul>
                <p><strong>Precaución</strong>—Debe tenerse precaución al calcular el espesor de retiro para tuberías con conexiones de ramificación reforzadas según el ítem d). Estos cálculos deben ser realizados por un ingeniero de tuberías.</p>
                <p>Para tubería en servicio sujeta a daño localizado (por ejemplo, picaduras, grietas, ampollamiento, muescas), así como desalineación y distorsión de soldaduras, el inspector puede optar por evaluar la resistencia de la tubería y su idoneidad para continuar en servicio utilizando el enfoque discutido en API 579-1/ASME FFS-1. Dicho análisis debe ser realizado por, o bajo la dirección de, un ingeniero de tuberías.</p>
            </div>
            <div class="subsection">
                <h4>10.5.1.2 Espesor de Diseño de Presión</h4>
                <p>ASME B31.3 contiene una fórmula para determinar el espesor requerido de tubería nueva, sin corrosión, recta sujeta a presión interna. API 570 permite el uso de la simple fórmula de Barlow para determinar el espesor de pared requerido para tubería en servicio. ASME B31.3 proporciona la guía de cuándo son aplicables otras ecuaciones. La fórmula de Barlow es la siguiente:</p>
                <p>t = P·D / (2·S·E)</p>
                <p>donde</p>
                <p>t es el espesor de diseño de presión para presión interna, en pulgadas (milímetros);</p>
                <p>P es la presión de diseño manométrica interna de la tubería, en libras por pulgada cuadrada (kilopascales);</p>
                <p>D es el OD de la tubería, en pulgadas (milímetros);</p>
                <p>S es el esfuerzo unitario admisible a la temperatura de diseño, en libras por pulgada cuadrada (kilopascales);</p>
                <p>E es el factor de calidad longitudinal.</p>
                <p>La fórmula de Barlow da resultados prácticamente equivalentes a los obtenidos por la fórmula más elaborada de ASME B31.3 excepto en casos que involucran presiones altas donde se requiere tubería de pared gruesa. La tubería metálica para la cual t ≥ D/6 o P/SE > 0.385 requiere consideración especial.</p>
                <p>ASME B31.3 también contiene los esfuerzos admisibles que deben usarse en las fórmulas contenidas en esa publicación. Estos esfuerzos admisibles incluyen un factor de seguridad y son funciones del material de la tubería y la temperatura.</p>
            </div>
            <div class="subsection">
                <h4>10.5.1.3 Espesor Mínimo Estructural</h4>
                <p>En aplicaciones de baja presión y baja temperatura, los espesores de tubería requeridos determinados por la fórmula de Barlow pueden ser tan pequeños que la tubería tendría una resistencia estructural insuficiente. Por esta razón, debe determinarse un espesor mínimo absoluto para evitar la flexión, el pandeo y el colapso en los soportes para cada tamaño de tubería, dependiendo de los materiales de construcción. La pared de la tubería no debe permitirse que se deteriore por debajo de este espesor mínimo independientemente de los resultados obtenidos por las fórmulas de ASME B31.3 o Barlow.</p>
                <p>El propietario-operador debe especificar cómo se determinan los espesores mínimos estructurales. Una tabla de ejemplo de espesor mínimo estructural calculado para tramos rectos de tubería de acero al carbono se proporciona en la Tabla 5. Pueden requerirse consideraciones y tolerancias adicionales para las siguientes condiciones:</p>
                <ul>
                    <li>tubería y accesorios roscados;</li>
                    <li>diámetros de tubería mayores a 24 pulg. (610 mm);</li>
                    <li>temperaturas que exceden los 400 °F (205 °C) para acero al carbono y baja aleación;</li>
                    <li>aleaciones más altas (distintas al acero al carbono y Cr-Mo);</li>
                    <li>tramos que excedan los 20 pies (6 m);</li>
                    <li>cargas externas altas (por ejemplo, revestidas de refractario, tubería que también se usa para soportar otra tubería, cargas de aparejo, y cargas de soporte de personal);</li>
                    <li>vibración excesiva.</li>
                </ul>
                <p>Pueden requerirse cálculos de ingeniería, típicamente utilizando un programa informático de análisis de esfuerzo de tubería, en estos casos para determinar el espesor mínimo estructural.</p>
                <p>Las tuberías de acero inoxidable austenítico a menudo tienen requisitos de espesor estructural mínimo más bajos basados en su típicamente mayor resistencia, mayor tenacidad y espesores iniciales más delgados de los componentes de tubería. A menudo se crean tablas separadas para tubería de acero inoxidable.</p>
                <div class="table-container">
                    <table class="api-table">
                        <caption>Tabla 5—Espesor Mínimo Estructural y Espesores Mínimos de Alerta para Tubería de Acero al Carbono y Baja Aleación</caption>
                        <thead>
                            <tr>
                                <th>NPS pulg. (mm)</th>
                                <th>Espesor Mínimo Estructural Predeterminado para Temperaturas < 400 °F (205 °C) pulg. (mm)</th>
                                <th>Espesor Mínimo de Alerta para Temperaturas < 400 °F (205 °C) pulg. (mm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1/2 a 1</td>
                                <td>0.07 (1.8)</td>
                                <td>0.08 (2.0)</td>
                            </tr>
                            <tr>
                                <td>11/2</td>
                                <td>0.07 (1.8)</td>
                                <td>0.09 (2.3)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>0.07 (1.8)</td>
                                <td>0.10 (2.5)</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>0.08 (2.0)</td>
                                <td>0.11 (2.8)</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>0.09 (2.3)</td>
                                <td>0.12 (3.1)</td>
                            </tr>
                            <tr>
                                <td>6 a 18</td>
                                <td>0.11 (2.8)</td>
                                <td>0.13 (3.3)</td>
                            </tr>
                            <tr>
                                <td>20 a 24</td>
                                <td>0.12 (3.1)</td>
                                <td>0.14 (3.6)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="subsection">
                <h4>10.5.1.4 Espesor Mínimo Requerido</h4>
                <p>Generalmente, la tubería se reemplaza y/o repara cuando alcanza el espesor mínimo requerido a menos que se haya realizado un análisis de Aptitud para el Servicio que defina una vida útil adicional. El espesor mínimo requerido es el mayor valor del espesor de diseño de presión o el espesor mínimo estructural. Deben seguirse los siguientes pasos al determinar el espesor mínimo requerido en un PML.</p>
                <ul>
                    <li>Paso 1: Calcular el espesor de diseño de presión según el código de clasificación.</li>
                    <li>Paso 2: Determinar el espesor mínimo estructural según la tabla del propietario-operador o cálculos de ingeniería.</li>
                    <li>Paso 3: Seleccionar el espesor mínimo requerido. Este es el mayor del espesor de diseño de presión o espesor mínimo estructural determinado en el Paso 1 y Paso 2.</li>
                </ul>
                <p>Para servicios con altas consecuencias potenciales si ocurriera una falla, el ingeniero de tuberías debe considerar aumentar el espesor mínimo permitido por encima del determinado anteriormente en el Paso 3. Esto proporcionaría un espesor adicional para cargas imprevistas o desconocidas, pérdida de metal no descubierta, o resistencia al abuso normal.</p>
                <p><strong>EJEMPLO 1:</strong> Determinar el espesor mínimo requerido para una tubería NPS 2, ASTM A106, Grado B diseñada para 100 psig @ 100 °F. P = 100 psig, D = 2.375 pulg., S = 20,000 psi, E = 1.0 (sin costura), Y = 0.4.</p>
                <p>Paso 1: Calcular el espesor de diseño de presión según el código de clasificación. (En este ejemplo, se utilizó la fórmula de diseño de ASME B31.3.)</p>
                <p>t = (P·D) / [2·(S·E + P·Y)] = (100·2.375) / [2·(20,000·1.0 + 100·0.4)] = 0.006 pulg.</p>
                <p><strong>NOTA</strong> Si esta tubería NPS 2 estuviera 100 % soportada (por ejemplo, acostada en el suelo plano), entonces 0.006 pulg. soportarían los 100 psig de presión. Este espesor incluye un factor de seguridad de 3 a 1; sin embargo, no se sostendría en el rack de tuberías.</p>
                <p>Paso 2: Determinar el espesor mínimo estructural según la tabla del propietario-operador o cálculos de ingeniería. De la Tabla 5, el espesor mínimo estructural predeterminado es 0.070 pulg.</p>
                <p>Paso 3: Seleccionar el espesor mínimo requerido. Este es el mayor del espesor de diseño de presión o espesor mínimo estructural determinado en el Paso 1 y Paso 2. El valor mayor de 0.006 pulg. y 0.070 pulg. es 0.070 pulg.</p>
                <p><strong>EJEMPLO 2:</strong> Determinar el espesor mínimo requerido para una tubería de 14 NPS, ASTM A106, Grado B diseñada para 600 psig @ 100 °F, D = 14 pulg., S = 20,000 psi, E = 1.0 (sin costura), Y = 0.4.</p>
                <p>Paso 1: Calcular el espesor de diseño de presión según el código de clasificación. (En este ejemplo, se utilizó la fórmula de diseño de ASME B31.3.)</p>
                <p>t = (P·D) / [2·(S·E + P·Y)] = (600·14.0) / [2·(20,000·1.0 + 600·0.4)] = 0.208 pulg.</p>
                <p>Paso 2: Determinar el espesor mínimo estructural según la tabla del propietario-operador o cálculos de ingeniería. De la Tabla 5, el espesor mínimo estructural es 0.110 pulg.</p>
                <p>Paso 3: Seleccionar el espesor mínimo requerido. Este es el mayor del espesor de diseño de presión o espesor mínimo estructural determinado en el Paso 1 y Paso 2. El valor mayor de 0.208 pulg. y 0.110 pulg. es 0.208 pulg.</p>
            </div>
            <div class="subsection">
                <h4>10.5.1.5 Espesor Mínimo de Alerta</h4>
                <p>Los usuarios pueden establecer un espesor mínimo de alerta con valores mayores que el espesor mínimo estructural o el espesor de diseño de presión (lo que gobierne el espesor mínimo requerido). Los espesores de alerta a menudo se ingresan en el IDMS de la instalación. El espesor de alerta señala al inspector que es hora de una evaluación de la vida útil restante. Esto podría incluir una evaluación de ingeniería detallada del espesor mínimo estructural, una evaluación de Aptitud para el Servicio, o el desarrollo de planes de reparación futuros. Además, cuando un PML alcanza el espesor de alerta, levanta una bandera para considerar el alcance y la gravedad en otras posibles ubicaciones para el mecanismo de daño. Los espesores mínimos de alerta generalmente no pretenden significar que los componentes de la tubería deben retirarse cuando un PML alcanza el límite predeterminado. La Tabla 5 muestra un ejemplo de espesores de alerta para tubería de acero al carbono y baja aleación que podría usarse junto con los espesores mínimos estructurales predeterminados.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>10.5.2 Válvulas y Accesorios Bridados tmin</h4>
            <p>Las válvulas y los accesorios bridados están sujetos a esfuerzos tanto de la presión interna como de las cargas mecánicas y los cambios de temperatura. Las válvulas también están sujetas a esfuerzos de cierre y concentraciones de esfuerzo debido a su forma. Estos esfuerzos son difíciles de calcular con certeza. Por esta razón, el espesor de las válvulas y los accesorios bridados es sustancialmente mayor que el de un cilindro simple.</p>
            <p>ASME B16.34 establece el espesor mínimo de pared de la válvula en 1.5 veces (1.35 veces para Clase 4500) el espesor de un cilindro simple diseñado para un esfuerzo de 7000 psi (48.26 MPa) y sometido a una presión interna igual a la clase de presión de la válvula para las Clases de válvula 150 a 2500. Los requisitos reales de espesor de pared de la válvula proporcionados en la Tabla 3 de ASME B16.34 son aproximadamente 0.1 pulg. (2.54 mm) más gruesos que los valores calculados. Las válvulas suministradas de acuerdo con API 600 tienen requisitos de espesor para corrosión y erosión además de los proporcionados en ASME B16.34.</p>
            <p>La fórmula para calcular el espesor mínimo requerido de la tubería puede adaptarse para válvulas y accesorios bridados usando el factor de 1.5 y el esfuerzo admisible para el material especificado en ASME B31.3.</p>
                <p>t = [1.5·P·D] / [2·S·E]</p>
                <p>donde</p>
                <p>t es el espesor de diseño de presión para presión interna, en pulgadas (milímetros);</p>
                <p>P es la presión de diseño manométrica interna de la tubería, en libras por pulgada cuadrada (kilopascales);</p>
                <p>D es el OD de la tubería, en pulgadas (milímetros);</p>
                <p>S es el esfuerzo unitario admisible a la temperatura de diseño, en libras por pulgada cuadrada (kilopascales);</p>
                <p>E es el factor de calidad longitudinal.</p>
                <p>Este espesor calculado probablemente será demasiado delgado e impráctico para las cargas estructurales (como es el caso con muchos sistemas de tuberías); por lo tanto, deben establecerse espesores mínimos basados en necesidades estructurales.</p>
                <p>Las ecuaciones descritas anteriormente no se aplican a los accesorios soldados. Las ecuaciones para la tubería pueden aplicarse a los accesorios soldados usando correcciones apropiadas para la forma, si es necesario. Debe consultarse a un ingeniero de tuberías para ver si dichos cálculos son necesarios.</p>
        </div>
    </div>
    <div class="subsection">
    <h4>10.6 Otros Métodos/Técnicas de Inspección</h4>
    <div class="subsection">
        <h4>10.6.1 Métodos Especiales de Detección de Daño Mecánico (Contenido Futuro)</h4>
    </div>
    <div class="subsection">
        <h4>10.6.2 Cambios Metalúrgicos y Análisis In Situ de Metales (Contenido Futuro)</h4>
    </div>
    <div class="subsection">
        <h4>10.6.3 Identificación Positiva de Materiales (Contenido Futuro)</h4>
    </div>
    <div class="subsection">
        <h4>10.6.4 Extracción de Muestras de Metal (Contenido Futuro)</h4>
    </div>
    <div class="subsection">
        <h4>10.6.5 Prueba con Martillo</h4>
        <p>La prueba con martillo de tuberías, válvulas y accesorios para el espesor es un método de prueba obsoleto en el cual el componente se golpea con un martillo para escuchar el sonido o atenuación. El tipo de sonido puede ser utilizado por un inspector experimentado en la prueba con martillo para diferenciar el metal delgado del metal más grueso. Aunque algunos inspectores experimentados pueden obtener algún conocimiento sobre el adelgazamiento de una tubería utilizando esta técnica, las dificultades de calibrar y estandarizar una prueba con martillo sitúan esta técnica fuera del alcance de las prácticas recomendadas modernas.</p>
        <p>La prueba con martillo de tuberías en operación ha causado fugas donde el impacto del martillo rompió la escama de corrosión y donde el martillo penetró la pared delgada presentando un peligro de seguridad y seguridad del proceso. Por estas razones además del hecho de que es una técnica cualitativa, la mayoría de los sitios no permiten la prueba con martillo. Sin embargo, la prueba con martillo todavía se considera una prueba válida para lo siguiente:</p>
        <ul>
            <li>ajuste del anclaje del soporte o perno de brida golpeando la tuerca y monitoreando el movimiento;</li>
            <li>identificar partes sueltas o rotas;</li>
            <li>verificar la tubería para asegurar que se ha drenado adecuadamente de líquido o si contiene exceso de proceso o escama de corrosión; golpear la tubería y escuchar un sonido sordo en lugar de un timbre (atenuación) es una indicación de un problema.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>10.6.6 Perforación de Orificios Testigo</h4>
        <p>El uso de orificios testigo es una práctica histórica para determinar cuándo se ha consumido la tolerancia de corrosión al resultar en una fuga que luego podría observarse. Esta práctica ha sido abandonada por la mayoría de los usuarios en favor de métodos de inspección no destructivos más convencionales y aceptados por la industria (por ejemplo, UT digital, RT de perfil, etc.) Sin embargo, algunas ubicaciones todavía tienen sistemas de tuberías más antiguos que fueron diseñados con orificios testigo y, como tal, es importante identificar estos sistemas más antiguos y desarrollar planes de inspección, reparación y reemplazo apropiados.</p>
        <p>La perforación testigo (también referida como orificios centinela u orificos delforez) es la aplicación de pequeños orificios piloto [por ejemplo, 1/8 pulg. (3.2 mm) de diámetro] perforados en la pared del componente de la tubería usando patrones y profundidades especificados y controlados. El propósito previsto de los orificios testigo era permitir una pequeña fuga "controlada" que podría descubrirse visualmente mientras aún queda suficiente pared de tubería para evitar una ruptura mayor. Hay varios problemas potenciales asociados con los programas de integridad mecánica/inspección basados en orificios testigo y no deben considerarse un sustituto de los métodos de inspección convencionales modernos diseñados para apuntar a mecanismos de daño creíbles en circuitos bien definidos. Ha habido una serie de eventos en la industria donde los orificios testigo han fallado en prevenir (por ejemplo, casos donde había corrosión localizada, casos donde una pequeña fuga testigo bajo el aislamiento resultó en una corrosión externa significativa de la tubería que pasó desapercibida, casos donde la tubería falló porque el orificio testigo estaba obstruido con pintura o productos de corrosión, etc.).</p>
        <p>El riesgo de incluso una pequeña fuga de un testigo en algunos servicios puede considerarse inaceptable (por ejemplo, en sistemas de alta presión, servicios que contienen H2S/HF, o aquellos que operan por encima de la temperatura de autoignición). La tubería con orificios testigo puede necesitar sus propios criterios de inspección (es decir, un límite de retiro o valor tmin más conservador para evitar una fuga en un sistema de mayor riesgo). Otra consideración clave al gestionar el riesgo de los sistemas de tubería con orificios testigo es identificar una respuesta apropiada cuando se descubre una fuga. Algunos sitios permiten que los orificios que gotean se "claven" mientras están en servicio (esto implica conducir un pasador metálico cónico en el orificio para detener la fuga), y otros han empleado el uso de abrazaderas temporales no diseñadas para detener la fuga hasta que pueda lograrse una parada segura. Es importante predeterminar una respuesta a un orificio testigo que gotea para minimizar el riesgo potencial.</p>
    </div>
</div>
<div class="subsection">
    <h4>10.7 Tubería No Metálica</h4>
    <div class="subsection">
        <h4>10.7.1 General</h4>
        <p>Los sistemas de tubería no metálica a menudo se usan para fluidos que no son tóxicos, no inflamables y ambientalmente benignos. Sin embargo, en algunas circunstancias, incluso estos sistemas de tubería son críticos considerando las consecuencias económicas u operativas. Los intervalos de inspección se evalúan mejor utilizando un enfoque basado en el riesgo. Los factores que influyen en la fecha de inspección inicial son la cantidad y calidad de la supervisión e inspección realizadas durante la construcción. El inspector debe tener conocimientos adecuados de materiales FRP, resinas, refuerzos, imperfecciones de laminado y técnicas de fabricación.</p>
        <p>Generalmente, la experiencia muestra que una inspección inicial debe realizarse dentro de los primeros 2 años de operación. Los intervalos posteriores pueden extenderse o reducirse basándose en los hallazgos iniciales. Un sitio que experimente un número significativo de fallas en los primeros años de operación puede necesitar aumentar las actividades de inspección y acortar los intervalos.</p>
    </div>
    <div class="subsection">
        <h4>10.7.2 Construcción Inicial</h4>
        <p>El examen visual y las pruebas de presión son los métodos principales de inspección y prueba utilizados durante la construcción original. ASTM D2563 proporciona orientación para el examen visual de componentes FRP pero se centra en la fabricación y el montaje. Algunas de las especificaciones más estrictas requieren RT y/o herramientas de inspección de unión de juntas no metálicas unidas. Estos son exámenes más avanzados para reemplazar el método de "golpeo con moneda" para localizar áreas deslaminadas o desprendidas cerca de la superficie de la tubería no metálica.</p>
        <p>Las juntas no metálicas deben examinarse durante la instalación y al finalizar. Las juntas de campana y espigo y espigo cónico deben inspeccionarse para el espacio especificado adecuado e internamente, cuando sea posible, para exceso de adhesivo que pueda restringir el flujo. El inspector debe realizar una inspección externa para buscar preparación adecuada de la superficie, inserción, montaje de la junta y alineación.</p>
        <p>Las juntas de tope y envoltura deben inspeccionarse internamente para el espacio adecuado, protección del borde cortado y la pasta requerida para llenar el espacio. Externamente, la junta debe verificarse para una alineación adecuada, tolerancia de espacio, espesor, ancho, secuencia de laminado y conicidad. Además, donde se unen la tubería y los accesorios, asegúrese de que el accesorio esté adecuadamente ahusado si es más grueso que la tubería.</p>
        <p>Las pruebas de presión hasta 1.5 veces la presión de diseño revelarán fugas de defectos mayores como daño por impacto severo. Sin embargo, las pruebas de presión no son una garantía de integridad estructural. Se ha informado que juntas con hasta un 85 % de desprendimiento han pasado las pruebas de presión. El uso del monitoreo de emisión acústica durante las pruebas de presión puede identificar la falla del material que ocurre antes de la fuga, aumentando así la sensibilidad de la prueba de presión. Esto puede usarse en tiempo real para evitar que la prueba de presión cause daño irreversible a la tubería que de otro modo podría ocurrir sin monitoreo y llevar a una falla futura en servicio.</p>
    </div>
    <div class="subsection">
        <h4>10.7.3 Técnicas de Examen y Prueba en Corriente</h4>
        <p>Se utilizan muchas técnicas tradicionales de END y prueba para evaluar la tubería no metálica. Estas técnicas incluyen lo siguiente:</p>
        <ul>
            <li>UT;</li>
            <li>RT;</li>
            <li>EA;</li>
            <li>prueba de dureza;</li>
            <li>imagen termográfica;</li>
            <li>MW.</li>
        </ul>
        <p>Consulte la Tabla 6 para una comparación de esas técnicas comunes de END para tubería no metálica.</p>
    </div>
</div>`,
});