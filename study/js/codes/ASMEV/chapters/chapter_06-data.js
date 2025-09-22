// Registrar el código ASME BPVC.V-2023 si no existe
if (!getCode('ASMEV')) {
    console.error('El código ASME BPVC.V-2023 no está registrado. Registrándolo ahora...');
    registerCode('ASMEV', {
        title: "ASME Boiler and Pressure Vessel Code Section V - Nondestructive Examination",
        titleEs: "Código de Calderas y Recipientes a Presión ASME Sección V - Examen No Destructor"
    });
}

// Registrar el capítulo 6
registerChapter('ASMEV', {
    id: 6,
    title: "Liquid Penetrant Examination",
    titleEs: "Examen por Líquidos Penetrantes",
    content: `<h3>ARTICLE 6 LIQUID PENETRANT EXAMINATION</h3>
    <div class="subsection">
        <h4>T-610 SCOPE</h4>
        <p>When this Article is specified by a referencing Code Section, the liquid penetrant method described in this Article shall be used together with Article 1, General Requirements. Definitions of terms used in this Article appear in Article 1, Mandatory Appendix I, I-121.3, PT — Liquid Penetrants.</p>
    </div>
    <div class="subsection">
        <h4>T-620 GENERAL</h4>
        <p>The liquid penetrant examination method is an effective means for detecting discontinuities which are open to the surface of nonporous metals and other materials. Typical discontinuities detectable by this method are cracks, seams, laps, cold shuts, laminations, and porosity.</p>
        <p>In principle, a liquid penetrant is applied to the surface to be examined and allowed to enter discontinuities. All excess penetrant is then removed, the part is dried, and a developer is applied. The developer functions both as a blotter to absorb penetrant that has been trapped in discontinuities, and as a contrasting background to enhance the visibility of penetrant indications. The dyes in penetrants are either color contrast (visible under white light) or fluorescent (visible under ultraviolet light).</p>
    </div>
    <div class="subsection">
        <h4>T-621 WRITTEN PROCEDURE REQUIREMENTS</h4>
        <div class="subsection">
            <h4>T-621.1 Requirements</h4>
            <p>Liquid penetrant examination shall be performed in accordance with a written procedure which shall as a minimum, contain the requirements listed in Table T-621.1. The written procedure shall establish a single value, or range of values, for each requirement.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-621_1.png" class="figure-image">
                <p class="figure-caption">Table T-621.1 Requirements of a Liquid Penetrant Examination Procedure</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-621.2 Procedure Qualification</h4>
            <p>When procedure qualification is specified by the referencing Code Section, a change of a requirement in Table T-621.1 identified as an essential variable shall require requalification of the written procedure by demonstration. A change of a requirement identified as a nonessential variable does not require requalification of the written procedure. All changes of essential or nonessential variables from those specified within the written procedure shall require revision of, or an addendum to, the written procedure.</p>
        </div>
        <div class="subsection">
            <h4>T-621.3 Minimum and Maximum Step Times</h4>
            <p>The written procedure shall have minimum and maximum times for the applicable examination steps listed in Table T-621.3.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-621_3.png" class="figure-image">
                <p class="figure-caption">Table T-621.3 Minimum and Maximum Time Limits for Steps in Penetrant Examination Procedures</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-630 EQUIPMENT</h4>
        <p>The term penetrant materials, as used in this Article, is intended to include all penetrants, emulsifiers, solvents or cleaning agents, developers, etc., used in the examination process. The descriptions of the liquid penetrant classifications and material types are provided in SE-165 of Article 24.</p>
    </div>
    <div class="subsection">
        <h4>T-640 MISCELLANEOUS REQUIREMENTS</h4>
        <div class="subsection">
            <h4>T-641 CONTROL OF CONTAMINANTS</h4>
            <p>The user of this Article shall obtain certification of contaminant content for all liquid penetrant materials used on nickel base alloys, austenitic or duplex stainless steels, and titanium. These certifications shall include the penetrant manufacturers' batch numbers and the test results obtained in accordance with Mandatory Appendix II of this Article. These records shall be maintained as required by the referencing Code Section.</p>
        </div>
        <div class="subsection">
            <h4>T-642 SURFACE PREPARATION</h4>
            <p>(a) In general, satisfactory results may be obtained when the surface of the part is in the as-welded, as-rolled, as-cast, or as-forged condition. Surface preparation by grinding, machining, or other methods may be necessary where surface irregularities could mask indications.</p>
            <p>(b) Prior to each liquid penetrant examination, the surface to be examined and all adjacent areas within at least 1 in. (25 mm) shall be dry and free of all dirt, grease, lint, scale, welding flux, weld spatter, paint, oil, and other extraneous matter that could obscure surface openings or otherwise interfere with the examination.</p>
            <p>(c) Typical cleaning agents which may be used are detergents, organic solvents, descaling solutions, and paint removers. Degreasing and ultrasonic cleaning methods may also be used.</p>
            <p>(d) Cleaning solvents shall meet the requirements of T-641. The cleaning method employed is an important part of the examination process.</p>
            <p>NOTE: Conditioning of surfaces prior to examination as required in (a) may affect the results. See SE-165, Annex A1.</p>
        </div>
        <div class="subsection">
            <h4>T-643 DRYING AFTER PREPARATION</h4>
            <p>After cleaning, drying of the surfaces to be examined shall be accomplished by normal evaporation or with forced hot or cold air. A minimum period of time shall be established to ensure that the cleaning solution has evaporated prior to application of the penetrant.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-650 TECHNIQUE</h4>
        <div class="subsection">
            <h4>T-651 TECHNIQUES</h4>
            <p>Either a color contrast (visible) penetrant or a fluorescent penetrant shall be used with one of the following three penetrant techniques:</p>
            <p>(a) water washable</p>
            <p>(b) post-emulsifying</p>
            <p>(c) solvent removable</p>
        </div>
        <div class="subsection">
            <h4>T-652 TECHNIQUES FOR STANDARD TEMPERATURES</h4>
            <p>As a standard technique, the temperature of the penetrant and the surface of the part to be processed shall not be below 40°F (5°C) nor above 125°F (52°C) throughout the examination period. Local heating or cooling is permitted provided the part temperature remains in the range of 40°F to 125°F (5°C to 52°C) during the examination. Where it is not practical to comply with these temperature limitations, other temperatures and times may be used, provided the procedures are qualified as specified in T-653.</p>
        </div>
        <div class="subsection">
            <h4>T-653 TECHNIQUES FOR NONSTANDARD TEMPERATURES</h4>
            <p>When it is not practical to conduct a liquid penetrant examination within the temperature range of 40°F to 125°F (5°C to 52°C), the examination procedure at the proposed lower or higher temperature range requires qualification of the penetrant materials and processing in accordance with Mandatory Appendix III of this Article.</p>
        </div>
        <div class="subsection">
            <h4>T-654 TECHNIQUE RESTRICTIONS</h4>
            <p>Fluorescent penetrant examination shall not follow a color contrast penetrant examination. Intermixing of penetrant materials from different families or different manufacturers is not permitted. A retest with water-washable penetrants may cause loss of marginal indications due to contamination.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-660 CALIBRATION</h4>
        <p>Light meters, both visible and fluorescent (black) light meters, shall be calibrated at least once a year or whenever the meter has been repaired. If meters have not been in use for one year or more, calibration shall be done before being used.</p>
    </div>
    <div class="subsection">
        <h4>T-670 EXAMINATION</h4>
        <div class="subsection">
            <h4>T-671 PENETRANT APPLICATION</h4>
            <p>The penetrant may be applied by any suitable means, such as dipping, brushing, or spraying. If the penetrant is applied by spraying using compressed-air-type apparatus, filters shall be placed on the upstream side near the air inlet to preclude contamination of the penetrant by oil, water, dirt, or sediment that may have collected in the lines.</p>
        </div>
        <div class="subsection">
            <h4>T-672 PENETRATION (DWELL) TIME</h4>
            <p>Penetration (dwell) time is critical. The minimum penetration time shall be as required in Table T-672 or as qualified by demonstration for specific applications. The maximum dwell time shall not exceed 2 hr or as qualified by demonstration for specific applications. Regardless of the length of the dwell time, the penetrant shall not be allowed to dry. If for any reason the penetrant does dry, the examination procedure shall be repeated, beginning with a cleaning of the examination surface.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-672.png" class="figure-image">
                <p class="figure-caption">Table T-672 Minimum Dwell Times</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-673 EXCESS PENETRANT REMOVAL</h4>
            <p>After the specified penetration (dwell) time has elapsed, any penetrant remaining on the surface shall be removed, taking care to minimize removal of penetrant from discontinuities.</p>
            <div class="subsection">
                <h4>T-673.1 Water-Washable Penetrants</h4>
                <p>(a) Excess water-washable penetrants shall be removed with a water spray. The water pressure shall not exceed 50 psi (350 kPa), and the water temperature shall not exceed 110°F (43°C).</p>
                <p>(b) As an alternative to (a), water-washable penetrants may be removed by wiping with a clean, dry, lint-free cloth or absorbent paper, repeating the operation until most traces of penetrant have been removed. The remaining traces shall be removed by wiping the surface with a cloth or absorbent paper, lightly moistened with water. To minimize removal of penetrant from discontinuities, care shall be taken to avoid the use of excess water.</p>
            </div>
            <div class="subsection">
                <h4>T-673.2 Post-Emulsification Penetrants</h4>
                <p>(a) Lipophilic Emulsification. After the required penetrant dwell time, the excess surface penetrant shall be emulsified by immersing or flooding the part with the emulsifier. Emulsification time is dependent on the type of emulsifier and surface condition. The actual emulsification time shall be determined experimentally. After emulsification, the mixture shall be removed by immersing in or rinsing with water. The temperature and pressure of the water shall be as recommended by the manufacturer.</p>
                <p>(b) Hydrophilic Emulsification. After the required penetrant dwell time, the parts may be prerinsed with water spray or directly immersed or sprayed with an emulsifier–water mixture. A prerinse allows removal of excess surface penetrant from examination objects prior to the application of hydrophilic emulsifiers. Hydrophilic emulsifiers work by detergent action. For immersion applications, examination objects must be mechanically moved in the emulsifier bath or the emulsifier must be agitated by air bubbles, so that with either method, the emulsifier comes in contact with the penetrant coating. With immersion, the concentration of the emulsifier–water bath shall be as recommended by the manufacturer. For spray applications, all part surfaces shall be uniformly sprayed with an emulsifier–water mixture. With spray applications, the emulsifier concentration shall be in accordance with the manufacturer's recommendations, but shall be no greater than 5%. The final step after emulsification is a water immersion or a water spray post-rinse to remove the emulsified penetrant. All dwell times should be kept to a minimum and shall be not more than 2 min unless a longer time is qualified on a specific part. The pressures (water emulsifier and water spray) and temperatures (water and emulsifier) shall be in accordance with the requirements for water-washable penetrants.</p>
                <p>NOTE: Additional information may be obtained from SE-165.</p>
            </div>
            <div class="subsection">
                <h4>T-673.3 Solvent Removable Penetrants</h4>
                <p>Excess solvent removable penetrants shall be removed by wiping with a clean, dry, lint-free cloth or absorbent paper, repeating the operation until most traces of penetrant have been removed. The remaining traces shall be removed by wiping the surface with cloth or absorbent paper, lightly moistened with solvent. To minimize removal of penetrant from discontinuities, care shall be taken to avoid the use of excess solvent.</p>
                <p>WARNING: Flushing the surface with solvent, following the application of the penetrant and prior to developing, is prohibited.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-674 DRYING AFTER EXCESS PENETRANT REMOVAL</h4>
            <p>(a) For the water-washable or post-emulsifying technique, the surfaces may be dried by blotting with clean materials or by using circulating air, provided the temperature of the surface is not raised above 125°F (52°C).</p>
            <p>(b) For the solvent removable technique, the surfaces may be dried by normal evaporation, blotting, wiping, or forced air.</p>
        </div>
        <div class="subsection">
            <h4>T-675 DEVELOPING</h4>
            <p>The developer shall be applied as soon as possible after penetrant removal; the time interval shall not exceed that established in the procedure. Insufficient coating thickness may not draw the penetrant out of discontinuities; conversely, excessive coating thickness may mask indications.</p>
            <p>With color contrast penetrants, only a wet developer shall be used. With fluorescent penetrants, a wet or dry developer may be used.</p>
            <div class="subsection">
                <h4>T-675.1 Dry Developer Application</h4>
                <p>Dry developer shall be applied only to a dry surface by a soft brush, hand powder bulb, powder gun, or other means, provided the powder is dusted evenly over the entire surface being examined.</p>
            </div>
            <div class="subsection">
                <h4>T-675.2 Wet Developer Application</h4>
                <p>Prior to applying suspension type wet developer to the surface, the developer must be thoroughly agitated to ensure adequate dispersion of suspended particles.</p>
                <p>(a) Aqueous Developer Application. Aqueous developer may be applied to either a wet or dry surface. It shall be applied by dipping, brushing, spraying, or other means, provided a thin coating is obtained over the entire surface being examined. Drying time may be decreased by using warm air, provided the surface temperature of the part is not raised above 125°F (52°C). Blotting is not permitted.</p>
                <p>(b) Nonaqueous Developer Application. Nonaqueous developers shall be applied by spraying, except where safety or restricted access preclude it. Under such conditions, developer may be applied by brushing. For water washable or post-emulsifiable penetrants, the developer shall be applied to a dry surface. For solvent removable penetrants, the developer may be applied as soon as practical after excess penetrant removal. Drying shall be by normal evaporation.</p>
            </div>
            <div class="subsection">
                <h4>T-675.3 Developing Time</h4>
                <p>Developing time for final interpretation begins immediately after the application of a dry developer or as soon as a wet developer coating is dry.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-676 INTERPRETATION</h4>
            <div class="subsection">
                <h4>T-676.1 Final Interpretation</h4>
                <p>Final interpretation shall be made not less than 10 min nor more than 60 min after the requirements of T-675.3 are satisfied, unless otherwise qualified under T-653. If bleed-out does not alter the examination results, longer periods are permitted. If the surface to be examined is large enough to preclude complete examination within the prescribed or established time, the examination shall be performed in increments.</p>
            </div>
            <div class="subsection">
                <h4>T-676.2 Characterizing Indication(s)</h4>
                <p>The type of discontinuities are difficult to evaluate if the penetrant diffuses excessively into the developer. If this condition occurs, close observation of the formation of indication(s) during application of the developer may assist in characterizing and determining the extent of the indication(s).</p>
            </div>
            <div class="subsection">
                <h4>T-676.3 Color Contrast Penetrants</h4>
                <p>With a color contrast penetrant, the developer forms a reasonably uniform white coating. Surface discontinuities are indicated by bleed-out of the penetrant which is normally a deep red color that stains the developer. Indications with a light pink color may indicate excessive cleaning. Inadequate cleaning may leave an excessive background making interpretation difficult. Illumination (natural or supplemental white light) of the examination surface is required for the evaluation of indications. The minimum light intensity shall be 100 fc (1 076 lx). The light intensity, natural or supplemental white light source, shall be measured with a white light meter prior to the evaluation of indications or a verified light source shall be used. Verification of light sources is required to be demonstrated only one time, documented, and maintained on file.</p>
            </div>
            <div class="subsection">
                <h4>T-676.4 Fluorescent Penetrants</h4>
                <p>With fluorescent penetrants, the process is essentially the same as in T-676.3, with the exception that the examination is performed using an ultraviolet light, called UV-A light. The examination shall be performed as follows:</p>
                <p>(a) It shall be performed in a darkened area with a maximum ambient white light level of 2 fc (21.5 lx) measured with a calibrated white light meter at the examination surface.</p>
                <p>(b) Examiners shall be in a darkened area for at least 5 min prior to performing examinations to enable their eyes to adapt to dark viewing. Glasses or lenses worn by examiners shall not be photosensitive.</p>
                <p>(c) The examination area shall be illuminated with UV-A lights that operate in the range between 320 nm and 400 nm.</p>
                <p>(d) UV-A lights shall achieve a minimum of 1000 μW/cm² on the surface of the part being examined throughout the examination.</p>
                <p>(e) Reflectors, filters, glasses, and lenses shall be clean prior to use. Cracked or broken reflectors, filters, glasses, or lenses shall not be used.</p>
                <p>(f) The UV-A light intensity shall be measured with a UV-A light meter prior to use, whenever the light's power source is interrupted or changed, and at the completion of the examination or series of examinations.</p>
                <p>(g) Mercury vapor arc lamps produce UV-A wavelengths mainly at a peak wavelength of 365 nm for inducing fluorescence. Light-emitting diode (LED) UV-A sources using a single UV-A LED or an array of UV-A LEDs shall have emission characteristics comparable to those of other UV-A sources. LED UV-A sources shall meet the requirements of SE-2297 and SE-3022. LED UV-A light sources shall be certified as meeting the requirements of SE-3022 and/or ASTM E3022.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-677 POST-EXAMINATION CLEANING</h4>
            <p>When post-examination cleaning is required by the procedure, it should be conducted as soon as practical after Evaluation and Documentation using a process that does not adversely affect the part.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-680 EVALUATION</h4>
        <p>(a) All indications shall be evaluated in terms of the acceptance standards of the referencing Code Section.</p>
        <p>(b) Discontinuities at the surface will be indicated by bleed-out of penetrant; however, localized surface irregularities due to machining marks or other surface conditions may produce false indications.</p>
        <p>(c) Broad areas of fluorescence or pigmentation which could mask indications of discontinuities are unacceptable, and such areas shall be cleaned and reexamined.</p>
    </div>
    <div class="subsection">
        <h4>T-690 DOCUMENTATION</h4>
        <div class="subsection">
            <h4>T-691 RECORDING OF INDICATIONS</h4>
            <div class="subsection">
                <h4>T-691.1 Nonrejectable Indications</h4>
                <p>Nonrejectable indications shall be recorded as specified by the referencing Code Section.</p>
            </div>
            <div class="subsection">
                <h4>T-691.2 Rejectable Indications</h4>
                <p>Rejectable indications shall be recorded. As a minimum, the type of indications (linear or rounded), location and extent (length or diameter or aligned) shall be recorded.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-692 EXAMINATION RECORDS</h4>
            <p>For each examination, the following information shall be recorded:</p>
            <p>(a) the requirements of Article 1, T-190(a);</p>
            <p>(b) liquid penetrant type (visible or fluorescent);</p>
            <p>(c) penetrant material manufacturer's name, product designation, and batch number of each penetrant, penetrant remover, emulsifier, and developer used;</p>
            <p>(d) map or record of indications per T-691;</p>
            <p>(e) material and thickness, and;</p>
            <p>(f) lighting equipment.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>MANDATORY APPENDIX II</h4>
        <h4>CONTROL OF CONTAMINANTS FOR LIQUID PENETRANT EXAMINATION</h4>
        <div class="subsection">
            <h4>II-610 SCOPE</h4>
            <p>This Appendix contains requirements for the control of contaminant content for all liquid penetrant materials used on nickel base alloys, austenitic stainless steels, and titanium.</p>
        </div>
        <div class="subsection">
            <h4>II-640 REQUIREMENTS</h4>
            <div class="subsection">
                <h4>II-641 NICKEL BASE ALLOYS</h4>
                <p>When examining nickel base alloys, all penetrant materials shall be analyzed individually for sulfur content in accordance with SE-165, Annex 4. Alternatively, the material may be decomposed in accordance with SD-129 and analyzed in accordance with SD-516. The sulfur content shall not exceed 0.1% by weight.</p>
            </div>
            <div class="subsection">
                <h4>II-642 AUSTENITIC OR DUPLEX STAINLESS STEEL AND TITANIUM</h4>
                <p>When examining austenitic or duplex stainless steel and titanium, all penetrant materials shall be analyzed individually for chlorine and fluorine content in accordance with SE-165, Annex 4. Alternatively, the material may be decomposed and analyzed in accordance with SD-808 or SE-165, Annex 2 for chlorine and SE-165, Annex 3 for fluorine. The total chlorine and fluorine content shall not exceed 0.1% by weight.</p>
            </div>
            <div class="subsection">
                <h4>II-643 WATER</h4>
                <p>(a) For water used in precleaning or as part of processes that involve water, if potable water (e.g., drinking, bottled, distilled, or deionized water) is used, it is not required to be analyzed for chlorine and sulfur.</p>
                <p>(b) Any other type of water used that does not meet the requirements of (a) above shall be analyzed for chlorine in accordance with ASTM D1253 and for sulfur in accordance with SD-516. The chlorine content shall not exceed 0.1% by weight and the sulfur content shall not exceed 0.1% by weight.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>II-690 DOCUMENTATION</h4>
            <p>Certifications obtained on penetrant materials shall include the penetrant manufacturers' batch numbers and the test results obtained in accordance with II-640. These records shall be maintained as required by the referencing Code Section.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>MANDATORY APPENDIX III</h4>
        <h4>QUALIFICATION TECHNIQUES FOR EXAMINATIONS AT NONSTANDARD TEMPERATURES</h4>
        <div class="subsection">
            <h4>III-610 SCOPE</h4>
            <p>When a liquid penetrant examination cannot be conducted within the standard temperature range of 40°F to 125°F (5°C to 52°C), the temperature of the examination shall be qualified in accordance with this Appendix.</p>
        </div>
        <div class="subsection">
            <h4>III-630 MATERIALS</h4>
            <p>A liquid penetrant comparator block shall be made as follows. The liquid penetrant comparator blocks shall be made of aluminum, ASTM B209, Type 2024, 3/8 in. (10 mm) thick, and should have approximate face dimensions of 2 in. × 3 in. (50 mm × 75 mm). At the center of each face, an area approximately 1 in. (25 mm) in diameter shall be marked with a 950°F (510°C) temperature indicating crayon or paint. The marked area shall be heated with a blowtorch, a Bunsen burner, or similar device to a temperature between 950°F (510°C) and 975°F (524°C). The specimen shall then be immediately quenched in cold water, which produces a network of fine cracks on each face.</p>
            <p>The block shall then be dried by heating to approximately 300°F (149°C). After cooling, the block shall be cut in half. One-half of the specimen shall be designated block "A" and the other block "B" for identification in subsequent processing. Figure III-630 illustrates the comparator blocks "A" and "B." As an alternate to cutting the block in half to make blocks "A" and "B," separate blocks 2 in. × 3 in. (50 mm × 75 mm) can be made using the heating and quenching technique as described above. Two comparator blocks with closely matched crack patterns may be used. The blocks shall be marked "A" and "B."</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_iii-630.png" class="figure-image">
                <p class="figure-caption">Figure III-630 Liquid Penetrant Comparator</p>
            </div>
        </div>
        <div class="subsection">
            <h4>III-640 REQUIREMENTS</h4>
            <div class="subsection">
                <h4>III-641 COMPARATOR APPLICATION</h4>
                <div class="subsection">
                    <h4>III-641.1 Temperature Less Than 40°F (5°C)</h4>
                    <p>If it is desired to qualify a liquid penetrant examination procedure at a temperature of less than 40°F (5°C), the proposed procedure shall be applied to block "B" after the block and all materials have been cooled and held at the proposed examination temperature until the comparison is completed. A standard procedure which has previously been demonstrated as suitable for use shall be applied to block "A" in the 40°F to 125°F (5°C to 52°C) temperature range. The indications of cracks shall be compared between blocks "A" and "B." If the indications obtained under the proposed conditions on block "B" are essentially the same as obtained on block "A" during examination at 40°F to 125°F (5°C to 52°C), the proposed procedure shall be considered qualified for use. A procedure qualified at a temperature lower than 40°F (5°C) shall be qualified from that temperature to 40°F (5°C).</p>
                </div>
                <div class="subsection">
                    <h4>III-641.2 Temperature Greater Than 125°F (52°C)</h4>
                    <p>If the proposed temperature for the examination is above 125°F (52°C), block "B" shall be held at this temperature throughout the examination. The indications of cracks shall be compared as described in III-641.1 while block "B" is at the proposed temperature and block "A" is at the 40°F to 125°F (5°C to 52°C) temperature range.</p>
                    <p>To qualify a procedure for temperatures above 125°F (52°C), for penetrants normally used in the 40°F to 125°F (5°C to 52°C) temperature range, the upper temperature limit shall be qualified and the procedure then is usable between the qualified upper temperature and the normal lower temperature of 40°F (5°C). [As an example, to qualify a penetrant normally used in the 40°F to 125°F (5°C to 52°C) temperature range at 200°F (93°C), the capability of the penetrant need only be qualified for 40°F to 200°F (5°C to 93°C) using the normal range dwell times.]</p>
                    <p>The temperature range can be any range desired by the user. For a high-temperature penetrant not normally used in the 40°F to 125°F (5°C to 52°C) temperature range, the capability of a penetrant to reveal indications on the comparator shall be demonstrated at both the lower and upper temperatures. [As an example, to qualify a high temperature penetrant for use from 200°F to 400°F (93°C to 204°C), the capability of the penetrant to reveal indications on the comparator shall be demonstrated at 200°F to 400°F (93°C to 204°C) using the maximum observed dwell time.]</p>
                </div>
                <div class="subsection">
                    <h4>III-641.3 Alternate Techniques for Color Contrast Penetrants</h4>
                    <p>As an alternate to the requirements of III-641.1 and III-641.2, when using color contrast penetrants, it is permissible to use a single comparator block for the standard and nonstandard temperatures and to make the comparison by photography.</p>
                    <p>(a) When the single comparator block and photographic technique is used, the processing details (as applicable) described in III-641.1 and III-641.2 apply. The block shall be thoroughly cleaned between the two processing steps. Photographs shall be taken after processing at the nonstandard temperature and then after processing at the standard temperature. The indication of cracks shall be compared between the two photographs. The same criteria for qualification as III-641.1 shall apply.</p>
                    <p>(b) Identical photographic techniques shall be used to make the comparison photographs.</p>
                </div>
            </div>
        </div>
    </div>
    `,
    contentEs: `<h3>ARTÍCULO 6 EXAMEN POR LÍQUIDOS PENETRANTES</h3>
    <div class="subsection">
        <h4>T-610 ALCANCE</h4>
        <p>Cuando este Artículo sea especificado por una Sección de Código de referencia, el método de líquidos penetrantes descrito en este Artículo se utilizará junto con el Artículo 1, Requisitos Generales. Las definiciones de los términos utilizados en este Artículo aparecen en el Artículo 1, Apéndice Obligatorio I, I-121.3, PT — Líquidos Penetrantes.</p>
    </div>
    <div class="subsection">
        <h4>T-620 GENERAL</h4>
        <p>El método de examen por líquidos penetrantes es un medio eficaz para detectar discontinuidades que están abiertas a la superficie de metales no porosos y otros materiales. Las discontinuidades típicas detectables por este método son grietas, costuras, solapes, cierres en frío, laminaciones y porosidad.</p>
        <p>En principio, se aplica un líquido penetrante a la superficie que se va a examinar y se permite que penetre en las discontinuidades. Luego se elimina todo el exceso de penetrante, se seca la pieza y se aplica un revelador. El revelador funciona tanto como un secante para absorber el penetrante que ha quedado atrapado en las discontinuidades, como un fondo de contraste para mejorar la visibilidad de las indicaciones del penetrante. Los colorantes en los penetrantes son de contraste de color (visibles bajo luz blanca) o fluorescentes (visibles bajo luz ultravioleta).</p>
    </div>
    <div class="subsection">
        <h4>T-621 REQUISITOS DE PROCEDIMIENTO ESCRITO</h4>
        <div class="subsection">
            <h4>T-621.1 Requisitos</h4>
            <p>El examen por líquidos penetrantes se realizará de acuerdo con un procedimiento escrito que contendrá como mínimo los requisitos enumerados en la Tabla T-621.1. El procedimiento escrito establecerá un valor único o un rango de valores para cada requisito.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-621_1.png" class="figure-image">
                <p class="figure-caption">Tabla T-621.1 Requisitos de un Procedimiento de Examen por Líquidos Penetrantes</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-621.2 Calificación del Procedimiento</h4>
            <p>Cuando la calificación del procedimiento sea especificada por la Sección de Código de referencia, un cambio en un requisito de la Tabla T-621.1 identificado como una variable esencial requerirá la recalificación del procedimiento escrito mediante demostración. Un cambio en un requisito identificado como una variable no esencial no requerirá la recalificación del procedimiento escrito. Todos los cambios de variables esenciales o no esenciales con respecto a los especificados en el procedimiento escrito requerirán una revisión o un addendo al procedimiento escrito.</p>
        </div>
        <div class="subsection">
            <h4>T-621.3 Tiempos Mínimos y Máximos de los Pasos</h4>
            <p>El procedimiento escrito tendrá tiempos mínimos y máximos para los pasos de examen aplicables enumerados en la Tabla T-621.3.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-621_3.png" class="figure-image">
                <p class="figure-caption">Tabla T-621.3 Límites de Tiempo Mínimos y Máximos para los Pasos en los Procedimientos de Examen por Penetrantes</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-630 EQUIPO</h4>
        <p>El término materiales penetrantes, como se utiliza en este Artículo, pretende incluir todos los penetrantes, emulsionantes, disolventes o agentes de limpieza, reveladores, etc., utilizados en el proceso de examen. Las descripciones de las clasificaciones de líquidos penetrantes y tipos de materiales se proporcionan en SE-165 del Artículo 24.</p>
    </div>
    <div class="subsection">
        <h4>T-640 REQUISITOS VARIOS</h4>
        <div class="subsection">
            <h4>T-641 CONTROL DE CONTAMINANTES</h4>
            <p>El usuario de este Artículo deberá obtener la certificación del contenido de contaminantes para todos los materiales de líquidos penetrantes utilizados en aleaciones base níquel, aceros inoxidables austeníticos o dúplex y titanio. Estas certificaciones incluirán los números de lote de los fabricantes de penetrantes y los resultados de las pruebas obtenidos de acuerdo con el Apéndice Obligatorio II de este Artículo. Estos registros se mantendrán según lo requiera la Sección de Código de referencia.</p>
        </div>
        <div class="subsection">
            <h4>T-642 PREPARACIÓN DE LA SUPERFICIE</h4>
            <p>(a) En general, se pueden obtener resultados satisfactorios cuando la superficie de la pieza está en estado de soldadura, laminado, fundición o forja. Puede ser necesaria la preparación de la superficie mediante esmerilado, mecanizado u otros métodos donde las irregularidades de la superficie puedan enmascarar las indicaciones.</p>
            <p>(b) Antes de cada examen por líquidos penetrantes, la superficie que se va a examinar y todas las áreas adyacentes dentro de al menos 1 pulg. (25 mm) deberán estar secas y libres de toda suciedad, grasa, pelusas, óxido, fundente de soldadura, salpicaduras de soldadura, pintura, aceite y otras materias extrañas que puedan oscurecer las aberturas superficiales o interferir de otro modo con el examen.</p>
            <p>(c) Los agentes de limpieza típicos que pueden usarse son detergentes, disolventes orgánicos, soluciones de descascarillado y removedores de pintura. También pueden usarse métodos de desengrase y limpieza ultrasónica.</p>
            <p>(d) Los disolventes de limpieza cumplirán los requisitos de T-641. El método de limpieza empleado es una parte importante del proceso de examen.</p>
            <p>NOTA: El acondicionamiento de las superficies antes del examen según lo requerido en (a) puede afectar los resultados. Véase SE-165, Anexo A1.</p>
        </div>
        <div class="subsection">
            <h4>T-643 SECADO DESPUÉS DE LA PREPARACIÓN</h4>
            <p>Después de la limpieza, el secado de las superficies que se van a examinar se realizará por evaporación normal o con aire caliente o frío forzado. Se establecerá un período de tiempo mínimo para asegurar que la solución de limpieza se haya evaporado antes de la aplicación del penetrante.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-650 TÉCNICA</h4>
        <div class="subsection">
            <h4>T-651 TÉCNICAS</h4>
            <p>Se utilizará un penetrante de contraste de color (visible) o un penetrante fluorescente con una de las siguientes tres técnicas de penetrante:</p>
            <p>(a) lavable con agua</p>
            <p>(b) post-emulsionable</p>
            <p>(c) removible con disolvente</p>
        </div>
        <div class="subsection">
            <h4>T-652 TÉCNICAS PARA TEMPERATURAS ESTÁNDAR</h4>
            <p>Como técnica estándar, la temperatura del penetrante y la superficie de la pieza a procesar no será inferior a 40°F (5°C) ni superior a 125°F (52°C) durante todo el período de examen. Se permite el calentamiento o enfriamiento local siempre que la temperatura de la pieza se mantenga en el rango de 40°F a 125°F (5°C a 52°C) durante el examen. Cuando no sea práctico cumplir con estas limitaciones de temperatura, pueden usarse otras temperaturas y tiempos, siempre que los procedimientos estén calificados según lo especificado en T-653.</p>
        </div>
        <div class="subsection">
            <h4>T-653 TÉCNICAS PARA TEMPERATURAS NO ESTÁNDAR</h4>
            <p>Cuando no sea práctico realizar un examen por líquidos penetrantes dentro del rango de temperatura de 40°F a 125°F (5°C a 52°C), el procedimiento de examen en el rango de temperatura más bajo o más alto propuesto requiere la calificación de los materiales penetrantes y el procesamiento de acuerdo con el Apéndice Obligatorio III de este Artículo.</p>
        </div>
        <div class="subsection">
            <h4>T-654 RESTRICCIONES DE TÉCNICA</h4>
            <p>El examen con penetrante fluorescente no deberá seguir a un examen con penetrante de contraste de color. No se permite la mezcla de materiales penetrantes de diferentes familias o diferentes fabricantes. Una nueva prueba con penetrantes lavables con agua puede causar la pérdida de indicaciones marginales debido a la contaminación.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-660 CALIBRACIÓN</h4>
        <p>Los medidores de luz, tanto los medidores de luz visible como los de luz fluorescente (negra), se calibrarán al menos una vez al año o siempre que el medidor haya sido reparado. Si los medidores no han sido utilizados durante un año o más, se deberá realizar la calibración antes de su uso.</p>
    </div>
    <div class="subsection">
        <h4>T-670 EXAMEN</h4>
        <div class="subsection">
            <h4>T-671 APLICACIÓN DEL PENETRANTE</h4>
            <p>El penetrante puede aplicarse por cualquier medio adecuado, como inmersión, cepillado o pulverización. Si el penetrante se aplica por pulverización utilizando un aparato de aire comprimido, se colocarán filtros en el lado aguas arriba cerca de la entrada de aire para evitar la contaminación del penetrante por aceite, agua, suciedad o sedimentos que puedan haberse acumulado en las líneas.</p>
        </div>
        <div class="subsection">
            <h4>T-672 TIEMPO DE PENETRACIÓN (PERMANENCIA)</h4>
            <p>El tiempo de penetración (permanencia) es crítico. El tiempo mínimo de penetración será el requerido en la Tabla T-672 o el calificado mediante demostración para aplicaciones específicas. El tiempo máximo de permanencia no excederá de 2 horas o el calificado mediante demostración para aplicaciones específicas. Independientemente de la duración del tiempo de permanencia, no se permitirá que el penetrante se seque. Si por alguna razón el penetrante se seca, se repetirá el procedimiento de examen, comenzando con la limpieza de la superficie de examen.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-672.png" class="figure-image">
                <p class="figure-caption">Tabla T-672 Tiempos Mínimos de Permanencia</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-673 ELIMINACIÓN DEL EXCESO DE PENETRANTE</h4>
            <p>Después de que haya transcurrido el tiempo de penetración (permanencia) especificado, se eliminará cualquier penetrante que quede en la superficie, teniendo cuidado de minimizar la eliminación de penetrante de las discontinuidades.</p>
            <div class="subsection">
                <h4>T-673.1 Penetrantes Lavables con Agua</h4>
                <p>(a) El exceso de penetrantes lavables con agua se eliminará con una pulverización de agua. La presión del agua no excederá de 50 psi (350 kPa) y la temperatura del agua no excederá de 110°F (43°C).</p>
                <p>(b) Como alternativa a (a), los penetrantes lavables con agua pueden eliminarse limpiando con un paño limpio, seco y sin pelusas o papel absorbente, repitiendo la operación hasta que la mayoría de los rastros de penetrante hayan sido eliminados. Los rastros restantes se eliminarán limpiando la superficie con un paño o papel absorbente, ligeramente humedecido con agua. Para minimizar la eliminación de penetrante de las discontinuidades, se tendrá cuidado de evitar el uso de exceso de agua.</p>
            </div>
            <div class="subsection">
                <h4>T-673.2 Penetrantes Post-Emulsionables</h4>
                <p>(a) Emulsificación Lipofílica. Después del tiempo de permanencia requerido del penetrante, el exceso de penetrante superficial se emulsionará sumergiendo o inundando la pieza con el emulsionante. El tiempo de emulsificación depende del tipo de emulsionante y la condición de la superficie. El tiempo real de emulsificación se determinará experimentalmente. Después de la emulsificación, la mezcla se eliminará sumergiendo en o enjuagando con agua. La temperatura y presión del agua serán las recomendadas por el fabricante.</p>
                <p>(b) Emulsificación Hidrofílica. Después del tiempo de permanencia requerido del penetrante, las piezas pueden preenjuagarse con pulverización de agua o sumergirse o pulverizarse directamente con una mezcla de emulsionante-agua. Un preenjuague permite la eliminación del exceso de penetrante superficial de los objetos de examen antes de la aplicación de emulsionantes hidrofílicos. Los emulsionantes hidrofílicos funcionan por acción detergente. Para aplicaciones por inmersión, los objetos de examen deben moverse mecánicamente en el baño de emulsionante o el emulsionante debe agitarse con burbujas de aire, de modo que con cualquiera de los métodos, el emulsionante entre en contacto con el recubrimiento de penetrante. Con la inmersión, la concentración del baño de emulsionante-agua será la recomendada por el fabricante. Para aplicaciones por pulverización, todas las superficies de las piezas deben pulverizarse uniformemente con una mezcla de emulsionante-agua. Con las aplicaciones por pulverización, la concentración del emulsionante estará de acuerdo con las recomendaciones del fabricante, pero no será mayor del 5%. El paso final después de la emulsificación es una inmersión en agua o un post-enjuague con pulverización de agua para eliminar el penetrante emulsionado. Todos los tiempos de permanencia deben mantenerse al mínimo y no serán superiores a 2 min a menos que un tiempo mayor esté calificado en una pieza específica. Las presiones (agua emulsionante y pulverización de agua) y las temperaturas (agua y emulsionante) estarán de acuerdo con los requisitos para los penetrantes lavables con agua.</p>
                <p>NOTA: Se puede obtener información adicional en SE-165.</p>
            </div>
            <div class="subsection">
                <h4>T-673.3 Penetrantes Removibles con Disolvente</h4>
                <p>El exceso de penetrantes removibles con disolvente se eliminará limpiando con un paño limpio, seco y sin pelusas o papel absorbente, repitiendo la operación hasta que la mayoría de los rastros de penetrante hayan sido eliminados. Los rastros restantes se eliminarán limpiando la superficie con un paño o papel absorbente, ligeramente humedecido con disolvente. Para minimizar la eliminación de penetrante de las discontinuidades, se tendrá cuidado de evitar el uso de exceso de disolvente.</p>
                <p>ADVERTENCIA: Está prohibido enjuagar la superficie con disolvente, después de la aplicación del penetrante y antes del revelado.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-674 SECADO DESPUÉS DE LA ELIMINACIÓN DEL EXCESO DE PENETRANTE</h4>
            <p>(a) Para la técnica lavable con agua o post-emulsionable, las superficies pueden secarse mediante secado con materiales limpios o utilizando aire circulante, siempre que la temperatura de la superficie no se eleve por encima de 125°F (52°C).</p>
            <p>(b) Para la técnica removible con disolvente, las superficies pueden secarse por evaporación normal, secado, limpieza o aire forzado.</p>
        </div>
        <div class="subsection">
            <h4>T-675 REVELADO</h4>
            <p>El revelador se aplicará tan pronto como sea posible después de la eliminación del penetrante; el intervalo de tiempo no excederá el establecido en el procedimiento. Un espesor de recubrimiento insuficiente puede no extraer el penetrante de las discontinuidades; por el contrario, un espesor de recubrimiento excesivo puede enmascarar las indicaciones.</p>
            <p>Con los penetrantes de contraste de color, solo se utilizará un revelador húmedo. Con los penetrantes fluorescentes, puede utilizarse un revelador húmedo o seco.</p>
            <div class="subsection">
                <h4>T-675.1 Aplicación de Revelador Seco</h4>
                <p>El revelador seco solo se aplicará a una superficie seca mediante un cepillo suave, pera de polvo manual, pistola de polvo u otros medios, siempre que el polvo se espolvoree uniformemente sobre toda la superficie que se está examinando.</p>
            </div>
            <div class="subsection">
                <h4>T-675.2 Aplicación de Revelador Húmedo</h4>
                <p>Antes de aplicar el revelador húmedo tipo suspensión a la superficie, el revelador debe agitarse彻底mente para asegurar una dispersión adecuada de las partículas suspendidas.</p>
                <p>(a) Aplicación de Revelador Acuoso. El revelador acuoso puede aplicarse a una superficie húmeda o seca. Se aplicará por inmersión, cepillado, pulverización u otros medios, siempre que se obtenga un recubrimiento delgado sobre toda la superficie que se está examinando. El tiempo de secado puede reducirse utilizando aire caliente, siempre que la temperatura de la superficie de la pieza no se eleve por encima de 125°F (52°C). No se permite el secado.</p>
                <p>(b) Aplicación de Revelador No Acuoso. Los reveladores no acuosos se aplicarán por pulverización, excepto cuando la seguridad o el acceso restringido lo impidan. Bajo tales condiciones, el revelador puede aplicarse mediante cepillado. Para los penetrantes lavables con agua o post-emulsionables, el revelador se aplicará a una superficie seca. Para los penetrantes removibles con disolvente, el revelador puede aplicarse tan pronto como sea práctico después de la eliminación del exceso de penetrante. El secado será por evaporación normal.</p>
            </div>
            <div class="subsection">
                <h4>T-675.3 Tiempo de Revelado</h4>
                <p>El tiempo de revelado para la interpretación final comienza inmediatamente después de la aplicación de un revelador seco o tan pronto como un recubrimiento de revelador húmedo esté seco.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-676 INTERPRETACIÓN</h4>
            <div class="subsection">
                <h4>T-676.1 Interpretación Final</h4>
                <p>La interpretación final se realizará no antes de 10 min ni después de 60 min después de que se cumplan los requisitos de T-675.3, a menos que esté calificado de otra manera bajo T-653. Si la salida de penetrante no altera los resultados del examen, se permiten períodos más largos. Si la superficie que se va a examinar es lo suficientemente grande como para impedir un examen completo dentro del tiempo prescrito o establecido, el examen se realizará por incrementos.</p>
            </div>
            <div class="subsection">
                <h4>T-676.2 Caracterización de Indicaciones</h4>
                <p>El tipo de discontinuidades es difícil de evaluar si el penetrante se difunde excesivamente en el revelador. Si ocurre esta condición, la observación cercana de la formación de indicaciones durante la aplicación del revelador puede ayudar a caracterizar y determinar la extensión de las indicaciones.</p>
            </div>
            <div class="subsection">
                <h4>T-676.3 Penetrantes de Contraste de Color</h4>
                <p>Con un penetrante de contraste de color, el revelador forma un recubrimiento blanco razonablemente uniforme. Las discontinuidades superficiales se indican por la salida de penetrante que normalmente es de color rojo oscuro que mancha el revelador. Las indicaciones con un color rosa claro pueden indicar una limpieza excesiva. Una limpieza inadecuada puede dejar un fondo excesivo que dificulta la interpretación. Se requiere la iluminación (natural o suplementaria de luz blanca) de la superficie de examen para la evaluación de indicaciones. La intensidad mínima de la luz será de 100 fc (1 076 lx). La intensidad de la luz, fuente de luz blanca natural o suplementaria, se medirá con un medidor de luz blanca antes de la evaluación de las indicaciones o se utilizará una fuente de luz verificada. La verificación de las fuentes de luz solo debe demostrarse una vez, documentarse y mantenerse en archivo.</p>
            </div>
            <div class="subsection">
                <h4>T-676.4 Penetrantes Fluorescentes</h4>
                <p>Con los penetrantes fluorescentes, el proceso es esencialmente el mismo que en T-676.3, con la excepción de que el examen se realiza utilizando una luz ultravioleta, llamada luz UV-A. El examen se realizará de la siguiente manera:</p>
                <p>(a) Se realizará en un área oscurecida con un nivel máximo de luz blanca ambiental de 2 fc (21.5 lx) medido con un medidor de luz blanca calibrado en la superficie de examen.</p>
                <p>(b) Los examinadores estarán en un área oscurecida durante al menos 5 min antes de realizar los exámenes para permitir que sus ojos se adapten a la visión en la oscuridad. Las gafas o lentes utilizados por los examinadores no serán fotosensibles.</p>
                <p>(c) El área de examen se iluminará con luces UV-A que operen en el rango entre 320 nm y 400 nm.</p>
                <p>(d) Las luces UV-A alcanzarán un mínimo de 1000 μW/cm² en la superficie de la pieza que se está examinando durante todo el examen.</p>
                <p>(e) Los reflectores, filtros, gafas y lentes estarán limpios antes de su uso. No se utilizarán reflectores, filtros, gafas o lentes agrietados o rotos.</p>
                <p>(f) La intensidad de la luz UV-A se medirá con un medidor de luz UV-A antes de su uso, siempre que se interrumpa o cambie la fuente de alimentación de la luz, y al finalizar el examen o serie de exámenes.</p>
                <p>(g) Las lámparas de arco de vapor de mercurio producen longitudes de onda UV-A principalmente en una longitud de onda pico de 365 nm para inducir fluorescencia. Las fuentes de luz UV-A de diodos emisores de luz (LED) que utilizan un solo LED UV-A o una matriz de LED UV-A tendrán características de emisión comparables a las de otras fuentes UV-A. Las fuentes UV-A LED cumplirán los requisitos de SE-2297 y SE-3022. Las fuentes de luz UV-A LED deberán estar certificadas como que cumplen con los requisitos de SE-3022 y/o ASTM E3022.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-677 LIMPIEZA POSTERIOR AL EXAMEN</h4>
            <p>Cuando el procedimiento requiera limpieza posterior al examen, se debe realizar tan pronto como sea práctico después de la Evaluación y Documentación utilizando un proceso que no afecte adversamente a la pieza.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-680 EVALUACIÓN</h4>
        <p>(a) Todas las indicaciones se evaluarán de acuerdo con los estándares de aceptación de la Sección de Código de referencia.</p>
        <p>(b) Las discontinuidades en la superficie se indicarán por la salida de penetrante; sin embargo, las irregularidades superficiales localizadas debido a marcas de mecanizado u otras condiciones de la superficie pueden producir indicaciones falsas.</p>
        <p>(c) Las áreas amplias de fluorescencia o pigmentación que puedan enmascarar las indicaciones de discontinuidades son inaceptables, y dichas áreas deberán limpiarse y reexaminarse.</p>
    </div>
    <div class="subsection">
        <h4>T-690 DOCUMENTACIÓN</h4>
        <div class="subsection">
            <h4>T-691 REGISTRO DE INDICACIONES</h4>
            <div class="subsection">
                <h4>T-691.1 Indicaciones No Rechazables</h4>
                <p>Las indicaciones no rechazables se registrarán según lo especificado por la Sección de Código de referencia.</p>
            </div>
            <div class="subsection">
                <h4>T-691.2 Indicaciones Rechazables</h4>
                <p>Las indicaciones rechazables se registrarán. Como mínimo, se registrarán el tipo de indicaciones (lineales o redondeadas), ubicación y extensión (longitud o diámetro o alineadas).</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-692 REGISTROS DE EXAMEN</h4>
            <p>Para cada examen, se registrará la siguiente información:</p>
            <p>(a) los requisitos del Artículo 1, T-190(a);</p>
            <p>(b) tipo de líquido penetrante (visible o fluorescente);</p>
            <p>(c) nombre del fabricante del material penetrante, designación del producto y número de lote de cada penetrante, removedor de penetrante, emulsionante y revelador utilizados;</p>
            <p>(d) mapa o registro de indicaciones según T-691;</p>
            <p>(e) material y espesor, y;</p>
            <p>(f) equipo de iluminación.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>APÉNDICE OBLIGATORIO II</h4>
        <h4>CONTROL DE CONTAMINANTES PARA EL EXAMEN POR LÍQUIDOS PENETRANTES</h4>
        <div class="subsection">
            <h4>II-610 ALCANCE</h4>
            <p>Este Apéndice contiene los requisitos para el control del contenido de contaminantes para todos los materiales de líquidos penetrantes utilizados en aleaciones base níquel, aceros inoxidables austeníticos y titanio.</p>
        </div>
        <div class="subsection">
            <h4>II-640 REQUISITOS</h4>
            <div class="subsection">
                <h4>II-641 ALEACIONES BASE NÍQUEL</h4>
                <p>Al examinar aleaciones base níquel, todos los materiales penetrantes se analizarán individualmente para determinar el contenido de azufre de acuerdo con SE-165, Anexo 4. Alternativamente, el material puede descomponerse de acuerdo con SD-129 y analizarse de acuerdo con SD-516. El contenido de azufre no excederá el 0.1% en peso.</p>
            </div>
            <div class="subsection">
                <h4>II-642 ACERO INOXIDABLE AUSTENÍTICO O DÚPLEX Y TITANIO</h4>
                <p>Al examinar acero inoxidable austenítico o dúplex y titanio, todos los materiales penetrantes se analizarán individualmente para determinar el contenido de cloro y flúor de acuerdo con SE-165, Anexo 4. Alternativamente, el material puede descomponerse y analizarse de acuerdo con SD-808 o SE-165, Anexo 2 para cloro y SE-165, Anexo 3 para flúor. El contenido total de cloro y flúor no excederá el 0.1% en peso.</p>
            </div>
            <div class="subsection">
                <h4>II-643 AGUA</h4>
                <p>(a) Para el agua utilizada en la limpieza previa o como parte de procesos que involucran agua, si se utiliza agua potable (p. ej., agua de bebida, embotellada, destilada o desionizada), no es necesario que se analice para cloro y azufre.</p>
                <p>(b) Cualquier otro tipo de agua utilizada que no cumpla con los requisitos de (a) anterior se analizará para cloro de acuerdo con ASTM D1253 y para azufre de acuerdo con SD-516. El contenido de cloro no excederá el 0.1% en peso y el contenido de azufre no excederá el 0.1% en peso.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>II-690 DOCUMENTACIÓN</h4>
            <p>Las certificaciones obtenidas en los materiales penetrantes incluirán los números de lote de los fabricantes de penetrantes y los resultados de las pruebas obtenidos de acuerdo con II-640. Estos registros se mantendrán según lo requiera la Sección de Código de referencia.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>APÉNDICE OBLIGATORIO III</h4>
        <h4>TÉCNICAS DE CALIFICACIÓN PARA EXÁMENES A TEMPERATURAS NO ESTÁNDAR</h4>
        <div class="subsection">
            <h4>III-610 ALCANCE</h4>
            <p>Cuando un examen por líquidos penetrantes no pueda realizarse dentro del rango de temperatura estándar de 40°F a 125°F (5°C a 52°C), la temperatura del examen se calificará de acuerdo con este Apéndice.</p>
        </div>
        <div class="subsection">
            <h4>III-630 MATERIALES</h4>
            <p>Un bloque comparador de líquidos penetrantes se fabricará de la siguiente manera. Los bloques comparadores de líquidos penetrantes se fabricarán de aluminio, ASTM B209, Tipo 2024, de 3/8 pulg. (10 mm) de espesor, y deberán tener dimensiones de cara aproximadas de 2 pulg. × 3 pulg. (50 mm × 75 mm). En el centro de cada cara, se marcará un área de aproximadamente 1 pulg. (25 mm) de diámetro con un crayón o pintura indicadora de temperatura de 950°F (510°C). El área marcada se calentará con un soplete, un mechero Bunsen o un dispositivo similar a una temperatura entre 950°F (510°C) y 975°F (524°C). La muestra se enfriará inmediatamente en agua fría, lo que produce una red de grietas finas en cada cara.</p>
            <p>El bloque se secará luego calentándolo a aproximadamente 300°F (149°C). Después del enfriamiento, el bloque se cortará por la mitad. Una mitad de la muestra se designará como bloque "A" y la otra como bloque "B" para identificación en el procesamiento posterior. La Figura III-630 ilustra los bloques comparadores "A" y "B". Como alternativa a cortar el bloque por la mitad para hacer los bloques "A" y "B", pueden fabricarse bloques separados de 2 pulg. × 3 pulg. (50 mm × 75 mm) utilizando la técnica de calentamiento y enfriamiento descrita anteriormente. Pueden utilizarse dos bloques comparadores con patrones de grietas estrechamente coincidentes. Los bloques se marcarán "A" y "B".</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_iii-630.png" class="figure-image">
                <p class="figure-caption">Figura III-630 Comparador de Líquidos Penetrantes</p>
            </div>
        </div>
        <div class="subsection">
            <h4>III-640 REQUISITOS</h4>
            <div class="subsection">
                <h4>III-641 APLICACIÓN DEL COMPARADOR</h4>
                <div class="subsection">
                    <h4>III-641.1 Temperatura Inferior a 40°F (5°C)</h4>
                    <p>Si se desea calificar un procedimiento de examen por líquidos penetrantes a una temperatura inferior a 40°F (5°C), el procedimiento propuesto se aplicará al bloque "B" después de que el bloque y todos los materiales se hayan enfriado y mantenido a la temperatura de examen propuesta hasta que se complete la comparación. Se aplicará un procedimiento estándar que previamente se haya demostrado como adecuado para su uso al bloque "A" en el rango de temperatura de 40°F a 125°F (5°C a 52°C). Las indicaciones de grietas se compararán entre los bloques "A" y "B". Si las indicaciones obtenidas bajo las condiciones propuestas en el bloque "B" son esencialmente las mismas que las obtenidas en el bloque "A" durante el examen a 40°F a 125°F (5°C a 52°C), el procedimiento propuesto se considerará calificado para su uso. Un procedimiento calificado a una temperatura inferior a 40°F (5°C) se calificará desde esa temperatura hasta 40°F (5°C).</p>
                </div>
                <div class="subsection">
                    <h4>III-641.2 Temperatura Superior a 125°F (52°C)</h4>
                    <p>Si la temperatura propuesta para el examen es superior a 125°F (52°C), el bloque "B" se mantendrá a esta temperatura durante todo el examen. Las indicaciones de grietas se compararán como se describe en III-641.1 mientras el bloque "B" está a la temperatura propuesta y el bloque "A" está en el rango de temperatura de 40°F a 125°F (5°C a 52°C).</p>
                    <p>Para calificar un procedimiento para temperaturas superiores a 125°F (52°C), para penetrantes normalmente utilizados en el rango de temperatura de 40°F a 125°F (5°C a 52°C), se calificará el límite superior de temperatura y el procedimiento luego será utilizable entre la temperatura superior calificada y la temperatura inferior normal de 40°F (5°C). [Como ejemplo, para calificar un penetrante normalmente utilizado en el rango de temperatura de 40°F a 125°F (5°C a 52°C) a 200°F (93°C), la capacidad del penetrante solo necesita calificarse para 40°F a 200°F (5°C a 93°C) utilizando los tiempos de permanencia del rango normal.]</p>
                    <p>El rango de temperatura puede ser cualquier rango deseado por el usuario. Para un penetrante de alta temperatura que normalmente no se utiliza en el rango de temperatura de 40°F a 125°F (5°C a 52°C), se deberá demostrar la capacidad de un penetrante para revelar indicaciones en el comparador tanto en las temperaturas inferiores como superiores. [Como ejemplo, para calificar un penetrante de alta temperatura para su uso de 200°F a 400°F (93°C a 204°C), se deberá demostrar la capacidad del penetrante para revelar indicaciones en el comparador a 200°F a 400°F (93°C a 204°C) utilizando el tiempo de permanencia máximo observado.]</p>
                </div>
                <div class="subsection">
                    <h4>III-641.3 Técnicas Alternativas para Penetrantes de Contraste de Color</h4>
                    <p>Como alternativa a los requisitos de III-641.1 y III-641.2, cuando se utilizan penetrantes de contraste de color, es permisible utilizar un solo bloque comparador para las temperaturas estándar y no estándar y hacer la comparación mediante fotografía.</p>
                    <p>(a) Cuando se utiliza el bloque comparador único y la técnica fotográfica, se aplican los detalles de procesamiento (según corresponda) descritos en III-641.1 y III-641.2. El bloque se limpiará彻底mente entre los dos pasos de procesamiento. Se tomarán fotografías después del procesamiento a la temperatura no estándar y luego después del procesamiento a la temperatura estándar. La indicación de grietas se comparará entre las dos fotografías. Se aplicarán los mismos criterios de calificación que en III-641.1.</p>
                    <p>(b) Se utilizarán técnicas fotográficas idénticas para hacer las fotografías de comparación.</p>
                </div>
            </div>
        </div>
    </div>
    `
});