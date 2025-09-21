// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 3-43
registerChapter('API571', {
    id: "3.43",
    title: "Mechanical Fatigue (Including Vibration-induced Fatigue)",
    titleEs: "Fatiga Mecánica (Incluyendo Fatiga Inducida por Vibración)",
    content: `<h3>3.43 Mechanical Fatigue (Including Vibration-induced Fatigue)</h3>
    <div class="subsection">
        <h4>3.43.1 Description of Damage</h4>
        <p>a) Fatigue cracking is a mechanical form of degradation that occurs when a component is exposed to cyclical stresses for an extended period, e.g. from dynamic loading due to vibration, water hammer, or unstable fluid flow, often resulting in sudden, unexpected thru-wall cracking.</p>
        <p>b) These stresses can arise from either mechanical loading or thermal cycling and are typically well below the yield strength of the material. This section focuses on mechanical loading, while the effects of thermal cycling are covered in 3.64 on thermal fatigue.</p>
    </div>
    <div class="subsection">
        <h4>3.43.2 Affected Materials</h4>
        <p>All engineering alloys are subject to fatigue cracking although the stress levels and number of cycles necessary to cause failure can vary by material.</p>
    </div>
    <div class="subsection">
        <h4>3.43.3 Critical Factors</h4>
        <p>a) Geometry, stress level, number of cycles, and material properties (strength, hardness, microstructure) are predominant factors in determining the fatigue resistance of a component. The amplitude and frequency of vibrations (related to stress level and number of cycles) in vibrating equipment such as piping are also critical factors. There is a high likelihood of cracking when the input vibrational load is synchronous or nearly synchronizes with the natural or harmonic frequency of the component.</p>
        <p>b) Design Factors—Fatigue cracks usually initiate on the surface at notches or stress risers under cyclic loading. For this reason, design of a component is the most important factor in determining a component's resistance to fatigue cracking. Common surface features that can lead to the initiation of fatigue cracks, because they act as stress concentrations, include:</p>
        <ul>
            <li>key holes on drive shafts of rotating equipment,</li>
            <li>mechanical notches (sharp corners or groves),</li>
            <li>weld joint flaws and/or mismatches,</li>
            <li>tool markings,</li>
            <li>grinding marks,</li>
            <li>lips on drilled holes,</li>
            <li>thread root notches, and</li>
            <li>corrosion.</li>
        </ul>
        <p>In vibrating or shaking equipment, especially piping, a lack of or improperly placed support or stiffening can lead to cracks initiating at the types of stress risers or notches listed above. The normal toe or edge of a properly made, Code-acceptable weld can provide the stress concentration to initiate a fatigue crack in badly vibrating or shaking equipment. Often the cracks will form at the location(s) where the vibrating or shaking equipment is fixed and prevented from moving with the adjacent component. This situation most often needs to be addressed by reducing the amount of vibration or shaking.</p>
        <p>c) Metallurgical issues and microstructure.</p>
        <ul>
            <li>Some materials such as titanium, carbon steel, and low-alloy steel have an "endurance limit." In such cases, the number of cycles to fatigue fracture increases with decreasing stress amplitude until a stress amplitude endurance limit is reached below which fatigue cracking will not occur, regardless of the number of cycles.</li>
            <li>For alloys with endurance limits, there is a correlation between ultimate tensile strength (UTS) and the minimum stress amplitude necessary to initiate fatigue cracking, i.e. the endurance limit. The ratio of endurance limit to UTS is typically between 0.4 and 0.5.</li>
            <li>300 series SS, 400 series SS, aluminum, and most other non-ferrous alloys have a fatigue characteristic that does not exhibit an endurance limit. This means that fatigue fracture can be achieved under cyclic loading eventually, given enough cycles, regardless of stress amplitude. Maximum cyclic stress amplitude for design is selected by determining the cyclic stress necessary to cause fracture in the number of cycles the component needs to withstand in its lifetime. This is typically 10<sup>6</sup> to 10<sup>7</sup> cycles.</li>
            <li>The endurance limit described in Item 1 above primarily applies to smooth bars and similar configurations as might be found in a pump shaft. For welded components, such as piping or other situations where inherent discontinuities, flaws, or other high stress concentrations exist, the crack initiation portion of fatigue life is essentially eliminated, leaving only the crack growth portion. This situation effectively eliminates the existence of the endurance limit. Thus, the concept of the endurance limit generally cannot be taken advantage of with vibrating or shaking equipment.</li>
            <li>Inclusions found in metal can have an accelerating effect on fatigue cracking. This is of importance when dealing with older, "dirty" steels or weldments, as these often have inclusions and discontinuities that can degrade fatigue resistance.</li>
            <li>Heat treatment can have an effect on fatigue resistance of a metal. In general, finer-grained microstructures tend to perform better than coarse grained. Heat treatments such as quenching and tempering can improve fatigue resistance of carbon and low-alloy steels.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>3.43.4 Affected Units or Equipment</h4>
        <p>a) Socket welds and small-bore piping (e.g. bypass lines, minimum flow loops) associated with or near pumps, compressors, or other rotating or reciprocating equipment that are not properly gusseted and supported.</p>
        <p>b) Small branch connections with unsupported valves or controllers that may see vibration from adjacent equipment and/or wind. For small components, resonance can also produce a cyclic load and should be taken into consideration during design and reviewed for potential problems after installation.</p>
        <p>c) Safety-relief valves that are subject to chatter, premature pop-off, fretting, and failure to operate properly.</p>
        <p>d) High-pressure-drop control valves or steam-reducing stations that can cause serious vibration problems in connected piping.</p>
        <p>e) Rotating shafts on centrifugal pumps and compressors that have stress concentrations due to changes in radii and keyways.</p>
        <p>f) Heat exchanger tubes that may be susceptible to vortex shedding.</p>
        <p>g) Pressure swing absorber vessels in hydrogen purification units.</p>
        <p>h) Transient conditions (such as start-ups, shutdowns, upsets, etc.) can create intermittent, but severe, vibrating conditions.</p>
    </div>
    <div class="subsection">
        <h4>3.43.5 Appearance or Morphology of Damage</h4>
        <p>a) Damage is usually in the form of a crack emanating from a point of high stress concentration or discontinuity such as thread, a weld, or the corner of a keyway in a shaft.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-1—Vibration induced fatigue of a 1-in. socket weld flange in a thermal relief system shortly after start-up.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-2—Cross-sectional view of the crack in the socket weld in Figure 3-43-1.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-3—Fatigue crack in a 16-in. pipe-to-elbow weld in the fill line of crude oil storage tank after 50 years in service.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-4.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-4—A cross section through the weld showing the crack location.</p>
        </div>
        
        <p>b) The signature mark of a fatigue failure is a "clam-shell"-type fingerprint that has concentric rings called "beach marks" emanating from the crack initiation site.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-5.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-5—Schematic of a fatigue fracture surface showing "beach marks."</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-6.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-6—Compressor rod fracture surface showing "beach marks."</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-7.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-7—Higher-magnification view of Figure 3-43-6 above showing "beach marks."</p>
        </div>
        
        <p>This signature pattern results from the "waves" of crack propagation that occur during cycles above the threshold loading. These concentric cracks continue to propagate until the cross-sectional area is reduced to the point where failure due to tensile overload occurs.</p>
        <p>c) Cracks nucleating from a surface stress concentration or defect will typically result in a single "clam shell" fingerprint.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-8.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-8—Fatigue fracture surface of a carbon steel pipe.</p>
        </div>
        
        <p>d) Cracks resulting from cyclical overstress of a component without one significant, isolated stress concentration point will typically result in a fatigue failure with multiple points of nucleation and hence multiple "clam shell" fingerprints. These multiple nucleation sites, often called "ratchet markings," are the result of microscopic yielding that occurs when the component is momentarily cycled above its yield strength.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-9.png" class="figure-image">
            <p class="figure-caption">Figure 3-43-9—The surface of the fracture face of the crack shown in Figure 3-43-3 and Figure 3-43-4.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.43.6 Prevention/Mitigation</h4>
        <p>a) Piping and other fixed equipment.</p>
        <ul>
            <li>The best defense against fatigue cracking is good design that helps minimize stress concentration of components that are in cyclic service.</li>
            <li>Fatigue cracking in piping can usually be eliminated or reduced through proper design and the use of properly placed support and vibration dampening equipment. Material upgrades are not usually a solution.</li>
            <li>Install gussets or stiffeners on small-bore connections so that they cannot move independently of the larger pipe or other component to which they are connected. Eliminate unnecessary connections.</li>
            <li>Vortex shedding can be minimized at the outlet of control valves and safety valves through proper side branch sizing and flow stabilization techniques.</li>
            <li>Vibration effects may be shifted when a vibrating section is anchored. Special studies may be necessary before anchors or dampeners are provided, unless the vibration is eliminated by removing the source.</li>
            <li>Assure good fit-up and smooth transitions for welds. Employ a gradual bore taper on the thicker component when transitioning between different pipe schedules.</li>
            <li>Minimize weld defects as these can accelerate fatigue cracking.</li>
            <li>Minimize grinding marks, nicks, and gouges on the surface of components subject to cyclic loading. Use low-stress stamps and marking tools.</li>
        </ul>
        <p>b) Rotating equipment.</p>
        <ul>
            <li>Allow for a generous radius along edges and corners, particularly in shaft keyways. Remove any burrs or lips caused by machining.</li>
            <li>Although fatigue cracking problems are generally addressed by design and fabrication improvements, ensure that the metal selected has fatigue life sufficient for its intended cyclic service.</li>
        </ul>
        <p>c) API 579-1/ASME FFS-1 contains useful information related to determining critical fatigue crack sizes and assessing crack growth rates.</p>
    </div>
    <div class="subsection">
        <h4>3.43.7 Inspection and Monitoring</h4>
        <p>In high cycle fatigue, the time required for a crack to initiate or grow sufficiently to be identifiable by NDE methods can be a majority of the fatigue life, making detection before cracking and failure difficult. For this reason, it is normally impractical to rely on NDE methods for routine, global inspection of fixed equipment to avoid fatigue cracking failures. Frequent NDE in a focused program aimed at a specific, known problem area can be used for finding cracks before failure, but this is not normally considered an effective, long-term approach to managing the problem.</p>
        <p>a) PT can be used to detect cracks open to the surface.</p>
        <p>b) MT (including WFMT) can be used to detect cracks open to the surface or near the surface.</p>
        <p>c) Angle beam (SWUT and PAUT) can be used to detect fatigue cracks at known or suspected areas of concern, e.g. at stress concentrations and welded connections, and where cracking is internal, i.e. initiating on the ID surface and not visible from the outside. In some situations, e.g. with very thick components, compression wave UT may be needed.</p>
        <p>d) Compression wave UT can detect cracking in bolts.</p>
        <p>e) Vibration monitoring of rotating equipment may provide online detection of conditions that can result in shaft failures due to out of balance conditions.</p>
        <p>f) Piping oscillation, vibration, or water hammer, especially involving small-bore components that are not adequately supported, is often visually apparent. Focus on weld joints and locations where the pipe is fixed and prevented from moving. Pipe vibrations can be measured using special monitoring equipment.</p>
        <p>g) Pipe supports and spring hangers should be checked on a regular schedule.</p>
        <p>h) Audible sounds of vibration emanating from components such as control valves can be an indication of conditions capable of causing fatigue cracks.</p>
        <p>i) Damaged insulation jacketing may indicate excessive vibration.</p>
    </div>
    <div class="subsection">
        <h4>3.43.8 Related Mechanisms</h4>
        <p>Thermal fatigue (3.64) and corrosion fatigue (3.21).</p>
    </div>
    <div class="subsection">
        <h4>3.43.9 References</h4>
        <p>1. J.M. Barsom and S.T. Rolfe, Fracture and Fatigue Control in Structures, American Society for Testing and Materials, West Conshohocken, PA.</p>
        <p>2. ASTM STP1428, Thermomechanical Fatigue Behavior of Materials, American Society for Testing and Materials, West Conshohocken, PA.</p>
        <p>3. ASTM MNL41, Fracture and Fatigue Control in Structures: Applications of Fracture Mechanics, ASM International, Materials Park, OH, 1995.</p>
        <p>4. "Environmental Effects on Components: Commentary for ASME Section III," EPRI NP-5775, Project 1757-61, Final Report, EPRI, 1998.</p>
        <p>5. API Recommended Practice 581, Risk-Based Inspection Technology, American Petroleum Institute, Washington, DC, Second Edition, 2008.</p>
        <p>6. API 579-1/ASME FFS-1, Fitness-For-Service, American Petroleum Institute, Washington, DC.</p>
    </div>
    `,
    contentEs: `<h3>3.43 Fatiga Mecánica (Incluyendo Fatiga Inducida por Vibración)</h3>
    <div class="subsection">
        <h4>3.43.1 Descripción del Daño</h4>
        <p>a) La agrietamiento por fatiga es una forma de degradación mecánica que ocurre cuando un componente está expuesto a esfuerzos cíclicos durante un período prolongado, por ejemplo, por carga dinámica debido a vibración, golpe de ariete o flujo de fluido inestable, lo que a menudo resulta en agrietamiento repentino e inesperado a través de la pared.</p>
        <p>b) Estos esfuerzos pueden surgir de cargas mecánicas o ciclos térmicos y típicamente están muy por debajo del límite de fluencia del material. Esta sección se centra en las cargas mecánicas, mientras que los efectos de los ciclos térmicos se tratan en 3.64 sobre fatiga térmica.</p>
    </div>
    <div class="subsection">
        <h4>3.43.2 Materiales Afectados</h4>
        <p>Todas las aleaciones de ingeniería están sujetas a agrietamiento por fatiga, aunque los niveles de esfuerzo y el número de ciclos necesarios para causar una falla pueden variar según el material.</p>
    </div>
    <div class="subsection">
        <h4>3.43.3 Factores Críticos</h4>
        <p>a) La geometría, el nivel de esfuerzo, el número de ciclos y las propiedades del material (resistencia, dureza, microestructura) son factores predominantes para determinar la resistencia a la fatiga de un componente. La amplitud y frecuencia de las vibraciones (relacionadas con el nivel de esfuerzo y el número de ciclos) en equipos vibrantes como tuberías también son factores críticos. Existe una alta probabilidad de agrietamiento cuando la carga de vibración de entrada es sincrónica o casi sincroniza con la frecuencia natural o armónica del componente.</p>
        <p>b) Factores de Diseño—Las grietas de fatiga generalmente se inician en la superficie en muescas o concentradores de esfuerzo bajo carga cíclica. Por esta razón, el diseño de un componente es el factor más importante para determinar la resistencia de un componente al agrietamiento por fatiga. Las características superficiales comunes que pueden llevar a la iniciación de grietas de fatiga, porque actúan como concentradores de esfuerzo, incluyen:</p>
        <ul>
            <li>agujeros de chaveta en ejes de transmisión de equipos rotativos,</li>
            <li>muescas mecánicas (esquinas afiladas o ranuras),</li>
            <li>defectos y/o desalineaciones en juntas soldadas,</li>
            <li>marcas de herramientas,</li>
            <li>marcas de esmerilado,</li>
            <li>rebabas en orificios perforados,</li>
            <li>muescas en la raíz de roscas, y</li>
            <li>corrosión.</li>
        </ul>
        <p>En equipos vibrantes o que se sacuden, especialmente tuberías, la falta o colocación inadecuada de soportes o rigidización puede llevar a la iniciación de grietas en los tipos de concentradores de esfuerzo o muescas listados anteriormente. El borde o talón normal de una soldadura correctamente realizada y aceptable por el Código puede proporcionar la concentración de esfuerzo para iniciar una grieta de fatiga en equipos que vibran o se sacuden violentamente. A menudo las grietas se formarán en el(los) lugar(es) donde el equipo vibrante o que se sacude está fijo y se le impide moverse con el componente adyacente. Esta situación generalmente necesita abordarse reduciendo la cantidad de vibración o sacudida.</p>
        <p>c) Cuestiones metalúrgicas y microestructura.</p>
        <ul>
            <li>Algunos materiales como el titanio, el acero al carbono y los aceros de baja aleación tienen un "límite de resistencia". En tales casos, el número de ciclos hasta la fractura por fatiga aumenta con la disminución de la amplitud del esfuerzo hasta que se alcanza un límite de amplitud de esfuerzo por debajo del cual no ocurrirá agrietamiento por fatiga, sin importar el número de ciclos.</li>
            <li>Para aleaciones con límites de resistencia, existe una correlación entre la resistencia a la tracción última (UTS) y la amplitud mínima de esfuerzo necesaria para iniciar el agrietamiento por fatiga, es decir, el límite de resistencia. La relación entre el límite de resistencia y la UTS típicamente está entre 0.4 y 0.5.</li>
            <li>Los aceros inoxidables de la serie 300, la serie 400, el aluminio y la mayoría de las otras aleaciones no ferrosas tienen una característica de fatiga que no exhibe un límite de resistencia. Esto significa que eventualmente se puede lograr la fractura por fatiga bajo carga cíclica, dados suficientes ciclos, sin importar la amplitud del esfuerzo. La amplitud máxima de esfuerzo cíclico para el diseño se selecciona determinando el esfuerzo cíclico necesario para causar la fractura en el número de ciclos que el componente necesita soportar durante su vida útil. Esto típicamente es de 10<sup>6</sup> a 10<sup>7</sup> ciclos.</li>
            <li>El límite de resistencia descrito en el punto 1 anterior se aplica principalmente a barras lisas y configuraciones similares como las que podrían encontrarse en un eje de bomba. Para componentes soldados, como tuberías u otras situaciones donde existen discontinuidades inherentes, defectos u otras concentraciones de esfuerzo altas, la porción de iniciación de grietas de la vida por fatiga es esencialmente eliminada, dejando solo la porción de crecimiento de grietas. Esta situación elimina efectivamente la existencia del límite de resistencia. Así, el concepto del límite de resistencia generalmente no puede aprovecharse con equipos vibrantes o que se sacuden.</li>
            <li>Las inclusiones encontradas en el metal pueden tener un efecto acelerador en el agrietamiento por fatiga. Esto es importante cuando se trata de aceros más antiguos, "sucios" o soldaduras, ya que estos a menudo tienen inclusiones y discontinuidades que pueden degradar la resistencia a la fatiga.</li>
            <li>El tratamiento térmico puede tener un efecto en la resistencia a la fatiga de un metal. En general, las microestructuras de grano fino tienden a desempeñarse mejor que las de grano grueso. Los tratamientos térmicos como el temple y revenido pueden mejorar la resistencia a la fatiga de los aceros al carbono y de baja aleación.</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>3.43.4 Unidades o Equipos Afectados</h4>
        <p>a) Soldaduras de enchufe y tuberías de pequeño diámetro (por ejemplo, líneas de derivación, bucles de flujo mínimo) asociadas con o cerca de bombas, compresores u otros equipos rotativos o alternativos que no están adecuadamente rigidizados y soportados.</p>
        <p>b) Conexiones de ramal pequeñas con válvulas o controladores no soportados que pueden experimentar vibración de equipos adyacentes y/o viento. Para componentes pequeños, la resonancia también puede producir una carga cíclica y debe tenerse en cuenta durante el diseño y revisarse para posibles problemas después de la instalación.</p>
        <p>c) Válvulas de seguridad que están sujetas a traqueteo, apertura prematura, desgaste por fricción y falla en operar correctamente.</p>
        <p>d) Válvulas de control de alta caída de presión o estaciones reductoras de vapor que pueden causar problemas graves de vibración en las tuberías conectadas.</p>
        <p>e) Ejes rotativos en bombas centrífugas y compresores que tienen concentraciones de esfuerzo debido a cambios en radios y chaveteros.</p>
        <p>f) Tubos de intercambiadores de calor que pueden ser susceptibles a la formación de vórtices.</p>
        <p>g) Recipientes absorbedores de oscilación de presión en unidades de purificación de hidrógeno.</p>
        <p>h) Las condiciones transitorias (como arranques, paradas, alteraciones, etc.) pueden crear condiciones de vibración intermitentes pero severas.</p>
    </div>
    <div class="subsection">
        <h4>3.43.5 Apariencia o Morfología del Daño</h4>
        <p>a) El daño generalmente toma la forma de una grieta que emana de un punto de alta concentración de esfuerzo o discontinuidad como una rosca, una soldadura o la esquina de un chavetero en un eje.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-1—Fatiga inducida por vibración de una brida de soldadura de enchufe de 1 pulg. en un sistema de alivio térmico poco después del arranque.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-2—Vista transversal de la grieta en la soldadura de enchufe en la Figura 3-43-1.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-3—Grieta de fatiga en una soldadura de tubería a codo de 16 pulg. en la línea de llenado de tanque de almacenamiento de petróleo crudo después de 50 años en servicio.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-4.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-4—Una sección transversal a través de la soldadura que muestra la ubicación de la grieta.</p>
        </div>
        
        <p>b) La marca característica de una falla por fatiga es una huella dactilar tipo "concha" que tiene anillos concéntricos llamados "marcas de playa" que emanan del sitio de iniciación de la grieta.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-5.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-5—Esquema de una superficie de fractura por fatiga que muestra "marcas de playa".</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-6.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-6—Superficie de fractura de vástago de compresor que muestra "marcas de playa".</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-7.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-7—Vista de mayor magnificación de la Figura 3-43-6 anterior que muestra "marcas de playa".</p>
        </div>
        
        <p>Este patrón característico resulta de las "ondas" de propagación de grietas que ocurren durante los ciclos por encima de la carga umbral. Estas grietas concéntricas continúan propagándose hasta que el área de sección transversal se reduce al punto donde ocurre la falla por sobrecarga de tracción.</p>
        <p>c) Las grietas que se nuclean a partir de una concentración de esfuerzo superficial o un defecto típicamente resultarán en una sola huella dactilar tipo "concha".</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-8.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-8—Superficie de fractura por fatiga de una tubería de acero al carbono.</p>
        </div>
        
        <p>d) Las grietas resultantes de sobreesfuerzo cíclico de un componente sin un punto significativo y aislado de concentración de esfuerzo típicamente resultarán en una falla por fatiga con múltiples puntos de nucleación y por lo tanto múltiples huellas dactilares tipo "concha". Estos múltiples sitios de nucleación, a menudo llamados "marcas de trinquete", son el resultado de la fluencia microscópica que ocurre cuando el componente se cicla momentáneamente por encima de su límite de fluencia.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-43-9.png" class="figure-image">
            <p class="figure-caption">Figura 3-43-9—La superficie de la cara de fractura de la grieta mostrada en la Figura 3-43-3 y la Figura 3-43-4.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.43.6 Prevención/Mitigación</h4>
        <p>a) Tuberías y otros equipos fijos.</p>
        <ul>
            <li>La mejor defensa contra el agrietamiento por fatiga es un buen diseño que ayude a minimizar la concentración de esfuerzo de componentes que están en servicio cíclico.</li>
            <li>El agrietamiento por fatiga en tuberías generalmente puede eliminarse o reducirse mediante un diseño adecuado y el uso de soportes y equipos de amortiguación de vibración correctamente colocados. Las mejoras de materiales generalmente no son una solución.</li>
            <li>Instale refuerzos o rigidizadores en conexiones de pequeño diámetro para que no puedan moverse independientemente de la tubería más grande u otro componente al que están conectados. Elimine conexiones innecesarias.</li>
            <li>La formación de vórtices puede minimizarse en la salida de válvulas de control y válvulas de seguridad mediante un dimensionamiento adecuado de ramales laterales y técnicas de estabilización de flujo.</li>
            <li>Los efectos de vibración pueden desplazarse cuando se ancla una sección vibrante. Pueden ser necesarios estudios especiales antes de proporcionar anclajes o amortiguadores, a menos que la vibración se elimine eliminando la fuente.</li>
            <li>Asegure un buen ajuste y transiciones suaves para las soldaduras. Emplee una conicidad gradual de perforación en el componente más grueso al transicionar entre diferentes cédulas de tubería.</li>
            <li>Minimice los defectos de soldadura, ya que estos pueden acelerar el agrietamiento por fatiga.</li>
            <li>Minimice las marcas de esmerilado, muescas y melladuras en la superficie de componentes sujetos a carga cíclica. Use sellos y herramientas de marcado de bajo esfuerzo.</li>
        </ul>
        <p>b) Equipos rotativos.</p>
        <ul>
            <li>Permita un radio generoso a lo largo de bordes y esquinas, particularmente en chaveteros de ejes. Elimine cualquier rebaba o labio causado por mecanizado.</li>
            <li>Aunque los problemas de agrietamiento por fatiga generalmente se abordan mediante mejoras de diseño y fabricación, asegúrese de que el metal seleccionado tenga una vida por fatiga suficiente para su servicio cíclico previsto.</li>
        </ul>
        <p>c) API 579-1/ASME FFS-1 contiene información útil relacionada con la determinación de tamaños críticos de grietas por fatiga y la evaluación de tasas de crecimiento de grietas.</p>
    </div>
    <div class="subsection">
        <h4>3.43.7 Inspección y Monitoreo</h4>
        <p>En la fatiga de alto ciclo, el tiempo requerido para que una grieta se inicie o crezca lo suficiente para ser identificable por métodos END puede ser la mayor parte de la vida por fatiga, lo que dificulta la detección antes del agrietamiento y la falla. Por esta razón, normalmente es poco práctico confiar en métodos END para la inspección global de rutina de equipos fijos para evitar fallas por agrietamiento por fatiga. Los END frecuentes en un programa enfocado dirigido a un área de problema específica y conocida pueden usarse para encontrar grietas antes de la falla, pero esto generalmente no se considera un enfoque efectivo a largo plazo para gestionar el problema.</p>
        <p>a) PT puede usarse para detectar grietas abiertas a la superficie.</p>
        <p>b) MT (incluyendo WFMT) puede usarse para detectar grietas abiertas a la superficie o cerca de la superficie.</p>
        <p>c) El haz angular (SWUT y PAUT) puede usarse para detectar grietas por fatiga en áreas de preocupación conocidas o sospechosas, por ejemplo, en concentraciones de esfuerzo y conexiones soldadas, y donde el agrietamiento es interno, es decir, iniciándose en la superficie ID y no visible desde el exterior. En algunas situaciones, por ejemplo, con componentes muy gruesos, puede ser necesario UT de onda compresiva.</p>
        <p>d) El UT de onda compresiva puede detectar agrietamiento en pernos.</p>
        <p>e) El monitoreo de vibración de equipos rotativos puede proporcionar detección en línea de condiciones que pueden resultar en fallas de ejes debido a condiciones de desequilibrio.</p>
        <p>f) La oscilación, vibración o golpe de ariete de tuberías, especialmente involucrando componentes de pequeño diámetro que no están adecuadamente soportados, a menudo es visualmente aparente. Enfóquese en juntas soldadas y ubicaciones donde la tubería está fija y se le impide moverse. Las vibraciones de la tubería pueden medirse utilizando equipos de monitoreo especiales.</p>
        <p>g) Los soportes de tubería y colgadores de resorte deben verificarse en un horario regular.</p>
        <p>h) Los sonidos audibles de vibración que emanan de componentes como válvulas de control pueden ser una indicación de condiciones capaces de causar grietas por fatiga.</p>
        <p>i) El revestimiento de aislamiento dañado puede indicar vibración excesiva.</p>
    </div>
    <div class="subsection">
        <h4>3.43.8 Mecanismos Relacionados</h4>
        <p>Fatiga térmica (3.64) y fatiga por corrosión (3.21).</p>
    </div>
    <div class="subsection">
        <h4>3.43.9 Referencias</h4>
        <p>1. J.M. Barsom y S.T. Rolfe, Fracture and Fatigue Control in Structures, American Society for Testing and Materials, West Conshohocken, PA.</p>
        <p>2. ASTM STP1428, Thermomechanical Fatigue Behavior of Materials, American Society for Testing and Materials, West Conshohocken, PA.</p>
        <p>3. ASTM MNL41, Fracture and Fatigue Control in Structures: Applications of Fracture Mechanics, ASM International, Materials Park, OH, 1995.</p>
        <p>4. "Environmental Effects on Components: Commentary for ASME Section III," EPRI NP-5775, Project 1757-61, Final Report, EPRI, 1998.</p>
        <p>5. API Recommended Practice 581, Risk-Based Inspection Technology, American Petroleum Institute, Washington, DC, Second Edition, 2008.</p>
        <p>6. API 579-1/ASME FFS-1, Fitness-For-Service, American Petroleum Institute, Washington, DC.</p>
    </div>
    `
});