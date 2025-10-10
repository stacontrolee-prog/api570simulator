// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos y Tuberías a Presión"
    });
}

// Registrar el capítulo 305
registerChapter('ASMEPCC2', {
    id: 305,
    title: "Flange Repair and Conversion",
    titleEs: "Reparación y Conversión de Bridas",
    content: `<h3>305 Flange Repair and Conversion</h3>
    <div class="subsection">
        <h4>305-1 DESCRIPTION</h4>
        <div class="subsection">
            <h4>305-1.1 Introduction</h4>
            <p>This Article applies to the refinishing of flange faces to repair mechanical imperfections or damage from corrosion or other damage in service, or to changing the flange face finish to enable the use of a different gasket. The surface finish of a flange contact surface is essential to the leak tightness of the gasketed joint. When surface finish deteriorates in service, it can become necessary to either replace the flange or refinish the flange face.</p>
        </div>
        <div class="subsection">
            <h4>305-1.2 Work Location</h4>
            <p>The repair can be performed in situ using a portable machine tool, or the pipe section or equipment containing the damaged flange can be removed and repaired in the shop.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>305-2 LIMITATIONS</h4>
        <div class="subsection">
            <h4>305-2.1 Additional Requirements</h4>
            <p>Part 1 of this Standard contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        </div>
        <div class="subsection">
            <h4>305-2.2 Recurrence of Damage</h4>
            <p>Flange refinishing will restore the flange facing but may not eliminate the cause of the initial imperfection or damage. Therefore, the imperfection or damage may recur. Consideration shall be given to the possible recurrence of the original imperfection/damage mechanism.</p>
        </div>
        <div class="subsection">
            <h4>305-2.3 Remaining Thickness</h4>
            <p>The flange may not be sufficiently thick to permit metal removal by machining and still meet the minimum thickness required for the design pressure rating. In such a case, it will be necessary to increase the flange ring thickness by weld metal buildup before remachining the surface. As an alternative solution, a split ring flange may be added to the back of the existing flange to compensate for reduced flange ring thickness, where geometry and spacing permits, and as qualified by the appropriate design calculations.</p>
        </div>
        <div class="subsection">
            <h4>305-2.4 Residual Stress</h4>
            <p>The machining of weld overlayed or weld built-up surfaces that have not been stress-relieved may cause the redistribution of residual stresses and subsequent dimensional distortion over time. In such instances, precautions such as performing a stress-relieving heat treatment prior to finish machining shall be considered to ensure final dimensional stability.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>305-3 DESIGN</h4>
        <div class="subsection">
            <h4>305-3.1 Raised Face</h4>
            <p>Under-thickness of a raised face due to refinishing shall be acceptable, provided the minimum finished height of the raised face is 0.8 mm (0.031 in.).</p>
        </div>
        <div class="subsection">
            <h4>305-3.2 Thickness Evaluation</h4>
            <p>If flange refinishing necessitates removal of material from other than the raised face such that the flange dimensions no longer comply with the original design dimensions minus the original corrosion allowance or the requirements of an applicable specification or standard, the flange shall be evaluated to ensure that the removal of material does not compromise design integrity. Design evaluation methods of an applicable new construction code (such as ASME BPVC, Section VIII, Division 1, Mandatory Appendix 2), or an applicable post-construction code or standard shall be used.</p>
        </div>
        <div class="subsection">
            <h4>305-3.3 Finish and Flatness</h4>
            <p>The gasket seating requirements in terms of flange surface finish and flatness shall be considered.</p>
            <div class="subsection">
                <h4>305-3.3.1 Flatness</h4>
                <p>For example, API 660 and TEMA permit deviations from flatness that exceed those that are recommended for certain gasket types of materials (e.g., flat metal). For guidance on flange face flatness tolerance, refer to ASME PCC-1, Nonmandatory Appendix D.</p>
            </div>
            <div class="subsection">
                <h4>305-3.3.2 Finish</h4>
                <p>See TEMA Figure F-4 for permissible imperfections in flange-facing finish. The choice of flange facing finish shall be in accordance with the applicable standard and compatible with the requirements specified by the user or recommended by the gasket manufacturer. For example, unless otherwise agreed to by the purchaser or manufacturer, ASME B16.5 specifies the following flange-facing finishes (as judged by visual comparison with Ra standards per ASME B46.1):</p>
                <p>(a) Tongue and groove and small male and female flanges: not to exceed 3.2 µm (125 µin.) roughness.</p>
                <p>(b) Ring joint: not to exceed 1.6 µm (63 µin.) roughness.</p>
                <p>(c) Other: Either a serrated concentric or serrated spiral finish having a resulting surface finish from 3.2 µm to 6.4 µm (125 µin. to 250 µin.) average roughness shall be furnished. The cutting tool employed should have an approximate 1.5 mm (0.06 in.) or larger radius and there should be from 1.8 grooves/mm to 2.2 grooves/mm (45 grooves/in. to 55 grooves/in.).</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>305-4 FABRICATION</h4>
        <div class="subsection">
            <h4>305-4.1 Repair Without Welding</h4>
            <p>If either the flange ring thickness or hub dimensions, or both, are sufficient, then the entire gasket surface may be machined to remove the area of degradation or imperfection and thus achieving the desired finish without weld metal buildup.</p>
        </div>
        <div class="subsection">
            <h4>305-4.2 Repair by Welding</h4>
            <p>In repairing a flange face, it may be necessary to use weld metal to either fill a local area (e.g., a gouge or a scratch) or to restore thickness by a weld buildup of the base metal or existing weld overlay face. Where the flange is to be repaired by welding, the area where the buildup is to be applied shall be free of any residue, gasket material, corrosion deposits, etc., that would unduly affect the weld. Cleaning may be by mechanical or chemical procedures. Welding procedures and personnel shall be qualified per the requirements of an applicable new construction code (such as ASME BPVC, Section IX), or an applicable post-construction code or standard. Where weld metal buildup is necessary, the filler metal, welding technique, welder qualifications, and heat treatment (if any) shall be selected to meet service and metallurgical requirements.</p>
        </div>
        <div class="subsection">
            <h4>305-4.3 Postweld Heat Treatment</h4>
            <p>When weld metal buildup is required, postweld heat treatment shall be performed prior to flange face machining if required by an applicable new construction or post-construction code. Postweld heat treatment is not required if the thickness of the weld metal buildup is less than the limits prescribed in the applicable new or post construction code or standard unless dimensional stability is an issue, or postweld heat treatment is required for process reasons.</p>
        </div>
        <div class="subsection">
            <h4>305-4.4 Machining</h4>
            <p>The cutting tool radius and feed rate should be set to prequalified values in order to consistently achieve the desired surface finish. For minor imperfections, careful filing may be adequate for the removal and dressing of the flange faces.</p>
        </div>
        <div class="subsection">
            <h4>305-4.5 Conversion of Flange Facing From Ring Type Joint to Raised Face</h4>
            <p>Ring-type joint flanges may be converted to raised face type flanges with the following considerations along with relevant sections of this Article. The decision to convert to raised face flanges can result from observed or potential ring groove cracking or other reasons. One method of conversion is performed by welding new material into the ring groove and machining to meet the raised face dimensions as called out in the applicable standard. Special conversion gaskets that can be used with an unmodified ring joint flange may also be used but consideration needs to be given to the width of the gasket, location of the gasket reaction load, the effect of flange rotation, and surface finish on the ability of the gasket to seal.</p>
            <div class="subsection">
                <h4>305-4.5.1 Considerations</h4>
                <p>Prior to converting flange types, consideration shall be given to the impact of such a change on the system design bases and specifications, including such negative potential consequences as sealing difficulties and gasket blowout. The impact of the change with respect to system design bases and specifications should be considered. Gasket materials for the new gasket type should be selected with due consideration for the service environment.</p>
            </div>
            <div class="subsection">
                <h4>305-4.5.2 Materials</h4>
                <p>The material used for filling in the groove may match the base metal of the flange or may be a different material suitable for the process conditions. For example, in some instances it may be desirable to fill in a groove in a Cr-Mo flange using an austenitic stainless steel filler. If the groove is filled with a material that has a different coefficient of thermal expansion than the base metal of the flange, consideration should be given to the effects of differential thermal expansion. It is recognized that some material may be removed from the bottom of the groove in order to prepare the surface for welding or to remove cracks or other flaws. If material other than the base material is used to fill in the groove, this material removal can result in the flange thickness (see Figure 305-4.5.2-1) composed of base metal being less than that specified by the applicable standard. This is acceptable if the depth of the weld does not exceed 10% of the flange thickness. This 10% criterion may be increased if justified by an engineering analysis. This analysis should be similar to a Level 3 assessment in accordance with API 579-1/ASME FFS-1.</p>
                
                <div class="figure-container">
                    <img src="images/asme_pcc2_figure_305-4.5.2-1.png" class="figure-image">
                    <p class="figure-caption">Figure 305-4.5.2-1—Flange Dimensions</p>
                </div>
            </div>
            <div class="subsection">
                <h4>305-4.5.3 Markings</h4>
                <p>If the ring joint flange that is being converted is marked on its edge with the letter "R" and the corresponding ring groove number (or other markings identifying it as a ring joint), this marking shall be removed or defaced (such as by stamping a series of X's over it).</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>305-5 EXAMINATION</h4>
        <div class="subsection">
            <h4>305-5.1 Gasket Surface</h4>
            <p>The finished surface shall be examined to comply with the requirements of the standard applicable to new flanges or as specified by the user. For example, ASME B16.5 requires that the surface finish be judged by visual comparison with the Ra standards of ASME B46.1.</p>
        </div>
        <div class="subsection">
            <h4>305-5.2 Nondestructive Examination</h4>
            <p>In cases where weld metal buildup is used in the repair, the area to be repaired shall be examined prior to performing the weld buildup using an appropriate NDE method to determine the integrity of the base metal. Consideration shall be given to examining each weld pass for surface defects by either magnetic particle examination (MT) or liquid penetrant examination (PT), as appropriate. For example, such examination should be performed for welds susceptible to cracking. The finished machined surface shall also be examined by MT or PT, and imperfections in excess of the standard applicable to new flanges, or as specified by the user, shall be repaired and reexamined by the method that discovered the imperfection. Guidelines for nondestructive examination can be found in ASME BPVC, Section V. The MT or PT examination shall be conducted in accordance with ASME BPVC, Section VIII, Division 1, Mandatory Appendices 6 and 8, respectively, or other applicable construction code, e.g., ASME BPVC, Section VIII, Division 2.</p>
        </div>
        <div class="subsection">
            <h4>305-5.3 Dimensions</h4>
            <p>After repair, the flange thickness and other dimensions shall be verified for conformance to the required thickness of the applicable standard or as established by design calculation.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>305-6 TESTING</h4>
        <p>After the flange joint is reassembled in the field, it should be subjected to a leak test prior to being placed in service, or an initial service leak test. An initial service leak test is one in which the joint is monitored for leakage as pressure is increased in the system. The selection of the most appropriate testing method shall consider the hazard of the service and any jurisdictional requirements. For general guidance on flanged joint leak tightness testing, refer to Article 501 and ASME PCC-1, section 12.</p>
    </div>
    <div class="subsection">
        <h4>305-7 REFERENCES</h4>
        <div class="subsection">
            <h4>305-7.1 Related Standards (22)</h4>
            <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
            <p>API 660, Shell and Tube Exchangers for General Refinery Service<br>
            Publisher: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</p>
            <p>ASME B16.1, Cast Iron Pipe Flanges and Flanged Fittings<br>
            ASME B16.5, Pipe Flanges and Flanged Fittings<br>
            ASME B16.24, Bronze Pipe Flanges and Flanged Fittings: Class 150, 300, 400, 600, 900 and 1500<br>
            ASME B16.36, Orifice Flanges<br>
            ASME B16.47, Large Diameter Steel Flanges NPS 26 Through NPS 60<br>
            Publisher: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</p>
            <p>Standards of Tubular Exchanger Manufacturers Association<br>
            Publisher: Tubular Exchanger Manufacturers Association, Inc. (TEMA), 25 North Broadway, Tarrytown, NY 10591 (www.tema.org)</p>
        </div>
    </div>
    `,
    contentEs: `<h3>305 Reparación y Conversión de Bridas</h3>
    <div class="subsection">
        <h4>305-1 DESCRIPCIÓN</h4>
        <div class="subsection">
            <h4>305-1.1 Introducción</h4>
            <p>Este Artículo se aplica al rectificado de caras de brida para reparar imperfecciones mecánicas o daños por corrosión u otros daños en servicio, o para cambiar el acabado de la cara de la brida para permitir el uso de una junta diferente. El acabado superficial de una superficie de contacto de brida es esencial para la estanqueidad de la unión con junta. Cuando el acabado superficial se deteriora en servicio, puede ser necesario reemplazar la brida o rectificar la cara de la brida.</p>
        </div>
        <div class="subsection">
            <h4>305-1.2 Ubicación del Trabajo</h4>
            <p>La reparación puede realizarse in situ utilizando una máquina herramienta portátil, o el tramo de tubería o el equipo que contiene la brida dañada puede ser retirado y reparado en taller.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>305-2 LIMITACIONES</h4>
        <div class="subsection">
            <h4>305-2.1 Requisitos Adicionales</h4>
            <p>La Parte 1 de esta Norma contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse en conjunto con la Parte 1.</p>
        </div>
        <div class="subsection">
            <h4>305-2.2 Recurrencia del Daño</h4>
            <p>El rectificado de la brida restaurará la cara de la brida pero puede no eliminar la causa de la imperfección o daño inicial. Por lo tanto, la imperfección o el daño pueden recurrir. Se deberá considerar la posible recurrencia del mecanismo de imperfección/daño original.</p>
        </div>
        <div class="subsection">
            <h4>305-2.3 Espesor Restante</h4>
            <p>La brida puede no ser suficientemente gruesa para permitir la remoción de metal mediante mecanizado y aún cumplir con el espesor mínimo requerido para la clasificación de presión de diseño. En tal caso, será necesario aumentar el espesor del anillo de la brida mediante depósito de metal de soldadura antes de volver a mecanizar la superficie. Como solución alternativa, se puede agregar una brida de anillo dividido en la parte posterior de la brida existente para compensar el espesor reducido del anillo de la brida, donde la geometría y el espaciamiento lo permitan, y según lo calificado por los cálculos de diseño apropiados.</p>
        </div>
        <div class="subsection">
            <h4>305-2.4 Esfuerzo Residual</h4>
            <p>El mecanizado de superficies revestidas con soldadura o con depósito de soldadura que no han sido aliviadas de esfuerzo puede causar la redistribución de los esfuerzos residuales y la posterior distorsión dimensional con el tiempo. En tales casos, se deberán considerar precauciones como realizar un tratamiento térmico de alivio de esfuerzo antes del mecanizado final para garantizar la estabilidad dimensional final.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>305-3 DISEÑO</h4>
        <div class="subsection">
            <h4>305-3.1 Cara Elevada</h4>
            <p>El espesor insuficiente de una cara elevada debido al rectificado será aceptable, siempre que la altura mínima terminada de la cara elevada sea de 0.8 mm (0.031 pulg.).</p>
        </div>
        <div class="subsection">
            <h4>305-3.2 Evaluación del Espesor</h4>
            <p>Si el rectificado de la brida requiere la remoción de material de áreas distintas a la cara elevada de tal manera que las dimensiones de la brida ya no cumplan con las dimensiones de diseño originales menos la tolerancia de corrosión original o los requisitos de una especificación o estándar aplicable, la brida deberá ser evaluada para garantizar que la remoción de material no comprometa la integridad del diseño. Se deberán utilizar métodos de evaluación de diseño de un código de construcción nuevo aplicable (como ASME BPVC, Sección VIII, División 1, Apéndice Obligatorio 2), o un código o estándar posterior a la construcción aplicable.</p>
        </div>
        <div class="subsection">
            <h4>305-3.3 Acabado y Planeidad</h4>
            <p>Se deberán considerar los requisitos de asiento de la junta en términos de acabado superficial y planeidad de la brida.</p>
            <div class="subsection">
                <h4>305-3.3.1 Planeidad</h4>
                <p>Por ejemplo, API 660 y TEMA permiten desviaciones de la planeidad que exceden las recomendadas para ciertos tipos de materiales de juntas (ej., metal plano). Para obtener orientación sobre la tolerancia de planeidad de la cara de la brida, consulte ASME PCC-1, Apéndice No Obligatorio D.</p>
            </div>
            <div class="subsection">
                <h4>305-3.3.2 Acabado</h4>
                <p>Consulte la Figura F-4 de TEMA para las imperfecciones permisibles en el acabado de la cara de la brida. La elección del acabado de la cara de la brida deberá estar de acuerdo con el estándar aplicable y ser compatible con los requisitos especificados por el usuario o recomendados por el fabricante de la junta. Por ejemplo, a menos que el comprador o el fabricante acuerden lo contrario, ASME B16.5 especifica los siguientes acabados de cara de brida (según se juzga por comparación visual con los estándares Ra según ASME B46.1):</p>
                <p>(a) Bridas de espiga y ranura y bridas pequeñas macho y hembra: no exceder una rugosidad de 3.2 µm (125 µin.).</p>
                <p>(b) Junta de anillo: no exceder una rugosidad de 1.6 µm (63 µin.).</p>
                <p>(c) Otras: Deberá proporcionarse un acabado estriado concéntrico o espiral estriado que tenga un acabado superficial resultante de 3.2 µm a 6.4 µm (125 µin. a 250 µin.) de rugosidad promedio. La herramienta de corte empleada deberá tener un radio aproximado de 1.5 mm (0.06 pulg.) o mayor y deberá haber de 1.8 estrías/mm a 2.2 estrías/mm (45 estrías/pulg. a 55 estrías/pulg.).</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>305-4 FABRICACIÓN</h4>
        <div class="subsection">
            <h4>305-4.1 Reparación Sin Soldadura</h4>
            <p>Si el espesor del anillo de la brida o las dimensiones del cubo, o ambos, son suficientes, entonces toda la superficie de la junta puede ser mecanizada para eliminar el área de degradación o imperfección y así lograr el acabado deseado sin depósito de metal de soldadura.</p>
        </div>
        <div class="subsection">
            <h4>305-4.2 Reparación por Soldadura</h4>
            <p>Al reparar una cara de brida, puede ser necesario usar metal de soldadura para rellenar un área local (ej., una mella o un rayón) o para restaurar el espesor mediante un depósito de soldadura del metal base o de la cara existente revestida con soldadura. Donde la brida vaya a ser reparada por soldadura, el área donde se aplicará el depósito deberá estar libre de cualquier residuo, material de junta, depósitos de corrosión, etc., que afectarían indebidamente la soldadura. La limpieza puede realizarse mediante procedimientos mecánicos o químicos. Los procedimientos de soldadura y el personal deberán estar calificados según los requisitos de un código de construcción nuevo aplicable (como ASME BPVC, Sección IX), o un código o estándar posterior a la construcción aplicable. Donde sea necesario el depósito de metal de soldadura, el metal de aporte, la técnica de soldadura, las calificaciones del soldador y el tratamiento térmico (si lo hay) deberán seleccionarse para cumplir con los requisitos de servicio y metalúrgicos.</p>
        </div>
        <div class="subsection">
            <h4>305-4.3 Tratamiento Térmico Posterior a la Soldadura</h4>
            <p>Cuando se requiera depósito de metal de soldadura, se deberá realizar un tratamiento térmico posterior a la soldadura antes del mecanizado de la cara de la brida si lo requiere un código de construcción nuevo o posterior a la construcción aplicable. No se requiere tratamiento térmico posterior a la soldadura si el espesor del depósito de metal de soldadura es menor que los límites prescritos en el código o estándar nuevo o posterior a la construcción aplicable, a menos que la estabilidad dimensional sea un problema, o se requiera tratamiento térmico posterior a la soldadura por razones de proceso.</p>
        </div>
        <div class="subsection">
            <h4>305-4.4 Mecanizado</h4>
            <p>El radio de la herramienta de corte y la velocidad de avance deberán ajustarse a valores precalificados para lograr consistentemente el acabado superficial deseado. Para imperfecciones menores, el limado cuidadoso puede ser adecuado para la remoción y acabado de las caras de la brida.</p>
        </div>
        <div class="subsection">
            <h4>305-4.5 Conversión de Cara de Brida de Junta de Anillo a Cara Elevada</h4>
            <p>Las bridas de junta de anillo pueden convertirse a bridas de tipo cara elevada con las siguientes consideraciones junto con las secciones relevantes de este Artículo. La decisión de convertir a bridas de cara elevada puede resultar de grietas observadas o potenciales en la ranura del anillo u otras razones. Un método de conversión se realiza soldando nuevo material en la ranura del anillo y mecanizándolo para cumplir con las dimensiones de cara elevada según lo especificado en el estándar aplicable. También se pueden usar juntas de conversión especiales que se pueden usar con una brida de junta de anillo sin modificar, pero se deberá considerar el ancho de la junta, la ubicación de la carga de reacción de la junta, el efecto de la rotación de la brida y el acabado superficial en la capacidad de la junta para sellar.</p>
            <div class="subsection">
                <h4>305-4.5.1 Consideraciones</h4>
                <p>Antes de convertir los tipos de brida, se deberá considerar el impacto de dicho cambio en las bases y especificaciones de diseño del sistema, incluyendo consecuencias potenciales negativas como dificultades de sellado y expulsión de la junta. Se deberá considerar el impacto del cambio con respecto a las bases y especificaciones de diseño del sistema. Los materiales de la junta para el nuevo tipo de junta deberán seleccionarse con la debida consideración del ambiente de servicio.</p>
            </div>
            <div class="subsection">
                <h4>305-4.5.2 Materiales</h4>
                <p>El material utilizado para rellenar la ranura puede coincidir con el metal base de la brida o puede ser un material diferente adecuado para las condiciones del proceso. Por ejemplo, en algunos casos puede ser deseable rellenar una ranura en una brida de Cr-Mo usando un metal de aporte de acero inoxidable austenítico. Si la ranura se rellena con un material que tiene un coeficiente de dilatación térmica diferente al del metal base de la brida, se deberá considerar los efectos de la dilatación térmica diferencial. Se reconoce que puede ser necesario eliminar algo de material del fondo de la ranura para preparar la superficie para la soldadura o para eliminar grietas u otros defectos. Si se utiliza un material diferente al material base para rellenar la ranura, esta remoción de material puede resultar en que el espesor de la brida (ver Figura 305-4.5.2-1) compuesto de metal base sea menor que el especificado por el estándar aplicable. Esto es aceptable si la profundidad de la soldadura no excede el 10% del espesor de la brida. Este criterio del 10% puede aumentarse si está justificado por un análisis de ingeniería. Este análisis debe ser similar a una evaluación de Nivel 3 de acuerdo con API 579-1/ASME FFS-1.</p>
                
                <div class="figure-container">
                    <img src="images/asme_pcc2_figure_305-4.5.2-1.png" class="figure-image">
                    <p class="figure-caption">Figura 305-4.5.2-1—Dimensiones de la Brida</p>
                </div>
            </div>
            <div class="subsection">
                <h4>305-4.5.3 Marcaciones</h4>
                <p>Si la brida de junta de anillo que se está convirtiendo está marcada en su borde con la letra "R" y el número correspondiente de la ranura del anillo (u otras marcas que la identifiquen como junta de anillo), esta marca deberá ser eliminada o desfigurada (como por ejemplo estampando una serie de X sobre ella).</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>305-5 EXAMEN</h4>
        <div class="subsection">
            <h4>305-5.1 Superficie de la Junta</h4>
            <p>La superficie terminada deberá ser examinada para cumplir con los requisitos del estándar aplicable a bridas nuevas o según lo especificado por el usuario. Por ejemplo, ASME B16.5 requiere que el acabado superficial sea juzgado por comparación visual con los estándares Ra de ASME B46.1.</p>
        </div>
        <div class="subsection">
            <h4>305-5.2 Examen No Destructor</h4>
            <p>En casos donde se utiliza depósito de metal de soldadura en la reparación, el área a ser reparada deberá ser examinada antes de realizar el depósito de soldadura utilizando un método END apropiado para determinar la integridad del metal base. Se deberá considerar examinar cada pase de soldadura para defectos superficiales mediante examen por partículas magnéticas (MT) o examen por líquidos penetrantes (PT), según corresponda. Por ejemplo, dicho examen deberá realizarse para soldaduras susceptibles a agrietamiento. La superficie mecanizada terminada también deberá ser examinada por MT o PT, y las imperfecciones que excedan el estándar aplicable a bridas nuevas, o según lo especificado por el usuario, deberán ser reparadas y reexaminadas por el método que descubrió la imperfección. Las pautas para el examen no destructor pueden encontrarse en ASME BPVC, Sección V. El examen MT o PT deberá realizarse de acuerdo con ASME BPVC, Sección VIII, División 1, Apéndices Obligatorios 6 y 8, respectivamente, u otro código de construcción aplicable, ej., ASME BPVC, Sección VIII, División 2.</p>
        </div>
        <div class="subsection">
            <h4>305-5.3 Dimensiones</h4>
            <p>Después de la reparación, el espesor de la brida y otras dimensiones deberán ser verificados para conformidad con el espesor requerido del estándar aplicable o según lo establecido por cálculo de diseño.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>305-6 PRUEBAS</h4>
        <p>Después de que la unión de brida sea reensamblada en el campo, deberá ser sometida a una prueba de fuga antes de ser puesta en servicio, o una prueba de fuga de servicio inicial. Una prueba de fuga de servicio inicial es aquella en la que se monitorea la unión en busca de fugas a medida que aumenta la presión en el sistema. La selección del método de prueba más apropiado deberá considerar el peligro del servicio y cualquier requisito jurisdiccional. Para obtener orientación general sobre las pruebas de estanqueidad de uniones bridadas, consulte el Artículo 501 y ASME PCC-1, sección 12.</p>
    </div>
    <div class="subsection">
        <h4>305-7 REFERENCIAS</h4>
        <div class="subsection">
            <h4>305-7.1 Estándares Relacionados (22)</h4>
            <p>A continuación se presenta una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
            <p>API 660, Intercambiadores de Calor de Casco y Tubo para Servicio General de Refinería<br>
            Editor: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</p>
            <p>ASME B16.1, Bridas y Accesorios Bridados de Tubería de Hierro Fundido<br>
            ASME B16.5, Bridas y Accesorios Bridados de Tubería<br>
            ASME B16.24, Bridas y Accesorios Bridados de Tubería de Bronce: Clase 150, 300, 400, 600, 900 y 1500<br>
            ASME B16.36, Bridas de Orificio<br>
            ASME B16.47, Bridas de Acero de Gran Diámetro NPS 26 a NPS 60<br>
            Editor: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</p>
            <p>Estándares de la Tubular Exchanger Manufacturers Association<br>
            Editor: Tubular Exchanger Manufacturers Association, Inc. (TEMA), 25 North Broadway, Tarrytown, NY 10591 (www.tema.org)</p>
        </div>
    </div>
    `
});