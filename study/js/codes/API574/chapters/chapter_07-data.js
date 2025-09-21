// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API 574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tubería"
    });
}

// Registrar el capítulo 7
registerChapter('API574', {
    id: 7,
    title: "Inspection and Monitoring Planning",
    titleEs: "Planificación de Inspección y Monitoreo",
    content: `<h3>7 Inspection and Monitoring Planning</h3>
    <div class="subsection">
        <h4>7.1 Background</h4>
        <p>An inspection plan is developed and implemented for those piping systems within the scope of API 570. However, other piping systems may also be included in the inspection program and accordingly have an inspection plan.</p>
        <p>An inspection plan should contain the inspection tasks, the scope of the inspection, and the schedule required to monitor identified damage mechanisms and ensure the mechanical integrity of the piping components in the system. API 570 defines the minimum contents of an inspection plan.</p>
        <p>Inspection plans for piping systems can be maintained in spreadsheets, hardcopy files, and proprietary inspection software databases.</p>
    </div>
    <div class="subsection">
        <h4>7.2 Developing an Inspection Plan</h4>
        <div class="subsection">
            <h4>7.2.1 General</h4>
            <p>An inspection plan is often developed through the collaborative work of the inspector, piping engineer, corrosion specialist, and operating personnel. The team should consider several pieces of information, such as operating temperature ranges, operating pressure ranges, process fluid corrosive contaminant levels, piping material of construction, piping system configuration, process stream mixing, and inspection/maintenance history.</p>
            <p>In addition, other information sources can be consulted, for example API and NACE (AMPP) publications, to obtain industry experience with similar systems. This information provides a basis for defining the types of damage and locations for its occurrence.</p>
            <p>Knowledge of the capabilities and limitations of NDE techniques allows the proper choice of examination technique(s) to identify specific damage mechanisms in specific locations. Refer to API 571 and ASME PCC-3 for more information regarding inspection techniques and their limitations/uses per specific damage mechanisms.</p>
            <p>Ongoing communication with operating personnel when process changes and/or upsets occur that could affect damage mechanisms and rates are critical to keeping an inspection plan updated. IOWs help set key thresholds for process changes affecting mechanical integrity. See API 584 for further information.</p>
            <p>For piping systems, inspection plans should address the following:</p>
            <ul>
                <li>condition monitoring locations (CMLs) for specific damage mechanisms;</li>
                <li>piping contact points at pipe support;</li>
                <li>pipe supports and support appurtenances;</li>
                <li>CUI;</li>
                <li>injection points;</li>
                <li>process mixing points;</li>
                <li>deadleg sections of pipe;</li>
                <li>soil-to-air (concrete-to-air) interfaces (SAIs);</li>
                <li>PMI;</li>
                <li>auxiliary piping;</li>
                <li>critical utility piping as defined by owner-operator;</li>
                <li>vents/drains;</li>
                <li>threaded pipe joints;</li>
                <li>internal linings;</li>
                <li>critical valves;</li>
                <li>expansion joints.</li>
            </ul>
            <p>In addition, consideration should be given to incorporating miscellaneous piping and tubing that may be overlooked from the routine circuit inspection programs into the inspection plan. These circuits may still pose a reliability concern and should be considered in the inspection plan. Examples include instrument bridles for equipment connecting to piping circuits, temporary piping used during maintenance outages, and swing-out spools.</p>
            <p>Inspection plans may be based on various criteria but should include a risk assessment or fixed intervals as defined in API 570. For more information on risk-based inspection (RBI), see 8.2.</p>
        </div>
        <div class="subsection">
            <h4>7.2.2 Identification of Damage Mechanisms</h4>
            <p>Oil refinery and chemical plant piping can be subject to internal and external damage mechanisms. This piping carries a range of fluids that can be highly corrosive, erosive, and prone to stress corrosion cracking (SCC) or subject to material damage in service. In addition, both aboveground and buried piping is subject to external corrosion. The inspector should be familiar with the credible damage mechanisms for each piping system. API 571 has been developed to give the inspector added insights on various causes of damage.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_17.png" class="figure-image">
                <p class="figure-caption">Figure 17—Erosion of Piping</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api574_figure_18.png" class="figure-image">
                <p class="figure-caption">Figure 18—Corrosion of Piping</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api574_figure_19.png" class="figure-image">
                <p class="figure-caption">Figure 19—Internal Corrosion of Piping</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api574_figure_20.png" class="figure-image">
                <p class="figure-caption">Figure 20—Severe Atmospheric Corrosion of Piping</p>
            </div>
            
            <p>If an inspection of an area of piping indicates damage is occurring, the piping upstream and downstream of this area, along with associated equipment, should also be inspected. Additionally, if deterioration is detected in pressure equipment, associated piping should also be inspected.</p>
            <p>Each owner-operator should provide specific attention to the need for inspection of piping systems that are susceptible to the following specific types and areas of deterioration:</p>
            <ul>
                <li>injection points;</li>
                <li>process mixing points;</li>
                <li>deadlegs;</li>
                <li>CUI;</li>
                <li>SAIs;</li>
                <li>erosion and erosion-corrosion;</li>
                <li>service specific and localized corrosion;</li>
                <li>environmental cracking;</li>
                <li>corrosion beneath linings and deposits;</li>
                <li>fatigue cracking;</li>
                <li>creep cracking;</li>
                <li>brittle fracture;</li>
                <li>freeze damage;</li>
                <li>contact point corrosion;</li>
                <li>dew-point corrosion.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.2.3 Selecting Inspection Activities</h4>
            <p>Inspection plans should address the credible damage mechanisms as identified by a corrosion specialist and/or the unit Corrosion Control Document, as detailed in API 970. Identifying and understanding the credible damage mechanisms that can cause deterioration of piping and piping components is key in developing an effective inspection plan. Without adequately identifying what credible damage mechanisms are applicable, a proper inspection plan cannot be performed.</p>
            <p>API 571, in conjunction with process and equipment information, can be utilized to assign credible damage mechanism and the associated inspection methods/techniques. Once all credible mechanisms have been established, the appropriate inspection technique(s) should be aligned with the corresponding modes of damage.</p>
            <p>To determine if piping is subject to damage and will require internal inspection, on-stream inspection, and/or thickness monitoring, the following factors should be considered:</p>
            <ol>
                <li>credible damage mechanisms: the availability of process corrodents, such as water, oxygen, H<sub>2</sub>S, etc., that may act on the materials of construction, as determined by a corrosion specialist.</li>
                <li>process controls (e.g. IOWs) in place to identify when the process has been changed such that it becomes damaging to the material.</li>
                <li>new process design; if the piping is in a new process where there is some uncertainty about whether the process will work as designed, it should not be designated as being in noncorrosive service until proven through operation and inspection.</li>
                <li>process stability; if the process is such that a small change in operation can introduce conditions where the damage mechanism could become active versus the case where introduction of a corrodent (e.g. water) would not be compatible with operation (e.g. the cryogenic portion of an ethylene plant).</li>
                <li>presence of protection against known damage mechanism, such as corrosion-resistant weld overlay, cladding, coating, lining, or refractory; some piping may not require much, if any, inspection because of lack of credible damage mechanisms; however, consideration for failed protective measures should be established.</li>
            </ol>
            <p>Typical examples of systems with no credible internal damage mechanism are as follows:</p>
            <ol>
                <li>ethylene plant piping operating under cryogenic conditions;</li>
                <li>liquefied natural gas plants downstream of the mercury removal beds and water removal;</li>
                <li>process units alloyed up for product purity where any corrosion would result in the product not meeting specifications;</li>
                <li>new piping replaced in-kind with a proven history of no credible internal damage mechanism but was replaced due to external damage mechanism, such as CUI;</li>
                <li>refrigerant grade fluid piping that are without any contamination.</li>
            </ol>
        </div>
        <div class="subsection">
            <h4>7.2.4 Locations for Inspection</h4>
            <p>CMLs should be selected once credible damage mechanisms have been identified. The number of CMLs selected will depend on the technique's probability of detection, degree of localization of the damage, and how predictable the damage mechanism is. Additional CMLs may also be added, for piping with high likelihood or high risk of failure.</p>
            <p>Understanding the factors and conditions that affect the probability a damage mechanism will be active is important in developing a focused inspection plan and selecting the appropriate location for inspection. Previous inspection results can be used to identify active mechanisms and better predict areas to be inspected. Piping susceptible to uniform damage can be inspected at any convenient location; however, it may be necessary to inspect larger areas or employ multiple techniques to ensure that localized damage is detected.</p>
            <p>Matching the various surface and volumetric NDE techniques to localized corrosion damage mechanisms is key in capturing the correct corrosion data. Predicting where damage will occur, specifically localized damage, is difficult even when the credible damage mechanism(s) are well understood. Consultation with a corrosion specialist and/or review of the process unit Corrosion Control Document can help in understanding CML selection and placement for localized damage mechanisms. Selecting appropriate inspection locations for equipment subject to localized damage is as critical as applying the appropriate technique. If sufficient levels of inspection have been performed over time, the results of those inspections could be used to identify locations of damage. Once established, these mechanisms and their associated modes can be used in conjunction with equipment availability (will equipment be shut down or remain on stream) to plan inspection techniques.</p>
            <p>Visual checks of the external parts of piping should be performed periodically. These inspections may be conducted at comparatively short intervals (e.g. compared to a 10-year internal inspection interval), the interval depending on the service, and/or previous condition of the piping involved. External inspection of piping should be conducted in accordance with API 570—Section 6.4. It is important to understand the process conditions prior to the external visual inspection to determine whether CUI inspections should be planned. See API 583 for more information on issues that may assist in the development of CUI inspection plans.</p>
            <p>The list of techniques identified for the piping inspection should be compared against internal or process based inspection and maintenance requirements (e.g. potential fouling or mechanical problems) to ensure that all areas are assessed as needed. This information is combined into one set of inspection activities. Then, based on damage rates and remaining life, the appropriate frequency should be identified (see Section 8).</p>
        </div>
        <div class="subsection">
            <h4>7.2.5 Interval-based Inspection Plans</h4>
            <p>Interval-based inspection plans base specific inspection intervals upon the types of piping inspection required, as well as the types of damage mechanisms and damage rates that have been assigned. The types of inspection where maximum intervals are suggested in API 570 include external visual, CUI, thickness measurement, injection point, SAI, SBP, auxiliary piping, and threaded connections.</p>
            <p>The interval for inspections is based on several factors, including the corrosion rate and remaining life calculations, piping service classification, applicable jurisdictional requirements, and the judgment of the inspector, the piping engineer, or a corrosion specialist. The governing factor in the inspection plan for many piping circuits is the piping service classification.</p>
        </div>
        <div class="subsection">
            <h4>7.2.6 Classifying Piping Service</h4>
            <p>According to API 570—Section 6.3.4, all process piping shall be classified according to the consequence of failure, except for piping that has been planned based on RBI results. Piping classes vary from Class 1 (high consequence) to Class 3 (low consequence). Additionally, there is a Class 4 for services that are essentially nonflammable and nontoxic. Adding more CMLs in appropriate locations to higher-consequence piping subject to higher corrosion rates or localized corrosion and monitoring those CMLs more frequently may reduce the likelihood of high-consequence events. This strategy gives a more accurate prediction of retirement dates and reduces inspection uncertainty in the piping where reliability is more important.</p>
            <p>Factors to consider when classifying piping are as follows:</p>
            <ul>
                <li>toxicity;</li>
                <li>volatility;</li>
                <li>flammability;</li>
                <li>location of the piping with respect to personnel and other equipment;</li>
                <li>experience and history.</li>
            </ul>
        </div>
    </div>
    <div class="subsection">
        <h4>7.3 Monitoring Process Piping</h4>
        <div class="subsection">
            <h4>7.3.1 General</h4>
            <p>The single most frequent damage mechanism leading to pipe replacement is corrosion. For this reason, an effective process piping inspection program should include monitoring piping thickness from which corrosion rates, remaining life, next inspection dates, and projected piping retirement dates can be determined.</p>
            <p>A key to the effective monitoring of piping corrosion is identifying and establishing CMLs. CMLs are designated areas in the piping system where measurements are periodically taken. Ultrasonic thickness measurements are obtained within examination points on the pipe. Thickness measurements may be averaged within the examination point. By taking repeated measurements and recording data from the same points over extended periods, damage rates can more accurately be calculated or assessed. Some of the factors to consider when establishing the corrosion-monitoring plan for process piping are as follows:</p>
            <ul>
                <li>classifying the piping service in accordance with API 570 or risk ranking based on RBI analysis;</li>
                <li>categorizing the piping systems into piping circuits of similar corrosion behavior (e.g. localized, general, and environmental cracking);</li>
                <li>identifying susceptible locations where accelerated damage has occurred or is expected;</li>
                <li>accessibility of the CMLs for monitoring when localized corrosion is not predicted;</li>
                <li>RBI results identify high-risk piping circuits and/or specific piping locations.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.3.2 Piping Systems</h4>
            <p>Developing piping systems and circuits based on credible/identified damage mechanisms enables the development of concise inspection plans and forms the basis for improved data analysis. Refer to API 570 for the characteristics of defining piping systems.</p>
            <p>The following are some examples of documenting piping systems. Piping systems can be documented on the process flow diagrams (PFDs) as described below and contain the following information for each.</p>
            <ul>
                <li>Systems can be highlighted by unique color coding and name.</li>
                <li>Piping system nomenclature may utilize conventions that are readily understood within the facility, ideally providing a common language between operating and inspection personnel. Typically, the piping system identifier is appended to a unit prefix, with piping system and individual piping circuits incrementing from unit feed to product streams.</li>
                <li>Each piping system may have other characteristics associated with them documented, including the boundaries, general process concerns, IOW parameters, general damage mechanisms, and process corrosion control measures.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.3.3 Piping Circuits</h4>
            <p>Complex process units or piping systems are divided into piping circuits to manage the necessary inspections, calculations, and recordkeeping. When establishing the boundary of a particular piping circuit, the inspector may also size it to provide a practical package for recordkeeping and performing field inspection. By identifying like environments and damage mechanisms as circuits, the spread of calculated corrosion rates of the CMLs in each circuit is reduced. Proper selection of components in the piping circuit and the number of CMLs are particularly important when using statistical methods to assess corrosion rates and remaining life.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_21.png" class="figure-image">
                <p class="figure-caption">Figure 21—Piping Circuit Example</p>
            </div>
            
            <p>Piping circuit layout and associated CMLs are often identified on inspection piping sketches to aid the inspector in performing inspection tasks. See 14.2.1 for information on piping sketches.</p>
            <p>Each material of construction has specific corrosion/erosion characteristics and may respond uniquely when placed into different operating environments. Differing materials of construction may not have the same resistance to damage within the same operating environment. Therefore, the material of construction is a key element in determining credible damage mechanisms and/or rate of damage based on the operating environment. Circuit breaks should be placed when there is a change in the piping materials of construction, which can cause a change in corrosive/erosive behavior. A metallurgist/corrosion engineer experienced in the process unit under review should be consulted for the assignment of damage mechanisms and/or rate of damage for differing materials of construction.</p>
            <p>Several factors can affect the rate and nature of pipe wall corrosion. Individual circuits should be limited to piping components within the system where the damage rate and type of damage (common damage mechanisms) are consistent. Considerations for the limits of the piping circuit may include, but are not limited to, the following items:</p>
            <ul>
                <li>piping metallurgy;</li>
                <li>process fluid and its phase (e.g. gas, liquid, two-phase, solid);</li>
                <li>flow velocity;</li>
                <li>temperature;</li>
                <li>pressure;</li>
                <li>changes in temperature, velocity, pressure, direction, phase, metallurgy, or pipe cross section;</li>
                <li>injection of water or chemicals;</li>
                <li>process fluid contaminants;</li>
                <li>mixing of two or more streams;</li>
                <li>piping external conditions, including coating/painting, insulation, and soil conditions, as applicable;</li>
                <li>stagnant flow areas (e.g. deadlegs).</li>
            </ul>
            <p>When actual corrosion rates of a circuit differ from what is expected, a review should be performed to identify the potential reason. However, as a first step, the reading should be validated. If the reading proves to be valid, the corrosion specialist should be consulted to help review process parameters that may have changed and caused a shift in the corrosion rate. IOWs can be used to monitor for and adjust to changing conditions, and the associated IOW data can be part of this review. It is important to note that if no reason is found for the shift in corrosion rate, it could be attributed to the uncertainty associated with the measurement for the last two readings. The results of the review should be reflected in changes to the inspection plan, if required.</p>
            <p>Piping circuits should be identified with common damage mechanisms to facilitate inspection planning and data analysis and will generally have the following characteristics:</p>
            <ul>
                <li>common materials of construction;</li>
                <li>common design conditions;</li>
                <li>common operating conditions;</li>
                <li>common set (one or more) of damage mechanisms;</li>
                <li>common expected corrosion rate;</li>
                <li>common expected damage locations/morphology.</li>
            </ul>
            <p>For risk-based programs, piping circuits may be further subdivided based on risk level. For example, a pump discharge or upstream of a control valve may have the same corrosion characteristics as pump suction or downstream of the control valve, but the risk may be greater on the high-pressure segments due to higher leak rate potential. In such cases, the higher-pressure components may be assigned to a separate circuit.</p>
            <p>In addition, based on the nature of the corrosion, damage type/morphology, and piping metallurgy, circuits may contain the following:</p>
            <ul>
                <li>multiple line numbers;</li>
                <li>multiple line sizes;</li>
                <li>both primary and secondary piping components;</li>
                <li>short deadlegs (e.g. the greater of < 2D or 8 in. in length, drains/vents and blinded/capped tee runs), depending on the potential for deadleg/under-deposit corrosion.</li>
            </ul>
            <p>Piping circuits are typically shown on inspection isometric drawings and/or the piping and instrument diagram (P&ID). They may be highlighted with a unique color coding (or symbol), name and/or number. Additional piping circuit attributes that may be identified on the isometric drawings include the following:</p>
            <ul>
                <li>the boundaries of the circuit;</li>
                <li>numbered injection or mix point locations;</li>
                <li>contact support locations for inspection;</li>
                <li>SAI locations;</li>
                <li>the extent of insulation;</li>
                <li>CUI/CUF locations for inspection.</li>
            </ul>
            <p>Each piping circuit is typically documented with additional information, such as the following:</p>
            <ul>
                <li>credible damage mechanisms;</li>
                <li>materials of construction;</li>
                <li>damage type—degree of generalized or localized corrosion expected;</li>
                <li>generalized locations where inspection points should be specified based on operating conditions and metallurgy;</li>
                <li>specific concern locations or areas—injection point impingement, deadlegs/drains for condensed acid, etc.;</li>
                <li>specific process concerns;</li>
                <li>process corrosion control measures.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.3.4 Statistical Analysis of Circuit CMLs</h4>
            <p>Although a statistical analysis can be performed on any circuit, the results may be misleading unless the circuit is well defined as outlined in 7.3.3, where the circuit boundaries ideally encompass the minimum number of common damage mechanisms exhibiting a similar corrosion rate. Refer to Annex C for a more detailed description of statistical analyses.</p>
            <p>Given the nature of piping thickness data and its many sources of error, all data used in any statistical analysis should be carefully validated. The validation should include steps to identify and eliminate typical issues, such as undocumented replacements, anomalous readings, calibration shifts, or data entry errors, to minimize the errors.</p>
            <p>There are numerous related statistical techniques that may be employed in the analysis of circuit thickness data, and it is not the intent within this document to define or recommend any specific methodology. The owner-operator may elect to use any appropriate methodology or techniques (either corrosion rate or thickness-based analysis) as a means to establish representative corrosion rates and estimate minimum remaining thickness and future inspection dates.</p>
            <p>Any statistical analysis methodology utilized should be documented. Documentation should include any requirements, assumptions, limitations, cautions, etc. associated with the statistical analysis methodology. Care should be taken to ensure that the statistical treatment of the data results in a conservative representation of the various pipe components within the circuit. Ideally, the analysis should:</p>
            <ul>
                <li>measure and ensure that the data distribution is appropriate for the analysis methodology selected;</li>
                <li>provide an estimate of the standard error of the data;</li>
                <li>identify any significant outlying data/points that do not fit within the analysis parameters or distribution;</li>
                <li>provide an estimate of the minimum sample size (data population) for the statistical methodology used (statistical significance);</li>
                <li>provide for a statistical corrosion rate (or thickness) and confidence for the circuit;</li>
                <li>identify if there may be mixed modes of corrosion damage (localized/generalized);</li>
                <li>identify if there may be a shift in the corrosion rate data over time.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.3.5 Identifying Locations Susceptible to Accelerated Corrosion</h4>
            <p>In the presence of certain corrodents, corrosion rates are normally increased at areas of increased velocity and/or turbulence. Elbows, reducers, mixing points, control valves, and orifices are examples of piping components where accelerated corrosion can occur because of increased velocity and/or turbulence. Such components are normally areas where an inspector would locate additional CMLs in a piping circuit. However, the inspector should also be aware that areas of no flow, such as deadlegs (see 7.4.2), can cause accelerated corrosion and may need additional CMLs. In situations where cracking is anticipated, a CML may be established to monitor the rate of cracking.</p>
        </div>
        <div class="subsection">
            <h4>7.3.6 Accessibility of CMLs</h4>
            <p>When assigning CMLs, the inspector should consider accessibility for monitoring them. CMLs at grade level normally provide the easiest accessibility. Other areas with good accessibility are equipment platforms and ladders. In some piping systems, the nature of the active damage mechanisms will require monitoring at locations with limited accessibility. In these cases, inspection planning should decide among scaffolding, portable man lifts, or other methods to provide adequate access.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>7.4 Inspection Guidance for Location-specific Damage</h4>
        <div class="subsection">
            <h4>7.4.1 Injection and Mixing Points</h4>
            <div class="subsection">
                <h4>7.4.1.1 Injection Points</h4>
                <p>API 570 identifies injection points for additional monitoring and/or enhanced inspection during operation. This was done in recognition that injection points have caused significant equipment integrity problems due in part to their design and operation. For example, some injection points may have been installed without close attention simply because they were perceived as small add-ons with little potential for causing a problem. However, these also should be included in inspection planning.</p>
                <p>Many different types of process additives are used to maintain reliability and optimal performance of plant operations. Typically, additives are injected into piping systems through small branch connections either directly or through a quill or spray nozzle. The locations at which these additives are introduced into process streams are commonly referred to as injection points.</p>
                <p>An additive may be one of the following types:</p>
                <ul>
                    <li>a proprietary chemical, such as a corrosion inhibitor, antifoulant, or oxygen scavenger;</li>
                    <li>a water stream injected to dissolve salt deposits;</li>
                    <li>dilute corrosive process components.</li>
                </ul>
                <p>Some common injection systems found in refinery applications include the following:</p>
                <ul>
                    <li>ammonium polysulfide injection into sour gas streams (FCC, coker, sour water stripper);</li>
                    <li>steam/condensate injection into flue gas and catalyst piping;</li>
                    <li>washwater injection (continuous and intermittent) into hydroprocessing effluent to control corrosion, which may be caused by NH<sub>4</sub>HS and NH<sub>4</sub>Cl salts. Refer to API 932-B—Section 6.8.1 and Table 2, for additional details;</li>
                    <li>crude desalter washwater;</li>
                    <li>caustic injection into crude feed;</li>
                    <li>caustic injection into reformer regeneration section piping;</li>
                    <li>chloride [e.g. PERC (perchlorethylene)] injection into reformer reactor feed piping;</li>
                    <li>methanol/condensate injection into reformer reactor system piping;</li>
                    <li>ammonia or neutralizing amine injection into crude tower overhead systems;</li>
                    <li>cold H<sub>2</sub> quench injection into hydroprocessing reactor system piping;</li>
                    <li>filming amine inhibitor injection into fractionation and gas plant overhead piping.</li>
                </ul>
                <p>Several corrosion mechanisms associated with injection points have become apparent over the years. Many of these problems have resulted in highly localized deterioration. Corrosion damage associated with injection points may produce corrosion rates one order of magnitude higher than reported for the main process streams, with localized losses being the most common form of problem.</p>
                <p>Inspection practices geared to scanning areas of the piping are necessary to be able to detect localized corrosion. Problems with injection points have generally been avoided when specification, design, training, operation, and condition monitoring were adequately carried out. After installation of injection systems, the following should be reviewed:</p>
                <ul>
                    <li>injection system, including the process operating window, anticipated conditions, equipment design, materials of construction, anticipated chemical and physical interactions, and monitoring/inspection requirements, has been documented and installed hardware has been checked;</li>
                    <li>procedures and measurements in place to verify injection system performance is accomplishing its objective and not causing unanticipated process problems;</li>
                    <li>inspection plan, in accordance with API 570, in place to check the injection point and related equipment for damage related to the injection.</li>
                </ul>
                <p>During the design and period audit of the injection systems, the following would typically be considered:</p>
                <ul>
                    <li>the injection system was designed to achieve its process and reliability objectives;</li>
                    <li>the range of desired injection rates and the range of process conditions expected in the receiving stream were considered;</li>
                    <li>the ultimate destination of the injectant and its components were considered;</li>
                    <li>design of the injection as a system, including the injection point, supply system, instrumentation, and control was considered;</li>
                    <li>potential credible damage mechanisms were anticipated, and designs and materials of construction to achieve the desired pressure equipment reliability were chosen;</li>
                    <li>an MOC process was used in implementing or modifying the injection, as a way to ensure that changes were adequately thought out;</li>
                    <li>operating and maintenance personnel were trained on the proper operation and servicing of the injection equipment;</li>
                    <li>injection quills and nozzles that project into the process stream were visually inspected for fouling and loosening of joints and those subject to fatigue were liquid penetrant inspected;</li>
                    <li>spray patterns of nozzles were tested;</li>
                    <li>anti-blowout features of retractable injection hardware were inspected.</li>
                </ul>
                <p>For more thorough and complete information, see NACE SP0114.</p>
            </div>
            <div class="subsection">
                <h4>7.4.1.2 Process Mixing Points</h4>
                <p>Process mixing points occur where pipe components combine two process streams of differing composition, temperature, or other parameter that could cause damage. Mixing points can be subject to accelerated damage either from corrosion or mechanical mechanisms (e.g. thermal fatigue). Problems with mixing points have generally been avoided when specification, design, training, operation, and condition monitoring were adequately carried out.</p>
                <p>Some examples of process mixing points include the following:</p>
                <ul>
                    <li>mixing of a chloride-containing stream from a catalytic reformer (e.g. naphtha) with a wet hydrocarbon stream from elsewhere;</li>
                    <li>mixing a low-temperature, high-sulfur-containing hydrocarbon stream with a high-temperature stream is an issue when bulk fluid temperature is increased where high-temperature sulfidation becomes active;</li>
                    <li>mixing hydrogen into a hydrocarbon stream where the stream temperatures are significantly different;</li>
                    <li>mixing of streams from hydroprocessing hot and cold separators;</li>
                    <li>mixing where high-temperature corrosion (e.g. sulfidation) can become an issue if the overall fluid temperature is increased.</li>
                </ul>
                <p>The inspector, unit process engineer, and corrosion specialist will typically review PFDs to identify susceptible process mixing points and define the extent of the mix point circuit. More intensive inspection chosen for the damage mechanism is usually required at specific mixing points. This could include close grid thickness surveys, UT scanning techniques, and profile radiographic examination (RT) for corrosion.</p>
                <p>Other NDE techniques (e.g. angle beam UT, PT, etc.) may be appropriate when inspecting for thermal fatigue cracking. Under some conditions, users may apply injection point inspection requirements to susceptible process mixing points.</p>
                <p>Some mixing points may incorporate proven technology resulting in complete mixing of each stream. These mixing points may not fall within the intended scope/definition of corrosive mixing points and may not require any special emphasis inspections.</p>
            </div>
            <div class="subsection">
                <h4>7.4.1.3 Mixing Point Thermal Fatigue Considerations</h4>
                <p>It has been noted that the failure in design to adequately encompass several considerations has and can lead to thermal fatigue failures. These considerations include mixing effectiveness, flow regime, materials of construction, stream composition and stream volume, and evaluation of normal operating conditions combined with the likelihood/frequency of those conditions.</p>
                <p>Table 2 is an example that may be used for screening the material, fluid types and temperature difference between the two streams at a mixing point to determine whether thermal fatigue may be a concern. Table 2 does not address corrosion at mix points that can occur at lower-temperature differentials. If the temperature difference between two process streams exceeds the number below, a thermal sleeve may be needed in order to prevent thermal fatigue.</p>
                <p>Owner-operators should develop their own specific criteria for screening and addressing thermal fatigue at mixing points.</p>
                <div class="table-container">
                <table class="api-table">
                    <caption>Table 2—Mix Point Thermal Fatigue Screening Criteria</caption>
                    <thead>
                        <tr>
                            <th colspan="2">Flow Medium</th>
                            <th colspan="2">Delta Temperature (°F)</th>
                        </tr>
                        <tr>
                            <th>Main Pipe</th>
                            <th>Secondary Pipe</th>
                            <th>Ferritic</th>
                            <th>Austenitic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gas</td>
                            <td>Gas</td>
                            <td>450</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Liquid</td>
                            <td>Liquid</td>
                            <td>450</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Liquid</td>
                            <td>Gas</td>
                            <td>450</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Gas</td>
                            <td>Liquid</td>
                            <td>275</td>
                            <td>125</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div class="subsection">
                <h4>7.4.1.4 Effectiveness of Mixing and Flow Regime</h4>
                <p>When two streams are combined, turbulence starts the mixing process, and the effectiveness will depend on the degree of penetration by the mixing stream and whether the two streams are miscible or immiscible. If the streams are miscible, then a single phase will be formed, but dispersion and dissolution are time dependent. Complete mixing may not develop until 100 pipe diameters or more downstream; inspection plans should consider the area where incomplete mixing is predicted. If the streams are immiscible, two phases may remain in the mixed stream or a third phase may form downstream of the mixing point (e.g. amine salt deposition).</p>
                <p>The flow regime that develops depends on the following:</p>
                <ul>
                    <li>stream velocity;</li>
                    <li>relative amounts/densities of the phases;</li>
                    <li>size and orientation of both lines.</li>
                </ul>
                <p>Flow regimes are different in horizontal and vertical lines because of gravity. Fully developed flow may not occur until many pipe diameters downstream.</p>
                <p>Injection and mixing points involve mixing, contacting, or wetting.</p>
            </div>
            <div class="subsection">
                <h4>7.4.1.5 Mixing, Contacting, or Wetting</h4>
                <ul>
                    <li><strong>Mixing</strong>—The rate of mixing is improved by an increase in velocity of the injected stream, which can be accomplished by injecting through a quill or spray nozzle.</li>
                    <li><strong>Contacting</strong>—Contacting or intimate mixing of the separate phases is improved by maximizing the area between the phases (e.g. by a spray nozzle).</li>
                    <li><strong>Wetting</strong>—In single-phase streams, wetting of walls by injected fluid is readily achieved. In two-phase streams, wetting is dependent on the flow regime with annular, bubble, and froth flow enhancing wetting of the walls, whereas stratified and wavy flow will impede wall wetting.</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>7.4.1.6 Quantity of Injected/Mixed Water</h4>
                <p>In some situations, the quantity of water needs to be calculated carefully to ensure that sufficient unvaporized water remains to fulfill the function and not exacerbate corrosion. Process engineers should check this periodically. Water quality can also affect corrosion rates.</p>
                <p>See NACE SP0114 for additional information.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>7.4.2 Deadlegs</h4>
            <p>The corrosion rate in deadlegs can vary significantly from adjacent active piping. The inspector should monitor the wall thickness on selected deadlegs, including both the stagnant end and the connection to an active line. Examples of deadlegs include the following:</p>
            <ul>
                <li>in systems such as tower overhead systems and hydrotreater units where ammonium salts are present, corrosion can occur in the area of the deadleg where the metal is at the salting or dew-point temperature;</li>
                <li>in hot piping systems, the high-point area can corrode due to convective currents set up in the deadleg.</li>
            </ul>
            <p>For such systems, extensive inspection coverage using techniques such as UT scanning and profile RT may be necessary in order to locate the area where dew-point or ammonium-salt corrosion is occurring.</p>
            <p>Overall, consideration should be given to removing deadlegs that serve no further process purpose.</p>
            <p>Additionally, water can collect in deadlegs, which can freeze in colder environments, resulting in pipe rupture.</p>
        </div>
        <div class="subsection">
            <h4>7.4.3 SAI</h4>
            <p>External corrosion can occur at the interface where partially buried pipe or buried pipe egresses from soil (and/or concrete). Note that areas where pipe is unintentionally, but permanently, contacting the soil (e.g. due to soil movement) should be treated as SAIs as well. Typically, the corrosion can extend from 12 in. (30 cm) below to 6 in. (15 cm) above the soil surface.</p>
            <p>Inspection at grade should include checking for coating damage, bare pipe, and pit depth measurements. If significant corrosion is noted, thickness measurements and excavation may be required to assess whether the corrosion is localized to the SAI or can be more pervasive to the buried system. Thickness readings at SAIs can expose the metal and accelerate corrosion if coatings and wrappings are not properly restored.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_22.png" class="figure-image">
                <p class="figure-caption">Figure 22—SAI Corrosion</p>
            </div>
            
            <p>Figure 22 is an example of corrosion at an SAI, although it had been wrapped with tape. If the buried piping has satisfactory cathodic protection, as determined by monitoring in accordance with API 570, excavation is required only if there is evidence of coating or wrapping damage. Experience has shown that corrosion could occur under the tape even though it appears to be intact. Consideration should be given to excavating down 12 in. (300 mm) and removing the tape for inspection. Use of an appropriate NDE in lieu of the excavation and tape removal can be done to inspect for possible corrosion underneath the tape.</p>
            <p>If the buried piping is uncoated at grade, consideration should be given to excavating 6 in. (150 mm) to 12 in. (300 mm) deep to assess the potential for hidden damage. Alternately, specialized UT techniques (e.g. guided wave) can be used to screen areas for more detailed evaluation.</p>
            <p>At concrete-to-air and asphalt-to-air interfaces for buried piping without cathodic protection, the inspector should look for evidence that the caulking or seal at the interface has deteriorated and allowed moisture ingress. If such a condition exists on piping systems over 10 years old, it may be necessary to inspect for corrosion beneath the surface before resealing the joint.</p>
            <p>See API 571 for additional information on corrosion at SAIs.</p>
        </div>
        <div class="subsection">
            <h4>7.4.4 Service-specific, Localized Corrosion</h4>
            <p>While there are many types of internal damage mechanisms possible from the process service, the following are some examples of service-specific, localized corrosion mechanisms and where they might be expected for the inspector to consider in developing inspection plans:</p>
            <ul>
                <li>downstream of injection and mixing points and upstream of product separators (e.g., hydroprocessor reactor effluent lines);</li>
                <li>dew-point corrosion in condensing streams (e.g. overhead fractionation);</li>
                <li>unanticipated acid or caustic carryover from processes into nonalloyed piping systems, or in the case of caustic, into non-postweld heat treated steel piping systems;</li>
                <li>where condensation or boiling of acids (organic and inorganic) or water is likely to occur;</li>
                <li>where naphthenic or other organic acids can be present in the process stream;</li>
                <li>where high-temperature hydrogen attack can occur (see API 941);</li>
                <li>ammonium salt condensation locations in hydroprocessing streams (see API 932-B);</li>
                <li>mixed-phase flow and turbulent areas in acidic systems, also hydrogen grooving areas;</li>
                <li>where high-sulfur streams at moderate-to-high temperatures exist;</li>
                <li>mixed grades of carbon steel piping in hot corrosive oil service [500 °F (260 °C)] or higher temperature and sulfur content in the oil greater than 0.5 % by weight;</li>
                <li>under-deposit corrosion in slurries, crystallizing solutions, or coke-producing fluids;</li>
                <li>chloride carryover in catalytic reformer units, particularly where it mixes with other wet streams;</li>
                <li>welded areas subject to preferential attack;</li>
                <li>"hot spot" corrosion on piping with external heat tracing;</li>
                <li>steam systems subject to "wire cutting," graphitization, or where condensation occurs;</li>
                <li>locations subject to high-temperature sulfidation corrosion where residence times resulting from low flow conditions may result in increased corrosion; susceptible locations include elbows, along the top of horizontal sections of the line, and areas where localized heating may occur, i.e. double, or triple heat trace areas and in stagnant and low-flow piping systems with thermally induced currents (thermosiphon).</li>
            </ul>
            <p>Where a temporary (or swing-out) piping spool has not been removed prior to process operation start-up, it should be verified that the temporary piping is either effectively isolated from the process (such as a double-block valve or isolation blind) or that the temporary piping is of adequate material and mechanical design for the continued process operation, including potential no flow conditions. One particular concern is raised for temporary piping of inadequate material that may be subject to high-temperature sulfidation or other damage mechanisms if left exposed to the process. If the temporary piping is isolated and left for a significant period, lockout/tagout can be a means to prevent inappropriate and inadvertent service.</p>
        </div>
        <div class="subsection">
            <h4>7.4.5 Contact Point Corrosion</h4>
            <p>Localized corrosion at pipe support contact points is the result of crevice corrosion due to deposits that lead to leaks. These deposits can contain corrosive species, water, and oxygen typical of an externally corrosive environment. More corrosion can be expected in moist climates, marine climates, and where contact between the pipe and its supports is less of a "point" and more of an "area." If undetected and/or not mitigated, contact point corrosion can result in through-wall penetration and leaks.</p>
        </div>
        <div class="subsection">
            <h4>7.4.6 Piping Supports</h4>
            <div class="subsection">
                <h4>7.4.6.1 External Corrosion at Supports</h4>
                <p>Corrosion of supports, and their associated pipework, may occur in areas of protective coating breakdown where water and airborne debris become trapped (often referred to as "contact point corrosion"). Support design (i.e. support beams) can significantly contribute to this issue. Corrosion rates can be increased by local factors. Elevated temperatures from hot piping (e.g. steam piping) can increase corrosion, including fireproofed supports. Other factors, such as heat tracing or steam trap drain outlets, or where moisture is increased, such as from proximity to cooling towers and vegetation (creating a wet environment on the underside of the pipe and on any supports in the proximity), all can contribute to locally high corrosion rates.</p>
                <p>Crevice corrosion can occur under any partially or nonwelded shoe, doubler plate, wrapper, or half-sole plate. Considerations should also be given to intermittent environmental conditions, such as testing of fire suppression deluge systems, etc.</p>
                <p>Dummy leg supports may trap water and airborne debris, leading to corrosion of both the support and the pipe. When constructed using pipe, consideration should be given to capping all open-ended supports with fully welded caps or plates and providing a drain hole no smaller than 1/4 in. (6 mm) at the lowest position. For horizontal dummy legs, drain holes should be provided at both ends, and the dummy leg should slope slightly away from the pipe it is supporting.</p>
            </div>
            <div class="subsection">
                <h4>7.4.6.2 Internal Corrosion at Supports</h4>
                <p>The cooling effect of a support on elevated temperature pipe may be sufficient to cause product or water condensation on the inside of the pipe. In some process services, this condensation may contribute to accelerated internal corrosion.</p>
            </div>
            <div class="subsection">
                <h4>7.4.6.3 Other Damage Mechanisms at Supports</h4>
                <p>Several other damage mechanisms can occur at pipe supports and should be inspected for including the following.</p>
                <ul>
                    <li><strong>Fretting, Overstress, or Coating Damage at Supports due to Thermal Expansion</strong>—Thermal expansion and contraction due to temperature changes can damage protective coating systems and/or overstress both pipe and pipe supports.</li>
                    <li><strong>Galvanic Corrosion at Supports</strong>—Galvanic corrosion is associated with the use of two or more materials of differing value in the galvanic series, in close proximity to each other. For example, carbon steel supports welded to stainless steel piping may be subject to corrosion at a higher rate than the stainless steel piping.</li>
                    <li><strong>CUI at Supports</strong>—Supports that penetrate insulation systems may provide a potential for water ingress and subsequent CUI due to poor sealing at the penetration.</li>
                    <li><strong>Environmental Cracking at Support</strong>—In predominantly alkaline process environments (e.g. amines and caustic), welding of supports to carbon steel piping either with or without postweld heat treatment (PWHT) can cause internal environmental cracking as a result of residual stresses.</li>
                    <li><strong>External Cracking at Supports</strong>—Austenitic stainless steel piping may be susceptible to ECSCC where there is a source of chlorides above a threshold temperature. Pipe supports that trap water against the pipe can contribute to the susceptibility of cracking.</li>
                    <li><strong>Foundation/Concrete Plinth Deterioration (Including Subsidence)</strong>—Deterioration of foundations and plinths are often a direct result of overloading the support and/or extended service life.</li>
                    <li><strong>Vibration/Movement/Misalignment</strong>—Pipe vibration, movement, and misalignment can create a potential for fatigue, fretting, and/or overstressing of pipe and support members. Proper anchors, restraints, and movement allowances/guides should be considered during support design. This includes available travel of spring hangers.</li>
                </ul>
            </div>
        </div>
        <div class="subsection">
            <h4>7.4.7 Stainless Steel Tubing in Chloride Service</h4>
            <p>One service-specific damage mechanism is chloride pitting and CSCC of tubing. The 18Cr-8Ni family of stainless steels, such as Types 304 and 316, are commonly used for tubing materials of construction. However, it should be noted that even though these tubing materials may be resistant to many chemical fluids, they are susceptible to pitting and CSCC if:</p>
            <ul>
                <li>There is a presence of chlorides.
                    <ul>
                        <li>Externally, chlorides may come from insulation, PVC insulation jacketing, the atmosphere, rain (especially in marine environments), deluge water systems, washdown of surrounding decks and roads, etc.</li>
                        <li>Internally, chlorides can be common in many process streams and may be introduced by hydrotest water.</li>
                        <li>Concentration mechanisms, such as local evaporation of water, can also increase susceptibility to cracking.</li>
                    </ul>
                </li>
                <li>There is a presence of water.</li>
                <li>There is exposure to temperatures above about 140 °F (60 °C).</li>
            </ul>
            <p>NOTE It should be noted that in some instances chloride pitting and CSCC can occur at temperatures below 140 °F (60 °C), such as low pH environments or in components with high residual stress.</p>
            <ul>
                <li>There is tubing material stress.
                    <ul>
                        <li>This is common from residual stresses imparted during tube manufacturing processes or during installation processes, such as tube bending and compression fitting makeup.</li>
                    </ul>
                </li>
            </ul>
            <p>Tubing failures due to CSCC and/or pitting can be too unpredictable to manage through inspection efforts; therefore, a materials or corrosion specialist/engineer should be consulted for alloy recommendations used in aggressive environments. Consideration should be given to using materials such as Alloy 825 (for many elevated temperature refining applications), Alloy C-276 [for sour water or hot hydrofluoric (HF) services where oxidizing species are present], and Alloy 20Cb3 (for sulfuric acid applications), or other available high alloys because of their improved resistance to CSCC and/or pitting.</p>
        </div>
        <div class="subsection">
            <h4>7.4.8 Inspection of Underground Piping</h4>
            <div class="subsection">
                <h4>7.4.8.1 General</h4>
                <p>Inspection of buried process piping (not regulated by the Department of Transportation) is different from other process piping inspections because significant external deterioration can be caused by corrosive soil conditions.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_23.png" class="figure-image">
                    <p class="figure-caption">Figure 23—Underground Piping Corrosion beneath Poorly Applied Tape Wrap</p>
                </div>
                
                <p>Important references for underground piping inspection include NACE SP0169, NACE SP0274, and API 570—Section 9.</p>
                <p>Note that the inspection of SAIs is generally not considered to be an inspection of the respective buried piping as the inspection plan for damage mechanisms can vary significantly between the SAI and that for buried piping.</p>
            </div>
            <div class="subsection">
                <h4>7.4.8.2 Types and Methods of Inspection and Testing</h4>
                <div class="subsection">
                    <h4>7.4.8.2.1 Above-grade Visual Surveillance</h4>
                    <p>Indications of leaks from buried piping can include moist ground or actual seepage of product carried in the underground piping, a change in the surface contour of the ground, discoloration of the soil, softening of paving asphalt, pool formation, bubbling water puddles, or noticeable odor. Surveying the route of buried piping is one method to identify problem areas. All lines should be inspected at and just below the point where they enter earth, asphalt, or concrete because serious corrosion frequently occurs at such locations.</p>
                    <p>Small unmanned aerial systems, often referred to as "drones," can be utilized to support or replace ground based surveys. Unmanned aerial systems can utilize either a camera or a mix of a camera and an infrared system to provide this assistance. Additional sensing technology that may detect particular chemical species (such as methane) may also be employed. Compliance with the local regulatory regulations and safe operation of flights is required. Those employing these technologies should assure themselves of the detection capabilities and verify the performance of such equipment.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.2.2 Close-interval Potential Survey</h4>
                    <p>Close-interval potential surveys are used to locate corrosion cells, galvanic anodes, stray currents, coating problems, underground contacts, areas of low pipe-to-soil potentials, and other problems relating to cathodic protection.</p>
                    <p>A close-interval pipe-to-soil potential survey measures the potential of the pipe to the soil directly over the pipe, at predetermined intervals between measurements, usually at 2.5 ft, 5 ft, 10 ft, or 20 ft (0.8 m, 1.5 m, 3 m, or 6 m). The pipe contact can be made at an aboveground pipe attachment.</p>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_24.png" class="figure-image">
                        <p class="figure-caption">Figure 24—Pipe-to-Soil Internal Potential Survey Use to Identify Active Corrosion</p>
                    </div>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_25.png" class="figure-image">
                        <p class="figure-caption">Figure 25—Example of Pipe-to-Soil Potential Survey Chart</p>
                    </div>
                    
                    <p>Corrosion cells can form on both bare pipe and coated pipe with holidays where the bare steel contacts the soil. Since the potential at the area of corrosion will be measurably different from an adjacent area on the pipe, the location of the corrosion activity can be determined by this survey technique.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.3 Holiday Pipe Coating Survey</h4>
                    <p>There are two key applications for employing holiday surveys.</p>
                    <ol>
                        <li>It should be used on newly coated and installed piping to ensure that the coating is intact and holiday free. The holiday pipe coating survey (e.g. direct current voltage gradient) can be used to locate external coating flaws on buried coated pipes.</li>
                        <li>More often it is used to evaluate coating serviceability for buried piping that has been in service for an extended period.</li>
                    </ol>
                    <p>From survey data, the coating effectiveness and rate of coating deterioration can be determined. This information is used for both predicting corrosion activity in a specific area and forecasting the replacement of the coating for corrosion control.</p>
                    <p>The frequency of pipe coating holiday surveys is usually based on indications that other forms of corrosion control are ineffective. For example, on a coated pipe where there is a gradual loss of cathodic protection potentials, or when an external corrosion leak occurs at a coating defect, a pipe coating holiday survey may be used to evaluate the coating.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.4 Soil Resistivity Testing</h4>
                    <p>Soil resistivity measurements can be used for the relative classification of soil corrosivity. Corrosion of bare or poorly coated piping is often caused by a mixture of different soils in contact with the pipe surface. The corrosiveness of the soils can be determined by a measurement of the soil resistivity. Lower levels of resistivity are relatively more corrosive than higher levels, especially in areas where the pipe is exposed to significant changes in soil resistivity.</p>
                    <p>There are three well-known methods of determining resistivity. These are the Wenner Four-pin Method, the soil bar (AC bridge), and the soil box. The procedures for the use of each of these three methods are simple in concept. Each one measures a voltage drop caused by a known current flow across a measured volume of soil. This "resistance" factor is used in a formula to determine the resistivity of the soil. Both the soil bar and the soil box use a multiplication factor to determine the soil resistivity. This factor should be imprinted on the bar or box.</p>
                    <p>Measurements of soil resistivity using the Wenner Four-pin Method should be in accordance with ASTM G57. The Four-pin Method uses the formula:</p>
                    <p>Resistivity (ohm × cm) = 191.5 × d × R</p>
                    <p>where</p>
                    <ul>
                        <li>191.5 is a constant that takes into account the mathematical equation for the mass of the soil and a conversion factor to convert feet to centimeters;</li>
                        <li>d is the distance in feet between any of the equally spaced pins (with all of the pins in a straight line);</li>
                        <li>R is a resistance factor of the voltage drop across the two inner pins, divided by the induced current flow in the earth between the two outer pins.</li>
                    </ul>
                    <p>The depth that the pins are inserted into the earth should be small compared to the pin spacing (see Figure 26). The following conditions should be considered in four-pin soil resistivity measurements:</p>
                    <ul>
                        <li>all underground structures should be excluded from the measurement;</li>
                        <li>all of the pins should be in a straight line and equally spaced;</li>
                        <li>the depth of the pins inserted into the ground should be less than 4 % of the spacing;</li>
                        <li>the soil resistivity meter should be designed to exclude any effect of extraneous AC or DC currents.</li>
                    </ul>
                    <p>Other methods include using a soil bar or a soil box.</p>
                    <p>In cases of parallel pipes or in areas of intersecting pipelines, the Four-pin Method may not be applicable.</p>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_26.png" class="figure-image">
                        <p class="figure-caption">Figure 26—Wenner Four-pin Soil Resistivity Test</p>
                    </div>
                    
                    <p>A schematic illustrating use of a soil bar is shown in Figure 27. The soil bar is typically inserted to the depth in the soil where the resistivity is to be taken. An AC bridge-type meter is used to balance and read the indicated resistivity. Suggestions for use of the soil bar include the following:</p>
                    <ul>
                        <li>use of a standard prod bar to provide the initial hole;</li>
                        <li>avoiding the addition of water during or after opening the hole;</li>
                        <li>applying pressure on the soil bar after insertion into the open hole.</li>
                    </ul>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_27.png" class="figure-image">
                        <p class="figure-caption">Figure 27—Soil Bar Used for Soil Resistivity Measurements</p>
                    </div>
                    
                    <p>For measuring the resistivity of soil samples from auger holes or excavations, a soil box serves as a convenient means for obtaining accurate results. The soil box is used to determine the resistivity of soil from a certain location by removing the soil from its location and placing it into a soil box. If the resistivity of the soil sample is not going to be measured immediately after its removal, the soil should be stored in a container that can preserve its moisture and prevent it from contamination.</p>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_28.png" class="figure-image">
                        <p class="figure-caption">Figure 28—Two Types of Soil Boxes Used for Soil Resistivity Measurements</p>
                    </div>
                    
                    <p>Important points for consideration when using a soil box include the following:</p>
                    <ul>
                        <li>avoiding contamination during soil sample removal, handling, and storing;</li>
                        <li>avoiding adding or subtracting water;</li>
                        <li>having to compact the soil sample to the same density in the soil box as it was prior to removal from the ground.</li>
                    </ul>
                    <p>For soil resistivity testing, the depth of piping should be considered in selecting the method to be used as well as the location of the samples. The testing and evaluation of the results should be performed by personnel trained and experienced in soil resistivity testing.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.5 Cathodic Protection Monitoring</h4>
                    <p>Cathodically protected buried piping should be monitored regularly to ensure adequate levels of protection. Monitoring should include periodic measurement and analysis of pipe-to-soil potentials by personnel trained and experienced in cathodic protection system operation. More frequent monitoring of critical cathodic protection components, such as impressed current rectifiers, is required to ensure reliable system operation.</p>
                    <p>See NACE SP0169 for guidance on inspecting and maintaining cathodic protection systems for buried piping.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.6 Other Inspection Methods for Underground Piping</h4>
                    <div class="subsection">
                        <h4>7.4.8.6.1 General</h4>
                        <p>Several inspection methods are available. Some methods can indicate the external or wall condition of the piping, whereas other methods indicate only the internal condition. Examples are as follows.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.2 Intelligent Pigging</h4>
                        <p>In-line inspection (ILI) tools are commonly referred to as "smart" or "intelligent pigging." This method involves the movement of a device (pig) through the piping either while it is in service or after it has been removed from service. Many devices are available employing different methods of inspection utilizing magnetic flux leakage, UT, optical, laser, ET, and other electromagnetic techniques. There are self propelled ILI or free-swimming tools available that only require one point of access and can perform the wall loss examinations with or without product/fluid in the line. These tools use either ultrasonic or electromagnetic inspection methods to detect and size both ID and OD defects. These tools do not require typical launching and receiving line modifications; however, the use of an umbilical often restricts their inspection range. Beware of potential limitations of ILI on small-diameter piping (i.e. 4" and less) and piping configurations.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.3 Video Cameras</h4>
                        <p>Video cameras are available that can be inserted into the piping. These cameras can provide visual inspection information on the internal condition of the line.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.4 Guided Wave Inspection</h4>
                        <p>Guided wave UT can be used to inspect underground piping for internal and external corrosion. Guided waves are sent axially along the piping under examination. Localized wall loss due to corrosion may be located by analyzing the signals of the reflected waves. The techniques require some access to the outside surface for mounting the guided wave transducers. The distance that the waves can travel and provide echoes of sufficient amplitude for analysis depends on many factors, including type and condition of coating on the pipe surface, surface roughness due to internal and/or external corrosion, bonding between pipe and concrete at the air-to-concrete interface, condition of the soil in tight contact with the piping, and fittings on the piping.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.5 Excavation</h4>
                        <p>In many cases, the only available inspection method that can be performed is unearthing the piping. This is done to visually inspect the external condition of the piping and to evaluate its thickness and internal condition (using the methods discussed in 7.4.8.2).</p>
                        <p>Care should be exercised in removing soil from above and around the piping to prevent damaging the line or line coating, especially if the piping is in service. The last few inches of soil should be removed manually to avoid this possibility. If the excavation is sufficiently deep, the sides of the trench should be properly shored to prevent their collapse, in accordance with OSHA regulations, where applicable.</p>
                        <p>If the coating or wrapping is deteriorated or damaged, it should be removed in that area to inspect the condition of the underlying metal.</p>
                        <p>See 7.4.3 for inspection of the SAI of buried piping.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.6 Leak Testing</h4>
                        <p>Underground lines that cannot be visually inspected should be periodically tested for leaks. Several methods are available to achieve this objective.</p>
                        <ul>
                            <li><strong>Pressure decay methods</strong> involve pressurizing the line to a desired amount, blocking it in, and then removing the source of pressure. Monitoring the line pressure over a period of time will provide an indication of system tightness. Tests may be conducted at a single pressure or multiple pressures. Testing at multiple pressures provides a means of compensating for temperature variations and may enable shorter test times compared to a single pressure test. For pressure decay methods, temperature variation and line pack (e.g. air pockets in a liquid-filled line) can affect the interpretation of results. If desired, the performance of pressure decay methods can be confirmed by leak simulation.</li>
                            <li><strong>Volume-in/volume-out methods</strong> make use of volumetric measuring meters at each end of the line. Typically, these devices are permanently installed in situations requiring custody transfer and/or on demand leak detection. A standard system would not be able to detect a leak under static (no flow) conditions. If desired, the performance of volume-in/volume-out methods can be determined by a leak simulation.</li>
                            <li><strong>Single-point volumetric methods</strong> are similar to pressure decay measurements requiring the line to be blocked in for a static test. A graduated cylinder is attached to the line to measure volume changes over time. Air pockets in a liquid-filled line and temperature variation can affect the results. Again, the performance of single-point volumetric methods can be determined by a leak simulation.</li>
                            <li><strong>A marker chemical (i.e. tracer)</strong> can be added to the line as a leak detection method. Soil gas samples near the line are collected and tested for the presence of the marker chemical. The absence of any marker chemical in the soil gas samples indicates that the line is not leaking. Supplementary tests are usually required to determine the speed of sample probes in the soil and the speed at which the marker chemical travels through the backfill. Chemical tracers may be added to a liquid- or gas-filled line. This technology has the capability to both detect and locate leaks. The supplementary tests are equivalent to confirming technology performance with leak simulations.</li>
                            <li><strong>Acoustic emission technology</strong> detects and locates leaks by the sound created by the leak. Sensors should be spaced to allow the sound generated by a leak to be detected at the sensor locations. Sensors are attached directly to the pipe so it may require the removal of any protective coating. It should be confirmed that the probable leak conditions will generate sufficient sound to be detected by the sensors. Since geometry and backfill will affect the noise generation, generalized leak simulations may not confirm technology performance.</li>
                        </ul>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.7 Nonintrusive Magnetic and Electromagnetic Techniques</h4>
                        <p>Large standoff magnetic and electromagnetic techniques are available for the screening inspection of buried piping to detect corrosion wall loss and potentially other harmful flaws. These techniques rely on measuring the local magnetic field change due to the presence of wall loss. The inspection can be done without excavation. Differentiating wall loss signals from other magnetic anomalies, such as adjacent piping is a challenge. Follow-up examinations by other methods are also needed to accurately determine the depth of detected wall loss.</p>
                        <p>Owner-operators should perform structured validation and calibration testing of these technologies prior to their application. This testing is critical, particularly applying these techniques to underground piping within a plant environment.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>7.5 Inspection Guidance for Specific Damage Mechanisms</h4>
        <div class="subsection">
            <h4>7.5.1 CUI</h4>
            <div class="subsection">
                <h4>7.5.1.1 General</h4>
                <p>A piping inspection program should provide for the external inspection of insulated piping systems. This should include a review of the insulation system integrity for conditions that could lead to CUI, as well as signs of ongoing CUI. API 570 documents the requirements of a CUI inspection program. This section provides guidelines for identifying potential CUI areas for inspection.</p>
                <p>CUI occurs due to moisture collecting under the insulation, next to the pipe material. Sources of moisture can include rain, water leaks, condensation, deluge systems, and cooling towers. There are two forms of CUI: localized corrosion of carbon steel and ECSCC of austenitic stainless steel. See API 571 and API 583 for additional details on CUI mechanisms and inspection. See NACE SP0198 for guidance on the use of protective coatings to mitigate corrosion under thermal insulation and fireproofing materials.</p>
                <p>This section provides guidelines for identifying potential CUI areas for inspection. The extent of a CUI inspection program may vary depending on the local climate. Marine locations in warmer areas may require a very active program, whereas cooler, drier, mid-continent locations may not need as extensive a program.</p>
            </div>
            <div class="subsection">
                <h4>7.5.1.2 Insulated Carbon and Low-alloy Piping Systems Susceptible to CUI</h4>
                <p>CUI can occur in insulated carbon steel and low-alloy carbon steel (referred to collectively as "carbon steel" in this section) piping systems, including ones insulated for personnel protection, operating between 10 °F (−12 °C) and 350 °F (175 °C). CUI is particularly aggressive where operating temperatures cause frequent or continuous condensation and re-evaporation of atmospheric moisture. Carbon steel piping systems, operating above 350 °F (175 °C), are generally not susceptible to CUI, except when:</p>
                <ul>
                    <li>they are in intermittent service (cyclic service for temperature);</li>
                    <li>there are deadlegs and attachments that protrude from insulated piping and may operate within the susceptible temperature range for CUI (as stated above).</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>7.5.1.3 Insulated Austenitic and Duplex Stainless Steel Piping Systems Susceptible to ECSCC under Insulation</h4>
                <p>In austenitic stainless steels, CUI damage takes the form of ECSCC. Most CUI damage in austenitic stainless steels occurs at metal temperatures between 140 °F (60 °C) and 350 °F (175 °C), although exceptions have been reported at lower temperatures. Austenitic stainless steel piping that normally operates above 500 °F (260 °C) can suffer from ECSCC during start-up after insulation gets soaked from deluge system testing, fire water, or rain during downtime.</p>
                <p>NOTE ECSCC of duplex stainless steels does not typically occur until about 285 °F (140 °C) and at very high chloride concentration levels.</p>
                <p>Stainless steel piping systems may still be vulnerable to damage when in they are in intermittent service or in cases where there are deadlegs and attachments that protrude from insulated piping and may operate within the susceptible temperature range for CUI damage.</p>
                <p>It has been noted that for austenitic stainless steel an aluminum foil wrapping is effective in protecting the surface from ECSCC.</p>
            </div>
            <div class="subsection">
                <h4>7.5.1.4 Typical Locations on Piping Circuits Susceptible to CUI</h4>
                <p>Locations of carbon steel and austenitic/duplex stainless steel piping systems exposed or subject to certain conditions can potentially be more susceptible to CUI. These conditions include those:</p>
                <ul>
                    <li>exposed to mist overspray from cooling water towers;</li>
                    <li>exposed to steam vents;</li>
                    <li>exposed to deluge systems;</li>
                    <li>exposed to condensation dripping from above;</li>
                    <li>exposed to process spills or ingress of moisture or acid vapors;</li>
                    <li>subjected to vibration that have a tendency to inflict damage to insulation jacketing providing a path for water ingress;</li>
                    <li>exposed to moisture from steam-tracing leaks, especially at tubing fittings beneath the insulation;</li>
                    <li>unmaintained with deteriorated insulation, coatings, and/or wrappings;</li>
                </ul>
                <p>NOTE Bulges or staining of the insulation or jacketing system or missing bands are visual indications of deteriorated insulation (bulges can indicate corrosion product buildup).</p>
                <ul>
                    <li>subject to potential physical damage of the coating or insulation, thereby exposing the piping to the environment.</li>
                </ul>
                <p>In addition to the conditions noted above, some specific locations associated with the insulation system design and maintenance can be more susceptible to CUI. These locations include the following:</p>
                <ul>
                    <li>all penetrations or breaches in the insulation jacketing systems, such as the following:
                        <ul>
                            <li>deadlegs (vents, drains, etc.);</li>
                            <li>pipe hangers and other supports;</li>
                            <li>valves and fittings (irregular insulation surfaces);</li>
                            <li>bolt-on pipe shoes;</li>
                            <li>steam and electric tracer tubing penetrations;</li>
                        </ul>
                    </li>
                    <li>termination of insulation at flanges and other piping components;</li>
                    <li>insulation jacketing seams located on the top of horizontal piping or improperly lapped or sealed insulation jacketing;</li>
                    <li>termination of insulation in a vertical pipe;</li>
                    <li>caulking that has hardened, separated, or is missing;</li>
                    <li>low points in piping systems, particularly ones that have a known breach in the insulation system, including low points in long unsupported piping runs and vertical to horizontal transitions;</li>
                    <li>carbon or low-alloy steel flanges, bolting, and other components under insulation in high-alloy piping systems.</li>
                </ul>
                <p>Particular attention should be given to locations where insulation plugs have been removed to permit piping thickness measurements on insulated piping. These plugs should be replaced and sealed after inspection or maintenance activities. Several types of removable plugs are commercially available that permit inspection and identification of inspection points for future reference.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>7.5.2 Erosion and Erosion-corrosion</h4>
            <p>Erosion can be defined as the removal of surface material by the action of numerous individual impacts of solid or liquid particles or cavitation. It can be characterized by grooves, rounded holes, waves, and valleys in a directional pattern. Erosion is usually in areas of turbulent flow such as at changes of direction in a piping system or downstream of control valves where vaporization can take place. Erosion damage is usually increased in streams with large quantities of solid or liquid particles and high velocities. A combination of corrosion and erosion (erosion-corrosion) results in significantly greater metal loss than can be expected from corrosion or erosion alone.</p>
            <p>This type of corrosion occurs at high-velocity and high-turbulence areas. Examples of places to inspect include the following:</p>
            <ul>
                <li>downstream of control valves, especially where flashing or cavitation is occurring;</li>
                <li>downstream of orifices;</li>
                <li>downstream of pump discharges;</li>
                <li>at any point of flow direction change, such as the outside radii of elbows;</li>
                <li>downstream of piping configurations (welds, thermowells, flanges, etc.) that produce turbulence, particularly in velocity-sensitive systems, such as ammonium hydrosulfide and sulfuric acid systems.</li>
            </ul>
            <p>Areas suspected to have localized erosion-corrosion should be inspected using appropriate NDE methods that will yield thickness data over a wide area, such as UT scanning and profile RT.</p>
            <p>See API 571 for additional information on erosion and erosion-corrosion.</p>
        </div>
        <div class="subsection">
            <h4>7.5.3 Environmental Cracking</h4>
            <p>Piping system materials of construction are normally selected to resist the various forms of SCC. Some piping systems can be susceptible to environmental cracking due to upset process conditions, CUI, unanticipated condensation, or exposure to wet hydrogen sulfide or carbonates. Examples of this include the following:</p>
            <ul>
                <li>ECSCC of austenitic stainless steels resulting from moisture and chlorides under insulation, under deposits, under gaskets, or in crevices (see API 583); this is an especially aggressive form of cracking if environmental conditions cause drying and wetting (i.e. the chlorides concentrate); note that CSCC of austenitic stainless steels can also occur internally where chlorides are present with water;</li>
                <li>polythionic acid SCC of sensitized austenitic stainless steels and alloys resulting from exposure to sulfide/moisture condensation/oxygen;</li>
                <li>caustic SCC (sometimes known as caustic embrittlement);</li>
                <li>amine SCC in non-stress-relieved piping systems;</li>
                <li>carbonate SCC in alkaline systems;</li>
                <li>wet hydrogen sulfide stress cracking and hydrogen blistering in systems containing sour water;</li>
                <li>hydrogen blistering and hydrogen-induced cracking damage.</li>
            </ul>
            <p>NOTE This has not been as serious of a problem for piping as it has been for pressure vessels. It is listed here because it is considered to be environmental cracking and can occur in piping although it has not been extensive.</p>
            <p>See API 571 for additional details on environmental cracking mechanisms.</p>
            <p>One exception where this type of damage has been a problem is longitudinally welded pipe fabricated from plate materials.</p>
            <p>When the inspector suspects or is advised that specific circuits may be susceptible to environmental cracking, he or she should schedule supplemental inspections. Such inspections can take the form of surface NDE (PT or wet fluorescent magnetic particle examination technique), UT, or eddy current technique (ET). Where available, suspect spools may be removed from the piping system and split open for internal surface examination.</p>
            <p>If environmental cracking is detected during the internal inspection of a pressure vessel and the piping is considered equally susceptible, the inspector should designate the appropriate piping spools upstream and downstream of the pressure vessel for an environmental cracking inspection.</p>
            <p>When the potential for environmental cracking is suspected in piping circuits, an inspection of selected spools should be scheduled before an upcoming turnaround. Such inspection should provide information useful in forecasting turnaround maintenance.</p>
        </div>
        <div class="subsection">
            <h4>7.5.4 Corrosion beneath Linings and Deposits</h4>
            <p>If external or internal coatings, refractory linings, and corrosion-resistant linings are in good condition and there is no reason to suspect a deteriorated condition behind them, it is usually not necessary to remove them for inspection of the piping system.</p>
            <p>The effectiveness of corrosion-resistant linings is greatly reduced due to breaks or holes in the lining. The linings should be visually inspected for separation, breaks, holes, and blisters. If any of these conditions are noted, it may be necessary to remove portions of the internal lining to investigate the effectiveness of the lining and the condition of the metal piping beneath the lining. Alternatively, UT from the external surface can be used to measure the base metal thickness. When the lining is metallic and is designed to be fully bonded, external UT can also be used to detect separation, holes, and blisters. When damage to the lining has been found or caused through the removal for inspection access, the inspector should note the type and extent of damage and provide a recommendation for repair/replacement if required.</p>
            <p>Refractory linings used to insulate the pipe wall can spall or crack in service, causing hot spots that expose the metal to oxidation and creep cracking. Periodic temperature monitoring via visual, infrared, and temperature-indicating paints should be undertaken on these types of lines to confirm the integrity of the lining. Corrosion beneath refractory linings can result in separation and bulging of the refractory. Microwave examination technique (MW) can examine the refractory for volumetric flaws and separation from the shell surface. If bulging or separation of the refractory lining is detected, portions of the refractory may be removed to permit inspection of the piping beneath the refractory. Otherwise, thickness measurements utilizing UT or profile RT may be obtained from the external metal surface. In addition, if external mechanical damage is identified on the pipe, such as a dent, this could be a location where the internal refractory lining may have been damaged too. When damage to the refractory has been found or caused through the removal for inspection access, the inspector should note the type and extent of damage and provide a recommendation for repair/replacement if required.</p>
            <p>Where operating deposits, such as coke are present on the internal pipe surface, NDE techniques employed from the outside of the pipe, such as profile RT, UT, and/or ET, should be used to determine whether such deposits have active corrosion beneath them.</p>
        </div>
        <div class="subsection">
            <h4>7.5.5 Fatigue Cracking</h4>
            <p>Fatigue cracking of piping systems can result from excessive cyclic stresses that are often well below the static yield strength of the material. The cyclic stresses can be imposed by pressure, mechanical, or thermal means and can result in low-cycle or high-cycle fatigue. The onset of low-cycle fatigue cracking is often directly related to the number of heat-up/cooldown cycles experienced. For example:</p>
            <ul>
                <li>trunnions or other attachments that extend beyond the pipe insulation can act as a cooling fin that sets up a situation favorable to thermal fatigue cracking on the hot pipe;</li>
                <li>thermal fatigue can also occur at mixing points when process streams at different operating temperatures combine;</li>
                <li>excessive piping system vibration (e.g. machine or flow induced) can also cause high-cycle fatigue damage.</li>
            </ul>
            <p>See API 570—Section 5.5.6, for vibrating piping surveillance requirements, and API 570—Section 7.8, for design requirements associated with vibrating piping.</p>
            <p>Fatigue cracking can typically be first detected at points of high-stress intensification, such as branch connections. Locations where metals having different coefficients of thermal expansion are joined by welding can be susceptible to thermal fatigue. Preferred NDE methods of detecting fatigue cracking include PT, MT, and angle beam UT when inspecting from the OD for ID cracking. Suggested locations for UT on elbows would include the 3 o'clock and 9 o'clock positions. Acoustic emission examination technique (AE) also may be used to detect the presence of cracks that are activated by test pressures or stresses generated during the test. See API 570—Section 6.6.4 for fatigue considerations relative to threaded connections.</p>
            <p>It is important for the owner-operator and the inspector to understand that fatigue cracking is likely to cause piping failure before detection with any NDE methods. Of the fatigue cycles required to produce failure, the vast majority are required to initiate cracking and relatively few cycles are required to propagate the crack to failure. As such, proper design and installation to prevent fatigue cracking are important.</p>
            <p>See API 571 for additional information on thermal fatigue, mechanical fatigue, and vibration-induced fatigue.</p>
        </div>
        <div class="subsection">
            <h4>7.5.6 Creep Cracking</h4>
            <p>Creep damage is dependent on the material of construction, time, temperature, and stress. Creep cracking can eventually occur at design conditions since some piping code allowable stresses are in the creep range. Cracking is accelerated by creep/fatigue interaction when operating conditions in the creep range are cyclic. Particular attention should be given to areas of high-stress concentration. If excessive temperatures are encountered, mechanical property and microstructural changes in metals can also take place, which can permanently weaken equipment. An example of where creep cracking has been experienced in the industry is in 1-1/4 Cr -1/2 Mo steels above 900 °F (482 °C).</p>
            <p>NDE methods of detecting creep cracking include PT, MT, UT, RT, and ET. Alternating current field measurement (ACFM), in situ metallography, and dimensional verification (i.e. strapping pipe diameter) are other common practices that may be used for detection. NDE volumetric examination methods, including profile RT and UT, can be used for the detection of creep cracking.</p>
            <p>AE can be utilized to identify active creep cracking. The examination can be conducted while piping is in or out of operation. When the examination is conducted, the probability of detecting creep cracks can be a function of crack orientation. Any piping examined out of operation requires a pressure stimulus to activate any damage present.</p>
            <p>See API 571 for additional information on creep and stress rupture.</p>
        </div>
        <div class="subsection">
            <h4>7.5.7 Brittle Fracture</h4>
            <p>Carbon, low-alloy, and other ferritic steels can be susceptible to brittle failure at or below ambient temperatures. In some cases, the refrigerating effect of vaporizing liquids such as ammonia or C<sub>2</sub> or C<sub>3</sub> hydrocarbons can chill the piping and promote brittle fracture in a material that may not otherwise fail. Brittle fracture usually is not a concern with relatively thin-wall piping. Most brittle fractures have occurred on the first application of a particular stress level (i.e. the first hydrotest or overload) unless critical defects are introduced in service. The potential for a brittle failure should be considered when pressure testing or more carefully evaluated when pressure testing equipment pneumatically or when adding any other additional loads. Special attention should be given to low-alloy steels (especially 2<sub>1/4</sub>Cr-1Mo material) because they can be prone to temper embrittlement and to ferritic stainless steels.</p>
            <p>A through-wall crack resulting from brittle fracture and causing a leak can be detected with helium leak procedures for the assessment of equipment for resistance to brittle fracture. Alternatively, active cracking in embrittled material can be detected and possibly located with AE. See API 571 for additional information on brittle fracture. API 579-1/ASME FFS-1—Section 3 provides guidance for the assessment of equipment for resistance to brittle fracture.</p>
        </div>
        <div class="subsection">
            <h4>7.5.8 Freeze Damage</h4>
            <p>At subfreezing temperatures, water and aqueous solutions handled in piping systems can freeze and expand. This can cause failure of the pipe because the metal contracts against the expanding aqueous solution causing a burst scenario. After unexpectedly severe freezing weather, it is important to visually check for freeze damage to exposed piping components before the system thaws. If rupture has occurred, leakage can be temporarily prevented by the frozen fluid. Low points, drip legs, and deadlegs of piping systems containing water should be carefully examined for damage.</p>
            <p>To prevent freeze damage, precautions need to be taken to drain, purge, or heat trace systems where moisture could collect and unexpectedly freeze during severe or sudden subfreezing temperature excursions. One of the most critical locations for these precautions is the top of the seat of relief valves and pilot-operated relief valves when moisture could be present. Tailpipes on relief valves that discharge to the atmosphere should always have adequate drainage or heat tracing.</p>
        </div>
        <div class="subsection">
            <h4>7.5.9 Nonmetallic Damage Mechanisms</h4>
            <p>In many circumstances, the choice of FRP is based on its inherent resistance to damage mechanisms, such as corrosion. However, no material is totally resistant and so there is a potential for in-service damage. OLF 055 has compiled an extensive review of the topic and produced a framework that may be used in risk assessments and in evaluating damage mechanisms.</p>
            <p>Typical in-service damage mechanisms found in FRP nonmetallic piping systems are shown in Table 3.</p>
            <div class="table-container">
            <table class="api-table">
                    <caption>Table 3—Damage Mechanisms Associated with Nonmetallic Piping</caption>
                    <thead>
                    <tr>
                        <th>Damage</th>
                        <th>Cause</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Flaws originating from poor construction/design</td>
                        <td>Inadequate thickness in design when piping is buried too deep. Poor joint assembly.</td>
                    </tr>
                    <tr>
                        <td>Erosion</td>
                        <td>High-flow velocities and particle impact can cause erosion at changes in flow direction and restrictions.</td>
                    </tr>
                    <tr>
                        <td>Flange cracks</td>
                        <td>Overstressed bolted joints. High imposed loadings from corrosion deposits buildup.</td>
                    </tr>
                    <tr>
                        <td>Chalking</td>
                        <td>UV damage when FRP material is exposed to solar radiation without the use of an outer UV light barrier.</td>
                    </tr>
                    <tr>
                        <td>Material aging</td>
                        <td>Breakdown of resin or fiber strength over extended periods of time. The breakdown can be accelerated by exposure to some chemicals, especially strong alkalines.</td>
                    </tr>
                    <tr>
                        <td>Deformation</td>
                        <td>Change in dimensions due to long-term exposure to stress—often described as creep.</td>
                    </tr>
                    <tr>
                        <td>Pit/pinhole</td>
                        <td>Small craters in the surface of the laminate from incomplete resin fill.</td>
                    </tr>
                    <tr>
                        <td>Softening</td>
                        <td>Reduction in hardness associated with moisture ingress when the resin has excessive voids.</td>
                    </tr>
                    <tr>
                        <td>Creep</td>
                        <td>Permanent deflection of the material under long-term stress and temperature. Creep properties are dependent on the resin properties.</td>
                    </tr>
                    <tr>
                        <td>Star craze</td>
                        <td>Sharp impact to the external surface.</td>
                    </tr>
                    <tr>
                        <td>Blisters</td>
                        <td>Permeation of the service fluid into the laminate (common in hydrochloric acid service).</td>
                    </tr>
                    <tr>
                        <td>Liner cracking/mud cracking</td>
                        <td>Chemical degradation, thermal shock, or temperature excursions.</td>
                    </tr>
                </tbody>
            </table>
    </div>
            
            <p>MTI Project 129-99 is a good guide for identifying some of these failure mechanisms.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>7.6 Reviewing and Updating Inspection Plans (Future Content)</h4>
        <p>This section is reserved for future content.</p>
    </div>
    <div class="subsection">
        <h4>7.7 IOWs</h4>
        <p>The use of well-defined, communicated, and properly controlled IOWs for key process parameters (both physical and chemical) that could impact piping integrity if not properly controlled reinforces inspection plans. Examples of the process parameters include temperatures, pressures, fluid velocities, pH, flow rates, chemical or water injection rates, levels of corrosive constituents, chemical composition, etc. Key process parameters for IOWs containing upper and lower limits can be established, as needed, and deviations outside these limits brought to the attention of inspection/engineering personnel. After review of these deviations, a new or adjusted inspection or monitoring plan can be implemented, if required. The review may also require a recommendation for repair/replacement due to life cycle constraints or expected cumulative damage. Particular attention to monitoring IOWs should also be provided during start-ups, shutdowns, and significant process upsets.</p>
        <p>Refer to API 584 for more information on IOWs.</p>
    </div>
    <div class="subsection">
        <h4>7.8 Inspection of New Fabrication</h4>
        <div class="subsection">
            <h4>7.8.1 New Fabrication</h4>
            <p>New piping fabrication should meet the principles of ASME B31.3, ASME B31.1, or equivalent pipe fabrication standard published by standards development organizations.</p>
            <p>New fabrication inspection can include the following activities: obtaining initial pipe wall thicknesses at designated CMLs; inspection for cracks; inspection of flange gasket seating faces, valves, and joints; inspection for the misalignment of piping; inspection of welds; and pressure testing.</p>
            <p>Existing connecting systems may require checks to determine whether rerating is necessary to meet the specified conditions.</p>
            <p>The extent of inspection during fabrication and installation depends largely on the severity of the service and the quality of the workmanship, and it should be part of the inspection test plan.</p>
            <p>Examination of welds by RT or other special techniques is typically governed by the fabrication code of construction. A representative number of welds is checked for quality and may also involve hardness testing of the weld and heat-affected zone. PT or MT can reveal cracks and surface defects. Similar techniques can be used to check for defects in castings and in machined surfaces, such as gasket facings.</p>
        </div>
        <div class="subsection">
            <h4>7.8.2 Material Verification</h4>
            <p>Both materials and fabrication should be checked for conformance with the codes and specifications that are appropriate for the plant. Some piping items, such as those used in steam generation, can be subject to additional regulatory requirements. Although the piping, valves, and fittings should be specified in detail when orders are placed for new construction, there should be a positive means of identifying the materials installed in the intended piping systems, including weld filler metals. Checks should be made using material test kits or other positive identification means, such as portable X-ray fluorescence or portable optical emission spectrometry analyzers. In addition, manufacturers' material and test data can be obtained for review, particularly when special quality requirements are specified.</p>
            <p>Piping material selection should be based on service conditions and experience with piping in the same or similar service. The risk associated with the substitution of wrong materials should determine the extent of PMI of new fabrication, repairs, or alterations.</p>
            <p>See API 578 for additional guidance on material verification.</p>
        </div>
        <div class="subsection">
            <h4>7.8.3 Deviations</h4>
            <p>Exceptions to specifications or standards for materials, tolerances, or workmanship are usually evaluated based on their effects on factors such as safety, strength, corrosion resistance, and serviceability. Special reviews may be required to determine whether piping items deviate to an extent that necessitates rejection and/or repairs. Risk analysis may be useful in these reviews. Any exceptions that have been accepted should be properly recorded and identified for future reference.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>7.9 Newly Commissioned Piping Inspection (Future Content)</h4>
        <p>This section is reserved for future content.</p>
    </div>
    `,
    contentEs: `<h3>7 Planificación de Inspección y Monitoreo</h3>
    <div class="subsection">
        <h4>7.1 Antecedentes</h4>
        <p>Se desarrolla e implementa un plan de inspección para aquellos sistemas de tuberías dentro del alcance de API 570. Sin embargo, otros sistemas de tuberías también pueden incluirse en el programa de inspección y, en consecuencia, tener un plan de inspección.</p>
        <p>Un plan de inspección debe contener las tareas de inspección, el alcance de la inspección y el cronograma requerido para monitorear los mecanismos de daño identificados y garantizar la integridad mecánica de los componentes de tubería en el sistema. API 570 define el contenido mínimo de un plan de inspección.</p>
        <p>Los planes de inspección para sistemas de tuberías pueden mantenerse en hojas de cálculo, archivos en papel y bases de datos de software de inspección propietario.</p>
    </div>
    <div class="subsection">
        <h4>7.2 Desarrollo de un Plan de Inspección</h4>
        <div class="subsection">
            <h4>7.2.1 General</h4>
            <p>Un plan de inspección a menudo se desarrolla a través del trabajo colaborativo del inspector, el ingeniero de tuberías, el especialista en corrosión y el personal de operación. El equipo debe considerar varias piezas de información, como los rangos de temperatura de operación, los rangos de presión de operación, los niveles de contaminantes corrosivos del fluido de proceso, el material de construcción de la tubería, la configuración del sistema de tuberías, la mezcla de corrientes de proceso y el historial de inspección/mantenimiento.</p>
            <p>Además, se pueden consultar otras fuentes de información, por ejemplo publicaciones de API y NACE (AMPP), para obtener experiencia de la industria con sistemas similares. Esta información proporciona una base para definir los tipos de daño y las ubicaciones donde ocurre.</p>
            <p>El conocimiento de las capacidades y limitaciones de las técnicas NDE permite la elección adecuada de la(s) técnica(s) de examen para identificar mecanismos de daño específicos en ubicaciones específicas. Consulte API 571 y ASME PCC-3 para obtener más información regarding técnicas de inspección y sus limitaciones/usos según mecanismos de daño específicos.</p>
            <p>La comunicación continua con el personal de operación cuando ocurren cambios y/o alteraciones del proceso que podrían afectar los mecanismos de daño y las tasas es crítica para mantener actualizado un plan de inspección. Los IOWs ayudan a establecer umbrales clave para los cambios de proceso que afectan la integridad mecánica. Consulte API 584 para obtener más información.</p>
            <p>Para los sistemas de tuberías, los planes de inspección deben abordar lo siguiente:</p>
            <ul>
                <li>ubicaciones de monitoreo de condiciones (CMLs) para mecanismos de daño específicos;</li>
                <li>puntos de contacto de tuberías en soportes de tubería;</li>
                <li>soportes de tubería y accesorios de soporte;</li>
                <li>CUI (Corrosión Bajo Aislamiento);</li>
                <li>puntos de inyección;</li>
                <li>puntos de mezcla de proceso;</li>
                <li>secciones de tubería de ramas muertas (deadlegs);</li>
                <li>interfaces suelo-aire (hormigón-aire) (SAIs);</li>
                <li>PMI (Identificación de Materiales Positiva);</li>
                <li>tuberías auxiliares;</li>
                <li>tuberías de servicios públicos críticas según lo definido por el propietario-operador;</li>
                <li>ventilaciones/drenajes;</li>
                <li>juntas de tubería roscadas;</li>
                <li>revestimientos internos;</li>
                <li>válvulas críticas;</li>
                <li>juntas de expansión.</li>
            </ul>
            <p>Además, se debe considerar la incorporación de tuberías y tubos diversos que puedan pasarse por alto en los programas de inspección de circuitos de rutina en el plan de inspección. Estos circuitos aún pueden representar una preocupación de confiabilidad y deben considerarse en el plan de inspección. Los ejemplos incluyen puentes de instrumentos para equipos que se conectan a circuitos de tuberías, tuberías temporales utilizadas durante paradas de mantenimiento y tramos desmontables (swing-out spools).</p>
            <p>Los planes de inspección pueden basarse en varios criterios pero deben incluir una evaluación de riesgos o intervalos fijos según lo definido en API 570. Para obtener más información sobre la inspección basada en riesgos (RBI), consulte 8.2.</p>
        </div>
        <div class="subsection">
            <h4>7.2.2 Identificación de Mecanismos de Daño</h4>
            <p>Las tuberías de refinerías de petróleo y plantas químicas pueden estar sujetas a mecanismos de daño internos y externos. Estas tuberías transportan una variedad de fluidos que pueden ser altamente corrosivos, erosivos y propensos a la corrosión bajo tensión (SCC) o sujetos a daño del material en servicio. Además, tanto las tuberías aéreas como las enterradas están sujetas a corrosión externa. El inspector debe estar familiarizado con los mecanismos de daño creíbles para cada sistema de tuberías. API 571 ha sido desarrollado para proporcionar al inspector información adicional sobre varias causas de daño.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_17.png" class="figure-image">
                <p class="figure-caption">Figura 17—Erosión de Tubería</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api574_figure_18.png" class="figure-image">
                <p class="figure-caption">Figura 18—Corrosión de Tubería</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api574_figure_19.png" class="figure-image">
                <p class="figure-caption">Figura 19—Corrosión Interna de Tubería</p>
            </div>
            
            <div class="figure-container">
                <img src="images/api574_figure_20.png" class="figure-image">
                <p class="figure-caption">Figura 20—Corrosión Atmosférica Severa de Tubería</p>
            </div>
            
            <p>Si una inspección de un área de tubería indica que está ocurriendo daño, también deben inspeccionarse las tuberías aguas arriba y aguas abajo de esta área, junto con los equipos asociados. Además, si se detecta deterioro en equipos a presión, también deben inspeccionarse las tuberías asociadas.</p>
            <p>Cada propietario-operador debe prestar atención específica a la necesidad de inspección de sistemas de tuberías que sean susceptibles a los siguientes tipos y áreas específicos de deterioro:</p>
            <ul>
                <li>puntos de inyección;</li>
                <li>puntos de mezcla de proceso;</li>
                <li>ramas muertas (deadlegs);</li>
                <li>CUI;</li>
                <li>SAIs;</li>
                <li>erosión y corrosión-erosión;</li>
                <li>corrosión específica del servicio y localizada;</li>
                <li>agrietamiento ambiental;</li>
                <li>corrosión debajo de revestimientos y depósitos;</li>
                <li>agrietamiento por fatiga;</li>
                <li>agrietamiento por creep (fluencia);</li>
                <li>fractura frágil;</li>
                <li>daño por congelación;</li>
                <li>corrosión en puntos de contacto;</li>
                <li>corrosión por punto de rocío.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.2.3 Selección de Actividades de Inspección</h4>
            <p>Los planes de inspección deben abordar los mecanismos de daño creíbles según lo identificado por un especialista en corrosión y/o el Documento de Control de Corrosión de la unidad, como se detalla en API 970. Identificar y comprender los mecanismos de daño creíbles que pueden causar el deterioro de las tuberías y sus componentes es clave para desarrollar un plan de inspección efectivo. Sin identificar adecuadamente qué mecanismos de daño creíbles son aplicables, no puede realizarse un plan de inspección adecuado.</p>
            <p>API 571, junto con información de proceso y equipo, puede utilizarse para asignar el mecanismo de daño creíble y los métodos/técnicas de inspección asociados. Una vez que se han establecido todos los mecanismos creíbles, la(s) técnica(s) de inspección adecuada(s) debe(n) alinearse con los modos de daño correspondientes.</p>
            <p>Para determinar si las tuberías están sujetas a daño y requerirán inspección interna, inspección en operación y/o monitoreo de espesor, se deben considerar los siguientes factores:</p>
            <ol>
                <li>mecanismos de daño creíbles: la disponibilidad de corrosivos del proceso, como agua, oxígeno, H<sub>2</sub>S, etc., que puedan actuar sobre los materiales de construcción, según lo determinado por un especialista en corrosión.</li>
                <li>controles de proceso (ej. IOWs) en vigor para identificar cuándo el proceso ha cambiado de tal manera que se vuelve dañino para el material.</li>
                <li>diseño de proceso nuevo; si la tubería está en un proceso nuevo donde hay cierta incertidumbre sobre si el proceso funcionará según lo diseñado, no debe designarse como en servicio no corrosivo hasta que se demuestre mediante operación e inspección.</li>
                <li>estabilidad del proceso; si el proceso es tal que un pequeño cambio en la operación puede introducir condiciones donde el mecanismo de daño podría activarse, en comparación con el caso donde la introducción de un corrosivo (ej. agua) no sería compatible con la operación (ej. la parte criogénica de una planta de etileno).</li>
                <li>presencia de protección contra mecanismos de daño conocidos, como revestimiento de soldadura resistente a la corrosión, revestimiento, recubrimiento, forro o refractario; algunas tuberías pueden no requerir mucha, si alguna, inspección debido a la falta de mecanismos de daño creíbles; sin embargo, debe establecerse una consideración para las medidas de protección fallidas.</li>
            </ol>
            <p>Los ejemplos típicos de sistemas sin mecanismo de daño interno creíble son los siguientes:</p>
            <ol>
                <li>tuberías de planta de etileno que operan bajo condiciones criogénicas;</li>
                <li>plantas de gas natural licuado aguas abajo de las camas de eliminación de mercurio y eliminación de agua;</li>
                <li>unidades de proceso aleadas para pureza del producto donde cualquier corrosión haría que el producto no cumpliera con las especificaciones;</li>
                <li>tuberías nuevas reemplazadas por igual con un historial comprobado de ningún mecanismo de daño interno creíble pero que fueron reemplazadas debido a un mecanismo de daño externo, como CUI;</li>
                <li>tuberías de fluido refrigerante que están sin ninguna contaminación.</li>
            </ol>
        </div>
        <div class="subsection">
            <h4>7.2.4 Ubicaciones para Inspección</h4>
            <p>Los CMLs deben seleccionarse una vez que se hayan identificado los mecanismos de daño creíbles. El número de CMLs seleccionados dependerá de la probabilidad de detección de la técnica, el grado de localización del daño y qué tan predecible es el mecanismo de daño. También pueden agregarse CMLs adicionales para tuberías con alta probabilidad o alto riesgo de falla.</p>
            <p>Comprender los factores y condiciones que afectan la probabilidad de que un mecanismo de daño esté activo es importante para desarrollar un plan de inspección enfocado y seleccionar la ubicación adecuada para la inspección. Los resultados de inspecciones anteriores pueden usarse para identificar mecanismos activos y predecir mejor las áreas que se inspeccionarán. Las tuberías susceptibles a daño uniforme pueden inspeccionarse en cualquier ubicación conveniente; sin embargo, puede ser necesario inspeccionar áreas más grandes o emplear múltiples técnicas para garantizar que se detecte el daño localizado.</p>
            <p>La correspondencia de las diversas técnicas NDE superficiales y volumétricas con los mecanismos de daño por corrosión localizada es clave para capturar los datos de corrosión correctos. Predecir dónde ocurrirá el daño, específicamente el daño localizado, es difícil incluso cuando los mecanismos de daño creíbles se comprenden bien. La consulta con un especialista en corrosión y/o la revisión del Documento de Control de Corrosión de la unidad de proceso puede ayudar a comprender la selección y colocación de CMLs para mecanismos de daño localizados. La selección de ubicaciones de inspección adecuadas para equipos sujetos a daño localizado es tan crítica como aplicar la técnica adecuada. Si se han realizado niveles suficientes de inspección con el tiempo, los resultados de esas inspecciones podrían usarse para identificar ubicaciones de daño. Una vez establecidos, estos mecanismos y sus modos asociados pueden usarse junto con la disponibilidad del equipo (el equipo estará fuera de servicio o en operación) para planificar técnicas de inspección.</p>
            <p>Las verificaciones visuales de las partes externas de las tuberías deben realizarse periódicamente. Estas inspecciones pueden realizarse a intervalos comparativamente cortos (ej. en comparación con un intervalo de inspección interna de 10 años), el intervalo depende del servicio y/o la condición previa de las tuberías involucradas. La inspección externa de las tuberías debe realizarse de acuerdo con API 570—Sección 6.4. Es importante comprender las condiciones del proceso antes de la inspección visual externa para determinar si deben planificarse inspecciones de CUI. Consulte API 583 para obtener más información sobre cuestiones que pueden ayudar en el desarrollo de planes de inspección de CUI.</p>
            <p>La lista de técnicas identificadas para la inspección de tuberías debe compararse con los requisitos de inspección y mantenimiento internos o basados en el proceso (ej. posible incrustación o problemas mecánicos) para garantizar que todas las áreas se evalúen según sea necesario. Esta información se combina en un conjunto de actividades de inspección. Luego, basándose en las tasas de daño y la vida útil restante, debe identificarse la frecuencia adecuada (consulte la Sección 8).</p>
        </div>
        <div class="subsection">
            <h4>7.2.5 Planes de Inspección Basados en Intervalos</h4>
            <p>Los planes de inspección basados en intervalos basan intervalos de inspección específicos en los tipos de inspección de tubería requeridos, así como en los tipos de mecanismos de daño y tasas de daño que se han asignado. Los tipos de inspección para los cuales se sugieren intervalos máximos en API 570 incluyen inspección visual externa, CUI, medición de espesor, punto de inyección, SAI, SBP, tuberías auxiliares y conexiones roscadas.</p>
            <p>El intervalo para las inspecciones se basa en varios factores, incluyendo los cálculos de tasa de corrosión y vida útil restante, clasificación del servicio de tubería, requisitos jurisdiccionales aplicables y el juicio del inspector, el ingeniero de tuberías o un especialista en corrosión. El factor determinante en el plan de inspección para muchos circuitos de tubería es la clasificación del servicio de tubería.</p>
        </div>
        <div class="subsection">
            <h4>7.2.6 Clasificación del Servicio de Tubería</h4>
            <p>Según API 570—Sección 6.3.4, todas las tuberías de proceso deben clasificarse según la consecuencia de falla, excepto las tuberías que han sido planificadas basándose en resultados de RBI. Las clases de tubería varían desde Clase 1 (alta consecuencia) hasta Clase 3 (baja consecuencia). Además, hay una Clase 4 para servicios que son esencialmente no inflamables y no tóxicos. Agregar más CMLs en ubicaciones apropiadas a tuberías de mayor consecuencia sujetas a tasas de corrosión más altas o corrosión localizada y monitorear esos CMLs con más frecuencia puede reducir la probabilidad de eventos de alta consecuencia. Esta estrategia proporciona una predicción más precisa de las fechas de retiro y reduce la incertidumbre de inspección en las tuberías donde la confiabilidad es más importante.</p>
            <p>Los factores a considerar al clasificar las tuberías son los siguientes:</p>
            <ul>
                <li>toxicidad;</li>
                <li>volatilidad;</li>
                <li>inflamabilidad;</li>
                <li>ubicación de las tuberías con respecto al personal y otros equipos;</li>
                <li>experiencia e historial.</li>
            </ul>
        </div>
    </div>
    <div class="subsection">
        <h4>7.3 Monitoreo de Tuberías de Proceso</h4>
        <div class="subsection">
            <h4>7.3.1 General</h4>
            <p>El mecanismo de daño más frecuente que conduce al reemplazo de tuberías es la corrosión. Por esta razón, un programa efectivo de inspección de tuberías de proceso debe incluir el monitoreo del espesor de las tuberías a partir del cual pueden determinarse las tasas de corrosión, la vida útil restante, las próximas fechas de inspección y las fechas proyectadas de retiro de las tuberías.</p>
            <p>Una clave para el monitoreo efectivo de la corrosión de las tuberías es identificar y establecer CMLs. Los CMLs son áreas designadas en el sistema de tuberías donde se toman mediciones periódicamente. Las mediciones de espesor ultrasónico se obtienen dentro de puntos de examen en la tubería. Las mediciones de espesor pueden promediarse dentro del punto de examen. Al tomar mediciones repetidas y registrar datos de los mismos puntos durante períodos extendidos, las tasas de daño pueden calcularse o evaluarse con mayor precisión. Algunos de los factores a considerar al establecer el plan de monitoreo de corrosión para las tuberías de proceso son los siguientes:</p>
            <ul>
                <li>clasificar el servicio de tubería de acuerdo con API 570 o clasificación de riesgo basada en el análisis de RBI;</li>
                <li>categorizar los sistemas de tubería en circuitos de tubería de comportamiento de corrosión similar (ej. localizado, general y agrietamiento ambiental);</li>
                <li>identificar ubicaciones susceptibles donde ha ocurrido o se espera daño acelerado;</li>
                <li>accesibilidad de los CMLs para monitoreo cuando no se predice corrosión localizada;</li>
                <li>los resultados de RBI identifican circuitos de tubería de alto riesgo y/o ubicaciones específicas de tuberías.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.3.2 Sistemas de Tubería</h4>
            <p>El desarrollo de sistemas y circuitos de tubería basados en mecanismos de daño creíbles/identificados permite el desarrollo de planes de inspección concisos y forma la base para un análisis de datos mejorado. Consulte API 570 para las características de definición de sistemas de tubería.</p>
            <p>A continuación se muestran algunos ejemplos de documentación de sistemas de tubería. Los sistemas de tubería pueden documentarse en los diagramas de flujo de proceso (PFDs) como se describe a continuación y contener la siguiente información para cada uno:</p>
            <ul>
                <li>Los sistemas pueden resaltarse con codificación de color única y nombre.</li>
                <li>La nomenclatura del sistema de tubería puede utilizar convenciones que sean fácilmente entendidas dentro de la instalación, idealmente proporcionando un lenguaje común entre el personal de operación e inspección. Típicamente, el identificador del sistema de tubería se agrega a un prefijo de unidad, con el sistema de tubería y los circuitos de tubería individuales incrementándose desde la alimentación de la unidad hasta las corrientes de producto.</li>
                <li>Cada sistema de tubería puede tener otras características asociadas documentadas, incluyendo los límites, preocupaciones generales del proceso, parámetros de IOW, mecanismos de daño generales y medidas de control de corrosión del proceso.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.3.3 Circuitos de Tubería</h4>
            <p>Las unidades de proceso complejas o sistemas de tubería se dividen en circuitos de tubería para gestionar las inspecciones, cálculos y mantenimiento de registros necesarios. Al establecer el límite de un circuito de tubería particular, el inspector también puede dimensionarlo para proporcionar un paquete práctico para el mantenimiento de registros y la realización de inspecciones de campo. Al identificar entornos similares y mecanismos de daño como circuitos, se reduce la dispersión de las tasas de corrosión calculadas de los CMLs en cada circuito. La selección adecuada de componentes en el circuito de tubería y el número de CMLs son particularmente importantes cuando se utilizan métodos estadísticos para evaluar las tasas de corrosión y la vida útil restante.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_21.png" class="figure-image">
                <p class="figure-caption">Figura 21—Ejemplo de Circuito de Tubería</p>
            </div>
            
            <p>La disposición del circuito de tubería y los CMLs asociados a menudo se identifican en bosquejos de inspección de tubería para ayudar al inspector a realizar tareas de inspección. Consulte 14.2.1 para obtener información sobre bosquejos de tubería.</p>
            <p>Cada material de construcción tiene características específicas de corrosión/erosión y puede responder de manera única cuando se coloca en diferentes entornos operativos. Los diferentes materiales de construcción pueden no tener la misma resistencia al daño dentro del mismo entorno operativo. Por lo tanto, el material de construcción es un elemento clave para determinar mecanismos de daño creíbles y/o tasa de daño basados en el entorno operativo. Las interrupciones del circuito deben colocarse cuando hay un cambio en los materiales de construcción de la tubería, lo que puede causar un cambio en el comportamiento corrosivo/erosivo. Se debe consultar a un metalúrgico/ingeniero de corrosión con experiencia en la unidad de proceso bajo revisión para la asignación de mecanismos de daño y/o tasa de daño para diferentes materiales de construcción.</p>
            <p>Varios factores pueden afectar la tasa y la naturaleza de la corrosión de la pared de la tubería. Los circuitos individuales deben limitarse a componentes de tubería dentro del sistema donde la tasa de daño y el tipo de daño (mecanismos de daño comunes) son consistentes. Las consideraciones para los límites del circuito de tubería pueden incluir, pero no limitarse a, los siguientes elementos:</p>
            <ul>
                <li>metalurgia de la tubería;</li>
                <li>fluido de proceso y su fase (ej. gas, líquido, bifásico, sólido);</li>
                <li>velocidad de flujo;</li>
                <li>temperatura;</li>
                <li>presión;</li>
                <li>cambios en temperatura, velocidad, presión, dirección, fase, metalurgia o sección transversal de la tubería;</li>
                <li>inyección de agua o químicos;</li>
                <li>contaminantes del fluido de proceso;</li>
                <li>mezcla de dos o más corrientes;</li>
                <li>condiciones externas de la tubería, incluyendo recubrimiento/pintura, aislamiento y condiciones del suelo, según corresponda;</li>
                <li>áreas de flujo estancado (ej. ramas muertas).</li>
            </ul>
            <p>Cuando las tasas de corrosión reales de un circuito difieren de lo esperado, debe realizarse una revisión para identificar la posible razón. Sin embargo, como primer paso, la lectura debe validarse. Si la lectura resulta ser válida, se debe consultar al especialista en corrosión para ayudar a revisar los parámetros del proceso que pueden haber cambiado y causado un cambio en la tasa de corrosión. Los IOWs pueden usarse para monitorear y ajustarse a las condiciones cambiantes, y los datos de IOW asociados pueden ser parte de esta revisión. Es importante tener en cuenta que si no se encuentra ninguna razón para el cambio en la tasa de corrosión, podría atribuirse a la incertidumbre asociada con la medición de las últimas dos lecturas. Los resultados de la revisión deben reflejarse en los cambios del plan de inspección, si es necesario.</p>
            <p>Los circuitos de tubería deben identificarse con mecanismos de daño comunes para facilitar la planificación de la inspección y el análisis de datos y generalmente tendrán las siguientes características:</p>
            <ul>
                <li>materiales de construcción comunes;</li>
                <li>condiciones de diseño comunes;</li>
                <li>condiciones de operación comunes;</li>
                <li>conjunto común (uno o más) de mecanismos de daño;</li>
                <li>tasa de corrosión esperada común;</li>
                <li>ubicaciones/morfología de daño esperadas comunes.</li>
            </ul>
            <p>Para programas basados en riesgos, los circuitos de tubería pueden subdividirse aún más según el nivel de riesgo. Por ejemplo, una descarga de bomba o aguas arriba de una válvula de control puede tener las mismas características de corrosión que la succión de la bomba o aguas abajo de la válvula de control, pero el riesgo puede ser mayor en los segmentos de alta presión debido al mayor potencial de fuga. En tales casos, los componentes de mayor presión pueden asignarse a un circuito separado.</p>
            <p>Además, según la naturaleza de la corrosión, el tipo/morfología del daño y la metalurgia de la tubería, los circuitos pueden contener lo siguiente:</p>
            <ul>
                <li>múltiples números de línea;</li>
                <li>múltiples tamaños de línea;</li>
                <li>componentes de tubería tanto primarios como secundarios;</li>
                <li>ramas muertas cortas (ej. el mayor de < 2D o 8 pulg. de longitud, drenajes/ventilaciones y derivaciones de tee ciegas/cubiertas), dependiendo del potencial de corrosión de rama muerta/debajo de depósitos.</li>
            </ul>
            <p>Los circuitos de tubería se muestran típicamente en dibujos isométricos de inspección y/o el diagrama de tuberías e instrumentación (P&ID). Pueden resaltarse con una codificación de color única (o símbolo), nombre y/o número. Los atributos adicionales del circuito de tubería que pueden identificarse en los dibujos isométricos incluyen los siguientes:</p>
            <ul>
                <li>los límites del circuito;</li>
                <li>ubicaciones de inyección o punto de mezcla numeradas;</li>
                <li>ubicaciones de soporte de contacto para inspección;</li>
                <li>ubicaciones de SAI;</li>
                <li>la extensión del aislamiento;</li>
                <li>ubicaciones de CUI/CUF para inspección.</li>
            </ul>
            <p>Cada circuito de tubería típicamente se documenta con información adicional, como la siguiente:</p>
            <ul>
                <li>mecanismos de daño creíbles;</li>
                <li>materiales de construcción;</li>
                <li>tipo de daño—grado de corrosión generalizada o localizada esperada;</li>
                <li>ubicaciones generalizadas donde deben especificarse puntos de inspección basados en condiciones de operación y metalurgia;</li>
                <li>ubicaciones o áreas de preocupación específicas—impacto de punto de inyección, ramas muertas/drenajes para ácido condensado, etc.;</li>
                <li>preocupaciones de proceso específicas;</li>
                <li>medidas de control de corrosión del proceso.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.3.4 Análisis Estadístico de CMLs de Circuito</h4>
            <p>Aunque un análisis estadístico puede realizarse en cualquier circuito, los resultados pueden ser engañosos a menos que el circuito esté bien definido como se describe en 7.3.3, donde los límites del circuito idealmente abarcan el número mínimo de mecanismos de daño comunes que exhiben una tasa de corrosión similar. Consulte el Anexo C para una descripción más detallada de los análisis estadísticos.</p>
            <p>Dada la naturaleza de los datos de espesor de tubería y sus múltiples fuentes de error, todos los datos utilizados en cualquier análisis estadístico deben validarse cuidadosamente. La validación debe incluir pasos para identificar y eliminar problemas típicos, como reemplazos no documentados, lecturas anómalas, cambios de calibración o errores de entrada de datos, para minimizar los errores.</p>
            <p>Existen numerosas técnicas estadísticas relacionadas que pueden emplearse en el análisis de datos de espesor de circuito, y no es la intención de este documento definir o recomendar ninguna metodología específica. El propietario-operador puede optar por utilizar cualquier metodología o técnica adecuada (ya sea análisis basado en tasa de corrosión o espesor) como medio para establecer tasas de corrosión representativas y estimar el espesor mínimo restante y las futuras fechas de inspección.</p>
            <p>Cualquier metodología de análisis estadístico utilizada debe documentarse. La documentación debe incluir cualquier requisito, suposición, limitación, precaución, etc. asociada con la metodología de análisis estadístico. Debe tenerse cuidado de garantizar que el tratamiento estadístico de los datos resulte en una representación conservadora de los diversos componentes de tubería dentro del circuito. Idealmente, el análisis debe:</p>
            <ul>
                <li>medir y garantizar que la distribución de datos sea apropiada para la metodología de análisis seleccionada;</li>
                <li>proporcionar una estimación del error estándar de los datos;</li>
                <li>identificar cualquier dato/punto atípico significativo que no se ajuste dentro de los parámetros o distribución del análisis;</li>
                <li>proporcionar una estimación del tamaño mínimo de la muestra (población de datos) para la metodología estadística utilizada (significancia estadística);</li>
                <li>proporcionar una tasa de corrosión estadística (o espesor) y confianza para el circuito;</li>
                <li>identificar si puede haber modos mixtos de daño por corrosión (localizado/generalizado);</li>
                <li>identificar si puede haber un cambio en los datos de tasa de corrosión con el tiempo.</li>
            </ul>
        </div>
        <div class="subsection">
            <h4>7.3.5 Identificación de Ubicaciones Susceptibles a Corrosión Acelerada</h4>
            <p>En presencia de ciertos corrosivos, las tasas de corrosión normalmente aumentan en áreas de mayor velocidad y/o turbulencia. Codos, reductores, puntos de mezcla, válvulas de control y orificios son ejemplos de componentes de tubería donde puede ocurrir corrosión acelerada debido al aumento de velocidad y/o turbulencia. Estos componentes son normalmente áreas donde un inspector ubicaría CMLs adicionales en un circuito de tubería. Sin embargo, el inspector también debe tener en cuenta que las áreas sin flujo, como las ramas muertas (ver 7.4.2), pueden causar corrosión acelerada y pueden necesitar CMLs adicionales. En situaciones donde se anticipa agrietamiento, puede establecerse un CML para monitorear la tasa de agrietamiento.</p>
        </div>
        <div class="subsection">
            <h4>7.3.6 Accesibilidad de los CMLs</h4>
            <p>Al asignar CMLs, el inspector debe considerar la accesibilidad para monitorearlos. Los CMLs a nivel del suelo normalmente proporcionan la accesibilidad más fácil. Otras áreas con buena accesibilidad son las plataformas de equipos y escaleras. En algunos sistemas de tubería, la naturaleza de los mecanismos de daño activos requerirá monitoreo en ubicaciones con accesibilidad limitada. En estos casos, la planificación de la inspección debe decidir entre andamios, plataformas elevadoras portátiles u otros métodos para proporcionar acceso adecuado.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>7.4 Guía de Inspección para Daño Específico por Ubicación</h4>
        <div class="subsection">
            <h4>7.4.1 Puntos de Inyección y Mezcla</h4>
            <div class="subsection">
                <h4>7.4.1.1 Puntos de Inyección</h4>
                <p>API 570 identifica los puntos de inyección para monitoreo adicional y/o inspección mejorada durante la operación. Esto se hizo en reconocimiento de que los puntos de inyección han causado problemas significativos de integridad del equipo debido en parte a su diseño y operación. Por ejemplo, algunos puntos de inyección pueden haberse instalado sin prestar mucha atención simplemente porque se percibían como adiciones pequeñas con poco potencial para causar un problema. Sin embargo, estos también deben incluirse en la planificación de la inspección.</p>
                <p>Se utilizan muchos tipos diferentes de aditivos de proceso para mantener la confiabilidad y el rendimiento óptimo de las operaciones de la planta. Típicamente, los aditivos se inyectan en los sistemas de tubería a través de conexiones de ramal pequeñas, ya sea directamente o a través de una pluma o boquilla de rociado. Las ubicaciones donde estos aditivos se introducen en las corrientes de proceso comúnmente se conocen como puntos de inyección.</p>
                <p>Un aditivo puede ser uno de los siguientes tipos:</p>
                <ul>
                    <li>un químico patentado, como un inhibidor de corrosión, antincrustante o eliminador de oxígeno;</li>
                    <li>una corriente de agua inyectada para disolver depósitos de sal;</li>
                    <li>componentes de proceso corrosivos diluidos.</li>
                </ul>
                <p>Algunos sistemas de inyección comunes encontrados en aplicaciones de refinería incluyen los siguientes:</p>
                <ul>
                    <li>inyección de polisulfuro de amonio en corrientes de gas agrio (FCC, coquer, despojador de agua agria);</li>
                    <li>inyección de vapor/condensado en tuberías de gas de combustión y catalizador;</li>
                    <li>inyección de agua de lavado (continua e intermitente) en efluente de hidroprocesamiento para controlar la corrosión, que puede ser causada por sales de NH<sub>4</sub>HS y NH<sub>4</sub>Cl. Consulte API 932-B—Sección 6.8.1 y Tabla 2, para detalles adicionales;</li>
                    <li>agua de lavado de desalinador de crudo;</li>
                    <li>inyección de cáustico en alimentación de crudo;</li>
                    <li>inyección de cáustico en tubería de sección de regeneración de reformador;</li>
                    <li>inyección de cloruro [ej. PERC (percloroetileno)] en tubería de alimentación de reactor de reformador;</li>
                    <li>inyección de metanol/condensado en tubería de sistema de reactor de reformador;</li>
                    <li>inyección de amoníaco o amina neutralizante en sistemas de cabeza de torre de crudo;</li>
                    <li>inyección de enfriamiento de H<sub>2</sub> frío en tubería de sistema de reactor de hidroprocesamiento;</li>
                    <li>inyección de inhibidor de amina formadora de película en tubería de cabeza de fraccionamiento y planta de gas.</li>
                </ul>
                <p>Varios mecanismos de corrosión asociados con los puntos de inyección se han hecho evidentes con los años. Muchos de estos problemas han resultado en deterioro altamente localizado. El daño por corrosión asociado con los puntos de inyección puede producir tasas de corrosión un orden de magnitud más altas que las reportadas para las corrientes de proceso principales, siendo las pérdidas localizadas la forma más común de problema.</p>
                <p>Las prácticas de inspección orientadas al escaneo de áreas de la tubería son necesarias para poder detectar la corrosión localizada. Los problemas con los puntos de inyección generalmente se han evitado cuando la especificación, diseño, capacitación, operación y monitoreo de condiciones se llevaron a cabo adecuadamente. Después de la instalación de sistemas de inyección, debe revisarse lo siguiente:</p>
                <ul>
                    <li>el sistema de inyección, incluyendo la ventana de operación del proceso, condiciones anticipadas, diseño del equipo, materiales de construcción, interacciones químicas y físicas anticipadas, y requisitos de monitoreo/inspección, ha sido documentado y el hardware instalado ha sido verificado;</li>
                    <li>procedimientos y medidas en vigor para verificar que el rendimiento del sistema de inyección está logrando su objetivo y no causando problemas de proceso no anticipados;</li>
                    <li>plan de inspección, de acuerdo con API 570, en vigor para verificar el punto de inyección y los equipos relacionados en busca de daño relacionado con la inyección.</li>
                </ul>
                <p>Durante el diseño y auditoría periódica de los sistemas de inyección, típicamente se considerarían los siguientes:</p>
                <ul>
                    <li>el sistema de inyección fue diseñado para lograr sus objetivos de proceso y confiabilidad;</li>
                    <li>se consideraron el rango de tasas de inyección deseadas y el rango de condiciones de proceso esperadas en la corriente receptora;</li>
                    <li>se consideró el destino final del inyectante y sus componentes;</li>
                    <li>se consideró el diseño de la inyección como un sistema, incluyendo el punto de inyección, sistema de suministro, instrumentación y control;</li>
                    <li>se anticiparon posibles mecanismos de daño creíbles, y se eligieron diseños y materiales de construcción para lograr la confiabilidad deseada del equipo a presión;</li>
                    <li>se utilizó un proceso de MOC al implementar o modificar la inyección, como una forma de garantizar que los cambios se pensaron adecuadamente;</li>
                    <li>el personal de operación y mantenimiento fue capacitado sobre el funcionamiento y servicio adecuados del equipo de inyección;</li>
                    <li>las plumas y boquillas de inyección que se proyectan en la corriente de proceso fueron inspeccionadas visualmente en busca de incrustaciones y aflojamiento de juntas y las sujetas a fatiga fueron inspeccionadas con líquidos penetrantes;</li>
                    <li>se probaron los patrones de rociado de las boquillas;</li>
                    <li>se inspeccionaron las características anti-soplo del hardware de inyección retráctil.</li>
                </ul>
                <p>Para obtener información más completa y exhaustiva, consulte NACE SP0114.</p>
            </div>
            <div class="subsection">
                <h4>7.4.1.2 Puntos de Mezcla de Proceso</h4>
                <p>Los puntos de mezcla de proceso ocurren donde los componentes de tubería combinan dos corrientes de proceso de composición, temperatura u otro parámetro diferente que podría causar daño. Los puntos de mezcla pueden estar sujetos a daño acelerado ya sea por mecanismos de corrosión o mecánicos (ej. fatiga térmica). Los problemas con los puntos de mezcla generalmente se han evitado cuando la especificación, diseño, capacitación, operación y monitoreo de condiciones se llevaron a cabo adecuadamente.</p>
                <p>Algunos ejemplos de puntos de mezcla de proceso incluyen los siguientes:</p>
                <ul>
                    <li>mezcla de una corriente que contiene cloruro de un reformador catalítico (ej. nafta) con una corriente de hidrocarburo húmeda de otro lugar;</li>
                    <li>mezclar una corriente de hidrocarburo con bajo contenido de azufre y baja temperatura con una corriente de alta temperatura es un problema cuando la temperatura del fluido a granel aumenta donde la sulfidación a alta temperatura se vuelve activa;</li>
                    <li>mezclar hidrógeno en una corriente de hidrocarburo donde las temperaturas de la corriente son significativamente diferentes;</li>
                    <li>mezcla de corrientes de separadores calientes y fríos de hidroprocesamiento;</li>
                    <li>mezcla donde la corrosión a alta temperatura (ej. sulfidación) puede convertirse en un problema si la temperatura general del fluido aumenta.</li>
                </ul>
                <p>El inspector, el ingeniero de proceso de la unidad y el especialista en corrosión típicamente revisarán los PFDs para identificar puntos de mezcla de proceso susceptibles y definir el alcance del circuito de punto de mezcla. Generalmente se requiere una inspección más intensiva elegida para el mecanismo de daño en puntos de mezcla específicos. Esto podría incluir encuestas de espesor de cuadrícula cerrada, técnicas de escaneo UT y examen radiográfico de perfil (RT) para corrosión.</p>
                <p>Otras técnicas NDE (ej. UT de haz angular, PT, etc.) pueden ser apropiadas al inspeccionar en busca de agrietamiento por fatiga térmica. Bajo algunas condiciones, los usuarios pueden aplicar los requisitos de inspección de punto de inyección a puntos de mezcla de proceso susceptibles.</p>
                <p>Algunos puntos de mezcla pueden incorporar tecnología probada que resulta en una mezcla completa de cada corriente. Estos puntos de mezcla pueden no caer dentro del alcance/definición previsto de puntos de mezcla corrosivos y pueden no requerir ninguna inspección de énfasis especial.</p>
            </div>
            <div class="subsection">
                <h4>7.4.1.3 Consideraciones de Fatiga Térmica en Puntos de Mezcla</h4>
                <p>Se ha observado que la falla en el diseño al abarcar adecuadamente varias consideraciones ha y puede llevar a fallas por fatiga térmica. Estas consideraciones incluyen la efectividad de la mezcla, el régimen de flujo, los materiales de construcción, la composición de la corriente y el volumen de la corriente, y la evaluación de las condiciones de operación normales combinadas con la probabilidad/frecuencia de esas condiciones.</p>
                <p>La Tabla 2 es un ejemplo que puede usarse para evaluar el material, los tipos de fluido y la diferencia de temperatura entre las dos corrientes en un punto de mezcla para determinar si la fatiga térmica puede ser una preocupación. La Tabla 2 no aborda la corrosión en puntos de mezcla que puede ocurrir a diferenciales de temperatura más bajos. Si la diferencia de temperatura entre dos corrientes de proceso excede el número a continuación, puede necesitarse una manga térmica para prevenir la fatiga térmica.</p>
                <p>Los propietarios-operadores deben desarrollar sus propios criterios específicos para evaluar y abordar la fatiga térmica en los puntos de mezcla.</p>
                <div class="table-container">
                <table class="api-table">
                    <caption>Tabla 2—Criterios de Evaluación de Fatiga Térmica en Puntos de Mezcla</caption>
                    <thead>
                        <tr>
                            <th colspan="2">Flow Medium</th>
                            <th colspan="2">Delta Temperature (°F)</th>
                        </tr>
                        <tr>
                            <th>Main Pipe</th>
                            <th>Secondary Pipe</th>
                            <th>Ferritic</th>
                            <th>Austenitic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gas</td>
                            <td>Gas</td>
                            <td>450</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Liquid</td>
                            <td>Liquid</td>
                            <td>450</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Liquid</td>
                            <td>Gas</td>
                            <td>450</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Gas</td>
                            <td>Liquid</td>
                            <td>275</td>
                            <td>125</td>
                        </tr>
                    </tbody>
                </table>
            </div>

                
    </div>
                
            </div>
            <div class="subsection">
                <h4>7.4.1.4 Efectividad de la Mezcla y Régimen de Flujo</h4>
                <p>Cuando se combinan dos corrientes, la turbulencia inicia el proceso de mezcla, y la efectividad dependerá del grado de penetración por la corriente de mezcla y si las dos corrientes son miscibles o inmiscibles. Si las corrientes son miscibles, se formará una sola fase, pero la dispersión y disolución son dependientes del tiempo. La mezcla completa puede no desarrollarse hasta 100 diámetros de tubería o más aguas abajo; los planes de inspección deben considerar el área donde se predice una mezcla incompleta. Si las corrientes son inmiscibles, pueden permanecer dos fases en la corriente mezclada o puede formarse una tercera fase aguas abajo del punto de mezcla (ej. depósito de sal de amina).</p>
                <p>El régimen de flujo que se desarrolla depende de lo siguiente:</p>
                <ul>
                    <li>velocidad de la corriente;</li>
                    <li>cantidades/densidades relativas de las fases;</li>
                    <li>tamaño y orientación de ambas líneas.</li>
                </ul>
                <p>Los regímenes de flujo son diferentes en las líneas horizontales y verticales debido a la gravedad. El flujo completamente desarrollado puede no ocurrir hasta muchos diámetros de tubería aguas abajo.</p>
                <p>Los puntos de inyección y mezcla implican mezcla, contacto o humectación.</p>
            </div>
            <div class="subsection">
                <h4>7.4.1.5 Mezcla, Contacto o Humectación</h4>
                <ul>
                    <li><strong>Mezcla</strong>—La tasa de mezcla se mejora con un aumento de la velocidad de la corriente inyectada, lo que puede lograrse inyectando a través de una pluma o boquilla de rociado.</li>
                    <li><strong>Contacto</strong>—El contacto o mezcla íntima de las fases separadas se mejora maximizando el área entre las fases (ej. mediante una boquilla de rociado).</li>
                    <li><strong>Humectación</strong>—En corrientes de una sola fase, la humectación de las paredes por el fluido inyectado se logra fácilmente. En corrientes bifásicas, la humectación depende del régimen de flujo, siendo el flujo anular, de burbujas y de espuma el que mejora la humectación de las paredes, mientras que el flujo estratificado y ondulado impedirá la humectación de las paredes.</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>7.4.1.6 Cantidad de Agua Inyectada/Mezclada</h4>
                <p>En algunas situaciones, la cantidad de agua necesita calcularse cuidadosamente para garantizar que quede suficiente agua no vaporizada para cumplir la función y no exacerbar la corrosión. Los ingenieros de proceso deben verificar esto periódicamente. La calidad del agua también puede afectar las tasas de corrosión.</p>
                <p>Consulte NACE SP0114 para obtener información adicional.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>7.4.2 Ramas Muertas (Deadlegs)</h4>
            <p>La tasa de corrosión en las ramas muertas puede variar significativamente de las tuberías activas adyacentes. El inspector debe monitorear el espesor de la pared en las ramas muertas seleccionadas, incluyendo tanto el extremo estancado como la conexión a una línea activa. Los ejemplos de ramas muertas incluyen los siguientes:</p>
            <ul>
                <li>en sistemas como los sistemas de cabeza de torre y unidades de hidrotratamiento donde están presentes sales de amonio, puede ocurrir corrosión en el área de la rama muerta donde el metal está a la temperatura de salificación o punto de rocío;</li>
                <li>en sistemas de tuberías calientes, el área de punto alto puede corroerse debido a las corrientes convectivas establecidas en la rama muerta.</li>
            </ul>
            <p>Para tales sistemas, puede ser necesaria una cobertura de inspección extensa utilizando técnicas como escaneo UT y RT de perfil para localizar el área donde está ocurriendo la corrosión por punto de rocío o por sales de amonio.</p>
            <p>En general, debe considerarse la eliminación de ramas muertas que ya no sirven a ningún propósito del proceso.</p>
            <p>Además, el agua puede acumularse en las ramas muertas, lo que puede congelarse en entornos más fríos, resultando en la ruptura de la tubería.</p>
        </div>
        <div class="subsection">
            <h4>7.4.3 SAI</h4>
            <p>La corrosión externa puede ocurrir en la interfaz donde la tubería parcialmente enterrada o enterrada emerge del suelo (y/o hormigón). Tenga en cuenta que las áreas donde la tubería contacta involuntariamente, pero permanentemente, el suelo (ej. debido al movimiento del suelo) también deben tratarse como SAIs. Típicamente, la corrosión puede extenderse desde 12 pulg. (30 cm) debajo hasta 6 pulg. (15 cm) encima de la superficie del suelo.</p>
            <p>La inspección a nivel del suelo debe incluir la verificación de daños en el recubrimiento, tubería descubierta y mediciones de profundidad de picaduras. Si se nota una corrosión significativa, pueden ser necesarias mediciones de espesor y excavación para evaluar si la corrosión está localizada en el SAI o puede ser más generalizada en el sistema enterrado. Las lecturas de espesor en los SAIs pueden exponer el metal y acelerar la corrosión si los recubrimientos y envolturas no se restauran adecuadamente.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_22.png" class="figure-image">
                <p class="figure-caption">Figura 22—Corrosión en SAI</p>
            </div>
            
            <p>La Figura 22 es un ejemplo de corrosión en un SAI, aunque había sido envuelto con cinta. Si la tubería enterrada tiene protección catódica satisfactoria, según lo determinado por el monitoreo de acuerdo con API 570, la excavación solo se requiere si hay evidencia de daño en el recubrimiento o envoltura. La experiencia ha demostrado que puede ocurrir corrosión debajo de la cinta aunque parezca estar intacta. Debe considerarse la posibilidad de excavar 12 pulg. (300 mm) hacia abajo y quitar la cinta para inspección. El uso de un NDE apropiado en lugar de la excavación y eliminación de la cinta puede hacerse para inspeccionar una posible corrosión debajo de la cinta.</p>
            <p>Si la tubería enterrada no tiene recubrimiento a nivel del suelo, debe considerarse la posibilidad de excavar de 6 pulg. (150 mm) a 12 pulg. (300 mm) de profundidad para evaluar el potencial de daño oculto. Alternativamente, se pueden utilizar técnicas especializadas de UT (ej. onda guiada) para evaluar áreas para una evaluación más detallada.</p>
            <p>En las interfaces hormigón-aire y asfalto-aire para tuberías enterradas sin protección catódica, el inspector debe buscar evidencia de que el sellado o calafateo en la interfaz se ha deteriorado y ha permitido la entrada de humedad. Si tal condición existe en sistemas de tuberías de más de 10 años, puede ser necesario inspeccionar en busca de corrosión debajo de la superficie antes de volver a sellar la junta.</p>
            <p>Consulte API 571 para obtener información adicional sobre la corrosión en los SAIs.</p>
        </div>
        <div class="subsection">
            <h4>7.4.4 Corrosión Localizada Específica del Servicio</h4>
            <p>Aunque hay muchos tipos de mecanismos de daño internos posibles del servicio de proceso, los siguientes son algunos ejemplos de mecanismos de corrosión localizada específicos del servicio y dónde podrían esperarse para que el inspector los considere al desarrollar planes de inspección:</p>
            <ul>
                <li>aguas abajo de puntos de inyección y mezcla y aguas arriba de separadores de producto (ej., líneas de efluente de reactor de hidroprocesamiento);</li>
                <li>corrosión por punto de rocío en corrientes condensantes (ej. fraccionamiento de cabeza);</li>
                <li>arrastre inesperado de ácido o cáustico de procesos a sistemas de tuberías no aleados, o en el caso de cáustico, a sistemas de tuberías de acero sin tratamiento térmico post-soldadura;</li>
                <li>donde es probable que ocurra la condensación o ebullición de ácidos (orgánicos e inorgánicos) o agua;</li>
                <li>donde pueden estar presentes ácidos nafténicos u otros ácidos orgánicos en la corriente de proceso;</li>
                <li>donde puede ocurrir el ataque de hidrógeno a alta temperatura (ver API 941);</li>
                <li>ubicaciones de condensación de sales de amonio en corrientes de hidroprocesamiento (ver API 932-B);</li>
                <li>flujo bifásico y áreas turbulentas en sistemas ácidos, también áreas de surcos de hidrógeno;</li>
                <li>donde existen corrientes con alto contenido de azufre a temperaturas moderadas a altas;</li>
                <li>mezcla de grados de acero al carbono en servicio de aceite corrosivo caliente [500 °F (260 °C)] o temperatura más alta y contenido de azufre en el aceite mayor del 0.5 % en peso;</li>
                <li>corrosión debajo de depósitos en lechadas, soluciones cristalizantes o fluidos productores de coque;</li>
                <li>arrastre de cloruro en unidades de reformador catalítico, particularmente donde se mezcla con otras corrientes húmedas;</li>
                <li>áreas soldadas sujetas a ataque preferencial;</li>
                <li>"puntos calientes" de corrosión en tuberías con rastreo térmico externo;</li>
                <li>sistemas de vapor sujetos a "corte de alambre", grafitización, o donde ocurre condensación;</li>
                <li>ubicaciones sujetas a corrosión por sulfidación a alta temperatura donde los tiempos de residencia resultantes de condiciones de bajo flujo pueden resultar en una mayor corrosión; las ubicaciones susceptibles incluyen codos, a lo largo de la parte superior de secciones horizontales de la línea, y áreas donde puede ocurrir calentamiento localizado, es decir, áreas de rastreo térmico doble o triple y en sistemas de tuberías estancados y de bajo flujo con corrientes inducidas térmicamente (termosifón).</li>
            </ul>
            <p>Donde un tramo de tubería temporal (o desmontable) no ha sido eliminado antes del inicio de la operación del proceso, debe verificarse que la tubería temporal esté efectivamente aislada del proceso (como una válvula de doble bloqueo o una ceguera de aislamiento) o que la tubería temporal sea de material y diseño mecánico adecuados para la operación continua del proceso, incluyendo posibles condiciones sin flujo. Una preocupación particular surge para la tubería temporal de material inadecuado que puede estar sujeta a sulfidación a alta temperatura u otros mecanismos de daño si se deja expuesta al proceso. Si la tubería temporal está aislada y dejada por un período significativo, el bloqueo/etiquetado puede ser un medio para prevenir un servicio inapropiado e inadvertido.</p>
        </div>
        <div class="subsection">
            <h4>7.4.5 Corrosión en Puntos de Contacto</h4>
            <p>La corrosión localizada en los puntos de contacto de los soportes de tubería es el resultado de la corrosión por rendija debido a depósitos que conducen a fugas. Estos depósitos pueden contener especies corrosivas, agua y oxígeno típicos de un ambiente externamente corrosivo. Puede esperarse más corrosión en climas húmedos, climas marinos y donde el contacto entre la tubería y sus soportes es menos un "punto" y más un "área". Si no se detecta y/o no se mitiga, la corrosión en los puntos de contacto puede resultar en penetración completa de la pared y fugas.</p>
        </div>
        <div class="subsection">
            <h4>7.4.6 Soportes de Tubería</h4>
            <div class="subsection">
                <h4>7.4.6.1 Corrosión Externa en Soportes</h4>
                <p>La corrosión de los soportes y sus tuberías asociadas puede ocurrir en áreas donde se rompe el recubrimiento protector y quedan atrapados agua y escombros transportados por el aire (a menudo denominada "corrosión en puntos de contacto"). El diseño de los soportes (es decir, vigas de soporte) puede contribuir significativamente a este problema. Las tasas de corrosión pueden aumentar por factores locales. Las temperaturas elevadas de las tuberías calientes (ej. tuberías de vapor) pueden aumentar la corrosión, incluyendo los soportes con protección contra incendios. Otros factores, como el rastreo térmico o las salidas de trampas de vapor, o donde la humedad aumenta, como la proximidad a torres de enfriamiento y vegetación (creando un ambiente húmedo en la parte inferior de la tubería y en cualquier soporte en la proximidad), todos pueden contribuir a tasas de corrosión localmente altas.</p>
                <p>La corrosión por rendija puede ocurrir debajo de cualquier zapata, placa de refuerzo, envoltura o placa media-suela parcial o no soldada. También deben considerarse las condiciones ambientales intermitentes, como las pruebas de sistemas de supresión de incendios por rociado, etc.</p>
                <p>Los soportes de patín ficticio pueden atrapar agua y escombros transportados por el aire, lo que lleva a la corrosión tanto del soporte como de la tubería. Cuando se construyen usando tubería, debe considerarse la posibilidad de tapar todos los soportes de extremo abierto con tapas o placas completamente soldadas y proporcionar un orificio de drenaje no menor de 1/4 pulg. (6 mm) en la posición más baja. Para los patines ficticios horizontales, deben proporcionarse orificios de drenaje en ambos extremos, y el patín ficticio debe inclinarse ligeramente hacia away de la tubería que está soportando.</p>
            </div>
            <div class="subsection">
                <h4>7.4.6.2 Corrosión Interna en Soportes</h4>
                <p>El efecto de enfriamiento de un soporte en una tubería de temperatura elevada puede ser suficiente para causar la condensación de producto o agua en el interior de la tubería. En algunos servicios de proceso, esta condensación puede contribuir a la corrosión interna acelerada.</p>
            </div>
            <div class="subsection">
                <h4>7.4.6.3 Otros Mecanismos de Daño en Soportes</h4>
                <p>Varios otros mecanismos de daño pueden ocurrir en los soportes de tubería y deben inspeccionarse, incluyendo los siguientes:</p>
                <ul>
                    <li><strong>Fretting, Sobreesfuerzo o Daño en Recubrimiento en Soportes debido a la Expansión Térmica</strong>—La expansión y contracción térmica debido a cambios de temperatura puede dañar los sistemas de recubrimiento protector y/o sobreesforzar tanto la tubería como los soportes de tubería.</li>
                    <li><strong>Corrosión Galvánica en Soportes</strong>—La corrosión galvánica está asociada con el uso de dos o más materiales de diferente valor en la serie galvánica, en proximidad cercana entre sí. Por ejemplo, los soportes de acero al carbono soldados a tuberías de acero inoxidable pueden estar sujetos a corrosión a una tasa más alta que la tubería de acero inoxidable.</li>
                    <li><strong>CUI en Soportes</strong>—Los soportes que penetran los sistemas de aislamiento pueden proporcionar un potencial para la entrada de agua y la posterior CUI debido a un sellado deficiente en la penetración.</li>
                    <li><strong>Agrietamiento Ambiental en Soportes</strong>—En entornos de proceso predominantemente alcalinos (ej. aminas y cáustico), la soldadura de soportes a tuberías de acero al carbono con o sin tratamiento térmico post-soldadura (PWHT) puede causar agrietamiento ambiental interno como resultado de esfuerzos residuales.</li>
                    <li><strong>Agrietamiento Externo en Soportes</strong>—Las tuberías de acero inoxidable austenítico pueden ser susceptibles a ECSCC donde hay una fuente de cloruros por encima de una temperatura umbral. Los soportes de tubería que atrapan agua contra la tubería pueden contribuir a la susceptibilidad de agrietamiento.</li>
                    <li><strong>Deterioro de Cimientos/Pedestales de Hormigón (Incluyendo Asentamiento)</strong>—El deterioro de cimientos y pedestales a menudo es el resultado directo de la sobrecarga del soporte y/o la vida útil extendida.</li>
                    <li><strong>Vibración/Movimiento/Desalineación</strong>—La vibración, movimiento y desalineación de la tubería pueden crear un potencial para fatiga, fretting y/o sobreesfuerzo de la tubería y los miembros de soporte. Deben considerarse anclajes, restricciones y holguras/movimientos adecuados durante el diseño del soporte. Esto incluye el recorrido disponible de los colgadores de resorte.</li>
                </ul>
            </div>
        </div>
        <div class="subsection">
            <h4>7.4.7 Tubos de Acero Inoxidable en Servicio con Cloruros</h4>
            <p>Un mecanismo de daño específico del servicio es la picadura y CSCC por cloruros de los tubos. La familia de aceros inoxidables 18Cr-8Ni, como los Tipos 304 y 316, se utilizan comúnmente como materiales de construcción de tubos. Sin embargo, debe tenerse en cuenta que aunque estos materiales de tubos pueden ser resistentes a muchos fluidos químicos, son susceptibles a la picadura y CSCC si:</p>
            <ul>
                <li>Hay presencia de cloruros.
                    <ul>
                        <li>Externamente, los cloruros pueden provenir del aislamiento, la chaqueta de aislamiento de PVC, la atmósfera, la lluvia (especialmente en ambientes marinos), los sistemas de agua de rociado, la limpieza de las cubiertas y carreteras circundantes, etc.</li>
                        <li>Internamente, los cloruros pueden ser comunes en muchas corrientes de proceso y pueden ser introducidos por el agua de prueba hidrostática.</li>
                        <li>Los mecanismos de concentración, como la evaporación local del agua, también pueden aumentar la susceptibilidad al agrietamiento.</li>
                    </ul>
                </li>
                <li>Hay presencia de agua.</li>
                <li>Hay exposición a temperaturas superiores a unos 140 °F (60 °C).</li>
            </ul>
            <p>NOTA Debe tenerse en cuenta que en algunos casos la picadura y CSCC por cloruros pueden ocurrir a temperaturas inferiores a 140 °F (60 °C), como en ambientes de pH bajo o en componentes con alto esfuerzo residual.</p>
            <ul>
                <li>Hay esfuerzo en el material del tubo.
                    <ul>
                        <li>Esto es común por los esfuerzos residuales impartidos durante los procesos de fabricación del tubo o durante los procesos de instalación, como el doblado del tubo y el montaje de conexiones de compresión.</li>
                    </ul>
                </li>
            </ul>
            <p>Las fallas de los tubos debido a CSCC y/o picadura pueden ser demasiado impredecibles para gestionar mediante esfuerzos de inspección; por lo tanto, se debe consultar a un especialista en materiales o corrosión/ingeniero para obtener recomendaciones de aleaciones utilizadas en ambientes agresivos. Debe considerarse la posibilidad de utilizar materiales como la Aleación 825 (para muchas aplicaciones de refinación a temperatura elevada), la Aleación C-276 [para servicios de agua agria o ácido fluorhídrico (HF) caliente donde están presentes especies oxidantes], y la Aleación 20Cb3 (para aplicaciones de ácido sulfúrico), u otras aleaciones de alta disponibles debido a su mayor resistencia a CSCC y/o picaduras.</p>
        </div>
        <div class="subsection">
            <h4>7.4.8 Inspección de Tuberías Enterradas</h4>
            <div class="subsection">
                <h4>7.4.8.1 General</h4>
                <p>La inspección de tuberías de proceso enterradas (no reguladas por el Departamento de Transporte) es diferente a otras inspecciones de tuberías de proceso porque un deterioro externo significativo puede ser causado por condiciones corrosivas del suelo.</p>
                
                <div class="figure-container">
                    <img src="images/api574_figure_23.png" class="figure-image">
                    <p class="figure-caption">Figura 23—Corrosión de Tubería Enterrada debajo de Envoltura de Cinta Aplicada Incorrectamente</p>
                </div>
                
                <p>Las referencias importantes para la inspección de tuberías enterradas incluyen NACE SP0169, NACE SP0274 y API 570—Sección 9.</p>
                <p>Tenga en cuenta que la inspección de los SAIs generalmente no se considera una inspección de las respectivas tuberías enterradas, ya que el plan de inspección para mecanismos de daño puede variar significativamente entre el SAI y el de las tuberías enterradas.</p>
            </div>
            <div class="subsection">
                <h4>7.4.8.2 Tipos y Métodos de Inspección y Prueba</h4>
                <div class="subsection">
                    <h4>7.4.8.2.1 Vigilancia Visual por Encima del Nivel del Suelo</h4>
                    <p>Las indicaciones de fugas de tuberías enterradas pueden incluir suelo húmedo o filtración real del producto transportado en la tubería subterránea, un cambio en el contorno de la superficie del suelo, decoloración del suelo, ablandamiento del asfalto de pavimento, formación de charcos, charcos de agua burbujeante u olor notable. Inspeccionar la ruta de las tuberías enterradas es un método para identificar áreas problemáticas. Todas las líneas deben inspeccionarse en y justo debajo del punto donde entran en tierra, asfalto u hormigón porque la corrosión grave ocurre frecuentemente en dichas ubicaciones.</p>
                    <p>Los pequeños sistemas aéreos no tripulados, a menudo denominados "drones", pueden utilizarse para respaldar o reemplazar los estudios terrestres. Los sistemas aéreos no tripulados pueden utilizar una cámara o una combinación de una cámara y un sistema infrarrojo para proporcionar esta asistencia. También pueden emplearse tecnologías de detección adicionales que puedan detectar especies químicas particulares (como el metano). Se requiere el cumplimiento de las regulaciones locales y la operación segura de los vuelos. Quienes empleen estas tecnologías deben asegurarse de las capacidades de detección y verificar el rendimiento de dicho equipo.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.2.2 Estudio de Potencial a Intervalo Cercano</h4>
                    <p>Los estudios de potencial a intervalo cercano se utilizan para localizar celdas de corrosión, ánodos galvánicos, corrientes parásitas, problemas de recubrimiento, contactos subterráneos, áreas de bajos potenciales tubería-suelo y otros problemas relacionados con la protección catódica.</p>
                    <p>Un estudio de potencial tubería-suelo a intervalo cercano mide el potencial de la tubería con respecto al suelo directamente sobre la tubería, a intervalos predeterminados entre mediciones, generalmente a 2.5 pies, 5 pies, 10 pies o 20 pies (0.8 m, 1.5 m, 3 m o 6 m). El contacto con la tubería puede hacerse en un accesorio de tubería sobre el suelo.</p>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_24.png" class="figure-image">
                        <p class="figure-caption">Figura 24—Uso del Estudio de Potencial Interno Tubería-Suelo para Identificar Corrosión Activa</p>
                    </div>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_25.png" class="figure-image">
                        <p class="figure-caption">Figura 25—Ejemplo de Gráfico de Estudio de Potencial Tubería-Suelo</p>
                    </div>
                    
                    <p>Las celdas de corrosión pueden formarse tanto en tuberías desnudas como en tuberías recubiertas con defectos (holidays) donde el acero desnudo contacta el suelo. Dado que el potencial en el área de corrosión será mediblemente diferente de un área adyacente en la tubería, la ubicación de la actividad de corrosión puede determinarse mediante esta técnica de estudio.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.3 Estudio de Defectos (Holidays) en Recubrimiento de Tubería</h4>
                    <p>Hay dos aplicaciones clave para emplear estudios de defectos (holidays).</p>
                    <ol>
                        <li>Debe usarse en tuberías recién recubiertas e instaladas para garantizar que el recubrimiento esté intacto y libre de defectos. El estudio de defectos del recubrimiento de tubería (ej. gradiente de voltaje de corriente continua) puede usarse para localizar defectos del recubrimiento externo en tuberías recubiertas enterradas.</li>
                        <li>Más a menudo se usa para evaluar la aptitud para el servicio del recubrimiento para tuberías enterradas que han estado en servicio durante un período prolongado.</li>
                    </ol>
                    <p>A partir de los datos del estudio, pueden determinarse la efectividad del recubrimiento y la tasa de deterioro del recubrimiento. Esta información se utiliza tanto para predecir la actividad de corrosión en un área específica como para pronosticar el reemplazo del recubrimiento para el control de la corrosión.</p>
                    <p>La frecuencia de los estudios de defectos del recubrimiento de tubería generalmente se basa en indicaciones de que otras formas de control de corrosión son ineficaces. Por ejemplo, en una tubería recubierta donde hay una pérdida gradual de potenciales de protección catódica, o cuando ocurre una fuga por corrosión externa en un defecto del recubrimiento, puede usarse un estudio de defectos del recubrimiento de tubería para evaluar el recubrimiento.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.4 Pruebas de Resistividad del Suelo</h4>
                    <p>Las mediciones de resistividad del suelo pueden usarse para la clasificación relativa de la corrosividad del suelo. La corrosión de tuberías desnudas o mal recubiertas a menudo es causada por una mezcla de diferentes suelos en contacto con la superficie de la tubería. La corrosividad de los suelos puede determinarse mediante una medición de la resistividad del suelo. Los niveles más bajos de resistividad son relativamente más corrosivos que los niveles más altos, especialmente en áreas donde la tubería está expuesta a cambios significativos en la resistividad del suelo.</p>
                    <p>Hay tres métodos bien conocidos para determinar la resistividad. Estos son el Método de Cuatro Pines de Wenner, la barra de suelo (puente AC) y la caja de suelo. Los procedimientos para el uso de cada uno de estos tres métodos son simples en concepto. Cada uno mide una caída de voltaje causada por un flujo de corriente conocido a través de un volumen medido de suelo. Este factor de "resistencia" se usa en una fórmula para determinar la resistividad del suelo. Tanto la barra de suelo como la caja de suelo usan un factor de multiplicación para determinar la resistividad del suelo. Este factor debe estar impreso en la barra o caja.</p>
                    <p>Las mediciones de resistividad del suelo utilizando el Método de Cuatro Pines de Wenner deben realizarse de acuerdo con ASTM G57. El Método de Cuatro Pines usa la fórmula:</p>
                    <p>Resistividad (ohm × cm) = 191.5 × d × R</p>
                    <p>donde</p>
                    <ul>
                        <li>191.5 es una constante que tiene en cuenta la ecuación matemática para la masa del suelo y un factor de conversión para convertir pies a centímetros;</li>
                        <li>d es la distancia en pies entre cualquiera de los pines igualmente espaciados (con todos los pines en línea recta);</li>
                        <li>R es un factor de resistencia de la caída de voltaje a través de los dos pines internos, dividido por el flujo de corriente inducido en la tierra entre los dos pines externos.</li>
                    </ul>
                    <p>La profundidad a la que se insertan los pines en la tierra debe ser pequeña en comparación con el espaciamiento de los pines (ver Figura 26). Las siguientes condiciones deben considerarse en las mediciones de resistividad del suelo de cuatro pines:</p>
                    <ul>
                        <li>todas las estructuras subterráneas deben excluirse de la medición;</li>
                        <li>todos los pines deben estar en línea recta y igualmente espaciados;</li>
                        <li>la profundidad de los pines insertados en el suelo debe ser menor al 4 % del espaciamiento;</li>
                        <li>el medidor de resistividad del suelo debe estar diseñado para excluir cualquier efecto de corrientes CA o CC extrañas.</li>
                    </ul>
                    <p>Otros métodos incluyen el uso de una barra de suelo o una caja de suelo.</p>
                    <p>En casos de tuberías paralelas o en áreas de tuberías que se cruzan, el Método de Cuatro Pines puede no ser aplicable.</p>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_26.png" class="figure-image">
                        <p class="figure-caption">Figura 26—Prueba de Resistividad del Suelo de Cuatro Pines de Wenner</p>
                    </div>
                    
                    <p>Un esquema que ilustra el uso de una barra de suelo se muestra en la Figura 27. La barra de suelo típicamente se inserta a la profundidad en el suelo donde se va a tomar la resistividad. Se utiliza un medidor tipo puente CA para equilibrar y leer la resistividad indicada. Las sugerencias para el uso de la barra de suelo incluyen las siguientes:</p>
                    <ul>
                        <li>uso de una barra de prueba estándar para proporcionar el orificio inicial;</li>
                        <li>evitar la adición de agua durante o después de abrir el orificio;</li>
                        <li>aplicar presión en la barra de suelo después de insertarla en el orificio abierto.</li>
                    </ul>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_27.png" class="figure-image">
                        <p class="figure-caption">Figura 27—Barra de Suelo Utilizada para Mediciones de Resistividad del Suelo</p>
                    </div>
                    
                    <p>Para medir la resistividad de muestras de suelo de orificios de barrena o excavaciones, una caja de suelo sirve como un medio conveniente para obtener resultados precisos. La caja de suelo se usa para determinar la resistividad del suelo de una ubicación específica eliminando el suelo de su ubicación y colocándolo en una caja de suelo. Si la resistividad de la muestra de suelo no va a medirse inmediatamente después de su eliminación, el suelo debe almacenarse en un recipiente que pueda preservar su humedad y evitar su contaminación.</p>
                    
                    <div class="figure-container">
                        <img src="images/api574_figure_28.png" class="figure-image">
                        <p class="figure-caption">Figura 28—Dos Tipos de Cajas de Suelo Utilizadas para Mediciones de Resistividad del Suelo</p>
                    </div>
                    
                    <p>Puntos importantes a considerar al usar una caja de suelo incluyen los siguientes:</p>
                    <ul>
                        <li>evitar la contaminación durante la eliminación, manipulación y almacenamiento de la muestra de suelo;</li>
                        <li>evitar agregar o restar agua;</li>
                        <li>tener que compactar la muestra de suelo a la misma densidad en la caja de suelo que tenía antes de su eliminación del suelo.</li>
                    </ul>
                    <p>Para las pruebas de resistividad del suelo, debe considerarse la profundidad de la tubería al seleccionar el método a utilizar así como la ubicación de las muestras. Las pruebas y evaluación de los resultados deben ser realizadas por personal capacitado y experimentado en pruebas de resistividad del suelo.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.5 Monitoreo de Protección Catódica</h4>
                    <p>Las tuberías enterradas con protección catódica deben monitorearse regularmente para garantizar niveles adecuados de protección. El monitoreo debe incluir la medición y análisis periódicos de los potenciales tubería-suelo por personal capacitado y experimentado en la operación del sistema de protección catódica. Se requiere un monitoreo más frecuente de los componentes críticos de protección catódica, como los rectificadores de corriente impresa, para garantizar un funcionamiento confiable del sistema.</p>
                    <p>Consulte NACE SP0169 para obtener orientación sobre la inspección y el mantenimiento de sistemas de protección catódica para tuberías enterradas.</p>
                </div>
                <div class="subsection">
                    <h4>7.4.8.6 Otros Métodos de Inspección para Tuberías Enterradas</h4>
                    <div class="subsection">
                        <h4>7.4.8.6.1 General</h4>
                        <p>Están disponibles varios métodos de inspección. Algunos métodos pueden indicar la condición externa o de la pared de la tubería, mientras que otros métodos indican solo la condición interna. Los ejemplos son los siguientes.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.2 Inspección Inteligente (Pigging)</h4>
                        <p>Las herramientas de inspección en línea (ILI) comúnmente se conocen como "pigs" inteligentes o "inteligentes". Este método implica el movimiento de un dispositivo (pig) a través de la tubería ya sea mientras está en servicio o después de haber sido retirada del servicio. Hay disponibles muchos dispositivos que emplean diferentes métodos de inspección que utilizan fuga de flujo magnético, UT, óptica, láser, ET y otras técnicas electromagnéticas. Hay herramientas ILI autopropulsadas o de nado libre disponibles que solo requieren un punto de acceso y pueden realizar los exámenes de pérdida de pared con o sin producto/fluido en la línea. Estas herramientas utilizan métodos de inspección ultrasónicos o electromagnéticos para detectar y dimensionar defectos tanto de ID como de OD. Estas herramientas no requieren modificaciones típicas de línea de lanzamiento y recepción; sin embargo, el uso de un umbilical a menudo restringe su rango de inspección. Tenga cuidado con las posibles limitaciones de ILI en tuberías de pequeño diámetro (es decir, 4" y menos) y configuraciones de tuberías.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.3 Cámaras de Video</h4>
                        <p>Están disponibles cámaras de video que pueden insertarse en la tubería. Estas cámaras pueden proporcionar información de inspección visual sobre la condición interna de la línea.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.4 Inspección de Onda Guiada</h4>
                        <p>El UT de onda guiada puede usarse para inspeccionar tuberías enterradas en busca de corrosión interna y externa. Las ondas guiadas se envían axialmente a lo largo de la tubería bajo examen. La pérdida de pared localizada debido a la corrosión puede localizarse analizando las señales de las ondas reflejadas. Las técnicas requieren algo de acceso a la superficie externa para montar los transductores de onda guiada. La distancia que las ondas pueden viajar y proporcionar ecos de amplitud suficiente para el análisis depende de muchos factores, incluyendo el tipo y condición del recubrimiento en la superficie de la tubería, la rugosidad de la superficie debido a la corrosión interna y/o externa, la unión entre la tubería y el hormigón en la interfaz aire-hormigón, la condición del suelo en contacto estrecho con la tubería y los accesorios en la tubería.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.5 Excavación</h4>
                        <p>En muchos casos, el único método de inspección disponible que puede realizarse es desenterrar la tubería. Esto se hace para inspeccionar visualmente la condición externa de la tubería y evaluar su espesor y condición interna (utilizando los métodos discutidos en 7.4.8.2).</p>
                        <p>Debe tenerse cuidado al eliminar el suelo de arriba y alrededor de la tubería para evitar dañar la línea o el recubrimiento de la línea, especialmente si la tubería está en servicio. Las últimas pulgadas de suelo deben eliminarse manualmente para evitar esta posibilidad. Si la excavación es suficientemente profunda, los lados de la zanja deben estar adecuadamente entibados para evitar su colapso, de acuerdo con las regulaciones de OSHA, donde corresponda.</p>
                        <p>Si el recubrimiento o envoltura está deteriorado o dañado, debe eliminarse en esa área para inspeccionar la condición del metal subyacente.</p>
                        <p>Consulte 7.4.3 para la inspección del SAI de tuberías enterradas.</p>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.6 Pruebas de Fuga</h4>
                        <p>Las líneas subterráneas que no pueden inspeccionarse visualmente deben probarse periódicamente en busca de fugas. Hay disponibles varios métodos para lograr este objetivo.</p>
                        <ul>
                            <li><strong>Métodos de caída de presión</strong> implican presurizar la línea a una cantidad deseada, bloquearla y luego eliminar la fuente de presión. Monitorear la presión de la línea durante un período de tiempo proporcionará una indicación de la estanqueidad del sistema. Las pruebas pueden realizarse a una sola presión o múltiples presiones. Las pruebas a múltiples presiones proporcionan un medio para compensar las variaciones de temperatura y pueden permitir tiempos de prueba más cortos en comparación con una prueba de presión única. Para los métodos de caída de presión, la variación de temperatura y el paquete de línea (ej. bolsas de aire en una línea llena de líquido) pueden afectar la interpretación de los resultados. Si se desea, el rendimiento de los métodos de caída de presión puede confirmarse mediante simulación de fugas.</li>
                            <li><strong>Métodos de volumen de entrada/volumen de salida</strong> utilizan medidores de medición volumétrica en cada extremo de la línea. Típicamente, estos dispositivos se instalan permanentemente en situaciones que requieren transferencia de custodia y/o detección de fugas bajo demanda. Un sistema estándar no podría detectar una fuga bajo condiciones estáticas (sin flujo). Si se desea, el rendimiento de los métodos de volumen de entrada/volumen de salida puede determinarse mediante una simulación de fugas.</li>
                            <li><strong>Métodos volumétricos de punto único</strong> son similares a las mediciones de caída de presión que requieren que la línea esté bloqueada para una prueba estática. Se adjunta un cilindro graduado a la línea para medir los cambios de volumen con el tiempo. Las bolsas de aire en una línea llena de líquido y la variación de temperatura pueden afectar los resultados. Nuevamente, el rendimiento de los métodos volumétricos de punto único puede determinarse mediante una simulación de fugas.</li>
                            <li><strong>Un químico marcador (es decir, trazador)</strong> puede agregarse a la línea como método de detección de fugas. Se recogen muestras de gas del suelo cerca de la línea y se prueban en busca de la presencia del químico marcador. La ausencia de cualquier químico marcador en las muestras de gas del suelo indica que la línea no tiene fugas. Generalmente se requieren pruebas complementarias para determinar la velocidad de las sondas de muestra en el suelo y la velocidad a la que el químico marcador viaja a través del relleno. Los trazadores químicos pueden agregarse a una línea llena de líquido o gas. Esta tecnología tiene la capacidad de detectar y ubicar fugas. Las pruebas complementarias son equivalentes a confirmar el rendimiento de la tecnología con simulaciones de fugas.</li>
                            <li><strong>Tecnología de emisión acústica</strong> detecta y localiza fugas por el sonido creado por la fuga. Los sensores deben espaciarse para permitir que el sonido generado por una fuga se detecte en las ubicaciones de los sensores. Los sensores se adjuntan directamente a la tubería, por lo que puede requerir la eliminación de cualquier recubrimiento protector. Debe confirmarse que las condiciones probables de fuga generarán suficiente sonido para ser detectado por los sensores. Dado que la geometría y el relleno afectarán la generación de ruido, las simulaciones de fugas generalizadas pueden no confirmar el rendimiento de la tecnología.</li>
                        </ul>
                    </div>
                    <div class="subsection">
                        <h4>7.4.8.6.7 Técnicas Magnéticas y Electromagnéticas No Intrusivas</h4>
                        <p>Están disponibles técnicas magnéticas y electromagnéticas de gran separación para la inspección de detección de tuberías enterradas para detectar pérdida de pared por corrosión y posiblemente otros defectos dañinos. Estas técnicas se basan en medir el cambio del campo magnético local debido a la presencia de pérdida de pared. La inspección puede realizarse sin excavación. Diferenciar las señales de pérdida de pared de otras anomalías magnéticas, como tuberías adyacentes es un desafío. También se necesitan exámenes de seguimiento por otros métodos para determinar con precisión la profundidad de la pérdida de pared detectada.</p>
                        <p>Los propietarios-operadores deben realizar pruebas de validación y calibración estructuradas de estas tecnologías antes de su aplicación. Esta prueba es crítica, particularmente al aplicar estas técnicas a tuberías subterráneas dentro de un entorno de planta.</p>
                    </div>
                </div>
            </div>
        </div>
    
    <div class="subsection">
        <h4>7.5 Guía de Inspección para Mecanismos de Daño Específicos</h4>
        <div class="subsection">
            <h4>7.5.1 CUI</h4>
            <div class="subsection">
                <h4>7.5.1.1 General</h4>
                <p>Un programa de inspección de tuberías debe prever la inspección externa de los sistemas de tubería aislados. Esto debe incluir una revisión de la integridad del sistema de aislamiento para condiciones que podrían llevar a CUI, así como signos de CUI en curso. API 570 documenta los requisitos de un programa de inspección de CUI. Esta sección proporciona pautas para identificar áreas potenciales de CUI para inspección.</p>
                <p>El CUI ocurre debido a la humedad que se acumula debajo del aislamiento, junto al material de la tubería. Las fuentes de humedad pueden incluir lluvia, fugas de agua, condensación, sistemas de rociado y torres de enfriamiento. Hay dos formas de CUI: corrosión localizada del acero al carbono y ECSCC del acero inoxidable austenítico. Consulte API 571 y API 583 para obtener detalles adicionales sobre los mecanismos de CUI e inspección. Consulte NACE SP0198 para obtener orientación sobre el uso de recubrimientos protectores para mitigar la corrosión bajo aislamiento térmico y materiales resistentes al fuego.</p>
                <p>Esta sección proporciona pautas para identificar áreas potenciales de CUI para inspección. El alcance de un programa de inspección de CUI puede variar dependiendo del clima local. Las ubicaciones marinas en áreas más cálidas pueden requerir un programa muy activo, mientras que las ubicaciones más frescas, secas y continentales pueden no necesitar un programa tan extenso.</p>
            </div>
            <div class="subsection">
                <h4>7.5.1.2 Sistemas de Tubería de Acero al Carbono y Baja Aleación Aislados Susceptibles a CUI</h4>
                <p>El CUI puede ocurrir en sistemas de tubería de acero al carbono y acero al carbono de baja aleación (referidos colectivamente como "acero al carbono" en esta sección) aislados, incluyendo los aislados para protección del personal, que operan entre 10 °F (−12 °C) y 350 °F (175 °C). El CUI es particularmente agresivo donde las temperaturas de operación causan condensación y re-evaporación frecuentes o continuas de la humedad atmosférica. Los sistemas de tubería de acero al carbono que operan por encima de 350 °F (175 °C) generalmente no son susceptibles a CUI, excepto cuando:</p>
                <ul>
                    <li>están en servicio intermitente (servicio cíclico para temperatura);</li>
                    <li>hay ramas muertas y accesorios que sobresalen de las tuberías aisladas y pueden operar dentro del rango de temperatura susceptible a CUI (como se indicó anteriormente).</li>
                </ul>
            </div>
            <div class="subsection">
                <h4>7.5.1.3 Sistemas de Tubería de Acero Inoxidable Austenítico y Dúplex Aislados Susceptibles a ECSCC bajo Aislamiento</h4>
                <p>En los aceros inoxidables austeníticos, el daño por CUI toma la forma de ECSCC. La mayor parte del daño por CUI en los aceros inoxidables austeníticos ocurre a temperaturas del metal entre 140 °F (60 °C) y 350 °F (175 °C), aunque se han reportado excepciones a temperaturas más bajas. Las tuberías de acero inoxidable austenítico que normalmente operan por encima de 500 °F (260 °C) pueden sufrir de ECSCC durante el arranque después de que el aislamiento se moje por pruebas de sistemas de rociado, agua de incendio o lluvia durante el tiempo de inactividad.</p>
                <p>NOTA El ECSCC de los aceros inoxidables dúplex generalmente no ocurre hasta unos 285 °F (140 °C) y a niveles de concentración de cloruro muy altos.</p>
                <p>Los sistemas de tubería de acero inoxidable aún pueden ser vulnerables al daño cuando están en servicio intermitente o en casos donde hay ramas muertas y accesorios que sobresalen de las tuberías aisladas y pueden operar dentro del rango de temperatura susceptible al daño por CUI.</p>
                <p>Se ha observado que para el acero inoxidable austenítico, una envoltura de papel de aluminio es efectiva para proteger la superficie de ECSCC.</p>
            </div>
            <div class="subsection">
                <h4>7.5.1.4 Ubicaciones Típicas en Circuitos de Tubería Susceptibles a CUI</h4>
                <p>Las ubicaciones de sistemas de tubería de acero al carbono y acero inoxidable austenítico/dúplex expuestos o sujetos a ciertas condiciones pueden ser potencialmente más susceptibles a CUI. Estas condiciones incluyen aquellas:</p>
                <ul>
                    <li>expuestas a la neblina de rociado de torres de enfriamiento de agua;</li>
                    <li>expuestas a ventilaciones de vapor;</li>
                    <li>expuestas a sistemas de rociado;</li>
                    <li>expuestas al goteo de condensación desde arriba;</li>
                    <li>expuestas a derrames de proceso o ingreso de humedad o vapores ácidos;</li>
                    <li>sujetas a vibración que tienden a infligir daño a la chaqueta de aislamiento proporcionando una ruta para el ingreso de agua;</li>
                    <li>expuestas a humedad de fugas de rastreo de vapor, especialmente en conexiones de tubería debajo del aislamiento;</li>
                    <li>sin mantenimiento con aislamiento, recubrimientos y/o envolturas deteriorados;</li>
                </ul>
                <p>NOTA Abultamientos o manchas del aislamiento o sistema de chaqueta o bandas faltantes son indicaciones visuales de aislamiento deteriorado (los abultamientos pueden indicar acumulación de productos de corrosión).</p>
                <ul>
                    <li>sujetas a posible daño físico del recubrimiento o aislamiento, exponiendo así la tubería al ambiente.</li>
                </ul>
                <p>Además de las condiciones mencionadas anteriormente, algunas ubicaciones específicas asociadas con el diseño y mantenimiento del sistema de aislamiento pueden ser más susceptibles a CUI. Estas ubicaciones incluyen las siguientes:</p>
                <ul>
                    <li>todas las penetraciones o brechas en los sistemas de chaqueta de aislamiento, como las siguientes:
                        <ul>
                            <li>ramas muertas (ventilaciones, drenajes, etc.);</li>
                            <li>colgadores de tubería y otros soportes;</li>
                            <li>válvulas y accesorios (superficies de aislamiento irregulares);</li>
                            <li>zapatas de tubería atornilladas;</li>
                            <li>penetraciones de tubería de vapor y eléctrica;</li>
                        </ul>
                    </li>
                    <li>terminación del aislamiento en bridas y otros componentes de tubería;</li>
                    <li>juntas de chaqueta de aislamiento ubicadas en la parte superior de tuberías horizontales o chaquetas de aislamiento superpuestas o selladas incorrectamente;</li>
                    <li>terminación del aislamiento en una tubería vertical;</li>
                    <li>calafateo que se ha endurecido, separado o falta;</li>
                    <li>puntos bajos en sistemas de tubería, particularmente aquellos que tienen una brecha conocida en el sistema de aislamiento, incluyendo puntos bajos en tramos largos de tubería no soportados y transiciones verticales a horizontales;</li>
                    <li>bridas, pernos y otros componentes de acero al carbono o baja aleación debajo del aislamiento en sistemas de tubería de alta aleación.</li>
                </ul>
                <p>Debe prestarse atención particular a las ubicaciones donde se han quitado tapones de aislamiento para permitir mediciones de espesor de tubería en tuberías aisladas. Estos tapones deben reemplazarse y sellarse después de actividades de inspección o mantenimiento. Varios tipos de tapones removibles están disponibles comercialmente que permiten inspección e identificación de puntos de inspección para referencia futura.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>7.5.2 Erosión y Corrosión-Erosión</h4>
            <p>La erosión puede definirse como la eliminación del material superficial por la acción de numerosos impactos individuales de partículas sólidas o líquidas o cavitación. Puede caracterizarse por surcos, agujeros redondeados, ondas y valles en un patrón direccional. La erosión generalmente ocurre en áreas de flujo turbulento como en los cambios de dirección en un sistema de tubería o aguas abajo de válvulas de control donde puede tener lugar la vaporización. El daño por erosión generalmente aumenta en corrientes con grandes cantidades de partículas sólidas o líquidas y altas velocidades. Una combinación de corrosión y erosión (corrosión-erosión) resulta en una pérdida de metal significativamente mayor de la que puede esperarse de la corrosión o la erosión por sí solas.</p>
            <p>Este tipo de corrosión ocurre en áreas de alta velocidad y alta turbulencia. Los ejemplos de lugares para inspeccionar incluyen los siguientes:</p>
            <ul>
                <li>aguas abajo de válvulas de control, especialmente donde está ocurriendo parpadeo o cavitación;</li>
                <li>aguas abajo de orificios;</li>
                <li>aguas abajo de descargas de bomba;</li>
                <li>en cualquier punto de cambio de dirección del flujo, como los radios exteriores de los codos;</li>
                <li>aguas abajo de configuraciones de tubería (soldaduras, termopozos, bridas, etc.) que producen turbulencia, particularmente en sistemas sensibles a la velocidad, como los sistemas de sulfuro de amonio y ácido sulfúrico.</li>
            </ul>
            <p>Las áreas sospechosas de tener corrosión-erosión localizada deben inspeccionarse utilizando métodos NDE apropiados que proporcionen datos de espesor sobre un área amplia, como escaneo UT y RT de perfil.</p>
            <p>Consulte API 571 para obtener información adicional sobre erosión y corrosión-erosión.</p>
        </div>
        <div class="subsection">
            <h4>7.5.3 Agrietamiento Ambiental</h4>
            <p>Los materiales de construcción de los sistemas de tubería normalmente se seleccionan para resistir las diversas formas de SCC. Algunos sistemas de tubería pueden ser susceptibles al agrietamiento ambiental debido a condiciones de proceso alteradas, CUI, condensación no anticipada o exposición a sulfuro de hidrógeno húmedo o carbonatos. Los ejemplos de esto incluyen los siguientes:</p>
            <ul>
                <li>ECSCC de aceros inoxidables austeníticos resultante de humedad y cloruros debajo del aislamiento, debajo de depósitos, debajo de juntas o en rendijas (ver API 583); esta es una forma especialmente agresiva de agrietamiento si las condiciones ambientales causan secado y humectación (es decir, los cloruros se concentran); tenga en cuenta que CSCC de aceros inoxidables austeníticos también puede ocurrir internamente donde los cloruros están presentes con agua;</li>
                <li>SCC por ácido tiónico de aceros inoxidables austeníticos y aleaciones sensibilizadas resultante de la exposición a sulfuro/condensación de humedad/oxígeno;</li>
                <li>SCC cáustico (a veces conocido como fragilización cáustica);</li>
                <li>SCC por amina en sistemas de tubería sin alivio de tensiones;</li>
                <li>SCC por carbonato en sistemas alcalinos;</li>
                <li>agrietamiento por sulfuro de hidrógeno húmedo y ampollas de hidrógeno en sistemas que contienen agua agria;</li>
                <li>ampollas de hidrógeno y daño por agrietamiento inducido por hidrógeno.</li>
            </ul>
            <p>NOTA Esto no ha sido un problema tan serio para las tuberías como lo ha sido para los recipientes a presión. Se enumera aquí porque se considera agrietamiento ambiental y puede ocurrir en tuberías aunque no ha sido extenso.</p>
            <p>Consulte API 571 para obtener detalles adicionales sobre los mecanismos de agrietamiento ambiental.</p>
            <p>Una excepción donde este tipo de daño ha sido un problema es la tubería soldada longitudinalmente fabricada a partir de materiales de placa.</p>
            <p>Cuando el inspector sospecha o es advertido de que circuitos específicos pueden ser susceptibles al agrietamiento ambiental, él o ella debe programar inspecciones suplementarias. Dichas inspecciones pueden tomar la forma de NDE superficial (PT o técnica de examen de partículas magnéticas fluorescentes húmedas), UT, o técnica de corriente de Foucault (ET). Donde esté disponible, los tramos sospechosos pueden eliminarse del sistema de tubería y abrirse para examen de la superficie interna.</p>
            <p>Si se detecta agrietamiento ambiental durante la inspección interna de un recipiente a presión y se considera que las tuberías son igualmente susceptibles, el inspector debe designar los tramos de tubería apropiados aguas arriba y aguas abajo del recipiente a presión para una inspección de agrietamiento ambiental.</p>
            <p>Cuando se sospecha la posibilidad de agrietamiento ambiental en circuitos de tubería, debe programarse una inspección de tramos seleccionados antes de una parada programada próxima. Dicha inspección debe proporcionar información útil para pronosticar el mantenimiento de la parada.</p>
        </div>
        <div class="subsection">
            <h4>7.5.4 Corrosión debajo de Revestimientos y Depósitos</h4>
            <p>Si los recubrimientos externos o internos, revestimientos refractarios y revestimientos resistentes a la corrosión están en buenas condiciones y no hay razón para sospechar una condición deteriorada detrás de ellos, generalmente no es necesario eliminarlos para la inspección del sistema de tubería.</p>
            <p>La efectividad de los revestimientos resistentes a la corrosión se reduce considerablemente debido a roturas o agujeros en el revestimiento. Los revestimientos deben inspeccionarse visualmente en busca de separación, roturas, agujeros y ampollas. Si se observa alguna de estas condiciones, puede ser necesario eliminar porciones del revestimiento interno para investigar la efectividad del revestimiento y la condición del metal de la tubería debajo del revestimiento. Alternativamente, UT desde la superficie externa puede usarse para medir el espesor del metal base. Cuando el revestimiento es metálico y está diseñado para estar completamente unido, UT externo también puede usarse para detectar separación, agujeros y ampollas. Cuando se encuentra o causa daño al revestimiento a través de la eliminación para acceso de inspección, el inspector debe anotar el tipo y extensión del daño y proporcionar una recomendación para reparación/reemplazo si es necesario.</p>
            <p>Los revestimientos refractarios utilizados para aislar la pared de la tubería pueden descascararse o agrietarse en servicio, causando puntos calientes que exponen el metal a la oxidación y el agrietamiento por creep. Debe emprenderse un monitoreo periódico de la temperatura mediante visual, infrarrojo y pinturas indicadoras de temperatura en estos tipos de líneas para confirmar la integridad del revestimiento. La corrosión debajo de los revestimientos refractarios puede resultar en separación y abultamiento del refractario. La técnica de examen por microondas (MW) puede examinar el refractario en busca de defectos volumétricos y separación de la superficie del casco. Si se detecta abultamiento o separación del revestimiento refractario, pueden eliminarse porciones del refractario para permitir la inspección de la tubería debajo del refractario. De lo contrario, pueden obtenerse mediciones de espesor utilizando UT o RT de perfil desde la superficie metálica externa. Además, si se identifica daño mecánico externo en la tubería, como una abolladura, esta podría ser una ubicación donde el revestimiento refractario interno también podría haber sido dañado. Cuando se encuentra o causa daño al refractario a través de la eliminación para acceso de inspección, el inspector debe anotar el tipo y extensión del daño y proporcionar una recomendación para reparación/reemplazo si es necesario.</p>
            <p>Donde están presentes depósitos de operación, como coque, en la superficie interna de la tubería, deben emplearse técnicas NDE desde el exterior de la tubería, como RT de perfil, UT y/o ET, para determinar si dichos depósitos tienen corrosión activa debajo de ellos.</p>
        </div>
        <div class="subsection">
            <h4>7.5.5 Agrietamiento por Fatiga</h4>
            <p>El agrietamiento por fatiga de los sistemas de tubería puede resultar de esfuerzos cíclicos excesivos que a menudo están muy por debajo del límite elástico estático del material. Los esfuerzos cíclicos pueden imponerse por presión, medios mecánicos o térmicos y pueden resultar en fatiga de bajo o alto ciclo. El inicio del agrietamiento por fatiga de bajo ciclo a menudo está directamente relacionado con el número de ciclos de calentamiento/enfriamiento experimentados. Por ejemplo:</p>
            <ul>
                <li>los muñones u otros accesorios que se extienden más allá del aislamiento de la tubería pueden actuar como aleta de enfriamiento que establece una situación favorable al agrietamiento por fatiga térmica en la tubería caliente;</li>
                <li>la fatiga térmica también puede ocurrir en puntos de mezcla cuando las corrientes de proceso a diferentes temperaturas de operación se combinan;</li>
                <li>la vibración excesiva del sistema de tuberías (ej. inducida por máquina o flujo) también puede causar daño por fatiga de alto ciclo.</li>
            </ul>
            <p>Consulte API 570—Sección 5.5.6, para los requisitos de vigilancia de tuberías vibrantes, y API 570—Sección 7.8, para los requisitos de diseño asociados con tuberías vibrantes.</p>
            <p>El agrietamiento por fatiga típicamente puede detectarse primero en puntos de alta concentración de esfuerzos, como las conexiones de ramal. Las ubicaciones donde metales con diferentes coeficientes de expansión térmica se unen mediante soldadura pueden ser susceptibles a la fatiga térmica. Los métodos NDE preferidos para detectar el agrietamiento por fatiga incluyen PT, MT y UT de haz angular al inspeccionar desde el OD para agrietamiento de ID. Las ubicaciones sugeridas para UT en codos incluirían las posiciones de 3 en punto y 9 en punto. La técnica de examen por emisión acústica (AE) también puede usarse para detectar la presencia de grietas que son activadas por presiones de prueba o esfuerzos generados durante la prueba. Consulte API 570—Sección 6.6.4 para las consideraciones de fatiga relativas a las conexiones roscadas.</p>
            <p>Es importante para el propietario-operador y el inspector comprender que el agrietamiento por fatiga es probable que cause falla de la tubería antes de la detección con cualquier método NDE. De los ciclos de fatiga requeridos para producir una falla, la gran mayoría se requieren para iniciar el agrietamiento y relativamente pocos ciclos se requieren para propagar la grieta hasta la falla. Como tal, el diseño y la instalación adecuados para prevenir el agrietamiento por fatiga son importantes.</p>
            <p>Consulte API 571 para obtener información adicional sobre fatiga térmica, fatiga mecánica y fatiga inducida por vibración.</p>
        </div>
        <div class="subsection">
            <h4>7.5.6 Agrietamiento por Creep (Fluencia)</h4>
            <p>El daño por creep depende del material de construcción, el tiempo, la temperatura y el esfuerzo. El agrietamiento por creep eventualmente puede ocurrir en condiciones de diseño ya que algunos esfuerzos admisibles del código de tubería están en el rango de creep. El agrietamiento se acelera por la interacción creep/fatiga cuando las condiciones de operación en el rango de creep son cíclicas. Debe prestarse atención particular a las áreas de alta concentración de esfuerzos. Si se encuentran temperaturas excesivas, también pueden producirse cambios en las propiedades mecánicas y microestructurales de los metales, lo que puede debilitar permanentemente el equipo. Un ejemplo de donde se ha experimentado agrietamiento por creep en la industria es en aceros 1-1/4 Cr -1/2 Mo por encima de 900 °F (482 °C).</p>
            <p>Los métodos NDE para detectar el agrietamiento por creep incluyen PT, MT, UT, RT y ET. La medición de campo de corriente alterna (ACFM), la metalografía in situ y la verificación dimensional (es decir, medición del diámetro de la tubería con cinta) son otras prácticas comunes que pueden usarse para la detección. Los métodos de examen volumétrico NDE, incluyendo RT de perfil y UT, pueden usarse para la detección del agrietamiento por creep.</p>
            <p>La AE puede utilizarse para identificar el agrietamiento por creep activo. El examen puede realizarse mientras la tubería está en o fuera de operación. Cuando se realiza el examen, la probabilidad de detectar grietas de creep puede ser una función de la orientación de la grieta. Cualquier tubería examinada fuera de operación requiere un estímulo de presión para activar cualquier daño presente.</p>
            <p>Consulte API 571 para obtener información adicional sobre creep y ruptura por esfuerzo.</p>
        </div>
        <div class="subsection">
            <h4>7.5.7 Fractura Frágil</h4>
            <p>Los aceros al carbono, de baja aleación y otros ferríticos pueden ser susceptibles a falla frágil a o por debajo de la temperatura ambiente. En algunos casos, el efecto refrigerante de líquidos en vaporización como el amoníaco o hidrocarburos de C<sub>2</sub> o C<sub>3</sub> puede enfriar la tubería y promover la fractura frágil en un material que de otro modo no fallaría. La fractura frágil generalmente no es una preocupación con tuberías de pared relativamente delgada. La mayoría de las fracturas frágiles han ocurrido en la primera aplicación de un nivel de esfuerzo particular (es decir, la primera prueba hidrostática o sobrecarga) a menos que se introduzcan defectos críticos en servicio. El potencial de una falla frágil debe considerarse al realizar pruebas de presión o evaluarse más cuidadosamente al probar equipos neumáticamente o al agregar cualquier otra carga adicional. Debe prestarse atención especial a los aceros de baja aleación (especialmente el material 2<sub>1/4</sub>Cr-1Mo) porque pueden ser propensos al revenido frágil y a los aceros inoxidables ferríticos.</p>
            <p>Una grieta que atraviesa la pared resultante de una fractura frágil y que causa una fuga puede detectarse con procedimientos de fuga de helio para la evaluación del equipo para resistencia a la fractura frágil. Alternativamente, el agrietamiento activo en material embritlecido puede detectarse y posiblemente localizarse con AE. Consulte API 571 para obtener información adicional sobre la fractura frágil. API 579-1/ASME FFS-1—Sección 3 proporciona orientación para la evaluación del equipo para resistencia a la fractura frágil.</p>
        </div>
        <div class="subsection">
            <h4>7.5.8 Daño por Congelación</h4>
            <p>A temperaturas bajo cero, el agua y las soluciones acuosas manejadas en sistemas de tubería pueden congelarse y expandirse. Esto puede causar la falla de la tubería porque el metal se contrae contra la solución acuosa en expansión causando un escenario de ruptura. Después de un clima de congelación inesperadamente severo, es importante verificar visualmente si hay daño por congelación en los componentes de tubería expuestos antes de que el sistema se descongele. Si ha ocurrido una ruptura, la fuga puede prevenirse temporalmente por el fluido congelado. Los puntos bajos, patines de goteo y ramas muertas de los sistemas de tubería que contienen agua deben examinarse cuidadosamente en busca de daño.</p>
            <p>Para prevenir el daño por congelación, deben tomarse precauciones para drenar, purgar o aplicar rastreo térmico a los sistemas donde la humedad podría acumularse y congelarse inesperadamente durante excursiones de temperatura subcero severas o repentinas. Una de las ubicaciones más críticas para estas precauciones es la parte superior del asiento de las válvulas de alivio y las válvulas de alivio operadas por piloto cuando podría estar presente humedad. Las tuberías de cola en las válvulas de alivio que descargan a la atmósfera siempre deben tener un drenaje o rastreo térmico adecuados.</p>
        </div>
        <div class="subsection">
            <h4>7.5.9 Mecanismos de Daño en Materiales No Metálicos</h4>
            <p>En muchas circunstancias, la elección del PRP (Plástico Reforzado con Fibra) se basa en su resistencia inherente a los mecanismos de daño, como la corrosión. Sin embargo, ningún material es totalmente resistente, por lo que existe un potencial de daño en servicio. OLF 055 ha compilado una revisión extensa del tema y ha producido un marco que puede usarse en evaluaciones de riesgo y en la evaluación de mecanismos de daño.</p>
            <p>Los mecanismos de daño típicos en servicio encontrados en sistemas de tubería no metálicos de PRP se muestran en la Tabla 3.</p>
            <div class="table-container">
            <table class="api-table">
                    <caption>Tabla 3—Mecanismos de Daño Asociados con Tuberías No Metálicas</caption>
                    <thead>
                    <tr>
                        <th>Daño</th>
                        <th>Causa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Defectos originados por pobre construcción/diseño</td>
                        <td>Espesor inadecuado en el diseño cuando la tubería está enterrada demasiado profunda. Montaje deficiente de juntas.</td>
                    </tr>
                    <tr>
                        <td>Erosión</td>
                        <td>Las altas velocidades de flujo y el impacto de partículas pueden causar erosión en los cambios de dirección del flujo y restricciones.</td>
                    </tr>
                    <tr>
                        <td>Grietas en bridas</td>
                        <td>Juntas atornilladas sobreesforzadas. Cargas impuestas altas por acumulación de depósitos de corrosión.</td>
                    </tr>
                    <tr>
                        <td>Descascarillamiento (Chalking)</td>
                        <p>Daño por UV cuando el material PRP está expuesto a la radiación solar sin el uso de una barrera de luz UV externa.</p>
                    </tr>
                    <tr>
                        <td>Envejecimiento del material</td>
                        <td>Descomposición de la resina o la resistencia de la fibra durante períodos prolongados de tiempo. La descomposición puede acelerarse por la exposición a algunos productos químicos, especialmente álcalis fuertes.</td>
                    </tr>
                    <tr>
                        <td>Deformación</td>
                        <td>Cambio de dimensiones debido a la exposición a largo plazo al esfuerzo—a menudo descrito como creep.</td>
                    </tr>
                    <tr>
                        <td>Picadura/orificio de alfiler</td>
                        <td>Pequeños cráteres en la superficie del laminado por llenado incompleto de resina.</td>
                    </tr>
                    <tr>
                        <td>Ablandamiento</td>
                        <td>Reducción de dureza asociada con la entrada de humedad cuando la resina tiene exceso de vacíos.</td>
                    </tr>
                    <tr>
                        <td>Creep (Fluencia)</td>
                        <td>Deflexión permanente del material bajo esfuerzo y temperatura a largo plazo. Las propiedades de creep dependen de las propiedades de la resina.</td>
                    </tr>
                    <tr>
                        <td>Grieta estrellada (Star craze)</td>
                        <td>Impacto agudo en la superficie externa.</td>
                    </tr>
                    <tr>
                        <td>Ampollas</td>
                        <td>Permeación del fluido de servicio en el laminado (común en servicio de ácido clorhídrico).</td>
                    </tr>
                    <tr>
                        <td>Grieta en revestimiento/grieta de lodo (Liner cracking/mud cracking)</td>
                        <td>Degradación química, choque térmico o excursiones de temperatura.</td>
                    </tr>
                </tbody>
            </table>
    </div>
            
            <p>El Proyecto MTI 129-99 es una buena guía para identificar algunos de estos mecanismos de falla.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>7.6 Revisión y Actualización de Planes de Inspección (Contenido Futuro)</h4>
        <p>Esta sección está reservada para contenido futuro.</p>
    </div>
    <div class="subsection">
        <h4>7.7 IOWs (Límites de Operación de Integridad)</h4>
        <p>El uso de IOWs bien definidos, comunicados y controlados adecuadamente para parámetros clave del proceso (tanto físicos como químicos) que podrían afectar la integridad de las tuberías si no se controlan adecuadamente refuerza los planes de inspección. Los ejemplos de los parámetros del proceso incluyen temperaturas, presiones, velocidades del fluido, pH, tasas de flujo, tasas de inyección de químicos o agua, niveles de constituyentes corrosivos, composición química, etc. Los parámetros clave del proceso para IOWs que contienen límites superiores e inferiores pueden establecerse, según sea necesario, y las desviaciones fuera de estos límites deben llevarse a la atención del personal de inspección/ingeniería. Después de revisar estas desviaciones, puede implementarse un nuevo o ajustado plan de inspección o monitoreo, si es necesario. La revisión también puede requerir una recomendación para reparación/reemplazo debido a restricciones del ciclo de vida o daño acumulado esperado. Debe prestarse atención particular al monitoreo de los IOWs durante los arranques, paradas y alteraciones significativas del proceso.</p>
        <p>Consulte API 584 para obtener más información sobre los IOWs.</p>
    </div>
    <div class="subsection">
        <h4>7.8 Inspección de Nueva Fabricación</h4>
        <div class="subsection">
            <h4>7.8.1 Nueva Fabricación</h4>
            <p>La nueva fabricación de tuberías debe cumplir con los principios de ASME B31.3, ASME B31.1 o el estándar de fabricación de tuberías equivalente publicado por organizaciones de desarrollo de estándares.</p>
            <p>La inspección de nueva fabricación puede incluir las siguientes actividades: obtener espesores iniciales de la pared de la tubería en CMLs designados; inspección en busca de grietas; inspección de las superficies de asiento de juntas de bridas, válvulas y juntas; inspección del desalineamiento de las tuberías; inspección de soldaduras; y pruebas de presión.</p>
            <p>Los sistemas de conexión existentes pueden requerir verificaciones para determinar si es necesaria una reclasificación para cumplir con las condiciones especificadas.</p>
            <p>El alcance de la inspección durante la fabricación e instalación depende en gran medida de la severidad del servicio y la calidad de la mano de obra, y debe ser parte del plan de prueba de inspección.</p>
            <p>El examen de soldaduras mediante RT u otras técnicas especiales generalmente se rige por el código de fabricación de construcción. Se verifica un número representativo de soldaduras para calidad y también puede implicar pruebas de dureza de la soldadura y la zona afectada por el calor. PT o MT pueden revelar grietas y defectos superficiales. Se pueden utilizar técnicas similares para verificar defectos en fundiciones y superficies mecanizadas, como las caras de las juntas.</p>
        </div>
        <div class="subsection">
            <h4>7.8.2 Verificación de Materiales</h4>
            <p>Tanto los materiales como la fabricación deben verificarse para su conformidad con los códigos y especificaciones que son apropiados para la planta. Algunos artículos de tubería, como los utilizados en la generación de vapor, pueden estar sujetos a requisitos regulatorios adicionales. Aunque las tuberías, válvulas y accesorios deben especificarse en detalle cuando se realizan pedidos para nueva construcción, debe haber un medio positivo de identificar los materiales instalados en los sistemas de tubería previstos, incluyendo los metales de aporte de soldadura. Deben realizarse verificaciones utilizando kits de prueba de materiales u otros medios de identificación positivos, como espectrómetros de fluorescencia de rayos X portátiles o espectrómetros de emisión óptica portátiles. Además, se pueden obtener los datos de materiales y pruebas del fabricante para su revisión, particularmente cuando se especifican requisitos de calidad especiales.</p>
            <p>La selección de materiales de tubería debe basarse en las condiciones del servicio y la experiencia con tuberías en el mismo o similar servicio. El riesgo asociado con la sustitución de materiales incorrectos debe determinar el alcance de la PMI de nueva fabricación, reparaciones o alteraciones.</p>
            <p>Consulte API 578 para obtener orientación adicional sobre la verificación de materiales.</p>
        </div>
        <div class="subsection">
            <h4>7.8.3 Desviaciones</h4>
            <p>Las excepciones a las especificaciones o estándares para materiales, tolerancias o mano de obra generalmente se evalúan en función de sus efectos en factores como seguridad, resistencia, resistencia a la corrosión y aptitud para el servicio. Pueden requerirse revisiones especiales para determinar si los artículos de tubería se desvían en un grado que necesite rechazo y/o reparaciones. El análisis de riesgos puede ser útil en estas revisiones. Cualquier excepción que haya sido aceptada debe registrarse e identificarse adecuadamente para referencia futura.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>7.9 Inspección de Tuberías Nuevamente Puestas en Servicio (Contenido Futuro)</h4>
        <p>Esta sección está reservada para contenido futuro.</p>
    </div>
    `
});