// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 3-57
registerChapter('API571', {
    id: "3.57",
    title: "Soil Corrosion",
    titleEs: "Corrosión del Suelo",
    content: `<h3>3.57 Soil Corrosion</h3>
    <div class="subsection">
        <h4>3.57.1 Description of Damage</h4>
        <p>The corrosion of metals from exposure to soils is referred to as soil corrosion.</p>
    </div>
    <div class="subsection">
        <h4>3.57.2 Affected Materials</h4>
        <p>Carbon steel, cast iron, and ductile iron.</p>
    </div>
    <div class="subsection">
        <h4>3.57.3 Critical Factors</h4>
        <p>a) The severity of soil corrosion is determined by many factors, including operating temperature, moisture and oxygen availability, soil resistivity (soil condition and characteristics), soil type (water drainage capability) and homogeneity (variation in soil type), cathodic protection, stray current drainage, and coating type, age, and condition.</p>
        <p>b) There is no single parameter that can be used to determine soil corrosivity. Instead, a number of characteristics must be combined to estimate the corrosion in particular soil as outlined in ASTM STP 741 as well as API 580 and API 581.</p>
        <p>c) Soil resistivity is related to the soil moisture content and dissolved electrolytes in the soil water. Soil resistivity testing is frequently used to estimate soil corrosivity, mainly because it is easy to measure; however, it can produce widely variable results within a single refinery site.</p>
        <p>d) Soils having high moisture content, high dissolved salt concentrations, and high acidity are usually the most corrosive.</p>
        <p>e) Soil-to-air interface areas are often much more susceptible to corrosion than the rest of the structure because of moisture and oxygen availability.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-57-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-57-1—Corrosion of carbon steel pipe at the soil/air interface where the pipe emerges from underground.</p>
        </div>
        
        <p>f) Corrosion rates increase with increasing metal temperature.</p>
        <p>g) Other factors that affect soil corrosion include galvanic corrosion, dissimilar soils, stray currents, differential aeration corrosion cells, and MIC.</p>
    </div>
    <div class="subsection">
        <h4>3.57.4 Affected Units or Equipment</h4>
        <p>a) Underground piping and equipment as well as buried tanks and the bottoms of aboveground storage tanks.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-57-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-57-2—Coupons removed from the bottom of an unprotected steel condensate storage tank after 3 years of service. The external surface is shown.</p>
        </div>
        
        <p>b) Ground supported metal structures.</p>
        <p>c) Piping running close to the ground under which soil has accumulated over the years to the point of reaching and contacting or partially covering the pipe.</p>
        <p>d) Piping exiting road or other crossings where soil has sloughed off and is laying on or covering the pipe.</p>
    </div>
    <div class="subsection">
        <h4>3.57.5 Appearance or Morphology of Damage</h4>
        <p>a) Soil corrosion appears as external thinning with a roughened surface and localized deeper attack or pitting.</p>
        <p>b) Poor condition of a protective coating is a tell-tale sign of potential corrosion damage.</p>
        <p>c) Soil corrosion can be highly variable along an unprotected buried pipe or on the unprotected underside of a storage tank bottom.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-57-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-57-3—Cross section through location (A) showing severe corrosion. The arrows point to a location that was at the original thickness.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.57.6 Prevention/Mitigation</h4>
        <p>Soil corrosion of carbon steel can be minimized through the use of appropriate coatings and cathodic protection along with special backfill to prevent rock damage to the coating. The most effective protection is a combination of a corrosion-resistant coating and a cathodic protection system.</p>
    </div>
    <div class="subsection">
        <h4>3.57.7 Inspection and Monitoring</h4>
        <p>The following techniques can be used for inspecting buried or on-grade metallic components that may have become covered by shifting soil, as well as soil-to-air interfaces.</p>
        <p>a) An aboveground visual survey can identify leaks coming to the surface of the soil.</p>
        <p>NOTE Any change in the surface contour of the ground, discoloration of the soil, softening of paving asphalt, pool formation, bubbling water puddles, or noticeable odor.</p>
        <p>b) Smart-pigging devices employing UT or MFL can be used where the piping is designed to send and receive the pigs or accommodate tethered pigs that can be sent through lines. It can detect dents, flaws, and corrosion.</p>
        <p>c) A close-interval potential survey on a cathodically protected line may be used to verify that the buried piping has a protective potential throughout its length. API 570 provides guidance for conducting close-interval surveys. Close-interval potential surveys can only infer wall loss from CP potential, but not directly detect presence of wall loss, and thus they identify areas for follow-up inspection. Refer to NACE SP0169 and API 651 Section 11 of for guidance applicable to inspecting and maintaining cathodic protection systems for buried and soil-contacting equipment.</p>
        <p>d) A pipe coating holiday survey (e.g. direct current voltage gradient) can be used to locate coating defects on coated pipes. This can be performed on newly coated pipe before being buried or on pipe that has been excavated.</p>
        <p>e) VT of the pipe or equipment coating after excavation is one of the most reliable methods to determine its condition. This is also commonly done at the soil-to-air interface, where the soil should be removed down to about 12 in. (305 mm) below the surface to expose the most corrosion-prone area. Care should be taken during excavation to avoid damaging the coating or the equipment. Risks of excavating pipe while in service should be evaluated.</p>
        <p>f) GWT can provide a screening tool for metal loss on buried piping, but signal loss can limit the distance from the GWT collar over which the piping can be inspected.</p>
        <p>g) Pressure testing can determine whether buried equipment is leaking at that particular time but does not provide information concerning the degree of corrosion on the equipment.</p>
    </div>
    <div class="subsection">
        <h4>3.57.8 Related Mechanisms</h4>
        <p>Galvanic corrosion (3.31), concentration cell corrosion (3.19), graphitic corrosion (3.33), and MIC (3.45).</p>
    </div>
    <div class="subsection">
        <h4>3.57.9 References</h4>
        <p>1. API Recommended Practice 580, Risk-Based Inspection, American Petroleum Institute, Washington, DC.</p>
        <p>2. API Recommended Practice 581, Risk-Based Inspection Methodology, American Petroleum Institute, Washington, DC.</p>
        <p>3. A.W. Peabody, Control of Pipeline Corrosion, NACE International, Houston, TX, 1967.</p>
        <p>4. J. Morgan, Cathodic Protection, NACE International, Houston, TX, 1987.</p>
        <p>5. D.K. O'Day, "External Corrosion in Distribution Systems," Journal AWWA, Vol. 81, No. 10, October 1989, pp. 45–52.</p>
        <p>6. M.E. Parker, Pipe Line Corrosion and Cathodic Protection, Gulf Publishing Company, Houston TX, 1954.</p>
        <p>7. M. Romanoff, Underground Corrosion, NACE International, Houston, TX, 1997.</p>
        <p>8. D.A. Jones, Principles and Prevention of Corrosion, McMillan, New York, NY, 1992.</p>
        <p>9. H.H. Uhlig, Corrosion Handbook, John Wiley and Sons, 1948.</p>
        <p>10. EDM Services, Hazardous Liquid Pipeline Risk Assessment, California State Fire Marshal, Pipeline Safety Division, Simi Valley, CA, 1993.</p>
        <p>11. NACE SP0169, Control of External Corrosion on Underground or Submerged Metallic Piping Systems, NACE International, Houston, TX.</p>
    </div>
    `,
    contentEs: `<h3>3.57 Corrosión del Suelo</h3>
    <div class="subsection">
        <h4>3.57.1 Descripción del Daño</h4>
        <p>La corrosión de metales por exposición a suelos se conoce como corrosión del suelo.</p>
    </div>
    <div class="subsection">
        <h4>3.57.2 Materiales Afectados</h4>
        <p>Acero al carbono, hierro fundido y hierro dúctil.</p>
    </div>
    <div class="subsection">
        <h4>3.57.3 Factores Críticos</h4>
        <p>a) La severidad de la corrosión del suelo está determinada por muchos factores, incluyendo la temperatura de operación, la humedad y disponibilidad de oxígeno, la resistividad del suelo (condición y características del suelo), el tipo de suelo (capacidad de drenaje de agua) y homogeneidad (variación en el tipo de suelo), protección catódica, drenaje de corrientes parásitas, y el tipo, edad y condición del recubrimiento.</p>
        <p>b) No existe un único parámetro que pueda usarse para determinar la corrosividad del suelo. En su lugar, se deben combinar varias características para estimar la corrosión en un suelo particular como se describe en ASTM STP 741 así como en API 580 y API 581.</p>
        <p>c) La resistividad del suelo está relacionada con el contenido de humedad del suelo y los electrolitos disueltos en el agua del suelo. La prueba de resistividad del suelo se utiliza frecuentemente para estimar la corrosividad del suelo, principalmente porque es fácil de medir; sin embargo, puede producir resultados muy variables dentro de un solo sitio de refinería.</p>
        <p>d) Los suelos con alto contenido de humedad, altas concentraciones de sales disueltas y alta acidez suelen ser los más corrosivos.</p>
        <p>e) Las áreas de interfaz suelo-aire a menudo son mucho más susceptibles a la corrosión que el resto de la estructura debido a la humedad y disponibilidad de oxígeno.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-57-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-57-1—Corrosión de tubería de acero al carbono en la interfaz suelo/aire donde la tubería emerge del subsuelo.</p>
        </div>
        
        <p>f) Las tasas de corrosión aumentan con el aumento de la temperatura del metal.</p>
        <p>g) Otros factores que afectan la corrosión del suelo incluyen la corrosión galvánica, suelos disimilares, corrientes parásitas, celdas de corrosión por aireación diferencial y MIC.</p>
    </div>
    <div class="subsection">
        <h4>3.57.4 Unidades o Equipos Afectados</h4>
        <p>a) Tuberías y equipos subterráneos así como tanques enterrados y los fondos de tanques de almacenamiento aéreos.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-57-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-57-2—Cupones retirados del fondo de un tanque de almacenamiento de condensado de acero sin protección después de 3 años de servicio. Se muestra la superficie externa.</p>
        </div>
        
        <p>b) Estructuras metálicas apoyadas en el suelo.</p>
        <p>c) Tuberías que corren cerca del suelo debajo del cual el suelo se ha acumulado con los años hasta el punto de alcanzar y contactar o cubrir parcialmente la tubería.</p>
        <p>d) Tuberías que salen de cruces de carreteras u otros donde el suelo se ha desprendido y está depositado sobre o cubriendo la tubería.</p>
    </div>
    <div class="subsection">
        <h4>3.57.5 Apariencia o Morfología del Daño</h4>
        <p>a) La corrosión del suelo aparece como adelgazamiento externo con una superficie rugosa y ataque localizado más profundo o picaduras.</p>
        <p>b) El mal estado de un recubrimiento protector es un signo revelador de posible daño por corrosión.</p>
        <p>c) La corrosión del suelo puede ser altamente variable a lo largo de una tubería enterrada sin protección o en la parte inferior sin protección del fondo de un tanque de almacenamiento.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-57-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-57-3—Sección transversal a través de la ubicación (A) que muestra corrosión severa. Las flechas apuntan a una ubicación que estaba en el espesor original.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.57.6 Prevención/Mitigación</h4>
        <p>La corrosión del suelo del acero al carbono puede minimizarse mediante el uso de recubrimientos apropiados y protección catódica junto con relleno especial para evitar el daño de rocas al recubrimiento. La protección más efectiva es una combinación de un recubrimiento resistente a la corrosión y un sistema de protección catódica.</p>
    </div>
    <div class="subsection">
        <h4>3.57.7 Inspección y Monitoreo</h4>
        <p>Las siguientes técnicas pueden usarse para inspeccionar componentes metálicos enterrados o a nivel del suelo que pueden haber quedado cubiertos por suelo desplazado, así como interfaces suelo-aire.</p>
        <p>a) Una inspección visual superficial puede identificar fugas que llegan a la superficie del suelo.</p>
        <p>NOTA Cualquier cambio en el contorno de la superficie del suelo, decoloración del suelo, ablandamiento del asfalto de pavimento, formación de charcos, charcos de agua burbujeante u olor notable.</p>
        <p>b) Los dispositivos de "smart-pigging" que emplean UT o MFL pueden usarse donde la tubería está diseñada para enviar y recibir los pigs o acomodar pigs atados que pueden enviarse a través de las líneas. Puede detectar abolladuras, defectos y corrosión.</p>
        <p>c) Una inspección de potencial a intervalo cercano en una línea con protección catódica puede usarse para verificar que la tubería enterrada tiene un potencial protector a lo largo de su longitud. API 570 proporciona orientación para realizar inspecciones a intervalo cercano. Las inspecciones de potencial a intervalo cercano solo pueden inferir la pérdida de pared a partir del potencial de PC, pero no detectan directamente la presencia de pérdida de pared, y así identifican áreas para inspección de seguimiento. Consulte NACE SP0169 y la Sección 11 de API 651 para obtener orientación aplicable a la inspección y mantenimiento de sistemas de protección catódica para equipos enterrados y en contacto con el suelo.</p>
        <p>d) Una inspección de defectos (holidays) en el recubrimiento de tuberías (por ejemplo, gradiente de voltaje de corriente continua) puede usarse para localizar defectos en el recubrimiento de tuberías recubiertas. Esto puede realizarse en tuberías recién recubiertas antes de ser enterradas o en tuberías que han sido excavadas.</p>
        <p>e) La VT del recubrimiento de la tubería o equipo después de la excavación es uno de los métodos más confiables para determinar su condición. Esto también se hace comúnmente en la interfaz suelo-aire, donde el suelo debe eliminarse hasta aproximadamente 12 pulg. (305 mm) debajo de la superficie para exponer el área más propensa a la corrosión. Debe tenerse cuidado durante la excavación para evitar dañar el recubrimiento o el equipo. Los riesgos de excavar tuberías mientras están en servicio deben evaluarse.</p>
        <p>f) GWT puede proporcionar una herramienta de detección para la pérdida de metal en tuberías enterradas, pero la pérdida de señal puede limitar la distancia desde el collar GWT sobre la cual se puede inspeccionar la tubería.</p>
        <p>g) Las pruebas de presión pueden determinar si el equipo enterrado tiene fugas en ese momento particular pero no proporcionan información sobre el grado de corrosión en el equipo.</p>
    </div>
    <div class="subsection">
        <h4>3.57.8 Mecanismos Relacionados</h4>
        <p>Corrosión galvánica (3.31), corrosión por celda de concentración (3.19), corrosión grafítica (3.33) y MIC (3.45).</p>
    </div>
    <div class="subsection">
        <h4>3.57.9 Referencias</h4>
        <p>1. API Recommended Practice 580, Risk-Based Inspection, American Petroleum Institute, Washington, DC.</p>
        <p>2. API Recommended Practice 581, Risk-Based Inspection Methodology, American Petroleum Institute, Washington, DC.</p>
        <p>3. A.W. Peabody, Control of Pipeline Corrosion, NACE International, Houston, TX, 1967.</p>
        <p>4. J. Morgan, Cathodic Protection, NACE International, Houston, TX, 1987.</p>
        <p>5. D.K. O'Day, "External Corrosion in Distribution Systems," Journal AWWA, Vol. 81, No. 10, October 1989, pp. 45–52.</p>
        <p>6. M.E. Parker, Pipe Line Corrosion and Cathodic Protection, Gulf Publishing Company, Houston TX, 1954.</p>
        <p>7. M. Romanoff, Underground Corrosion, NACE International, Houston, TX, 1997.</p>
        <p>8. D.A. Jones, Principles and Prevention of Corrosion, McMillan, New York, NY, 1992.</p>
        <p>9. H.H. Uhlig, Corrosion Handbook, John Wiley and Sons, 1948.</p>
        <p>10. EDM Services, Hazardous Liquid Pipeline Risk Assessment, California State Fire Marshal, Pipeline Safety Division, Simi Valley, CA, 1993.</p>
        <p>11. NACE SP0169, Control of External Corrosion on Underground or Submerged Metallic Piping Systems, NACE International, Houston, TX.</p>
    </div>
    `
});