// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 3-58
registerChapter('API571', {
    id: "3.58",
    title: "Sour Water Corrosion (Acidic)",
    titleEs: "Corrosión por Agua Agria (Ácida)",
    content: `<h3>3.58 Sour Water Corrosion (Acidic)</h3>
    <div class="subsection">
        <h4>3.58.1 Description of Damage</h4>
        <p>a) Corrosion of steel (primarily) due to acidic sour water (SW) containing H<sub>2</sub>S at a pH between 4.5 and 7.0. Carbon dioxide (CO<sub>2</sub>) may also be present as well as other acidic species such as dissolved organic acids.</p>
        <p>b) SWs containing significant amounts of ammonia, chlorides, or cyanides, which may significantly affect pH, are outside the scope of this section.</p>
    </div>
    <div class="subsection">
        <h4>3.58.2 Affected Materials</h4>
        <p>a) Primarily affects carbon steel.</p>
        <p>b) Stainless steels, copper alloys, and nickel-based alloys are usually resistant.</p>
    </div>
    <div class="subsection">
        <h4>3.58.3 Critical Factors</h4>
        <p>a) H<sub>2</sub>S content, pH, temperature, velocity, and oxygen concentration are all critical factors.</p>
        <p>b) The H<sub>2</sub>S concentration in the SW is dependent on the H<sub>2</sub>S partial pressure in the gas phase as well as temperature and pH.</p>
        <p>c) At a given pressure, the H<sub>2</sub>S concentration in the SW decreases as temperature increases.</p>
        <p>d) Increasing concentrations of H<sub>2</sub>S tend to decrease solution pH down to about 4.5. Streams with a pH below 4.5 indicate the presence of a strong acid, which would be the main corrosion concern.</p>
        <p>e) Above a pH of about 4.5, a protective, thin, iron sulfide layer helps limit the corrosion rate.</p>
        <p>f) In some instances, at a pH above 4.5, a thicker, porous sulfide film layer can form. This can promote pitting under the sulfide deposits.</p>
        <p>g) Other contaminants have a significant effect on water pH. For example, HCl and CO<sub>2</sub> reduce the pH (make it more acidic). Ammonia significantly increases pH and is more often associated with alkaline SW where the main concern is ammonium bisulfide corrosion. (See 3.5.)</p>
        <p>h) The presence of air or oxidants may increase the corrosion rate and usually produces pitting or under-deposit attack.</p>
    </div>
    <div class="subsection">
        <h4>3.58.4 Affected Units or Equipment</h4>
        <p>Acidic SW corrosion is a concern in overhead systems of FCC and coker gas fractionation plants with high H<sub>2</sub>S levels and low NH<sub>3</sub> levels.</p>
    </div>
    <div class="subsection">
        <h4>3.58.5 Appearance or Morphology of Damage</h4>
        <p>a) Corrosion damage from acidic SW is typically general thinning. However, localized corrosion or localized under-deposit attack can occur, especially if air or oxygen is present. (Corrosion in high-CO<sub>2</sub> environments caused primarily by the CO<sub>2</sub> is covered in 3.18.)</p>
        <p>b) 300 series SS is susceptible to pitting attack and may experience crevice corrosion and/or Cl<sup>−</sup> SCC. (See 3.17.)</p>
    </div>
    <div class="subsection">
        <h4>3.58.6 Prevention/Mitigation</h4>
        <p>a) Process monitoring and control are important for minimizing the effects of acidic SW corrosion. Process parameters that typically should be monitored, e.g. at water draws of overhead accumulators, and controlled where applicable, are as follows:</p>
        <ul>
            <li>H<sub>2</sub>S content,</li>
            <li>pH,</li>
            <li>chloride content,</li>
            <li>cyanide content,</li>
            <li>temperature,</li>
            <li>fluid velocity, and</li>
            <li>oxygen concentration.</li>
        </ul>
        <p>b) 300 series SS can be used at temperatures below about 140 °F (60 °C) where Cl<sup>−</sup> SCC is not likely.</p>
        <p>c) Copper alloys and nickel alloys are generally not susceptible to acid SW corrosion. However, copper alloys are vulnerable to corrosion and some are susceptible to SCC in environments with ammonia.</p>
        <p>d) Water wash injection into FCC overheads and coker light ends units dissolves and dilutes corrodents like H<sub>2</sub>S and cyanide (CN<sup>−</sup>). Additional injection of a polysulfide solution with the water wash helps to convert cyanides into a less harmful compound.</p>
    </div>
    <div class="subsection">
        <h4>3.58.7 Inspection and Monitoring</h4>
        <p>a) UT scanning and RT can identify locally thinned areas of equipment exposed to SW corrosion.</p>
        <p>b) Permanently mounted thickness monitoring sensors can be used.</p>
        <p>c) Strategically placing continuous corrosion monitoring in the system, e.g. corrosion probes, corrosion coupons, or online thickness monitoring sensors, can provide an early indication of increased corrosion rates and the need to conduct thickness surveys or apply more advanced NDE to verify the severity and extent of the indicated corrosion.</p>
        <p>NOTE Corrosion probes may provide misleading data due to formation of FeS scale on the probe.</p>
        <p>d) Process monitoring and control, as described in 3.58.6 above, are key to controlling acidic SW corrosion and helping identify areas that should be included in the inspection plan.</p>
    </div>
    <div class="subsection">
        <h4>3.58.8 Related Mechanisms</h4>
        <p>Other damage mechanisms to consider in these environments include wet H<sub>2</sub>S damage (3.67) and CO<sub>2</sub> corrosion (3.18). See also ammonium bisulfide corrosion (3.5) and concentration cell corrosion (3.19).</p>
    </div>
    <div class="subsection">
        <h4>3.58.9 References</h4>
        <p>1. J. Gutzeit, "Corrosion of Steel by Sulfides and Cyanides in Refinery Condensate Water," Materials Protection, December 1968, pp. 17–23.</p>
        <p>2. R.H. Hausler and N.D. Coble, "Corrosion Control in Crude Unit Overhead Systems," Paper 42-72, API 37th Midyear Meeting, May 1972.</p>
        <p>3. B.D. Craig, "The Nature of Sulfides Formed on Steel in an H<sub>2</sub>S-O<sub>2</sub> Environment," CORROSION, Vol. 35, No. 3, March 1979, p. 136–138.</p>
        <p>4. C.P. Dillon, Corrosion Control in the Chemical Process Industries, Materials Technology Institute (printed by NACE), MTI Publication No 45, Second Edition, St. Louis, MO, 1994.</p>
        <p>5. D.A. Jones, Principles and Prevention of Corrosion, Prentice-Hall, New York, NY, 1996.</p>
        <p>6. B.D. Craig, "Sour-gas Design Considerations," Society of Petroleum Engineers (SPE) Monograph Series, Monograph Volume 15, 1993.</p>
    </div>
    `,
    contentEs: `<h3>3.58 Corrosión por Agua Agria (Ácida)</h3>
    <div class="subsection">
        <h4>3.58.1 Descripción del Daño</h4>
        <p>a) Corrosión del acero (principalmente) debido al agua agria ácida (SW) que contiene H<sub>2</sub>S a un pH entre 4.5 y 7.0. Dióxido de carbono (CO<sub>2</sub>) también puede estar presente así como otras especies ácidas como ácidos orgánicos disueltos.</p>
        <p>b) Las aguas agrias que contienen cantidades significativas de amoníaco, cloruros o cianuros, que pueden afectar significativamente el pH, están fuera del alcance de esta sección.</p>
    </div>
    <div class="subsection">
        <h4>3.58.2 Materiales Afectados</h4>
        <p>a) Afecta principalmente al acero al carbono.</p>
        <p>b) Los aceros inoxidables, las aleaciones de cobre y las aleaciones base níquel generalmente son resistentes.</p>
    </div>
    <div class="subsection">
        <h4>3.58.3 Factores Críticos</h4>
        <p>a) El contenido de H<sub>2</sub>S, el pH, la temperatura, la velocidad y la concentración de oxígeno son todos factores críticos.</p>
        <p>b) La concentración de H<sub>2</sub>S en el agua agria depende de la presión parcial de H<sub>2</sub>S en la fase gaseosa así como de la temperatura y el pH.</p>
        <p>c) A una presión dada, la concentración de H<sub>2</sub>S en el agua agria disminuye a medida que aumenta la temperatura.</p>
        <p>d) Las concentraciones crecientes de H<sub>2</sub>S tienden a disminuir el pH de la solución hasta aproximadamente 4.5. Las corrientes con un pH inferior a 4.5 indican la presencia de un ácido fuerte, que sería la principal preocupación de corrosión.</p>
        <p>e) Por encima de un pH de aproximadamente 4.5, una capa delgada y protectora de sulfuro de hierro ayuda a limitar la tasa de corrosión.</p>
        <p>f) En algunos casos, a un pH superior a 4.5, puede formarse una capa de película de sulfido más gruesa y porosa. Esto puede promover la picadura debajo de los depósitos de sulfuro.</p>
        <p>g) Otros contaminantes tienen un efecto significativo en el pH del agua. Por ejemplo, el HCl y el CO<sub>2</sub> reducen el pH (lo hacen más ácido). El amoníaco aumenta significativamente el pH y se asocia más a menudo con agua agria alcalina donde la principal preocupación es la corrosión por bisulfuro de amonio. (Véase 3.5.)</p>
        <p>h) La presencia de aire u oxidantes puede aumentar la tasa de corrosión y generalmente produce picaduras o ataque debajo de depósitos.</p>
    </div>
    <div class="subsection">
        <h4>3.58.4 Unidades o Equipos Afectados</h4>
        <p>La corrosión por agua agria ácida es una preocupación en los sistemas de cabeza de plantas de fraccionamiento de gas de FCC y coquizadores con altos niveles de H<sub>2</sub>S y bajos niveles de NH<sub>3</sub>.</p>
    </div>
    <div class="subsection">
        <h4>3.58.5 Apariencia o Morfología del Daño</h4>
        <p>a) El daño por corrosión del agua agria ácida típicamente es un adelgazamiento generalizado. Sin embargo, puede ocurrir corrosión localizada o ataque localizado debajo de depósitos, especialmente si hay presencia de aire u oxígeno. (La corrosión en ambientes con alto CO<sub>2</sub> causada principalmente por el CO<sub>2</sub> se trata en 3.18.)</p>
        <p>b) Los aceros inoxidables de la serie 300 son susceptibles al ataque por picaduras y pueden experimentar corrosión por rendija y/o SCC por Cl<sup>−</sup>. (Véase 3.17.)</p>
    </div>
    <div class="subsection">
        <h4>3.58.6 Prevención/Mitigación</h4>
        <p>a) El monitoreo y control del proceso son importantes para minimizar los efectos de la corrosión por agua agria ácida. Los parámetros del proceso que típicamente deben monitorearse, por ejemplo, en las extracciones de agua de los acumuladores de cabeza, y controlarse cuando sea aplicable, son los siguientes:</p>
        <ul>
            <li>Contenido de H<sub>2</sub>S,</li>
            <li>pH,</li>
            <li>Contenido de cloruro,</li>
            <li>Contenido de cianuro,</li>
            <li>Temperatura,</li>
            <li>Velocidad del fluido, y</li>
            <li>Concentración de oxígeno.</li>
        </ul>
        <p>b) Se pueden utilizar aceros inoxidables de la serie 300 a temperaturas inferiores a aproximadamente 140 °F (60 °C) donde no es probable el SCC por Cl<sup>−</sup>.</p>
        <p>c) Las aleaciones de cobre y níquel generalmente no son susceptibles a la corrosión por agua agria ácida. Sin embargo, las aleaciones de cobre son vulnerables a la corrosión y algunas son susceptibles a SCC en ambientes con amoníaco.</p>
        <p>d) La inyección de lavado con agua en los sistemas de cabeza de FCC y unidades de productos ligeros de coquizador disuelve y diluye corrosivos como H<sub>2</sub>S y cianuro (CN<sup>−</sup>). La inyección adicional de una solución de polisulfuro con el agua de lavado ayuda a convertir los cianuros en un compuesto menos dañino.</p>
    </div>
    <div class="subsection">
        <h4>3.58.7 Inspección y Monitoreo</h4>
        <p>a) El escaneo por UT y la RT pueden identificar áreas localizadas adelgazadas de equipos expuestos a corrosión por agua agria.</p>
        <p>b) Se pueden utilizar sensores de monitoreo de espesor montados permanentemente.</p>
        <p>c) La colocación estratégica de monitoreo continuo de corrosión en el sistema, por ejemplo, sondas de corrosión, cupones de corrosión o sensores de monitoreo de espesor en línea, puede proporcionar una indicación temprana de tasas de corrosión aumentadas y la necesidad de realizar estudios de espesor o aplicar END más avanzados para verificar la severidad y extensión de la corrosión indicada.</p>
        <p>NOTA Las sondas de corrosión pueden proporcionar datos engañosos debido a la formación de incrustaciones de FeS en la sonda.</p>
        <p>d) El monitoreo y control del proceso, como se describe en 3.58.6 anteriormente, son clave para controlar la corrosión por agua agria ácida y ayudar a identificar áreas que deben incluirse en el plan de inspección.</p>
    </div>
    <div class="subsection">
        <h4>3.58.8 Mecanismos Relacionados</h4>
        <p>Otros mecanismos de daño a considerar en estos ambientes incluyen el daño por H<sub>2</sub>S húmedo (3.67) y la corrosión por CO<sub>2</sub> (3.18). Véase también corrosión por bisulfuro de amonio (3.5) y corrosión por celda de concentración (3.19).</p>
    </div>
    <div class="subsection">
        <h4>3.58.9 Referencias</h4>
        <p>1. J. Gutzeit, "Corrosion of Steel by Sulfides and Cyanides in Refinery Condensate Water," Materials Protection, diciembre de 1968, pp. 17–23.</p>
        <p>2. R.H. Hausler y N.D. Coble, "Corrosion Control in Crude Unit Overhead Systems," Paper 42-72, API 37th Midyear Meeting, mayo de 1972.</p>
        <p>3. B.D. Craig, "The Nature of Sulfides Formed on Steel in an H<sub>2</sub>S-O<sub>2</sub> Environment," CORROSION, Vol. 35, No. 3, marzo de 1979, p. 136–138.</p>
        <p>4. C.P. Dillon, Corrosion Control in the Chemical Process Industries, Materials Technology Institute (impreso por NACE), MTI Publication No 45, Segunda Edición, St. Louis, MO, 1994.</p>
        <p>5. D.A. Jones, Principles and Prevention of Corrosion, Prentice-Hall, New York, NY, 1996.</p>
        <p>6. B.D. Craig, "Sour-gas Design Considerations," Society of Petroleum Engineers (SPE) Monograph Series, Monograph Volume 15, 1993.</p>
    </div>
    `
});