// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos y Tuberías a Presión"
    });
}

// Registrar el capítulo 212
registerChapter('ASMEPCC2', {
    id: 212,
    title: "Fillet Welded Patches",
    titleEs: "Parches Soldados con Filete",
    content: `<h3>212 Fillet Welded Patches</h3>
    <div class="subsection">
        <h3>212-1 DESCRIPTION</h3>
        <p>(a) This repair method describes the selection criteria, application limitations, design, fabrication, examination, and testing of fillet welded surface patches to pressure-retaining components. Similar fillet welded surface patch repair methods with reinforcing plug welds are provided in Article 207.</p>
        <p>(b) This repair method consists of fitting a repair plate to closely match the original component's exterior or interior surface. The repair plate is sized to cover the areas exhibiting damage, both at the time of repair and that anticipated for the repair's design life.</p>
        <p>(c) The repair method is typically applied to pressure retaining shells that have suffered local wall thinning (including through-wall) due to erosion, corrosion, and other local damage mechanisms.</p>
        <p>(d) This repair method is applicable to cylindrical, spherical, flat, and conical shells as well as other pressure components.</p>
        <p>(e) This repair method is generally suitable for service temperatures above the nil-ductility temperature of the materials of construction up to a maximum design temperature of 345°C (650°F). Use of this repair method for lower temperatures requires evaluation of notch toughness, nonductile fracture and other applicable low temperature effects. Use of this repair method for higher temperatures requires evaluation of thermal fatigue, creep, and other applicable high temperature effects.</p>
        <p>(f) Figure 212-1-1 shows a typical application on a vessel with a nearby structural discontinuity (in this case a nozzle). The plan view on top shows two of many possible repair patch configurations, which are generally rectilinear in shape with rounded corners. The bottom sectional view shows the curvature matching aspect of each repair plate.</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-1-1.png" class="figure-image">
            <p class="figure-caption">Figure 212-1-1—Typical Shell Repair Near Discontinuity</p>
        </div>
    </div>
    
    <h3>212-2 LIMITATIONS</h3>
    <div class="subsection">
        <p>(a) Part 1 of this Standard, "Scope, Organization, and Intent," contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        <p>(b) This repair method is not limited by the component size. However, a sleeve type repair may be more suitable for those applications where axisymmetric behavior is important.</p>
        <p>(c) This repair method shall not be used where the damage mechanism, the extent of damage, or likely future damage cannot be characterized. This repair method may be used in certain cases on areas with local crack-like flaws, provided</p>
        <p>(1) the growth has stopped, been arrested, or can be accurately predicted for all propagation modes</p>
        <p>(2) the effect of the flaw is evaluated using detailed analyses</p>
    </div>
    
    <h3>212-3 DESIGN</h3>
    <div class="subsection">
        <h4>212-3.1 General</h4>
        <p>(a) The design approach for this repair method is based in part on standard pressure component design calculations, such as those in the ASME BPVC, Section VIII, Division 1. The application limitations imposed in section 212-2 apply to the governing load case resulting from internal pressure where the resultant stress is membrane stress. However, if the component to be repaired is subject to bending, torsion, wind loads, or to fatigue, the design shall include evaluation of these conditions using appropriate methods of analysis. In all cases, an engineering analysis shall be performed.</p>
        <p>(b) In general, the patch material and welding filler metal should be the same or very similar (e.g., compositional, physical, and mechanical properties) to that of the pressure component's original construction. Repair material selection shall consider, as a minimum, characteristics such as chemistry, weldability, physical properties (such as coefficient of thermal expansion), mechanical properties (such as strength, ductility, notch toughness), and compatibility with the process medium.</p>
        <p>(c) The thickness of the patch plate is dependent on material mechanical properties and the calculated attachment weld sizes.</p>
        <p>(d) The size (length and width) of the patch plate is governed by the requirement that all attachment welds be located on sound base metal completely encompassing the damaged area(s) (see Figure 212-1-1). The repair plate shall also be large enough to encompass any additional area(s) anticipated to experience similar or related damage during the life of the repair. The patch plate should overlap sound base metal by at least 25 mm (1 in.).</p>
        <p>(e) This repair method is generally used on the outside surface of components subject to internal pressure. For applications under external pressure, a separate analysis to evaluate buckling and other instability considerations shall be performed.</p>
        <p>(f) In assessing the applicability and service life of this repair method, consideration shall be given to material compatibility, future operating conditions, thermal and shrinkage effects of welding, the introduction of crevices and structural discontinuities, thermal transients and temperature differentials between the patch plate and the component, and other application limits such as examination and testing constraints. If the damage to be patched is, or is expected to be, through-wall, the effects of fluids (e.g., entrapment, concentration, corrosion, etc.) that may accumulate between the vessel and the patch plate shall be assessed. If this repair method is to be implemented during component operation, additional precautions may need to be taken for personnel safety.</p>
        <p>(g) The design may consider the combined strength of the patch plate (considering also the strength of the fillet weld joints, including joint efficiency) and the underlying shell. Consideration may also be given to excess thickness available adjacent to the damaged shell using applicable code area replacement rules for nozzles. No credit shall be taken for material required for future corrosion allowance.</p>
    </div>
    
    <div class="subsection">
        <h4>212-3.2 Internal Pressure Loads</h4>
        <p>(a) For cylindrical components subject to internal pressure loads, applied forces on the repair patch shall be determined as follows:</p>
        <p>(1) Circumferential Load. Unit forces in hoop direction:</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-3.2.1.png" class="figure-image">
            <p class="figure-caption">Figure 212-3.2.1—Circumferential Load</p>
        </div>
        
        <p>FCP = PDm/2 (1)</p>
        <p>Where</p>
        <p>Dm = mean diameter of component, mm (in.)</p>
        <p>FCP = circumferential force due to internal pressure, N/mm (lb/in.)</p>
        <p>P = internal design pressure, MPa (psi)</p>
        
        <p>(2) Longitudinal Load. Unit forces in longitudinal direction:</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-3.2.2.png" class="figure-image">
            <p class="figure-caption">Figure 212-3.2.2—Longitudinal Load</p>
        </div>
        
        <p>FLP = PDm/4 (2)</p>
        <p>where</p>
        <p>FLP = longitudinal force due to internal pressure, N/mm (lb/in.)</p>
        
        <p>(b) If other loads are applicable (such as bending, torsion, wind, etc.), they shall be determined and added to the pressure load such that</p>
        <p>FC = FCP + FCO</p>
        <p>and</p>
        <p>FL = FLP + FLO</p>
        <p>where</p>
        <p>FC = total circumferential force from all loads, N/mm (lb/in.)</p>
        <p>FCO = circumferential force due to other applicable loads, N/mm (lb/in.)</p>
        <p>FLO = total longitudinal force from all loads, N/mm (lb/in.)</p>
        
        <p>(c) Appropriate alternative force calculations for spherical, torispherical, or ellipsoidal pressure components shall be used when applicable.</p>
    </div>
    
    <div class="subsection">
        <h4>212-3.3 Structural Discontinuity Evaluation</h4>
        <p>(a) For stresses near a nozzle or other structural discontinuity to be insignificant, the minimum distance between the fillet welded patch plate and the existing discontinuity should be</p>
        <p>Lmin = 2(Rmt)^(1/2) (3)</p>
        <p>where</p>
        <p>Lmin = plate setback distance (see Figure 212-1-1), mm (in.)</p>
        <p>Rm = radius at mid-wall of component, mm (in.)</p>
        <p>t = wall thickness of component, mm (in.)</p>
        <p>Equation (3) applies the setback distance (Rmt)^(1/2) to both the existing nozzle (or other similar structural discontinuity) and the patch plate.</p>
        <p>This proximity limit also applies to the distance between adjacent fillet welded patch plates, in those applications where more than one is employed on a given component.</p>
        <p>(b) In those applications where the patch plate is to attach to existing nozzle reinforcement pads, the patch plate may be contoured to match the reinforcement pad perimeter and welded thereto with a full penetration joint.</p>
        <p>(c) In those applications where the damaged shell is within Lmin of a nozzle or other structural discontinuity, the patch plate should be designed as a reinforcement pad extending 360 deg around the nozzle/opening, and welded thereto with a full penetration joint. Alternatively, additional detailed analysis may be performed to evaluate local stresses.</p>
    </div>
    
    <div class="subsection">
        <h4>212-3.4 Allowable Load on Perimeter Fillet Weld</h4>
        <p>(a) The perimeter weld shall be sized such that the allowable load on the weld exceeds the longitudinal and circumferential loads in accordance with eq (4).</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-3.4.1.png" class="figure-image">
            <p class="figure-caption">Figure 212-3.4.1—Allowable Load on Perimeter Fillet Weld</p>
        </div>
        
        <p>FA = wmin E Sa (4)</p>
        <p>where</p>
        <p>E = weld joint efficiency factor (0.55)</p>
        <p>FA = allowable force on fillet welds, N/mm (lb/in.); FA > FC and FL</p>
        <p>Sa = allowable base metal stress, MPa (psi)</p>
        <p>Wmin = minimum weld leg dimension, mm (in.)</p>
        <p>NOTE: The maximum design fillet weld size shall not exceed the thickness of the thinner material being joined nor 40 mm (1.5 in.).</p>
        <p>1 Compatible weld metal shall be of equal or greater strength.</p>
        
        <p>(b) Alternatively, the perimeter weld edge preparation may be beveled to increase the weld's effective throat thickness. In no case shall the effective throat exceed the nominal thickness of the repair plate or the original nominal component thickness.</p>
        
        <p>(c) In addition, load path eccentricity of the hoop stress in the shell plate and patch plate shall be considered. The perimeter welds bearing circumferential loads shall be sized such that</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-3.4.2.png" class="figure-image">
            <p class="figure-caption">Figure 212-3.4.2—Allowable Load on Perimeter Fillet Weld</p>
        </div>
        
        <p>Sw = (PDm/2T) + (3PDme/T²) (5)</p>
        <p>where</p>
        <p>e = load path eccentricity (T + t)/2, mm (in.)</p>
        <p>Sw = calculated weld stress, MPa (psi); Sw ≤ 1.5 Sa</p>
        <p>T = wall thickness of patch plate, mm (in.)</p>
    </div>
    
    <div class="subsection">
        <h4>212-3.5 Cold Forming Limits</h4>
        <p>(a) Carbon and low alloy steel patch plates fabricated by cold forming shall not exceed 5% extreme fiber elongation. The extreme fiber elongation shall be determined as follows:</p>
        <p>(1) For double curvature</p>
        <p>75T/Rf (1-(Rf/Ro)) ≤ 5% (6)</p>
        <p>where</p>
        <p>Rf = final centerline radius of patch plate, mm (in.)</p>
        <p>Ro = original centerline radius of patch plate (equals infinity for flat plate), mm (in.)</p>
        <p>T = thickness of the patch plate, mm (in.)</p>
        
        <p>(2) For single curvature</p>
        <p>50T/Rf (1-(Rf/Ro)) ≤ 5% (7)</p>
        
        <p>(b) Patches cold formed beyond these limits may be used provided they receive appropriate postforming stress relief prior to installation.</p>
    </div>
    
    <h3>212-4 FABRICATION</h3>
    <div class="subsection">
        <p>(a) Plate edges may be cut to shape and size by mechanical means such as machining, shearing, grinding, or by thermal means such as flame or arc cutting. If thermal means are used, a minimum of 1.5 mm (1/16 in.) additional material shall be removed by grinding or machining. If the repair plate is greater than 25 mm (1 in.) thick, and the fillet weld size is less than the plate thickness, the weld prep edges shall be examined by magnetic particle (MT) or liquid penetrant (PT) methods to check for laminations. Laminations shall be cause for rejection unless repaired or found acceptable by fitness-for-service analysis in accordance with API 579-1/ASME FFS-1.</p>
        <p>(b) The patch plate may be formed to the required shape by any process that will not unduly impair the mechanical properties of the patch plate material. Where required due to repair plate size or access/interference considerations, split sections may be used when joined by full penetration welds.</p>
        <p>(c) Parts to be fillet welded shall be fit as tightly as practical to the surface to be welded and in no event shall be separated by more than 5 mm (3/16 in.). If the separation at the faying edge of the plate is 1.5 mm (1/16 in.) or greater, the size of the perimeter weld shall be recalculated by adding the amount of the separation to the eccentricity, e.</p>
        <p>(d) Welding procedures, welders, and welding operators shall be qualified in accordance with the current requirements of the applicable construction code or post construction code. If not otherwise specified, ASME BPVC, Section IX may be used for procedure and performance qualification. Article 210 should be consulted for in service welding issues; Article 214 should be consulted for field heat treating issues.</p>
        <p>(e) Field repair activities should conform to the following sequence:</p>
        <p>(1) Paint, scale, rust, liquids and other foreign material shall be removed from the weld zone and an area not less than 40 mm (1-1/2 in.) on either side of the weldment.</p>
        <p>(2) In those areas that will be covered by the new patch plate, existing shell seam or girth welds should be ground flush with the vessel or pipe O.D. and should be examined by the MT or PT method.</p>
        <p>(3) The new patch plate may be placed in position using any suitable method.</p>
        <p>(4) Any seams within the patch itself should be made first. The perimeter weld may then be completed. Clamps or wedges may be used to ensure proper joint alignment and fit-up.</p>
        <p>(f) Exposed metal surfaces should be recoated, if applicable, after completion of all examination and testing.</p>
        <p>(g) To preclude gas pressure buildup between the patch plate and the pressure component boundary, provisions for venting during the final closure weld or, if applicable, postweld heat treatment, may be necessary. If the patch plate is designed for through-wall defects but applied to the pressure boundary before being breached, the vent should be sealed after completion of welding and, if applicable, postweld heat treatment.</p>
    </div>
    
    <h3>212-5 EXAMINATION</h3>
    <div class="subsection">
        <p>(a) Patch plate attachment welds shall be examined in accordance with the applicable construction code or post construction code by either the MT or PT methods if not temperature limited by the test methods. If not otherwise specified by the applicable construction code or post construction code, NDE shall be performed using procedures written and qualified in accordance with ASME BPVC, Section V.</p>
        <p>(b) If lifting lugs are used and left in place, their attachment welds shall be examined by MT or PT methods. At all locations where temporary lifting lugs, welded clamps, and/or wedges are removed after patch plate installation, the removal areas shall be examined by MT or PT methods.</p>
        <p>(c) Welds joining sections of patch plates made of separate pieces should be surface contoured and volumetrically examined by either radiographic or ultrasonic examination methods to the extent possible. If not practicable, multilayer PT or MT examinations should be performed.</p>
        <p>(d) If postweld heat treatment is required, the examination shall be performed after application of PWHT.</p>
        <p>(e) The examination acceptance criteria of the applicable construction code or post-construction code shall apply.</p>
    </div>
    
    <h3>212-6 TESTING</h3>
    <div class="subsection">
        <p>(a) Testing shall be performed in accordance with the applicable post-construction code.</p>
        <p>(b) The pressure component and installed patch plate(s) should be leak tested in accordance with the applicable post-construction code. Special safety precautions should be taken when pneumatic leak testing is performed.</p>
        <p>(c) If permitted by the applicable post-construction code, nondestructive examination may be performed as an alternative to leak testing. Also, an initial service inspection may be performed of all weld joints after the pressure component has returned to normal operating pressure and temperature, if these were reduced while welding was performed.</p>
        <p>(d) Testing and inspections should be performed prior to reapplication of coating, insulation, or jacketing, as applicable.</p>
    </div>
    
    <h3>212-7 REFERENCES</h3>
    <div class="subsection">
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        <p>API 579-1/ASME FFS-1, Fitness-for-Service, June 5, 2007<br>
        Publisher: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</p>
        <p>ASME Boiler and Pressure Vessel Code, Section V - Nondestructive Examination<br>
        ASME Boiler and Pressure Vessel Code, Section VIII, Division 1 - Rules for Construction of Pressure Vessels<br>
        ASME Boiler and Pressure Vessel Code, Section IX - Welding, Brazing, and Fusing Qualifications<br>
        Publisher: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</p>
    </div>
    `,
    contentEs: `<h3>212 Parches Soldados con Filete</h3>
    <div class="subsection">
        <h3>212-1 DESCRIPCIÓN</h3>
        <p>(a) Este método de reparación describe los criterios de selección, limitaciones de aplicación, diseño, fabricación, examen y prueba de parches superficiales soldados con filete en componentes de retención de presión. Métodos de reparación similares de parches superficiales soldados con filete con soldaduras de tapón de refuerzo se proporcionan en el Artículo 207.</p>
        <p>(b) Este método de reparación consiste en ajustar una placa de reparación para que coincida estrechamente con la superficie exterior o interior del componente original. La placa de reparación se dimensiona para cubrir las áreas que muestran daño, tanto en el momento de la reparación como el previsto para la vida útil de diseño de la reparación.</p>
        <p>(c) El método de reparación se aplica típicamente a cascarones de retención de presión que han sufrido adelgazamiento local de la pared (incluyendo penetración total) debido a erosión, corrosión y otros mecanismos de daño local.</p>
        <p>(d) Este método de reparación es aplicable a cascarones cilíndricos, esféricos, planos y cónicos, así como a otros componentes a presión.</p>
        <p>(e) Este método de reparación es generalmente adecuado para temperaturas de servicio por encima de la temperatura de ductilidad nula de los materiales de construcción hasta una temperatura máxima de diseño de 345°C (650°F). El uso de este método de reparación para temperaturas más bajas requiere evaluación de la tenacidad de la muesca, fractura no dúctil y otros efectos aplicables de baja temperatura. El uso de este método de reparación para temperaturas más altas requiere evaluación de fatiga térmica, creep y otros efectos aplicables de alta temperatura.</p>
        <p>(f) La Figura 212-1-1 muestra una aplicación típica en un recipiente con una discontinuidad estructural cercana (en este caso una boquilla). La vista plana superior muestra dos de muchas configuraciones posibles de parche de reparación, que son generalmente de forma rectilínea con esquinas redondeadas. La vista sectional inferior muestra el aspecto de coincidencia de curvatura de cada placa de reparación.</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-1-1.png" class="figure-image">
            <p class="figure-caption">Figura 212-1-1—Reparación Típica de Cascarón Cerca de Discontinuidad</p>
        </div>
    </div>
    
    <h3>212-2 LIMITACIONES</h3>
    <div class="subsection">
        <p>(a) La Parte 1 de esta Norma, "Alcance, Organización e Intención", contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse en conjunción con la Parte 1.</p>
        <p>(b) Este método de reparación no está limitado por el tamaño del componente. Sin embargo, un tipo de reparación con manguito puede ser más adecuado para aquellas aplicaciones donde el comportamiento axisimétrico es importante.</p>
        <p>(c) Este método de reparación no deberá utilizarse donde el mecanismo de daño, la extensión del daño, o el daño futuro probable no puedan caracterizarse. Este método de reparación puede utilizarse en ciertos casos en áreas con defectos tipo grieta localizados, siempre que</p>
        <p>(1) el crecimiento se haya detenido, sido arrestado, o pueda predecirse con precisión para todos los modos de propagación</p>
        <p>(2) el efecto del defecto se evalúe utilizando análisis detallados</p>
    </div>
    
    <h3>212-3 DISEÑO</h3>
    <div class="subsection">
        <h4>212-3.1 General</h4>
        <p>(a) El enfoque de diseño para este método de reparación se basa en parte en cálculos estándar de diseño de componentes a presión, como los en el ASME BPVC, Sección VIII, División 1. Las limitaciones de aplicación impuestas en la sección 212-2 se aplican al caso de carga gobernante resultante de la presión interna donde el esfuerzo resultante es esfuerzo de membrana. Sin embargo, si el componente a reparar está sujeto a flexión, torsión, cargas de viento, o a fatiga, el diseño deberá incluir la evaluación de estas condiciones utilizando métodos apropiados de análisis. En todos los casos, deberá realizarse un análisis de ingeniería.</p>
        <p>(b) En general, el material del parche y el metal de aporte de soldadura deberán ser el mismo o muy similar (por ejemplo, propiedades composicionales, físicas y mecánicas) al de la construcción original del componente a presión. La selección del material de reparación deberá considerar, como mínimo, características tales como química, soldabilidad, propiedades físicas (como el coeficiente de expansión térmica), propiedades mecánicas (como resistencia, ductilidad, tenacidad de la muesca), y compatibilidad con el medio del proceso.</p>
        <p>(c) El espesor de la placa del parche depende de las propiedades mecánicas del material y los tamaños calculados de la soldadura de fijación.</p>
        <p>(d) El tamaño (longitud y ancho) de la placa del parche se rige por el requisito de que todas las soldaduras de fijación estén ubicadas en metal base sano abarcando completamente el/los área(s) dañada(s) (ver Figura 212-1-1). La placa de reparación también deberá ser lo suficientemente grande para abarcar cualquier área(s) adicional(es) que se anticipe que experimentará daño similar o relacionado durante la vida útil de la reparación. La placa del parche deberá superponerse al metal base sano en al menos 25 mm (1 pulg.).</p>
        <p>(e) Este método de reparación se utiliza generalmente en la superficie exterior de componentes sujetos a presión interna. Para aplicaciones bajo presión externa, deberá realizarse un análisis separado para evaluar el pandeo y otras consideraciones de inestabilidad.</p>
        <p>(f) Al evaluar la aplicabilidad y vida útil de este método de reparación, se deberá considerar la compatibilidad de materiales, las condiciones de operación futuras, los efectos térmicos y de contracción de la soldadura, la introducción de rendijas y discontinuidades estructurales, los transitorios térmicos y las diferencias de temperatura entre la placa del parche y el componente, y otros límites de aplicación tales como restricciones de examen y prueba. Si el daño a parchar es, o se espera que sea, a través de la pared, se deberán evaluar los efectos de los fluidos (por ejemplo, atrapamiento, concentración, corrosión, etc.) que puedan acumularse entre el recipiente y la placa del parche. Si este método de reparación va a implementarse durante la operación del componente, pueden ser necesarias precauciones adicionales para la seguridad del personal.</p>
        <p>(g) El diseño puede considerar la resistencia combinada de la placa del parche (considerando también la resistencia de las juntas soldadas con filete, incluyendo la eficiencia de la junta) y el cascarón subyacente. También puede considerarse el espesor excesivo disponible adyacente al cascarón dañado utilizando las reglas aplicables de reemplazo de área del código para boquillas. No se deberá tomar crédito por el material requerido para la tolerancia de corrosión futura.</p>
    </div>
    
    <div class="subsection">
        <h4>212-3.2 Cargas de Presión Interna</h4>
        <p>(a) Para componentes cilíndricos sujetos a cargas de presión interna, las fuerzas aplicadas en el parche de reparación deberán determinarse de la siguiente manera:</p>
        <p>(1) Carga Circunferencial. Fuerzas unitarias en dirección circunferencial:</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-3.2.1.png" class="figure-image">
            <p class="figure-caption">Figura 212-3.2.1—Carga Circunferencial</p>
        </div>
        
        <p>FCP = PDm/2 (1)</p>
        <p>Donde</p>
        <p>Dm = diámetro medio del componente, mm (pulg.)</p>
        <p>FCP = fuerza circunferencial debido a la presión interna, N/mm (lb/pulg.)</p>
        <p>P = presión de diseño interna, MPa (psi)</p>
        
        <p>(2) Carga Longitudinal. Fuerzas unitarias en dirección longitudinal:</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-3.2.2.png" class="figure-image">
            <p class="figure-caption">Figura 212-3.2.2—Carga Longitudinal</p>
        </div>
        
        <p>FLP = PDm/4 (2)</p>
        <p>donde</p>
        <p>FLP = fuerza longitudinal debido a la presión interna, N/mm (lb/pulg.)</p>
        
        <p>(b) Si otras cargas son aplicables (tales como flexión, torsión, viento, etc.), deberán determinarse y añadirse a la carga de presión tal que</p>
        <p>FC = FCP + FCO</p>
        <p>y</p>
        <p>FL = FLP + FLO</p>
        <p>donde</p>
        <p>FC = fuerza circunferencial total de todas las cargas, N/mm (lb/pulg.)</p>
        <p>FCO = fuerza circunferencial debido a otras cargas aplicables, N/mm (lb/pulg.)</p>
        <p>FLO = fuerza longitudinal total de todas las cargas, N/mm (lb/pulg.)</p>
        
        <p>(c) Deberán utilizarse cálculos alternativos apropiados de fuerzas para componentes de presión esféricos, torisféricos o elipsoidales cuando sea aplicable.</p>
    </div>
    
    <div class="subsection">
        <h4>212-3.3 Evaluación de Discontinuidad Estructural</h4>
        <p>(a) Para que los esfuerzos cerca de una boquilla u otra discontinuidad estructural sean insignificantes, la distancia mínima entre la placa del parche soldado con filete y la discontinuidad existente debería ser</p>
        <p>Lmin = 2(Rmt)^(1/2) (3)</p>
        <p>donde</p>
        <p>Lmin = distancia de retroceso de la placa (ver Figura 212-1-1), mm (pulg.)</p>
        <p>Rm = radio en la mitad del espesor de la pared del componente, mm (pulg.)</p>
        <p>t = espesor de pared del componente, mm (pulg.)</p>
        <p>La Ecuación (3) aplica la distancia de retroceso (Rmt)^(1/2) tanto a la boquilla existente (u otra discontinuidad estructural similar) como a la placa del parche.</p>
        <p>Este límite de proximidad también se aplica a la distancia entre placas de parche adyacentes soldadas con filete, en aquellas aplicaciones donde se emplea más de una en un componente dado.</p>
        <p>(b) En aquellas aplicaciones donde la placa del parche va a fijarse a placas de refuerzo de boquilla existentes, la placa del parche puede contornearse para que coincida con el perímetro de la placa de refuerzo y soldarse a la misma con una junta de penetración completa.</p>
        <p>(c) En aquellas aplicaciones donde el cascarón dañado está dentro de Lmin de una boquilla u otra discontinuidad estructural, la placa del parche debería diseñarse como una placa de refuerzo que se extiende 360 grados alrededor de la boquilla/abertura, y soldarse a la misma con una junta de penetración completa. Alternativamente, puede realizarse un análisis detallado adicional para evaluar los esfuerzos locales.</p>
    </div>
    
    <div class="subsection">
        <h4>212-3.4 Carga Admisible en la Soldadura de Filete Perimetral</h4>
        <p>(a) La soldadura perimetral deberá dimensionarse de manera que la carga admisible en la soldadura exceda las cargas longitudinales y circunferenciales de acuerdo con la ec. (4).</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-3.4.1.png" class="figure-image">
            <p class="figure-caption">Figura 212-3.4.1—Carga Admisible en la Soldadura de Filete Perimetral</p>
        </div>
        
        <p>FA = wmin E Sa (4)</p>
        <p>donde</p>
        <p>E = factor de eficiencia de la junta soldada (0.55)</p>
        <p>FA = fuerza admisible en soldaduras de filete, N/mm (lb/pulg.); FA > FC y FL</p>
        <p>Sa = esfuerzo admisible del metal base, MPa (psi)</p>
        <p>Wmin = dimensión mínima de la pierna de la soldadura, mm (pulg.)</p>
        <p>NOTA: El tamaño máximo de diseño de la soldadura de filete no excederá el espesor del material más delgado que se está uniendo ni 40 mm (1.5 pulg.).</p>
        <p>1 El metal de soldadura compatible deberá ser de resistencia igual o superior.</p>
        
        <p>(b) Alternativamente, la preparación del borde de la soldadura perimetral puede biselarse para aumentar el espesor eficaz de la garganta de la soldadura. En ningún caso la garganta eficaz excederá el espesor nominal de la placa de reparación o el espesor nominal original del componente.</p>
        
        <p>(c) Además, deberá considerarse la excentricidad del camino de carga del esfuerzo circunferencial en la placa del cascarón y la placa del parche. Las soldaduras perimetrales que soportan cargas circunferenciales deberán dimensionarse de manera que</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_212-3.4.2.png" class="figure-image">
            <p class="figure-caption">Figura 212-3.4.2—Carga Admisible en la Soldadura de Filete Perimetral</p>
        </div>
        
        <p>Sw = (PDm/2T) + (3PDme/T²) (5)</p>
        <p>donde</p>
        <p>e = excentricidad del camino de carga (T + t)/2, mm (pulg.)</p>
        <p>Sw = esfuerzo calculado de la soldadura, MPa (psi); Sw ≤ 1.5 Sa</p>
        <p>T = espesor de pared de la placa del parche, mm (pulg.)</p>
    </div>
    
    <div class="subsection">
        <h4>212-3.5 Límites de Conformado en Frío</h4>
        <p>(a) Las placas de parche de acero al carbono y baja aleación fabricadas por conformado en frío no excederán el 5% de elongación de la fibra extrema. La elongación de la fibra extrema deberá determinarse de la siguiente manera:</p>
        <p>(1) Para doble curvatura</p>
        <p>75T/Rf (1-(Rf/Ro)) ≤ 5% (6)</p>
        <p>donde</p>
        <p>Rf = radio final de la línea central de la placa del parche, mm (pulg.)</p>
        <p>Ro = radio original de la línea central de la placa del parche (igual a infinito para placa plana), mm (pulg.)</p>
        <p>T = espesor de la placa del parche, mm (pulg.)</p>
        
        <p>(2) Para curvatura simple</p>
        <p>50T/Rf (1-(Rf/Ro)) ≤ 5% (7)</p>
        
        <p>(b) Los parches conformados en frío más allá de estos límites pueden utilizarse siempre que reciban un alivio de esfuerzos post-conformado apropiado antes de la instalación.</p>
    </div>
    
    <h3>212-4 FABRICACIÓN</h3>
    <div class="subsection">
        <p>(a) Los bordes de la placa pueden cortarse a la forma y tamaño por medios mecánicos como mecanizado, cizallado, esmerilado, o por medios térmicos como corte con llama o arco. Si se utilizan medios térmicos, se deberá eliminar un mínimo de 1.5 mm (1/16 pulg.) de material adicional por esmerilado o mecanizado. Si la placa de reparación es mayor de 25 mm (1 pulg.) de espesor, y el tamaño de la soldadura de filete es menor que el espesor de la placa, los bordes de preparación de la soldadura deberán examinarse por métodos de partículas magnéticas (MT) o líquidos penetrantes (PT) para verificar laminaciones. Las laminaciones serán causa de rechazo a menos que se reparen o se encuentren aceptables por análisis de aptitud para el servicio de acuerdo con API 579-1/ASME FFS-1.</p>
        <p>(b) La placa del parche puede formarse a la forma requerida por cualquier proceso que no perjudique indebidamente las propiedades mecánicas del material de la placa del parche. Cuando sea necesario debido al tamaño de la placa de reparación o consideraciones de acceso/interferencia, pueden utilizarse secciones divididas cuando se unan con soldaduras de penetración completa.</p>
        <p>(c) Las piezas que se van a soldar con filete deberán ajustarse lo más ajustado posible a la superficie que se va a soldar y en ningún caso deberán estar separadas por más de 5 mm (3/16 pulg.). Si la separación en el borde de contacto de la placa es de 1.5 mm (1/16 pulg.) o mayor, el tamaño de la soldadura perimetral deberá recalcularse añadiendo la cantidad de separación a la excentricidad, e.</p>
        <p>(d) Los procedimientos de soldadura, soldadores y operadores de soldadura deberán estar calificados de acuerdo con los requisitos vigentes del código de construcción aplicable o código post-construcción. Si no se especifica lo contrario, puede utilizarse ASME BPVC, Sección IX para la calificación de procedimientos y rendimiento. Deberá consultarse el Artículo 210 para problemas de soldadura en servicio; deberá consultarse el Artículo 214 para problemas de tratamiento térmico de campo.</p>
        <p>(e) Las actividades de reparación de campo deberán ajustarse a la siguiente secuencia:</p>
        <p>(1) La pintura, escama, óxido, líquidos y otros materiales extraños deberán eliminarse de la zona de soldadura y un área no menor de 40 mm (1-1/2 pulg.) a cada lado de la soldadura.</p>
        <p>(2) En aquellas áreas que serán cubiertas por la nueva placa del parche, las soldaduras longitudinales o circunferenciales existentes del cascarón deberán esmerilarse a ras con el diámetro exterior del recipiente o tubería y deberán examinarse por el método MT o PT.</p>
        <p>(3) La nueva placa del parche puede colocarse en posición utilizando cualquier método adecuado.</p>
        <p>(4) Cualquier costura dentro del propio parche deberá hacerse primero. La soldadura perimetral puede entonces completarse. Pueden utilizarse abrazaderas o cuñas para garantizar la alineación y ajuste adecuados de la junta.</p>
        <p>(f) Las superficies metálicas expuestas deberán volver a recubrirse, si es aplicable, después de la finalización de todos los exámenes y pruebas.</p>
        <p>(g) Para evitar la acumulación de presión de gas entre la placa del parche y el límite del componente a presión, pueden ser necesarias disposiciones de ventilación durante la soldadura de cierre final o, si es aplicable, el tratamiento térmico post-soldadura. Si la placa del parche está diseñada para defectos a través de la pared pero se aplica al límite de presión antes de que se produzca la penetración, el respiradero deberá sellarse después de la finalización de la soldadura y, si es aplicable, el tratamiento térmico post-soldadura.</p>
    </div>
    
    <h3>212-5 EXAMEN</h3>
    <div class="subsection">
        <p>(a) Las soldaduras de fijación de la placa del parche deberán examinarse de acuerdo con el código de construcción aplicable o código post-construcción por los métodos MT o PT si no están limitados por temperatura por los métodos de prueba. Si no se especifica lo contrario por el código de construcción aplicable o código post-construcción, los END deberán realizarse utilizando procedimientos escritos y calificados de acuerdo con ASME BPVC, Sección V.</p>
        <p>(b) Si se utilizan orejas de levantamiento y se dejan en su lugar, sus soldaduras de fijación deberán examinarse por los métodos MT o PT. En todas las ubicaciones donde se retiren orejas de levantamiento temporales, abrazaderas soldadas y/o cuñas después de la instalación de la placa del parche, las áreas de retirada deberán examinarse por los métodos MT o PT.</p>
        <p>(c) Las soldaduras que unen secciones de placas de parche hechas de piezas separadas deberían contornearse superficialmente y examinarse volumétricamente por métodos radiográficos o ultrasónicos en la medida de lo posible. Si no es práctico, deberán realizarse exámenes PT o MT multicapa.</p>
        <p>(d) Si se requiere tratamiento térmico post-soldadura, el examen deberá realizarse después de la aplicación del TTSP.</p>
        <p>(e) Se aplicarán los criterios de aceptación del examen del código de construcción aplicable o código post-construcción.</p>
    </div>
    
    <h3>212-6 PRUEBAS</h3>
    <div class="subsection">
        <p>(a) Las pruebas deberán realizarse de acuerdo con el código post-construcción aplicable.</p>
        <p>(b) El componente a presión y la(s) placa(s) de parche instalada(s) deberán someterse a una prueba de fuga de acuerdo con el código post-construcción aplicable. Deberán tomarse precauciones especiales de seguridad cuando se realicen pruebas neumáticas de fuga.</p>
        <p>(c) Si lo permite el código post-construcción aplicable, puede realizarse un examen no destructivo como alternativa a la prueba de fuga. También puede realizarse una inspección de servicio inicial de todas las juntas soldadas después de que el componente a presión haya vuelto a la presión y temperatura de operación normales, si estas se redujeron mientras se realizaba la soldadura.</p>
        <p>(d) Las pruebas e inspecciones deberán realizarse antes de la reaplicación de recubrimiento, aislamiento o chaqueta, según sea aplicable.</p>
    </div>
    
    <h3>212-7 REFERENCIAS</h3>
    <div class="subsection">
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        <p>API 579-1/ASME FFS-1, Aptitud para el Servicio, 5 de junio de 2007<br>
        Editor: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</p>
        <p>ASME Boiler and Pressure Vessel Code, Section V - Examen No Destructivo<br>
        ASME Boiler and Pressure Vessel Code, Section VIII, Division 1 - Reglas para la Construcción de Recipientes a Presión<br>
        ASME Boiler and Pressure Vessel Code, Section IX - Calificación de Soldadura, Brazing y Fusión<br>
        Editor: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</p>
    </div>
    `
});