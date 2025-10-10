// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos y Tuberías a Presión"
    });
}

// Registrar el artículo 306
registerChapter('ASMEPCC2', {
    id: 306,
    title: "Mechanical Clamp Repair",
    titleEs: "Reparación con Abrazadera Mecánica",
    content: `<h3>306 Mechanical Clamp Repair</h3>
    <div class="subsection">
        <h4>306-1 DESCRIPTION</h4>
        <p>A mechanical clamp consists of split fittings mechanically joined together to seal off or reinforce a component. Examples of mechanical clamps are illustrated in Figures 306-1-1 and 306-1-2.</p>
        <p>Mechanical clamps are commonly used to seal repair leaking components or reinforce damaged components. Mechanical clamps can have a variety of shapes (e.g., cylindrical, rectangular, with either flat or formed heads), often following the contour of the pipe or component being repaired. Mechanical clamps can also be used to enclose components such as flanges and valves or fittings, branches, nozzles, or vents and drains.</p>
        <p>Mechanical clamps are often available as catalog items or they can be custom-made of two half shells, a sealing gasket and bolts, or studs and nuts.</p>
        <p>The annular space between the mechanical clamp and the repaired component can be left either empty or filled, or lined with epoxy, sealant, fiber, refractory materials, or other compounds.</p>
        <p>A clamp can be nonstructural (designed to contain leaks) or structural (designed to reinforce and hold together a damaged component).</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_306-1-1.png" class="figure-image">
            <p class="figure-caption">Figure 306-1-1—Example of a Mechanical Clamp</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-2 LIMITATIONS</h4>
        <div class="subsection">
            <h4>306-2.1 General</h4>
            <p>Part 1 of this Standard contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.1.</p>
        </div>
        <div class="subsection">
            <h4>306-2.2 Applicability</h4>
            <p>Normally, mechanical clamps are used to contain leaks at packings, and at flanged and gasketed joints, or to contain leaks (or potential leaks) due to local thinning. The clamp is not always effective in preventing the propagation of a crack in the pipe or component. Therefore, leak clamps shall not be used when cracks are present, unless:</p>
            <p>(a) the conditions that lead to the crack formation and propagation have been eliminated so that the crack will not grow during the planned life of the repair; or</p>
            <p>(b) a fitness-for-service assessment shows that the crack growth during the planned life is acceptable, and that the crack will not propagate across the clamp; or</p>
            <p>(c) the crack is circumferential and the clamp is a structural clamp, where the clamp is designed for the case of full circumferential separation of the cracked component. A separate strong-back assembly may be used to provide structural integrity, while the clamp only provides leak seal. It is common for these two items to be independent, though used in concert.</p>
        </div>
        <div class="subsection">
            <h4>306-2.3 Qualifications</h4>
            <p>Installation and sealant injection, where necessary, shall be performed by personnel qualified under conditions representative of the field application.</p>
        </div>
        <div class="subsection">
            <h4>306-2.4 Safety</h4>
            <p>Personnel shall be aware of hazards in installing clamps on degraded components, and shall take the necessary precautions to avoid unacceptable risks. A risk review shall be conducted before a clamp is installed. Personnel shall take any necessary precautions to avoid unacceptable risks.</p>
        </div>
        <div class="subsection">
            <h4>306-2.5 Precautions</h4>
            <p>If the component is leaking or has the potential to leak during installation, and if the contents are hazardous, additional precautions should be taken and those precautions should be addressed during the prejob hazard review meeting (e.g., need for fresh air suit, etc.).</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-3 DESIGN</h4>
        <div class="subsection">
            <h4>306-3.1 Materials</h4>
            <p>Clamp materials shall be listed in the construction or post-construction code, Figures 306-1-1 and 306-1-2, and be compatible with the fluid, pressure, and temperature, with due consideration for the stagnant condition created by a leak of fluid into the clamp. The mechanical clamp sealing element and its lubricant may prevent its use in high-temperature service. Generally, the material of construction of the clamp should be similar to the clamped component. Clamps made of different materials shall be acceptable if they are compatible with the process and existing components. The clamp design and construction, including material selection, shall be done considering the deterioration mode that led to the need for the repair. The clamp shall be suitable for resisting this deterioration mode for the life of the repair.</p>
        </div>
        <div class="subsection">
            <h4>306-3.2 Design Life</h4>
            <p>The design life of the repair shall be based on the remaining strength of the repaired component, the corrosion resistance and mechanical properties of the clamp, its sealing elements and, where used, the sealant. Some sealants lose their sealing properties as a hot line is cooled down, or the sealant can deteriorate over time. This shall be considered if leaving the clamp in place for a new heat-up cycle or beyond the manufacturer's designated time at temperature.</p>
        </div>
        <div class="subsection">
            <h4>306-3.3 Failure Modes</h4>
            <p>The clamp design shall consider the potential introduction of new failure modes in the clamped component. For example:</p>
            <p>(a) External parts of the repaired component, now enclosed by the clamp, such as flange bolts, that could significantly degrade, crack, or corrode if in contact with the leaking fluid.</p>
            <p>(b) Because the clamp can be at a lower temperature than the component, condensate from leakage gases should be considered for its corrosive effects.</p>
            <p>(c) The clamp can cause the component to run at a different temperature, which can increase the corrosion rate or cause dew-point corrosion.</p>
            <p>(d) Process fluid contact or the insulating effect of the clamp may increase the temperature of encapsulated bolting, causing it to yield.</p>
            <p>(e) The development of operating and residual stresses due to constrained differential expansion can cause the clamp to leak.</p>
        </div>
        <div class="subsection">
            <h4>306-3.4 Temperature and Toughness</h4>
            <p>The clamp materials shall satisfy the minimum temperature and, where applicable, minimum toughness requirements of the applicable construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>306-3.5 Design Conditions</h4>
            <p>Mechanical clamps, sealing surfaces, and bolting shall be designed for design conditions and anticipated transient loads imposed on the repaired pipe or component, following the design requirements of the construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>306-3.6 Qualification</h4>
            <p>In cases where there are no applicable design requirements, the principles of the applicable construction code or post-construction code shall be followed. Components of the mechanical clamp that are fabricated by machining standard fittings (such as cutting-out an opening in standard pipe caps to make end pieces) shall be qualified by analysis or testing, as provided in the applicable construction code or post-construction code, and be reinforced if necessary.</p>
        </div>
        <div class="subsection">
            <h4>306-3.7 Corrosion Allowance</h4>
            <p>The design of the clamp shall include the applicable corrosion allowance, consistent with the service and the design life of the repair.</p>
        </div>
        <div class="subsection">
            <h4>306-3.8 Design Loads</h4>
            <p>The design of the mechanical clamp for normal operating conditions shall consider the following:</p>
            <p>(a) the coincident maximum and minimum pressures and temperatures of the system, unless means are provided to limit the pressure in the mechanical clamp. Designing the clamp for a lower range of design and operating temperatures than the component is acceptable if justified by heat transfer analysis.</p>
            <p>(b) the load imposed by the weight of the clamp, including the entrapped leaking fluid and annular space material.</p>
            <p>(c) the effects of expansion, including differential expansion or contraction, and the effect on the flexibility of the pipe or component. On insulated lines and components the clamp may also be insulated to minimize differential expansion.</p>
        </div>
        <div class="subsection">
            <h4>306-3.9 Transient Loads</h4>
            <p>Anticipated transient loads for use in the design of structural clamps shall include, but are not limited to:</p>
            <p>(a) thrust loads, in case of full circumferential separation of the pipe or component. Design for the axial thrust resulting from full circumferential separation may be waived, provided the calculated remaining strength of the degraded component at the end of the design life (including expected continuing degradation in service) is determined to be sufficient. Additional restraints may be added to the pipe or component to reduce the loads on the clamp.</p>
            <p>Where a clamp is intended to restrain longitudinal forces, a locking mechanism or strong-back shall be provided to prevent separation. Friction should not be relied on to hold together damaged or separated components in a fluid service that is flammable, toxic, or damaging to human tissues, or if the components operate in the creep range, unless a risk analysis documents that the risk of failure of the clamped joint is acceptable.</p>
            <p>(b) wind, earthquake, or fluid transients (fluid hammer or liquid slug), as applicable.</p>
        </div>
        <div class="subsection">
            <h4>306-3.10 Vents and Drains</h4>
            <p>When repairing a leaking component, the mechanical clamp assembly should be designed with vents and drains to permit venting the leak while assembling the clamp, then draining the annulus as necessary.</p>
            <p>(a) Vents should also be provided for mechanical clamps installed under water to avoid over-pressurizing the water trapped in the annulus as the clamp is tightened.</p>
            <p>(b) The vent or drain should include a threaded cap, a flange, or a valve that will be opened to preclude internal pressure buildup during assembly. This same vent or drain may be used to vent or drain the clamp in the future. If leak sealant material is to be injected into the clamp, these vent and drain connections may be used, or separate injections may be provided.</p>
        </div>
        <div class="subsection">
            <h4>306-3.11 Sound Metal</h4>
            <p>The clamp shall be sufficiently long to extend to a sound area of the repaired component. The clamped component shall be examined to ensure that there is sufficient wall thickness at the clamp contact points to carry the pressure and structural loads in the component, plus the additional loads imposed by the clamp.</p>
        </div>
        <div class="subsection">
            <h4>306-3.12 Sealant Pressure</h4>
            <p>If using sealant injection, the possibility of inward collapse of the clamped component due to the annulus pressure of the injected sealant shall be considered. Consideration should be given to off-gassing of sealant compounds as they cure.</p>
        </div>
        <div class="subsection">
            <h4>306-3.13 Sealant Seepage</h4>
            <p>If using sealant injection, the possibility and consequence of sealant seeping into the damaged component shall be considered.</p>
        </div>
        <div class="subsection">
            <h4>306-3.14 Joints</h4>
            <p>Clamps over expansion joints, slip joints, ball joints, etc., are special cases that shall require analysis of the loads in the pipe system, anchors, and component nozzles with the clamp installed, with due consideration for thermal induced movements in operating and shutdown conditions.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_306-1-2.png" class="figure-image">
                <p class="figure-caption">Figure 306-1-2—Square Mechanical Clamp Over Drain Branch, With Sealant Injection Nozzle</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>306-4 FABRICATION</h4>
        <div class="subsection">
            <h4>306-4.1 Preparation</h4>
            <p>The component to which the clamp will be attached should be free of loose corrosion deposits, dirt, paint, insulation, mastics, and other coatings in the vicinity of the mechanical clamp installation, in particular the area where the sealing surfaces will contact the pressure component. These substances can prevent the sealing surfaces from seating properly against the pressure component or otherwise generate a leak path under the sealing surfaces. Clamps using sealant injection will generally overcome these concerns.</p>
        </div>
        <div class="subsection">
            <h4>306-4.2 Leak Box Installation</h4>
            <p>Care shall be taken so as not to damage the clamp, especially the sealing surfaces. For small leaks, the clamp can typically be placed directly over the leak. Larger or higher pressure installations typically require the mechanical clamp be loosely installed on the component to the side of the leak and then slid and tightened over the leak.</p>
        </div>
        <div class="subsection">
            <h4>306-4.3 Qualification</h4>
            <p>Personnel shall be qualified for installing the repair clamp and sealant injection, when sealant is applied.</p>
        </div>
        <div class="subsection">
            <h4>306-4.4 In-Service Installation</h4>
            <p>The clamp may be installed when the system is out of service or, with the necessary safety procedures, in service.</p>
        </div>
        <div class="subsection">
            <h4>306-4.5 Leak Stoppage</h4>
            <p>If a mechanical clamp is installed over a thinned or leaking component, consideration should be given to wrapping the component with fiberglass, composite, or metallic wraps such that the leak can be stopped prior to installing the clamp. This will also prevent introducing sealant into the process. This may also aid in future sealing, if the perimeter starts leaking.</p>
        </div>
        <div class="subsection">
            <h4>306-4.6 Welding</h4>
            <p>The mechanical clamp may be welded to the component. In this case, the welding, examination, and testing provisions for leak repair boxes shall be reviewed for applicability to the repair.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-5 EXAMINATION</h4>
        <div class="subsection">
            <h4>306-5.1 Applicability</h4>
            <p>The final bolting torque shall be checked where specified by design.</p>
        </div>
        <div class="subsection">
            <h4>306-5.2 Visual Examination</h4>
            <p>The assembly shall be visually examined for conformity with the design.</p>
        </div>
        <div class="subsection">
            <h4>306-5.3 Evaluation</h4>
            <p>Results of examinations should be evaluated following the criteria of the applicable construction code or post-construction code.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-6 TESTING</h4>
        <div class="subsection">
            <h4>306-6.1 Applicability</h4>
            <p>The designer shall determine the type of pressure or leak test to be conducted after installation, on the basis of risk - likelihood and consequence of failure of the repaired component when pressurizing the annulus between the clamp and the component.</p>
        </div>
        <div class="subsection">
            <h4>306-6.2 Test Method</h4>
            <p>The test may consist of one of the following:</p>
            <p>(a) an in-service leak test if the consequence of an in-service leak out of the clamp is acceptable</p>
            <p>(b) a hydrostatic test (when hydrostatically testing a repair on a hot operating system, caution is required to avoid the discharge of flashing test water)</p>
            <p>(c) a pneumatic pressure test</p>
            <p>(d) a sensitive leak test (such as air with bubble solution, or helium leak test)</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-7 REFERENCES</h4>
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        <ul>
            <li>API 510, Pressure Vessel Inspection Code: Maintenance, Inspection, Rating, Repair and Alteration</li>
            <li>API 570, Piping Inspection Code: Inspection, Repair, Alteration, and Rerating of In-Service Piping Systems</li>
            <li>Publisher: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
            <li>ASME Boiler and Pressure Vessel Code, Section VIII - Rules for Construction of Pressure Vessels</li>
            <li>Publisher: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</li>
        </ul>
    </div>
    `,
    contentEs: `<h3>306 Reparación con Abrazadera Mecánica</h3>
    <div class="subsection">
        <h4>306-1 DESCRIPCIÓN</h4>
        <p>Una abrazadera mecánica consiste en accesorios divididos unidos mecánicamente para sellar o reforzar un componente. Se ilustran ejemplos de abrazaderas mecánicas en las Figuras 306-1-1 y 306-1-2.</p>
        <p>Las abrazaderas mecánicas se utilizan comúnmente para sellar reparaciones de componentes que presentan fugas o para reforzar componentes dañados. Las abrazaderas mecánicas pueden tener una variedad de formas (por ejemplo, cilíndricas, rectangulares, con cabezales planos o formados), siguiendo a menudo el contorno de la tubería o componente que se está reparando. Las abrazaderas mecánicas también pueden usarse para encerrar componentes como bridas y válvulas o accesorios, ramificaciones, boquillas, o ventilaciones y drenajes.</p>
        <p>Las abrazaderas mecánicas están a menudo disponibles como artículos de catálogo o pueden fabricarse a medida con dos medias conchas, una junta de sellado y pernos, o espárragos y tuercas.</p>
        <p>El espacio anular entre la abrazadera mecánica y el componente reparado puede dejarse vacío o lleno, o revestido con epoxi, sellador, fibra, materiales refractarios u otros compuestos.</p>
        <p>Una abrazadera puede ser no estructural (diseñada para contener fugas) o estructural (diseñada para reforzar y mantener unido un componente dañado).</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_306-1-1.png" class="figure-image">
            <p class="figure-caption">Figura 306-1-1—Ejemplo de una Abrazadera Mecánica</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-2 LIMITACIONES</h4>
        <div class="subsection">
            <h4>306-2.1 General</h4>
            <p>La Parte 1 de esta Norma contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse en conjunción con la Parte 1.1.</p>
        </div>
        <div class="subsection">
            <h4>306-2.2 Aplicabilidad</h4>
            <p>Normalmente, las abrazaderas mecánicas se utilizan para contener fugas en empaquetaduras, y en juntas bridadas y con empaquetadura, o para contener fugas (o fugas potenciales) debido a adelgazamiento localizado. La abrazadera no siempre es efectiva para prevenir la propagación de una grieta en la tubería o componente. Por lo tanto, no deberán utilizarse abrazaderas para contención de fugas cuando estén presentes grietas, a menos que:</p>
            <p>(a) se hayan eliminado las condiciones que llevan a la formación y propagación de la grieta de modo que la grieta no crecerá durante la vida útil planificada de la reparación; o</p>
            <p>(b) una evaluación de aptitud para el servicio demuestre que el crecimiento de la grieta durante la vida útil planificada es aceptable, y que la grieta no se propagará a través de la abrazadera; o</p>
            <p>(c) la grieta sea circunferencial y la abrazadera sea una abrazadera estructural, donde la abrazadera esté diseñada para el caso de separación circunferencial completa del componente agrietado. Puede utilizarse un conjunto de refuerzo separado para proporcionar integridad estructural, mientras que la abrazadera solo proporciona el sello de fuga. Es común que estos dos elementos sean independientes, aunque se usen en conjunto.</p>
        </div>
        <div class="subsection">
            <h4>306-2.3 Calificaciones</h4>
            <p>La instalación y la inyección de sellador, cuando sea necesario, deberán ser realizadas por personal calificado bajo condiciones representativas de la aplicación en campo.</p>
        </div>
        <div class="subsection">
            <h4>306-2.4 Seguridad</h4>
            <p>El personal deberá estar consciente de los peligros en la instalación de abrazaderas en componentes degradados, y deberá tomar las precauciones necesarias para evitar riesgos inaceptables. Se deberá realizar una revisión de riesgos antes de instalar una abrazadera. El personal deberá tomar todas las precauciones necesarias para evitar riesgos inaceptables.</p>
        </div>
        <div class="subsection">
            <h4>306-2.5 Precauciones</h4>
            <p>Si el componente presenta fugas o tiene el potencial de fugar durante la instalación, y si el contenido es peligroso, se deberán tomar precauciones adicionales y esas precauciones deberán abordarse durante la reunión de revisión de peligros previa al trabajo (por ejemplo, necesidad de traje de aire fresco, etc.).</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-3 DISEÑO</h4>
        <div class="subsection">
            <h4>306-3.1 Materiales</h4>
            <p>Los materiales de la abrazadera deberán estar listados en el código de construcción o post-construcción, Figuras 306-1-1 y 306-1-2, y ser compatibles con el fluido, la presión y la temperatura, con la debida consideración para la condición estancada creada por una fuga de fluido hacia la abrazadera. El elemento de sellado de la abrazadera mecánica y su lubricante pueden impedir su uso en servicios de alta temperatura. Generalmente, el material de construcción de la abrazadera debe ser similar al del componente sujeto a la abrazadera. Las abrazaderas hechas de diferentes materiales serán aceptables si son compatibles con el proceso y los componentes existentes. El diseño y construcción de la abrazadera, incluyendo la selección de materiales, deberá hacerse considerando el modo de deterioro que llevó a la necesidad de la reparación. La abrazadera deberá ser adecuada para resistir este modo de deterioro durante la vida útil de la reparación.</p>
        </div>
        <div class="subsection">
            <h4>306-3.2 Vida Útil de Diseño</h4>
            <p>La vida útil de diseño de la reparación deberá basarse en la resistencia restante del componente reparado, la resistencia a la corrosión y las propiedades mecánicas de la abrazadera, sus elementos de sellado y, cuando se utilice, el sellante. Algunos sellantes pierden sus propiedades de sellado cuando una línea caliente se enfría, o el sellante puede deteriorarse con el tiempo. Esto deberá considerarse si se deja la abrazadera en su lugar para un nuevo ciclo de calentamiento o más allá del tiempo designado por el fabricante a temperatura.</p>
        </div>
        <div class="subsection">
            <h4>306-3.3 Modos de Falla</h4>
            <p>El diseño de la abrazadera deberá considerar la posible introducción de nuevos modos de falla en el componente sujeto a la abrazadera. Por ejemplo:</p>
            <p>(a) Partes externas del componente reparado, ahora encerradas por la abrazadera, como los pernos de brida, que podrían degradarse significativamente, agrietarse o corroerse si entran en contacto con el fluido que fuga.</p>
            <p>(b) Debido a que la abrazadera puede estar a una temperatura más baja que el componente, deberá considerarse el condensado de gases de fuga por sus efectos corrosivos.</p>
            <p>(c) La abrazadera puede hacer que el componente funcione a una temperatura diferente, lo que puede aumentar la tasa de corrosión o causar corrosión por punto de rocío.</p>
            <p>(d) El contacto con el fluido de proceso o el efecto aislante de la abrazadera puede aumentar la temperatura de los pernos encapsulados, causando que cedan.</p>
            <p>(e) El desarrollo de esfuerzos operativos y residuales debido a la expansión diferencial restringida puede causar que la abrazadera presente fugas.</p>
        </div>
        <div class="subsection">
            <h4>306-3.4 Temperatura y Tenacidad</h4>
            <p>Los materiales de la abrazadera deberán satisfacer los requisitos mínimos de temperatura y, cuando sea aplicable, de tenacidad del código de construcción o post-construcción aplicable.</p>
        </div>
        <div class="subsection">
            <h4>306-3.5 Condiciones de Diseño</h4>
            <p>Las abrazaderas mecánicas, superficies de sellado y pernos deberán diseñarse para las condiciones de diseño y las cargas transitorias anticipadas impuestas en la tubería o componente reparado, siguiendo los requisitos de diseño del código de construcción o post-construcción.</p>
        </div>
        <div class="subsection">
            <h4>306-3.6 Calificación</h4>
            <p>En casos donde no haya requisitos de diseño aplicables, se seguirán los principios del código de construcción o post-construcción aplicable. Los componentes de la abrazadera mecánica que se fabriquen mecanizando accesorios estándar (como cortar una abertura en tapones de tubería estándar para hacer piezas de extremo) deberán ser calificados por análisis o prueba, según lo previsto en el código de construcción o post-construcción aplicable, y ser reforzados si es necesario.</p>
        </div>
        <div class="subsection">
            <h4>306-3.7 Tolerancia a la Corrosión</h4>
            <p>El diseño de la abrazadera deberá incluir la tolerancia a la corrosión aplicable, consistente con el servicio y la vida útil de diseño de la reparación.</p>
        </div>
        <div class="subsection">
            <h4>306-3.8 Cargas de Diseño</h4>
            <p>El diseño de la abrazadera mecánica para condiciones normales de operación deberá considerar lo siguiente:</p>
            <p>(a) las presiones y temperaturas máximas y mínimas coincidentes del sistema, a menos que se proporcionen medios para limitar la presión en la abrazadera mecánica. Diseñar la abrazadera para un rango más bajo de temperaturas de diseño y operación que el componente es aceptable si está justificado por un análisis de transferencia de calor.</p>
            <p>(b) la carga impuesta por el peso de la abrazadera, incluyendo el fluido que fuga atrapado y el material del espacio anular.</p>
            <p>(c) los efectos de la expansión, incluyendo la expansión o contracción diferencial, y el efecto en la flexibilidad de la tubería o componente. En líneas y componentes aislados, la abrazadera también puede aislarse para minimizar la expansión diferencial.</p>
        </div>
        <div class="subsection">
            <h4>306-3.9 Cargas Transitorias</h4>
            <p>Las cargas transitorias anticipadas para usar en el diseño de abrazaderas estructurales deberán incluir, pero no limitarse a:</p>
            <p>(a) cargas de empuje, en caso de separación circunferencial completa de la tubería o componente. El diseño para el empuje axial resultante de la separación circunferencial completa puede omitirse, siempre que la resistencia restante calculada del componente degradado al final de la vida útil de diseño (incluida la degradación continua esperada en servicio) se determine que es suficiente. Pueden añadirse restricciones adicionales a la tubería o componente para reducir las cargas en la abrazadera.</p>
            <p>Donde una abrazadera esté destinada a restringir fuerzas longitudinales, deberá proporcionarse un mecanismo de bloqueo o refuerzo para evitar la separación. No deberá confiarse en la fricción para mantener juntos componentes dañados o separados en un servicio de fluido que sea inflamable, tóxico o dañino para los tejidos humanos, o si los componentes operan en el rango de creep, a menos que un análisis de riesgos documente que el riesgo de falla de la unión con abrazadera es aceptable.</p>
            <p>(b) viento, terremoto, o transitorios de fluido (golpe de ariete o pistón líquido), según sea aplicable.</p>
        </div>
        <div class="subsection">
            <h4>306-3.10 Ventilaciones y Drenajes</h4>
            <p>Al reparar un componente que presenta fugas, el conjunto de abrazadera mecánica deberá diseñarse con ventilaciones y drenajes para permitir ventilar la fuga mientras se ensambla la abrazadera, y luego drenar el anillo según sea necesario.</p>
            <p>(a) También deberán proporcionarse ventilaciones para abrazaderas mecánicas instaladas bajo el agua para evitar la sobrepresurización del agua atrapada en el anillo mientras se aprieta la abrazadera.</p>
            <p>(b) La ventilación o drenaje deberá incluir una tapa roscada, una brida, o una válvula que se abrirá para evitar la acumulación de presión interna durante el montaje. Esta misma ventilación o drenaje puede usarse para ventilar o drenar la abrazadera en el futuro. Si se va a inyectar material sellante en la abrazadera, estas conexiones de ventilación y drenaje pueden usarse, o pueden proporcionarse inyecciones separadas.</p>
        </div>
        <div class="subsection">
            <h4>306-3.11 Metal Sano</h4>
            <p>La abrazadera deberá ser suficientemente larga para extenderse a un área sana del componente reparado. El componente sujeto a la abrazadera deberá examinarse para asegurar que hay suficiente espesor de pared en los puntos de contacto de la abrazadera para soportar la presión y las cargas estructurales en el componente, más las cargas adicionales impuestas por la abrazadera.</p>
        </div>
        <div class="subsection">
            <h4>306-3.12 Presión del Sellante</h4>
            <p>Si se utiliza inyección de sellante, deberá considerarse la posibilidad de colapso hacia adentro del componente sujeto a la abrazadera debido a la presión del anillo del sellante inyectado. Deberá considerarse la liberación de gases de los compuestos de sellante cuando curan.</p>
        </div>
        <div class="subsection">
            <h4>306-3.13 Filtración del Sellante</h4>
            <p>Si se utiliza inyección de sellante, deberá considerarse la posibilidad y consecuencia de que el sellante se filtre en el componente dañado.</p>
        </div>
        <div class="subsection">
            <h4>306-3.14 Juntas</h4>
            <p>Las abrazaderas sobre juntas de expansión, juntas deslizantes, juntas esféricas, etc., son casos especiales que requerirán un análisis de las cargas en el sistema de tuberías, anclajes y boquillas de componentes con la abrazadera instalada, con la debida consideración para los movimientos inducidos térmicamente en condiciones de operación y parada.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_306-1-2.png" class="figure-image">
                <p class="figure-caption">Figura 306-1-2—Abrazadera Mecánica Cuadrada sobre Ramificación de Drenaje, con Boquilla de Inyección de Sellante</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>306-4 FABRICACIÓN</h4>
        <div class="subsection">
            <h4>306-4.1 Preparación</h4>
            <p>El componente al que se va a adjuntar la abrazadera deberá estar libre de depósitos de corrosión sueltos, suciedad, pintura, aislamiento, mastiques y otros recubrimientos en las proximidades de la instalación de la abrazadera mecánica, en particular el área donde las superficies de sellado contactarán con el componente a presión. Estas sustancias pueden impedir que las superficies de sellado se asienten correctamente contra el componente a presión o generar una ruta de fuga bajo las superficies de sellado. Las abrazaderas que utilizan inyección de sellante generalmente superarán estas preocupaciones.</p>
        </div>
        <div class="subsection">
            <h4>306-4.2 Instalación de Caja de Fuga</h4>
            <p>Se deberá tener cuidado de no dañar la abrazadera, especialmente las superficies de sellado. Para fugas pequeñas, la abrazadera puede colocarse típicamente directamente sobre la fuga. Las instalaciones más grandes o de mayor presión generalmente requieren que la abrazadera mecánica se instale flojamente en el componente al lado de la fuga y luego se deslice y apriete sobre la fuga.</p>
        </div>
        <div class="subsection">
            <h4>306-4.3 Calificación</h4>
            <p>El personal deberá estar calificado para instalar la abrazadera de reparación y la inyección de sellante, cuando se aplique sellante.</p>
        </div>
        <div class="subsection">
            <h4>306-4.4 Instalación en Servicio</h4>
            <p>La abrazadera puede instalarse cuando el sistema está fuera de servicio o, con los procedimientos de seguridad necesarios, en servicio.</p>
        </div>
        <div class="subsection">
            <h4>306-4.5 Detención de Fugas</h4>
            <p>Si se instala una abrazadera mecánica sobre un componente adelgazado o que presenta fugas, deberá considerarse la posibilidad de envolver el componente con fibra de vidrio, compuesto o envolturas metálicas de modo que la fuga pueda detenerse antes de instalar la abrazadera. Esto también evitará introducir sellante en el proceso. Esto también puede ayudar en el sellado futuro, si el perímetro comienza a presentar fugas.</p>
        </div>
        <div class="subsection">
            <h4>306-4.6 Soldadura</h4>
            <p>La abrazadera mecánica puede soldarse al componente. En este caso, las disposiciones de soldadura, examen y prueba para cajas de reparación de fugas deberán revisarse para su aplicabilidad a la reparación.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-5 EXAMEN</h4>
        <div class="subsection">
            <h4>306-5.1 Aplicabilidad</h4>
            <p>El par final de los pernos deberá verificarse donde lo especifique el diseño.</p>
        </div>
        <div class="subsection">
            <h4>306-5.2 Examen Visual</h4>
            <p>El conjunto deberá examinarse visualmente para verificar su conformidad con el diseño.</p>
        </div>
        <div class="subsection">
            <h4>306-5.3 Evaluación</h4>
            <p>Los resultados de los exámenes deberán evaluarse siguiendo los criterios del código de construcción o post-construcción aplicable.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-6 PRUEBAS</h4>
        <div class="subsection">
            <h4>306-6.1 Aplicabilidad</h4>
            <p>El diseñador deberá determinar el tipo de prueba de presión o de fuga que se realizará después de la instalación, sobre la base del riesgo - probabilidad y consecuencia de falla del componente reparado al presurizar el anillo entre la abrazadera y el componente.</p>
        </div>
        <div class="subsection">
            <h4>306-6.2 Método de Prueba</h4>
            <p>La prueba puede consistir en uno de los siguientes:</p>
            <p>(a) una prueba de fuga en servicio si la consecuencia de una fuga en servicio fuera de la abrazadera es aceptable</p>
            <p>(b) una prueba hidrostática (cuando se realice una prueba hidrostática en una reparación en un sistema operativo caliente, se requiere precaución para evitar la descarga de agua de prueba que se vaporice)</p>
            <p>(c) una prueba neumática de presión</p>
            <p>(d) una prueba de fuga sensible (como aire con solución burbujeante, o prueba de fuga con helio)</p>
        </div>
    </div>
    <div class="subsection">
        <h4>306-7 REFERENCIAS</h4>
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        <ul>
            <li>API 510, Pressure Vessel Inspection Code: Maintenance, Inspection, Rating, Repair and Alteration (Código de Inspección de Recipientes a Presión: Mantenimiento, Inspección, Clasificación, Reparación y Alteración)</li>
            <li>API 570, Piping Inspection Code: Inspection, Repair, Alteration, and Rerating of In-Service Piping Systems (Código de Inspección de Tuberías: Inspección, Reparación, Alteración y Reclasificación de Sistemas de Tuberías en Servicio)</li>
            <li>Editor: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
            <li>ASME Boiler and Pressure Vessel Code, Section VIII - Rules for Construction of Pressure Vessels (Código de Calderas y Recipientes a Presión ASME, Sección VIII - Reglas para la Construcción de Recipientes a Presión)</li>
            <li>Editor: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</li>
        </ul>
    </div>
    `
});