// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 3
registerChapter('API574', {
    id: 3,
    title: "Terms, Definitions, Acronyms, and Abbreviations",
    titleEs: "Términos, Definiciones, Acrónimos y Abreviaturas",
    content: `<h3>3 Terms, Definitions, Acronyms, and Abbreviations</h3>
    <div class="subsection">
        <p>For the purposes of this document, the following terms and definitions apply.</p>
        <p>NOTE Definitions for terms delineated with asterisks are maintained by API 574. If another document plans to reference, see API Bulletin 590 for reference.</p>
        
        <h4>3.1 Terms and Definitions</h4>
        
        <div class="subsection">
            <h4>3.1.1 alloy material</h4>
            <p>Any metallic material (including welding filler materials) that contains alloying elements, such as chromium, nickel, or molybdenum, which are intentionally added to enhance mechanical or physical properties and/or corrosion resistance.</p>
            <p>NOTE 1 Alloys may be ferrous or nonferrous based.</p>
            <p>NOTE 2 For purposes of this recommended practice, carbon steels are not considered alloys.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.2 alteration</h4>
            <p>A physical change in any component that has design implications affecting the pressure-containing capability of a piping system beyond the scope described in existing data reports.</p>
            <p>NOTE The following are not considered alterations: comparable or duplicate replacement and replacements in-kind and the addition of small-bore attachments that do not require reinforcement or additional support.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.3 auxiliary piping</h4>
            <p>Instrument and machinery piping, typically small-bore secondary process piping that can be isolated from primary piping systems but is normally not isolated.</p>
            <p>NOTE Examples include flush lines, seal oil lines, analyzer lines, balance lines, buffer gas lines, drains, and vents.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.4 cladding</h4>
            <p>A metal integrally bonded onto another metal under high pressure and temperature whose properties are better suited to resist damage from the process than the substrate metal.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.5 condition monitoring location</h4>
            <p>CML</p>
            <p>A designated area on piping systems where periodic examinations are conducted to directly assess and monitor the condition of the piping system using a variety of examination methods and techniques based on damage mechanism susceptibility.</p>
            <p>NOTE 1 CMLs may contain one or more examination points and can be a single small area on a piping system [e.g. a 2 in. (50 mm) diameter spot] or a plane through a section of pipe where examination points exist in all four quadrants of the plane.</p>
            <p>NOTE 2 CMLs include, but are not limited to, what were previously called "thickness monitoring locations."</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.6 contact points</h4>
            <p>The locations at which a pipe or component rests on or against a support or other object, which may increase its susceptibility to external corrosion, fretting, wear, or deformation, especially because of moisture and/or solids collecting at the interface of the pipe and supporting member.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.7 corrosion allowance</h4>
            <p>Additional material thickness available to allow for metal loss during the service life of the piping component.</p>
            <p>NOTE Corrosion allowance is not used in design strength calculations.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.8 corrosion rate</h4>
            <p>The rate of metal loss due to erosion, erosion-corrosion, and/or the chemical reaction(s) with the environment, either internal and/or external.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.9 corrosion specialist</h4>
            <p>A person acceptable to the owner-operator who is knowledgeable and experienced in the specific process chemistries, damage mechanisms, materials selection, corrosion mitigation methods, corrosion-monitoring techniques, and their impact on piping systems.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.10 corrosion under insulation</h4>
            <p>CUI</p>
            <p>External corrosion of piping, pressure vessel, and structural components resulting from water trapped under insulation.</p>
            <p>NOTE External chloride stress corrosion cracking (ECSCC) of austenitic and duplex stainless steel under insulation is also classified as CUI damage.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.11 critical check valves</h4>
            <p>Check valves that need to operate reliably to avoid the potential for hazardous events or substantial consequences should reverse flow occur.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.12 cyclic service</h4>
            <p>Refers to service conditions that may result in cyclic loading and produce fatigue damage or failure (e.g. cyclic loading from pressure, thermal, and/or mechanical loads).</p>
            <p>NOTE 1 Other cyclic loads associated with vibration may arise from such sources as impact, turbulent flow vortices, resonance in compressors, and wind, or any combination thereof.</p>
            <p>NOTE 2 API 579-1/ASME FFS-1—Section I.A.15 has a definition of cyclic service. A screening procedure to determine if a component is in cyclic service is provided in Part 14. A definition of "severe cyclic conditions" is in ASME B31.3—Section 300.2, Definitions.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.13 damage mechanism</h4>
            <p>Any type of deterioration encountered in the refining and chemical process industry that can result in flaws/defects that can affect the integrity of equipment.</p>
            <p>EXAMPLE Corrosion, cracking, erosion, dents, and other mechanical, physical, or chemical impacts. See API 571 for a comprehensive list and description of damage mechanisms.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.14 deadlegs</h4>
            <p>Components of a piping system that normally have little or no significant flow.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.15 defect</h4>
            <p>A discontinuity or discontinuities that by nature or accumulated effect render a part or product unable to meet minimum applicable acceptance standards or specifications (e.g. total crack length).</p>
            <p>NOTE The term designates rejectability.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.16 design pressure</h4>
            <p>The pressure at the most severe condition of coincident internal or external pressure and temperature (minimum or maximum) expected during service.</p>
            <p>NOTE It is the same as the design pressure defined in ASME B31.3 and other code sections and is subject to the same rules relating to allowances for variations of pressure or temperature or both.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.17 design temperature</h4>
            <p>The temperature used for the design of the piping system per the applicable construction code.</p>
            <p>NOTE It is the same as the design temperature defined in ASME B31.3 and other code sections and is subject to the same rules relating to allowances for variations of pressure or temperature or both. Different components in the same piping system or circuit can have different design temperatures. In establishing this temperature, consideration should be given to process fluid temperatures, ambient temperatures, heating/cooling media temperatures, and insulation.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.18* doubling</h4>
            <p>The error that can occur when an ultrasonic thickness measurement instrument displays the measured thickness value based on the second back-wall echo (i.e. double the thickness) versus the first back-wall echo.</p>
            <p>NOTE 1 This can occur when measuring thicknesses below the minimum specified range of a transducer (probe) or when the transducer element is either worn or low in sensitivity.</p>
            <p>NOTE 2 Doubling (or even tripling) can also occur in some cases when measuring thicknesses around 0.200" (5 mm) while using echo-to-echo mode if the signals from the second or third back-wall echo are smaller in amplitude than subsequent echoes.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.19 examination point</h4>
            <p>recording point<br>measurement point<br>test point</p>
            <p>A more specific location within a CML. CMLs may contain multiple examination points, for example, a piping component may be a CML and have multiple examination points (e.g. an examination point in all four quadrants of the CML on the piping component).</p>
            <p>NOTE The term "test point" is no longer in use because "test" refers to mechanical or physical tests (e.g. tensile tests or pressure tests).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.20 examinations</h4>
            <p>A process by which an examiner or inspector investigates a component of the piping system using nondestructive examination (NDE) in accordance with approved NDE procedures (e.g. inspection of a CML and quality control of repair areas).</p>
            <p>NOTE Examinations would be typically those actions conducted by NDE personnel, welding inspectors, or coating inspectors but may also be conducted by authorized piping inspectors.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.21 examiner</h4>
            <p>A person who assists the inspector by performing specific NDE on piping system components and evaluates to the applicable acceptance criteria but does not evaluate the results of those examinations in accordance with API 570 requirements, unless specifically trained and authorized to do so by the owner-operator.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.22 external inspection</h4>
            <p>A visual inspection performed from the outside of a piping system to find conditions that could impact the piping systems' ability to maintain pressure integrity or conditions that compromise the integrity (e.g. stanchions, pipe supports, shoes, and hangers). The external inspection may be done either while the piping is operating or while the piping is out of service and can be conducted at the same time as an on stream inspection.</p>
            <p>NOTE External inspections are also intended to find conditions that compromise the integrity of the coating and insulation coverings, and attachments (e.g. instrument and small branch connections).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.23 Fitness-For-Service evaluation</h4>
            <p>A methodology whereby flaws and other deterioration/damage contained within piping systems are assessed in order to determine the integrity of the piping for continued service.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.24 fitting</h4>
            <p>A piping component usually associated with a branch connection, a change in direction, or a change in piping diameter.</p>
            <p>NOTE Flanges are not considered fittings.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.25 flammable materials</h4>
            <p>As used in this recommended practice, includes all fluids that will support combustion.</p>
            <p>NOTE 1 Refer to NFPA 704 for guidance on classifying fluids.</p>
            <p>NOTE 2 Some regulatory documents include separate definitions of flammables and combustibles based on their flash point. In this document, flammable is used to describe both, and the flash point, boiling point, autoignition temperature, or other properties are used in addition to better describe the hazard.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.26 flash point</h4>
            <p>The lowest temperature at which a flammable product emits enough vapor to form an ignitable mixture in air.</p>
            <p>NOTE 1 For example, gasoline's flash point is about −45 °F, and diesel's flash point varies from about 125 °F to 200 °F.</p>
            <p>NOTE 2 An ignition source is required to cause ignition above the flash point but below the autoignition temperature.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.27 flaw</h4>
            <p>An imperfection in a piping system detected by NDE, which may or may not be a defect, depending upon the applied acceptance criteria.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.28 general corrosion</h4>
            <p>Corrosion distributed approximately uniform over the surface of the metal.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.29 hold point</h4>
            <p>A point in the repair or alteration process beyond which work may not proceed until the required inspection or NDE has been performed.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.30 imperfection</h4>
            <p>Flaws or other discontinuities noted during inspection or examination that may or may not exceed the applicable acceptance criteria.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.31 indication</h4>
            <p>A response or evidence resulting from the application of NDE that may be nonrelevant, flawed, or defective upon further analysis.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.32 injection points</h4>
            <p>Injection points are locations where water, steam, chemicals, or process additives are introduced into a process stream at relatively low flow/volume rates as compared to the flow/volume rate of the parent stream.</p>
            <p>NOTE 1 Corrosion inhibitors, neutralizers, process antifoulants, desalter demulsifiers, oxygen scavengers, caustic, and water washes are most often recognized as requiring special attention in designing the point of injection. Process additives, chemicals, and water are injected into process streams to achieve specific process objectives.</p>
            <p>NOTE 2 Injection points do not include locations where two process streams join (see 3.1.48, "mixing points").</p>
            <p>EXAMPLE Chlorinating agents in reformers, water injection in overhead systems, polysulfide injection in catalytic cracking wet gas, antifoam injections, inhibitors, and neutralizers.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.33 in-service</h4>
            <p>The life-cycle stage of a piping system that begins after initial installation (where typically initial commissioning or placing into active service follows) and ends at decommissioning.</p>
            <p>NOTE 1 Piping systems that are idle in an operating site and piping systems not currently in operation because of a process outage are still considered in-service piping systems.</p>
            <p>NOTE 2 Does not include piping systems that are still under construction or in transport to the site prior to being placed in service or piping systems that have been retired.</p>
            <p>NOTE 3 Installed spare piping is also considered in-service, whereas spare piping that is not installed is not considered in-service.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.34 in-service inspection</h4>
            <p>All inspection activities associated with in-service piping (after installation, but before it is decommissioned).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.35 inspection</h4>
            <p>The external, internal, or on-stream evaluation (or any combination of the three) of the condition of a piping system conducted by the authorized inspector or the designee.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.36 inspection code</h4>
            <p>Shortened title for API 570.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.37 inspection plan</h4>
            <p>A strategy defining how and when a piece of pressure equipment and associated components will be inspected, examined, repaired, and/or maintained.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.38 inspector</h4>
            <p>A shortened title for an authorized piping inspector qualified and certified in accordance with API 570.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.39 integrity operating window</h4>
            <p>Established limits for process variables (parameters) that can affect the integrity of the equipment if the process operation deviates from the established limits for a predetermined length of time [includes critical, standard, and informational integrity operating windows (IOWs)].</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.40 intermittent service</h4>
            <p>The condition of a piping system whereby it is not in continuous operating service (i.e. it operates at regular or irregular intervals rather than continuously).</p>
            <p>NOTE Occasional turnarounds or other infrequent maintenance outages in an otherwise continuous process service does not constitute intermittent service.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.41 internal inspection</h4>
            <p>An inspection performed on the inside surface of a piping system using visual and/or NDE techniques.</p>
            <p>NOTE NDE on the outside of the pipe to determine the remaining thickness does not constitute an internal inspection.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.42 jurisdiction</h4>
            <p>A legally constituted governmental administration that may adopt rules relating to process piping systems.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.43 level bridle</h4>
            <p>The piping assembly associated with a level gauge attached to a vessel.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.44 lining</h4>
            <p>A nonmetallic or metallic material, installed on the interior of a pipe, whose properties are better suited to resist damage from the process than the substrate material.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.45 localized corrosion</h4>
            <p>Corrosion that is typically confined to a limited or isolated area(s) of the metal surface of a piping system.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.46 minimum alert thickness</h4>
            <p>flag thickness</p>
            <p>A thickness greater than the required thickness that provides for early warning from which the future service life of the piping is managed through further inspection and remaining life assessment.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.47 minimum required thickness</h4>
            <p>required thickness</p>
            <p>The minimum thickness without corrosion allowance for each component of a piping system based on the appropriate design code calculations and code allowable stress that consider internal and external pressure, temperature, mechanical, and structural loadings, including the effects of static head.</p>
            <p>NOTE Minimum required thicknesses may be reassessed using Fitness-For-Service analysis in accordance with API 579-1/ASME FFS-1.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.48 mixing point</h4>
            <p>Mixing points are locations in a process piping system where two or more streams meet.</p>
            <p>NOTE The difference in streams may be composition, temperature, or any other parameter that may cause deterioration and may require additional design considerations, operating limits, inspection, and/or process monitoring.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.49 owner-operator</h4>
            <p>An owner or operator of piping systems who exercises control over the operation, engineering, inspection, repair, alteration, maintenance, pressure testing, and rerating of those piping systems.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.50 pipe</h4>
            <p>A pressure-tight cylinder used to convey, distribute, mix, separate, discharge, meter, control, or snub fluid flows or to transmit a fluid pressure and that is ordinarily designated "pipe" in applicable material specifications.</p>
            <p>NOTE 1 Materials designated as "tube" or "tubing" in the specifications are treated as a pipe when intended for pressure service external to fired heaters.</p>
            <p>NOTE 2 See API 530 for piping internal to fired heaters.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.51 pipe spool</h4>
            <p>A section of piping with a flange or other connecting fitting, such as a union, on both ends, that allows the removal of the section from the system.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.52 piperack piping</h4>
            <p>Process piping that is supported by consecutive stanchions or sleepers (including straddle racks and extensions).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.53 piping circuit</h4>
            <p>A subsection of piping systems that includes piping and components that are exposed to a process environment of similar corrosivity and expected damage mechanisms and is of similar design conditions and construction material, whereby the expected type and rate of damage can reasonably be expected to be the same.</p>
            <p>NOTE 1 Complex process units or piping systems are divided into piping circuits to manage the necessary inspections, data analysis, and recordkeeping.</p>
            <p>NOTE 2 When establishing the boundary of a particular piping circuit, it may be sized to provide a practical package for recordkeeping and performing field inspection.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.54 piping engineer</h4>
            <p>One or more persons or organizations acceptable to the owner-operator who are knowledgeable and experienced in the engineering disciplines associated with evaluating mechanical and material characteristics affecting the integrity and reliability of piping components and systems.</p>
            <p>NOTE The piping engineer, by consulting with appropriate specialists, should be regarded as a composite of all entities necessary to properly address piping design requirements.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.55 piping system</h4>
            <p>An assembly of interconnected pipes that typically are subject to the same (or nearly the same) process fluid composition or operating conditions, or both.</p>
            <p>NOTE 1 Some may refer to these as "loops," but this designation is being supplanted by the "system" or "circuit" designation.</p>
            <p>NOTE 2 Piping systems also include pipe-supporting elements (e.g. springs, hangers, guides, etc.) but do not include support structures, such as structural frames, vertical and horizontal beams, and foundations.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.56 pressure design thickness</h4>
            <p>Minimum allowed pipe wall thickness needed to hold the design pressure at the design temperature.</p>
            <p>NOTE 1 Pressure design thickness is determined using the rating code formula, including needed reinforcement thickness.</p>
            <p>NOTE 2 Pressure design thickness does not include thickness for structural loads, corrosion allowance, or mill tolerances and therefore should not be used as the sole determinant of structural integrity for typical process piping.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.57 primary process piping</h4>
            <p>Process piping in normal, active service that cannot be valved off or, if it were valved off, would significantly affect unit operability.</p>
            <p>NOTE Primary process piping typically does not include small-bore or auxiliary process piping (see also 3.1.65 "secondary process piping").</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.58 process piping</h4>
            <p>Hydrocarbon or chemical piping located at, or associated with, a refinery or manufacturing facility.</p>
            <p>NOTE Process piping includes piperack, tank farm, and process unit piping, but excludes utility piping (e.g. steam, water, air, nitrogen, etc.).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.59 quality assurance</h4>
            <p>All planned, systematic, and preventative actions specified to determine if materials, equipment, or services will meet specified requirements so that the piping will perform satisfactorily in-service.</p>
            <p>NOTE 1 Quality assurance plans will specify the necessary quality control activities and examinations.</p>
            <p>NOTE 2 The contents of a quality assurance inspection management system for piping systems are outlined in API 570—Section 4.3.1.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.60 quality control</h4>
            <p>Those physical activities conducted to check conformance with specifications in accordance with the quality assurance plan.</p>
            <p>EXAMPLE NDE techniques, hold point inspections, material verifications, checking certification documents, etc.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.61 rating</h4>
            <p>The work process of making calculations to establish pressures and temperatures appropriate for a piping system, including design pressure/temperature, maximum allowable working pressure (MAWP), structural minimums, required thicknesses, etc.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.62 repair</h4>
            <p>The work necessary to restore a piping system to a condition suitable for safe operation at the design conditions.</p>
            <p>NOTE 1 Any welding, cutting, or grinding operation on a pressure-containing piping component not specifically considered an alteration is considered a repair.</p>
            <p>NOTE 2 Repairs can be temporary or permanent.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.63 rerating</h4>
            <p>A change in either the design temperature rating, design pressure rating, or the MAWP of a piping system.</p>
            <p>NOTE A rerating may consist of an increase, decrease, or a combination. Derating below original design conditions is a permissible way to provide additional corrosion allowance.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.64 risk-based inspection</h4>
            <p>RBI</p>
            <p>A risk assessment and management process that considers both the probability of failure and the consequence of failure due to material deterioration.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.65 secondary process piping</h4>
            <p>Process piping located downstream of a block valve that can be valved off without significantly affecting the process unit.</p>
            <p>NOTE Often, secondary process piping is small-bore piping (SBP).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.66 small-bore piping</h4>
            <p>SBP</p>
            <p>Pipe or pipe components that are less than or equal to NPS 2.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.67 soil-to-air interface</h4>
            <p>SAI</p>
            <p>An area in which external corrosion may occur or be accelerated on partially buried pipe or buried pipe where it egresses from the soil.</p>
            <p>NOTE 1 The zone of the corrosion will vary depending on factors such as the moisture and oxygen content of the soil and operating temperature. The zone generally is from 12 in. (30 cm) below to 6 in. (15 cm) above the soil surface.</p>
            <p>NOTE 2 Pipe running parallel with the soil surface that contacts the soil is included.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.68 structural minimum thickness</h4>
            <p>Minimum required thickness without corrosion allowance based on the mechanical loads other than pressure that result in longitudinal stress.</p>
            <p>NOTE The thickness is either determined from a standard chart or engineering calculations. It does not include thickness for corrosion allowance or mill tolerances.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.69 tell-tale holes*</h4>
            <p>sentinel holes</p>
            <p>Small pilot holes drilled in the pipe or component wall using specified and controlled patterns and depths to act as an early detection and safeguard against ruptures resulting from internal corrosion, erosion, and erosion-corrosion.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.70 temporary repairs</h4>
            <p>Repairs made to piping systems in order to restore sufficient integrity to continue safe operation until permanent repairs are conducted.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.71 testing</h4>
            <p>Within this document, testing generally refers to either pressure testing, whether performed hydrostatically, pneumatically or a combination hydrostatic/pneumatic, or mechanical testing to determine data such as material hardness, strength, and notch toughness.</p>
            <p>NOTE Testing does not refer to NDE using techniques such as liquid penetrant (PT), magnetic particle (MT), etc.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.72 utility piping</h4>
            <p>Non-process piping associated with a process unit (e.g. steam, air, water, and nitrogen).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.73 weld overlay</h4>
            <p>The use of weld metal of a composition different than the base metal to provide corrosion and/or erosion resistance to the base metal.</p>
            <p>NOTE The filler metal typically has better corrosion and/or erosion resistance to the environment than the underlying metal.</p>
        </div>
        
        <h4>3.2 Acronyms and Abbreviations</h4>
        <p>For the purposes of this document, the following acronyms and abbreviations apply.</p>
        <ul>
            <li>ACFM - alternating current field measurement</li>
            <li>AE - acoustic emission examination technique</li>
            <li>CML - condition monitoring location</li>
            <li>CSCC - chloride stress corrosion cracking</li>
            <li>CUI - corrosion under insulation</li>
            <li>DN - diameter nominal (used in SI system to describe pipe size)</li>
            <li>ECSCC - external chloride stress corrosion cracking</li>
            <li>EMAT - electromagnetic acoustic transducer</li>
            <li>ET - eddy current technique</li>
            <li>FCC - fluid catalytic cracking</li>
            <li>FRP - fiber-reinforced plastic</li>
            <li>GRP - glass-reinforced plastic</li>
            <li>HF - hydrofluoric</li>
            <p>NOTE Generally referred to as HF acid.</p>
            <li>ID - inside diameter</li>
            <li>IDMS - Inspection Data Management System</li>
            <li>ILI - in-line inspection</li>
            <li>IOW - integrity operating window</li>
            <li>IP - initial pulse</li>
            <li>MAWP - maximum allowable working pressure</li>
            <li>MOC - management of change</li>
            <li>MT - magnetic particle examination technique</li>
            <li>MW - microwave examination technique</li>
            <li>NDE - nondestructive examination</li>
            <li>NPS - nominal pipe size</li>
            <p>NOTE The term is typically followed, when appropriate, by the specific size designation number without an inch symbol.</p>
            <p>EXAMPLE NPS 24 refers to a nominal pipe size of 24 in.</p>
            <li>OD - outside diameter</li>
            <li>P&ID - piping and instrument diagram</li>
            <li>PFD - process flow diagram</li>
            <li>PMI - positive material identification</li>
            <li>PPE - personal protective equipment</li>
            <li>PT - liquid penetrant examination technique</li>
            <li>PWHT - postweld heat treatment</li>
            <li>RBI - risk-based inspection</li>
            <li>RT - radiographic examination (method) or radiography</li>
            <li>SAI - soil-to-air interface</li>
            <li>SBP - small-bore piping</li>
            <li>SCC - stress corrosion cracking</li>
            <li>UT - ultrasonic examination technique</li>
            <li>UV - ultraviolet</li>
        </ul>
    </div>`,
    contentEs: `<h3>3 Términos, Definiciones, Acrónimos y Abreviaturas</h3>
    <div class="subsection">
        <p>Para los propósitos de este documento, se aplican los siguientes términos y definiciones.</p>
        <p>NOTA Las definiciones de los términos delineados con asteriscos son mantenidas por API 574. Si otro documento planea referenciar, véase API Bulletin 590 para referencia.</p>
        
        <h4>3.1 Términos y Definiciones</h4>
        
        <div class="subsection">
            <h4>3.1.1 material de aleación</h4>
            <p>Cualquier material metálico (incluyendo materiales de aporte para soldadura) que contiene elementos de aleación, como cromo, níquel o molibdeno, que se añaden intencionalmente para mejorar las propiedades mecánicas o físicas y/o la resistencia a la corrosión.</p>
            <p>NOTA 1 Las aleaciones pueden ser base hierro o no base hierro.</p>
            <p>NOTA 2 Para los propósitos de esta práctica recomendada, los aceros al carbono no se consideran aleaciones.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.2 alteración</h4>
            <p>Un cambio físico en cualquier componente que tiene implicaciones de diseño que afectan la capacidad de contención de presión de un sistema de tuberías más allá del alcance descrito en los informes de datos existentes.</p>
            <p>NOTA Lo siguiente no se considera alteraciones: reemplazo comparable o duplicado y reemplazos del mismo tipo y la adición de accesorios de pequeño diámetro que no requieren refuerzo o soporte adicional.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.3 tubería auxiliar</h4>
            <p>Tubería de instrumentos y maquinaria, típicamente tubería de proceso secundaria de pequeño diámetro que puede aislarse de los sistemas de tubería primarios pero normalmente no está aislada.</p>
            <p>NOTA Los ejemplos incluyen líneas de purga, líneas de aceite de sello, líneas de analizador, líneas de balance, líneas de gas de amortiguamiento, drenajes y ventilaciones.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.4 revestimiento metálico</h4>
            <p>Un metal unido integralmente a otro metal bajo alta presión y temperatura cuyas propiedades son más adecuadas para resistir el daño del proceso que el metal base.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.5 ubicación de monitoreo de condiciones</h4>
            <p>CML</p>
            <p>Un área designada en sistemas de tuberías donde se realizan exámenes periódicos para evaluar y monitorear directamente la condición del sistema de tuberías utilizando una variedad de métodos y técnicas de examen basados en la susceptibilidad al mecanismo de daño.</p>
            <p>NOTA 1 Los CMLs pueden contener uno o más puntos de examen y pueden ser un área pequeña única en un sistema de tuberías [ej. un punto circular de 2 pulg. (50 mm) de diámetro] o un plano a través de una sección de tubería donde existen puntos de examen en los cuatro cuadrantes del plano.</p>
            <p>NOTA 2 Los CMLs incluyen, pero no se limitan a, lo que anteriormente se llamaba "ubicaciones de monitoreo de espesor".</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.6 puntos de contacto</h4>
            <p>Las ubicaciones en las que una tubería o componente descansa sobre o contra un soporte u otro objeto, lo que puede aumentar su susceptibilidad a la corrosión externa, fretting, desgaste o deformación, especialmente debido a la humedad y/o sólidos que se acumulan en la interfaz de la tubería y el miembro de soporte.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.7 tolerancia de corrosión</h4>
            <p>Espesor adicional de material disponible para permitir la pérdida de metal durante la vida útil del componente de tubería.</p>
            <p>NOTA La tolerancia de corrosión no se utiliza en los cálculos de resistencia de diseño.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.8 tasa de corrosión</h4>
            <p>La tasa de pérdida de metal debido a erosión, corrosión-erosión y/o la(s) reacción(es) química(s) con el ambiente, ya sea interna y/o externa.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.9 especialista en corrosión</h4>
            <p>Una persona aceptable para el propietario-operador que tiene conocimiento y experiencia en las químicas de proceso específicas, mecanismos de daño, selección de materiales, métodos de mitigación de corrosión, técnicas de monitoreo de corrosión y su impacto en los sistemas de tuberías.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.10 corrosión bajo aislamiento</h4>
            <p>CUI</p>
            <p>Corrosión externa de tuberías, recipientes a presión y componentes estructurales resultante del agua atrapada bajo el aislamiento.</p>
            <p>NOTA La corrosión por cloruros bajo tensión externa (ECSCC) de aceros inoxidables austeníticos y dúplex bajo aislamiento también se clasifica como daño por CUI.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.11 válvulas de retención críticas</h4>
            <p>Válvulas de retención que necesitan operar de manera confiable para evitar el potencial de eventos peligrosos o consecuencias sustanciales si ocurriera flujo inverso.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.12 servicio cíclico</h4>
            <p>Se refiere a condiciones de servicio que pueden resultar en carga cíclica y producir daño o falla por fatiga (ej. carga cíclica por presión, térmica y/o cargas mecánicas).</p>
            <p>NOTA 1 Otras cargas cíclicas asociadas con la vibración pueden surgir de fuentes como impacto, vórtices de flujo turbulento, resonancia en compresores y viento, o cualquier combinación de los mismos.</p>
            <p>NOTA 2 API 579-1/ASME FFS-1—Sección I.A.15 tiene una definición de servicio cíclico. Un procedimiento de evaluación para determinar si un componente está en servicio cíclico se proporciona en la Parte 14. Una definición de "condiciones cíclicas severas" está en ASME B31.3—Sección 300.2, Definiciones.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.13 mecanismo de daño</h4>
            <p>Cualquier tipo de deterioro encontrado en la industria de refinación y procesos químicos que puede resultar en fallas/defectos que pueden afectar la integridad del equipo.</p>
            <p>EJEMPLO Corrosión, agrietamiento, erosión, abolladuras y otros impactos mecánicos, físicos o químicos. Véase API 571 para una lista y descripción completa de los mecanismos de daño.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.14 ramas muertas</h4>
            <p>Componentes de un sistema de tuberías que normalmente tienen poco o ningún flujo significativo.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.15 defecto</h4>
            <p>Una discontinuidad o discontinuidades que por naturaleza o efecto acumulado hacen que una parte o producto no pueda cumplir los estándares o especificaciones de aceptación mínimos aplicables (ej. longitud total de grieta).</p>
            <p>NOTA El término designa rechazabilidad.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.16 presión de diseño</h4>
            <p>La presión en la condición más severa de presión interna o externa y temperatura coincidentes (mínima o máxima) esperada durante el servicio.</p>
            <p>NOTA Es la misma que la presión de diseño definida en ASME B31.3 y otras secciones de código y está sujeta a las mismas reglas relacionadas con las tolerancias para variaciones de presión o temperatura o ambas.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.17 temperatura de diseño</h4>
            <p>La temperatura utilizada para el diseño del sistema de tuberías según el código de construcción aplicable.</p>
            <p>NOTA Es la misma que la temperatura de diseño definida en ASME B31.3 y otras secciones de código y está sujeta a las mismas reglas relacionadas con las tolerancias para variaciones de presión o temperatura o ambas. Diferentes componentes en el mismo sistema de tubería o circuito pueden tener diferentes temperaturas de diseño. Al establecer esta temperatura, debe considerarse la temperatura del fluido de proceso, las temperaturas ambientales, las temperaturas de los medios de calentamiento/enfriamiento y el aislamiento.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.18* duplicación</h4>
            <p>El error que puede ocurrir cuando un instrumento de medición de espesor ultrasónico muestra el valor de espesor medido basado en el segundo eco de pared posterior (es decir, el doble del espesor) versus el primer eco de pared posterior.</p>
            <p>NOTA 1 Esto puede ocurrir al medir espesores por debajo del rango mínimo especificado de un transductor (sonda) o cuando el elemento del transductor está desgastado o tiene baja sensibilidad.</p>
            <p>NOTA 2 La duplicación (o incluso triplicación) también puede ocurrir en algunos casos al medir espesores alrededor de 0.200" (5 mm) mientras se usa el modo eco-a-eco si las señales del segundo o tercer eco de pared posterior son menores en amplitud que los ecos subsiguientes.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.19 punto de examen</h4>
            <p>punto de registro<br>punto de medición<br>punto de prueba</p>
            <p>Una ubicación más específica dentro de un CML. Los CMLs pueden contener múltiples puntos de examen, por ejemplo, un componente de tubería puede ser un CML y tener múltiples puntos de examen (ej. un punto de examen en los cuatro cuadrantes del CML en el componente de tubería).</p>
            <p>NOTA El término "punto de prueba" ya no está en uso porque "prueba" se refiere a pruebas mecánicas o físicas (ej. pruebas de tracción o pruebas de presión).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.20 exámenes</h4>
            <p>Un proceso mediante el cual un examinador o inspector investiga un componente del sistema de tuberías utilizando examen no destructivo (NDE) de acuerdo con los procedimientos NDE aprobados (ej. inspección de un CML y control de calidad de áreas de reparación).</p>
            <p>NOTA Los exámenes serían típicamente aquellas acciones realizadas por personal NDE, inspectores de soldadura o inspectores de recubrimientos pero también pueden ser realizados por inspectores de tuberías autorizados.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.21 examinador</h4>
            <p>Una persona que ayuda al inspector realizando NDE específico en componentes del sistema de tuberías y evalúa según los criterios de aceptación aplicables pero no evalúa los resultados de esos exámenes de acuerdo con los requisitos de API 570, a menos que esté específicamente capacitado y autorizado para hacerlo por el propietario-operador.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.22 inspección externa</h4>
            <p>Una inspección visual realizada desde el exterior de un sistema de tuberías para encontrar condiciones que podrían afectar la capacidad de los sistemas de tuberías para mantener la integridad de presión o condiciones que comprometen la integridad (ej. postes, soportes de tubería, zapatas y colgadores). La inspección externa puede realizarse mientras la tubería está en operación o mientras la tubería está fuera de servicio y puede realizarse al mismo tiempo que una inspección en línea.</p>
            <p>NOTA Las inspecciones externas también están destinadas a encontrar condiciones que comprometen la integridad de los recubrimientos y cubiertas de aislamiento, y accesorios (ej. conexiones de instrumentos y ramificaciones pequeñas).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.23 evaluación de Aptitud para el Servicio</h4>
            <p>Una metodología mediante la cual se evalúan las fallas y otros deterioros/daños contenidos dentro de los sistemas de tuberías para determinar la integridad de la tubería para servicio continuado.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.24 accesorio</h4>
            <p>Un componente de tubería generalmente asociado con una conexión de ramificación, un cambio de dirección o un cambio en el diámetro de la tubería.</p>
            <p>NOTA Las bridas no se consideran accesorios.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.25 materiales inflamables</h4>
            <p>Como se usa en esta práctica recomendada, incluye todos los fluidos que soportarán la combustión.</p>
            <p>NOTA 1 Consulte NFPA 704 para orientación sobre la clasificación de fluidos.</p>
            <p>NOTA 2 Algunos documentos regulatorios incluyen definiciones separadas de inflamables y combustibles basadas en su punto de inflamación. En este documento, inflamable se usa para describir ambos, y el punto de inflamación, punto de ebullición, temperatura de autoignición u otras propiedades se usan además para describir mejor el peligro.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.26 punto de inflamación</h4>
            <p>La temperatura más baja a la que un producto inflamable emite suficiente vapor para formar una mezcla ignitable en el aire.</p>
            <p>NOTA 1 Por ejemplo, el punto de inflamación de la gasolina es de aproximadamente −45 °F, y el punto de inflamación del diésel varía de aproximadamente 125 °F a 200 °F.</p>
            <p>NOTA 2 Se requiere una fuente de ignición para causar la ignición por encima del punto de inflamación pero por debajo de la temperatura de autoignición.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.27 imperfección</h4>
            <p>Una imperfección en un sistema de tuberías detectada por NDE, que puede o no ser un defecto, dependiendo de los criterios de aceptación aplicados.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.28 corrosión general</h4>
            <p>Corrosión distribuida aproximadamente uniforme sobre la superficie del metal.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.29 punto de retención</h4>
            <p>Un punto en el proceso de reparación o alteración más allá del cual el trabajo no puede proceder hasta que se haya realizado la inspección o NDE requerida.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.30 imperfección</h4>
            <p>Imperfecciones u otras discontinuidades notadas durante la inspección o examen que pueden o no exceder los criterios de aceptación aplicables.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.31 indicación</h4>
            <p>Una respuesta o evidencia resultante de la aplicación de NDE que puede ser no relevante, defectuosa o defectiva tras un análisis adicional.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.32 puntos de inyección</h4>
            <p>Los puntos de inyección son ubicaciones donde se introducen agua, vapor, químicos o aditivos de proceso en una corriente de proceso a tasas de flujo/volumen relativamente bajas en comparación con la tasa de flujo/volumen de la corriente principal.</p>
            <p>NOTA 1 Los inhibidores de corrosión, neutralizadores, antincrustantes de proceso, desemulsificadores de desalador, eliminadores de oxígeno, cáustico y lavados de agua son los más reconocidos por requerir atención especial en el diseño del punto de inyección. Los aditivos de proceso, químicos y agua se inyectan en las corrientes de proceso para lograr objetivos de proceso específicos.</p>
            <p>NOTA 2 Los puntos de inyección no incluyen ubicaciones donde se unen dos corrientes de proceso (véase 3.1.48, "puntos de mezcla").</p>
            <p>EJEMPLO Agentes clorantes en reformadores, inyección de agua en sistemas de cabeza, inyección de polisulfuro en gas húmedo de craqueo catalítico, inyecciones de antiespumante, inhibidores y neutralizantes.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.33 en servicio</h4>
            <p>La etapa del ciclo de vida de un sistema de tuberías que comienza después de la instalación inicial (donde típicamente sigue la puesta en servicio inicial o colocación en servicio activo) y termina en la desactivación.</p>
            <p>NOTA 1 Los sistemas de tuberías que están inactivos en un sitio operativo y los sistemas de tuberías que actualmente no están en operación debido a una parada de proceso todavía se consideran sistemas de tuberías en servicio.</p>
            <p>NOTA 2 No incluye sistemas de tuberías que todavía están en construcción o en transporte al sitio antes de ser puestos en servicio o sistemas de tuberías que han sido retirados.</p>
            <p>NOTA 3 La tubería de repuesto instalada también se considera en servicio, mientras que la tubería de repuesto no instalada no se considera en servicio.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.34 inspección en servicio</h4>
            <p>Todas las actividades de inspección asociadas con tuberías en servicio (después de la instalación, pero antes de que sea desactivada).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.35 inspección</h4>
            <p>La evaluación externa, interna o en línea (o cualquier combinación de las tres) de la condición de un sistema de tuberías realizada por el inspector autorizado o el delegado.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.36 código de inspección</h4>
            <p>Título abreviado para API 570.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.37 plan de inspección</h4>
            <p>Una estrategia que define cómo y cuándo se inspeccionará, examinará, reparará y/o mantendrá un equipo a presión y sus componentes asociados.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.38 inspector</h4>
            <p>Título abreviado para un inspector de tuberías autorizado calificado y certificado de acuerdo con API 570.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.39 ventana de operación de integridad</h4>
            <p>Límites establecidos para las variables del proceso (parámetros) que pueden afectar la integridad del equipo si la operación del proceso se desvía de los límites establecidos durante un período de tiempo predeterminado [incluye ventanas de operación de integridad críticas, estándar e informativas (IOWs)].</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.40 servicio intermitente</h4>
            <p>La condición de un sistema de tuberías por el cual no está en servicio operativo continuo (es decir, opera a intervalos regulares o irregulares en lugar de continuamente).</p>
            <p>NOTA Las paradas ocasionales u otras paradas de mantenimiento infrecuentes en un servicio de proceso por lo demás continuo no constituyen servicio intermitente.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.41 inspección interna</h4>
            <p>Una inspección realizada en la superficie interna de un sistema de tuberías utilizando técnicas visuales y/o NDE.</p>
            <p>NOTA El NDE en el exterior de la tubería para determinar el espesor restante no constituye una inspección interna.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.42 jurisdicción</h4>
            <p>Una administración gubernamental legalmente constituida que puede adoptar reglas relacionadas con los sistemas de tuberías de proceso.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.43 puente de nivel</h4>
            <p>El conjunto de tuberías asociado con un indicador de nivel conectado a un recipiente.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.44 revestimiento</h4>
            <p>Un material no metálico o metálico, instalado en el interior de una tubería, cuyas propiedades son más adecuadas para resistir el daño del proceso que el material base.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.45 corrosión localizada</h4>
            <p>Corrosión que típicamente se confina a un área o áreas limitadas o aisladas de la superficie metálica de un sistema de tuberías.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.46 espesor mínimo de alerta</h4>
            <p>espesor bandera</p>
            <p>Un espesor mayor que el espesor requerido que proporciona una advertencia temprana a partir de la cual la vida útil futura de la tubería se gestiona mediante una mayor inspección y evaluación de vida útil restante.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.47 espesor mínimo requerido</h4>
            <p>espesor requerido</p>
            <p>El espesor mínimo sin tolerancia de corrosión para cada componente de un sistema de tuberías basado en los cálculos del código de diseño apropiado y el esfuerzo admisible del código que consideran la presión interna y externa, temperatura, cargas mecánicas y estructurales, incluyendo los efectos de la carga estática.</p>
            <p>NOTA Los espesores mínimos requeridos pueden ser reevaluados utilizando el análisis de Aptitud para el Servicio de acuerdo con API 579-1/ASME FFS-1.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.48 punto de mezcla</h4>
            <p>Los puntos de mezcla son ubicaciones en un sistema de tuberías de proceso donde se encuentran dos o más corrientes.</p>
            <p>NOTA La diferencia en las corrientes puede ser composición, temperatura o cualquier otro parámetro que pueda causar deterioro y puede requerir consideraciones de diseño adicionales, límites operativos, inspección y/o monitoreo del proceso.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.49 propietario-operador</h4>
            <p>Un propietario u operador de sistemas de tuberías que ejerce control sobre la operación, ingeniería, inspección, reparación, alteración, mantenimiento, pruebas de presión y reclasificación de esos sistemas de tuberías.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.50 tubería</h4>
            <p>Un cilindro hermético a presión utilizado para transportar, distribuir, mezclar, separar, descargar, medir, controlar o amortiguar flujos de fluidos o para transmitir una presión de fluido y que ordinariamente se designa "tubería" en las especificaciones de materiales aplicables.</p>
            <p>NOTA 1 Los materiales designados como "tubo" o "tubería" en las especificaciones se tratan como tubería cuando están destinados a servicio a presión externo a calentadores de fuego.</p>
            <p>NOTA 2 Véase API 530 para tuberías internas a calentadores de fuego.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.51 tramo de tubería</h4>
            <p>Una sección de tubería con una brida u otro accesorio de conexión, como una unión, en ambos extremos, que permite la remoción de la sección del sistema.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.52 tubería de rack</h4>
            <p>Tubería de proceso que es soportada por postes consecutivos o durmientes (incluyendo racks de montura y extensiones).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.53 circuito de tubería</h4>
            <p>Una subsección de sistemas de tuberías que incluye tuberías y componentes que están expuestos a un ambiente de proceso de corrosividad similar y mecanismos de daño esperados y es de condiciones de diseño y material de construcción similares, por lo cual el tipo y tasa de daño esperados pueden razonablemente esperarse que sean los mismos.</p>
            <p>NOTA 1 Las unidades de proceso complejas o sistemas de tuberías se dividen en circuitos de tubería para gestionar las inspecciones necesarias, análisis de datos y mantenimiento de registros.</p>
            <p>NOTA 2 Al establecer el límite de un circuito de tubería particular, puede dimensionarse para proporcionar un paquete práctico para el mantenimiento de registros y la realización de inspección de campo.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.54 ingeniero de tuberías</h4>
            <p>Una o más personas u organizaciones aceptables para el propietario-operador que tienen conocimiento y experiencia en las disciplinas de ingeniería asociadas con la evaluación de las características mecánicas y de materiales que afectan la integridad y confiabilidad de componentes y sistemas de tuberías.</p>
            <p>NOTA El ingeniero de tuberías, al consultar con especialistas apropiados, debe considerarse como un compuesto de todas las entidades necesarias para abordar adecuadamente los requisitos de diseño de tuberías.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.55 sistema de tuberías</h4>
            <p>Un ensamblaje de tuberías interconectadas que típicamente están sujetas a la misma (o casi la misma) composición de fluido de proceso o condiciones operativas, o ambas.</p>
            <p>NOTA 1 Algunos pueden referirse a estos como "lazos", pero esta designación está siendo reemplazada por la designación de "sistema" o "circuito".</p>
            <p>NOTA 2 Los sistemas de tuberías también incluyen elementos de soporte de tuberías (ej. resortes, colgadores, guías, etc.) pero no incluyen estructuras de soporte, como marcos estructurales, vigas verticales y horizontales y cimientos.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.56 espesor de diseño de presión</h4>
            <p>Espesor mínimo permitido de la pared de la tubería necesario para soportar la presión de diseño a la temperatura de diseño.</p>
            <p>NOTA 1 El espesor de diseño de presión se determina utilizando la fórmula del código de clasificación, incluyendo el espesor de refuerzo necesario.</p>
            <p>NOTA 2 El espesor de diseño de presión no incluye espesor para cargas estructurales, tolerancia de corrosión o tolerancias de laminación y por lo tanto no debe usarse como el único determinante de la integridad estructural para la tubería de proceso típica.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.57 tubería de proceso primaria</h4>
            <p>Tubería de proceso en servicio normal, activo que no puede ser valvulada fuera o, si fuera valvulada fuera, afectaría significativamente la operabilidad de la unidad.</p>
            <p>NOTA La tubería de proceso primaria típicamente no incluye tubería de pequeño diámetro o tubería de proceso auxiliar (véase también 3.1.65 "tubería de proceso secundaria").</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.58 tubería de proceso</h4>
            <p>Tubería de hidrocarburos o químicos ubicada en, o asociada con, una refinería o instalación de fabricación.</p>
            <p>NOTA La tubería de proceso incluye tubería de rack, patio de tanques y unidad de proceso, pero excluye la tubería de servicios (ej. vapor, agua, aire, nitrógeno, etc.).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.59 aseguramiento de calidad</h4>
            <p>Todas las acciones planificadas, sistemáticas y preventivas especificadas para determinar si los materiales, equipos o servicios cumplirán los requisitos especificados para que la tubería funcione satisfactoriamente en servicio.</p>
            <p>NOTA 1 Los planes de aseguramiento de calidad especificarán las actividades y exámenes de control de calidad necesarios.</p>
            <p>NOTA 2 El contenido de un sistema de gestión de inspección de aseguramiento de calidad para sistemas de tuberías se describe en API 570—Sección 4.3.1.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.60 control de calidad</h4>
            <p>Aquellas actividades físicas realizadas para verificar la conformidad con las especificaciones de acuerdo con el plan de aseguramiento de calidad.</p>
            <p>EJEMPLO Técnicas NDE, inspecciones de punto de retención, verificaciones de materiales, verificación de documentos de certificación, etc.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.61 clasificación</h4>
            <p>El proceso de trabajo de realizar cálculos para establecer presiones y temperaturas apropiadas para un sistema de tuberías, incluyendo presión/temperatura de diseño, presión máxima de trabajo admisible (MAWP), mínimos estructurales, espesores requeridos, etc.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.62 reparación</h4>
            <p>El trabajo necesario para restaurar un sistema de tuberías a una condición adecuada para operación segura en las condiciones de diseño.</p>
            <p>NOTA 1 Cualquier operación de soldadura, corte o rectificado en un componente de tubería que contiene presión no específicamente considerada una alteración se considera una reparación.</p>
            <p>NOTA 2 Las reparaciones pueden ser temporales o permanentes.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.63 reclasificación</h4>
            <p>Un cambio en la clasificación de temperatura de diseño, la clasificación de presión de diseño, o la MAWP de un sistema de tuberías.</p>
            <p>NOTA Una reclasificación puede consistir en un aumento, disminución, o una combinación. La reclasificación por debajo de las condiciones de diseño originales es una forma permisiva de proporcionar tolerancia de corrosión adicional.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.64 inspección basada en riesgos</h4>
            <p>RBI</p>
            <p>Un proceso de evaluación y gestión de riesgos que considera tanto la probabilidad de falla como la consecuencia de la falla debido al deterioro del material.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.65 tubería de proceso secundaria</h4>
            <p>Tubería de proceso ubicada aguas abajo de una válvula de bloqueo que puede ser valvulada fuera sin afectar significativamente la unidad de proceso.</p>
            <p>NOTA A menudo, la tubería de proceso secundaria es tubería de pequeño diámetro (SBP).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.66 tubería de pequeño diámetro</h4>
            <p>SBP</p>
            <p>Tubería o componentes de tubería que son menores o iguales a NPS 2.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.67 interfaz suelo-aire</h4>
            <p>SAI</p>
            <p>Un área en la cual puede ocurrir o acelerarse la corrosión externa en tubería parcialmente enterrada o tubería enterrada donde emerge del suelo.</p>
            <p>NOTA 1 La zona de corrosión variará dependiendo de factores como el contenido de humedad y oxígeno del suelo y la temperatura de operación. La zona generalmente es de 12 pulg. (30 cm) por debajo a 6 pulg. (15 cm) por encima de la superficie del suelo.</p>
            <p>NOTA 2 Se incluye la tubería que corre paralela a la superficie del suelo que contacta el suelo.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.68 espesor mínimo estructural</h4>
            <p>Espesor mínimo requerido sin tolerancia de corrosión basado en las cargas mecánicas distintas de la presión que resultan en esfuerzo longitudinal.</p>
            <p>NOTA El espesor se determina a partir de un gráfico estándar o cálculos de ingeniería. No incluye espesor para tolerancia de corrosión o tolerancias de laminación.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.69 orificios testigo*</h4>
            <p>orifices centinela</p>
            <p>Pequeños orificios piloto perforados en la pared de la tubería o componente utilizando patrones y profundidades especificados y controlados para actuar como una detección temprana y salvaguardia contra rupturas resultantes de corrosión interna, erosión y corrosión-erosión.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.70 reparaciones temporales</h4>
            <p>Reparaciones realizadas a sistemas de tuberías para restaurar suficiente integridad para continuar la operación segura hasta que se realicen reparaciones permanentes.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.71 pruebas</h4>
            <p>Dentro de este documento, las pruebas generalmente se refieren ya sea a pruebas de presión, ya sea realizadas hidrostáticamente, neumáticamente o una combinación hidrostática/neumática, o pruebas mecánicas para determinar datos como dureza del material, resistencia y tenacidad de entalla.</p>
            <p>NOTA Las pruebas no se refieren al NDE utilizando técnicas como líquidos penetrantes (PT), partículas magnéticas (MT), etc.</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.72 tubería de servicios</h4>
            <p>Tubería no asociada al proceso asociada con una unidad de proceso (ej. vapor, aire, agua y nitrógeno).</p>
        </div>
        
        <div class="subsection">
            <h4>3.1.73 revestimiento soldado</h4>
            <p>El uso de metal de soldadura de una composición diferente que el metal base para proporcionar resistencia a la corrosión y/o erosión al metal base.</p>
            <p>NOTA El metal de aporte típicamente tiene mejor resistencia a la corrosión y/o erosión al ambiente que el metal subyacente.</p>
        </div>
        
        <h4>3.2 Acrónimos y Abreviaturas</h4>
        <p>Para los propósitos de este documento, se aplican los siguientes acrónimos y abreviaturas.</p>
        <ul>
            <li>ACFM - medición de campo de corriente alterna</li>
            <li>AE - técnica de examen por emisión acústica</li>
            <li>CML - ubicación de monitoreo de condiciones</li>
            <li>CSCC - corrosión por cloruros bajo tensión</li>
            <li>CUI - corrosión bajo aislamiento</li>
            <li>DN - diámetro nominal (utilizado en el sistema SI para describir el tamaño de la tubería)</li>
            <li>ECSCC - corrosión por cloruros bajo tensión externa</li>
            <li>EMAT - transductor acústico electromagnético</li>
            <li>ET - técnica de corriente de Foucault</li>
            <li>FCC - craqueo catalítico fluido</li>
            <li>FRP - plástico reforzado con fibra</li>
            <li>GRP - plástico reforzado con vidrio</li>
            <li>HF - fluorhídrico</li>
            <p>NOTA Generalmente referido como ácido HF.</p>
            <li>ID - diámetro interior</li>
            <li>IDMS - Sistema de Gestión de Datos de Inspección</li>
            <li>ILI - inspección en línea</li>
            <li>IOW - ventana de operación de integridad</li>
            <li>IP - pulso inicial</li>
            <li>MAWP - presión máxima de trabajo admisible</li>
            <li>MOC - gestión del cambio</li>
            <li>MT - técnica de examen por partículas magnéticas</li>
            <li>MW - técnica de examen por microondas</li>
            <li>NDE - examen no destructivo</li>
            <li>NPS - tamaño nominal de tubería</li>
            <p>NOTA El término típicamente es seguido, cuando es apropiado, por el número de designación de tamaño específico sin un símbolo de pulgada.</p>
            <p>EJEMPLO NPS 24 se refiere a un tamaño nominal de tubería de 24 pulg.</p>
            <li>OD - diámetro exterior</li>
            <li>P&ID - diagrama de tuberías e instrumentación</li>
            <li>PFD - diagrama de flujo de proceso</li>
            <li>PMI - identificación positiva de materiales</li>
            <li>PPE - equipo de protección personal</li>
            <li>PT - técnica de examen por líquidos penetrantes</li>
            <li>PWHT - tratamiento térmico postsoldadura</li>
            <li>RBI - inspección basada en riesgos</li>
            <li>RT - examen radiográfico (método) o radiografía</li>
            <li>SAI - interfaz suelo-aire</li>
            <li>SBP - tubería de pequeño diámetro</li>
            <li>SCC - corrosión bajo tensión</li>
            <li>UT - técnica de examen ultrasónico</li>
            <li>UV - ultravioleta</li>
        </ul>
    </div>`
});