// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos y Tuberías a Presión"
    });
}

// Registrar el capítulo 304
registerChapter('ASMEPCC2', {
    id: 304,
    title: "Flaw Excavation and Weld Repair",
    titleEs: "Excavación de Defectos y Reparación por Soldadura",
    content: `<h3>304 Flaw Excavation and Weld Repair</h3>
    <div class="subsection">
        <h4>304-1 DESCRIPTION</h4>
        <p>Surface flaws see Figure 304-3.1-1, or embedded flaws see [Figure 304-3.1-2, illustration (a)] in base material or welds that exceed the allowances of the applicable construction code or post-construction code can be removed by excavation [see Figure 304-3.1-1, illustration (b); and Figure 304-3.1-2, illustration (b)]. The remaining cavity can be filled with weld filler metal [see Figure 304-3.1-1, illustration (c); and Figure 304-3.1-2, illustration (c)], or left as-is, under conditions described in this Article. Depending on the type and location of the flaw, and the type of base metal or weld material, excavation can be accomplished by mechanical removal methods (grinding, machining, lapping, honing, or flapping), or by thermal removal methods (thermal gouging). Descriptions of these excavation techniques are provided in Mandatory Appendix 304-1.</p>
    </div>
    <div class="subsection">
        <h4>304-2 LIMITATIONS</h4>
        <div class="subsection">
            <h4>304-2.1 Additional Requirements</h4>
            <p>Part 1 of this Standard contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        </div>
        <div class="subsection">
            <h4>304-2.2 Grinding</h4>
            <div class="subsection">
                <h4>304-2.2.1</h4>
                <p>Grinding wheels shall not be forced or overloaded, in order to avoid the safety hazards from wheel failure. Furthermore, overloading the grinding wheel can cause areas of localized high temperature in the substrate being ground, leading in some cases to the formation of brittle untempered martensite, or tight, shallow surface cracks. Abusive grinding and uneven and rough finish can result in reduced fatigue strength or premature failure due to the introduction of large surface residual tensile stresses and stress risers. These problems normally can be avoided by using lighter grinding practices that avoid surface oxidation, evident through discoloration. It may be necessary to preheat some high strength alloy steels prior to grinding. Grinding wheels are manufactured to be used on specific materials (ferritic or austenitic steels, masonry, etc.). Therefore, only grinding wheels specifically designed to work on the material being ground shall be used. Rotary files should be considered for nickel alloys.</p>
            </div>
            <div class="subsection">
                <h4>304-2.2.2</h4>
                <p>Grinding or cutting consumables used on carbon or low alloy steel materials will become impregnated with residues of those materials and become unsuitable for use with austenitic stainless steels. Abrasive cutting or grinding consumables should be segregated for use on carbon and low alloy steels from those used for austenitic stainless steel substrates. Surface contamination of austenitic stainless steel with carbon or low alloy steel residues can result in surface corrosion or pitting of the austenitic stainless steel. To avoid such problems, only grinding wheels designated as austenitic stainless steel grinding wheels shall be used on these materials.</p>
            </div>
            <div class="subsection">
                <h4>304-2.2.3</h4>
                <p>When grinding out stress corrosion cracks in stainless steel, or in the case of steels that have suffered from anodic stress corrosion cracking (such as amine or caustic stress corrosion cracking), it is necessary to qualify and control the amount of heat generated to avoid making the cracks deeper and longer as a result of excessive heat. Steel contaminated with caustic or amines can also recrack during welding repairs or thermal cutting. Appropriate cleaning procedures shall be used prior to excavation or repair.</p>
            </div>
            <div class="subsection">
                <h4>304-2.2.4</h4>
                <p>In tight spaces, burring tools may be used in place of grinding wheels.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-2.3 Machining</h4>
            <p>When cutting fluids are used, care shall be taken to prevent their contact on surfaces where they may be detrimental. Furthermore, chips of the machined metal shall be controlled and kept from entering components where their presence can be detrimental.</p>
        </div>
        <div class="subsection">
            <h4>304-2.4 Honing</h4>
            <p>The honing speeds shall be adjusted as a function of length-to-bore ratio of the component and its material hardness.</p>
        </div>
        <div class="subsection">
            <h4>304-2.5 Flapping</h4>
            <div class="subsection">
                <h4>304-2.5.1</h4>
                <p>Flapping should only be used to smooth or polish a surface. Flapping is unsuitable for removing defects other than superficial surface blemishes.</p>
            </div>
            <div class="subsection">
                <h4>304-2.5.2</h4>
                <p>The abrasive marks of the flapper should be directed perpendicular to the direction of the preceding pass. Marks of the preceding pass should be removed prior to proceeding to the next finer grit. In this way, distortion of the surface will be minimized and smooth surfaces can be obtained.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-2.6 Thermal Gouging</h4>
            <div class="subsection">
                <h4>304-2.6.1</h4>
                <p>When thermal gouging by carbon arc or plasma arc, the very rapid heating to molten temperatures and subsequent quenching to ambient temperature can result in hardened or brittle heat-affected zones. This thermally affected material should be subsequently removed by a mechanical process, such as grinding.</p>
            </div>
            <div class="subsection">
                <h4>304-2.6.2</h4>
                <p>For some materials it may be necessary to preheat the metal prior to arc gouging in order to prevent cracking, in particular materials that are required to be postweld heat treated by the construction code or post-construction code.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-2.7 Generalized Damage</h4>
            <p>This repair technique applies well to local defects. Where damage is extensive, such as general stress corrosion cracking of stainless steel, replacement should be considered.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-3 DESIGN</h4>
        <div class="subsection">
            <h4>304-3.1 Excavation Without Weld Deposit</h4>
            <p>Material or weld flaws open to the surface [Figure 304-3.1-1, illustration (a)] or embedded flaws [Figure 304-3.1-2, illustration (a)] are typically removed by a mechanical (abrasive) method (Figure 304-3.1-3). If the remaining wall thickness of the excavation, with allowance for future corrosion, is greater than the minimum required wall thickness required by the applicable construction code or post-construction code, such as the local thin area rules of API 579-1/ASME FFS-1, then the excavated area may be blended to a 3:1 or smoother profile slope, and left as-is for return to service.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_304-3-1-1.png" class="figure-image">
                <p class="figure-caption">Figure 304-3.1-1—Excavation and Weld Repair of Surface</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_304-3-1-2.png" class="figure-image">
                <p class="figure-caption">Figure 304-3.1-2—Excavation and Weld Repair of Embedded</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_304-3-1-3.png" class="figure-image">
                <p class="figure-caption">Figure 304-3.1-3—Grinding of Weld Flaw</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-3.2 Weld Deposition</h4>
            <p>When the removal of a flaw produces a remaining wall thickness below the limit permitted by the applicable construction code or post-construction code, including allowance for future corrosion, then the cavity shall be repaired by deposition of weld metal [Figure 304-3.1-1, illustration (c) and Figure 304-3.1-2, illustration (c)] or analyzed for fitness-for-service. When the depth of material excavated necessitates a weld repair, the cavity shall be prepared for welding. Either during or following defect removal, the excavation shall be shaped to provide adequate access for the welding operation in order to facilitate proper fusion, and avoid slag entrapment, or lack of penetration. To minimize weld shrinkage stresses, the width of the cavity should only be as wide as needed to ensure defect removal and to facilitate welding as previously described.</p>
        </div>
        <div class="subsection">
            <h4>304-3.3 Mechanical Excavation</h4>
            <p>If the excavation is performed using a thermal removal process (carbon arc or plasma arc gouging), an additional 1.5 mm (1/16 in.) of material shall be removed by a mechanical removal process such as grinding, prior to the final inspection and before welding begins. This is necessary to remove any surface cracks, hardened material, scale, or carbon deposit.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-4 FABRICATION</h4>
        <div class="subsection">
            <h4>304-4.1 Repair Steps</h4>
            <p>The requirements specified in paras. 304-4.1.1 through 304-4.1.5 are generally followed to excavate a flaw.</p>
            <div class="subsection">
                <h4>304-4.1.1</h4>
                <p>Locate and expose the flaw. Characterize the flaw (size, depth, orientation) to the extent possible. If the flaw is a crack, the crack tips may be rounded by drilling to preclude crack from propagating during its excavation.</p>
            </div>
            <div class="subsection">
                <h4>304-4.1.2</h4>
                <p>Remove the flaw by grinding, machining, honing, or thermal gouging. In selecting and applying a removal process, refer to the guidance in sections 304-2 and 304-3.</p>
            </div>
            <div class="subsection">
                <h4>304-4.1.3</h4>
                <p>Verify defect removal by inspecting the cavity using visual examination (VT) and liquid penetrant testing (PT), magnetic particle testing (MT), or eddy current testing (ET) as appropriate. Measure the remaining wall thickness of the excavated cavity using an approved thickness measurement technique. If remaining is greater than the minimum required thickness as determined by a fitness-for-service evaluation, the excavation cavity need not be filled with weld deposit, as provided in para. 304-3.1.</p>
            </div>
            <div class="subsection">
                <h4>304-4.1.4</h4>
                <p>When required by design (section 304-3), repair the cavity by welding according to a qualified welding procedure specification (WPS), using a qualified welder, as required by the applicable construction code or post-construction code.</p>
            </div>
            <div class="subsection">
                <h4>304-4.1.5</h4>
                <p>Perform preheat or postweld heat treatment, when required by the applicable construction code or post-construction code, as indicated by owner-user specification, or as dictated by service conditions.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-4.2 Special Fixtures</h4>
            <p>In some cases, special fixtures may be required to accomplish precision work. In addition, it is often beneficial to develop special gages to monitor the depth of metal removal and to prevent excessive material from being removed. Special contour templates or common carpenter gages may be used and may be integrated into special fixtures.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-5 EXAMINATION</h4>
        <div class="subsection">
            <h4>304-5.1 Critical Service</h4>
            <p>In critical service applications, following a local repair, the final surface and adjacent area shall be examined using VT and PT, MT, or ET, in accordance with the defect acceptance criteria of the applicable construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>304-5.2 Volumetric Examination</h4>
            <p>Volumetric examination (RT or UT) shall be considered where there is a possibility of flaws introduced during repair welding, such as shrinkage cracks from deep weld repairs in thick sections.</p>
        </div>
        <div class="subsection">
            <h4>304-5.3 Additional Examinations</h4>
            <p>Additional examinations shall be performed if required for similar welds by the applicable construction code or post-construction code.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-6 TESTING</h4>
        <div class="subsection">
            <h4>304-6.1 Applicability</h4>
            <p>Generally, and unless specified otherwise in the applicable construction code or post-construction code, weld repairs that have fully penetrated the component wall should be subjected to either leak testing or volumetric examination, or both, following the repair and any postweld heat treatment to verify the integrity of the repair.</p>
        </div>
        <div class="subsection">
            <h4>304-6.2 Test Method</h4>
            <p>If a leak test is performed, it may be hydrostatic, pneumatic, sensitive leak, or in-service as required by the applicable construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>304-6.3 Exemption</h4>
            <p>When the excavation does not fully penetrate the component pressure boundary, leak testing may be waived.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-7 REFERENCES</h4>
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        <ul>
            <li>ANSI B7.1, Safety Requirements for the Use, Care and Protection of Abrasive Wheels</li>
            <li>ANSI B74.2, Specifications for Shapes and Sizes of Grinding Wheels, and for Shapes, Sizes and Identification of Mounted Wheels</li>
            <li>ANSI B74.13, Markings for Identifying Grinding Wheels and Other Bonded Abrasives</li>
            <li>Publisher: American National Standards Institute (ANSI), 25 West 43rd Street, New York, NY 10036 (www.ansi.org)</li>
            <li>API 579-1/ASME FFS-1, Fitness-for-Service</li>
            <li>Publisher: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>Mandatory Appendix 304-1</h4>
        <h5>Metal Removal Process</h5>
        <div class="subsection">
            <h4>304-1-1 FLAPPING</h4>
            <p>Flapping is a metal removal process involving a rotating tool fabricated of abrasive papers. Flapper wheels come in a variety of grit sizes and should be worked from the more coarse grit to the finer grit.</p>
        </div>
        <div class="subsection">
            <h4>304-1-2 GRINDING</h4>
            <p>(a) Grinding is the process of abrading the surface of a material for the purpose of removing portions of the material. The process is used to remove localized cracks, pits, deposits, hardened surfaces, etc. Equipment used for grinding includes pencil or small disc grinders to remove local defects, and large disc or wheel grinders to remove larger defects. The grinding equipment can be electric or air-driven; with wheels of various shapes, sizes, and abrasive characteristics.</p>
            <p>(b) Every grinding wheel has two constituents: the abrasive that does the cutting and the bond that holds the abrasive component. Variations of these components can be selected to give a wide range of grinding characteristics. The three American National Standards Institute (ANSI) standards that provide specifications for grinding wheels are as follows:</p>
            <ul>
                <li>(1) ANSI B74.13, Markings for Identifying Grinding Wheels and Other Bonded Abrasives</li>
                <li>(2) ANSI B74.2, Specifications for Shapes and Sizes of Grinding Wheels, and for Shapes, Sizes and Identification of Mounted Wheels</li>
                <li>(3) ANSI B7.1, Safety Requirements for the Use, Care and Protection of Abrasive Wheels</li>
            </ul>
            <p>(c) Manual grinding is generally divided into one of three categories:</p>
            <ul>
                <li>(1) rough grinding - relatively rapid removal of excess weld metal or base material using coarse abrasives</li>
                <li>(2) polishing and blending - achieving a semi smooth finish, using medium abrasives</li>
                <li>(3) buffing - achieving a lustrous and reflective finish, using fine abrasives usually in a paste or liquid vehicle</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>304-1-3 HONING</h4>
            <p>(a) Honing is an abrasive process that is used to obtain a fine finish on the inside surface of a cylindrical component.</p>
            <p>(b) Honing tools are placed in the bore of the component and a radial load is applied such that the honing stones are in contact with the bore surface. The hone is then rotated in the bore, generating a high-quality surface.</p>
            <p>(c) Honing stones generally are manufactured of aluminum oxide, silicon carbide, or diamond abrasive grits, held together by vitrified clay, resin, or a metal bond. The grain and grade of abrasive to be used is based on the amount of stock to be removed and the surface finish desired. Silicon carbide is generally used for cast iron, while aluminum oxide is generally used on steel. As with grinding discs and lapping compound, the finer the grit, the finer the surface finish.</p>
        </div>
        <div class="subsection">
            <h4>304-1-4 LAPPING</h4>
            <p>(a) Lapping is a polishing technique that can be used to prepare surfaces requiring a very smooth finish. Lapping is not economical for removing deep defects. A general rule of thumb is that lapping methods are suitable for shallow defects less than 0.05 mm (0.002 in.). Defects located greater than this depth should be removed by other methods.</p>
            <p>(b) Lapping machines are available as portable or bench-type systems. In many cases, lapping is performed with special discs or plates made specifically for a given type of application. These plates are normally very thick to maintain dimensional stability. After defect removal, the surface should be lapped to the finish and dimensions specified by the design.</p>
        </div>
        <div class="subsection">
            <h4>304-1-5 MACHINING</h4>
            <p>(a) Machining using portable equipment can provide for defect removal and weld preparation in a single step. Machining with mechanized cutting equipment is used to remove defects with precision. Machining equipment used to remove defects or prepare a surface for repair include boring bars, milling machines, magnetic drills, flange facers (portable lathes), and pipe cutting and beveling machines. Machining has the advantage of cutting and forming the weld preparation with a single piece of equipment while closely controlling dimensional tolerances.</p>
            <p>(b) Portable boring bars have been used where circumferential machining of a bore is required, such as in valve maintenance. Other bars are available with accessories to grind or mill unique geometries, and to drill and tap stud holes.</p>
            <p>(c) Portable milling machines can be used to remove localized materials at a faster rate than machines mounted on the component outer or inner diameters. Small milling machines have been developed to operate in relatively restricted locations.</p>
            <p>(d) Machining generally involves the use of cutting fluids that perform several functions including lubrication, cooling, and chip removal.</p>
        </div>
        <div class="subsection">
            <h4>304-1-6 THERMAL GOUGING</h4>
            <p>(a) In situations where defects are found to be extensive and where accuracy is not critical, thermal gouging (carbon arc gouging or plasma arc gouging) can be used effectively.</p>
            <p>(b) Thermal gouging techniques are thermal removal processes that involve localized melting of the metal, which is quickly swept away by the force of high velocity air or gas jets.</p>
        </div>
        <div class="subsection">
            <h4>304-1-7 BOAT SAMPLE CUTTING</h4>
            <p>(a) Boat samples are metal samples in the shape of a boat hull that are cut out from base metal, weldments, or weld heat-affected zones (Figure 304-I-7-1). The process can be used for removal of weld defects, but is more commonly used for obtaining samples of base materials or welds for metallurgical or mechanical testing.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_304-I-7-1.png" class="figure-image">
                <p class="figure-caption">Figure 304-I-7-1—Boat Sample</p>
            </div>
            
            <p>(b) Boat sample cutters, sometimes referred to as weld probers or trepanning machines, are mechanical devices designed to remove a portion of a weld or metal plate by saw cutting from the plate surface. The machine is a saw with a dished shape blade, capable of excavating and removing a boat-shaped specimen from a flat surface in any position.</p>
            <p>(c) Boat sample cutters can be air powered or electric motor driven. They are portable devices that are easily mounted on the surface of the material to be excavated by means of four anchoring bolts welded to the surface. Shim spacers are used to adjust the width and depth of cut by controlling the space between the saw mounting frame and the surface of the plate.</p>
            <p>(d) Once securely mounted on the anchor bolts, the cutting process begins by making a single cut at the edge of the material to be excavated. The curved blade is fed into the material until the desired depth is achieved and the saw circumference is at right angles to the joint. The blade is then retracted, the saw rotated 180 deg and a second cut is made. The two cuts meet automatically in the same plane and the excavation is complete.</p>
            <p>(e) Boat samples can be cut either longitudinal or transverse with respect to the weld joint. They are boat shaped and the cut sides have a spherical curvature. The size varies in proportion to the thickness of the plate being cut; however, specimens can range from a small size of 1/8 in. depth x 2% in. length x % in. width to a large size of 1 in. depth x 4% in. length x 11/2 in. width. Larger specimens can be excavated with specially designed equipment.</p>
            <p>(f) The excavated boat samples are large enough to allow for various mechanical testing processes. Cross sections of the "boats" can be used for hardness testing or metallographic inspection. Full-length specimens can be machined for tensile testing, bend testing, or Charpy V-notch impact testing.</p>
            <p>(g) Once the boat sample has been removed, the cutter can be detached from its mounted position and the anchor bolts can be removed from the plate surface. The cavity left by the removal of the excavated boat sample is very conducive to repair welding. The tapered nature of the cavity ends and the sloping curvature of the cavity walls allow complete and easy access for most welding processes.</p>
        </div>
    </div>
    `,
    contentEs: `<h3>304 Excavación de Defectos y Reparación por Soldadura</h3>
    <div class="subsection">
        <h4>304-1 DESCRIPCIÓN</h4>
        <p>Los defectos superficiales ver Figura 304-3.1-1, o defectos incorporados ver [Figura 304-3.1-2, ilustración (a)] en el material base o soldaduras que excedan las tolerancias del código de construcción aplicable o código de construcción posterior pueden ser eliminados mediante excavación [ver Figura 304-3.1-1, ilustración (b); y Figura 304-3.1-2, ilustración (b)]. La cavidad restante puede ser rellenada con metal de aporte de soldadura [ver Figura 304-3.1-1, ilustración (c); y Figura 304-3.1-2, ilustración (c)], o dejarse como está, bajo las condiciones descritas en este Artículo. Dependiendo del tipo y ubicación del defecto, y el tipo de metal base o material de soldadura, la excavación puede realizarse mediante métodos de remoción mecánica (esmerilado, mecanizado, lapeado, honing o flapping), o por métodos de remoción térmica (ranurado térmico). Las descripciones de estas técnicas de excavación se proporcionan en el Apéndice Obligatorio 304-1.</p>
    </div>
    <div class="subsection">
        <h4>304-2 LIMITACIONES</h4>
        <div class="subsection">
            <h4>304-2.1 Requisitos Adicionales</h4>
            <p>La Parte 1 de esta Norma contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse en conjunción con la Parte 1.</p>
        </div>
        <div class="subsection">
            <h4>304-2.2 Esmerilado</h4>
            <div class="subsection">
                <h4>304-2.2.1</h4>
                <p>Las ruedas de esmeril no deberán ser forzadas o sobrecargadas, con el fin de evitar los peligros de seguridad por fallo de la rueda. Además, la sobrecarga de la rueda de esmeril puede causar áreas de alta temperatura localizada en el sustrato que se está esmerilando, llevando en algunos casos a la formación de martensita frágil no revenida, o grietas superficiales estrechas y poco profundas. El esmerilado abusivo y un acabado desigual y rugoso pueden resultar en una reducción de la resistencia a la fatiga o falla prematura debido a la introducción de grandes tensiones residuales superficiales de tracción y concentradores de tensiones. Estos problemas normalmente pueden evitarse utilizando prácticas de esmerilado más ligeras que eviten la oxidación superficial, evidente mediante decoloración. Puede ser necesario precalentar algunos aceros de alta resistencia aleada antes del esmerilado. Las ruedas de esmeril se fabrican para ser utilizadas en materiales específicos (aceros ferríticos o austeníticos, albañilería, etc.). Por lo tanto, solo deberán utilizarse ruedas de esmeril diseñadas específicamente para trabajar en el material que se está esmerilando. Se deberán considerar limas rotativas para aleaciones de níquel.</p>
            </div>
            <div class="subsection">
                <h4>304-2.2.2</h4>
                <p>Los consumibles de esmerilado o corte utilizados en materiales de acero al carbono o baja aleación se impregnarán con residuos de esos materiales y se volverán inadecuados para su uso con aceros inoxidables austeníticos. Los consumibles abrasivos de corte o esmerilado deberán segregarse para su uso en aceros al carbono y baja aleación de los utilizados para sustratos de acero inoxidable austenítico. La contaminación superficial del acero inoxidable austenítico con residuos de acero al carbono o baja aleación puede resultar en corrosión superficial o picaduras del acero inoxidable austenítico. Para evitar tales problemas, solo deberán utilizarse ruedas de esmeril designadas como ruedas de esmeril para acero inoxidable austenítico en estos materiales.</p>
            </div>
            <div class="subsection">
                <h4>304-2.2.3</h4>
                <p>Al esmerilar grietas de corrosión bajo tensión en acero inoxidable, o en el caso de aceros que han sufrido corrosión bajo tensión anódica (como corrosión bajo tensión por aminas o cáustica), es necesario calificar y controlar la cantidad de calor generado para evitar que las grietas se vuelvan más profundas y largas como resultado del calor excesivo. El acero contaminado con cáustico o aminas también puede volver a agrietarse durante las reparaciones por soldadura o corte térmico. Deberán utilizarse procedimientos de limpieza adecuados antes de la excavación o reparación.</p>
            </div>
            <div class="subsection">
                <h4>304-2.2.4</h4>
                <p>En espacios reducidos, pueden utilizarse herramientas de desbarbado en lugar de ruedas de esmeril.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-2.3 Mecanizado</h4>
            <p>Cuando se utilizan fluidos de corte, deberá tenerse cuidado de evitar su contacto en superficies donde puedan ser perjudiciales. Además, las virutas del metal mecanizado deberán controlarse y evitarse que entren en componentes donde su presencia pueda ser perjudicial.</p>
        </div>
        <div class="subsection">
            <h4>304-2.4 Honing</h4>
            <p>Las velocidades de honing deberán ajustarse en función de la relación longitud-diámetro del componente y su dureza del material.</p>
        </div>
        <div class="subsection">
            <h4>304-2.5 Flapping</h4>
            <div class="subsection">
                <h4>304-2.5.1</h4>
                <p>El flapping solo debe utilizarse para alisar o pulir una superficie. El flapping no es adecuado para eliminar defectos distintos de las imperfecciones superficiales superficiales.</p>
            </div>
            <div class="subsection">
                <h4>304-2.5.2</h4>
                <p>Las marcas abrasivas del flapper deben dirigirse perpendicularmente a la dirección del pase anterior. Las marcas del pase anterior deben eliminarse antes de pasar al siguiente grano más fino. De esta manera, se minimizará la distorsión de la superficie y podrán obtenerse superficies lisas.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-2.6 Ranurado Térmico</h4>
            <div class="subsection">
                <h4>304-2.6.1</h4>
                <p>Cuando se realiza ranurado térmico por arco de carbono o arco de plasma, el calentamiento muy rápido a temperaturas de fusión y el posterior enfriamiento a temperatura ambiente pueden resultar en zonas afectadas por el calor endurecidas o frágiles. Este material térmicamente afectado deberá ser eliminado posteriormente mediante un proceso mecánico, como el esmerilado.</p>
            </div>
            <div class="subsection">
                <h4>304-2.6.2</h4>
                <p>Para algunos materiales puede ser necesario precalentar el metal antes del ranurado por arco para evitar la formación de grietas, en particular materiales que requieran ser tratados térmicamente después de la soldadura según el código de construcción o código de construcción posterior.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-2.7 Daño Generalizado</h4>
            <p>Esta técnica de reparación se aplica bien a defectos locales. Cuando el daño es extenso, como la corrosión bajo tensión generalizada del acero inoxidable, deberá considerarse el reemplazo.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-3 DISEÑO</h4>
        <div class="subsection">
            <h4>304-3.1 Excavación Sin Depósito de Soldadura</h4>
            <p>Los defectos del material o la soldadura abiertos a la superficie [Figura 304-3.1-1, ilustración (a)] o defectos incorporados [Figura 304-3.1-2, ilustración (a)] típicamente se eliminan mediante un método mecánico (abrasivo) (Figura 304-3.1-3). Si el espesor de pared restante de la excavación, con la tolerancia para corrosión futura, es mayor que el espesor de pared mínimo requerido por el código de construcción aplicable o código de construcción posterior, como las reglas de área delgada local de API 579-1/ASME FFS-1, entonces el área excavada puede ser mezclada con una pendiente de perfil de 3:1 o más suave, y dejarse como está para su retorno al servicio.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_304-3-1-1.png" class="figure-image">
                <p class="figure-caption">Figura 304-3.1-1—Excavación y Reparación por Soldadura de Superficie</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_304-3-1-2.png" class="figure-image">
                <p class="figure-caption">Figura 304-3.1-2—Excavación y Reparación por Soldadura de Incorporado</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_304-3-1-3.png" class="figure-image">
                <p class="figure-caption">Figura 304-3.1-3—Esmerilado de Defecto de Soldadura</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-3.2 Depósito de Soldadura</h4>
            <p>Cuando la eliminación de un defecto produce un espesor de pared restante por debajo del límite permitido por el código de construcción aplicable o código de construcción posterior, incluyendo la tolerancia para corrosión futura, entonces la cavidad deberá ser reparada mediante depósito de metal de soldadura [Figura 304-3.1-1, ilustración (c) y Figura 304-3.1-2, ilustración (c)] o analizada para aptitud al servicio. Cuando la profundidad del material excavado necesite una reparación por soldadura, la cavidad deberá prepararse para soldar. Durante o después de la eliminación del defecto, la excavación deberá ser conformada para proporcionar acceso adecuado para la operación de soldadura con el fin de facilitar una fusión adecuada, y evitar la atrapamiento de escoria o falta de penetración. Para minimizar las tensiones de contracción de la soldadura, el ancho de la cavidad solo debe ser tan ancho como sea necesario para garantizar la eliminación del defecto y facilitar la soldadura como se describió anteriormente.</p>
        </div>
        <div class="subsection">
            <h4>304-3.3 Excavación Mecánica</h4>
            <p>Si la excavación se realiza utilizando un proceso de remoción térmica (ranurado por arco de carbono o arco de plasma), se deberá eliminar un adicional de 1.5 mm (1/16 pulg.) de material mediante un proceso de remoción mecánica como el esmerilado, antes de la inspección final y antes de que comience la soldadura. Esto es necesario para eliminar cualquier grieta superficial, material endurecido, escama o depósito de carbono.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-4 FABRICACIÓN</h4>
        <div class="subsection">
            <h4>304-4.1 Pasos de Reparación</h4>
            <p>Los requisitos especificados en los párrafos 304-4.1.1 a 304-4.1.5 generalmente se siguen para excavar un defecto.</p>
            <div class="subsection">
                <h4>304-4.1.1</h4>
                <p>Localizar y exponer el defecto. Caracterizar el defecto (tamaño, profundidad, orientación) en la medida de lo posible. Si el defecto es una grieta, las puntas de la grieta pueden ser redondeadas mediante perforación para evitar que la grieta se propague durante su excavación.</p>
            </div>
            <div class="subsection">
                <h4>304-4.1.2</h4>
                <p>Eliminar el defecto mediante esmerilado, mecanizado, honing o ranurado térmico. Al seleccionar y aplicar un proceso de eliminación, consultar las orientaciones en las secciones 304-2 y 304-3.</p>
            </div>
            <div class="subsection">
                <h4>304-4.1.3</h4>
                <p>Verificar la eliminación del defecto inspeccionando la cavidad mediante examen visual (VT) y ensayo de líquidos penetrantes (PT), ensayo de partículas magnéticas (MT) o ensayo de corrientes de Foucault (ET) según corresponda. Medir el espesor de pared restante de la cavidad excavada utilizando una técnica de medición de espesor aprobada. Si el espesor restante es mayor que el espesor mínimo requerido según lo determinado por una evaluación de aptitud al servicio, la cavidad de excavación no necesita ser rellenada con depósito de soldadura, según lo previsto en el párrafo 304-3.1.</p>
            </div>
            <div class="subsection">
                <h4>304-4.1.4</h4>
                <p>Cuando sea requerido por el diseño (sección 304-3), reparar la cavidad mediante soldadura según una especificación de procedimiento de soldadura calificada (WPS), utilizando un soldador calificado, según lo requerido por el código de construcción aplicable o código de construcción posterior.</p>
            </div>
            <div class="subsection">
                <h4>304-4.1.5</h4>
                <p>Realizar precalentamiento o tratamiento térmico posterior a la soldadura, cuando sea requerido por el código de construcción aplicable o código de construcción posterior, según lo indicado por la especificación del propietario-usuario, o según lo dictado por las condiciones de servicio.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>304-4.2 Dispositivos Especiales</h4>
            <p>En algunos casos, pueden ser necesarios dispositivos especiales para realizar trabajos de precisión. Además, a menudo es beneficioso desarrollar calibres especiales para monitorear la profundidad de eliminación de metal y para evitar que se elimine material excesivo. Pueden utilizarse plantillas de contorno especiales o calibres de carpintero comunes y pueden integrarse en dispositivos especiales.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-5 EXAMEN</h4>
        <div class="subsection">
            <h4>304-5.1 Servicio Crítico</h4>
            <p>En aplicaciones de servicio crítico, después de una reparación local, la superficie final y el área adyacente deberán ser examinadas utilizando VT y PT, MT o ET, de acuerdo con los criterios de aceptación de defectos del código de construcción aplicable o código de construcción posterior.</p>
        </div>
        <div class="subsection">
            <h4>304-5.2 Examen Volumétrico</h4>
            <p>Deberá considerarse el examen volumétrico (RT o UT) cuando haya posibilidad de defectos introducidos durante la reparación por soldadura, como grietas de contracción por reparaciones de soldadura profundas en secciones gruesas.</p>
        </div>
        <div class="subsection">
            <h4>304-5.3 Exámenes Adicionales</h4>
            <p>Deberán realizarse exámenes adicionales si son requeridos para soldaduras similares por el código de construcción aplicable o código de construcción posterior.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-6 PRUEBAS</h4>
        <div class="subsection">
            <h4>304-6.1 Aplicabilidad</h4>
            <p>Generalmente, y a menos que se especifique lo contrario en el código de construcción aplicable o código de construcción posterior, las reparaciones por soldadura que han penetrado completamente la pared del componente deberán someterse a pruebas de fuga o examen volumétrico, o ambos, después de la reparación y cualquier tratamiento térmico posterior a la soldadura para verificar la integridad de la reparación.</p>
        </div>
        <div class="subsection">
            <h4>304-6.2 Método de Prueba</h4>
            <p>Si se realiza una prueba de fuga, puede ser hidrostática, neumática, de fuga sensible o en servicio según lo requerido por el código de construcción aplicable o código de construcción posterior.</p>
        </div>
        <div class="subsection">
            <h4>304-6.3 Exención</h4>
            <p>Cuando la excavación no penetra completamente el límite de presión del componente, se podrá eximir la prueba de fuga.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>304-7 REFERENCIAS</h4>
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        <ul>
            <li>ANSI B7.1, Requisitos de Seguridad para el Uso, Cuidado y Protección de Ruedas Abrasivas</li>
            <li>ANSI B74.2, Especificaciones para Formas y Tamaños de Ruedas de Esmeril, y para Formas, Tamaños e Identificación de Ruedas Montadas</li>
            <li>ANSI B74.13, Marcas para Identificar Ruedas de Esmeril y otros Abrasivos Aglomerados</li>
            <li>Editor: American National Standards Institute (ANSI), 25 West 43rd Street, New York, NY 10036 (www.ansi.org)</li>
            <li>API 579-1/ASME FFS-1, Aptitud al Servicio</li>
            <li>Editor: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>Apéndice Obligatorio 304-1</h4>
        <h5>Proceso de Remoción de Metal</h5>
        <div class="subsection">
            <h4>304-1-1 FLAPPING</h4>
            <p>El flapping es un proceso de remoción de metal que implica una herramienta rotativa fabricada de papeles abrasivos. Las ruedas de flapping vienen en una variedad de tamaños de grano y deben trabajarse desde el grano más grueso al más fino.</p>
        </div>
        <div class="subsection">
            <h4>304-1-2 ESMERILADO</h4>
            <p>(a) El esmerilado es el proceso de abrasionar la superficie de un material con el propósito de eliminar porciones del material. El proceso se utiliza para eliminar grietas localizadas, picaduras, depósitos, superficies endurecidas, etc. El equipo utilizado para el esmerilado incluye esmeriladores de lápiz o pequeños discos para eliminar defectos locales, y grandes discos o ruedas de esmeril para eliminar defectos más grandes. El equipo de esmerilado puede ser eléctrico o accionado por aire; con ruedas de varias formas, tamaños y características abrasivas.</p>
            <p>(b) Cada rueda de esmeril tiene dos componentes: el abrasivo que realiza el corte y el aglutinante que mantiene el componente abrasivo. Las variaciones de estos componentes pueden seleccionarse para dar una amplia gama de características de esmerilado. Las tres normas del American National Standards Institute (ANSI) que proporcionan especificaciones para las ruedas de esmeril son las siguientes:</p>
            <ul>
                <li>(1) ANSI B74.13, Marcas para Identificar Ruedas de Esmeril y otros Abrasivos Aglomerados</li>
                <li>(2) ANSI B74.2, Especificaciones para Formas y Tamaños de Ruedas de Esmeril, y para Formas, Tamaños e Identificación de Ruedas Montadas</li>
                <li>(3) ANSI B7.1, Requisitos de Seguridad para el Uso, Cuidado y Protección de Ruedas Abrasivas</li>
            </ul>
            <p>(c) El esmerilado manual generalmente se divide en una de tres categorías:</p>
            <ul>
                <li>(1) esmerilado grueso - eliminación relativamente rápida de exceso de metal de soldadura o material base utilizando abrasivos gruesos</li>
                <li>(2) pulido y mezcla - logrando un acabado semi liso, utilizando abrasivos medianos</li>
                <li>(3) abrillantado - logrando un acabado lustroso y reflectante, utilizando abrasivos finos generalmente en un vehículo de pasta o líquido</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>304-1-3 HONING</h4>
            <p>(a) El honing es un proceso abrasivo que se utiliza para obtener un acabado fino en la superficie interior de un componente cilíndrico.</p>
            <p>(b) Las herramientas de honing se colocan en el orificio del componente y se aplica una carga radial de manera que las piedras de honing estén en contacto con la superficie del orificio. El hone se hace girar en el orificio, generando una superficie de alta calidad.</p>
            <p>(c) Las piedras de honing generalmente se fabrican de abrasivos de óxido de aluminio, carburo de silicio o diamante, unidos por arcilla vitrificada, resina o un aglutinante metálico. El grano y grado de abrasivo a utilizar se basa en la cantidad de material a eliminar y el acabado superficial deseado. El carburo de silicio se utiliza generalmente para fundición, mientras que el óxido de aluminio se utiliza generalmente en acero. Al igual que con los discos de esmeril y el compuesto de lapeado, cuanto más fino el grano, más fino el acabado superficial.</p>
        </div>
        <div class="subsection">
            <h4>304-1-4 LAPEADO</h4>
            <p>(a) El lapeado es una técnica de pulido que puede utilizarse para preparar superficies que requieren un acabado muy liso. El lapeado no es económico para eliminar defectos profundos. Una regla general es que los métodos de lapeado son adecuados para defectos poco profundos de menos de 0.05 mm (0.002 pulg.). Los defectos ubicados a mayor profundidad deberán ser eliminados por otros métodos.</p>
            <p>(b) Las máquinas de lapeado están disponibles como sistemas portátiles o de banco. En muchos casos, el lapeado se realiza con discos o placas especiales hechos específicamente para un tipo dado de aplicación. Estas placas son normalmente muy gruesas para mantener la estabilidad dimensional. Después de la eliminación del defecto, la superficie deberá ser lapeada al acabado y dimensiones especificados por el diseño.</p>
        </div>
        <div class="subsection">
            <h4>304-1-5 MECANIZADO</h4>
            <p>(a) El mecanizado utilizando equipo portátil puede proporcionar la eliminación de defectos y la preparación de soldadura en un solo paso. El mecanizado con equipo de corte mecanizado se utiliza para eliminar defectos con precisión. El equipo de mecanizado utilizado para eliminar defectos o preparar una superficie para reparación incluye barrenas, fresadoras, taladros magnéticos, fresadoras de bridas (tornos portátiles), y máquinas de corte y biselado de tuberías. El mecanizado tiene la ventaja de cortar y formar la preparación de soldadura con una sola pieza de equipo mientras controla estrechamente las tolerancias dimensionales.</p>
            <p>(b) Las barrenas portátiles se han utilizado donde se requiere mecanizado circunferencial de un orificio, como en el mantenimiento de válvulas. Otras barrenas están disponibles con accesorios para esmerilar o fresar geometrías únicas, y para perforar y roscar orificios para espárragos.</p>
            <p>(c) Las fresadoras portátiles pueden utilizarse para eliminar materiales localizados a una velocidad más rápida que las máquinas montadas en los diámetros exteriores o interiores del componente. Se han desarrollado pequeñas fresadoras para operar en ubicaciones relativamente restringidas.</p>
            <p>(d) El mecanizado generalmente implica el uso de fluidos de corte que realizan varias funciones incluyendo lubricación, enfriamiento y eliminación de virutas.</p>
        </div>
        <div class="subsection">
            <h4>304-1-6 RANURADO TÉRMICO</h4>
            <p>(a) En situaciones donde los defectos resultan ser extensos y donde la precisión no es crítica, el ranurado térmico (ranurado por arco de carbono o ranurado por arco de plasma) puede utilizarse eficazmente.</p>
            <p>(b) Las técnicas de ranurado térmico son procesos de remoción térmica que implican la fusión localizada del metal, que es rápidamente barrido por la fuerza de chorros de aire o gas a alta velocidad.</p>
        </div>
        <div class="subsection">
            <h4>304-1-7 CORTE DE MUESTRAS DE BARCO</h4>
            <p>(a) Las muestras de barco son muestras de metal en forma de casco de barco que se cortan del metal base, soldaduras o zonas afectadas por el calor de la soldadura (Figura 304-I-7-1). El proceso puede utilizarse para la eliminación de defectos de soldadura, pero se utiliza más comúnmente para obtener muestras de materiales base o soldaduras para pruebas metalográficas o mecánicas.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_304-I-7-1.png" class="figure-image">
                <p class="figure-caption">Figura 304-I-7-1—Muestra de Barco</p>
            </div>
            
            <p>(b) Los cortadores de muestras de barco, a veces referidos como sondas de soldadura o máquinas de trepanación, son dispositivos mecánicos diseñados para eliminar una porción de una soldadura o placa de metal mediante corte con sierra desde la superficie de la placa. La máquina es una sierra con una hoja de forma cóncava, capaz de excavar y eliminar una espécimen en forma de barco desde una superficie plana en cualquier posición.</p>
            <p>(c) Los cortadores de muestras de barco pueden ser accionados por aire o motor eléctrico. Son dispositivos portátiles que se montan fácilmente en la superficie del material a excavar mediante cuatro pernos de anclaje soldados a la superficie. Se utilizan separadores de calibre para ajustar el ancho y profundidad de corte controlando el espacio entre el marco de montaje de la sierra y la superficie de la placa.</p>
            <p>(d) Una vez montado firmemente en los pernos de anclaje, el proceso de corte comienza haciendo un solo corte en el borde del material a excavar. La hoja curva se introduce en el material hasta que se alcanza la profundidad deseada y la circunferencia de la sierra está en ángulo recto con la junta. Luego se retrae la hoja, se gira la sierra 180 grados y se hace un segundo corte. Los dos cortes se encuentran automáticamente en el mismo plano y la excavación está completa.</p>
            <p>(e) Las muestras de barco pueden cortarse longitudinal o transversalmente con respecto a la junta de soldadura. Tienen forma de barco y los lados cortados tienen una curvatura esférica. El tamaño varía en proporción al espesor de la placa que se está cortando; sin embargo, las muestras pueden variar desde un tamaño pequeño de 1/8 pulg. de profundidad x 2% pulg. de longitud x % pulg. de ancho hasta un tamaño grande de 1 pulg. de profundidad x 4% pulg. de longitud x 11/2 pulg. de ancho. Se pueden excavar muestras más grandes con equipo especialmente diseñado.</p>
            <p>(f) Las muestras de barco excavadas son lo suficientemente grandes para permitir varios procesos de prueba mecánica. Las secciones transversales de los "barcos" pueden utilizarse para pruebas de dureza o inspección metalográfica. Las muestras de longitud completa pueden mecanizarse para pruebas de tracción, pruebas de doblado o pruebas de impacto Charpy con muesca en V.</p>
            <p>(g) Una vez que se ha eliminado la muestra de barco, el cortador puede desacoplarse de su posición montada y los pernos de anclaje pueden eliminarse de la superficie de la placa. La cavidad dejada por la eliminación de la muestra de barco excavada es muy propicia para la reparación por soldadura. La naturaleza cónica de los extremos de la cavidad y la curvatura inclinada de las paredes de la cavidad permiten un acceso completo y fácil para la mayoría de los procesos de soldadura.</p>
        </div>
    </div>
    `
});