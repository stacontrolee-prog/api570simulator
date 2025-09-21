// Registrar el capítulo 3.8 de API 571
registerChapter('API571', {
    id: '3.8',
    title: "Atmospheric Corrosion",
    titleEs: "Corrosión Atmosférica",
    content: `<h3>3.8 Atmospheric Corrosion</h3>
    <div class="subsection">
        <h4>3.8.1 Description of Damage</h4>
        <p>Corrosion that occurs from moisture associated with atmospheric conditions. Marine environments and moist, polluted industrial environments with airborne contaminants are the most severe. Dry rural environments cause very little corrosion.</p>
    </div>
    <div class="subsection">
        <h4>3.8.2 Affected Materials</h4>
        <p>Carbon steel, low-alloy steels, and copper alloyed aluminum.</p>
    </div>
    <div class="subsection">
        <h4>3.8.3 Critical Factors</h4>
        <p>a) The physical location of the plant (industrial, marine, urban, rural).</p>
        <p>b) The amount of moisture (humidity, rainfall) typically present or the presence of cooling tower mist.</p>
        <p>c) The presence of salts, sulfur compounds, dirt, or other contaminants in the air.</p>
        <p>d) Chlorides, H<sub>2</sub>S, fly ash, and other airborne contaminants from cooling tower and wet gas scrubber drift, furnace stacks, and other equipment accelerate corrosion.</p>
        <p>e) Orientation to the prevailing wind and rain.</p>
        <p>f) Corrosion rates increase with temperature up to about 250 °F (120 °C). Above 250 °F (120 °C), surfaces are usually too dry for corrosion to occur except under insulation. (See 3.22.)</p>
        <p>g) Designs that trap water or moisture in crevices or other configurations are more prone to attack.</p>
        <p>h) Marine environments can be very corrosive (about 20 mpy) as are industrial environments that contain acids or sulfur compounds that can form acids (about 5 mpy to 10 mpy).</p>
        <p>i) Inland locations exposed to a moderate amount of precipitation or humidity are considered moderately corrosive environments (about 1 mpy to 3 mpy).</p>
        <p>j) Dry rural environments usually have very low corrosion rates (&lt;1 mpy).</p>
        <p>k) Bird droppings can also cause accelerated corrosion and unsightly stains.</p>
    </div>
    <div class="subsection">
        <h4>3.8.4 Affected Units or Equipment</h4>
        <p>a) Unpainted, uninsulated carbon steel and low-alloy steel piping and equipment operating below 250 °F (120 °C) where moisture can contact the surface.</p>
        <p>b) Uninsulated carbon and low-alloy steel equipment with deteriorated paint/coating.</p>
        <p>c) Equipment downwind of cooling towers and wet gas scrubbers.</p>
        <p>d) Equipment may be susceptible if cycled between ambient and higher or lower operating temperatures.</p>
        <p>e) Equipment shut down or idled for prolonged periods unless properly mothballed.</p>
        <p>f) Tanks and piping are particularly susceptible. Piping that rests on pipe supports is very prone to attack due to water entrapment between the pipe and the support.</p>
        <p>g) Piers and docks are very prone to attack from the marine environment.</p>
        <p>h) Bimetallic connections such as copper to aluminum electrical connections.</p>
    </div>
    <div class="subsection">
        <h4>3.8.5 Appearance or Morphology of Damage</h4>
        <p>a) The attack will be general or localized, depending upon the condition of the coating, if any, and whether or not the moisture is trapped.</p>
        <p>b) If there is no coating, corrosion or loss in thickness can be more general and widespread.</p>
        <p>c) Localized coating failures will promote localized corrosion.</p>
        <p>d) Metal loss may not be visually evident, although normally a distinctive iron oxide (red rust) scale forms as shown in Figure 3-8-1.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-8-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-8-1—Atmospheric corrosion of an LPG line in close proximity to a cooling tower.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.8.6 Prevention/Mitigation</h4>
        <p>Paints or coatings are normally applied to otherwise unprotected equipment to prevent atmospheric corrosion. Surface preparation and proper coating application are critical for long-term protection in corrosive environments.</p>
    </div>
    <div class="subsection">
        <h4>3.8.7 Inspection and Monitoring</h4>
        <p>a) VT includes direct/line-of-sight and indirect methods using a camera, mirror, laser scanning, and/or structured white light imaging with pit gages.</p>
        <p>b) UT can include techniques like straight beam or angle beam (SWUT or PAUT) to directly measure remaining wall thickness or screening techniques using EMAT or GWT.</p>
        <p>c) RT may include traditional (film based), digital, or computed radiography media and may incorporate techniques such as contact or profile RT as well as open system imaging.</p>
        <p>d) ECT may include a screening technique such as pulsed eddy current (PEC).</p>
    </div>
    <div class="subsection">
        <h4>3.8.8 Related Mechanisms</h4>
        <p>Corrosion under insulation (CUI) (3.22) and concentration cell (touch point) corrosion (3.19).</p>
    </div>
    <div class="subsection">
        <h4>3.8.9 References</h4>
        <p>1. ASM Handbook—Corrosion, Volume 13, ASM International, Materials Park, OH.</p>
    </div>
    `,
    contentEs: `<h3>3.8 Corrosión Atmosférica</h3>
    <div class="subsection">
        <h4>3.8.1 Descripción del Daño</h4>
        <p>Corrosión que ocurre por la humedad asociada con las condiciones atmosféricas. Los ambientes marinos y los ambientes industriales húmedos y contaminados con contaminantes atmosféricos son los más severos. Los ambientes rurales secos causan muy poca corrosión.</p>
    </div>
    <div class="subsection">
        <h4>3.8.2 Materiales Afectados</h4>
        <p>Acero al carbono, aceros de baja aleación y aluminio aleado con cobre.</p>
    </div>
    <div class="subsection">
        <h4>3.8.3 Factores Críticos</h4>
        <p>a) La ubicación física de la planta (industrial, marina, urbana, rural).</p>
        <p>b) La cantidad de humedad (humedad relativa, precipitación) típicamente presente o la presencia de neblina de torres de enfriamiento.</p>
        <p>c) La presencia de sales, compuestos de azufre, suciedad u otros contaminantes en el aire.</p>
        <p>d) Cloruros, H<sub>2</sub>S, cenizas volantes y otros contaminantes atmosféricos de torres de enfriamiento y arrastre de scrubbers de gas húmedo, chimeneas de horno y otros equipos aceleran la corrosión.</p>
        <p>e) Orientación respecto al viento y lluvia predominantes.</p>
        <p>f) Las tasas de corrosión aumentan con la temperatura hasta unos 250 °F (120 °C). Por encima de 250 °F (120 °C), las superficies suelen estar demasiado secas para que ocurra corrosión, excepto bajo aislamiento. (Véase 3.22.)</p>
        <p>g) Los diseños que atrapan agua o humedad en rendijas u otras configuraciones son más propensos al ataque.</p>
        <p>h) Los ambientes marinos pueden ser muy corrosivos (aproximadamente 20 mpy), al igual que los ambientes industriales que contienen ácidos o compuestos de azufre que pueden formar ácidos (aproximadamente 5 mpy a 10 mpy).</p>
        <p>i) Las ubicaciones interiores expuestas a una cantidad moderada de precipitación o humedad se consideran ambientes moderadamente corrosivos (aproximadamente 1 mpy a 3 mpy).</p>
        <p>j) Los ambientes rurales secos suelen tener tasas de corrosión muy bajas (&lt;1 mpy).</p>
        <p>k) Los excrementos de aves también pueden causar corrosión acelerada y manchas antiestéticas.</p>
    </div>
    <div class="subsection">
        <h4>3.8.4 Unidades o Equipos Afectados</h4>
        <p>a) Tuberías y equipos de acero al carbono y baja aleación sin pintar y sin aislamiento que operan por debajo de 250 °F (120 °C) donde la humedad puede contactar la superficie.</p>
        <p>b) Equipos de acero al carbono y baja aleación sin aislamiento con pintura/recubrimiento deteriorado.</p>
        <p>c) Equipos a sotavento de torres de enfriamiento y scrubbers de gas húmedo.</p>
        <p>d) El equipo puede ser susceptible si se cicla entre temperatura ambiente y temperaturas de operación más altas o más bajas.</p>
        <p>e) Equipos apagados o inactivos por períodos prolongados a menos que sean adecuadamente puestos en conservación.</p>
        <p>f) Los tanques y tuberías son particularmente susceptibles. La tubería que descansa sobre soportes de tubería es muy propensa al ataque debido al atrapamiento de agua entre la tubería y el soporte.</p>
        <p>g) Los muelles y embarcaderos son muy propensos al ataque del ambiente marino.</p>
        <p>h) Conexiones bimetálicas como conexiones eléctricas de cobre a aluminio.</p>
    </div>
    <div class="subsection">
        <h4>3.8.5 Apariencia o Morfología del Daño</h4>
        <p>a) El ataque será general o localizado, dependiendo del estado del recubrimiento, si lo hay, y de si la humedad está atrapada o no.</p>
        <p>b) Si no hay recubrimiento, la corrosión o pérdida de espesor puede ser más general y extendida.</p>
        <p>c) Las fallas localizadas del recubrimiento promoverán corrosión localizada.</p>
        <p>d) La pérdida de metal puede no ser visualmente evidente, aunque normalmente se forma una distintiva costra de óxido de hierro (óxido rojo) como se muestra en la Figura 3-8-1.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-8-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-8-1—Corrosión atmosférica de una línea de GLP en proximidad a una torre de enfriamiento.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.8.6 Prevención/Mitigación</h4>
        <p>Normalmente se aplican pinturas o recubrimientos al equipo de otro modo desprotegido para prevenir la corrosión atmosférica. La preparación de la superficie y la aplicación adecuada del recubrimiento son críticas para la protección a largo plazo en ambientes corrosivos.</p>
    </div>
    <div class="subsection">
        <h4>3.8.7 Inspección y Monitoreo</h4>
        <p>a) La VT incluye métodos directos/visuales e indirectos utilizando una cámara, espejo, escaneo láser y/o imágenes de luz blanca estructurada con medidores de picaduras.</p>
        <p>b) La UT puede incluir técnicas como haz recto o haz angular (SWUT o PAUT) para medir directamente el espesor de pared restante o técnicas de detección utilizando EMAT o GWT.</p>
        <p>c) La RT puede incluir medios tradicionales (basados en película), digitales o de radiografía computada y puede incorporar técnicas como RT de contacto o de perfil así como imágenes de sistema abierto.</p>
        <p>d) La ECT puede incluir una técnica de detección como corriente de Foucault pulsada (PEC).</p>
    </div>
    <div class="subsection">
        <h4>3.8.8 Mecanismos Relacionados</h4>
        <p>Corrosión bajo aislamiento (CUI) (3.22) y corrosión de celda de concentración (punto de contacto) (3.19).</p>
    </div>
    <div class="subsection">
        <h4>3.8.9 Referencias</h4>
        <p>1. ASM Handbook—Corrosion, Volume 13, ASM International, Materials Park, OH.</p>
    </div>
    `
});