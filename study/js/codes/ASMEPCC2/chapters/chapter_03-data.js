// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos y Tuberías a Presión"
    });
}

// Registrar el capítulo 206
registerChapter('ASMEPCC2', {
    id: 206,
    title: "Full Encirclement Steel Reinforcing Sleeves for Piping",
    titleEs: "Mangas de Refuerzo de Acero de Circunferencia Completa para Tuberías",
    content: `<h3>206 Full Encirclement Steel Reinforcing Sleeves for Piping</h3>
    <div class="subsection">
        <h4>206-1 DESCRIPTION</h4>
        <p>This Article applies to the design and installation of full encirclement welded steel sleeves for piping or pipelines. The sleeves can be designed for non-pressure-containing reinforcement or for pressure-containing reinforcement. Full encirclement reinforcement sleeves have proven effective in the repair of a wide variety of internal and external defects.</p>
        <div class="subsection">
            <h4>206-1.1 Full Encirclement Steel Sleeve</h4>
            <p>Full encirclement steel sleeves consist of a cylindrical shell placed around the pipe section to be repaired and welded along the two longitudinal seams, as illustrated in Figures 206-1.1.1-1 and 206-1.1.2-1. There are two types of sleeves, herein referred to as "Type A" and "Type B." Sleeves can be made from pipe or rolled plate material.</p>
            <div class="subsection">
                <h4>206-1.1.1 Type A Sleeve</h4>
                <p>Type A sleeve ends are not welded circumferentially to the carrier pipe, as shown in Figure 206-1.1.1-1. The Type A sleeve is not capable of containing internal pressure but functions as reinforcement for a defective area. It is only used for the repair of defects that are not leaking and that are not expected to grow during service, or when the damage mechanism and growth rate are fully understood.</p>
                
                <div class="figure-container">
                    <img src="images/asme_pcc2_figure_206-1.1.1-1.png" class="figure-image">
                    <p class="figure-caption">Figure 206-1.1.1-1—Type A Sleeve</p>
                </div>
            </div>
            <div class="subsection">
                <h4>206-1.1.2 Type B Sleeve</h4>
                <p>Type B sleeve ends are welded circumferentially to the carrier pipe, as shown in Figure 206-1.1.2-1. A Type B sleeve is capable of containing internal pressure because the ends are fillet welded to the carrier pipe. Type B sleeves can be used to repair leaking defects or defects that may eventually leak and to strengthen pipe having defects that reduce the axial load carrying capability of the pipe.</p>
                
                <div class="figure-container">
                    <img src="images/asme_pcc2_figure_206-1.1.2-1.png" class="figure-image">
                    <p class="figure-caption">Figure 206-1.1.2-1—Type B Sleeve</p>
                </div>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>206-2 CAUTIONS AND LIMITATIONS</h4>
        <div class="subsection">
            <h4>206-2.1 Additional Requirements</h4>
            <p>Part 1 of this Standard contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        </div>
        <div class="subsection">
            <h4>206-2.2 Regulations</h4>
            <p>The piping and pipeline regulations regarding repair and piping and pipeline design code restrictions regarding repair shall be followed.</p>
        </div>
        <div class="subsection">
            <h4>206-2.3 Leaking Defects</h4>
            <p>For Type B sleeves with leaking defects, special considerations shall be taken to isolate the leak prior to welding.</p>
        </div>
        <div class="subsection">
            <h4>206-2.4 Cyclic Operation</h4>
            <p>If a sleeve repair is applied to a system subjected to frequent pressure cycles, a fatigue evaluation of the component should be in accordance with para. 206-3.8.</p>
            <p>When a Type B sleeve is subject to cyclic through-wall thermal gradients, a fatigue evaluation of the sleeve-to-pipe fillet welds should be conducted to establish the service life of the repair, in accordance with para. 206-3.8.</p>
        </div>
        <div class="subsection">
            <h4>206-2.5 Circumferential Defects</h4>
            <p>Type A sleeves may not be appropriate for the repair of circumferentially oriented defects because they will not resist axial loads on the pipe.</p>
        </div>
        <div class="subsection">
            <h4>206-2.6 Undersleeve Corrosion</h4>
            <p>For Type A sleeves, the potential for corrosion between the pipe and sleeve due to moisture ingress from the unwelded ends shall be assessed, and if required, mitigations shall be put in place. Such measures may include the use of a sealant or coating suitable for the operating environment.</p>
        </div>
        <div class="subsection">
            <h4>206-2.7 Weld Reinforcement</h4>
            <p>The presence of a girth weld or longitudinal seam weld having a prominent weld reinforcement may interfere with achieving a tight fit-up of the sleeve. If it is necessary to remove the weld reinforcement by grinding to achieve a good fit, the weld shall be examined by RT or UT to ensure the weld that is being ground is free from indications. This examination is particularly important when the line is in service. Alternatively, sleeves may be fabricated with a circumferential bulge to bridge the weld, as shown in Figure 206-2.7-1. The weld root gap shall be uniform along length, including bulge.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_206-2.7-1.png" class="figure-image">
                <p class="figure-caption">Figure 206-2.7-1—Welded Split Sleeve for Use Over a Girth Weld</p>
            </div>
        </div>
        <div class="subsection">
            <h4>206-2.8 Sleeve Size Requirements</h4>
            <p>Areas that do not meet Fitness For Service (FFS) criteria should be fully covered by the repair sleeve. Type B sleeve circumferential welds shall be located where burn through is not a concern based upon the thickness, welding procedure to be followed, and operating conditions of the piping or pipeline.</p>
        </div>
        <div class="subsection">
            <h4>206-2.9 Welding</h4>
            <p>Welds shall be installed by qualified welders in accordance with qualified procedures reflecting actual field conditions.</p>
        </div>
        <div class="subsection">
            <h4>206-2.10 Filler Material</h4>
            <p>If a hardenable filler material is used between the sleeve and carrier pipe, it shall be compatible with the intended application. The material shall be suitable for the service temperature and, for Type B sleeves, compatible with the fluid. Filler material may be applied prior to sleeve installation or pumped in between the sleeve and carrier pipe annulus after the sleeve is in place. If the filler material is pumped, the possibility of inward collapse of the sleeved component due to the annulus pressure of the pumped filler material shall be considered. Consideration should be given to off-gassing of filler material as they cure.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>206-3 DESIGN</h4>
        <div class="subsection">
            <h4>206-3.1 Type A Sleeves</h4>
            <p>Type A sleeves shall be fabricated or manufactured from steel meeting the material specifications of the construction code, and should have a thickness equal to at least two-thirds the thickness of the carrier pipe. The carrier pipe longitudinal stresses shall meet the requirements of the applicable construction code.</p>
        </div>
        <div class="subsection">
            <h4>206-3.2 Type B Sleeves</h4>
            <p>Type B pressure containing sleeves shall have a wall thickness equal to or greater than the wall thickness required for the maximum allowable design pressure or, if required by the engineering design, the full equivalent strength of the pipe being repaired. For tight-fitting sleeves, the engineering design shall be based on the nominal wall thickness of the carrier pipe. A longitudinal weld joint efficiency factor of 0.80 shall be applied when calculating the required thickness unless the weld is 100% examined by ultrasonic examination, in which case a joint efficiency factor of 1.00 may be applied. If the Type B sleeve is intended to provide axial reinforcement, such as at a defective girth weld, it shall be designed to carry axial and bending loads acting at the sleeve location.</p>
        </div>
        <div class="subsection">
            <h4>206-3.3 Pressure Design</h4>
            <p>The pressure design calculations of the applicable construction code shall apply for calculating the required sleeve thickness. Sleeve material and allowable design stress shall comply with the applicable construction code requirements. Corrosion allowances applied shall be in accordance with the engineering design.</p>
        </div>
        <div class="subsection">
            <h4>206-3.4 Sleeve Dimensions</h4>
            <p>Types A and B sleeves shall be at least 100 mm (4 in.) long and extend beyond the defect by at least 50 mm (2 in.).</p>
        </div>
        <div class="subsection">
            <h4>206-3.5 Type B Sleeve Fillet Welds</h4>
            <p>The fillet weld leg size for circumferential end welds for a Type B sleeve shall be as follows:</p>
            <p>(a) A complete fillet weld if the sleeve thickness is less than or equal to 1.4 times the nominal carrier pipe wall thickness, as shown in Figure 206-3.5-1.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_206-3.5-1.png" class="figure-image">
                <p class="figure-caption">Figure 206-3.5-1—Type B Sleeve Fillet Weld Size for Sleeve Thickness Less Than or Equal to 1.4 Times the Carrier Pipe Thickness</p>
            </div>
            
            <p>(b) If a Type B sleeve is thicker than 1.4 times the nominal carrier pipe wall thickness, the circumferential ends of the Type B sleeve may be left as is or chamfered as shown in Figure 206-3.5-2.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_206-3.5-2.png" class="figure-image">
                <p class="figure-caption">Figure 206-3.5-2—Type B Sleeve Fillet Weld Size for Sleeve Thickness Greater Than 1.4 Times the Carrier Pipe Thickness</p>
            </div>
            
            <p>The toe of the weld on the carrier pipe shall smoothly transition from the carrier pipe to weld in order to minimize the level of stress intensification. The included angle between the weld toe and the carrier pipe shall not create a sharp notch, and defects such as undercut are not allowed.</p>
        </div>
        <div class="subsection">
            <h4>206-3.6 External Pressure</h4>
            <p>External pressure loading of the pipe within Type B sleeves should be considered by the engineering design. Fitting the sleeve as tightly as possible to ensure load transfer from the pipe to the sleeve should minimize the annulus volume. If this is not possible, the annulus volume should be filled with hardenable filler material (see para. 206-2.10) or the pressure should be balanced by hot tapping the pipe under the sleeve. A vent or drain may be provided in the design. If the annulus is to be left unfilled, it should be verified that the stagnant fluid between the sleeve and the carrier pipe will not cause corrosion.</p>
        </div>
        <div class="subsection">
            <h4>206-3.7 External Damage</h4>
            <p>If external damage is repaired with a Type A sleeve, the damage shall be filled with a hardenable filler material with compressive strength adequate to transfer the load to the sleeve. The use of a hardenable material should be applied to fill voids or cavities present between the Type B sleeve and the carrier pipe.</p>
        </div>
        <div class="subsection">
            <h4>206-3.8 Cyclic Operation</h4>
            <p>All Type B sleeves should be evaluated to determine whether a fatigue analysis is required. If an analysis is required, then it shall be performed in accordance with ASME BPVC, Section VIII, Division 2; API 579-1/ASME FFS-1; or another equivalent methodology.</p>
        </div>
        <div class="subsection">
            <h4>206-3.9 Restraint of Pipe Bulging</h4>
            <p>Local wall thinning or damage defects, such as dents, weaken the carrier pipe and typically bulge outward prior to failure under increasing pressure. The effectiveness of repair sleeves relies on their capability to restrain the outward bulging of a pipe defect prior to its failure. The design shall consider if it is necessary:</p>
            <p>(a) to use a hardenable filler material (epoxy or equivalent) under the sleeve to fill the voids when the defect is external</p>
            <p>(b) to reduce the line pressure at time of installation</p>
        </div>
        <div class="subsection">
            <h4>206-3.10 Type A Sleeve Filler Material</h4>
            <p>For Type A sleeves, it is necessary to achieve intimate contact between the pipe and the sleeve at the location of the defect being repaired and an appropriate filler material should be used to ensure that the sleeve provides the desired pressure load reinforcement.</p>
        </div>
        <div class="subsection">
            <h4>206-3.11 Differential Thermal Expansion</h4>
            <p>Differential thermal expansion between the carrier pipe and the reinforcing sleeve shall be considered in the design and application of both Type A and Type B sleeves.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>206-4 FABRICATION</h4>
        <div class="subsection">
            <h4>206-4.1 Installation</h4>
            <p>For installation of a Type A or Type B sleeve, the entire circumference of the carrier pipe in the area to be covered by the sleeve shall be cleaned to bare metal. If hardenable fill material is to be used, the filler shall be applied to all indentations, pits, voids, and depressions. The sleeve shall be fitted tightly around the carrier pipe. Mechanical clamping by means of hydraulic equipment, draw bolts, or other devices may be used to ensure fit. A "no gap" fit should generally be achieved; however, a radial gap of up to 2.5 mm (3/32 in.) maximum may be allowed. For sleeves with welded ends, weld size and welder technique adjustments, such as buttering passes, may be required if the gap is excessive.</p>
        </div>
        <div class="subsection">
            <h4>206-4.2 Filler Materials</h4>
            <p>If a filler material is used between the pipe and sleeve, care shall be exercised to ensure that it does not extrude into the weld areas. Burning of the filler material during welding will compromise the quality of the weld. Excess filler material shall be removed prior to welding. Pumping filler material into the annulus after the sleeve has been welded in place eliminates this problem, provided the annular gaps are large enough to allow the filler to flow into all voids.</p>
        </div>
        <div class="subsection">
            <h4>206-4.3 Leaking Defects</h4>
            <p>For a leaking defect, the defect area shall be isolated prior to welding. For lines with flammable contents, the sleeve shall be purged with nitrogen or other inert gas to prevent the formation of a combustible mixture under the sleeve.</p>
        </div>
        <div class="subsection">
            <h4>206-4.4 Welds</h4>
            <p>If circumferential fillet end welds are made, the sleeve's longitudinal seams shall be butt welded to full penetration, as shown in Figure 206-1.1.2-1. Provision for venting during the final closure weld shall be made. The welding procedures for the circumferential fillet welds shall be suitable for the materials and conditions of weld-cooling severity at the installed location in the piping or pipelines, in accordance with the construction code or post-construction code. A low hydrogen welding technique should be used. For longitudinal welds without backing strips, see para. 206-4.5. If the circumferential welds are not made, Type A, the longitudinal seams may consist of a groove butt weld or fillet-welded lap joint, as shown in Figure 206-1.1.1-1.</p>
        </div>
        <div class="subsection">
            <h4>206-4.5 Reduced Pressure</h4>
            <p>Reducing the carrier piping or pipeline operating pressure, and maintaining flow, while the repair is being made is recommended. See API RP 2201 for recommendations on welding pipe in service. The piping or pipelines may also be taken out of service to make the repair; however, burn-through shall be considered. Recommended pressure during sleeve installation for piping or pipelines is between 50% to 80% of operating pressure.</p>
        </div>
        <div class="subsection">
            <h4>206-4.6 In-Service Welding</h4>
            <p>Article 210 shall be consulted for in-service welding issues. At a minimum, qualification of the welding process shall take into account:</p>
            <p>(a) the potential for hydrogen-induced cracking in the heat-affected zone as a result of accelerated cooling rate and of hydrogen in the weld environment</p>
            <p>(b) the risk of forming an unacceptably hard heat affected zone due to base metal chemistry of the sleeve and pipe materials</p>
            <p>(c) possible burn-through of the pipe</p>
        </div>
        <div class="subsection">
            <h4>206-4.7 Welding Procedures and Welder Qualifications</h4>
            <p>Welding procedures, welders, and welding operators shall be qualified in accordance with current post construction code. If not otherwise specified, ASME BPVC, Section IX shall be used for procedure and performance qualification. Guidance for preheat and/or post weld heat treatment, and for in-service welding, as applicable, shall be taken from the applicable construction code or post-construction code.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>206-5 EXAMINATION</h4>
        <div class="subsection">
            <h4>206-5.1 Visual Examination</h4>
            <p>All sleeve fit-ups shall be inspected prior to welding. Welds shall be visually examined.</p>
        </div>
        <div class="subsection">
            <h4>206-5.2 Type A Sleeves</h4>
            <p>For Type A sleeves, the weld root area shall be visually examined during welding to verify proper penetration and fusion. The longitudinal welds shall be liquid penetrant, magnetic particle, or ultrasonically examined after completion.</p>
        </div>
        <div class="subsection">
            <h4>206-5.3 Type B Sleeves</h4>
            <p>For Type B sleeves, the carrier pipe base material shall be ultrasonically examined for thickness, cracks, and possible lamination in the area where the circumferential welds are to be applied. If a backing strip is not used under the longitudinal weld, the area under it shall also be ultrasonically examined prior to welding. Longitudinal seams shall be inspected after completion. The first and final passes of the circumferential welds should be magnetic particle or liquid penetrant examined after welding. Where delayed weld cracking is a concern, nondestructive examination of the circumferential welds should be performed not less than 24 hr after welding has been completed. Alternatively, nondestructive examination should be performed not less than 48 hr after an in-service weld has been completed, when there is a high probability of hydrogen cracking.</p>
        </div>
        <div class="subsection">
            <h4>206-5.4 In-Process Examination</h4>
            <p>The owner may require full "in-process" visual examination, as described in para. 344.7 of ASME B31.3, of the sleeve weld installation. When "in-process" examination is performed, the results shall be documented. Examinations shall be performed by personnel meeting the qualification requirements specified by the applicable construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>206-5.5 Nondestructive Examination</h4>
            <p>Nondestructive examination procedures should be qualified in accordance with the applicable code of construction or post-construction code. If the code of construction or post-construction code does not provide examination procedure requirements, then the examination procedure should be qualified in accordance with ASME BPVC, Section V. The acceptance criteria should be in accordance with the applicable code of construction or post-construction code, unless alternative acceptance criteria are provided in other sections of this Article. Where there are no acceptance criteria provided, the acceptance criteria in ASME BPVC, Section VIII, Division 1 or Division 2 should be used.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>206-6 TESTING</h4>
        <p>A Tightness Test should be performed on Type B sleeves in accordance with (a) or (b), if required by the owner. Article 501 provides additional guidance.</p>
        <p>(a) Perform a test of a Type B sleeve by pressurizing the annulus between the sleeve and the carrier pipe, in accordance with the applicable construction or post-construction code. The test pressure shall be selected such that the inner pipe will not collapse due to external pressure.</p>
        <p>(b) Perform a Sensitive Leak Test as described in ASME B31.3, para. 345.8 or other recognized national standard.</p>
    </div>
    <div class="subsection">
        <h4>206-7 REFERENCES</h4>
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        <ul>
            <li>AGA, American Gas Association, Pipeline Repair Manual, December 31, 1994</li>
            <li>AGA, American Gas Association, 6th Symposium on Line Research Defect Repair Procedures, J. F. Kiefner October 29, 1979</li>
            <li>Publisher: American Gas Association (AGA), 400 North Capitol Street, NW, Washington, DC 20001 (www.aga.org)</li>
            <li>API 579-1/ASME FFS-1, Fitness-for-Service</li>
            <li>API RP 2201, Safe Hot Tapping Practices in the Petroleum and Petrochemical Industries</li>
            <li>API Standard 1104, Welding of Pipelines and Related Facilities</li>
            <li>Publisher: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
            <li>ASME B31.3, Process Piping</li>
            <li>ASME Boiler and Pressure Vessel Code, Section V - Nondestructive Examination</li>
            <li>ASME Boiler and Pressure Vessel Code, Section VIII - Rules for Construction of Pressure Vessels; Division 2, Alternative Rules</li>
            <li>ASME Boiler and Pressure Vessel Code, Section IX - Welding, Brazing, and Fusing Qualifications</li>
            <li>Publisher: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</li>
        </ul>
    </div>
    `,
    contentEs: `<h3>206 Mangas de Refuerzo de Acero de Circunferencia Completa para Tuberías</h3>
    <div class="subsection">
        <h4>206-1 DESCRIPCIÓN</h4>
        <p>Este Artículo se aplica al diseño e instalación de mangas de acero soldadas de circunferencia completa para tuberías o tuberías. Las mangas pueden diseñarse para refuerzo que no contenga presión o para refuerzo que contenga presión. Las mangas de refuerzo de circunferencia completa han demostrado ser efectivas en la reparación de una amplia variedad de defectos internos y externos.</p>
        <div class="subsection">
            <h4>206-1.1 Manga de Acero de Circunferencia Completa</h4>
            <p>Las mangas de acero de circunferencia completa consisten en un casco cilíndrico colocado alrededor de la sección de tubería que va a ser reparada y soldado a lo largo de las dos costuras longitudinales, como se ilustra en las Figuras 206-1.1.1-1 y 206-1.1.2-1. Existen dos tipos de mangas, aquí referidas como "Tipo A" y "Tipo B". Las mangas pueden fabricarse a partir de tubería o material de chapa laminada.</p>
            <div class="subsection">
                <h4>206-1.1.1 Manga Tipo A</h4>
                <p>Los extremos de la manga Tipo A no se sueldan circunferencialmente a la tubería portadora, como se muestra en la Figura 206-1.1.1-1. La manga Tipo A no es capaz de contener la presión interna pero funciona como refuerzo para un área defectuosa. Solo se utiliza para la reparación de defectos que no están fugando y que no se espera que crezcan durante el servicio, o cuando el mecanismo de daño y la tasa de crecimiento se comprenden completamente.</p>
                
                <div class="figure-container">
                    <img src="images/asme_pcc2_figure_206-1.1.1-1.png" class="figure-image">
                    <p class="figure-caption">Figura 206-1.1.1-1—Manga Tipo A</p>
                </div>
            </div>
            <div class="subsection">
                <h4>206-1.1.2 Manga Tipo B</h4>
                <p>Los extremos de la manga Tipo B se sueldan circunferencialmente a la tubería portadora, como se muestra en la Figura 206-1.1.2-1. Una manga Tipo B es capaz de contener la presión interna porque los extremos están soldados con filete a la tubería portadora. Las mangas Tipo B pueden usarse para reparar defectos con fugas o defectos que eventualmente puedan fugarse y para fortalecer tuberías que tengan defectos que reduzcan la capacidad de carga axial de la tubería.</p>
                
                <div class="figure-container">
                    <img src="images/asme_pcc2_figure_206-1.1.2-1.png" class="figure-image">
                    <p class="figure-caption">Figura 206-1.1.2-1—Manga Tipo B</p>
                </div>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>206-2 PRECAUCIONES Y LIMITACIONES</h4>
        <div class="subsection">
            <h4>206-2.1 Requisitos Adicionales</h4>
            <p>La Parte 1 de esta Norma contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse en conjunción con la Parte 1.</p>
        </div>
        <div class="subsection">
            <h4>206-2.2 Regulaciones</h4>
            <p>Deberán seguirse las regulaciones de tuberías y tuberías con respecto a la reparación y las restricciones del código de diseño de tuberías y tuberías con respecto a la reparación.</p>
        </div>
        <div class="subsection">
            <h4>206-2.3 Defectos con Fugas</h4>
            <p>Para las mangas Tipo B con defectos con fugas, deberán tomarse consideraciones especiales para aislar la fuga antes de la soldadura.</p>
        </div>
        <div class="subsection">
            <h4>206-2.4 Operación Cíclica</h4>
            <p>Si se aplica una reparación con manga a un sistema sometido a ciclos de presión frecuentes, una evaluación de fatiga del componente deberá realizarse de acuerdo con el párrafo 206-3.8.</p>
            <p>Cuando una manga Tipo B está sujeta a gradientes térmicos a través de la pared cíclicos, deberá realizarse una evaluación de fatiga de las soldaduras de filete entre la manga y la tubería para establecer la vida útil de la reparación, de acuerdo con el párrafo 206-3.8.</p>
        </div>
        <div class="subsection">
            <h4>206-2.5 Defectos Circunferenciales</h4>
            <p>Las mangas Tipo A pueden no ser apropiadas para la reparación de defectos orientados circunferencialmente porque no resistirán las cargas axiales en la tubería.</p>
        </div>
        <div class="subsection">
            <h4>206-2.6 Corrosión Bajo la Manga</h4>
            <p>Para las mangas Tipo A, deberá evaluarse el potencial de corrosión entre la tubería y la manga debido a la entrada de humedad por los extremos no soldados, y si es necesario, deberán implementarse medidas de mitigación. Dichas medidas pueden incluir el uso de un sellador o recubrimiento adecuado para el entorno de operación.</p>
        </div>
        <div class="subsection">
            <h4>206-2.7 Refuerzo de Soldadura</h4>
            <p>La presencia de una soldadura circunferencial o soldadura de costura longitudinal con un refuerzo de soldadura prominente puede interferir con lograr un ajuste ajustado de la manga. Si es necesario eliminar el refuerzo de soldadura mediante esmerilado para lograr un buen ajuste, la soldadura deberá ser examinada por RT o UT para asegurar que la soldadura que está siendo esmerilada esté libre de indicaciones. Este examen es particularmente importante cuando la línea está en servicio. Alternativamente, las mangas pueden fabricarse con una abultad circunferencial para salvar la soldadura, como se muestra en la Figura 206-2.7-1. La separación de la raíz de la soldadura deberá ser uniforme a lo largo de la longitud, incluyendo la abultad.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_206-2.7-1.png" class="figure-image">
                <p class="figure-caption">Figura 206-2.7-1—Manga Dividida Soldada para Usar Sobre una Soldadura Circunferencial</p>
            </div>
        </div>
        <div class="subsection">
            <h4>206-2.8 Requisitos de Tamaño de Manga</h4>
            <p>Las áreas que no cumplen con los criterios de Aptitud para el Servicio (FFS) deberán estar completamente cubiertas por la manga de reparación. Las soldaduras circunferenciales de la manga Tipo B deberán ubicarse donde no haya preocupación de perforación (burn through) basándose en el espesor, el procedimiento de soldadura a seguir y las condiciones de operación de la tubería o tubería.</p>
        </div>
        <div class="subsection">
            <h4>206-2.9 Soldadura</h4>
            <p>Las soldaduras deberán ser instaladas por soldadores calificados de acuerdo con procedimientos calificados que reflejen las condiciones reales de campo.</p>
        </div>
        <div class="subsection">
            <h4>206-2.10 Material de Relleno</h4>
            <p>Si se utiliza un material de relleno endurecible entre la manga y la tubería portadora, deberá ser compatible con la aplicación prevista. El material deberá ser adecuado para la temperatura de servicio y, para las mangas Tipo B, compatible con el fluido. El material de relleno puede aplicarse antes de la instalación de la manga o bombearse entre el espacio anular entre la manga y la tubería portadora después de que la manga esté en su lugar. Si el material de relleno se bombea, deberá considerarse la posibilidad de colapso hacia adentro del componente con manga debido a la presión del espacio anular del material de relleno bombeado. Deberá considerarse la liberación de gases del material de relleno cuando se cura.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>206-3 DISEÑO</h4>
        <div class="subsection">
            <h4>206-3.1 Mangas Tipo A</h4>
            <p>Las mangas Tipo A deberán fabricarse o fabricarse a partir de acero que cumpla con las especificaciones de materiales del código de construcción, y deberán tener un espesor igual a al menos dos tercios del espesor de la tubería portadora. Los esfuerzos longitudinales de la tubería portadora deberán cumplir con los requisitos del código de construcción aplicable.</p>
        </div>
        <div class="subsection">
            <h4>206-3.2 Mangas Tipo B</h4>
            <p>Las mangas Tipo B que contienen presión deberán tener un espesor de pared igual o mayor que el espesor de pared requerido para la presión máxima de diseño permitida o, si lo requiere el diseño de ingeniería, la resistencia equivalente completa de la tubería que se está reparando. Para las mangas de ajuste preciso, el diseño de ingeniería deberá basarse en el espesor de pared nominal de la tubería portadora. Se aplicará un factor de eficiencia de junta de soldadura longitudinal de 0.80 al calcular el espesor requerido a menos que la soldadura sea examinada al 100% por examen ultrasónico, en cuyo caso puede aplicarse un factor de eficiencia de junta de 1.00. Si la manga Tipo B está destinada a proporcionar refuerzo axial, como en una soldadura circunferencial defectuosa, deberá diseñarse para soportar las cargas axiales y de flexión que actúan en la ubicación de la manga.</p>
        </div>
        <div class="subsection">
            <h4>206-3.3 Diseño de Presión</h4>
            <p>Los cálculos de diseño de presión del código de construcción aplicable se aplicarán para calcular el espesor requerido de la manga. El material de la manga y el esfuerzo de diseño permitido deberán cumplir con los requisitos del código de construcción aplicable. Las tolerancias de corrosión aplicadas deberán estar de acuerdo con el diseño de ingeniería.</p>
        </div>
        <div class="subsection">
            <h4>206-3.4 Dimensiones de la Manga</h4>
            <p>Las mangas Tipo A y B deberán tener al menos 100 mm (4 pulg.) de largo y extenderse más allá del defecto al menos 50 mm (2 pulg.).</p>
        </div>
        <div class="subsection">
            <h4>206-3.5 Soldaduras de Filete de Manga Tipo B</h4>
            <p>El tamaño de la pierna de la soldadura de filete para las soldaduras de extremo circunferenciales de una manga Tipo B deberá ser el siguiente:</p>
            <p>(a) Una soldadura de filete completa si el espesor de la manga es menor o igual a 1.4 veces el espesor de pared nominal de la tubería portadora, como se muestra en la Figura 206-3.5-1.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_206-3.5-1.png" class="figure-image">
                <p class="figure-caption">Figura 206-3.5-1—Tamaño de Soldadura de Filete de Manga Tipo B para Espesor de Manga Menor o Igual a 1.4 Veces el Espesor de la Tubería Portadora</p>
            </div>
            
            <p>(b) Si una manga Tipo B es más gruesa que 1.4 veces el espesor de pared nominal de la tubería portadora, los extremos circunferenciales de la manga Tipo B pueden dejarse como están o biselarse como se muestra en la Figura 206-3.5-2.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_206-3.5-2.png" class="figure-image">
                <p class="figure-caption">Figura 206-3.5-2—Tamaño de Soldadura de Filete de Manga Tipo B para Espesor de Manga Mayor a 1.4 Veces el Espesor de la Tubería Portadora</p>
            </div>
            
            <p>El pie de la soldadura en la tubería portadora deberá transicionar suavemente desde la tubería portadora a la soldadura para minimizar el nivel de intensificación de esfuerzos. El ángulo incluido entre el pie de la soldadura y la tubería portadora no deberá crear una mella aguda, y no se permiten defectos como socavado (undercut).</p>
        </div>
        <div class="subsection">
            <h4>206-3.6 Presión Externa</h4>
            <p>La carga de presión externa en la tubería dentro de las mangas Tipo B deberá ser considerada por el diseño de ingeniería. Ajustar la manga lo más ajustadamente posible para asegurar la transferencia de carga desde la tubería a la manga debería minimizar el volumen del espacio anular. Si esto no es posible, el volumen del espacio anular deberá llenarse con material de relleno endurecible (ver párrafo 206-2.10) o la presión deberá equilibrarse mediante perforación en caliente (hot tapping) de la tubería debajo de la manga. Puede proporcionarse un venteo o drenaje en el diseño. Si el espacio anular va a dejarse sin llenar, deberá verificarse que el fluido estancado entre la manga y la tubería portadora no cause corrosión.</p>
        </div>
        <div class="subsection">
            <h4>206-3.7 Daño Externo</h4>
            <p>Si el daño externo se repara con una manga Tipo A, el daño deberá rellenarse con un material de relleno endurecible con resistencia a la compresión adecuada para transferir la carga a la manga. El uso de un material endurecible deberá aplicarse para rellenar vacíos o cavidades presentes entre la manga Tipo B y la tubería portadora.</p>
        </div>
        <div class="subsection">
            <h4>206-3.8 Operación Cíclica</h4>
            <p>Todas las mangas Tipo B deberán evaluarse para determinar si se requiere un análisis de fatiga. Si se requiere un análisis, entonces deberá realizarse de acuerdo con ASME BPVC, Sección VIII, División 2; API 579-1/ASME FFS-1; u otra metodología equivalente.</p>
        </div>
        <div class="subsection">
            <h4>206-3.9 Contención de la Deformación de la Tubería</h4>
            <p>El adelgazamiento local de la pared o defectos de daño, como abolladuras, debilitan la tubería portadora y típicamente se deforman hacia afuera antes de la falla bajo presión creciente. La efectividad de las mangas de reparación depende de su capacidad para contener la deformación hacia afuera de un defecto de la tubería antes de su falla. El diseño deberá considerar si es necesario:</p>
            <p>(a) usar un material de relleno endurecible (epoxi o equivalente) debajo de la manga para rellenar los vacíos cuando el defecto es externo</p>
            <p>(b) reducir la presión de la línea en el momento de la instalación</p>
        </div>
        <div class="subsection">
            <h4>206-3.10 Material de Relleno para Manga Tipo A</h4>
            <p>Para las mangas Tipo A, es necesario lograr un contacto íntimo entre la tubería y la manga en la ubicación del defecto que se está reparando y deberá usarse un material de relleno adecuado para asegurar que la manga proporcione el refuerzo de carga de presión deseado.</p>
        </div>
        <div class="subsection">
            <h4>206-3.11 Expansión Térmica Diferencial</h4>
            <p>La expansión térmica diferencial entre la tubería portadora y la manga de refuerzo deberá considerarse en el diseño y aplicación de las mangas Tipo A y Tipo B.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>206-4 FABRICACIÓN</h4>
        <div class="subsection">
            <h4>206-4.1 Instalación</h4>
            <p>Para la instalación de una manga Tipo A o Tipo B, toda la circunferencia de la tubería portadora en el área que será cubierta por la manga deberá limpiarse hasta metal desnudo. Si se va a usar material de relleno endurecible, el relleno deberá aplicarse a todas las indentaciones, picaduras, vacíos y depresiones. La manga deberá ajustarse firmemente alrededor de la tubería portadora. Puede usarse sujeción mecánica mediante equipos hidráulicos, pernos de tiro u otros dispositivos para asegurar el ajuste. Generalmente debería lograrse un ajuste "sin espacio"; sin embargo, puede permitirse un espacio radial de hasta 2.5 mm (3/32 pulg.) máximo. Para las mangas con extremos soldados, pueden ser necesarios ajustes en el tamaño de la soldadura y la técnica del soldador, como pasadas de recubrimiento (buttering passes), si el espacio es excesivo.</p>
        </div>
        <div class="subsection">
            <h4>206-4.2 Materiales de Relleno</h4>
            <p>Si se usa un material de relleno entre la tubería y la manga, deberá tenerse cuidado para asegurar que no se extruya en las áreas de soldadura. La quema del material de relleno durante la soldadura comprometerá la calidad de la soldadura. El exceso de material de relleno deberá eliminarse antes de la soldadura. Bombear material de relleno en el espacio anular después de que la manga ha sido soldada en su lugar elimina este problema, siempre que los espacios anulares sean lo suficientemente grandes para permitir que el relleno fluya hacia todos los vacíos.</p>
        </div>
        <div class="subsection">
            <h4>206-4.3 Defectos con Fugas</h4>
            <p>Para un defecto con fuga, el área del defecto deberá aislarse antes de la soldadura. Para líneas con contenidos inflamables, la manga deberá purgarse con nitrógeno u otro gas inerte para prevenir la formación de una mezcla combustible debajo de la manga.</p>
        </div>
        <div class="subsection">
            <h4>206-4.4 Soldaduras</h4>
            <p>Si se realizan soldaduras de filete de extremo circunferenciales, las costuras longitudinales de la manga deberán soldarse a tope con penetración completa, como se muestra en la Figura 206-1.1.2-1. Deberá preverse ventilación durante la soldadura de cierre final. Los procedimientos de soldadura para las soldaduras de filete circunferenciales deberán ser adecuados para los materiales y condiciones de severidad de enfriamiento de la soldadura en la ubicación instalada en la tubería o tuberías, de acuerdo con el código de construcción o código post-construcción. Debería usarse una técnica de soldadura de bajo hidrógeno. Para soldaduras longitudinales sin respaldos, ver párrafo 206-4.5. Si no se realizan las soldaduras circunferenciales, Tipo A, las costuras longitudinales pueden consistir en una soldadura a tope con ranura o una junta solapada soldada con filete, como se muestra en la Figura 206-1.1.1-1.</p>
        </div>
        <div class="subsection">
            <h4>206-4.5 Presión Reducida</h4>
            <p>Se recomienda reducir la presión de operación de la tubería o tubería y mantener el flujo mientras se realiza la reparación. Consulte API RP 2201 para recomendaciones sobre soldadura de tuberías en servicio. La tubería o tuberías también pueden sacarse de servicio para realizar la reparación; sin embargo, deberá considerarse la perforación (burn-through). La presión recomendada durante la instalación de la manga para tuberías o tuberías es entre el 50% y el 80% de la presión de operación.</p>
        </div>
        <div class="subsection">
            <h4>206-4.6 Soldadura en Servicio</h4>
            <p>Deberá consultarse el Artículo 210 para cuestiones de soldadura en servicio. Como mínimo, la calificación del proceso de soldadura deberá tener en cuenta:</p>
            <p>(a) el potencial de agrietamiento inducido por hidrógeno en la zona afectada por el calor como resultado de la tasa de enfriamiento acelerada y del hidrógeno en el entorno de soldadura</p>
            <p>(b) el riesgo de formar una zona afectada por el calor inaceptablemente dura debido a la química del metal base de los materiales de la manga y la tubería</p>
            <p>(c) la posible perforación (burn-through) de la tubería</p>
        </div>
        <div class="subsection">
            <h4>206-4.7 Procedimientos de Soldadura y Calificaciones de Soldadores</h4>
            <p>Los procedimientos de soldadura, soldadores y operadores de soldadura deberán calificarse de acuerdo con el código post-construcción actual. Si no se especifica lo contrario, se utilizará ASME BPVC, Sección IX para la calificación de procedimientos y desempeño. La orientación para precalentamiento y/o tratamiento térmico post-soldadura, y para soldadura en servicio, según corresponda, deberá tomarse del código de construcción aplicable o código post-construcción.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>206-5 EXAMEN</h4>
        <div class="subsection">
            <h4>206-5.1 Examen Visual</h4>
            <p>Todos los ajustes de manga deberán inspeccionarse antes de la soldadura. Las soldaduras deberán examinarse visualmente.</p>
        </div>
        <div class="subsection">
            <h4>206-5.2 Mangas Tipo A</h4>
            <p>Para las mangas Tipo A, el área de la raíz de la soldadura deberá examinarse visualmente durante la soldadura para verificar la penetración y fusión adecuadas. Las soldaduras longitudinales deberán examinarse con líquidos penetrantes, partículas magnéticas o ultrasónicamente después de su finalización.</p>
        </div>
        <div class="subsection">
            <h4>206-5.3 Mangas Tipo B</h4>
            <p>Para las mangas Tipo B, el material base de la tubería portadora deberá examinarse ultrasónicamente para espesor, grietas y posible laminación en el área donde se aplicarán las soldaduras circunferenciales. Si no se usa un respaldo debajo de la soldadura longitudinal, el área debajo de ella también deberá examinarse ultrasónicamente antes de la soldadura. Las costuras longitudinales deberán inspeccionarse después de su finalización. Los primeros y últimos pases de las soldaduras circunferenciales deberían examinarse con partículas magnéticas o líquidos penetrantes después de la soldadura. Cuando haya preocupación por agrietamiento retardado de la soldadura, el examen no destructivo de las soldaduras circunferenciales debería realizarse no menos de 24 horas después de que la soldadura se haya completado. Alternativamente, el examen no destructivo debería realizarse no menos de 48 horas después de que una soldadura en servicio se haya completado, cuando haya una alta probabilidad de agrietamiento por hidrógeno.</p>
        </div>
        <div class="subsection">
            <h4>206-5.4 Examen Durante el Proceso</h4>
            <p>El propietario puede requerir un examen visual completo "durante el proceso", como se describe en el párrafo 344.7 de ASME B31.3, de la instalación de la soldadura de la manga. Cuando se realiza el examen "durante el proceso", los resultados deberán documentarse. Los exámenes deberán ser realizados por personal que cumpla con los requisitos de calificación especificados por el código de construcción aplicable o código post-construcción.</p>
        </div>
        <div class="subsection">
            <h4>206-5.5 Examen No Destructivo</h4>
            <p>Los procedimientos de examen no destructivo deberían calificarse de acuerdo con el código de construcción aplicable o código post-construcción. Si el código de construcción o código post-construcción no proporciona requisitos de procedimiento de examen, entonces el procedimiento de examen debería calificarse de acuerdo con ASME BPVC, Sección V. Los criterios de aceptación deberían estar de acuerdo con el código de construcción aplicable o código post-construcción, a menos que se proporcionen criterios de aceptación alternativos en otras secciones de este Artículo. Cuando no se proporcionen criterios de aceptación, deberían usarse los criterios de aceptación en ASME BPVC, Sección VIII, División 1 o División 2.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>206-6 PRUEBAS</h4>
        <p>Deberá realizarse una Prueba de Estanqueidad en las mangas Tipo B de acuerdo con (a) o (b), si lo requiere el propietario. El Artículo 501 proporciona orientación adicional.</p>
        <p>(a) Realizar una prueba de una manga Tipo B presurizando el espacio anular entre la manga y la tubería portadora, de acuerdo con el código de construcción o post-construcción aplicable. La presión de prueba deberá seleccionarse de manera que la tubería interior no colapse debido a la presión externa.</p>
        <p>(b) Realizar una Prueba de Fuga Sensible como se describe en ASME B31.3, párrafo 345.8 u otro estándar nacional reconocido.</p>
    </div>
    <div class="subsection">
        <h4>206-7 REFERENCIAS</h4>
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        <ul>
            <li>AGA, American Gas Association, Manual de Reparación de Tuberías, 31 de diciembre de 1994</li>
            <li>AGA, American Gas Association, 6º Simposio sobre Investigación de Líneas Procedimientos de Reparación de Defectos, J. F. Kiefner 29 de octubre de 1979</li>
            <li>Editor: American Gas Association (AGA), 400 North Capitol Street, NW, Washington, DC 20001 (www.aga.org)</li>
            <li>API 579-1/ASME FFS-1, Aptitud para el Servicio</li>
            <li>API RP 2201, Prácticas Seguras de Perforación en Caliente en las Industrias del Petróleo y Petroquímica</li>
            <li>API Standard 1104, Soldadura de Tuberías e Instalaciones Relacionadas</li>
            <li>Editor: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
            <li>ASME B31.3, Tubería de Proceso</li>
            <li>Código de Calderas y Recipientes a Presión ASME, Sección V - Examen No Destructivo</li>
            <li>Código de Calderas y Recipientes a Presión ASME, Sección VIII - Reglas para la Construcción de Recipientes a Presión; División 2, Reglas Alternativas</li>
            <li>Código de Calderas y Recipientes a Presión ASME, Sección IX - Calificaciones de Soldadura, Soldadura Fuerte y Fusión</li>
            <li>Editor: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</li>
        </ul>
    </div>
    `
});