// Registrar el capítulo 3.14 de API 571
registerChapter('API571', {
    id: '3.14',
    title: "Caustic Corrosion",
    titleEs: "Corrosión Cáustica",
    content: `<h3>3.14 Caustic Corrosion</h3>
    <div class="subsection">
        <h4>3.14.1 Description of Damage</h4>
        <p>Localized corrosion due to the concentration of caustic (alkaline) solutions such as NaOH and KOH, and/or corrosive salts from those solutions, that usually occurs under evaporative or high heat transfer conditions (commonly called caustic gouging). Also, corrosion resulting in general thinning can occur at elevated temperatures, depending on alkali or caustic solution strength.</p>
    </div>
    <div class="subsection">
        <h4>3.14.2 Affected Materials</h4>
        <p>Primarily carbon steel, low-alloy steels, and 400 series SS. Carbon steel is the material most commonly used in situations where caustic corrosion is a concern. 300 series SS is generally resistant to caustic corrosion until passivity is damaged, which can occur in the approximate temperature range of 160 °F to 210 °F (70 °C to 100 °C), depending on the concentration. 300 series SS can also be susceptible to caustic SCC at these elevated temperatures. (See 3.15.)</p>
    </div>
    <div class="subsection">
        <h4>3.14.3 Critical Factors</h4>
        <p>a) Caustic (NaOH or KOH) must be present. The following are sources of caustic.</p>
        <p>Caustic is commonly added to treat BFW and may also enter inadvertently during regeneration of demineralizers.</p>
        <p>Caustic is sometimes added to process streams for acid neutralization or as a reactant to remove sulfur or chlorides.</p>
        <p>Alkaline solutions or salts may also enter process streams through leaks in condensers or other process equipment.</p>
        <p>Concentrated caustic is handled in the storage and feed equipment used for feeding caustic into BFW or process streams.</p>
        <p>b) In high-solution-strength caustic, temperatures above about 170 °F (75 °C), with the temperature limit depending on the caustic concentration, will cause general corrosion of carbon steel. (See Figure 3-15-1 in 3.15 on caustic SCC.)</p>
        <p>c) For localized caustic gouging to occur, a concentrating mechanism must exist to build up the caustic strength or salt concentration.</p>
        <p>Caustic can become concentrated by departure from nucleate boiling (DNB), evaporation, and deposition of salts.</p>
        <p>Higher temperatures help produce a concentrating mechanism, thereby increasing the corrosivity of the solution while also generally increasing the corrosion rate.</p>
        <p>d) Some contaminants, such as chlorides and hypochlorites, are known to increase the corrosivity of caustic solutions.</p>
        <p>e) Heat tracing may sometimes contribute to this problem.</p>
    </div>
    <div class="subsection">
        <h4>3.14.4 Affected Units or Equipment</h4>
        <p>a) Localized caustic corrosion (caustic gouging) is most often associated with boilers and steam-generating equipment including heat exchangers. This also applies to steam-generating equipment in H<sub>2</sub> manufacturing units and steam generators within other process units.</p>
        <p>b) Similar concentrating effects of caustic can occur where caustic is added to crude unit feed. Accelerated localized corrosion can occur in preheat exchangers, furnace tubes, and transfer lines, if the caustic is not effectively mixed in the oil stream.</p>
        <p>c) Units that use caustic for removing sulfur compounds from process streams can also be subject to caustic corrosion.</p>
        <p>d) Heat-traced tanks used for caustic storage and caustic feed equipment near the process injection location can suffer caustic corrosion if temperatures get too high.</p>
    </div>
    <div class="subsection">
        <h4>3.14.5 Appearance or Morphology of Damage</h4>
        <p>a) Caustic gouging is typically characterized by localized metal loss that may appear as grooves in a boiler tube or locally thinned areas under insulating deposits.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-14-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-14-1—ID deposits on carbon steel boiler tube with damage due to caustic corrosion.</p>
        </div>
        
        <p>b) Deposits may fill corroded depressions and mask damage below. Probing suspect areas with a sharp instrument may be required.</p>
        <p>c) Localized gouging may result along a waterline where corrosives concentrate. In vertical tubes, this may appear as a circumferential groove.</p>
        <p>d) In horizontal or sloped tubes, grooving may appear at the top of the tube or as longitudinal grooves on opposite sides of the tube.</p>
        <p>e) Corrosion of carbon steel in high-concentration caustic at elevated temperatures will be generalized but likely confined to the location of the high temperature, e.g. next to heat tracing.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-14-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-14-2—Cross section of tube in Figure 3-14-1 showing localized attack due to caustic corrosion.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.14.6 Prevention/Mitigation</h4>
        <p>a) In steam-generating equipment, caustic corrosion is best prevented through proper design. Damage can be minimized by reducing the amount of free caustic, by ensuring adequate water flooding and water flow, by ensuring proper burner management to minimize hot spots on heater tubes, and by minimizing the ingress of alkaline producing salts into condensers.</p>
        <p>b) In process equipment, caustic injection facilities should be designed to allow proper mixing and adequate dilution of caustic in order to avoid the concentration of caustic on hot metal surfaces.</p>
        <p>c) Carbon steel (and stainless steels) have serious corrosion problems in high-strength caustic solutions at elevated temperatures. Alloy 400 and some other nickel-based alloys exhibit much lower corrosion rates.</p>
    </div>
    <div class="subsection">
        <h4>3.14.7 Inspection and Monitoring</h4>
        <p>a) General Corrosion—UT using a straight beam or UT scanning or other similar techniques can measure general loss.</p>
        <p>b) Localized Corrosion—Manual UT, including UT scanning, or AUT can be used. Angle beam (SWUT or PAUT) or TOFD may be necessary to determine the extent of localized corrosion. RT has also been used within the limits of the technique.</p>
        <p>c) Permanently mounted thickness monitoring sensors can be used.</p>
        <p>d) Heat or steam tracing can cause localized corrosion at the point of contact due to locally high temperatures or improper installation. This is an area to focus on for inspection.</p>
        <p>e) Caustic injection sites should be examined and monitored as discussed in API 570 and API 574.</p>
        <p>f) When internal access is not available (e.g. steam equipment, tubing, small-diameter equipment, or equipment with ports), VT may be performed using a boroscope.</p>
    </div>
    <div class="subsection">
        <h4>3.14.8 Related Mechanisms</h4>
        <p>Caustic SCC (3.15). Caustic gouging has also been referred to as ductile gouging.</p>
    </div>
    <div class="subsection">
        <h4>3.14.9 References</h4>
        <p>1. ASM Handbook—Failure Analysis and Prevention, Volume 11, ASM International, Materials Park, OH.</p>
        <p>2. R.D. Port and H.M. Herro, The Nalco Guide to Boiler Failure Analysis, McGraw-Hill, New York, NY, 1991, pp. 58–70.</p>
    </div>
    `,
    contentEs: `<h3>3.14 Corrosión Cáustica</h3>
    <div class="subsection">
        <h4>3.14.1 Descripción del Daño</h4>
        <p>Corrosión localizada debido a la concentración de soluciones cáusticas (alcalinas) como NaOH y KOH, y/o sales corrosivas de esas soluciones, que generalmente ocurre bajo condiciones evaporativas o de alta transferencia de calor (comúnmente llamada socavación cáustica). Además, la corrosión que resulta en adelgazamiento general puede ocurrir a temperaturas elevadas, dependiendo de la fuerza de la solución alcalina o cáustica.</p>
    </div>
    <div class="subsection">
        <h4>3.14.2 Materiales Afectados</h4>
        <p>Principalmente acero al carbono, aceros de baja aleación y aceros inoxidables serie 400. El acero al carbono es el material más comúnmente utilizado en situaciones donde la corrosión cáustica es una preocupación. Los aceros inoxidables serie 300 son generalmente resistentes a la corrosión cáustica hasta que se daña la pasividad, lo que puede ocurrir en el rango de temperatura aproximado de 160 °F a 210 °F (70 °C a 100 °C), dependiendo de la concentración. Los aceros inoxidables serie 300 también pueden ser susceptibles a SCC cáustico a estas temperaturas elevadas. (Véase 3.15.)</p>
    </div>
    <div class="subsection">
        <h4>3.14.3 Factores Críticos</h4>
        <p>a) Debe estar presente cáustico (NaOH o KOH). Las siguientes son fuentes de cáustico.</p>
        <p>El cáustico se agrega comúnmente para tratar el agua de alimentación de caldera (BFW) y también puede entrar inadvertidamente durante la regeneración de desmineralizadores.</p>
        <p>A veces se agrega cáustico a las corrientes de proceso para la neutralización de ácidos o como reactivo para eliminar azufre o cloruros.</p>
        <p>Las soluciones alcalinas o sales también pueden entrar a las corrientes de proceso a través de fugas en condensadores u otros equipos de proceso.</p>
        <p>El cáustico concentrado se maneja en el equipo de almacenamiento y alimentación utilizado para alimentar cáustico al BFW o corrientes de proceso.</p>
        <p>b) En cáustico de alta concentración en solución, temperaturas superiores a unos 170 °F (75 °C), con el límite de temperatura dependiendo de la concentración de cáustico, causarán corrosión general del acero al carbono. (Véase la Figura 3-15-1 en 3.15 sobre SCC cáustico.)</p>
        <p>c) Para que ocurra la socavación cáustica localizada, debe existir un mecanismo de concentración para acumular la fuerza del cáustico o la concentración de sal.</p>
        <p>El cáustico puede concentrarse por desviación de la ebullición nucleada (DNB), evaporación y deposición de sales.</p>
        <p>Las temperaturas más altas ayudan a producir un mecanismo de concentración, aumentando así la corrosividad de la solución mientras que también generalmente aumenta la tasa de corrosión.</p>
        <p>d) Se sabe que algunos contaminantes, como cloruros e hipocloritos, aumentan la corrosividad de las soluciones cáusticas.</p>
        <p>e) El rastreo térmico a veces puede contribuir a este problema.</p>
    </div>
    <div class="subsection">
        <h4>3.14.4 Unidades o Equipos Afectados</h4>
        <p>a) La corrosión cáustica localizada (socavación cáustica) se asocia con mayor frecuencia a calderas y equipos de generación de vapor, incluyendo intercambiadores de calor. Esto también se aplica a equipos de generación de vapor en unidades de fabricación de H<sub>2</sub> y generadores de vapor dentro de otras unidades de proceso.</p>
        <p>b) Efectos de concentración similares de cáustico pueden ocurrir donde se agrega cáustico a la alimentación de la unidad de crudo. Puede ocurrir corrosión localizada acelerada en intercambiadores de precalentamiento, tubos de horno y líneas de transferencia, si el cáustico no se mezcla efectivamente en la corriente de aceite.</p>
        <p>c) Las unidades que utilizan cáustico para eliminar compuestos de azufre de las corrientes de proceso también pueden estar sujetas a corrosión cáustica.</p>
        <p>d) Los tanques con rastreo térmico utilizados para almacenamiento de cáustico y equipos de alimentación de cáustico cerca del lugar de inyección en el proceso pueden sufrir corrosión cáustica si las temperaturas son demasiado altas.</p>
    </div>
    <div class="subsection">
        <h4>3.14.5 Apariencia o Morfología del Daño</h4>
        <p>a) La socavación cáustica se caracteriza típicamente por pérdida de metal localizada que puede aparecer como surcos en un tubo de caldera o áreas localmente adelgazadas bajo depósitos aislantes.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-14-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-14-1—Depósitos en el diámetro interior de un tubo de caldera de acero al carbono con daño debido a corrosión cáustica.</p>
        </div>
        
        <p>b) Los depósitos pueden llenar las depresiones corroídas y enmascarar el daño debajo. Puede ser necesario sondear las áreas sospechosas con un instrumento afilado.</p>
        <p>c) Puede producirse socavación localizada a lo largo de una línea de agua donde se concentran los corrosivos. En tubos verticales, esto puede aparecer como un surco circunferencial.</p>
        <p>d) En tubos horizontales o inclinados, la socavación puede aparecer en la parte superior del tubo o como surcos longitudinales en lados opuestos del tubo.</p>
        <p>e) La corrosión del acero al carbono en cáustico de alta concentración a temperaturas elevadas será generalizada pero probablemente confinada a la ubicación de alta temperatura, por ejemplo, junto al rastreo térmico.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-14-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-14-2—Sección transversal del tubo de la Figura 3-14-1 que muestra ataque localizado debido a corrosión cáustica.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.14.6 Prevención/Mitigación</h4>
        <p>a) En equipos de generación de vapor, la corrosión cáustica se previene mejor mediante un diseño adecuado. El daño puede minimizarse reduciendo la cantidad de cáustico libre, asegurando un inundamiento y flujo de agua adecuados, asegurando una gestión adecuada del quemador para minimizar puntos calientes en los tubos del calentador, y minimizando la entrada de sales productoras de alcalinidad en los condensadores.</p>
        <p>b) En equipos de proceso, las instalaciones de inyección de cáustico deben diseñarse para permitir una mezcla adecuada y dilución suficiente del cáustico para evitar la concentración de cáustico en superficies metálicas calientes.</p>
        <p>c) El acero al carbono (y los aceros inoxidables) tienen problemas graves de corrosión en soluciones cáusticas de alta concentración a temperaturas elevadas. La Aleación 400 y algunas otras aleaciones base níquel exhiben tasas de corrosión mucho más bajas.</p>
    </div>
    <div class="subsection">
        <h4>3.14.7 Inspección y Monitoreo</h4>
        <p>a) Corrosión General—UT usando haz recto o escaneo UT u otras técnicas similares puede medir la pérdida general.</p>
        <p>b) Corrosión Localizada—UT manual, incluyendo escaneo UT, o AUT puede usarse. Puede ser necesario haz angular (SWUT o PAUT) o TOFD para determinar la extensión de la corrosión localizada. RT también se ha utilizado dentro de los límites de la técnica.</p>
        <p>c) Pueden usarse sensores de monitoreo de espesor montados permanentemente.</p>
        <p>d) El rastreo térmico de calor o vapor puede causar corrosión localizada en el punto de contacto debido a temperaturas localmente altas o instalación incorrecta. Esta es un área para enfocarse en la inspección.</p>
        <p>e) Los sitios de inyección de cáustico deben examinarse y monitorearse como se discute en API 570 y API 574.</p>
        <p>f) Cuando no hay acceso interno (por ejemplo, equipos de vapor, tubería, equipos de diámetro pequeño o equipos con puertos), VT puede realizarse usando un boroscopio.</p>
    </div>
    <div class="subsection">
        <h4>3.14.8 Mecanismos Relacionados</h4>
        <p>SCC cáustico (3.15). La socavación cáustica también se ha referido como socavación dúctil.</p>
    </div>
    <div class="subsection">
        <h4>3.14.9 Referencias</h4>
        <p>1. ASM Handbook—Failure Analysis and Prevention, Volume 11, ASM International, Materials Park, OH.</p>
        <p>2. R.D. Port y H.M. Herro, The Nalco Guide to Boiler Failure Analysis, McGraw-Hill, New York, NY, 1991, pp. 58–70.</p>
    </div>
    `
});