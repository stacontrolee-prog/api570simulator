// Registrar el código ASME BPVC.V-2023 si no existe
if (!getCode('ASMEV')) {
    console.error('El código ASME BPVC.V-2023 no está registrado. Registrándolo ahora...');
    registerCode('ASMEV', {
        title: "ASME Boiler and Pressure Vessel Code Section V - Nondestructive Examination",
        titleEs: "Código de Calderas y Recipientes a Presión ASME Sección V - Examen No Destructor"
    });
}

// Registrar el capítulo 7
registerChapter('ASMEV', {
    id: 7,
    title: "Magnetic Particle Examination",
    titleEs: "Examen por Partículas Magnéticas",
    content: `<h3>ARTICLE 7 MAGNETIC PARTICLE EXAMINATION</h3>
    <div class="subsection">
        <h4>T-710 SCOPE</h4>
        <p>When specified by the referencing Code Section, the magnetic particle examination techniques described in this Article shall be used. In general, this Article is in conformity with SE-709, Standard Guide for Magnetic Particle Testing. This document provides details to be considered in the procedures used.</p>
        <p>When this Article is specified by a referencing Code Section, the magnetic particle method described in this Article shall be used together with Article 1, General Requirements. Definition of terms used in this Article are in Article 1, Mandatory Appendix I, I-121.4, MT — Magnetic Particle.</p>
    </div>
    <div class="subsection">
        <h4>T-720 GENERAL</h4>
        <p>The magnetic particle examination method is applied to detect cracks and other discontinuities on the surfaces of ferromagnetic materials. The sensitivity is greatest for surface discontinuities and diminishes rapidly with increasing depth of discontinuities below the surface. Typical types of discontinuities that can be detected by this method are cracks, laps, seams, cold shuts, and laminations.</p>
        <p>In principle, this method involves magnetizing an area to be examined, and applying ferromagnetic particles (the examination's medium) to the surface. Particle patterns form on the surface where the magnetic field is forced out of the part and over discontinuities to cause a leakage field that attracts the particles. Particle patterns are usually characteristic of the type of discontinuity that is detected.</p>
        <p>Whichever technique is used to produce the magnetic flux in the part, maximum sensitivity will be to linear discontinuities oriented perpendicular to the lines of flux. For optimum effectiveness in detecting all types of discontinuities, each area is to be examined at least twice, with the lines of flux during one examination being approximately perpendicular to the lines of flux during the other.</p>
    </div>
    <div class="subsection">
        <h4>T-721 WRITTEN PROCEDURE REQUIREMENTS</h4>
        <div class="subsection">
            <h4>T-721.1 Requirements</h4>
            <p>Magnetic particle examination shall be performed in accordance with a written procedure, which shall, as a minimum, contain the requirements listed in Table T-721. The written procedure shall establish a single value, or range of values, for each requirement.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-721.png" class="figure-image">
                <p class="figure-caption">Table T-721 Requirements of a Magnetic Particle Examination Procedure</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-721.2 Procedure Qualification</h4>
            <p>When procedure qualification is specified by the referencing Code Section, a change of a requirement in Table T-721 identified as an essential variable shall require requalification of the written procedure by demonstration. A change of a requirement identified as a nonessential variable does not require requalification of the written procedure. All changes of essential or nonessential variables from those specified within the written procedure shall require revision of, or an addendum to, the written procedure.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-730 EQUIPMENT</h4>
        <p>A suitable and appropriate means for producing the necessary magnetic flux in the part shall be employed, using one or more of the techniques listed in and described in T-750.</p>
        <div class="subsection">
            <h4>T-731 EXAMINATION MEDIUM</h4>
            <p>The finely divided ferromagnetic particles used for the examination shall meet the following requirements.</p>
            <p>(a) Particle Types. The particles shall be treated to impart color (fluorescent pigments, nonfluorescent pigments, or both) in order to make them highly visible (contrasting) against the background of the surface being examined.</p>
            <p>(b) Particles. Dry and wet particles and suspension vehicles shall be in accordance with the applicable specifications listed in SE-709, para. 2.2.</p>
            <p>(c) Temperature Limitations. Particles shall be used within the temperature range limitations set by the manufacturer of the particles. Alternatively, particles may be used outside the particle manufacturer's recommendations providing the procedure is qualified in accordance with Article 1, T-150 at the proposed temperature.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-740 MISCELLANEOUS REQUIREMENTS</h4>
        <div class="subsection">
            <h4>T-741 SURFACE CONDITIONING</h4>
            <div class="subsection">
                <h4>T-741.1 Preparation</h4>
                <p>(a) Satisfactory results are usually obtained when the surfaces are in the as-welded, as-rolled, as-cast, or as forged conditions. However, surface preparation by grinding or machining may be necessary where surface irregularities could mask indications due to discontinuities.</p>
                <p>(b) Prior to magnetic particle examination, the surface to be examined and all adjacent areas within at least 1 in. (25 mm) shall be dry and free of all dirt, grease, lint, scale, welding flux and spatter, oil, or other extraneous matter that could interfere with the examination.</p>
                <p>(c) Cleaning may be accomplished using detergents, organic solvents, descaling solutions, paint removers, vapor degreasing, sand or grit blasting, or ultrasonic cleaning methods.</p>
                <p>(d) If nonmagnetic coatings are left on the part in the area being examined, it shall be demonstrated that indications can be detected through the existing maximum coating thickness applied. When AC yoke technique is used, the demonstration shall be in accordance with Mandatory Appendix I of this Article.</p>
            </div>
            <div class="subsection">
                <h4>T-741.2 Nonmagnetic Surface Contrast Enhancement</h4>
                <p>Nonmagnetic surface contrasts may be applied by the examiner to uncoated surfaces, only in amounts sufficient to enhance particle contrast. When nonmagnetic surface contrast enhancement is used, it shall be demonstrated that indications can be detected through the enhancement. Thickness measurement of this nonmagnetic surface contrast enhancement is not required.</p>
                <p>NOTE: Refer to T-150(a) for guidance for the demonstration required in T-741.1(d) and T-741.2.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-750 TECHNIQUE</h4>
        <div class="subsection">
            <h4>T-751 TECHNIQUES</h4>
            <p>One or more of the following five magnetization techniques shall be used:</p>
            <p>(a) prod technique</p>
            <p>(b) longitudinal magnetization technique</p>
            <p>(c) circular magnetization technique</p>
            <p>(d) yoke technique</p>
            <p>(e) multidirectional magnetization technique</p>
        </div>
        <div class="subsection">
            <h4>T-752 PROD TECHNIQUE</h4>
            <div class="subsection">
                <h4>T-752.1 Magnetizing Procedure</h4>
                <p>For the prod technique, magnetization is accomplished by portable prod type electrical contacts pressed against the surface in the area to be examined. To avoid arcing, a remote control switch, which may be built into the prod handles, shall be provided to permit the current to be applied after the prods have been properly positioned.</p>
            </div>
            <div class="subsection">
                <h4>T-752.2 Magnetizing Current</h4>
                <p>Direct or rectified magnetizing current shall be used. The current shall be 100 (minimum) amp/in. (4 amp/mm) to 125 (maximum) amp/in. (5 amp/mm) of prod spacing for sections 3/4 in. (19 mm) thick or greater. For sections less than 3/4 in. (19 mm) thick, the current shall be 90 amp/in. (3.6 amp/mm) to 110 amp/in. (4.4 amp/mm) of prod spacing.</p>
            </div>
            <div class="subsection">
                <h4>T-752.3 Prod Spacing</h4>
                <p>Prod spacing shall not exceed 8 in. (200 mm). Shorter spacing may be used to accommodate the geometric limitations of the area being examined or to increase the sensitivity, but prod spacings of less than 3 in. (75 mm) are usually not practical due to banding of the particles around the prods. The prod tips shall be kept clean and dressed. If the open circuit voltage of the magnetizing current source is greater than 25 V, lead, steel, or aluminum (rather than copper) tipped prods are recommended to avoid copper deposits on the part being examined.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-753 LONGITUDINAL MAGNETIZATION TECHNIQUE</h4>
            <div class="subsection">
                <h4>T-753.1 Magnetizing Procedure</h4>
                <p>For this technique, magnetization is accomplished by passing current through a multi-turn fixed coil (or cables) that is wrapped around the part or section of the part to be examined. This produces a longitudinal magnetic field parallel to the axis of the coil.</p>
                <p>If a fixed, prewound coil is used, the part shall be placed near the side of the coil during inspection. This is of special importance when the coil opening is more than 10 times the cross-sectional area of the part.</p>
            </div>
            <div class="subsection">
                <h4>T-753.2 Magnetic Field Strength</h4>
                <p>Direct or rectified current shall be used to magnetize parts examined by this technique. The required field strength shall be calculated based on the length L and the diameter D of the part in accordance with (a) and (b), or as established in (d) and (e), below. Long parts shall be examined in sections not to exceed 18 in. (450 mm), and 18 in. (450 mm) shall be used for the part L in calculating the required field strength. For noncylindrical parts, D shall be the maximum cross-sectional diagonal.</p>
                <p>(a) Parts With L/D Ratios Equal to or Greater Than 4. The magnetizing current shall be within 10% of the ampere-turns' value determined as follows: Ampere-turns = 35,000 / (L/D) +2</p>
                <p>(b) Parts With L/D Ratios Less Than 4 but Not Less Than 2. The magnetizing ampere-turns shall be within 10% of the ampere-turns' value determined as follows: Ampere-turns = 45,000 / (L/D)</p>
                <p>(c) Parts With L/D Ratios Less Than 2. Coil magnetization technique cannot be used.</p>
                <p>(d) If the area to be magnetized extends beyond 9 in. (225 mm) on either side of the coil's center, field adequacy shall be demonstrated using a magnetic field indicator or artificial flaw shims per T-764.</p>
                <p>(e) For large parts due to size and shape, the magnetizing current shall be 1200 ampere-turns to 4500 ampere-turns. The field adequacy shall be demonstrated using artificial flaw shims or a pie-shaped magnetic field indicator in accordance with T-764. A Hall-Effect probe gaussmeter shall not be used with encircling coil magnetization techniques.</p>
            </div>
            <div class="subsection">
                <h4>T-753.3 Magnetizing Current</h4>
                <p>The current required to obtain the necessary magnetizing field strength shall be determined by dividing the ampere-turns obtained in steps T-753.2(a) or T-753.2(b) by the number of turns in the coil as follows: Ampere (meter reading) = ampere-turns / turns</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-754 CIRCULAR MAGNETIZATION TECHNIQUE</h4>
            <div class="subsection">
                <h4>T-754.1 Direct Contact Technique</h4>
                <p>(a) Magnetizing Procedure. For this technique, magnetization is accomplished by passing current through the part to be examined. This produces a circular magnetic field that is approximately perpendicular to the direction of current flow in the part.</p>
                <p>(b) Magnetizing Current. Direct or rectified (half-wave rectified or full-wave rectified) magnetizing current shall be used.</p>
                <p>(1) The current shall be 300 amp/in. (12 A/mm) to 800 amp/in. (31 A/mm) of outer diameter.</p>
                <p>(2) For parts with geometric shapes other than round, the greatest cross-sectional diagonal in a plane at right angles to the current flow shall be used in lieu of the outer diameter in (1) above.</p>
                <p>(3) If the current levels required for (1) cannot be obtained, the maximum current obtainable shall be used and the field adequacy shall be demonstrated in accordance with T-764.</p>
            </div>
            <div class="subsection">
                <h4>T-754.2 Central Conductor Technique</h4>
                <p>(a) Magnetizing Procedure. For this technique, a central conductor is used to examine the internal surfaces of cylindrically or ring-shaped parts. The central conductor technique may also be used for examining the outside surfaces of these shapes. Where large diameter cylinders are to be examined, the conductor shall be positioned close to the internal surface of the cylinder. When the conductor is not centered, the circumference of the cylinder shall be examined in increments. Field strength measurements in accordance with T-764 shall be used, to determine the extent of the arc that may be examined for each conductor position or the rules in (c) below may be followed. Bars or cables, passed through the bore of a cylinder, may be used to induce circular magnetization.</p>
                <p>(b) Magnetizing Current. The field strength required shall be equal to that determined in T-754.1(b) for a single-turn central conductor. The magnetic field will increase in proportion to the number of times the central conductor cable passes through a hollow part. For example, if 6000 A are required to examine a part using a single pass central conductor, then 3000 A are required when 2 passes of the through-cable are used, and 1200 A are required if 5 passes are used (see Figure T-754.2.1). When the central conductor technique is used, magnetic field adequacy shall be verified using a magnetic particle field indicator in accordance with T-764.</p>
                <p>(c) Offset Central Conductor. When the conductor passing through the inside of the part is placed against an inside wall of the part, the current levels, as given in T-754.1(b)(1) shall apply, except that the diameter used for current calculations shall be the sum of the diameter of the central conductor and twice the wall thickness. The distance along the part circumference (exterior) that is effectively magnetized shall be taken as four times the diameter of the central conductor, as illustrated in Figure T-754.2.2. The entire circumference shall be inspected by rotating the part on the conductor, allowing for approximately a 10% magnetic field overlap.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-754_2_1.png" class="figure-image">
                    <p class="figure-caption">Figure T-754.2.1 Single-Pass and Two-Pass Central Conductor Technique</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-754_2_2.png" class="figure-image">
                    <p class="figure-caption">Figure T-754.2.2 The Effective Region of Examination When Using an Offset Central Conductor</p>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h4>T-755 YOKE TECHNIQUE</h4>
            <p>For this technique, alternating or direct current electromagnetic yokes, or permanent magnet yokes, shall be used.</p>
        </div>
        <div class="subsection">
            <h4>T-756 MULTIDIRECTIONAL MAGNETIZATION TECHNIQUE</h4>
            <div class="subsection">
                <h4>T-756.1 Magnetizing Procedure</h4>
                <p>For this technique, magnetization is accomplished by high amperage power packs operating as many as three circuits that are energized one at a time in rapid succession. The effect of these rapidly alternating magnetizing currents is to produce an overall magnetization of the part in multiple directions. Circular or longitudinal magnetic fields may be generated in any combination using the various techniques described in T-753 and T-754.</p>
            </div>
            <div class="subsection">
                <h4>T-756.2 Magnetic Field Strength</h4>
                <p>Only three phase, full-wave rectified current shall be used to magnetize the part. The initial magnetizing current requirements for each circuit shall be established using the previously described guidelines (see T-753 and T-754). The adequacy of the magnetic field shall be demonstrated using artificial flaw shims or a pie-shaped magnetic particle field indicator in accordance with T-764. A Hall-Effect probe gaussmeter shall not be used to measure field adequacy for the multidirectional magnetization technique. An adequate field shall be obtained in at least two nearly perpendicular directions, and the field intensities shall be balanced so that a strong field in one direction does not overwhelm the field in the other direction. For areas where adequate field strengths cannot be demonstrated, additional magnetic particle techniques shall be used to obtain the required two-directional coverage.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-760 CALIBRATION</h4>
        <div class="subsection">
            <h4>T-761 FREQUENCY OF CALIBRATION</h4>
            <div class="subsection">
                <h4>T-761.1 Magnetizing Equipment</h4>
                <p>(a) Frequency. Magnetizing equipment with an ammeter shall be calibrated at least once a year, or whenever the equipment has been subjected to major electric repair, periodic overhaul, or damage. If equipment has not been in use for a year or more, calibration shall be done prior to first use.</p>
                <p>(b) Procedure. The accuracy of the unit's meter shall be verified annually by equipment traceable to a national standard. Comparative readings shall be taken for at least three different current output levels encompassing the usable range.</p>
                <p>(c) Tolerance. The unit's meter reading shall not deviate by more than ±10% of full scale, relative to the actual current value as shown by the test meter.</p>
            </div>
            <div class="subsection">
                <h4>T-761.2 Light Meters</h4>
                <p>Light meters shall be calibrated at least once a year or whenever a meter has been repaired. If meters have not been in use for one year or more, calibration shall be done before being used.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-762 LIFTING POWER OF YOKES</h4>
            <p>(a) The magnetizing power of yokes shall be verified prior to use each day the yoke is used. The magnetizing power of yokes shall be verified whenever the yoke has been damaged or repaired.</p>
            <p>(b) Each alternating current electromagnetic yoke shall have a lifting power of at least 10 lb (4.5 kg) at the maximum pole spacing, with contact similar to what will be used during the examination.</p>
            <p>(c) Each direct current or permanent magnetic yoke shall have a lifting power of at least 40 lb (18 kg) at the maximum pole spacing, with contact similar to what will be used during the examination.</p>
            <p>(d) Each weight shall be weighed with a scale from a reputable manufacturer and stenciled with the applicable nominal weight prior to first use. A weight need only be verified again if damaged in a manner that could have caused potential loss of material.</p>
        </div>
        <div class="subsection">
            <h4>T-763 GAUSSMETERS</h4>
            <p>Hall-Effect probe gaussmeters used to verify magnetizing field strength in accordance with T-754 shall be calibrated at least once a year or whenever the equipment has been subjected to a major repair, periodic overhaul, or damage. If equipment has not been in use for a year or more, calibration shall be done prior to first use.</p>
        </div>
        <div class="subsection">
            <h4>T-764 MAGNETIC FIELD ADEQUACY AND DIRECTION</h4>
            <div class="subsection">
                <h4>T-764.1 Application</h4>
                <p>The use of magnetic field indicators, artificial shims, or Hall-Effect tangential-field probes are only permitted when specifically referenced by the following magnetizing techniques:</p>
                <p>(a) Longitudinal (T-753)</p>
                <p>(b) Circular (T-754)</p>
                <p>(c) Multidirectional (T-756)</p>
            </div>
            <div class="subsection">
                <h4>T-764.2 Magnetic Field Adequacy</h4>
                <p>The applied magnetic field shall have sufficient strength to produce satisfactory indications, but shall not be so strong that it causes masking of relevant indications by nonrelevant accumulations of magnetic particles. Factors that influence the required field strength include the size, shape, and material permeability of the part; the technique of magnetization; coatings; the method of particle application; and the type and location of discontinuities to be detected. When it is necessary to verify the adequacy of magnetic field strength, it shall be verified by using one or more of the following three methods.</p>
                <p>(a) Pie-Shaped Magnetic Particle Field Indicator. The indicator, shown in Figure T-764.2(a), shall be positioned on the surface to be examined, such that the copper plated side is away from the inspected surface. A suitable field strength is indicated when a clearly defined line (or lines) of magnetic particles form(s) across the copper face of the indicator when the magnetic particles are applied simultaneously with the magnetizing force. When a clearly defined line of particles is not formed, the magnetizing technique shall be changed as needed. Pie-type indicators are best used with dry particle procedures.</p>
                <p>(b) Artificial Flaw Shims. One of the shims shown in Figure T-764.2(b)(1) or Figure T-764.2(b)(2) whose orientation is such that it can have a component perpendicular to the applied magnetic field shall be used. Shims with linear notches shall be oriented so that at least one notch is perpendicular to the applied magnetic field. Shims with only circular notches may be used in any orientation. Shims shall be attached to the surface to be examined, such that the artificial flaw side of the shim is toward the inspected surface. A suitable field strength is indicated when a clearly defined line (or lines) of magnetic particles, representing the 30% depth flaw, appear(s) on the shim face when magnetic particles are applied simultaneously with the magnetizing force. When a clearly defined line of particles is not formed, the magnetizing technique shall be changed as needed. Shim-type indicators are best used with wet particle procedures.</p>
                <p>NOTE: The circular shims shown in Figure T-764.2(b)(2) illustration (b) also have flaw depths less and greater than 30%.</p>
                <p>(c) Hall-Effect Tangential-Field Probe. A gaussmeter and Hall-Effect tangential-field probe shall be used for measuring the peak value of a tangential field. The probe shall be positioned on the surface to be examined, such that the maximum field strength is determined. A suitable field strength is indicated when the measured field is within the range of 30 G to 60 G (2.4 kAm−1 to 4.8 kAm−1) while the magnetizing force is being applied. See Article 7, Nonmandatory Appendix A.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-764_2a.png" class="figure-image">
                    <p class="figure-caption">Figure T-764.2(a) Pie-Shaped Magnetic Particle Field Indicator</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-764_2b1.png" class="figure-image">
                    <p class="figure-caption">Figure T-764.2(b)(1) Artificial Flaw Shims</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-764_2b2.png" class="figure-image">
                    <p class="figure-caption">Figure T-764.2(b)(2) Artificial Flaw Shims</p>
                </div>
            </div>
            <div class="subsection">
                <h4>T-764.3 Magnetic Field Direction</h4>
                <p>The direction(s) of magnetization shall be determined by particle indications obtained using an indicator or shims as shown in Figure T-764.2(a), Figure T-764.2(b)(1), or Figure T-764.2(b)(2). When a clearly defined line of particles are not formed (a) in the desired direction, or (b) in at least two nearly perpendicular directions for the multidirectional technique, the magnetizing technique shall be changed as needed.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-765 WET PARTICLE CONCENTRATION AND CONTAMINATION</h4>
            <p>Wet Horizontal Units shall have the bath concentration and bath contamination determined by measuring its settling volume. This is accomplished through the use of a pear-shaped centrifuge tube with a 1-mL stem (0.05-mL divisions) for fluorescent particle suspensions or a 1.5-mL stem (0.1-mL divisions) for nonfluorescent suspensions (see SE-709, Appendix X5). Before sampling, the suspension should be run through the recirculating system for at least 30 min to ensure thorough mixing of all particles which could have settled on the sump screen and along the sides or bottom of the tank.</p>
            <div class="subsection">
                <h4>T-765.1 Concentration</h4>
                <p>Take a 100-mL portion of the suspension from the hose or nozzle, demagnetize and allow it to settle for approximately 60 min with petroleum distillate suspensions or 30 min with water-based suspensions before reading. The volume settling out at the bottom of the tube is indicative of the particle concentration in the bath.</p>
            </div>
            <div class="subsection">
                <h4>T-765.2 Settling Volumes</h4>
                <p>For fluorescent particles, the required settling volume is from 0.1 mL to 0.4 mL in a 100-mL bath sample and from 1.2 mL to 2.4 mL per 100 mL of vehicle for nonfluorescent particles unless otherwise specified by the particle manufacturer. Concentration checks shall be made at least every eight hours.</p>
            </div>
            <div class="subsection">
                <h4>T-765.3 Contamination</h4>
                <p>Both fluorescent and nonfluorescent suspensions shall be checked periodically for contaminants such as dirt, scale, oil, lint, loose fluorescent pigment, water (in the case of oil suspensions), and particle agglomerates which can adversely affect the performance of the magnetic particle examination process. The test for contamination shall be performed at least once per week.</p>
                <p>(a) Carrier Contamination. For fluorescent baths, the liquid directly above the precipitate should be examined with fluorescent excitation light. The liquid will have a little fluorescence. Its color can be compared with a freshly made-up sample using the same materials or with an unused sample from the original bath that was retained for this purpose. If the "used" sample is noticeably more fluorescent than the comparison standard, the bath shall be replaced.</p>
                <p>(b) Particle Contamination. The graduated portion of the tube shall be examined under fluorescent excitation light if the bath is fluorescent and under visible light (for both fluorescent and nonfluorescent particles) for striations or bands, differences in color or appearance. Bands or striations may indicate contamination. If the total volume of the contaminates, including bands or striations exceeds 30% of the volume magnetic particles, or if the liquid is noticeably fluorescent, the bath shall be replaced.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-766 SYSTEM PERFORMANCE OF HORIZONTAL UNITS</h4>
            <p>The Ketos (Betz) ring specimen (see Figure T-766.1) shall be used in evaluating and comparing the overall performance and sensitivity of both dry and wet, fluorescent and nonfluorescent magnetic particle techniques using a central conductor magnetization technique.</p>
            <p>(a) Ketos (Betz) Test Ring Material. The tool steel (Ketos) ring should be machined from AISI 01 material in accordance with Figure T-766.1. Either the machined ring or the steel blank should be annealed at 1,650°F (900°C), cooled 50°F (28°C) per hour to 1,000°F (540°C) and then air cooled to ambient temperature to give comparable results using similar rings that have had the same treatment. Material and heat treatment are important variables. Experience indicates controlling the softness of the ring by hardness (90 HRB to 95 HRB) alone is insufficient.</p>
            <p>(b) Using the Test Ring. The test ring (see Figure T-766.1), is circularly magnetized with full-wave rectified AC passing through a central conductor with a 1 in. to 11/4 in. (25 mm to 32 mm) diameter hole located in the ring center. The conductor should have a length greater than 16 in. (400 mm). The currents used shall be 1400 A, 2500 A, and 3400 A. The minimum number of holes shown shall be three, five, and six, respectively. The ring edge should be examined with either black light or visible light, depending on the type of particles involved. This test shall be run at the three amperages if the unit will be used at these or higher amperages. The amperage values stated shall not be exceeded in the test. If the test does not reveal the required number of holes, the equipment shall be taken out of service and the cause of the loss of sensitivity determined and corrected. This test shall be run at least once per week.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-766_1.png" class="figure-image">
                <p class="figure-caption">Figure T-766.1 Ketos (Betz) Test Ring</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-770 EXAMINATION</h4>
        <div class="subsection">
            <h4>T-771 PRELIMINARY EXAMINATION</h4>
            <p>Before the magnetic particle examination is conducted, a check of the examination surface shall be conducted to locate any surface discontinuity openings which may not attract and hold magnetic particles because of their width.</p>
        </div>
        <div class="subsection">
            <h4>T-772 DIRECTION OF MAGNETIZATION</h4>
            <p>At least two separate examinations shall be performed on each area. During the second examination, the lines of magnetic flux shall be approximately perpendicular to those used during the first examination. A different technique for magnetization may be used for the second examination.</p>
        </div>
        <div class="subsection">
            <h4>T-773 METHOD OF EXAMINATION</h4>
            <p>The ferromagnetic particles used in an examination medium can be either wet or dry, and may be either fluorescent or nonfluorescent. Examination(s) shall be done by the continuous method.</p>
            <p>(a) Dry Particles. The magnetizing current shall remain on while the examination medium is being applied and while any excess of the examination medium is removed.</p>
            <p>(b) Wet Particles. The magnetizing current shall be turned on after the particles have been applied. Flow of particles shall stop with the application of current. Wet particles applied from aerosol spray cans or pump sprayers may be applied before and/or during magnetizing current application. Wet particles may be applied during the application of magnetizing current if they are not applied directly to the examination area and are allowed to flow over the examination area or are applied directly to the examination area with low velocities insufficient to remove accumulated particles.</p>
        </div>
        <div class="subsection">
            <h4>T-774 EXAMINATION COVERAGE</h4>
            <p>All examinations shall be conducted with sufficient field overlap to ensure 100% coverage at the required sensitivity (T-764).</p>
        </div>
        <div class="subsection">
            <h4>T-775 RECTIFIED CURRENT</h4>
            <p>(a) Whenever direct current is required rectified current may be used. The rectified current for magnetization shall be either three-phase (full-wave rectified) current, or single phase (half-wave rectified) current.</p>
            <p>(b) The amperage required with three-phase, full-wave rectified current shall be verified by measuring the average current.</p>
            <p>(c) The amperage required with single-phase (half wave rectified) current shall be verified by measuring the average current output during the conducting half cycle only.</p>
            <p>(d) When measuring half-wave rectified current with a direct current test meter, readings shall be multiplied by two.</p>
        </div>
        <div class="subsection">
            <h4>T-776 EXCESS PARTICLE REMOVAL</h4>
            <p>Accumulations of excess dry particles in examinations shall be removed with a light air stream from a bulb or syringe or other source of low pressure dry air. The examination current or power shall be maintained while removing the excess particles.</p>
        </div>
        <div class="subsection">
            <h4>T-777 INTERPRETATION</h4>
            <p>The interpretation shall identify if an indication as false, nonrelevant, or relevant. False and nonrelevant indications shall be proven as false or nonrelevant. Interpretation shall be carried out to identify the locations of indications and the character of the indication.</p>
            <div class="subsection">
                <h4>T-777.1 Visible (Color Contrast) Magnetic Particles</h4>
                <p>Surface discontinuities are indicated by accumulations of magnetic particles which should contrast with the examination surface. The color of the magnetic particles shall be different than the color of the examination surface. Illumination (natural or supplemental white light) of the examination surface is required for the evaluation of indications. The minimum light intensity shall be 100 fc (1 076 lx). The light intensity, natural or supplemental white light source, shall be measured with a white light meter prior to the evaluation of indications or a verified light source shall be used. Verification of light sources is required to be demonstrated only one time, documented, and maintained on file.</p>
            </div>
            <div class="subsection">
                <h4>T-777.2 Fluorescent Magnetic Particles</h4>
                <p>With fluorescent magnetic particles, the process is essentially the same as in T-777.1, with the exception that the examination is performed using an ultraviolet light, called UV-A light. The examination shall be performed as follows:</p>
                <p>(a) It shall be performed in a darkened area with a maximum ambient white light level of 2 fc (21.5 lx) measured with a calibrated white light meter at the examination surface.</p>
                <p>(b) Examiners shall be in a darkened area for at least 5 min prior to performing examinations to enable their eyes to adapt to dark viewing. Glasses or lenses worn by examiners shall not be photosensitive.</p>
                <p>(c) The examination area shall be illuminated with UV-A lights that operate in the range between 320 nm and 400 nm.</p>
                <p>(d) UV-A lights shall achieve a minimum of 1000 μW/cm² on the surface of the part being examined throughout the examination.</p>
                <p>(e) Reflectors, filters, glasses, and lenses shall be clean before use. Cracked or broken reflectors, filters, glasses, or lenses shall not be used.</p>
                <p>(f) The UV-A light intensity shall be measured with a UV-A light meter prior to use, whenever the light's power source is interrupted or changed, and at the completion of the examination or series of examinations.</p>
                <p>(g) Mercury vapor arc lamps produce UV-A wavelengths mainly at a peak wavelength of 365 nm for inducing fluorescence. LED UV-A sources using a single UV-A LED or an array of UV-A LEDs shall have emission characteristics comparable to those of other UV-A sources. LED UV-A sources shall meet the requirements of SE-2297 and SE-3022. LED UV-A light sources shall be certified as meeting the requirements of SE-3022 and/or ASTM E3022.</p>
            </div>
            <div class="subsection">
                <h4>T-777.3 Fluorescent Magnetic Particles With Other Fluorescent Excitation Wavelengths</h4>
                <p>Alternatively to the requirements in T-777.2, the examinations may be performed using alternate wavelength light sources which cause fluorescence in specific particle coatings. Any alternate light wavelength light sources and specific particle designations used shall be qualified in accordance with Mandatory Appendix IV. The examination shall be performed as follows:</p>
                <p>(a) It shall be performed in a darkened area.</p>
                <p>(b) Examiners shall be in a darkened area for at least 5 min prior to performing examinations to enable their eyes to adapt to dark viewing. Glasses or lenses worn by examiners shall not be photochromic or exhibit any fluorescence.</p>
                <p>(c) If the fluorescence excitation light source emits visible light intensities greater than 2 fc (21.5 lx), the examiner shall wear fluorescence-enhancing filter glasses approved by the light source manufacturer for use with that light source.</p>
                <p>(d) The fluorescence excitation light source shall achieve at least the minimum light intensity on the surface of the part throughout the examination as qualified in the tests of Mandatory Appendix IV.</p>
                <p>(e) Reflectors, filters, glasses, and lenses should be checked and, if necessary, cleaned prior to use. Cracked or broken reflectors, filters, glasses, or lenses shall be replaced immediately.</p>
                <p>(f) The fluorescence excitation light intensity shall be measured with a suitable fluorescence excitation light meter prior to use, whenever the light's power source is interrupted or changed, and at the completion of the examination or series of examinations.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-778 DEMAGNETIZATION</h4>
            <p>When residual magnetism in the part could interfere with subsequent processing or usage, the part shall be demagnetized any time after completion of the examination.</p>
        </div>
        <div class="subsection">
            <h4>T-779 POST-EXAMINATION CLEANING</h4>
            <p>When post-examination cleaning is required, it should be conducted as soon as practical using a process that does not adversely affect the part.</p>
        </div>
        <div class="subsection">
            <h4>T-780 EVALUATION</h4>
            <p>(a) All indications shall be evaluated in terms of the acceptance standards of the referencing Code Section.</p>
            <p>(b) Discontinuities on or near the surface are indicated by retention of the examination medium. However, localized surface irregularities due to machining marks or other surface conditions may produce false indications.</p>
            <p>(c) Broad areas of particle accumulation, which might mask indications from discontinuities, are prohibited, and such areas shall be cleaned and reexamined.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-790 DOCUMENTATION</h4>
        <div class="subsection">
            <h4>T-791 MULTIDIRECTIONAL MAGNETIZATION TECHNIQUE SKETCH</h4>
            <p>A technique sketch shall be prepared for each different geometry examined, showing the part geometry, cable arrangement and connections, magnetizing current for each circuit, and the areas of examination where adequate field strengths are obtained. Parts with repetitive geometries, but different dimensions, may be examined using a single sketch provided that the magnetic field strength is adequate when demonstrated in accordance with T-756.2.</p>
        </div>
        <div class="subsection">
            <h4>T-792 RECORDING OF INDICATIONS</h4>
            <div class="subsection">
                <h4>T-792.1 Nonrejectable Indications</h4>
                <p>Nonrejectable indications shall be recorded as specified by the referencing Code Section.</p>
            </div>
            <div class="subsection">
                <h4>T-792.2 Rejectable Indications</h4>
                <p>Rejectable indications shall be recorded. As a minimum, the type of indications (linear or rounded), location and extent (length or diameter or aligned) shall be recorded.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-793 EXAMINATION RECORDS</h4>
            <p>For each examination, the following information shall be recorded:</p>
            <p>(a) the requirements of Article 1, T-190(a)</p>
            <p>(b) magnetic particle equipment and type of current</p>
            <p>(c) magnetic particles (visible or fluorescent, wet or dry)</p>
            <p>(d) map or record of indications per T-792</p>
            <p>(e) material and thickness</p>
            <p>(f) lighting equipment</p>
        </div>
    </div>
    `,
    contentEs: `<h3>ARTÍCULO 7 EXAMEN POR PARTÍCULAS MAGNÉTICAS</h3>
    <div class="subsection">
        <h4>T-710 ALCANCE</h4>
        <p>Cuando sea especificado por la Sección de Código de referencia, se utilizarán las técnicas de examen por partículas magnéticas descritas en este Artículo. En general, este Artículo está en conformidad con SE-709, Guía Estándar para Pruebas por Partículas Magnéticas. Este documento proporciona detalles que deben considerarse en los procedimientos utilizados.</p>
        <p>Cuando este Artículo sea especificado por una Sección de Código de referencia, el método de partículas magnéticas descrito en este Artículo se utilizará junto con el Artículo 1, Requisitos Generales. Las definiciones de los términos utilizados en este Artículo se encuentran en el Artículo 1, Apéndice Obligatorio I, I-121.4, MT — Partículas Magnéticas.</p>
    </div>
    <div class="subsection">
        <h4>T-720 GENERAL</h4>
        <p>El método de examen por partículas magnéticas se aplica para detectar grietas y otras discontinuidades en las superficies de materiales ferromagnéticos. La sensibilidad es máxima para discontinuidades superficiales y disminuye rápidamente con el aumento de la profundidad de las discontinuidades debajo de la superficie. Los tipos típicos de discontinuidades que pueden detectarse por este método son grietas, solapes, costuras, cierres en frío y laminaciones.</p>
        <p>En principio, este método implica magnetizar un área a examinar y aplicar partículas ferromagnéticas (el medio de examen) a la superficie. Los patrones de partículas se forman en la superficie donde el campo magnético es forzado a salir de la pieza y sobre las discontinuidades para causar un campo de fuga que atrae las partículas. Los patrones de partículas suelen ser característicos del tipo de discontinuidad que se detecta.</p>
        <p>Cualquiera que sea la técnica utilizada para producir el flujo magnético en la pieza, la sensibilidad máxima será para las discontinuidades lineales orientadas perpendicularmente a las líneas de flujo. Para una eficacia óptima en la detección de todos los tipos de discontinuidades, cada área debe examinarse al menos dos veces, siendo las líneas de flujo durante un examen aproximadamente perpendiculares a las líneas de flujo durante el otro.</p>
    </div>
    <div class="subsection">
        <h4>T-721 REQUISITOS DE PROCEDIMIENTO ESCRITO</h4>
        <div class="subsection">
            <h4>T-721.1 Requisitos</h4>
            <p>El examen por partículas magnéticas se realizará de acuerdo con un procedimiento escrito que contendrá como mínimo los requisitos enumerados en la Tabla T-721. El procedimiento escrito establecerá un valor único o un rango de valores para cada requisito.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-721.png" class="figure-image">
                <p class="figure-caption">Tabla T-721 Requisitos de un Procedimiento de Examen por Partículas Magnéticas</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-721.2 Calificación del Procedimiento</h4>
            <p>Cuando la calificación del procedimiento sea especificada por la Sección de Código de referencia, un cambio en un requisito de la Tabla T-721 identificado como una variable esencial requerirá la recalificación del procedimiento escrito mediante demostración. Un cambio en un requisito identificado como una variable no esencial no requerirá la recalificación del procedimiento escrito. Todos los cambios de variables esenciales o no esenciales con respecto a los especificados en el procedimiento escrito requerirán una revisión o un addendo al procedimiento escrito.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-730 EQUIPO</h4>
        <p>Se empleará un medio adecuado y apropiado para producir el flujo magnético necesario en la pieza, utilizando una o más de las técnicas enumeradas y descritas en T-750.</p>
        <div class="subsection">
            <h4>T-731 MEDIO DE EXAMEN</h4>
            <p>Las partículas ferromagnéticas finamente divididas utilizadas para el examen cumplirán los siguientes requisitos.</p>
            <p>(a) Tipos de Partículas. Las partículas deberán ser tratadas para impartir color (pigmentos fluorescentes, pigmentos no fluorescentes o ambos) para hacerlas altamente visibles (contrastantes) contra el fondo de la superficie que se está examinando.</p>
            <p>(b) Partículas. Las partículas secas y húmedas y los vehículos de suspensión estarán de acuerdo con las especificaciones aplicables enumeradas en SE-709, párrafo 2.2.</p>
            <p>(c) Limitaciones de Temperatura. Las partículas deberán utilizarse dentro de las limitaciones de rango de temperatura establecidas por el fabricante de las partículas. Alternativamente, las partículas pueden utilizarse fuera de las recomendaciones del fabricante de partículas siempre que el procedimiento esté calificado de acuerdo con el Artículo 1, T-150 a la temperatura propuesta.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-740 REQUISITOS VARIOS</h4>
        <div class="subsection">
            <h4>T-741 ACONDICIONAMIENTO DE LA SUPERFICIE</h4>
            <div class="subsection">
                <h4>T-741.1 Preparación</h4>
                <p>(a) Generalmente se obtienen resultados satisfactorios cuando las superficies están en condiciones de soldadura, laminado, fundición o forja. Sin embargo, puede ser necesaria la preparación de la superficie mediante esmerilado o mecanizado donde las irregularidades superficiales podrían enmascarar las indicaciones debido a discontinuidades.</p>
                <p>(b) Antes del examen por partículas magnéticas, la superficie que se va a examinar y todas las áreas adyacentes dentro de al menos 1 pulg. (25 mm) deberán estar secas y libres de toda suciedad, grasa, pelusas, óxido, fundente de soldadura y salpicaduras, aceite u otra materia extraña que pueda interferir con el examen.</p>
                <p>(c) La limpieza puede realizarse utilizando detergentes, disolventes orgánicos, soluciones de descascarillado, removedores de pintura, desengrase por vapor, arenado o granallado, o métodos de limpieza ultrasónica.</p>
                <p>(d) Si se dejan revestimientos no magnéticos en la pieza en el área que se está examinando, se deberá demostrar que las indicaciones pueden detectarse a través del espesor máximo de revestimiento aplicado existente. Cuando se utilice la técnica de yugo de CA, la demostración deberá realizarse de acuerdo con el Apéndice Obligatorio I de este Artículo.</p>
            </div>
            <div class="subsection">
                <h4>T-741.2 Mejora del Contraste de Superficie No Magnética</h4>
                <p>Los contrastes de superficie no magnéticos pueden ser aplicados por el examinador a superficies sin revestir, solo en cantidades suficientes para mejorar el contraste de las partículas. Cuando se utiliza la mejora del contraste de superficie no magnética, se deberá demostrar que las indicaciones pueden detectarse a través de la mejora. No se requiere la medición del espesor de esta mejora del contraste de superficie no magnética.</p>
                <p>NOTA: Consultar T-150(a) para obtener orientación sobre la demostración requerida en T-741.1(d) y T-741.2.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-750 TÉCNICA</h4>
        <div class="subsection">
            <h4>T-751 TÉCNICAS</h4>
            <p>Se utilizará una o más de las siguientes cinco técnicas de magnetización:</p>
            <p>(a) técnica de puntas</p>
            <p>(b) técnica de magnetización longitudinal</p>
            <p>(c) técnica de magnetización circular</p>
            <p>(d) técnica de yugo</p>
            <p>(e) técnica de magnetización multidireccional</p>
        </div>
        <div class="subsection">
            <h4>T-752 TÉCNICA DE PUNTAS</h4>
            <div class="subsection">
                <h4>T-752.1 Procedimiento de Magnetización</h4>
                <p>Para la técnica de puntas, la magnetización se logra mediante contactos eléctricos portátiles tipo puntas presionados contra la superficie en el área a examinar. Para evitar arco eléctrico, se deberá proporcionar un interruptor de control remoto, que puede estar incorporado en los mangos de las puntas, para permitir que la corriente se aplique después de que las puntas hayan sido posicionadas correctamente.</p>
            </div>
            <div class="subsection">
                <h4>T-752.2 Corriente de Magnetización</h4>
                <p>Se utilizará corriente de magnetización continua o rectificada. La corriente será de 100 (mínimo) amp/pulg. (4 amp/mm) a 125 (máximo) amp/pulg. (5 amp/mm) de separación entre puntas para secciones de 3/4 pulg. (19 mm) de espesor o mayores. Para secciones de menos de 3/4 pulg. (19 mm) de espesor, la corriente será de 90 amp/pulg. (3.6 amp/mm) a 110 amp/pulg. (4.4 amp/mm) de separación entre puntas.</p>
            </div>
            <div class="subsection">
                <h4>T-752.3 Separación entre Puntas</h4>
                <p>La separación entre puntas no excederá de 8 pulg. (200 mm). Se puede utilizar una separación menor para acomodar las limitaciones geométricas del área que se está examinando o para aumentar la sensibilidad, pero las separaciones entre puntas de menos de 3 pulg. (75 mm) generalmente no son prácticas debido al bandeo de las partículas alrededor de las puntas. Las puntas de las puntas deberán mantenerse limpias y en buen estado. Si el voltaje de circuito abierto de la fuente de corriente de magnetización es mayor de 25 V, se recomiendan puntas con puntas de plomo, acero o aluminio (en lugar de cobre) para evitar depósitos de cobre en la pieza que se está examinando.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-753 TÉCNICA DE MAGNETIZACIÓN LONGITUDINAL</h4>
            <div class="subsection">
                <h4>T-753.1 Procedimiento de Magnetización</h4>
                <p>Para esta técnica, la magnetización se logra pasando corriente a través de una bobina fija de múltiples vueltas (o cables) que está envuelta alrededor de la pieza o sección de la pieza que se va a examinar. Esto produce un campo magnético longitudinal paralelo al eje de la bobina.</p>
                <p>Si se utiliza una bobina fija preenrollada, la pieza deberá colocarse cerca del lado de la bobina durante la inspección. Esto es de especial importancia cuando la apertura de la bobina es más de 10 veces el área de la sección transversal de la pieza.</p>
            </div>
            <div class="subsection">
                <h4>T-753.2 Intensidad del Campo Magnético</h4>
                <p>Se utilizará corriente continua o rectificada para magnetizar las piezas examinadas por esta técnica. La intensidad de campo requerida se calculará basándose en la longitud L y el diámetro D de la pieza de acuerdo con (a) y (b), o como se establece en (d) y (e), a continuación. Las piezas largas deberán examinarse en secciones que no excedan de 18 pulg. (450 mm), y se utilizarán 18 pulg. (450 mm) para la L de la pieza al calcular la intensidad de campo requerida. Para piezas no cilíndricas, D será la diagonal máxima de la sección transversal.</p>
                <p>(a) Piezas Con Relaciones L/D Iguales o Mayores Que 4. La corriente de magnetización estará dentro del ±10% del valor de amperios-vueltas determinado de la siguiente manera: Amperios-vueltas = 35,000 / (L/D) +2</p>
                <p>(b) Piezas Con Relaciones L/D Menores Que 4 pero No Menores Que 2. Los amperios-vueltas de magnetización estarán dentro del ±10% del valor de amperios-vueltas determinado de la siguiente manera: Amperios-vueltas = 45,000 / (L/D)</p>
                <p>(c) Piezas Con Relaciones L/D Menores Que 2. No se puede utilizar la técnica de magnetización con bobina.</p>
                <p>(d) Si el área a magnetizar se extiende más allá de 9 pulg. (225 mm) en cualquier lado del centro de la bobina, la adecuación del campo deberá demostrarse utilizando un indicador de campo magnético o láminas de defecto artificial según T-764.</p>
                <p>(e) Para piezas grandes debido al tamaño y la forma, la corriente de magnetización será de 1200 amperios-vueltas a 4500 amperios-vueltas. La adecuación del campo deberá demostrarse utilizando láminas de defecto artificial o un indicador de campo magnético en forma de pastel de acuerdo con T-764. No se utilizará un medidor de gauss con sonda de efecto Hall con técnicas de magnetización con bobina envolvente.</p>
            </div>
            <div class="subsection">
                <h4>T-753.3 Corriente de Magnetización</h4>
                <p>La corriente necesaria para obtener la intensidad de campo magnético necesaria se determinará dividiendo los amperios-vueltas obtenidos en los pasos T-753.2(a) o T-753.2(b) por el número de vueltas en la bobina de la siguiente manera: Amperios (lectura del medidor) = amperios-vueltas / vueltas</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-754 TÉCNICA DE MAGNETIZACIÓN CIRCULAR</h4>
            <div class="subsection">
                <h4>T-754.1 Técnica de Contacto Directo</h4>
                <p>(a) Procedimiento de Magnetización. Para esta técnica, la magnetización se logra pasando corriente a través de la pieza que se va a examinar. Esto produce un campo magnético circular que es aproximadamente perpendicular a la dirección del flujo de corriente en la pieza.</p>
                <p>(b) Corriente de Magnetización. Se utilizará corriente de magnetización continua o rectificada (rectificada de media onda o rectificada de onda completa).</p>
                <p>(1) La corriente será de 300 amp/pulg. (12 A/mm) a 800 amp/pulg. (31 A/mm) de diámetro exterior.</p>
                <p>(2) Para piezas con formas geométricas diferentes a redondas, se utilizará la diagonal máxima de la sección transversal en un plano perpendicular al flujo de corriente en lugar del diámetro exterior en (1) anterior.</p>
                <p>(3) Si no pueden obtenerse los niveles de corriente requeridos para (1), se utilizará la corriente máxima obtenible y la adecuación del campo se demostrará de acuerdo con T-764.</p>
            </div>
            <div class="subsection">
                <h4>T-754.2 Técnica de Conductor Central</h4>
                <p>(a) Procedimiento de Magnetización. Para esta técnica, se utiliza un conductor central para examinar las superficies internas de piezas cilíndricas o en forma de anillo. La técnica de conductor central también puede utilizarse para examinar las superficies exteriores de estas formas. Cuando se vayan a examinar cilindros de gran diámetro, el conductor deberá posicionarse cerca de la superficie interna del cilindro. Cuando el conductor no esté centrado, la circunferencia del cilindro deberá examinarse por incrementos. Se utilizarán mediciones de intensidad de campo de acuerdo con T-764, para determinar la extensión del arco que puede examinarse para cada posición del conductor o pueden seguirse las reglas en (c) a continuación. Barras o cables, pasados a través del orificio de un cilindro, pueden utilizarse para inducir magnetización circular.</p>
                <p>(b) Corriente de Magnetización. La intensidad de campo requerida será igual a la determinada en T-754.1(b) para un conductor central de una sola vuelta. El campo magnético aumentará en proporción al número de veces que el cable del conductor central pasa a través de una pieza hueca. Por ejemplo, si se requieren 6000 A para examinar una pieza utilizando un conductor central de un solo paso, entonces se requieren 3000 A cuando se utilizan 2 pasos del cable a través, y se requieren 1200 A si se utilizan 5 pasos (véase la Figura T-754.2.1). Cuando se utiliza la técnica de conductor central, la adecuación del campo magnético deberá verificarse utilizando un indicador de campo de partículas magnéticas de acuerdo con T-764.</p>
                <p>(c) Conductor Central Desplazado. Cuando el conductor que pasa por el interior de la pieza se coloca contra una pared interior de la pieza, se aplicarán los niveles de corriente dados en T-754.1(b)(1), excepto que el diámetro utilizado para los cálculos de corriente será la suma del diámetro del conductor central y el doble del espesor de la pared. La distancia a lo largo de la circunferencia de la pieza (exterior) que está magnetizada efectivamente se tomará como cuatro veces el diámetro del conductor central, como se ilustra en la Figura T-754.2.2. Toda la circunferencia deberá inspeccionarse rotando la pieza sobre el conductor, permitiendo aproximadamente un 10% de superposición del campo magnético.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-754_2_1.png" class="figure-image">
                    <p class="figure-caption">Figura T-754.2.1 Técnica de Conductor Central de un Paso y Dos Pasos</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-754_2_2.png" class="figure-image">
                    <p class="figure-caption">Figura T-754.2.2 La Región Efectiva de Examen Cuando se Utiliza un Conductor Central Desplazado</p>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h4>T-755 TÉCNICA DE YUGO</h4>
            <p>Para esta técnica, se utilizarán yugos electromagnéticos de corriente alterna o continua, o yugos de imán permanente.</p>
        </div>
        <div class="subsection">
            <h4>T-756 TÉCNICA DE MAGNETIZACIÓN MULTIDIRECCIONAL</h4>
            <div class="subsection">
                <h4>T-756.1 Procedimiento de Magnetización</h4>
                <p>Para esta técnica, la magnetización se logra mediante fuentes de alimentación de alta amperaje que operan hasta tres circuitos que se energizan uno a la vez en rápida sucesión. El efecto de estas corrientes de magnetización que alternan rápidamente es producir una magnetización general de la pieza en múltiples direcciones. Los campos magnéticos circulares o longitudinales pueden generarse en cualquier combinación utilizando las diversas técnicas descritas en T-753 y T-754.</p>
            </div>
            <div class="subsection">
                <h4>T-756.2 Intensidad del Campo Magnético</h4>
                <p>Solo se utilizará corriente trifásica rectificada de onda completa para magnetizar la pieza. Los requisitos iniciales de corriente de magnetización para cada circuito se establecerán utilizando las directrices descritas anteriormente (véase T-753 y T-754). La adecuación del campo magnético se demostrará utilizando láminas de defecto artificial o un indicador de campo de partículas magnéticas en forma de pastel de acuerdo con T-764. No se utilizará un medidor de gauss con sonda de efecto Hall para medir la adecuación del campo para la técnica de magnetización multidireccional. Se deberá obtener un campo adecuado en al menos dos direcciones casi perpendiculares, y las intensidades de campo deberán equilibrarse de modo que un campo fuerte en una dirección no abrume el campo en la otra dirección. Para áreas donde no puedan demostrarse intensidades de campo adecuadas, se utilizarán técnicas adicionales de partículas magnéticas para obtener la cobertura bidireccional requerida.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-760 CALIBRACIÓN</h4>
        <div class="subsection">
            <h4>T-761 FRECUENCIA DE CALIBRACIÓN</h4>
            <div class="subsection">
                <h4>T-761.1 Equipo de Magnetización</h4>
                <p>(a) Frecuencia. El equipo de magnetización con amperímetro deberá calibrarse al menos una vez al año, o siempre que el equipo haya sido sometido a reparación eléctrica mayor, revisión periódica o daño. Si el equipo no ha sido utilizado durante un año o más, la calibración deberá realizarse antes del primer uso.</p>
                <p>(b) Procedimiento. La exactitud del medidor de la unidad deberá verificarse anualmente mediante equipo rastreable a un estándar nacional. Se tomarán lecturas comparativas para al menos tres niveles diferentes de salida de corriente que abarquen el rango utilizable.</p>
                <p>(c) Tolerancia. La lectura del medidor de la unidad no deberá desviarse en más de ±10% de la escala completa, en relación con el valor de corriente real como lo muestra el medidor de prueba.</p>
            </div>
            <div class="subsection">
                <h4>T-761.2 Medidores de Luz</h4>
                <p>Los medidores de luz deberán calibrarse al menos una vez al año o siempre que un medidor haya sido reparado. Si los medidores no han sido utilizados durante un año o más, la calibración deberá realizarse antes de ser utilizados.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-762 PODER DE LEVANTAMIENTO DE YUGOS</h4>
            <p>(a) El poder de magnetización de los yugos deberá verificarse antes del uso cada día que se utilice el yugo. El poder de magnetización de los yugos deberá verificarse siempre que el yugo haya sido dañado o reparado.</p>
            <p>(b) Cada yugo electromagnético de corriente alterna deberá tener un poder de levantamiento de al menos 10 lb (4.5 kg) en la separación máxima de polos, con contacto similar al que se utilizará durante el examen.</p>
            <p>(c) Cada yugo de corriente continua o imán permanente deberá tener un poder de levantamiento de al menos 40 lb (18 kg) en la separación máxima de polos, con contacto similar al que se utilizará durante el examen.</p>
                <p>(d) Cada peso deberá pesarse con una balanza de un fabricante reputado y estamparse con el peso nominal aplicable antes del primer uso. Un peso solo necesita verificarse nuevamente si está dañado de una manera que podría haber causado una pérdida potencial de material.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-763 MEDIDORES DE GAUSS</h4>
            <p>Los medidores de gauss con sonda de efecto Hall utilizados para verificar la intensidad del campo de magnetización de acuerdo con T-754 deberán calibrarse al menos una vez al año o siempre que el equipo haya sido sometido a una reparación mayor, revisión periódica o daño. Si el equipo no ha sido utilizado durante un año o más, la calibración deberá realizarse antes del primer uso.</p>
        </div>
        <div class="subsection">
            <h4>T-764 ADECUACIÓN Y DIRECCIÓN DEL CAMPO MAGNÉTICO</h4>
            <div class="subsection">
                <h4>T-764.1 Aplicación</h4>
                <p>El uso de indicadores de campo magnético, láminas artificiales o sondas de campo tangencial de efecto Hall solo se permite cuando sea específicamente referenciado por las siguientes técnicas de magnetización:</p>
                <p>(a) Longitudinal (T-753)</p>
                <p>(b) Circular (T-754)</p>
                <p>(c) Multidireccional (T-756)</p>
            </div>
            <div class="subsection">
                <h4>T-764.2 Adecuación del Campo Magnético</h4>
                <p>El campo magnético aplicado deberá tener suficiente intensidad para producir indicaciones satisfactorias, pero no deberá ser tan fuerte que cause el enmascaramiento de indicaciones relevantes por acumulaciones no relevantes de partículas magnéticas. Los factores que influyen en la intensidad de campo requerida incluyen el tamaño, la forma y la permeabilidad magnética del material de la pieza; la técnica de magnetización; los revestimientos; el método de aplicación de partículas; y el tipo y ubicación de las discontinuidades que se van a detectar. Cuando sea necesario verificar la adecuación de la intensidad del campo magnético, se verificará utilizando uno o más de los siguientes tres métodos.</p>
                <p>(a) Indicador de Campo de Partículas Magnéticas en Forma de Pastel. El indicador, que se muestra en la Figura T-764.2(a), deberá posicionarse en la superficie que se va a examinar, de modo que el lado plateado de cobre esté alejado de la superficie inspeccionada. Una intensidad de campo adecuada se indica cuando se forma una línea (o líneas) claramente definida(s) de partículas magnéticas a través de la cara de cobre del indicador cuando las partículas magnéticas se aplican simultáneamente con la fuerza de magnetización. Cuando no se forma una línea claramente definida de partículas, la técnica de magnetización deberá cambiarse según sea necesario. Los indicadores tipo pastel se utilizan mejor con procedimientos de partículas secas.</p>
                <p>(b) Láminas de Defecto Artificial. Se utilizará una de las láminas que se muestran en la Figura T-764.2(b)(1) o Figura T-764.2(b)(2) cuya orientación sea tal que pueda tener un componente perpendicular al campo magnético aplicado. Las láminas con muescas lineales deberán orientarse de modo que al menos una muesca sea perpendicular al campo magnético aplicado. Las láminas con solo muescas circulares pueden utilizarse en cualquier orientación. Las láminas deberán adjuntarse a la superficie que se va a examinar, de modo que el lado de defecto artificial de la lámina esté hacia la superficie inspeccionada. Una intensidad de campo adecuada se indica cuando aparece(n) una línea (o líneas) claramente definida(s) de partículas magnéticas, que representan el defecto del 30% de profundidad, en la cara de la lámina cuando las partículas magnéticas se aplican simultáneamente con la fuerza de magnetización. Cuando no se forma una línea claramente definida de partículas, la técnica de magnetización deberá cambiarse según sea necesario. Los indicadores tipo lámina se utilizan mejor con procedimientos de partículas húmedas.</p>
                <p>NOTA: Las láminas circulares que se muestran en la ilustración (b) de la Figura T-764.2(b)(2) también tienen profundidades de defecto menores y mayores que el 30%.</p>
                <p>(c) Sonda de Campo Tangencial de Efecto Hall. Se utilizará un medidor de gauss y una sonda de campo tangencial de efecto Hall para medir el valor pico de un campo tangencial. La sonda deberá posicionarse en la superficie que se va a examinar, de modo que se determine la intensidad máxima del campo. Una intensidad de campo adecuada se indica cuando el campo medido está dentro del rango de 30 G a 60 G (2.4 kAm−1 a 4.8 kAm−1) mientras se aplica la fuerza de magnetización. Véase el Artículo 7, Apéndice No Obligatorio A.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-764_2a.png" class="figure-image">
                    <p class="figure-caption">Figura T-764.2(a) Indicador de Campo de Partículas Magnéticas en Forma de Pastel</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-764_2b1.png" class="figure-image">
                    <p class="figure-caption">Figura T-764.2(b)(1) Láminas de Defecto Artificial</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-764_2b2.png" class="figure-image">
                    <p class="figure-caption">Figura T-764.2(b)(2) Láminas de Defecto Artificial</p>
                </div>
            </div>
            <div class="subsection">
                <h4>T-764.3 Dirección del Campo Magnético</h4>
                <p>La(s) dirección(es) de magnetización se determinará(n) mediante las indicaciones de partículas obtenidas utilizando un indicador o láminas como se muestra en la Figura T-764.2(a), Figura T-764.2(b)(1) o Figura T-764.2(b)(2). Cuando no se forma una línea claramente definida de partículas (a) en la dirección deseada, o (b) en al menos dos direcciones casi perpendiculares para la técnica multidireccional, la técnica de magnetización deberá cambiarse según sea necesario.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-765 CONCENTRACIÓN Y CONTAMINACIÓN DE PARTÍCULAS HÚMEDAS</h4>
            <p>Las Unidades Horizontales Húmedas deberán tener la concentración del baño y la contaminación del baño determinadas midiendo su volumen de sedimentación. Esto se logra mediante el uso de un tubo de centrifugación en forma de pera con un vástago de 1-mL (divisiones de 0.05-mL) para suspensiones de partículas fluorescentes o un vástago de 1.5-mL (divisiones de 0.1-mL) para suspensiones no fluorescentes (véase SE-709, Apéndice X5). Antes del muestreo, la suspensión debe hacerse circular a través del sistema de recirculación durante al menos 30 min para asegurar una mezcla completa de todas las partículas que podrían haberse sedimentado en la pantalla del sumidero y a lo largo de los lados o fondo del tanque.</p>
            <div class="subsection">
                <h4>T-765.1 Concentración</h4>
                <p>Tomar una porción de 100-mL de la suspensión de la manguera o boquilla, desmagnetizar y dejarla sedimentar durante aproximadamente 60 min con suspensiones de destilados de petróleo o 30 min con suspensiones base agua antes de la lectura. El volumen que se sedimenta en el fondo del tubo es indicativo de la concentración de partículas en el baño.</p>
            </div>
            <div class="subsection">
                <h4>T-765.2 Volúmenes de Sedimentación</h4>
                <p>Para partículas fluorescentes, el volumen de sedimentación requerido es de 0.1 mL a 0.4 mL en una muestra de baño de 100-mL y de 1.2 mL a 2.4 mL por 100 mL de vehículo para partículas no fluorescentes a menos que se especifique lo contrario por el fabricante de partículas. Los controles de concentración deberán realizarse al menos cada ocho horas.</p>
            </div>
            <div class="subsection">
                <h4>T-765.3 Contaminación</h4>
                <p>Tanto las suspensiones fluorescentes como las no fluorescentes deberán verificarse periódicamente en busca de contaminantes como suciedad, óxido, aceite, pelusas, pigmento fluorescente suelto, agua (en el caso de suspensiones de aceite) y aglomerados de partículas que pueden afectar adversamente el rendimiento del proceso de examen por partículas magnéticas. La prueba de contaminación deberá realizarse al menos una vez por semana.</p>
                <p>(a) Contaminación del Vehículo. Para baños fluorescentes, el líquido directamente encima del precipitado debe examinarse con luz de excitación fluorescente. El líquido tendrá un poco de fluorescencia. Su color puede compararse con una muestra recién preparada utilizando los mismos materiales o con una muestra no utilizada del baño original que se conservó para este propósito. Si la muestra "usada" es notablemente más fluorescente que el estándar de comparación, el baño deberá reemplazarse.</p>
                <p>(b) Contaminación de Partículas. La parte graduada del tubo deberá examinarse bajo luz de excitación fluorescente si el baño es fluorescente y bajo luz visible (tanto para partículas fluorescentes como no fluorescentes) en busca de estrías o bandas, diferencias en color o apariencia. Las bandas o estrías pueden indicar contaminación. Si el volumen total de los contaminantes, incluyendo bandas o estrías, excede el 30% del volumen de partículas magnéticas, o si el líquido es notablemente fluorescente, el baño deberá reemplazarse.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-766 RENDIMIENTO DEL SISTEMA DE UNIDADES HORIZONTALES</h4>
            <p>La muestra de anillo Ketos (Betz) (véase la Figura T-766.1) se utilizará en la evaluación y comparación del rendimiento general y la sensibilidad de las técnicas de partículas magnéticas secas y húmedas, fluorescentes y no fluorescentes utilizando una técnica de magnetización con conductor central.</p>
            <p>(a) Material del Anillo de Prueba Ketos (Betz). El anillo de acero para herramientas (Ketos) debe mecanizarse a partir de material AISI 01 de acuerdo con la Figura T-766.1. Tanto el anillo mecanizado como el bloque de acero deben recocerse a 1,650°F (900°C), enfriarse 50°F (28°C) por hora a 1,000°F (540°C) y luego enfriarse al aire a temperatura ambiente para dar resultados comparables utilizando anillos similares que hayan tenido el mismo tratamiento. El material y el tratamiento térmico son variables importantes. La experiencia indica que controlar la suavidad del anillo solo por dureza (90 HRB a 95 HRB) es insuficiente.</p>
            <p>(b) Uso del Anillo de Prueba. El anillo de prueba (véase la Figura T-766.1), se magnetiza circularmente con CA rectificada de onda completa pasando a través de un conductor central con un orificio de 1 pulg. a 11/4 pulg. (25 mm a 32 mm) de diámetro ubicado en el centro del anillo. El conductor debe tener una longitud mayor de 16 pulg. (400 mm). Las corrientes utilizadas serán de 1400 A, 2500 A y 3400 A. El número mínimo de orificios mostrados será de tres, cinco y seis, respectivamente. El borde del anillo debe examinarse con luz negra o luz visible, dependiendo del tipo de partículas involucradas. Esta prueba debe realizarse a las tres amperajes si la unidad se va a utilizar a estas amperajes o superiores. Los valores de amperaje establecidos no deben excederse en la prueba. Si la prueba no revela el número requerido de orificios, el equipo debe sacarse de servicio y determinarse y corregirse la causa de la pérdida de sensibilidad. Esta prueba debe realizarse al menos una vez por semana.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-766_1.png" class="figure-image">
                <p class="figure-caption">Figura T-766.1 Anillo de Prueba Ketos (Betz)</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-770 EXAMEN</h4>
        <div class="subsection">
            <h4>T-771 EXAMEN PRELIMINAR</h4>
            <p>Antes de realizar el examen por partículas magnéticas, se deberá realizar una verificación de la superficie de examen para localizar cualquier abertura de discontinuidad superficial que pueda no atraer y retener partículas magnéticas debido a su ancho.</p>
        </div>
        <div class="subsection">
            <h4>T-772 DIRECCIÓN DE LA MAGNETIZACIÓN</h4>
            <p>Se deberán realizar al menos dos exámenes separados en cada área. Durante el segundo examen, las líneas de flujo magnético deberán ser aproximadamente perpendiculares a las utilizadas durante el primer examen. Se puede utilizar una técnica diferente de magnetización para el segundo examen.</p>
        </div>
        <div class="subsection">
            <h4>T-773 MÉTODO DE EXAMEN</h4>
            <p>Las partículas ferromagnéticas utilizadas en un medio de examen pueden ser húmedas o secas, y pueden ser fluorescentes o no fluorescentes. El examen se realizará por el método continuo.</p>
            <p>(a) Partículas Secas. La corriente de magnetización deberá permanecer encendida mientras se aplica el medio de examen y mientras se elimina cualquier exceso del medio de examen.</p>
            <p>(b) Partículas Húmedas. La corriente de magnetización deberá encenderse después de que las partículas hayan sido aplicadas. El flujo de partículas deberá detenerse con la aplicación de corriente. Las partículas húmedas aplicadas desde latas de aerosol o rociadores de bomba pueden aplicarse antes y/o durante la aplicación de corriente de magnetización. Las partículas húmedas pueden aplicarse durante la aplicación de corriente de magnetización si no se aplican directamente al área de examen y se les permite fluir sobre el área de examen o se aplican directamente al área de examen con velocidades bajas insuficientes para eliminar las partículas acumuladas.</p>
        </div>
        <div class="subsection">
            <h4>T-774 COBERTURA DEL EXAMEN</h4>
            <p>Todos los exámenes deberán realizarse con superposición de campo suficiente para garantizar una cobertura del 100% a la sensibilidad requerida (T-764).</p>
        </div>
        <div class="subsection">
            <h4>T-775 CORRIENTE RECTIFICADA</h4>
            <p>(a) Siempre que se requiera corriente continua, puede utilizarse corriente rectificada. La corriente rectificada para la magnetización será corriente trifásica (rectificada de onda completa) o corriente monofásica (rectificada de media onda).</p>
            <p>(b) El amperaje requerido con corriente trifásica rectificada de onda completa deberá verificarse midiendo la corriente promedio.</p>
            <p>(c) El amperaje requerido con corriente monofásica (rectificada de media onda) deberá verificarse midiendo la salida de corriente promedio solo durante el semiciclo conductor.</p>
            <p>(d) Al medir corriente rectificada de media onda con un medidor de corriente continua, las lecturas deberán multiplicarse por dos.</p>
        </div>
        <div class="subsection">
            <h4>T-776 ELIMINACIÓN DE PARTÍCULAS EN EXCESO</h4>
            <p>Las acumulaciones de partículas secas en exceso en los exámenes deberán eliminarse con una corriente de aire ligera de una pera o jeringa u otra fuente de aire seco a baja presión. La corriente o potencia de examen deberá mantenerse mientras se eliminan las partículas en exceso.</p>
        </div>
        <div class="subsection">
            <h4>T-777 INTERPRETACIÓN</h4>
            <p>La interpretación identificará si una indicación es falsa, no relevante o relevante. Las indicaciones falsas y no relevantes deberán demostrarse como falsas o no relevantes. La interpretación deberá llevarse a cabo para identificar las ubicaciones de las indicaciones y el carácter de la indicación.</p>
            <div class="subsection">
                <h4>T-777.1 Partículas Magnéticas Visibles (Contraste de Color)</h4>
                <p>Las discontinuidades superficiales se indican por acumulaciones de partículas magnéticas que deberían contrastar con la superficie de examen. El color de las partículas magnéticas deberá ser diferente al color de la superficie de examen. Se requiere iluminación (natural o suplementaria de luz blanca) de la superficie de examen para la evaluación de indicaciones. La intensidad mínima de la luz será de 100 fc (1 076 lx). La intensidad de la luz, fuente de luz blanca natural o suplementaria, deberá medirse con un medidor de luz blanca antes de la evaluación de las indicaciones o se utilizará una fuente de luz verificada. La verificación de las fuentes de luz solo debe demostrarse una vez, documentarse y mantenerse en archivo.</p>
            </div>
            <div class="subsection">
                <h4>T-777.2 Partículas Magnéticas Fluorescentes</h4>
                <p>Con partículas magnéticas fluorescentes, el proceso es esencialmente el mismo que en T-777.1, con la excepción de que el examen se realiza utilizando una luz ultravioleta, llamada luz UV-A. El examen se realizará de la siguiente manera:</p>
                <p>(a) Se realizará en un área oscurecida con un nivel máximo de luz blanca ambiental de 2 fc (21.5 lx) medido con un medidor de luz blanca calibrado en la superficie de examen.</p>
                <p>(b) Los examinadores deberán estar en un área oscurecida durante al menos 5 min antes de realizar los exámenes para permitir que sus ojos se adapten a la visión en la oscuridad. Las gafas o lentes utilizados por los examinadores no deberán ser fotosensibles.</p>
                <p>(c) El área de examen deberá iluminarse con luces UV-A que operen en el rango entre 320 nm y 400 nm.</p>
                <p>(d) Las luces UV-A deberán alcanzar un mínimo de 1000 μW/cm² en la superficie de la pieza que se está examinando durante todo el examen.</p>
                <p>(e) Los reflectores, filtros, gafas y lentes deberán estar limpios antes de su uso. No se utilizarán reflectores, filtros, gafas o lentes agrietados o rotos.</p>
                <p>(f) La intensidad de la luz UV-A deberá medirse con un medidor de luz UV-A antes de su uso, siempre que se interrumpa o cambie la fuente de alimentación de la luz, y al finalizar el examen o serie de exámenes.</p>
                <p>(g) Las lámparas de arco de vapor de mercurio producen longitudes de onda UV-A principalmente en una longitud de onda pico de 365 nm para inducir fluorescencia. Las fuentes de luz UV-A LED que utilizan un solo LED UV-A o una matriz de LED UV-A tendrán características de emisión comparables a las de otras fuentes UV-A. Las fuentes UV-A LED deberán cumplir los requisitos de SE-2297 y SE-3022. Las fuentes de luz UV-A LED deberán estar certificadas como que cumplen con los requisitos de SE-3022 y/o ASTM E3022.</p>
            </div>
            <div class="subsection">
                <h4>T-777.3 Partículas Magnéticas Fluorescentes Con Otras Longitudes de Onda de Excitación Fluorescente</h4>
                <p>Alternativamente a los requisitos en T-777.2, los exámenes pueden realizarse utilizando fuentes de luz de longitud de onda alternativa que causen fluorescencia en recubrimientos de partículas específicos. Cualquier fuente de luz de longitud de onda alternativa y designaciones específicas de partículas utilizadas deberán calificarse de acuerdo con el Apéndice Obligatorio IV. El examen se realizará de la siguiente manera:</p>
                <p>(a) Se realizará en un área oscurecida.</p>
                <p>(b) Los examinadores deberán estar en un área oscurecida durante al menos 5 min antes de realizar los exámenes para permitir que sus ojos se adapten a la visión en la oscuridad. Las gafas o lentes utilizados por los examinadores no deberán ser fotocrómicos ni exhibir ninguna fluorescencia.</p>
                <p>(c) Si la fuente de luz de excitación fluorescente emite intensidades de luz visibles mayores de 2 fc (21.5 lx), el examinador deberá usar gafas de filtro de mejora de fluorescencia aprobadas por el fabricante de la fuente de luz para su uso con esa fuente de luz.</p>
                <p>(d) La fuente de luz de excitación fluorescente deberá alcanzar al menos la intensidad de luz mínima en la superficie de la pieza durante todo el examen como se califica en las pruebas del Apéndice Obligatorio IV.</p>
                <p>(e) Los reflectores, filtros, gafas y lentes deben verificarse y, si es necesario, limpiarse antes de su uso. Los reflectores, filtros, gafas o lentes agrietados o rotos deberán reemplazarse inmediatamente.</p>
                <p>(f) La intensidad de la luz de excitación fluorescente deberá medirse con un medidor de luz de excitación fluorescente adecuado antes de su uso, siempre que se interrumpa o cambie la fuente de alimentación de la luz, y al finalizar el examen o serie de exámenes.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-778 DESMAGNETIZACIÓN</h4>
            <p>Cuando el magnetismo residual en la pieza podría interferir con el procesamiento o uso posterior, la pieza deberá desmagnetizarse en cualquier momento después de la finalización del examen.</p>
        </div>
        <div class="subsection">
            <h4>T-779 LIMPIEZA POSTERIOR AL EXAMEN</h4>
            <p>Cuando se requiera limpieza posterior al examen, debe realizarse tan pronto como sea práctico utilizando un proceso que no afecte adversamente a la pieza.</p>
        </div>
        <div class="subsection">
            <h4>T-780 EVALUACIÓN</h4>
            <p>(a) Todas las indicaciones deberán evaluarse en términos de los estándares de aceptación de la Sección de Código de referencia.</p>
            <p>(b) Las discontinuidades en o cerca de la superficie se indican por la retención del medio de examen. Sin embargo, las irregularidades superficiales localizadas debido a marcas de mecanizado u otras condiciones de la superficie pueden producir indicaciones falsas.</p>
            <p>(c) Las áreas amplias de acumulación de partículas, que podrían enmascarar indicaciones de discontinuidades, están prohibidas, y dichas áreas deberán limpiarse y reexaminarse.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-790 DOCUMENTACIÓN</h4>
        <div class="subsection">
            <h4>T-791 BOSQUEJO DE LA TÉCNICA DE MAGNETIZACIÓN MULTIDIRECCIONAL</h4>
            <p>Se deberá preparar un bosquejo de técnica para cada geometría diferente examinada, que muestre la geometría de la pieza, la disposición y conexiones del cable, la corriente de magnetización para cada circuito, y las áreas de examen donde se obtienen intensidades de campo adecuadas. Las piezas con geometrías repetitivas, pero dimensiones diferentes, pueden examinarse utilizando un solo bosquejo siempre que la intensidad del campo magnético sea adecuada cuando se demuestre de acuerdo con T-756.2.</p>
        </div>
        <div class="subsection">
            <h4>T-792 REGISTRO DE INDICACIONES</h4>
            <div class="subsection">
                <h4>T-792.1 Indicaciones No Rechazables</h4>
                <p>Las indicaciones no rechazables deberán registrarse según lo especificado por la Sección de Código de referencia.</p>
            </div>
            <div class="subsection">
                <h4>T-792.2 Indicaciones Rechazables</h4>
                <p>Las indicaciones rechazables deberán registrarse. Como mínimo, deberán registrarse el tipo de indicaciones (lineales o redondeadas), ubicación y extensión (longitud o diámetro o alineadas).</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-793 REGISTROS DE EXAMEN</h4>
            <p>Para cada examen, deberá registrarse la siguiente información:</p>
            <p>(a) los requisitos del Artículo 1, T-190(a)</p>
            <p>(b) equipo de partículas magnéticas y tipo de corriente</p>
            <p>(c) partículas magnéticas (visibles o fluorescentes, húmedas o secas)</p>
            <p>(d) mapa o registro de indicaciones según T-792</p>
            <p>(e) material y espesor</p>
            <p>(f) equipo de iluminación</p>
        </div>
    </div>
    `
});