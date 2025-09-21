// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 3-27
registerChapter('API571', {
    id: "3.27",
    title: "Erosion/Erosion-Corrosion",
    titleEs: "Erosión/Corrosión-Erosión",
    content: `<h3>3.27 Erosion/Erosion-Corrosion</h3>
    <div class="subsection">
        <h4>3.27.1 Description of Damage</h4>
        <p>a) This subject covers a wide range of situations of material loss, from flowing solid particles alone or in a liquid or vapor stream physically abrading the material to material loss accelerated by the flow of corrosive liquid or vapor possibly combined with the velocity-assisted removal of a protective film or scale.</p>
        <p>Erosion is the mechanical removal of surface material as the result of relative movement between, or impact from, solids, liquids, vapor, or any combination thereof. It is typically found in services where solids are entrained in liquid or vapor streams such as slurries and fluidized solids. In refining, with the exception of water droplets in steam systems, it is unlikely that any flowing liquid or liquid impingement (without entrained solids) would be able to erode typical materials of construction without there also being a corrosion component present. The same can be said for gases, with the possible exception of steam cutting. However, see Cavitation (3.16).</p>
        <p>Erosion-corrosion is a description for the damage that occurs when particle erosion and/or high flow velocity contributes to corrosion by removing protective films or scales or otherwise accelerating the corrosion rate. This is also called velocity-assisted corrosion.</p>
        <p>b) In most refinery erosion-corrosion situations, corrosion is the dominant consideration.</p>
    </div>
    <div class="subsection">
        <h4>3.27.2 Affected Materials</h4>
        <p>All metals, but mostly carbon steel and copper alloys in refining. Refractories are also affected. Most commonly affected are materials without true passivity, where the corrosion rate is limited by a protective corrosion layer or inhibitive film.</p>
    </div>
    <div class="subsection">
        <h4>3.27.3 Critical Factors</h4>
        <p>a) With solid particle mechanical erosion, metal loss rates will depend on the velocity and number of impacting particles (e.g. a low concentration of particles vs a slurry), as well as the size, shape, hardness, and density of the impacting particles, the hardness of the material subject to erosion, and the angle of impact.</p>
        <p>Softer alloys such as copper and aluminum alloys that are easily worn from mechanical damage may be subject to severe metal loss under high-velocity conditions.</p>
        <p>Increasing the hardness of the eroding metal component can reduce the rate of erosion damage. However, this may not be effective where corrosion plays a significant role.</p>
        <p>b) For solids entrained in a liquid medium that also has a corrosion component, the same factors apply as with solid particle mechanical erosion described in Item a). However, with the solid particles removing any protective scales or other protective barrier on the metal surface, the rate of metal loss can be much greater than what is normally seen from the corrosion mechanism alone.</p>
        <p>c) For corrosive liquid droplets entrained in a vapor, metal loss rates will depend on the velocity and number or rate of impacting droplets and the corrosivity of the liquid.</p>
        <p>d) Many corrosive liquid environments will exhibit velocity-accelerated corrosion. In some cases, there is a threshold velocity below which corrosion is minimal but above which corrosion becomes significant. In other cases, there is no specific threshold; the highest corrosion rates simply occur where the velocity is greatest.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Table 3-27-1—Typical erosion-corrosion rates in seawater, mpy. (Reference 2)</caption>
                <thead>
                    <tr>
                        <th>Material</th>
                        <th>1 fps<br>(tidal current)</th>
                        <th>4 fps<br>(immersed in<br>seawater flume)</th>
                        <th>27 fps<br>(rotating disk)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Carbon steel</td>
                        <td>6</td>
                        <td>13</td>
                        <td>47</td>
                    </tr>
                    <tr>
                        <td>Cast iron</td>
                        <td>9</td>
                        <td>—</td>
                        <td>54</td>
                    </tr>
                    <tr>
                        <td>Silicon bronze</td>
                        <td>0.2</td>
                        <td>0.3</td>
                        <td>57</td>
                    </tr>
                    <tr>
                        <td>Admiralty brass</td>
                        <td>0.3</td>
                        <td>3</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>Hydraulic bronze</td>
                        <td>1</td>
                        <td>0.2</td>
                        <td>55</td>
                    </tr>
                    <tr>
                        <td>G bronze</td>
                        <td>1</td>
                        <td>0.3</td>
                        <td>46</td>
                    </tr>
                    <tr>
                        <td>Al bronze</td>
                        <td>1</td>
                        <td>—</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td>Aluminum brass</td>
                        <td>0.4</td>
                        <td>—</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>90-10 Cu-Ni</td>
                        <td>1</td>
                        <td>—</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>70-30 Cu-Ni (0.05 %Fe)</td>
                        <td>0.3</td>
                        <td>—</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <td>70-30 Cu-Ni (0.5 % Fe)</td>
                        <td>&lt;0.2</td>
                        <td>&lt;0.2</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Alloy 400</td>
                        <td>&lt;0.2</td>
                        <td>&lt;0.2</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>316 SS</td>
                        <td>0.2</td>
                        <td>0</td>
                        <td>&lt;0.2</td>
                    </tr>
                    <tr>
                        <td>Alloy C-276</td>
                        <td>&lt;0.2</td>
                        <td>—</td>
                        <td>0.05</td>
                    </tr>
                    <tr>
                        <td>Titanium</td>
                        <td>0</td>
                        <td>—</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <p>As the table illustrates, some alloys, particularly copper alloys, have an apparent threshold velocity above which the rate of metal loss increases significantly.</p>
        <p>NOTE Increasing pipe thickness (schedule) will decrease the ID and increase the flow velocity, potentially increasing the corrosion rate.</p>
        <p>e) In most cases, the more corrosive the environment is to a particular material, the greater will be the erosion corrosion effect, especially where the erosion effect damages the stability of a protective film, scale, or other barrier upon which the metal depends for its corrosion resistance. Any factors that contribute to an increase in corrosivity of the environment, such as temperature, pH, etc., can increase susceptibility to erosion corrosion metal loss.</p>
    </div>
    <div class="subsection">
        <h4>3.27.4 Affected Units or Equipment</h4>
        <p>a) All types of equipment exposed to moving fluids and/or catalyst are subject to erosion and erosion-corrosion. This includes piping bends, elbows, tees and reducers, piping systems downstream of letdown valves and block valves, pumps, blowers, propellers, impellers, agitators, vessels with agitators, heat exchanger tubing, measuring device orifices, turbine blades, nozzles, ducts and vapor lines, scrapers, cutters, and wear plates.</p>
        <p>b) Erosion can be caused by gas-borne catalyst or coke particles or by particles carried by a liquid such as a slurry. This form of damage occurs as the result of catalyst movement in catalyst handling equipment (valves, cyclones, piping, reactors) and slurry piping in FCC reactor and regenerator systems.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-27-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-27-1—Erosion-corrosion of a 1¼Cr-½Mo, 300-lb valve flange on an FCC catalyst withdrawal line.</p>
        </div>
        
        <p>It also occurs in coker heaters and coke handling equipment in both delayed and fluidized bed cokers.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-27-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-27-2—Erosion of a 9Cr-1Mo coker heater return bend as the result of high steam-air decoking velocity.</p>
        </div>
        
        <p>And it causes "wear" on pumps, compressors, and other rotating equipment.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-27-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-27-3—Erosion-corrosion of an ASTM A48 Class 30 cast iron impeller in a recycle water pump.</p>
        </div>
        
        <p>c) Hydroprocessing reactor effluent piping may be subject to erosion-corrosion by ammonium bisulfide. The metal loss is dependent on several factors including the ammonium bisulfide concentration, H<sub>2</sub>S and NH<sub>3</sub> partial pressures, velocity and shear stress on the pipe wall, and corrosion resistance of the material. (See 3.5.)</p>
        <p>d) Crude and vacuum unit piping and vessels exposed to naphthenic acids in some crude oils may suffer severe erosion-corrosion metal loss depending on the temperature, velocity, sulfur content, and naphthenic acid content. (See 3.46.)</p>
        <p>e) Erosion-corrosion is common in acid alkylation systems.</p>
        <p>f) Boiler water circuits can suffer accelerated corrosion from high-velocity flow, specifically known as "flow accelerated corrosion" (FAC). (See 3.9.)</p>
        <p>g) High velocity also increases cooling water corrosion rates as well as corrosion rates in other corrosive media, as described in their respective sections in this document.</p>
        <p>h) Erosion by water droplets in steam systems can be very damaging.</p>
    </div>
    <div class="subsection">
        <h4>3.27.5 Appearance or Morphology of Damage</h4>
        <p>a) Erosion and erosion-corrosion are typically characterized by a localized loss in thickness in the form of grooves, gullies, waves, rounded holes, valleys, or simply a greater amount of thinning in a localized area such as the outer radius of a piping elbow. These losses often exhibit a directional pattern.</p>
        <p>There have been cases where the erosion or erosion-corrosion has occurred over a large enough surface area to cause a rupture.</p>
        <p>b) In liquid lines containing particulate, low velocities, i.e. &lt; around 5 fps (1.5 m/s), can allow solids to tumble to the bottom and cause erosion or erosion-corrosion in the 6 o'clock position.</p>
        <p>c) Failures can occur in a relatively short time.</p>
    </div>
    <div class="subsection">
        <h4>3.27.6 Prevention/Mitigation</h4>
        <p>a) Changes in shape, geometry, and materials can help mitigate erosion and erosion-corrosion. Examples include increasing the pipe diameter to reduce velocity, streamlining bends to reduce impingement, and using replaceable impingement baffles.</p>
        <p>b) Improved resistance to mechanical erosion is usually achieved by increasing component hardness, e.g. using a harder alloy, hardfacing, or a surface-hardening treatment. Erosion-resistant refractories in cyclones and slide valves have successfully resisted erosion.</p>
        <p>c) Erosion-corrosion is best mitigated by using more corrosion-resistant alloys and/or altering the process environment to reduce corrosivity, e.g. by deaeration, condensate injection, or the addition of inhibitors, as applicable. Resistance is generally not improved through increasing component hardness alone.</p>
        <p>d) Heat exchangers utilize impingement plates and occasionally tube ferrules to minimize erosion-corrosion problems.</p>
        <p>e) Refer to the relevant section of this document for methods to manage corrosion in erosion-corrosion prone environments (naphthenic acid, ammonium bisulfide, etc.).</p>
        <p>f) Ensure proper operation to avoid water droplets in the steam system.</p>
    </div>
    <div class="subsection">
        <h4>3.27.7 Inspection and Monitoring</h4>
        <p>a) Manual UT grids or automated scans can be used to determine the extent of erosion at susceptible areas, such as changes in direction, changes in diameter, or other turbulent areas. Randomly placed point UT readings may not be effective if they are not placed at the locations of potential susceptibility.</p>
        <p>b) Profile RT can be used to detect areas of erosion but may not be able to determine the actual remaining wall thickness. UT thickness is normally used as a follow-up technique to quantify wall loss.</p>
        <p>c) GWT can be used as a screening technique in certain applications where changes in piping direction will not impede the effectiveness of the examination.</p>
        <p>d) Permanently mounted thickness monitoring sensors can be used.</p>
        <p>e) Gouging or grooving along the bottom of a line and can be found by screening techniques [e.g. GWT, saturated low-frequency eddy current (SLOFEC), or X-ray crawler], UT scans or grids, or radiography.</p>
        <p>f) Infrared thermography scans can be used on stream to detect refractory degradation (potentially due to erosion).</p>
        <p>g) Specialized coupons can be used to determine if erosion is a potential concern.</p>
        <p>h) Sampling of process streams for chemical analysis of solids and particulate size can help determine erosion potential within a system.</p>
    </div>
    <div class="subsection">
        <h4>3.27.8 Related Mechanisms</h4>
        <p>Cavitation (3.16).</p>
    </div>
    <div class="subsection">
        <h4>3.27.9 References</h4>
        <p>1. ASM Handbook—Corrosion, Volume 13, ASM International, Materials Park, OH.</p>
        <p>2. ASM Handbook—Failure Analysis and Prevention, Volume 11, ASM International, Materials Park, OH.</p>
    </div>
    `,
    contentEs: `<h3>3.27 Erosión/Corrosión-Erosión</h3>
    <div class="subsection">
        <h4>3.27.1 Descripción del Daño</h4>
        <p>a) Este tema cubre una amplia gama de situaciones de pérdida de material, desde partículas sólidas que fluyen solas o en una corriente líquida o de vapor que desgasta físicamente el material hasta la pérdida de material acelerada por el flujo de líquido o vapor corrosivo posiblemente combinado con la remoción asistida por velocidad de una película protectora o incrustaciones.</p>
        <p>La erosión es la remoción mecánica del material superficial como resultado del movimiento relativo entre, o impacto de, sólidos, líquidos, vapor o cualquier combinación de los mismos. Generalmente se encuentra en servicios donde los sólidos están arrastrados en corrientes líquidas o de vapor como suspensiones y sólidos fluidizados. En la refinación, con la excepción de las gotas de agua en los sistemas de vapor, es poco probable que cualquier líquido en flujo o impacto de líquido (sin sólidos arrastrados) pueda erosionar los materiales de construcción típicos sin que también haya presente un componente de corrosión. Lo mismo puede decirse de los gases, con la posible excepción del corte por vapor. Sin embargo, véase Cavitación (3.16).</p>
        <p>La corrosión-erosión es una descripción del daño que ocurre cuando la erosión de partículas y/o la alta velocidad de flujo contribuye a la corrosión al eliminar películas protectoras o incrustaciones o de otra manera acelerar la tasa de corrosión. Esto también se llama corrosión asistida por velocidad.</p>
        <p>b) En la mayoría de las situaciones de corrosión-erosión en refinerías, la corrosión es la consideración dominante.</p>
    </div>
    <div class="subsection">
        <h4>3.27.2 Materiales Afectados</h4>
        <p>Todos los metales, pero principalmente acero al carbono y aleaciones de cobre en refinación. Los refractarios también se ven afectados. Los más comúnmente afectados son materiales sin verdadera pasividad, donde la tasa de corrosión está limitada por una capa de corrosión protectora o una película inhibidora.</p>
    </div>
    <div class="subsection">
        <h4>3.27.4 Factores Críticos</h4>
        <p>a) Con la erosión mecánica de partículas sólidas, las tasas de pérdida de metal dependerán de la velocidad y el número de partículas que impactan (ej. una baja concentración de partículas versus una suspensión), así como del tamaño, forma, dureza y densidad de las partículas que impactan, la dureza del material sujeto a erosión y el ángulo de impacto.</p>
        <p>Las aleaciones más blandas como el cobre y las aleaciones de aluminio que se desgastan fácilmente por daños mecánicos pueden estar sujetas a una pérdida severa de metal bajo condiciones de alta velocidad.</p>
        <p>Aumentar la dureza del componente metálico que se erosiona puede reducir la tasa de daño por erosión. Sin embargo, esto puede no ser efectivo cuando la corrosión juega un papel significativo.</p>
        <p>b) Para sólidos arrastrados en un medio líquido que también tiene un componente de corrosión, aplican los mismos factores que con la erosión mecánica de partículas sólidas descrita en el inciso a). Sin embargo, con las partículas sólidas eliminando cualquier incrustación protectora u otra barrera protectora en la superficie del metal, la tasa de pérdida de metal puede ser mucho mayor de lo que normalmente se observa del mecanismo de corrosión solo.</p>
        <p>c) Para gotas de líquido corrosivo arrastradas en un vapor, las tasas de pérdida de metal dependerán de la velocidad y el número o tasa de gotas que impactan y la corrosividad del líquido.</p>
        <p>d) Muchos ambientes líquidos corrosivos exhibirán corrosión acelerada por velocidad. En algunos casos, hay una velocidad umbral por debajo de la cual la corrosión es mínima pero por encima de la cual la corrosión se vuelve significativa. En otros casos, no hay un umbral específico; las tasas de corrosión más altas simplemente ocurren donde la velocidad es mayor.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Tabla 3-27-1—Tasas típicas de corrosión-erosión en agua de mar, mpy. (Referencia 2)</caption>
                <thead>
                    <tr>
                        <th>Material</th>
                        <th>1 fps<br>(corriente de marea)</th>
                        <th>4 fps<br>(inmerso en<br>canal de agua de mar)</th>
                        <th>27 fps<br>(disco rotativo)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Acero al carbono</td>
                        <td>6</td>
                        <td>13</td>
                        <td>47</td>
                    </tr>
                    <tr>
                        <td>Hierro fundido</td>
                        <td>9</td>
                        <td>—</td>
                        <td>54</td>
                    </tr>
                    <tr>
                        <td>Bronce de silicio</td>
                        <td>0.2</td>
                        <td>0.3</td>
                        <td>57</td>
                    </tr>
                    <tr>
                        <td>Latón Almirantazgo</td>
                        <td>0.3</td>
                        <td>3</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>Bronce hidráulico</td>
                        <td>1</td>
                        <td>0.2</td>
                        <td>55</td>
                    </tr>
                    <tr>
                        <td>Bronce G</td>
                        <td>1</td>
                        <td>0.3</td>
                        <td>46</td>
                    </tr>
                    <tr>
                        <td>Bronce de aluminio</td>
                        <td>1</td>
                        <td>—</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td>Latón de aluminio</td>
                        <td>0.4</td>
                        <td>—</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>90-10 Cu-Ni</td>
                        <td>1</td>
                        <td>—</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>70-30 Cu-Ni (0.05 %Fe)</td>
                        <td>0.3</td>
                        <td>—</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <td>70-30 Cu-Ni (0.5 % Fe)</td>
                        <td>&lt;0.2</td>
                        <td>&lt;0.2</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Aleación 400</td>
                        <td>&lt;0.2</td>
                        <td>&lt;0.2</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>316 SS</td>
                        <td>0.2</td>
                        <td>0</td>
                        <td>&lt;0.2</td>
                    </tr>
                    <tr>
                        <td>Aleación C-276</td>
                        <td>&lt;0.2</td>
                        <td>—</td>
                        <td>0.05</td>
                    </tr>
                    <tr>
                        <td>Titanio</td>
                        <td>0</td>
                        <td>—</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <p>Como ilustra la tabla, algunas aleaciones, particularmente las aleaciones de cobre, tienen una velocidad umbral aparente por encima de la cual la tasa de pérdida de metal aumenta significativamente.</p>
        <p>NOTA Aumentar el espesor de la tubería (cédula) disminuirá el diámetro interno y aumentará la velocidad de flujo, potencialmente aumentando la tasa de corrosión.</p>
        <p>e) En la mayoría de los casos, cuanto más corrosivo es el ambiente para un material particular, mayor será el efecto de corrosión-erosión, especialmente donde el efecto de erosión daña la estabilidad de una película protectora, incrustación u otra barrera de la cual depende el metal para su resistencia a la corrosión. Cualquier factor que contribuya a un aumento en la corrosividad del ambiente, como la temperatura, el pH, etc., puede aumentar la susceptibilidad a la pérdida de metal por corrosión-erosión.</p>
    </div>
    <div class="subsection">
        <h4>3.27.4 Unidades o Equipos Afectados</h4>
        <p>a) Todos los tipos de equipos expuestos a fluidos en movimiento y/o catalizador están sujetos a erosión y corrosión-erosión. Esto incluye codos de tubería, codos, tes y reductores, sistemas de tubería aguas abajo de válvulas de reducción de presión y válvulas de bloqueo, bombas, sopladores, hélices, impulsores, agitadores, recipientes con agitadores, tubos de intercambiadores de calor, orificios de dispositivos de medición, álabes de turbinas, boquillas, conductos y líneas de vapor, raspadores, cortadores y placas de desgaste.</p>
        <p>b) La erosión puede ser causada por partículas de catalizador o coque transportadas por gas o por partículas transportadas por un líquido como una suspensión. Esta forma de daño ocurre como resultado del movimiento del catalizador en equipos de manejo de catalizador (válvulas, ciclones, tuberías, reactores) y tuberías de suspensión en sistemas de reactor y regenerador FCC.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-27-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-27-1—Corrosión-erosión de una brida de válvula de 300 lb de 1¼Cr-½Mo en una línea de extracción de catalizador FCC.</p>
        </div>
        
        <p>También ocurre en calentadores de coquizadores y equipos de manejo de coque en coquizadores de lecho fluidizado y retardados.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-27-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-27-2—Erosión de un codo de retorno de calentador de coquizador de 9Cr-1Mo como resultado de la alta velocidad de decoking vapor-aire.</p>
        </div>
        
        <p>Y causa "desgaste" en bombas, compresores y otros equipos rotativos.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-27-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-27-3—Corrosión-erosión de un impulsor de hierro fundido ASTM A48 Clase 30 en una bomba de agua de recirculación.</p>
        </div>
        
        <p>c) Las tuberías de efluente de reactor de hidroprocesamiento pueden estar sujetas a corrosión-erosión por bisulfuro de amonio. La pérdida de metal depende de varios factores incluyendo la concentración de bisulfuro de amonio, las presiones parciales de H<sub>2</sub>S y NH<sub>3</sub>, la velocidad y el esfuerzo cortante en la pared de la tubería, y la resistencia a la corrosión del material. (Véase 3.5.)</p>
        <p>d) Las tuberías y recipientes de unidades de crudo y vacío expuestos a ácidos nafténicos en algunos petróleos crudos pueden sufrir una pérdida severa de metal por corrosión-erosión dependiendo de la temperatura, velocidad, contenido de azufre y contenido de ácido nafténico. (Véase 3.46.)</p>
        <p>e) La corrosión-erosión es común en sistemas de alquilación ácida.</p>
        <p>f) Los circuitos de agua de caldera pueden sufrir corrosión acelerada por flujo de alta velocidad, específicamente conocida como "corrosión acelerada por flujo" (FAC). (Véase 3.9.)</p>
        <p>g) La alta velocidad también aumenta las tasas de corrosión del agua de enfriamiento así como las tasas de corrosión en otros medios corrosivos, como se describe en sus respectivas secciones en este documento.</p>
        <p>h) La erosión por gotas de agua en los sistemas de vapor puede ser muy dañina.</p>
    </div>
    <div class="subsection">
        <h4>3.27.5 Apariencia o Morfología del Daño</h4>
        <p>a) La erosión y la corrosión-erosión se caracterizan típicamente por una pérdida localizada de espesor en forma de surcos, canalones, ondas, agujeros redondeados, valles, o simplemente una mayor cantidad de adelgazamiento en un área localizada como el radio exterior de un codo de tubería. Estas pérdidas a menudo exhiben un patrón direccional.</p>
        <p>Ha habido casos donde la erosión o corrosión-erosión ha ocurrido en un área de superficie lo suficientemente grande como para causar una ruptura.</p>
        <p>b) En líneas líquidas que contienen partículas, las bajas velocidades, es decir &lt; alrededor de 5 fps (1.5 m/s), pueden permitir que los sólidos se acumulen en el fondo y causen erosión o corrosión-erosión en la posición de las 6 en punto.</p>
        <p>c) Las fallas pueden ocurrir en un tiempo relativamente corto.</p>
    </div>
    <div class="subsection">
        <h4>3.27.6 Prevención/Mitigación</h4>
        <p>a) Los cambios en la forma, geometría y materiales pueden ayudar a mitigar la erosión y la corrosión-erosión. Los ejemplos incluyen aumentar el diámetro de la tubería para reducir la velocidad, optimizar los codos para reducir el impacto, y usar deflectores de impacto reemplazables.</p>
        <p>b) La resistencia mejorada a la erosión mecánica generalmente se logra aumentando la dureza del componente, por ejemplo, usando una aleación más dura, recubrimiento duro o un tratamiento de endurecimiento superficial. Los refractarios resistentes a la erosión en ciclones y válvulas de deslizamiento han resistido con éxito la erosión.</p>
        <p>c) La corrosión-erosión se mitiga mejor usando aleaciones más resistentes a la corrosión y/o alterando el ambiente del proceso para reducir la corrosividad, por ejemplo, mediante desaireación, inyección de condensado o la adición de inhibidores, según corresponda. La resistencia generalmente no se mejora aumentando solo la dureza del componente.</p>
        <p>d) Los intercambiadores de calor utilizan placas de impacto y ocasionalmente ferrules de tubo para minimizar los problemas de corrosión-erosión.</p>
        <p>e) Consulte la sección relevante de este documento para métodos para manejar la corrosión en ambientes propensos a la corrosión-erosión (ácido nafténico, bisulfuro de amonio, etc.).</p>
        <p>f) Asegurar una operación adecuada para evitar gotas de agua en el sistema de vapor.</p>
    </div>
    <div class="subsection">
        <h4>3.27.7 Inspección y Monitoreo</h4>
        <p>a) Las cuadrículas manuales de UT o los escaneos automatizados se pueden usar para determinar el alcance de la erosión en áreas susceptibles, como cambios de dirección, cambios de diámetro u otras áreas turbulentas. Las lecturas puntuales aleatorias de UT pueden no ser efectivas si no se colocan en las ubicaciones de posible susceptibilidad.</p>
        <p>b) La RT de perfil se puede usar para detectar áreas de erosión pero puede no poder determinar el espesor real de la pared restante. El espesor por UT se usa normalmente como una técnica de seguimiento para cuantificar la pérdida de pared.</p>
        <p>c) El GWT (prueba por onda guiada) se puede usar como una técnica de selección en ciertas aplicaciones donde los cambios en la dirección de la tubería no impedirán la efectividad del examen.</p>
        <p>d) Se pueden usar sensores de monitoreo de espesor montados permanentemente.</p>
        <p>e) El socavado o ranurado a lo largo del fondo de una línea se puede encontrar mediante técnicas de selección [ej. GWT, corriente de Foucault de baja frecuencia saturada (SLOFEC) o rastreador de rayos X], escaneos o cuadrículas de UT, o radiografía.</p>
        <p>f) Los escaneos por termografía infrarroja se pueden usar en línea para detectar degradación de refractario (potencialmente debido a erosión).</p>
        <p>g) Se pueden usar cupones especializados para determinar si la erosión es una preocupación potencial.</p>
        <p>h) El muestreo de corrientes de proceso para análisis químico de sólidos y tamaño de partículas puede ayudar a determinar el potencial de erosión dentro de un sistema.</p>
    </div>
    <div class="subsection">
        <h4>3.27.8 Mecanismos Relacionados</h4>
        <p>Cavitación (3.16).</p>
    </div>
    <div class="subsection">
        <h4>3.27.9 Referencias</h4>
        <p>1. ASM Handbook—Corrosión, Volumen 13, ASM International, Materials Park, OH.</p>
        <p>2. ASM Handbook—Failure Analysis and Prevention, Volumen 11, ASM International, Materials Park, OH.</p>
    </div>
    `
});