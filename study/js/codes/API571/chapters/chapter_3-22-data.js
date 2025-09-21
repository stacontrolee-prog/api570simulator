// Registrar el capítulo 3.22 de API 571
registerChapter('API571', {
    id: '3.22',
    title: "Corrosion Under Insulation",
    titleEs: "Corrosión Bajo Aislamiento",
    content: `<h3>3.22 Corrosion Under Insulation</h3>
    <div class="subsection">
        <h4>3.22.1 Description of Damage</h4>
        <p>Corrosion of piping, pressure vessels, and structural components resulting from water trapped under insulation or fireproofing.</p>
    </div>
    <div class="subsection">
        <h4>3.22.2 Affected Materials</h4>
        <p>Carbon steel, low-alloy steels, 300 series SS, 400 series SS, and duplex stainless steels.</p>
    </div>
    <div class="subsection">
        <h4>3.22.3 Critical Factors</h4>
        <p>a) Temperature, duration of wetting, design of the insulation system, insulation type, and environment are critical factors.</p>
        <p>Corrosion rates increase with increasing metal temperature up to the point where the water evaporates quickly. While water boils or steams off above the boiling temperature, 212 °F (100 °C), it does not do so instantaneously. It takes some amount of time for water to boil off and wet insulation to dry out. During this time, the metal is corroding. The higher the temperature above the boiling point, the faster the water will evaporate and the insulation will dry out. However, with a high enough rate of wetting and replenishment of the water in the wet insulation, CUI can occur on equipment operating at virtually any temperature of practical concern in refining.</p>
        <p>In most situations, and as a practical matter, refiners generally focus their CUI management efforts on insulated carbon steel, low-alloy steel, and 400 series SS equipment operating between 10 °F (−12 °C) and 350 °F (175 °C).</p>
        <p>For 300 series SS, where Cl<sup>−</sup> SCC is the concern, refiners generally focus on the temperature range of 140 °F (60 °C) to 350 °F (175 °C).</p>
        <p>For duplex stainless steel, where Cl<sup>−</sup> SCC is the concern, refiners generally focus on the temperature range of 280 °F (140 °C) to 350 °F (175 °C).</p>
        <p>b) The extent of CUI attack depends on the total amount of time the equipment remains wet from exposure to wet insulation. Therefore, while a higher operating temperature will result in a higher corrosion rate, the total amount of attack over a long period of time may occur at a lower temperature if the metal remains wet for significantly longer periods of time at the lower temperature. This is one of the reasons why CUI corrosion rates are difficult to predict.</p>
        <p>c) Poor design or installation of insulation systems that allow water to become trapped will increase CUI.</p>
        <p>d) Insulating materials that wick moisture can hold water and be more prone to causing extensive CUI.</p>
        <p>e) Insulating materials that dry out slowly can be more prone to causing extensive CUI.</p>
        <p>f) Cyclic thermal operation or intermittent service can increase corrosion.</p>
        <p>g) Equipment that operates below the water dew point tends to condense water on the metal surface, thus providing a wet environment and increasing the risk of corrosion.</p>
        <p>h) Damage is aggravated by contaminants that may be leached out of the insulation, such as chlorides.</p>
        <p>i) Plants located in areas with high annual rainfall or warmer marine locations are more prone to CUI than plants located in cool and dry or warm and dry locations.</p>
        <p>j) Environments that provide airborne contaminants such as chlorides (e.g. from marine environments or cooling tower drift) or SO<sub>2</sub> (e.g. from stack emissions) can accelerate corrosion.</p>
    </div>
    <div class="subsection">
        <h4>3.22.4 Affected Units or Equipment</h4>
        <p>a) All insulated piping and equipment are susceptible to CUI under the conditions noted above, even piping and equipment where the insulation system appears to be in good condition and no visual signs of corrosion are present.</p>
        <p>b) Examples of locations where CUI can occur are listed below.</p>
        <p>CUI can be found on equipment with damaged insulation, insulation jacketing, vapor barriers, weatherproofing or mastic, or where caulking has hardened, separated, or is missing.</p>
        <p>CUI can occur where water gains access at protrusions through the insulation or at insulation termination points such as flanges.</p>
        <p>Piping components and locations that are particularly susceptible include dead-legs (vents, drains, and other similar items), pipe hangers and other supports, valves and fittings with irregular insulation surfaces, bolted-on pipe shoes, steam tracing tube or heat tracing wire penetrations, at the terminations of insulation at flanges or other piping components, at the termination of insulation in vertical pipe, and the first few feet of a horizontal pipe run adjacent to the bottom of a vertical run.</p>
        <p>Piping or equipment with damaged and leaking steam tracing is susceptible.</p>
        <p>Vibrating piping systems have a tendency to inflict damage to insulation jacketing providing a path for water ingress.</p>
        <p>Insulation jacketing seams located on the top of horizontal piping or improperly lapped or sealed insulation jacketing can lead to CUI.</p>
        <p>Locations where moisture or trapped water will naturally collect due to gravity drainage before evaporating such as low points in piping runs and insulation support rings on vertical columns, as well as improperly terminated fireproofing.</p>
        <p>Equipment designed with insulation support rings welded directly to the vessel wall (i.e. with no standoff) can be susceptible, particularly around ladder and platform clips, lifting lugs, nozzles, and stiffener rings.</p>
        <p>CUI can occur in carbon or low-alloy steel flanges, bolting, and other components under insulation in high-alloy piping systems.</p>
        <p>Locations where insulation plugs have been removed to permit piping thickness measurements on insulated piping and equipment are a potential source of water ingress.</p>
        <p>Where piping and equipment have been coated beneath the insulation, localized CUI can still occur where the coating has deteriorated or been damaged.</p>
        <p>Equipment subjected to long-term or frequent water spray, e.g. from firefighting, fire equipment testing, or supplemental externally applied cooling, is highly susceptible to CUI.</p>
        <p>300 series SS equipment insulated with older calcium silicate insulation, which is known to contain high levels of chlorides, can suffer pitting, crevice corrosion, and Cl<sup>−</sup> SCC.</p>
    </div>
    <div class="subsection">
        <h4>3.22.5 Appearance or Morphology of Damage</h4>
        <p>a) Carbon steel and low-alloy steels are subject to corrosion having a rough, uneven, somewhat pitted appearance, usually covered with a loose, flaky, non-protective scale attached. The corrosion will be localized to wherever the metal has been kept wet by wet insulation.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-22-1—Piping tee in a 1000 psig ethylene line before insulation removal.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-22-2—Close-up of the tee in Figure 3-22-1 after insulation removal.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-22-3—CUI of a 30-in. carbon steel butadiene line showing highly localized corrosion that could only be found by stripping the entire line. Note the 0.25-in. (6.5-mm) diameter hole at arrow.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-4.png" class="figure-image">
            <p class="figure-caption">Figure 3-22-4—CUI of a nozzle on the bottom head of a pressure vessel.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-5.png" class="figure-image">
            <p class="figure-caption">Figure 3-22-5—CUI of a nozzle on the top head of a pressure vessel.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-6.png" class="figure-image">
            <p class="figure-caption">Figure 3-22-6—CUI of a vessel wall. Note the leak at the arrow.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-7.png" class="figure-image">
            <p class="figure-caption">Figure 3-22-7—CUI at attachment supports and on the vessel head.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-8.png" class="figure-image">
            <p class="figure-caption">Figure 3-22-8—CUI of a carbon steel level bridle.</p>
        </div>
        
        <p>b) In some cases, the corrosion can appear to be carbuncle-type pitting (usually found under failed coating).</p>
        <p>c) 300 series SS are subject to SCC if chlorides are present. While the duplex stainless steels are less susceptible, SCC failures have occurred in duplex stainless steel due to CUI.</p>
        <p>d) 300 series SS and duplex stainless steel are subject to pitting and crevice corrosion.</p>
        <p>e) Telltale signs of CUI include insulation jacketing damage, bulges or staining of the insulation or jacketing, missing bands, coating damage, or vegetation growing out of the insulation. Bulges may indicate corrosion product buildup.</p>
    </div>
    <div class="subsection">
        <h4>3.22.6 Prevention/Mitigation</h4>
        <p>a) Since most construction materials used in refining are susceptible to CUI damage, mitigation is best achieved by applying an appropriate coating to the equipment prior to insulating.</p>
        <p>High-quality, immersion-resistant nonmetallic coatings, properly applied to the surfaces to be insulated, can provide long-term protection.</p>
        <p>Flame-sprayed aluminum coatings have been used on carbon steels. The coating corrodes preferentially by galvanic action, thereby protecting the base metal.</p>
        <p>b) Insulation, insulation jacketing, sealants, and vapor barriers should be properly maintained to prevent moisture ingress.</p>
        <p>c) Thin aluminum foil wrapped on stainless steel piping and equipment beneath the insulation can provide an effective barrier, partly due to the galvanic effect of the aluminum in preventing Cl<sup>−</sup> SCC in stainless steel.</p>
        <p>d) Careful selection of insulating materials is important. Both water absorption properties and water retention characteristics are important and should be considered. Some insulating materials absorb little water but still trap water against the pipe or equipment for an extended time because water removal is slow. While closed cell foam glass materials will hold less water and, therefore, might be less prone to causing CUI, studies show that an open cell structure provides a path for water vapor to escape faster, allowing the insulation to dry quicker. Faster drying time, corresponding to less metal wetting time, should help mitigate CUI.</p>
        <p>Types of open cell insulation that limit and delay water ingress have been developed.</p>
        <p>Water absorption and retention properties of insulation materials can be tested per EN 13472 or ASTM C1134.</p>
        <p>e) Insulation with added corrosion inhibitor is available.</p>
        <p>f) Low-chloride insulation should be used on 300 series SS to minimize the potential for pitting and Cl<sup>−</sup> SCC.</p>
        <p>Some manufacturers supply insulation certified to be low chloride. Thermal insulation materials can be tested per ASTM C871 to evaluate chloride content and/or ensure it satisfies a specified limit.</p>
        <p>g) Insulation plugs removed for UT thickness measurements should be promptly replaced and sealed. Several types of removable plugs that permit inspection and identification of inspection points are commercially available.</p>
        <p>h) Consider available alternatives in order to avoid the use of insulation where practical.</p>
        <p>Personnel protection from hot piping can be provided using metal-cage-type standoffs rather than insulation.</p>
        <p>It is not usually possible to modify operating conditions; however, consideration should be given to removing the insulation on equipment where heat conservation is not as important.</p>
    </div>
    <div class="subsection">
        <h4>3.22.7 Inspection and Monitoring</h4>
        <p>a) An inspection plan for CUI should be a structured, systematic approach starting with prediction and analysis per the CUI planning information contained in API 510, API 570, and API 583. [API 583 was created specifically for CUI/CUF (corrosion under fireproofing) and should be referenced for a deeper understanding of inspection for these damage mechanisms.] The inspection plan should consider:</p>
        <ul>
            <li>history of CUI leaks,</li>
            <li>operating temperatures that may give rise to CUI,</li>
            <li>type and age/condition of coating, and</li>
            <li>type, age, and condition of the insulation material.</li>
        </ul>
        <p>b) Additionally, an external VT of the equipment, looking for evidence of insulation system damage, mastic and/or sealant damage, signs of water penetration, rust in gravity drain areas on equipment and piping, and signs of process fluid leaks, will help prioritize the effort.</p>
        <p>c) Although external insulation may appear to be in good condition, CUI damage may still be occurring in isolated areas not thought to be susceptible. The owner/user generally determines the extent of CUI inspection, including the extent of insulation removal for inspection, based on inspection and CUI history and other factors as described above.</p>
        <p>An effective way to find all CUI damage is complete removal of insulation and inspection for damage using VT, UT, and/or a pit gage, as applicable, for determining remaining thickness, or PT to examine for external Cl<sup>−</sup> SCC of austenitic stainless steels.</p>
        <p>Inspection by RT (density and/or profile) or UT thickness inspection (e.g. using high-resolution pigging) can also provide a high level of CUI detection confidence, depending on the extent of inspection, i.e. the percent of potentially affected piping inspected.</p>
        <p>In some instances, insulation "windowing" can be used to remove insulation in selected areas thought to be more susceptible to CUI damage than others and inspecting for damage using VT, UT, and/or a pit gage, as applicable, for determining remaining thickness, or PT to examine for external Cl<sup>−</sup> SCC of austenitic stainless steels. However, this may be less effective than complete insulation removal.</p>
        <p>d) Non-invasive, commercially available methods can be used to identify either wet insulation or CUI damage under the insulation without removing the insulation; however, these methods should not be expected to find 100 % of the damage. Each of these methods is discussed in API 583, including advantages and disadvantages of each. Most are screening techniques that may help identify where there is a higher probability of CUI damage and where insulation stripping may be needed to further assess and quantify the damage. These methods include, but may not be limited to:</p>
        <ul>
            <li>GWT;</li>
            <li>RT (including profile, density, flash, radiometric profiling, real-time, computed, and digital);</li>
            <li>PEC;</li>
            <li>neutron backscatter (for identifying wet insulation); and</li>
            <li>infrared thermography imaging (for identifying wet insulation).</li>
        </ul>
        <p>e) Common areas of higher CUI concern in process units are high-moisture areas such as those down-wind from cooling towers (the drift zone), near steam vents, under deluge systems, exposed to acid vapors, or near supplemental cooling with water spray.</p>
    </div>
    <div class="subsection">
        <h4>3.22.8 Related Mechanisms</h4>
        <p>Atmospheric corrosion (3.8), oxidation (3.48), oxygenated water corrosion (3.49), concentration cell corrosion (3.19), and Cl<sup>−</sup> SCC (3.17).</p>
    </div>
    <div class="subsection">
        <h4>3.22.9 References</h4>
        <p>1. API Recommended Practice 583, Corrosion Under Insulation and Fireproofing, American Petroleum Institute, Washington, DC.</p>
        <p>2. API Recommended Practice 581, Risk-Based Inspection Methodology, American Petroleum Institute, Washington, DC.</p>
        <p>3. NACE Standard SP0198, Control of Corrosion Under Thermal Insulation and Fireproofing Materials—A Systems Approach, NACE International, Houston, TX.</p>
        <p>4. W.I. Pollock and C.N. Steely, Corrosion Under Wet Thermal Insulation, NACE International, Houston, TX, 1990.</p>
        <p>5. M.M. Chauviere et al., "Managing CUI in Aging Refinery Pressure Vessels," Paper No. 07566, Corrosion/2007, NACE International, Houston, TX.</p>
        <p>6. API 510, Pressure Vessel Inspection Code: In-Service Inspection, Rating, Repair, and Alteration, American Petroleum Institute, Washington, DC.</p>
        <p>7. API 570, Piping Inspection Code: In-service Inspection, Repair, and Alteration of Piping Systems, American Petroleum Institute, Washington, DC.</p>
        <p>8. A.C. Haaland, "Designing against CUI—What Are the Implications of the Test Method Chosen?" Paper No. RISK16-8742, Corrosion Risk Management Conference, NACE International, Houston, TX, May 2016.</p>
        <p>9. C. Zwaag and S.N. Rasmussen, "Cyclic CUI Testing of Insulation Materials," Paper No. 8877, Corrosion/2017, NACE International, Houston, TX.</p>
        <p>10. EN 13472, Thermal Insulating Products for Building Equipment and Industrial Installations—Determination of Short Term Water Absorption by Partial Immersion of Preformed Pipe Insulation, Available as CSN EN 13472, DIN EN 13472, and BS 13472, European Committee for Standardization, Brussels, Belgium.</p>
    </div>
    `,
    contentEs: `<h3>3.22 Corrosión Bajo Aislamiento</h3>
    <div class="subsection">
        <h4>3.22.1 Descripción del Daño</h4>
        <p>Corrosión de tuberías, recipientes a presión y componentes estructurales resultante de agua atrapada bajo aislamiento o protección contra incendios.</p>
    </div>
    <div class="subsection">
        <h4>3.22.2 Materiales Afectados</h4>
        <p>Acero al carbono, aceros de baja aleación, aceros inoxidables serie 300, aceros inoxidables serie 400 y aceros inoxidables dúplex.</p>
    </div>
    <div class="subsection">
        <h4>3.22.3 Factores Críticos</h4>
        <p>a) La temperatura, duración de la humectación, diseño del sistema de aislamiento, tipo de aislamiento y el ambiente son factores críticos.</p>
        <p>Las tasas de corrosión aumentan con el aumento de la temperatura del metal hasta el punto en que el agua se evapora rápidamente. Aunque el agua hierve o se evapora por encima de la temperatura de ebullición, 212 °F (100 °C), no lo hace instantáneamente. Se necesita una cierta cantidad de tiempo para que el agua hierva y el aislamiento húmedo se seque. Durante este tiempo, el metal se está corroyendo. Cuanto más alta sea la temperatura por encima del punto de ebullición, más rápido se evaporará el agua y se secará el aislamiento. Sin embargo, con una tasa suficientemente alta de humectación y reposición del agua en el aislamiento húmedo, la CUI puede ocurrir en equipos que operan prácticamente a cualquier temperatura de interés práctico en la refinación.</p>
        <p>En la mayoría de las situaciones, y como cuestión práctica, los refinadores generalmente concentran sus esfuerzos de gestión de CUI en equipos de acero al carbono, acero de baja aleación y acero inoxidable serie 400 aislados que operan entre 10 °F (-12 °C) y 350 °F (175 °C).</p>
        <p>Para los aceros inoxidables serie 300, donde la preocupación es el SCC por Cl<sup>−</sup>, los refinadores generalmente se centran en el rango de temperatura de 140 °F (60 °C) a 350 °F (175 °C).</p>
        <p>Para los aceros inoxidables dúplex, donde la preocupación es el SCC por Cl<sup>−</sup>, los refinadores generalmente se centran en el rango de temperatura de 280 °F (140 °C) a 350 °F (175 °C).</p>
        <p>b) La extensión del ataque por CUI depende de la cantidad total de tiempo que el equipo permanece húmedo debido a la exposición al aislamiento húmedo. Por lo tanto, aunque una temperatura de operación más alta resultará en una tasa de corrosión más alta, la cantidad total de ataque durante un largo período de tiempo puede ocurrir a una temperatura más baja si el metal permanece húmedo por períodos de tiempo significativamente más largos a la temperatura más baja. Esta es una de las razones por las que las tasas de corrosión por CUI son difíciles de predecir.</p>
        <p>c) El diseño o instalación deficiente de sistemas de aislamiento que permitan que el agua quede atrapada aumentará la CUI.</p>
        <p>d) Los materiales aislantes que absorben humedad pueden retener agua y ser más propensos a causar CUI extensa.</p>
        <p>e) Los materiales aislantes que se secan lentamente pueden ser más propensos a causar CUI extensa.</p>
        <p>f) La operación térmica cíclica o el servicio intermitente pueden aumentar la corrosión.</p>
        <p>g) El equipo que opera por debajo del punto de rocío del agua tiende a condensar agua en la superficie del metal, proporcionando así un ambiente húmedo y aumentando el riesgo de corrosión.</p>
        <p>h) El daño se agrava por contaminantes que pueden lixiviarse del aislamiento, como los cloruros.</p>
        <p>i) Las plantas ubicadas en áreas con alta precipitación anual o ubicaciones marinas más cálidas son más propensas a la CUI que las plantas ubicadas en lugares frescos y secos o cálidos y secos.</p>
        <p>j) Los ambientes que proporcionan contaminantes atmosféricos como cloruros (por ejemplo, de ambientes marinos o arrastre de torres de enfriamiento) o SO<sub>2</sub> (por ejemplo, de emisiones de chimenea) pueden acelerar la corrosión.</p>
    </div>
    <div class="subsection">
        <h4>3.22.4 Unidades o Equipos Afectados</h4>
        <p>a) Toda la tubería y equipos aislados son susceptibles a la CUI bajo las condiciones mencionadas anteriormente, incluso tuberías y equipos donde el sistema de aislamiento parece estar en buenas condiciones y no hay signos visibles de corrosión.</p>
        <p>b) A continuación se enumeran ejemplos de ubicaciones donde puede ocurrir CUI.</p>
        <p>La CUI puede encontrarse en equipos con aislamiento dañado, chaqueta de aislamiento, barreras de vapor, protección contra intemperie o mástico, o donde el sellador se ha endurecido, separado o falta.</p>
        <p>La CUI puede ocurrir donde el agua accede en salientes a través del aislamiento o en puntos de terminación del aislamiento como bridas.</p>
        <p>Los componentes y ubicaciones de tuberías particularmente susceptibles incluyen ramas muertas (ventilaciones, drenajes y otros elementos similares), soportes de tubería y otros soportes, válvulas y accesorios con superficies de aislamiento irregulares, zapatas de tubería atornilladas, penetraciones de tubo de rastreo de vapor o cable de rastreo térmico, en las terminaciones del aislamiento en bridas u otros componentes de tubería, en la terminación del aislamiento en tubería vertical, y los primeros pies de un tramo horizontal de tubería adyacente a la parte inferior de un tramo vertical.</p>
        <p>La tubería o equipos con rastreo de vapor dañado y con fugas son susceptibles.</p>
        <p>Los sistemas de tubería vibrantes tienen tendencia a causar daños a la chaqueta de aislamiento, proporcionando una ruta para la entrada de agua.</p>
        <p>Las juntas de la chaqueta de aislamiento ubicadas en la parte superior de tuberías horizontales o chaquetas de aislamiento superpuestas o selladas incorrectamente pueden llevar a la CUI.</p>
        <p>Ubicaciones donde la humedad o el agua atrapada naturalmente se acumulará debido al drenaje por gravedad antes de evaporarse, como puntos bajos en tramos de tubería y anillos de soporte de aislamiento en columnas verticales, así como protección contra incendios terminada incorrectamente.</p>
        <p>El equipo diseñado con anillos de soporte de aislamiento soldados directamente a la pared del recipiente (es decir, sin separación) puede ser susceptible, particularmente alrededor de clips de escalera y plataforma, orejas de izaje, boquillas y anillos de rigidización.</p>
        <p>La CUI puede ocurrir en bridas, pernos y otros componentes de acero al carbono o baja aleación bajo aislamiento en sistemas de tuberías de alta aleación.</p>
        <p>Las ubicaciones donde se han quitado tapones de aislamiento para permitir mediciones de espesor de tubería en tuberías y equipos aislados son una fuente potencial de entrada de agua.</p>
        <p>Donde la tubería y los equipos han sido recubiertos debajo del aislamiento, aún puede ocurrir CUI localizada donde el recubrimiento se ha deteriorado o dañado.</p>
        <p>El equipo sometido a rociado de agua a largo plazo o frecuente, por ejemplo, de lucha contra incendios, pruebas de equipos contra incendios o enfriamiento suplementar aplicado externamente, es altamente susceptible a la CUI.</p>
        <p>El equipo de acero inoxidable serie 300 aislado con aislamiento de silicato de calcio más antiguo, que se sabe que contiene altos niveles de cloruros, puede sufrir picaduras, corrosión por rendija y SCC por Cl<sup>−</sup>.</p>
    </div>
    <div class="subsection">
        <h4>3.22.5 Apariencia o Morfología del Daño</h4>
        <p>a) El acero al carbono y los aceros de baja aleación están sujetos a corrosión con una apariencia rugosa, desigual, algo picada, generalmente cubierta con una costra suelta, escamosa y no protectora adherida. La corrosión se localizará dondequiera que el metal se haya mantenido húmedo por el aislamiento húmedo.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-22-1—Tee de tubería en una línea de etileno de 1000 psig antes de la eliminación del aislamiento.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-22-2—Acercamiento del tee en la Figura 3-22-1 después de la eliminación del aislamiento.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-22-3—CUI de una línea de butadieno de acero al carbono de 30 pulgadas que muestra corrosión altamente localizada que solo pudo encontrarse eliminando toda la línea. Nótese el orificio de 0.25 pulgadas (6.5 mm) de diámetro en la flecha.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-4.png" class="figure-image">
            <p class="figure-caption">Figura 3-22-4—CUI de una boquilla en el fondo inferior de un recipiente a presión.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-5.png" class="figure-image">
            <p class="figure-caption">Figura 3-22-5—CUI de una boquilla en el fondo superior de un recipiente a presión.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-6.png" class="figure-image">
            <p class="figure-caption">Figura 3-22-6—CUI de la pared de un recipiente. Nótese la fuga en la flecha.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-7.png" class="figure-image">
            <p class="figure-caption">Figura 3-22-7—CUI en soportes de fijación y en el fondo del recipiente.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-22-8.png" class="figure-image">
            <p class="figure-caption">Figura 3-22-8—CUI de un puente de nivel de acero al carbono.</p>
        </div>
        
        <p>b) En algunos casos, la corrosión puede parecer picaduras tipo carbunclo (generalmente encontradas bajo recubrimiento fallido).</p>
        <p>c) Los aceros inoxidables serie 300 están sujetos a SCC si hay cloruros presentes. Aunque los aceros inoxidables dúplex son menos susceptibles, han ocurrido fallas por SCC en aceros inoxidables dúplex debido a la CUI.</p>
        <p>d) Los aceros inoxidables serie 300 y dúplex están sujetos a picaduras y corrosión por rendija.</p>
        <p>e) Los signos reveladores de CUI incluyen daños en la chaqueta de aislamiento, abultamientos o manchas en el aislamiento o la chaqueta, bandas faltantes, daños en el recubrimiento o vegetación que crece fuera del aislamiento. Los abultamientos pueden indicar acumulación de productos de corrosión.</p>
    </div>
    <div class="subsection">
        <h4>3.22.6 Prevención/Mitigación</h4>
        <p>a) Dado que la mayoría de los materiales de construcción utilizados en la refinación son susceptibles al daño por CUI, la mitigación se logra mejor aplicando un recubrimiento adecuado al equipo antes de aislar.</p>
        <p>Los recubrimientos no metálicos de alta calidad, resistentes a la inmersión, aplicados adecuadamente a las superficies que se aislarán, pueden proporcionar protección a largo plazo.</p>
        <p>Se han utilizado recubrimientos de aluminio rociados con llama en aceros al carbono. El recubrimiento se corroe preferentemente por acción galvánica, protegiendo así el metal base.</p>
        <p>b) El aislamiento, la chaqueta de aislamiento, los selladores y las barreras de vapor deben mantenerse adecuadamente para evitar la entrada de humedad.</p>
        <p>c) El papel de aluminio delgado envuelto en tuberías y equipos de acero inoxidable debajo del aislamiento puede proporcionar una barrera efectiva, partly debido al efecto galvánico del aluminio en la prevención del SCC por Cl<sup>−</sup> en acero inoxidable.</p>
        <p>d) La selección cuidadosa de los materiales aislantes es importante. Tanto las propiedades de absorción de agua como las características de retención de agua son importantes y deben considerarse. Algunos materiales aislantes absorben poca agua pero aún atrapan agua contra la tubería o el equipo durante un tiempo prolongado porque la eliminación del agua es lenta. Aunque los materiales de espuma de celda cerrada retendrán menos agua y, por lo tanto, podrían ser menos propensos a causar CUI, los estudios muestran que una estructura de celda abierta proporciona una ruta para que el vapor de agua escape más rápido, permitiendo que el aislamiento se seque más rápido. Un tiempo de secado más rápido, correspondiente a menos tiempo de humectación del metal, debería ayudar a mitigar la CUI.</p>
        <p>Se han desarrollado tipos de aislamiento de celda abierta que limitan y retrasan la entrada de agua.</p>
        <p>Las propiedades de absorción y retención de agua de los materiales aislantes pueden probarse según EN 13472 o ASTM C1134.</p>
        <p>e) Está disponible aislamiento con inhibidor de corrosión añadido.</p>
        <p>f) Debe usarse aislamiento con bajo contenido de cloruros en los aceros inoxidables serie 300 para minimizar el potencial de picaduras y SCC por Cl<sup>−</sup>.</p>
        <p>Algunos fabricantes suministran aislamiento certificado como bajo en cloruros. Los materiales de aislamiento térmico pueden probarse según ASTM C871 para evaluar el contenido de cloruros y/o asegurar que satisfaga un límite especificado.</p>
        <p>g) Los tapones de aislamiento eliminados para mediciones de espesor UT deben reemplazarse y sellarse rápidamente. Varios tipos de tapones removibles que permiten inspección e identificación de puntos de inspección están disponibles comercialmente.</p>
        <p>h) Considere las alternativas disponibles para evitar el uso de aislamiento cuando sea práctico.</p>
        <p>La protección del personal contra tuberías calientes puede proporcionarse usando soportes tipo jaula de metal en lugar de aislamiento.</p>
        <p>Generalmente no es posible modificar las condiciones de operación; sin embargo, debe considerarse la posibilidad de eliminar el aislamiento en equipos donde la conservación del calor no es tan importante.</p>
    </div>
    <div class="subsection">
        <h4>3.22.7 Inspección y Monitoreo</h4>
        <p>a) Un plan de inspección para CUI debe ser un enfoque estructurado y sistemático que comience con la predicción y análisis según la información de planificación de CUI contenida en API 510, API 570 y API 583. [API 583 fue creada específicamente para CUI/CUF (corrosión bajo protección contra incendios) y debe consultarse para una comprensión más profunda de la inspección para estos mecanismos de daño.] El plan de inspección debe considerar:</p>
        <ul>
            <li>historial de fugas por CUI,</li>
            <li>temperaturas de operación que pueden dar lugar a CUI,</li>
            <li>tipo y edad/condición del recubrimiento, y</li>
            <li>tipo, edad y condición del material de aislamiento.</li>
        </ul>
        <p>b) Además, una VT externa del equipo, buscando evidencia de daños en el sistema de aislamiento, daños en el mástico y/o sellador, signos de penetración de agua, óxido en áreas de drenaje por gravedad en equipos y tuberías, y signos de fugas de fluido de proceso, ayudará a priorizar el esfuerzo.</p>
        <p>c) Aunque el aislamiento externo pueda parecer estar en buenas condiciones, el daño por CUI aún puede estar ocurriendo en áreas aisladas que no se consideran susceptibles. El propietario/usuario generalmente determina el alcance de la inspección de CUI, incluido el alcance de la eliminación del aislamiento para inspección, basándose en el historial de inspección y CUI y otros factores como se describió anteriormente.</p>
        <p>Una forma efectiva de encontrar todo el daño por CUI es la eliminación completa del aislamiento y la inspección de daños usando VT, UT y/o un medidor de picaduras, según corresponda, para determinar el espesor restante, o PT para examinar el SCC por Cl<sup>−</sup> externo de aceros inoxidables austeníticos.</p>
        <p>La inspección por RT (densidad y/o perfil) o inspección de espesor UT (por ejemplo, usando pigging de alta resolución) también puede proporcionar un alto nivel de confianza en la detección de CUI, dependiendo del alcance de la inspección, es decir, el porcentaje de tubería potencialmente afectada inspeccionada.</p>
        <p>En algunos casos, se puede usar "ventaneo" del aislamiento para eliminar el aislamiento en áreas seleccionadas que se consideran más susceptibles al daño por CUI que otras e inspeccionar daños usando VT, UT y/o un medidor de picaduras, según corresponda, para determinar el espesor restante, o PT para examinar el SCC por Cl<sup>−</sup> externo de aceros inoxidables austeníticos. Sin embargo, esto puede ser menos efectivo que la eliminación completa del aislamiento.</p>
        <p>d) Pueden usarse métodos no invasivos disponibles comercialmente para identificar aislamiento húmedo o daño por CUI bajo el aislamiento sin eliminar el aislamiento; sin embargo, no debe esperarse que estos métodos encuentren el 100 % del daño. Cada uno de estos métodos se discute en API 583, incluyendo ventajas y desventajas de cada uno. La mayoría son técnicas de detección que pueden ayudar a identificar dónde hay una mayor probabilidad de daño por CUI y dónde puede ser necesario quitar el aislamiento para evaluar y cuantificar aún más el daño. Estos métodos incluyen, pero no se limitan a:</p>
        <ul>
            <li>GWT;</li>
            <li>RT (incluyendo perfil, densidad, flash, perfil radiométrico, tiempo real, computarizado y digital);</li>
            <li>PEC;</li>
            <li>retrodispersión de neutrones (para identificar aislamiento húmedo); y</li>
            <li>imágenes de termografía infrarroja (para identificar aislamiento húmedo).</li>
        </ul>
        <p>e) Las áreas comunes de mayor preocupación por CUI en las unidades de proceso son áreas de alta humedad como aquellas a sotavento de las torres de enfriamiento (la zona de arrastre), cerca de ventilaciones de vapor, bajo sistemas de rociado, expuestas a vapores ácidos, o cerca de enfriamiento suplementario con rociado de agua.</p>
    </div>
    <div class="subsection">
        <h4>3.22.8 Mecanismos Relacionados</h4>
        <p>Corrosión atmosférica (3.8), oxidación (3.48), corrosión por agua oxigenada (3.49), corrosión por celda de concentración (3.19) y SCC por Cl<sup>−</sup> (3.17).</p>
    </div>
    <div class="subsection">
        <h4>3.22.9 Referencias</h4>
        <p>1. API Recommended Practice 583, Corrosion Under Insulation and Fireproofing, American Petroleum Institute, Washington, DC.</p>
        <p>2. API Recommended Practice 581, Risk-Based Inspection Methodology, American Petroleum Institute, Washington, DC.</p>
        <p>3. NACE Standard SP0198, Control of Corrosion Under Thermal Insulation and Fireproofing Materials—A Systems Approach, NACE International, Houston, TX.</p>
        <p>4. W.I. Pollock y C.N. Steely, Corrosion Under Wet Thermal Insulation, NACE International, Houston, TX, 1990.</p>
        <p>5. M.M. Chauviere et al., "Managing CUI in Aging Refinery Pressure Vessels," Paper No. 07566, Corrosion/2007, NACE International, Houston, TX.</p>
        <p>6. API 510, Pressure Vessel Inspection Code: In-Service Inspection, Rating, Repair, and Alteration, American Petroleum Institute, Washington, DC.</p>
        <p>7. API 570, Piping Inspection Code: In-service Inspection, Repair, and Alteration of Piping Systems, American Petroleum Institute, Washington, DC.</p>
        <p>8. A.C. Haaland, "Designing against CUI—What Are the Implications of the Test Method Chosen?" Paper No. RISK16-8742, Corrosion Risk Management Conference, NACE International, Houston, TX, May 2016.</p>
        <p>9. C. Zwaag y S.N. Rasmussen, "Cyclic CUI Testing of Insulation Materials," Paper No. 8877, Corrosion/2017, NACE International, Houston, TX.</p>
        <p>10. EN 13472, Thermal Insulating Products for Building Equipment and Industrial Installations—Determination of Short Term Water Absorption by Partial Immersion of Preformed Pipe Insulation, Available as CSN EN 13472, DIN EN 13472, and BS 13472, European Committee for Standardization, Brussels, Belgium.</p>
    </div>
    `
});