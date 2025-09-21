// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 4 para API 577
registerChapter('API577', {
    id: 4,
    title: "Welding Processes",
    titleEs: "Procesos de Soldadura",
    content: `<h2>Welding Processes</h2>
    <h3>4.1 General</h3>
    <p>The inspector should understand the basic arc welding processes most frequently used in the fabrication and repair of refinery and chemical process equipment. These processes include shielded metal arc welding (SMAW), gas tungsten arc welding (GTAW), gas metal arc welding (GMAW), flux-cored arc welding (FCAW), submerged arc welding (SAW), stud welding (SW), plasma arc welding (PAW), and electrogas welding (EGW). Descriptions of less frequently used welding process are available in the bibliography. Each process has advantages and limitations depending upon the application and can be prone to specific types of discontinuities.</p>
    
    <h3>4.2 Shielded Metal Arc Welding (SMAW)</h3>
    <h4>4.2.1 General</h4>
    <p>SMAW is the most widely used of the various arc welding processes. SMAW creates an arc between a covered electrode and the weld pool. It employs the heat of the arc, originating from the tip of a consumable covered electrode, to melt the base metal. Shielding is provided by the decomposition of the electrode coating, without the application of pressure, and with filler metal from the electrode. Either alternating current (AC) or direct current (DC) may be employed, depending on the required mechanical properties, welding power supply, and specific electrode selected. A constant-current (CC) power supply is preferred. SMAW is a manual welding process. See Figure 1 and Figure 2 for schematics of the SMAW welding process and electrode deposition, respectively.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_01.png" alt="Figure 1 - SMAW Welding Process" class="figure-image">
        <p class="figure-caption">Figure 1 — SMAW Welding Process</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_02.png" alt="Figure 2 - SMAW Welding Electrode Deposition" class="figure-image">
        <p class="figure-caption">Figure 2 — SMAW Welding Electrode Deposition</p>
    </div>
    
    <h4>4.2.2 Electrode Covering</h4>
    <p>Depending on the type of electrode being used, the covering performs one or more of the following functions:</p>
    <ul>
        <li>provides a gas to shield the arc and prevent excessive atmospheric contamination of the molten filler metal;</li>
        <li>provides scavengers, deoxidizers, and fluxing agents to cleanse the weld and prevent excessive grain growth in the weld metal;</li>
        <li>establishes the electrical characteristics of the electrode, stabilizes the welding arc, and influences operability in various welding positions;</li>
        <li>provides a slag blanket to protect the molten weld metal from the atmosphere and enhances the mechanical properties, bead shape, and surface cleanliness of the weld metal;</li>
        <li>provides a means of adding alloying elements to produce appropriate weld metal chemistry and mechanical properties and to increase deposition efficiency.</li>
    </ul>
    
    <h4>4.2.3 Advantages of SMAW</h4>
    <p>Following are some commonly accepted advantages of the SMAW process.</p>
    <ul>
        <li>The equipment is relatively simple, inexpensive, and portable.</li>
        <li>The process can be used in areas of limited access.</li>
        <li>The process is less sensitive to wind and draft than other welding processes.</li>
        <li>The process is suitable for most of the commonly used metals and alloys.</li>
        <li>The level of training and experience required is lower than for other welding processes.</li>
    </ul>
    
    <h4>4.2.4 Limitations of SMAW</h4>
    <p>Limitations associated with SMAW include the following.</p>
    <ul>
        <li>Deposition rates are lower than for other processes such as GMAW.</li>
        <li>Slag must be removed from every deposited weld pass, at stops and starts, and before depositing a weld bead adjacent to or onto a previously deposited weld bead.</li>
    </ul>
    
    <h3>4.3 Gas Tungsten Arc Welding (GTAW)</h3>
    <h4>4.3.1 General</h4>
    <p>GTAW is an arc welding process that generates an arc between a nonconsumable tungsten electrode and the weld pool. The process is commonly, and somewhat incorrectly, referred to as tungsten inert gas (TIG) or heliarc welding, and is used with a shielding gas and without the application of pressure. GTAW can be used with or without the addition of filler metal. The CC-type power supply can be either DC or AC, and depends largely on the metal to be welded. Direct current welding is typically performed with the electrode negative (DCEN) polarity. DCEN welding offers the advantages of deeper penetration and faster welding speeds. Alternating current provides a cathodic cleaning (sputtering) that removes refractory oxides from the surfaces of the weld joint, which is necessary for the welding of nonferrous materials such as aluminum and magnesium. The cleaning action occurs during the portion of the AC wave, when the electrode is positive with respect to the work piece. See Figure 3 and Figure 4 for schematics of the GTAW equipment and welding process.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_03.png" alt="Figure 3 - GTAW Welding Equipment" class="figure-image">
        <p class="figure-caption">Figure 3 — GTAW Welding Equipment</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_04.png" alt="Figure 4 - GTAW Welding Process" class="figure-image">
        <p class="figure-caption">Figure 4 — GTAW Welding Process</p>
    </div>
    
    <h4>4.3.2 Advantages of GTAW</h4>
    <p>Some commonly accepted advantages of the GTAW process include the following:</p>
    <ul>
        <li>produces high purity welds, generally free from defects;</li>
        <li>requires little postweld cleaning;</li>
        <li>allows for excellent control of root pass weld penetration;</li>
        <li>can be used with or without filler metal, dependent on the application;</li>
        <li>produces a relatively defect- and contaminant-free root pass for those process services that may be more aggressive toward contaminated root passes.</li>
    </ul>
    
    <h4>4.3.3 Limitations of GTAW</h4>
    <p>Limitations associated with GTAW process are:</p>
    <ul>
        <li>lower deposition rates than the rates possible with consumable electrode arc welding processes,</li>
        <li>low tolerance for contaminants on filler or base metals,</li>
        <li>difficulty in shielding the weld zone properly in drafty environments, and</li>
        <li>greater operator skill is required than that for other methods such as SMAW.</li>
    </ul>
    
    <h3>4.4 Gas Metal Arc Welding (GMAW)</h3>
    <h4>4.4.1 General</h4>
    <p>GMAW is an arc welding process that produces an arc between a continuously fed filler metal electrode and the weld pool. The process is used with shielding from an externally supplied gas without the application of pressure. GMAW may be operated in semiautomatic, machine, or automated modes. It employs a constant voltage (CV) power supply, and uses either the short-circuiting, globular, spray, or pulsed transfer modes to transfer filler metal from the electrode to the work. The transfer mode is determined by several factors. The most influential are:</p>
    <ul>
        <li>magnitude and type of welding current;</li>
        <li>electrode diameter;</li>
        <li>electrode composition;</li>
        <li>electrode extension or contact tube-to-work distance (often referred to as "stick out");</li>
        <li>shielding gas.</li>
    </ul>
    <p>See Figure 5 and Figure 6 for schematics of the GMAW equipment and welding process.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_05.png" alt="Figure 5 - GMAW Equipment" class="figure-image">
        <p class="figure-caption">Figure 5 — GMAW Equipment</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_06.png" alt="Figure 6 - GMAW Welding Process" class="figure-image">
        <p class="figure-caption">Figure 6 — GMAW Welding Process</p>
    </div>
    
    <h4>4.4.2 Short Circuiting Transfer Mode (GMAW-S)</h4>
    <h5>4.4.2.1 General</h5>
    <p>GMAW-S encompasses the lowest range of both welding current and electrode diameters associated with the GMAW process. This process produces a fast freezing weld pool that is generally suited for joining thin sections, out-of-position welding, or root passes. Due to the fast-freezing nature of this process, there is high potential for lack of sidewall and interpass fusion when welding thick-wall equipment or a nozzle attachment. The shielding gas for this transfer mode is typically 75 % argon with 25 % CO2.</p>
    
    <h5>4.4.2.2 GMAW-MSC Transfer Mode (Modified Short Circuit)</h5>
    <p>The modified short-circuit GMAW mode, designated the GMAW-MSC process, has several proprietary derivatives of the short-circuiting transfer mode that use a modified waveform to reduce some problems associated with short-circuiting—mainly, spatter and a turbulent weld pool. These systems typically sense the progression of the short circuit as it occurs and modulate the current to limit the amount of force behind spatter and turbulence-producing events. GMAW-MSC power sources are software-driven to maintain optimum arc characteristics by closely monitoring and controlling the electrode current during all phases of the short circuit. There are a limited number of companies that manufacture welding power supplies that employ this technology.</p>
    <p>The GMAW-MSC transfer mode minimizes the disadvantages of GMAW-S while maintaining comparable weld metal deposition rates and achieving X-ray quality welds. The welding process has the capability to complete open root welds more rapidly than GTAW, with low heat input and no resulting lack of fusion (LOF). The lower heat input results in smaller heat-affected zones (HAZ) as well as reduced distortion and lesser chance of burn-through. The process appears to be more tolerant of inexperienced welders because GMAW-MSC is tolerant of gaps and capable of automatically maintaining the optimum wire feed speed and contact tip-to-work distance, while allowing the use of larger diameter GMAW consumables.</p>
    
    <h4>4.4.3 Globular Transfer Mode</h4>
    <p>The advantages of this transfer method are its relative low cost when carbon dioxide is used as a shielding gas, along with a high deposition rate. The maximum deposition rate for the globular arc transfer mode is about 6350 mm/min (250 in./min).</p>
    <p>The globular arc transfer mode is often considered the least desirable of the GMAW transfer modes due to its tendency to produce high heat, a poor weld surface, and weld spatter, as well as cold lap. This transfer mode uses relatively low current (less than 250 A). During welding, a ball of molten metal from the electrode tends to build up on the end of the electrode, often in irregular shapes, with a diameter up to twice that of the electrode. When the droplet detaches (i.e. by gravity or short circuiting) and is forced onto the work piece, it produces an uneven surface as well as excessive weld spatter. This transfer mode produces a high amount of heat and forces the welder to use a larger electrode wire to maintain a stable arc, which increases the size of the weld pool and causes greater residual stresses and distortion in the weld area. This welding process uses 100 % carbon dioxide as the shielding gas, and is limited to the flat and horizontal positions.</p>
    
    <h4>4.4.4 Spray Transfer Mode</h4>
    <p>The spray transfer mode results in a highly directed stream of discrete drops that are accelerated by arc forces. Since these drops are smaller than the arc length, short circuits do not occur and the amount of spatter generated is negligible. The inert gas shield allows the spray arc transfer mode to weld most metals. However, using this process on materials thinner than 0.250 in. (6 mm) may be difficult because of the high currents needed to produce the spray arc. The spray transfer mode allows for high weld metal deposition rates. At high deposition rates, the welding process may produce a weld metal pool that is too weak to be supported by surface tension alone (primarily dependent upon electrode diameter), which limits the use of the welding process in the vertical and overhead positions. Specialized power supplies have been developed to address the work thickness and welding position limitations. The maximum deposition rate for the spray arc transfer mode is about 150 in./min (3810 mm/min). This transfer mode is typically 98 % argon, 2 % oxygen. Depending upon the wire diameter and amperage, the shielding gas may have composition 80 % argon, 20 % oxygen.</p>
    
    <h4>4.4.5 Pulsed Transfer Mode</h4>
    <p>Pulsed arc GMAW was developed to overcome the thickness and welding position limitations of the Globular, Spray, and Short Circuit modes. This transfer mode provides:</p>
    <ul>
        <li>a low background/constant current to sustain the arc without providing enough energy to produce drops at the tip of the wire; and</li>
        <li>a superimposed/pulsing current with an amplitude greater than the transition current necessary for spray transfer.</li>
    </ul>
    <p>During the pulsing portion of the current cycle, one or more drops are formed and transferred to the workpiece. The frequency and amplitude of the pulses control the rate at which the wire melts. Pulsing provides the desirable features of spray arc transfer for joining sheet metals and welding in all positions. The maximum deposition rate for the pulsed arc transfer mode is about 5080 mm/min (200 in./min). The pulsed arc GMAW method requires a power source capable of providing current pulses with a frequency between 30 pulses/s and 400 pulses/s, and requires that the shielding gas be primarily argon with a low carbon dioxide concentration. The same shielding gas used for the spray transfer mode is typically used for the pulsed transfer mode as well.</p>
    
    <h4>4.4.6 Advantages of GMAW</h4>
    <p>Some commonly accepted advantages of the GMAW process include the following.</p>
    <ul>
        <li>It is the only consumable electrode process that can be used to weld most commercial ferrous and nonferrous metals and alloys.</li>
        <li>Its deposition rates are significantly higher than those obtained with SMAW and GTAW.</li>
        <li>Minimal postweld cleaning is required due to the absence of slag.</li>
    </ul>
    
    <h4>4.4.7 Limitations of GMAW</h4>
    <p>Limitations associated with GMAW include the following.</p>
    <ul>
        <li>The welding equipment is more complex, more costly, and less portable than that for SMAW.</li>
        <li>The welding arc must be protected from air drafts that can disperse the shielding gas.</li>
        <li>When using the GMAW-S process, the weld is more susceptible to lack of adequate fusion (see Section 11.3). As a result, ultrasonic examination (UT) is generally employed as the inspection method because the probability of detecting LOF is rather low using radiographic examination (RT) (see Sections 8.8 and 8.9).</li>
    </ul>
    
    <h3>4.5 Flux-Cored Arc Welding (FCAW)</h3>
    <h4>4.5.1 General</h4>
    <p>FCAW is an arc welding process that produces an arc between a continuously fed tubular electrode and the weld pool. The process is used with shielding gas evolved from a flux contained within the tubular electrode itself, with or without additional shielding from an externally supplied gas, and without the application of pressure. Normally a semiautomatic process, the use of FCAW depends on the type of electrodes available, the mechanical property requirements of the welded joints, and the joint designs and fit-up. The recommended power source is the DC CV type, similar to power sources used for GMAW. Figure 7 shows a schematic of FCAW equipment, and Figure 8 shows the welding process with additional gas shielding. Figure 9 shows a schematic of the self-shielded FCAW process where no additional gas is used.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_07.png" alt="Figure 7 - FCAW Equipment" class="figure-image">
        <p class="figure-caption">Figure 7 — FCAW Equipment</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_08.png" alt="Figure 8 - FCAW Welding Process" class="figure-image">
        <p class="figure-caption">Figure 8 — FCAW Welding Process</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_09.png" alt="Figure 9 - FCAW Welding Process, Self-shielded" class="figure-image">
        <p class="figure-caption">Figure 9 — FCAW Welding Process, Self-shielded</p>
    </div>
    
    <h4>4.5.2 Advantages of FCAW</h4>
    <p>Some commonly accepted advantages of the FCAW process include:</p>
    <ul>
        <li>metallurgical benefits that can be derived from alloying elements contained within the flux;</li>
        <li>slag that supports and shapes the weld bead, allowing for a slower cooling rate;</li>
        <li>higher deposition and productivity rates compared to other processes such as SMAW and GTAW;</li>
        <li>shielding produced at the surface of the weld that makes it more tolerant of stronger air currents than GMAW.</li>
    </ul>
    
    <h4>4.5.3 Limitations of FCAW</h4>
    <p>The following limitations are associated with the FCAW process.</p>
    <ul>
        <li>The equipment is more complex, more costly, and less portable than that for SMAW.</li>
        <li>Self-shielding FCAW generates large volumes of welding fumes and requires suitable exhaust equipment.</li>
        <li>Slag must be removed between weld passes and removed from surfaces planned for inspection. If a weld is being placed in corrosive service, failure to remove slag from the weld cap or root can create sites for corrosion to initiate.</li>
        <li>Backing material is required for root pass welding.</li>
        <li>Self-shielded FCAW is typically not recommended for pressure-containing welds.</li>
    </ul>
    
    <h3>4.6 Submerged Arc Welding (SAW)</h3>
    <h4>4.6.1 General</h4>
    <p>SAW is an arc welding process that uses an arc or arcs between a flux-covered bare metal electrode(s) and the weld pool. The arc and molten metal are shielded by a blanket of granular flux, supplied through the welding nozzle from a hopper. The process is used without pressure, and with filler metal from the electrode itself and sometimes from a supplemental source (welding electrode, flux, or metal granules). SAW can be applied in three different modes: semiautomatic, automatic, and machine. It can utilize either a CV or CC power supply. SAW is used extensively in shop pressure vessel fabrication and pipe manufacturing. Figure 10 shows a schematic of the SAW process.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_10.png" alt="Figure 10 - SAW Welding Process" class="figure-image">
        <p class="figure-caption">Figure 10 — SAW Welding Process</p>
    </div>
    
    <h4>4.6.2 Advantages of SAW</h4>
    <p>Some commonly accepted advantages of the SAW process are the following.</p>
    <ul>
        <li>It provides very high metal deposition rates.</li>
        <li>It produces repeatable high-quality welds for large weldments and repetitive short welds.</li>
    </ul>
    
    <h4>4.6.3 Limitations of SAW</h4>
    <p>The following limitations are associated with SAW.</p>
    <ul>
        <li>A power supply capable of providing high amperage at 100 % duty cycle is recommended.</li>
        <li>The weld is not visible during the welding process.</li>
        <li>Equipment required is more costly and extensive and less portable;</li>
        <li>The process is generally limited to shop applications and flat position.</li>
    </ul>
    
    <h3>4.7 Stud Arc Welding (SW)</h3>
    <h4>4.7.1 General</h4>
    <p>SW is an arc welding process that generates an arc between a metal stud or similar part and the work piece. A stud gun holds the tip of the stud against the work. Once the surfaces of the parts are properly heated (i.e. when the end of the stud is molten and the work has an equal area of molten pool), they are brought into contact by the application of pressure. Shielding gas or flux may or may not be employed. The process may be fully automatic or semiautomatic. Direct current is typically used for SW with the stud gun connected to the negative terminal (DCEN). The power source is a CC type.</p>
    <p>SW is a specialized process predominantly limited to welding insulation and refractory support pins to tanks, pressure vessels and heater casings.</p>
    
    <h4>4.7.2 Advantages of SW</h4>
    <p>Some commonly accepted advantages of the SW process include:</p>
    <ul>
        <li>high productivity rates compared to manually welding studs to base metal;</li>
        <li>it is considered to be an all-position process.</li>
    </ul>
    
    <h4>4.7.3 Limitations of SW</h4>
    <p>Limitations of SW are the following:</p>
    <ul>
        <li>the process is primarily suitable for only carbon steel and low-alloy steels;</li>
        <li>the process is specialized to a few applications.</li>
    </ul>
    
    <h3>4.8 Plasma Arc Welding (PAW)</h3>
    <h4>4.8.1 General</h4>
    <p>PAW is a variation of the GTAW process except that the tungsten electrode is positioned within the body of the torch. This process is rarely used in the fabrication and repair of pressure equipment. There are two types of plasma arc welding, specifically the transferred arc process and nontransferred arc process.</p>
    
    <h4>4.8.2 Plasma Transferred Arc (PTA)</h4>
    <p>In the PTA process, similar to GTAW, the workpiece is part of the electrical circuit, and the arc is struck between the tungsten electrode and the workpiece. By constricting the arc, the plasma or ionized gas is forced through a fine-bore copper nozzle which constricts the arc, and exits the orifice at high velocities (approaching the speed of sound). The process produces a collimated arc which focuses the arc on a relatively small area of the workpiece with an arc temperature in excess of 20,000 °F (11,100 °C).</p>
    
    <h4>4.8.3 Nontransferred Arc or Plasma Spray (PS)</h4>
    <p>In the PS process, the arc is struck between the tungsten electrode and the constricting nozzle rather than with the workpiece. The plasma spray process is solely used for the deposition of surface coatings. It is not used for making strength welds. A comparison of the GTAW and PAW circuits and welding processes is shown in Figure 11.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_11.png" alt="Figure 11 - Comparison of the Gas Tungsten Arc and Plasma Arc Welding Processes" class="figure-image">
        <p class="figure-caption">Figure 11 — Comparison of the Gas Tungsten Arc and Plasma Arc Welding Processes</p>
    </div>
    
    <h4>4.8.4 Advantages of PAW</h4>
    <p>Some commonly accepted advantages of the PAW process include:</p>
    <ul>
        <li>high tolerance for misalignment in the arc;</li>
        <li>high welding rate;</li>
        <li>high penetrating capability (keyhole effect);</li>
        <li>less distortion resulting from lower total heat input due to focused arc;</li>
        <li>the weld itself and the HAZ are narrower than in traditional GTAW due to the constricted arc.</li>
    </ul>
    
    <h4>4.8.5 Limitations of PAW</h4>
    <p>The limitations of PAW include:</p>
    <ul>
        <li>expensive equipment;</li>
        <li>larger torch than GTAW making access more difficult in narrow weld joints;</li>
        <li>focused arc requiring better control by the welder.</li>
    </ul>
    
    <h3>4.9 Electrogas Welding (EGW)</h3>
    <h4>4.9.1 General</h4>
    <p>EGW is similar to the GMAW process in that a solid electrode can be fed into the joint. Alternately, it is similar to the FCAW process in that a flux cored tubular electrode can be used. The weld is deposited in the flat position with the molten metal continually being deposited at the bottom of the moving cavity. In EGW, fixed or moving metal (usually copper) or ceramic shoes (or dams), water cooled if needed, are set up before starting, to bridge the gap between abutting plates and contain the molten metal until solidification is completed. The welding process utilizes either a solid wire or flux-cored electrode. The weld area is protected from atmospheric contamination by an externally supplied shielding gas, or by the gas produced by the disintegration of the flux cored electrode wire. EGW is used to make square-groove welds for butt and T-joints in the construction of storage tanks, ship hulls, and pressure vessels with plate thicknesses from 3/8 in. to 4 in. (9 mm to 100 mm). The workpiece should be at least 0.4 in. (10 mm) thick, while the maximum thickness for one electrode is approximately 0.8 in. (20 mm). Additional electrodes make it possible to weld thicker workpieces. The height of the weld is limited only by the mechanism used to lift the welding head. In general, the height ranges from 4 in. to 50 ft (100 mm to 15 m).</p>
    <p>Low and medium carbon steels, low-alloy high-strength steels, and some stainless steels can be welded using the electrogas process. Quenched and tempered steels may also be welded by the process, provided adequate heat is applied. Figure 12 shows an EGW setup using a solid electrode.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_12.png" alt="Figure 12 - Electrogas Welding With a Solid Electrode" class="figure-image">
        <p class="figure-caption">Figure 12 — Electrogas Welding With a Solid Electrode</p>
    </div>
    
    <h4>4.9.2 Advantages of EGW</h4>
    <p>Some commonly accepted advantages of the EGW process include the following:</p>
    <ul>
        <li>welding usually done in one pass;</li>
        <li>very high deposition rates;</li>
        <li>minimum distortion;</li>
        <li>ability to add beneficial alloying elements to the weldment.</li>
    </ul>
    
    <h4>4.9.3 Limitations of EGW</h4>
    <p>Some limitations of EGW include:</p>
    <ul>
        <li>low toughness;</li>
        <li>massive, expensive welding equipment and guidance systems required;</li>
        <li>lengthy set-up times needed;</li>
        <li>can only be used with vertically positioned joints;</li>
        <li>can require external source of shielding gas.</li>
    </ul>`,
    contentEs: `<h2>Procesos de Soldadura</h2>
    <h3>4.1 General</h3>
    <p>El inspector debe comprender los procesos básicos de soldadura por arco más frecuentemente utilizados en la fabricación y reparación de equipos de refinería y plantas de procesos químicos. Estos procesos incluyen soldadura por arco metálico protegido (SMAW), soldadura por arco de tungsteno con gas (GTAW), soldadura por arco metálico con gas (GMAW), soldadura por arco con núcleo fundente (FCAW), soldadura por arco sumergido (SAW), soldadura de espárragos (SW), soldadura por arco de plasma (PAW) y soldadura por electrogas (EGW). Las descripciones de procesos de soldadura menos utilizados están disponibles en la bibliografía. Cada proceso tiene ventajas y limitaciones dependiendo de la aplicación y puede ser propenso a tipos específicos de discontinuidades.</p>
    
    <h3>4.2 Soldadura por Arco Metálico Protegido (SMAW)</h3>
    <h4>4.2.1 General</h4>
    <p>SMAW es el más ampliamente utilizado de los diversos procesos de soldadura por arco. SMAW crea un arco entre un electrodo revestido y el baño de soldadura. Emplea el calor del arco, originado en la punta de un electrodo revestido consumible, para fundir el metal base. El blindaje es proporcionado por la descomposición del revestimiento del electrodo, sin la aplicación de presión, y con metal de aporte del electrodo. Se puede emplear corriente alterna (CA) o corriente continua (CC), dependiendo de las propiedades mecánicas requeridas, la fuente de poder de soldadura y el electrodo específico seleccionado. Se prefiere una fuente de poder de corriente constante (CC). SMAW es un proceso de soldadura manual. Véase la Figura 1 y la Figura 2 para esquemas del proceso de soldadura SMAW y la deposición del electrodo, respectivamente.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_01.png" alt="Figura 1 - Proceso de Soldadura SMAW" class="figure-image">
        <p class="figure-caption">Figura 1 — Proceso de Soldadura SMAW</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_02.png" alt="Figura 2 - Depósito del Electrodo de Soldadura SMAW" class="figure-image">
        <p class="figure-caption">Figura 2 — Depósito del Electrodo de Soldadura SMAW</p>
    </div>
    
    <h4>4.2.2 Revestimiento del Electrodo</h4>
    <p>Dependiendo del tipo de electrodo que se esté utilizando, el revestimiento realiza una o más de las siguientes funciones:</p>
    <ul>
        <li>proporciona un gas para proteger el arco y prevenir la contaminación atmosférica excesiva del metal de aporte fundido;</li>
        <li>proporciona agentes de limpieza, desoxidantes y fundentes para limpiar la soldadura y prevenir el crecimiento excesivo del grano en el metal de soldadura;</li>
        <li>establece las características eléctricas del electrodo, estabiliza el arco de soldadura e influye en la operabilidad en diversas posiciones de soldadura;</li>
        <li>proporciona una manta de escoria para proteger el metal de soldadura fundido de la atmósfera y mejora las propiedades mecánicas, la forma del cordón y la limpieza superficial del metal de soldadura;</li>
        <li>proporciona un medio para añadir elementos de aleación para producir una química y propiedades mecánicas apropiadas del metal de soldadura y para aumentar la eficiencia de deposición.</li>
    </ul>
    
    <h4>4.2.3 Ventajas de SMAW</h4>
    <p>A continuación se presentan algunas ventajas comúnmente aceptadas del proceso SMAW.</p>
    <ul>
        <li>El equipo es relativamente simple, económico y portátil.</li>
        <li>El proceso puede utilizarse en áreas de acceso limitado.</li>
        <li>El proceso es menos sensible al viento y las corrientes de aire que otros procesos de soldadura.</li>
        <li>El proceso es adecuado para la mayoría de los metales y aleaciones comúnmente utilizados.</li>
        <li>El nivel de capacitación y experiencia requerido es menor que para otros procesos de soldadura.</li>
    </ul>
    
    <h4>4.2.4 Limitaciones de SMAW</h4>
    <p>Las limitaciones asociadas con SMAW incluyen las siguientes.</p>
    <ul>
        <li>Las tasas de deposición son más bajas que las de otros procesos como GMAW.</li>
        <li>La escoria debe eliminarse de cada pasada de soldadura depositada, en paradas y arranques, y antes de depositar un cordón de soldadura adyacente o sobre un cordón de soldadura previamente depositado.</li>
    </ul>
    
    <h3>4.3 Soldadura por Arco de Tungsteno con Gas (GTAW)</h3>
    <h4>4.3.1 General</h4>
    <p>GTAW es un proceso de soldadura por arco que genera un arco entre un electrodo de tungsteno no consumible y el baño de soldadura. El proceso se conoce comúnmente, y algo incorrectamente, como soldadura de gas inerte de tungsteno (TIG) o soldadura heliarc, y se utiliza con un gas de protección y sin la aplicación de presión. GTAW puede utilizarse con o sin la adición de metal de aporte. La fuente de poder de tipo CC puede ser CC o CA, y depende en gran medida del metal que se va a soldar. La soldadura con corriente continua se realiza típicamente con polaridad de electrodo negativo (DCEN). La soldadura DCEN ofrece las ventajas de una penetración más profunda y velocidades de soldadura más rápidas. La corriente alterna proporciona una limpieza catódica (salpicadura) que elimina los óxidos refractarios de las superficies de la unión de soldadura, lo cual es necesario para la soldadura de materiales no ferrosos como el aluminio y el magnesio. La acción de limpieza ocurre durante la porción de la onda de CA, cuando el electrodo es positivo con respecto a la pieza de trabajo. Véase la Figura 3 y la Figura 4 para esquemas del equipo GTAW y el proceso de soldadura.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_03.png" alt="Figura 3 - Equipo de Soldadura GTAW" class="figure-image">
        <p class="figure-caption">Figura 3 — Equipo de Soldadura GTAW</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_04.png" alt="Figura 4 - Proceso de Soldadura GTAW" class="figure-image">
        <p class="figure-caption">Figura 4 — Proceso de Soldadura GTAW</p>
    </div>
    
    <h4>4.3.2 Ventajas de GTAW</h4>
    <p>Algunas ventajas comúnmente aceptadas del proceso GTAW incluyen las siguientes:</p>
    <ul>
        <li>produce soldaduras de alta pureza, generalmente libres de defectos;</li>
        <li>requiere poca limpieza posterior a la soldadura;</li>
        <li>permite un excelente control de la penetración del cordón de raíz;</li>
        <li>puede utilizarse con o sin metal de aporte, dependiendo de la aplicación;</li>
        <li>produce un cordón de raíz relativamente libre de defectos y contaminantes para aquellos servicios de proceso que pueden ser más agresivos hacia los cordones de raíz contaminados.</li>
    </ul>
    
    <h4>4.3.3 Limitaciones de GTAW</h4>
    <p>Las limitaciones asociadas con el proceso GTAW son:</p>
    <ul>
        <li>tasas de deposición más bajas que las posibles con procesos de soldadura por arco con electrodo consumible,</li>
        <li>baja tolerancia a contaminantes en el metal de aporte o base,</li>
        <li>dificultad para proteger adecuadamente la zona de soldadura en entornos con corrientes de aire, y</li>
        <li>se requiere mayor habilidad del operador que para otros métodos como SMAW.</li>
    </ul>
    
    <h3>4.4 Soldadura por Arco Metálico con Gas (GMAW)</h3>
    <h4>4.4.1 General</h4>
    <p>GMAW es un proceso de soldadura por arco que produce un arco entre un electrodo de metal de aporte continuamente alimentado y el baño de soldadura. El proceso se utiliza con protección de un gas suministrado externamente sin la aplicación de presión. GMAW puede operarse en modos semiautomático, máquina o automatizado. Emplea una fuente de poder de voltaje constante (CV), y utiliza los modos de transferencia por cortocircuito, globular, pulverización o pulsado para transferir metal de aporte del electrodo a la pieza de trabajo. El modo de transferencia está determinado por varios factores. Los más influyentes son:</p>
    <ul>
        <li>magnitud y tipo de corriente de soldadura;</li>
        <li>diámetro del electrodo;</li>
        <li>composición del electrodo;</li>
        <li>extensión del electrodo o distancia del tubo de contacto a la pieza de trabajo (a menudo referida como "stick out");</li>
        <li>gas de protección.</li>
    </ul>
    <p>Véase la Figura 5 y la Figura 6 para esquemas del equipo GMAW y el proceso de soldadura.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_05.png" alt="Figura 5 - Equipo GMAW" class="figure-image">
        <p class="figure-caption">Figura 5 — Equipo GMAW</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_06.png" alt="Figura 6 - Proceso de Soldadura GMAW" class="figure-image">
        <p class="figure-caption">Figura 6 — Proceso de Soldadura GMAW</p>
    </div>
    
    <h4>4.4.2 Modo de Transferencia por Cortocircuito (GMAW-S)</h4>
    <h5>4.4.2.1 General</h5>
    <p>GMAW-S abarca el rango más bajo tanto de corriente de soldadura como de diámetros de electrodo asociados con el proceso GMAW. Este proceso produce un baño de soldadura de solidificación rápida que generalmente es adecuado para unir secciones delgadas, soldadura fuera de posición o cordones de raíz. Debido a la naturaleza de solidificación rápida de este proceso, existe un alto potencial de falta de fusión de pared lateral y entre pasadas al soldar equipos de pared gruesa o una conexión de boquilla. El gas de protección para este modo de transferencia es típicamente 75% de argón con 25% de CO2.</p>
    
    <h5>4.4.2.2 Modo de Transferencia GMAW-MSC (Cortocircuito Modificado)</h5>
    <p>El modo de cortocircuito modificado GMAW, designado como el proceso GMAW-MSC, tiene varios derivados patentados del modo de transferencia por cortocircuito que utilizan una forma de onda modificada para reducir algunos problemas asociados con el cortocircuito, principalmente, salpicaduras y un baño de soldadura turbulento. Estos sistemas típicamente detectan la progresión del cortocircuito a medida que ocurre y modulan la corriente para limitar la cantidad de fuerza detrás de las salpicaduras y los eventos que producen turbulencia. Las fuentes de poder GMAW-MSC son controladas por software para mantener características óptimas del arco monitoreando y controlando de cerca la corriente del electrodo durante todas las fases del cortocircuito. Hay un número limitado de empresas que fabrican fuentes de poder de soldadura que emplean esta tecnología.</p>
    <p>El modo de transferencia GMAW-MSC minimiza las desventajas de GMAW-S mientras mantiene tasas de deposición de metal de soldadura comparables y logra soldaduras de calidad radiográfica. El proceso de soldadura tiene la capacidad de completar soldaduras de raíz abierta más rápidamente que GTAW, con bajo aporte de calor y sin resultar en falta de fusión (LOF). El menor aporte de calor resulta en zonas afectadas por el calor (HAZ) más pequeñas, así como menor distorsión y menor probabilidad de quemadura a través. El proceso parece ser más tolerante con los soldadores inexpertos porque GMAW-MSC es tolerante con los huecos y capaz de mantener automáticamente la velocidad óptima de alimentación del alambre y la distancia de la punta de contacto a la pieza de trabajo, mientras permite el uso de consumibles GMAW de mayor diámetro.</p>
    
    <h4>4.4.3 Modo de Transferencia Globular</h4>
    <p>Las ventajas de este método de transferencia son su costo relativamente bajo cuando se utiliza dióxido de carbono como gas de protección, junto con una alta tasa de deposición. La tasa de deposición máxima para el modo de transferencia por arco globular es de aproximadamente 6350 mm/min (250 pulg/min).</p>
    <p>El modo de transferencia por arco globular a menudo se considera el menos deseable de los modos de transferencia GMAW debido a su tendencia a producir alto calor, una pobre superficie de soldadura y salpicaduras de soldadura, así como solape en frío. Este modo de transferencia utiliza una corriente relativamente baja (menos de 250 A). Durante la soldadura, una bola de metal fundido del electrodo tiende a acumularse en el extremo del electrodo, a menudo en formas irregulares, con un diámetro hasta el doble del del electrodo. Cuando la gota se desprende (es decir, por gravedad o cortocircuito) y se fuerza sobre la pieza de trabajo, produce una superficie desigual así como salpicaduras excesivas de soldadura. Este modo de transferencia produce una alta cantidad de calor y obliga al soldador a usar un alambre de electrodo más grande para mantener un arco estable, lo que aumenta el tamaño del baño de soldadura y causa mayores tensiones residuales y distorsión en el área de soldadura. Este proceso de soldadura utiliza 100% de dióxido de carbono como gas de protección, y está limitado a las posiciones plana y horizontal.</p>
    
    <h4>4.4.4 Modo de Transferencia por Pulverización</h4>
    <p>El modo de transferencia por pulverización resulta en un flujo altamente dirigido de gotas discretas que son aceleradas por fuerzas del arco. Dado que estas gotas son más pequeñas que la longitud del arco, no ocurren cortocircuitos y la cantidad de salpicaduras generadas es insignificante. El blindaje de gas inerte permite que el modo de transferencia por arco de pulverización suelde la mayoría de los metales. Sin embargo, usar este proceso en materiales más delgados de 0.250 pulg. (6 mm) puede ser difícil debido a las altas corrientes necesarias para producir el arco de pulverización. El modo de transferencia por pulverización permite altas tasas de deposición de metal de soldadura. A altas tasas de deposición, el proceso de soldadura puede producir un baño de metal de soldadura demasiado débil para ser soportado solo por la tensión superficial (dependiendo principalmente del diámetro del electrodo), lo que limita el uso del proceso de soldadura en las posiciones vertical y sobre la cabeza. Se han desarrollado fuentes de poder especializadas para abordar las limitaciones de espesor del trabajo y posición de soldadura. La tasa de deposición máxima para el modo de transferencia por arco de pulverización es de aproximadamente 150 pulg/min (3810 mm/min). Este modo de transferencia es típicamente 98% de argón, 2% de oxígeno. Dependiendo del diámetro del alambre y la amperaje, el gas de protección puede tener una composición de 80% de argón, 20% de oxígeno.</p>
    
    <h4>4.4.5 Modo de Transferencia Pulsado</h4>
    <p>El arco pulsado GMAW fue desarrollado para superar las limitaciones de espesor y posición de soldadura de los modos Globular, de Pulverización y de Cortocircuito. Este modo de transferencia proporciona:</p>
    <ul>
        <li>una corriente de fondo/constante baja para mantener el arco sin proporcionar suficiente energía para producir gotas en la punta del alambre; y</li>
        <li>una corriente superpuesta/pulsada con una amplitud mayor que la corriente de transición necesaria para la transferencia por pulverización.</li>
    </ul>
    <p>Durante la porción de pulsación del ciclo de corriente, se forman y transfieren una o más gotas a la pieza de trabajo. La frecuencia y amplitud de los pulsos controlan la velocidad a la que se funde el alambre. La pulsación proporciona las características deseables de la transferencia por arco de pulverización para unir chapas metálicas y soldar en todas las posiciones. La tasa de deposición máxima para el modo de transferencia por arco pulsado es de aproximadamente 5080 mm/min (200 pulg/min). El método de arco pulsado GMAW requiere una fuente de poder capaz de proporcionar pulsos de corriente con una frecuencia entre 30 pulsos/s y 400 pulsos/s, y requiere que el gas de protección sea principalmente argón con una baja concentración de dióxido de carbono. El mismo gas de protección utilizado para el modo de transferencia por pulverización también se utiliza típicamente para el modo de transferencia pulsado.</p>
    
    <h4>4.4.6 Ventajas de GMAW</h4>
    <p>Algunas ventajas comúnmente aceptadas del proceso GMAW incluyen las siguientes.</p>
    <ul>
        <li>Es el único proceso de electrodo consumible que puede utilizarse para soldar la mayoría de los metales y aleaciones ferrosos y no ferrosos comerciales.</li>
        <li>Sus tasas de deposición son significativamente más altas que las obtenidas con SMAW y GTAW.</li>
        <li>Se requiere una limpieza mínima posterior a la soldadura debido a la ausencia de escoria.</li>
    </ul>
    
    <h4>4.4.7 Limitaciones de GMAW</h4>
    <p>Las limitaciones asociadas con GMAW incluyen las siguientes.</p>
    <ul>
        <li>El equipo de soldadura es más complejo, más costoso y menos portátil que el de SMAW.</li>
        <li>El arco de soldadura debe protegerse de las corrientes de aire que pueden dispersar el gas de protección.</li>
        <li>Al usar el proceso GMAW-S, la soldadura es más susceptible a la falta de fusión adecuada (véase la Sección 11.3). Como resultado, generalmente se emplea el examen ultrasónico (UT) como método de inspección porque la probabilidad de detectar LOF es bastante baja utilizando el examen radiográfico (RT) (véase las Secciones 8.8 y 8.9).</li>
    </ul>
    
    <h3>4.5 Soldadura por Arco con Núcleo Fundente (FCAW)</h3>
    <h4>4.5.1 General</h4>
    <p>FCAW es un proceso de soldadura por arco que produce un arco entre un electrodo tubular continuamente alimentado y el baño de soldadura. El proceso se utiliza con gas de protección generado por un fundente contenido dentro del propio electrodo tubular, con o sin protección adicional de un gas suministrado externamente, y sin la aplicación de presión. Normalmente un proceso semiautomático, el uso de FCAW depende del tipo de electrodos disponibles, los requisitos de propiedades mecánicas de las uniones soldadas, y los diseños de unión y ajuste. La fuente de poder recomendada es del tipo CC CV, similar a las fuentes de poder utilizadas para GMAW. La Figura 7 muestra un esquema del equipo FCAW, y la Figura 8 muestra el proceso de soldadura con protección de gas adicional. La Figura 9 muestra un esquema del proceso FCAW autoprotegido donde no se utiliza gas adicional.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_07.png" alt="Figura 7 - Equipo FCAW" class="figure-image">
        <p class="figure-caption">Figura 7 — Equipo FCAW</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_08.png" alt="Figura 8 - Proceso de Soldadura FCAW" class="figure-image">
        <p class="figure-caption">Figura 8 — Proceso de Soldadura FCAW</p>
    </div>
    
    <div class="figure-container">
        <img src="images/api577_figure_09.png" alt="Figura 9 - Proceso de Soldadura FCAW, Autoprotegido" class="figure-image">
        <p class="figure-caption">Figura 9 — Proceso de Soldadura FCAW, Autoprotegido</p>
    </div>
    
    <h4>4.5.2 Ventajas de FCAW</h4>
    <p>Algunas ventajas comúnmente aceptadas del proceso FCAW incluyen:</p>
    <ul>
        <li>beneficios metalúrgicos que pueden derivarse de elementos de aleación contenidos dentro del fundente;</li>
        <li>escoria que soporta y da forma al cordón de soldadura, permitiendo una velocidad de enfriamiento más lenta;</li>
        <li>tasas de deposición y productividad más altas en comparación con otros procesos como SMAW y GTAW;</li>
        <li>protección producida en la superficie de la soldadura que la hace más tolerante a corrientes de aire más fuertes que GMAW.</li>
    </ul>
    
    <h4>4.5.3 Limitaciones de FCAW</h4>
    <p>Las siguientes limitaciones están asociadas con el proceso FCAW.</p>
    <ul>
        <li>El equipo es más complejo, más costoso y menos portátil que el de SMAW.</li>
        <li>El FCAW autoprotegido genera grandes volúmenes de humos de soldadura y requiere un equipo de extracción adecuado.</li>
        <li>La escoria debe eliminarse entre pasadas de soldadura y de las superficies planificadas para inspección. Si una soldadura se coloca en servicio corrosivo, la falta de eliminación de la escoria del cordón o la raíz puede crear sitios para que se inicie la corrosión.</li>
        <li>Se requiere material de respaldo para la soldadura del cordón de raíz.</li>
        <li>El FCAW autoprotegido generalmente no se recomienda para soldaduras que contienen presión.</li>
    </ul>
    
    <h3>4.6 Soldadura por Arco Sumergido (SAW)</h3>
    <h4>4.6.1 General</h4>
    <p>SAW es un proceso de soldadura por arco que utiliza un arco o arcos entre uno o más electrodos de metal desnudo cubiertos de fundente y el baño de soldadura. El arco y el metal fundido están protegidos por una manta de fundente granular, suministrada a través de la boquilla de soldadura desde una tolva. El proceso se utiliza sin presión, y con metal de aporte del propio electrodo y a veces de una fuente suplementaria (electrodo de soldadura, fundente o gránulos metálicos). SAW puede aplicarse en tres modos diferentes: semiautomático, automático y máquina. Puede utilizar una fuente de poder CV o CC. SAW se utiliza ampliamente en la fabricación de recipientes a presión en taller y en la fabricación de tuberías. La Figura 10 muestra un esquema del proceso SAW.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_10.png" alt="Figura 10 - Proceso de Soldadura SAW" class="figure-image">
        <p class="figure-caption">Figura 10 — Proceso de Soldadura SAW</p>
    </div>
    
    <h4>4.6.2 Ventajas de SAW</h4>
    <p>Algunas ventajas comúnmente aceptadas del proceso SAW son las siguientes.</p>
    <ul>
        <li>Proporciona tasas de deposición de metal muy altas.</li>
        <li>Produce soldaduras de alta calidad repetibles para grandes soldaduras y soldaduras cortas repetitivas.</li>
    </ul>
    
    <h4>4.6.3 Limitaciones de SAW</h4>
    <p>Las siguientes limitaciones están asociadas con SAW.</p>
    <ul>
        <li>Se recomienda una fuente de poder capaz de proporcionar alta amperaje al 100% de ciclo de trabajo.</li>
        <li>La soldadura no es visible durante el proceso de soldadura.</li>
        <li>El equipo requerido es más costoso y extenso y menos portátil;</li>
        <li>El proceso generalmente se limita a aplicaciones de taller y posición plana.</li>
    </ul>
    
    <h3>4.7 Soldadura de Espárragos por Arco (SW)</h3>
    <h4>4.7.1 General</h4>
    <p>SW es un proceso de soldadura por arco que genera un arco entre un espárrago metálico o una pieza similar y la pieza de trabajo. Una pistola de espárragos sostiene la punta del espárrago contra la pieza de trabajo. Una vez que las superficies de las piezas están adecuadamente calentadas (es decir, cuando el extremo del espárrago está fundido y la pieza de trabajo tiene un área igual de baño fundido), se ponen en contacto mediante la aplicación de presión. Se puede emplear o no gas de protección o fundente. El proceso puede ser completamente automático o semiautomático. Generalmente se utiliza corriente continua para SW con la pistola de espárragos conectada al terminal negativo (DCEN). La fuente de poder es de tipo CC.</p>
    <p>SW es un proceso especializado predominantemente limitado a soldar pines de soporte de aislamiento y refractarios a tanques, recipientes a presión y carcasas de calentadores.</p>
    
    <h4>4.7.2 Ventajas de SW</h4>
    <p>Algunas ventajas comúnmente aceptadas del proceso SW incluyen:</p>
    <ul>
        <li>altas tasas de productividad en comparación con soldar manualmente espárragos al metal base;</li>
        <li>se considera un proceso para todas las posiciones.</li>
    </ul>
    
    <h4>4.7.3 Limitaciones de SW</h4>
    <p>Las limitaciones de SW son las siguientes:</p>
    <ul>
        <li>el proceso es principalmente adecuado solo para aceros al carbono y aceros de baja aleación;</li>
        <li>el proceso está especializado para unas pocas aplicaciones.</li>
    </ul>
    
    <h3>4.8 Soldadura por Arco de Plasma (PAW)</h3>
    <h4>4.8.1 General</h4>
    <p>PAW es una variación del proceso GTAW excepto que el electrodo de tungsteno está posicionado dentro del cuerpo de la antorcha. Este proceso rara vez se utiliza en la fabricación y reparación de equipos a presión. Hay dos tipos de soldadura por arco de plasma, específicamente el proceso de arco transferido y el proceso de arco no transferido.</p>
    
    <h4>4.8.2 Arco de Plasma Transferido (PTA)</h4>
    <p>En el proceso PTA, similar a GTAW, la pieza de trabajo es parte del circuito eléctrico, y el arco se establece entre el electrodo de tungsteno y la pieza de trabajo. Al restringir el arco, el plasma o gas ionizado se fuerza a través de una boquilla de cobre de orificio fino que restringe el arco, y sale del orificio a altas velocidades (aproximándose a la velocidad del sonido). El proceso produce un arco colimado que enfoca el arco en un área relativamente pequeña de la pieza de trabajo con una temperatura de arco superior a 20,000 °F (11,100 °C).</p>
    
    <h4>4.8.3 Arco No Transferido o Pulverización de Plasma (PS)</h4>
    <p>En el proceso PS, el arco se establece entre el electrodo de tungsteno y la boquilla restrictora en lugar de con la pieza de trabajo. El proceso de pulverización de plasma se utiliza únicamente para la deposición de recubrimientos superficiales. No se utiliza para hacer soldaduras de resistencia. Una comparación de los circuitos y procesos de soldadura GTAW y PAW se muestra en la Figura 11.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_11.png" alt="Figura 11 - Comparación de los Procesos de Soldadura por Arco de Tungsteno con Gas y por Arco de Plasma" class="figure-image">
        <p class="figure-caption">Figura 11 — Comparación de los Procesos de Soldadura por Arco de Tungsteno con Gas y por Arco de Plasma</p>
    </div>
    
    <h4>4.8.4 Ventajas de PAW</h4>
    <p>Algunas ventajas comúnmente aceptadas del proceso PAW incluyen:</p>
    <ul>
        <li>alta tolerancia a la desalineación en el arco;</li>
        <li>alta velocidad de soldadura;</li>
        <li>alta capacidad de penetración (efecto de ojo de cerradura);</li>
        <li>menos distorsión resultante de un menor aporte total de calor debido al arco enfocado;</li>
        <li>la propia soldadura y la HAZ son más estrechas que en la GTAW tradicional debido al arco restringido.</li>
    </ul>
    
    <h4>4.8.5 Limitaciones de PAW</h4>
    <p>Las limitaciones de PAW incluyen:</p>
    <ul>
        <li>equipo costoso;</li>
        <li>antorcha más grande que GTAW lo que dificulta el acceso en uniones de soldadura estrechas;</li>
        <li>arco enfocado que requiere un mejor control por parte del soldador.</li>
    </ul>
    
    <h3>4.9 Soldadura por Electrogas (EGW)</h3>
    <h4>4.9.1 General</h4>
    <p>EGW es similar al proceso GMAW en que se puede alimentar un electrodo sólido en la unión. Alternativamente, es similar al proceso FCAW en que se puede utilizar un electrodo tubular con núcleo fundente. La soldadura se deposita en posición plana con el metal fundido continuamente depositándose en el fondo de la cavidad en movimiento. En EGW, se instalan zapatas (o presas) metálicas fijas o móviles (generalmente de cobre) o cerámicas, enfriadas con agua si es necesario, antes de comenzar, para cubrir el espacio entre placas adyacentes y contener el metal fundido hasta que se complete la solidificación. El proceso de soldadura utiliza un alambre sólido o un electrodo con núcleo fundente. El área de soldadura está protegida de la contaminación atmosférica por un gas de protección suministrado externamente, o por el gas producido por la desintegración del alambre de electrodo con núcleo fundente. EGW se utiliza para hacer soldaduras de ranura cuadrada para uniones a tope y en T en la construcción de tanques de almacenamiento, cascos de barcos y recipientes a presión con espesores de placa desde 3/8 pulg. hasta 4 pulg. (9 mm a 100 mm). La pieza de trabajo debe tener al menos 0.4 pulg. (10 mm) de espesor, mientras que el espesor máximo para un electrodo es aproximadamente 0.8 pulg. (20 mm). Electrodos adicionales hacen posible soldar piezas de trabajo más gruesas. La altura de la soldadura está limitada solo por el mecanismo utilizado para elevar el cabezal de soldadura. En general, la altura varía desde 4 pulg. hasta 50 pies (100 mm a 15 m).</p>
    <p>Los aceros de bajo y medio carbono, los aceros de alta resistencia baja aleación y algunos aceros inoxidables pueden soldarse utilizando el proceso electrogas. Los aceros templados y revenidos también pueden soldarse mediante el proceso, siempre que se aplique calor adecuado. La Figura 12 muestra una configuración EGW utilizando un electrodo sólido.</p>
    
    <div class="figure-container">
        <img src="images/api577_figure_12.png" alt="Figura 12 - Soldadura por Electrogas con un Electrodo Sólido" class="figure-image">
        <p class="figure-caption">Figura 12 — Soldadura por Electrogas con un Electrodo Sólido</p>
    </div>
    
    <h4>4.9.2 Ventajas de EGW</h4>
    <p>Algunas ventajas comúnmente aceptadas del proceso EGW incluyen las siguientes:</p>
    <ul>
        <li>la soldadura generalmente se hace en una pasada;</li>
        <li>tasas de deposición muy altas;</li>
        <li>mínima distorsión;</li>
        <li>capacidad de añadir elementos de aleación beneficiosos a la pieza soldada.</li>
    </ul>
    
    <h4>4.9.3 Limitaciones de EGW</h4>
    <p>Algunas limitaciones de EGW incluyen:</p>
    <ul>
        <li>baja tenacidad;</li>
        <li>se requiere equipo de soldadura masivo, costoso y sistemas de guía;</li>
        <li>se necesitan tiempos de configuración prolongados;</li>
        <li>solo puede utilizarse con uniones posicionadas verticalmente;</li>
        <li>puede requerir fuente externa de gas de protección.</li>
    </ul>`
});