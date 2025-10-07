// Registrar el código ASME PCC-2-2022 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2-2022 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2: Repair of Pressure Equipment and Piping, 2022 Edition",
        titleEs: "ASME PCC-2: Reparación de Equipos a Presión y Tuberías, Edición 2022"
    });
}

// Registrar el Artículo 201
registerChapter('ASMEPCC2', {
    id: 201,
    title: "Butt-Welded Insert Plates in Pressure Components",
    titleEs: "Placas de Inserción Soldadas a Tope en Componentes a Presión",
    content: `<h3>ARTICLE 201 BUTT-WELDED INSERT PLATES IN PRESSURE COMPONENTS</h3>
    <div class="subsection">
        <h4>201-1 DESCRIPTION</h4>
        <div class="subsection">
            <h4>201-1.1 General Considerations</h4>
            <p>The repair of pressure components by butt-welded insert plates involves the replacement of pressure boundary material in a pressure component with an insert plate attached by full penetration butt welds. This repair method is applicable to cylindrical, spherical, and conical shells and to flat pressure components. It may be used for single and double curvature shells. It may also be used on other pressure components (such as formed heads) if the curvature of the replaced section matches the curvature of the original pressure part. It is not limited by the size of the pressure component, except where practical considerations preclude the use of an insert, such as on small diameter pipe or tube. It may be used on small diameter pressure components if special care is taken to ensure a close fit of the insert plate and the existing pressure component and that the repaired pressure component meets the tolerance requirements of the applicable construction code.</p>
        </div>
        <div class="subsection">
            <h4>201-1.2 Replacement of Local Areas in Pressure Vessel Shells or Pipe Walls</h4>
            <p>This repair method is intended to be used to replace portions of pressure-retaining vessel shells or pipe walls that have been damaged by cracks, local wall thinning from erosion, corrosion, and other damage mechanisms. The insert plate may contain one or more nozzles/manways.</p>
        </div>
        <div class="subsection">
            <h4>201-1.3 Replacement of Entire Component</h4>
            <p>Replacement of an entire component, shell plate, or a complete shell course of a cylindrical shell, or a complete circular segment of a sphere, or a complete head, or a section of a pipe is not considered in this repair method.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>201-2 LIMITATIONS</h4>
        <div class="subsection">
            <h4>201-2.1 Part 1 of This Standard</h4>
            <p>Part 1 of this Standard contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        </div>
        <div class="subsection">
            <h4>201-2.2 Additional Considerations and Limitations</h4>
            <p>When applying this repair method, consideration shall be given to compatibility of materials, operating conditions for the intended life of the component, fitting and welding to minimize the residual stresses and distortions, and any limitations on nondestructive examination and pressure testing.</p>
        </div>
        <div class="subsection">
            <h4>201-2.3 Loadings</h4>
            <p>This method may be used for equipment subject to either internal or external pressure. If the pressure component is subject to external pressure, additional consideration shall also be given to any loss of buckling strength as a result of permanent distortions or misalignment in the repaired component. If the pressure component is subject to cyclic loading, additional consideration shall be given to the effect of permanent distortions on the fatigue life of the repaired component.</p>
        </div>
        <div class="subsection">
            <h4>201-2.4 Corrosion-Resistant Weld Overlay or Cladding</h4>
            <p>This repair method may also be used in vessels that are either clad with corrosion-resistant lining or weld overlay. The insert plate cladding or weld overlay shall be compatible with the existing materials and suitable for the intended service. Consideration shall also be given to the use of weld details and welding procedures suitable for the intended service.</p>
        </div>
        <div class="subsection">
            <h4>201-2.5 Dissimilar Metals</h4>
            <p>Use of dissimilar materials (base metal and welds) is not prohibited, but the materials shall meet the required minimum mechanical properties for the pressure component and shall be carefully evaluated for compatibility between the dissimilar materials and the service environment, both internal and external. If thermal fatigue is a possibility, consideration shall be given to the potential for accelerated fatigue cracking in the dissimilar metals combination.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>201-3 DESIGN</h4>
        <div class="subsection">
            <h4>201-3.1 Construction Code</h4>
            <p>The insert plate thickness, material, and welds shall meet the design requirements in the applicable construction code for the existing pressure component into which it is being installed and shall be consistent with the joint efficiency or joint quality factors used in the original design, except as permitted in para. 201-3.3. The allowable stresses shall be the same as in the applicable construction code for the existing component.</p>
        </div>
        <div class="subsection">
            <h4>201-3.2 Materials</h4>
            <p>Insert plates and welds should be of the same material as the existing pressure component, or of another material that has at least equal notch toughness and allowable stress, conforms to the requirements of the applicable construction code, and is suitable for the intended service. Where ASME materials are used, the replacement material should have the same ASME P-Number designation as the pressure component material into which the insert is being installed.</p>
        </div>
        <div class="subsection">
            <h4>201-3.3 Insert Plate Thickness</h4>
            <p>The insert plate thickness should be not less than the nominal thickness of the material it welds into. If a thinner insert plate than the nominal thickness of the material it welds into must be used, it shall be evaluated for the intended service (such as fatigue due to cyclic loading) using the rules in the applicable construction code for the pressure component, or the applicable post-construction code. See para. 201-4.1.5.</p>
        </div>
        <div class="subsection">
            <h4>201-3.4 Rectangular and Square Insert Plates</h4>
            <p>Rectangular and square insert plates shall have corners rounded to a radius, except when the entire shell plate is replaced. Rectangular and square insert plates 13 mm (1/2 in.) thick and up to and including 25 mm (1 in.) thick should have a 75 mm (3 in.) or a larger corner radius. Insert plates less than 13 mm (1/2 in.) thick may have smaller corner radii. Insert plates over 25 mm (1 in.) thick should have a 150 mm (6 in.) or a larger corner radius.</p>
        </div>
        <div class="subsection">
            <h4>201-3.5 Flush Inserts</h4>
            <p>Flush inserts in pipe or tube may be round or oblong cutouts, as shown in Figure 201-3.5-1, or rectangular cutouts with rounded corners.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_201-3.5-1.png" class="figure-image">
                <p class="figure-caption">Figure 201-3.5-1 Flush Insert in Pipe or Tube</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-3.6 Insert Plate Size</h4>
            <p>The insert plate shall be of sufficient size to replace the entire area of the existing pressure component that has been assessed as not being fit for continued operation and to ensure that all welds are in sound material.</p>
            <div class="subsection">
                <h4>201-3.6.1 Minimum Size of Insert Plates</h4>
                <p>The minimum diameter, or length and width dimensions of nonpostweld heat-treated, butt-welded carbon and low alloy steel insert plates shall be the lesser of 12t or 380 mm (15 in.) (where t is the thickness of the parent material). See para. 201-3.8.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-3.7 Structural Stability at Cutouts</h4>
            <p>Consideration should be given to structural stability and possible distortion of the unsupported plate edges of large openings (cutouts) in the vessel shell. An assessment should be made for the need of temporary supports around the unsupported edges of such openings during removal of the shell section to be replaced with an insert plate. The assessment shall consider all loading conditions that may occur on the vessel and the component during the repair, including structural stability of vessels during postweld heat treatment (PWHT).</p>
        </div>
        <div class="subsection">
            <h4>201-3.8 Insert Plates With Nozzles</h4>
            <p>The nozzle/manway reinforcement in insert plates with nozzles shall meet the design requirements and weld details of the applicable construction code for the pressure component. The minimum diameter of insert plate with a nozzle shall be the larger of the following:</p>
            <p>(a) for all nozzle/manway assemblies, the diameter of the nozzle/manway penetration plus the width needed for nozzle reinforcement and any edge bevels.</p>
            <p>(b) for carbon and low alloy steel nozzle/manway assemblies for which the nozzle-to-butt patch (shell) weld is not postweld heat treated before or after the assembly is welded into the shell, the diameter of the insert plate needed to maintain a minimum distance of 150 mm (6 in.) between the nozzle attachment weld and the nearest edge of the insert plate butt weld. However, the diameter of the insert plate for nozzles having an outside diameter 300 mm (12 in.) or smaller need not be larger than 2 times the outside diameter of the nozzle. (See also Figures 201-3.8-1 and 201-3.8-2.)</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_201-3.8-1.png" class="figure-image">
                <p class="figure-caption">Figure 201-3.8-1 Flush Insert Plate (With or Without Nozzle/Manway) With Its Butt Weld Intersecting Existing Butt Weld in Shells or Heads</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_201-3.8-2.png" class="figure-image">
                <p class="figure-caption">Figure 201-3.8-2 Intersecting "Doghouse" Type Insert Plate Butt Weld (With or Without Nozzle/Manway) With Shell Butt Weld in Vessel Shells and Heads</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>201-4 FABRICATION</h4>
        <div class="subsection">
            <h4>201-4.1 Cutting and Forming</h4>
            <div class="subsection">
                <h4>201-4.1.1 Edge Bevels</h4>
                <p>Edge bevels in the insert plate and in the pressure component may be prepared by thermal cutting, arc gouging, machining, or grinding. The method should be appropriate for the material and welding process(es) used. All edges prepared for welding shall be examined to the requirements of the applicable construction code or post-construction code for the pressure component being repaired. All unacceptable indications shall be repaired to the requirements of the applicable construction code or post-construction code.</p>
            </div>
            <div class="subsection">
                <h4>201-4.1.2 Forming</h4>
                <p>Forming the insert plate to the desired shape may be accomplished by any process that does not impair the properties of the plate material. It may be rolled or pressed to the proper curvature such that it conforms to the curvature of the vessel shell after it has been installed and welded into the vessel shell, pipe, or tube. For pipe or tube inserts, the insert may also be cut from another piece of pipe or tube of the same diameter and thickness as the pipe or tube to be repaired. Thicker pipe or tube inserts may be used, provided they meet the requirements of para. 201-4.1.5.</p>
            </div>
            <div class="subsection">
                <h4>201-4.1.3 Forming Strains in Carbon and Low Alloy Steels</h4>
                <p>Carbon steel and low alloy steel insert plates should be heat treated (stress relieved, normalized, or quenched and tempered, if appropriate) subsequently when the resulting extreme fiber elongation during cold forming is more than 5%, as determined by the following formulas:</p>
                <p>(a) For single curvature shells (cylinders)</p>
                <p>ε = (50t/Rf) × (1 - Rf/Ro)</p>
                <p>(b) For double curvature (heads and spherical shells)</p>
                <p>ε = (75t/Rf) × (1 - Rf/Ro)</p>
                <p>where</p>
                <p>Rf = final centerline radius, mm (in.)</p>
                <p>Ro = original centerline radius, mm (in.). (Radius equals infinity for flat plate.)</p>
                <p>t = plate thickness, mm (in.)</p>
                <p>As an alternative, the rules of the original construction code may be used.</p>
            </div>
            <div class="subsection">
                <h4>201-4.1.4 Forming Strains in Other Materials</h4>
                <p>Cold forming strains (e.g., from bending) in materials other than carbon and low alloy steel shall not exceed the limitations in the applicable construction code without a subsequent heat treatment.</p>
            </div>
            <div class="subsection">
                <h4>201-4.1.5 Alignment at Edges of Insert Plate</h4>
                <p>The alignment at edges of the insert plate butt weld shall be such that the maximum offset is within the limitations of the applicable construction code for the pressure component. If the insert plate thickness exceeds these limitations, the edge(s) of the insert plate shall have a tapered transition having a length not less than 3 times the offset between the adjacent surfaces of abutting sections.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-4.2 Welding</h4>
            <div class="subsection">
                <h4>201-4.2.1 Welded Joints</h4>
                <p>The weld between the insert plate and the existing pressure component shall be a full penetration butt weld. Where possible, double-welded butt joints should be used.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.2 Strength of Welded Joints</h4>
                <p>The welded joints (weld metal and heat-affected zones) shall meet the minimum strength and toughness requirements and other requirements in the current edition of the applicable construction code for the pressure component.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.3 Qualification of Welding Procedures and Welders</h4>
                <p>Welding procedures, welders, and welding operators shall be qualified in accordance with the requirements of the applicable construction code or post-construction code. Welding procedure qualifications shall include impact tests as required by the applicable construction code for the pressure component. Vessel (production) impact tests are not required.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.4 Welding Materials</h4>
                <p>Welding materials and processes shall be as currently permitted by the applicable construction code or post-construction code for the pressure component. Welding of carbon and low alloy steels with low hydrogen electrodes and processes is recommended.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.5 Welds in Damaged Areas</h4>
                <p>All welds between the insert plate and the existing shell should be in sound material. In some cases, the welds may be in a damaged area, provided any damage is considered in the design of the repair, and the damage has been evaluated and is acceptable by the rules of the applicable post-construction code.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.6 Cleaning of Areas to Be Welded</h4>
                <p>Oil, grease, paint, scale, and other foreign material shall be removed from the area adjacent to the weld and a sufficient distance away from the weld to avoid contamination.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.7 Fit-Up of Insert Plates</h4>
                <p>Fit-up of insert plates is important to the integrity of the repair. The weld details and welding procedures shall be such as to facilitate full penetration and to minimize distortion and flat spots due to weld shrinkage and the risk of weld cracking due to the restraint provided by the surrounding material.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.8 One-Sided Welds</h4>
                <p>For flush inserts in pipe or tube or other pressure components that do not allow two-sided welding, gas tungsten arc welding, or another welding process that provides an acceptable weld on the opposite side should be used for the initial pass joining the insert to the pipe wall. Subsequent passes may be completed by gas tungsten arc or another welding process. Short Circuit Mode of Gas Metal Arc is not recommended for these types of welds.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.9 Weld Contour</h4>
                <p>The accessible surfaces of insert plate butt welds shall preferably be ground to a smooth contour, or flush if warranted by the service conditions. The weld toe regions shall blend smoothly with the base material. The reduction of thickness due to grinding shall not exceed 0.8 mm (1/32 in.) or 10% of the nominal thickness of the adjoining surface, whichever is less. In no case shall the final thickness be less than the required thickness.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-4.3 Weld Spacing Between Nonintersecting Adjacent Butt Welds in Carbon Steel and Low Alloy Steel Pressure Components</h4>
            <div class="subsection">
                <h4>201-4.3.1 Minimum Spacing Between Nonpostweld Heat-Treated Butt Welds</h4>
                <p>Nonpostweld heat-treated butt welds around the periphery of insert plates shall be spaced no closer to existing nonpostweld heat treated butt welds or reinforcing plate attachment welds than</p>
                <p>(a) for tw ≤ 13 mm (1/2 in.), 150 mm (6 in.)</p>
                <p>(b) for tw > 13 mm (1/2 in.), the greater of 250 mm (10 in.) and 8tw</p>
                <p>where</p>
                <p>tw = thickness of the thicker of the two adjacent butt welds, mm (in.)</p>
            </div>
            <div class="subsection">
                <h4>201-4.3.2 Alternative Spacing Between Nonpostweld Heat-Treated Butt Welds</h4>
                <p>The spacing between adjacent nonpostweld heat-treated carbon and low alloy steel butt welds maybe reduced to the lesser of 8tw or 200 mm (8 in.) for tw ≤ 40 mm (1-1/2 in.), provided both butt welds are ground smooth, 100% RT or UT examined and 100% MT or PT examined after completion of welding in areas where the spacing between the adjacent butt welds is less than that specified in para. 201-4.3.1. As an alternative, the root pass and the weld, after half of the groove is filled, may be either 100% MT or PT examined in place of the 100% RT or UT examination requirement above. The butt welds with thicknesses less than 13 mm (1/2 in.) need only be MT or PT examined. See para. 201-5.1.</p>
            </div>
            <div class="subsection">
                <h4>201-4.3.3 Spacing Between Stress-Relieved Butt Welds</h4>
                <p>The spacing between the adjacent butt welds shall be not less than 2tw if the first butt weld has been stress-relieved before making the second butt weld.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-4.4 Intersecting Butt Welds in Carbon and Low Alloy Steel Pressure Components</h4>
            <div class="subsection">
                <h4>201-4.4.1 General Considerations</h4>
                <p>Intersecting insert plate and existing butt welds should be avoided where possible. Where it is impractical for the insert plates to avoid an existing nonstress-relieved butt weld, the insert plate butt weld should be placed such that it intersects the existing butt weld at an angle not less than 30 deg, as shown in Figure 201-3.8-1. Alternatively, the insert plate may be sized such that it intersects the existing butt weld at a 90 deg angle, as shown in Figure 201-3.8-2.</p>
            </div>
            <div class="subsection">
                <h4>201-4.4.2 Examination</h4>
                <p>Unless 100% RT or UT examination is required by the applicable construction code, the insert plate butt weld and 100 mm (4 in.) of the existing butt weld, on both sides of the intersection, shall be 100% MT or PT examined after completion of both welds, as shown in Figure 201-3.8-1. In case of the "doghouse" type insert plate butt weld shown in Figure 201-3.8-2, this examination shall be performed on the full length of the new weld along the existing shell butt joint. See para. 201-5.1.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-4.5 Postweld Heat Treatment</h4>
            <div class="subsection">
                <h4>201-4.5.1 General Considerations</h4>
                <p>The butt welds between the insert plate and the existing pressure component and the weld between the nozzle/manway and the insert plate shall be postweld heat treated when required by the original construction code or the applicable post-construction code, or for process reasons, except as permitted by the applicable post-construction code. Proper precautions should be taken during the PWHT to avoid distortion of the welded assembly.</p>
            </div>
            <div class="subsection">
                <h4>201-4.5.2 Repairs</h4>
                <p>Repairs to pressure equipment that require PWHT based on service conditions shall be post weld heat treated, unless other means (e.g., engineering evaluation) are provided to ensure that the as-welded joints will be suitable for the service conditions, or as permitted by the applicable post-construction code.</p>
            </div>
            <div class="subsection">
                <h4>201-4.5.3 PWHT</h4>
                <p>For the repaired pressure parts that require PWHT (either Code-mandated or dependent upon service conditions), the PWHT shall be performed in accordance with the applicable construction code, unless the owner requires a more stringent PWHT (e.g., higher PWHT temperature or longer hold time).</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>201-5 EXAMINATION OF WELDS</h4>
        <div class="subsection">
            <h4>201-5.1 Insert Plate Welds</h4>
            <p>All insert plate welds to the existing pressure component in pressure vessels shall be examined by radiographic (RT) or ultrasonic (UT) examination methods to the extent required by the applicable construction code or post-construction code for the pressure component. Where UT is used, examination of the root pass by either magnetic particle (MT) or liquid-penetrant (PT) methods is recommended. The procedures, personnel qualifications, and acceptance criteria shall be in accordance with the applicable construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>201-5.2 Finished Welded Surfaces</h4>
            <p>Unless 100% RT or UT examination is required, all finished welded surfaces shall be examined by MT and PT methods. Examination by the MT or PT methods is recommended for the root pass of single-groove welds and for the backgouge of double-groove welds. No crack-like indications, incomplete fusion, or incomplete penetration are permissible.</p>
        </div>
        <div class="subsection">
            <h4>201-5.3 Piping</h4>
            <p>For piping, all nondestructive examination requirements shall be in accordance with the current requirements in the applicable construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>201-5.4 Additional Examination Requirements for Carbon and Low Alloy Steels</h4>
            <div class="subsection">
                <h4>201-5.4.1 Rectangular and Square Insert Plates</h4>
                <p>For rectangular or square insert plates, the welds around the rounded corners, as a minimum, shall be either spot RT or UT examined. As an alternative, the root pass, the weld after half of the groove is filled, and the completed weld shall be either MT or PT examined.</p>
            </div>
            <div class="subsection">
                <h4>201-5.4.2 Closely Spaced and Intersecting Welds</h4>
                <p>See paras. 201-4.3 and 201-4.4 for additional examination requirements for closely spaced welds and intersecting welds.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>201-6 PRESSURE TESTING</h4>
        <div class="subsection">
            <h4>201-6.1 General Considerations</h4>
            <p>If the vessel or pipe can be isolated for pressure testing, and if it is practical to do so, all insert plate welds should be pressure tested as required in the applicable post-construction code. Alternatively, nondestructive examination may be performed in place of pressure testing if permitted by the applicable post-construction code at the location of the pressure equipment, when contamination of the pressure-retaining item by liquids is possible or when pressure testing is not practical.</p>
        </div>
        <div class="subsection">
            <h4>201-6.2 Notch Toughness Considerations</h4>
            <p>(a) Consideration should be given to the effect of service deterioration and embrittlement from prior service conditions on notch toughness characteristics of the pressure component before pressure testing. The personnel shall maintain a safe distance from the pressure component when the pressure is increased for the first time.</p>
            <p>(b) Additional safety precautions shall be taken in case of a pneumatic test to reduce the risk of brittle fracture.</p>
            <p>(c) Consideration shall also be given to any hazards that might be associated with the test medium (toxicity, flammability, explosiveness, etc.).</p>
        </div>
        <div class="subsection">
            <h4>201-6.3 Leak Test</h4>
            <p>A separate leak test (visual, bubble-forming solutions, sniffer, etc.) may be desirable to check for leaks before pressurizing the component to the maximum test pressure. Such a leak test should be performed at a safe pressure that is substantially less than the maximum test pressure by pressurizing the component to a desired pressure and reducing the pressure to the leak test pressure before performing the leak test.</p>
        </div>
        <div class="subsection">
            <h4>201-6.4 Vessels and Piping With Insulation or Coating</h4>
            <p>All testing and inspections should be performed prior to application of insulation or coatings.</p>
        </div>
    </div>
    `,
    contentEs: `<h3>ARTÍCULO 201 PLACAS DE INSERCIÓN SOLDADAS A TOPE EN COMPONENTES A PRESIÓN</h3>
    <div class="subsection">
        <h4>201-1 DESCRIPCIÓN</h4>
        <div class="subsection">
            <h4>201-1.1 Consideraciones Generales</h4>
            <p>La reparación de componentes a presión mediante placas de inserción soldadas a tope implica el reemplazo del material del límite de presión en un componente a presión con una placa de inserción unida mediante soldaduras a tope de penetración completa. Este método de reparación es aplicable a cascarones cilíndricos, esféricos y cónicos y a componentes planos a presión. Puede utilizarse para cascarones de curvatura simple y doble. También puede utilizarse en otros componentes a presión (como cabezales formados) si la curvatura de la sección reemplazada coincide con la curvatura de la pieza de presión original. No está limitado por el tamaño del componente a presión, excepto donde consideraciones prácticas impidan el uso de una inserción, como en tuberías o tubos de diámetro pequeño. Puede utilizarse en componentes a presión de diámetro pequeño si se tiene especial cuidado para garantizar un ajuste preciso de la placa de inserción y el componente a presión existente, y que el componente a presión reparado cumpla con los requisitos de tolerancia del código de construcción aplicable.</p>
        </div>
        <div class="subsection">
            <h4>201-1.2 Reemplazo de Áreas Locales en Cascarones de Recipientes a Presión o Paredes de Tuberías</h4>
            <p>Este método de reparación está destinado a utilizarse para reemplazar porciones de cascarones de recipientes de retención de presión o paredes de tuberías que han sido dañadas por grietas, adelgazamiento local de la pared debido a erosión, corrosión y otros mecanismos de daño. La placa de inserción puede contener una o más boquillas/escotillas.</p>
        </div>
        <div class="subsection">
            <h4>201-1.3 Reemplazo de Componentes Completos</h4>
            <p>El reemplazo de un componente completo, placa de cascarón, o un curso completo de cascarón de un cascarón cilíndrico, o un segmento circular completo de una esfera, o un cabezal completo, o una sección de una tubería no se considera en este método de reparación.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>201-2 LIMITACIONES</h4>
        <div class="subsection">
            <h4>201-2.1 Parte 1 de Esta Norma</h4>
            <p>La Parte 1 de esta Norma contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse junto con la Parte 1.</p>
        </div>
        <div class="subsection">
            <h4>201-2.2 Consideraciones y Limitaciones Adicionales</h4>
            <p>Al aplicar este método de reparación, se deberá considerar la compatibilidad de los materiales, las condiciones de operación para la vida prevista del componente, el ajuste y la soldadura para minimizar las tensiones residuales y deformaciones, y cualquier limitación en los exámenes no destructivos y las pruebas de presión.</p>
        </div>
        <div class="subsection">
            <h4>201-2.3 Cargas</h4>
            <p>Este método puede utilizarse para equipos sujetos a presión interna o externa. Si el componente a presión está sujeto a presión externa, también se deberá considerar cualquier pérdida de resistencia al pandeo como resultado de deformaciones permanentes o desalineación en el componente reparado. Si el componente a presión está sujeto a carga cíclica, se deberá considerar adicionalmente el efecto de las deformaciones permanentes en la vida a fatiga del componente reparado.</p>
        </div>
        <div class="subsection">
            <h4>201-2.4 Revestimiento de Soldadura Resistente a la Corrosión o Revestimiento</h4>
            <p>Este método de reparación también puede utilizarse en recipientes que estén revestidos con revestimiento resistente a la corrosión o revestimiento de soldadura. El revestimiento de la placa de inserción o el revestimiento de soldadura deberá ser compatible con los materiales existentes y adecuado para el servicio previsto. También se deberá considerar el uso de detalles de soldadura y procedimientos de soldadura adecuados para el servicio previsto.</p>
        </div>
        <div class="subsection">
            <h4>201-2.5 Metales Disímiles</h4>
            <p>El uso de materiales disímiles (metal base y soldaduras) no está prohibido, pero los materiales deberán cumplir con las propiedades mecánicas mínimas requeridas para el componente a presión y deberán evaluarse cuidadosamente para la compatibilidad entre los materiales disímiles y el entorno de servicio, tanto interno como externo. Si la fatiga térmica es una posibilidad, se deberá considerar el potencial de agrietamiento por fatiga acelerado en la combinación de metales disímiles.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>201-3 DISEÑO</h4>
        <div class="subsection">
            <h4>201-3.1 Código de Construcción</h4>
            <p>El espesor, material y soldaduras de la placa de inserción deberán cumplir con los requisitos de diseño en el código de construcción aplicable para el componente a presión existente en el que se está instalando y deberán ser consistentes con los factores de eficiencia de junta o calidad de junta utilizados en el diseño original, excepto como se permite en el párrafo 201-3.3. Los esfuerzos permisibles deberán ser los mismos que en el código de construcción aplicable para el componente existente.</p>
        </div>
        <div class="subsection">
            <h4>201-3.2 Materiales</h4>
            <p>Las placas de inserción y las soldaduras deben ser del mismo material que el componente a presión existente, o de otro material que tenga al menos igual tenacidad a la muesca y esfuerzo permisible, cumpla con los requisitos del código de construcción aplicable, y sea adecuado para el servicio previsto. Cuando se utilizan materiales ASME, el material de reemplazo debe tener la misma designación ASME P-Number que el material del componente a presión en el que se está instalando la inserción.</p>
        </div>
        <div class="subsection">
            <h4>201-3.3 Espesor de la Placa de Inserción</h4>
            <p>El espesor de la placa de inserción no debe ser menor que el espesor nominal del material en el que se suelda. Si debe utilizarse una placa de inserción más delgada que el espesor nominal del material en el que se suelda, deberá evaluarse para el servicio previsto (como fatiga debido a carga cíclica) utilizando las reglas en el código de construcción aplicable para el componente a presión, o el código post-construcción aplicable. Véase el párrafo 201-4.1.5.</p>
        </div>
        <div class="subsection">
            <h4>201-3.4 Placas de Inserción Rectangulares y Cuadradas</h4>
            <p>Las placas de inserción rectangulares y cuadradas deben tener esquinas redondeadas con un radio, excepto cuando se reemplaza toda la placa del cascarón. Las placas de inserción rectangulares y cuadradas de 13 mm (1/2 pulg.) de espesor hasta 25 mm (1 pulg.) de espesor deben tener un radio de esquina de 75 mm (3 pulg.) o mayor. Las placas de inserción de menos de 13 mm (1/2 pulg.) de espesor pueden tener radios de esquina más pequeños. Las placas de inserción de más de 25 mm (1 pulg.) de espesor deben tener un radio de esquina de 150 mm (6 pulg.) o mayor.</p>
        </div>
        <div class="subsection">
            <h4>201-3.5 Inserciones Flush</h4>
            <p>Las inserciones flush en tuberías o tubos pueden ser recortes redondos u oblongos, como se muestra en la Figura 201-3.5-1, o recortes rectangulares con esquinas redondeadas.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_201-3.5-1.png" class="figure-image">
                <p class="figure-caption">Figura 201-3.5-1 Inserción Flush en Tubería o Tubo</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-3.6 Tamaño de la Placa de Inserción</h4>
            <p>La placa de inserción debe ser de tamaño suficiente para reemplazar toda el área del componente a presión existente que ha sido evaluada como no apta para continuar en operación y para garantizar que todas las soldaduras estén en material sano.</p>
            <div class="subsection">
                <h4>201-3.6.1 Tamaño Mínimo de Placas de Inserción</h4>
                <p>El diámetro mínimo, o las dimensiones de longitud y ancho de placas de inserción de acero al carbono y baja aleación soldadas a tope sin tratamiento térmico posterior a la soldadura, será el menor de 12t o 380 mm (15 pulg.) (donde t es el espesor del material base). Véase el párrafo 201-3.8.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-3.7 Estabilidad Estructural en Recortes</h4>
            <p>Se debe considerar la estabilidad estructural y la posible deformación de los bordes no soportados de aberturas grandes (recortes) en el cascarón del recipiente. Se debe hacer una evaluación sobre la necesidad de soportes temporales alrededor de los bordes no soportados de dichas aberturas durante la remoción de la sección del cascarón que será reemplazada con una placa de inserción. La evaluación debe considerar todas las condiciones de carga que puedan ocurrir en el recipiente y el componente durante la reparación, incluyendo la estabilidad estructural de recipientes durante el tratamiento térmico posterior a la soldadura (PWHT).</p>
        </div>
        <div class="subsection">
            <h4>201-3.8 Placas de Inserción con Boquillas</h4>
            <p>El refuerzo de boquilla/escotilla en placas de inserción con boquillas debe cumplir con los requisitos de diseño y detalles de soldadura del código de construcción aplicable para el componente a presión. El diámetro mínimo de la placa de inserción con una boquilla será el mayor de los siguientes:</p>
            <p>(a) para todos los conjuntos de boquilla/escotilla, el diámetro de la penetración de la boquilla/escotilla más el ancho necesario para el refuerzo de la boquilla y cualquier bisel de borde.</p>
            <p>(b) para conjuntos de boquilla/escotilla de acero al carbono y baja aleación para los cuales la soldadura de boquilla a parche (cascarón) no se trata térmicamente antes o después de que el conjunto se suelda al cascarón, el diámetro de la placa de inserción necesario para mantener una distancia mínima de 150 mm (6 pulg.) entre la soldadura de fijación de la boquilla y el borde más cercano de la soldadura a tope de la placa de inserción. Sin embargo, el diámetro de la placa de inserción para boquillas con un diámetro exterior de 300 mm (12 pulg.) o menor no necesita ser mayor que 2 veces el diámetro exterior de la boquilla. (Véanse también las Figuras 201-3.8-1 y 201-3.8-2.)</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_201-3.8-1.png" class="figure-image">
                <p class="figure-caption">Figura 201-3.8-1 Placa de Inserción Flush (Con o Sin Boquilla/Escotilla) con su Soldadura a Tope Intersectando una Soldadura a Tope Existente en Cascarones o Cabezales</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_201-3.8-2.png" class="figure-image">
                <p class="figure-caption">Figura 201-3.8-2 Soldadura a Tope de Placa de Inserción Tipo "Doghouse" Intersectante (Con o Sin Boquilla/Escotilla) con Soldadura a Tope de Cascarón en Cascarones y Cabezales de Recipientes</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>201-4 FABRICACIÓN</h4>
        <div class="subsection">
            <h4>201-4.1 Corte y Formado</h4>
            <div class="subsection">
                <h4>201-4.1.1 Biseles de Borde</h4>
                <p>Los biseles de borde en la placa de inserción y en el componente a presión pueden prepararse mediante corte térmico, biselado con arco, mecanizado o rectificado. El método debe ser apropiado para el material y los procesos de soldadura utilizados. Todos los bordes preparados para soldadura deberán examinarse según los requisitos del código de construcción aplicable o código post-construcción para el componente a presión que se está reparando. Todas las indicaciones inaceptables deberán repararse según los requisitos del código de construcción aplicable o código post-construcción.</p>
            </div>
            <div class="subsection">
                <h4>201-4.1.2 Formado</h4>
                <p>El formado de la placa de inserción a la forma deseada puede realizarse mediante cualquier proceso que no deteriore las propiedades del material de la placa. Puede laminarse o prensarse a la curvatura adecuada de manera que se ajuste a la curvatura del cascarón del recipiente después de haber sido instalada y soldada al cascarón del recipiente, tubería o tubo. Para inserciones en tuberías o tubos, la inserción también puede cortarse de otra pieza de tubería o tubo del mismo diámetro y espesor que la tubería o tubo que se va a reparar. Pueden utilizarse inserciones de tubería o tubo más gruesas, siempre que cumplan con los requisitos del párrafo 201-4.1.5.</p>
            </div>
            <div class="subsection">
                <h4>201-4.1.3 Deformaciones por Formado en Aceros al Carbono y Baja Aleación</h4>
                <p>Las placas de inserción de acero al carbono y baja aleación deben tratarse térmicamente (alivio de tensiones, normalizado o templado y revenido, según corresponda) posteriormente cuando la elongación resultante de la fibra extrema durante el formado en frío sea superior al 5%, según lo determinado por las siguientes fórmulas:</p>
                <p>(a) Para cascarones de curvatura simple (cilindros)</p>
                <p>ε = (50t/Rf) × (1 - Rf/Ro)</p>
                <p>(b) Para curvatura doble (cabezales y cascarones esféricos)</p>
                <p>ε = (75t/Rf) × (1 - Rf/Ro)</p>
                <p>donde</p>
                <p>Rf = radio final de la línea central, mm (pulg.)</p>
                <p>Ro = radio original de la línea central, mm (pulg.). (El radio es infinito para placas planas.)</p>
                <p>t = espesor de la placa, mm (pulg.)</p>
                <p>Como alternativa, pueden utilizarse las reglas del código de construcción original.</p>
            </div>
            <div class="subsection">
                <h4>201-4.1.4 Deformaciones por Formado en Otros Materiales</h4>
                <p>Las deformaciones por formado en frío (por ejemplo, por doblado) en materiales distintos del acero al carbono y baja aleación no deben exceder las limitaciones en el código de construcción aplicable sin un tratamiento térmico posterior.</p>
            </div>
            <div class="subsection">
                <h4>201-4.1.5 Alineación en los Bordes de la Placa de Inserción</h4>
                <p>La alineación en los bordes de la soldadura a tope de la placa de inserción debe ser tal que el desplazamiento máximo esté dentro de las limitaciones del código de construcción aplicable para el componente a presión. Si el espesor de la placa de inserción excede estas limitaciones, el/los borde(s) de la placa de inserción debe(n) tener una transición cónica con una longitud no menor que 3 veces el desplazamiento entre las superficies adyacentes de las secciones que se unen.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-4.2 Soldadura</h4>
            <div class="subsection">
                <h4>201-4.2.1 Juntas Soldadas</h4>
                <p>La soldadura entre la placa de inserción y el componente a presión existente debe ser una soldadura a tope de penetración completa. Cuando sea posible, deben utilizarse juntas soldadas a tope doble.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.2 Resistencia de las Juntas Soldadas</h4>
                <p>Las juntas soldadas (metal de soldadura y zonas afectadas por el calor) deben cumplir con los requisitos mínimos de resistencia y tenacidad y otros requisitos en la edición actual del código de construcción aplicable para el componente a presión.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.3 Calificación de Procedimientos de Soldadura y Soldadores</h4>
                <p>Los procedimientos de soldadura, soldadores y operadores de soldadura deben calificarse de acuerdo con los requisitos del código de construcción aplicable o código post-construcción. Las calificaciones de procedimientos de soldadura deben incluir pruebas de impacto según lo requerido por el código de construcción aplicable para el componente a presión. No se requieren pruebas de impacto de recipiente (producción).</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.4 Materiales de Soldadura</h4>
                <p>Los materiales y procesos de soldadura deben ser los actualmente permitidos por el código de construcción aplicable o código post-construcción para el componente a presión. Se recomienda la soldadura de aceros al carbono y baja aleación con electrodos y procesos de bajo hidrógeno.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.5 Soldaduras en Áreas Dañadas</h4>
                <p>Todas las soldaduras entre la placa de inserción y el cascarón existente deben estar en material sano. En algunos casos, las soldaduras pueden estar en un área dañada, siempre que cualquier daño se considere en el diseño de la reparación, y el daño haya sido evaluado y sea aceptable según las reglas del código post-construcción aplicable.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.6 Limpieza de Áreas a Soldar</h4>
                <p>Se debe eliminar aceite, grasa, pintura, óxido y otros materiales extraños del área adyacente a la soldadura y a una distancia suficiente de la soldadura para evitar contaminación.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.7 Ajuste de Placas de Inserción</h4>
                <p>El ajuste de las placas de inserción es importante para la integridad de la reparación. Los detalles de soldadura y los procedimientos de soldadura deben ser tales que faciliten la penetración completa y minimicen la deformación y las zonas planas debido a la contracción de la soldadura y el riesgo de agrietamiento por soldadura debido a la restricción proporcionada por el material circundante.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.8 Soldaduras por un Lado</h4>
                <p>Para inserciones flush en tuberías o tubos u otros componentes a presión que no permiten soldadura por ambos lados, debe utilizarse soldadura por arco de tungsteno con gas, u otro proceso de soldadura que proporcione una soldadura aceptable en el lado opuesto para la pasada inicial que une la inserción a la pared de la tubería. Las pasadas posteriores pueden completarse mediante arco de tungsteno con gas u otro proceso de soldadura. El modo de circuito corto de soldadura por arco metálico con gas no se recomienda para estos tipos de soldaduras.</p>
            </div>
            <div class="subsection">
                <h4>201-4.2.9 Contorno de la Soldadura</h4>
                <p>Las superficies accesibles de las soldaduras a tope de placas de inserción deben preferiblemente rectificarse a un contorno liso, o al ras si así lo justifican las condiciones de servicio. Las regiones del pie de la soldadura deben fusionarse suavemente con el material base. La reducción de espesor debido a la rectificación no debe exceder 0.8 mm (1/32 pulg.) o el 10% del espesor nominal de la superficie adyacente, lo que sea menor. En ningún caso el espesor final debe ser menor que el espesor requerido.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-4.3 Espaciado de Soldaduras entre Soldaduras a Tope Adyacentes No Intersectantes en Componentes a Presión de Acero al Carbono y Baja Aleación</h4>
            <div class="subsection">
                <h4>201-4.3.1 Espaciado Mínimo entre Soldaduras a Tope sin Tratamiento Térmico Posterior a la Soldadura</h4>
                <p>Las soldaduras a tope sin tratamiento térmico posterior a la soldadura alrededor del perímetro de las placas de inserción deben espaciarse no más cerca de las soldaduras a tope existentes sin tratamiento térmico posterior o soldaduras de fijación de placas de refuerzo que:</p>
                <p>(a) para tw ≤ 13 mm (1/2 pulg.), 150 mm (6 pulg.)</p>
                <p>(b) para tw > 13 mm (1/2 pulg.), el mayor de 250 mm (10 pulg.) y 8tw</p>
                <p>donde</p>
                <p>tw = espesor del más grueso de las dos soldaduras a tope adyacentes, mm (pulg.)</p>
            </div>
            <div class="subsection">
                <h4>201-4.3.2 Espaciado Alternativo entre Soldaduras a Tope sin Tratamiento Térmico Posterior a la Soldadura</h4>
                <p>El espaciado entre soldaduras a tope adyacentes de acero al carbono y baja aleación sin tratamiento térmico posterior puede reducirse al menor de 8tw o 200 mm (8 pulg.) para tw ≤ 40 mm (1-1/2 pulg.), siempre que ambas soldaduras a tope se rectifiquen lisas, se examinen al 100% por RT o UT y se examinen al 100% por MT o PT después de completar la soldadura en áreas donde el espaciado entre las soldaduras a tope adyacentes es menor que el especificado en el párrafo 201-4.3.1. Como alternativa, la pasada de raíz y la soldadura, después de que se llene la mitad de la ranura, pueden examinarse al 100% por MT o PT en lugar del requisito de examen al 100% por RT o UT anterior. Las soldaduras a tope con espesores menores de 13 mm (1/2 pulg.) solo necesitan ser examinadas por MT o PT. Véase el párrafo 201-5.1.</p>
            </div>
            <div class="subsection">
                <h4>201-4.3.3 Espaciado entre Soldaduras a Tope Aliviadas de Tensiones</h4>
                <p>El espaciado entre las soldaduras a tope adyacentes no debe ser menor que 2tw si la primera soldadura a tope ha sido aliviada de tensiones antes de realizar la segunda soldadura a tope.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-4.4 Soldaduras a Tope Intersectantes en Componentes a Presión de Acero al Carbono y Baja Aleación</h4>
            <div class="subsection">
                <h4>201-4.4.1 Consideraciones Generales</h4>
                <p>Se deben evitar las soldaduras a tope de placas de inserción y soldaduras a tope existentes intersectantes cuando sea posible. cuando no sea práctico que las placas de inserción eviten una soldadura a tope existente sin alivio de tensiones, la soldadura a tope de la placa de inserción debe colocarse de manera que intersecte la soldadura a tope existente en un ángulo no menor de 30 grados, como se muestra en la Figura 201-3.8-1. Como alternativa, la placa de inserción puede dimensionarse de manera que intersecte la soldadura a tope existente en un ángulo de 90 grados, como se muestra en la Figura 201-3.8-2.</p>
            </div>
            <div class="subsection">
                <h4>201-4.4.2 Examen</h4>
                <p>A menos que se requiera examen al 100% por RT o UT por el código de construcción aplicable, la soldadura a tope de la placa de inserción y 100 mm (4 pulg.) de la soldadura a tope existente, en ambos lados de la intersección, deben examinarse al 100% por MT o PT después de completar ambas soldaduras, como se muestra en la Figura 201-3.8-1. En el caso de la soldadura a tope de placa de inserción tipo "doghouse" que se muestra en la Figura 201-3.8-2, este examen debe realizarse en toda la longitud de la nueva soldadura a lo largo de la junta de soldadura a tope del cascarón existente. Véase el párrafo 201-5.1.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>201-4.5 Tratamiento Térmico Posterior a la Soldadura</h4>
            <div class="subsection">
                <h4>201-4.5.1 Consideraciones Generales</h4>
                <p>Las soldaduras a tope entre la placa de inserción y el componente a presión existente y la soldadura entre la boquilla/escotilla y la placa de inserción deben recibir tratamiento térmico posterior a la soldadura cuando lo requiera el código de construcción original o el código post-construcción aplicable, o por razones de proceso, excepto como lo permita el código post-construcción aplicable. Se deben tomar las precauciones adecuadas durante el PWHT para evitar la deformación del conjunto soldado.</p>
            </div>
            <div class="subsection">
                <h4>201-4.5.2 Reparaciones</h4>
                <p>Las reparaciones a equipos a presión que requieren PWHT basado en condiciones de servicio deben recibir tratamiento térmico posterior a la soldadura, a menos que se proporcionen otros medios (por ejemplo, evaluación de ingeniería) para garantizar que las juntas soldadas serán adecuadas para las condiciones de servicio, o como lo permita el código post-construcción aplicable.</p>
            </div>
            <div class="subsection">
                <h4>201-4.5.3 PWHT</h4>
                <p>Para las piezas a presión reparadas que requieren PWHT (ya sea mandatario por Código o dependiente de las condiciones de servicio), el PWHT debe realizarse de acuerdo con el código de construcción aplicable, a menos que el propietario requiera un PWHT más estricto (por ejemplo, temperatura de PWHT más alta o tiempo de sostenimiento más largo).</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>201-5 EXAMEN DE SOLDADURAS</h4>
        <div class="subsection">
            <h4>201-5.1 Soldaduras de Placas de Inserción</h4>
            <p>Todas las soldaduras de placas de inserción al componente a presión existente en recipientes a presión deben examinarse mediante métodos de examen radiográfico (RT) o ultrasónico (UT) en la medida requerida por el código de construcción aplicable o código post-construcción para el componente a presión. Cuando se utiliza UT, se recomienda el examen de la pasada de raíz mediante métodos de partículas magnéticas (MT) o líquido penetrante (PT). Los procedimientos, calificaciones del personal y criterios de aceptación deben estar de acuerdo con el código de construcción aplicable o código post-construcción.</p>
        </div>
        <div class="subsection">
            <h4>201-5.2 Superficies Soldadas Terminadas</h4>
            <p>A menos que se requiera examen al 100% por RT o UT, todas las superficies soldadas terminadas deben examinarse mediante métodos MT y PT. Se recomienda el examen mediante los métodos MT o PT para la pasada de raíz de soldaduras de ranura simple y para el bisel posterior de soldaduras de ranura doble. No son permisibles indicaciones tipo grieta, fusión incompleta o penetración incompleta.</p>
        </div>
        <div class="subsection">
            <h4>201-5.3 Tuberías</h4>
            <p>Para tuberías, todos los requisitos de examen no destructivo deben estar de acuerdo con los requisitos actuales en el código de construcción aplicable o código post-construcción.</p>
        </div>
        <div class="subsection">
            <h4>201-5.4 Requisitos de Examen Adicionales para Aceros al Carbono y Baja Aleación</h4>
            <div class="subsection">
                <h4>201-5.4.1 Placas de Inserción Rectangulares y Cuadradas</h4>
                <p>Para placas de inserción rectangulares o cuadradas, las soldaduras alrededor de las esquinas redondeadas, como mínimo, deben examinarse por RT o UT por puntos. Como alternativa, la pasada de raíz, la soldadura después de que se llene la mitad de la ranura, y la soldadura completada deben examinarse por MT o PT.</p>
            </div>
            <div class="subsection">
                <h4>201-5.4.2 Soldaduras Cercanas e Intersectantes</h4>
                <p>Véanse los párrafos 201-4.3 y 201-4.4 para requisitos de examen adicionales para soldaduras cercanas e intersectantes.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>201-6 PRUEBA DE PRESIÓN</h4>
        <div class="subsection">
            <h4>201-6.1 Consideraciones Generales</h4>
            <p>Si el recipiente o tubería puede aislarse para prueba de presión, y si es práctico hacerlo, todas las soldaduras de placas de inserción deben someterse a prueba de presión según se requiere en el código post-construcción aplicable. Como alternativa, puede realizarse examen no destructivo en lugar de la prueba de presión si lo permite el código post-construcción aplicable en la ubicación del equipo a presión, cuando sea posible la contaminación del elemento de retención de presión por líquidos o cuando la prueba de presión no sea práctica.</p>
        </div>
        <div class="subsection">
            <h4>201-6.2 Consideraciones de Tenacidad a la Muesca</h4>
            <p>(a) Se debe considerar el efecto del deterioro en servicio y la fragilización por condiciones de servicio previas en las características de tenacidad a la muesca del componente a presión antes de la prueba de presión. El personal debe mantener una distancia segura del componente a presión cuando se aumenta la presión por primera vez.</p>
            <p>(b) Se deben tomar precauciones de seguridad adicionales en caso de una prueba neumática para reducir el riesgo de fractura frágil.</p>
            <p>(c) También se debe considerar cualquier peligro que pueda estar asociado con el medio de prueba (toxicidad, inflamabilidad, explosividad, etc.).</p>
        </div>
        <div class="subsection">
            <h4>201-6.3 Prueba de Fugas</h4>
            <p>Puede ser deseable realizar una prueba de fugas separada (visual, soluciones formadoras de burbujas, detector, etc.) para verificar fugas antes de presurizar el componente a la presión máxima de prueba. Dicha prueba de fugas debe realizarse a una presión segura que sea sustancialmente menor que la presión máxima de prueba presurizando el componente a una presión deseada y reduciendo la presión a la presión de prueba de fugas antes de realizar la prueba de fugas.</p>
        </div>
        <div class="subsection">
            <h4>201-6.4 Recipientes y Tuberías con Aislamiento o Revestimiento</h4>
            <p>Todas las pruebas e inspecciones deben realizarse antes de la aplicación de aislamiento o revestimientos.</p>
        </div>
    </div>
    `
});