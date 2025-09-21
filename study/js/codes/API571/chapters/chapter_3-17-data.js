// Registrar el capítulo 3.17 de API 571
registerChapter('API571', {
    id: '3.17',
    title: "Chloride Stress Corrosion Cracking",
    titleEs: "Agrietamiento por Corrosión bajo Tensión por Cloruros",
    content: `<h3>3.17 Chloride Stress Corrosion Cracking</h3>
    <div class="subsection">
        <h4>3.17.1 Description of Damage</h4>
        <p>Surface initiated cracking of 300 series SS and some nickel-based alloys under the combined action of tensile stress, temperature, and an aqueous chloride environment. It is also referred to as chloride cracking.</p>
    </div>
    <div class="subsection">
        <h4>3.17.2 Affected Materials</h4>
        <p>a) All 300 series SS are highly susceptible. Welds in 300 series SS normally contain some ferrite, producing a duplex structure that is usually more resistant to chloride stress corrosion cracking (Cl<sup>–</sup> SCC) than the base metal.</p>
        <p>b) Duplex stainless steels are more resistant but still susceptible.</p>
        <p>c) Nickel-based alloys are highly resistant but not immune.</p>
    </div>
    <div class="subsection">
        <h4>3.17.3 Critical Factors</h4>
        <p>a) Chloride content, temperature, pH, tensile stress, presence of oxygen, and alloy composition are critical factors.</p>
        <p>b) Cl<sup>−</sup> SCC is caused by the inorganic chloride ion (Cl<sup>−</sup>) (or other inorganic halide ions such as bromide, in which case it might be named differently). Organic chlorides will not directly cause Cl<sup>−</sup> SCC, but they can, and typically do, produce ionic, inorganic chlorides by the processes of hydrolysis or thermal decomposition (pyrolysis). Therefore, organic chlorides can lead to Cl<sup>−</sup> SCC.</p>
        <p>c) Increasing levels of chloride increase the likelihood of cracking.</p>
        <p>No practical lower limit for chlorides exists because of the potential for chlorides to concentrate. For example, heat transfer conditions, as on the surface of exchanger tubes, significantly increase cracking potential. Repetitive wetting and drying situations, including alternating steam and water, can also lead to cracking.</p>
        <p>Non-condensing systems will be a particular concern, because the chlorides cannot be removed with the water phase.</p>
        <p>d) Increasing temperatures increase the potential for cracking, as long as the other required elements (stress and aqueous chloride solution) are present concurrently.</p>
        <p>Although there are exceptions at lower temperatures and even ambient temperature, particularly with highly cold worked or sensitized materials, cracking usually occurs at metal temperatures above about 140 °F (60 °C), and experience has shown this to be a useful temperature limit guideline for fixed equipment in the refining industry.</p>
        <p>e) The potential for cracking increases at lower pH; however, SCC usually does not occur at pH values below 2. At these lower pH values, uniform corrosion generally predominates. Cl<sup>−</sup> SCC tendency decreases toward the alkaline pH region; however, stainless steels and some nickel-based alloys (e.g. Alloy 800 and Alloy 825) can suffer caustic SCC in alkaline environments. (See 3.15.)</p>
        <p>f) The tensile stress may be applied or residual. The most common area of concern is non-stress-relieved welds. However, highly stressed or cold worked components, such as expansion bellows, are also highly susceptible to cracking.</p>
        <p>g) Oxygen dissolved in the water normally accelerates SCC, but it is not clear whether there is an oxygen concentration threshold below which Cl<sup>−</sup> SCC does not occur. Other oxidizers in addition to oxygen (e.g. CO and CO<sub>2</sub>) can also enhance Cl<sup>−</sup> SCC.</p>
        <p>h) Nickel content of the alloy has a major effect on resistance. The greatest susceptibility occurs in stainless steels with a nickel content of 8 % to 12 %.</p>
        <p>Alloys with nickel contents above 35 % are highly resistant, and alloys above 45 % are nearly immune in refining applications, but cracking can still occur in severe conditions.</p>
        <p>Low-nickel stainless steels, such as the duplex (ferrite-austenite) stainless steels, have improved resistance over the 300 series SS but are not immune.</p>
    </div>
    <div class="subsection">
        <h4>3.17.4 Affected Units or Equipment</h4>
        <p>a) Most non-stress-relieved 300 series SS piping and equipment in any process unit are susceptible to Cl<sup>−</sup> SCC. Even if the process side will not cause SCC, if the piping or equipment operates above 140 °F (60 °C), it is likely exposed to alternating wet and dry conditions on the outside.</p>
        <p>b) Chloride cracking has occurred in water-cooled condensers and on the process side of crude tower overhead condensers.</p>
        <p>c) Stainless steel drains in hydroprocessing units are susceptible to cracking, particularly during start-up, if not properly purged.</p>
        <p>d) Bellows and instrument tubing, particularly those associated with hydrogen recycle streams contaminated with chlorides, can be affected.</p>
        <p>e) External Cl<sup>−</sup> SCC can occur on insulated 300 series SS surfaces when insulation gets wet.</p>
        <p>The operating temperature range of most concern for external Cl<sup>−</sup> SCC is 140 °F (60 °C) to 400 °F (205 °C).</p>
        <p>f) Chloride cracking has occurred in boiler drain lines.</p>
        <p>g) Highly localized Cl<sup>−</sup> SCC has occurred in exchanger tube bundles where the bulk fluid temperature inside the tubes was above the water dew point. Cold fluid entering the shell side caused shock condensation within the tubes and resultant chloride cracking on the tube side.</p>
        <p>h) Units processing or co-processing bio-based or renewable feedstocks (biomass, natural fats and oils, etc.) are particularly susceptible to Cl<sup>−</sup> SCC due to high levels of organic chlorides converting to inorganic chlorides in the reactor effluent.</p>
    </div>
    <div class="subsection">
        <h4>3.17.5 Appearance or Morphology of Damage</h4>
        <p>a) Surface-breaking cracks can occur from the process side or externally under insulation.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-17-1—External cracking of Type 304 SS instrument tubing under insulation.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-17-2—External cracking of Type 304 SS instrument tubing under insulation.</p>
        </div>
        
        <p>b) The component usually shows no visible signs of corrosion.</p>
        <p>c) Characteristic stress corrosion cracks have many branches and may be visually detectable as spider web or craze cracking on the surface.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-17-3—Cracking on the shell side of a Type 316L SS tube in steam service at 450 °F (230 °C) showing tight cracks with a crazed or spider web appearance.</p>
        </div>
        
        <p>d) Metallography of cracked samples typically shows branched, transgranular cracks.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-4.png" class="figure-image">
            <p class="figure-caption">Figure 3-17-4—Photomicrograph of a cross section of the tube in Figure 3-17-3 showing fine branching cracks. (Magnification 50X, unetched.)</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-5.png" class="figure-image">
            <p class="figure-caption">Figure 3-17-5—Another photomicrograph of a cracked tube illustrating the transgranular mode of cracking initiating at the surface. (Etched.)</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-6.png" class="figure-image">
            <p class="figure-caption">Figure 3-17-6—Cl<sup>−</sup> SCC on the thread surface of a failed 303 SS bolt.</p>
        </div>
        
        <p>e) Cracking of sensitized 300 series SS may be intergranular.</p>
        <p>f) Cl<sup>−</sup> SCC in nickel-based alloys, which can occur under severe conditions, appears similar to Cl<sup>−</sup> SCC in stainless steel.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-7.png" class="figure-image">
            <p class="figure-caption">Figure 3-17-7—Severe cracking of a finned Alloy C-276 tube in a deethanizer reboiler after 8 years of service due to ammonium chloride carryover. (a) Hundreds of cracks initiated on the OD (process side) of the tube. (b) The cracks were associated with the cold-worked portion of the tubes at the fins. (c) The cracks were branching and transgranular, typical of Cl<sup>−</sup> SCC.</p>
        </div>
        
        <p>g) Fracture surfaces typically have a brittle appearance.</p>
    </div>
    <div class="subsection">
        <h4>3.17.6 Prevention/Mitigation</h4>
        <p>a) Materials of construction resistant to Cl<sup>−</sup> SCC should be used. Carbon steels, low-alloy steels, and 400 series SS are not susceptible to Cl<sup>−</sup> SCC.</p>
        <p>b) When hydrotesting, low-chloride-content water should be used, followed quickly by thorough dryout.</p>
        <p>c) A suitable coating should be applied to stainless steel piping and equipment prior to insulating.</p>
        <p>Shrink-wrapped PVC labels, coatings, or label adhesives with high levels of chlorides or other halogen ions should be avoided.</p>
        <p>d) Avoid designs that create stagnant regions where chlorides can deposit or concentrate.</p>
        <p>e) Although not a standard or common refining industry practice, a suitable high-temperature stress relief of 300 series SS after fabrication will reduce residual stresses. However, consideration should be given to the possible effects of sensitization that may occur, increasing susceptibility to PTA SCC (3.52), possible distortion problems, and the potential for stress relaxation cracking (SRC) (3.54).</p>
        <p>f) Avoid exchanger designs with 300 series SS steel tubes and a high delta T between the shell and tube side where localized condensation can occur on or in the tubes.</p>
        <p>g) Avoid contact with high-chloride water run-off that can occur with the use of salts for snow and ice melting.</p>
    </div>
    <div class="subsection">
        <h4>3.17.7 Inspection and Monitoring</h4>
        <p>Cracking may be either process side or external (usually under insulation that has become wet or where external water can collect), and it should be understood on which side the damage is occurring in order to properly develop an inspection plan. Cl<sup>−</sup> SCC may be detected using the following methods.</p>
        <p>a) VT can be used to find advanced stages of cracking.</p>
        <p>b) PT can be used for Cl<sup>−</sup> SCC. However, extremely fine cracks may be difficult to detect with PT. Special surface preparation methods, including polishing or high-pressure water blast, may be required in some cases, especially in high-pressure services.</p>
        <p>c) ECT inspection methods can be used on condenser tubes as well as piping and pressure vessels.</p>
        <p>d) Angle beam UT (SWUT and PAUT) from the opposite wall can be used for crack detection; however, detection and characterization of the cracking will be difficult due to the craze-cracked, multi-branched appearance of Cl<sup>−</sup> SCC.</p>
        <p>e) RT is often not sensitive enough to detect cracks except in advanced stages where a sufficient network of cracks has developed.</p>
    </div>
    <div class="subsection">
        <h4>3.17.8 Related Mechanisms</h4>
        <p>Caustic SCC (3.15), PTA SCC (3.52), and brine corrosion (3.10).</p>
    </div>
    <div class="subsection">
        <h4>3.17.9 References</h4>
        <p>1. C.P. Dillon, Corrosion Control in the Chemical Process Industries, Materials Technology Institute (printed by NACE), MTI Publication No 45, Second Edition, St. Louis, MO, 1994, pp. 88–90.</p>
        <p>2. Corrosion Basics—An Introduction, NACE International, Houston, TX, 1984, pp. 111–123.</p>
        <p>3. Focus on Chloride Stress Corrosion Cracking (CSCC) of 300 Series Stainless Steels, MTI Technical Awareness Bulletin No. 8, Materials Technology Institute, St. Louis, MO, 2012.</p>
        <p>4. D.R. McIntyre and C.P. Dillon, Guidelines for Preventing Stress Corrosion Cracking in the Chemical Process Industries, MTI Publication No. 15, Materials Technology Institute, St. Louis, MO, 1985.</p>
    </div>
    `,
    contentEs: `<h3>3.17 Agrietamiento por Corrosión bajo Tensión por Cloruros</h3>
    <div class="subsection">
        <h4>3.17.1 Descripción del Daño</h4>
        <p>Agrietamiento que se inicia en la superficie de aceros inoxidables serie 300 y algunas aleaciones base níquel bajo la acción combinada de esfuerzo de tensión, temperatura y un ambiente acuoso con cloruros. También se conoce como agrietamiento por cloruros.</p>
    </div>
    <div class="subsection">
        <h4>3.17.2 Materiales Afectados</h4>
        <p>a) Todos los aceros inoxidables serie 300 son altamente susceptibles. Las soldaduras en aceros inoxidables serie 300 normalmente contienen algo de ferrita, produciendo una estructura dúplex que generalmente es más resistente al agrietamiento por corrosión bajo tensión por cloruros (Cl<sup>–</sup> SCC) que el metal base.</p>
        <p>b) Los aceros inoxidables dúplex son más resistentes pero aún susceptibles.</p>
        <p>c) Las aleaciones base níquel son altamente resistentes pero no inmunes.</p>
    </div>
    <div class="subsection">
        <h4>3.17.3 Factores Críticos</h4>
        <p>a) El contenido de cloruros, temperatura, pH, esfuerzo de tensión, presencia de oxígeno y composición de la aleación son factores críticos.</p>
        <p>b) El SCC por Cl<sup>−</sup> es causado por el ion cloruro inorgánico (Cl<sup>−</sup>) (u otros iones halógenos inorgánicos como el bromuro, en cuyo caso podría nombrarse diferente). Los cloruros orgánicos no causan directamente SCC por Cl<sup>−</sup>, pero pueden y típicamente producen cloruros inorgánicos iónicos mediante los procesos de hidrólisis o descomposición térmica (pirólisis). Por lo tanto, los cloruros orgánicos pueden llevar a SCC por Cl<sup>−</sup>.</p>
        <p>c) El aumento de los niveles de cloruro aumenta la probabilidad de agrietamiento.</p>
        <p>No existe un límite inferior práctico para los cloruros debido al potencial de que los cloruros se concentren. Por ejemplo, las condiciones de transferencia de calor, como en la superficie de los tubos de intercambiadores, aumentan significativamente el potencial de agrietamiento. Las situaciones de humectación y secado repetitivas, incluyendo vapor y agua alternantes, también pueden llevar al agrietamiento.</p>
        <p>Los sistemas no condensantes serán una preocupación particular, porque los cloruros no pueden eliminarse con la fase de agua.</p>
        <p>d) El aumento de las temperaturas aumenta el potencial de agrietamiento, siempre que los otros elementos requeridos (esfuerzo y solución acuosa de cloruros) estén presentes simultáneamente.</p>
        <p>Aunque hay excepciones a temperaturas más bajas e incluso temperatura ambiente, particularmente con materiales altamente trabajados en frío o sensibilizados, el agrietamiento generalmente ocurre a temperaturas del metal por encima de aproximadamente 140 °F (60 °C), y la experiencia ha demostrado que este es un límite de temperatura útil para equipos fijos en la industria de refinación.</p>
        <p>e) El potencial de agrietamiento aumenta a pH más bajo; sin embargo, el SCC generalmente no ocurre a valores de pH por debajo de 2. A estos valores de pH más bajos, la corrosión general generalmente predomina. La tendencia al SCC por Cl<sup>−</sup> disminuye hacia la región de pH alcalino; sin embargo, los aceros inoxidables y algunas aleaciones base níquel (por ejemplo, Aleación 800 y Aleación 825) pueden sufrir SCC cáustico en ambientes alcalinos. (Véase 3.15.)</p>
        <p>f) El esfuerzo de tensión puede ser aplicado o residual. El área de preocupación más común son las soldaduras sin alivio de esfuerzos. Sin embargo, los componentes altamente esforzados o trabajados en frío, como los fuelles de expansión, también son altamente susceptibles al agrietamiento.</p>
        <p>g) El oxígeno disuelto en el agua normalmente acelera el SCC, pero no está claro si hay un umbral de concentración de oxígeno por debajo del cual no ocurre SCC por Cl<sup>−</sup>. Otros oxidantes además del oxígeno (por ejemplo, CO y CO<sub>2</sub>) también pueden mejorar el SCC por Cl<sup>−</sup>.</p>
        <p>h) El contenido de níquel de la aleación tiene un efecto importante en la resistencia. La mayor susceptibilidad ocurre en aceros inoxidables con un contenido de níquel del 8 % al 12 %.</p>
        <p>Las aleaciones con contenidos de níquel superiores al 35 % son altamente resistentes, y las aleaciones por encima del 45 % son casi inmunes en aplicaciones de refinación, pero aún puede ocurrir agrietamiento en condiciones severas.</p>
        <p>Los aceros inoxidables con bajo contenido de níquel, como los aceros inoxidables dúplex (ferrita-austenita), tienen una resistencia mejorada sobre los aceros inoxidables serie 300 pero no son inmunes.</p>
    </div>
    <div class="subsection">
        <h4>3.17.4 Unidades o Equipos Afectados</h4>
        <p>a) La mayoría de las tuberías y equipos de acero inoxidable serie 300 sin alivio de esfuerzos en cualquier unidad de proceso son susceptibles al SCC por Cl<sup>−</sup>. Incluso si el lado del proceso no causará SCC, si la tubería o el equipo opera por encima de 140 °F (60 °C), es probable que esté expuesto a condiciones húmedas y secas alternantes en el exterior.</p>
        <p>b) Ha ocurrido agrietamiento por cloruros en condensadores enfriados por agua y en el lado del proceso de condensadores de cabeza de torre de crudo.</p>
        <p>c) Los drenajes de acero inoxidable en unidades de hidroprocesamiento son susceptibles al agrietamiento, particularmente durante el arranque, si no se purgan adecuadamente.</p>
        <p>d) Los fuelles y tuberías de instrumentos, particularmente aquellos asociados con corrientes de recirculación de hidrógeno contaminadas con cloruros, pueden verse afectados.</p>
        <p>e) Puede ocurrir SCC por Cl<sup>−</sup> externo en superficies de acero inoxidable serie 300 aisladas cuando el aislamiento se moja.</p>
        <p>El rango de temperatura de operación de mayor preocupación para el SCC por Cl<sup>−</sup> externo es de 140 °F (60 °C) a 400 °F (205 °C).</p>
        <p>f) Ha ocurrido agrietamiento por cloruros en líneas de drenaje de calderas.</p>
        <p>g) Ha ocurrido SCC por Cl<sup>−</sup> altamente localizado en haces de tubos de intercambiadores donde la temperatura del fluido a granel dentro de los tubos estaba por encima del punto de rocío del agua. El fluido frío que entra al lado de la carcasa causó condensación por choque dentro de los tubos y el resultante agrietamiento por cloruros en el lado del tubo.</p>
        <p>h) Las unidades que procesan o coprocesan materias primas basadas en biomasa o renovables (biomasa, grasas y aceites naturales, etc.) son particularmente susceptibles al SCC por Cl<sup>−</sup> debido a los altos niveles de cloruros orgánicos que se convierten en cloruros inorgánicos en el efluente del reactor.</p>
    </div>
    <div class="subsection">
        <h4>3.17.5 Apariencia o Morfología del Daño</h4>
        <p>a) Las grietas que llegan a la superficie pueden ocurrir del lado del proceso o externamente bajo aislamiento.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-17-1—Agrietamiento externo de tubería de instrumentos de acero inoxidable Tipo 304 bajo aislamiento.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-17-2—Agrietamiento externo de tubería de instrumentos de acero inoxidable Tipo 304 bajo aislamiento.</p>
        </div>
        
        <p>b) El componente generalmente no muestra signos visibles de corrosión.</p>
        <p>c) Las grietas características de corrosión bajo tensión tienen muchas ramificaciones y pueden ser visualmente detectables como una telaraña o agrietamiento tipo "craze" en la superficie.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-17-3—Agrietamiento en el lado de la carcasa de un tubo de acero inoxidable Tipo 316L en servicio de vapor a 450 °F (230 °C) que muestra grietas estrechas con apariencia de tipo "craze" o telaraña.</p>
        </div>
        
        <p>d) La metalografía de muestras agrietadas típicamente muestra grietas ramificadas, transgranulares.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-4.png" class="figure-image">
            <p class="figure-caption">Figura 3-17-4—Fotomicrografía de una sección transversal del tubo en la Figura 3-17-3 que muestra finas grietas ramificadas. (Ampliación 50X, sin atacar.)</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-5.png" class="figure-image">
            <p class="figure-caption">Figura 3-17-5—Otra fotomicrografía de un tubo agrietado que ilustra el modo transgranular del agrietamiento que se inicia en la superficie. (Atacado.)</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-6.png" class="figure-image">
            <p class="figure-caption">Figura 3-17-6—SCC por Cl<sup>−</sup> en la superficie de rosca de un perno de acero inoxidable 303 fallado.</p>
        </div>
        
        <p>e) El agrietamiento de aceros inoxidables serie 300 sensibilizados puede ser intergranular.</p>
        <p>f) El SCC por Cl<sup>−</sup> en aleaciones base níquel, que puede ocurrir bajo condiciones severas, aparece similar al SCC por Cl<sup>−</sup> en acero inoxidable.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-17-7.png" class="figure-image">
            <p class="figure-caption">Figura 3-17-7—Agrietamiento severo de un tubo aleteado de Aleación C-276 en un rehervidor de desetanizador después de 8 años de servicio debido al arrastre de cloruro de amonio. (a) Cientos de grietas iniciadas en el diámetro exterior (lado del proceso) del tubo. (b) Las grietas estaban asociadas con la porción trabajada en frío de los tubos en las aletas. (c) Las grietas eran ramificadas y transgranulares, típicas del SCC por Cl<sup>−</sup>.</p>
        </div>
        
        <p>g) Las superficies de fractura típicamente tienen una apariencia frágil.</p>
    </div>
    <div class="subsection">
        <h4>3.17.6 Prevención/Mitigación</h4>
        <p>a) Deben usarse materiales de construcción resistentes al SCC por Cl<sup>−</sup>. Los aceros al carbono, aceros de baja aleación y aceros inoxidables serie 400 no son susceptibles al SCC por Cl<sup>−</sup>.</p>
        <p>b) Al realizar pruebas hidrostáticas, debe usarse agua con bajo contenido de cloruros, seguida rápidamente de un secado completo.</p>
        <p>c) Debe aplicarse un recubrimiento adecuado a las tuberías y equipos de acero inoxidable antes de aislar.</p>
        <p>Deben evitarse las etiquetas de PVC envueltas en encogimiento, recubrimientos o adhesivos de etiquetas con altos niveles de cloruros u otros iones halógenos.</p>
        <p>d) Evitar diseños que creen regiones estancadas donde los cloruros puedan depositarse o concentrarse.</p>
        <p>e) Aunque no es una práctica estándar o común en la industria de refinación, un alivio de esfuerzos a temperatura adecuada de los aceros inoxidables serie 300 después de la fabricación reducirá los esfuerzos residuales. Sin embargo, debe considerarse los posibles efectos de sensibilización que pueden ocurrir, aumentando la susceptibilidad al SCC por ácido tiónico (PTA SCC) (3.52), posibles problemas de distorsión y el potencial de agrietamiento por relajación de esfuerzos (SRC) (3.54).</p>
        <p>f) Evitar diseños de intercambiadores con tubos de acero inoxidable serie 300 y un delta T alto entre el lado de la carcasa y el lado de los tubos donde pueda ocurrir condensación localizada en o en los tubos.</p>
        <p>g) Evitar el contacto con el agua de escorrentía con alto contenido de cloruros que puede ocurrir con el uso de sales para derretir nieve y hielo.</p>
    </div>
    <div class="subsection">
        <h4>3.17.7 Inspección y Monitoreo</h4>
        <p>El agrietamiento puede ser del lado del proceso o externo (generalmente bajo aislamiento que se ha mojado o donde el agua externa puede acumularse), y debe entenderse en qué lado está ocurriendo el daño para desarrollar adecuadamente un plan de inspección. El SCC por Cl<sup>−</sup> puede detectarse utilizando los siguientes métodos.</p>
        <p>a) VT puede usarse para encontrar etapas avanzadas de agrietamiento.</p>
        <p>b) PT puede usarse para SCC por Cl<sup>−</sup>. Sin embargo, las grietas extremadamente finas pueden ser difíciles de detectar con PT. Pueden requerirse métodos especiales de preparación de superficie, incluyendo pulido o chorro de agua a alta presión, en algunos casos, especialmente en servicios de alta presión.</p>
        <p>c) Los métodos de inspección ECT pueden usarse en tubos de condensadores así como en tuberías y recipientes a presión.</p>
        <p>d) UT de haz angular (SWUT y PAUT) desde la pared opuesta puede usarse para la detección de grietas; sin embargo, la detección y caracterización del agrietamiento será difícil debido a la apariencia de grietas múltiples y ramificadas tipo "craze" del SCC por Cl<sup>−</sup>.</p>
        <p>e) RT a menudo no es lo suficientemente sensible para detectar grietas excepto en etapas avanzadas donde se ha desarrollado una red suficiente de grietas.</p>
    </div>
    <div class="subsection">
        <h4>3.17.8 Mecanismos Relacionados</h4>
        <p>SCC cáustico (3.15), SCC por ácido tiónico (PTA SCC) (3.52) y corrosión por salmuera (3.10).</p>
    </div>
    <div class="subsection">
        <h4>3.17.9 Referencias</h4>
        <p>1. C.P. Dillon, Corrosion Control in the Chemical Process Industries, Materials Technology Institute (impreso por NACE), MTI Publication No 45, Second Edition, St. Louis, MO, 1994, pp. 88–90.</p>
        <p>2. Corrosion Basics—An Introduction, NACE International, Houston, TX, 1984, pp. 111–123.</p>
        <p>3. Focus on Chloride Stress Corrosion Cracking (CSCC) of 300 Series Stainless Steels, MTI Technical Awareness Bulletin No. 8, Materials Technology Institute, St. Louis, MO, 2012.</p>
        <p>4. D.R. McIntyre y C.P. Dillon, Guidelines for Preventing Stress Corrosion Cracking in the Chemical Process Industries, MTI Publication No. 15, Materials Technology Institute, St. Louis, MO, 1985.</p>
    </div>
    `
});