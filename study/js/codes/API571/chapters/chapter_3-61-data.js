// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 3-61
registerChapter('API571', {
    id: "3.61",
    title: "Sulfidation",
    titleEs: "Sulfidación",
    content: `<h3>3.61 Sulfidation</h3>
    <div class="subsection">
        <h4>3.61.1 Description of Damage</h4>
        <p>Corrosion of carbon steel and other alloys resulting from their reaction with sulfur compounds in high-temperature environments. Corrosion in the presence of hydrogen is discussed in 3.35, High-temperature H<sub>2</sub>/H<sub>2</sub>S Corrosion. In this discussion, sulfidation will refer to high-temperature sulfidic environments without hydrogen. This mechanism is also known as sulfidic corrosion. Because of the smooth, large, relatively uniformly corroded surface produced by sulfidation, it can lead to rupture type failure rather than a localized or pinhole leak. Both types of sulfidation, with and without hydrogen present, are covered in much more detail in Reference 6 (API 939-C).</p>
    </div>
    <div class="subsection">
        <h4>3.61.2 Affected Materials</h4>
        <p>a) All iron-based materials including carbon steel and low-alloy steels, 400 series SS, and 300 series SS, in that order from most susceptible to less susceptible.</p>
        <p>b) Nickel-based alloys are also affected to varying degrees depending on composition, especially chromium content. Above 1193 °F (645 °C), alloys containing high nickel contents can suffer a form of sulfidation and metal loss associated with the formation of nickel sulfides beneath the metal surface. This has also been referred to as hot corrosion. Susceptibility to this form of sulfidation increases with increasing nickel content.</p>
        <p>c) Copper-based alloys form sulfide corrosion product at lower temperatures than carbon steel.</p>
    </div>
    <div class="subsection">
        <h4>3.61.3 Critical Factors</h4>
        <p>a) Major factors affecting sulfidation are chemical composition of the metal, temperature, and concentration of corrosive (reactive) sulfur compounds. Flow conditions can also affect the rate of damage.</p>
        <p>b) In general, the resistance of iron-based and nickel-based alloys is determined by the chromium content of the material. Increasing the chromium content significantly increases resistance to sulfidation. 300 series SS, such as Types 304, 316, 321, and 347, are highly resistant in most refining high-temperature sulfidation process environments. Nickel-based alloys are similar to stainless steels in that similar levels of chromium provide similar resistance to sulfidation; however, nickel alloys with little or no chromium can have poor resistance to these environments.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-61-1—Modified McConomy curves showing typical effect of temperature on high-temperature sulfidation of steels and stainless steels. (Reference 3)</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-61-2—Multiplier for corrosion rates in Figure 3-61-1 based on the sulfur content of process fluid. (Reference 3)</p>
        </div>
        
        <p>c) Figure 3-61-1 and Figure 3-61-2 show the typical effects of increasing chromium content, temperature, and sulfur content on metal loss. These curves only indicate the general trends in the effects of chemical composition, temperature, and sulfur content on corrosion rates. They are used in design for estimating the corrosion rate for a particular service but should be regarded as only showing trends, as actual observed rates can often vary substantially. In many cases the predictions are conservative, i.e. they overstate the actual corrosion rates found in service. The references at the end of this section provide additional background on the development of these curves.</p>
        <p>d) The silicon content of carbon steel can significantly affect its susceptibility to sulfidation. Carbon steels with Si content less than 0.10 % have been found to suffer variable and often higher sulfidation corrosion rates than carbon steel with silicon content above this level. (Higher-Si carbon steels are still susceptible to sulfidation, but steel with low Si content may suffer higher rates.) Silicon-killed steel has greater than 0.10 % Si, while non-killed steels generally do not. There have been a number of incidents in the refining industry where lower-Si ASTM Grade A53 piping suffered significantly more metal loss than ASTM Grade A106 piping or standard carbon steel pipe fittings or flanges welded to the A53 pipe.</p>
        <p>e) The amount of metal loss suffered in a particular service is greatly affected by the material's ability to form a protective sulfide scale. While sulfide scale invariably forms as a corrosion product on the metal surface, the degree to which it is protective depends on its thickness, density, adherence, and completeness of coverage, which depend on its chemical composition and the severity of the process stream, including flow regime.</p>
        <p>f) Sulfidation (H<sub>2</sub>-free) of iron-based alloys begins at metal temperatures above 450 °F (230 °C) but normally only becomes a practical concern above 500 °F (260 °C). Experience has shown 500 °F (260 °C) to be the most useful service temperature above which to focus inspection, monitoring, and corrosion mitigation efforts.</p>
        <p>g) Crude oils and other hydrocarbon streams contain sulfur compounds at various concentrations. Total sulfur content is made up of many different sulfur or sulfide species.</p>
        <p>h) Sulfidation is primarily caused by H<sub>2</sub>S and other reactive sulfide species formed by the thermal decomposition of sulfur compounds at high temperatures. Some sulfur compounds react more readily to form H<sub>2</sub>S. Therefore, it can be misleading to predict corrosion rates based on weight percent of sulfur alone. Knowing the total "reactive sulfur" in the process stream is key to predicting or assessing its actual corrosivity.</p>
    </div>
    <div class="subsection">
        <h4>3.61.4 Affected Units or Equipment</h4>
        <p>a) Sulfidation occurs in piping and equipment in high-temperature environments where sulfur-containing liquid, vapor, or mixed streams are processed.</p>
        <p>b) Crude, vacuum, FCC, coker, and visbreaker units, as well as the feed sections of hydroprocessing units upstream of hydrogen injection [at which point high-temperature H<sub>2</sub>/H<sub>2</sub>S corrosion (3.35) begins to govern], commonly process these high-temperature, sulfur-containing streams without, or prior to, intentionally added hydrogen.</p>
        <p>c) Coker heaters fabricated from higher-nickel alloys such as Alloy 800H have shown accelerated sulfidation corrosion rates in the lower radiant sections operating with tube metal temperatures exceeding 1193 °F (645 °C) as compared to similar tubes operating below this temperature.</p>
        <p>d) Heaters fired with oil, gas, coke, and most other sources of fuel may be affected depending on sulfur levels in the fuel; it is now uncommon for heaters to be fired with anything but gas, usually low-sulfur gas to meet environmental restrictions, especially in the United States.</p>
    </div>
    <div class="subsection">
        <h4>3.61.5 Appearance or Morphology of Damage</h4>
        <p>a) Depending on service conditions, corrosion is most often in the form of uniform thinning but can also occur as localized corrosion or high-velocity erosion-corrosion damage.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-61-3—Sulfidation failure of an 8-in. carbon steel pipe. Note the relatively uniform thinning that resulted in a sizeable rupture.</p>
        </div>
        
        <p>b) While generally having a uniform thinning morphology, the amount of thinning can vary at different locations in the system or at different locations along the length of a piping run.</p>
        <ul>
            <li>The difference in the degree of thinning between low-Si (&lt;0.10 % Si) pipe and higher-Si (≥0.10 Si) pipe in the same system can be large, with a marked step change in remaining wall thickness at the transition. See Figure 3-61-4 and Figure 3-61-5.</li>
        </ul>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-4.png" class="figure-image">
            <p class="figure-caption">Figure 3-61-4—Sulfidation failure illustrating the effect of accelerated corrosion due to low silicon content. This 8-in. pipe section in FCC bottoms piping was in service at 150 psig (1 Mpa) at 650 °F to 700 °F (340 °C to 370 °C). The piping sketch in Figure 3-61-5 illustrates the difference in corrosion rate as compared to adjacent high-silicon components.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-5.png" class="figure-image">
            <p class="figure-caption">Figure 3-61-5—Thickness survey of 8-in. pipe shown in Figure 3-61-4 above.</p>
        </div>
        
        <p>c) A sulfide scale will usually cover the surface of components. Deposits may be thick or thin depending on the alloy, corrosiveness of the stream, and fluid flow regime and velocity.</p>
    </div>
    <div class="subsection">
        <h4>3.61.6 Prevention/Mitigation</h4>
        <p>a) Resistance to sulfidation is generally achieved by upgrading to a higher-chromium steel such as 9Cr-1Mo.</p>
        <p>b) Piping and equipment constructed from solid or clad (or overlaid) 300 series SS should provide significant resistance to corrosion. 400 series SS cladding should also provide significant improvement over carbon steel. Solid 400 series SS is generally not selected for piping or other pressure-containing equipment because of embrittlement and fracture toughness concerns.</p>
        <p>c) Aluminum diffusion treatment of carbon steel and low-alloy steel components is sometimes used to reduce sulfidation rates and minimize scale formation; however, it may not offer complete protection.</p>
        <p>d) For operation above 1193 °F (645 °C), sulfidation rates of higher-nickel alloys can be reduced by selecting an alloy with a lower Ni content.</p>
    </div>
    <div class="subsection">
        <h4>3.61.7 Inspection and Monitoring</h4>
        <p>a) Thinning in piping, tubing, and other equipment can be detected and measured using UT thickness measurement or RT. Thinning in pressure vessels and large-diameter piping where internal inspection is possible can be detected by internal VT, typically followed up with UT.</p>
        <p>b) Permanently mounted thickness monitoring sensors can be used.</p>
        <p>c) Thinning in heater tubes can be detected using UT or by smart pigging. Smart pigging provides significantly more coverage than spot UT and may find thinning missed by spot UT.</p>
        <p>d) Actual operating temperatures should be verified and compared against design. Temperatures and sulfur levels should be monitored for increases above design.</p>
        <p>e) Temperatures can be monitored using tube-skin thermocouples and/or infrared thermography.</p>
        <p>f) Proactive and retroactive MVPs (materials verification programs) can be used for alloy verification and to check for alloy mix-ups in services where sulfidation is anticipated. (API 578 provides guidance on MVPs.) See Figure 3-61-6.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-6.png" class="figure-image">
            <p class="figure-caption">Figure 3-61-6—Sulfidation failure of a carbon steel sight glass nipple on the right after 2 years in a crude unit. Original thickness is shown on left for comparison. Material was supposed to be 9Cr-1Mo.</p>
        </div>
        
        <p>g) Most refiners have instituted programs to identify low-Si carbon steel piping or components in sulfidation service by measuring the thickness of components in vulnerable piping systems. A small number of refiners have followed a PMI-type approach to measuring or otherwise determining the Si content of piping components.</p>
    </div>
    <div class="subsection">
        <h4>3.61.8 Related Mechanisms</h4>
        <p>Sulfidation is also known as sulfidic corrosion. High-temperature sulfidation in the presence of hydrogen is covered in 3.35.</p>
    </div>
    <div class="subsection">
        <h4>3.61.9 References</h4>
        <p>1. H.F. McConomy, "High Temperature Sulfidic Corrosion in Hydrogen-free Environments," API Proceedings, Vol. 43(III), 1963, pp. 78–96.</p>
        <p>2. J. Gutzeit, "High Temperature Sulfidic Corrosion of Steels," Process Industries Corrosion—The Theory and Practice," NACE International, Houston, TX, 1986, pp. 171–189.</p>
        <p>3. J. Gutzeit, R.D. Merrick, and L.R. Scharfstein, "Corrosion in Petroleum Refining and Petrochemical Operations," Metals Handbook, Volume 13, ASM International, Materials Park, OH, 1987, pp. 1262–1287.</p>
        <p>4. E.B. Backenstow et al., "High Temperature Hydrogen Sulfide Corrosion," CORROSION, Vol. 12, No. 1, 1956, pp. 6t–16t.</p>
        <p>5. NACE Task Group 176 Draft Report, "Overview of Sulfidic Corrosion in Petroleum Refining," NACE International, Houston, TX, 2003.</p>
        <p>6. API Recommended Practice 939-C, Guidelines for Avoiding Sulfidation (Sulfidic) Corrosion Failures in Oil Refineries, American Petroleum Institute, Washington, DC.</p>
        <p>7. API Recommended Practice 578, Guidelines for a Material Verification Program (MVP) for New and Existing Assets, American Petroleum Institute, Washington, DC.</p>
    </div>
    `,
    contentEs: `<h3>3.61 Sulfidación</h3>
    <div class="subsection">
        <h4>3.61.1 Descripción del Daño</h4>
        <p>Corrosión del acero al carbono y otras aleaciones resultante de su reacción con compuestos de azufre en ambientes de alta temperatura. La corrosión en presencia de hidrógeno se discute en 3.35, Corrosión por H<sub>2</sub>/H<sub>2</sub>S a alta temperatura. En esta discusión, la sulfidación se referirá a ambientes sulfídicos de alta temperatura sin hidrógeno. Este mecanismo también se conoce como corrosión sulfídica. Debido a la superficie lisa, grande y relativamente uniformemente corroída producida por la sulfidación, puede llevar a una falla tipo ruptura en lugar de una fuga localizada o de pinhole. Ambos tipos de sulfidación, con y sin hidrógeno presente, se tratan con mucho más detalle en la Referencia 6 (API 939-C).</p>
    </div>
    <div class="subsection">
        <h4>3.61.2 Materiales Afectados</h4>
        <p>a) Todos los materiales base hierro, incluyendo acero al carbono y aceros de baja aleación, aceros inoxidables de la serie 400 y de la serie 300, en ese orden desde el más susceptible al menos susceptible.</p>
        <p>b) Las aleaciones base níquel también se ven afectadas en diversos grados dependiendo de su composición, especialmente del contenido de cromo. Por encima de 1193 °F (645 °C), las aleaciones con alto contenido de níquel pueden sufrir una forma de sulfidación y pérdida de metal asociada con la formación de sulfuros de níquel debajo de la superficie del metal. Esto también se ha denominado corrosión en caliente. La susceptibilidad a esta forma de sulfidación aumenta con el aumento del contenido de níquel.</p>
        <p>c) Las aleaciones base cobre forman producto de corrosión por sulfuro a temperaturas más bajas que el acero al carbono.</p>
    </div>
    <div class="subsection">
        <h4>3.61.3 Factores Críticos</h4>
        <p>a) Los factores principales que afectan la sulfidación son la composición química del metal, la temperatura y la concentración de compuestos de azufre corrosivos (reactivos). Las condiciones de flujo también pueden afectar la tasa de daño.</p>
        <p>b) En general, la resistencia de las aleaciones base hierro y base níquel está determinada por el contenido de cromo del material. Aumentar el contenido de cromo aumenta significativamente la resistencia a la sulfidación. Los aceros inoxidables de la serie 300, como los Tipos 304, 316, 321 y 347, son altamente resistentes en la mayoría de los ambientes de proceso de sulfidación a alta temperatura en refinerías. Las aleaciones base níquel son similares a los aceros inoxidables en que niveles similares de cromo proporcionan una resistencia similar a la sulfidación; sin embargo, las aleaciones de níquel con poco o ningún cromo pueden tener una pobre resistencia a estos ambientes.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-61-1—Curvas McConomy modificadas que muestran el efecto típico de la temperatura en la sulfidación a alta temperatura de aceros y aceros inoxidables. (Referencia 3)</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-61-2—Multiplicador para las tasas de corrosión en la Figura 3-61-1 basado en el contenido de azufre del fluido de proceso. (Referencia 3)</p>
        </div>
        
        <p>c) La Figura 3-61-1 y la Figura 3-61-2 muestran los efectos típicos del aumento del contenido de cromo, la temperatura y el contenido de azufre en la pérdida de metal. Estas curvas solo indican las tendencias generales en los efectos de la composición química, la temperatura y el contenido de azufre en las tasas de corrosión. Se utilizan en el diseño para estimar la tasa de corrosión para un servicio particular, pero deben considerarse solo como tendencias, ya que las tasas observadas reales a menudo pueden variar sustancialmente. En muchos casos las predicciones son conservadoras, es decir, exageran las tasas de corrosión reales encontradas en servicio. Las referencias al final de esta sección proporcionan antecedentes adicionales sobre el desarrollo de estas curvas.</p>
        <p>d) El contenido de silicio del acero al carbono puede afectar significativamente su susceptibilidad a la sulfidación. Se ha encontrado que los aceros al carbono con contenido de Si inferior a 0.10 % sufren tasas de corrosión por sulfidación variables y a menudo más altas que el acero al carbono con contenido de silicio por encima de este nivel. (Los aceros al carbono con alto Si siguen siendo susceptibles a la sulfidación, pero el acero con bajo contenido de Si puede sufrir tasas más altas.) El acero calmado con silicio tiene más de 0.10 % de Si, mientras que los aceros no calmados generalmente no. Ha habido numerosos incidentes en la industria de refinación donde la tubería ASTM Grado A53 con bajo Si sufrió una pérdida de metal significativamente mayor que la tubería ASTM Grado A106 o los accesorios o bridas de tubería de acero al carbono estándar soldados a la tubería A53.</p>
        <p>e) La cantidad de pérdida de metal sufrida en un servicio particular se ve muy afectada por la capacidad del material para formar una capa protectora de sulfuro. Si bien la capa de sulfuro invariablemente se forma como producto de corrosión en la superficie del metal, el grado en que es protectora depende de su espesor, densidad, adherencia y completitud de cobertura, que dependen de su composición química y la severidad de la corriente de proceso, incluyendo el régimen de flujo.</p>
        <p>f) La sulfidación (sin H<sub>2</sub>) de las aleaciones base hierro comienza a temperaturas del metal superiores a 450 °F (230 °C) pero normalmente solo se convierte en una preocupación práctica por encima de 500 °F (260 °C). La experiencia ha demostrado que 500 °F (260 °C) es la temperatura de servicio más útil por encima de la cual centrar los esfuerzos de inspección, monitoreo y mitigación de la corrosión.</p>
        <p>g) Los aceites crudos y otras corrientes de hidrocarburos contienen compuestos de azufre a varias concentraciones. El contenido total de azufre se compone de muchas especies diferentes de azufre o sulfuro.</p>
        <p>h) La sulfidación es causada principalmente por H<sub>2</sub>S y otras especies de sulfuro reactivas formadas por la descomposición térmica de compuestos de azufre a altas temperaturas. Algunos compuestos de azufre reaccionan más fácilmente para formar H<sub>2</sub>S. Por lo tanto, puede ser engañoso predecir las tasas de corrosión basándose únicamente en el porcentaje en peso de azufre. Conocer el total de "azufre reactivo" en la corriente de proceso es clave para predecir o evaluar su corrosividad real.</p>
    </div>
    <div class="subsection">
        <h4>3.61.4 Unidades o Equipos Afectados</h4>
        <p>a) La sulfidación ocurre en tuberías y equipos en ambientes de alta temperatura donde se procesan corrientes líquidas, de vapor o mixtas que contienen azufre.</p>
        <p>b) Las unidades de crudo, vacío, FCC, coquizador y visbreaker, así como las secciones de alimentación de unidades de hidroprocesamiento antes de la inyección de hidrógeno [en cuyo punto la corrosión por H<sub>2</sub>/H<sub>2</sub>S a alta temperatura (3.35) comienza a gobernar], comúnmente procesan estas corrientes de alta temperatura que contienen azufre sin, o antes de, hidrógeno añadido intencionalmente.</p>
        <p>c) Los calentadores de coquizador fabricados con aleaciones de alto contenido de níquel como la aleación 800H han mostrado tasas de corrosión por sulfidación aceleradas en las secciones radiantes inferiores que operan con temperaturas del metal del tubo que exceden 1193 °F (645 °C) en comparación con tubos similares que operan por debajo de esta temperatura.</p>
        <p>d) Los calentadores que queman aceite, gas, coque y la mayoría de las otras fuentes de combustible pueden verse afectados dependiendo de los niveles de azufre en el combustible; ahora es poco común que los calentadores quemen algo que no sea gas, generalmente gas con bajo contenido de azufre para cumplir con las restricciones ambientales, especialmente en los Estados Unidos.</p>
    </div>
    <div class="subsection">
        <h4>3.61.5 Apariencia o Morfología del Daño</h4>
        <p>a) Dependiendo de las condiciones del servicio, la corrosión se presenta más a menudo en forma de adelgazamiento uniforme, pero también puede ocurrir como corrosión localizada o daño por corrosión-erosión de alta velocidad.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-61-3—Falla por sulfidación de una tubería de acero al carbono de 8 pulg. Nótese el adelgazamiento relativamente uniforme que resultó en una ruptura de tamaño considerable.</p>
        </div>
        
        <p>b) Si bien generalmente tiene una morfología de adelgazamiento uniforme, la cantidad de adelgazamiento puede variar en diferentes ubicaciones del sistema o en diferentes ubicaciones a lo largo de la longitud de un tramo de tubería.</p>
        <ul>
            <li>La diferencia en el grado de adelgazamiento entre la tubería con bajo Si (&lt;0.10 % Si) y la tubería con mayor Si (≥0.10 % Si) en el mismo sistema puede ser grande, con un cambio marcado en el espesor de pared restante en la transición. Véase la Figura 3-61-4 y la Figura 3-61-5.</li>
        </ul>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-4.png" class="figure-image">
            <p class="figure-caption">Figura 3-61-4—Falla por sulfidación que ilustra el efecto de la corrosión acelerada debido al bajo contenido de silicio. Esta sección de tubería de 8 pulg. en tubería de fondos de FCC estuvo en servicio a 150 psig (1 Mpa) a 650 °F a 700 °F (340 °C a 370 °C). El esquema de tubería en la Figura 3-61-5 ilustra la diferencia en la tasa de corrosión en comparación con los componentes adyacentes de alto silicio.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-5.png" class="figure-image">
            <p class="figure-caption">Figura 3-61-5—Estudio de espesor de la tubería de 8 pulg. mostrada en la Figura 3-61-4 anterior.</p>
        </div>
        
        <p>c) Una capa de sulfuro generalmente cubrirá la superficie de los componentes. Los depósitos pueden ser gruesos o delgados dependiendo de la aleación, la corrosividad de la corriente, y el régimen y velocidad del flujo del fluido.</p>
    </div>
    <div class="subsection">
        <h4>3.61.6 Prevención/Mitigación</h4>
        <p>a) La resistencia a la sulfidación generalmente se logra mediante la actualización a un acero con mayor contenido de cromo como 9Cr-1Mo.</p>
        <p>b) La tubería y los equipos construidos con acero inoxidable de la serie 300 macizo o revestido (o sobrepuesto) deberían proporcionar una resistencia significativa a la corrosión. El revestimiento de acero inoxidable de la serie 400 también debería proporcionar una mejora significativa sobre el acero al carbono. El acero inoxidable de la serie 400 macizo generalmente no se selecciona para tuberías u otros equipos que contienen presión debido a preocupaciones de fragilización y tenacidad a la fractura.</p>
        <p>c) El tratamiento de difusión de aluminio de componentes de acero al carbono y acero de baja aleación a veces se usa para reducir las tasas de sulfidación y minimizar la formación de incrustaciones; sin embargo, puede no ofrecer una protección completa.</p>
        <p>d) Para operaciones por encima de 1193 °F (645 °C), las tasas de sulfidación de las aleaciones con mayor contenido de níquel pueden reducirse seleccionando una aleación con menor contenido de Ni.</p>
    </div>
    <div class="subsection">
        <h4>3.61.7 Inspección y Monitoreo</h4>
        <p>a) El adelgazamiento en tuberías, tubos y otros equipos puede detectarse y medirse mediante medición de espesor por UT o RT. El adelgazamiento en recipientes a presión y tuberías de gran diámetro donde es posible la inspección interna puede detectarse mediante VT interna, típicamente seguida de UT.</p>
        <p>b) Se pueden utilizar sensores de monitoreo de espesor montados permanentemente.</p>
        <p>c) El adelgazamiento en los tubos del calentador puede detectarse mediante UT o mediante "smart pigging". El "smart pigging" proporciona una cobertura significativamente mayor que el UT puntual y puede encontrar adelgazamiento que el UT puntual no detecta.</p>
        <p>d) Las temperaturas reales de operación deben verificarse y compararse con el diseño. Las temperaturas y los niveles de azufre deben monitorearse para detectar aumentos por encima del diseño.</p>
        <p>e) Las temperaturas pueden monitorearse utilizando termopares en la piel del tubo y/o termografía infrarroja.</p>
        <p>f) Los MVP (programas de verificación de materiales) proactivos y retroactivos pueden usarse para la verificación de aleaciones y para verificar mezclas de aleaciones en servicios donde se anticipa sulfidación. (API 578 proporciona orientación sobre MVP.) Véase la Figura 3-61-6.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-6.png" class="figure-image">
            <p class="figure-caption">Figura 3-61-6—Falla por sulfidación de un niple de mirilla de acero al carbono a la derecha después de 2 años en una unidad de crudo. El espesor original se muestra a la izquierda para comparación. Se suponía que el material era 9Cr-1Mo.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-61-7.png" class="figure-image">
            <p class="figure-caption">Figura 3-61-7—Falla por sulfidación de un codo de tubería.</p>
        </div>
        
        <p>g) La mayoría de las refinerías han instituido programas para identificar tuberías o componentes de acero al carbono con bajo Si en servicio de sulfidación midiendo el espesor de los componentes en sistemas de tubería vulnerables. Un pequeño número de refinerías han seguido un enfoque tipo PMI para medir o determinar de otra manera el contenido de Si de los componentes de tubería.</p>
    </div>
    <div class="subsection">
        <h4>3.61.8 Mecanismos Relacionados</h4>
        <p>La sulfidación también se conoce como corrosión sulfídica. La sulfidación a alta temperatura en presencia de hidrógeno se trata en 3.35.</p>
    </div>
    <div class="subsection">
        <h4>3.61.9 Referencias</h4>
        <p>1. H.F. McConomy, "High Temperature Sulfidic Corrosion in Hydrogen-free Environments," API Proceedings, Vol. 43(III), 1963, pp. 78–96.</p>
        <p>2. J. Gutzeit, "High Temperature Sulfidic Corrosion of Steels," Process Industries Corrosion—The Theory and Practice," NACE International, Houston, TX, 1986, pp. 171–189.</p>
        <p>3. J. Gutzeit, R.D. Merrick, y L.R. Scharfstein, "Corrosion in Petroleum Refining and Petrochemical Operations," Metals Handbook, Volume 13, ASM International, Materials Park, OH, 1987, pp. 1262–1287.</p>
        <p>4. E.B. Backenstow et al., "High Temperature Hydrogen Sulfide Corrosion," CORROSION, Vol. 12, No. 1, 1956, pp. 6t–16t.</p>
        <p>5. NACE Task Group 176 Draft Report, "Overview of Sulfidic Corrosion in Petroleum Refining," NACE International, Houston, TX, 2003.</p>
        <p>6. API Recommended Practice 939-C, Guidelines for Avoiding Sulfidation (Sulfidic) Corrosion Failures in Oil Refineries, American Petroleum Institute, Washington, DC.</p>
        <p>7. API Recommended Practice 578, Guidelines for a Material Verification Program (MVP) for New and Existing Assets, American Petroleum Institute, Washington, DC.</p>
    </div>
    `
});