// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos a Presión y Tuberías"
    });
}

// Registrar el capítulo 210
registerChapter('ASMEPCC2', {
    id: 210,
    title: "In-Service Welding Onto Carbon Steel Pressure Components or Pipelines",
    titleEs: "Soldadura en Servicio en Componentes de Presión de Acero al Carbono o Tuberías",
    content: `<h3>210 In-Service Welding Onto Carbon Steel Pressure Components or Pipelines</h3>
    <div class="subsection">
        <h4>210-1 DESCRIPTION</h4>
        <p>This Article addresses the requirements and precautions associated with welding onto pressure components or pipelines while the system is still in operation. In-service pressure components or pipelines include pressure equipment and piping and are defined as systems in which the contents may or may not be pressurized and/or flowing but affect the way the weld cools. This Article is intended to be used in conjunction with Part 2 of this Standard or another applicable construction code or post-construction code.</p>
        <p>There are two primary concerns when performing in-service welding. The first concern is "burn-through," also referred to as "blowout." A burn-through occurs when the unmelted base material under the weld pool loses the ability to contain the contents of the pressure components or pipeline allowing the contents to be expelled. Welding onto pressure components or pipelines with thin walls [e.g., 4.8 mm (0.188 in.) or less] is possible as long as precautions are taken. Such precautions include controlling the heat input or penetration of the welding process and using smaller diameter electrodes [e.g., 2.4 mm (0.094 in.)] when the wall thickness is less than 6.4 mm (0.250 in.). Safety aspects and contingency planning aspects for an occurrence of burn-through should be planned for in accordance with company practices, industry standards (e.g., API Recommended Practice 2201), or post-construction code.</p>
        <p>The second concern is hydrogen cracking. Hydrogen cracking occurs when tensile stresses are acting on the weld, hydrogen is present in the weld and, when the weld solidifies, the resultant weld microstructure is crack susceptible. If any of the three conditions is eliminated or reduced below a threshold level, then hydrogen cracking will not occur. Tensile stresses can always be assumed due to the shrinkage of the weld upon cooling. Hydrogen, typically, cannot be eliminated but can be reduced by using proper low hydrogen welding processes such as shielded metal arc welding with EXX18 or EXX15 type electrodes. Crack-susceptible microstructures typically have high microstructure hardness and are controlled by the carbon equivalence of the material and the rate at which the weld cools.</p>
        <p>The likelihood of developing microstructures susceptible to hydrogen cracking can be high because in-service welds tend to have accelerated cooling rates due to the ability of the pressure components or pipeline contents to pull heat from the weld region. The chance of developing a crack-susceptible microstructure can be reduced by using welding procedures that overcome the cooling effect of the pressure components or pipeline contents or by altering the pressure components or pipeline operating conditions during in-service welding. Such welding procedures include using sufficiently high heat input levels or by using specific weld deposition sequences. The most common in-service welding practices used to reduce hydrogen cracking concerns incorporate both a low-hydrogen welding process and a welding procedure that reduces the susceptibility of forming a crack-susceptible microstructure. The use of preheat is another technique that is commonly used to reduce the susceptibility of forming a crack-susceptible microstructure but it may be difficult to apply to in-service welding applications because of the ability of the pressure components or pipeline contents to cool the pipe wall especially for thin-walled applications. The cooling effect of the pressure components or pipeline contents can interfere with achieving the proper preheating temperature.</p>
        <p>Successful application of in-service welding procedures requires a balance between the probability of burn-through and reducing the probability of hydrogen cracking. For example, when welding onto a pipeline less than 6.4 mm (0.250 in.) thick it may be necessary to reduce the welding heat input to lower the probability of burn-through; however, the lower welding heat input could result in a weld microstructure that is susceptible to hydrogen cracking. When the maximum required welding heat input to eliminate the probability of burn-through is lower than the minimum required heat input to protect against hydrogen cracking then alternative precautions need to be taken (e.g., welding procedure that included a temper bead deposition sequence).</p>
    </div>
    <div class="subsection">
        <h4>210-2 LIMITATIONS</h4>
        <div class="subsection">
            <h4>210-2.1 Additional Requirements</h4>
            <p>Part 1 of this Standard, "Scope, Organization, and Intent," contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        </div>
        <div class="subsection">
            <h4>210-2.2 Piping and Pipeline Modifications</h4>
            <p>This Article is limited to application of in-service welding. Though this Article covers in-service welding aspects, not all aspects of pressure components or pipeline modifications that are performed to modify or expand a piping system (e.g., the hot tapping procedure that may follow the in-service weld) are covered by this Article. This Article should be used in conjunction with another applicable construction code or post-construction code that deals with the specifics of the pressure components or pipeline modification (e.g., for hot tapping, refer to API Recommended Practice 2201).</p>
        </div>
        <div class="subsection">
            <h4>210-2.3 Pressure Components or Pipeline Material</h4>
            <p>This Article shall be limited to in-service welding onto all carbon steel pressure components or pipelines. This Article excludes welding onto stainless steels, alloyed steels (e.g., Cr-Mo), or nonferrous materials.</p>
        </div>
        <div class="subsection">
            <h4>210-2.4 Pressure Components or Pipeline Contents</h4>
            <p>Before performing any in-service welding, the owner shall evaluate the effect that in-service welding could have on the contents of the pressure components or pipeline system (e.g., combustion, explosion, and increased susceptibility to corrosion or embrittlement). In-service welding should only be performed on pressure components or pipelines where the evaluation indicates that there is not a significant risk associated with potential metallurgical degradation or chemical reaction from the in-service welding process and not a significant risk of chemical reaction in the process fluid as a result of potential contact with high metal temperatures.</p>
        </div>
        <div class="subsection">
            <h4>210-2.5 Operating Pressure</h4>
            <p>An adjustment in the pressure during in-service welding may not be required from a welding perspective but may be necessary to increase the safety of the welder if a burn-through does occur. Safety aspects and contingency planning aspects for an occurrence of a burn-through should be planned for in accordance with company practices, industry standards (e.g., API Recommended Practice 2201), or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>210-2.6 Operating Flow</h4>
            <p>An adjustment in flow during in-service welding may increase hydrogen cracking risk (e.g., increase flow) or burn-through risk (e.g., reduce flow). An adjustment in flow should be addressed prior to in-service welding.</p>
        </div>
        <div class="subsection">
            <h4>210-2.7 Postweld Heat Treatment (PWHT)</h4>
            <p>PWHT is difficult to perform while the pressure components or pipeline system remains in service. If PWHT is required, the owner shall address all additional concerns to assure the welding and subsequent PWHT will be completed in a safe manner. If this cannot be achieved, then an alternative repair method shall be evaluated.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>210-3 DESIGN</h4>
        <div class="subsection">
            <h4>210-3.1 In-Service Fillet Weld Procedure</h4>
            <p>An in-service fillet weld procedure is defined as a procedure that is used to join additional material onto the in-service pressure components or pipeline to reinforce a damaged area (e.g., full encirclement sleeves and patch plate repairs) or to facilitate a modification (e.g., proprietary full encirclement hot-tap fitting). The fillet weld shall be designed in accordance with an applicable construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>210-3.2 In-Service Attachment Weld Procedure</h4>
            <p>An in-service attachment weld procedure is defined as a procedure that is used to make a modification to existing pressure components or pipeline and usually includes a groove weld joint. The attachment weld shall be designed under one of the following two criteria:</p>
            <p>(a) If the attachment provides adequate reinforcement in accordance with an applicable construction code or post-construction code, no further reinforcement is required.</p>
            <p>(b) If the attachment does not provide adequate reinforcement in accordance with an applicable construction code or post-construction code, additional reinforcement is required.</p>
        </div>
        <div class="subsection">
            <h4>210-3.3 In-Service Weld Metal Buildup Procedure</h4>
            <p>An in-service weld metal buildup procedure is defined as a procedure that is used to deposit weld metal onto the surface of the pressure components or pipeline to reinforce a thinned area (e.g., metal loss due to corrosion or erosion). The weld metal buildup shall be designed in accordance with an applicable construction code or post-construction code.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>210-4 FABRICATION</h4>
        <div class="subsection">
            <h4>210-4.1 Welding Procedure Qualification: Welding</h4>
            <p>When approved by the welding engineer or welding inspector, a welding procedure qualified to the applicable new construction code or post-construction code may be used for in-service welding applications. However, the welding procedures that are to be used for welding onto in-service pressure components or pipeline shall address the probability of burn-through and hydrogen cracking. When required by the welding engineer or welding inspector, the welding procedure shall be qualified using the set-up outlined in Mandatory Appendix 210-1 and the testing in para. 210-4.2. The essential variables for the welding procedure qualification shall be in accordance with an applicable construction code or post-construction code and should include the in-service welding essential variables listed in para. 210-4.1.1.</p>
            <p>WARNING: Materials that have high carbon equivalent values (e.g., > 0.45) or experience severe weld cooling rates (i.e., high cooling potential) may require special precautions. Such precautions may include but are not limited to temper bead welding sequence or applying a preheat step prior to in-service welding.</p>
        </div>
        <div class="subsection">
            <h4>210-4.1.1 In-Service Welding Essential Variables</h4>
            <p>The in-service welding essential variables are specific requirements for in-service welding that should be used in addition to the essential variables from an applicable construction code or post-construction code.</p>
            <div class="subsection">
                <h4>210-4.1.1.1 Weld Type</h4>
                <p>In-service welds shall be grouped into one of the following three types and qualified separately:</p>
                <p>(a) in-service fillet weld</p>
                <p>(b) in-service attachment weld</p>
                <p>(c) in-service weld metal buildup</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.2 Cooling Potential</h4>
                <p>The rate at which a weld cools, or cooling potential, is an essential variable [e.g., cooling time from 800°C to 500°C (1,472°F to 932°F) (sec) or cooling rate at 556°C (1,000°F) (°F/sec)]. An increase in the cooling potential of the in-service pressure component or pipeline greater than the cooling potential used during the qualification of the welding procedure requires requalification. The cooling potential may be determined by direct measurement, calculation, computer models, or a combination of these methods.</p>
                <p>NOTE: In the procedure qualification, wall thickness is not an essential variable but is directly related to the cooling potential of the pressure components or pipeline, which is an essential variable.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.3 Carbon Equivalence</h4>
                <p>The in-service welding procedure should be grouped according to carbon equivalence of the material. Carbon equivalence is specified separately for the in-service pressure components or pipeline and the second base material (e.g., full encirclement sleeve or attachment material). An in-service welding procedure qualified on a specific carbon equivalent material may also be adequate for lower carbon equivalent materials assuming the cooling potentials are the same. A procedure qualified on lower carbon equivalent material can be used in a repair application on a higher carbon equivalent material provided that the cooling potential of the repair application is less than the cooling potential of the qualified procedure and there is no increase in hydrogen cracking susceptibility. The carbon equivalence should be calculated using the following formula with the elements expressed in weight percent amounts:</p>
                <p>CE=C+(Mn/6)+((Cr+Mo+V)/6)+((Ni+Cu)/15)</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.4 Welding Process</h4>
                <p>A change in the welding process shall require requalification.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.5 Welding Consumable</h4>
                <p>An increase in the diffusible hydrogen level of the welding consumable or a change in the electrode type as defined by ASME BPVC, Section IX, Table QW-432, or another applicable construction code or post-construction code, shall require requalification.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.6 Heat Input</h4>
                <p>The heat input range is determined by the weld procedure qualification and is the range that will produce a weld that will not burn through and has a low likelihood of producing a crack-susceptible microstructure. A change in the heat input range shall require requalification. The heat input should be calculated in accordance with ASME BPVC, Section IX, QW-409.1(a) or QW-409.1(b), or another applicable construction code or post-construction code.</p>
                <p>(a) An increase in the heat input over the range specified in the in-service procedure qualification or specified in the in-service welding procedure shall be evaluated for burn-through risk. The probability of burn-through should be evaluated experimentally, by computer simulation, or a combination of these methods.</p>
                <p>(b) A decrease in the heat input below the range specified in the in-service procedure qualification or specified in the in-service welding procedure shall require requalification to determine the probability of hydrogen cracking susceptibility. Hydrogen cracking susceptibility should be evaluated using the test outlined in para. 210-4.2.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.7 Welding Current</h4>
                <p>A change in the range of welding current used in the procedure qualification or specified in the welding procedure shall require requalification.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.8 Postweld Bakeout</h4>
                <p>A reduction of the temperature or time of the application of a postweld bakeout shall require requalification. When specified, the minimum soaking temperature and time shall be specified. Any potential effect the postweld bakeout has on the pressure components or pipeline contents shall be evaluated.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.9 Preheat</h4>
                <p>A reduction of the temperature or time of application of a preheat requirement shall require requalification. When specified, the minimum soaking temperature and time shall be specified. Any potential effect the preheat requirement has on the pressure components or pipeline contents shall be evaluated.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.10 Hydrogen Bakeout</h4>
                <p>A change in the temperature or time of application of the hydrogen bakeout procedure shall require requalification. Any potential effect the hydrogen bakeout requirement has on the pressure components or pipeline contents shall be evaluated.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.11 Surface Bead Placement</h4>
                <p>Any change in weld bead position or deposition sequence of the in-service welding procedure shall require requalification.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>210-4.2 Weld Procedure Qualification: Testing</h4>
            <p>Welding procedures that are to be used to weld onto in-service pressure components or pipelines shall address the probability of burn-through and hydrogen cracking susceptibility. The probability of burn-through should be evaluated experimentally, by computer simulation, or a combination of these methods. Hydrogen cracking susceptibility should be evaluated by destructive and nondestructive testing. When approved by the welding engineer or welding inspector, a welding procedure qualified to the applicable new construction code or post-construction code may be used for in-service welding applications. When required by the welding engineer or welding inspector, the welding procedure shall be qualified using the set-up outlined in Mandatory Appendix 210-1 and testing in para. 210-4.2. The essential variables for the welding procedure qualification shall be in accordance with an applicable construction code or post-construction code and should include the in-service welding essential variables listed in para. 210-4.1.1.</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.1 Destructive Test Methods</h4>
            <p>In-service welding procedure test samples shall be taken from the procedure qualification weld coupon as specified in para. 210-4.2.2. The procedure shall be qualified by successful completion of the tests specified in paras. 210-4.2.1.1 through 210-4.2.1.4. The number of tests for each in-service welding procedure is given in Table 210-4.2.1-1. Two procedure qualification weld coupons should be fabricated if there is not enough material available for all of the test samples in one procedure qualification. The destructive test specimens shall be machined in accordance with AWS B4.0 or other applicable standard.</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.1.1 Macro-Section Test</h4>
            <p>The macro-section test samples shall be removed and machined using nonthermal methods. The macro-section test sample should be in accordance with ASTM E3 or another equivalent document to give a clear representation of the weld region. Visual examination of the macro-section test samples shall show</p>
            <p>(a) complete fusion</p>
            <p>(b) no cracks</p>
            <p>(c) no undercut exceeding 0.8 mm (0.031 in.) or 10% of the simulated in-service pressure components or pipeline wall thickness, whichever is smaller</p>
            <p>(d) for fillet welding procedures only, the fillet weld leg lengths are at least equal to the leg length specified in the welding procedure or other applicable process control document</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.1.2 Hardness Test</h4>
            <p>The hardness test samples shall be tested in accordance with ASTM E384 or another equivalent document. A minimum of five Vickers hardness indents, using a 10-kg load, shall be made in the coarse-grained heat-affected zone of the weld toe in accordance with Figure 210-4.2.1.2-1. The macro-section test samples may be used for the hardness test samples after the metallographic analysis has been completed.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.1.2-1.png" class="figure-image">
                <p class="figure-caption">Figure 210-4.2.1.2-1—Heat-Affected Zone Hardness Indent Locations</p>
            </div>
        </div>
        <div class="subsection">
            <h4>210-4.2.1.3 Nick-Break Test</h4>
            <p>Nick-break test samples shall be removed and machined using nonthermal methods, and shall be tested according to AWS B4.0 or another equivalent document. Visual inspection of the nick-break test sample fracture surfaces shall show</p>
            <p>(a) complete fusion.</p>
            <p>(b) no single pore exceeds 1.6 mm (0.063 in.) in size, and the combined area of all pores does not exceed 2% of the exposed fracture surface area.</p>
            <p>(c) no slag inclusion exceeds 0.8 mm (0.031 in.) in depth and 3.2 mm (0.125 in.) or one-half the nominal pipe wall thickness in length, whichever one is smaller. The distance between adjacent slag inclusions shall not be less than 12.7 mm (0.500 in.).</p>
            <p>(d) fisheyes, as defined in AWS A3.0, should not be cause for rejection.</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.1.4 Face or Side Bend Test</h4>
            <p>The bend test samples shall be machined using nonthermal methods, and shall be tested according to AWS B4.0 or another equivalent document.1 The bend test samples should be bent in a guided-bend test jig or equivalent equipment. For face bends, the bend test sample shall be placed with the face of the weld opposite the mandrel (Figure 210-4.2.1.4-1). The weld reinforcement should be removed prior to bending. The remaining weld should not exceed 1.6 mm (0.063 in.). The bend test sample shall be bent until the curvature of the bend test specimen is approximately a U-shape (Figure 210-4.2.1.4-2). Visual inspection of the bend test specimens shall show</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.1.4-1.png" class="figure-image">
                <p class="figure-caption">Figure 210-4.2.1.4-1—Mandrel Location Relative to the Weld Toe When Doing Face Bend Test for a Typical In-Service Fillet</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.1.4-2.png" class="figure-image">
                <p class="figure-caption">Figure 210-4.2.1.4-2—Examples of In-Service Welding Procedure Qualification Face Bend Test Samples</p>
            </div>
            
            <p>(a) no cracks or other weld flaws exceeding 3.2 mm (0.125 in.) or one-half the nominal pipe wall thickness, whichever is smaller, in length are present in the weld or fusion zone</p>
            <p>(b) cracks that originate from the edge of the bend test specimen that are less than 6.4 mm (0.250 in.) in length in any direction should not be cause for rejection unless an obvious weld flaw is present</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.2 Sample Location</h4>
            <p>The locations of the in-service welding procedure test samples for a fillet weld should be taken from equally spaced intervals around the procedure qualification weld coupon as shown in Figure 210-4.2.2-1. The locations of the in-service welding procedure test samples for an attachment weld should be taken from equal spaced intervals around the procedure qualification weld coupon with samples taken from both the crotch and saddle portions of the weld as shown in Figure 210-4.2.2-2. The locations of the in-service welding procedure test samples for a weld buildup weld coupon should be taken as shown in Figure 210-4.2.2-3.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.2-1.png" class="figure-image">
                <p class="figure-caption">Figure 210-4.2.2-1—Test Sample Locations for In-Service Fillet Welding Procedure Qualification Assuming Equal Spacing Around the Circumference to Obtain ALL the Required Test Specimens</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.2-2.png" class="figure-image">
                <p class="figure-caption">Figure 210-4.2.2-2—Test Sample Locations for In-Service Attachment Welding Procedure Qualification Assuming Equal Spacing Around the Circumference to Obtain ALL the Required Test Specimens</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.2-3.png" class="figure-image">
                <p class="figure-caption">Figure 210-4.2.2-3—Test Sample Locations for In-Service Weld Metal Buildup Welding Procedure Qualification</p>
            </div>
        </div>
        <div class="subsection">
            <h4>210-4.3 Welder Performance Qualification</h4>
            <p>Welders that are to perform in-service welding onto pressure components or pipelines shall demonstrate the ability to deposit welds that produce microstructures that are not crack susceptible and/or avoid burning through the pressure component or pipeline. This may be demonstrated by successfully depositing an in-service weld or by qualifying a welder using the set-up detailed in Mandatory Appendix 210-1 and testing requirements outlined in para. 210-4.2.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>210-5 EXAMINATION</h4>
        <div class="subsection">
            <h4>210-5.1 NDE Method</h4>
            <p>The in-service weld, made in the field, shall be examined after welding has been completed. The method of examination shall be in accordance with an applicable construction code or post-construction code with the additional ability to locate weld flaws including hydrogen cracking since it is a major concern for in-service welding under the service conditions (e.g., operating temperature). The acceptance criteria for the NDE examination shall be in accordance with an applicable construction code or post-construction code. If welding was done to repair a service induced defect, the NDE method that was used to detect the defect shall be used to verify removal of the defect.</p>
            <p>When NDE procedures are applied after in-service welding, special procedures may be necessary where the components are operating at temperatures significantly above ambient.</p>
        </div>
        <div class="subsection">
            <h4>210-5.2 Examination Time</h4>
            <p>When hydrogen cracking is a concern, in-service welds should be examined 24 hr to 72 hr after welding has been completed.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>210-6 TESTING</h4>
        <p>Testing should be completed in accordance with an applicable construction code or post-construction code. If hydrotesting of a hot tapping component after installation is contemplated, the user is advised to consider the temperature of the operating component in order to avoid having the test fluid flash to steam.</p>
    </div>
    <div class="subsection">
        <h4>210-7 REFERENCES (22)</h4>
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        <ul>
            <li>AGA Pipeline Repair Manual, December 31, 1994<br>
            Publisher: American Gas Association (AGA), 400 North Capitol Street, NW, Washington, DC 20001 (www.aga.org)</li>
            <li>API Recommended Practice 2201, Safe Hot Tapping Practices in the Petroleum and Petrochemical Industries</li>
            <li>API Recommended Practice 579-1</li>
            <li>API 579-1/ASME FFS-1, Fitness-For-Service</li>
            <li>API Standard 1104, Welding of Pipelines and Related Facilities<br>
            Publisher: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
            <li>ANSI/AWS A3.0, Standard Definitions; Including Terms for Adhesive Bonding, Brazing, Soldering, Thermal Cutting, and Thermal Spraying</li>
            <li>ANSI/AWS B4.0, Standard Methods for Mechanical Testing Welds<br>
            Publisher: American Welding Society (AWS), 8669 NW 36 Street, No. 130, Miami, FL 33166 (www.aws.org)</li>
            <li>ANSI/NB-23-2007, National Board Inspection Code<br>
            Publisher: National Board of Boiler and Pressure Vessel Inspectors (NBBI), 1055 Crupper Avenue, Columbus, OH 43229 (www.nationalboard.org)</li>
            <li>ASME B31.1, Pressure Piping</li>
            <li>ASME B31.3, Process Piping</li>
            <li>ASME B31.4, Pipeline Transportation Systems for Liquid Hydrocarbons and Other Liquids</li>
            <li>ASME B31.8, Gas Transmission and Distribution Piping Systems</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section IX, Welding and Brazing Qualifications; Article II - Welding Procedure Qualifications; Article III - Welding Performance Qualifications<br>
            Publisher: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</li>
            <li>ASTM E3, Standard Practice for Preparation of Metallographic Specimens</li>
            <li>ASTM E384, Standard Test Method for Microindentation Hardness of Materials<br>
            Publisher: American Society for Testing and Materials (ASTM International), 100 Barr Harbor Drive, P.O. Box C700, West Conshohocken, PA 19428-2959 (www.astm.org)</li>
            <li>CSA Standard Z662, Oil and Gas Pipeline Systems<br>
            Publisher: Canadian Standards Association (CSA), 178 Rexdale Boulevard, Toronto, Ontario M9W 1R3, Canada (www.csagroup.org)</li>
        </ul>
    </div>
    `,
    contentEs: `<h3>210 Soldadura en Servicio en Componentes de Presión de Acero al Carbono o Tuberías</h3>
    <div class="subsection">
        <h4>210-1 DESCRIPCIÓN</h4>
        <p>Este Artículo aborda los requisitos y precauciones asociados con la soldadura en componentes de presión o tuberías mientras el sistema todavía está en operación. Los componentes de presión o tuberías en servicio incluyen equipos a presión y tuberías y se definen como sistemas en los que el contenido puede o no estar presurizado y/o fluyendo pero afecta la forma en que se enfría la soldadura. Este Artículo está destinado a ser utilizado junto con la Parte 2 de esta Norma u otro código de construcción aplicable o código posterior a la construcción.</p>
        <p>Existen dos preocupaciones principales al realizar soldadura en servicio. La primera preocupación es la "perforación por quemado", también conocida como "ruptura". Una perforación por quemado ocurre cuando el material base sin fundir debajo del baño de soldadura pierde la capacidad de contener el contenido de los componentes de presión o tubería, permitiendo que el contenido sea expulsado. Es posible soldar en componentes de presión o tuberías con paredes delgadas [por ejemplo, 4.8 mm (0.188 pulg.) o menos] siempre que se tomen precauciones. Dichas precauciones incluyen controlar el aporte de calor o la penetración del proceso de soldadura y usar electrodos de diámetro menor [por ejemplo, 2.4 mm (0.094 pulg.)] cuando el espesor de la pared es menor a 6.4 mm (0.250 pulg.). Los aspectos de seguridad y planificación de contingencia para una ocurrencia de perforación por quemado deben planificarse de acuerdo con las prácticas de la empresa, estándares de la industria (por ejemplo, Práctica Recomendada API 2201) o código posterior a la construcción.</p>
        <p>La segunda preocupación es el agrietamiento por hidrógeno. El agrietamiento por hidrógeno ocurre cuando actúan esfuerzos de tracción sobre la soldadura, hay hidrógeno presente en la soldadura y, cuando la soldadura se solidifica, la microestructura resultante de la soldadura es susceptible al agrietamiento. Si cualquiera de las tres condiciones se elimina o reduce por debajo de un nivel umbral, entonces no ocurrirá agrietamiento por hidrógeno. Siempre se pueden asumir esfuerzos de tracción debido a la contracción de la soldadura al enfriarse. El hidrógeno, típicamente, no puede eliminarse pero puede reducirse utilizando procesos de soldadura de bajo hidrógeno adecuados como la soldadura de arco metálico protegido con electrodos tipo EXX18 o EXX15. Las microestructuras susceptibles al agrietamiento típicamente tienen alta dureza de microestructura y se controlan mediante la equivalencia de carbono del material y la velocidad a la que se enfría la soldadura.</p>
        <p>La probabilidad de desarrollar microestructuras susceptibles al agrietamiento por hidrógeno puede ser alta porque las soldaduras en servicio tienden a tener tasas de enfriamiento aceleradas debido a la capacidad del contenido de los componentes de presión o tuberías para extraer calor de la región de la soldadura. La posibilidad de desarrollar una microestructura susceptible al agrietamiento puede reducirse utilizando procedimientos de soldadura que superen el efecto de enfriamiento del contenido de los componentes de presión o tuberías o alterando las condiciones de operación de los componentes de presión o tuberías durante la soldadura en servicio. Dichos procedimientos de soldadura incluyen el uso de niveles de aporte de calor suficientemente altos o mediante el uso de secuencias específicas de depósito de soldadura. Las prácticas de soldadura en servicio más comunes utilizadas para reducir las preocupaciones de agrietamiento por hidrógeno incorporan tanto un proceso de soldadura de bajo hidrógeno como un procedimiento de soldadura que reduce la susceptibilidad de formar una microestructura susceptible al agrietamiento. El uso de precalentamiento es otra técnica comúnmente utilizada para reducir la susceptibilidad de formar una microestructura susceptible al agrietamiento, pero puede ser difícil de aplicar en aplicaciones de soldadura en servicio debido a la capacidad del contenido de los componentes de presión o tuberías para enfriar la pared de la tubería, especialmente en aplicaciones de pared delgada. El efecto de enfriamiento del contenido de los componentes de presión o tuberías puede interferir con el logro de la temperatura de precalentamiento adecuada.</p>
        <p>La aplicación exitosa de procedimientos de soldadura en servicio requiere un equilibrio entre la probabilidad de perforación por quemado y la reducción de la probabilidad de agrietamiento por hidrógeno. Por ejemplo, al soldar en una tubería de menos de 6.4 mm (0.250 pulg.) de espesor, puede ser necesario reducir el aporte de calor de soldadura para disminuir la probabilidad de perforación por quemado; sin embargo, el menor aporte de calor de soldadura podría resultar en una microestructura de soldadura que sea susceptible al agrietamiento por hidrógeno. Cuando el aporte de calor máximo de soldadura requerido para eliminar la probabilidad de perforación por quemado es menor que el aporte de calor mínimo requerido para proteger contra el agrietamiento por hidrógeno, entonces se deben tomar precauciones alternativas (por ejemplo, un procedimiento de soldadura que incluya una secuencia de depósito de cordón de revenido).</p>
    </div>
    <div class="subsection">
        <h4>210-2 LIMITACIONES</h4>
        <div class="subsection">
            <h4>210-2.1 Requisitos Adicionales</h4>
            <p>La Parte 1 de esta Norma, "Alcance, Organización e Intención", contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse junto con la Parte 1.</p>
        </div>
        <div class="subsection">
            <h4>210-2.2 Modificaciones de Tuberías y Oleoductos</h4>
            <p>Este Artículo se limita a la aplicación de soldadura en servicio. Aunque este Artículo cubre aspectos de soldadura en servicio, no todos los aspectos de las modificaciones de componentes de presión o tuberías que se realizan para modificar o expandir un sistema de tuberías (por ejemplo, el procedimiento de perforación en caliente que puede seguir a la soldadura en servicio) están cubiertos por este Artículo. Este Artículo debe utilizarse junto con otro código de construcción aplicable o código posterior a la construcción que trate los detalles específicos de la modificación de componentes de presión o tuberías (por ejemplo, para perforación en caliente, consulte la Práctica Recomendada API 2201).</p>
        </div>
        <div class="subsection">
            <h4>210-2.3 Material de Componentes de Presión o Tuberías</h4>
            <p>Este Artículo se limitará a la soldadura en servicio en todos los componentes de presión de acero al carbono o tuberías. Este Artículo excluye la soldadura en aceros inoxidables, aceros aleados (por ejemplo, Cr-Mo) o materiales no ferrosos.</p>
        </div>
        <div class="subsection">
            <h4>210-2.4 Contenido de Componentes de Presión o Tuberías</h4>
            <p>Antes de realizar cualquier soldadura en servicio, el propietario deberá evaluar el efecto que la soldadura en servicio podría tener en el contenido de los componentes de presión o sistema de tuberías (por ejemplo, combustión, explosión y mayor susceptibilidad a la corrosión o fragilización). La soldadura en servicio solo debe realizarse en componentes de presión o tuberías donde la evaluación indique que no existe un riesgo significativo asociado con la degradación metalúrgica potencial o reacción química del proceso de soldadura en servicio y no un riesgo significativo de reacción química en el fluido de proceso como resultado del contacto potencial con altas temperaturas del metal.</p>
        </div>
        <div class="subsection">
            <h4>210-2.5 Presión de Operación</h4>
            <p>Un ajuste en la presión durante la soldadura en servicio puede no ser necesario desde la perspectiva de la soldadura, pero puede ser necesario para aumentar la seguridad del soldador si ocurre una perforación por quemado. Los aspectos de seguridad y planificación de contingencia para una ocurrencia de perforación por quemado deben planificarse de acuerdo con las prácticas de la empresa, estándares de la industria (por ejemplo, Práctica Recomendada API 2201) o código posterior a la construcción.</p>
        </div>
        <div class="subsection">
            <h4>210-2.6 Flujo de Operación</h4>
            <p>Un ajuste en el flujo durante la soldadura en servicio puede aumentar el riesgo de agrietamiento por hidrógeno (por ejemplo, aumentar el flujo) o el riesgo de perforación por quemado (por ejemplo, reducir el flujo). Un ajuste en el flujo debe abordarse antes de la soldadura en servicio.</p>
        </div>
        <div class="subsection">
            <h4>210-2.7 Tratamiento Térmico Posterior a la Soldadura (PWHT)</h4>
            <p>El PWHT es difícil de realizar mientras los componentes de presión o el sistema de tuberías permanecen en servicio. Si se requiere PWHT, el propietario deberá abordar todas las preocupaciones adicionales para asegurar que la soldadura y el PWHT posterior se completen de manera segura. Si esto no puede lograrse, entonces deberá evaluarse un método de reparación alternativo.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>210-3 DISEÑO</h4>
        <div class="subsection">
            <h4>210-3.1 Procedimiento de Soldadura de Filete en Servicio</h4>
            <p>Un procedimiento de soldadura de filete en servicio se define como un procedimiento que se utiliza para unir material adicional a los componentes de presión o tuberías en servicio para reforzar un área dañada (por ejemplo, manguitos de circunferencia completa y reparaciones con placas de parche) o para facilitar una modificación (por ejemplo, accesorio de perforación en caliente de circunferencia completa patentado). La soldadura de filete deberá diseñarse de acuerdo con un código de construcción aplicable o código posterior a la construcción.</p>
        </div>
        <div class="subsection">
            <h4>210-3.2 Procedimiento de Soldadura de Accesorio en Servicio</h4>
            <p>Un procedimiento de soldadura de accesorio en servicio se define como un procedimiento que se utiliza para realizar una modificación en los componentes de presión o tuberías existentes y generalmente incluye una junta soldada de ranura. La soldadura de accesorio deberá diseñarse bajo uno de los dos criterios siguientes:</p>
            <p>(a) Si el accesorio proporciona un refuerzo adecuado de acuerdo con un código de construcción aplicable o código posterior a la construcción, no se requiere refuerzo adicional.</p>
            <p>(b) Si el accesorio no proporciona un refuerzo adecuado de acuerdo con un código de construcción aplicable o código posterior a la construcción, se requiere refuerzo adicional.</p>
        </div>
        <div class="subsection">
            <h4>210-3.3 Procedimiento de Depósito de Metal de Soldadura en Servicio</h4>
            <p>Un procedimiento de depósito de metal de soldadura en servicio se define como un procedimiento que se utiliza para depositar metal de soldadura sobre la superficie de los componentes de presión o tuberías para reforzar un área adelgazada (por ejemplo, pérdida de metal debido a corrosión o erosión). El depósito de metal de soldadura deberá diseñarse de acuerdo con un código de construcción aplicable o código posterior a la construcción.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>210-4 FABRICACIÓN</h4>
        <div class="subsection">
            <h4>210-4.1 Calificación del Procedimiento de Soldadura: Soldadura</h4>
            <p>Cuando sea aprobado por el ingeniero de soldadura o el inspector de soldadura, un procedimiento de soldadura calificado según el código de construcción nuevo aplicable o código posterior a la construcción puede utilizarse para aplicaciones de soldadura en servicio. Sin embargo, los procedimientos de soldadura que se van a utilizar para soldar en componentes de presión o tuberías en servicio deberán abordar la probabilidad de perforación por quemado y agrietamiento por hidrógeno. Cuando lo requiera el ingeniero de soldadura o el inspector de soldadura, el procedimiento de soldadura deberá calificarse utilizando la configuración descrita en el Apéndice Obligatorio 210-1 y las pruebas en el párrafo 210-4.2. Las variables esenciales para la calificación del procedimiento de soldadura deberán estar de acuerdo con un código de construcción aplicable o código posterior a la construcción y deberán incluir las variables esenciales de soldadura en servicio enumeradas en el párrafo 210-4.1.1.</p>
            <p>ADVERTENCIA: Los materiales que tienen altos valores de equivalencia de carbono (por ejemplo, > 0.45) o experimentan tasas de enfriamiento de soldadura severas (es decir, alto potencial de enfriamiento) pueden requerir precauciones especiales. Dichas precauciones pueden incluir pero no limitarse a una secuencia de soldadura de cordón de revenido o la aplicación de un paso de precalentamiento antes de la soldadura en servicio.</p>
        </div>
        <div class="subsection">
            <h4>210-4.1.1 Variables Esenciales de Soldadura en Servicio</h4>
            <p>Las variables esenciales de soldadura en servicio son requisitos específicos para la soldadura en servicio que deben usarse además de las variables esenciales de un código de construcción aplicable o código posterior a la construcción.</p>
            <div class="subsection">
                <h4>210-4.1.1.1 Tipo de Soldadura</h4>
                <p>Las soldaduras en servicio deberán agruparse en uno de los tres tipos siguientes y calificarse por separado:</p>
                <p>(a) soldadura de filete en servicio</p>
                <p>(b) soldadura de accesorio en servicio</p>
                <p>(c) depósito de metal de soldadura en servicio</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.2 Potencial de Enfriamiento</h4>
                <p>La velocidad a la que se enfría una soldadura, o potencial de enfriamiento, es una variable esencial [por ejemplo, tiempo de enfriamiento de 800°C a 500°C (1,472°F a 932°F) (seg) o velocidad de enfriamiento a 556°C (1,000°F) (°F/seg)]. Un aumento en el potencial de enfriamiento del componente de presión o tubería en servicio mayor que el potencial de enfriamiento utilizado durante la calificación del procedimiento de soldadura requiere recalificación. El potencial de enfriamiento puede determinarse mediante medición directa, cálculo, modelos de computadora o una combinación de estos métodos.</p>
                <p>NOTA: En la calificación del procedimiento, el espesor de la pared no es una variable esencial pero está directamente relacionado con el potencial de enfriamiento de los componentes de presión o tuberías, que es una variable esencial.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.3 Equivalencia de Carbono</h4>
                <p>El procedimiento de soldadura en servicio debe agruparse según la equivalencia de carbono del material. La equivalencia de carbono se especifica por separado para los componentes de presión o tuberías en servicio y el segundo material base (por ejemplo, manguito de circunferencia completa o material de accesorio). Un procedimiento de soldadura en servicio calificado en un material de equivalencia de carbono específico también puede ser adecuado para materiales de menor equivalencia de carbono asumiendo que los potenciales de enfriamiento son los mismos. Un procedimiento calificado en material de menor equivalencia de carbono puede usarse en una aplicación de reparación en un material de mayor equivalencia de carbono siempre que el potencial de enfriamiento de la aplicación de reparación sea menor que el potencial de enfriamiento del procedimiento calificado y no haya un aumento en la susceptibilidad al agrietamiento por hidrógeno. La equivalencia de carbono debe calcularse utilizando la siguiente fórmula con los elementos expresados en cantidades de porcentaje en peso:</p>
                <p>CE=C+(Mn/6)+((Cr+Mo+V)/6)+((Ni+Cu)/15)</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.4 Proceso de Soldadura</h4>
                <p>Un cambio en el proceso de soldadura requerirá recalificación.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.5 Consumible de Soldadura</h4>
                <p>Un aumento en el nivel de hidrógeno difusible del consumible de soldadura o un cambio en el tipo de electrodo según lo definido por ASME BPVC, Sección IX, Tabla QW-432, u otro código de construcción aplicable o código posterior a la construcción, requerirá recalificación.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.6 Aporte de Calor</h4>
                <p>El rango de aporte de calor está determinado por la calificación del procedimiento de soldadura y es el rango que producirá una soldadura que no se perforará por quemado y tiene una baja probabilidad de producir una microestructura susceptible al agrietamiento. Un cambio en el rango de aporte de calor requerirá recalificación. El aporte de calor debe calcularse de acuerdo con ASME BPVC, Sección IX, QW-409.1(a) o QW-409.1(b), u otro código de construcción aplicable o código posterior a la construcción.</p>
                <p>(a) Un aumento en el aporte de calor por encima del rango especificado en la calificación del procedimiento en servicio o especificado en el procedimiento de soldadura en servicio deberá evaluarse para el riesgo de perforación por quemado. La probabilidad de perforación por quemado debe evaluarse experimentalmente, mediante simulación por computadora o una combinación de estos métodos.</p>
                <p>(b) Una disminución en el aporte de calor por debajo del rango especificado en la calificación del procedimiento en servicio o especificado en el procedimiento de soldadura en servicio requerirá recalificación para determinar la probabilidad de susceptibilidad al agrietamiento por hidrógeno. La susceptibilidad al agrietamiento por hidrógeno debe evaluarse utilizando la prueba descrita en el párrafo 210-4.2.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.7 Corriente de Soldadura</h4>
                <p>Un cambio en el rango de corriente de soldadura utilizado en la calificación del procedimiento o especificado en el procedimiento de soldadura requerirá recalificación.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.8 Horneado Posterior a la Soldadura</h4>
                <p>Una reducción de la temperatura o tiempo de la aplicación de un horneado posterior a la soldadura requerirá recalificación. Cuando se especifique, se deberá especificar la temperatura mínima de remojo y el tiempo. Cualquier efecto potencial que el horneado posterior a la soldadura tenga en el contenido de los componentes de presión o tuberías deberá evaluarse.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.9 Precalentamiento</h4>
                <p>Una reducción de la temperatura o tiempo de la aplicación de un requisito de precalentamiento requerirá recalificación. Cuando se especifique, se deberá especificar la temperatura mínima de remojo y el tiempo. Cualquier efecto potencial que el requisito de precalentamiento tenga en el contenido de los componentes de presión o tuberías deberá evaluarse.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.10 Horneado de Hidrógeno</h4>
                <p>Un cambio en la temperatura o tiempo de la aplicación del procedimiento de horneado de hidrógeno requerirá recalificación. Cualquier efecto potencial que el requisito de horneado de hidrógeno tenga en el contenido de los componentes de presión o tuberías deberá evaluarse.</p>
            </div>
            <div class="subsection">
                <h4>210-4.1.1.11 Colocación del Cordón Superficial</h4>
                <p>Cualquier cambio en la posición del cordón de soldadura o secuencia de depósito del procedimiento de soldadura en servicio requerirá recalificación.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>210-4.2 Calificación del Procedimiento de Soldadura: Pruebas</h4>
            <p>Los procedimientos de soldadura que se van a utilizar para soldar en componentes de presión o tuberías en servicio deberán abordar la probabilidad de perforación por quemado y susceptibilidad al agrietamiento por hidrógeno. La probabilidad de perforación por quemado debe evaluarse experimentalmente, mediante simulación por computadora o una combinación de estos métodos. La susceptibilidad al agrietamiento por hidrógeno debe evaluarse mediante pruebas destructivas y no destructivas. Cuando sea aprobado por el ingeniero de soldadura o el inspector de soldadura, un procedimiento de soldadura calificado según el código de construcción nuevo aplicable o código posterior a la construcción puede utilizarse para aplicaciones de soldadura en servicio. Cuando lo requiera el ingeniero de soldadura o el inspector de soldadura, el procedimiento de soldadura deberá calificarse utilizando la configuración descrita en el Apéndice Obligatorio 210-1 y las pruebas en el párrafo 210-4.2. Las variables esenciales para la calificación del procedimiento de soldadura deberán estar de acuerdo con un código de construcción aplicable o código posterior a la construcción y deberán incluir las variables esenciales de soldadura en servicio enumeradas en el párrafo 210-4.1.1.</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.1 Métodos de Prueba Destructiva</h4>
            <p>Las muestras de prueba del procedimiento de soldadura en servicio deberán tomarse de la probeta de soldadura de calificación del procedimiento como se especifica en el párrafo 210-4.2.2. El procedimiento deberá calificarse mediante la finalización exitosa de las pruebas especificadas en los párrafos 210-4.2.1.1 a 210-4.2.1.4. El número de pruebas para cada procedimiento de soldadura en servicio se da en la Tabla 210-4.2.1-1. Deberán fabricarse dos probetas de soldadura de calificación del procedimiento si no hay suficiente material disponible para todas las muestras de prueba en una calificación del procedimiento. Las probetas de prueba destructiva deberán mecanizarse de acuerdo con AWS B4.0 u otro estándar aplicable.</p>
            
            <div class="table-container">
                <table class="api-table">
                    <caption>Tabla 210-4.2.1-1—Tipo y Número de Probetas de Prueba Requeridas para una Calificación de Procedimiento de Soldadura en Servicio</caption>
                    <thead>
                        <tr>
                            <th>Tipo de Soldadura</th>
                            <th>Prueba de Macrosección</th>
                            <th>Prueba de Dureza</th>
                            <th>Prueba de Nick-Break</th>
                            <th>Prueba de Doblamiento de Cara o Lado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Filete</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Accesorio</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Depósito de Metal</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="subsection">
            <h4>210-4.2.1.1 Prueba de Macrosección</h4>
            <p>Las muestras de prueba de macrosección deberán retirarse y mecanizarse utilizando métodos no térmicos. La muestra de prueba de macrosección debe estar de acuerdo con ASTM E3 u otro documento equivalente para dar una representación clara de la región de la soldadura. El examen visual de las muestras de prueba de macrosección deberá mostrar</p>
            <p>(a) fusión completa</p>
            <p>(b) sin grietas</p>
            <p>(c) sin socavadura que exceda 0.8 mm (0.031 pulg.) o 10% del espesor de pared de los componentes de presión o tuberías en servicio simulados, lo que sea menor</p>
            <p>(d) solo para procedimientos de soldadura de filete, las longitudes de la pierna de la soldadura de filete son al menos iguales a la longitud de la pierna especificada en el procedimiento de soldadura u otro documento de control de proceso aplicable</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.1.2 Prueba de Dureza</h4>
            <p>Las muestras de prueba de dureza deberán probarse de acuerdo con ASTM E384 u otro documento equivalente. Se deberán hacer un mínimo de cinco indentaciones de dureza Vickers, utilizando una carga de 10 kg, en la zona afectada por el calor de grano grueso del pie de la soldadura de acuerdo con la Figura 210-4.2.1.2-1. Las muestras de prueba de macrosección pueden usarse para las muestras de prueba de dureza después de que se haya completado el análisis metalográfico.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.1.2-1.png" class="figure-image">
                <p class="figure-caption">Figura 210-4.2.1.2-1—Ubicaciones de Indentación de Dureza en la Zona Afectada por el Calor</p>
            </div>
        </div>
        <div class="subsection">
            <h4>210-4.2.1.3 Prueba de Nick-Break</h4>
            <p>Las muestras de prueba de nick-break deberán retirarse y mecanizarse utilizando métodos no térmicos, y deberán probarse según AWS B4.0 u otro documento equivalente. La inspección visual de las superficies de fractura de la muestra de prueba de nick-break deberá mostrar</p>
            <p>(a) fusión completa.</p>
            <p>(b) ningún poro único excede 1.6 mm (0.063 pulg.) de tamaño, y el área combinada de todos los poros no excede el 2% del área de superficie de fractura expuesta.</p>
            <p>(c) ninguna inclusión de escoria excede 0.8 mm (0.031 pulg.) de profundidad y 3.2 mm (0.125 pulg.) o la mitad del espesor nominal de la pared de la tubería en longitud, lo que sea menor. La distancia entre inclusiones de escoria adyacentes no deberá ser menor a 12.7 mm (0.500 pulg.).</p>
            <p>(d) los ojos de pez, según se definen en AWS A3.0, no deberán ser causa de rechazo.</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.1.4 Prueba de Doblamiento de Cara o Lado</h4>
            <p>Las muestras de prueba de doblamiento deberán mecanizarse utilizando métodos no térmicos, y deberán probarse según AWS B4.0 u otro documento equivalente.1 Las muestras de prueba de doblamiento deben doblarse en un dispositivo de prueba de doblamiento guiado o equipo equivalente. Para los dobleces de cara, la muestra de prueba de doblamiento debe colocarse con la cara de la soldadura opuesta al mandril (Figura 210-4.2.1.4-1). El refuerzo de la soldadura debe eliminarse antes del doblamiento. La soldadura restante no debe exceder 1.6 mm (0.063 pulg.). La muestra de prueba de doblamiento debe doblarse hasta que la curvatura de la probeta de prueba de doblamiento sea aproximadamente en forma de U (Figura 210-4.2.1.4-2). La inspección visual de las probetas de prueba de doblamiento deberá mostrar</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.1.4-1.png" class="figure-image">
                <p class="figure-caption">Figura 210-4.2.1.4-1—Ubicación del Mandril en Relación con el Pie de la Soldadura al Realizar una Prueba de Doblamiento de Cara para una Soldadura de Filete Típica en Servicio</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.1.4-2.png" class="figure-image">
                <p class="figure-caption">Figura 210-4.2.1.4-2—Ejemplos de Muestras de Prueba de Doblamiento de Cara para Calificación de Procedimiento de Soldadura en Servicio</p>
            </div>
            
            <p>(a) no hay grietas u otros defectos de soldadura que excedan 3.2 mm (0.125 pulg.) o la mitad del espesor nominal de la pared de la tubería, lo que sea menor, en longitud presentes en la soldadura o zona de fusión</p>
            <p>(b) las grietas que se originan en el borde de la probeta de prueba de doblamiento que tienen menos de 6.4 mm (0.250 pulg.) de longitud en cualquier dirección no deben ser causa de rechazo a menos que esté presente un defecto de soldadura obvio</p>
        </div>
        <div class="subsection">
            <h4>210-4.2.2 Ubicación de la Muestra</h4>
            <p>Las ubicaciones de las muestras de prueba del procedimiento de soldadura en servicio para una soldadura de filete deben tomarse de intervalos igualmente espaciados alrededor de la probeta de soldadura de calificación del procedimiento como se muestra en la Figura 210-4.2.2-1. Las ubicaciones de las muestras de prueba del procedimiento de soldadura en servicio para una soldadura de accesorio deben tomarse de intervalos igualmente espaciados alrededor de la probeta de soldadura de calificación del procedimiento con muestras tomadas de las partes de la horquilla y la silla de la soldadura como se muestra en la Figura 210-4.2.2-2. Las ubicaciones de las muestras de prueba del procedimiento de soldadura en servicio para una probeta de soldadura de depósito de metal deben tomarse como se muestra en la Figura 210-4.2.2-3.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.2-1.png" class="figure-image">
                <p class="figure-caption">Figura 210-4.2.2-1—Ubicaciones de Muestras de Prueba para Calificación de Procedimiento de Soldadura de Filete en Servicio Asumiendo Espaciado Igual Alrededor de la Circunferencia para Obtener TODAS las Probetas de Prueba Requeridas</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.2-2.png" class="figure-image">
                <p class="figure-caption">Figura 210-4.2.2-2—Ubicaciones de Muestras de Prueba para Calificación de Procedimiento de Soldadura de Accesorio en Servicio Asumiendo Espaciado Igual Alrededor de la Circunferencia para Obtener TODAS las Probetas de Prueba Requeridas</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_210-4.2.2-3.png" class="figure-image">
                <p class="figure-caption">Figura 210-4.2.2-3—Ubicaciones de Muestras de Prueba para Calificación de Procedimiento de Soldadura de Depósito de Metal en Servicio</p>
            </div>
        </div>
        <div class="subsection">
            <h4>210-4.3 Calificación del Desempeño del Soldador</h4>
            <p>Los soldadores que vayan a realizar soldadura en servicio en componentes de presión o tuberías deberán demostrar la capacidad de depositar soldaduras que produzcan microestructuras que no sean susceptibles al agrietamiento y/o evitar perforar por quemado el componente de presión o tubería. Esto puede demostrarse depositando exitosamente una soldadura en servicio o calificando a un soldador utilizando la configuración detallada en el Apéndice Obligatorio 210-1 y los requisitos de prueba descritos en el párrafo 210-4.2.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>210-5 EXAMEN</h4>
        <div class="subsection">
            <h4>210-5.1 Método END</h4>
            <p>La soldadura en servicio, realizada en el campo, deberá examinarse después de que se haya completado la soldadura. El método de examen deberá estar de acuerdo con un código de construcción aplicable o código posterior a la construcción con la capacidad adicional de localizar defectos de soldadura incluyendo el agrietamiento por hidrógeno ya que es una preocupación importante para la soldadura en servicio bajo las condiciones de servicio (por ejemplo, temperatura de operación). Los criterios de aceptación para el examen END deberán estar de acuerdo con un código de construcción aplicable o código posterior a la construcción. Si la soldadura se realizó para reparar un defecto inducido por el servicio, el método END que se utilizó para detectar el defecto deberá usarse para verificar la eliminación del defecto.</p>
            <p>Cuando se aplican procedimientos END después de la soldadura en servicio, pueden ser necesarios procedimientos especiales donde los componentes operan a temperaturas significativamente por encima de la ambiente.</p>
        </div>
        <div class="subsection">
            <h4>210-5.2 Tiempo de Examen</h4>
            <p>Cuando el agrietamiento por hidrógeno es una preocupación, las soldaduras en servicio deben examinarse de 24 a 72 horas después de que se haya completado la soldadura.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>210-6 PRUEBAS</h4>
        <p>Las pruebas deben completarse de acuerdo con un código de construcción aplicable o código posterior a la construcción. Si se contempla la prueba hidrostática de un componente de perforación en caliente después de la instalación, se aconseja al usuario considerar la temperatura del componente en operación para evitar que el fluido de prueba se convierta en vapor.</p>
    </div>
    <div class="subsection">
        <h4>210-7 REFERENCIAS (22)</h4>
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        <ul>
            <li>Manual de Reparación de Tuberías AGA, 31 de diciembre de 1994<br>
            Editor: American Gas Association (AGA), 400 North Capitol Street, NW, Washington, DC 20001 (www.aga.org)</li>
            <li>Práctica Recomendada API 2201, Prácticas Seguras de Perforación en Caliente en las Industrias del Petróleo y Petroquímica</li>
            <li>Práctica Recomendada API 579-1</li>
            <li>API 579-1/ASME FFS-1, Aptitud para el Servicio</li>
            <li>Norma API 1104, Soldadura de Tuberías e Instalaciones Relacionadas<br>
            Editor: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
            <li>ANSI/AWS A3.0, Definiciones Estándar; Incluyendo Términos para Adhesión, Soldadura Fuerte, Soldadura Blanda, Corte Térmico y Rociado Térmico</li>
            <li>ANSI/AWS B4.0, Métodos Estándar para Pruebas Mecánicas de Soldaduras<br>
            Editor: American Welding Society (AWS), 8669 NW 36 Street, No. 130, Miami, FL 33166 (www.aws.org)</li>
            <li>ANSI/NB-23-2007, Código de Inspección de la National Board<br>
            Editor: National Board of Boiler and Pressure Vessel Inspectors (NBBI), 1055 Crupper Avenue, Columbus, OH 43229 (www.nationalboard.org)</li>
            <li>ASME B31.1, Tubería a Presión</li>
            <li>ASME B31.3, Tubería de Proceso</li>
            <li>ASME B31.4, Sistemas de Transporte por Tubería para Hidrocarburos Líquidos y Otros Líquidos</li>
            <li>ASME B31.8, Sistemas de Tubería de Transmisión y Distribución de Gas</li>
            <li>Código de Calderas y Recipientes a Presión ASME, Edición 2007, Sección IX, Calificación de Soldadura y Soldadura Fuerte; Artículo II - Calificación de Procedimientos de Soldadura; Artículo III - Calificación de Desempeño de Soldadura<br>
            Editor: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</li>
            <li>ASTM E3, Práctica Estándar para la Preparación de Muestras Metalográficas</li>
            <li>ASTM E384, Método de Prueba Estándar para Dureza por Microindentación de Materiales<br>
            Editor: American Society for Testing and Materials (ASTM International), 100 Barr Harbor Drive, P.O. Box C700, West Conshohocken, PA 19428-2959 (www.astm.org)</li>
            <li>Norma CSA Z662, Sistemas de Tuberías de Petróleo y Gas<br>
            Editor: Canadian Standards Association (CSA), 178 Rexdale Boulevard, Toronto, Ontario M9W 1R3, Canada (www.csagroup.org)</li>
        </ul>
    </div>
    <div class="subsection">
        <h4>Apéndice Obligatorio 210-1</h4>
        <h4>Configuración de Calificación de Procedimiento de Soldadura en Servicio/Calificación de Desempeño de Soldador</h4>
        <p>La intención de producir una calificación de procedimiento de soldadura en servicio simulada es hacer soldaduras que tengan más probabilidades de producir agrietamiento por hidrógeno durante la calificación que en el campo. Esto puede hacerse haciendo soldaduras en acero al carbono de mayor equivalencia de carbono, utilizando un mayor potencial de enfriamiento, o incorporando ambas variables para tener un procedimiento calificado de manera más conservadora.</p>
        <p>La configuración simulada en servicio utilizada para la calificación del procedimiento en servicio puede ser cualquier configuración de junta aplicable, pero es imperativo que la probeta de soldadura de calificación del procedimiento en servicio sea más susceptible al agrietamiento por hidrógeno. Es una buena práctica simular la soldadura de campo real que se hará utilizando el procedimiento de soldadura en servicio. Es común que la soldadura de calificación de producción en servicio se haga usando una tubería de acero al carbono de mayor equivalencia de carbono con respaldo de agua porque se ha demostrado que el agua enfría las soldaduras más rápido que cualquier otro medio de enfriamiento. Es importante tener en cuenta que el uso de agua como medio de enfriamiento puede hacer que el procedimiento de soldadura sea excesivamente conservador hasta el punto de hacer imposible calificar exitosamente la probeta de soldadura.</p>
        <p>La probeta de calificación del procedimiento en servicio debe tener suficiente longitud para retirar todas las probetas de prueba requeridas. Puede usarse más de un ensamblaje si no todas las probetas requeridas pueden retirarse de un solo ensamblaje. El medio de enfriamiento debe circular a través del ensamblaje de prueba antes de la soldadura. La configuración simulada en servicio debe prepararse de la siguiente manera:</p>
        <p>(a) La configuración simulada en servicio para una soldadura de filete en servicio debe prepararse de manera similar a la Figura 210-1-1 o una posición alternativa que simule la aplicación de soldadura en servicio. El manguito debe tener un ajuste cercano a la tubería portadora a menos que se vaya a calificar un accesorio de manguito de diseño especial. Las soldaduras longitudinales de ranura del manguito deben soldarse antes de las soldaduras de filete en servicio para mejorar el ajuste [ver Nota en la Figura 210-1-1].</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_210-1-1.png" class="figure-image">
            <p class="figure-caption">Figura 210-1-1—Ensamblaje de Prueba de Procedimiento y Calificación de Soldador para una Soldadura de Filete en Servicio</p>
        </div>
        
        <p>(b) La configuración simulada en servicio para una soldadura de accesorio en servicio debe prepararse de manera similar a la Figura 210-1-2 o una posición alternativa que simule la aplicación de soldadura en servicio. Los puntos de soldadura deben esmerilarse para asegurar una fusión completa a lo largo de toda la longitud de la soldadura. No se deben tomar muestras de prueba de las ubicaciones de los puntos de soldadura.</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_210-1-2.png" class="figure-image">
            <p class="figure-caption">Figura 210-1-2—Ensamblaje de Prueba de Procedimiento y Calificación de Soldador para una Soldadura de Accesorio en Servicio</p>
        </div>
        
        <p>(c) La configuración simulada en servicio para una soldadura de depósito de metal en servicio debe prepararse de manera similar a la Figura 210-1-1 pero sin usar el manguito. La soldadura se depositará directamente sobre la pared de la tubería. Es común eliminar mecánicamente una cantidad especificada de pared para simular la pérdida por corrosión. La probabilidad de perforación por quemado debe evaluarse antes de realizar el depósito de metal de soldadura utilizando el procedimiento calificado en el campo.</p>
        <p>Después de completar la soldadura de calificación del procedimiento, el medio de enfriamiento debe continuar hasta que todo el ensamblaje haya alcanzado una temperatura de equilibrio uniforme.</p>
    </div>
    `
});