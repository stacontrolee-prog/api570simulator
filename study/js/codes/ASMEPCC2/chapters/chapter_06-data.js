// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos y Tuberías a Presión"
    });
}

// Registrar el capítulo 211
registerChapter('ASMEPCC2', {
    id: 211,
    title: "Weld Buildup, Weld Overlay, and Clad Restoration",
    titleEs: "Reconstrucción por Soldadura, Recubrimiento por Soldadura y Restauración de Revestimiento",
    content: `<h3>211 Weld Buildup, Weld Overlay, and Clad Restoration</h3>
    <div class="subsection">
        <h4>211-1 DESCRIPTION</h4>
        <div class="subsection">
            <h4>211-1.1 Introduction</h4>
            <p>This Article addresses the repair and restoration by weld buildup or weld overlay of carbon steel base metal, low alloy steel base metal, and corrosion-resistant cladding or weld overlay on internal surfaces of pressure vessels and piping that have experienced wall thinning.</p>
        </div>
        <div class="subsection">
            <h4>211-1.2 Scope</h4>
            <p>Repairs to weld overlay or cladding can involve replacement of the entire thickness of the cladding or weld overlay, or a partial thickness of the weld overlay.</p>
        </div>
        <div class="subsection">
            <h4>211-1.3 Damaged Base Metal</h4>
            <p>In carbon steel or low alloy steel applications, weld overlay or weld buildup can be used to rebuild areas that are worn from erosion, corrosion, or flow-accelerated corrosion (FAC), or which have been ground out to remove defects such as cracks. The original pressure boundary integrity of the base metal can be restored.</p>
        </div>
        <div class="subsection">
            <h4>211-1.4 Damaged Weld Overlay and Cladding</h4>
            <p>Corrosion-resistant weld overlay can be used to replace damaged areas that originally had similar overlay, or that originally had corrosion-resistant cladding over carbon steel or low alloy steel material. Corrosion-resistant weld overlay can also be used to back-clad seams that have been repaired on clad material with carbon steel or low alloy steel base metal.</p>
        </div>
        <div class="subsection">
            <h4>211-1.5 Definitions</h4>
            <p>See para. 101-3.2.2 for definitions.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>211-2 LIMITATIONS</h4>
        <div class="subsection">
            <h4>211-2.1 Additional Requirements</h4>
            <p>Part 1 of this Standard, "Scope, Organization, and Intent," contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        </div>
        <div class="subsection">
            <h4>211-2.2 Base Metal Condition</h4>
            <p>This Article shall apply to wall thinning and does not specifically address other types of surface defects. See Article 304, "Flaw Excavation and Weld Repair" for other types of surface defects. The remaining base metal thickness shall be adequate to accommodate weld buildup.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>211-3 DESIGN</h4>
        <div class="subsection">
            <h4>211-3.1 Cause of Damage</h4>
            <p>Prior to repair welding, determination should be made of the causes of the damage to the weld overlay, cladding, or base metal. The use of weld overlay or weld buildup as a permanent repair should include consideration of the thinning mechanism and its prevention. Consideration should be given to replacement of all or part of the weld overlay in case there is damage to the cladding or weld overlay (corrosion, embrittlement and cracking, etc.).</p>
        </div>
        <div class="subsection">
            <h4>211-3.2 Number of Weld Layers</h4>
            <p>Weld overlay or back cladding may be deposited in one or more layers. More than one layer is required where temper-bead techniques are used. The number of weld layers in production shall not be less than the number of layers deposited for weld overlay procedure qualification tests.</p>
        </div>
        <div class="subsection">
            <h4>211-3.3 Weld Thickness</h4>
            <p>The total depth of overlay or back cladding shall be 3 mm (1/8 in.) or greater in thickness, unless otherwise specified. In all cases, the weld overlay thickness and the base metal thickness shall at least equal the minimum thickness of the undamaged metal.</p>
        </div>
        <div class="subsection">
            <h4>211-3.4 Multiple-Layer Welding</h4>
            <p>If multiple-layer overlay or back cladding is required to meet the specified chemistry, and subsequent machining or grinding is necessary to satisfy dimensional requirements, the final machined or ground overlay thickness shall not be less than the qualified thickness. Examples include machining of gasket grooves in flanges and tubesheets or grinding of heat exchanger shell inside diameter to permit insertion of tube bundle.</p>
        </div>
        <div class="subsection">
            <h4>211-3.5 Base Metal Restoration</h4>
            <p>When the strength of the original base metal is to be restored by weld buildup, the weld metal tensile strength should equal or exceed that of the base metal. Consideration should also be given to compatibility of the weld metal with the base metal and suitability for the intended service.</p>
        </div>
        <div class="subsection">
            <h4>211-3.6 Corrosion Protection</h4>
            <p>Where weld overlay is applied for corrosion protection, such as stainless steel overlay on carbon steel or low alloy base metal, appropriate weld chemistry (such as Type 309 followed by Type 308 filler metal) should be specified.</p>
        </div>
        <div class="subsection">
            <h4>211-3.7 Design Calculations</h4>
            <p>All design calculations should be in accordance with the original construction code. If overlay or cladding is included in the thickness calculations, the calculations shall be in accordance with the original construction code or, when none exists, they may be based on ASME BPVC, Section VIII, Division 1, UCL-23.</p>
        </div>
        <div class="subsection">
            <h4>211-3.8 Other Considerations</h4>
            <div class="subsection">
                <h4>211-3.8.1 Differential Thermal Expansion</h4>
                <p>Consideration should be given to differential thermal expansion between the base metal and weld overlay.</p>
            </div>
            <div class="subsection">
                <h4>211-3.8.2 Galvanic Corrosion</h4>
                <p>The possibility of galvanic corrosion should be considered in the base metal at the edge of high alloy or nonferrous weld overlay.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>211-4 FABRICATION</h4>
        <div class="subsection">
            <h4>211-4.1 Surface Preparation</h4>
            <p>Surfaces to be welded shall be free of rust, scale, paint, coatings, and other contaminants, and shall have a smooth contour. If surfaces are to be prepared by blasting, media should be free of silica that would interfere with subsequent welding operations.</p>
        </div>
        <div class="subsection">
            <h4>211-4.2 Welding Procedure Qualification</h4>
            <p>Welding procedures, welders, and welding operators shall be qualified in accordance with the current requirements of the applicable construction code or post construction code. If not otherwise specified, ASME BPVC, Section IX may be used for procedure and performance qualifications. Typically, semiautomatic welding processes such as GMAW are used to maximize productivity and to minimize heat input. For larger areas to be welded, machine approaches using welding equipment mounted on tracks for better control and productivity rates may be appropriate.</p>
        </div>
        <div class="subsection">
            <h4>211-4.3 Weld Overlay</h4>
            <div class="subsection">
                <h4>211-4.3.1 Heat Input</h4>
                <p>Application of the first overlay pass in thin shells shall be such that penetration, and thus the potential for burn-through, is minimized. In general, heat input shall be minimized to prevent burn-through and distortion.</p>
            </div>
            <div class="subsection">
                <h4>211-4.3.2 Weld Overlay Thickness</h4>
                <p>Weld overlay thickness shall be verified by actual measurement of the exposed edge at weld joint preparations or repair cavities. Questions regarding overlay thickness should be resolved by thickness measurements. Consultation with an NOE specialist may be necessary.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-4.4 Back Cladding</h4>
            <div class="subsection">
                <h4>211-4.4.1 Weld Groove Preparation</h4>
                <p>(Typical weld joint details for back cladding are shown in Figure 211-4.4.1-1.)</p>
                <p>Prior to back cladding butt joints, the weld groove in the backing material shall be filled approximately flush with, but not more than 1.5 mm (1/16 in.) below the weld overlay fusion line or the clad bond line adjacent to the weld groove prior to back cladding. Care shall be taken to avoid cross-contaminating the cladding and backing material weld metal. Any suspected areas of cross-contamination shall be etched with either a nitric acid or copper sulfate solution to confirm the location of the clad/substrate interface.</p>
                
                <div class="figure-container">
                    <img src="images/asme_pcc2_figure_211-4.4.1-1.png" class="figure-image">
                    <p class="figure-caption">Figure 211-4.4.1-1—Weld Seam With Back Cladding</p>
                </div>
            </div>
            <div class="subsection">
                <h4>211-4.4.2 Strip Back</h4>
                <p>Prior to back cladding butt joints, cladding shall be stripped back a minimum of 6 mm (1/4 in.) from the edge of the plate, pipe, or fitting.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-4.5 Special Considerations for Low Alloy Steels</h4>
            <div class="subsection">
                <h4>211-4.5.1 Dehydrogenation Heat Treatment</h4>
                <p>Prior to any repairs being performed, consideration should be given to the need for a dehydrogenation heat treatment of vessels or parts that have been exposed to products or processes containing hydrogen to avoid hydrogen cracking during repairs. Dehydrogenation heat treatment may be performed as outlined within API RP 934.</p>
            </div>
            <div class="subsection">
                <h4>211-4.5.2 Embrittlement</h4>
                <p>Some materials may have been exposed to service conditions that cause embrittlement of these materials. Consideration should be given to the prior service conditions and the potential damage in materials resulting from these service conditions. This may require special welding procedures and techniques to minimize the risk of cracking during welded repairs. For example, the use of welding procedures that provide controlled deposition and low welding heat input reduce the risk of cracking in embrittled base metals during welding repairs.</p>
            </div>
            <div class="subsection">
                <h4>211-4.5.3 Intermediate PWHT</h4>
                <p>After performing weld repairs to low alloy steel base metal, but before application of weld overlay (if applicable), a dehydrogenation heat treatment or an intermediate PWHT should be considered, especially if the base metal is 2¼Cr or higher alloy, or heavy wall (greater than 38 mm or 1½ in. thick).</p>
            </div>
            <div class="subsection">
                <h4>211-4.5.4 Hardness and Toughness</h4>
                <p>Consideration should be given to the maximum hardness and toughness needed in weld metal and in base metal heat-affected zones for the intended service.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-4.6 Surface Profile</h4>
            <p>Finished surfaces should be free of undercut, notches, sharp ridges, and abrupt surface changes. Grinding may be required to eliminate irregularities or pits.</p>
        </div>
        <div class="subsection">
            <h4>211-4.7 Heat Treatment</h4>
            <div class="subsection">
                <h4>211-4.7.1 General</h4>
                <p>Heat treatment shall be performed in accordance with the applicable construction code or post-construction code, or owner-user specification. As an alternative to heat treatment, and if allowed by the applicable construction code or post-construction code and approved by the owner, consideration may be given to the use of alternatives such as temper bead welding procedures.</p>
            </div>
            <div class="subsection">
                <h4>211-4.7.2 Prior PWHT</h4>
                <p>Consideration should be given to the effect of any prior postweld heat treatments (PWHT) and any additional PWHT for welded repairs on cladding and on strength and toughness of the base metal and welded joints.</p>
            </div>
            <div class="subsection">
                <h4>211-4.7.3 Low Alloy Steels</h4>
                <p>In case of repairs to the cladding or weld overlay on low alloy steels (e.g. Cr-Mo), the repaired area may be subjected to final PWHT any time after the deposition of 5 mm (3/16 in.) of the first layer of the corrosion-resistant weld deposit (unless another depth is qualified). Final PWHT may be performed either before or after the deposition of additional layers of overlay since only the first layer of weld deposit will cause a HAZ in the base metal. Subsequent layers of welding would not be expected to create a new HAZ in the base metal.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>211-5 EXAMINATION</h4>
        <div class="subsection">
            <h4>211-5.1 General</h4>
            <div class="subsection">
                <h4>211-5.1.1 Nondestructive Examination Before Welding</h4>
                <p>Consideration should be given to the need for nondestructive examination of surfaces to be welded. An appropriate method such as magnetic particle or liquid penetrant may be utilized to ensure that all defects have been removed before the welding. Any unacceptable indications that are discovered shall be removed in accordance with Article 304, "Flaw Excavation and Weld Repair," of this Standard prior to application of weld overlay. The acceptance criteria shall be in accordance with the applicable construction code or post-construction code.</p>
            </div>
            <div class="subsection">
                <h4>211-5.1.2 Nondestructive Examination After Welding</h4>
                <p>Consideration should be given to the need for nondestructive examination of surfaces repaired by welding. Surface examination methods such as magnetic particle, liquid penetrant, ultrasonic, or surface eddy current may be utilized in accordance with the applicable construction code or post-construction code. Welds on base metal over 9.5 mm (3/8 in.) thick should be examined by volumetric examination methods such as radiographic or ultrasonic testing. The acceptance criteria shall be in accordance with the applicable construction code or post-construction code.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-5.2 Copper Sulfate Solution Testing</h4>
            <p>After removal of any damaged stainless steel weld overlay, and prior to applying new weld metal, carbon steel surfaces should be examined with copper sulfate solution to verify complete removal of stainless steel. (See ASTM A380 for copper sulfate testing.)</p>
        </div>
        <div class="subsection">
            <h4>211-5.3 Liquid Penetrant Examination of Weld Overlay and Back Cladding</h4>
            <div class="subsection">
                <h4>211-5.3.1 Multiple-Layer Welds</h4>
                <p>For multiple-layer weld overlay or back cladding, liquid penetrant examination should be performed on the first layer of the weld overlay.</p>
            </div>
            <div class="subsection">
                <h4>211-5.3.2 Finished Surfaces</h4>
                <p>The final surface of weld overlays, back cladding, and welds joining attachments to weld overlays or integral cladding should be liquid penetrant examined to an appropriate extent.</p>
            </div>
            <div class="subsection">
                <h4>211-5.3.3 Examination and Acceptance Standards</h4>
                <p>Examination and acceptance standards shall be in accordance with the applicable construction code or post-construction code. If no standard is specified by the applicable construction code or post-construction code, the examination may be conducted in accordance with ASME BPVC, Section V, and acceptance criteria may be in accordance with ASME BPVC, Section VIII, Division 1, Mandatory Appendix 8. Defective areas shall be repaired and reexamined.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>211-6 TESTING</h4>
        <div class="subsection">
            <h4>211-6.1 Chemical Analysis</h4>
            <div class="subsection">
                <h4>211-6.1.1 Procedure Qualification</h4>
                <p>The chemical composition at the "effective depth" of the overlay or back cladding should be included in welding procedure qualification tests.</p>
            </div>
            <div class="subsection">
                <h4>211-6.1.2 Production Welding</h4>
                <p>Alternatively, the chemical composition at the "effective depth" of the overlay or back cladding shall be reported for production welding, when specified by the owner. The acceptance criteria for production overlay and back cladding shall be in accordance with the owner's specification except as noted in this Standard.</p>
            </div>
            <div class="subsection">
                <h4>211-6.1.3 Extent of Chemistry and Ferrite Testing</h4>
                <p>(a) The number of samples for chemical analysis for all types of weld overlay and back cladding, and number of ferrite measurements for austenitic stainless steel deposits shall be as specified by the owner. When required, test samples should be removed, or in situ tests should be conducted, prior to final PWHT (if applicable) at locations selected by the field inspector. Testing after PWHT is not required unless otherwise specified by the owner.</p>
                <p>(1) For machine weld overlay, one sample or test from each girth weld and component (such as head, tube sheet, connection, etc.), and each back-clad seam is recommended. For manual weld overlay, two samples or tests from each girth weld and equipment component (such as head, tubesheet, connection, etc.), and each back-clad seam are recommended.</p>
                <p>(2) For back-clad seams ≤ 600 mm (24 in.) in diameter, one sample for each 24 diametral-inch, or part thereof, is recommended. The 24 diametral-inch measurement is cumulative for all back-clad seams 600 mm (24 in.) diameter and smaller employing the same welding procedure, process, and filler metal.</p>
                <p>EXAMPLE: One 20 in. manway and three 8 in. nozzles = 44 diametral-inches; or one 500 mm manway and three 200 mm nozzles = 1100 mm diameter measurement. Therefore, two tests are required.</p>
                <p>(b) For repetitive manual, semi-automatic, and automatic weld overlay operations on components > 600 mm (24 in.) diameter, two tests per welder per week may be substituted for the requirements of (a)(1) above. However, there shall be no change in welding procedure, filler metal classification, batch number of submerged arc or electroslag flux, or welding position. Authorization shall be at the discretion of the owner.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-6.2 Chemical Composition of Austenitic Stainless Steel Weld Deposits</h4>
            <p>The chemical analysis shall be within the range specified in the original construction code, or in ASME BPVC, Section II, Part C.</p>
        </div>
        <div class="subsection">
            <h4>211-6.3 Ferrite Testing of Austenitic Stainless Steel Weld Deposits</h4>
            <p>Suggested requirements for austenitic stainless steel ferrite numbers are as follows:</p>
            <p>(a) The ferrite content of the deposited weld overlay or back cladding at the effective depth (as defined in section 211-1) should be as follows:</p>
            <p>(1) For Type 304, 304L, 316, 316L, and 317L, the FN range should be 4 to 10.</p>
            <p>(2) For Type 347, the FN range should be 3 to 10.</p>
            <p>(b) The ferrite content should be determined by one of the following:</p>
            <p>(1) the actual, as-deposited chemical composition and the WRC-1992 Constitution Diagram</p>
            <p>(2) magnetic instrument as listed in AWS A4.2/A4.2M</p>
        </div>
        <div class="subsection">
            <h4>211-6.4 Calibration of Magnetic Ferrite Testing Gages</h4>
            <p>(a) Magnetic gages should be calibrated and certified per AWS A4.2/A4.2M. An annual calibration certification should be available to the inspector. Prior to use in production, instrument calibration should be verified on at least two standards (calibration test blocks) with a minimum ferrite spread of 5 FN. At least one of these standards should have a FN of 4 to 10.</p>
            <p>(b) These standards should be one of the following:</p>
            <p>(1) primary or secondary weld metal standards described in AWS A4.2/A4.2M</p>
            <p>(2) samples with certified chemical analyses referenced to the WRC-1992 (FN) Diagram or the DeLong (FN) Diagram</p>
            <p>(3) samples with ferrite content measured by metallographic techniques</p>
        </div>
        <div class="subsection">
            <h4>211-6.5 Ferricyanide Testing of Ni-Cu (Alloy 400) and Cu-Ni Alloys</h4>
            <p>(a) Ferricyanide testing should be performed on all nickel-copper [Alloy 400 (Monel), 67Ni-30Cu] and copper-nickel (70Cu-30Ni, 90Cu-10Ni) alloy overlays and back cladding.</p>
            <p>(b) Ferricyanide tests should be performed on 100% of finished nickel-copper or copper-nickel overlays and back cladding deposits. The results should not indicate the presence of free iron.</p>
            <p>The suggested test procedure is as follows:</p>
            <p>(1) The surface to be examined should be prepared by a method that does not cause contamination by free iron. A solvent or detergent solution should remove oil, grease, and dirt. A pickling solution may be used to remove oxides. The surface should be thoroughly rinsed after pickling or detergent cleaning, using distilled or de-ionized water. If mechanical surface preparation is required, new emery paper or grinding wheels, and nonferritic buffing wheels and brushes should be used.</p>
            <p>(2) Suggested composition of the test solution is as follows:</p>
            <p>(-a) 90% by volume potassium ferricyanide (4% solution)</p>
            <p>(-b) 10% by volume solution consisting of 1 part concentrated hydrochloric acid (36% to 38% by weight HCl) and 9 parts distilled water</p>
            <p>(3) Fresh test solution should be prepared immediately before application.</p>
            <p>(4) The testing solution's reaction should be checked on samples of nickel-copper or copper-nickel and carbon steel. A blue color should appear immediately on carbon steel. No color should appear on nickel-copper or copper-nickel within 10 min. If color does appear, the solution is too acidic, and new solution should be formulated.</p>
            <p>(5) Solution should be applied to the tested surface by spraying (using an atomizer) or drop-by-drop (using an eyedropper). Appearance of a definite blue color within 2 min indicates the presence of free iron. A light blue tint should be considered insignificant.</p>
            <p>(6) Questions regarding determination of iron content based on the degree of blueness should be resolved by spot chemical analysis. The iron content should not exceed 6%.</p>
        </div>
        <div class="subsection">
            <h4>211-6.6 Hydrostatic Testing</h4>
            <p>The inspector should be consulted to establish the need for hydrostatic testing of equipment after repairs are complete. Pressure testing is generally not needed for weld buildup and restoration type repairs, but if specified, should be in accordance with the construction code or post-construction code.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>211-7 REFERENCES</h4>
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        <ul>
            <li>ANSI/NB-23-2007, National Board Inspection Code</li>
            <li>API RP 582, Welding Guidelines for the Chemical, Oil and Gas Industries</li>
            <li>API RP 934, Materials and Fabrication Requirements for 2%Cr-1Mo and 3Cr-1Mo Steel Heavy Wall Pressure Vessels for High Temperature, High Pressure Hydrogen Service</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section II, Part C - Specifications for Welding Rods, Electrodes, and Filler Metals</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section V - Nondestructive Examination</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section VIII, Division 1 - Rules for Construction of Pressure Vessels</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section IX - Welding and Brazing Qualifications</li>
            <li>ASTM A380, Standard Practice for Cleaning, Descaling, and Passivation of Stainless Steel Parts, Equipment, and Systems</li>
            <li>AWS A4.2/A4.2M:2006 (ISO 8249:2000), Standard Practice for Calibrating Magnetic Instruments to Measure the Delta Ferritic Content of Austenitic and Duplex Ferritic-Austenitic Stainless Steel Weld Metal</li>
            <li>Repairs of Deaerators</li>
            <li>Baker, K., Jr., R. Sloan, J. R. Sloan, and E. Upitis. Repair of a 2¼Cr-1Mo Petrochemical Reactor WRC Bulletin 412:95-105</li>
            <li>WRC-1992, Constitution Diagram for Stainless Steel Weld Metals; Kotecki, D.J. and Siewert, T.A.</li>
        </ul>
    </div>
    `,
    contentEs: `<h3>211 Reconstrucción por Soldadura, Recubrimiento por Soldadura y Restauración de Revestimiento</h3>
    <div class="subsection">
        <h4>211-1 DESCRIPCIÓN</h4>
        <div class="subsection">
            <h4>211-1.1 Introducción</h4>
            <p>Este Artículo aborda la reparación y restauración mediante reconstrucción por soldadura o recubrimiento por soldadura de metal base de acero al carbono, metal base de acero de baja aleación, y revestimiento resistente a la corrosión o recubrimiento por soldadura en superficies internas de recipientes a presión y tuberías que han experimentado adelgazamiento de pared.</p>
        </div>
        <div class="subsection">
            <h4>211-1.2 Alcance</h4>
            <p>Las reparaciones al recubrimiento por soldadura o revestimiento pueden implicar el reemplazo de todo el espesor del revestimiento o recubrimiento por soldadura, o un espesor parcial del recubrimiento por soldadura.</p>
        </div>
        <div class="subsection">
            <h4>211-1.3 Metal Base Dañado</h4>
            <p>En aplicaciones de acero al carbono o acero de baja aleación, el recubrimiento por soldadura o la reconstrucción por soldadura puede utilizarse para reconstruir áreas que están desgastadas por erosión, corrosión, o corrosión acelerada por flujo (FAC), o que han sido esmeriladas para eliminar defectos como grietas. La integridad original del límite de presión del metal base puede ser restaurada.</p>
        </div>
        <div class="subsection">
            <h4>211-1.4 Recubrimiento por Soldadura y Revestimiento Dañados</h4>
            <p>El recubrimiento por soldadura resistente a la corrosión puede utilizarse para reemplazar áreas dañadas que originalmente tenían un recubrimiento similar, o que originalmente tenían un revestimiento resistente a la corrosión sobre material de acero al carbono o acero de baja aleación. El recubrimiento por soldadura resistente a la corrosión también puede utilizarse para revestir por el lado posterior juntas que han sido reparadas en material revestido con metal base de acero al carbono o acero de baja aleación.</p>
        </div>
        <div class="subsection">
            <h4>211-1.5 Definiciones</h4>
            <p>Consulte el párrafo 101-3.2.2 para las definiciones.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>211-2 LIMITACIONES</h4>
        <div class="subsection">
            <h4>211-2.1 Requisitos Adicionales</h4>
            <p>La Parte 1 de esta Norma, "Alcance, Organización e Intención", contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse en conjunción con la Parte 1.</p>
        </div>
        <div class="subsection">
            <h4>211-2.2 Condición del Metal Base</h4>
            <p>Este Artículo se aplicará al adelgazamiento de pared y no aborda específicamente otros tipos de defectos superficiales. Consulte el Artículo 304, "Excavación de Defectos y Reparación por Soldadura" para otros tipos de defectos superficiales. El espesor restante del metal base deberá ser adecuado para acomodar la reconstrucción por soldadura.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>211-3 DISEÑO</h4>
        <div class="subsection">
            <h4>211-3.1 Causa del Daño</h4>
            <p>Antes de la soldadura de reparación, deberá determinarse la causa del daño al recubrimiento por soldadura, revestimiento o metal base. El uso de recubrimiento por soldadura o reconstrucción por soldadura como reparación permanente deberá incluir la consideración del mecanismo de adelgazamiento y su prevención. Deberá considerarse el reemplazo de todo o parte del recubrimiento por soldadura en caso de que haya daño al revestimiento o recubrimiento por soldadura (corrosión, fragilización y agrietamiento, etc.).</p>
        </div>
        <div class="subsection">
            <h4>211-3.2 Número de Capas de Soldadura</h4>
            <p>El recubrimiento por soldadura o el revestimiento posterior pueden depositarse en una o más capas. Se requiere más de una capa cuando se utilizan técnicas de cordón templado. El número de capas de soldadura en producción no deberá ser menor que el número de capas depositadas para las pruebas de calificación de procedimientos de recubrimiento por soldadura.</p>
        </div>
        <div class="subsection">
            <h4>211-3.3 Espesor de Soldadura</h4>
            <p>La profundidad total del recubrimiento o revestimiento posterior deberá ser de 3 mm (1/8 pulg.) o mayor en espesor, a menos que se especifique lo contrario. En todos los casos, el espesor del recubrimiento por soldadura y el espesor del metal base deberán ser al menos iguales al espesor mínimo del metal sin dañar.</p>
        </div>
        <div class="subsection">
            <h4>211-3.4 Soldadura de Múltiples Capas</h4>
            <p>Si se requiere un recubrimiento de múltiples capas o revestimiento posterior para cumplir con la composición química especificada, y es necesario el mecanizado o esmerilado posterior para satisfacer los requisitos dimensionales, el espesor final del recubrimiento mecanizado o esmerilado no deberá ser menor que el espesor calificado. Los ejemplos incluyen el mecanizado de ranuras para juntas en bridas y tuboplacas o el esmerilado del diámetro interior del carcasa de intercambiador de calor para permitir la inserción del haz de tubos.</p>
        </div>
        <div class="subsection">
            <h4>211-3.5 Restauración del Metal Base</h4>
            <p>Cuando se vaya a restaurar la resistencia del metal base original mediante reconstrucción por soldadura, la resistencia a la tracción del metal de soldadura deberá ser igual o superior a la del metal base. También deberá considerarse la compatibilidad del metal de soldadura con el metal base y su idoneidad para el servicio previsto.</p>
        </div>
        <div class="subsection">
            <h4>211-3.6 Protección contra la Corrosión</h4>
            <p>Donde se aplique recubrimiento por soldadura para protección contra la corrosión, como recubrimiento de acero inoxidable sobre metal base de acero al carbono o baja aleación, deberá especificarse una composición química de soldadura adecuada (como Tipo 309 seguido de metal de aporte Tipo 308).</p>
        </div>
        <div class="subsection">
            <h4>211-3.7 Cálculos de Diseño</h4>
            <p>Todos los cálculos de diseño deberán realizarse de acuerdo con el código de construcción original. Si el recubrimiento o revestimiento se incluye en los cálculos de espesor, los cálculos deberán realizarse de acuerdo con el código de construcción original o, cuando no exista, pueden basarse en ASME BPVC, Sección VIII, División 1, UCL-23.</p>
        </div>
        <div class="subsection">
            <h4>211-3.8 Otras Consideraciones</h4>
            <div class="subsection">
                <h4>211-3.8.1 Expansión Térmica Diferencial</h4>
                <p>Deberá considerarse la expansión térmica diferencial entre el metal base y el recubrimiento por soldadura.</p>
            </div>
            <div class="subsection">
                <h4>211-3.8.2 Corrosión Galvánica</h4>
                <p>Deberá considerarse la posibilidad de corrosión galvánica en el metal base en el borde del recubrimiento por soldadura de alta aleación o no ferroso.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>211-4 FABRICACIÓN</h4>
        <div class="subsection">
            <h4>211-4.1 Preparación de Superficies</h4>
            <p>Las superficies a soldar deberán estar libres de óxido, escama, pintura, recubrimientos y otros contaminantes, y deberán tener un contorno suave. Si las superficies van a prepararse mediante chorro abrasivo, el medio deberá estar libre de sílice que podría interferir con las operaciones de soldadura posteriores.</p>
        </div>
        <div class="subsection">
            <h4>211-4.2 Calificación de Procedimientos de Soldadura</h4>
            <p>Los procedimientos de soldadura, soldadores y operadores de soldadura deberán estar calificados de acuerdo con los requisitos vigentes del código de construcción aplicable o código posterior a la construcción. Si no se especifica lo contrario, ASME BPVC, Sección IX puede utilizarse para la calificación de procedimientos y de rendimiento. Típicamente, se utilizan procesos de soldadura semiautomáticos como GMAW para maximizar la productividad y minimizar el aporte de calor. Para áreas más grandes a soldar, pueden ser apropiados métodos automáticos utilizando equipos de soldadura montados sobre rieles para un mejor control y tasas de productividad.</p>
        </div>
        <div class="subsection">
            <h4>211-4.3 Recubrimiento por Soldadura</h4>
            <div class="subsection">
                <h4>211-4.3.1 Aporte de Calor</h4>
                <p>La aplicación del primer cordón de recubrimiento en carcasa delgadas deberá ser tal que la penetración, y por lo tanto el potencial de perforación, se minimice. En general, el aporte de calor deberá minimizarse para evitar la perforación y la distorsión.</p>
            </div>
            <div class="subsection">
                <h4>211-4.3.2 Espesor del Recubrimiento por Soldadura</h4>
                <p>El espesor del recubrimiento por soldadura deberá verificarse mediante medición real del borde expuesto en las preparaciones de juntas de soldadura o cavidades de reparación. Las preguntas relacionadas con el espesor del recubrimiento deberán resolverse mediante mediciones de espesor. Puede ser necesaria la consulta con un especialista en END.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-4.4 Revestimiento Posterior</h4>
            <div class="subsection">
                <h4>211-4.4.1 Preparación de la Ranura de Soldadura</h4>
                <p>(Los detalles típicos de juntas de soldadura para revestimiento posterior se muestran en la Figura 211-4.4.1-1.)</p>
                <p>Antes del revestimiento posterior de juntas a tope, la ranura de soldadura en el material de respaldo deberá rellenarse aproximadamente al ras, pero no más de 1.5 mm (1/16 pulg.) por debajo de la línea de fusión del recubrimiento por soldadura o la línea de unión del revestimiento adyacente a la ranura de soldadura antes del revestimiento posterior. Deberá tenerse cuidado para evitar la contaminación cruzada del metal de soldadura del revestimiento y el material de respaldo. Cualquier área sospechosa de contaminación cruzada deberá atacarse con una solución de ácido nítrico o sulfato de cobre para confirmar la ubicación de la interfaz revestimiento/sustrato.</p>
                
                <div class="figure-container">
                    <img src="images/asme_pcc2_figure_211-4.4.1-1.png" class="figure-image">
                    <p class="figure-caption">Figura 211-4.4.1-1—Junta de Soldadura con Revestimiento Posterior</p>
                </div>
            </div>
            <div class="subsection">
                <h4>211-4.4.2 Retirada de Revestimiento</h4>
                <p>Antes del revestimiento posterior de juntas a tope, el revestimiento deberá retirarse un mínimo de 6 mm (1/4 pulg.) desde el borde de la placa, tubería o accesorio.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-4.5 Consideraciones Especiales para Aceros de Baja Aleación</h4>
            <div class="subsection">
                <h4>211-4.5.1 Tratamiento Térmico de Deshidrogenación</h4>
                <p>Antes de realizar cualquier reparación, deberá considerarse la necesidad de un tratamiento térmico de deshidrogenación de recipientes o partes que han estado expuestos a productos o procesos que contienen hidrógeno para evitar el agrietamiento por hidrógeno durante las reparaciones. El tratamiento térmico de deshidrogenación puede realizarse como se describe en API RP 934.</p>
            </div>
            <div class="subsection">
                <h4>211-4.5.2 Fragilización</h4>
                <p>Algunos materiales pueden haber estado expuestos a condiciones de servicio que causan la fragilización de estos materiales. Deberá considerarse las condiciones de servicio previas y el posible daño en los materiales resultante de estas condiciones de servicio. Esto puede requerir procedimientos y técnicas de soldadura especiales para minimizar el riesgo de agrietamiento durante las reparaciones soldadas. Por ejemplo, el uso de procedimientos de soldadura que proporcionan una deposición controlada y bajo aporte de calor de soldadura reduce el riesgo de agrietamiento en metales base fragilizados durante las reparaciones por soldadura.</p>
            </div>
            <div class="subsection">
                <h4>211-4.5.3 TTTP Intermedio</h4>
                <p>Después de realizar reparaciones por soldadura al metal base de acero de baja aleación, pero antes de la aplicación del recubrimiento por soldadura (si es aplicable), deberá considerarse un tratamiento térmico de deshidrogenación o un TTTP intermedio, especialmente si el metal base es de 2¼Cr o aleación superior, o de pared gruesa (mayor de 38 mm o 1½ pulg. de espesor).</p>
            </div>
            <div class="subsection">
                <h4>211-4.5.4 Dureza y Tenacidad</h4>
                <p>Deberá considerarse la dureza máxima y tenacidad necesarias en el metal de soldadura y en las zonas afectadas por el calor del metal base para el servicio previsto.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-4.6 Perfil de Superficie</h4>
            <p>Las superficies terminadas deberán estar libres de socavado, muescas, crestas afiladas y cambios bruscos de superficie. Puede ser necesario el esmerilado para eliminar irregularidades o picaduras.</p>
        </div>
        <div class="subsection">
            <h4>211-4.7 Tratamiento Térmico</h4>
            <div class="subsection">
                <h4>211-4.7.1 General</h4>
                <p>El tratamiento térmico deberá realizarse de acuerdo con el código de construcción aplicable o código posterior a la construcción, o especificación del propietario-usuario. Como alternativa al tratamiento térmico, y si está permitido por el código de construcción aplicable o código posterior a la construcción y aprobado por el propietario, podrá considerarse el uso de alternativas como procedimientos de soldadura de cordón templado.</p>
            </div>
            <div class="subsection">
                <h4>211-4.7.2 TTTP Previo</h4>
                <p>Deberá considerarse el efecto de cualquier tratamiento térmico posterior a la soldadura (TTTP) previo y cualquier TTTP adicional para reparaciones soldadas en el revestimiento y en la resistencia y tenacidad del metal base y las juntas soldadas.</p>
            </div>
            <div class="subsection">
                <h4>211-4.7.3 Aceros de Baja Aleación</h4>
                <p>En caso de reparaciones al revestimiento o recubrimiento por soldadura en aceros de baja aleación (ej. Cr-Mo), el área reparada puede someterse a TTTP final en cualquier momento después de la deposición de 5 mm (3/16 pulg.) de la primera capa del depósito de soldadura resistente a la corrosión (a menos que se califique otra profundidad). El TTTP final puede realizarse antes o después de la deposición de capas adicionales de recubrimiento, ya que solo la primera capa del depósito de soldadura causará una ZAC en el metal base. Las capas subsiguientes de soldadura no se espera que creen una nueva ZAC en el metal base.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>211-5 EXAMEN</h4>
        <div class="subsection">
            <h4>211-5.1 General</h4>
            <div class="subsection">
                <h4>211-5.1.1 Examen No Destructivo Antes de la Soldadura</h4>
                <p>Deberá considerarse la necesidad del examen no destructivo de las superficies a soldar. Puede utilizarse un método apropiado como partículas magnéticas o líquidos penetrantes para asegurar que todos los defectos hayan sido eliminados antes de la soldadura. Cualquier indicación inaceptable que se descubra deberá eliminarse de acuerdo con el Artículo 304, "Excavación de Defectos y Reparación por Soldadura", de esta Norma antes de la aplicación del recubrimiento por soldadura. Los criterios de aceptación deberán estar de acuerdo con el código de construcción aplicable o código posterior a la construcción.</p>
            </div>
            <div class="subsection">
                <h4>211-5.1.2 Examen No Destructivo Después de la Soldadura</h4>
                <p>Deberá considerarse la necesidad del examen no destructivo de las superficies reparadas por soldadura. Pueden utilizarse métodos de examen superficial como partículas magnéticas, líquidos penetrantes, ultrasónicos o corrientes de Foucault superficiales de acuerdo con el código de construcción aplicable o código posterior a la construcción. Las soldaduras en metal base de más de 9.5 mm (3/8 pulg.) de espesor deberán examinarse mediante métodos de examen volumétrico como radiografía o pruebas ultrasónicas. Los criterios de aceptación deberán estar de acuerdo con el código de construcción aplicable o código posterior a la construcción.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-5.2 Prueba con Solución de Sulfato de Cobre</h4>
            <p>Después de la eliminación de cualquier recubrimiento por soldadura de acero inoxidable dañado, y antes de aplicar nuevo metal de soldadura, las superficies de acero al carbono deberán examinarse con solución de sulfato de cobre para verificar la eliminación completa del acero inoxidable. (Consulte ASTM A380 para la prueba con sulfato de cobre.)</p>
        </div>
        <div class="subsection">
            <h4>211-5.3 Examen con Líquidos Penetrantes del Recubrimiento por Soldadura y Revestimiento Posterior</h4>
            <div class="subsection">
                <h4>211-5.3.1 Soldaduras de Múltiples Capas</h4>
                <p>Para el recubrimiento por soldadura o revestimiento posterior de múltiples capas, deberá realizarse un examen con líquidos penetrantes en la primera capa del recubrimiento por soldadura.</p>
            </div>
            <div class="subsection">
                <h4>211-5.3.2 Superficies Terminadas</h4>
                <p>La superficie final de los recubrimientos por soldadura, revestimientos posteriores, y soldaduras que unen accesorios a recubrimientos por soldadura o revestimientos integrales deberán examinarse con líquidos penetrantes en una extensión apropiada.</p>
            </div>
            <div class="subsection">
                <h4>211-5.3.3 Normas de Examen y Aceptación</h4>
                <p>Las normas de examen y aceptación deberán estar de acuerdo con el código de construcción aplicable o código posterior a la construcción. Si no se especifica una norma por el código de construcción aplicable o código posterior a la construcción, el examen puede realizarse de acuerdo con ASME BPVC, Sección V, y los criterios de aceptación pueden estar de acuerdo con ASME BPVC, Sección VIII, División 1, Apéndice Obligatorio 8. Las áreas defectuosas deberán repararse y reexaminarse.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>211-6 PRUEBAS</h4>
        <div class="subsection">
            <h4>211-6.1 Análisis Químico</h4>
            <div class="subsection">
                <h4>211-6.1.1 Calificación de Procedimientos</h4>
                <p>La composición química en la "profundidad efectiva" del recubrimiento o revestimiento posterior deberá incluirse en las pruebas de calificación de procedimientos de soldadura.</p>
            </div>
            <div class="subsection">
                <h4>211-6.1.2 Soldadura de Producción</h4>
                <p>Alternativamente, la composición química en la "profundidad efectiva" del recubrimiento o revestimiento posterior deberá reportarse para la soldadura de producción, cuando lo especifique el propietario. Los criterios de aceptación para el recubrimiento de producción y el revestimiento posterior deberán estar de acuerdo con la especificación del propietario, excepto como se indica en esta Norma.</p>
            </div>
            <div class="subsection">
                <h4>211-6.1.3 Extensión del Análisis Químico y Pruebas de Ferrita</h4>
                <p>(a) El número de muestras para análisis químico de todos los tipos de recubrimiento por soldadura y revestimiento posterior, y el número de mediciones de ferrita para depósitos de acero inoxidable austenítico deberán ser los especificados por el propietario. Cuando se requiera, las muestras de prueba deberán retirarse, o deberán realizarse pruebas in situ, antes del TTTP final (si es aplicable) en ubicaciones seleccionadas por el inspector de campo. No se requieren pruebas después del TTTP a menos que el propietario especifique lo contrario.</p>
                <p>(1) Para el recubrimiento por soldadura automático, se recomienda una muestra o prueba de cada soldadura circunferencial y componente (como cabezal, tuboplaca, conexión, etc.), y cada junta con revestimiento posterior. Para el recubrimiento por soldadura manual, se recomiendan dos muestras o pruebas de cada soldadura circunferencial y componente del equipo (como cabezal, tuboplaca, conexión, etc.), y cada junta con revestimiento posterior.</p>
                <p>(2) Para juntas con revestimiento posterior ≤ 600 mm (24 pulg.) de diámetro, se recomienda una muestra por cada 24 pulgadas-diametrales, o parte de ellas. La medición de 24 pulgadas-diametrales es acumulativa para todas las juntas con revestimiento posterior de 600 mm (24 pulg.) de diámetro o menores que empleen el mismo procedimiento de soldadura, proceso y metal de aporte.</p>
                <p>EJEMPLO: Una boca de hombre de 20 pulg. y tres boquillas de 8 pulg. = 44 pulgadas-diametrales; o una boca de hombre de 500 mm y tres boquillas de 200 mm = 1100 mm de medición de diámetro. Por lo tanto, se requieren dos pruebas.</p>
                <p>(b) Para operaciones de recubrimiento por soldadura repetitivas manuales, semiautomáticas y automáticas en componentes > 600 mm (24 pulg.) de diámetro, pueden sustituirse dos pruebas por soldador por semana por los requisitos de (a)(1) anterior. Sin embargo, no deberá haber cambios en el procedimiento de soldadura, clasificación del metal de aporte, número de lote del fundente para arco sumergido o electroescoria, o posición de soldadura. La autorización deberá quedar a discreción del propietario.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>211-6.2 Composición Química de Depósitos de Soldadura de Acero Inoxidable Austenítico</h4>
            <p>El análisis químico deberá estar dentro del rango especificado en el código de construcción original, o en ASME BPVC, Sección II, Parte C.</p>
        </div>
        <div class="subsection">
            <h4>211-6.3 Pruebas de Ferrita de Depósitos de Soldadura de Acero Inoxidable Austenítico</h4>
            <p>Los requisitos sugeridos para los números de ferrita de acero inoxidable austenítico son los siguientes:</p>
            <p>(a) El contenido de ferrita del recubrimiento por soldadura depositado o revestimiento posterior en la profundidad efectiva (como se define en la sección 211-1) debería ser el siguiente:</p>
            <p>(1) Para el Tipo 304, 304L, 316, 316L y 317L, el rango de FN debería ser de 4 a 10.</p>
            <p>(2) Para el Tipo 347, el rango de FN debería ser de 3 a 10.</p>
            <p>(b) El contenido de ferrita debería determinarse mediante uno de los siguientes métodos:</p>
            <p>(1) la composición química real, tal como depositada, y el Diagrama Constitucional WRC-1992</p>
            <p>(2) instrumento magnético como se lista en AWS A4.2/A4.2M</p>
        </div>
        <div class="subsection">
            <h4>211-6.4 Calibración de Medidores Magnéticos de Prueba de Ferrita</h4>
            <p>(a) Los medidores magnéticos deberán calibrarse y certificarse según AWS A4.2/A4.2M. Debería estar disponible un certificado de calibración anual para el inspector. Antes de su uso en producción, la calibración del instrumento debería verificarse en al menos dos estándares (bloques de prueba de calibración) con una dispersión mínima de ferrita de 5 FN. Al menos uno de estos estándares debería tener una FN de 4 a 10.</p>
            <p>(b) Estos estándares deberían ser uno de los siguientes:</p>
            <p>(1) estándares primarios o secundarios de metal de soldadura descritos en AWS A4.2/A4.2M</p>
            <p>(2) muestras con análisis químicos certificados referidos al Diagrama WRC-1992 (FN) o al Diagrama DeLong (FN)</p>
            <p>(3) muestras con contenido de ferrita medido mediante técnicas metalográficas</p>
        </div>
        <div class="subsection">
            <h4>211-6.5 Prueba de Ferricianuro de Aleaciones de Ni-Cu (Aleación 400) y Cu-Ni</h4>
            <p>(a) Debería realizarse la prueba de ferricianuro en todos los recubrimientos y revestimientos posteriores de aleaciones de níquel-cobre [Aleación 400 (Monel), 67Ni-30Cu] y cobre-níquel (70Cu-30Ni, 90Cu-10Ni).</p>
            <p>(b) Deberían realizarse pruebas de ferricianuro en el 100% de los recubrimientos y revestimientos posteriores terminados de níquel-cobre o cobre-níquel. Los resultados no deberían indicar la presencia de hierro libre.</p>
            <p>El procedimiento de prueba sugerido es el siguiente:</p>
            <p>(1) La superficie a examinar debería prepararse mediante un método que no cause contaminación por hierro libre. Una solución de solvente o detergente debería eliminar aceite, grasa y suciedad. Puede utilizarse una solución de decapado para eliminar óxidos. La superficie debería enjuagarse completamente después del decapado o limpieza con detergente, utilizando agua destilada o desionizada. Si se requiere preparación mecánica de la superficie, deberían utilizarse papel de esmeril nuevo o ruedas de esmeril, y ruedas y cepillos de pulido no ferrosos.</p>
            <p>(2) La composición sugerida de la solución de prueba es la siguiente:</p>
            <p>(-a) 90% en volumen de ferricianuro de potasio (solución al 4%)</p>
            <p>(-b) 10% en volumen de solución que consiste en 1 parte de ácido clorhídrico concentrado (36% a 38% en peso de HCl) y 9 partes de agua destilada</p>
            <p>(3) La solución de prueba fresca debería prepararse inmediatamente antes de su aplicación.</p>
            <p>(4) La reacción de la solución de prueba debería verificarse en muestras de níquel-cobre o cobre-níquel y acero al carbono. Debería aparecer un color azul inmediatamente en el acero al carbono. No debería aparecer color en el níquel-cobre o cobre-níquel dentro de 10 min. Si aparece color, la solución es demasiado ácida, y debería formularse una solución nueva.</p>
            <p>(5) La solución debería aplicarse a la superficie probada mediante rociado (usando un atomizador) o gota a gota (usando un gotero). La aparición de un color azul definido dentro de 2 min indica la presencia de hierro libre. Un ligero tinte azul debería considerarse insignificante.</p>
            <p>(6) Las preguntas relacionadas con la determinación del contenido de hierro basadas en el grado de coloración azul deberían resolverse mediante análisis químico puntual. El contenido de hierro no debería exceder el 6%.</p>
        </div>
        <div class="subsection">
            <h4>211-6.6 Prueba Hidrostática</h4>
            <p>Debería consultarse al inspector para establecer la necesidad de la prueba hidrostática del equipo después de que las reparaciones estén completas. Generalmente no se necesitan pruebas de presión para reparaciones tipo reconstrucción por soldadura y restauración, pero si se especifican, deberían realizarse de acuerdo con el código de construcción o código posterior a la construcción.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>211-7 REFERENCIAS</h4>
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        <ul>
            <li>ANSI/NB-23-2007, National Board Inspection Code (Código de Inspección de la National Board)</li>
            <li>API RP 582, Welding Guidelines for the Chemical, Oil and Gas Industries (Directrices de Soldadura para las Industrias Química, del Petróleo y del Gas)</li>
            <li>API RP 934, Materials and Fabrication Requirements for 2%Cr-1Mo and 3Cr-1Mo Steel Heavy Wall Pressure Vessels for High Temperature, High Pressure Hydrogen Service (Requisitos de Materiales y Fabricación para Recipientes a Presión de Pared Gruesa de Acero 2%Cr-1Mo y 3Cr-1Mo para Servicio de Hidrógeno a Alta Temperatura y Alta Presión)</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section II, Part C - Specifications for Welding Rods, Electrodes, and Filler Metals (Código de Calderas y Recipientes a Presión de ASME, Edición 2007, Sección II, Parte C - Especificaciones para Varillas, Electrodos y Metales de Aporte de Soldadura)</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section V - Nondestructive Examination (Código de Calderas y Recipientes a Presión de ASME, Edición 2007, Sección V - Examen No Destructivo)</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section VIII, Division 1 - Rules for Construction of Pressure Vessels (Código de Calderas y Recipientes a Presión de ASME, Edición 2007, Sección VIII, División 1 - Reglas para la Construcción de Recipientes a Presión)</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section IX - Welding and Brazing Qualifications (Código de Calderas y Recipientes a Presión de ASME, Edición 2007, Sección IX - Calificación de Soldadura y Brazing)</li>
            <li>ASTM A380, Standard Practice for Cleaning, Descaling, and Passivation of Stainless Steel Parts, Equipment, and Systems (Práctica Estándar para Limpieza, Decapado y Pasivación de Partes, Equipos y Sistemas de Acero Inoxidable)</li>
            <li>AWS A4.2/A4.2M:2006 (ISO 8249:2000), Standard Practice for Calibrating Magnetic Instruments to Measure the Delta Ferritic Content of Austenitic and Duplex Ferritic-Austenitic Stainless Steel Weld Metal (Práctica Estándar para Calibrar Instrumentos Magnéticos para Medir el Contenido de Ferrita Delta en Metal de Soldadura de Acero Inoxidable Austenítico y Dúplex Ferrítico-Austenítico)</li>
            <li>Repairs of Deaerators (Reparaciones de Desaireadores)</li>
            <li>Baker, K., Jr., R. Sloan, J. R. Sloan, and E. Upitis. Repair of a 2¼Cr-1Mo Petrochemical Reactor WRC Bulletin 412:95-105 (Reparación de un Reactor Petroquímico de 2¼Cr-1Mo Boletín WRC 412:95-105)</li>
            <li>WRC-1992, Constitution Diagram for Stainless Steel Weld Metals; Kotecki, D.J. and Siewert, T.A. (Diagrama Constitucional para Metales de Soldadura de Acero Inoxidable; Kotecki, D.J. y Siewert, T.A.)</li>
        </ul>
    </div>
    `
});