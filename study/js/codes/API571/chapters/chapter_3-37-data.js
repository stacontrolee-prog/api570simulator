// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 3-37
registerChapter('API571', {
    id: "3.37",
    title: "Hydrochloric Acid Corrosion",
    titleEs: "Corrosión por Ácido Clorhídrico",
    content: `<h3>3.37 Hydrochloric Acid Corrosion</h3>
    <div class="subsection">
        <h4>3.37.1 Description of Damage</h4>
        <p>a) Hydrochloric acid (aqueous HCl) causes both general and localized corrosion and is very aggressive to most common materials of construction across a wide range of concentrations.</p>
        <p>b) Damage in refineries is most often associated with dew point corrosion in which vapors containing water and hydrogen chloride condense from the overhead stream of a distillation, fractionation, or stripping tower. The first water droplets that condense can be highly acidic (low pH) and promote high corrosion rates.</p>
    </div>
    <div class="subsection">
        <h4>3.37.2 Affected Materials</h4>
        <p>All common materials of construction used in refineries.</p>
    </div>
    <div class="subsection">
        <h4>3.37.3 Critical Factors</h4>
        <p>a) HCl acid concentration, temperature, and alloy composition.</p>
        <p>b) The severity of corrosion increases with increasing HCl concentration and increasing temperature.</p>
        <p>c) Aqueous HCl can form beneath deposits of ammonium chloride or amine hydrochloride salts in exchangers and piping. The deposits readily absorb water from the process stream or from injected wash water. Hydrogen chloride gas is normally not corrosive in dry process streams but becomes very corrosive where water is available to form hydrochloric acid.</p>
        <p>d) Carbon steel and low-alloy steels are subject to excessive corrosion when exposed to any concentration of HCl acid that produces a pH below about 4.5.</p>
        <p>e) 300 series SS and 400 series SS are not usefully resistant to HCl at any concentration or temperature.</p>
        <p>f) Alloy 400, titanium, and some other nickel-based alloys have good resistance to dilute HCl acid in many refinery applications.</p>
        <p>g) The presence of oxidizing agents (oxygen, ferric and cupric ions) will increase the corrosion rate, particularly for Alloy 400 and Alloy B-2. Titanium performs well in oxidizing conditions but fails rapidly in dry HCl service.</p>
    </div>
    <div class="subsection">
        <h4>3.37.4 Affected Units or Equipment</h4>
        <p>HCl corrosion is found in several units, especially crude and vacuum units, hydroprocessing units, and catalytic reformer units.</p>
        <p>a) Crude units.</p>
        <p>In the atmospheric tower overhead system, corrosion from HCl acid occurs as the first droplets of water condense from the vapor stream off the top of the tower. This water can have a very low pH and can result in high rates of corrosion in piping, as well as exchanger shells, tubes and header boxes, and cold dead-legs.</p>
        <p>HCl corrosion can also be a problem in the vacuum ejector and condensing equipment off the top of the vacuum tower.</p>
        <p>b) Hydroprocessing units.</p>
        <p>Chlorides may enter the unit as inorganic or organic chloride in the hydrocarbon feed, or with the recycle hydrogen, and react to form HCl.</p>
        <p>Ammonium chloride salts can form in various parts of the unit, including the effluent side of the hot feed/effluent exchangers because both NH<sub>3</sub> and HCl are present and they may condense with water in the effluent train.</p>
        <p>HCl-containing streams can migrate through the fractionation section, resulting in severe acid dew point corrosion at the mixing point where the stream contacts water.</p>
        <p>c) Catalytic reforming units.</p>
        <p>Chlorides may be stripped from the catalyst and react to form HCl that carries through the effluent train, regeneration system, stabilizer tower, debutanizer tower, and feed/preheat exchangers.</p>
        <p>HCl-containing vapors can migrate through the gas plant fractionation section, resulting in corrosion at mix points where HCl-containing vapor streams mix with streams containing free water. HCl corrosion can also occur in these streams where they cool below the acid dew point and in water boots and lines off the water boots.</p>
    </div>
    <div class="subsection">
        <h4>3.37.5 Appearance or Morphology of Damage</h4>
        <p>a) Carbon steel and low-alloy steels suffer uniform thinning, localized corrosion, or under-deposit attack.</p>
        <p>b) 300 series SS and 400 series SS will often suffer pitting attack, and 300 series SS may experience Cl<sup>−</sup> SCC if the temperature is sufficiently high. (See 3.17.)</p>
    </div>
    <div class="subsection">
        <h4>3.37.6 Prevention/Mitigation</h4>
        <p>a) Crude units.</p>
        <p>Optimizing the crude oil tank water separation and withdrawal and crude desalting operation will help reduce chloride content in the feed to the crude tower. A common target is 20 ppm or fewer chlorides in the overhead accumulator water.</p>
        <p>Upgrading carbon steel to nickel-based alloys or titanium can reduce HCl acid corrosion problems.</p>
        <p>Water wash can be added to quench the overhead stream and to help dilute the condensing hydrochloric acid concentration.</p>
        <p>Caustic injection downstream of the desalter is another common method used to reduce the amount of HCl going overhead. Proper design and operating guidelines should be followed to avoid caustic SCC (3.15) and fouling in the feed preheat train.</p>
        <p>Various combinations of ammonia, neutralizing amines, and filming amines can be injected in the atmospheric tower overhead line before the water dew point.</p>
        <p>Well-maintained process monitoring locations, e.g. for measuring chloride content, water injection rates, and chemical injection rates, are important for managing HCl corrosion.</p>
        <p>b) Hydroprocessing.</p>
        <p>Carryover of water and chloride salts, including neutralizing amine hydrochloride salts, should be minimized.</p>
        <p>HCl in H<sub>2</sub> streams should be minimized (e.g. by installing scrubbers or guard beds to remove HCl from hydrogen produced in catalytic reforming units).</p>
        <p>Corrosion-resistant nickel-based alloys should be used where necessary.</p>
        <p>Well-maintained process monitoring locations are important for minimizing the effects of HCl corrosion.</p>
        <p>c) Catalytic reforming.</p>
        <p>Same as hydroprocessing, but in addition, water washing the hydrocarbon stream has also been used to remove the highly water-soluble chlorides. Special care in the design and operation of this equipment is needed. Minimizing water and/or oxygenates in the feed will reduce stripping of chlorides from the catalyst.</p>
        <p>Special adsorbents in chloride beds and chloride treaters can be used to remove chlorides from the recycle hydrogen streams and from liquid hydrocarbon streams.</p>
        <p>Well-maintained process monitoring locations are important for minimizing the effects of HCl corrosion.</p>
    </div>
    <div class="subsection">
        <h4>3.37.7 Inspection and Monitoring</h4>
        <p>a) Hydrochloric acid causes both general and localized corrosion and is very aggressive to most common materials of construction, especially carbon steel, across a wide range of concentrations.</p>
        <p>b) Where applicable, VT should be performed on all accessible components with the potential for hydrochloric acid corrosion. These areas of concern can be characterized by orange-yellow discoloration of the affected material with scale buildup and various levels of deterioration.</p>
        <p>c) UT thickness mapping, including AUT, can be utilized to determine the extent of localized thinning.</p>
        <p>d) RT can be utilized to find or monitor localized thinning in piping components. RT is often performed at transition components (e.g. elbows, three-way or four-way fittings, and dead-legs).</p>
        <p>e) Strategically placed corrosion probes and/or corrosion coupons can provide additional information on the rate and extent of damage.</p>
        <p>f) Permanently mounted thickness monitoring sensors can be used.</p>
        <p>g) The pH of the water in the boot of the atmospheric tower overhead accumulator should be checked regularly. Other variables including chloride and iron content are typically checked on a less frequent basis but do need to be monitored regularly. The water draws from fractionator and stripper tower overhead drums in hydroprocessing and catalytic reformer units should also be checked regularly.</p>
    </div>
    <div class="subsection">
        <h4>3.37.8 Related Mechanisms</h4>
        <p>Ammonium chloride corrosion (3.6), Cl<sup>−</sup> SCC (3.17), and aqueous organic acid corrosion (3.7).</p>
    </div>
    <div class="subsection">
        <h4>3.37.9 References</h4>
        <p>1. ASM Handbook—Corrosion, Volume 13, ASM International, Materials Park, OH.</p>
        <p>2. A. Bagdasarian et al., "Crude Unit Corrosion and Corrosion Control," Paper No. 615, Corrosion/96, NACE International, Houston, TX.</p>
        <p>3. NACE Publication 34105, Effect of Nonextractable Chlorides on Refinery Corrosion and Fouling, NACE International, Houston, TX.</p>
    </div>
    `,
    contentEs: `<h3>3.37 Corrosión por Ácido Clorhídrico</h3>
    <div class="subsection">
        <h4>3.37.1 Descripción del Daño</h4>
        <p>a) El ácido clorhídrico (HCl acuoso) causa tanto corrosión general como localizada y es muy agresivo para la mayoría de los materiales de construcción comunes en un amplio rango de concentraciones.</p>
        <p>b) El daño en las refinerías se asocia con mayor frecuencia a la corrosión por punto de rocío, en la cual los vapores que contienen agua y cloruro de hidrógeno se condensan de la corriente de cabeza de una torre de destilación, fraccionamiento o extracción. Las primeras gotas de agua que se condensan pueden ser altamente ácidas (pH bajo) y promover altas tasas de corrosión.</p>
    </div>
    <div class="subsection">
        <h4>3.37.2 Materiales Afectados</h4>
        <p>Todos los materiales de construcción comunes utilizados en refinerías.</p>
    </div>
    <div class="subsection">
        <h4>3.37.3 Factores Críticos</h4>
        <p>a) Concentración de ácido HCl, temperatura y composición de la aleación.</p>
        <p>b) La severidad de la corrosión aumenta con el aumento de la concentración de HCl y el aumento de la temperatura.</p>
        <p>c) El HCl acuoso puede formarse debajo de depósitos de cloruro de amonio o sales de clorhidrato de amina en intercambiadores y tuberías. Los depósitos absorben fácilmente agua de la corriente de proceso o del agua de lavado inyectada. El gas cloruro de hidrógeno normalmente no es corrosivo en corrientes de proceso secas, pero se vuelve muy corrosivo donde hay agua disponible para formar ácido clorhídrico.</p>
        <p>d) El acero al carbono y los aceros de baja aleación están sujetos a una corrosión excesiva cuando se exponen a cualquier concentración de ácido HCl que produzca un pH inferior a aproximadamente 4.5.</p>
        <p>e) Los aceros inoxidables de la serie 300 y la serie 400 no ofrecen resistencia útil al HCl en ninguna concentración o temperatura.</p>
        <p>f) La aleación 400, el titanio y algunas otras aleaciones base níquel tienen buena resistencia al ácido HCl diluido en muchas aplicaciones de refinería.</p>
        <p>g) La presencia de agentes oxidantes (oxígeno, iones férricos y cúpricos) aumentará la tasa de corrosión, particularmente para la aleación 400 y la aleación B-2. El titanio funciona bien en condiciones oxidantes pero falla rápidamente en servicio con HCl seco.</p>
    </div>
    <div class="subsection">
        <h4>3.37.4 Unidades o Equipos Afectados</h4>
        <p>La corrosión por HCl se encuentra en varias unidades, especialmente unidades de crudo y vacío, unidades de hidroprocesamiento y unidades de reformado catalítico.</p>
        <p>a) Unidades de crudo.</p>
        <p>En el sistema de cabeza de la torre atmosférica, la corrosión por ácido HCl ocurre cuando las primeras gotas de agua se condensan de la corriente de vapor en la parte superior de la torre. Esta agua puede tener un pH muy bajo y puede resultar en altas tasas de corrosión en tuberías, así como en carcasas de intercambiadores, tubos y cajas de cabezal, y en ramas muertas frías.</p>
        <p>La corrosión por HCl también puede ser un problema en el eyector de vacío y el equipo de condensación en la parte superior de la torre de vacío.</p>
        <p>b) Unidades de hidroprocesamiento.</p>
        <p>Los cloruros pueden ingresar a la unidad como cloruro inorgánico u orgánico en la alimentación de hidrocarburos, o con el hidrógeno de recirculación, y reaccionar para formar HCl.</p>
        <p>Las sales de cloruro de amonio pueden formarse en varias partes de la unidad, incluyendo el lado de efluente de los intercambiadores de alimentación/efluente calientes porque tanto el NH<sub>3</sub> como el HCl están presentes y pueden condensarse con agua en el tren de efluente.</p>
        <p>Las corrientes que contienen HCl pueden migrar a través de la sección de fraccionamiento, resultando en una severa corrosión por punto de rocío ácido en el punto de mezcla donde la corriente entra en contacto con el agua.</p>
        <p>c) Unidades de reformado catalítico.</p>
        <p>Los cloruros pueden ser arrastrados del catalizador y reaccionar para formar HCl que circula a través del tren de efluente, el sistema de regeneración, la torre estabilizadora, la torre debutanizadora y los intercambiadores de alimentación/precalentamiento.</p>
        <p>Los vapores que contienen HCl pueden migrar a través de la sección de fraccionamiento de la planta de gas, resultando en corrosión en los puntos de mezcla donde las corrientes de vapor que contienen HCl se mezclan con corrientes que contienen agua libre. La corrosión por HCl también puede ocurrir en estas corrientes donde se enfrían por debajo del punto de rocío ácido y en las botas de agua y las tuberías fuera de las botas de agua.</p>
    </div>
    <div class="subsection">
        <h4>3.37.5 Apariencia o Morfología del Daño</h4>
        <p>a) El acero al carbono y los aceros de baja aleación sufren adelgazamiento uniforme, corrosión localizada o ataque debajo de depósitos.</p>
        <p>b) Los aceros inoxidables de la serie 300 y la serie 400 a menudo sufren ataque por picaduras, y los aceros inoxidables de la serie 300 pueden experimentar SCC por Cl<sup>−</sup> si la temperatura es suficientemente alta. (Véase 3.17.)</p>
    </div>
    <div class="subsection">
        <h4>3.37.6 Prevención/Mitigación</h4>
        <p>a) Unidades de crudo.</p>
        <p>Optimizar la separación y extracción de agua del tanque de crudo y la operación de desalado del crudo ayudará a reducir el contenido de cloruro en la alimentación a la torre de crudo. Un objetivo común es 20 ppm o menos de cloruros en el agua del acumulador de cabeza.</p>
        <p>Mejorar el acero al carbono a aleaciones base níquel o titanio puede reducir los problemas de corrosión por ácido HCl.</p>
        <p>Se puede agregar lavado con agua para enfriar la corriente de cabeza y para ayudar a diluir la concentración de ácido clorhídrico que se condensa.</p>
        <p>La inyección de cáustico aguas abajo del desalador es otro método común utilizado para reducir la cantidad de HCl que va a cabeza. Deben seguirse las pautas adecuadas de diseño y operación para evitar SCC por cáustico (3.15) y ensuciamiento en el tren de precalentamiento de alimentación.</p>
        <p>Se pueden inyectar varias combinaciones de amoníaco, aminas neutralizantes y aminas formadoras de película en la línea de cabeza de la torre atmosférica antes del punto de rocío del agua.</p>
        <p>Las ubicaciones de monitoreo de proceso bien mantenidas, por ejemplo, para medir el contenido de cloruro, las tasas de inyección de agua y las tasas de inyección química, son importantes para gestionar la corrosión por HCl.</p>
        <p>b) Hidroprocesamiento.</p>
        <p>Debe minimizarse el arrastre de agua y sales de cloruro, incluyendo sales de clorhidrato de amina neutralizante.</p>
        <p>Debe minimizarse el HCl en las corrientes de H<sub>2</sub> (por ejemplo, instalando lavadores o lechos de guardia para eliminar el HCl del hidrógeno producido en las unidades de reformado catalítico).</p>
        <p>Deben utilizarse aleaciones base níquel resistentes a la corrosión donde sea necesario.</p>
        <p>Las ubicaciones de monitoreo de proceso bien mantenidas son importantes para minimizar los efectos de la corrosión por HCl.</p>
        <p>c) Reformado catalítico.</p>
        <p>Lo mismo que en hidroprocesamiento, pero además, también se ha utilizado el lavado con agua de la corriente de hidrocarburos para eliminar los cloruros altamente solubles en agua. Se necesita un cuidado especial en el diseño y operación de este equipo. Minimizar el agua y/o oxigenados en la alimentación reducirá el arrastre de cloruros del catalizador.</p>
        <p>Se pueden utilizar adsorbentes especiales en lechos de cloruro y tratadores de cloruro para eliminar los cloruros de las corrientes de hidrógeno de recirculación y de las corrientes de hidrocarburo líquido.</p>
        <p>Las ubicaciones de monitoreo de proceso bien mantenidas son importantes para minimizar los efectos de la corrosión por HCl.</p>
    </div>
    <div class="subsection">
        <h4>3.37.7 Inspección y Monitoreo</h4>
        <p>a) El ácido clorhídrico causa tanto corrosión general como localizada y es muy agresivo para la mayoría de los materiales de construcción comunes, especialmente el acero al carbono, en un amplio rango de concentraciones.</p>
        <p>b) Cuando sea aplicable, se debe realizar VT en todos los componentes accesibles con potencial de corrosión por ácido clorhídrico. Estas áreas de preocupación pueden caracterizarse por la decoloración amarillo-naranja del material afectado con acumulación de incrustaciones y varios niveles de deterioro.</p>
        <p>c) El mapeo de espesor por UT, incluyendo AUT, puede utilizarse para determinar el alcance del adelgazamiento localizado.</p>
        <p>d) La RT puede utilizarse para encontrar o monitorear el adelgazamiento localizado en componentes de tubería. La RT a menudo se realiza en componentes de transición (por ejemplo, codos, conexiones de tres o cuatro vías, y ramas muertas).</p>
        <p>e) Las sondas de corrosión estratégicamente colocadas y/o los cupones de corrosión pueden proporcionar información adicional sobre la tasa y el alcance del daño.</p>
        <p>f) Se pueden utilizar sensores de monitoreo de espesor montados permanentemente.</p>
        <p>g) El pH del agua en la bota del acumulador de cabeza de la torre atmosférica debe verificarse regularmente. Otras variables, incluido el contenido de cloruro y hierro, generalmente se verifican con menos frecuencia pero necesitan monitorearse regularmente. Las extracciones de agua de los tambores de cabeza de torres fraccionadoras y extractoras en unidades de hidroprocesamiento y reformado catalítico también deben verificarse regularmente.</p>
    </div>
    <div class="subsection">
        <h4>3.37.8 Mecanismos Relacionados</h4>
        <p>Corrosión por cloruro de amonio (3.6), SCC por Cl<sup>−</sup> (3.17) y corrosión por ácidos orgánicos acuosos (3.7).</p>
    </div>
    <div class="subsection">
        <h4>3.37.9 Referencias</h4>
        <p>1. ASM Handbook—Corrosion, Volumen 13, ASM International, Materials Park, OH.</p>
        <p>2. A. Bagdasarian et al., "Crude Unit Corrosion and Corrosion Control," Paper No. 615, Corrosion/96, NACE International, Houston, TX.</p>
        <p>3. NACE Publication 34105, Effect of Nonextractable Chlorides on Refinery Corrosion and Fouling, NACE International, Houston, TX.</p>
    </div>
    `
});