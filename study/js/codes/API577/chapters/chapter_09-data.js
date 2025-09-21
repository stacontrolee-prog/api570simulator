// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 9 para API 577
registerChapter('API577', {
    id: 9,
    title: "Welding Inspection",
    titleEs: "Inspección de Soldadura",
    content: `<h2>9 Welding Inspection</h2>
    <h3>9.1 General</h3>
    <p>Weld inspection is a critical part of an overall weld quality assurance program. Welding inspection includes much more than just the NDE of a partially completed or completed weld. Important issues prior to welding include review of codes, standards, specifications, design, cleaning procedures, welding procedures, and welder qualifications.</p>
    <p>Welding inspection activities can be separated into three primary stages corresponding to the phase of the welding work process. Inspectors should perform specific tasks prior to welding, during welding, and upon completion of welding. Codes, standards, and specifications will dictate the amount of inspection that is to be performed. Along with performing the required inspections, complete and accurate documentation shall be generated. In almost every case, the documentation alone will serve as proof that the required inspections were performed in accordance with codes, standards, specifications, and regulatory requirements.</p>
    
    <h3>9.2 Tasks Prior to Welding</h3>
    <p>The importance of tasks in the planning and weld preparation stage should not be understated. Many welding problems can be avoided during this stage when it is easier to make changes and corrections, rather than during or after the welding is in progress or has been completed. Such tasks may include the following.</p>
    
    <h4>9.2.1 Drawings, Codes, and Standards</h4>
    <p>Review applicable drawings along with standards, codes, internal specifications, and all welding documentation, including the WPS, PQR, and WPQ, in order to understand the requirements for the weldment and identify any inconsistencies.</p>
    
    <h4>9.2.1.1 Quality Control Items to Assess</h4>
    <p>Items that should be reviewed in drawings, codes, and standards include the following.</p>
    <ul>
        <li>Welding symbols and weld sizes are clearly specified (see Annex A). Note that welding symbols are often not included in plans for in-service welding and repairs.</li>
        <li>Weld joint designs and dimensions are clearly specified (see Annex A).</li>
        <li>Dimensions are detailed—the inspector may need to seek help from others (e.g., welding engineer) to determine potential for distortion.</li>
        <li>Welding consumables are specified.</li>
        <li>Proper handling of consumables, if any, is identified.</li>
        <li>Base material requirements are specified (such as the use of impact tested materials where notch ductility is a requirement in low-temperature service).</li>
        <li>Mechanical properties and required testing are identified on the PQR.</li>
        <li>Weather protection and wind-break requirements are defined in the referencing code or standard.</li>
        <li>Preheat requirements and acceptable preheat methods are defined.</li>
        <li>PWHT requirements and acceptable PWHT methods are defined.</li>
        <li>Inspection hold-points and NDE requirements are defined.</li>
        <li>Additional requirements, such as production weld coupons, are clearly specified.</li>
        <li>Pressure testing requirements, if any, are clearly specified.</li>
        <li>Appropriate type/degree of NDE is specified.</li>
        <li>WPS and corresponding PQR for essential, nonessential, and, if applicable, supplementary variables have been reviewed and addressed.</li>
        <li>WPQ has been reviewed to ensure proper testing was performed to allow the welder to produce a production weld according to the relevant WPS.</li>
    </ul>
    
    <h4>9.2.2 Welding Requirements</h4>
    <p>Review requirements for the welding personnel involved with executing the work, such as the welding organization and inspection organization.</p>
    
    <h4>9.2.2.1 Quality Control Items to Assess</h4>
    <p>Welding requirement quality control items that should be reviewed are as follows.</p>
    <ul>
        <li>Competency of welding organization to perform welding activities in accordance with codes, standards, and specifications.</li>
        <li>Competency of inspection organization to perform specified inspection tasks.</li>
        <li>Competency of welding organization to perform welder/welding operator qualifications.</li>
    </ul>
    
    <h4>9.2.3 Procedures and Qualification Records</h4>
    <p>Review the WPS(s), PQR(s), and WPQ(s) for the welding process to ensure they are acceptable to code/specification and are applicable to the work to be performed.</p>
    
    <h4>9.2.3.1 Quality Control Items to Assess</h4>
    <p>Welding procedure and qualification records that should be reviewed include the following.</p>
    <ul>
        <li>WPS(s) and supporting PQR(s), including those developed for making repairs, are properly qualified and meet applicable codes, standards, and specifications for the work.</li>
        <li>WPQ(s) meet requirements for the WPS.</li>
    </ul>
    
    <h4>9.2.4 NDE Information</h4>
    <p>Confirm that the NDE examiner(s), NDE procedure(s), and NDE equipment of the inspection organization are acceptable for the work.</p>
    
    <h4>9.2.4.1 Quality Control Items to Assess</h4>
    <p>NDE information that should be reviewed includes the following.</p>
    <ul>
        <li>NDE examiners are properly certified for the NDE technique and their certifications are current (see Section 4.6).</li>
        <li>NDE procedures are current and accurate.</li>
        <li>Calibration of NDE equipment is current.</li>
        <li>NDE procedures and techniques specified are appropriate, and capable of producing the specified acceptance/rejection criteria.</li>
    </ul>
    
    <h4>9.2.5 Heat Treatment and Pressure Testing</h4>
    <p>Confirm heat treatment and pressure testing procedures and associated equipment are acceptable.</p>
    
    <h4>9.2.5.1 Quality Control Items to Assess</h4>
    <p>Heat treatment and pressure testing procedures that should be reviewed include the following.</p>
    <ul>
        <li>Heat treatment procedure is acceptable and matches the requirements shown on the PQR, reviewed, and acceptable;</li>
        <li>Pressure testing procedures detail test requirements, are reviewed, and are acceptable.</li>
        <li>PWHT equipment calibration is current.</li>
        <li>Pressure testing equipment and gauges are calibrated and meet appropriate test requirements.</li>
    </ul>
    
    <h4>9.2.6 Materials</h4>
    <p>Ensure all filler materials, base materials, and backing ring materials are properly marked and identified, and, if required, ensure completion of PMI at point of installation to verify the material composition.</p>
    
    <h4>9.2.6.1 Quality Control Items to Assess</h4>
    <p>Details that should be reviewed on materials used during welding include the following.</p>
    <ul>
        <li>Material test certifications are available and items properly marked (including backup ring if used).</li>
        <li>Electrode marking, bare wire flag tags, identification on spools of wire, etc., are as specified.</li>
        <li>Filler material markings are traceable to a filler material certification.</li>
        <li>Base material markings are traceable to a material certification.</li>
        <li>Recording of filler and base material traceability information is performed.</li>
        <li>Base material stampings are low stress and not detrimental to the component.</li>
        <li>Paint striping (or other) color code is in accordance with the specification and correct for the material of construction when used.</li>
        <li>PMI records supplement the material traceability and confirm the material of construction.</li>
    </ul>
    
    <h4>9.2.7 Weld Preparation</h4>
    <p>Confirm weld preparation, joint fit-up, and dimensions are appropriate to the relevant design and welding procedure.</p>
    
    <h4>9.2.7.1 Quality Control Items to Assess</h4>
    <p>Details related to weld preparation that should be reviewed include the following.</p>
    <ul>
        <li>Weld preparation surfaces are free of contaminants and base metal defects such as laminations and cracks.</li>
        <li>Preheat, as specified by the referencing code, specification, or WPS if required, is applied for thermal cutting and welding process.</li>
        <li>Hydrogen bake-out, as specified, is performed to approved procedure.</li>
        <li>Weld joint is free from oxide and sulfide scales and hydrocarbon residue.</li>
        <li>Weld joint type, bevel angle, root face, and root opening are per the appropriate welding procedure.</li>
        <li>Alignment is acceptable to project requirements.</li>
        <li>Piping socket welds have proper gap.</li>
    </ul>
    
    <h4>9.2.8 Welding Consumables</h4>
    <p>Confirm electrode and filler material are identified and segregated as required, and fluxes and inert gases are identified, as specified, and acceptable. Confirm storage ovens for welding consumables are provided with a visible temperature indication and can operate with automatic heat control.</p>
    
    <h4>9.2.8.1 Quality Control Items to Assess</h4>
    <p>Details related to welding consumables that should be reviewed include the following.</p>
    <ul>
        <li>Filler material type and size are correct per procedure.</li>
        <li>Filler materials are being properly handled and stored (see Section 7.7).</li>
        <li>Filler materials are clean and free of contaminants.</li>
        <li>Coating on coated electrodes is neither damaged nor wet.</li>
        <li>Flux is appropriate for the welding process and being properly handled.</li>
        <li>Inert gases, if required, are appropriate for shielding and backing.</li>
        <li>Gas composition is per the appropriate welding procedure and meets purity requirements.</li>
        <li>Shielding gas and purging manifold systems are periodically bled to prevent backfilling with air.</li>
        <li>Filler material is properly identified as an alloy and segregated from other welding process areas as necessary.</li>
    </ul>
    
    <h3>9.3 Tasks During Welding Operations</h3>
    <p>Welding inspection during welding operations should include audit parameters to verify the welding is performed to the procedures. Such tasks may include the following.</p>
    
    <h4>9.3.1 Quality Assurance</h4>
    <p>Establish a quality assurance and quality control audit procedure with the welding organization.</p>
    
    <h4>9.3.1.1 Quality Control Items to Assess</h4>
    <p>Details on welding quality assurance and quality control audit procedures that should be reviewed include the following.</p>
    <ul>
        <li>Welder is responsible for quality craftsmanship of weldments.</li>
        <li>Welder has been tested and certified to the procedure being used.</li>
        <li>Welder has received any special training, and mock-up weldments have been performed if required.</li>
        <li>Welder and appropriate quality control personnel understand the inspection hold-points.</li>
        <li>Welder is responsible for welding per the WPS and has ready access to the approved version before and during welding.</li>
        <li>Reference Annex B.</li>
    </ul>
    
    <h4>9.3.2 Welding Parameters and Techniques</h4>
    <p>Confirm welding parameters and techniques are listed in the WPS and WPQ.</p>
    
    <h4>9.3.2.1 Quality Control Items to Assess</h4>
    <p>Details related to welding parameters and welding technique that should be reviewed include the following:</p>
    <ul>
        <li>essential variables are being met during welding;</li>
        <li>filler material, fluxes, and inert gas composition/flow rate as specified in the WPS;</li>
        <li>purge technique, flow rate, O2 analysis, etc.;</li>
        <li>equipment settings such as amps, volts, and wire feed speed or rate;</li>
        <li>travel speed (the primary element in determining heat input);</li>
        <li>heat input (where appropriate);</li>
        <li>supplementary essential variables (as required) are being met during welding;</li>
        <li>preheating during tack welding and tack welds removed (if required);</li>
        <li>preheat and interpass temperatures;</li>
        <li>NOTE The maximum interpass temperature should be specified for austenitic stainless steels, duplex stainless steels, and nonferrous alloys (e.g. type-300 stainless steels). The maximum interpass temperature should also be specified for carbon/low-alloy steels that require impact testing.</li>
        <li>mock-up weldment that simulates the production weld joint, meets requirements of the welding engineer, and is used to demonstrate welder capability or weld procedure parameters as required.</li>
    </ul>
    
    <h4>9.3.3 Weldment Examination</h4>
    <p>Complete physical checks, visual examination, and in-process NDE.</p>
    
    <h4>9.3.3.1 Quality Control Items to Assess</h4>
    <p>Details related to examination of the weldment that should be reviewed include the following.</p>
    <ul>
        <li>Tack welds to be incorporated in the weld are tied in to the root and free of defects.</li>
        <li>Weld root has complete penetration (determined by NDE).</li>
        <li>Cleaning between weld passes and of back-gouged surfaces is acceptable and completed as specified on WPS.</li>
        <li>Additional NDE that may be required between weld passes and on back-gouged surfaces meets the appropriate acceptance criteria.</li>
        <li>In-process rework, noted through visual inspection, is completed and defect removal is accomplished.</li>
        <li>In-process ferrite measurement, if required, is performed and recorded.</li>
        <li>Final weld reinforcement and fillet weld size meets work specifications and drawings.</li>
        <li>All additional welds are identified on the "as-built" drawing weld map to account for any additional required NDE.</li>
    </ul>
    
    <h3>9.4 Tasks Upon Completion of Welding</h3>
    <p>Final tasks upon completion of the weldment and work should include those that ensure final weld quality before placing the weldment in service.</p>
    
    <h4>9.4.1 Appearance and Finish</h4>
    <p>Complete visual inspection of completed weldment for obvious defects such as undercut, cold lap, porosity, etc., to ensure the weldment complies with the owner–user specification.</p>
    
    <h4>9.4.1.1 Quality Control Items to Assess</h4>
    <p>Details related to weld appearance and completion that should be reviewed include the following.</p>
    <ul>
        <li>Size, length, and location of all welds conform to the drawings/specifications/code.</li>
        <li>Temporary attachments and attachment welds are removed, blended with the base metal, and any required NDE is completed.</li>
        <li>Required NDE is completed and discontinuities reviewed against acceptance criteria per the referencing code or standard.</li>
        <li>Material verification completion PMI conducted on the weld(s), base material, fittings, and valve components during prefabrication and at the point of installation, if required by the specification.</li>
        <li>Welder stamping/marking of welds confirmed.</li>
        <li>Field hardness check is performed.</li>
    </ul>
    
    <h4>9.4.2 NDE Review</h4>
    <p>Verify NDE is performed at selected locations and review examiner's findings to ensure compliance with code/specification requirements.</p>
    
    <h4>9.4.2.1 Quality Control Items to Assess</h4>
    <p>Details related to NDE that should be reviewed include the following.</p>
    <ul>
        <li>Specified locations are examined.</li>
        <li>Specified number of examinations are completed.</li>
        <li>NDE is performed after final PWHT.</li>
        <li>Representation of work of each welder is included in random examination techniques as specified in the construction code or standard.</li>
        <li>Radiographic quality is in accordance with the requirements listed in ASME Section V, Article 2, Non Destructive Examination, and inspector is in agreement with examiner's interpretations and findings.</li>
        <li>Document that all NDE and associated tables have been correctly executed and documented.</li>
        <li>Check joints for delayed cracking of thick sections, especially highly constrained joints, joints of high strength materials, and services having a potential for delayed cracking.</li>
    </ul>
    
    <h4>9.4.3 Postweld Heat Treatment</h4>
    <p>Verify PWHT is reviewed and accepted to be in accordance with the specified procedure.</p>
    
    <h4>9.4.3.1 Quality Control Items to Assess</h4>
    <p>Details related to PWHT that should be reviewed include the following.</p>
    <p>Before the PWHT begins:</p>
    <ol>
        <li>paint marking and other detrimental contamination removed;</li>
        <li>temporary attachments removed;</li>
        <li>machined surfaces protected from oxidation;</li>
        <li>equipment internals, such as valve internals, removed to prevent damage;</li>
        <li>equipment adequately supported to prevent distortion;</li>
        <li>thermocouples fastened properly;</li>
        <li>thermocouples adequately monitor the different temperature zones and thickest/thinnest parts in the fabrication;</li>
        <li>temperature monitoring system calibrated;</li>
        <li>local heating bandwidth is adequate;</li>
        <li>insulation is applied to the component where required for local heating.</li>
    </ol>
    <p>After PWHT is completed:</p>
    <ol>
        <li>temperature and hold time are per the PWHT procedure;</li>
        <li>heating rate and cooling rate are per the PWHT procedure;</li>
        <li>hardness indicates an acceptable heat treatment.</li>
    </ol>
    
    <h4>9.4.4 Pressure Testing</h4>
    <p>Verify pressure test is performed, reviewed, and accepted, and is in accordance with the referencing procedure.</p>
    
    <h4>9.4.4.1 Quality Control Items to Assess</h4>
    <p>Details related to pressure testing that should be reviewed include the following.</p>
    <ul>
        <li>Pressure meets test specification.</li>
        <li>Test duration is as specified.</li>
        <li>Metal temperature of component meets minimum and maximum requirements.</li>
        <li>Pressure drop or decay is acceptable per procedure.</li>
        <li>Visual examination does not reveal leakage or material defects.</li>
        <li>All welds and components are accessible for visual inspection and not covered with paint, insulation, or other matter.</li>
    </ul>
    
    <h4>9.4.5 Documentation Audit</h4>
    <p>Perform a final audit of the inspection package to identify inaccuracies and incomplete information.</p>
    
    <h4>9.4.5.1 Quality Control Items to Assess</h4>
    <p>Details related to the inspection package that should be reviewed include the following.</p>
    <ul>
        <li>All verifications in the quality plan were properly executed.</li>
        <li>Inspection reports are complete, accepted, and signed by the responsible parties.</li>
        <li>Inspection reports and NDE examiner's interpretations and findings are accurate.</li>
        <li>All documentation is retained as required by the referencing code and company specifications.</li>
    </ul>
    
    <h3>9.5 Nonconformances and Defects</h3>
    <h4>9.5.1 General</h4>
    <p>At any time during the welding inspection, if defects or nonconformances to the referencing code, standard, or specification are identified, they should be brought to the attention of those responsible for the work and corrected before welding proceeds further. Defects should be completely removed and reinspected following the tasks/methods outlined in this section until the weld is found to be acceptable. Corrective action for a nonconformance depends upon the nature of the nonconformance and its impact on the properties of the weldment. Corrective action may include reworking the weld. See Section 8.1 for common types of discontinuities or flaws that can lead to defects or nonconformances.</p>
    
    <h4>9.5.2 Repair Welds</h4>
    <p>When inspection identifies a rejectable defect, the inspector should mark the area for repair, remove the defect, verify defect removal (typically using PT or MT), and all necessary repair welding is performed. Repair welding should be performed according to a weld repair procedure accepted by the inspector or engineer. After the repair, the weld should be reinspected, using the same method(s) that initially identified the defect(s). If the inspection indicates that the repair is acceptable, no further action is needed, and the equipment/piping may be placed back into service. If the inspection indicates that the defect was not removed or that a new defect is present, the welder and inspector (and welding engineer, if applicable) should evaluate the reason for the nonconformance of the weld repair in order to make appropriate changes before a second repair is performed.</p>
    <p>There are many factors that should be evaluated when determining the number of times a welded joint can successively be repaired before a complete cut-out of the weld is required. Such factors include, but are not limited to, weld application, base metal material and thickness, heat treatment, complexity of the weld configuration/position (e.g. furnace tubes or boiler tubes), and size of the weld. The welding engineer or inspector should be notified when a weld has failed a weld quality test more than two times to help determine the cause(s) of the defect(s) and the appropriate path forward.</p>
    
    <h3>9.6 NDE Examiner Certification</h3>
    <h4>9.6.1 Referencing Codes or Standards</h4>
    <p>The referencing codes or standards may require the examiner to be qualified in accordance with a specific code and certified as meeting the requirements. Typically, weld construction standards such as ASME for pressure vessels or piping, and API 510 for in-service pressure vessel examination or API 570 for in-service piping examination, refer to certification of qualification by third parties, for example:</p>
    <ul>
        <li>ASNT SNT-TC-1A;</li>
        <li>ANSI/ASNT CP-189.</li>
    </ul>
    <p>These references provide the employer guidelines (SNT-TC-1A) or standards (CP-189) for the certification of NDE inspection personnel. They also require the employer to develop and establish a written practice or procedure that details the employer's requirements for the qualification and certification of inspection personnel. It includes the training and experience prerequisites prior to certification and recertification requirements. A certification scheme in accordance with ISO 9712 may be specified for domestic or international work. ISO 9712 outlines certification guidelines generally organized under a national scheme and vested in the individual. In the United States, the scheme is managed by ASNT as the ASNT Central Certification Program (ACCP). Although an inspection company's written practice may allow the employer to appoint a Level III, the owner–user may prefer that, at least for initial certification, a Level III Examiner be certified by examination.</p>
    
    <h4>9.6.2 Owner-User Qualification</h4>
    <p>If the referencing code or specification does not indicate a specific qualification standard, qualification may involve demonstration of competency by the personnel performing the examination or other requirements specified by the owner–user. The API in-service inspection documents go further than this and for a number of specific circumstances, such as fitness-for-service (FFS) and welds not subject to hydrotest, may require the use of personnel who have passed a performance test such as the API Qualification of Ultrasonic Testing Examiners (QUTE) or owner–user accepted equivalent. A new document is being developed by API to further define the QUTE program, including some definition of "equivalence."</p>
    <p>In order to successfully complete the examination, candidates should detect, characterize, and locate, for example, at least 80 % of the known flaws in the weld sections they have been requested to examine. Candidates who misinterpret or miss more than 20 % of known imperfections (e.g. misinterpreting a geometric reflector as a flaw) shall be deemed to have failed the test. The owner–user may choose a different pass-point.</p>
    
    <h4>9.6.2.1 Candidate Requirements</h4>
    <p>Prior to testing, candidates should be advised that they will be given a pass/fail evaluation upon conclusion of the test and will not be provided with specific knowledge regarding the type of flaw, if any, in each weld. No other data should be made available in order to ensure the confidentiality of data relating to flaw, numbers, locations, types, and sizes.</p>
    
    <h4>9.6.2.2 Term</h4>
    <p>The approval test should typically be valid for a period of three years, after which the candidate should be retested. If at any time the performance of an operator is called into question, the operator may be retested at the owner–user's discretion.</p>
    
    <h4>9.6.2.3 Approval</h4>
    <p>Approval of any candidate under this specification is restricted to the specific owner–user administering the test, and it should be utilized for compliance with the referenced paragraphs in API 510 and API 570 and should not be deemed as an API certification or endorsement in any form.</p>
    
    <h3>9.7 Weld Inspection Data Recording</h3>
    <h4>9.7.1 Reporting Details</h4>
    <p>Results of the weld inspection should be completely and accurately documented. The inspection report in many cases becomes a permanent record to be maintained and referenced for the life of the weld or part being inspected.</p>
    
    <h4>9.7.1.1 General Information</h4>
    <p>General information reported for weld inspections should include:</p>
    <ul>
        <li>customer or project;</li>
        <li>contract number or site;</li>
        <li>date of inspection;</li>
        <li>component/system;</li>
        <li>subassembly/description;</li>
        <li>weld identification;</li>
        <li>weld type/material/thickness.</li>
    </ul>
    
    <h4>9.7.1.2 Inspection Information</h4>
    <p>Inspection information reported on weld inspections should include:</p>
    <ul>
        <li>date of inspection;</li>
        <li>procedure number;</li>
        <li>examiner;</li>
        <li>examiner certification information;</li>
        <li>inspection method;</li>
        <li>visual aids and other equipment used;</li>
        <li>weld reference datum point.</li>
    </ul>
    
    <h4>9.7.1.3 Inspection Results</h4>
    <p>Weld inspection results typically reported should include:</p>
    <ul>
        <li>inspection sheet number;</li>
        <li>inspection limitations;</li>
        <li>a description of all recordable and reportable indications;</li>
        <li>for each recordable indication:
            <ol>
                <li>indication number;</li>
                <li>location of indication (from both weld reference datum and centerline);</li>
                <li>upstream or downstream (clockwise or counterclockwise) from an established reference point;</li>
                <li>size and orientation of indication;</li>
                <li>type of indication (linear or rounded);</li>
                <li>acceptability per the acceptance standards of the referencing code;</li>
                <li>remarks or notes;</li>
                <li>a sketch of indication;</li>
                <li>reviewer and level of certification;</li>
                <li>reviewer's comments.</li>
            </ol>
        </li>
    </ul>
    
    <h4>9.7.2 Terminology</h4>
    <p>When reporting the results of an inspection, it is important to use standard terminology. Examples of standard terminology are shown in Table 8, Table 9, and Table 10.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 8—Conditions That May Exist in a Material or Product</caption>
            <thead>
                <tr>
                    <th>Definition</th>
                    <th>Description or Comment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A-1 Indication: A condition of being imperfect; a departure of a quality characteristic from its intended condition.</td>
                    <td>No inherent or implied association with lack of conformance with specification requirements or with lack of fitness for purpose, i.e. indication may or may not be rejectable.</td>
                </tr>
                <tr>
                    <td>A-2 Discontinuity: An interruption of the typical structure of a material, such as a lack of homogeneity in its mechanical, metallurgical, or physical characteristics. A discontinuity is not necessarily a defect.</td>
                    <td>No inherent or applied association with lack of conformance with specification requirements or with lack of fitness for purpose, i.e. imperfection may or may not be rejectable.<br>An unintentional discontinuity is also an imperfection. Cracks, inclusions, and porosity are examples of unintentional discontinuities that are also imperfections.<br>Intentional discontinuities may be present in some material or products because of intentional changes in configuration; these are not imperfections and are not expected to be evaluated as such.</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 9—Results of Nondestructive Examination</caption>
            <thead>
                <tr>
                    <th>Definition</th>
                    <th>Description or Comment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>B-1 Indication: The response or evidence from the application of a nondestructive examination.</td>
                    <td>When the nature or magnitude of the indication suggests that the cause is an imperfection or discontinuity, evaluation is required.</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 10—Results of Application of Acceptance/Rejection Criteria</caption>
            <thead>
                <tr>
                    <th>Definition</th>
                    <th>Description or Comment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>C-1 Flaw: An imperfection or unintentional discontinuity, which is detectable by a nondestructive examination.</td>
                    <td>No inherent or implied association with lack of conformance with specification requirements or lack of fitness for purpose, i.e. a flaw may or may not be rejectable.</td>
                </tr>
                <tr>
                    <td>C-2 Defect: A flaw (imperfection or unintentional discontinuity) of such size, shape, orientation, location, or property, which is rejectable.</td>
                    <td>Always rejectable, either for:<br>a) lack of conformance to specification requirements;<br>b) potential lack of fitness for purpose;<br>c) both.<br>A defect (a rejectable flaw) is by definition a condition that must be removed or corrected.</td>
                </tr>
            </tbody>
        </table>
    </div>`,
    
    contentEs: `<h2>9 Inspección de Soldadura</h2>
    <h3>9.1 General</h3>
    <p>La inspección de soldadura es una parte crítica de un programa general de aseguramiento de la calidad de soldadura. La inspección de soldadura incluye mucho más que solo el END de una soldadura parcialmente completada o completada. Los temas importantes previos a la soldadura incluyen la revisión de códigos, estándares, especificaciones, diseño, procedimientos de limpieza, procedimientos de soldadura y calificaciones de soldadores.</p>
    <p>Las actividades de inspección de soldadura pueden separarse en tres etapas principales correspondientes a la fase del proceso de trabajo de soldadura. Los inspectores deben realizar tareas específicas antes de la soldadura, durante la soldadura y al completarse la soldadura. Los códigos, estándares y especificaciones dictarán la cantidad de inspección que se debe realizar. Junto con la realización de las inspecciones requeridas, se debe generar documentación completa y precisa. En casi todos los casos, la documentación por sí sola servirá como prueba de que las inspecciones requeridas se realizaron de acuerdo con los códigos, estándares, especificaciones y requisitos reglamentarios.</p>
    
    <h3>9.2 Tareas Previas a la Soldadura</h3>
    <p>No debe subestimarse la importancia de las tareas en la etapa de planificación y preparación de la soldadura. Muchos problemas de soldadura pueden evitarse durante esta etapa cuando es más fácil realizar cambios y correcciones, en lugar de durante o después de que la soldadura está en progreso o se ha completado. Dichas tareas pueden incluir las siguientes.</p>
    
    <h4>9.2.1 Dibujos, Códigos y Estándares</h4>
    <p>Revisar los dibujos aplicables junto con estándares, códigos, especificaciones internas y toda la documentación de soldadura, incluyendo el WPS, PQR y WPQ, para comprender los requisitos para la soldadura e identificar cualquier inconsistencia.</p>
    
    <h4>9.2.1.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los elementos que deben revisarse en dibujos, códigos y estándares incluyen los siguientes.</p>
    <ul>
        <li>Los símbolos de soldadura y los tamaños de soldadura están claramente especificados (ver Anexo A). Tenga en cuenta que los símbolos de soldadura a menudo no se incluyen en los planos para soldadura en servicio y reparaciones.</li>
        <li>Los diseños de juntas de soldadura y las dimensiones están claramente especificados (ver Anexo A).</li>
        <li>Las dimensiones están detalladas—el inspector puede necesitar buscar ayuda de otros (por ejemplo, ingeniero de soldadura) para determinar el potencial de distorsión.</li>
        <li>Se especifican los consumibles de soldadura.</li>
        <li>Se identifica el manejo adecuado de los consumibles, si los hay.</li>
        <li>Se especifican los requisitos del material base (como el uso de materiales probados por impacto donde la ductilidad en entalla es un requisito en servicio a baja temperatura).</li>
        <li>Las propiedades mecánicas y las pruebas requeridas se identifican en el PQR.</li>
        <li>Los requisitos de protección contra condiciones climáticas y rompevientos están definidos en el código o estándar de referencia.</li>
        <li>Se definen los requisitos de precalentamiento y los métodos de precalentamiento aceptables.</li>
        <li>Se definen los requisitos de TTSP y los métodos de TTSP aceptables.</li>
        <li>Se definen los puntos de retención de inspección y los requisitos de END.</li>
        <li>Los requisitos adicionales, como los cupones de soldadura de producción, están claramente especificados.</li>
        <li>Los requisitos de prueba de presión, si los hay, están claramente especificados.</li>
        <li>Se especifica el tipo/grado apropiado de END.</li>
        <li>El WPS y el PQR correspondiente para variables esenciales, no esenciales y, si es aplicable, suplementarias han sido revisados y abordados.</li>
        <li>El WPQ ha sido revisado para asegurar que se realizaron las pruebas adecuadas para permitir que el soldador produzca una soldadura de producción de acuerdo con el WPS relevante.</li>
    </ul>
    
    <h4>9.2.2 Requisitos de Soldadura</h4>
    <p>Revisar los requisitos para el personal de soldadura involucrado en la ejecución del trabajo, como la organización de soldadura y la organización de inspección.</p>
    
    <h4>9.2.2.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los elementos de control de calidad de requisitos de soldadura que deben revisarse son los siguientes.</p>
    <ul>
        <li>Competencia de la organización de soldadura para realizar actividades de soldadura de acuerdo con códigos, estándares y especificaciones.</li>
        <li>Competencia de la organización de inspección para realizar las tareas de inspección especificadas.</li>
        <li>Competencia de la organización de soldadura para realizar calificaciones de soldador/operador de soldadura.</li>
    </ul>
    
    <h4>9.2.3 Procedimientos y Registros de Calificación</h4>
    <p>Revisar el(los) WPS, el(los) PQR y el(los) WPQ para el proceso de soldadura para asegurar que son aceptables para el código/especificación y son aplicables al trabajo que se va a realizar.</p>
    
    <h4>9.2.3.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los procedimientos de soldadura y registros de calificación que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>El(los) WPS y el(los) PQR de apoyo, incluyendo los desarrollados para realizar reparaciones, están debidamente calificados y cumplen con los códigos, estándares y especificaciones aplicables para el trabajo.</li>
        <li>Los WPQ cumplen con los requisitos para el WPS.</li>
    </ul>
    
    <h4>9.2.4 Información de END</h4>
    <p>Confirmar que el(los) examinador(es) de END, el(los) procedimiento(s) de END y el equipo de END de la organización de inspección son aceptables para el trabajo.</p>
    
    <h4>9.2.4.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>La información de END que debe revisarse incluye la siguiente.</p>
    <ul>
        <li>Los examinadores de END están debidamente certificados para la técnica de END y sus certificaciones están vigentes (ver Sección 4.6).</li>
        <li>Los procedimientos de END están vigentes y son precisos.</li>
        <li>La calibración del equipo de END está vigente.</li>
        <li>Los procedimientos y técnicas de END especificados son apropiados y capaces de producir los criterios de aceptación/rechazo especificados.</li>
    </ul>
    
    <h4>9.2.5 Tratamiento Térmico y Prueba de Presión</h4>
    <p>Confirmar que los procedimientos de tratamiento térmico y prueba de presión y el equipo asociado son aceptables.</p>
    
    <h4>9.2.5.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los procedimientos de tratamiento térmico y prueba de presión que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>El procedimiento de tratamiento térmico es aceptable y coincide con los requisitos mostrados en el PQR, revisado y aceptable;</li>
        <li>Los procedimientos de prueba de presión detallan los requisitos de prueba, están revisados y son aceptables.</li>
        <li>La calibración del equipo de TTSP está vigente.</li>
        <li>El equipo de prueba de presión y los manómetros están calibrados y cumplen con los requisitos de prueba apropiados.</li>
    </ul>
    
    <h4>9.2.6 Materiales</h4>
    <p>Asegurar que todos los materiales de aporte, materiales base y materiales de anillo de respaldo estén debidamente marcados e identificados, y, si se requiere, asegurar la finalización de PMI en el punto de instalación para verificar la composición del material.</p>
    
    <h4>9.2.6.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles que deben revisarse en los materiales utilizados durante la soldadura incluyen los siguientes.</p>
    <ul>
        <li>Los certificados de prueba de materiales están disponibles y los artículos están debidamente marcados (incluido el anillo de respaldo si se usa).</li>
        <li>El marcado de electrodos, etiquetas de alambre desnudo, identificación en carretes de alambre, etc., son según lo especificado.</li>
        <li>Las marcas de material de aporte son rastreables a una certificación de material de aporte.</li>
        <li>Las marcas de material base son rastreables a una certificación de material.</li>
        <li>Se realiza el registro de información de trazabilidad de material de aporte y material base.</li>
        <li>Las estampaciones de material base son de baja tensión y no son perjudiciales para el componente.</li>
        <li>El código de color con franjas de pintura (u otro) está de acuerdo con la especificación y es correcto para el material de construcción cuando se utiliza.</li>
        <li>Los registros de PMI complementan la trazabilidad del material y confirman el material de construcción.</li>
    </ul>
    
    <h4>9.2.7 Preparación de Soldadura</h4>
    <p>Confirmar que la preparación de soldadura, el ajuste de la unión y las dimensiones son apropiados para el diseño y procedimiento de soldadura relevantes.</p>
    
    <h4>9.2.7.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con la preparación de soldadura que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>Las superficies de preparación de soldadura están libres de contaminantes y defectos del metal base como laminaciones y grietas.</li>
        <li>El precalentamiento, según lo especificado por el código de referencia, especificación o WPS si se requiere, se aplica para el corte térmico y el proceso de soldadura.</li>
        <li>El horneado de hidrógeno, según lo especificado, se realiza según procedimiento aprobado.</li>
        <li>La junta de soldadura está libre de óxidos, escamas de sulfuro y residuos de hidrocarburos.</li>
        <li>El tipo de junta de soldadura, ángulo del chaflán, cara de raíz y abertura de raíz están según el procedimiento de soldadura apropiado.</li>
        <li>La alineación es aceptable para los requisitos del proyecto.</li>
        <li>Las soldaduras de enchufe de tubería tienen la separación adecuada.</li>
    </ul>
    
    <h4>9.2.8 Consumibles de Soldadura</h4>
    <p>Confirmar que el electrodo y el material de aporte están identificados y segregados según se requiera, y que los fundentes y gases inertes están identificados, según se especifica, y son aceptables. Confirmar que los hornos de almacenamiento para consumibles de soldadura están provistos con indicación visible de temperatura y pueden operar con control automático de calor.</p>
    
    <h4>9.2.8.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con los consumibles de soldadura que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>El tipo y tamaño del material de aporte son correctos según el procedimiento.</li>
        <li>Los materiales de aporte se están manejando y almacenando adecuadamente (ver Sección 7.7).</li>
        <li>Los materiales de aporte están limpios y libres de contaminantes.</li>
        <li>El revestimiento en los electrodos revestidos no está dañado ni húmedo.</li>
        <li>El fundente es apropiado para el proceso de soldadura y se está manejando adecuadamente.</li>
        <li>Los gases inertes, si se requieren, son apropiados para protección y respaldo.</li>
        <li>La composición del gas es según el procedimiento de soldadura apropiado y cumple con los requisitos de pureza.</li>
        <li>Los sistemas de manifold de gas de protección y purga se purgan periódicamente para evitar el retroceso con aire.</li>
        <li>El material de aporte está debidamente identificado como una aleación y segregado de otras áreas de proceso de soldadura según sea necesario.</li>
    </ul>
    
    <h3>9.3 Tareas Durante las Operaciones de Soldadura</h3>
    <p>La inspección de soldadura durante las operaciones de soldadura debe incluir parámetros de auditoría para verificar que la soldadura se realiza según los procedimientos. Dichas tareas pueden incluir las siguientes.</p>
    
    <h4>9.3.1 Aseguramiento de Calidad</h4>
    <p>Establecer un procedimiento de auditoría de aseguramiento de calidad y control de calidad con la organización de soldadura.</p>
    
    <h4>9.3.1.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles sobre los procedimientos de auditoría de aseguramiento de calidad y control de calidad de soldadura que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>El soldador es responsable de la artesanía de calidad de las soldaduras.</li>
        <li>El soldador ha sido probado y certificado para el procedimiento que se está utilizando.</li>
        <li>El soldador ha recibido cualquier capacitación especial, y se han realizado soldaduras de prueba si se requiere.</li>
        <li>El soldador y el personal de control de calidad adecuado entienden los puntos de retención de inspección.</li>
        <li>El soldador es responsable de soldar según el WPS y tiene acceso listo a la versión aprobada antes y durante la soldadura.</li>
        <li>Consultar el Anexo B.</li>
    </ul>
    
    <h4>9.3.2 Parámetros y Técnicas de Soldadura</h4>
    <p>Confirmar que los parámetros y técnicas de soldadura están listados en el WPS y WPQ.</p>
    
    <h4>9.3.2.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con los parámetros de soldadura y la técnica de soldadura que deben revisarse incluyen los siguientes:</p>
    <ul>
        <li>las variables esenciales se están cumpliendo durante la soldadura;</li>
        <li>material de aporte, fundentes y composición/flujo de gas inerte según lo especificado en el WPS;</li>
        <li>técnica de purga, flujo, análisis de O2, etc.;</li>
        <li>configuraciones del equipo como amperaje, voltaje y velocidad de alimentación de alambre o tasa;</li>
        <li>velocidad de avance (el elemento principal para determinar el aporte de calor);</li>
        <li>aporte de calor (cuando sea apropiado);</li>
        <li>las variables esenciales suplementarias (según se requieran) se están cumpliendo durante la soldadura;</li>
        <li>precalentamiento durante la soldadura de puntos y eliminación de puntos de soldadura (si se requiere);</li>
        <li>temperaturas de precalentamiento y entre pasadas;</li>
        <li>NOTA La temperatura máxima entre pasadas debe especificarse para aceros inoxidable austeníticos, aceros inoxidable dúplex y aleaciones no ferrosas (por ejemplo, aceros inoxidable tipo-300). La temperatura máxima entre pasadas también debe especificarse para aceros al carbono/baja aleación que requieren pruebas de impacto.</li>
        <li>la soldadura de prueba que simula la junta de soldadura de producción, cumple con los requisitos del ingeniero de soldadura, y se utiliza para demostrar la capacidad del soldador o los parámetros del procedimiento de soldadura según se requiera.</li>
    </ul>
    
    <h4>9.3.3 Examen de la Soldadura</h4>
    <p>Completar verificaciones físicas, examen visual y END en proceso.</p>
    
    <h4>9.3.3.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con el examen de la soldadura que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>Los puntos de soldadura que se incorporarán en la soldadura están integrados en la raíz y libres de defectos.</li>
        <li>La raíz de la soldadura tiene penetración completa (determinada por END).</li>
        <li>La limpieza entre pasadas de soldadura y de las superficies desbastadas es aceptable y se completa según lo especificado en el WPS.</li>
        <li>El END adicional que pueda requerirse entre pasadas de soldadura y en superficies desbastadas cumple con los criterios de aceptación apropiados.</li>
        <li>El retrabajo en proceso, notificado mediante inspección visual, está completado y se logra la eliminación del defecto.</li>
        <li>La medición de ferrita en proceso, si se requiere, se realiza y registra.</li>
        <li>El refuerzo final de la soldadura y el tamaño de la soldadura de filete cumplen con las especificaciones de trabajo y los dibujos.</li>
        <li>Todas las soldaduras adicionales están identificadas en el mapa de soldadura del dibujo "tal como está construido" para tener en cuenta cualquier END adicional requerido.</li>
    </ul>
    
    <h3>9.4 Tareas al Completarse la Soldadura</h3>
    <p>Las tareas finales al completarse la soldadura y el trabajo deben incluir aquellas que aseguran la calidad final de la soldadura antes de poner la soldadura en servicio.</p>
    
    <h4>9.4.1 Apariencia y Acabado</h4>
    <p>Completar la inspección visual de la soldadura completada para defectos obvios como socavación, solape, porosidad, etc., para asegurar que la soldadura cumple con la especificación del propietario-usuario.</p>
    
    <h4>9.4.1.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con la apariencia y finalización de la soldadura que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>El tamaño, longitud y ubicación de todas las soldaduras cumplen con los dibujos/especificaciones/código.</li>
        <li>Los accesorios temporales y las soldaduras de accesorios están eliminados, integrados con el metal base, y se completa cualquier END requerido.</li>
        <li>Se completa el END requerido y las discontinuidades se revisan contra los criterios de aceptación según el código o estándar de referencia.</li>
        <li>Verificación de material PMI completada realizada en la(s) soldadura(s), material base, accesorios y componentes de válvula durante la prefabricación y en el punto de instalación, si lo requiere la especificación.</li>
        <li>Se confirma la estampación/marcado de soldaduras del soldador.</li>
        <li>Se realiza la verificación de dureza en campo.</li>
    </ul>
    
    <h4>9.4.2 Revisión de END</h4>
    <p>Verificar que el END se realiza en las ubicaciones seleccionadas y revisar los hallazgos del examinador para asegurar el cumplimiento con los requisitos del código/especificación.</p>
    
    <h4>9.4.2.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con el END que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>Se examinan las ubicaciones especificadas.</li>
        <li>Se completa el número especificado de exámenes.</li>
        <li>El END se realiza después del TTSP final.</li>
        <li>La representación del trabajo de cada soldador se incluye en las técnicas de examen aleatorio según lo especificado en el código de construcción o estándar.</li>
        <li>La calidad radiográfica está de acuerdo con los requisitos listados en ASME Sección V, Artículo 2, Examen No Destructivo, y el inspector está de acuerdo con las interpretaciones y hallazgos del examinador.</li>
        <li>Documentar que todo el END y las tablas asociadas se han ejecutado y documentado correctamente.</li>
        <li>Verificar las juntas para agrietamiento diferido de secciones gruesas, especialmente juntas altamente restringidas, juntas de materiales de alta resistencia y servicios con potencial de agrietamiento diferido.</li>
    </ul>
    
    <h4>9.4.3 Tratamiento Térmico Posterior a la Soldadura (TTSP)</h4>
    <p>Verificar que el TTSP se revisa y acepta para que esté de acuerdo con el procedimiento especificado.</p>
    
    <h4>9.4.3.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con el TTSP que deben revisarse incluyen los siguientes.</p>
    <p>Antes de que comience el TTSP:</p>
    <ol>
        <li>marcado de pintura y otra contaminación perjudicial eliminados;</li>
        <li>accesorios temporales eliminados;</li>
        <li>superficies mecanizadas protegidas contra oxidación;</li>
        <li>internos del equipo, como internos de válvula, eliminados para evitar daños;</li>
        <li>el equipo adecuadamente soportado para evitar distorsión;</li>
        <li>termopares sujetos correctamente;</li>
        <li>los termopares monitorean adecuadamente las diferentes zonas de temperatura y las partes más gruesas/delgadas en la fabricación;</li>
        <li>el sistema de monitoreo de temperatura está calibrado;</li>
        <li>el ancho de banda de calentamiento local es adecuado;</li>
        <li>se aplica aislamiento al componente donde se requiere para calentamiento local.</li>
    </ol>
    <p>Después de completarse el TTSP:</p>
    <ol>
        <li>la temperatura y el tiempo de mantenimiento son según el procedimiento de TTSP;</li>
        <li>la tasa de calentamiento y la tasa de enfriamiento son según el procedimiento de TTSP;</li>
        <li>la dureza indica un tratamiento térmico aceptable.</li>
    </ol>
    
    <h4>9.4.4 Prueba de Presión</h4>
    <p>Verificar que la prueba de presión se realiza, revisa y acepta, y está de acuerdo con el procedimiento de referencia.</p>
    
    <h4>9.4.4.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con la prueba de presión que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>La presión cumple con la especificación de prueba.</li>
        <li>La duración de la prueba es según lo especificado.</li>
        <li>La temperatura del metal del componente cumple con los requisitos mínimos y máximos.</li>
        <li>La caída o decaimiento de presión es aceptable según el procedimiento.</li>
        <li>El examen visual no revela fugas ni defectos del material.</li>
        <li>Todas las soldaduras y componentes son accesibles para inspección visual y no están cubiertos con pintura, aislamiento u otra materia.</li>
    </ul>
    
    <h4>9.4.5 Auditoría de Documentación</h4>
    <p>Realizar una auditoría final del paquete de inspección para identificar inexactitudes e información incompleta.</p>
    
    <h4>9.4.5.1 Elementos de Control de Calidad a Evaluar</h4>
    <p>Los detalles relacionados con el paquete de inspección que deben revisarse incluyen los siguientes.</p>
    <ul>
        <li>Todas las verificaciones en el plan de calidad se ejecutaron correctamente.</li>
        <li>Los informes de inspección están completos, aceptados y firmados por las partes responsables.</li>
        <li>Los informes de inspección y las interpretaciones y hallazgos del examinador de END son precisos.</li>
        <li>Toda la documentación se retiene según lo requerido por el código de referencia y las especificaciones de la empresa.</li>
    </ul>
    
    <h3>9.5 No Conformidades y Defectos</h3>
    <h4>9.5.1 General</h4>
    <p>En cualquier momento durante la inspección de soldadura, si se identifican defectos o no conformidades con el código, estándar o especificación de referencia, deben llevarse a la atención de los responsables del trabajo y corregirse antes de que la soldadura continúe. Los defectos deben eliminarse completamente y reinspeccionarse siguiendo las tareas/métodos descritos en esta sección hasta que la soldadura se considere aceptable. La acción correctiva para una no conformidad depende de la naturaleza de la no conformidad y su impacto en las propiedades de la soldadura. La acción correctiva puede incluir retrabajar la soldadura. Ver Sección 8.1 para tipos comunes de discontinuidades o imperfecciones que pueden llevar a defectos o no conformidades.</p>
    
    <h4>9.5.2 Soldaduras de Reparación</h4>
    <p>Cuando la inspección identifica un defecto rechazable, el inspector debe marcar el área para reparación, eliminar el defecto, verificar la eliminación del defecto (típicamente usando PT o MT), y se realiza toda la soldadura de reparación necesaria. La soldadura de reparación debe realizarse según un procedimiento de reparación de soldadura aceptado por el inspector o ingeniero. Después de la reparación, la soldadura debe reinspeccionarse, utilizando el(los) mismo(s) método(s) que inicialmente identificó el(los) defecto(s). Si la inspección indica que la reparación es aceptable, no se necesita ninguna acción adicional, y el equipo/tubería puede volver a ponerse en servicio. Si la inspección indica que el defecto no fue eliminado o que hay un nuevo defecto presente, el soldador y el inspector (y el ingeniero de soldadura, si es aplicable) deben evaluar la razón de la no conformidad de la reparación de soldadura para realizar los cambios apropiados antes de realizar una segunda reparación.</p>
    <p>Hay muchos factores que deben evaluarse al determinar el número de veces que una junta soldada puede repararse sucesivamente antes de que se requiera un corte completo de la soldadura. Dichos factores incluyen, pero no se limitan a, la aplicación de la soldadura, el material y grosor del metal base, el tratamiento térmico, la complejidad de la configuración/posición de la soldadura (por ejemplo, tubos de horno o tubos de caldera), y el tamaño de la soldadura. El ingeniero de soldadura o el inspector deben ser notificados cuando una soldadura ha fallado una prueba de calidad de soldadura más de dos veces para ayudar a determinar la(s) causa(s) del(los) defecto(s) y el camino apropiado a seguir.</p>
    
    <h3>9.6 Certificación del Examinador de END</h3>
    <h4>9.6.1 Códigos o Estándares de Referencia</h4>
    <p>Los códigos o estándares de referencia pueden requerir que el examinador esté calificado de acuerdo con un código específico y certificado como que cumple con los requisitos. Típicamente, los estándares de construcción de soldadura como ASME para recipientes a presión o tuberías, y API 510 para examen de recipientes a presión en servicio o API 570 para examen de tuberías en servicio, se refieren a la certificación de calificación por terceros, por ejemplo:</p>
    <ul>
        <li>ASNT SNT-TC-1A;</li>
        <li>ANSI/ASNT CP-189.</li>
    </ul>
    <p>Estas referencias proporcionan las pautas del empleador (SNT-TC-1A) o estándares (CP-189) para la certificación del personal de inspección END. También requieren que el empleador desarrolle y establezca una práctica o procedimiento escrito que detalle los requisitos del empleador para la calificación y certificación del personal de inspección. Incluye los requisitos previos de capacitación y experiencia antes de la certificación y los requisitos de recertificación. Un esquema de certificación de acuerdo con ISO 9712 puede especificarse para trabajo nacional o internacional. ISO 9712 describe las pautas de certificación generalmente organizadas bajo un esquema nacional y vested en el individuo. En los Estados Unidos, el esquema es administrado por ASNT como el Programa de Certificación Central de ASNT (ACCP). Aunque la práctica escrita de una empresa de inspección puede permitir que el empleador nombre un Nivel III, el propietario-usuario puede preferir que, al menos para la certificación inicial, un Examinador Nivel III esté certificado por examen.</p>
    
    <h4>9.6.2 Calificación del Propietario-Usuario</h4>
    <p>Si el código o especificación de referencia no indica un estándar de calificación específico, la calificación puede implicar la demostración de competencia por parte del personal que realiza el examen u otros requisitos especificados por el propietario-usuario. Los documentos de inspección en servicio de API van más allá de esto y para una serie de circunstancias específicas, como aptitud para el servicio (FFS) y soldaduras no sujetas a prueba hidrostática, pueden requerir el uso de personal que haya aprobado una prueba de desempeño como la Calificación de Examinadores de Pruebas Ultrasónicas de API (QUTE) o equivalente aceptado por el propietario-usuario. Se está desarrollando un nuevo documento por parte de API para definir aún más el programa QUTE, incluyendo alguna definición de "equivalencia".</p>
    <p>Para completar con éxito el examen, los candidatos deben detectar, caracterizar y ubicar, por ejemplo, al menos el 80 % de las imperfecciones conocidas en las secciones de soldadura que se les ha pedido que examinen. Los candidatos que interpreten mal o pierdan más del 20 % de las imperfecciones conocidas (por ejemplo, interpretar incorrectamente un reflector geométrico como una imperfección) se considerará que han suspendido la prueba. El propietario-usuario puede elegir un punto de aprobación diferente.</p>
    
    <h4>9.6.2.1 Requisitos del Candidato</h4>
    <p>Antes de la prueba, se debe aconsejar a los candidatos que se les dará una evaluación de aprobado/suspendido al concluir la prueba y no se les proporcionará conocimiento específico sobre el tipo de imperfección, si la hay, en cada soldadura. No se debe proporcionar ningún otro dato para asegurar la confidencialidad de los datos relacionados con la imperfección, números, ubicaciones, tipos y tamaños.</p>
    
    <h4>9.6.2.2 Plazo</h4>
    <p>La prueba de aprobación típicamente debe ser válida por un período de tres años, después del cual el candidato debe ser reprobado. Si en cualquier momento el rendimiento de un operador es cuestionado, el operador puede ser reprobado a discreción del propietario-usuario.</p>
    
    <h4>9.6.2.3 Aprobación</h4>
    <p>La aprobación de cualquier candidato bajo esta especificación está restringida al propietario-usuario específico que administra la prueba, y debe utilizarse para el cumplimiento con los párrafos referenciados en API 510 y API 570 y no debe considerarse como una certificación o respaldo de API de ninguna forma.</p>
    
    <h3>9.7 Registro de Datos de Inspección de Soldadura</h3>
    <h4>9.7.1 Detalles del Informe</h4>
    <p>Los resultados de la inspección de soldadura deben documentarse completa y precisamente. El informe de inspección en muchos casos se convierte en un registro permanente que debe mantenerse y referenciarse durante la vida útil de la soldadura o pieza que se está inspeccionando.</p>
    
    <h4>9.7.1.1 Información General</h4>
    <p>La información general reportada para las inspecciones de soldadura debe incluir:</p>
    <ul>
        <li>cliente o proyecto;</li>
        <li>número de contrato o sitio;</li>
        <li>fecha de inspección;</li>
        <li>componente/sistema;</li>
        <li>subconjunto/descripción;</li>
        <li>identificación de soldadura;</li>
        <li>tipo de soldadura/material/grosor.</li>
    </ul>
    
    <h4>9.7.1.2 Información de Inspección</h4>
    <p>La información de inspección reportada en las inspecciones de soldadura debe incluir:</p>
    <ul>
        <li>fecha de inspección;</li>
        <li>número de procedimiento;</li>
        <li>examinador;</li>
        <li>información de certificación del examinador;</li>
        <li>método de inspección;</li>
        <li>ayudas visuales y otro equipo utilizado;</li>
        <li>punto de referencia de la soldadura.</li>
    </ul>
    
    <h4>9.7.1.3 Resultados de Inspección</h4>
    <p>Los resultados de inspección de soldadura típicamente reportados deben incluir:</p>
    <ul>
        <li>número de hoja de inspección;</li>
        <li>limitaciones de inspección;</li>
        <li>una descripción de todas las indicaciones registrables y reportables;</li>
        <li>para cada indicación registrable:
            <ol>
                <li>número de indicación;</li>
                <li>ubicación de la indicación (desde el punto de referencia de la soldadura y la línea central);</li>
                <li>aguas arriba o aguas abajo (en el sentido de las agujas del reloj o en sentido contrario) desde un punto de referencia establecido;</li>
                <li>tamaño y orientación de la indicación;</li>
                <li>tipo de indicación (lineal o redondeada);</li>
                <li>aceptabilidad según los estándares de aceptación del código de referencia;</li>
                <li>observaciones o notas;</li>
                <li>un boceto de la indicación;</li>
                <li>revisor y nivel de certificación;</li>
                <li>comentarios del revisor.</li>
            </ol>
        </li>
    </ul>
    
    <h4>9.7.2 Terminología</h4>
    <p>Al reportar los resultados de una inspección, es importante utilizar terminología estándar. Ejemplos de terminología estándar se muestran en la Tabla 8, Tabla 9 y Tabla 10.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 8—Condiciones Que Pueden Existir en un Material o Producto</caption>
            <thead>
                <tr>
                    <th>Definición</th>
                    <th>Descripción o Comentario</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A-1 Indicación: Una condición de ser imperfecto; una desviación de una característica de calidad de su condición prevista.</td>
                    <td>Ninguna asociación inherente o implícita con falta de conformidad con los requisitos de especificación o con falta de aptitud para el propósito, es decir, la indicación puede o no ser rechazable.</td>
                </tr>
                <tr>
                    <td>A-2 Discontinuidad: Una interrupción de la estructura típica de un material, como una falta de homogeneidad en sus características mecánicas, metalúrgicas o físicas. Una discontinuidad no es necesariamente un defecto.</td>
                    <td>Ninguna asociación inherente o aplicada con falta de conformidad con los requisitos de especificación o con falta de aptitud para el propósito, es decir, la imperfección puede o no ser rechazable.<br>Una discontinuidad no intencional también es una imperfección. Las grietas, inclusiones y porosidad son ejemplos de discontinuidades no intencionales que también son imperfecciones.<br>Pueden existir discontinuidades intencionales en algunos materiales o productos debido a cambios intencionales en la configuración; estas no son imperfecciones y no se espera que se evalúen como tales.</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 9—Resultados del Examen No Destructivo</caption>
            <thead>
                <tr>
                    <th>Definición</th>
                    <th>Descripción o Comentario</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>B-1 Indicación: La respuesta o evidencia de la aplicación de un examen no destructivo.</td>
                    <td>Cuando la naturaleza o magnitud de la indicación sugiere que la causa es una imperfección o discontinuidad, se requiere evaluación.</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 10—Resultados de la Aplicación de Criterios de Aceptación/Rechazo</caption>
            <thead>
                <tr>
                    <th>Definición</th>
                    <th>Descripción o Comentario</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>C-1 Imperfección: Una imperfección o discontinuidad no intencional, que es detectable por un examen no destructivo.</td>
                    <td>Ninguna asociación inherente o implícita con falta de conformidad con los requisitos de especificación o falta de aptitud para el propósito, es decir, una imperfección puede o no ser rechazable.</td>
                </tr>
                <tr>
                    <td>C-2 Defecto: Una imperfección (imperfección o discontinuidad no intencional) de tal tamaño, forma, orientación, ubicación o propiedad, que es rechazable.</td>
                    <td>Siempre rechazable, ya sea por:<br>a) falta de conformidad con los requisitos de especificación;<br>b) posible falta de aptitud para el propósito;<br>c) ambos.<br>Un defecto (una imperfección rechazable) por definición es una condición que debe eliminarse o corregirse.</td>
                </tr>
            </tbody>
        </table>
    </div>`
});