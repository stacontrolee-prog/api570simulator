// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 11 para API 577
registerChapter('API577', {
    id: 11,
    title: "Refinery and Petrochemical Plant Welding Issues",
    titleEs: "Problemas de Soldadura en Refinerías y Plantas Petroquímicas",
    content: `<h2>Refinery and Petrochemical Plant Welding Issues</h2>
    <h3>11.1 General</h3>
    <p>This section provides details of specific welding issues encountered by the inspector in refineries and petrochemical plants. This section will be expanded as more issues reflecting industry experience are added.</p>
    
    <h3>11.2 Hot Tapping and In-Service Welding</h3>
    <h4>11.2.1 General</h4>
    <p>API 2201 provides an in-depth review of the safety aspects to be considered when hot tapping or welding on in-service piping or equipment. Prior to performing this work, a detailed written plan should be developed and reviewed. The following is a brief summary of welding related issues.</p>
    <p>Two primary concerns when welding on in-service piping and equipment are burn-through and cracking. Burn-through will occur if the unmelted area beneath the weld pool can no longer contain the pressure within the pipe or equipment. Weld cracking results when fast weld-cooling rates produce a hard, crack-susceptible weld microstructure. Fast cooling rates can be caused by flowing contents inside the piping and equipment, which remove heat quickly.</p>
    
    <h4>11.2.2 Electrode Considerations</h4>
    <p>Hot tap and in-service welding operations should be carried out only with low-hydrogen consumables and electrodes (e.g. E7016, E7018, and E7048). Extra-low-hydrogen consumables such as EXXXX-H4 should be used for welding carbon steels with a carbon equivalent greater than 0.42 % or where there is potential for hydrogen-assisted cracking (HAC) such as cold-worked pieces, high strength, and highly constrained areas.</p>
    <p>Cellulosic-type electrodes (e.g. E6010, E6011, and E7010) may be used for root and hot passes. Although low-hydrogen electrodes are preferred, some refining locations and the pipeline industry prefer to use cellulosic electrodes frequently because they are easy to operate and provide improved control over the welding arc. Root pass with low-hydrogen electrodes reduces risk of HAC. It also reduces risk of burn-through because the amount of heat directed to the base metal is less than when using cellulosic-type electrodes. However, manipulation of low-hydrogen electrode for root pass is not as easy but it can be performed by training and practice. It should be noted that cellulosic electrodes have the following adverse effects on the integrity of the weldment:</p>
    <ul>
        <li>deep penetration, therefore higher risk of burn-through than low-hydrogen electrodes; and</li>
        <li>high diffusible hydrogen, therefore higher risk of hydrogen-assisted cracking.</li>
    </ul>
    
    <h4>11.2.3 Flow Rates</h4>
    <p>An appropriate flow rate should be maintained to dissipate the heat from welding, minimizing the possibility of burn-through or combustion. The minimum flow rate is 1.3 ft/s (0.4 m/s) for liquid and gas. For liquids, a maximum flow rate is usually required to minimize risk of high hardness weld zone due to the fast cooling rate. The allowable maximum flow rate depends on the process temperature. In general, 4.0 ft/s (1.2 m/s) is the upper limit. There is no restriction on maximum velocity for gas lines, subject to maintaining preheat temperatures. It is advisable to compensate for any heat loss by preheating the weld area to at least 70 °F (20 °C) and maintaining that preheat until the weld has been completed.</p>
    <p>For making attachment welds to equipment containing a large quantity of liquid, such as a storage tank, the weld should be 36 in. (900 mm) below the liquid/vapor line. Normal circulation within the equipment will effectively cool the weld area.</p>
    <p>Welding on a line under no-flow conditions or intermittent-flow conditions, e.g. a flare line, should not be attempted unless it has been confirmed that no explosive or flammable mixture will be generated during the welding operation. In this respect, it should be confirmed that no ingress of oxygen in the line is possible. In cases where this requirement cannot be met, inert gas or nitrogen purging is recommended. Software that takes into account the material properties and flow conditions is often employed to determine if the conditions are safe for in-service welding.</p>
    
    <h4>11.2.4 Other Considerations</h4>
    <h5>11.2.4.1 Burn-Through</h5>
    <p>To avoid overheating and burn-through, the welding procedure specification should be based on experience in performing welding operations on similar piping or equipment, and/or be based on heat transfer analysis. Many users establish procedures detailing the minimum wall thickness that can be hot tapped or welded in service for a given set of conditions like pressure, temperature, and flow rate. Some users include in their procedures the use of mock-up weld coupons when the actual thickness of the material to be welded is less than 1/4 in. (6 mm). The mock-up coupon represents the actual material and thickness, the welding parameters are recorded, and the weld penetration is verified by etching. This information becomes the supplement to the repair package. To minimize burn-through, the first weld pass to equipment or piping less than 1/4 in. (6 mm) thick should be made with a 3/32 in. (5 mm) or smaller diameter welding electrode to limit heat input. For equipment and piping-wall thicknesses where burn-through is not a primary concern, a larger diameter electrode can be used. Weaving the weld bead should also be avoided as this increases the heat input.</p>
    
    <h5>11.2.4.2 Hot Taps</h5>
    <p>Adverse effects can also occur from the heat on the process fluid. In addition, welds associated with hot taps or in-service welding often cannot be stress relieved and may be susceptible to cracking in certain environments. Any hot tapping or in-service welding on systems containing those listed in Table 13 should be carefully reviewed.</p>
    <p>During repairs or alterations (including hot taps) of alloy material piping systems, material verification of the existing and the new materials is required to establish that the selected components are as specified. Additionally, in some jurisdictions the hot-tap component may be required to have a registered design, in which case this should be verified.</p>
    <p>Buttering the surface of the run pipe prior to attaching a hot-tap nozzle is particularly recommended when attaching a nozzle to pipe fabricated from plate material to prevent lamellar tearing of the pipe where the thickness is such that this may occur as the result of weld shrinkage stresses. With in-service welding, there is the risk of high hardness and hydrogen cracking in the HAZ of the parent material. Buttering allows a more closely controlled heat input in the parent material, and also permits use of the temper bead welding technique. The temper bead welding technique tempers the HAZ of the parent material during the deposition of the second layer of weld metal. This approach is particularly useful where the cooling effect of the process fluid present is high.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 13—Hot Tapping/In-Service Welding Hazards Associated With Some Particular Substances</caption>
            <thead>
                <tr>
                    <th>Substance</th>
                    <th>Hot Tapping/In-Service Welding Hazard</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Acetylene</td>
                    <td>Explosion or unstable reaction with the addition of localized heat.</td>
                </tr>
                <tr>
                    <td>Acetonitrile</td>
                    <td>Explosion or unstable reaction with the addition of localized heat.</td>
                </tr>
                <tr>
                    <td>Amines and caustic</td>
                    <td>Stress corrosion cracking due to high thermal stress upon the addition of localized heat and high hardness of non-PWHT's weld. Hydrogen embrittlement.</td>
                </tr>
                <tr>
                    <td>Butadiene</td>
                    <td>Explosion or unstable reaction.</td>
                </tr>
                <tr>
                    <td>Chlorine</td>
                    <td>Carbon steel burns in the presence of chlorine and high heat.</td>
                </tr>
                <tr>
                    <td>Compressed air</td>
                    <td>Combustion/metal burning.</td>
                </tr>
                <tr>
                    <td>Ethylene</td>
                    <td>Exothermic decomposition or explosion.</td>
                </tr>
                <tr>
                    <td>Ethylene oxide</td>
                    <td>Exothermic decomposition or explosion.</td>
                </tr>
                <tr>
                    <td>Hydrogen</td>
                    <td>High temperature hydrogen attack. Hydrogen-assisted cracking.</td>
                </tr>
                <tr>
                    <td>Hydrogen sulfide (Wet H2S)</td>
                    <td>Stress corrosion cracking due to high hardness of non-PWHT's weld. Hydrogen embrittlement. Pyrophoric scale.</td>
                </tr>
                <tr>
                    <td>Hydrofluoric acid</td>
                    <td>Hazardous substance.</td>
                </tr>
                <tr>
                    <td>Oxygen</td>
                    <td>Combustion/metal burning.</td>
                </tr>
                <tr>
                    <td>Propylene</td>
                    <td>Explosion or unstable reaction.</td>
                </tr>
                <tr>
                    <td>Propylene oxide</td>
                    <td>Explosion or unstable reaction.</td>
                </tr>
                <tr>
                    <td>Steam</td>
                    <td>High pressure steam can blow out.</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <p>Buttering allows a balanced welding sequence to be used, and if correctly applied can reduce the potential distortion of the pipe after welding. Normally, two layers of weld metal should be deposited, especially for dissimilar metal welds, to reduce the impact of weld dilution. The first buttering pass is generally ground to one-half its thickness, with the second pass applied as close to the edge of the first as possible. Subsequent welds passes are applied in a similar manner. The final thickness of the weld deposit at the location of the nozzle-to-pipe weld should, after grinding, be no less than 1/4 in. (6 mm) or as specified in the welding procedure. The width of the buttering should be sufficient to overlap the nozzle attachment weld by 1/4 in. (6 mm) on both the inside and outside diameters. Similarly, buttering should be deposited under any reinforcement plate-to-pipe welds.</p>
    <p>The surface of the buttered layer should be ground smooth, the edges de-burred, and both the weld and the pipe local to the weld inspected by appropriate crack detection and ultrasonic methods. It is recommended that immediately before welding is commenced, a test should be carried out to check the amperage of the welding current to reduce the risk of burn-through of the run pipe during the actual welding operation. This may be done by striking an arc on a suitable piece of material similar to that of the run pipe.</p>
    
    <h4>11.2.5 Inspection</h4>
    <p>Inspection tasks typically associated with hot tapping or welding on in-service equipment should include the following.</p>
    <ul>
        <li>Verifying adequate wall thickness along the lengths of the proposed welds, typically using UT.</li>
        <li>Verifying the appropriate welding procedure is being employed.
        <p class="note">NOTE Plants often have welding procedures qualified specifically for hot taps and in-service welding.</p></li>
        <li>Ensuring the welder is appropriately qualified to use the appropriate welding procedure.</li>
        <li>Verifying the flow conditions are acceptable for welding.</li>
        <li>Specifying the sequence of welding full encirclement sleeves and fittings (circumferential and longitudinal welds).</li>
        <li>Verifying fit-up of the hot-tap fitting.</li>
        <li>Auditing welding to ensure the appropriate welding procedure is being followed.</li>
        <li>Performing NDE of completed welds, as well as in-process inspection as appropriate. Typically, this includes VT or UT shear wave using special procedures for the joint configuration, and MT or PT as applicable for material and temperature. In general, MT using dry, color-contrast particles will provide the required inspection.</li>
        <li>Witnessing leak testing of fitting, if specified.</li>
        <li>Performing PMI testing on the hot-tap component material.
        <p class="note">NOTE In some jurisdictions, the hot tap component may be required to have a registered design, in which case this should be verified.</p></li>
        <li>Documenting all the above and having the responsible engineer approve the plan prior to implementation.</li>
    </ul>
    
    <h3>11.3 Lack of Fusion With GMAW-S Welding Process</h3>
    <p>The gas metal arc welding (GMAW) process can utilize various metal transfer modes. When using the low voltage, short-circuiting mode (designated by the -S extension), the molten weld puddle is able to freeze more quickly. This allows the unique ability to weld out of position, to weld thin base metals, and to weld open butt root passes. However, the potential for LOF remains a concern. Due to this inherent nature of the welding process, the BPV Code Section IX restricts this process by:</p>
    <ul>
        <li>requiring welders to qualify with mechanical testing rather than by radiographic examination, as detecting LOF can be difficult using RT;</li>
        <li>limiting the base metal thickness qualified by the procedure to 1.1 times the test coupon thickness for coupons less than 12.7 mm thick (1/2 in.) per variable QW-403.10;</li>
        <li>limiting the deposited weld metal thickness qualified by the procedure to 1.1 times the deposited thickness for coupons less than 12.7 mm thick (1/2 in.) per variable QW-404-32;</li>
        <li>making variable QW-409.2 (a change from globular, spray, or pulsed spray transfer welding to short-circuit transfer mode, or vice versa) an essential variable when qualifying a welder for the GMAW-S process.</li>
    </ul>
    <p>Since the transfer mode may be difficult to determine without an oscilloscope, some general characteristics are listed in a National Board Classic Bulletin, Low Voltage Short Circuiting—GMAW, from January 1985, to assist the inspector in determining the transfer mode being used. The quick freeze characteristic, which can result in LOF, is the reason this process is frequently specified in purchase requisitions.</p>
    <p>GMAW in the short-circuiting transfer mode is of particular significance to inspectors in that many specifications, codes, and standards impose limitations or special conditions on its use. The technique can suffer from incomplete fusion particularly in the sidewall of steep or narrow weld preparations. This occurs as transfer of small fast-freezing droplets only occurs while the electrode is short-circuited by contact with the work piece. Intermittent loss of contact can leave areas of LOF. In shallow weld preparations, these are also difficult to detect with conventional radiographic techniques. Consequently, a higher standard of NDE inspection is required. In pipeline welding, automated ultrasonic has been adopted to overcome this problem. Inspectors should be aware that the risk of LOF associated with GMAW-S has caused ASME BPVC Code, Section IX, to require welders to be qualified using mechanical testing rather than by RT.</p>
    
    <h3>11.4 Caustic Service</h3>
    <p>Carbon steel and low-alloy steels are subject to stress corrosion cracking in caustic service. Austenitic (i.e. Type-300 series) stainless steels can be sensitive to caustic cracking in high-temperature steam environments. Cracking is a function of temperature, caustic concentration, and the level of operating or residual stress. Prior to welding or PWHT, the weld area should be cleaned, for a distance of at least 6 in. (150 mm) from the edges of the weld, with a 5 % acetic acid solution in water and then water wash to remove the neutralized caustic. Check the cleaned area with pH paper to show that the caustic has been removed. Alternatively, the area can be checked with a phenolphthalein indicator to show that caustic has been removed. If the indicator turns pink, caustic is still present on the surface. The contaminated surface should be reneutralized, recleaned, and rechecked, as necessary, until caustic is removed from the surface. Material cleanliness is an important requirement for successful welding, especially when welding nickel and nickel-alloy materials. Inspection should be performed before welding on caustic-contaminated surfaces. All areas to be welded should be ground or power-brushed clean. Nickel and nickel alloys should be cleaned with a stainless-steel wire brush. All cleaning tools including wire brushes and carbide grinding tools should be clean and free of debris or other metal fragments. Care should be taken during grinding operations since the heat of grinding may create and propagate crack-like defects on caustic-contaminated surfaces.</p>
    <p>Although caustic stress corrosion cracks may be seen visually, crack detection is best performed with WFMT, ET, RT, or ACFM techniques. Surface preparation by grit blasting, high-pressure water blasting, or other methods is usually required. Guidelines for when PWHT is required for carbon steels may be found in NACE SP0403 and API 571.</p>
    <p>Prior to weld repairs in caustic service, a corrosion specialist should review the details of the welding plan to ensure suitability for service. This should include a review of the welding electrode/wire selected, the weld procedure, details of weld preparation, PWHT, and the details of the NDE to be used on the completed welds. Other services that may warrant similar review include amine service, hydrofluoric acid service, hydrogen service, sour and wet H2S service, and situations with dissimilar metal welds.</p>
    
    <h3>11.5 Controlled Deposition Welding</h3>
    <p>In some instances, full PWHT may have potential adverse effects on equipment and piping. In those cases, controlled-deposition welding (CDW) may be used in lieu of PWHT where PWHT is inadvisable or mechanically unnecessary. Depending on the construction code, the use of CDW may require a metallurgical review conducted by a welding and/or materials/corrosion engineer prior to using any alternative method to ensure that the proposed alternative is suitable for the application. Such a review would consider factors including the reason for the original PWHT of the equipment, susceptibility to stress corrosion cracking, stresses in the location of the weld, susceptibility to high-temperature hydrogen attack, susceptibility to creep, etc. The inspector is responsible for verifying that the methods used are in accordance with owner–user specification and the requirements of the construction code.</p>
    <p>To the extent applicable, the selection of the welding method used should be based on the rules of the construction code applicable to the planned work along with technical consideration of the adequacy of the weld in the as-welded condition at operating and pressure test conditions.</p>
    <p>When reference is made to materials by the ASME designation, P-number, and group number, the requirements of the repair or construction code apply to the applicable materials of the original code of construction, either ASME or other, which conform by chemical composition and mechanical properties to the ASME P-number and group number designations. CDW is limited to materials in P-No. 1, P-No. 3, and P-No. 4, with further restrictions (e.g. impact testing, hardness testing) in the applicable codes. When impact tests are required by the construction code applicable to the planned work, the PQR shall include sufficient tests to determine if the toughness of the weld metal and the HAZ of the base metal in the as-welded condition is adequate at the MDMT (such as the criteria used in ASME Code, Section VIII, Division I, Parts UG-84 and UCS 66, or ASME B31.3). If special hardness limits are necessary (e.g. as set forth in NACE SP0472 and NACE MR0103) for stress corrosion cracking resistance, the PQR shall include hardness tests as well.</p>
    <p>The WPS shall include the following additional requirements.</p>
    <ul>
        <li>The supplementary essential variables of ASME Code, Section IX, Paragraph QW-250, shall apply.</li>
        <li>The maximum weld heat input for each layer shall not exceed that used in the procedure qualification test.</li>
        <li>The minimum preheat temperature for welding shall not be less than that used in the procedure qualification test.</li>
        <li>The maximum interpass temperature for welding shall not be greater than that used in the procedure qualification test.</li>
        <li>The preheat temperature shall be checked to ensure that 4 in. (100 mm) of the material or four times the material thickness (whichever is greater) on each side of the weld joint will be maintained at the minimum temperature during welding. When the weld does not penetrate through the full thickness of the material, the minimum preheat temperature needs only be maintained at a distance of 4 in. (100 mm) or four times the depth of the repair weld, whichever is greater, on each side of the joint.</li>
        <li>For the allowed welding processes listed below, use only electrodes and filler metals that are classified by the filler metal specification with an optional supplemental diffusible-hydrogen designator of H8 or lower. When shielding gases are used with a process, the gas shall exhibit a dew point that is no higher than −60 °F (−50 °C). Surfaces on which welding will be done shall be maintained in a dry condition during welding and free of rust, mill scale, and hydrogen-producing contaminants such as oil, grease, and other organic materials.</li>
        <li>The welding technique shall be a CDW, temper bead, or half bead technique. The specific technique shall be used in the procedure qualification test.</li>
        <li>For welds made by SMAW, after completion of welding and without allowing the weldment to cool below the minimum preheat temperature, the temperature of the weldment shall be raised to a temperature of 500 °F ± 50 °F (260 °C ± 30 °C) for a minimum period of two hours to assist outgassing diffusion of any weld metal hydrogen picked up during welding.</li>
        <li>After the finished repair weld has cooled, the final temper bead reinforcement layer shall be removed, leaving the weld substantially flush with the surface of the base material.</li>
    </ul>
    <p>In general, CDW is not usually applied to situations where the reason for PWHT is to avoid stress corrosion cracking (SCC). Welding processes for CDW are limited to SMAW, GMAW, and GTAW (for CDW in pipe welding, the FCAW process may also be employed), with a specific WPS developed and qualified for each application. If the original material specification is obsolete, the test material used should conform as much as possible to the material used for construction, but in no case shall the material be lower in strength or have a carbon content of more than 0.35 %.</p>
    <p>Refer to WRC Bulletin 412 for additional supporting technical information regarding controlled deposition welding.</p>`,
    
    contentEs: `<h2>Problemas de Soldadura en Refinerías y Plantas Petroquímicas</h2>
    <h3>11.1 General</h3>
    <p>Esta sección proporciona detalles de problemas específicos de soldadura que encuentra el inspector en refinerías y plantas petroquímicas. Esta sección se ampliará a medida que se agreguen más problemas que reflejen la experiencia de la industria.</p>
    
    <h3>11.2 Punteo en Caliente y Soldadura en Servicio</h3>
    <h4>11.2.1 General</h4>
    <p>La API 2201 proporciona una revisión profunda de los aspectos de seguridad que deben considerarse al realizar punteado en caliente o soldadura en tuberías o equipos en servicio. Antes de realizar este trabajo, debe desarrollarse y revisarse un plan escrito detallado. A continuación se presenta un breve resumen de los problemas relacionados con la soldadura.</p>
    <p>Dos preocupaciones principales al soldar en tuberías y equipos en servicio son la perforación por sobrecalentamiento y el agrietamiento. La perforación por sobrecalentamiento ocurrirá si el área no fundida debajo del baño de soldadura ya no puede contener la presión dentro de la tubería o el equipo. El agrietamiento de la soldadura resulta cuando las altas velocidades de enfriamiento de la soldadura producen una microestructura de soldadura dura y susceptible al agrietamiento. Las altas velocidades de enfriamiento pueden ser causadas por el contenido que fluye dentro de las tuberías y equipos, lo que elimina el calor rápidamente.</p>
    
    <h4>11.2.2 Consideraciones del Electrodo</h4>
    <p>Las operaciones de punteado en caliente y soldadura en servicio deben llevarse a cabo solo con consumibles y electrodos de bajo hidrógeno (por ejemplo, E7016, E7018 y E7048). Deben usarse consumibles de muy bajo hidrógeno como EXXXX-H4 para soldar aceros al carbono con un equivalente de carbono mayor del 0.42 % o donde exista potencial para agrietamiento asistido por hidrógeno (HAC) como piezas trabajadas en frío, alta resistencia y áreas altamente restringidas.</p>
    <p>Los electrodos de tipo celulósico (por ejemplo, E6010, E6011 y E7010) pueden usarse para cordones de raíz y pasadas en caliente. Aunque se prefieren los electrodos de bajo hidrógeno, algunas ubicaciones de refinación y la industria de tuberías prefieren usar electrodos celulósicos frecuentemente porque son fáciles de operar y proporcionan un control mejorado sobre el arco de soldadura. El cordón de raíz con electrodos de bajo hidrógeno reduce el riesgo de HAC. También reduce el riesgo de perforación por sobrecalentamiento porque la cantidad de calor dirigida al metal base es menor que al usar electrodos de tipo celulósico. Sin embargo, la manipulación del electrodo de bajo hidrógeno para el cordón de raíz no es tan fácil pero puede realizarse mediante capacitación y práctica. Debe tenerse en cuenta que los electrodos celulósicos tienen los siguientes efectos adversos en la integridad de la soldadura:</p>
    <ul>
        <li>penetración profunda, por lo tanto mayor riesgo de perforación por sobrecalentamiento que los electrodos de bajo hidrógeno; y</li>
        <li>alto hidrógeno difusible, por lo tanto mayor riesgo de agrietamiento asistido por hidrógeno.</li>
    </ul>
    
    <h4>11.2.3 Tasas de Flujo</h4>
    <p>Debe mantenerse una tasa de flujo adecuada para disipar el calor de la soldadura, minimizando la posibilidad de perforación por sobrecalentamiento o combustión. La tasa de flujo mínima es de 1.3 pies/s (0.4 m/s) para líquido y gas. Para líquidos, generalmente se requiere una tasa de flujo máxima para minimizar el riesgo de alta dureza en la zona de soldadura debido a la alta velocidad de enfriamiento. La tasa de flujo máxima permitida depende de la temperatura del proceso. En general, 4.0 pies/s (1.2 m/s) es el límite superior. No hay restricción en la velocidad máxima para líneas de gas, sujeto a mantener las temperaturas de precalentamiento. Se recomienda compensar cualquier pérdida de calor precalentando el área de soldadura a al menos 70 °F (20 °C) y mantener ese precalentamiento hasta que se haya completado la soldadura.</p>
    <p>Para realizar soldaduras de unión en equipos que contienen una gran cantidad de líquido, como un tanque de almacenamiento, la soldadura debe estar a 36 pulg. (900 mm) por debajo de la línea líquido/vapor. La circulación normal dentro del equipo enfriará eficazmente el área de soldadura.</p>
    <p>No debe intentarse la soldadura en una línea bajo condiciones de sin flujo o flujo intermitente, por ejemplo, una línea de antorcha, a menos que se haya confirmado que no se generará ninguna mezcla explosiva o inflamable durante la operación de soldadura. En este sentido, debe confirmarse que no es posible la entrada de oxígeno en la línea. En los casos en que no se pueda cumplir este requisito, se recomienda la purga con gas inerte o nitrógeno. A menudo se emplea software que tiene en cuenta las propiedades del material y las condiciones de flujo para determinar si las condiciones son seguras para la soldadura en servicio.</p>
    
    <h4>11.2.4 Otras Consideraciones</h4>
    <h5>11.2.4.1 Perforación por Sobrecalentamiento</h5>
    <p>Para evitar el sobrecalentamiento y la perforación por sobrecalentamiento, la especificación del procedimiento de soldadura debe basarse en la experiencia en la realización de operaciones de soldadura en tuberías o equipos similares, y/o basarse en el análisis de transferencia de calor. Muchos usuarios establecen procedimientos que detallan el espesor mínimo de pared que puede ser punteado en caliente o soldado en servicio para un conjunto dado de condiciones como presión, temperatura y tasa de flujo. Algunos usuarios incluyen en sus procedimientos el uso de probetas de soldadura simuladas cuando el espesor real del material a soldar es menor de 1/4 pulg. (6 mm). La probeta simulada representa el material y espesor real, los parámetros de soldadura se registran y la penetración de la soldadura se verifica mediante ataque químico. Esta información se convierte en el suplemento del paquete de reparación. Para minimizar la perforación por sobrecalentamiento, la primera pasada de soldadura en equipos o tuberías de menos de 1/4 pulg. (6 mm) de espesor debe realizarse con un electrodo de soldadura de 3/32 pulg. (5 mm) o de diámetro menor para limitar el aporte de calor. Para espesores de pared de equipos y tuberías donde la perforación por sobrecalentamiento no es una preocupación principal, puede usarse un electrodo de diámetro mayor. También debe evitarse el oscilamiento del cordón de soldadura ya que esto aumenta el aporte de calor.</p>
    
    <h5>11.2.4.2 Punteo en Caliente</h5>
    <p>También pueden ocurrir efectos adversos del calor en el fluido del proceso. Además, las soldaduras asociadas con punteados en caliente o soldadura en servicio a menudo no pueden ser aliviadas de tensiones y pueden ser susceptibles al agrietamiento en ciertos entornos. Cualquier punteado en caliente o soldadura en servicio en sistemas que contengan los listados en la Tabla 13 debe ser cuidadosamente revisado.</p>
    <p>Durante reparaciones o alteraciones (incluyendo punteados en caliente) de sistemas de tuberías de material de aleación, se requiere la verificación del material existente y de los nuevos materiales para establecer que los componentes seleccionados son los especificados. Además, en algunas jurisdicciones puede requerirse que el componente de punteado en caliente tenga un diseño registrado, en cuyo caso esto debe verificarse.</p>
    <p>Se recomienda particularmente el recubrimiento con soldadura (buttering) de la superficie de la tubería principal antes de adjuntar una boquilla de punteado en caliente cuando se adjunta una boquilla a una tubería fabricada con material de placa para evitar el desgarro laminar de la tubería donde el espesor es tal que esto puede ocurrir como resultado de las tensiones de contracción de la soldadura. Con la soldadura en servicio, existe el riesgo de alta dureza y agrietamiento por hidrógeno en la ZAT del material base. El recubrimiento con soldadura permite un control más cercano del aporte de calor en el material base, y también permite el uso de la técnica de soldadura de cordón de temple. La técnica de soldadura de cordón de temple templa la ZAT del material base durante la deposición de la segunda capa de metal de soldadura. Este enfoque es particularmente útil donde el efecto de enfriamiento del fluido de proceso presente es alto.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 13—Peligros de Punteado en Caliente/Soldadura en Servicio Asociados con Algunas Sustancias Particulares</caption>
            <thead>
                <tr>
                    <th>Sustancia</th>
                    <th>Peligro de Punteado en Caliente/Soldadura en Servicio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Acetileno</td>
                    <td>Explosión o reacción inestable con la adición de calor localizado.</td>
                </tr>
                <tr>
                    <td>Acetonitrilo</td>
                    <td>Explosión o reacción inestable con la adición de calor localizado.</td>
                </tr>
                <tr>
                    <td>Aminas y cáustico</td>
                    <td>Agrietamiento por corrosión bajo tensión debido al alto esfuerzo térmico con la adición de calor localizado y alta dureza de soldadura sin TTSP. Fragilización por hidrógeno.</td>
                </tr>
                <tr>
                    <td>Butadieno</td>
                    <td>Explosión o reacción inestable.</td>
                </tr>
                <tr>
                    <td>Cloro</td>
                    <td>El acero al carbono se quema en presencia de cloro y calor alto.</td>
                </tr>
                <tr>
                    <td>Aire comprimido</td>
                    <td>Combustión/quema de metal.</td>
                </tr>
                <tr>
                    <td>Etileno</td>
                    <td>Descomposición exotérmica o explosión.</td>
                </tr>
                <tr>
                    <td>Óxido de etileno</td>
                    <td>Descomposición exotérmica o explosión.</td>
                </tr>
                <tr>
                    <td>Hidrógeno</td>
                    <td>Ataque de hidrógeno a alta temperatura. Agrietamiento asistido por hidrógeno.</td>
                </tr>
                <tr>
                    <td>Sulfuro de hidrógeno (H2S húmedo)</td>
                    <td>Agrietamiento por corrosión bajo tensión debido a alta dureza de soldadura sin TTSP. Fragilización por hidrógeno. Escamas pirofóricas.</td>
                </tr>
                <tr>
                    <td>Ácido fluorhídrico</td>
                    <td>Sustancia peligrosa.</td>
                </tr>
                <tr>
                    <td>Oxígeno</td>
                    <td>Combustión/quema de metal.</td>
                </tr>
                <tr>
                    <td>Propileno</td>
                    <td>Explosión o reacción inestable.</td>
                </tr>
                <tr>
                    <td>Óxido de propileno</td>
                    <td>Explosión o reacción inestable.</td>
                </tr>
                <tr>
                    <td>Vapor</td>
                    <td>El vapor a alta presión puede salir expulsado.</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <p>El recubrimiento con soldadura permite usar una secuencia de soldadura equilibrada, y si se aplica correctamente puede reducir la distorsión potencial de la tubería después de la soldadura. Normalmente, deben depositarse dos capas de metal de soldadura, especialmente para soldaduras de metales disímiles, para reducir el impacto de la dilución de la soldadura. La primera pasada de recubrimiento generalmente se desgasta hasta la mitad de su espesor, con la segunda pasada aplicada lo más cerca posible del borde de la primera. Las pasadas de soldadura subsiguientes se aplican de manera similar. El espesor final del depósito de soldadura en la ubicación de la soldadura boquilla-tubería debe, después del desgaste, no ser menor de 1/4 pulg. (6 mm) o según se especifique en el procedimiento de soldadura. El ancho del recubrimiento debe ser suficiente para superponer la soldadura de unión de la boquilla en 1/4 pulg. (6 mm) en los diámetros interior y exterior. De manera similar, debe depositarse recubrimiento bajo cualquier soldadura de placa de refuerzo-tubería.</p>
    <p>La superficie de la capa recubierta debe desgastarse hasta quedar lisa, los bordes deben eliminarse de rebabas, y tanto la soldadura como la tubería local a la soldadura deben inspeccionarse mediante métodos apropiados de detección de grietas y ultrasónicos. Se recomienda que inmediatamente antes de comenzar la soldadura, se realice una prueba para verificar el amperaje de la corriente de soldadura para reducir el riesgo de perforación por sobrecalentamiento de la tubería principal durante la operación real de soldadura. Esto puede hacerse golpeando un arco en una pieza adecuada de material similar al de la tubería principal.</p>
    
    <h4>11.2.5 Inspección</h4>
    <p>Las tareas de inspección típicamente asociadas con el punteado en caliente o la soldadura en equipos en servicio deben incluir las siguientes.</p>
    <ul>
        <li>Verificar el espesor de pared adecuado a lo largo de las longitudes de las soldaduras propuestas, típicamente usando UT.</li>
        <li>Verificar que se esté empleando el procedimiento de soldadura adecuado.
        <p class="note">NOTA Las plantas a menudo tienen procedimientos de soldadura calificados específicamente para punteados en caliente y soldadura en servicio.</p></li>
        <li>Asegurar que el soldador esté adecuadamente calificado para usar el procedimiento de soldadura adecuado.</li>
        <li>Verificar que las condiciones de flujo sean aceptables para la soldadura.</li>
        <li>Especificar la secuencia de soldadura de manguitos completos de circunvalación y accesorios (soldaduras circunferenciales y longitudinales).</li>
        <li>Verificar el ajuste del accesorio de punteado en caliente.</li>
        <li>Auditar la soldadura para asegurar que se esté siguiendo el procedimiento de soldadura adecuado.</li>
        <li>Realizar END de las soldaduras completadas, así como inspección en proceso según corresponda. Típicamente, esto incluye VT o UT de onda de corte usando procedimientos especiales para la configuración de la junta, y MT o PT según corresponda para el material y temperatura. En general, MT usando partículas secas de contraste de color proporcionará la inspección requerida.</li>
        <li>Presenciar la prueba de fuga del accesorio, si se especifica.</li>
        <li>Realizar pruebas de PMI en el material del componente de punteado en caliente.
        <p class="note">NOTA En algunas jurisdicciones, puede requerirse que el componente de punteado en caliente tenga un diseño registrado, en cuyo caso esto debe verificarse.</p></li>
        <li>Documentar todo lo anterior y hacer que el ingeniero responsable apruebe el plan antes de la implementación.</li>
    </ul>
    
    <h3>11.3 Falta de Fusión con el Proceso de Soldadura GMAW-S</h3>
    <p>El proceso de soldadura por arco metálico con gas (GMAW) puede utilizar varios modos de transferencia de metal. Cuando se usa el modo de bajo voltaje, de cortocircuito (designado por la extensión -S), el charco de soldadura fundido puede solidificarse más rápidamente. Esto permite la capacidad única de soldar fuera de posición, soldar metales base delgados y soldar cordones de raíz de junta a tope abierta. Sin embargo, el potencial de falta de fusión (LOF) sigue siendo una preocupación. Debido a esta naturaleza inherente del proceso de soldadura, el Código BPV Sección IX restringe este proceso al:</p>
    <ul>
        <li>requerir que los soldadores califiquen con pruebas mecánicas en lugar de por examen radiográfico, ya que detectar LOF puede ser difícil usando RT;</li>
        <li>limitar el espesor del metal base calificado por el procedimiento a 1.1 veces el espesor de la probeta de prueba para probetas de menos de 12.7 mm de espesor (1/2 pulg.) según la variable QW-403.10;</li>
        <li>limitar el espesor del metal de soldadura depositado calificado por el procedimiento a 1.1 veces el espesor depositado para probetas de menos de 12.7 mm de espesor (1/2 pulg.) según la variable QW-404-32;</li>
        <li>hacer que la variable QW-409.2 (un cambio de soldadura de transferencia globular, pulverización o pulverización pulsada a modo de transferencia por cortocircuito, o viceversa) sea una variable esencial al calificar un soldador para el proceso GMAW-S.</li>
    </ul>
    <p>Dado que el modo de transferencia puede ser difícil de determinar sin un osciloscopio, algunas características generales se enumeran en un Boletín Clásico de la National Board, Low Voltage Short Circuiting—GMAW, de enero de 1985, para ayudar al inspector a determinar el modo de transferencia que se está utilizando. La característica de solidificación rápida, que puede resultar en LOF, es la razón por la que este proceso se especifica frecuentemente en requisiciones de compra.</p>
    <p>La GMAW en el modo de transferencia por cortocircuito es de particular importancia para los inspectores en que muchas especificaciones, códigos y estándares imponen limitaciones o condiciones especiales en su uso. La técnica puede sufrir de fusión incompleta particularmente en la pared lateral de preparaciones de soldadura empinadas o estrechas. Esto ocurre ya que la transferencia de pequeñas gotas de solidificación rápida solo ocurre mientras el electrodo está en cortocircuito por contacto con la pieza de trabajo. La pérdida intermitente de contacto puede dejar áreas de LOF. En preparaciones de soldadura poco profundas, estas también son difíciles de detectar con técnicas radiográficas convencionales. En consecuencia, se requiere un estándar más alto de inspección END. En la soldadura de tuberías, se ha adoptado el ultrasonido automatizado para superar este problema. Los inspectores deben ser conscientes de que el riesgo de LOF asociado con GMAW-S ha hecho que el Código ASME BPVC, Sección IX, requiera que los soldadores califiquen usando pruebas mecánicas en lugar de por RT.</p>
    
    <h3>11.4 Servicio Cáustico</h3>
    <p>El acero al carbono y los aceros de baja aleación están sujetos a agrietamiento por corrosión bajo tensión en servicio cáustico. Los aceros inoxidable austeníticos (es decir, serie Tipo-300) pueden ser sensibles al agrietamiento cáustico en entornos de vapor a alta temperatura. El agrietamiento es una función de la temperatura, la concentración cáustica y el nivel de esfuerzo de operación o residual. Antes de la soldadura o TTSP, el área de soldadura debe limpiarse, a una distancia de al menos 6 pulg. (150 mm) de los bordes de la soldadura, con una solución al 5% de ácido acético en agua y luego lavado con agua para eliminar el cáustico neutralizado. Verificar el área limpiada con papel pH para mostrar que el cáustico ha sido eliminado. Alternativamente, el área puede verificarse con un indicador de fenolftaleína para mostrar que el cáustico ha sido eliminado. Si el indicador se vuelve rosa, el cáustico todavía está presente en la superficie. La superficie contaminada debe ser renutralizada, limpiada nuevamente y verificada, según sea necesario, hasta que el cáustico sea eliminado de la superficie. La limpieza del material es un requisito importante para una soldadura exitosa, especialmente al soldar materiales de níquel y aleaciones de níquel. La inspección debe realizarse antes de soldar en superficies contaminadas con cáustico. Todas las áreas que se van a soldar deben limpiarse con esmerilado o cepillado mecánico. El níquel y las aleaciones de níquel deben limpiarse con un cepillo de alambre de acero inoxidable. Todas las herramientas de limpieza, incluyendo cepillos de alambre y herramientas de molienda de carburo, deben estar limpias y libres de escombros u otros fragmentos de metal. Debe tenerse cuidado durante las operaciones de molienda ya que el calor de la molienda puede crear y propagar defectos similares a grietas en superficies contaminadas con cáustico.</p>
    <p>Aunque las grietas por corrosión bajo tensión cáustica pueden verse visualmente, la detección de grietas se realiza mejor con técnicas WFMT, ET, RT o ACFM. Generalmente se requiere la preparación de la superficie mediante chorro de granalla, chorro de agua a alta presión u otros métodos. Las pautas sobre cuándo se requiere TTSP para aceros al carbono pueden encontrarse en NACE SP0403 y API 571.</p>
    <p>Antes de las reparaciones por soldadura en servicio cáustico, un especialista en corrosión debe revisar los detalles del plan de soldadura para garantizar la adecuación para el servicio. Esto debe incluir una revisión del electrodo/alambre de soldadura seleccionado, el procedimiento de soldadura, los detalles de la preparación de la soldadura, el TTSP y los detalles del END que se utilizarán en las soldaduras completadas. Otros servicios que pueden justificar una revisión similar incluyen el servicio de aminas, el servicio de ácido fluorhídrico, el servicio de hidrógeno, el servicio agrio y H2S húmedo, y situaciones con soldaduras de metales disímiles.</p>
    
    <h3>11.5 Soldadura de Depósito Controlado</h3>
    <p>En algunos casos, el TTSP completo puede tener efectos adversos potenciales en los equipos y tuberías. En esos casos, puede usarse la soldadura de depósito controlado (CDW) en lugar del TTSP donde el TTSP es inadvisable o mecánicamente innecesario. Dependiendo del código de construcción, el uso de CDW puede requerir una revisión metalúrgica realizada por un ingeniero de soldadura y/o de materiales/corrosión antes de usar cualquier método alternativo para garantizar que la alternativa propuesta sea adecuada para la aplicación. Dicha revisión consideraría factores incluyendo la razón del TTSP original del equipo, la susceptibilidad al agrietamiento por corrosión bajo tensión, los esfuerzos en la ubicación de la soldadura, la susceptibilidad al ataque de hidrógeno a alta temperatura, la susceptibilidad a la fluencia, etc. El inspector es responsable de verificar que los métodos utilizados estén de acuerdo con la especificación del propietario-usuario y los requisitos del código de construcción.</p>
    <p>En la medida aplicable, la selección del método de soldadura utilizado debe basarse en las reglas del código de construcción aplicable al trabajo planificado junto con la consideración técnica de la adecuación de la soldadura en la condición tal como soldada en condiciones de operación y prueba de presión.</p>
    <p>Cuando se hace referencia a materiales por la designación ASME, número P y número de grupo, los requisitos del código de reparación o construcción se aplican a los materiales aplicables del código de construcción original, ya sea ASME u otro, que se conforman por composición química y propiedades mecánicas a las designaciones de número P y número de grupo de ASME. La CDW se limita a materiales en P-No. 1, P-No. 3 y P-No. 4, con restricciones adicionales (por ejemplo, pruebas de impacto, pruebas de dureza) en los códigos aplicables. Cuando las pruebas de impacto son requeridas por el código de construcción aplicable al trabajo planificado, el PQR debe incluir pruebas suficientes para determinar si la tenacidad del metal de soldadura y la ZAT del metal base en la condición tal como soldada es adecuada en la TMDO (como los criterios utilizados en el Código ASME, Sección VIII, División I, Partes UG-84 y UCS 66, o ASME B31.3). Si son necesarios límites especiales de dureza (por ejemplo, como se establece en NACE SP0472 y NACE MR0103) para la resistencia al agrietamiento por corrosión bajo tensión, el PQR también debe incluir pruebas de dureza.</p>
    <p>La WPS debe incluir los siguientes requisitos adicionales.</p>
    <ul>
        <li>Se aplicarán las variables esenciales suplementarias del Código ASME, Sección IX, Párrafo QW-250.</li>
        <El aporte de calor máximo de soldadura para cada capa no excederá el utilizado en la prueba de calificación del procedimiento.</li>
        <li>La temperatura mínima de precalentamiento para la soldadura no será menor que la utilizada en la prueba de calificación del procedimiento.</li>
        <li>La temperatura máxima entre pasadas para la soldadura no será mayor que la utilizada en la prueba de calificación del procedimiento.</li>
        <li>La temperatura de precalentamiento debe verificarse para asegurar que 4 pulg. (100 mm) del material o cuatro veces el espesor del material (lo que sea mayor) a cada lado de la junta de soldadura se mantendrán a la temperatura mínima durante la soldadura. Cuando la soldadura no penetra a través del espesor completo del material, la temperatura mínima de precalentamiento solo necesita mantenerse a una distancia de 4 pulg. (100 mm) o cuatro veces la profundidad de la soldadura de reparación, lo que sea mayor, a cada lado de la junta.</li>
        <li>Para los procesos de soldadura permitidos que se enumeran a continuación, usar solo electrodos y metales de aporte que estén clasificados por la especificación de metal de aporte con un designador suplementario opcional de hidrógeno difusible de H8 o menor. Cuando se usan gases de protección con un proceso, el gas debe exhibir un punto de rocío que no sea superior a −60 °F (−50 °C). Las superficies en las que se realizará la soldadura deben mantenerse en condiciones secas durante la soldadura y libres de óxido, escama de laminación y contaminantes productores de hidrógeno como aceite, grasa y otros materiales orgánicos.</li>
        <li>La técnica de soldadura debe ser una técnica CDW, de cordón de temple o de medio cordón. La técnica específica debe usarse en la prueba de calificación del procedimiento.</li>
        <li>Para las soldaduras realizadas por SMAW, después de completar la soldadura y sin permitir que la soldadura se enfríe por debajo de la temperatura mínima de precalentamiento, la temperatura de la soldadura debe elevarse a una temperatura de 500 °F ± 50 °F (260 °C ± 30 °C) durante un período mínimo de dos horas para ayudar a la difusión de desgasificación de cualquier hidrógeno del metal de soldadura recogido durante la soldadura.</li>
        <li>Después de que la soldadura de reparación terminada se haya enfriado, la capa de refuerzo final del cordón de temple debe eliminarse, dejando la soldadura sustancialmente al ras con la superficie del material base.</li>
    </ul>
    <p>En general, la CDW no suele aplicarse a situaciones donde la razón del TTSP es evitar el agrietamiento por corrosión bajo tensión (SCC). Los procesos de soldadura para CDW se limitan a SMAW, GMAW y GTAW (para CDW en soldadura de tuberías, también puede emplearse el proceso FCAW), con una WPS específica desarrollada y calificada para cada aplicación. Si la especificación original del material está obsoleta, el material de prueba utilizado debe ajustarse tanto como sea posible al material utilizado para la construcción, pero en ningún caso el material debe ser de menor resistencia o tener un contenido de carbono de más del 0.35 %.</p>
    <p>Consulte el Boletín WRC 412 para obtener información técnica de apoyo adicional sobre la soldadura de depósito controlado.</p>`
});