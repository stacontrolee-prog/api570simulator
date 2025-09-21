if (!getCode('API576')) {
    console.error('El código API576 no está registrado. Registrándolo ahora...');
    registerCode('API576', {
    title: "API 576 Inspection of Pressure-Relieving Devices",
    titleEs: "Inspección de Dispositivos de Alivio de Presión API 576"
});
}

// Registrar el capítulo 6
registerChapter('API576', {
    id: 6,
    title: "Inspection and Testing",
    titleEs: "Inspección y Pruebas",
    content: `<h3>6 Inspection and Testing</h3>
    <div class="subsection">
        <h4>6.1 Reasons for Inspection and Testing</h4>
        <p>Pressure-relieving devices are installed on process equipment to release excess pressure due to operational upsets, external fires, and other hazards. These hazards are discussed in API 521. Failure of pressure-relieving devices to function properly when needed could result in the overpressure of the vessels, exchangers, boilers, or other equipment they were installed to protect. A properly designed, applied, and installed pressure-relieving device that is maintained in good operating condition is essential to the safety of personnel and the protection of equipment during abnormal circumstances. The principal reason for inspecting pressure-relieving devices is to ensure that they will provide this protection. Inspections of pressure-relieving devices should determine the general physical and operating conditions of the devices and ensure that their performance meets the requirements for a given installation. In making this determination, four types of inspections can be used. They are "shop as-received pop test," "shop inspection/overhauls," "field internal inlet and outlet piping inspections," and "visual on-stream inspections." Pretesting and post-testing of the pressure-relieving device should be included in the "shop inspection/overhaul." Each is discussed in the following sections.</p>
    </div>
    <div class="subsection">
        <h4>6.2 Shop Inspection/Overhaul</h4>
        <div class="subsection">
            <h4>6.2.1 General</h4>
            <p>Periodically, pressure-relief devices will be removed, disassembled, and inspected. These inspections are referred to as "shop inspection/overhaul" (although some, if not all, of the work can be performed in the field). Also, while the device is removed, inlet and outlet piping should be inspected for the presence of internal deposits, and records should be kept of their condition and cleaning. If necessary, piping should be radiographed or dismantled for inspection and any cleaning to be performed.</p>
            <p>The adjacent inlet/outlet piping should be securely covered after inspection to avoid any foreign material entry, and the covers should be removed when the pressure-relief device is ready for installation after repair.</p>
            <p>Caution—Covering the inlet/outlet piping connections should only be done after verifying that any connected equipment will not be adversely affected; e.g. subjected to excess vacuum.</p>
        </div>
        <div class="subsection">
            <h4>6.2.2 Safety</h4>
            <p>Before inspection and any repairs on pressure-relieving devices are executed, general precautions should be taken to maintain the safety of the equipment protected by the devices, especially if the equipment is in operation. When inspection and repairs on an operating unit are required, the unit operations should be normal and the proper authority and permits for the work should be obtained.</p>
            <p>Many pressure-relieving valves have set pressures that exceed their outlet flange rating. If these valves are equipped with outlet block valves, the pressure-relief valve inlet block valve should be closed before the outlet valve is closed. Also, the pressure-relief valve body shall be vented immediately after the outlet isolation block valve is closed. This prevents high pressures from the pressure-relief valve inlet from possibly overpressuring the pressure-relief valve body. Similar caution should be exercised when installing a blind in the pressure-relief valve outlet. Installation of drain valves between the inlet and outlet block valves and the pressure-relief valve should be considered, as shown in API 520, Part II. Unless the inlet is blinded, ensure the pressure-relief valve outlet is continuously vented when the outlet valve is closed or the outlet is blinded. The inlet valve and pressure-relief valve can leak, causing the outlet to overpressure.</p>
            <p>Before disconnecting pressure-relieving devices, the connected piping and block valves should be checked to ensure that they are sufficiently supported. After reinstalling pressure-relief valves, the related piping should be checked to ensure that it is not imposing loads that would cause problems with the pressure-relief valve body such as distortion leading to in-service leakage, a change in set pressure, or binding of the internal components leading to a stuck valve.</p>
            <p>Some devices may trap hazardous toxic process material in bonnet cavities or dome cavities. Special steps during decontamination should be taken to minimize exposure of shop personnel.</p>
        </div>
        <div class="subsection">
            <h4>6.2.3 Valve Identification</h4>
            <p>To minimize errors in the testing and handling of pressure-relief valves, each should carry an identifying tag, stencil, plate, or other means to show its company equipment number. This number readily identifies the device's unit, the equipment that the device should be installed on, the device's set pressure, and the date of its last test (see Figures 38 to 40b for examples of an identifying tag). If a relief device cannot already be easily and correctly identified by a marking on it, it should be marked and identified as described above before it is removed from its equipment. Also see ASME BPVC Section VIII, Division 1, Paragraph UG-129 for instructions on marking nameplates of pressure-relieving devices. It is recommended that the original manufacturer's nameplate should always remain on the pressure-relief valve. Caution should be taken not to paint over the tag.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_38.png" class="figure-image">
                <p class="figure-caption">Figure 38—Identification Tag for Pressure-relieving Device</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_39a.png" class="figure-image">
                <p class="figure-caption">Figure 39a—Identification Tag for Pressure-relieving Device (pre-2013)</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_39b.png" class="figure-image">
                <p class="figure-caption">Figure 39b—Identification Tag for Pressure-relieving Device (mandatory Jan. 1, 2013)</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_40a.png" class="figure-image">
                <p class="figure-caption">Figure 40a—Identification Tag for Pressure-relieving Device (pre-2013)</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_40b.png" class="figure-image">
                <p class="figure-caption">Figure 40b—Identification Tag for Pressure-relieving Device (mandatory Jan. 1, 2013)</p>
            </div>
        </div>
        <div class="subsection">
            <h4>6.2.4 Operating Conditions Noted</h4>
            <p>An operating history of each pressure-relief valve since its last inspection should be obtained and should include pertinent information such as the following:</p>
            <ul>
                <li>information on upsets and their effect on the valve,</li>
                <li>the extent of any leakage while in service,</li>
                <li>any other evidence of malfunctioning,</li>
                <li>whether any rupture disks under the pressure-relief valve have been replaced.</li>
            </ul>
            <p>In addition, records of valve performance during previous runs should be checked to determine whether changes are needed in the valve materials or components or in the inspection interval.</p>
        </div>
        <div class="subsection">
            <h4>6.2.5 Removal of Device from System in Operation</h4>
            <p>Caution—The removal of a pressure-relief device from equipment in operation should be planned to minimize its duration. Most pressure-relief valves have a sturdy appearance that may obscure the fact that they are precise instruments with very close tolerances and critical dimensions. Exercise caution on removal so not to invalidate the as-received pop test.</p>
            <p>The precautionary steps in 6.2.1 should be followed. Before a pressure-relief valve is inspected and/or repaired while equipment is in operation, the following precautions should be taken.</p>
            <ul>
                <li>Only an authorized person should isolate a relief device by closing any adjacent block valves upstream or downstream (see ASME BPVC Section VIII, Division 1, Appendix M). This may require providing or identifying alternate relief protection.</li>
                <li>The space between the relief device and any adjacent block valve should be vented to a safe location to release trapped loading fluid and to determine whether the block valve is holding.</li>
                <li>If a block valve is not installed on the downstream side of a relief device discharging into a common header, a blind or other suitable isolation should be applied to prevent discharge through the open outlet pipe in case one of the other relief devices opens, to prevent air ingress if the header is operating below atmospheric pressure, and/or to prevent reverse flow if the header is operating above atmospheric pressure.</li>
                <li>In situations where a relief device is to be serviced in place, a blind should be inserted or other positive isolation device should be in place upstream/downstream of the pressure-relief device before a pressure-relief device is even partially disassembled.</li>
                <li>When a relief device is removed, blinds or other suitable covers should be placed over open piping/valves to protect seating surfaces and prevent entry of foreign material.</li>
            </ul>
            <p>Caution—The potential for damage caused by blocking the vent should be considered prior to installing covers overexposed vents (e.g. vacuum effects).</p>
            <ul>
                <li>If there is a rupture disk device associated with the pressure-relief valve and the rupture disk is removed from its holder as part of the accompanying relief valve removal, manufacturer recommendations should be followed for disk replacement since the disk could easily be damaged and could fail to burst at the proper pressure if reused.</li>
                <li>All blinds should be removed after the relief device has been reinstalled following inspection, repair, or replacement.</li>
                <li>The block valves on the inlet and outlet should be opened and locked or car sealed in that position. Figure 41 shows a pressure-relief valve installation with the block valves sealed open. Block valves used with relief devices should be verified to have sufficient flow area (e.g. full port) to prevent flow restriction and excessive pressure drop. In cases where there are installed spare pressure-relief valves, the inlet block valve of the spare should be closed. The outlet side should be protected from overpressure caused by leakage through the inlet block and the relief valve. The outlet block valve could either be locked open or car sealed, or positive means of venting could be provided if the outlet is shut. For devices in highly corrosive service (e.g. hydrofluoric acid (HF) main acid service), consider methods to verify that the valve is fully opened.</li>
                <li>A pressure-relief valve should not be considered as a positive isolation valve when the equipment that it is protecting is out of service. If the pressure-relief valve remains in place during this time, then proper isolation block valve closure operations should take place.</li>
            </ul>
            
            <div class="figure-container">
                <img src="images/api576_figure_41.png" class="figure-image">
                <p class="figure-caption">Figure 41—Block Valves on Pressure-relief Valve Inlet and Outlet Sealed Open</p>
            </div>
        </div>
        <div class="subsection">
            <h4>6.2.6 Initial Inspection</h4>
            <p>Many types of deposits or corrosion products in a pressure-relief valve may be loose and may drop out during transportation of the valve to the shop for inspection, testing, maintenance, and resetting. As soon as a valve has been removed from the system, a visual inspection should be made. Figure 42 shows one example of sulfur deposits in the outlet of a pressure-relief valve. When fouling is a problem, it may be prudent to collect samples for testing and to record deposit locations and appearances. Any obstructions in the valve should be recorded and removed.</p>
            <p>Caution—Valves that have been exposed to materials hazardous to humans or that may contain material that could be an auto-ignition source should be handled with special precautions.</p>
            <p>Some precautions to follow when inspecting valves exposed to hazardous materials include the following.</p>
            <ul>
                <li>Evaluate the potential for the valve to contain pyrophoric [e.g. iron sulfide (FeS)] or reactive materials, and determine the appropriate precautions for the material involved.</li>
                <li>Valves in acid or caustic service should be handled very carefully adhering to rigorous handling procedures prior to pre-pop testing of the "as-removed" pressure-relief valve. After pre-popping, pressure-relief valves should be immediately neutralized. Even after neutralization, the safety precautions indicated by the material safety data sheets/safety data sheet (MSDS)/(SDS) and other appropriate sources of handling information shall be taken.</li>
            </ul>
            <p>Rupture disks are sometimes used to protect other pressure-relieving devices from corrosion. Normally, in this case a rupture disk cannot be inspected without being removed. Therefore, inspection of the disk should be part of the routine developed for inspection of the pressure-relief valve.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_42.png" class="figure-image">
                <p class="figure-caption">Figure 42—Sulfur Deposits in Body of Valve</p>
            </div>
        </div>
        <div class="subsection">
            <h4>6.2.7 Inspection of Adjacent Inlet and Outlet Piping</h4>
            <p>When a pressure-relief device is removed from service, the upstream and downstream piping is often open and available for inspection. However, where block valves are closed to enable removal of relief devices from equipment during operation, it is usually impossible to directly inspect this piping. In potential fouling services, profile radiography should be considered for piping upstream or downstream of pressure-relief valves looking for locations where potential fouling deposits may collect that could restrict flow or cause corrosion under deposits.</p>
            <p>Inspection of the piping at the pressure-relief device will often indicate the condition of the process piping whose interior is not visible. Piping should be checked for corrosion, indications of thinning, and deposits that could interfere with device operation. The character of the deposits may indicate the cause of any leakage from the valve in a closed system.</p>
        </div>
        <div class="subsection">
            <h4>6.2.8 Transportation of Pressure-relieving Devices to Shop</h4>
            <p>The improper shipment and transport of pressure-relief devices can have detrimental effects on device operation. Pressure-relief devices should be treated with the same precautions as instrumentation, with care taken to avoid improper handling or contamination prior to installation. Improper handling during transportation to the repair shop may also result in inaccurate "as-received" set pressure tests, which may cause improper adjustments to relief device inspection intervals.</p>
            <p>The following practices are recommended.</p>
            <ul>
                <li>Flanged valves should be securely bolted to pallets in the vertical position to avoid side loads on guiding surfaces.</li>
                <li>Careful handling of threaded valves during transport in a manner to avoid damage to threaded connections.</li>
                <li>Valve inlet and outlet connection, drain connections, and bonnet vents should be protected during shipment and storage to avoid internal contamination of the valve. Ensure all covers and/or plugs are removed prior to installation. Pilot-operated valve tubing should also be protected from damage.</li>
                <li>Lifting levers should be wired or secured so they cannot be moved while the valve is being shipped or stored. These wires should be tagged for removal by the manufacturer or repair shop and removed before the valve is placed in service.</li>
                <li>Rupture disks should be handled by the disk edges. Any damage to the surface of the disk can affect the burst pressure.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>6.2.9 Shop Inspection, Testing, Maintenance, and Setting of Direct-acting Spring-loaded Pressure-relief Valves Used for Unfired Pressure Vessels</h4>
            <div class="subsection">
                <h4>6.2.9.1 Determining "As-received" Pop Pressure</h4>
                <p>Wherever possible, as-received pop testing should be conducted prior to cleaning in order to yield accurate as-received pop testing results that will help establish the appropriate inspection and servicing interval. Cleaning of deposits prior to as-received pop testing can remove deposits that would have prevented the valve from opening at set pressure. Pop testing in the as-received condition for valves in acid/caustic/toxic services can be accomplished by utilizing a pop test stand built on site in the area where the valve is installed or by contracting with a service supplier that has a portable test stand that can be brought on site. Check that the seals are intact on the pressure set screw cover and blowdown ring screw cover. Before the valve is dismantled, the set pressure of the valve should be obtained. Generally, the pressure-relief valve is mounted on the test block, and the inlet pressure is slowly increased. The pressure at which the valve relieves is recorded as the "as-received" pop pressure.</p>
                <p>If the valve initially opens at the cold differential test pressure (CDTP), no further testing to determine the "as-received" pop pressure is needed. If the initial pop is at a pressure higher than the CDTP, the valve should be tested a second time. If it then pops near the CDTP, the valve may not have originally popped at the CDTP because of deposits. If on the second try the valve does not pop within the tolerances allowed by the ASME BPVC, either the valve setting may have been originally in error or it changed during operation. Pressure-relief valves that do not pop at inlet pressures of 150 % of CDTP should be considered as stuck shut.</p>
                <p>If the initial pop is at a pressure lower than the CDTP, the spring may have become weakened, the valve may have been set improperly at its last testing, the seat may have been damaged, or the setting changed during operation. It is the first test that is recorded as the "as-received" pop pressure. This "as-received" pop pressure is used in determining the inspection interval.</p>
                <p>Caution—If the valve is extremely fouled and dirty when received and the "as-received" actuation of the valve may damage the valve's seats, the user may waive the "as-received" test and instead reduce the inspection interval. After reducing the valve's inspection interval, the valve should be clean at the next inspection. If it is not clean, the inspection interval should again be shortened or other measures should be taken to reduce the fouling.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.2 "As-received" Pop Test Results</h4>
                <p>To ensure the reliable operation of relief valves, it is important to understand the root cause of "as-received" pop test failures in order to determine if any corrective actions are necessary. Relief valves can fail the "as-received" pop test in a number of ways:</p>
                <ul>
                    <li>stuck shut or fails to open,</li>
                    <li>device partially opens,</li>
                    <li>opens above set pressure tolerance,</li>
                    <li>leakage past device,</li>
                    <li>spurious/premature opening,</li>
                    <li>device stuck open.</li>
                </ul>
                <p>The owner-user should define the criteria that constitute an "as-received" pop test failure. The owner-user may define criteria for investigation of failures based on "as-received" pop test pressure as a percentage of set pressure and may specify different levels of investigation rigor depending on the severity of the failure and criticality of the application. For example, in API 581 a relief valve that does not pop at 130 % of the set pressure is considered a failure to open. As a default criterion for a valve being stuck shut, a number of companies use 150 % of the set pressure beyond which the valve is classified as stuck shut if it does not pop, and the test is discontinued.</p>
                <p>Caution—The limiting test pressure to which the valve is subjected may not be as high as the values stated above. Some end users and repair organizations may use lower values due to concerns regarding damage to the valve, test equipment, or personnel injury. This becomes more significant at higher set pressures.</p>
                <p>The investigation should focus on the development of a corrective action plan that addresses the failure mode observed and may include a reduction in the relief valve inspection interval and/or design changes related to the installation, material selection, pressure-relief device selection, etc.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.3 Visual Inspection</h4>
                <p>After the "as-received" pop test, a valve should be visually inspected to estimate its condition. This inspection should be made by the authorized repair shop's pressure-relief valve repair mechanic unless unusual corrosion, deposits, or conditions are noted in the pressure-relief valve. The results of this inspection should be noted on appropriate forms. Points that should be checked may include but are not limited to:</p>
                <ul>
                    <li>the flanges, for evidence of pitting, roughening, or decreases in the width of seating surfaces;</li>
                    <li>the springs, for evidence of corrosion or cracking and for the correct pressure range at the valve's operating pressure and temperature;</li>
                    <li>if the valve is of the bellows type, the bellows for evidence of corrosion, cracking, or deformation;</li>
                    <li>the positions of the set screws and openings in the bonnet;</li>
                    <li>the inlet and outlet nozzles, for evidence of deposits of foreign material or corrosion;</li>
                    <li>the external surfaces, for any indication of a corrosive atmosphere or mechanical damage;</li>
                    <li>the body wall thickness;</li>
                    <li>valve components and materials, for a match with the information on the identification tag and specification card;</li>
                    <li>the pilots and associated parts.</li>
                </ul>
                <p>Caution—When unusual corrosion, deposits, or conditions are noted in the pressure-relief valve, an inspector representing the user should assist in the inspection.</p>
                <p>Caution—If the pressure-relief valve is from equipment handling hazardous materials, caution should be exercised during the inspection.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.4 Dismantling of Valve</h4>
                <p>After the valve is received and its testing and initial visual inspection is completed, it may require dismantling for a thorough shop inspection and repair. If the valve has been tested at the appropriate interval set in accordance with API 510, and the guidance in 6.2.9.1 for determining the "as-received" pop pressure is followed, and the results of the "as-received" test show that the valve tests properly, then disassembly of the valve for further inspection may not be required, unless restoration of the valve to the "as new" condition is required.</p>
                <p>When appropriate, valves should be carefully dismantled in accordance with the manufacturer's manuals and recommendations. Before dismantling valves in light hydrocarbon service, thoroughly clean the valve with chemicals that are compatible with the valve material to avoid a flash due to sparks created by the dismantling operations. Proper facilities should be available for segregation of the valve parts as the valve is dismantled. At each stage in the dismantling process, the various parts of the valve should be visually inspected for evidence of wear and corrosion. The valve spindle, guide, disc, and nozzle require visual inspection. The bellows in balanced valves should be checked for cracks or other failures that may affect performance.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.5 Cleaning and Inspection of Parts</h4>
                <p>To keep the parts of each valve separate from those of other valves, the valve parts should be properly marked, segregated, and cleaned thoroughly. The valve parts that most often require cleaning are the nozzles, springs, disc holders, guides, and discs. Deposits that are difficult to remove should be cleaned with solvents, brushed with wire, glass bead blasted, or carefully scraped.</p>
                <p>After being cleaned, check each part carefully with the proper equipment for measuring valve dimensions, with frequent reference to the proper drawings and literature.</p>
                <p>The components should be checked for wear and corrosion. Seating surfaces on the disc and nozzle should be inspected for roughness or damage, which might result in valve leakage. They should also be checked with appropriate seat gauges to assure that neither wear nor previous machining has caused the seat dimensions to exceed the manufacturer's tolerances. Seat flatness can be checked with suitable lap rings recommended by the manufacturer, optical flats, or other suitable inspection devices. The springs should be checked for the proper rate. The springs should also be checked for cracking or deformation. The fit between the guide and disc or disc holder should be checked for proper clearance and visually inspected for evidence of scoring. The nozzle should be checked for obstructions and deformation. Bellows should be checked for leaks, cracks, or thin spots that may develop into leaks. In addition, if the bellows has collapsed, it has probably been subjected to backpressure greater than its design pressure. High backpressure may be due to downstream restrictions that are created by deposits or to higher relief flows than used in the original design. The cause should be determined, and corrective action should be taken.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.6 Reconditioning and Replacement of Parts</h4>
                <p>Parts that are worn beyond tolerance or damaged should be replaced or reconditioned. Damaged springs, bellows, and single-use components, even those that are apparently undamaged, should be replaced. All soft goods, even those that are apparently undamaged, should be replaced. Spare parts for a particular pressure-relief valve should be obtained from its manufacturer. The valve body, flanges, and bonnet may be reconditioned by means suitable for repairs to other pressure-containing parts of similar material. If evidence of wear or damage is found on the disc or nozzle, their seating surfaces may be machined or lapped. Follow the manufacturer's recommendations when reconditioning valve parts.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.7 Reassembly of Valve</h4>
                <p>After the valve has been inspected and its parts have been reconditioned or replaced, it should be reassembled in accordance with the manufacturer's instructions. The nozzle and disc seating surfaces should not be oiled. Clearances between assembled parts should be checked. In accordance with the manufacturer's instructions, the spring should be adjusted to set as close to the desired set pressure as possible. Blowdown rings should be set in accordance with the manufacturer's recommendations for the appropriate vapor or liquid service, and the settings should be noted for future reference. Because most test blocks do not have enough capacity to measure the actual blowdown, manufacturer's recommendations and past performance should be evaluated to estimate any necessary adjustment.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.8 Setting of Valve Set Pressure</h4>
                <p>After the valve has been reconditioned and reassembled, its spring should be adjusted for the last time to ensure the valve will relieve at the required CDTP. Although test procedures will vary with local plant practice, the valve is generally mounted on the test block and air or water pressure is increased slowly until the valve relieves. The manufacturer's recommendations should be used to guide the adjustment of the spring to the correct setting. If a new set pressure is required, the manufacturer's limits for adjustment of the spring shall not be exceeded. If necessary, a different spring should be provided.</p>
                <p>After the valve has been adjusted, it should be actuated at least once to prove the accuracy of the setting. Some manufacturers recommend a valve be actuated (popped) at least three times, as the first cycle helps align all of the components after the overhaul while the successive cycles verify the set pressure. Normally, for ASME BPVC Section VIII valves, the deviation of the as-found set pressure from the nameplate set pressure should not exceed ±2 psi (±15 kPa) for pressures less than or equal to 70 psi (500 kPa) or ±3 % for pressures greater than 70 psi (500 kPa) [see ASME BPVC Section VIII, Division 1, Paragraph UG 134(d)(1)]. For pressure-relief valves that comply with ASME BPVC Section VIII, Division 1, Paragraph UG 125(c)(3), the deviation shall not be less than 0 % or greater than +10 %. Any allowance for hot setting should be made in accordance with the manufacturer's data. Any adjustment to the CDTP required to compensate for in-service backpressure, service temperature, or test media should be made in accordance with the manufacturer's or user's valve specification data.</p>
                <p>Where the pressure-relief valve set pressure is below 15 psig, such as a pilot-operated pressure-relief valve on an API 620 low-pressure storage tank, the ±2 psi tolerance may be excessive and could substantially exceed the tank's pressure rating. The owner/user should specify the set point tolerance and required gauge precision and range to be used during the set pressure verification.</p>
                <p>Follow the valve manufacturer's recommended testing procedure when the pressure-relief valve is tested with water. Typically, the pressure will be raised slowly to the required setting. The discharge should be observed for evidence of leakage, or the test gauge should be observed for a momentary drop in pressure. A small continuous stream of water from the valve discharge usually indicates attainment of the CDTP. The pressure at which the valve releases should be within the tolerances noted above before the valve is approved for service. Refer to NB-18 or the manufacturer's maintenance manual for the definition of set pressure for liquid service valves.</p>
                <p>Pressure-relief valves set with water may need to have the water drained and the valve dried prior to installation to assure proper function in service.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.9 Checking Valve for Tightness</h4>
                <p>Once the valve is set to pop at its CDTP, it should be checked for leakage. On the test block, it can be tested for seat tightness by increasing the pressure on the valve up to the manufacturer's specified simmer pressure (oftentimes this is 90 % of the CDTP) and observing the discharge side of the valve for evidence of leakage. See Figure 43 or reference API 527 for allowable leakage rate.</p>
                
                <div class="figure-container">
                    <img src="images/api576_figure_43.png" class="figure-image">
                    <p class="figure-caption">Figure 43—Safety Valve and Relief Valve Leak Detector</p>
                </div>
                
                <p>Where applicable, the bonnet, bellows, gasketed joints, and auxiliary piping/tubing should be inspected for leakage.</p>
                <p>Caution—For closed systems, the valve should be backpressure tested to check for leakage at bonnet to body connection, bellows, bellows' gasket (if applicable), at the cap to bonnet connection, and at full nozzle to body connection (refer to ASME BPVC Section VIII, Division 1, Paragraph UG-136 (d)(3)).</p>
                <p>Leakage from in-service pressure-relief valves should be minimized due to the potential hazards to the environment, personnel, and equipment. Leakage may lead to fouled and inoperable valves and as well as potential product loss.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.10 Completion of Necessary Records</h4>
                <p>All necessary records should be completed before a valve is placed back into service. By helping to determine when to replace the components of the valve and when to retire it, the records are critical to its effective future use. They form the historical record of the conditions and services under which the valve operated. Retention of maintenance and test records may be required by governmental regulations. See Annex B for example forms. For an explanation of nameplate terms required by repair work, see API 526.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>6.3 Inspection, Testing, Maintenance, and Setting of Direct-acting Spring-loaded Valves on Equipment</h4>
            <p>It is generally more economical and effective to perform a shop inspection/overhaul in the shop at the required intervals than on its equipment. However, when a valve operates in nonfouling service, experience may indicate that inspection of the valve while on the equipment is safe and suitable. When suitable safety precautions have been taken (see 6.2.2), the inlet and outlet block valves may be closed, and the bonnet of the valve may be removed for immediate inspection, testing, and any minor repairs by a qualified person. When major repairs are indicated, the valve should be sent to the shop.</p>
            <p>In certain cases, the valve may be tested for set pressure and leakage with an inert gas testing medium through a bleeder. This method is inferior to the test block procedure discussed in Annex A. It yields inaccurate test results for metal-seated valves unless sufficient upstream volume is provided that allows the valve to open to about half of full lift. If the available upstream volume is not sufficient to cause the valve to attain about half lift, the use of a restricted lift device is recommended to avoid damaging the valve from the impact loading caused by too rapid of a closure.</p>
            <p>A valve may be tested on-stream with a lift assist device that will determine the set pressure of the valve. These devices apply an auxiliary lifting load to the valve disc holder and spindle and, in conjunction with lifting the valve, incorporate a method for determining the opening of the valve and the load applied at the point of opening. Numerous technologies are used for determining the opening point and correlation of the applied load. These technologies range from simple audible notification to software-based data analysis, displacement, or acoustic sensors. The set pressure of the valve is computed by dividing the load at opening by the valve seat area and then adding the value of inlet pressure. Data output ranges from a summary of load, inlet pressure, and set pressure to graphing of measured and calculated values such as applied load, valve lift, and inlet pressure. This method may or may not be accepted by local jurisdictions as a valid method of either verifying or adjusting valve set pressures.</p>
            <p>There are potential hazards to consider when applying the lift assist test method:</p>
            <ul>
                <li>potential failure of the rupture disk in rupture disk/valve combinations;</li>
                <li>possible introduction of foreign material into the valve seating area, which may result in mechanical damage and/or leakage through the valve upon reseat;</li>
                <li>possible release of process material to atmosphere;</li>
                <li>potential failure of the bellows, in a bellows equipped valve, will cause release of process to atmosphere through the valve's bonnet openings;</li>
                <li>most devices are electronic and as such should be analyzed for their suitability to hazardous environments;</li>
                <li>the valve may not reseat tight following the test, necessitating actions appropriate for valve leakage;</li>
                <li>testing with the inlet pressure near the set point of the valve may cause the valve to open, necessitating a reduction in operating pressure or a mechanical device to close the valve.</li>
            </ul>
            <p>Caution—This method of checking the set pressure and functioning of a safety valve identifies the opening pressure and should not be considered a routine activity for determining the integrity of the pressure-relieving device. The lift assist test method of checking the set pressure of a pressure-relief valve does not satisfy the need to check for inlet/outlet line fouling or to remove a valve for physical inspection and verification that all of its components are in satisfactory and safe working condition. The lift assist test method also does not verify the valve blowdown setting and seat leakage at 90 % of set pressure of the valve.</p>
        </div>
    </div>
    `,
    contentEs: `<h3>6 Inspección y Pruebas</h3>
    <div class="subsection">
        <h4>6.1 Razones para la Inspección y Pruebas</h4>
        <p>Los dispositivos de alivio de presión se instalan en equipos de proceso para liberar el exceso de presión debido a alteraciones operacionales, incendios externos y otros peligros. Estos peligros se discuten en API 521. La falla de los dispositivos de alivio de presión para funcionar correctamente cuando se necesiten podría resultar en la sobrepresión de los recipientes, intercambiadores, calderas u otros equipos que fueron instalados para proteger. Un dispositivo de alivio de presión adecuadamente diseñado, aplicado e instalado que se mantiene en buenas condiciones de operación es esencial para la seguridad del personal y la protección del equipo durante circunstancias anormales. La razón principal para inspeccionar los dispositivos de alivio de presión es asegurar que proporcionarán esta protección. Las inspecciones de los dispositivos de alivio de presión deben determinar las condiciones físicas y operativas generales de los dispositivos y asegurar que su rendimiento cumpla con los requisitos para una instalación determinada. Al hacer esta determinación, se pueden utilizar cuatro tipos de inspecciones. Son "prueba de apertura tal como se recibió en taller", "inspección/revisión en taller", "inspecciones de tubería de entrada y salida internas en campo" e "inspecciones visuales en operación". Las pruebas previas y posteriores del dispositivo de alivio de presión deben incluirse en la "inspección/revisión en taller". Cada una se discute en las siguientes secciones.</p>
    </div>
    <div class="subsection">
        <h4>6.2 Inspección/Revisión en Taller</h4>
        <div class="subsection">
            <h4>6.2.1 General</h4>
            <p>Periódicamente, los dispositivos de alivio de presión serán retirados, desmontados e inspeccionados. Estas inspecciones se denominan "inspección/revisión en taller" (aunque parte, si no todo, del trabajo puede realizarse en el campo). Además, mientras el dispositivo está retirado, la tubería de entrada y salida debe inspeccionarse en busca de depósitos internos, y deben mantenerse registros de su estado y limpieza. Si es necesario, la tubería debe ser radiografiada o desmontada para su inspección y realizar cualquier limpieza.</p>
            <p>La tubería adyacente de entrada/salida debe estar cubierta de manera segura después de la inspección para evitar la entrada de cualquier material extraño, y las cubiertas deben retirarse cuando el dispositivo de alivio de presión esté listo para su instalación después de la reparación.</p>
            <p>Precaución—La cubierta de las conexiones de tubería de entrada/salida solo debe hacerse después de verificar que cualquier equipo conectado no se verá afectado adversamente; por ejemplo, sometido a vacío excesivo.</p>
        </div>
        <div class="subsection">
            <h4>6.2.2 Seguridad</h4>
            <p>Antes de que se ejecuten la inspección y cualquier reparación en los dispositivos de alivio de presión, deben tomarse precauciones generales para mantener la seguridad del equipo protegido por los dispositivos, especialmente si el equipo está en operación. Cuando se requieren inspección y reparaciones en una unidad en operación, las operaciones de la unidad deben ser normales y debe obtenerse la autoridad y los permisos adecuados para el trabajo.</p>
            <p>Muchas válvulas de alivio de presión tienen presiones de ajuste que exceden la clasificación de su brida de salida. Si estas válvulas están equipadas con válvulas de bloqueo de salida, la válvula de bloqueo de entrada de la válvula de alivio de presión debe cerrarse antes de que se cierre la válvula de salida. Además, el cuerpo de la válvula de alivio de presión debe ventilarse inmediatamente después de cerrar la válvula de bloqueo de aislamiento de salida. Esto evita que las altas presiones de la entrada de la válvula de alivio de presión puedan sobrepresionar posiblemente el cuerpo de la válvula de alivio de presión. Debe ejercerse una precaución similar al instalar una tapa ciega en la salida de la válvula de alivio de presión. Debe considerarse la instalación de válvulas de drenaje entre las válvulas de bloqueo de entrada y salida y la válvula de alivio de presión, como se muestra en API 520, Parte II. A menos que la entrada esté cegada, asegúrese de que la salida de la válvula de alivio de presión esté ventilada continuamente cuando la válvula de salida esté cerrada o la salida esté cegada. La válvula de entrada y la válvula de alivio de presión pueden tener fugas, causando que la salida se sobrepresione.</p>
            <p>Antes de desconectar los dispositivos de alivio de presión, debe verificarse que la tubería y las válvulas de bloqueo conectadas estén adecuadamente soportadas. Después de reinstalar las válvulas de alivio de presión, debe verificarse que la tubería relacionada no esté imponiendo cargas que causarían problemas con el cuerpo de la válvula de alivio de presión, como distorsión que conduzca a fugas en servicio, un cambio en la presión de ajuste o bloqueo de los componentes internos que conduzca a una válvula atascada.</p>
            <p>Algunos dispositivos pueden atrapar material de proceso tóxico peligroso en las cavidades del sombrerillo o cúpula. Deben tomarse pasos especiales durante la descontaminación para minimizar la exposición del personal del taller.</p>
        </div>
        <div class="subsection">
            <h4>6.2.3 Identificación de la Válvula</h4>
            <p>Para minimizar errores en las pruebas y manipulación de las válvulas de alivio de presión, cada una debe llevar una etiqueta, estarcido, placa u otro medio identificativo para mostrar su número de equipo de la compañía. Este número identifica fácilmente la unidad del dispositivo, el equipo en el que debe instalarse el dispositivo, la presión de ajuste del dispositivo y la fecha de su última prueba (véanse las Figuras 38 a 40b como ejemplos de una etiqueta identificativa). Si un dispositivo de alivio no puede ser identificado fácil y correctamente por una marca en él, debe marcarse e identificarse como se describe arriba antes de ser retirado de su equipo. Véase también ASME BPVC Sección VIII, División 1, Párrafo UG-129 para instrucciones sobre el marcado de placas de identificación de dispositivos de alivio de presión. Se recomienda que la placa de identificación del fabricante original siempre debe permanecer en la válvula de alivio de presión. Debe tenerse cuidado de no pintar sobre la etiqueta.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_38.png" class="figure-image">
                <p class="figure-caption">Figura 38—Etiqueta de Identificación para Dispositivo de Alivio de Presión</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_39a.png" class="figure-image">
                <p class="figure-caption">Figura 39a—Etiqueta de Identificación para Dispositivo de Alivio de Presión (antes de 2013)</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_39b.png" class="figure-image">
                <p class="figure-caption">Figura 39b—Etiqueta de Identificación para Dispositivo de Alivio de Presión (obligatoria a partir del 1 de enero de 2013)</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_40a.png" class="figure-image">
                <p class="figure-caption">Figura 40a—Etiqueta de Identificación para Dispositivo de Alivio de Presión (antes de 2013)</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_40b.png" class="figure-image">
                <p class="figure-caption">Figura 40b—Etiqueta de Identificación para Dispositivo de Alivio de Presión (obligatoria a partir del 1 de enero de 2013)</p>
            </div>
        </div>
        <div class="subsection">
            <h4>6.2.4 Condiciones Operativas Anotadas</h4>
            <p>Debe obtenerse un historial operativo de cada válvula de alivio de presión desde su última inspección, que debe incluir información pertinente como la siguiente:</p>
            <ul>
                <li>información sobre alteraciones y su efecto en la válvula,</li>
                <li>el alcance de cualquier fuga mientras estaba en servicio,</li>
                <li>cualquier otra evidencia de mal funcionamiento,</li>
                <li>si algún disco de ruptura bajo la válvula de alivio de presión ha sido reemplazado.</li>
            </ul>
            <p>Además, deben verificarse los registros del rendimiento de la válvula durante las operaciones anteriores para determinar si se necesitan cambios en los materiales o componentes de la válvula o en el intervalo de inspección.</p>
        </div>
        <div class="subsection">
            <h4>6.2.5 Retirada del Dispositivo del Sistema en Operación</h4>
            <p>Precaución—La retirada de un dispositivo de alivio de presión del equipo en operación debe planificarse para minimizar su duración. La mayoría de las válvulas de alivio de presión tienen una apariencia robusta que puede oscurecer el hecho de que son instrumentos de precisión con tolerancias muy cercanas y dimensiones críticas. Debe tenerse precaución al retirar para no invalidar la prueba de apertura tal como se recibió.</p>
            <p>Deben seguirse los pasos de precaución en 6.2.1. Antes de que una válvula de alivio de presión sea inspeccionada y/o reparada mientras el equipo está en operación, deben tomarse las siguientes precauciones.</p>
            <ul>
                <li>Solo una persona autorizada debe aislar un dispositivo de alivio cerrando cualquier válvula de bloqueo adyacente aguas arriba o aguas abajo (véase ASME BPVC Sección VIII, División 1, Apéndice M). Esto puede requerir proporcionar o identificar protección de alivio alternativa.</li>
                <li>El espacio entre el dispositivo de alivio y cualquier válvula de bloqueo adyacente debe ventilarse a una ubicación segura para liberar el fluido de carga atrapado y determinar si la válvula de bloqueo está reteniendo.</li>
                <li>Si no se instala una válvula de bloqueo en el lado aguas abajo de un dispositivo de alivio que descarga en un colector común, debe aplicarse una tapa ciega u otro aislamiento adecuado para evitar la descarga a través de la tubería de salida abierta en caso de que uno de los otros dispositivos de alivio se abra, para evitar la entrada de aire si el colector opera por debajo de la presión atmosférica, y/o para evitar el flujo inverso si el colector opera por encima de la presión atmosférica.</li>
                <li>En situaciones donde un dispositivo de alivio va a ser servido en su lugar, debe insertarse una tapa ciega o debe estar en su lugar otro dispositivo de aislamiento positivo aguas arriba/aguas abajo del dispositivo de alivio de presión antes de que el dispositivo de alivio de presión sea parcialmente desmontado.</li>
                <li>Cuando se retira un dispositivo de alivio, deben colocarse tapas ciegas u otras cubiertas adecuadas sobre las tuberías/válvulas abiertas para proteger las superficies de asiento y evitar la entrada de material extraño.</li>
            </ul>
            <p>Precaución—Debe considerarse el potencial de daño causado por bloquear la ventilación antes de instalar cubiertas sobre ventilaciones expuestas (por ejemplo, efectos de vacío).</p>
            <ul>
                <li>Si hay un dispositivo de disco de ruptura asociado con la válvula de alivio de presión y el disco de ruptura se retira de su portador como parte de la retirada de la válvula de alivio acompañante, deben seguirse las recomendaciones del fabricante para el reemplazo del disco, ya que el disco podría dañarse fácilmente y podría no abrirse a la presión adecuada si se reutiliza.</li>
                <li>Todas las tapas ciegas deben retirarse después de que el dispositivo de alivio haya sido reinstalado después de la inspección, reparación o reemplazo.</li>
                <li>Las válvulas de bloqueo en la entrada y salida deben abrirse y bloquearse o precintarse en esa posición. La Figura 41 muestra una instalación de válvula de alivio de presión con las válvulas de bloqueo precintadas abiertas. Las válvulas de bloqueo utilizadas con dispositivos de alivio deben verificarse para tener un área de flujo suficiente (por ejemplo, paso completo) para evitar la restricción del flujo y la caída de presión excesiva. En casos donde hay válvulas de alivio de repuesto instaladas, la válvula de bloqueo de entrada de la repuesto debe estar cerrada. El lado de salida debe protegerse de la sobrepresión causada por fugas a través del bloque de entrada y la válvula de alivio. La válvula de bloqueo de salida podría estar bloqueada abierta o precintada, o podrían proporcionarse medios positivos de ventilación si la salida está cerrada. Para dispositivos en servicios altamente corrosivos (por ejemplo, servicio principal de ácido fluorhídrico (HF)), considere métodos para verificar que la válvula esté completamente abierta.</li>
                <li>Una válvula de alivio de presión no debe considerarse como una válvula de aislamiento positivo cuando el equipo que está protegiendo está fuera de servicio. Si la válvula de alivio de presión permanece en su lugar durante este tiempo, entonces deben realizarse operaciones de cierre adecuadas de la válvula de bloqueo de aislamiento.</li>
            </ul>
            
            <div class="figure-container">
                <img src="images/api576_figure_41.png" class="figure-image">
                <p class="figure-caption">Figura 41—Válvulas de Bloqueo en Entrada y Salida de Válvula de Alivio de Presión Precintadas Abiertas</p>
            </div>
        </div>
        <div class="subsection">
            <h4>6.2.6 Inspección Inicial</h4>
            <p>Muchos tipos de depósitos o productos de corrosión en una válvula de alivio de presión pueden estar sueltos y pueden caerse durante el transporte de la válvula al taller para inspección, pruebas, mantenimiento y reajuste. Tan pronto como una válvula ha sido retirada del sistema, debe realizarse una inspección visual. La Figura 42 muestra un ejemplo de depósitos de azufre en la salida de una válvula de alivio de presión. Cuando el ensuciamiento es un problema, puede ser prudente recolectar muestras para pruebas y registrar las ubicaciones y apariencias de los depósitos. Cualquier obstrucción en la válvula debe registrarse y retirarse.</p>
            <p>Precaución—Las válvulas que han estado expuestas a materiales peligrosos para los humanos o que pueden contener material que podría ser una fuente de autoignición deben manejarse con precauciones especiales.</p>
            <p>Algunas precauciones a seguir al inspeccionar válvulas expuestas a materiales peligrosos incluyen las siguientes.</p>
            <ul>
                <li>Evaluar el potencial de que la válvula contenga materiales pirofóricos [por ejemplo, sulfuro de hierro (FeS)] o materiales reactivos, y determinar las precauciones adecuadas para el material involucrado.</li>
                <li>Las válvulas en servicio de ácido o cáustico deben manejarse con mucho cuidado, adhiriéndose a procedimientos de manejo rigurosos antes de la prueba de apertura previa de la válvula de alivio de presión "tal como se retiró". Después de la apertura previa, las válvulas de alivio de presión deben neutralizarse inmediatamente. Incluso después de la neutralización, deben tomarse las precauciones de seguridad indicadas por las hojas de datos de seguridad de materiales/hoja de datos de seguridad (MSDS)/(SDS) y otras fuentes apropiadas de información de manejo.</li>
            </ul>
            <p>A veces se utilizan discos de ruptura para proteger otros dispositivos de alivio de presión de la corrosión. Normalmente, en este caso, un disco de ruptura no puede inspeccionarse sin ser retirado. Por lo tanto, la inspección del disco debe ser parte de la rutina desarrollada para la inspección de la válvula de alivio de presión.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_42.png" class="figure-image">
                <p class="figure-caption">Figura 42—Depósitos de Azufre en el Cuerpo de la Válvula</p>
            </div>
        </div>
        <div class="subsection">
            <h4>6.2.7 Inspección de la Tubería Adyacente de Entrada y Salida</h4>
            <p>Cuando un dispositivo de alivio de presión es retirado de servicio, la tubería aguas arriba y aguas abajo a menudo está abierta y disponible para inspección. Sin embargo, donde las válvulas de bloqueo están cerradas para permitir la retirada de dispositivos de alivio del equipo durante la operación, generalmente es imposible inspeccionar directamente esta tubería. En servicios con potencial de ensuciamiento, debe considerarse la radiografía de perfil para la tubería aguas arriba o aguas abajo de las válvulas de alivio de presión, buscando ubicaciones donde los depósitos de ensuciamiento potencial puedan recolectarse que podrían restringir el flujo o causar corrosión bajo depósitos.</p>
            <p>La inspección de la tubería en el dispositivo de alivio de presión a menudo indicará la condición de la tubería de proceso cuyo interior no es visible. La tubería debe verificarse en busca de corrosión, indicios de adelgazamiento y depósitos que podrían interferir con el funcionamiento del dispositivo. El carácter de los depósitos puede indicar la causa de cualquier fuga de la válvula en un sistema cerrado.</p>
        </div>
        <div class="subsection">
            <h4>6.2.8 Transporte de Dispositivos de Alivio de Presión al Taller</h4>
            <p>El envío y transporte incorrectos de los dispositivos de alivio de presión pueden tener efectos detrimentales en el funcionamiento del dispositivo. Los dispositivos de alivio de presión deben tratarse con las mismas precauciones que la instrumentación, teniendo cuidado de evitar una manipulación incorrecta o contaminación antes de la instalación. La manipulación incorrecta durante el transporte al taller de reparación también puede resultar en pruebas de presión de ajuste "tal como se recibió" inexactas, lo que puede causar ajustes incorrectos a los intervalos de inspección del dispositivo de alivio.</p>
            <p>Se recomiendan las siguientes prácticas.</p>
            <ul>
                <li>Las válvulas bridadas deben estar aseguradas con pernos a paletas en posición vertical para evitar cargas laterales en las superficies de guía.</li>
                <li>Manejo cuidadoso de las válvulas roscadas durante el transporte de manera que no se dañen las conexiones roscadas.</li>
                <li>La conexión de entrada y salida de la válvula, las conexiones de drenaje y las ventilaciones del sombrerillo deben protegerse durante el envío y almacenamiento para evitar la contaminación interna de la válvula. Asegúrese de que todas las cubiertas y/o tapas sean retiradas antes de la instalación. La tubería de las válvulas operadas por piloto también debe protegerse de daños.</li>
                <li>Las palancas de levantamiento deben estar cableadas o aseguradas para que no puedan moverse mientras la válvula se está enviando o almacenando. Estos cables deben etiquetarse para su retirada por el fabricante o taller de reparación y retirarse antes de que la válvula se ponga en servicio.</li>
                <li>Los discos de ruptura deben manejarse por los bordes del disco. Cualquier daño en la superficie del disco puede afectar la presión de ruptura.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>6.2.9 Inspección, Prueba, Mantenimiento y Ajuste de Válvulas de Alivio de Presión Cargadas por Resorte de Acción Directa Utilizadas para Recipientes a Presión sin Fuego</h4>
            <div class="subsection">
                <h4>6.2.9.1 Determinación de la Presión de Apertura "Tal como se Recibió"</h4>
                <p>Siempre que sea posible, la prueba de apertura "tal como se recibió" debe realizarse antes de la limpieza para obtener resultados precisos de la prueba de apertura "tal como se recibido" que ayudarán a establecer el intervalo apropiado de inspección y servicio. La limpieza de los depósitos antes de la prueba de apertura "tal como se recibido" puede eliminar depósitos que habrían impedido que la válvula se abriera a la presión de ajuste. La prueba de apertura en la condición "tal como se recibido" para válvulas en servicios de ácido/cáustico/tóxicos puede realizarse utilizando un banco de prueba de apertura construido en el sitio en el área donde está instalada la válvula o contratando con un proveedor de servicios que tenga un banco de prueba portátil que pueda ser traído al sitio. Verifique que los sellos estén intactos en la cubierta del tornillo de ajuste de presión y la cubierta del tornillo del anillo de blowdown. Antes de desmontar la válvula, debe obtenerse la presión de ajuste de la válvula. Generalmente, la válvula de alivio de presión se monta en el banco de prueba, y la presión de entrada se aumenta lentamente. La presión a la que la válvula alivia se registra como la presión de apertura "tal como se recibido".</p>
                <p>Si la válvula se abre inicialmente a la presión de prueba diferencial en frío (CDTP), no se necesitan más pruebas para determinar la presión de apertura "tal como se recibido". Si la apertura inicial es a una presión superior a la CDTP, la válvula debe probarse una segunda vez. Si luego se abre cerca de la CDTP, es posible que la válvula no se haya abierto originalmente a la CDTP debido a los depósitos. Si en el segundo intento la válvula no se abre dentro de las tolerancias permitidas por ASME BPVC, o el ajuste de la válvula estaba originalmente en error o cambió durante la operación. Las válvulas de alivio de presión que no se abren a presiones de entrada del 150 % de la CDTP deben considerarse atascadas cerradas.</p>
                <p>Si la apertura inicial es a una presión inferior a la CDTP, el resorte puede haberse debilitado, la válvula puede haber sido ajustada incorrectamente en su última prueba, el asiento puede haber sido dañado, o el ajuste cambió durante la operación. Es la primera prueba que se registra como la presión de apertura "tal como se recibido". Esta presión de apertura "tal como se recibido" se utiliza para determinar el intervalo de inspección.</p>
                <p>Precaución—Si la válvula está extremadamente sucia y sucia cuando se recibe y la actuación "tal como se recibió" de la válvula puede dañar los asientos de la válvula, el usuario puede renunciar a la prueba "tal como se recibido" y en su lugar reducir el intervalo de inspección. Después de reducir el intervalo de inspección de la válvula, la válvula debe estar limpia en la próxima inspección. Si no está limpia, el intervalo de inspección debe acortarse nuevamente o deben tomarse otras medidas para reducir el ensuciamiento.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.2 Resultados de la Prueba de Apertura "Tal como se Recibió"</h4>
                <p>Para asegurar el funcionamiento fiable de las válvulas de alivio, es importante comprender la causa raíz de las fallas en la prueba de apertura "tal como se recibido" para determinar si son necesarias acciones correctivas. Las válvulas de alivio pueden fallar la prueba de apertura "tal como se recibido" de varias maneras:</p>
                <ul>
                    <li>atascada cerrada o no se abre,</li>
                    <li>el dispositivo se abre parcialmente,</li>
                    <li>se abre por encima de la tolerancia de presión de ajuste,</li>
                    <li>fuga a través del dispositivo,</li>
                    <li>apertura espuria/prematura,</li>
                    <li>dispositivo atascado abierto.</li>
                </ul>
                <p>El propietario-usuario debe definir los criterios que constituyen una falla en la prueba de apertura "tal como se recibido". El propietario-usuario puede definir criterios para la investigación de fallas basados en la presión de apertura "tal como se recibido" como un porcentaje de la presión de ajuste y puede especificar diferentes niveles de rigor de investigación dependiendo de la gravedad de la falla y la criticidad de la aplicación. Por ejemplo, en API 581 una válvula de alivio que no se abre al 130 % de la presión de ajuste se considera una falla en la apertura. Como criterio predeterminado para una válvula atascada cerrada, muchas empresas utilizan el 150 % de la presión de ajuste, más allá del cual la válvula se clasifica como atascada cerrada si no se abre, y la prueba se discontinúa.</p>
                <p>Precaución—La presión de prueba límite a la que se somete la válvula puede no ser tan alta como los valores indicados anteriormente. Algunos usuarios finales y organizaciones de reparación pueden utilizar valores más bajos debido a preocupaciones sobre daños a la válvula, el equipo de prueba o lesiones al personal. Esto se vuelve más significativo a presiones de ajuste más altas.</p>
                <p>La investigación debe centrarse en el desarrollo de un plan de acción correctiva que aborde el modo de falla observado y puede incluir una reducción en el intervalo de inspección de la válvula de alivio y/o cambios de diseño relacionados con la instalación, selección de materiales, selección del dispositivo de alivio de presión, etc.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.3 Inspección Visual</h4>
                <p>Después de la prueba de apertura "tal como se recibido", una válvula debe ser inspeccionada visualmente para estimar su condición. Esta inspección debe ser realizada por el mecánico de reparación de válvulas de alivio de presión del taller de reparación autorizado, a menos que se note corrosión inusual, depósitos o condiciones en la válvula de alivio de presión. Los resultados de esta inspección deben anotarse en los formularios apropiados. Los puntos que deben verificarse pueden incluir pero no limitarse a:</p>
                <ul>
                    <li>las bridas, en busca de evidencia de picaduras, rugosidad o disminuciones en el ancho de las superficies de asiento;</li>
                    <li>los resortes, en busca de evidencia de corrosión o grietas y para el rango de presión correcto a la presión y temperatura de operación de la válvula;</li>
                    <li>si la válvula es del tipo fuelle, el fuelle en busca de evidencia de corrosión, grietas o deformación;</li>
                    <li>las posiciones de los tornillos de ajuste y las aberturas en el sombrerillo;</li>
                    <li>las boquillas de entrada y salida, en busca de evidencia de depósitos de material extraño o corrosión;</li>
                    <li>las superficies externas, en busca de cualquier indicación de atmósfera corrosiva o daño mecánico;</li>
                    <li>el espesor de la pared del cuerpo;</li>
                    <li>componentes y materiales de la válvula, para coincidir con la información en la etiqueta de identificación y la tarjeta de especificación;</li>
                    <li>los pilotos y partes asociadas.</li>
                </ul>
                <p>Precaución—Cuando se nota corrosión inusual, depósitos o condiciones en la válvula de alivio de presión, un inspector que represente al usuario debe ayudar en la inspección.</p>
                <p>Precaución—Si la válvula de alivio de presión es de equipo que maneja materiales peligrosos, debe tenerse precaución durante la inspección.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.4 Desmontaje de la Válvula</h4>
                <p>Después de que la válvula es recibida y se completan sus pruebas e inspección visual inicial, puede requerir desmontaje para una inspección y reparación completa en el taller. Si la válvula ha sido probada en el intervalo apropiado establecido de acuerdo con API 510, y se sigue la guía en 6.2.9.1 para determinar la presión de apertura "tal como se recibido", y los resultados de la prueba "tal como se recibido" muestran que la válvula prueba correctamente, entonces el desmontaje de la válvula para una mayor inspección puede no ser necesario, a menos que se requiera la restauración de la válvula a la condición "como nueva".</p>
                <p>Cuando sea apropiado, las válvulas deben desmontarse cuidadosamente de acuerdo con los manuales y recomendaciones del fabricante. Antes de desmontar válvulas en servicio de hidrocarburos ligeros, limpie completamente la válvula con químicos que sean compatibles con el material de la válvula para evitar una inflamación debido a chispas creadas por las operaciones de desmontaje. Deben estar disponibles instalaciones adecuadas para la segregación de las partes de la válvula a medida que se desmonta la válvula. En cada etapa del proceso de desmontaje, las diversas partes de la válvula deben inspeccionarse visualmente en busca de evidencia de desgaste y corrosión. El husillo, guía, disco y boquilla de la válvula requieren inspección visual. Los fuelles en las válvulas balanceadas deben verificarse en busca de grietas u otras fallas que puedan afectar el rendimiento.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.5 Limpieza e Inspección de Partes</h4>
                <p>Para mantener separadas las partes de cada válvula de las de otras válvulas, las partes de la válvula deben marcarse adecuadamente, segregarse y limpiarse a fondo. Las partes de la válvula que con mayor frecuencia requieren limpieza son las boquillas, resortes, portadiscos, guías y discos. Los depósitos que son difíciles de eliminar deben limpiarse con disolventes, cepillarse con alambre, arenarse con perlas de vidrio o rasparse cuidadosamente.</p>
                <p>Después de ser limpiadas, verifique cada parte cuidadosamente con el equipo adecuado para medir las dimensiones de la válvula, con referencia frecuente a los dibujos y literatura adecuados.</p>
                <p>Los componentes deben verificarse en busca de desgaste y corrosión. Las superficies de asiento en el disco y la boquilla deben inspeccionarse en busca de rugosidad o daño, que podría resultar en fugas en la válvula. También deben verificarse con calibres de asiento adecuados para asegurar que ni el desgaste ni el mecanizado previo hayan causado que las dimensiones del asiento excedan las tolerancias del fabricante. La planitud del asiento puede verificarse con anillos de lapido adecuados recomendados por el fabricante, superficies planas ópticas u otros dispositivos de inspección adecuados. Los resortes deben verificarse para la tasa adecuada. Los resortes también deben verificarse en busca de grietas o deformación. El ajuste entre la guía y el disco o portadiscos debe verificarse para tener una holgura adecuada e inspeccionarse visualmente en busca de evidencia de rayaduras. La boquilla debe verificarse en busca de obstrucciones y deformación. Los fuelles deben verificarse en busca de fugas, grietas o puntos delgados que puedan desarrollarse en fugas. Además, si el fuelle se ha colapsado, probablemente ha sido sometido a una contrapresión mayor que su presión de diseño. La alta contrapresión puede deberse a restricciones aguas abajo que son creadas por depósitos o a flujos de alivio más altos que los utilizados en el diseño original. Debe determinarse la causa y tomarse una acción correctiva.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.6 Acondicionamiento y Reemplazo de Partes</h4>
                <p>Las partes que están desgastadas más allá de la tolerancia o dañadas deben ser reemplazadas o acondicionadas. Los resortes, fuelles y componentes de un solo uso dañados, incluso aquellos que aparentemente no están dañados, deben ser reemplazados. Todos los artículos blandos, incluso aquellos que aparentemente no están dañados, deben ser reemplazados. Las piezas de repuesto para una válvula de alivio de presión particular deben obtenerse de su fabricante. El cuerpo, bridas y sombrerillo de la válvula pueden ser acondicionados mediante medios adecuados para reparaciones a otras partes que contienen presión de material similar. Si se encuentra evidencia de desgaste o daño en el disco o la boquilla, sus superficies de asiento pueden mecanizarse o lapidarse. Siga las recomendaciones del fabricante al acondicionar las partes de la válvula.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.7 Reensamblaje de la Válvula</h4>
                <p>Después de que la válvula ha sido inspeccionada y sus partes han sido acondicionadas o reemplazadas, debe ser reensamblada de acuerdo con las instrucciones del fabricante. Las superficies de asiento de la boquilla y el disco no deben ser aceitadas. Las holguras entre las partes ensambladas deben verificarse. De acuerdo con las instrucciones del fabricante, el resorte debe ajustarse para establecerse lo más cerca posible de la presión de ajuste deseada. Los anillos de blowdown deben ajustarse de acuerdo con las recomendaciones del fabricante para el servicio apropiado de vapor o líquido, y los ajustes deben anotarse para referencia futura. Como la mayoría de los bancos de prueba no tienen suficiente capacidad para medir el blowdown real, deben evaluarse las recomendaciones del fabricante y el rendimiento pasado para estimar cualquier ajuste necesario.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.8 Ajuste de la Presión de Ajuste de la Válvula</h4>
                <p>Después de que la válvula ha sido acondicionada y reensamblada, su resorte debe ajustarse por última vez para asegurar que la válvula aliviará a la CDTP requerida. Aunque los procedimientos de prueba variarán con la práctica local de la planta, generalmente la válvula se monta en el banco de prueba y la presión de aire o agua se aumenta lentamente hasta que la válvula alivia. Deben utilizarse las recomendaciones del fabricante para guiar el ajuste del resorte a la configuración correcta. Si se requiere una nueva presión de ajuste, no deben excederse los límites del fabricante para el ajuste del resorte. Si es necesario, debe proporcionarse un resorte diferente.</p>
                <p>Después de que la válvula ha sido ajustada, debe ser accionada al menos una vez para probar la precisión del ajuste. Algunos fabricantes recomiendan que una válvula sea accionada (abierta) al menos tres veces, ya que el primer ciclo ayuda a alinear todos los componentes después de la revisión, mientras que los ciclos sucesivos verifican la presión de ajuste. Normalmente, para las válvulas de ASME BPVC Sección VIII, la desviación de la presión de ajuste encontrada con respecto a la presión de ajuste de la placa de identificación no debe exceder ±2 psi (±15 kPa) para presiones menores o iguales a 70 psi (500 kPa) o ±3 % para presiones mayores a 70 psi (500 kPa) [véase ASME BPVC Sección VIII, División 1, Párrafo UG 134(d)(1)]. Para las válvulas de alivio de presión que cumplen con ASME BPVC Sección VIII, División 1, Párrafo UG 125(c)(3), la desviación no debe ser menor del 0 % ni mayor del +10 %. Cualquier tolerancia para el ajuste en caliente debe hacerse de acuerdo con los datos del fabricante. Cualquier ajuste a la CDTP requerido para compensar la contrapresión en servicio, la temperatura de servicio o el medio de prueba debe hacerse de acuerdo con los datos de especificación de la válvula del fabricante o del usuario.</p>
                <p>Donde la presión de ajuste de la válvula de alivio de presión está por debajo de 15 psig, como una válvula de alivio de presión operada por piloto en un tanque de almacenamiento de baja presión API 620, la tolerancia de ±2 psi puede ser excesiva y podría exceder sustancialmente la clasificación de presión del tanque. El propietario-usuario debe especificar la tolerancia del punto de ajuste y la precisión y rango del manómetro requeridos que se utilizarán durante la verificación de la presión de ajuste.</p>
                <p>Siga el procedimiento de prueba recomendado por el fabricante de la válvula cuando la válvula de alivio de presión se prueba con agua. Típicamente, la presión se aumentará lentamente al ajuste requerido. La descarga debe observarse en busca de evidencia de fuga, o el manómetro de prueba debe observarse para una caída momentánea de la presión. Un pequeño flujo continuo de agua de la descarga de la válvula generalmente indica que se ha alcanzado la CDTP. La presión a la que la válvula libera debe estar dentro de las tolerancias indicadas anteriormente antes de que la válvula sea aprobada para el servicio. Consulte NB-18 o el manual de mantenimiento del fabricante para la definición de presión de ajuste para válvulas de servicio de líquido.</p>
                <p>Las válvulas de alivio de presión ajustadas con agua pueden necesitar que el agua sea drenada y la válvula secada antes de la instalación para asegurar un funcionamiento adecuado en servicio.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.9 Verificación de la Estanqueidad de la Válvula</h4>
                <p>Una vez que la válvula está ajustada para abrir a su CDTP, debe verificarse en busca de fugas. En el banco de prueba, puede probarse para estanqueidad del asiento aumentando la presión en la válvula hasta la presión de simmer especificada por el fabricante (a menudo esto es el 90 % de la CDTP) y observando el lado de descarga de la válvula en busca de evidencia de fuga. Vea la Figura 43 o consulte API 527 para la tasa de fuga permitida.</p>
                
                <div class="figure-container">
                    <img src="images/api576_figure_43.png" class="figure-image">
                    <p class="figure-caption">Figura 43—Detector de Fugas para Válvulas de Seguridad y Alivio de Presión</p>
                </div>
                
                <p>Donde sea aplicable, el sombrerillo, los fuelles, las juntas con empaquetadura y la tubería/tubería auxiliar deben inspeccionarse en busca de fugas.</p>
                <p>Precaución—Para sistemas cerrados, la válvula debe someterse a una prueba de contrapresión para verificar fugas en la conexión del sombrerillo al cuerpo, fuelles, junta del fuelle (si aplica), en la conexión de la tapa al sombrerillo, y en la conexión de la boquilla completa al cuerpo (consulte ASME BPVC Sección VIII, División 1, Párrafo UG-136 (d)(3)).</p>
                <p>Las fugas de las válvulas de alivio de presión en servicio deben minimizarse debido a los peligros potenciales para el medio ambiente, el personal y el equipo. Las fugas pueden conducir a válvulas ensuciadas e inoperables, así como a una posible pérdida de producto.</p>
            </div>
            <div class="subsection">
                <h4>6.2.9.10 Finalización de los Registros Necesarios</h4>
                <p>Todos los registros necesarios deben completarse antes de que una válvula se vuelva a poner en servicio. Al ayudar a determinar cuándo reemplazar los componentes de la válvula y cuándo retirarla, los registros son críticos para su futuro uso efectivo. Forman el registro histórico de las condiciones y servicios bajo los cuales operó la válvula. La retención de registros de mantenimiento y prueba puede ser requerida por regulaciones gubernamentales. Vea el Anexo B para formularios de ejemplo. Para una explicación de los términos de placa de identificación requeridos por el trabajo de reparación, consulte API 526.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>6.3 Inspección, Prueba, Mantenimiento y Ajuste de Válvulas Cargadas por Resorte de Acción Directa en Equipo</h4>
            <p>Generalmente es más económico y efectivo realizar una inspección/revisión en taller en el taller a los intervalos requeridos que en el equipo. Sin embargo, cuando una válvula opera en un servicio sin ensuciamiento, la experiencia puede indicar que la inspección de la válvula mientras está en el equipo es segura y adecuada. Cuando se han tomado las precauciones de seguridad adecuadas (véase 6.2.2), las válvulas de bloqueo de entrada y salida pueden cerrarse, y el sombrerillo de la válvula puede retirarse para inspección inmediata, prueba y cualquier reparación menor por una persona calificada. Cuando se indican reparaciones mayores, la válvula debe enviarse al taller.</p>
            <p>En ciertos casos, la válvula puede ser probada para presión de ajuste y fuga con un medio de prueba de gas inerte a través de un purgador. Este método es inferior al procedimiento del banco de prueba discutido en el Anexo A. Produce resultados de prueba inexactos para las válvulas con asiento metálico a menos que se proporcione un volumen aguas arriba suficiente que permita que la válvula se abra a aproximadamente la mitad del levantamiento completo. Si el volumen aguas arriba disponible no es suficiente para causar que la válvula alcance aproximadamente medio levantamiento, se recomienda el uso de un dispositivo de levantamiento restringido para evitar dañar la válvula por la carga de impacto causada por un cierre demasiado rápido.</p>
            <p>Una válvula puede ser probada en operación con un dispositivo de asistencia de levantamiento que determinará la presión de ajuste de la válvula. Estos dispositivos aplican una carga de levantamiento auxiliar al portadiscos y husillo de la válvula y, junto con el levantamiento de la válvula, incorporan un método para determinar la apertura de la válvula y la carga aplicada en el punto de apertura. Se utilizan numerosas tecnologías para determinar el punto de apertura y la correlación de la carga aplicada. Estas tecnologías van desde una simple notificación audible hasta el análisis de datos basado en software, sensores de desplazamiento o acústicos. La presión de ajuste de la válvula se calcula dividiendo la carga en la apertura por el área del asiento de la válvula y luego sumando el valor de la presión de entrada. La salida de datos va desde un resumen de carga, presión de entrada y presión de ajuste hasta la graficación de valores medidos y calculados como carga aplicada, levantamiento de la válvula y presión de entrada. Este método puede o no ser aceptado por las jurisdicciones locales como un método válido para verificar o ajustar las presiones de ajuste de la válvula.</p>
            <p>Hay peligros potenciales a considerar al aplicar el método de prueba de asistencia de levantamiento:</p>
            <ul>
                <li>falla potencial del disco de ruptura en combinaciones de disco de ruptura/válvula;</li>
                <li>posible introducción de material extraño en el área de asiento de la válvula, lo que puede resultar en daño mecánico y/o fuga a través de la válvula al reasentarse;</li>
                <li>posible liberación de material de proceso a la atmósfera;</li>
                <li>falla potencial del fuelle, en una válvula equipada con fuelle, causará la liberación de proceso a la atmósfera a través de las aberturas del sombrerillo de la válvula;</li>
                <li>la mayoría de los dispositivos son electrónicos y como tales deben analizarse para su idoneidad en entornos peligrosos;</li>
                <li>la válvula puede no reasentarse herméticamente después de la prueba, lo que requiere acciones apropiadas para fugas en la válvula;</li>
                <li>la prueba con la presión de entrada cerca del punto de ajuste de la válvula puede causar que la válvula se abra, lo que requiere una reducción en la presión de operación o un dispositivo mecánico para cerrar la válvula.</li>
            </ul>
            <p>Precaución—Este método de verificar la presión de ajuste y el funcionamiento de una válvula de seguridad identifica la presión de apertura y no debe considerarse una actividad de rutina para determinar la integridad del dispositivo de alivio de presión. El método de prueba de asistencia de levantamiento para verificar la presión de ajuste de una válvula de alivio de presión no satisface la necesidad de verificar el ensuciamiento de la línea de entrada/salida o de retirar una válvula para inspección física y verificar que todos sus componentes están en condiciones de trabajo satisfactorias y seguras. El método de prueba de asistencia de levantamiento tampoco verifica el ajuste de blowdown de la válvula y la fuga del asiento al 90 % de la presión de ajuste de la válvula.</p>
        </div>
    </div>
    `
});