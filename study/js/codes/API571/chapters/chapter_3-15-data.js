// Registrar el capítulo 3.15 de API 571
registerChapter('API571', {
    id: '3.15',
    title: "Caustic Stress Corrosion Cracking",
    titleEs: "Agrietamiento por Corrosión bajo Tensión Cáustica",
    content: `<h3>3.15 Caustic Stress Corrosion Cracking</h3>
    <div class="subsection">
        <h4>3.15.1 Description of Damage</h4>
        <p>Caustic SCC is characterized by surface-initiated cracks that occur in piping and equipment exposed to caustic (alkaline hydroxide solutions) at elevated temperature, primarily adjacent to non-PWHT'd welds. It is a form of ASCC. The temperature above which caustic SCC occurs depends on the concentration of the caustic solution.</p>
    </div>
    <div class="subsection">
        <h4>3.15.2 Affected Materials</h4>
        <p>Carbon steel, low-alloy steels, and 300 series SS are susceptible. Duplex stainless steels are also susceptible but have shown improved resistance compared to the 300 series SS. Nickel-based alloys are more resistant.</p>
    </div>
    <div class="subsection">
        <h4>3.15.3 Critical Factors</h4>
        <p>a) Susceptibility to caustic SCC in caustic soda (NaOH) and caustic potash (KOH) solutions is a function of caustic strength, metal temperature, and stress level.</p>
        <p>b) Increasing caustic concentration and increasing temperature increase the likelihood and rate of cracking. Conditions likely to result in cracking have been established through plant experience and are presented in Figure 3-15-1.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-1—Recommended operating limits for carbon steel in caustic service. (Reference 4)</p>
        </div>
        
        <p>c) Cracking can occur at low caustic levels if a concentrating mechanism is present. In such cases, caustic concentrations of 50 ppm to 100 ppm are sufficient to cause cracking.</p>
        <p>d) Residual stresses from welding (in non-stress-relieved welds) or from cold working (such as bending and forming) will cause cracking, and these high residual stresses are what typically lead to caustic SCC. Applied stresses, e.g. from pressure or mechanical loading, can also cause caustic SCC, but this is uncommon since applied stresses are normally low relative to the yield point and are lower than residual stresses from welding or forming.</p>
        <p>e) Thermal stress relief (PWHT) is effective in preventing caustic SCC. (Figure 3-15-1)</p>
        <p>f) Crack propagation rates increase dramatically with temperature, and cracks can grow through wall in a matter of hours during temperature excursions, especially in concentrated caustic or if conditions promote caustic concentration. Concentration can occur as the result of alternating wet and dry conditions, localized hot spots, or high-temperature steam out.</p>
        <p>g) Special care must be taken with steam tracing or heat tracing design as well as steam out of non-PWHT'd piping and equipment.</p>
        <p>h) Contaminants in the caustic solution, especially sulfides, regardless of concentration, will increase the likelihood of SCC in non-PWHT'd carbon steel, including in the lower temperature area (area "A") in Figure 3-15-1.</p>
    </div>
    <div class="subsection">
        <h4>3.15.4 Affected Units or Equipment</h4>
        <p>a) Caustic SCC can occur in non-stress-relieved piping and equipment that handles caustic, including H<sub>2</sub>S and mercaptan removal units, as well as equipment that uses caustic for neutralization in sulfuric acid alkylation units and HF alkylation units. Caustic is sometimes injected into the feed to the crude tower for chloride control.</p>
        <p>b) Failures have occurred in improperly heat-traced piping or equipment as well as heating coils and other heat transfer equipment.</p>
        <p>c) Caustic SCC can occur in equipment as the result of steam cleaning after being in caustic service.</p>
        <p>d) Traces of caustic can become concentrated in BFW and can result in caustic SCC of boiler tubes that alternate between wet and dry conditions due to overfiring. It can also occur in superheaters due to steam drum carryover.</p>
        <p>e) Cracking can occur in boilers at rolled tube joints due to caustic concentrating between the tube and tubesheet.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-4.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-4—Cracking in a boiler tubesheet due to caustic concentrating between the tube and the tubesheet.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-5.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-5—Photomicrograph of a crack in the tubesheet shown in Figure 3-15-4.</p>
        </div>
        
        <p>f) Caustic SCC can also occur as the result of unintended carryover of caustic into equipment not designed to handle hot caustic (e.g. not stress relieved), such as steam condensate piping or process equipment downstream of a caustic treating section of a process unit.</p>
    </div>
    <div class="subsection">
        <h4>3.15.5 Appearance or Morphology of Damage</h4>
        <p>a) Caustic SCC typically propagates parallel to the weld in adjacent base metal, i.e. in the zone of highest welding residual stress, but can also occur in the weld deposit or HAZ and can be transverse to the weld.</p>
        <p>b) The pattern of cracking observed on the steel surface is sometimes described as a spider web of small cracks that often initiate at or interconnect with weld-related flaws that serve as local stress risers.</p>
        <p>c) Cracks can be confirmed through metallographic examination. Cracks are typically branched and predominantly intergranular. Cracking that occurs in as-welded carbon steel typically appears as a network of very fine, oxide-filled cracks.</p>
        <p>d) Cracking in 300 series SS is most often transgranular but can be intergranular even in non-sensitized material. When transgranular, it can be difficult to distinguish from Cl<sup>−</sup> SCC. Caustic SCC should exhibit a black magnetite layer on the crack surface, whereas Cl<sup>−</sup> SCC should not produce that type of oxide scale.</p>
        <p>e) Similarly, caustic SCC of nickel-based alloys has been observed as either intergranular (Figure 3-15-9) or transgranular (Figure 3-15-10).</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-2—Cracking initiating on the inside surface of a non-stress-relieved carbon steel heat exchanger bend after 8 years in 15 % to 20 % caustic service at 140 °F to 240 °F (60 °C to 115 °C).</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-3—Photomicrograph of a crack in the tube shown in Figure 3-15-2.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-6.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-6—Photomicrograph of caustic cracking initiating on the ID of a carbon steel socket weld in non-PWHT'd piping in a suction drum downstream of a caustic scrubber. Unetched.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-7.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-7—Figure 3-15-6 in the etched condition.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-8.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-8—Stainless steel expansion bellows from a steam-driven turbine previously subjected to a caustic carryover upset condition.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-9.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-9—Micrograph showing intergranular caustic SCC in an expansion joint bellows constructed of Alloy 625 in a 400 psig steam superheater. (Reference 4)</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-10.png" class="figure-image">
            <p class="figure-caption">Figure 3-15-10—Micrograph showing transgranular caustic SCC in Alloy 825. Magnification 200X. (Reference 5)</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.15.6 Prevention/Mitigation</h4>
        <p>a) Cracking can be effectively prevented by means of a stress-relieving heat treatment (e.g. PWHT). A heat treatment at 1150 °F (620 °C) minimum with a minimum holding time of 1 hr is considered an effective stress relieving heat treatment for carbon steel. The same requirement applies to repair welds and to internal and external attachment welds.</p>
        <p>In contaminated caustic solutions, stress relief may be needed to prevent cracking of carbon steel even at low, otherwise "safe" temperatures (area "A" in Figure 3-15-1).</p>
        <p>b) 300 series SS offer little advantage in resistance to cracking over carbon steel.</p>
        <p>c) Nickel-based alloys are more resistant to cracking and may be required at higher temperatures and/or caustic concentrations. However, caustic SCC of these alloys has been observed at high temperatures that promote the formation of molten caustic in the absence of free water [604 °F (318 °C), at atmospheric pressure]. This damage has sometimes been referred to as molten caustic cracking.</p>
        <p>d) Steam out of non-PWHT'd carbon steel piping and equipment should be avoided. Where necessary, equipment should be water washed before steaming out, and only low-pressure steam should be used for short periods of time to minimize exposure.</p>
        <p>e) Proper design and operation of the injection system is required to ensure that caustic is properly dispersed before entering the high-temperature crude preheat system.</p>
        <p>f) Ensure all soda ash (sodium carbonate) solution that may have been used as a protective measure against polythionic acid stress corrosion cracking (PTA SCC) in 300 series SS equipment is drained prior to heating up as this soda ash can result in caustic SCC of 300 series SS as well as Alloy 800 and Alloy 825 as the water is boiled away.</p>
    </div>
    <div class="subsection">
        <h4>3.15.7 Inspection and Monitoring</h4>
        <p>a) WFMT, ACFM, and ECT can be effective techniques to detect these surface-breaking cracks. Proper surface preparation is necessary to ensure cracking is not masked by blending or smearing metal into the cracks. The method of surface preparation is dependent upon the specific technique.</p>
        <p>b) Angle beam ultrasonic techniques (SWUT and PAUT) can be effective to detect and size cracks. These ultrasonic techniques can be used to periodically monitor crack growth.</p>
        <p>c) PT or MT can be effective. PT may not be effective for finding tight cracks, because the cracks are oxide filled.</p>
        <p>d) RT may not be effective in detecting fine, tight cracks.</p>
        <p>e) AET can be used for locating cracks and monitoring crack growth.</p>
        <p>f) Severe cracking can at times be identified visually.</p>
    </div>
    <div class="subsection">
        <h4>3.15.8 Related Mechanisms</h4>
        <p>Amine SCC (3.3) and carbonate SCC (3.12) are two other similar forms of ASCC. Caustic SCC has also been called caustic embrittlement, but this is a misnomer and an obsolete term. Caustic SCC is a SCC mechanism, not an embrittlement mechanism.</p>
    </div>
    <div class="subsection">
        <h4>3.15.9 References</h4>
        <p>1. NACE 37519, NACE Corrosion Data Survey—Metals Section, Fifth Edition, NACE International, Houston, TX.</p>
        <p>2. "Fitness-For-Service Evaluation Procedures for Operating Pressure Vessels, Tanks, and Piping in Refinery and Chemical Service," Materials Properties Council, FS-26, Draft No. 5, Consultants Report, NY, 1995.</p>
        <p>3. J.K. Nelson, "Materials of Construction for Alkalies and Hypochlorites," Process Industries Corrosion—The Theory and Practice, NACE International, Houston, TX, 1986, pp. 297–310.</p>
        <p>4. NACE SP0403, Avoiding Caustic Stress Corrosion Cracking of Refinery Equipment and Piping, NACE International, Houston, TX.</p>
        <p>5. REFIN•COR, Corrosion Technology Week, 2011, NACE International, Houston, TX.</p>
        <p>6. "Environmentally Assisted Cracking," ASM Handbook—Corrosion: Environments and Industries, Volume 13C, ASM International, Materials Park, OH, 2007.</p>
        <p>Source: NACE SP0403-2015 (formerly RP0403), Avoiding Caustic Stress Corrosion Cracking of Refinery Equipment and Piping, from NACE International. For more information, see https://www.nace.org/home.</p>
    </div>
    `,
    contentEs: `<h3>3.15 Agrietamiento por Corrosión bajo Tensión Cáustica</h3>
    <div class="subsection">
        <h4>3.15.1 Descripción del Daño</h4>
        <p>El SCC cáustico se caracteriza por grietas que se inician en la superficie y ocurren en tuberías y equipos expuestos a cáustico (soluciones de hidróxido alcalino) a temperatura elevada, principalmente adyacentes a soldaduras sin PWHT. Es una forma de SCC alcalina (ASCC). La temperatura por encima de la cual ocurre el SCC cáustico depende de la concentración de la solución cáustica.</p>
    </div>
    <div class="subsection">
        <h4>3.15.2 Materiales Afectados</h4>
        <p>El acero al carbono, los aceros de baja aleación y los aceros inoxidables serie 300 son susceptibles. Los aceros inoxidables dúplex también son susceptibles pero han mostrado una resistencia mejorada en comparación con los aceros inoxidables serie 300. Las aleaciones base níquel son más resistentes.</p>
    </div>
    <div class="subsection">
        <h4>3.15.3 Factores Críticos</h4>
        <p>a) La susceptibilidad al SCC cáustico en soluciones de sosa cáustica (NaOH) y potasa cáustica (KOH) es una función de la concentración cáustica, la temperatura del metal y el nivel de esfuerzo.</p>
        <p>b) El aumento de la concentración cáustica y el aumento de la temperatura aumentan la probabilidad y la tasa de agrietamiento. Las condiciones que probablemente resulten en agrietamiento se han establecido mediante la experiencia en planta y se presentan en la Figura 3-15-1.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-1—Límites operativos recomendados para acero al carbono en servicio cáustico. (Referencia 4)</p>
        </div>
        
        <p>c) Puede ocurrir agrietamiento a niveles bajos de cáustico si está presente un mecanismo de concentración. En tales casos, concentraciones de cáustico de 50 ppm a 100 ppm son suficientes para causar agrietamiento.</p>
        <p>d) Los esfuerzos residuales de la soldadura (en soldaduras sin alivio de esfuerzos) o del trabajo en frío (como doblado y conformado) causarán agrietamiento, y estos altos esfuerzos residuales son lo que típicamente lleva al SCC cáustico. Los esfuerzos aplicados, por ejemplo, por presión o carga mecánica, también pueden causar SCC cáustico, pero esto es poco común ya que los esfuerzos aplicados normalmente son bajos en relación con el punto de fluencia y son más bajos que los esfuerzos residuales de la soldadura o conformado.</p>
        <p>e) El alivio de esfuerzos térmico (PWHT) es efectivo para prevenir el SCC cáustico. (Figura 3-15-1)</p>
        <p>f) Las tasas de propagación de grietas aumentan dramáticamente con la temperatura, y las grietas pueden crecer a través de la pared en cuestión de horas durante excursiones de temperatura, especialmente en cáustico concentrado o si las condiciones promueven la concentración cáustica. La concentración puede ocurrir como resultado de condiciones alternas de húmedo y seco, puntos calientes localizados o purga con vapor a alta temperatura.</p>
        <p>g) Se debe tener especial cuidado con el diseño del rastreo térmico de vapor o calor, así como con la purga con vapor de tuberías y equipos sin PWHT.</p>
        <p>h) Los contaminantes en la solución cáustica, especialmente los sulfuros, independientemente de la concentración, aumentarán la probabilidad de SCC en el acero al carbono sin PWHT, incluyendo en el área de temperatura más baja (área "A") en la Figura 3-15-1.</p>
    </div>
    <div class="subsection">
        <h4>3.15.4 Unidades o Equipos Afectados</h4>
        <p>a) El SCC cáustico puede ocurrir en tuberías y equipos sin alivio de esfuerzos que manejan cáustico, incluyendo unidades de eliminación de H<sub>2</sub>S y mercaptanos, así como equipos que usan cáustico para neutralización en unidades de alquilación de ácido sulfúrico y unidades de alquilación de HF. A veces se inyecta cáustico en la alimentación a la torre de crudo para el control de cloruros.</p>
        <p>b) Han ocurrido fallas en tuberías o equipos con rastreo térmico inadecuado, así como en bobinas de calentamiento y otros equipos de transferencia de calor.</p>
        <p>c) El SCC cáustico puede ocurrir en equipos como resultado de la limpieza con vapor después de estar en servicio cáustico.</p>
        <p>d) Las trazas de cáustico pueden concentrarse en el agua de alimentación de caldera (BFW) y pueden resultar en SCC cáustico de los tubos de la caldera que alternan entre condiciones húmedas y secas debido a sobrecalentamiento. También puede ocurrir en sobrecalentadores debido al arrastre del domo de vapor.</p>
        <p>e) Puede ocurrir agrietamiento en calderas en juntas de tubos expandidos debido a la concentración de cáustico entre el tubo y la placa tubular.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-4.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-4—Agrietamiento en una placa tubular de caldera debido a la concentración de cáustico entre el tubo y la placa tubular.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-5.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-5—Fotomicrografía de una grieta en la placa tubular mostrada en la Figura 3-15-4.</p>
        </div>
        
        <p>f) El SCC cáustico también puede ocurrir como resultado del arrastre no intencionado de cáustico a equipos no diseñados para manejar cáustico caliente (por ejemplo, sin alivio de esfuerzos), como tuberías de condensado de vapor o equipos de proceso aguas abajo de una sección de tratamiento cáustico de una unidad de proceso.</p>
    </div>
    <div class="subsection">
        <h4>3.15.5 Apariencia o Morfología del Daño</h4>
        <p>a) El SCC cáustico típicamente se propaga paralelo a la soldadura en el metal base adyacente, es decir, en la zona de mayor esfuerzo residual de soldadura, pero también puede ocurrir en el depósito de soldadura o ZAC y puede ser transversal a la soldadura.</p>
        <p>b) El patrón de agrietamiento observado en la superficie del acero a veces se describe como una telaraña de pequeñas grietas que a menudo se inician en o interconectan con defectos relacionados con la soldadura que sirven como concentradores de esfuerzo local.</p>
        <p>c) Las grietas pueden confirmarse mediante examen metalográfico. Las grietas son típicamente ramificadas y predominantemente intergranulares. El agrietamiento que ocurre en el acero al carbono tal como se solda típicamente aparece como una red de grietas muy finas llenas de óxido.</p>
        <p>d) El agrietamiento en los aceros inoxidables serie 300 es más a menudo transgranular pero puede ser intergranular incluso en material no sensibilizado. Cuando es transgranular, puede ser difícil distinguirlo del SCC por Cl<sup>−</sup>. El SCC cáustico debe exhibir una capa de magnetita negra en la superficie de la grieta, mientras que el SCC por Cl<sup>−</sup> no debe producir ese tipo de costra de óxido.</p>
        <p>e) De manera similar, se ha observado el SCC cáustico de aleaciones base níquel como intergranular (Figura 3-15-9) o transgranular (Figura 3-15-10).</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-2—Agrietamiento que se inicia en la superficie interior de un codo de intercambiador de calor de acero al carbono sin alivio de esfuerzos después de 8 años en servicio de 15% a 20% de cáustico a 140 °F a 240 °F (60 °C a 115 °C).</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-3—Fotomicrografía de una grieta en el tubo mostrado en la Figura 3-15-2.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-6.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-6—Fotomicrografía de agrietamiento cáustico que se inicia en el diámetro interior de una soldadura de enchufe de acero al carbono en tubería sin PWHT en un tambor de succión aguas abajo de un scrubber cáustico. Sin atacar.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-7.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-7—Figura 3-15-6 en condición atacada.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-8.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-8—Fuelles de expansión de acero inoxidable de una turbora accionada por vapor previamente sometida a una condición de alteración por arrastre de cáustico.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-9.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-9—Micrografía que muestra SCC cáustico intergranular en fuelles de junta de expansión construidos de Aleación 625 en un sobrecalentador de vapor de 400 psig. (Referencia 4)</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-15-10.png" class="figure-image">
            <p class="figure-caption">Figura 3-15-10—Micrografía que muestra SCC cáustico transgranular en Aleación 825. Ampliación 200X. (Referencia 5)</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.15.6 Prevención/Mitigación</h4>
        <p>a) El agrietamiento puede prevenirse eficazmente mediante un tratamiento térmico de alivio de esfuerzos (por ejemplo, PWHT). Un tratamiento térmico a 1150 °F (620 °C) mínimo con un tiempo de permanencia mínimo de 1 hora se considera un tratamiento térmico de alivio de esfuerzos efectivo para el acero al carbono. El mismo requisito se aplica a soldaduras de reparación y a soldaduras de accesorios internos y externos.</p>
        <p>En soluciones cáusticas contaminadas, puede ser necesario el alivio de esfuerzos para prevenir el agrietamiento del acero al carbono incluso a temperaturas bajas, de otro modo "seguras" (área "A" en la Figura 3-15-1).</p>
        <p>b) Los aceros inoxidables serie 300 ofrecen poca ventaja en resistencia al agrietamiento sobre el acero al carbono.</p>
        <p>c) Las aleaciones base níquel son más resistentes al agrietamiento y pueden ser necesarias a temperaturas más altas y/o concentraciones cáusticas. Sin embargo, se ha observado SCC cáustico de estas aleaciones a temperaturas altas que promueven la formación de cáustico fundido en ausencia de agua libre [604 °F (318 °C), a presión atmosférica]. Este daño a veces se ha referido como agrietamiento por cáustico fundido.</p>
        <p>d) Debe evitarse la purga con vapor de tuberías y equipos de acero al carbono sin PWHT. Cuando sea necesario, el equipo debe lavarse con agua antes de la purga con vapor, y solo debe usarse vapor de baja presión durante períodos cortos de tiempo para minimizar la exposición.</p>
        <p>e) Se requiere el diseño y operación adecuados del sistema de inyección para garantizar que el cáustico se dispersa adecuadamente antes de entrar en el sistema de precalentamiento de crudo de alta temperatura.</p>
        <p>f) Asegurarse de que toda solución de ceniza de soda (carbonato de sodio) que pueda haberse utilizado como medida protectora contra el SCC por ácido tiónico (PTA SCC) en equipos de acero inoxidable serie 300 se drene antes del calentamiento, ya que esta ceniza de soda puede resultar en SCC cáustico de los aceros inoxidables serie 300 así como de la Aleación 800 y la Aleación 825 a medida que el agua se evapora.</p>
    </div>
    <div class="subsection">
        <h4>3.15.7 Inspección y Monitoreo</h4>
        <p>a) WFMT, ACFM y ECT pueden ser técnicas efectivas para detectar estas grietas que llegan a la superficie. Es necesaria una preparación adecuada de la superficie para garantizar que el agrietamiento no se enmascare mediante la mezcla o el deslizamiento de metal en las grietas. El método de preparación de la superficie depende de la técnica específica.</p>
        <p>b) Las técnicas ultrasónicas de haz angular (SWUT y PAUT) pueden ser efectivas para detectar y dimensionar grietas. Estas técnicas ultrasónicas pueden usarse para monitorear periódicamente el crecimiento de grietas.</p>
        <p>c) PT o MT pueden ser efectivos. PT puede no ser efectivo para encontrar grietas estrechas, porque las grietas están llenas de óxido.</p>
        <p>d) RT puede no ser efectivo para detectar grietas finas y estrechas.</p>
        <p>e) AET puede usarse para localizar grietas y monitorear el crecimiento de grietas.</p>
        <p>f) El agrietamiento severo a veces puede identificarse visualmente.</p>
    </div>
    <div class="subsection">
        <h4>3.15.8 Mecanismos Relacionados</h4>
        <p>El SCC por aminas (3.3) y el SCC por carbonato (3.12) son otras dos formas similares de SCC alcalina (ASCC). El SCC cáustico también se ha llamado fragilización cáustica, pero esto es un nombre inapropiado y un término obsoleto. El SCC cáustico es un mecanismo de SCC, no un mecanismo de fragilización.</p>
    </div>
    <div class="subsection">
        <h4>3.15.9 Referencias</h4>
        <p>1. NACE 37519, NACE Corrosion Data Survey—Metals Section, Fifth Edition, NACE International, Houston, TX.</p>
        <p>2. "Fitness-For-Service Evaluation Procedures for Operating Pressure Vessels, Tanks, and Piping in Refinery and Chemical Service," Materials Properties Council, FS-26, Draft No. 5, Consultants Report, NY, 1995.</p>
        <p>3. J.K. Nelson, "Materials of Construction for Alkalies and Hypochlorites," Process Industries Corrosion—The Theory and Practice, NACE International, Houston, TX, 1986, pp. 297–310.</p>
        <p>4. NACE SP0403, Avoiding Caustic Stress Corrosion Cracking of Refinery Equipment and Piping, NACE International, Houston, TX.</p>
        <p>5. REFIN•COR, Corrosion Technology Week, 2011, NACE International, Houston, TX.</p>
        <p>6. "Environmentally Assisted Cracking," ASM Handbook—Corrosion: Environments and Industries, Volume 13C, ASM International, Materials Park, OH, 2007.</p>
        <p>Fuente: NACE SP0403-2015 (anteriormente RP0403), Avoiding Caustic Stress Corrosion Cracking of Refinery Equipment and Piping, de NACE International. Para más información, consulte https://www.nace.org/home.</p>
    </div>
    `
});