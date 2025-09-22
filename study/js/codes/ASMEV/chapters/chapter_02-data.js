// Registrar el código ASME BPVC.V-2023 si no existe
if (!getCode('ASMEV')) {
    console.error('El código ASME BPVC.V-2023 no está registrado. Registrándolo ahora...');
    registerCode('ASMEV', {
        title: "ASME Boiler and Pressure Vessel Code Section V - Nondestructive Examination",
        titleEs: "Código de Calderas y Recipientes a Presión ASME Sección V - Examen No Destructor"
    });
}

// Registrar el capítulo 2
registerChapter('ASMEV', {
    id: 2,
    title: "Radiographic Examination",
    titleEs: "Examen Radiográfico",
    content: `<h3>ARTICLE 2 RADIOGRAPHIC EXAMINATION</h3>
    <div class="subsection">
        <h4>T-210 SCOPE</h4>
        <p>The radiographic method described in this Article for examination of materials including castings and welds shall be used together with Article 1, General Requirements. Definitions of terms used in this Article are in Article 1, Mandatory Appendix I, I-121.1, RT — Radiography.</p>
        <p>Certain product-specific, technique-specific, and application-specific requirements are also given in other Mandatory Appendices of this Article, as listed in the table of contents. These additional requirements shall also be complied with when an Appendix is applicable to the radiographic or radioscopic examination being conducted.</p>
    </div>
    <div class="subsection">
        <h4>T-220 GENERAL REQUIREMENTS</h4>
        <div class="subsection">
            <h4>T-221 PROCEDURE REQUIREMENTS</h4>
            <div class="subsection">
                <h4>T-221.1 Written Procedure</h4>
                <p>Radiographic examination shall be performed in accordance with a written procedure. Each procedure shall include at least the following information, as applicable:</p>
                <p>(a) material type and thickness range</p>
                <p>(b) isotope or maximum X-ray voltage used</p>
                <p>(c) source-to-object distance (D in T-274.1)</p>
                <p>(d) distance from source side of object to film (d in T-274.1)</p>
                <p>(e) source size (F in T-274.1)</p>
                <p>(f) film brand and designation</p>
                <p>(g) screens used</p>
            </div>
            <div class="subsection">
                <h4>T-221.2 Procedure Demonstration</h4>
                <p>Demonstration of the density and image quality indicator (IQI) image requirements of the written procedure on production or technique radiographs shall be considered satisfactory evidence of compliance with that procedure.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-222 SURFACE PREPARATION</h4>
            <div class="subsection">
                <h4>T-222.1 Materials Including Castings</h4>
                <p>Surfaces shall satisfy the requirements of the applicable materials specification or referencing Code Section, with additional conditioning, if necessary, by any suitable process to such a degree that the images of surface irregularities cannot mask or be confused with the image of any discontinuity on the resulting radiograph.</p>
            </div>
            <div class="subsection">
                <h4>T-222.2 Welds</h4>
                <p>The weld ripples or weld surface irregularities on both the inside (where accessible) and outside shall be removed by any suitable process to such a degree that the images of surface irregularities cannot mask or be confused with the image of any discontinuity on the resulting radiograph.</p>
                <p>The finished surface of all butt-welded joints may be flush with the base material or may have reasonably uniform crowns, with reinforcement not to exceed that specified in the referencing Code Section.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-223 BACKSCATTER RADIATION</h4>
            <p>A lead symbol "B," with minimum dimensions of 7/16 in. (11 mm) in height and 1/16 in. (1.5 mm) in thickness, shall be in direct contact with the back of each film holder or cassette during each exposure to determine if backscatter radiation is exposing the film. The lead symbol "B" shall be placed in a location so that it would appear within an area on the radiograph that meets the requirements of T-282, VIII-282, or IX-282, as applicable.</p>
        </div>
        <div class="subsection">
            <h4>T-224 SYSTEM OF IDENTIFICATION</h4>
            <p>A system shall be used to produce on each radiograph an identification that is traceable to the item being radiographed and that is permanent for the required retention period of the radiograph. This information shall include the contract, component, weld number, or part number, as appropriate. In addition, the Manufacturer's symbol or name and the date of the radiograph shall be included with the identification information on each radiograph. An NDE subcontractor's name or symbol may also be used together with that of the Manufacturer. This identification system does not necessarily require that the information appear as radiographic images. In any case, this information shall not obscure the area of interest.</p>
        </div>
        <div class="subsection">
            <h4>T-225 MONITORING DENSITY LIMITATIONS OF RADIOGRAPHS</h4>
            <p>Either a densitometer or step wedge comparison film shall be used for judging film density.</p>
        </div>
        <div class="subsection">
            <h4>T-226 EXTENT OF EXAMINATION</h4>
            <p>The extent of radiographic examination shall be as specified by the referencing Code Section.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-230 EQUIPMENT AND MATERIALS</h4>
        <div class="subsection">
            <h4>T-231 FILM</h4>
            <div class="subsection">
                <h4>T-231.1 Selection</h4>
                <p>Radiographs shall be made using industrial radiographic film.</p>
            </div>
            <div class="subsection">
                <h4>T-231.2 Processing</h4>
                <p>Standard Guide for Controlling the Quality of Industrial Radiographic Film Processing, SE-999, or Sections 23 through 26 of Standard Guide for Radiographic Examination Using Industrial Radiographic Film, SE-94/SE-94M, may be used as a guide for processing film, except that Section 8.1 of SE-999 is not required.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-232 INTENSIFYING SCREENS</h4>
            <p>Intensifying screens may be used when performing radiographic examination in accordance with this Article.</p>
        </div>
        <div class="subsection">
            <h4>T-233 IMAGE QUALITY INDICATOR (IQI) DESIGN</h4>
            <div class="subsection">
                <h4>T-233.1 Standard IQI Design</h4>
                <p>IQIs shall be either the hole type or the wire type. Hole-type IQIs shall be manufactured and identified in accordance with the requirements or alternates allowed in SE-1025. Wire-type IQIs shall be manufactured and identified in accordance with the requirements or alternates allowed in SE-747, except that the largest wire number or the identity number may be omitted. ASME standard IQIs shall consist of those in Table T-233.1 for hole type and those in Table T-233.2 for wire type.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-233_1.png" class="figure-image">
                    <p class="figure-caption">Table T-233.1 Hole-Type IQI Designation, Thickness, and Hole Diameters</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-233_2.png" class="figure-image">
                    <p class="figure-caption">Table T-233.2 Wire IQI Designation, Wire Diameter, and Wire Identity</p>
                </div>
            </div>
            <div class="subsection">
                <h4>T-233.2 Alternative IQI Design</h4>
                <p>IQIs designed and manufactured in accordance with other national or international standards may be used provided the requirements of either (a) or (b) below, and the material requirements of T-276.1 are met.</p>
                <p>(a) Hole-Type IQIs. The calculated Equivalent IQI Sensitivity (EPS), per SE-1025, Appendix X1, is equal to or better than the required standard hole-type IQI.</p>
                <p>(b) Wire-Type IQIs. The alternative wire IQI essential wire diameter is equal to or less than the required standard IQI essential wire.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-234 FACILITIES FOR VIEWING OF RADIOGRAPHS</h4>
            <p>Viewing facilities shall provide subdued background lighting of an intensity that will not cause reflections, shadows, or glare on the radiograph that interfere with the interpretation process. Equipment used to view radiographs for interpretation shall provide a variable light source sufficient for the essential IQI hole or designated wire to be visible for the specified density range. The viewing conditions shall be such that light from around the outer edge of the radiograph or coming through low density portions of the radiograph does not interfere with interpretation.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-260 CALIBRATION</h4>
        <div class="subsection">
            <h4>T-261 SOURCE SIZE</h4>
            <div class="subsection">
                <h4>T-261.1 Verification of Source Size</h4>
                <p>The equipment manufacturer's or supplier's publications, such as technical manuals, decay curves, or written statements documenting the actual or maximum source size or focal spot, shall be acceptable as source size verification.</p>
            </div>
            <div class="subsection">
                <h4>T-261.2 Determination of Source Size</h4>
                <p>When manufacturer's or supplier's publications are not available, source size may be determined as follows:</p>
                <p>(a) X-Ray Machines. For X-ray machines operating at 1,000 kV and less, the focal spot size may be determined in accordance with SE-1165, Standard Test Method for Measurement of Focal Spots of Industrial X-Ray Tubes by Pinhole Imaging.</p>
                <p>(b) Iridium-192 Sources. For Iridium-192, the source size may be determined in accordance with SE-1114, Standard Test Method for Determining the Focal Size of Iridium-192 Industrial Radiographic Sources.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-262 DENSITOMETER AND STEP WEDGE COMPARISON FILM</h4>
            <div class="subsection">
                <h4>T-262.1 Densitometers</h4>
                <p>Densitometers shall be calibrated at least every 3 months during use as follows:</p>
                <p>(a) A national standard step tablet or a step wedge calibration film, traceable to a national standard step tablet and having at least five steps with neutral densities from at least 1.0 through 4.0, shall be used. The step wedge calibration film shall have been verified within the last year by comparison with a national standard step tablet unless, prior to first use, it was maintained in the original light-tight and waterproof sealed package as supplied by the manufacturer. Step wedge calibration films may be used without verification for one year upon opening, provided it is within the manufacturer's stated shelf life.</p>
                <p>(b) The densitometer manufacturer's step-by-step instructions for the operation of the densitometer shall be followed.</p>
                <p>(c) The density steps closest to 1.0, 2.0, 3.0, and 4.0 on the national standard step tablet or step wedge calibration film shall be read.</p>
                <p>(d) The densitometer is acceptable if the density readings do not vary by more than ±0.05 density units from the actual density stated on the national standard step tablet or step wedge calibration film.</p>
            </div>
            <div class="subsection">
                <h4>T-262.2 Step Wedge Comparison Films</h4>
                <p>Step wedge comparison films shall be verified prior to first use, unless performed by the manufacturer, as follows:</p>
                <p>(a) The density of the steps on a step wedge comparison film shall be verified by a calibrated densitometer.</p>
                <p>(b) The step wedge comparison film is acceptable if the density readings do not vary by more than ±0.1 density units from the density stated on the step wedge comparison film.</p>
            </div>
            <div class="subsection">
                <h4>T-262.3 Periodic Verification</h4>
                <p>(a) Densitometers. Periodic calibration verification checks shall be performed as described in T-262.1 at the beginning of each shift, after 8 hr of continuous use, or after change of apertures, whichever comes first.</p>
                <p>(b) Step Wedge Comparison Films. Verification checks shall be performed annually per T-262.2.</p>
            </div>
            <div class="subsection">
                <h4>T-262.4 Documentation</h4>
                <p>(a) Densitometers. Densitometer calibrations required by T-262.1 shall be documented, but the actual readings for each step do not have to be recorded. Periodic densitometer verification checks required by T-262.3(a) do not have to be documented.</p>
                <p>(b) Step Wedge Calibration Films. Step wedge calibration film verifications required by T-262.1(a) shall be documented, but the actual readings for each step do not have to be recorded.</p>
                <p>(c) Step Wedge Comparison Films. Step wedge comparison film verifications required by T-262.2 and T-262.3(b) shall be documented, but the actual readings for each step do not have to be recorded.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-270 EXAMINATION</h4>
        <div class="subsection">
            <h4>T-271 RADIOGRAPHIC TECHNIQUE</h4>
            <p>A single-wall exposure technique shall be used for radiography whenever practical. When it is not practical to use a single-wall technique, a double-wall technique shall be used. An adequate number of exposures shall be made to demonstrate that the required coverage has been obtained.</p>
            <div class="subsection">
                <h4>T-271.1 Single-Wall Technique</h4>
                <p>In the single-wall technique, the radiation passes through only one wall of the weld (material), which is viewed for acceptance on the radiograph.</p>
            </div>
            <div class="subsection">
                <h4>T-271.2 Double-Wall Technique</h4>
                <p>When it is not practical to use a single-wall technique, one of the following double-wall techniques shall be used.</p>
                <p>(a) Single-Wall Viewing. For materials and for welds in components, a technique may be used in which the radiation passes through two walls and only the weld (material) on the film-side wall is viewed for acceptance on the radiograph. When complete coverage is required for circumferential welds (materials), a minimum of three exposures taken 120 deg to each other shall be made.</p>
                <p>(b) Double-Wall Viewing. For materials and for welds in components 31/2 in. (89 mm) or less in nominal outside diameter, a technique may be used in which the radiation passes through two walls and the weld (material) in both walls is viewed for acceptance on the same radiograph. For double-wall viewing, only a source-side IQI shall be used.</p>
                <p>(1) For welds, the radiation beam may be offset from the plane of the weld at an angle sufficient to separate the images of the source-side and film-side portions of the weld so that there is no overlap of the areas to be interpreted. When complete coverage is required, a minimum of two exposures taken 90 deg to each other shall be made for each joint.</p>
                <p>(2) As an alternative, the weld may be radiographed with the radiation beam positioned so that the images of both walls are superimposed. When complete coverage is required, a minimum of three exposures taken at either 60 deg or 120 deg to each other shall be made for each joint.</p>
                <p>(3) Additional exposures shall be made if the required radiographic coverage cannot be obtained using the minimum number of exposures indicated in (1) or (2) above.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-272 RADIATION ENERGY</h4>
            <p>The radiation energy employed for any radiographic technique shall achieve the density and IQI image requirements of this Article.</p>
        </div>
        <div class="subsection">
            <h4>T-273 DIRECTION OF RADIATION</h4>
            <p>The direction of the central beam of radiation should be centered on the area of interest whenever practical.</p>
        </div>
        <div class="subsection">
            <h4>T-274 GEOMETRIC UNSHARPNESS</h4>
            <div class="subsection">
                <h4>T-274.1 Geometric Unsharpness Determination</h4>
                <p>Geometric unsharpness of the radiograph shall be determined in accordance with:</p>
                <p>Ug = Fd / D</p>
                <p>where</p>
                <p>D = distance from source of radiation to weld or object being radiographed</p>
                <p>d = distance from source side of weld or object being radiographed to the film</p>
                <p>F = source size: the maximum projected dimension of the radiating source (or effective focal spot) in the plane perpendicular to the distance D from the weld or object being radiographed</p>
                <p>Ug = geometric unsharpness</p>
                <p>D and d shall be determined at the approximate center of the area of interest.</p>
                <p>NOTE: Alternatively, a nomograph as shown in Standard Guide for Radiographic Examination Using Industrial Radiographic Film, SE-94/SE-94M, may be used.</p>
            </div>
            <div class="subsection">
                <h4>T-274.2 Geometric Unsharpness Limitations</h4>
                <p>Recommended maximum values for geometric unsharpness are as follows:</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-274_2.png" class="figure-image">
                    <p class="figure-caption">Table T-274.2 Geometric Unsharpness Limitations</p>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h4>T-275 LOCATION MARKERS</h4>
            <p>Location markers (see Figure T-275), which shall appear as radiographic images on the radiograph, shall be placed on the part, not on the exposure holder/cassette. Their locations shall be permanently marked on the surface of the part being radiographed when permitted, or on a map, in a manner permitting the area on a radiograph to be accurately traceable to its location on the part, for the required retention period of the radiograph. In addition, their locations do not limit the area of interest or the area to be interpreted. Evidence shall also be provided on the radiograph that the required coverage of the region being examined has been obtained. Location markers shall be placed as follows.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-275.png" class="figure-image">
                <p class="figure-caption">Figure T-275 Location Marker Sketches</p>
            </div>
            
            <div class="subsection">
                <h4>T-275.1 Single-Wall Viewing</h4>
                <p>(a) Source-Side Markers. Location markers shall be placed on the source side when radiographing the following:</p>
                <p>(1) flat components or longitudinal joints in cylindrical or conical components;</p>
                <p>(2) curved or spherical components whose concave side is toward the source and when the "source-to-material" distance is less than the inside radius of the component;</p>
                <p>(3) curved or spherical components whose convex side is toward the source.</p>
                <p>(b) Film-Side Markers</p>
                <p>(1) Location markers shall be placed on the film side when radiographing either curved or spherical components whose concave side is toward the source and when the "source-to-material" distance is greater than the inside radius.</p>
                <p>(2) As an alternative to source-side placement in T-275.1(a)(1), location markers may be placed on the film side when the radiograph shows coverage beyond the location markers to the extent demonstrated by Figure T-275, sketch (e), and when this alternate is documented in accordance with T-291.</p>
                <p>(c) Either Side Markers. Location markers may be placed on either the source side or film side when radiographing either curved or spherical components whose concave side is toward the source and the "source-to-material" distance equals the inside radius of the component.</p>
            </div>
            <div class="subsection">
                <h4>T-275.2 Double-Wall Viewing</h4>
                <p>For double-wall viewing, at least one location marker shall be placed adjacent to the weld (or on the material in the area of interest) for each radiograph.</p>
            </div>
            <div class="subsection">
                <h4>T-275.3 Mapping the Placement of Location Markers</h4>
                <p>When inaccessibility or other limitations prevent the placement of markers as stipulated in T-275.1 and T-275.2, a dimensioned map of the actual marker placement shall accompany the radiographs to show that full coverage has been obtained.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-276 IQI SELECTION</h4>
            <div class="subsection">
                <h4>T-276.1 Material</h4>
                <p>IQIs shall be selected from either the same alloy material group or grade as identified in SE-1025 for hole type or SE-747 for wire type, or from an alloy material group or grade with less radiation absorption than the material being radiographed.</p>
            </div>
            <div class="subsection">
                <h4>T-276.2 Size</h4>
                <p>The designated hole IQI or essential wire shall be as specified in Table T-276. A thinner or thicker hole-type IQI may be substituted for any section thickness listed in Table T-276, provided an equivalent IQI sensitivity is maintained. See T-283.2. For wire-type IQIs, a smaller-diameter wire may be substituted for the essential wire required for any section thickness listed in Table T-276.</p>
                <p>(a) Welds With Reinforcements. The thickness on which the IQI is based is the nominal single-wall material thickness plus the weld reinforcement thickness estimated to be present on both sides of the weld (I.D. and O.D.). The values used for the estimated weld reinforcement thicknesses shall be representative of the weld conditions and shall not exceed the maximums permitted by the referencing Code Section. Physical measurement of the actual weld reinforcements is not required. Backing rings or strips shall not be considered as part of the thickness in IQI selection.</p>
                <p>(b) Welds Without Reinforcements. The thickness on which the IQI is based is the nominal single-wall material thickness. Backing rings or strips shall not be considered as part of the thickness in IQI selection.</p>
                <p>(c) Actual Values. With regard to (a) and (b) above, when the actual material/weld thickness is measured, IQI selection may be based on these known values.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-276.png" class="figure-image">
                    <p class="figure-caption">Table T-276 IQI Selection</p>
                </div>
            </div>
            <div class="subsection">
                <h4>T-276.3 Welds Joining Dissimilar Materials or Welds With Dissimilar Filler Metal</h4>
                <p>When the weld metal is of an alloy group or grade that has a radiation attenuation that differs from the base material, the IQI material selection shall be based on the weld metal and be in accordance with T-276.1. When the density limits of T-282.2 cannot be met with one IQI, and the exceptional density area(s) is at the interface of the weld metal and the base metal, the material selection for the additional IQIs shall be based on the base material and be in accordance with T-276.1.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-277 USE OF IQIS TO MONITOR RADIOGRAPHIC EXAMINATION</h4>
            <div class="subsection">
                <h4>T-277.1 Placement of IQIs</h4>
                <p>(a) Source-Side IQI(s). The IQI(s) shall be placed on the source side of the part being examined, except for the condition described in (b).</p>
                <p>When, due to part or weld configuration or size, it is not practical to place the IQI(s) on the part or weld, the IQI(s) may be placed on a separate block. Separate blocks shall be made of the same or radiographically similar materials (as defined in SE-1025 for hole type or SE-747 for wire type) and may be used to facilitate IQI positioning. There is no restriction on the separate block thickness, provided the IQI/area-of-interest density tolerance requirements of T-282.2 are met.</p>
                <p>(1) The IQI on the source side of the separate block shall be placed no closer to the film than the source side of the part being radiographed.</p>
                <p>(2) The separate block shall be placed as close as possible to the part being radiographed.</p>
                <p>(3) When hole-type IQIs are used, the block dimensions shall exceed the IQI dimensions such that the outline of at least three sides of the IQI image shall be visible on the radiograph.</p>
                <p>(b) Film-Side IQI(s). Where inaccessibility prevents hand placing the IQI(s) on the source side, the IQI(s) shall be placed on the film side in contact with the part being examined. A lead letter "F" shall be placed adjacent to or on the IQI(s), but shall not mask the essential hole where hole IQIs are used.</p>
                <p>(c) IQI Placement for Welds — Hole IQIs. The IQI(s) may be placed adjacent to or on the weld. The identification number(s) and, when used, the lead letter "F," shall not be in the area of interest, except when geometric configuration makes it impractical.</p>
                <p>(d) IQI Placement for Welds — Wire IQIs. The IQI(s) shall be placed on the weld so that the lengths of the wires are transverse to the longitudinal axis of the weld. It is not required for the essential wire to span the full width of the weld. However, the essential wire shall span at least that portion of the weld representing the nominal single wall material thickness and reinforcement for which the IQI essential wire was selected. The density requirements of T-292 and the sensitivity requirements of T-283 shall also be met. The IQI identification and, when used, the lead letter "F," shall not be in the area of interest, except when geometric configuration makes it impractical.</p>
                <p>(e) IQI Placement for Materials Other Than Welds. The IQI(s) with the IQI identification and, when used, the lead letter "F," may be placed in the area of interest.</p>
            </div>
            <div class="subsection">
                <h4>T-277.2 Number of IQIs</h4>
                <p>When one or more film holders are used for an exposure, at least one IQI image shall appear on each radiograph except as outlined in (b) below.</p>
                <p>(a) Multiple IQIs. If the requirements of T-282 are met by using more than one IQI, one shall be representative of the lightest area of interest and the other the darkest area of interest; the intervening densities on the radiograph shall be considered as having acceptable density.</p>
                <p>(b) Special Cases</p>
                <p>(1) For cylindrical components where the source is placed on the axis of the component for a single exposure, at least three IQIs, spaced approximately 120 deg apart, are required under the following conditions:</p>
                <p>(-a) When the complete circumference is radiographed using one or more film holders, or;</p>
                <p>(-b) When a section or sections of the circumference, where the length between the ends of the outermost sections span 240 or more deg, is radiographed using one or more film holders. Additional film locations may be required to obtain necessary IQI spacing.</p>
                <p>(2) For cylindrical components where the source is placed on the axis of the component for a single exposure, at least three IQIs, with one placed at each end of the span of the circumference radiographed and one in the approximate center of the span, are required under the following conditions:</p>
                <p>(-a) When a section of the circumference, the length of which is greater than 120 deg and less than 240 deg, is radiographed using just one film holder, or;</p>
                <p>(-b) When a section or sections of the circumference, where the length between the ends of the outermost sections span less than 240 deg, is radiographed using more than one film holder.</p>
                <p>(3) In (1) and (2) above, where sections of longitudinal welds adjoining the circumferential weld are radiographed simultaneously with the circumferential weld, an additional IQI shall be placed on each longitudinal weld at the end of the section most remote from the junction with the circumferential weld being radiographed.</p>
                <p>(4) For spherical components where the source is placed at the center of the component for a single exposure, at least three IQIs, spaced approximately 120 deg apart, are required under the following conditions:</p>
                <p>(-a) When a complete circumference is radiographed using one or more film holders, or;</p>
                <p>(-b) When a section or sections of a circumference, where the length between the ends of the outermost sections span 240 or more deg, is radiographed using one or more film holders. Additional film locations may be required to obtain necessary IQI spacing.</p>
                <p>(5) For spherical components where the source is placed at the center of the component for a single exposure, at least three IQIs, with one placed at each end of the span of the circumference radiographed and one in the approximate center of the span, are required under the following conditions:</p>
                <p>(-a) When a section of a circumference, the length of which is greater than 120 deg and less than 240 deg, is radiographed using just one film holder, or;</p>
                <p>(-b) When a section or sections of a circumference, where the length between the ends of the outermost sections span less than 240 deg, is radiographed using more than one film holder.</p>
                <p>(6) In (4) and (5) above, where other welds are radiographed simultaneously with the circumferential weld, one additional IQI shall be placed on each other weld.</p>
                <p>(7) For segments of a flat or curved (i.e., ellipsoidal, torispherical, toriconical, elliptical, etc.) component where the source is placed perpendicular to the center of a length of weld for a single exposure when using more than three film holders, at least three IQIs, one placed at each end of the radiographed span and one in the approximate center of the span, are required.</p>
                <p>(8) When an array of components in a circle is radiographed, at least one IQI shall show on each component image.</p>
                <p>(9) In order to maintain the continuity of records involving subsequent exposures, all radiographs exhibiting IQIs that qualify the techniques permitted in accordance with (1) through (7) above shall be retained.</p>
            </div>
            <div class="subsection">
                <h4>T-277.3 Shims Under Hole-Type IQIs</h4>
                <p>For welds, a shim of material radiographically similar to the weld metal shall be placed between the part and the IQI, if needed, so that the radiographic density throughout the area of interest is no more than minus 15% from (lighter than) the radiographic density through the designated IQI adjacent to the essential hole.</p>
                <p>The shim dimensions shall exceed the IQI dimensions such that the outline of at least three sides of the IQI image shall be visible in the radiograph.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-280 EVALUATION</h4>
        <div class="subsection">
            <h4>T-281 QUALITY OF RADIOGRAPHS</h4>
            <p>All radiographs shall be free from mechanical, chemical, or other blemishes to the extent that they do not mask and are not confused with the image of any discontinuity in the area of interest of the object being radiographed. Such blemishes include, but are not limited to:</p>
            <p>(a) fogging;</p>
            <p>(b) processing defects such as streaks, watermarks, or chemical stains;</p>
            <p>(c) scratches, finger marks, crimps, dirtiness, static marks, smudges, or tears;</p>
            <p>(d) false indications due to defective screens.</p>
        </div>
        <div class="subsection">
            <h4>T-282 RADIOGRAPHIC DENSITY</h4>
            <div class="subsection">
                <h4>T-282.1 Density Limitations</h4>
                <p>The transmitted film density through the radiographic image of the body of the designated hole-type IQI adjacent to the essential hole or adjacent to the essential wire of a wire-type IQI and the area of interest shall be 1.8 minimum for single film viewing for radiographs made with an X-ray source and 2.0 minimum for radiographs made with a gamma ray source. For composite viewing of multiple film exposures, each film of the composite set shall have a minimum density of 1.3. The maximum density shall be 4.0 for either single or composite viewing. A tolerance of 0.05 in density is allowed for variations between densitometer readings.</p>
            </div>
            <div class="subsection">
                <h4>T-282.2 Density Variation</h4>
                <p>(a) The density of the radiograph anywhere through the area of interest shall not</p>
                <p>(1) vary by more than minus 15% or plus 30% from the density through the body of the designated hole-type IQI adjacent to the essential hole or adjacent to the essential wire of a wire-type IQI, and</p>
                <p>(2) exceed the minimum/maximum allowable density ranges specified in T-282.1</p>
                <p>When calculating the allowable variation in density, the calculation may be rounded to the nearest 0.1 within the range specified in T-282.1.</p>
                <p>(b) When the requirements of (a) above are not met, then an additional IQI shall be used for each exceptional area or areas and the radiograph retaken.</p>
                <p>(c) When shims are used with hole-type IQIs, the plus 30% density restriction of (a) above may be exceeded, and the minimum density requirements of T-282.1 do not apply for the IQI, provided the required IQI sensitivity of T-283.1 is met.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-283 IQI SENSITIVITY</h4>
            <div class="subsection">
                <h4>T-283.1 Required Sensitivity</h4>
                <p>Radiography shall be performed with a technique of sufficient sensitivity to display the designated hole-type IQI image (including applicable material group identification notches) and the essential hole, or the essential wire of a wire-type IQI. The radiographs shall also display the IQI identifying numbers and letters. If the designated hole-type IQI image (including applicable material group identification notches) and essential hole, or essential wire of a wire type IQI, do not show on any film in a multiple film technique, but do show in composite film viewing, interpretation shall be permitted only by composite film viewing.</p>
                <p>For wire-type IQIs, the essential wire shall be visible within the area of interest representing the thickness used for determining the essential wire, inclusive of the allowable density variations described in T-282.2.</p>
            </div>
            <div class="subsection">
                <h4>T-283.2 Equivalent Hole-Type IQI Sensitivity</h4>
                <p>A thinner or thicker hole-type IQI than the designated IQI may be substituted, provided an equivalent or better IQI sensitivity, as listed in Table T-283, is achieved and all other requirements for radiography are met. Equivalent IQI sensitivity is shown in any row of Table T-283 which contains the designated IQI and hole. Better IQI sensitivity is shown in any row of Table T-283 which is above the equivalent sensitivity row. If the designated IQI and hole are not represented in the table, the next thinner IQI row from Table T-283 may be used to establish equivalent IQI sensitivity.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-283.png" class="figure-image">
                    <p class="figure-caption">Table T-283 Equivalent Hole-Type IQI Sensitivity</p>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h4>T-284 EXCESSIVE BACKSCATTER</h4>
            <p>If a light image of the "B," as described in T-223, appears on a darker background of the radiograph, protection from backscatter is insufficient and the radiograph shall be considered unacceptable. A dark image of the "B" on a lighter background is not cause for rejection.</p>
        </div>
        <div class="subsection">
            <h4>T-285 EVALUATION BY MANUFACTURER</h4>
            <p>The Manufacturer shall be responsible for the review, interpretation, evaluation, and acceptance of the completed radiographs to assure compliance with the requirements of Article 2 and the referencing Code Section. As an aid to the review and evaluation, the radiographic technique documentation required by T-291 shall be completed prior to the evaluation. The radiograph review form required by T-292 shall be completed during the evaluation. The radiographic technique details and the radiograph review form documentation shall accompany the radiographs. Acceptance shall be completed prior to presentation of the radiographs and accompanying documentation to the Inspector.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-290 DOCUMENTATION</h4>
        <div class="subsection">
            <h4>T-291 RADIOGRAPHIC TECHNIQUE DOCUMENTATION DETAILS</h4>
            <p>The organization shall prepare and document the radiographic technique details. As a minimum, the following information shall be provided.</p>
            <p>(a) the requirements of Article 1, T-190(a)</p>
            <p>(b) identification as required by T-224</p>
            <p>(c) the dimensional map (if used) of marker placement in accordance with T-275.3</p>
            <p>(d) number of exposures</p>
            <p>(e) X-ray voltage or isotope type used</p>
            <p>(f) source size (F in T-274.1)</p>
            <p>(g) base material type and thickness, weld thickness, weld reinforcement thickness, as applicable</p>
            <p>(h) source-to-object distance (D in T-274.1)</p>
            <p>(i) distance from source side of object to film (d in T-274.1)</p>
            <p>(j) film manufacturer and their assigned type/designation</p>
            <p>(k) number of film in each film holder/cassette</p>
            <p>(l) single- or double-wall exposure</p>
            <p>(m) single- or double-wall viewing</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-292 RADIOGRAPH REVIEW FORM</h4>
            <p>The Manufacturer shall be responsible for the preparation of a radiograph review form. As a minimum, the following information shall be provided.</p>
            <p>(a) a listing of each radiograph location</p>
            <p>(b) the information required in T-291, by inclusion of the information on the review form or by reference to an attached radiographic technique details sheet</p>
            <p>(c) evaluation and disposition of the material(s) or weld(s) examined</p>
            <p>(d) identification (name) of the Manufacturer's representative who performed the final acceptance of the radiographs</p>
            <p>(e) date of Manufacturer's evaluation</p>
        </div>
    </div>
    `,
    contentEs: `<h3>ARTÍCULO 2 EXAMEN RADIOGRÁFICO</h3>
    <div class="subsection">
        <h4>T-210 ALCANCE</h4>
        <p>El método radiográfico descrito en este Artículo para el examen de materiales incluyendo fundiciones y soldaduras deberá usarse junto con el Artículo 1, Requisitos Generales. Las definiciones de los términos utilizados en este Artículo se encuentran en el Artículo 1, Apéndice Obligatorio I, I-121.1, RT — Radiografía.</p>
        <p>Ciertos requisitos específicos de producto, específicos de técnica y específicos de aplicación también se dan en otros Apéndices Obligatorios de este Artículo, como se indica en la tabla de contenido. Estos requisitos adicionales también deberán cumplirse cuando un Apéndice sea aplicable al examen radiográfico o radioscópico que se esté realizando.</p>
    </div>
    <div class="subsection">
        <h4>T-220 REQUISITOS GENERALES</h4>
        <div class="subsection">
            <h4>T-221 REQUISITOS DE PROCEDIMIENTO</h4>
            <div class="subsection">
                <h4>T-221.1 Procedimiento Escrito</h4>
                <p>El examen radiográfico deberá realizarse de acuerdo con un procedimiento escrito. Cada procedimiento deberá incluir al menos la siguiente información, según corresponda:</p>
                <p>(a) tipo de material y rango de espesor</p>
                <p>(b) isótopo o voltaje máxima de rayos X utilizada</p>
                <p>(c) distancia fuente-objeto (D en T-274.1)</p>
                <p>(d) distancia desde el lado fuente del objeto a la película (d en T-274.1)</p>
                <p>(e) tamaño de la fuente (F en T-274.1)</p>
                <p>(f) marca y designación de la película</p>
                <p>(g) pantallas utilizadas</p>
            </div>
            <div class="subsection">
                <h4>T-221.2 Demostración del Procedimiento</h4>
                <p>La demostración de los requisitos de densidad e imagen del indicador de calidad de imagen (IQI) del procedimiento escrito en radiografías de producción o técnica se considerará evidencia satisfactoria de cumplimiento con ese procedimiento.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-222 PREPARACIÓN DE LA SUPERFICIE</h4>
            <div class="subsection">
                <h4>T-222.1 Materiales Incluyendo Fundiciones</h4>
                <p>Las superficies deberán satisfacer los requisitos de la especificación de materiales aplicable o la Sección del Código de referencia, con acondicionamiento adicional, si es necesario, mediante cualquier proceso adecuado hasta el punto de que las imágenes de irregularidades superficiales no puedan enmascarar ni confundirse con la imagen de cualquier discontinuidad en la radiografía resultante.</p>
            </div>
            <div class="subsection">
                <h4>T-222.2 Soldaduras</h4>
                <p>Las ondulaciones de la soldadura o irregularidades superficiales de la soldadura tanto en el interior (donde sea accesible) como en el exterior deberán eliminarse mediante cualquier proceso adecuado hasta el punto de que las imágenes de irregularidades superficiales no puedan enmascarar ni confundirse con la imagen de cualquier discontinuidad en la radiografía resultante.</p>
                <p>La superficie terminada de todas las juntas soldadas a tope puede estar al ras con el material base o puede tener coronamientos razonablemente uniformes, con refuerzo que no exceda el especificado en la Sección del Código de referencia.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-223 RADIACIÓN DE RETRODISPERSIÓN</h4>
            <p>Un símbolo de plomo "B", con dimensiones mínimas de 7/16 pulg. (11 mm) de altura y 1/16 pulg. (1.5 mm) de espesor, deberá estar en contacto directo con la parte posterior de cada portapelículas o casete durante cada exposición para determinar si la radiación de retrodispersión está exponiendo la película. El símbolo de plomo "B" deberá colocarse en una ubicación de manera que aparezca dentro de un área en la radiografía que cumpla con los requisitos de T-282, VIII-282 o IX-282, según corresponda.</p>
        </div>
        <div class="subsection">
            <h4>T-224 SISTEMA DE IDENTIFICACIÓN</h4>
            <p>Se deberá utilizar un sistema para producir en cada radiografía una identificación que sea rastreable al objeto que se está radiografiando y que sea permanente durante el período de retención requerido de la radiografía. Esta información deberá incluir el contrato, componente, número de soldadura o número de pieza, según corresponda. Además, el símbolo o nombre del Fabricante y la fecha de la radiografía deberán incluirse con la información de identificación en cada radiografía. También puede usarse el nombre o símbolo de un subcontratista de END junto con el del Fabricante. Este sistema de identificación no requiere necesariamente que la información aparezca como imágenes radiográficas. En cualquier caso, esta información no deberá oscurecer el área de interés.</p>
        </div>
        <div class="subsection">
            <h4>T-225 MONITOREO DE LOS LÍMITES DE DENSIDAD DE LAS RADIOGRAFÍAS</h4>
                <p>Se deberá usar un densitómetro o una película de comparación de cuña escalonada para juzgar la densidad de la película.</p>
            </div>
        <div class="subsection">
            <h4>T-226 ALCANCE DEL EXAMEN</h4>
            <p>El alcance del examen radiográfico será el especificado por la Sección del Código de referencia.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-230 EQUIPO Y MATERIALES</h4>
        <div class="subsection">
            <h4>T-231 PELÍCULA</h4>
            <div class="subsection">
                <h4>T-231.1 Selección</h4>
                <p>Las radiografías deberán realizarse utilizando película radiográfica industrial.</p>
            </div>
            <div class="subsection">
                <h4>T-231.2 Procesamiento</h4>
                <p>La Guía Estándar para Controlar la Calidad del Procesamiento de Película Radiográfica Industrial, SE-999, o las Secciones 23 a 26 de la Guía Estándar para Examen Radiográfico Utilizando Película Radiográfica Industrial, SE-94/SE-94M, pueden usarse como guía para el procesamiento de película, excepto que la Sección 8.1 de SE-999 no es requerida.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-232 PANTALLAS INTENSIFICADORAS</h4>
            <p>Pueden usarse pantallas intensificadoras cuando se realice examen radiográfico de acuerdo con este Artículo.</p>
        </div>
        <div class="subsection">
            <h4>T-233 DISEÑO DEL INDICADOR DE CALIDAD DE IMAGEN (IQI)</h4>
            <div class="subsection">
                <h4>T-233.1 Diseño Estándar de IQI</h4>
                <p>Los IQI deberán ser del tipo de agujero o del tipo de alambre. Los IQI de tipo de agujero deberán fabricarse e identificarse de acuerdo con los requisitos o alternativas permitidas en SE-1025. Los IQI de tipo de alambre deberán fabricarse e identificarse de acuerdo con los requisitos o alternativas permitidas en SE-747, excepto que el número de alambre más grande o el número de identificación puede omitirse. Los IQI estándar ASME consistirán en los de la Tabla T-233.1 para tipo de agujero y los de la Tabla T-233.2 para tipo de alambre.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-233_1.png" class="figure-image">
                    <p class="figure-caption">Tabla T-233.1 Designación, Espesor y Diámetros de Agujero de IQI de Tipo de Agujero</p>
                </div>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-233_2.png" class="figure-image">
                    <p class="figure-caption">Tabla T-233.2 Designación de IQI de Alambre, Diámetro de Alambre e Identidad de Alambre</p>
                </div>
            </div>
            <div class="subsection">
                <h4>T-233.2 Diseño Alternativo de IQI</h4>
                <p>Pueden usarse IQI diseñados y fabricados de acuerdo con otras normas nacionales o internacionales, siempre que se cumplan los requisitos de (a) o (b) siguientes, y los requisitos de material de T-276.1.</p>
                <p>(a) IQI de Tipo de Agujero. La Sensibilidad Equivalente de IQI (EPS) calculada, según SE-1025, Apéndice X1, es igual o mejor que la del IQI estándar de tipo de agujero requerido.</p>
                <p>(b) IQI de Tipo de Alambre. El diámetro esencial del alambre del IQI alternativo es igual o menor que el alambre esencial del IQI estándar requerido.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-234 INSTALACIONES PARA VISUALIZACIÓN DE RADIOGRAFÍAS</h4>
            <p>Las instalaciones de visualización deberán proporcionar iluminación de fondo tenue de una intensidad que no cause reflejos, sombras o deslumbramiento en la radiografía que interfieran con el proceso de interpretación. El equipo utilizado para ver radiografías para interpretación deberá proporcionar una fuente de luz variable suficiente para que el agujero esencial del IQI o el alambre designado sea visible para el rango de densidad especificado. Las condiciones de visualización deberán ser tales que la luz de alrededor del borde exterior de la radiografía o que pasa a través de porciones de baja densidad de la radiografía no interfiera con la interpretación.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-260 CALIBRACIÓN</h4>
        <div class="subsection">
            <h4>T-261 TAMAÑO DE LA FUENTE</h4>
            <div class="subsection">
                <h4>T-261.1 Verificación del Tamaño de la Fuente</h4>
                <p>Las publicaciones del fabricante o proveedor del equipo, como manuales técnicos, curvas de decaimiento o declaraciones escritas que documenten el tamaño real o máximo de la fuente o punto focal, serán aceptables como verificación del tamaño de la fuente.</p>
            </div>
            <div class="subsection">
                <h4>T-261.2 Determinación del Tamaño de la Fuente</h4>
                <p>Cuando no estén disponibles las publicaciones del fabricante o proveedor, el tamaño de la fuente puede determinarse de la siguiente manera:</p>
                <p>(a) Máquinas de Rayos X. Para máquinas de rayos X que operan a 1,000 kV o menos, el tamaño del punto focal puede determinarse de acuerdo con SE-1165, Método de Prueba Estándar para Medición de Puntos Focales de Tubos de Rayos X Industriales mediante Imágenes de Pinhole.</p>
                <p>(b) Fuentes de Iridio-192. Para Iridio-192, el tamaño de la fuente puede determinarse de acuerdo con SE-1114, Método de Prueba Estándar para Determinar el Tamaño Focal de Fuentes Radiográficas Industriales de Iridio-192.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-262 DENSITÓMETRO Y PELÍCULA DE COMPARACIÓN DE CUÑA ESCALONADA</h4>
            <div class="subsection">
                <h4>T-262.1 Densitómetros</h4>
                <p>Los densitómetros deberán calibrarse al menos cada 3 meses durante su uso de la siguiente manera:</p>
                <p>(a) Se deberá usar una tableta de pasos estándar nacional o una película de calibración de cuña escalonada, rastreable a una tableta de pasos estándar nacional y que tenga al menos cinco pasos con densidades neutras de al menos 1.0 a 4.0. La película de calibración de cuña escalonada deberá haber sido verificada dentro del último año por comparación con una tableta de pasos estándar nacional, a menos que, antes del primer uso, se haya mantenido en el paquete original sellado a prueba de luz y agua según lo suministrado por el fabricante. Las películas de calibración de cuña escalonada pueden usarse sin verificación por un año después de abrir, siempre que estén dentro de la vida útil declarada por el fabricante.</p>
                <p>(b) Deberán seguirse las instrucciones paso a paso del fabricante del densitómetro para la operación del densitómetro.</p>
                <p>(c) Deberán leerse los pasos de densidad más cercanos a 1.0, 2.0, 3.0 y 4.0 en la tableta de pasos estándar nacional o película de calibración de cuña escalonada.</p>
                <p>(d) El densitómetro es aceptable si las lecturas de densidad no varían en más de ±0.05 unidades de densidad de la densidad real indicada en la tableta de pasos estándar nacional o película de calibración de cuña escalonada.</p>
            </div>
            <div class="subsection">
                <h4>T-262.2 Películas de Comparación de Cuña Escalonada</h4>
                <p>Las películas de comparación de cuña escalonada deberán verificarse antes del primer uso, a menos que sean realizadas por el fabricante, de la siguiente manera:</p>
                <p>(a) La densidad de los pasos en una película de comparación de cuña escalonada deberá verificarse mediante un densitómetro calibrado.</p>
                <p>(b) La película de comparación de cuña escalonada es aceptable si las lecturas de densidad no varían en más de ±0.1 unidades de densidad de la densidad indicada en la película de comparación de cuña escalonada.</p>
            </div>
            <div class="subsection">
                <h4>T-262.3 Verificación Periódica</h4>
                <p>(a) Densitómetros. Las verificaciones de calibración periódica deberán realizarse como se describe en T-262.1 al comienzo de cada turno, después de 8 horas de uso continuo, o después del cambio de diafragmas, lo que ocurra primero.</p>
                <p>(b) Películas de Comparación de Cuña Escalonada. Las verificaciones deberán realizarse anualmente según T-262.2.</p>
            </div>
            <div class="subsection">
                <h4>T-262.4 Documentación</h4>
                <p>(a) Densitómetros. Las calibraciones de densitómetros requeridas por T-262.1 deberán documentarse, pero no es necesario registrar las lecturas reales para cada paso. Las verificaciones periódicas de densitómetro requeridas por T-262.3(a) no necesitan documentarse.</p>
                <p>(b) Películas de Calibración de Cuña Escalonada. Las verificaciones de película de calibración de cuña escalonada requeridas por T-262.1(a) deberán documentarse, pero no es necesario registrar las lecturas reales para cada paso.</p>
                <p>(c) Películas de Comparación de Cuña Escalonada. Las verificaciones de película de comparación de cuña escalonada requeridas por T-262.2 y T-262.3(b) deberán documentarse, pero no es necesario registrar las lecturas reales para cada paso.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-270 EXAMEN</h4>
        <div class="subsection">
            <h4>T-271 TÉCNICA RADIOGRÁFICA</h4>
            <p>Siempre que sea práctico, deberá usarse una técnica de exposición de pared simple. Cuando no sea práctico usar una técnica de pared simple, deberá usarse una técnica de pared doble. Deberán realizarse un número adecuado de exposiciones para demostrar que se ha obtenido la cobertura requerida.</p>
            <div class="subsection">
                <h4>T-271.1 Técnica de Pared Simple</h4>
                <p>En la técnica de pared simple, la radiación pasa a través de solo una pared de la soldadura (material), que se visualiza para aceptación en la radiografía.</p>
            </div>
            <div class="subsection">
                <h4>T-271.2 Técnica de Pared Doble</h4>
                <p>Cuando no sea práctico usar una técnica de pared simple, deberá usarse una de las siguientes técnicas de pared doble.</p>
                <p>(a) Visualización de Pared Simple. Para materiales y para soldaduras en componentes, puede usarse una técnica en la que la radiación pasa a través de dos paredes y solo la soldadura (material) en la pared del lado de la película se visualiza para aceptación en la radiografía. Cuando se requiera cobertura completa para soldaduras circunferenciales (materiales), deberán realizarse un mínimo de tres exposiciones tomadas a 120 grados entre sí.</p>
                <p>(b) Visualización de Pared Doble. Para materiales y para soldaduras en componentes de 31/2 pulg. (89 mm) o menos de diámetro exterior nominal, puede usarse una técnica en la que la radiación pasa a través de dos paredes y la soldadura (material) en ambas paredes se visualiza para aceptación en la misma radiografía. Para visualización de pared doble, solo deberá usarse un IQI del lado de la fuente.</p>
                <p>(1) Para soldaduras, el haz de radiación puede desviarse del plano de la soldadura en un ángulo suficiente para separar las imágenes de las porciones de la soldadura del lado de la fuente y del lado de la película de modo que no haya superposición de las áreas que se interpretarán. Cuando se requiera cobertura completa, deberán realizarse un mínimo de dos exposiciones tomadas a 90 grados entre sí para cada junta.</p>
                <p>(2) Como alternativa, la soldadura puede radiografiarse con el haz de radiación posicionado de modo que las imágenes de ambas paredes estén superpuestas. Cuando se requiera cobertura completa, deberán realizarse un mínimo de tres exposiciones tomadas ya sea a 60 grados o 120 grados entre sí para cada junta.</p>
                <p>(3) Deberán realizarse exposiciones adicionales si no puede obtenerse la cobertura radiográfica requerida utilizando el número mínimo de exposiciones indicado en (1) o (2) anteriores.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-272 ENERGÍA DE RADIACIÓN</h4>
            <p>La energía de radiación empleada para cualquier técnica radiográfica deberá lograr los requisitos de densidad e imagen de IQI de este Artículo.</p>
        </div>
        <div class="subsection">
            <h4>T-273 DIRECCIÓN DE LA RADIACIÓN</h4>
            <p>La dirección del haz central de radiación debería centrarse en el área de interés siempre que sea práctico.</p>
        </div>
        <div class="subsection">
            <h4>T-274 FALTA DE DEFINICIÓN GEOMÉTRICA</h4>
            <div class="subsection">
                <h4>T-274.1 Determinación de la Falta de Definición Geométrica</h4>
                <p>La falta de definición geométrica de la radiografía deberá determinarse de acuerdo con:</p>
                <p>Ug = Fd / D</p>
                <p>donde</p>
                <p>D = distancia desde la fuente de radiación hasta la soldadura u objeto que se está radiografiando</p>
                <p>d = distancia desde el lado fuente de la soldadura u objeto que se está radiografiando hasta la película</p>
                <p>F = tamaño de la fuente: la dimensión proyectada máxima de la fuente radiante (o punto focal efectivo) en el plano perpendicular a la distancia D desde la soldadura u objeto que se está radiografiando</p>
                <p>Ug = falta de definición geométrica</p>
                <p>D y d deberán determinarse en el centro aproximado del área de interés.</p>
                <p>NOTA: Alternativamente, puede usarse un nomograma como se muestra en la Guía Estándar para Examen Radiográfico Utilizando Película Radiográfica Industrial, SE-94/SE-94M.</p>
            </div>
            <div class="subsection">
                <h4>T-274.2 Limitaciones de la Falta de Definición Geométrica</h4>
                <p>Los valores máximos recomendados para la falta de definición geométrica son los siguientes:</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-274_2.png" class="figure-image">
                    <p class="figure-caption">Tabla T-274.2 Limitaciones de la Falta de Definición Geométrica</p>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h4>T-275 MARCADORES DE UBICACIÓN</h4>
            <p>Marcadores de ubicación (véase la Figura T-275), que deberán aparecer como imágenes radiográficas en la radiografía, deberán colocarse en la pieza, no en el portador/casete de exposición. Sus ubicaciones deberán marcarse permanentemente en la superficie de la pieza que se está radiografiando cuando se permita, o en un mapa, de manera que permita que el área en una radiografía pueda rastrearse con precisión a su ubicación en la pieza, durante el período de retención requerido de la radiografía. Además, sus ubicaciones no limitan el área de interés ni el área que se interpretará. También deberá proporcionarse evidencia en la radiografía de que se ha obtenido la cobertura requerida de la región que se está examinando. Los marcadores de ubicación deberán colocarse de la siguiente manera.</p>
            
            <div class="figure-container">
                <img src="images/asmev_figure_t-275.png" class="figure-image">
                <p class="figure-caption">Figura T-275 Bocetos de Marcadores de Ubicación</p>
            </div>
            
            <div class="subsection">
                <h4>T-275.1 Visualización de Pared Simple</h4>
                <p>(a) Marcadores del Lado de la Fuente. Los marcadores de ubicación deberán colocarse en el lado de la fuente al radiografiar lo siguiente:</p>
                <p>(1) componentes planos o juntas longitudinales en componentes cilíndricos o cónicos;</p>
                <p>(2) componentes curvos o esféricos cuyo lado cóncavo está hacia la fuente y cuando la "distancia fuente-material" es menor que el radio interior del componente;</p>
                <p>(3) componentes curvos o esféricos cuyo lado convexo está hacia la fuente.</p>
                <p>(b) Marcadores del Lado de la Película</p>
                <p>(1) Los marcadores de ubicación deberán colocarse en el lado de la película al radiografiar componentes curvos o esféricos cuyo lado cóncavo está hacia la fuente y cuando la "distancia fuente-material" es mayor que el radio interior.</p>
                <p>(2) Como alternativa a la colocación en el lado de la fuente en T-275.1(a)(1), los marcadores de ubicación pueden colocarse en el lado de la película cuando la radiografía muestre cobertura más allá de los marcadores de ubicación en la medida demostrada por la Figura T-275, boceto (e), y cuando esta alternativa esté documentada de acuerdo con T-291.</p>
                <p>(c) Marcadores de Cualquier Lado. Los marcadores de ubicación pueden colocarse en el lado de la fuente o en el lado de la película al radiografiar componentes curvos o esféricos cuyo lado cóncavo está hacia la fuente y la "distancia fuente-material" es igual al radio interior del componente.</p>
            </div>
            <div class="subsection">
                <h4>T-275.2 Visualización de Pared Doble</h4>
                <p>Para visualización de pared doble, al menos un marcador de ubicación deberá colocarse adyacente a la soldadura (o en el material en el área de interés) para cada radiografía.</p>
            </div>
            <div class="subsection">
                <h4>T-275.3 Mapeo de la Colocación de Marcadores de Ubicación</h4>
                <p>Cuando la inaccesibilidad u otras limitaciones impidan la colocación de marcadores según lo estipulado en T-275.1 y T-275.2, un mapa dimensionado de la colocación real de los marcadores deberá acompañar a las radiografías para demostrar que se ha obtenido cobertura completa.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-276 SELECCIÓN DE IQI</h4>
            <div class="subsection">
                <h4>T-276.1 Material</h4>
                <p>Los IQI deberán seleccionarse del mismo grupo o grado de material de aleación como se identifica en SE-1025 para tipo de agujero o SE-747 para tipo de alambre, o de un grupo o grado de material de aleación con menor absorción de radiación que el material que se está radiografiando.</p>
            </div>
            <div class="subsection">
                <h4>T-276.2 Tamaño</h4>
                <p>El IQI de agujero designado o el alambre esencial deberá ser como se especifica en la Tabla T-276. Puede sustituirse un IQI de tipo de agujero más delgado o más grueso para cualquier espesor de sección listado en la Tabla T-276, siempre que se mantenga una sensibilidad equivalente de IQI. Véase T-283.2. Para IQI de tipo de alambre, puede sustituirse un alambre de diámetro menor por el alambre esencial requerido para cualquier espesor de sección listado en la Tabla T-276.</p>
                <p>(a) Soldaduras Con Refuerzos. El espesor en el que se basa el IQI es el espesor nominal del material de pared simple más el espesor del refuerzo de soldadura estimado que está presente en ambos lados de la soldadura (I.D. y O.D.). Los valores utilizados para los espesores estimados del refuerzo de soldadura deberán ser representativos de las condiciones de la soldadura y no deberán exceder los máximos permitidos por la Sección del Código de referencia. No se requiere la medición física de los refuerzos reales de la soldadura. Los anillos de respaldo o tiras no deberán considerarse parte del espesor en la selección del IQI.</p>
                <p>(b) Soldaduras Sin Refuerzos. El espesor en el que se basa el IQI es el espesor nominal del material de pared simple. Los anillos de respaldo o tiras no deberán considerarse parte del espesor en la selección del IQI.</p>
                <p>(c) Valores Reales. Con respecto a (a) y (b) anteriores, cuando se mida el espesor real del material/soldadura, la selección del IQI puede basarse en estos valores conocidos.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-276.png" class="figure-image">
                    <p class="figure-caption">Tabla T-276 Selección de IQI</p>
                </div>
            </div>
            <div class="subsection">
                <h4>T-276.3 Soldaduras que Unen Materiales Disímiles o Soldaduras Con Metal de Aporte Disímil</h4>
                <p>Cuando el metal de soldadura es de un grupo o grado de aleación que tiene una atenuación de radiación que difiere del material base, la selección del material del IQI deberá basarse en el metal de soldadura y estar de acuerdo con T-276.1. Cuando no puedan cumplirse los límites de densidad de T-282.2 con un IQI, y el área o áreas de densidad excepcional está/n en la interfaz del metal de soldadura y el metal base, la selección del material para los IQI adicionales deberá basarse en el material base y estar de acuerdo con T-276.1.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-277 USO DE IQIS PARA MONITOREAR EL EXAMEN RADIOGRÁFICO</h4>
            <div class="subsection">
                <h4>T-277.1 Colocación de IQIs</h4>
                <p>(a) IQI del Lado de la Fuente. El IQI deberá colocarse en el lado de la fuente de la pieza que se está examinando, excepto para la condición descrita en (b).</p>
                <p>Cuando, debido a la configuración o tamaño de la pieza o soldadura, no sea práctico colocar el IQI en la pieza o soldadura, el IQI puede colocarse en un bloque separado. Los bloques separados deberán hacerse del mismo material o materiales radiográficamente similares (como se define en SE-1025 para tipo de agujero o SE-747 para tipo de alambre) y pueden usarse para facilitar la posicionamiento del IQI. No hay restricción en el espesor del bloque separado, siempre que se cumplan los requisitos de tolerancia de densidad IQI/área-de-interés de T-282.2.</p>
                <p>(1) El IQI en el lado de la fuente del bloque separado deberá colocarse no más cerca de la película que el lado de la fuente de la pieza que se está radiografiando.</p>
                <p>(2) El bloque separado deberá colocarse lo más cerca posible de la pieza que se está radiografiando.</p>
                <p>(3) Cuando se usen IQI de tipo de agujero, las dimensiones del bloque deberán exceder las dimensiones del IQI de modo que el contorno de al menos tres lados de la imagen del IQI sea visible en la radiografía.</p>
                <p>(b) IQI del Lado de la Película. Cuando la inaccesibilidad impida colocar manualmente el IQI en el lado de la fuente, el IQI deberá colocarse en el lado de la película en contacto con la pieza que se está examinando. Una letra de plomo "F" deberá colocarse adyacente o sobre el IQI, pero no deberá enmascarar el agujero esencial cuando se usen IQI de agujero.</p>
                <p>(c) Colocación de IQI para Soldaduras — IQI de Agujero. El IQI puede colocarse adyacente o sobre la soldadura. El número(s) de identificación y, cuando se use, la letra de plomo "F", no deberán estar en el área de interés, excepto cuando la configuración geométrica lo haga impracticable.</p>
                <p>(d) Colocación de IQI para Soldaduras — IQI de Alambre. El IQI deberá colocarse sobre la soldadura de modo que las longitudes de los alambres sean transversales al eje longitudinal de la soldadura. No se requiere que el alambre esencial cruce todo el ancho de la soldadura. Sin embargo, el alambre esencial deberá cruzar al menos esa porción de la soldadura que representa el espesor nominal del material de pared simple y el refuerzo para el cual se seleccionó el alambre esencial del IQI. También deberán cumplirse los requisitos de densidad de T-292 y los requisitos de sensibilidad de T-283. La identificación del IQI y, cuando se use, la letra de plomo "F", no deberán estar en el área de interés, excepto cuando la configuración geométrica lo haga impracticable.</p>
                <p>(e) Colocación de IQI para Materiales Distintos de Soldaduras. El IQI con la identificación del IQI y, cuando se use, la letra de plomo "F", puede colocarse en el área de interés.</p>
            </div>
            <div class="subsection">
                <h4>T-277.2 Número de IQIs</h4>
                <p>Cuando se usen uno o más portapelículas para una exposición, al menos una imagen de IQI deberá aparecer en cada radiografía excepto como se describe en (b) a continuación.</p>
                <p>(a) Múltiples IQIs. Si los requisitos de T-282 se cumplen usando más de un IQI, uno deberá ser representativo del área de interés más clara y el otro del área de interés más oscura; las densidades intermedias en la radiografía deberán considerarse como teniendo densidad aceptable.</p>
                <p>(b) Casos Especiales</p>
                <p>(1) Para componentes cilíndricos donde la fuente se coloca en el eje del componente para una sola exposición, se requieren al menos tres IQI, espaciados aproximadamente 120 grados entre sí, bajo las siguientes condiciones:</p>
                <p>(-a) Cuando se radiografió la circunferencia completa usando uno o más portapelículas, o;</p>
                <p>(-b) Cuando una sección o secciones de la circunferencia, donde la longitud entre los extremos de las secciones más externas abarcan 240 o más grados, se radiografía usando uno o más portapelículas. Pueden requerirse ubicaciones de película adicionales para obtener el espaciado necesario de IQI.</p>
                <p>(2) Para componentes cilíndricos donde la fuente se coloca en el eje del componente para una sola exposición, se requieren al menos tres IQI, con uno colocado en cada extremo del tramo de la circunferencia radiografiada y uno en el centro aproximado del tramo, bajo las siguientes condiciones:</p>
                <p>(-a) Cuando una sección de la circunferencia, cuya longitud es mayor de 120 grados y menor de 240 grados, se radiografía usando solo un portapelículas, o;</p>
                <p>(-b) Cuando una sección o secciones de la circunferencia, donde la longitud entre los extremos de las secciones más externas abarcan menos de 240 grados, se radiografía usando más de un portapelículas.</p>
                <p>(3) En (1) y (2) anteriores, donde secciones de soldaduras longitudinales adyacentes a la soldadura circunferencial se radiografían simultáneamente con la soldadura circunferencial, deberá colocarse un IQI adicional en cada soldadura longitudinal en el extremo de la sección más remota de la unión con la soldadura circunferencial que se está radiografiando.</p>
                <p>(4) Para componentes esféricos donde la fuente se coloca en el centro del componente para una sola exposición, se requieren al menos tres IQI, espaciados aproximadamente 120 grados entre sí, bajo las siguientes condiciones:</p>
                <p>(-a) Cuando se radiografió una circunferencia completa usando uno o más portapelículas, o;</p>
                <p>(-b) Cuando una sección o secciones de una circunferencia, donde la longitud entre los extremos de las secciones más externas abarcan 240 o más grados, se radiografía usando uno o más portapelículas. Pueden requerirse ubicaciones de película adicionales para obtener el espaciado necesario de IQI.</p>
                <p>(5) Para componentes esféricos donde la fuente se coloca en el centro del componente para una sola exposición, se requieren al menos tres IQI, con uno colocado en cada extremo del tramo de la circunferencia radiografiada y uno en el centro aproximado del tramo, bajo las siguientes condiciones:</p>
                <p>(-a) Cuando una sección de una circunferencia, cuya longitud es mayor de 120 grados y menor de 240 grados, se radiografía usando solo un portapelículas, o;</p>
                <p>(-b) Cuando una sección o secciones de una circunferencia, donde la longitud entre los extremos de las secciones más externas abarcan menos de 240 grados, se radiografía usando más de un portapelículas.</p>
                <p>(6) En (4) y (5) anteriores, donde otras soldaduras se radiografían simultáneamente con la soldadura circunferencial, deberá colocarse un IQI adicional en cada otra soldadura.</p>
                <p>(7) Para segmentos de un componente plano o curvo (es decir, elipsoidal, torisférico, toricónico, elíptico, etc.) donde la fuente se coloca perpendicular al centro de una longitud de soldadura para una sola exposición cuando se usan más de tres portapelículas, se requieren al menos tres IQI, uno colocado en cada extremo del tramo radiografiado y uno en el centro aproximado del tramo.</p>
                <p>(8) Cuando se radiografía un conjunto de componentes en un círculo, deberá mostrarse al menos un IQI en cada imagen de componente.</p>
                <p>(9) Para mantener la continuidad de los registros que involucran exposiciones posteriores, deberán retenerse todas las radiografías que exhiban IQI que califiquen las técnicas permitidas de acuerdo con (1) a (7) anteriores.</p>
            </div>
            <div class="subsection">
                <h4>T-277.3 Calzas Bajo IQI de Tipo de Agujero</h4>
                <p>Para soldaduras, deberá colocarse una calza de material radiográficamente similar al metal de soldadura entre la pieza y el IQI, si es necesario, de modo que la densidad radiográfica en todo el área de interés no sea más del 15% menos (más clara que) la densidad radiográfica a través del IQI designado adyacente al agujero esencial.</p>
                <p>Las dimensiones de la calza deberán exceder las dimensiones del IQI de modo que el contorno de al menos tres lados de la imagen del IQI sea visible en la radiografía.</p>
            </div>
        </div>
    </div>
    <div class="subsection">
        <h4>T-280 EVALUACIÓN</h4>
        <div class="subsection">
            <h4>T-281 CALIDAD DE LAS RADIOGRAFÍAS</h4>
            <p>Todas las radiografías deberán estar libres de defectos mecánicos, químicos u otras imperfecciones en la medida de que no enmascaren ni se confundan con la imagen de cualquier discontinuidad en el área de interés del objeto que se está radiografiando. Dichas imperfecciones incluyen, pero no se limitan a:</p>
                <p>(a) velado;</p>
                <p>(b) defectos de procesamiento como rayas, marcas de agua o manchas químicas;</p>
                <p>(c) rayaduras, marcas de dedos, arrugas, suciedad, marcas estáticas, manchas o desgarros;</p>
                <p>(d) indicaciones falsas debido a pantallas defectuosas.</p>
            </div>
        <div class="subsection">
            <h4>T-282 DENSIDAD RADIOGRÁFICA</h4>
            <div class="subsection">
                <h4>T-282.1 Limitaciones de Densidad</h4>
                <p>La densidad de película transmitida a través de la imagen radiográfica del cuerpo del IQI de tipo de agujero designado adyacente al agujero esencial o adyacente al alambre esencial de un IQI de tipo de alambre y el área de interés deberá ser de 1.8 mínimo para visualización de película simple para radiografías hechas con una fuente de rayos X y 2.0 mínimo para radiografías hechas con una fuente de rayos gamma. Para visualización compuesta de exposiciones múltiples de película, cada película del conjunto compuesto deberá tener una densidad mínima de 1.3. La densidad máxima deberá ser de 4.0 para visualización simple o compuesta. Se permite una tolerancia de 0.05 en densidad para variaciones entre lecturas de densitómetro.</p>
            </div>
            <div class="subsection">
                <h4>T-282.2 Variación de Densidad</h4>
                <p>(a) La densidad de la radiografía en cualquier lugar a través del área de interés no deberá</p>
                <p>(1) variar en más de menos 15% o más 30% de la densidad a través del cuerpo del IQI de tipo de agujero designado adyacente al agujero esencial o adyacente al alambre esencial de un IQI de tipo de alambre, y</p>
                <p>(2) exceder los rangos de densidad mínima/máxima permitidos especificados en T-282.1</p>
                <p>Al calcular la variación permitida en densidad, el cálculo puede redondearse al 0.1 más cercano dentro del rango especificado en T-282.1.</p>
                <p>(b) Cuando no se cumplan los requisitos de (a) anterior, entonces deberá usarse un IQI adicional para cada área o áreas excepcionales y la radiografía deberá repetirse.</p>
                <p>(c) Cuando se usen calzas con IQI de tipo de agujero, puede excederse la restricción de densidad de más 30% de (a) anterior, y los requisitos de densidad mínima de T-282.1 no se aplican para el IQI, siempre que se cumpla la sensibilidad requerida de IQI de T-283.1.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-283 SENSIBILIDAD DE IQI</h4>
            <div class="subsection">
                <h4>T-283.1 Sensibilidad Requerida</h4>
                <p>La radiografía deberá realizarse con una técnica de sensibilidad suficiente para mostrar la imagen del IQI de tipo de agujero designado (incluidas las muescas de identificación del grupo de material aplicables) y el agujero esencial, o el alambre esencial de un IQI de tipo de alambre. Las radiografías también deberán mostrar los números y letras de identificación del IQI. Si la imagen del IQI de tipo de agujero designado (incluidas las muescas de identificación del grupo de material aplicables) y el agujero esencial, o el alambre esencial de un IQI de tipo de alambre, no se muestran en ninguna película en una técnica de película múltiple, pero se muestran en la visualización compuesta de película, la interpretación solo se permitirá mediante visualización compuesta de película.</p>
                <p>Para IQI de tipo de alambre, el alambre esencial deberá ser visible dentro del área de interés que representa el espesor utilizado para determinar el alambre esencial, inclusive de las variaciones de densidad permitidas descritas en T-282.2.</p>
            </div>
            <div class="subsection">
                <h4>T-283.2 Sensibilidad Equivalente de IQI de Tipo de Agujero</h4>
                <p>Puede sustituirse un IQI de tipo de agujero más delgado o más grueso que el IQI designado, siempre que se logre una sensibilidad de IQI equivalente o mejor, como se enumera en la Tabla T-283, y se cumplan todos los demás requisitos para la radiografía. La sensibilidad equivalente de IQI se muestra en cualquier fila de la Tabla T-283 que contenga el IQI y agujero designados. Una mejor sensibilidad de IQI se muestra en cualquier fila de la Tabla T-283 que esté por encima de la fila de sensibilidad equivalente. Si el IQI y agujero designados no están representados en la tabla, puede usarse la siguiente fila más delgada de IQI de la Tabla T-283 para establecer la sensibilidad equivalente de IQI.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-283.png" class="figure-image">
                    <p class="figure-caption">Tabla T-283 Sensibilidad Equivalente de IQI de Tipo de Agujero</p>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h4>T-284 RETRODISPERSIÓN EXCESIVA</h4>
            <p>Si aparece una imagen clara de la "B", como se describe en T-223, sobre un fondo más oscuro de la radiografía, la protección contra la retrodispersión es insuficiente y la radiografía deberá considerarse inaceptable. Una imagen oscura de la "B" sobre un fondo más claro no es motivo de rechazo.</p>
        </div>
        <div class="subsection">
            <h4>T-285 EVALUACIÓN POR EL FABRICANTE</h4>
            <p>El Fabricante será responsable de la revisión, interpretación, evaluación y aceptación de las radiografías completadas para asegurar el cumplimiento con los requisitos del Artículo 2 y la Sección del Código de referencia. Como ayuda para la revisión y evaluación, la documentación de la técnica radiográfica requerida por T-291 deberá completarse antes de la evaluación. El formulario de revisión de radiografía requerido por T-292 deberá completarse durante la evaluación. Los detalles de la técnica radiográfica y la documentación del formulario de revisión de radiografía deberán acompañar a las radiografías. La aceptación deberá completarse antes de la presentación de las radiografías y la documentación acompañante al Inspector.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-290 DOCUMENTACIÓN</h4>
        <div class="subsection">
            <h4>T-291 DETALLES DE DOCUMENTACIÓN DE LA TÉCNICA RADIOGRÁFICA</h4>
            <p>La organización deberá preparar y documentar los detalles de la técnica radiográfica. Como mínimo, deberá proporcionarse la siguiente información.</p>
            <p>(a) los requisitos del Artículo 1, T-190(a)</p>
            <p>(b) identificación según lo requerido por T-224</p>
            <p>(c) el mapa dimensional (si se usa) de la colocación de marcadores de acuerdo con T-275.3</p>
            <p>(d) número de exposiciones</p>
            <p>(e) voltaje de rayos X o tipo de isótopo utilizado</p>
            <p>(f) tamaño de la fuente (F en T-274.1)</p>
            <p>(g) tipo de material base y espesor, espesor de soldadura, espesor de refuerzo de soldadura, según corresponda</p>
            <p>(h) distancia fuente-objeto (D en T-274.1)</p>
            <p>(i) distancia desde el lado fuente del objeto a la película (d en T-274.1)</p>
            <p>(j) fabricante de película y su tipo/designación asignado</p>
            <p>(k) número de películas en cada portapelículas/casete</p>
            <p>(l) exposición de pared simple o doble</p>
            <p>(m) visualización de pared simple o doble</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-292 FORMULARIO DE REVISIÓN DE RADIOGRAFÍA</h4>
            <p>El Fabricante será responsable de la preparación de un formulario de revisión de radiografía. Como mínimo, deberá proporcionarse la siguiente información.</p>
            <p>(a) un listado de cada ubicación de radiografía</p>
            <p>(b) la información requerida en T-291, mediante la inclusión de la información en el formulario de revisión o por referencia a una hoja de detalles de técnica radiográfica adjunta</p>
            <p>(c) evaluación y disposición del/los material(es) o soldadura(s) examinado(s)</p>
            <p>(d) identificación (nombre) del representante del Fabricante que realizó la aceptación final de las radiografías</p>
            <p>(e) fecha de la evaluación del Fabricante</p>
        </div>
    </div>
    `
});