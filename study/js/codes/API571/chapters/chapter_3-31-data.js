// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 3-31
registerChapter('API571', {
    id: "3.31",
    title: "Galvanic Corrosion",
    titleEs: "Corrosión Galvánica",
    content: `<h3>3.31 Galvanic Corrosion</h3>
    <div class="subsection">
        <h4>3.31.1 Description of Damage</h4>
        <p>Accelerated corrosion that can occur at the junction of dissimilar metals when they are joined together in a suitable electrolyte, such as a moist or aqueous environment or soils containing moisture.</p>
    </div>
    <div class="subsection">
        <h4>3.31.2 Affected Material</h4>
        <p>All metals with the exception of most noble metals.</p>
    </div>
    <div class="subsection">
        <h4>3.31.3 Critical Factors</h4>
        <p>a) For galvanic corrosion, three conditions must be met.</p>
        <ul>
            <li>There must be two (or at least two) different metals with different electrochemical potentials.</li>
            <li>The dissimilar metals must be electrically coupled together, either by being directly in contact with or connected to each other or connected by a wire or other conductor. One of these metals is known as the anode and the other is the cathode.</li>
            <li>Both metals must be immersed or in contact with the same, continuous electrolyte, i.e. a fluid that can conduct electric current. Moisture or a separate water phase is usually required for the fluid to have enough conductivity.</li>
        </ul>
        <p>b) The more noble material (the cathode) is protected by sacrificial corrosion of the more active material (the anode). The anode corrodes at a higher rate than it would if it were not connected to the cathode.</p>
        <p>c) A typical listing of the relative position on the active to noble scale of alloys in seawater is shown in Table 3-31-1.</p>
        <p>d) The farther the alloys are apart in the table, the higher the driving force for corrosion.</p>
        <p>e) The relative amount of surface area exposed to the electrolyte between the more active anode material and the more noble cathode material has a significant affect.</p>
        <ul>
            <li>If there is a small anode-to-cathode exposed surface area ratio, the corrosion rate of the anode can be very high.</li>
            <li>If there is a large anode-to-cathode surface area ratio, the corrosion rate of the anode will be less affected.</li>
        </ul>
        <p>f) The same metal may act as either an anode or a cathode in different situations due to the effect of surface films, scale, and/or the properties of the electrolyte on its electrochemical potential in that particular situation (e.g. old steel pipe connected to new steel pipe).</p>
        <p>g) The same electrochemical coupling of different metals that leads to galvanic corrosion is put to beneficial effect in the form of cathodic protection when a more active sacrificial material, e.g. an aluminum or magnesium anode, is coupled to a less active (more noble) metal, e.g. carbon steel. This is the principle behind galvanized steel, where the zinc (Zn) coating corrodes preferentially to protect the underlying carbon steel. [If there is a break in the galvanizing coating, the resulting large anode to small cathode area prevents accelerated corrosion of the steel, while the Zn coating (anode) continues to cathodically protect the exposed steel.] This Zn-to-steel anode-to-cathode relationship appears to reverse in aerated water at temperatures above about 150 °F (65 °C). This is because the corrosion products and scale that form on the surface of the galvanizing make the surface more noble than steel. However, the relative positions of the open circuit potentials of the two metals do not actually switch at any temperature.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Table 3-31-1—Galvanic Series in Seawater. (Reference 1)</caption>
                <thead>
                    <tr>
                        <th colspan="2">Corroded End—Anode—More Active</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Magnesium</td>
                    </tr>
                    <tr>
                        <td>Magnesium alloys</td>
                    </tr>
                    <tr>
                        <td>Zinc</td>
                    </tr>
                    <tr>
                        <td>Aluminum</td>
                    </tr>
                    <tr>
                        <td>Aluminum alloys</td>
                    </tr>
                    <tr>
                        <td>Steel</td>
                    </tr>
                    <tr>
                        <td>Cast iron</td>
                    </tr>
                    <tr>
                        <td>Type 410 SS (active state)</td>
                    </tr>
                    <tr>
                        <td>Ni-resist</td>
                    </tr>
                    <tr>
                        <td>Type 304 SS (active state)</td>
                    </tr>
                    <tr>
                        <td>Type 316 SS (active state)</td>
                    </tr>
                    <tr>
                        <td>Lead</td>
                    </tr>
                    <tr>
                        <td>Tin</td>
                    </tr>
                    <tr>
                        <td>Nickel</td>
                    </tr>
                    <tr>
                        <td>Brass</td>
                    </tr>
                    <tr>
                        <td>Copper</td>
                    </tr>
                    <tr>
                        <td>Bronze</td>
                    </tr>
                    <tr>
                        <td>Copper-nickel</td>
                    </tr>
                    <tr>
                        <td>Monel</td>
                    </tr>
                    <tr>
                        <td>Nickel (passive state)</td>
                    </tr>
                    <tr>
                        <td>Type 410 SS (passive state)</td>
                    </tr>
                    <tr>
                        <td>Type 304 SS (passive state)</td>
                    </tr>
                    <tr>
                        <td>Type 316 SS (passive state)</td>
                    </tr>
                    <tr>
                        <td>Titanium</td>
                    </tr>
                    <tr>
                        <td>Graphite</td>
                    </tr>
                    <tr>
                        <td>Gold</td>
                    </tr>
                    <tr>
                        <td>Platinum</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">Protected End—Cathode—More Noble</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="subsection">
        <h4>3.31.4 Affected Units or Equipment</h4>
        <p>a) Galvanic corrosion can occur in any unit where different metals are coupled in a conductive fluid. Heat exchangers are susceptible if the tube material is different from the tubesheet and/or baffles, particularly if saltwater cooling is utilized.</p>
        <p>b) Buried piping and ship hulls are also typical locations for galvanic corrosion.</p>
    </div>
    <div class="subsection">
        <h4>3.31.5 Appearance or Morphology of Damage</h4>
        <p>a) Damage occurs where two different materials are joined at welded, bolted, or rolled connections.</p>
        <p>b) The more active material can suffer generalized loss in thickness or more aggressive localized loss adjacent to the point of connection, with the appearance of crevice, grooving, or pitting corrosion, depending on the driving force, conductivity of the electrolyte, and the relative anode/cathode area ratio.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-31-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-31-1—Preferential galvanic corrosion of the more active of the two materials.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-31-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-31-2—Galvanic corrosion of a carbon steel nipple in a stainless steel vessel in warm water service.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.31.6 Prevention/Mitigation</h4>
        <p>a) The best method for prevention or mitigation is through good design.</p>
        <p>b) Coupling of different metals in a conductive fluid should be avoided; however, the galvanic effect will be minimized if the anode/cathode surface area ratio is favorable.</p>
        <p>c) If a coating is to be used to mitigate corrosion of a galvanic couple, care must be exercised. If only the active material were coated, a small anode-to-cathode area ratio would exist wherever a coating defect or damage exposed bare anode metal, which would greatly accelerate corrosion of the anode at the break in the coating. Therefore, the exposed areas of both the anode and the cathode should be coated. If only one can be coated, the more noble cathode material should be the one coated. In this case the coating will not protect the anode, but at least the acceleration of the corrosion rate caused by the galvanic couple will be minimized or eliminated.</p>
        <p>d) For piping, specially designed electric insulating bolt sleeves and gaskets (i.e. isolation flanges) can eliminate the electrical connection.</p>
        <p>e) Sacrificial anodes are sometimes installed in carbon steel cooling water exchanger channels to control channel and tubesheet corrosion, particularly where Cu-alloy tubes such as admiralty brass are used.</p>
    </div>
    <div class="subsection">
        <h4>3.31.7 Inspection and Monitoring</h4>
        <p>a) VT and UT thickness gauging are effective methods for detecting galvanic corrosion.</p>
        <ul>
            <li>VT may indicate loss of the more anodic material by displaying oxidized material before it is cleaned.</li>
            <li>UT thickness measurement techniques have been effective in determining the amount of loss in the more anodic material.</li>
        </ul>
        <p>b) Permanently mounted thickness monitoring sensors can be used.</p>
        <p>c) The damage could also be hidden underneath a bolt or rivet head.</p>
        <p>An initial "total picture" examination may be necessary to understand the nature of joints under consideration. In the case of bolt heads or rivets, an angled beam technique may be needed to evaluate the hidden loss under the head of the fastener.</p>
    </div>
    <div class="subsection">
        <h4>3.31.8 Related Mechanisms</h4>
        <p>Concentration cell corrosion (3.19), soil corrosion (3.57), DMW cracking (3.26), and titanium hydriding (3.66).</p>
    </div>
    <div class="subsection">
        <h4>3.31.9 References</h4>
        <p>1. Corrosion Basics—An Introduction, NACE International, Houston, TX, 1984, pp. 33–37.</p>
    </div>
    `,
    contentEs: `<h3>3.31 Corrosión Galvánica</h3>
    <div class="subsection">
        <h4>3.31.1 Descripción del Daño</h4>
        <p>Corrosión acelerada que puede ocurrir en la unión de metales diferentes cuando se unen en un electrolito adecuado, como un ambiente húmedo o acuoso o suelos que contienen humedad.</p>
    </div>
    <div class="subsection">
        <h4>3.31.2 Materiales Afectados</h4>
        <p>Todos los metales con la excepción de la mayoría de los metales nobles.</p>
    </div>
    <div class="subsection">
        <h4>3.31.3 Factores Críticos</h4>
        <p>a) Para la corrosión galvánica, se deben cumplir tres condiciones.</p>
        <ul>
            <li>Debe haber dos (o al menos dos) metales diferentes con potenciales electroquímicos diferentes.</li>
            <li>Los metales diferentes deben estar acoplados eléctricamente, ya sea estando en contacto directo entre sí o conectados entre sí o conectados por un alambre u otro conductor. Uno de estos metales se conoce como el ánodo y el otro como el cátodo.</li>
            <li>Ambos metales deben estar sumergidos o en contacto con el mismo electrolito continuo, es decir, un fluido que pueda conducir corriente eléctrica. Generalmente se requiere humedad o una fase de agua separada para que el fluido tenga suficiente conductividad.</li>
        </ul>
        <p>b) El material más noble (el cátodo) está protegido por la corrosión sacrificial del material más activo (el ánodo). El ánodo se corroe a una tasa más alta de lo que lo haría si no estuviera conectado al cátodo.</p>
        <p>c) Una lista típica de la posición relativa en la escala de activo a noble de las aleaciones en agua de mar se muestra en la Tabla 3-31-1.</p>
        <p>d) Cuanto más separadas estén las aleaciones en la tabla, mayor será la fuerza impulsora para la corrosión.</p>
        <p>e) La cantidad relativa de superficie expuesta al electrolito entre el material de ánodo más activo y el material de cátodo más noble tiene un efecto significativo.</p>
        <ul>
            <li>Si hay una relación pequeña de área de superficie expuesta de ánodo a cátodo, la tasa de corrosión del ánodo puede ser muy alta.</li>
            <li>Si hay una relación grande de área de superficie de ánodo a cátodo, la tasa de corrosión del ánodo se verá menos afectada.</li>
        </ul>
        <p>f) El mismo metal puede actuar como ánodo o cátodo en diferentes situaciones debido al efecto de las películas superficiales, incrustaciones y/o las propiedades del electrolito en su potencial electroquímico en esa situación particular (ej. tubería de acero vieja conectada a tubería de acero nueva).</p>
        <p>g) El mismo acoplamiento electroquímico de metales diferentes que conduce a la corrosión galvánica se utiliza con efecto beneficioso en forma de protección catódica cuando un material sacrificial más activo, ej. un ánodo de aluminio o magnesio, se acopla a un metal menos activo (más noble), ej. acero al carbono. Este es el principio detrás del acero galvanizado, donde el recubrimiento de zinc (Zn) se corroe preferencialmente para proteger el acero al carbono subyacente. [Si hay una ruptura en el recubrimiento de galvanizado, la resultante área grande de ánodo a área pequeña de cátodo previene la corrosión acelerada del acero, mientras que el recubrimiento de Zn (ánodo) continúa protegiendo catódicamente el acero expuesto.] Esta relación de ánodo a cátodo de Zn a acero parece invertirse en agua aireada a temperaturas superiores a unos 150 °F (65 °C). Esto se debe a que los productos de corrosión y las incrustaciones que se forman en la superficie del galvanizado hacen que la superficie sea más noble que el acero. Sin embargo, las posiciones relativas de los potenciales de circuito abierto de los dos metales en realidad no cambian a ninguna temperatura.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Tabla 3-31-1—Serie Galvánica en Agua de Mar. (Referencia 1)</caption>
                <thead>
                    <tr>
                        <th colspan="2">Extremo Corroído—Ánodo—Más Activo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Magnesio</td>
                    </tr>
                    <tr>
                        <td>Aleaciones de magnesio</td>
                    </tr>
                    <tr>
                        <td>Cinc</td>
                    </tr>
                    <tr>
                        <td>Aluminio</td>
                    </tr>
                    <tr>
                        <td>Aleaciones de aluminio</td>
                    </tr>
                    <tr>
                        <td>Acero</td>
                    </tr>
                    <tr>
                        <td>Hierro fundido</td>
                    </tr>
                    <tr>
                        <td>Acero inoxidable tipo 410 (estado activo)</td>
                    </tr>
                    <tr>
                        <td>Ni-resist</td>
                    </tr>
                    <tr>
                        <td>Acero inoxidable tipo 304 (estado activo)</td>
                    </tr>
                    <tr>
                        <td>Acero inoxidable tipo 316 (estado activo)</td>
                    </tr>
                    <tr>
                        <td>Plomo</td>
                    </tr>
                    <tr>
                        <td>Estaño</td>
                    </tr>
                    <tr>
                        <td>Níquel</td>
                    </tr>
                    <tr>
                        <td>Latón</td>
                    </tr>
                    <tr>
                        <td>Cobre</td>
                    </tr>
                    <tr>
                        <td>Bronce</td>
                    </tr>
                    <tr>
                        <td>Cobre-níquel</td>
                    </tr>
                    <tr>
                        <td>Monel</td>
                    </tr>
                    <tr>
                        <td>Níquel (estado pasivo)</td>
                    </tr>
                    <tr>
                        <td>Acero inoxidable tipo 410 (estado pasivo)</td>
                    </tr>
                    <tr>
                        <td>Acero inoxidable tipo 304 (estado pasivo)</td>
                    </tr>
                    <tr>
                        <td>Acero inoxidable tipo 316 (estado pasivo)</td>
                    </tr>
                    <tr>
                        <td>Titanio</td>
                    </tr>
                    <tr>
                        <td>Grafito</td>
                    </tr>
                    <tr>
                        <td>Oro</td>
                    </tr>
                    <tr>
                        <td>Platino</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">Extremo Protegido—Cátodo—Más Noble</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="subsection">
        <h4>3.31.4 Unidades o Equipos Afectados</h4>
        <p>a) La corrosión galvánica puede ocurrir en cualquier unidad donde diferentes metales estén acoplados en un fluido conductor. Los intercambiadores de calor son susceptibles si el material del tubo es diferente al del espejo tubular y/o deflectores, particularmente si se utiliza enfriamiento con agua de mar.</p>
        <p>b) Las tuberías enterradas y los cascos de barcos también son ubicaciones típicas para la corrosión galvánica.</p>
    </div>
    <div class="subsection">
        <h4>3.31.5 Apariencia o Morfología del Daño</h4>
        <p>a) El daño ocurre donde dos materiales diferentes se unen en conexiones soldadas, atornilladas o rodadas.</p>
        <p>b) El material más activo puede sufrir pérdida generalizada de espesor o pérdida localizada más agresiva adyacente al punto de conexión, con la apariencia de corrosión por rendija, surcos o picaduras, dependiendo de la fuerza impulsora, conductividad del electrolito y la relación de área ánodo/cátodo relativa.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-31-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-31-1—Corrosión galvánica preferencial del más activo de los dos materiales.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-31-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-31-2—Corrosión galvánica de un niple de acero al carbono en un recipiente de acero inoxidable en servicio de agua caliente.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.31.6 Prevención/Mitigación</h4>
        <p>a) El mejor método para prevención o mitigación es a través de un buen diseño.</p>
        <p>b) Debe evitarse el acoplamiento de diferentes metales en un fluido conductor; sin embargo, el efecto galvánico se minimizará si la relación de área de superficie ánodo/cátodo es favorable.</p>
        <p>c) Si se va a utilizar un recubrimiento para mitigar la corrosión de un par galvánico, debe tenerse cuidado. Si solo se recubriera el material activo, existiría una relación pequeña de área de ánodo a cátodo dondequiera que un defecto o daño del recubrimiento expusiera metal de ánodo descubierto, lo que aceleraría enormemente la corrosión del ánodo en la ruptura del recubrimiento. Por lo tanto, deben recubrirse las áreas expuestas tanto del ánodo como del cátodo. Si solo se puede recubrir uno, debe recubrirse el material de cátodo más noble. En este caso el recubrimiento no protegerá el ánodo, pero al menos se minimizará o eliminará la aceleración de la tasa de corrosión causada por el par galvánico.</p>
        <p>d) Para tuberías, los mangitos y juntas de aislamiento eléctricos especialmente diseñados (es decir, bridas de aislamiento) pueden eliminar la conexión eléctrica.</p>
        <p>e) A veces se instalan ánodos de sacrificio en los canales de intercambiadores de calor de agua de enfriamiento de acero al carbono para controlar la corrosión del canal y el espejo tubular, particularmente donde se usan tubos de aleación de Cu como el latón Almirantazgo.</p>
    </div>
    <div class="subsection">
        <h4>3.31.7 Inspección y Monitoreo</h4>
        <p>a) La inspección visual (VT) y la medición de espesor por ultrasonido (UT) son métodos efectivos para detectar la corrosión galvánica.</p>
        <ul>
            <li>La VT puede indicar la pérdida del material más anódico al mostrar material oxidado antes de que se limpie.</li>
            <li>Las técnicas de medición de espesor por UT han sido efectivas para determinar la cantidad de pérdida en el material más anódico.</li>
        </ul>
        <p>b) Se pueden usar sensores de monitoreo de espesor montados permanentemente.</p>
        <p>c) El daño también podría estar oculto debajo de la cabeza de un perno o remache.</p>
        <p>Puede ser necesario un examen inicial de "imagen completa" para comprender la naturaleza de las juntas bajo consideración. En el caso de cabezas de pernos o remaches, puede ser necesaria una técnica de haz angular para evaluar la pérdida oculta debajo de la cabeza del sujetador.</p>
    </div>
    <div class="subsection">
        <h4>3.31.8 Mecanismos Relacionados</h4>
        <p>Corrosión por celda de concentración (3.19), corrosión del suelo (3.57), agrietamiento de DMW (3.26) y hidruración de titanio (3.66).</p>
    </div>
    <div class="subsection">
        <h4>3.31.9 Referencias</h4>
        <p>1. Corrosion Basics—An Introduction, NACE International, Houston, TX, 1984, pp. 33–37.</p>
    </div>
    `
});