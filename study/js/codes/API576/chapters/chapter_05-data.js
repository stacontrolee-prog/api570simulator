if (!getCode('API576')) {
    console.error('El código API576 no está registrado. Registrándolo ahora...');
    registerCode('API576', {
    title: "API 576 Inspection of Pressure-Relieving Devices",
    titleEs: "Inspección de Dispositivos de Alivio de Presión API 576"
});
}

// Registrar el capítulo 5
registerChapter('API576', {
    id: 5,
    title: "Causes of Improper Performance",
    titleEs: "Causas de Funcionamiento Incorrecto",
    content: `<h3>5 Causes of Improper Performance</h3>
    <div class="subsection">
        <h4>5.1 Corrosion</h4>
        <div class="subsection">
            <h4>5.1.1 General</h4>
            <p>Corrosion is a basic cause of many of the difficulties encountered with pressure-relief devices. An understanding of the process/operating conditions and resulting damage mechanisms are required in order to establish and maintain an inspection program of relief valves that yields the highest probability of preventing their damage. Changes in process/operating conditions need to include an evaluation of the corrosion potential of the relief valve. There are several other sources of industry data that specifically identify typical degradation mechanisms for various operating units. Specifically applicable to the refining and petrochemical industry is API 571 covering damage mechanisms.</p>
            <p>Corrosion often appears as pitted or broken valve parts, deposits of corrosive residue that interfere with the operation of the moving parts, or a general deterioration of the material of the relieving device. Figure 21 through Figure 26 illustrate the effects of corrosion on relief devices. In addition to internal parts, exposed studs are vulnerable to environmental corrosion attack.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_21.png" class="figure-image">
                <p class="figure-caption">Figure 21—Acid Corrosion in Carbon Steel Bonnet Caused by Leaking Seating Surfaces</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_22.png" class="figure-image">
                <p class="figure-caption">Figure 22—Chloride Corrosion on 18Cr-8Ni Steel Nozzle (with Machined Seating Surface)</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_23.png" class="figure-image">
                <p class="figure-caption">Figure 23—Sulfide Corrosion on Carbon Steel Disc from Crude Oil Distillation Unit</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_24.png" class="figure-image">
                <p class="figure-caption">Figure 24—Chloride Attack on 18Cr-8Ni Steel Disc</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_25.png" class="figure-image">
                <p class="figure-caption">Figure 25—Pit-type Corrosion on 18Cr-8Ni Steel Bellows</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_26.png" class="figure-image">
                <p class="figure-caption">Figure 26—Alloy 400 Rupture Disks Corroded in Sour Gas Service</p>
            </div>
            
            <p>Valve malfunction may also be due to sticking of the disc to the nozzle or the disc holder in the guide. This sticking may be caused by corrosion or galling of the metal or by foreign particles in the guiding surfaces. Foreign particles in the guiding surfaces tend to roll metal up, causing severe galling. The use of a bellows can keep the foreign particles away from the guiding surfaces. Sticking of valves illustrates a disc holder that is frozen in the guide as a result of corrosion, e.g. in sour gas service.</p>
            <p>Corrosion may be slowed or mitigated by the selection of more suitable devices or device materials. Proper maintenance is also a consideration since a leaking valve allows fluids to circulate in the upper parts of the valve, which can contribute to the corrosion of its movable parts. Protective coatings as shown in Figure 27 may offer protection against corrosion in some services.</p>
            <p>Bellows can protect moving parts from the corrosive substance, especially in closed systems.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_27.png" class="figure-image">
                <p class="figure-caption">Figure 27—Body and Bonnet Coated with Epoxy for Corrosion Protection</p>
            </div>
        </div>
        <div class="subsection">
            <h4>5.1.2 Examples of Preventative Actions for Corrosion</h4>
            <p>A rupture disk device installed on the inlet and/or outlet of a pressure-relief valve can provide added corrosion protection of the valve internals.</p>
            <p>In many instances, valves with differing materials of construction can impede or altogether mitigate the effects of corrosion. The use of an O-ring or resilient seat in a pressure-relief valve may stop leakage past the seating surface and eliminate corrosion in the valve's working parts. However, O-ring elastomers may have a limited life under stress due to degradation caused by temperature, corrosive species, aging, or swelling. Bellows seal can be used to protect the spring and the bonnet cavity of the valve from the corrosive loading fluid.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5.2 Damaged Seating Surfaces</h4>
        <p>Imperfections in seating surfaces may contribute to improper valve action in service. To prevent leakage of the loading fluid, an optical precision on the order of three light beads/bands according to manufacturer's specifications should be maintained in the flatness of seating surfaces on metal-seated pressure-relief valves (see API 527).</p>
        <p>There are many causes of damaged valve seats in refinery or chemical plant service, including the following:</p>
        <ul>
            <li>Corrosion.</li>
            <li>Foreign particles introduced into the valve inlet that pass through the valve when it opens, such as mill scale, welding spatter or slag, corrosive deposits, coke, or dirt. The particles may damage the seat-to-nozzle contact required for tightness in most pressure-relief valves. The damage can occur either in the shop during maintenance of the valve or while the valve is in service.</li>
            <li>High inlet pressure drop may be caused by improper piping design or lengthy piping to the valve inlet or obstructions in the line and may cause a valve to chatter. The pressure under the disc may become great enough to open the valve. However, as soon as the flow is established, the pressure drop in the connecting piping may be so great that the pressure under the disc falls and allows the valve to close. A cycle of opening and closing may develop, become rapid, and subject the valve seating surfaces to severe hammering, which damages the seating surfaces, sometimes beyond repair. Figure 28 shows seating surfaces damaged by chattering and frequent fluctuations of pressure. Refer to API 520, Part II for further explanation of chatter.</li>
        </ul>
        
        <div class="figure-container">
            <img src="images/api576_figure_28.png" class="figure-image">
            <p class="figure-caption">Figure 28—Seating Surface of Disc Deformed by Chattering</p>
        </div>
        
        <ul>
            <li>Improper handling during maintenance and/or transport, such as bumping, dropping, jarring, or scratching of the valve parts.</li>
            <li>Leakage past the seating surfaces of a valve after it has been installed. This leakage contributes to seat damage by causing erosion (wire drawing) or corrosion of the seating surface and thus aggravating itself. It may be due to improper maintenance or installation such as misalignment of the parts, piping strains resulting from improper support, or inadequate support of outlet piping. Other common causes of this leakage are improper alignment of the spindle, improper fitting of the springs to the spring washers, and improper bearing between the spring washers and their respective bearing contacts or between the spindle and disc holder. Spindles should be checked visually for straightness. Springs and spring washers should be kept together as a spring assembly during the life of the spring. Frequent operation too close to the pressure-relief valve set pressure could cause leakage of process fluid across the pressure-relief valve (simmer) and cycle the pressure-relief valve resulting in seat damage.</li>
            <li>Improper blowdown ring settings. This can cause chattering in pressure-relief valves. The pressure-relief valve manufacturer should be contacted for specific blowdown ring settings.</li>
            <li>Severe oversizing of the pressure-relief valve for the relief loads encountered can cause the valve to cycle (open/close repeatedly), resulting in disc and nozzle seating surface damage. See Figure 29.</li>
            <li>Venting liquids across vapor trim pressure-relief valves can cause chatter/cycling/hammer effects with resultant damage.</li>
        </ul>
        
        <div class="figure-container">
            <img src="images/api576_figure_29.png" class="figure-image">
            <p class="figure-caption">Figure 29—Seating Surface of Disc Damaged by Frequent Operation of Valve Too Close to Operating Pressure</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5.3 Failed Springs</h4>
        <div class="subsection">
            <h4>5.3.1 General</h4>
            <p>Spring failures occur in two forms. The first is a weakening of the spring, which causes a reduction in set pressure and the possibility of premature opening. The second is a mechanical failure (complete break) of the spring, which causes uncontrolled valve opening.</p>
            <p>Although springs may weaken and fail due to the use of improper materials in high-temperature service, failed springs are almost always caused by corrosion. Surface corrosion and stress corrosion cracking are the most prevalent of this type of failure in refineries.</p>
            <p>Surface corrosion attacks the spring surface until the cross-sectional area is not sufficient to provide the necessary closing force. It may also produce pits that act as stress risers and cause cracks in the spring surface and subsequent spring failure (see Figure 30).</p>
            <p>Stress corrosion cracking (SCC) sometimes causes spring failure. The SCC damage mechanism is difficult to detect and predict before the spring fails. A brittle-type spring failure due to stress corrosion cracking is shown in Figure 31. Hydrogen sulfide (H<sub>2</sub>S) frequently causes SCC of springs (see NACE MR 0175 and NACE MR 0103 for material recommendations and guidance). Consult the manufacturer to select an appropriate spring in susceptible applications since the material strength, hardness, and heat treatment of the spring can affect its resistance to stress corrosion cracking.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_30.png" class="figure-image">
                <p class="figure-caption">Figure 30—Spring Failure Due to Corrosion</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_31.png" class="figure-image">
                <p class="figure-caption">Figure 31—Spring Failure Due to Stress Corrosion</p>
            </div>
        </div>
        <div class="subsection">
            <h4>5.3.2 Examples of Preventative Actions for Spring Corrosion</h4>
            <p>The following are examples, but are not limited to spring corrosion:</p>
            <ul>
                <li>Spring material that will satisfactorily resist the action of the corrosive agent may be used.</li>
                <li>The spring may be isolated by a bellows. Certain pilot-operated pressure-relief valves have diaphragms or pistons that isolate the pilot spring from the process.</li>
                <li>The spring may be specially coated with a corrosion-resistant coating that can withstand the operating temperature and environment.</li>
            </ul>
        </div>
    </div>
    <div class="subsection">
        <h4>5.4 Improper Setting and Adjustment</h4>
        <p>Manuals by the valve manufacturer provide procedures for proper setting by indicating how to adjust their valves for temperature, backpressure, and other factors.</p>
        <p>Setting a pressure-relief valve while it is in place on the equipment to be protected may be impractical and should be performed only after special consideration as noted in 6.3. Generally, direct-acting spring-loaded valves should be set in the valve maintenance shop while on appropriate test equipment. During inspection and repair, a properly designed test block facilitates the setting and adjusting of the pressure-relief valve (see Annex A).</p>
        <p>Pressure-relief valves are designed and certified to operate in specific types of fluid media. Therefore, water, air, steam, or an inert gas such as bottled nitrogen is generally used as the testing medium in the shop, depending on the design of the valve being tested and the requirements of applicable design and testing codes. To ensure that the valve is opening, some overpressure should be carefully applied because an audible leak could otherwise be misinterpreted as the result of reaching the set pressure. However, most pressure-relief valves, particularly safety valves, produce a distinct pop at the set pressure, making misinterpretation unlikely. The size of the test stand is important since insufficient surge volume might not cause a distinct pop and may cause an incorrect set pressure. Air, gas, or vapor service valves should be set using air or inert gas. Steam service valves should be set using steam. Special attention is needed if the relief valve is placed in superheated steam service to compensate for temperature. Air may be used if suitable corrections are applied in place of steam. Liquid service valves should be set using water. See NB-23, Part 3, Section 4.5 for more details. It is important to note what audible or visual indication signifies the set pressure for a specific type of pressure-relief valve. This indication is defined by the manufacturer and is listed in NB-18 and manufacturer's manuals.</p>
        <p>Consult the manufacturer for the proper technique for setting pilot-operated pressure-relief valves on liquid as the water in the dome area and pilot assembly may create problems when placed in service.</p>
        <p>Incorrect calibration of pressure gauges is a frequent cause of improper valve setting. To ensure accuracy, gauges should be calibrated frequently on a calibrated dead weight tester. The pressure range of the gauge should be chosen so that the required set pressure of the pressure-relief valve falls within the middle third of the gauge pressure range. Snubbers on pressure gauges are not generally recommended since they tend to clog and produce pressure lag. It may be desirable to use two test gauges during valve testing.</p>
        <p>Many direct-acting spring-loaded pressure-relief valves have one or more internal rings that can be adjusted. The pressure-relief valve adjusting ring or rings will control the valve blowdown—the difference between the set pressure and the reseating pressure—and valve simmer, depending on the design of the valve being tested. To functionally test the pressure-relief valve and measure the blowdown, similar media properties of the service fluid and adequate flow capacities to fully cycle the valve are needed. Because the density and expansion characteristics of material handled through safety valves are variable and the volume of testing facilities is limited, it is usually impractical to adjust the valve rings and obtain a specific blowdown value on a maintenance shop test block. The rings should therefore be adjusted to obtain a pop on the valve test drum (see manufacturer's maintenance instructions for this adjustment) and then inspected and readjusted for proper blowdown according to the manufacturer's recommendation. This should permit the best average performance characteristics of the valve when installed. Full understanding of terminology is important (see ASME PTC 25).</p>
    </div>
    <div class="subsection">
        <h4>5.5 Plugging and Fouling</h4>
        <p>Process solids and contaminants such as coke, sand, or solidified products can sometimes plug various parts of the valve and connected piping. Additionally, monomer service can lead to polymer formation and plugging.</p>
        <p>All valve parts, particularly guiding surfaces and bellows, should be checked thoroughly for any type of fouling. See Figures 32, 33, and 34.</p>
        
        <div class="figure-container">
            <img src="images/api576_figure_32.png" class="figure-image">
            <p class="figure-caption">Figure 32—Inlet Nozzle Plugged with Coke and Catalyst After Nine Months in Reactor Vapor Line</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api576_figure_33.png" class="figure-image">
            <p class="figure-caption">Figure 33—Outlet Valve Plugged with Deposits from Other Valves in Common Discharge Header</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api576_figure_34.png" class="figure-image">
            <p class="figure-caption">Figure 34—Moving Parts of Valve Fouled with Iron Sulfide (FeS<sub>2</sub>)</p>
        </div>
        
        <p>Sticking of pressure-relief valves may also be caused by poor alignment of the valve disc holder, which is usually due to debris on the contact surface between the guide and disc holder, or misalignment of a gasket at assembly. See Figure 35.</p>
        
        <div class="figure-container">
            <img src="images/api576_figure_35.png" class="figure-image">
            <p class="figure-caption">Figure 35—Disc Frozen in Guide Because of Buildup of Products of Corrosion in Sour Oil Vapor Service</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5.6 Galling</h4>
        <div class="subsection">
            <h4>5.6.1 General</h4>
            <p>When galling of the metal in the guiding surfaces is not due to corrosion or foreign particles, it is often due to valve chatter or flutter caused by improper piping at the valve inlet or outlet or by severe oversizing of the valve. Galling may also occur if the system operates too close to the set pressure resulting in frequent relieving.</p>
        </div>
        <div class="subsection">
            <h4>5.6.2 Examples of Preventative Actions for Galling</h4>
            <p>Correction of improper piping at the valve inlet or outlet will usually stop the action of chatter or flutter (see API 520, Parts I and II). Improper finishing of the guiding surfaces can also result in galling caused by chatter or flutter. Consult the valve manufacturer for recommendations as this is potentially a design and manufacturing issue.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5.7 Misapplication of Materials</h4>
        <p>In general, the temperature, pressure, corrosion protection requirements, and the atmospheric conditions of the service determine the materials required for a pressure-relieving device in a given service. Occasionally, severe corrosion or unusual pressure or temperature conditions in the process require special consideration. Manufacturers can usually supply valve designs and materials that suit special services. Catalogs have a wide selection of special materials and accessory options for various chemical and temperature conditions. Addition of a rupture disk device at the inlet and/or outlet of the valve may help prevent corrosion.</p>
        <p>The H<sub>2</sub>S attack on a carbon steel spring in Figure 30 and the chloride attack on an 18Cr-8Ni steel disc in Figure 24 exemplify the results of the misapplication of materials. When service experience indicates that a selected valve type or material is not suitable for a given service condition, an immediate correction that will ensure dependable operation should be made. Great care should be taken to record the identity of special materials and the locations requiring them. An adequate system of records should provide the information needed for the repair or reconditioning of valves in special service and for developing optimum purchase specifications.</p>
    </div>
    <div class="subsection">
        <h4>5.8 Improper Location, History, or Identification</h4>
        <p>If not installed at the exact location for which it is intended, a pressure-relief device may not provide the proper protection.</p>
        <p>To assist in the identification of the devices and to provide information necessary for correct repairs and installation, historical records and specifications should be maintained and referred to when the devices are removed for inspection and repair. Most pressure-relief devices have an identifying serial or shop number placed on the device by the manufacturer or an identifying number tagged, stamped, or otherwise placed on the device by the user. Some users also stamp mating pipe flanges with device numbers. This identification specifies the location of the device and, by reference to the specification record, its limitations and construction.</p>
    </div>
    <div class="subsection">
        <h4>5.9 Improper Handling</h4>
        <div class="subsection">
            <h4>5.9.1 General</h4>
            <p>Improper handling can occur during shipment, maintenance, or installation. This improper handling of the relief valve can cause a change of the set pressure, damage lifting levers, damage tubing and tubing fittings, damage pilot assemblies, or cause internal leakage when the valve is in service. See Figures 36 and 37.</p>
            <p>Valves are checked for tightness in the manufacturer's plant before they are shipped to the user. Valve tightness is sometimes checked by the user in the maintenance shop before initial use and usually checked after subsequent cleaning, repairing, or testing.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_36.png" class="figure-image">
                <p class="figure-caption">Figure 36—Improper Storage of Valves</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_37.png" class="figure-image">
                <p class="figure-caption">Figure 37—Example of Improper Storage of Valves</p>
            </div>
        </div>
        <div class="subsection">
            <h4>5.9.2 During Shipment</h4>
            <p>Most pressure-relief valves have a sturdy appearance that may obscure the fact that they are precise instruments with very close tolerances and critical dimensions. Accordingly, commercial carriers and/or maintenance transport trucks sometimes subject them to improper handling. This may cause a valve to leak excessively in service or during testing. This improper handling may also expose the valve inlet to dirt or other foreign particles that could damage the valve seating surface the first time the valve opens and cause leakage thereafter.</p>
            <p>Pressure-relief valves should be braced and shipped in an upright position—this is especially true of large valves and valves with low set pressures. When large, low-pressure valves are allowed to lie on their sides, the springs or weights may not exert the same force all around the seating surfaces.</p>
        </div>
        <div class="subsection">
            <h4>5.9.3 During Maintenance</h4>
            <p>Pressure-relief valve parts are precision items manufactured to extremely close tolerances. Improper handling can degrade these tolerances, destroying the basic valve alignment on which the fine, exacting performance characteristics of the device primarily depend. Both before and after repairs, improper handling of the completely assembled valve should be avoided. Mishandling of a pressure-relief valve can affect the opening pressure and reseating pressure of the pressure-relief valve during the premaintenance test or after it has been serviced and reset. This should be documented and proper handling procedures should be implemented.</p>
            <p>Before the valves leave the shop, valve inlets and outlets should be securely covered. Pressure-relief valves with lifting levers should not be moved or carried via the lever, and consideration should be given to wiring the lever to the valve for stability during transportation.</p>
            <p>Caution—Lifting lever wiring is only used for transport and needs to be removed before installation.</p>
            <p>Caution—Avoid exceeding the pressure rating of the bellows during a backpressure test as this may damage the bellows.</p>
        </div>
        <div class="subsection">
            <h4>5.9.4 During Installation</h4>
            <p>Valve inlets and outlets should be securely covered before the valves leave the shop. When received for installation, inspection of the openings for foreign materials, shipping stays, and damage should be performed.</p>
            <p>API 2000, Section 3.7 should be utilized for the requirements for installation of tank venting devices.</p>
            <p>Caution—Pressure-relief valves are often delivered with shipping stays that stabilize the valve during transport. Such stays shall be removed prior to installation.</p>
            <p>Caution—Pressure-relief valves should be installed in a vertical orientation, with the disc of a direct-acting valve or unbalanced member of a pilot-operated valve oriented horizontally, such that the disc or unbalanced member moves upward as the valve opens. Other orientations may permit these parts to become misaligned in the guide. ASME BPVC Section VIII, Division 1, Appendix M describes under what conditions an orientation other than vertical may be acceptable.</p>
            <p>Caution—There are weight-loaded valve designs that can be installed on the sides of tanks. Weight-loaded valves may have their weight shipped separate from the valve to protect the pallet seating surfaces during handling. These weights should be installed prior to commissioning the tank. Refer to API 2000, Section 3.7 for requirements for installation of tank venting devices.</p>
        </div>
        <div class="subsection">
            <h4>5.9.5 Improper Handling, Installation, and Selection of Rupture Disks</h4>
            <p>Rupture disk problems are often associated with improper handling, installation, and selection. The following should be considered:</p>
            <ul>
                <li>Ensure the rupture disk is installed in the proper orientation. Some reverse-acting rupture disks will open at a significantly higher burst pressure if installed in the reverse direction.</li>
                <li>Once a rupture disk is removed from its holder, the rupture disk should not be reinstalled. Installation in a holder can form an imprint on the disk. Once removed from its holder, it would be difficult to reinstall the disk perfectly in the same imprint. The most likely result will be premature failure below the intended burst pressure.</li>
                <li>Always follow the manufacturer's recommended torque settings when installing the rupture disk in the holder. An improper torque could affect the opening pressure of the disk and in some cases cause nonfragmenting disks to fragment.</li>
                <li>Touching the rupture disk surface could lead to localized corrosion leading to premature failures.</li>
                <li>Disks that become dented or otherwise damaged during installation or handling may open outside of their specified burst pressure tolerance or may not open completely on demand, thereby potentially restricting the relief path.</li>
                <li>Temperature can significantly affect rupture disk opening pressure for some materials. Specification of appropriate burst temperature should consider ambient heating or cooling if un-insulated and/or untraced. Consult the manufacturer and see API 520, Part I for additional information.</li>
                <li>Rupture disks should be installed away from unstable flow patterns to avoid premature failures (see API 520, Part I, which provides general requirements for installation of rupture disks).</li>
            </ul>
        </div>
    </div>
    <div class="subsection">
        <h4>5.10 Improper Differential Between Operating and Set Pressures</h4>
        <p>The differential between operating and set pressures provides seat loading to keep the pressure-relief valve tightly closed. Due to a variety of service conditions and valve designs, only general guidelines can be given for designing a system. ASME BPVC Section VIII, Division 1 (see Appendix M) and API 520 are useful references. However, individual applications and experience may be relied on.</p>
    </div>
    <div class="subsection">
        <h4>5.11 Improper Inlet/Outlet Piping Test Procedures</h4>
        <p>When hydrostatic tests of inlet/outlet piping are performed, blinds shall be installed. Otherwise, results such as the following might occur:</p>
        <ul>
            <li>the disc holder, guide, spring, and body area on the discharge side of the valve may become fouled;</li>
            <li>the bellows of a balanced pressure-relief valve may become damaged by excessive backpressure;</li>
            <li>the dome area and/or pilot assembly of a pilot-operated pressure-relief valve may become fouled or damaged by the backflow of fluid;</li>
            <li>the test pressure may exceed the design pressure of the discharge side of the pressure-relief valve.</li>
        </ul>
    </div>
    `,
    contentEs: `<h3>5 Causas de Funcionamiento Incorrecto</h3>
    <div class="subsection">
        <h4>5.1 Corrosión</h4>
        <div class="subsection">
            <h4>5.1.1 General</h4>
            <p>La corrosión es una causa básica de muchas de las dificultades encontradas con los dispositivos de alivio de presión. Se requiere una comprensión de las condiciones del proceso/operación y los mecanismos de daño resultantes para establecer y mantener un programa de inspección de válvulas de alivio que produzca la mayor probabilidad de prevenir su daño. Los cambios en las condiciones del proceso/operación deben incluir una evaluación del potencial de corrosión de la válvula de alivio. Existen varias otras fuentes de datos de la industria que identifican específicamente los mecanismos de degradación típicos para varias unidades de operación. Específicamente aplicable a la industria de refinación y petroquímica es API 571 que cubre los mecanismos de daño.</p>
            <p>La corrosión a menudo aparece como partes de válvula picadas o rotas, depósitos de residuos corrosivos que interfieren con el funcionamiento de las partes móviles, o un deterioro general del material del dispositivo de alivio. Las Figuras 21 a la 26 ilustran los efectos de la corrosión en los dispositivos de alivio. Además de las partes internas, los espárragos expuestos son vulnerables al ataque de corrosión ambiental.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_21.png" class="figure-image">
                <p class="figure-caption">Figura 21—Corrosión por Ácido en Sombrerillo de Acero al Carbono Causada por Superficies de Asiento Fugantes</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_22.png" class="figure-image">
                <p class="figure-caption">Figura 22—Corrosión por Cloruro en Boquilla de Acero 18Cr-8Ni (con Superficie de Asiento Mecanizada)</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_23.png" class="figure-image">
                <p class="figure-caption">Figura 23—Corrosión por Sulfuro en Disco de Acero al Carbono de Unidad de Destilación de Crudo</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_24.png" class="figure-image">
                <p class="figure-caption">Figura 24—Ataque por Cloruro en Disco de Acero 18Cr-8Ni</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_25.png" class="figure-image">
                <p class="figure-caption">Figura 25—Corrosión Tipo Picadura en Fuelle de Acero 18Cr-8Ni</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_26.png" class="figure-image">
                <p class="figure-caption">Figura 26—Discos de Ruptura de Aleación 400 Corroídos en Servicio de Gas Agrio</p>
            </div>
            
            <p>El mal funcionamiento de la válvula también puede deberse al adherimiento del disco a la boquilla o al portadiscos en la guía. Este adherimiento puede ser causado por corrosión o agarrotamiento del metal o por partículas extrañas en las superficies de guía. Las partículas extrañas en las superficies de guía tienden a enrollar el metal, causando un agarrotamiento severo. El uso de un fuelle puede mantener las partículas extrañas alejadas de las superficies de guía. El adherimiento de las válvulas ilustra un portadiscos que está congelado en la guía como resultado de la corrosión, por ejemplo, en servicio de gas agrio.</p>
            <p>La corrosión puede ralentizarse o mitigarse mediante la selección de dispositivos o materiales de dispositivo más adecuados. El mantenimiento adecuado también es una consideración, ya que una válvula fugante permite que los fluidos circulen en las partes superiores de la válvula, lo que puede contribuir a la corrosión de sus partes móviles. Los recubrimientos protectores como se muestra en la Figura 27 pueden ofrecer protección contra la corrosión en algunos servicios.</p>
            <p>Los fuelles pueden proteger las partes móviles de la sustancia corrosiva, especialmente en sistemas cerrados.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_27.png" class="figure-image">
                <p class="figure-caption">Figura 27—Cuerpo y Sombrerillo Recubiertos con Epoxy para Protección contra la Corrosión</p>
            </div>
        </div>
        <div class="subsection">
            <h4>5.1.2 Ejemplos de Acciones Preventivas para la Corrosión</h4>
            <p>Un dispositivo de disco de ruptura instalado en la entrada y/o salida de una válvula de alivio de presión puede proporcionar protección adicional contra la corrosión de los componentes internos de la válvula.</p>
            <p>En muchos casos, las válvulas con diferentes materiales de construcción pueden impedir o mitigar por completo los efectos de la corrosión. El uso de un anillo O o asiento resiliente en una válvula de alivio de presión puede detener las fugas más allá de la superficie de asiento y eliminar la corrosión en las partes de trabajo de la válvula. Sin embargo, los elastómeros de anillo O pueden tener una vida útil limitada bajo estrés debido a la degradación causada por la temperatura, especies corrosivas, envejecimiento o hinchazón. El sello de fuelle puede usarse para proteger el resorte y la cavidad del sombrerillo de la válvula del fluido de carga corrosivo.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5.2 Superficies de Asiento Dañadas</h4>
        <p>Las imperfecciones en las superficies de asiento pueden contribuir a una acción incorrecta de la válvula en servicio. Para prevenir la fuga del fluido de carga, se debe mantener una precisión óptica del orden de tres cuentas/bandas de luz según las especificaciones del fabricante en la planitud de las superficies de asiento en las válvulas de alivio de presión con asiento metálico (ver API 527).</p>
        <p>Existen muchas causas de asientos de válvula dañados en servicio de refinería o planta química, incluyendo las siguientes:</p>
        <ul>
            <li>Corrosión.</li>
            <li>Partículas extrañas introducidas en la entrada de la válvula que pasan a través de la válvula cuando se abre, como óxido de laminación, salpicaduras de soldadura o escoria, depósitos corrosivos, coque o suciedad. Las partículas pueden dañar el contacto asiento-boquilla requerido para la estanqueidad en la mayoría de las válvulas de alivio de presión. El daño puede ocurrir ya sea en el taller durante el mantenimiento de la válvula o mientras la válvula está en servicio.</li>
            <li>Una caída de presión excesiva en la entrada puede ser causada por un diseño incorrecto de la tubería o tubería larga hasta la entrada de la válvula u obstrucciones en la línea y puede causar que una válvula chantee. La presión debajo del disco puede llegar a ser lo suficientemente grande como para abrir la válvula. Sin embargo, tan pronto como se establece el flujo, la caída de presión en la tubería de conexión puede ser tan grande que la presión debajo del disco cae y permite que la válvula se cierre. Puede desarrollarse un ciclo de apertura y cierre, volverse rápido y someter las superficies de asiento de la válvula a un martilleo severo, lo que daña las superficies de asiento, a veces más allá de la reparación. La Figura 28 muestra superficies de asiento dañadas por chattering y fluctuaciones frecuentes de presión. Consulte API 520, Parte II para una explicación adicional del chattering.</li>
        </ul>
        
        <div class="figure-container">
            <img src="images/api576_figure_28.png" class="figure-image">
            <p class="figure-caption">Figura 28—Superficie de Asiento de Disco Deformada por Chattering</p>
        </div>
        
        <ul>
            <li>Manipulación incorrecta durante el mantenimiento y/o transporte, como golpes, caídas, sacudidas o rayaduras de las partes de la válvula.</li>
            <li>Fugas más allá de las superficies de asiento de una válvula después de haber sido instalada. Esta fuga contribuye al daño del asiento al causar erosión (dibujo de alambre) o corrosión de la superficie de asiento y así agravarse a sí misma. Puede deberse a un mantenimiento o instalación incorrectos, como desalineación de las partes, esfuerzos de tubería resultantes de soportes inadecuados, o soporte inadecuado de la tubería de salida. Otras causas comunes de esta fuga son la alineación incorrecta del husillo, el ajuste incorrecto de los resortes a las arandelas de resorte, y el apoyo incorrecto entre las arandelas de resorte y sus respectivos contactos de apoyo o entre el husillo y el portadiscos. Los husillos deben verificarse visualmente para su rectitud. Los resortes y las arandelas de resorte deben mantenerse juntos como un conjunto de resorte durante la vida útil del resorte. La operación frecuente demasiado cerca de la presión de ajuste de la válvula de alivio de presión puede causar fugas de fluido de proceso a través de la válvula de alivio de presión (simmer) y hacer ciclar la válvula de alivio de presión, resultando en daño del asiento.</li>
            <li>Ajustes incorrectos del anillo de blowdown. Esto puede causar chattering en las válvulas de alivio de presión. Se debe contactar al fabricante de la válvula de alivio de presión para obtener ajustes específicos del anillo de blowdown.</li>
            <li>El sobredimensionamiento severo de la válvula de alivio de presión para las cargas de alivio encontradas puede causar que la válvula cicle (abra/cierre repetidamente), resultando en daño de las superficies de asiento del disco y la boquilla. Vea la Figura 29.</li>
            <li>La descarga de líquidos a través de válvulas de alivio de presión de recorte para vapor puede causar efectos de chattering/ciclado/martilleo con el daño resultante.</li>
        </ul>
        
        <div class="figure-container">
            <img src="images/api576_figure_29.png" class="figure-image">
            <p class="figure-caption">Figura 29—Superficie de Asiento de Disco Dañada por Operación Frecuente de la Válvula Demasiado Cerca de la Presión de Operación</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5.3 Resortes Fallidos</h4>
        <div class="subsection">
            <h4>5.3.1 General</h4>
            <p>Las fallas de resortes ocurren en dos formas. La primera es un debilitamiento del resorte, que causa una reducción en la presión de ajuste y la posibilidad de una apertura prematura. La segunda es una falla mecánica (ruptura completa) del resorte, que causa una apertura incontrolada de la válvula.</p>
            <p>Aunque los resortes pueden debilitarse y fallar debido al uso de materiales inadecuados en servicio de alta temperatura, los resortes fallidos son casi siempre causados por corrosión. La corrosión superficial y la corrosión bajo tensión son las más prevalentes de este tipo de falla en las refinerías.</p>
            <p>La corrosión superficial ataca la superficie del resorte hasta que el área transversal no es suficiente para proporcionar la fuerza de cierre necesaria. También puede producir picaduras que actúan como concentradores de esfuerzo y causan grietas en la superficie del resorte y la falla subsiguiente del resorte (ver Figura 30).</p>
            <p>La corrosión bajo tensión (SCC) a veces causa falla del resorte. El mecanismo de daño por SCC es difícil de detectar y predecir antes de que falle el resorte. Una falla de resorte tipo frágil debido a corrosión bajo tensión se muestra en la Figura 31. El sulfuro de hidrógeno (H<sub>2</sub>S) frecuentemente causa SCC de resortes (ver NACE MR 0175 y NACE MR 0103 para recomendaciones y orientación de materiales). Consulte al fabricante para seleccionar un resorte apropiado en aplicaciones susceptibles, ya que la resistencia del material, la dureza y el tratamiento térmico del resorte pueden afectar su resistencia a la corrosión bajo tensión.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_30.png" class="figure-image">
                <p class="figure-caption">Figura 30—Falla de Resorte Debido a Corrosión</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_31.png" class="figure-image">
                <p class="figure-caption">Figura 31—Falla de Resorte Debido a Corrosión Bajo Tensión</p>
            </div>
        </div>
        <div class="subsection">
            <h4>5.3.2 Ejemplos de Acciones Preventivas para la Corrosión de Resortes</h4>
            <p>Los siguientes son ejemplos, pero no se limitan a la corrosión de resortes:</p>
            <ul>
                <li>Puede usarse material de resorte que resista satisfactoriamente la acción del agente corrosivo.</li>
                <li>El resorte puede aislarse con un fuelle. Ciertas válvulas de alivio de presión operadas por piloto tienen diafragmas o pistones que aíslan el resorte piloto del proceso.</li>
                <li>El resorte puede recubrirse especialmente con un recubrimiento resistente a la corrosión que pueda soportar la temperatura de operación y el ambiente.</li>
            </ul>
        </div>
    </div>
    <div class="subsection">
        <h4>5.4 Ajuste y Regulación Incorrectos</h4>
        <p>Los manuales del fabricante de la válvula proporcionan procedimientos para un ajuste adecuado, indicando cómo ajustar sus válvulas para temperatura, contrapresión y otros factores.</p>
            <p>El ajuste de una válvula de alivio de presión mientras está en su lugar en el equipo que se va a proteger puede ser impracticable y debe realizarse solo después de una consideración especial como se indica en 6.3. Generalmente, las válvulas de accionamiento directo cargadas por resorte deben ajustarse en el taller de mantenimiento de válvulas mientras están en el equipo de prueba adecuado. Durante la inspección y reparación, un bloque de prueba diseñado adecuadamente facilita el ajuste y regulación de la válvula de alivio de presión (ver Anexo A).</p>
            <p>Las válvulas de alivio de presión están diseñadas y certificadas para operar en tipos específicos de medios fluidos. Por lo tanto, agua, aire, vapor o un gas inerte como nitrógeno embotellado se usa generalmente como medio de prueba en el taller, dependiendo del diseño de la válvula que se está probando y los requisitos de los códigos aplicables de diseño y prueba. Para asegurar que la válvula está abriendo, se debe aplicar cuidadosamente algo de sobrepresión porque una fuga audible podría interpretarse erróneamente como el resultado de alcanzar la presión de ajuste. Sin embargo, la mayoría de las válvulas de alivio de presión, especialmente las válvulas de seguridad, producen un chasquido distinto en la presión de ajuste, haciendo poco probable la interpretación errónea. El tamaño del banco de prueba es importante ya que un volumen de pulsación insuficiente podría no causar un chasquido distinto y puede causar una presión de ajuste incorrecta. Las válvulas de servicio de aire, gas o vapor deben ajustarse usando aire o gas inerte. Las válvulas de servicio de vapor deben ajustarse usando vapor. Se necesita atención especial si la válvula de alivio se coloca en servicio de vapor sobrecalentado para compensar la temperatura. Se puede usar aire si se aplican correcciones adecuadas en lugar de vapor. Las válvulas de servicio de líquido deben ajustarse usando agua. Vea NB-23, Parte 3, Sección 4.5 para más detalles. Es importante notar qué indicación audible o visual significa la presión de ajuste para un tipo específico de válvula de alivio de presión. Esta indicación es definida por el fabricante y está listada en NB-18 y los manuales del fabricante.</p>
            <p>Consulte al fabricante para la técnica adecuada para ajustar las válvulas de alivio de presión operadas por piloto en líquido, ya que el agua en el área de la cúpula y el conjunto piloto pueden crear problemas cuando se ponen en servicio.</p>
            <p>La calibración incorrecta de los manómetros de presión es una causa frecuente de ajuste incorrecto de la válvula. Para asegurar la precisión, los manómetros deben calibrarse frecuentemente en un probador de peso muerto calibrado. El rango de presión del manómetro debe elegirse de manera que la presión de ajuste requerida de la válvula de alivio de presión caiga dentro del tercio medio del rango de presión del manómetro. Generalmente no se recomiendan los amortiguadores en los manómetros de presión ya que tienden a obstruirse y producir retraso de presión. Puede ser deseable usar dos manómetros de prueba durante la prueba de la válvula.</p>
            <p>Muchas válvulas de alivio de presión de accionamiento directo cargadas por resorte tienen uno o más anillos internos que pueden ajustarse. El anillo o anillos de ajuste de la válvula de alivio de presión controlarán el blowdown de la válvula—la diferencia entre la presión de ajuste y la presión de reasiento—y el simmer de la válvula, dependiendo del diseño de la válvula que se está probando. Para probar funcionalmente la válvula de alivio de presión y medir el blowdown, se necesitan propiedades de medio similares del fluido de servicio y capacidades de flujo adecuadas para hacer ciclar completamente la válvula. Debido a que la densidad y las características de expansión del material manejado a través de las válvulas de seguridad son variables y el volumen de las instalaciones de prueba es limitado, generalmente es impracticable ajustar los anillos de la válvula y obtener un valor específico de blowdown en un bloque de prueba de taller de mantenimiento. Por lo tanto, los anillos deben ajustarse para obtener un chasquido en el tambor de prueba de la válvula (ver las instrucciones de mantenimiento del fabricante para este ajuste) y luego inspeccionarse y reajustarse para un blowdown adecuado según la recomendación del fabricante. Esto debería permitir las mejores características de rendimiento promedio de la válvula cuando esté instalada. Es importante una comprensión completa de la terminología (ver ASME PTC 25).</p>
        </div>
    <div class="subsection">
        <h4>5.5 Taponamiento y Ensuciamiento</h4>
        <p>Sólidos del proceso y contaminantes como coque, arena o productos solidificados a veces pueden obstruir varias partes de la válvula y la tubería conectada. Además, el servicio de monómero puede llevar a la formación de polímeros y obstrucción.</p>
        <p>Todas las partes de la válvula, especialmente las superficies de guía y los fuelles, deben verificarse minuciosamente para cualquier tipo de ensuciamiento. Vea las Figuras 32, 33 y 34.</p>
        
        <div class="figure-container">
            <img src="images/api576_figure_32.png" class="figure-image">
            <p class="figure-caption">Figura 32—Boquilla de Entrada Obstruida con Coque y Catalizador Después de Nueve Meses en Línea de Vapor de Reactor</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api576_figure_33.png" class="figure-image">
            <p class="figure-caption">Figura 33—Válvula de Salida Obstruida con Depósitos de Otras Válvulas en Colector de Descarga Común</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api576_figure_34.png" class="figure-image">
            <p class="figure-caption">Figura 34—Partes Móviles de Válvula Ensuciadas con Sulfuro de Hierro (FeS<sub>2</sub>)</p>
        </div>
        
        <p>El adherimiento de las válvulas de alivio de presión también puede ser causado por una alineación deficiente del portadiscos de la válvula, que generalmente se debe a escombros en la superficie de contacto entre la guía y el portadiscos, o la desalineación de una junta en el montaje. Vea la Figura 35.</p>
        
        <div class="figure-container">
            <img src="images/api576_figure_35.png" class="figure-image">
            <p class="figure-caption">Figura 35—Disco Congelado en Guía Debido a la Acumulación de Productos de Corrosión en Servicio de Vapor de Petróleo Agrio</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5.6 Agarrotamiento</h4>
        <div class="subsection">
            <h4>5.6.1 General</h4>
            <p>Cuando el agarrotamiento del metal en las superficies de guía no se debe a corrosión o partículas extrañas, a menudo se debe al chattering o flutter de la válvula causado por una tubería incorrecta en la entrada o salida de la válvula o por un sobredimensionamiento severo de la válvula. El agarrotamiento también puede ocurrir si el sistema opera demasiado cerca de la presión de ajuste, resultando en alivios frecuentes.</p>
        </div>
        <div class="subsection">
            <h4>5.6.2 Ejemplos de Acciones Preventivas para el Agarrotamiento</h4>
            <p>La corrección de la tubería incorrecta en la entrada o salida de la válvula generalmente detendrá la acción de chattering o flutter (ver API 520, Partes I y II). El acabado incorrecto de las superficies de guía también puede resultar en agarrotamiento causado por chattering o flutter. Consulte al fabricante de la válvula para obtener recomendaciones, ya que esto es potencialmente un problema de diseño y fabricación.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5.7 Aplicación Incorrecta de Materiales</h4>
        <p>En general, la temperatura, presión, requisitos de protección contra la corrosión y las condiciones atmosféricas del servicio determinan los materiales necesarios para un dispositivo de alivio de presión en un servicio dado. Ocasionalmente, la corrosión severa o condiciones inusuales de presión o temperatura en el proceso requieren consideración especial. Los fabricantes generalmente pueden suministrar diseños y materiales de válvula que se adapten a servicios especiales. Los catálogos tienen una amplia selección de materiales especiales y opciones de accesorios para varias condiciones químicas y de temperatura. La adición de un dispositivo de disco de ruptura en la entrada y/o salida de la válvula puede ayudar a prevenir la corrosión.</p>
        <p>El ataque de H<sub>2</sub>S en un resorte de acero al carbono en la Figura 30 y el ataque de cloruro en un disco de acero 18Cr-8Ni en la Figura 24 ejemplifican los resultados de la aplicación incorrecta de materiales. Cuando la experiencia de servicio indica que un tipo o material de válvula seleccionado no es adecuado para una condición de servicio dada, debe hacerse una corrección inmediata que asegure un funcionamiento confiable. Debe tenerse especial cuidado en registrar la identidad de los materiales especiales y las ubicaciones que los requieren. Un sistema adecuado de registros debe proporcionar la información necesaria para la reparación o acondicionamiento de válvulas en servicios especiales y para desarrollar especificaciones de compra óptimas.</p>
    </div>
    <div class="subsection">
        <h4>5.8 Ubicación, Historial o Identificación Incorrectos</h4>
        <p>Si no se instala en la ubicación exacta para la que está destinado, un dispositivo de alivio de presión puede no proporcionar la protección adecuada.</p>
        <p>Para ayudar en la identificación de los dispositivos y proporcionar información necesaria para reparaciones e instalación correctas, deben mantenerse registros históricos y especificaciones y consultarse cuando los dispositivos se retiren para inspección y reparación. La mayoría de los dispositivos de alivio de presión tienen un número de serie o de taller de identificación colocado en el dispositivo por el fabricante o un número de identificación etiquetado, estampado o colocado de otra manera en el dispositivo por el usuario. Algunos usuarios también estampan las bridas de tubería correspondientes con números de dispositivo. Esta identificación especifica la ubicación del dispositivo y, por referencia al registro de especificaciones, sus limitaciones y construcción.</p>
    </div>
    <div class="subsection">
        <h4>5.9 Manipulación Incorrecta</h4>
        <div class="subsection">
            <h4>5.9.1 General</h4>
            <p>La manipulación incorrecta puede ocurrir durante el envío, mantenimiento o instalación. Esta manipulación incorrecta de la válvula de alivio puede causar un cambio en la presión de ajuste, dañar las palancas de levantamiento, dañar tubos y accesorios de tubería, dañar conjuntos piloto o causar fugas internas cuando la válvula está en servicio. Vea las Figuras 36 y 37.</p>
            <p>Las válvulas se verifican para estanqueidad en la planta del fabricante antes de ser enviadas al usuario. La estanqueidad de la válvula a veces es verificada por el usuario en el taller de mantenimiento antes del uso inicial y generalmente se verifica después de la limpieza, reparación o prueba posterior.</p>
            
            <div class="figure-container">
                <img src="images/api576_figure_36.png" class="figure-image">
                <p class="figure-caption">Figura 36—Almacenamiento Incorrecto de Válvulas</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api576_figure_37.png" class="figure-image">
                <p class="figure-caption">Figura 37—Ejemplo de Almacenamiento Incorrecto de Válvulas</p>
            </div>
        </div>
        <div class="subsection">
            <h4>5.9.2 Durante el Envío</h4>
            <p>La mayoría de las válvulas de alivio de presión tienen una apariencia robusta que puede oscurecer el hecho de que son instrumentos de precisión con tolerancias muy cercanas y dimensiones críticas. En consecuencia, los transportistas comerciales y/o camiones de transporte de mantenimiento a veces las someten a una manipulación incorrecta. Esto puede hacer que una válvula fuge excesivamente en servicio o durante las pruebas. Esta manipulación incorrecta también puede exponer la entrada de la válvula a suciedad u otras partículas extrañas que podrían dañar la superficie de asiento de la válvula la primera vez que la válvula se abre y causar fugas posteriormente.</p>
            <p>Las válvulas de alivio de presión deben estar sujetas y enviadas en posición vertical—esto es especialmente cierto para las válvulas grandes y las válvulas con bajas presiones de ajuste. Cuando se permite que las válvulas grandes de baja presión se acuesten de lado, los resortes o pesos pueden no ejercer la misma fuerza alrededor de todas las superficies de asiento.</p>
        </div>
        <div class="subsection">
            <h4>5.9.3 Durante el Mantenimiento</h4>
            <p>Las partes de las válvulas de alivio de presión son artículos de precisión fabricados con tolerancias extremadamente cercanas. La manipulación incorrecta puede degradar estas tolerancias, destruyendo la alineación básica de la válvula en la que dependen principalmente las finas y exigentes características de rendimiento del dispositivo. Tanto antes como después de las reparaciones, debe evitarse la manipulación incorrecta de la válvula completamente ensamblada. La manipulación incorrecta de una válvula de alivio de presión puede afectar la presión de apertura y la presión de reasiento de la válvula de alivio de presión durante la prueba previa al mantenimiento o después de haber sido serviced y restablecida. Esto debe documentarse e implementarse procedimientos de manipulación adecuados.</p>
            <p>Antes de que las válvulas salgan del taller, las entradas y salidas de la válvula deben estar cubiertas de manera segura. Las válvulas de alivio de presión con palancas de levantamiento no deben moverse o transportarse mediante la palanca, y debe considerarse la posibilidad de cablear la palanca a la válvula para mayor estabilidad durante el transporte.</p>
            <p>Precaución—El cableado de la palanca de levantamiento solo se usa para el transporte y debe quitarse antes de la instalación.</p>
            <p>Precaución—Evite exceder la clasificación de presión del fuelle durante una prueba de contrapresión, ya que esto puede dañar el fuelle.</p>
        </div>
        <div class="subsection">
            <h4>5.9.4 Durante la Instalación</h4>
            <p>Las entradas y salidas de la válvula deben estar cubiertas de manera segura antes de que las válvulas salgan del taller. Cuando se reciban para instalación, debe realizarse una inspección de las aberturas en busca de materiales extraños, soportes de envío y daños.</p>
            <p>Debe utilizarse API 2000, Sección 3.7 para los requisitos de instalación de dispositivos de ventilación de tanques.</p>
            <p>Precaución—Las válvulas de alivio de presión a menudo se entregan con soportes de envío que estabilizan la válvula durante el transporte. Dichos soportes deben quitarse antes de la instalación.</p>
            <p>Precaución—Las válvulas de alivio de presión deben instalarse en orientación vertical, con el disco de una válvula de accionamiento directo o el miembro no balanceado de una válvula operada por piloto orientado horizontalmente, de modo que el disco o el miembro no balanceado se mueva hacia arriba cuando la válvula se abre. Otras orientaciones pueden permitir que estas partes se desalineen en la guía. ASME BPVC Sección VIII, División 1, Apéndice M describe bajo qué condiciones una orientación que no sea vertical puede ser aceptable.</p>
            <p>Precaución—Existen diseños de válvulas cargadas por peso que pueden instalarse en los lados de los tanques. Las válvulas cargadas por peso pueden tener su peso enviado por separado de la válvula para proteger las superficies de asiento de la paleta durante la manipulación. Estos pesos deben instalarse antes de la puesta en servicio del tanque. Consulte API 2000, Sección 3.7 para los requisitos de instalación de dispositivos de ventilación de tanques.</p>
        </div>
        <div class="subsection">
            <h4>5.9.5 Manipulación, Instalación y Selección Incorrectas de Discos de Ruptura</h4>
            <p>Los problemas de los discos de ruptura a menudo están asociados con la manipulación, instalación y selección incorrectas. Se debe considerar lo siguiente:</p>
            <ul>
                <li>Asegurarse de que el disco de ruptura esté instalado en la orientación adecuada. Algunos discos de ruptura de acción inversa se abrirán a una presión de ruptura significativamente mayor si se instalan en la dirección inversa.</li>
                <li>Una vez que un disco de ruptura se retira de su portador, el disco de ruptura no debe reinstalarse. La instalación en un portador puede formar una huella en el disco. Una vez retirado de su portador, sería difícil reinstalar el disco perfectamente en la misma huella. El resultado más probable será una falla prematura por debajo de la presión de ruptura deseada.</li>
                <li>Siga siempre las configuraciones de torque recomendadas por el fabricante al instalar el disco de ruptura en el portador. Un torque inadecuado podría afectar la presión de apertura del disco y en algunos casos causar que los discos no fragmentarios se fragmenten.</li>
                <li>Tocar la superficie del disco de ruptura podría llevar a una corrosión localizada que provoque fallas prematuras.</li>
                <li>Los discos que se abollan o dañan de otra manera durante la instalación o manipulación pueden abrirse fuera de su tolerancia de presión de ruptura especificada o pueden no abrirse completamente bajo demanda, restringiendo así potencialmente la ruta de alivio.</li>
                <li>La temperatura puede afectar significativamente la presión de apertura de los discos de ruptura para algunos materiales. La especificación de la temperatura de ruptura adecuada debe considerar el calentamiento o enfriamiento ambiental si no está aislado y/o sin traza. Consulte al fabricante y vea API 520, Parte I para obtener información adicional.</li>
                <li>Los discos de ruptura deben instalarse lejos de patrones de flujo inestables para evitar fallas prematuras (ver API 520, Parte I, que proporciona requisitos generales para la instalación de discos de ruptura).</li>
            </ul>
        </div>
    </div>
    <div class="subsection">
        <h4>5.10 Diferencial Incorrecto entre Presiones de Operación y Ajuste</h4>
        <p>El diferencial entre las presiones de operación y ajuste proporciona la carga de asiento para mantener la válvula de alivio de presión cerrada herméticamente. Debido a una variedad de condiciones de servicio y diseños de válvula, solo se pueden dar pautas generales para diseñar un sistema. ASME BPVC Sección VIII, División 1 (ver Apéndice M) y API 520 son referencias útiles. Sin embargo, se puede confiar en aplicaciones individuales y experiencia.</p>
    </div>
    <div class="subsection">
        <h4>5.11 Procedimientos de Prueba Incorrectos para Tubería de Entrada/Salida</h4>
        <p>Cuando se realizan pruebas hidrostáticas de la tubería de entrada/salida, deben instalarse tapas ciegas. De lo contrario, podrían ocurrir resultados como los siguientes:</p>
        <ul>
            <li>el portadiscos, guía, resorte y área del cuerpo en el lado de descarga de la válvula pueden ensuciarse;</li>
            <li>el fuelle de una válvula de alivio de presión balanceada puede dañarse por una contrapresión excesiva;</li>
            <li>el área de la cúpula y/o el conjunto piloto de una válvula de alivio de presión operada por piloto pueden ensuciarse o dañarse por el retroceso de fluido;</li>
            <li>la presión de prueba puede exceder la presión de diseño del lado de descarga de la válvula de alivio de presión.</li>
        </ul>
    </div>
    `
});