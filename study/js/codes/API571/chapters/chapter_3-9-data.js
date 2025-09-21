// Registrar el capítulo 3.9 de API 571
registerChapter('API571', {
    id: '3.9',
    title: "Boiler Water and Steam Condensate Corrosion",
    titleEs: "Corrosión por Agua de Caldera y Condensado de Vapor",
    content: `<h3>3.9 Boiler Water and Steam Condensate Corrosion</h3>
    <div class="subsection">
        <h4>3.9.1 Description of Damage</h4>
        <p>General corrosion and pitting in the boiler system and condensate return system. It is primarily the result of dissolved oxygen and/or carbon dioxide, which could lead to oxygen pitting corrosion and carbonic acid corrosion, respectively. Flow accelerated corrosion (FAC) in these systems may occur either as general wall thinning corrosion or localized corrosion at high velocity, high turbulence, or change of flow direction locations.</p>
    </div>
    <div class="subsection">
        <h4>3.9.2 Affected Materials</h4>
        <p>Carbon steel and low-alloy steels.</p>
    </div>
    <div class="subsection">
        <h4>3.9.3 Critical Factors</h4>
        <p>a) Critical factors are the concentration of dissolved gas (oxygen and/or carbon dioxide), pH, temperature, quality of the feedwater, and the specific feedwater treating system.</p>
        <p>b) Corrosion protection in the boiler is accomplished by laying down and continuously maintaining a layer of protective Fe<sub>3</sub>O<sub>4</sub> (magnetite).</p>
        <p>c) In the case of FAC, this protective oxide layer is dissolved or prevented from forming. Carbon steel is the most affected. Alloying elements in low-alloy steels such as Cr, Cu, and Mo can enhance corrosion resistance. The most critical temperature for FAC is 300 °F (150 °C), and it decreases with increasing pH. Too low an oxygen concentration increases the corrosion due to the inability to form the protective oxide layer. At least 3 ppb to 7 ppb may be required to form the oxide layer.</p>
        <p>d) The chemical treatment for scale and deposit control must be adjusted to coordinate with the oxygen scavenger for the specific water service and BFW treating system.</p>
        <p>e) Oxygen pitting can occur if the deaeration and oxygen scavenging treatment are not working correctly.</p>
    </div>
    <div class="subsection">
        <h4>3.9.4 Affected Units or Equipment</h4>
        <p>a) Corrosion can occur throughout the boiler water treatment system, including the deaerating equipment, feedwater lines, and pumps, as well as in the steam generation system including stage heaters, economizers, and boiler tubes as well as process unit steam generators.</p>
        <p>b) Corrosion in the condensate return system as well as in process unit reboilers and associated piping may be due to carbon dioxide, although oxygen pitting from oxygen contamination is also possible as well as FAC if the proper conditions are present.</p>
        <p>c) Threaded connections are especially susceptible.</p>
    </div>
    <div class="subsection">
        <h4>3.9.5 Appearance or Morphology of Damage</h4>
        <p>a) Corrosion from oxygen is normally a pitting type damage. It can occur anywhere in the system there is in leakage of air or even if only very small quantities break through the oxygen scavenging treatment. Oxygen is particularly aggressive in equipment such as closed heaters and economizers where there is a rapid water temperature rise.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-9-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-9-1—Pits caused by oxygen corrosion.</p>
        </div>
        
        <p>b) Carbon dioxide corrosion is normally smooth, but it can also cause grooving of the pipe wall.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-9-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-9-2—Jagged fir-tree pattern of corrosion inside a tilted steel pipe caused by condensing steam containing high concentrations of carbon dioxide.</p>
        </div>
        
        <p>c) Corrosion may be localized at areas where gases in the water are most concentrated, such as at the water to vapor interface level in a vertical reboiler.</p>
        <p>d) FAC failures are often located in areas where there is a flow disturbance such as an orifice run, flow meter, elbow, reducer, or other types of fittings. The wall thinning occurs just downstream of these flow disturbances, leaving behind a corroded surface free of oxide scale, sometimes with a specific flow pattern. FAC has led to rupture of piping.</p>
    </div>
    <div class="subsection">
        <h4>3.9.6 Prevention/Mitigation</h4>
        <p>a) Oxygen removal from BFW typically includes mechanical deaeration followed by scavenging with catalyzed sodium sulfite or hydrazine, depending on the system pressure level. Proper deaerator operation and accurately controlled scavenger chemical addition are important. A residual of the oxygen scavenger is carried into the steam generation system to handle any oxygen ingress beyond the deaerator.</p>
        <p>b) If the scale and deposit control along with the magnetite maintenance treatment scheme do not minimize carbon dioxide corrosion in the condensate return system, an amine inhibitor treatment might be required.</p>
        <p>c) Boiler water needs to be blown down to control the concentration of solids and non-condensable gases. Steam equipment should be checked to ensure there are working non-condensable vents. It is also important that steam piping and equipment allow for blowdown of condensation (e.g. using steam traps and functional mechanical steam separation devices like coalescers).</p>
        <p>d) Water treatment, sampling, and analysis are the common methods used to ensure integrity and prevent boiler water and condensate corrosion. It may be necessary to modify or improve the water treatment program if problems such as a ruptured boiler tube or condensate leaks occur in the boiler water or condensate systems.</p>
        <p>e) The pH, temperature, and oxygen concentration are the main parameters that can affect the potential for FAC. BFW pH from 9.2 to 9.6 is often recommended. Upgrading the material to Cr-Mo steel usually solves the problem. Too low or total absence of oxygen is no longer considered the best corrosion control for BFW and condensate. Oxygenated treatments that deliberately inject oxygen into the condensate and BFW system or the use of oxygen scavenger at reduced concentrations may be necessary to maintain oxygen levels within the desired range to mitigate FAC.</p>
    </div>
    <div class="subsection">
        <h4>3.9.7 Inspection and Monitoring</h4>
        <p>a) Monitoring the appropriate parameters can indicate whether the treatment program is performing satisfactorily. Parameters that can be monitored through analysis include pH, alkalinity, hardness, conductivity, chlorine or residual biocide, dissolved gases (oxygen and carbon dioxide), iron, copper, and total dissolved solids.</p>
        <p>b) Vacuum testing can be used to check for air ingress into the condenser hotwell.</p>
        <p>c) UT and RT methods can be used to monitor for pipe wall thinning.</p>
        <p>d) For boilers, there are no practical online inspection methods. UT and RT can be performed on boiler tubes and other boiler components when the system is offline.</p>
    </div>
    <div class="subsection">
        <h4>3.9.8 Related Mechanisms</h4>
        <p>CO<sub>2</sub> corrosion (3.18), corrosion fatigue (3.21), erosion/erosion-corrosion (3.27), oxygenated water corrosion (3.49), and ammonia SCC of copper alloys (3.4).</p>
    </div>
    <div class="subsection">
        <h4>3.9.9 References</h4>
        <p>1. Betz Handbook of Industrial Water Conditioning, Eighth Edition, Betz Laboratories, Trevose, PA, 1980.</p>
        <p>2. R.D. Port and H.M. Herro, The Nalco Guide to Boiler Failure Analysis, McGraw-Hill, New York, NY, 1991.</p>
        <p>3. NACE SP0590, Prevention, Detection, and Correction of Deaerator Cracking, NACE International, Houston, TX.</p>
        <p>4. T.Y. Chen et al., "Condensate Corrosion in Steam Generating Systems," Paper No. 98718, Corrosion/98, NACE International, Houston, TX.</p>
        <p>5. R.B. Dooley and V.K. Chexal, "Flow-accelerated Corrosion," Paper No. 99347, Corrosion/99, NACE International, Houston, TX.</p>
        <p>6. Nuclear Safety NEW/CSNI/R(2014), CODAP Topical Report: "Flow Accelerated Corrosion (FAC) of Carbon Steel and Low Alloy Steel Piping in Commercial Nuclear Power Plants," https://www.oecd-nea.org/nsd/docs/2014/csni-r2014-6.pdf, June 2014.</p>
    </div>
    `,
    contentEs: `<h3>3.9 Corrosión por Agua de Caldera y Condensado de Vapor</h3>
    <div class="subsection">
        <h4>3.9.1 Descripción del Daño</h4>
        <p>Corrosión general y picaduras en el sistema de la caldera y el sistema de retorno de condensado. Es principalmente el resultado de oxígeno disuelto y/o dióxido de carbono, lo que podría llevar a corrosión por picaduras de oxígeno y corrosión por ácido carbónico, respectivamente. La corrosión acelerada por flujo (FAC) en estos sistemas puede ocurrir como corrosión general de adelgazamiento de pared o corrosión localizada en áreas de alta velocidad, alta turbulencia o cambio de dirección del flujo.</p>
    </div>
    <div class="subsection">
        <h4>3.9.2 Materiales Afectados</h4>
        <p>Acero al carbono y aceros de baja aleación.</p>
    </div>
    <div class="subsection">
        <h4>3.9.3 Factores Críticos</h4>
        <p>a) Los factores críticos son la concentración de gas disuelto (oxígeno y/o dióxido de carbono), pH, temperatura, calidad del agua de alimentación y el sistema específico de tratamiento del agua de alimentación.</p>
        <p>b) La protección contra la corrosión en la caldera se logra mediante la formación y mantenimiento continuo de una capa protectora de Fe<sub>3</sub>O<sub>4</sub> (magnetita).</p>
        <p>c) En el caso de FAC, esta capa de óxido protectora se disuelve o se evita su formación. El acero al carbono es el más afectado. Los elementos de aleación en aceros de baja aleación como Cr, Cu y Mo pueden mejorar la resistencia a la corrosión. La temperatura más crítica para FAC es 300 °F (150 °C), y disminuye con el aumento del pH. Una concentración de oxígeno demasiado baja aumenta la corrosión debido a la incapacidad de formar la capa de óxido protectora. Pueden requerirse al menos 3 ppb a 7 ppb para formar la capa de óxido.</p>
        <p>d) El tratamiento químico para el control de incrustaciones y depósitos debe ajustarse para coordinarse con el secuestrante de oxígeno para el servicio específico de agua y el sistema de tratamiento de agua de alimentación de caldera (BFW).</p>
        <p>e) Pueden ocurrir picaduras por oxígeno si la desaireación y el tratamiento de secuestro de oxígeno no funcionan correctamente.</p>
    </div>
    <div class="subsection">
        <h4>3.9.4 Unidades o Equipos Afectados</h4>
        <p>a) La corrosión puede ocurrir en todo el sistema de tratamiento de agua de caldera, incluyendo el equipo de desaireación, líneas de agua de alimentación y bombas, así como en el sistema de generación de vapor incluyendo calentadores por etapas, economizadores y tubos de caldera, así como generadores de vapor de la unidad de proceso.</p>
        <p>b) La corrosión en el sistema de retorno de condensado, así como en los rehervidores de la unidad de proceso y tuberías asociadas, puede deberse al dióxido de carbono, aunque también es posible la corrosión por picaduras por oxígeno por contaminación de oxígeno, así como FAC si las condiciones adecuadas están presentes.</p>
        <p>c) Las conexiones roscadas son especialmente susceptibles.</p>
    </div>
    <div class="subsection">
        <h4>3.9.5 Apariencia o Morfología del Daño</h4>
        <p>a) La corrosión por oxígeno es normalmente un tipo de daño por picaduras. Puede ocurrir en cualquier parte del sistema donde haya entrada de aire o incluso si solo cantidades muy pequeñas atraviesan el tratamiento de secuestro de oxígeno. El oxígeno es particularmente agresivo en equipos como calentadores cerrados y economizadores donde hay un aumento rápido de la temperatura del agua.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-9-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-9-1—Picaduras causadas por corrosión de oxígeno.</p>
        </div>
        
        <p>b) La corrosión por dióxido de carbono es normalmente lisa, pero también puede causar surcos en la pared de la tubería.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-9-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-9-2—Patrón irregular en forma de árbol de Navidad de corrosión dentro de una tubería de acero inclinada causada por vapor condensado que contiene altas concentraciones de dióxido de carbono.</p>
        </div>
        
        <p>c) La corrosión puede ser localizada en áreas donde los gases en el agua están más concentrados, como en el nivel de interfaz agua-vapor en un rehervidor vertical.</p>
        <p>d) Las fallas por FAC a menudo se localizan en áreas donde hay una perturbación del flujo, como una sección de orificio, medidor de flujo, codo, reductor u otros tipos de accesorios. El adelgazamiento de la pared ocurre justo aguas abajo de estas perturbaciones del flujo, dejando atrás una superficie corroída libre de incrustaciones de óxido, a veces con un patrón de flujo específico. FAC ha provocado la ruptura de tuberías.</p>
    </div>
    <div class="subsection">
        <h4>3.9.6 Prevención/Mitigación</h4>
        <p>a) La eliminación de oxígeno del BFW típicamente incluye desaireación mecánica seguida de secuestro con sulfito de sodio catalizado o hidrazina, dependiendo del nivel de presión del sistema. El funcionamiento adecuado del desaireador y la adición controlada con precisión del químico secuestrante son importantes. Un residuo del secuestrante de oxígeno se lleva al sistema de generación de vapor para manejar cualquier entrada de oxígeno más allá del desaireador.</p>
        <p>b) Si el control de incrustaciones y depósitos junto con el esquema de tratamiento de mantenimiento de magnetita no minimizan la corrosión por dióxido de carbono en el sistema de retorno de condensado, podría requerirse un tratamiento con inhibidor de amina.</p>
        <p>c) El agua de la caldera necesita ser purgada para controlar la concentración de sólidos y gases no condensables. El equipo de vapor debe verificarse para asegurar que hay venteos funcionales de gases no condensables. También es importante que la tubería y el equipo de vapor permitan la purga del condensado (por ejemplo, usando trampas de vapor y dispositivos mecánicos funcionales de separación de vapor como coalescedores).</p>
        <p>d) El tratamiento del agua, el muestreo y el análisis son los métodos comunes utilizados para asegurar la integridad y prevenir la corrosión por agua de caldera y condensado. Puede ser necesario modificar o mejorar el programa de tratamiento de agua si ocurren problemas como un tubo de caldera roto o fugas de condensado en los sistemas de agua de caldera o condensado.</p>
        <p>e) El pH, la temperatura y la concentración de oxígeno son los parámetros principales que pueden afectar el potencial de FAC. A menudo se recomienda un pH de BFW de 9.2 a 9.6. La actualización del material a acero Cr-Mo generalmente resuelve el problema. Una concentración de oxígeno demasiado baja o ausencia total ya no se considera el mejor control de corrosión para BFW y condensado. Los tratamientos oxigenados que inyectan deliberadamente oxígeno en el sistema de condensado y BFW o el uso de secuestrante de oxígeno a concentraciones reducidas pueden ser necesarios para mantener los niveles de oxígeno dentro del rango deseado para mitigar FAC.</p>
    </div>
    <div class="subsection">
        <h4>3.9.7 Inspección y Monitoreo</h4>
        <p>a) El monitoreo de los parámetros apropiados puede indicar si el programa de tratamiento está funcionando satisfactoriamente. Los parámetros que pueden monitorearse mediante análisis incluyen pH, alcalinidad, dureza, conductividad, cloro o biocida residual, gases disueltos (oxígeno y dióxido de carbono), hierro, cobre y sólidos disueltos totales.</p>
        <p>b) La prueba de vacío puede usarse para verificar la entrada de aire en el pozo caliente del condensador.</p>
        <p>c) Los métodos UT y RT pueden usarse para monitorear el adelgazamiento de la pared de la tubería.</p>
        <p>d) Para las calderas, no hay métodos prácticos de inspección en línea. UT y RT pueden realizarse en los tubos de la caldera y otros componentes de la caldera cuando el sistema está fuera de línea.</p>
    </div>
    <div class="subsection">
        <h4>3.9.8 Mecanismos Relacionados</h4>
        <p>Corrosión por CO<sub>2</sub> (3.18), fatiga por corrosión (3.21), erosión/corrosión-erosión (3.27), corrosión por agua oxigenada (3.49) y SCC por amoníaco de aleaciones de cobre (3.4).</p>
    </div>
    <div class="subsection">
        <h4>3.9.9 Referencias</h4>
        <p>1. Betz Handbook of Industrial Water Conditioning, Eighth Edition, Betz Laboratories, Trevose, PA, 1980.</p>
        <p>2. R.D. Port y H.M. Herro, The Nalco Guide to Boiler Failure Analysis, McGraw-Hill, New York, NY, 1991.</p>
        <p>3. NACE SP0590, Prevention, Detection, and Correction of Deaerator Cracking, NACE International, Houston, TX.</p>
        <p>4. T.Y. Chen et al., "Condensate Corrosion in Steam Generating Systems," Paper No. 98718, Corrosion/98, NACE International, Houston, TX.</p>
        <p>5. R.B. Dooley y V.K. Chexal, "Flow-accelerated Corrosion," Paper No. 99347, Corrosion/99, NACE International, Houston, TX.</p>
        <p>6. Nuclear Safety NEW/CSNI/R(2014), CODAP Topical Report: "Flow Accelerated Corrosion (FAC) of Carbon Steel and Low Alloy Steel Piping in Commercial Nuclear Power Plants," https://www.oecd-nea.org/nsd/docs/2014/csni-r2014-6.pdf, June 2014.</p>
    </div>
    `
});