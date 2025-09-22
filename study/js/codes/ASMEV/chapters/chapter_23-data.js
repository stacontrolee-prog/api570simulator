// Registrar el código ASME BPVC.V-2023 si no existe
if (!getCode('ASMEV')) {
    console.error('El código ASME BPVC.V-2023 no está registrado. Registrándolo ahora...');
    registerCode('ASMEV', {
        title: "ASME Boiler and Pressure Vessel Code Section V - Nondestructive Examination",
        titleEs: "Código de Calderas y Recipientes a Presión ASME Sección V - Examen No Destructor"
    });
}

// Registrar el capítulo 23
registerChapter('ASMEV', {
    id: 23,
    title: "Ultrasonic Standard",
    titleEs: "Estándar de Ultrasonido",
    content: `<h3>SE-797/SE-797M STANDARD PRACTICE FOR MEASURING THICKNESS BY MANUAL ULTRASONIC PULSE-ECHO CONTACT METHOD</h3>
    <div class="subsection">
        <h4>1. Scope</h4>
        <p>1.1 This practice provides guidelines for measuring the thickness of materials using the contact pulse-echo method at temperatures not to exceed 93 °C [200 °F].</p>
        <p>1.2 This practice is applicable to any material in which ultrasonic waves will propagate at a constant velocity throughout the part, and from which back wall reflections can be obtained and resolved.</p>
        <p>1.3 This practice is primarily for flat components with parallel surfaces and has limited applicability for components with non-parallel or concentric surfaces per 1.2.</p>
        <p>1.4 Units—The values stated in either SI units or inch-pound units are to be regarded separately as standard. The values stated in each system are not necessarily exact equivalents; therefore, to ensure conformance with the standard, each system shall be used independently of the other, and values from the two systems shall not be combined.</p>
        <p>1.5 This standard does not purport to address all of the safety concerns, if any, associated with its use. It is the responsibility of the user of this standard to establish appropriate safety, health, and environmental practices and determine the applicability of regulatory limitations prior to use.</p>
        <p>1.6 This international standard was developed in accordance with internationally recognized principles on standardization established in the Decision on Principles for the Development of International Standards, Guides and Recommendations issued by the World Trade Organization Technical Barriers to Trade (TBT) Committee.</p>
    </div>
    <div class="subsection">
        <h4>2. Referenced Documents</h4>
        <p>2.1 ASTM Standards:</p>
        <p>E317 Practice for Evaluating Performance Characteristics of Ultrasonic Pulse-Echo Testing Instruments and Systems without the Use of Electronic Measurement Instruments</p>
        <p>E494 Practice for Measuring Ultrasonic Velocity in Materials by Comparative Pulse-Echo Method</p>
        <p>E543 Specification for Agencies Performing Nondestructive Testing</p>
        <p>E1316 Terminology for Nondestructive Examinations</p>
        <p>2.2 ASNT Documents:</p>
        <p>Nondestructive Testing Handbook, 2nd Edition, Vol 7</p>
        <p>SNT-TC-1A Recommended Practice for Personnel Qualification and Certification in Nondestructive Testing</p>
        <p>ANSI/ASNT CP-189 Standard for Qualification and Certification of Nondestructive Testing Personnel</p>
        <p>2.3 AIA Document:</p>
        <p>NAS-410 Certification and Qualification of Nondestructive Testing Personnel</p>
        <p>2.4 ISO Standard:</p>
        <p>ISO 9712 Non-Destructive Testing—Qualification and Certification of NDT Personnel</p>
    </div>
    <div class="subsection">
        <h4>3. Terminology</h4>
        <p>3.1 Definitions—For definitions of terms used in this practice, refer to Terminology E1316.</p>
    </div>
    <div class="subsection">
        <h4>4. Summary of Practice</h4>
        <p>4.1 Thickness (T), when measured by the pulse-echo ultrasonic method, is a product of the velocity of sound in the material and one half the transit time (round trip) through the material.</p>
        <p>T = Vt/2</p>
        <p>where:</p>
        <p>T = Component thickness,</p>
        <p>V = Sound velocity in the material, and</p>
        <p>t = Sound path transit time.</p>
        <p>4.2 The pulse-echo ultrasonic instrument measures the transit time of the ultrasonic pulse through the part.</p>
        <p>4.3 The velocity in the material being examined is a function of the physical properties of the material. It is usually assumed to be a constant for a given class of materials. Its approximate value can be obtained from Table X3.1 in Practice E494 or from the Nondestructive Testing Handbook, or it can be determined empirically.</p>
        <p>4.4 One or more reference blocks are required having known velocity, or of the same material to be examined, and having thicknesses accurately measured and in the range of thicknesses to be measured. It is generally desirable that the thicknesses be "round numbers" rather than miscellaneous odd values. One block should have a thickness value near the maximum of the range of interest and another block near the minimum thickness.</p>
        <p>4.5 The display element (A-scan display, meter, or digital display) of the instrument must be adjusted to present convenient values of thickness dependent on the range being used. The control for this function may have different names on different instruments, including range, sweep, material standardize, or velocity.</p>
        <p>4.6 The timing circuits in different instruments use various conversion schemes. A common method is the so-called time/analog conversion in which the time measured by the instrument is converted into a proportional d-c voltage which is then applied to the readout device. Another technique uses a very high-frequency oscillator that is modulated or gated by the appropriate echo indications, the output being used either directly to suitable digital readouts or converted to a voltage for other presentation. A relationship of transit time versus thickness is shown graphically in Fig. 1.</p>
        
        <div class="figure-container">
            <img src="images/asmev_figure_1.png" class="figure-image">
            <p class="figure-caption">FIG. 1 Transit Time/Thickness Relationship</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5. Significance and Use</h4>
        <p>5.1 The techniques described provide indirect measurement of thickness of sections of materials not exceeding temperatures of 93 °C [200 °F]. Measurements are made from one side of the object, without requiring access to the rear surface.</p>
        <p>5.2 Ultrasonic thickness measurements are used extensively on basic shapes and products of many materials, on precision machined parts, and to determine wall thinning in process equipment caused by corrosion and erosion.</p>
        <p>5.3 Recommendations for determining the capabilities and limitations of ultrasonic thickness gages for specific applications can be found in the cited references.</p>
    </div>
    <div class="subsection">
        <h4>6. Basis of Application</h4>
        <p>6.1 The following items are subject to contractual agreement between the parties using or referencing this practice.</p>
        <p>6.2 Personnel Qualification:</p>
        <p>6.2.1 If specified in the contractual agreement, personnel performing examinations to this standard shall be qualified in accordance with a nationally or internationally recognized NDT personnel qualification practice or standard such as ANSI/ASNT CP-189, SNT-TC-1A, NAS-410, ISO 9712, or a similar document and certified by the employer or certifying agency, as applicable. The practice or standard used and its applicable revision shall be identified in the contractual agreement between the using parties.</p>
        <p>6.3 Qualification of Nondestructive Agencies—If specified in the contractual agreement, NDT agencies shall be qualified and evaluated as described in Specification E543. The applicable edition of Specification E543 shall be specified in the contractual agreement.</p>
        <p>6.4 Procedures and Techniques—The procedures and techniques to be utilized shall be as specified in the contractual agreement.</p>
        <p>6.5 Surface Preparation—The pre-examination surface preparation criteria shall be specified in the contractual agreement.</p>
    </div>
    <div class="subsection">
        <h4>7. Apparatus</h4>
        <p>7.1 Instruments—Thickness-measurement instruments are divided into three groups: (1) flaw detectors with an A-scan display readout, (2) flaw detectors with an A-scan display and direct thickness readout, and (3) direct thickness readout.</p>
        <p>7.1.1 Flaw detectors with A-scan display readouts display time/amplitude information. Thickness determinations are made by reading the distance between the zero-corrected (pulse triggered or delay controlled) initial pulse and first-returned echo (back wall reflection), or between multiple-back wall reflections, on a standardized base line of the A-scan display. The base line of the A-scan display should be adjusted for the desired thickness increments.</p>
        <p>7.1.2 Flaw detectors with numeric readout are a combination pulse ultrasound flaw detection instrument with an A-scan display and additional circuitry that provides digital thickness information. The material thickness can be electronically measured and presented on a digital readout. The A-scan display provides a check on the validity of the electronic measurement by revealing measurement variables, such as internal discontinuities, or echo-strength variations, which might result in inaccurate readings.</p>
        <p>7.1.3 Thickness readout instruments are modified versions of the pulse-echo instrument. The elapsed time between the initial pulse and the first echo or between multiple echoes is converted into a meter or digital readout. The instruments are designed for measurement and direct numerical readout of specific ranges of thickness and materials.</p>
        <p>7.1.4 Time-base linearity is required so that a change in the thickness of material will produce a corresponding change of indicated thickness. If an A-Scan display is used as a readout, its horizontal linearity can be checked by using Practice E317.</p>
        <p>7.2 Search Units—Most pulse-echo type search units (straight-beam contact, delay line, and dual element) are applicable if flaw detector instruments are used. If a thickness readout instrument has the capability to read thin sections, a highly damped, high-frequency search unit is generally used. High-frequency (10 MHz or higher) delay line search units are generally required for thicknesses less than about 0.6 mm [0.025 in.]. Measurements of materials at high temperatures require search units specially designed for the application. When dual element search units are used, their inherent nonlinearity usually requires special corrections for thin sections. (See Fig. 2 and Fig. X2.1.) For optimum performance, it is often necessary that the instrument and search units be matched.</p>
        
        <div class="figure-container">
            <img src="images/asmev_figure_2.png" class="figure-image">
            <p class="figure-caption">FIG. 2 Dual Transducer Nonlinearity</p>
        </div>
        
        <p>7.3 Standardization Blocks—The general requirements for appropriate standardization blocks are given in 4.4, 8.1.3, 8.2.2.1, 8.3.2, and 8.4.3. Multi-step blocks that may be useful for these standardization procedures are described in Appendix X1 (Figs. X1.1 and X1.2).</p>
    </div>
    <div class="subsection">
        <h4>8. Standardization of Apparatus</h4>
        <div class="subsection">
            <h4>8.1 Case I—Direct Contact, Single-Element Search Unit:</h4>
            <p>8.1.1 Conditions—The display start is synchronized to the initial pulse. All display elements are linear. Full thickness is displayed on the A-scan display.</p>
            <p>8.1.2 Under these conditions, we can assume that the velocity conversion line effectively pivots about the origin (Fig. 1). It may be necessary to subtract the wear-plate time, requiring minor use of delay control. It is recommended that standardization blocks providing a minimum of two thicknesses that span the thickness range be used to check the full-range accuracy.</p>
            <p>8.1.3 Place the search unit on a standardization block of known thickness with suitable couplant and adjust the instrument controls (material standardization, range, sweep, or velocity) until the display presents the appropriate thickness reading.</p>
            <p>8.1.4 The readings should then be checked and adjusted on standardization blocks with thickness of lesser value to verify the overall accuracy of the system.</p>
        </div>
        <div class="subsection">
            <h4>8.2 Case II—Delay Line Single-Element Search Unit:</h4>
            <p>8.2.1 Conditions—When using this search unit, it is necessary that the equipment be capable of correcting for the time during which the sound passes through the delay line so that the end of the delay can be made to coincide with zero thickness. This requires a so-called "delay" control in the instrument or automatic electronic sensing of zero thickness.</p>
            <p>8.2.2 In most instruments, if the material standardize circuit was previously adjusted for a given material velocity, the delay control should be adjusted until a correct thickness reading is obtained on the instrument. However, if the instrument must be completely standardized with the delay line search unit, the following technique is recommended:</p>
            <p>8.2.2.1 Use at least two standardization blocks. One should have a thickness near the maximum of the range to be measured and the other block near the minimum thickness. For convenience, it is desirable that the thickness should be "round numbers" so that the difference between them also has a convenient "round number" value.</p>
            <p>8.2.2.2 Place the search unit sequentially on one and then the other block, and obtain both readings. The difference between these two readings should be calculated. If the reading thickness difference is less than the actual thickness difference, place the search unit on the thicker specimen, and adjust the material standardize control to expand the thickness range. If the reading thickness difference is greater than the actual thickness difference, place the search unit on the thicker specimen, and adjust the material standardize control to decrease the thickness range. A certain amount of over correction is usually recommended. Reposition the search unit sequentially on both blocks and note the reading differences while making additional appropriate corrections. When the reading thickness differential equals the actual thickness differential, the material thickness range is correctly adjusted. A single adjustment of the delay control should then permit correct readings at both the high and low end of the thickness range.</p>
            <p>8.2.3 An alternative technique for delay line search units is a variation of that described in 8.2.2. A series of sequential adjustments are made, using the "delay" control to provide correct readings on the thinner standardization block and the "range" control to correct the readings on the thicker block. Moderate over-correction is sometimes useful. When both readings are "correct" the instrument is adjusted properly.</p>
        </div>
        <div class="subsection">
            <h4>8.3 Case III—Dual Search Units:</h4>
            <p>8.3.1 The method described in 8.2 (Case II) is also suitable for equipment using dual search units in the thicker ranges, above 3 mm [0.125 in.]. However, below those values there is an inherent error due to the breakdown in the small angle approximation. Thus the transit time is no longer linearly proportional to thickness, and the nonlinearity increases with decreasing thickness. The variation is also shown schematically in Fig. 2(a) and Fig. X2.1(a). Typical error values are shown in Fig. 2(b) and expanded in Fig. X2.1(b).</p>
            <p>NOTE 1—Many simple, direct read, dual element search units may not see appreciable variation in thickness readings for standardization blocks at the high and low ends of the range to be measured. This is especially true if the measurement range is within the measurement variation of the device.</p>
            <p>8.3.2 If measurements are to be made over a very limited range of thicknesses near or below 3 mm [0.125 in], it is possible to standardize the instrument with the technique in Case II using appropriate thin standardization blocks. This will produce a correction curve that is approximately correct over that limited range. Note that it will be substantially in error at thicker measurements.</p>
            <p>8.3.3 If a wide range of thicknesses is to be measured, it may be more suitable to standardize as in Case II using standardization blocks at the high end of the range and perhaps halfway toward the low end. Following this, empirical corrections can be established for the very thin end of the range.</p>
            <p>8.3.4 For a direct-reading panel-type meter display, it is convenient to build these corrections into the display as a nonlinear function.</p>
            <p>8.3.5 For cylindrical components with concentric surfaces, best results are often achieved when the sound propagation path is aligned axially to the component.</p>
        </div>
        <div class="subsection">
            <h4>8.4 Case IV—Thick Sections:</h4>
            <p>8.4.1 Conditions—For use when a high degree of accuracy is required for thick sections.</p>
            <p>8.4.2 Direct contact search unit and initial pulse synchronization are used. The display start is delayed as described in 8.4.4. All display elements should be linear. Incremental thickness is displayed on the A-scan display.</p>
            <p>8.4.3 Basic standardization of the sweep will be made as described in Case I. The standardization block chosen for this standardization should have a thickness that will permit standardizing the full-sweep distance to adequate accuracy, that is, about 10 mm [0.4 in.] or 25 mm [1.0 in.] full scale.</p>
            <p>8.4.4 After basic standardization, the sweep must be delayed. For instance, if the nominal part thickness is expected to be from 50 to 60 mm [2.0 to 2.4 in.], and the basic standardization block is 10 mm [0.4 in.], and the incremental thickness displayed will also be from 50 to 60 mm [2.0 to 2.4 in.], the following steps are required. Adjust the delay control so that the fifth back wall echo of the basic standardization block, equivalent to 50 mm [2.0 in.], is aligned with the 0 reference on the A-scan display. The sixth back wall echo should then occur at the right edge of the standardized sweep.</p>
            <p>8.4.5 This standardization can be checked on a known block of the approximate total thickness.</p>
            <p>8.4.6 The reading obtained on the unknown specimen must be added to the value delayed off screen. For example, if the reading is 4 mm [0.16 in.], the total thickness will be 54 mm [2.16 in.].</p>
        </div>
    </div>
    <div class="subsection">
        <h4>9. Technical Hazards</h4>
        <p>9.1 Dual search units may also be used effectively with rough surface conditions. In this case, only the first returned echo, such as from the bottom of a pit, is used in the measurement. Generally, a localized scanning search is made to detect the minimum remaining wall.</p>
        <p>9.2 Material Properties—The instrument should be standardized on a material having acoustic velocities and attenuations as similar as possible to the material to be measured. The tolerance shall be controlled by the procedure (6.4) unless otherwise specified by the contractual agreement. Note that the properties of components made of the same alloy can vary significantly. Where possible, standardization should be confirmed by direct dimensional measurement of the material to be examined.</p>
        <p>9.3 Scanning—The maximum speed of scanning should be stated in the procedure. Material conditions, type of equipment, and operator capabilities may require slower scanning.</p>
        <p>9.4 Geometry:</p>
        <p>9.4.1 Highest accuracy can be obtained from materials with parallel or concentric surfaces. In many cases, it is possible to obtain measurements from materials with nonparallel surfaces. However, the accuracy of the reading may be limited and the reading obtained is generally that of the thinnest portion of the section being interrogated by the sound beam at a given instant. The maximum deviation from parallel is generally less than the half angle beam spread. This equation is generally expressed with K = 1.22, which corresponds to zero amplitude. A more practical value may be K = 0.87, which corresponds to -20 dB in the reflection field.</p>
        <p>ϕ ≤ sen⁻¹(K V / Fc D) (1)</p>
        <p>where:</p>
        <p>ϕ = Angular deviation from parallel,</p>
        <p>V = Sound velocity in the material,</p>
        <p>fc = Center frequency of the transducer,</p>
        <p>D = Diameter of the transducer, and</p>
        <p>K = Beam spread constant.</p>
        <p>9.4.2 Relatively small-diameter curves often require special techniques and equipment. When small diameters are to be measured, special procedures, which may include additional specimens, shall be required to ensure accuracy of setup and readout.</p>
        <p>9.5 High-temperature materials, up to about 540 °C [1000 °F], can be measured with specially designed instruments with high-temperature compensation, search unit assemblies, and couplants. Normalization of apparent thickness readings for elevated temperatures is required. A rule of thumb often used is as follows: The apparent thickness reading obtained from steel walls having elevated temperatures is high (too thick) by a factor of about 1 % per 55 °C [100 °F]. Thus, if the instrument was standardized on a piece of similar material at 20 °C [68 °F], and if the reading was obtained with a surface temperature of 460 °C [860 °F], the apparent reading should be reduced by 8 %. This correction is an average one for many types of steel. Other corrections would have to be determined empirically for other materials.</p>
        <p>9.6 Back Wall Reflection Wavetrain—Direct-thickness readout instruments read the thickness at the first half cycle of the wavetrain that exceeds a set amplitude and a fixed time. If the amplitude of the back wall reflection from the measured material is different from the amplitude of the back wall reflection from the standardization blocks, the thickness readout may read to a different half cycle in the wavetrain, thereby producing an error. This may be reduced by:</p>
        <p>9.6.1 Using reference blocks having attenuation characteristics equal to those in the measured material or adjusting back wall reflection amplitude to be equal for both the standardizing blocks and measured material.</p>
        <p>9.6.2 Using an instrument with automatic gain control to produce a constant amplitude back wall reflection.</p>
        <p>9.7 Readouts—A-scan displays are recommended where reflecting surfaces are rough, pitted, or corroded.</p>
        <p>9.7.1 Direct-thickness readout, without an A-scan display, presents hazards of misadjustment and misreading under certain test conditions, especially thin sections, rough corroded surfaces, and rapidly changing thickness ranges.</p>
        <p>9.8 Reference Standards—Greater accuracy can be obtained when the equipment is calibrated on areas of known thickness of the material to be measured instead of standard reference blocks. These areas should be measured with a certified physical gauge of sufficient sensitivity and accuracy.</p>
        <p>9.9 Variations in echo signal strength may produce an error equivalent to one or more half-cycles of the RF frequency, dependent on instrumentation characteristics.</p>
    </div>
    <div class="subsection">
        <h4>10. Procedure Requirements</h4>
        <p>10.1 In developing the detailed procedure, the following items should be considered:</p>
        <p>10.1.1 Applicability and accuracy requirements.</p>
        <p>10.1.1.1 Instrument manufacturer's operating instructions.</p>
        <p>10.1.2 Scope of materials/objects to be measured.</p>
        <p>10.1.3 Sample geometry.</p>
        <p>10.1.4 Definitions.</p>
        <p>10.1.5 Requirements.</p>
        <p>10.1.5.1 Personnel.</p>
        <p>10.1.5.2 Equipment.</p>
        <p>10.1.5.3 Procedure qualification.</p>
        <p>10.1.5.4 Training or certification levels.</p>
        <p>10.1.6 Procedure.</p>
        <p>10.1.6.1 Measurement conditions.</p>
        <p>10.1.6.2 Surface preparation and couplant.</p>
        <p>10.1.6.3 Standardization and allowable tolerances.</p>
        <p>10.1.6.4 Scanning parameters.</p>
        <p>10.1.7 Report.</p>
        <p>10.1.7.1 Procedure used.</p>
        <p>10.1.7.2 Standardization record.</p>
        <p>10.1.7.3 Measurement record.</p>
    </div>
    <div class="subsection">
        <h4>11. Report</h4>
        <p>11.1 Record the following information at the time of the measurements and include it in the report:</p>
        <p>11.1.1 Examination procedure.</p>
        <p>11.1.1.1 Type of instrument.</p>
        <p>11.1.1.2 Standardization blocks, size and material type.</p>
        <p>11.1.1.3 Size, frequency, and type of search unit.</p>
        <p>11.1.1.4 Scanning method.</p>
        <p>11.1.1.5 Sample geometry.</p>
        <p>11.1.1.6 Gate details.</p>
        <p>11.1.2 Results.</p>
        <p>11.1.2.1 Maximum and minimum thickness measurements.</p>
        <p>11.1.2.2 Location of measurements.</p>
        <p>11.1.3 Personnel data, certification level.</p>
    </div>
    <div class="subsection">
        <h4>12. Keywords</h4>
        <p>12.1 contact examination; nondestructive testing; pulse echo; thickness measurement; ultrasonics</p>
    </div>
    <div class="subsection">
        <h4>APPENDIXES</h4>
        <p>(Nonmandatory Information)</p>
        <div class="subsection">
            <h4>X1. TYPICAL MULTI-STEP THICKNESS GAGE REFERENCE BLOCKS</h4>
            
            <div class="figure-container">
                <img src="images/asmev_figure_x1_1.png" class="figure-image">
                <p class="figure-caption">FIG. X1.1 Typical Four-Step Thickness Reference Blocks</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asmev_figure_x1_2.png" class="figure-image">
                <p class="figure-caption">FIG. X1.2 Typical Five-Step Thickness Reference Blocks</p>
            </div>
        </div>
        <div class="subsection">
            <h4>X2. DUAL TRANSDUCER NONLINEARITY</h4>
            <p>X2.1 See Fig. X2.1.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_x2_1.png" class="figure-image">
                <p class="figure-caption">FIG. X2.1 Analytical Nonlinearity of Dual Transducers</p>
            </div>
        </div>
    </div>
    `,
    contentEs: `<h3>ARTÍCULO 23 PRÁCTICA ESTÁNDAR PARA LA MEDICIÓN DE ESPESOR POR EL MÉTODO DE CONTACTO MANUAL DE ULTRASONIDOS DE ECO DE PULSO</h3>
    <div class="subsection">
        <h4>1. Alcance</h4>
        <p>1.1 Esta práctica proporciona directrices para medir el espesor de materiales utilizando el método de contacto de eco de pulso a temperaturas que no excedan los 93 °C [200 °F].</p>
        <p>1.2 Esta práctica es aplicable a cualquier material en el que las ondas ultrasónicas se propaguen a una velocidad constante a través de la pieza, y del cual se puedan obtener y resolver reflexiones de la pared posterior.</p>
        <p>1.3 Esta práctica es principalmente para componentes planos con superficies paralelas y tiene aplicabilidad limitada para componentes con superficies no paralelas o concéntricas según 1.2.</p>
        <p>1.4 Unidades—Los valores expresados en unidades SI o unidades de pulgada-libra deben considerarse por separado como estándar. Los valores expresados en cada sistema no son necesariamente equivalentes exactos; por lo tanto, para garantizar la conformidad con el estándar, cada sistema debe usarse independientemente del otro, y los valores de los dos sistemas no deben combinarse.</p>
        <p>1.5 Este estándar no pretende abordar todas las preocupaciones de seguridad, si las hubiera, asociadas con su uso. Es responsabilidad del usuario de este estándar establecer prácticas adecuadas de seguridad, salud y medio ambiente y determinar la aplicabilidad de las limitaciones regulatorias antes de su uso.</p>
        <p>1.6 Este estándar internacional fue desarrollado de acuerdo con los principios internacionalmente reconocidos sobre normalización establecidos en la Decisión sobre Principios para el Desarrollo de Normas Internacionales, Guías y Recomendaciones emitida por el Comité de Obstáculos Técnicos al Comercio (OTC) de la Organización Mundial del Comercio.</p>
    </div>
    <div class="subsection">
        <h4>2. Documentos de Referencia</h4>
        <p>2.1 Estándares ASTM:</p>
        <p>E317 Práctica para Evaluar las Características de Rendimiento de Instrumentos y Sistemas de Prueba Ultrasónica de Eco de Pulso sin el Uso de Instrumentos de Medición Electrónicos</p>
        <p>E494 Práctica para Medir la Velocidad Ultrasónica en Materiales por el Método Comparativo de Eco de Pulso</p>
        <p>E543 Especificación para Agencias que Realizan Pruebas No Destructivas</p>
        <p>E1316 Terminología para Exámenes No Destructivos</p>
        <p>2.2 Documentos ASNT:</p>
        <p>Manual de Pruebas No Destructivas, 2ª Edición, Vol 7</p>
        <p>SNT-TC-1A Práctica Recomendada para la Calificación y Certificación de Personal en Pruebas No Destructivas</p>
        <p>ANSI/ASNT CP-189 Estándar para la Calificación y Certificación de Personal de Pruebas No Destructivas</p>
        <p>2.3 Documento AIA:</p>
        <p>NAS-410 Certificación y Calificación de Personal de Pruebas No Destructivas</p>
        <p>2.4 Estándar ISO:</p>
        <p>ISO 9712 Ensayos No Destructivos—Calificación y Certificación de Personal END</p>
    </div>
    <div class="subsection">
        <h4>3. Terminología</h4>
        <p>3.1 Definiciones—Para las definiciones de los términos utilizados en esta práctica, consulte la Terminología E1316.</p>
    </div>
    <div class="subsection">
        <h4>4. Resumen de la Práctica</h4>
        <p>4.1 El espesor (T), cuando se mide por el método ultrasónico de eco de pulso, es un producto de la velocidad del sonido en el material y la mitad del tiempo de tránsito (ida y vuelta) a través del material.</p>
        <p>T = Vt/2</p>
        <p>donde:</p>
        <p>T = Espesor del componente,</p>
        <p>V = Velocidad del sonido en el material, y</p>
        <p>t = Tiempo de tránsito del camino del sonido.</p>
        <p>4.2 El instrumento ultrasónico de eco de pulso mide el tiempo de tránsito del pulso ultrasónico a través de la pieza.</p>
        <p>4.3 La velocidad en el material que se está examinando es una función de las propiedades físicas del material. Generalmente se asume que es constante para una clase dada de materiales. Su valor aproximado puede obtenerse de la Tabla X3.1 en la Práctica E494 o del Manual de Pruebas No Destructivas, o puede determinarse empíricamente.</p>
        <p>4.4 Se requieren uno o más bloques de referencia que tengan velocidad conocida, o del mismo material a examinar, y que tengan espesores medidos con precisión y en el rango de espesores a medir. Generalmente es deseable que los espesores sean "números redondos" en lugar de valores diversos impares. Un bloque debe tener un valor de espesor cerca del máximo del rango de interés y otro bloque cerca del espesor mínimo.</p>
        <p>4.5 El elemento de visualización (pantalla A-scan, medidor o pantalla digital) del instrumento debe ajustarse para presentar valores convenientes de espesor dependiendo del rango que se esté utilizando. El control para esta función puede tener diferentes nombres en diferentes instrumentos, incluyendo rango, barrido, estandarización de material o velocidad.</p>
        <p>4.6 Los circuitos de temporización en diferentes instrumentos utilizan varios esquemas de conversión. Un método común es la llamada conversión tiempo/análogo en la que el tiempo medido por el instrumento se convierte en un voltaje de corriente continua proporcional que luego se aplica al dispositivo de lectura. Otra técnica utiliza un oscilador de muy alta frecuencia que es modulado o enclavado por las indicaciones de eco apropiadas, la salida se usa directamente para lecturas digitales adecuadas o se convierte en un voltaje para otra presentación. Una relación del tiempo de tránsito versus el espesor se muestra gráficamente en la Fig. 1.</p>
        
        <div class="figure-container">
            <img src="images/asmev_figure_1.png" class="figure-image">
            <p class="figure-caption">FIG. 1 Relación Tiempo de Tránsito/Espesor</p>
        </div>
    </div>
    <div class="subsection">
        <h4>5. Significado y Uso</h4>
        <p>5.1 Las técnicas descritas proporcionan medición indirecta del espesor de secciones de materiales que no excedan los 93 °C [200 °F]. Las mediciones se realizan desde un lado del objeto, sin requerir acceso a la superficie posterior.</p>
        <p>5.2 Las mediciones de espesor ultrasónico se utilizan extensamente en formas básicas y productos de muchos materiales, en piezas mecanizadas de precisión, y para determinar el adelgazamiento de pared en equipos de proceso causado por corrosión y erosión.</p>
        <p>5.3 Las recomendaciones para determinar las capacidades y limitaciones de los medidores de espesor ultrasónico para aplicaciones específicas pueden encontrarse en las referencias citadas.</p>
    </div>
    <div class="subsection">
        <h4>6. Base de Aplicación</h4>
        <p>6.1 Los siguientes elementos están sujetos a acuerdo contractual entre las partes que utilizan o hacen referencia a esta práctica.</p>
        <p>6.2 Calificación del Personal:</p>
        <p>6.2.1 Si se especifica en el acuerdo contractual, el personal que realice los exámenes según este estándar deberá estar calificado de acuerdo con una práctica o estándar de calificación de personal END nacional o internacionalmente reconocido como ANSI/ASNT CP-189, SNT-TC-1A, NAS-410, ISO 9712, o un documento similar y certificado por el empleador o agencia de certificación, según corresponda. La práctica o estándar utilizado y su revisión aplicable deberán identificarse en el acuerdo contractual entre las partes usuarias.</p>
        <p>6.3 Calificación de Agencias No Destructivas—Si se especifica en el acuerdo contractual, las agencias END deberán estar calificadas y evaluadas como se describe en la Especificación E543. La edición aplicable de la Especificación E543 deberá especificarse en el acuerdo contractual.</p>
        <p>6.4 Procedimientos y Técnicas—Los procedimientos y técnicas a utilizar serán los especificados en el acuerdo contractual.</p>
        <p>6.5 Preparación de la Superficie—Los criterios de preparación de la superficie previa al examen deberán especificarse en el acuerdo contractual.</p>
    </div>
    <div class="subsection">
        <h4>7. Aparatos</h4>
        <p>7.1 Instrumentos—Los instrumentos de medición de espesor se dividen en tres grupos: (1) detectores de defectos con lectura de pantalla A-scan, (2) detectores de defectos con pantalla A-scan y lectura directa de espesor, y (3) lectura directa de espesor.</p>
        <p>7.1.1 Los detectores de defectos con lecturas de pantalla A-scan muestran información de tiempo/amplitud. Las determinaciones de espesor se realizan leyendo la distancia entre el pulso inicial corregido a cero (disparado por pulso o controlado por retardo) y el primer eco retornado (reflexión de la pared posterior), o entre múltiples reflexiones de la pared posterior, en una línea base estandarizada de la pantalla A-scan. La línea base de la pantalla A-scan debe ajustarse para los incrementos de espesor deseados.</p>
        <p>7.1.2 Los detectores de defectos con lectura numérica son una combinación de instrumento de detección de defectos por ultrasonido de pulso con pantalla A-scan y circuitos adicionales que proporcionan información digital de espesor. El espesor del material puede medirse electrónicamente y presentarse en una lectura digital. La pantalla A-scan proporciona una verificación de la validez de la medición electrónica al revelar variables de medición, como discontinuidades internas o variaciones en la fuerza del eco, que podrían resultar en lecturas inexactas.</p>
        <p>7.1.3 Los instrumentos de lectura de espesor son versiones modificadas del instrumento de eco de pulso. El tiempo transcurrido entre el pulso inicial y el primer eco o entre múltiples ecos se convierte en una lectura de medidor o digital. Los instrumentos están diseñados para la medición y lectura numérica directa de rangos específicos de espesor y materiales.</p>
        <p>7.1.4 Se requiere linealidad de la base de tiempo para que un cambio en el espesor del material produzca un cambio correspondiente en el espesor indicado. Si se utiliza una pantalla A-Scan como lectura, su linealidad horizontal puede verificarse utilizando la Práctica E317.</p>
        <p>7.2 Unidades de Búsqueda—La mayoría de las unidades de búsqueda tipo eco de pulso (haz recto de contacto, línea de retardo y elemento dual) son aplicables si se utilizan instrumentos detectores de defectos. Si un instrumento de lectura de espesor tiene la capacidad de leer secciones delgadas, generalmente se utiliza una unidad de búsqueda altamente amortiguada y de alta frecuencia. Generalmente se requieren unidades de búsqueda de línea de retardo de alta frecuencia (10 MHz o superior) para espesores inferiores a aproximadamente 0.6 mm [0.025 pulg.]. Las mediciones de materiales a altas temperaturas requieren unidades de búsqueda diseñadas especialmente para la aplicación. Cuando se utilizan unidades de búsqueda de elemento dual, su no linealidad inherente generalmente requiere correcciones especiales para secciones delgadas. (Véase la Fig. 2 y la Fig. X2.1.) Para un rendimiento óptimo, a menudo es necesario que el instrumento y las unidades de búsqueda estén emparejados.</p>
        
        <div class="figure-container">
            <img src="images/asmev_figure_2.png" class="figure-image">
            <p class="figure-caption">FIG. 2 No Linealidad de Transductor Dual</p>
        </div>
        
        <p>7.3 Bloques de Estandarización—Los requisitos generales para los bloques de estandarización apropiados se dan en 4.4, 8.1.3, 8.2.2.1, 8.3.2 y 8.4.3. Los bloques de múltiples pasos que pueden ser útiles para estos procedimientos de estandarización se describen en el Apéndice X1 (Figs. X1.1 y X1.2).</p>
    </div>
    <div class="subsection">
        <h4>8. Estandarización de Aparatos</h4>
        <div class="subsection">
            <h4>8.1 Caso I—Unidad de Búsqueda de Elemento Único de Contacto Directo:</h4>
            <p>8.1.1 Condiciones—El inicio de la pantalla está sincronizado con el pulso inicial. Todos los elementos de visualización son lineales. El espesor completo se muestra en la pantalla A-scan.</p>
            <p>8.1.2 Bajo estas condiciones, podemos asumir que la línea de conversión de velocidad pivota efectivamente alrededor del origen (Fig. 1). Puede ser necesario restar el tiempo de la placa de desgaste, requiriendo un uso menor del control de retardo. Se recomienda que se utilicen bloques de estandarización que proporcionen un mínimo de dos espesores que abarquen el rango de espesor para verificar la precisión de rango completo.</p>
            <p>8.1.3 Coloque la unidad de búsqueda en un bloque de estandarización de espesor conocido con acoplante adecuado y ajuste los controles del instrumento (estandarización de material, rango, barrido o velocidad) hasta que la pantalla presente la lectura de espesor apropiada.</p>
            <p>8.1.4 Luego, las lecturas deben verificarse y ajustarse en bloques de estandarización con espesor de menor valor para verificar la precisión general del sistema.</p>
        </div>
        <div class="subsection">
            <h4>8.2 Caso II—Unidad de Búsqueda de Elemento Único de Línea de Retardo:</h4>
            <p>8.2.1 Condiciones—Cuando se utiliza esta unidad de búsqueda, es necesario que el equipo sea capaz de corregir el tiempo durante el cual el sonido pasa a través de la línea de retardo para que el final de la línea de retardo pueda hacerse coincidir con espesor cero. Esto requiere un llamado control de "retardo" en el instrumento o detección electrónica automática de espesor cero.</p>
            <p>8.2.2 En la mayoría de los instrumentos, si el circuito de estandarización de material se ajustó previamente para una velocidad de material dada, el control de retardo debe ajustarse hasta obtener una lectura de espesor correcta en el instrumento. Sin embargo, si el instrumento debe estandarizarse completamente con la unidad de búsqueda de línea de retardo, se recomienda la siguiente técnica:</p>
            <p>8.2.2.1 Utilice al menos dos bloques de estandarización. Uno debe tener un espesor cercano al máximo del rango a medir y el otro bloque cerca del espesor mínimo. Por conveniencia, es deseable que el espesor sea "números redondos" para que la diferencia entre ellos también tenga un valor conveniente de "número redondo".</p>
            <p>8.2.2.2 Coloque la unidad de búsqueda secuencialmente en uno y luego en el otro bloque, y obtenga ambas lecturas. La diferencia entre estas dos lecturas debe calcularse. Si la diferencia de espesor de lectura es menor que la diferencia de espesor real, coloque la unidad de búsqueda en el espécimen más grueso, y ajuste el control de estandarización de material para expandir el rango de espesor. Si la diferencia de espesor de lectura es mayor que la diferencia de espesor real, coloque la unidad de búsqueda en el espécimen más grueso, y ajuste el control de estandarización de material para disminuir el rango de espesor. Generalmente se recomienda una cierta cantidad de sobrecorrección. Vuelva a colocar la unidad de búsqueda secuencialmente en ambos bloques y note las diferencias de lectura mientras realiza correcciones adicionales apropiadas. Cuando el diferencial de espesor de lectura sea igual al diferencial de espesor real, el rango de espesor del material está ajustado correctamente. Un solo ajuste del control de retardo debería permitir lecturas correctas tanto en el extremo alto como en el bajo del rango de espesor.</p>
            <p>8.2.3 Una técnica alternativa para las unidades de búsqueda de línea de retardo es una variación de la descrita en 8.2.2. Se realizan una serie de ajustes secuenciales, utilizando el control de "retardo" para proporcionar lecturas correctas en el bloque de estandarización más delgado y el control de "rango" para corregir las lecturas en el bloque más grueso. A veces es útil una sobrecorrección moderada. Cuando ambas lecturas son "correctas", el instrumento está ajustado adecuadamente.</p>
        </div>
        <div class="subsection">
            <h4>8.3 Caso III—Unidades de Búsqueda Duales:</h4>
            <p>8.3.1 El método descrito en 8.2 (Caso II) también es adecuado para equipos que utilizan unidades de búsqueda duales en los rangos más gruesos, por encima de 3 mm [0.125 pulg.]. Sin embargo, por debajo de esos valores hay un error inherente debido a la ruptura en la aproximación de ángulo pequeño. Así, el tiempo de tránsito ya no es proporcional linealmente al espesor, y la no linealidad aumenta con la disminución del espesor. La variación también se muestra esquemáticamente en la Fig. 2(a) y la Fig. X2.1(a). Los valores de error típicos se muestran en la Fig. 2(b) y se amplían en la Fig. X2.1(b).</p>
            <p>NOTA 1—Muchas unidades de búsqueda de elemento dual simples, de lectura directa, pueden no mostrar variación apreciable en las lecturas de espesor para los bloques de estandarización en los extremos alto y bajo del rango a medir. Esto es especialmente cierto si el rango de medición está dentro de la variación de medición del dispositivo.</p>
            <p>8.3.2 Si las mediciones se van a realizar en un rango muy limitado de espesores cerca o por debajo de 3 mm [0.125 pulg.], es posible estandarizar el instrumento con la técnica del Caso II utilizando bloques de estandarización delgados apropiados. Esto producirá una curva de corrección que es aproximadamente correcta en ese rango limitado. Tenga en cuenta que estará sustancialmente en error en mediciones más gruesas.</p>
            <p>8.3.3 Si se va a medir un amplio rango de espesores, puede ser más adecuado estandarizar como en el Caso II utilizando bloques de estandarización en el extremo alto del rango y quizás a mitad del camino hacia el extremo bajo. Después de esto, se pueden establecer correcciones empíricas para el extremo muy delgado del rango.</p>
            <p>8.3.4 Para una pantalla de tipo panel de lectura directa, es conveniente incorporar estas correcciones en la pantalla como una función no lineal.</p>
            <p>8.3.5 Para componentes cilíndricos con superficies concéntricas, a menudo se obtienen los mejores resultados cuando el camino de propagación del sonido se alinea axialmente al componente.</p>
        </div>
        <div class="subsection">
            <h4>8.4 Caso IV—Secciones Gruesas:</h4>
            <p>8.4.1 Condiciones—Para uso cuando se requiere un alto grado de precisión para secciones gruesas.</p>
            <p>8.4.2 Se utiliza una unidad de búsqueda de contacto directo y sincronización de pulso inicial. El inicio de la pantalla se retrasa como se describe en 8.4.4. Todos los elementos de visualización deben ser lineales. El espesor incremental se muestra en la pantalla A-scan.</p>
            <p>8.4.3 La estandarización básica del barrido se realizará como se describe en el Caso I. El bloque de estandarización elegido para esta estandarización debe tener un espesor que permita estandarizar la distancia de barrido completo con precisión adecuada, es decir, unos 10 mm [0.4 pulg.] o 25 mm [1.0 pulg.] a escala completa.</p>
            <p>8.4.4 Después de la estandarización básica, el barrido debe retrasarse. Por ejemplo, si se espera que el espesor nominal de la pieza sea de 50 a 60 mm [2.0 a 2.4 pulg.], y el bloque de estandarización básico es de 10 mm [0.4 pulg.], y el espesor incremental mostrado también será de 50 a 60 mm [2.0 a 2.4 pulg.], se requieren los siguientes pasos. Ajuste el control de retardo para que el quinto eco de la pared posterior del bloque de estandarización básico, equivalente a 50 mm [2.0 pulg.], se alinee con la referencia 0 en la pantalla A-scan. El sexto eco de la pared posterior debe ocurrir entonces en el borde derecho del barrido estandarizado.</p>
            <p>8.4.5 Esta estandarización puede verificarse en un bloque conocido del espesor total aproximado.</p>
            <p>8.4.6 La lectura obtenida en el espécimen desconocido debe sumarse al valor retrasado fuera de la pantalla. Por ejemplo, si la lectura es de 4 mm [0.16 pulg.], el espesor total será de 54 mm [2.16 pulg.].</p>
        </div>
    </div>
    <div class="subsection">
        <h4>9. Riesgos Técnicos</h4>
        <p>9.1 Las unidades de búsqueda duales también pueden usarse eficazmente con condiciones de superficie rugosa. En este caso, solo se utiliza el primer eco retornado, como el del fondo de un hoyo, en la medición. Generalmente, se realiza una búsqueda de exploración localizada para detectar el espesor mínimo restante de la pared.</p>
        <p>9.2 Propiedades del Material—El instrumento debe estandarizarse en un material que tenga velocidades acústicas y atenuaciones lo más similares posibles al material a medir. La tolerancia debe ser controlada por el procedimiento (6.4) a menos que se especifique lo contrario en el acuerdo contractual. Tenga en cuenta que las propiedades de los componentes hechos de la misma aleación pueden variar significativamente. Cuando sea posible, la estandarización debe confirmarse mediante medición dimensional directa del material a examinar.</p>
        <p>9.3 Exploración—La velocidad máxima de exploración debe establecerse en el procedimiento. Las condiciones del material, el tipo de equipo y las capacidades del operador pueden requerir una exploración más lenta.</p>
        <p>9.4 Geometría:</p>
        <p>9.4.1 La mayor precisión puede obtenerse de materiales con superficies paralelas o concéntricas. En muchos casos, es posible obtener mediciones de materiales con superficies no paralelas. Sin embargo, la precisión de la lectura puede ser limitada y la lectura obtenida es generalmente la de la porción más delgada de la sección que está siendo interrogada por el haz de sonido en un instante dado. La desviación máxima de lo paralelo es generalmente menor que el medio ángulo de propagación del haz. Esta ecuación generalmente se expresa con K = 1.22, que corresponde a amplitud cero. Un valor más práctico puede ser K = 0.87, que corresponde a -20 dB en el campo de reflexión.</p>
        <p>ϕ ≤ sen⁻¹(K V / Fc D) (1)</p>
        <p>donde:</p>
        <p>ϕ = Desviación angular de lo paralelo,</p>
        <p>V = Velocidad del sonido en el material,</p>
        <p>fc = Frecuencia central del transductor,</p>
        <p>D = Diámetro del transductor, y</p>
        <p>K = Constante de propagación del haz.</p>
        <p>9.4.2 Las curvas de diámetro relativamente pequeño a menudo requieren técnicas y equipos especiales. Cuando se van a medir diámetros pequeños, se requerirán procedimientos especiales, que pueden incluir especímenes adicionales, para garantizar la precisión de la configuración y la lectura.</p>
        <p>9.5 Los materiales de alta temperatura, hasta unos 540 °C [1000 °F], pueden medirse con instrumentos diseñados especialmente con compensación de alta temperatura, conjuntos de unidades de búsqueda y acoplantes. Se requiere la normalización de las lecturas de espesor aparente para temperaturas elevadas. Una regla general que se usa a menudo es la siguiente: La lectura de espesor aparente obtenida de paredes de acero que tienen temperaturas elevadas es alta (demasiado gruesa) en un factor de aproximadamente 1 % por 55 °C [100 °F]. Así, si el instrumento se estandarizó en una pieza de material similar a 20 °C [68 °F], y si la lectura se obtuvo con una temperatura superficial de 460 °C [860 °F], la lectura aparente debe reducirse en un 8 %. Esta corrección es un promedio para muchos tipos de acero. Otras correcciones tendrían que determinarse empíricamente para otros materiales.</p>
        <p>9.6 Tren de Ondas de Reflexión de la Pared Posterior—Los instrumentos de lectura directa de espesor leen el espesor en el primer semiciclo del tren de ondas que excede una amplitud establecida y un tiempo fijo. Si la amplitud de la reflexión de la pared posterior del material medido es diferente de la amplitud de la reflexión de la pared posterior de los bloques de estandarización, la lectura de espesor puede leer un semiciclo diferente en el tren de ondas, produciendo así un error. Esto puede reducirse por:</p>
        <p>9.6.1 Utilizando bloques de referencia que tengan características de atenuación iguales a las del material medido o ajustando la amplitud de reflexión de la pared posterior para que sea igual tanto para los bloques de estandarización como para el material medido.</p>
        <p>9.6.2 Utilizando un instrumento con control automático de ganancia para producir una reflexión de la pared posterior de amplitud constante.</p>
        <p>9.7 Lecturas—Se recomiendan las pantallas A-scan donde las superficies reflectantes son rugosas, picadas o corroídas.</p>
        <p>9.7.1 La lectura directa de espesor, sin una pantalla A-scan, presenta riesgos de desajuste y lectura incorrecta bajo ciertas condiciones de prueba, especialmente secciones delgadas, superficies corroídas rugosas y rangos de espesor que cambian rápidamente.</p>
        <p>9.8 Estándares de Referencia—Se puede obtener mayor precisión cuando el equipo se calibra en áreas de espesor conocido del material a medir en lugar de bloques de referencia estándar. Estas áreas deben medirse con un calibrador físico certificado de suficiente sensibilidad y precisión.</p>
        <p>9.9 Las variaciones en la fuerza de la señal de eco pueden producir un error equivalente a uno o más semiciclos de la frecuencia RF, dependiendo de las características del instrumento.</p>
    </div>
    <div class="subsection">
        <h4>10. Requisitos del Procedimiento</h4>
        <p>10.1 Al desarrollar el procedimiento detallado, deben considerarse los siguientes elementos:</p>
        <p>10.1.1 Aplicabilidad y requisitos de precisión.</p>
        <p>10.1.1.1 Instrucciones de operación del fabricante del instrumento.</p>
        <p>10.1.2 Alcance de los materiales/objetos a medir.</p>
        <p>10.1.3 Geometría de la muestra.</p>
        <p>10.1.4 Definiciones.</p>
        <p>10.1.5 Requisitos.</p>
        <p>10.1.5.1 Personal.</p>
        <p>10.1.5.2 Equipo.</p>
        <p>10.1.5.3 Calificación del procedimiento.</p>
        <p>10.1.5.4 Niveles de capacitación o certificación.</p>
        <p>10.1.6 Procedimiento.</p>
        <p>10.1.6.1 Condiciones de medición.</p>
        <p>10.1.6.2 Preparación de la superficie y acoplante.</p>
        <p>10.1.6.3 Estandarización y tolerancias permitidas.</p>
        <p>10.1.6.4 Parámetros de exploración.</p>
        <p>10.1.7 Informe.</p>
        <p>10.1.7.1 Procedimiento utilizado.</p>
        <p>10.1.7.2 Registro de estandarización.</p>
        <p>10.1.7.3 Registro de mediciones.</p>
    </div>
    <div class="subsection">
        <h4>11. Informe</h4>
        <p>11.1 Registre la siguiente información en el momento de las mediciones e inclúyala en el informe:</p>
        <p>11.1.1 Procedimiento de examen.</p>
        <p>11.1.1.1 Tipo de instrumento.</p>
        <p>11.1.1.2 Bloques de estandarización, tamaño y tipo de material.</p>
        <p>11.1.1.3 Tamaño, frecuencia y tipo de unidad de búsqueda.</p>
        <p>11.1.1.4 Método de exploración.</p>
        <p>11.1.1.5 Geometría de la muestra.</p>
        <p>11.1.1.6 Detalles de la puerta.</p>
        <p>11.1.2 Resultados.</p>
        <p>11.1.2.1 Mediciones máxima y mínima de espesor.</p>
        <p>11.1.2.2 Ubicación de las mediciones.</p>
        <p>11.1.3 Datos del personal, nivel de certificación.</p>
    </div>
    <div class="subsection">
        <h4>12. Palabras Clave</h4>
        <p>12.1 examen de contacto; pruebas no destructivas; eco de pulso; medición de espesor; ultrasonidos</p>
    </div>
    <div class="subsection">
        <h4>APÉNDICES</h4>
        <p>(Información No Obligatoria)</p>
        <div class="subsection">
            <h4>X1. BLOQUES DE REFERENCIA TÍPICOS DE VARIOS PASOS PARA MEDIDORES DE ESPESOR</h4>
            
            <div class="figure-container">
                <img src="images/asmev_figure_x1_1.png" class="figure-image">
                <p class="figure-caption">FIG. X1.1 Bloques de Referencia Típicos de Cuatro Pasos</p>
            </div>
            
            <div class="figure-container">
                <img src="images/asmev_figure_x1_2.png" class="figure-image">
                <p class="figure-caption">FIG. X1.2 Bloques de Referencia Típicos de Cinco Pasos</p>
            </div>
        </div>
        <div class="subsection">
            <h4>X2. NO LINEALIDAD DE TRANSDUCTOR DUAL</h4>
            <p>X2.1 Véase la Fig. X2.1.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_x2_1.png" class="figure-image">
                <p class="figure-caption">FIG. X2.1 No Linealidad Analítica de Transductores Duales</p>
            </div>
        </div>
    </div>
    `
});