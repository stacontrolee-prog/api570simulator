// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 8 para API 577
registerChapter('API577', {
    id: 8,
    title: "Nondestructive Examination",
    titleEs: "Examen No Destructivo",
    content: `<h2>8 Nondestructive Examination</h2>
    <h3>8.1 Discontinuities/imperfections</h3>
    <p>NDE is defined as those inspection methods that allow materials to be examined without changing or destroying their future usefulness. NDE is an integral part of an organization's quality assurance program. Several NDE methods are employed to ensure that the weld meets design specifications and does not contain defects.</p>
    <p>The inspector should choose an NDE method with the capability and adequate sensitivity to detect discontinuities in the weld joints requiring examination for accept/reject evaluation. Table 2 and Figure 13 (reproduced from AWS B1.10<sup>4</sup>) list the common types and locations of discontinuities and illustrate their positions within a butt weld. The NDE methods most commonly used during weld inspection are shown in Table 3.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 2—Common Types of Discontinuities</caption>
            <thead>
                <tr>
                    <th>Type of Discontinuity</th>
                    <th>Subclause*</th>
                    <th>Location</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1) Porosity<br>a) Uniformly scattered<br>b) Cluster<br>c) Piping<br>d) Aligned<br>e) Elongated</td>
                    <td>4.3<br>4.3.1<br>4.3.2<br>4.3.3<br>4.3.4<br>4.3.5</td>
                    <td>WMZ</td>
                    <td>Porosity could also be found in the base metal and HAZ if the base metal is a casting.</td>
                </tr>
                <tr>
                    <td>2) Inclusion<br>a) Slag<br>b) Tungsten</td>
                    <td>4.4<br>4.4.1<br>4.4.2</td>
                    <td>WMZ/WI</td>
                    <td></td>
                </tr>
                <tr>
                    <td>3) Incomplete fusion</td>
                    <td>4.5</td>
                    <td>WMZ/WI</td>
                    <td>WM between passes.</td>
                </tr>
                <tr>
                    <td>4) Incomplete joint penetration</td>
                    <td>4.6</td>
                    <td>BMZ</td>
                    <td>Weld root in a groove weld.</td>
                </tr>
                <tr>
                    <td>5) Undercut</td>
                    <td>4.7</td>
                    <td>WI/HAZ</td>
                    <td>Adjacent to weld toe or weld root in base metal.</td>
                </tr>
                <tr>
                    <td>6) Underfill</td>
                    <td>4.8</td>
                    <td>WMZ</td>
                    <td>Weld face or root surface of a groove weld.</td>
                </tr>
                <tr>
                    <td>7) Overlap</td>
                    <td>4.9</td>
                    <td>WMZ</td>
                    <td>Weld toe or root surface.</td>
                </tr>
                <tr>
                    <td>8) Lamination</td>
                    <td>4.10</td>
                    <td>BMZ</td>
                    <td>Base metal, generally near mid-thickness of section.</td>
                </tr>
                <tr>
                    <td>9) Delamination</td>
                    <td>4.11</td>
                    <td>BMZ</td>
                    <td>Base metal, generally near mid-thickness of section.</td>
                </tr>
                <tr>
                    <td>10) Seam and lap</td>
                    <td>4.12</td>
                    <td>BMZ</td>
                    <td>Base metal surface generally aligned with rolling direction.</td>
                </tr>
                <tr>
                    <td>11) Lamellar tear</td>
                    <td>4.13</td>
                    <td>BMZ</td>
                    <td>Base metal.</td>
                </tr>
                <tr>
                    <td>12) Crack (includes hot cracks and cold cracks described in text)<br>a) Longitudinal<br>b) Transverse<br>c) Crater<br>d) Throat<br>e) Toe<br>f) Face and root<br>g) Underbead and HAZ</td>
                    <td>4.14<br>4.14.1<br>4.14.2, 4.14.3<br>4.14.2, 4.14.4<br>4.14.5<br>4.14.6<br>4.14.7<br>4.14.8<br>4.14.9</td>
                    <td>WMZ, HAZ, BMZ<br>WMZ, HAZ, BMZ<br>WMZ<br>WMZ<br>WI, HAZ<br>WMZ<br>HAZ</td>
                    <td>Weld metal or base metal adjacent to WI.<br>Weld metal (may propagate into HAZ and base metal).<br>Weld metal at point where arc is terminated.<br>Parallel to weld axis.<br>Through the throat of a fillet weld.<br>Root surface or weld root.<br>Face or root of their surfaces.<br>HAZ (may propagate into base metal).</td>
                </tr>
                <tr>
                    <td>13) Concavity</td>
                    <td>4.15</td>
                    <td>WMZ</td>
                    <td>Weld face or fillet weld.</td>
                </tr>
                <tr>
                    <td>14) Convexity</td>
                    <td>4.16</td>
                    <td>WMZ</td>
                    <td>Weld face or fillet weld.</td>
                </tr>
                <tr>
                    <td>15) Weld reinforcement</td>
                    <td>4.17</td>
                    <td>WMZ</td>
                    <td>Weld face or root surface of a groove weld.</td>
                </tr>
                <tr>
                    <td>16) Spatter</td>
                    <td></td>
                    <td>WMZ, BMZ</td>
                    <td>Weld face or base metal surface.</td>
                </tr>
                <tr>
                    <td>17) Arc strike</td>
                    <td></td>
                    <td>WMZ, BMZ</td>
                    <td>Weld face or base metal surface.</td>
                </tr>
            </tbody>
        </table>
        <p class="note">WMZ—weld metal zone; BMZ—base metal zone; HAZ—heat-affected zone; WI—weld interface.<br>* Subclause references refer to sections of AWS B1.10, 2016 Edition.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_13.png" class="figure-image">
        <p>From AWS B1.10. Reprinted courtesy of AWS.</p>
        <p>Figure 13—Typical Discontinuities Present in a Single Bevel Groove Weld in a Butt Joint</p>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 3—Commonly Used NDE Methods</caption>
            <thead>
                <tr>
                    <th>NDE Method</th>
                    <th>Symbols</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Visual Examination</td><td>VT</td></tr>
                <tr><td>Magnetic Particle Examination</td><td>MT</td></tr>
                <tr><td>Wet Fluorescent Magnetic Particle Examination</td><td>WFMT</td></tr>
                <tr><td>Liquid Penetrant Examination</td><td>PT</td></tr>
                <tr><td>Leak Testing/Examination</td><td>LT</td></tr>
                <tr><td>Eddy Current Examination</td><td>ET</td></tr>
                <tr><td>Radiographic Examination</td><td>RT</td></tr>
                <tr><td>Ultrasonic Examination</td><td>UT</td></tr>
                <tr><td>Alternating Current Field Measurement</td><td>ACFM</td></tr>
            </tbody>
        </table>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 4—Capability of the Applicable Examination Method for Weld-Type Joints</caption>
            <thead>
                <tr>
                    <th rowspan="2">Joints</th>
                    <th colspan="8">Inspection Methods</th>
                </tr>
                <tr>
                    <th colspan="4">Volumetric</th>
                    <th colspan="4">Surface</th>
                </tr>
                <tr>
                    <th></th>
                    <th>RT</th>
                    <th>UT</th>
                    <th>ET</th>
                    <th>PT</th>
                    <th>MT</th>
                    <th>VT</th>
                    <th>LT</th>
                    <th>ACFM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Butt</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Corner</td>
                    <td>M</td>
                    <td>A</td>
                    <td>M</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Tee</td>
                    <td>M</td>
                    <td>A</td>
                    <td>M</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Lap</td>
                    <td>M</td>
                    <td>M</td>
                    <td>M</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>M</td>
                </tr>
                <tr>
                    <td>Edge</td>
                    <td>M</td>
                    <td>M</td>
                    <td>M</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
            </tbody>
        </table>
        <p class="note">Volumetric<br>Surface<br>RT: radiographic examination (volumetric)<br>UT: ultrasonic examination (volumetric)<br>ET: eddy current examination (shown in both volumetric and surface as it can detect near-surface flaws)<br>PT: penetrant examination including color contrast penetrant and fluorescent penetrant (surface)<br>MT: magnetic particle examination (surface)<br>VT: visual examination (surface)<br>LT: leak examination (surface)<br>ACFM: alternating current field measurement (surface)<br>A: applicable method<br>M: marginal applicability (depends on other factors, such as material thickness, discontinuity size, orientation, and location</p>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 5—Capability of the Applicable Method vs. Discontinuity</caption>
            <thead>
                <tr>
                    <th></th>
                    <th colspan="6">Inspection Methods</th>
                </tr>
                <tr>
                    <th>Discontinuities</th>
                    <th>RT</th>
                    <th>UT</th>
                    <th>PT<sup>a,c</sup></th>
                    <th>MT<sup>b,c,d</sup></th>
                    <th>VT<sup>a</sup></th>
                    <th>ET</th>
                    <th>LT<sup>e</sup></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Porosity</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Slag inclusions</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>Incomplete fusion</td>
                    <td>O</td>
                    <td>A</td>
                    <td>U</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Incomplete joint penetration</td>
                    <td>A</td>
                    <td>A</td>
                    <td>U</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>Undercut</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>Overlap</td>
                    <td>U</td>
                    <td>O</td>
                    <td>A</td>
                    <td>A</td>
                    <td>O</td>
                    <td>O</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>Cracks</td>
                    <td>O</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Laminations</td>
                    <td>U</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>U</td>
                    <td>U</td>
                </tr>
            </tbody>
        </table>
        <p class="note">RT—Radiographic examination<br>UT—Ultrasonic examination<br>PT—Penetrant examination including both DPT (dye penetrant examination) and FPT (fluorescent penetrant examination)<br>MT—Magnetic particle examination<br>VT—Visual examination<br>ET—Electromagnetic examination<br>LT—Leak testing/examination<br>A—Applicable method<br>O—Marginal applicability (depending on other factors such as material thickness, discontinuity size, orientation, and location)<br>U—Usually not used<br>a Surface.<br>b Surface and slightly subsurface.<br>c Weld preparation or edge of base metal.<br>d Magnetic particle examination is applicable only to ferromagnetic materials.<br>e Leak testing/examination is applicable only to enclosed structure which may be sealed and pressurized during testing/examination.</p>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 6—Discontinuities Commonly Encountered with Welding Processes</caption>
            <thead>
                <tr>
                    <th>Material</th>
                    <th>Type of Discontinuity</th>
                    <th>Welding Processes</th>
                    <th>Typical NDE Method</th>
                    <th>Practical Solution</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="10">Carbon Steel</td>
                    <td>Hydrogen cracking</td>
                    <td>SMAW, FCAW, SAW</td>
                    <td>VT, PT, MT after cool down</td>
                    <td>Low-hydrogen electrode, preheat, post heat, clean weld joint.</td>
                </tr>
                <tr>
                    <td>Lack of fusion (LOF)</td>
                    <td>ALL</td>
                    <td>UT</td>
                    <td>Proper heat input, proper welding technique.</td>
                </tr>
                <tr>
                    <td>Incomplete penetration</td>
                    <td>ALL</td>
                    <td>RT, UT, VT<sup>a</sup></td>
                    <td>Proper heat input, proper joint design.</td>
                </tr>
                <tr>
                    <td>Undercut</td>
                    <td>SAW, SMAW, FCAW, GMAW</td>
                    <td>VT</td>
                    <td>Reduce current, travel speed.</td>
                </tr>
                <tr>
                    <td>Slag inclusion</td>
                    <td>SMAW, FCAW, SAW</td>
                    <td>RT, UT</td>
                    <td>Proper welding technique, cleaning, avoid excessive weaving.</td>
                </tr>
                <tr>
                    <td>Porosity</td>
                    <td>ALL</td>
                    <td>RT</td>
                    <td>Low hydrogen, low sulfur environment, proper cleaning and shielding.</td>
                </tr>
                <tr>
                    <td>Burn-through</td>
                    <td>SAW, FCAW, GMAW, SMAW</td>
                    <td>RT, VT<sup>a</sup></td>
                    <td>Proper heat input.</td>
                </tr>
                <tr>
                    <td>Arc strike</td>
                    <td>ALL</td>
                    <td>VT, MT, PT, Macroetch</td>
                    <td>Remove by grinding.</td>
                </tr>
                <tr>
                    
                    <td>Lack of side wall fusion</td>
                    <td>GMAW-S</td>
                    <td>UT</td>
                    <td>Proper heat input, vertical uphill.</td>
                </tr>
                <tr>
                  
                    <td>Tungsten inclusion</td>
                    <td>GTAW</td>
                    <td>RT</td>
                    <td>Arc length control.</td>
                </tr>
                <tr>
                    <td rowspan="8">Austenitic Stainless Steel</td>
                    <td>Solidification cracking</td>
                    <td>ALL</td>
                    <td>PT</td>
                    <td>Proper filler, ferrite content, proper joint design.</td>
                </tr>
                <tr>
                    <td>Hot cracking</td>
                    <td>SAW, FCAW, GMAW, SMAW</td>
                    <td>RT, PT, UT</td>
                    <td>Low heat input, stringer bead.</td>
                </tr>
                <tr>
                    <td>Incomplete penetration</td>
                    <td>ALL</td>
                    <td>RT, UT</td>
                    <td>Proper heat input.</td>
                </tr>
                <tr>
                    <td>Undercut</td>
                    <td>SAW, SMAW, FCAW, GMAW</td>
                    <td>VT</td>
                    <td>Reduce travel speed.</td>
                </tr>
                <tr>
                    <td>Slag inclusion</td>
                    <td>SMAW, FCAW, SAW</td>
                    <td>RT, UT</td>
                    <td>Proper cleaning.</td>
                </tr>
                <tr>
                    <td>Porosity</td>
                    <td>ALL</td>
                    <td>RT</td>
                    <td>Low hydrogen, low sulfur environment, proper shielding.</td>
                </tr>
                <tr>
                    <td>Arc strike</td>
                    <td>ALL</td>
                    <td>VT, PT, Macroetch</td>
                    <td>Remove by grinding.</td>
                </tr>
                <tr>
                    <td>Tungsten inclusion</td>
                    <td>GTAW</td>
                    <td>RT</td>
                    <td>Arc length control.</td>
                </tr>
            </tbody>
        </table>
        <p class="note">a When root is accessible.</p>
    </div>
    
    <h3>8.2 Materials Identification</h3>
    <p>During welding inspection, the inspector should verify the conformance of the base material and filler metal chemistries for the selected or specified alloyed materials as required by the relevant WPS. This should include reviewing the certified mill test report, reviewing stamps or markings on the components, or require positive metal identification (PMI) testing. It is the responsibility of the owner–user to establish a written material verification program indicating the extent and type of PMI to be as outlined in API 578.</p>
    
    <h3>8.3 Visual Examination (VT)</h3>
    <h4>8.3.1 General</h4>
    <p>VT is the most extensively used NDE method for welds. It includes either direct or indirect observation of the exposed surfaces of the weld and base metal. Direct VT is conducted when access is sufficient to place the eye within 6 in. through 24 in. (150 mm through 600 mm) of the surface to be examined and at an angle not less than 30° to the surface, as illustrated in Figure 14. Mirrors may be used to improve the angle of vision.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_14.png" class="figure-image">
        <p>Courtesy of CJ Hellier</p>
        <p>Figure 14—Direct Visual Examination Requirements</p>
    </div>
    
    <p>Remote VT may be substituted for direct examination. Remote examination may use aids such as telescopes, borescopes, fiberscopes, cameras, or other suitable instruments, provided they have a resolution at least equivalent to that which is attained by direct visual examination. In either case, the illumination should be sufficient to allow resolution of fine detail. These illumination requirements are to be addressed in a written procedure.</p>
    <p>ASME Section V, Article 9, lists requirements for VT. Codes and specifications may list compliance with these requirements as mandatory. Some requirements listed in this article include the following:</p>
    <ul>
        <li>a written, qualified procedure;</li>
        <li>the minimum amount of information that is to be included in the written procedure;</li>
        <li>demonstration of the adequacy of the inspection procedure;</li>
        <li>inspection personnel must be certified by their employer for the specific method;</li>
        <li>personnel are required to document annual completion of a J-1 Jaeger-type eye vision test (with or without correction);</li>
        <li>direct VT requires access to permit the eye to be within 6 in. through 24 in. (150 mm through 600 mm) of the surface, at an angle not less than 30°;</li>
        <li>the minimum required illumination of the part under examination;</li>
        <li>indirect VT permits the use of remote visual examination and devices be employed;</li>
        <li>evaluation of indications in terms of the acceptance standards of the referencing code;</li>
        <li>a form adequately documenting the results per the relevant code section.</li>
    </ul>
    
    <h4>8.3.2 Visual Inspection Tools</h4>
    <h4>8.3.2.1 General</h4>
    <p>To visually inspect and evaluate welds, adequate illumination and good eyesight are the basic requirements. In addition, a basic set of optical aids and measuring tools, specifically designed for weld inspection, can assist the inspector. In the following subsections are some commonly used tools and methods for VT of welds.</p>
    
    <h4>8.3.2.2 Optical Aids</h4>
    <p>Optical aids used in visual inspection include the following:</p>
    <ul>
        <li><strong>Lighting:</strong> Inspection surface illumination is of extreme importance. Adequate illumination levels should be established in order to ensure an effective visual inspection. Standards such as ASME Section V, Article 9, specify minimum lighting levels of 100 foot-candles (1000 lux) at the examination surface. This is not always easy to achieve, so inspectors have to be aware of the need to measure lighting conditions using a light meter.</li>
        <li><strong>Mirrors:</strong> Valuable to the inspector, allowing them to look inside piping, threaded and bored holes, and castings, and around corners if necessary.</li>
        <li><strong>Magnifiers:</strong> Helpful in bringing out small details and imperfections.</li>
        <li><strong>Borescopes and fiberscopes:</strong> Widely used for examining tubes, deep holes, long bores, and pipe bends that have internal surfaces not accessible to direct viewing.</li>
    </ul>
    
    <h4>8.3.2.3 Mechanical Aids</h4>
    <p>Mechanical aids used in visual inspection include the following:</p>
    <ul>
        <li><strong>Steel ruler:</strong> Available in a wide selection of sizes and graduations to suit the needs of the inspection (considered a nonprecision measuring instrument).</li>
        <li><strong>Vernier scale:</strong> a precision instrument, capable of measuring with a precision factor of 0.0001 in. The Vernier system is used on various precision measuring instruments, such as calipers, micrometers, height and depth gauges, the gear tooth, and protractors.</li>
        <li><strong>Combination square set:</strong> Consisting of a blade and a set of three heads: square, center, and protractor, used universally in mechanical work for assembly and layout examination.</li>
        <li><strong>Mechanical thickness gauge:</strong> Commonly called a "feeler" gauge, and used to measure the clearance between objects.</li>
        <li><strong>Levels:</strong> Tools designed to prove whether a plane or surface is truly horizontal or vertical.</li>
    </ul>
    
    <h4>8.3.2.4 Weld Examination Devices</h4>
    <p>Typical inspection tools for weld inspection include the following:</p>
    <ul>
        <li><strong>Inspector's kit (see Figure 15):</strong> Contains some of the basic tools needed to perform an adequate visual examination of a weld during all stages of welding. It includes everything from a lighted magnifier to a Vernier caliper.</li>
        <li><strong>Bridge cam gauge (see Figure 16):</strong> Can be used to determine the weld preparation angle prior to welding. This tool can also be used to measure excess weld metal (reinforcement), depth of undercut or pitting, fillet weld throat size, or weld leg length and misalignment (high–low).</li>
        <li><strong>Fillet weld gauge:</strong> Provides a quick and precise means of measuring the more commonly used fillet weld sizes. The types of fillet weld gauges include:
            <ol>
                <li>Adjustable fillet weld gauge (see Figure 17) measures weld sizes for fit-ups with 45° members and welds with unequal weld leg lengths;</li>
                <li>Skew-T fillet weld gauge (see Figure 18) measures the angle of the vertical member;</li>
                <li>Weld fillet gauge (see Figure 19) is a quick go/no-go gauge used to measure the fillet weld leg size. Gauges normally come in sets with weld leg sizes from 3 mm (1/8 in.) to 25 mm (1 in.). Figure 20 shows a weld fillet gauge being used to determine if the crown has acceptable concavity or convexity.</li>
            </ol>
        </li>
        <li><strong>Weld size gauge (see Figure 21):</strong> Measures the size of fillet welds, the actual throat size of convex and concave fillet welds, the reinforcement of butt welds, and root openings.</li>
        <li><strong>Hi-lo welding gauge (see Figure 22):</strong> Measures internal misalignment after fit-up, pipe wall thickness after alignment, length between scribe lines, root opening, 371/2° bevel, fillet weld leg size, and reinforcement on butt welds. The hi-lo gauge provides the ability to ensure proper alignment of the pieces to be welded. It also measures internal mismatch, weld crown height, and root weld spacing.</li>
        <li><strong>Digital or infrared pyrometer or temperature sensitive crayons:</strong> Measures preheat and interpass temperatures.</li>
    </ul>
    
    <div class="figure-container">
    <img src="images/api577_figure_15.png" class="figure-image">
        <p>Figure 15—Inspector's Kit</p>
        <p>Courtesy of G.A.I., Gage Co.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_16.png" class="figure-image">
        <p>Figure 16—Bridge Cam Gauge</p>
        <p>Courtesy of G.A.I., Gage Co.</p>
        <p>The products in the photographs on this page are used as examples only, and do not constitute an endorsement of these products by API or a requirement of their use for compliance with the standard.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_17.png" class="figure-image">
        <p>Figure 17—Adjustable Fillet Weld Gauge</p>
        <p>Courtesy of G.A.I., Gage Co.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_18.png" class="figure-image">
        <p>Figure 18—Skew-T Fillet Weld Gauge</p>
        <p>Courtesy of G.A.I., Gage Co.</p>
        <p>The products in the photographs on this page are used as examples only, and do not constitute an endorsement of these products by API or a requirement of their use for compliance with the standard.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_19.png" class="figure-image">
        <p>Figure 19—Weld Fillet Gauge</p>
        <p>Courtesy of G.A.I., Gage Co.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_20.png" class="figure-image">
        <p>Figure 20—Weld Fillet Gauge</p>
        <p>Courtesy of G.A.I., Gage Co.</p>
        <p>The products in the photographs on this page are used as examples only, and do not constitute an endorsement of these products by API or a requirement of their use for compliance with the standard.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_21.png" class="figure-image">
        <p>Figure 21—Weld Size Gauge</p>
        <p>Courtesy of G.A.I., Gage Co.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_22.png" class="figure-image">
        <p>Figure 22—Hi-Lo Gauge</p>
        <p>Courtesy of G.A.I., Gage Co.</p>
        <p>The products in the photographs on this page are used as examples only, and do not constitute an endorsement of these products by API or a requirement of their use for compliance with the standard.</p>
    </div>
    
    <h3>8.4 Magnetic Particle Examination (MT)</h3>
    <h4>8.4.1 General</h4>
    <p>MT is effective in locating surface or near-surface discontinuities of ferromagnetic materials. It is most commonly used to evaluate weld joint surfaces, intermediate checks of weld layers, and back-gouged surfaces of completed welds. Typical types of discontinuities that can be detected using MT, with adequate accessibility, include cracks, lamination, laps, and seams.</p>
    <p>In this method, the weld (and HAZ) is locally magnetized, creating a magnetic field in the material. Finely divided ferromagnetic particles are then applied to the magnetized surface and are drawn to breaks in the magnetic field (causing the formation of north and south poles at the imperfection) resulting from discontinuities, as shown in Figure 23 and Figure 24.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_23.png" class="figure-image">
        <p>Figure 23—Surface-Breaking Discontinuity</p>
        <p>Courtesy of CJ Hellier</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_24.png" class="figure-image">
        <p>Figure 24—Subsurface Discontinuity</p>
        <p>Courtesy of CJ Hellier</p>
    </div>
    
    <p>Figure 23 shows the disruption to the magnetic field caused by a defect open to the surface. Ferromagnetic particles are drawn to the break in the flux field, creating north and south poles. The pattern of the particles may be very sharp and distinct, or diffuse, depending upon several factors including field strength, type of imperfection, and indicator medium. Figure 24 illustrates how a subsurface defect would also disrupt the magnetic lines of flux. The observed indication would not be as clearly defined as would a defect open to the surface. The pattern formed by the particles represents the shape and size of any existing discontinuities, as seen in Figure 25. The particles used during the exam can be either dry or wet, depending upon the type of imperfection being examined and the level of sensitivity required. If the examination is performed in normal lighting, the color of the particles (known as the color-contrast method) should provide adequate contrast to the exam surface. The best results are achieved when the lines of flux are perpendicular to the discontinuity. The inspections should overlap by at least 50 mm (2 in.). Two inspections are typically performed, one parallel to the weld and one perpendicular the weld, to provide the maximum probability of coverage. When a magnetic force is applied to the material, a magnetic flux field is created around and through the material. Discontinuities that are perpendicular to the lines of flux attract the magnetic particles, causing an indication as shown in Figure 26. Figure 27 illustrates the setup for detecting transverse indications. The yoke is placed parallel on the weld to detect discontinuities transverse to the weld. Figure 28 shows the setup for detecting indications that run parallel to the weld. In this case, the yoke is placed across the weld to detect discontinuities parallel to the weld. Imperfections will need to be perpendicular to the magnetic flux field for maximum probability of detection.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_25.png" class="figure-image">
        <p>Figure 25—Weld Discontinuity</p>
        <p>Courtesy of CJ Hellier</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_26.png" class="figure-image">
        <p>Figure 26—Flux Lines</p>
        <p>Courtesy of CJ Hellier</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_27.png" class="figure-image">
        <p>Figure 27—Detecting Discontinuities Transverse to Weld</p>
        <p>Courtesy of CJ Hellier</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_28.png" class="figure-image">
        <p>Figure 28—Detecting Discontinuities Parallel to Weld</p>
        <p>Courtesy of CJ Hellier</p>
    </div>
    
    <p>For added sensitivity, wet fluorescent magnetic particle (WFMT) techniques may be used. With this technique, a filtered blacklight is used to observe the particles, which requires the examination area to be darkened as specified in ASME Section V, Article 7.</p>
    <p>ASME Section V, Article 7, lists requirements for MT. Some codes and specifications may list compliance with these requirements as being mandatory. ASME B31.3 and ASME Section VIII, Division 1, requires MT to be performed in accordance with Article 7. Some of the requirements listed in this article include:</p>
    <ul>
        <li>examination procedure information;</li>
        <li>use of a continuous particle-application method;</li>
        <li>use of one of five magnetization techniques;</li>
        <li>required calibration of equipment;</li>
        <li>two examinations perpendicular to each other;</li>
        <li>maximum surface temperature for examination;</li>
        <li>magnetization currents;</li>
        <li>evaluation of indications in terms of the acceptance standards of the referencing code;</li>
        <li>demagnetization;</li>
        <li>minimum required surface illumination (visible or blacklight) of the part under examination.</li>
    </ul>
    
    <h4>8.4.2 Magnetic Flux Direction Indicator</h4>
    <p>The direction of the magnetic flux can be confirmed by the use of several indicators. One of the most popular indicators is the pie gauge. It consists of eight low-carbon steel segments, brazed together to form an octagonal plate that is copper plated on one side to hide the joint lines (see Figure 29). The plate is placed on the test specimen, adjacent to the weld, during magnetization with the copper side up. The ferromagnetic particles are applied to the copper face and outline the orientation of the resultant field.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_29.png" class="figure-image">
        <p>Figure 29—Pie Gauge</p>
    </div>
    
    <h4>8.4.3 Demagnetization</h4>
    <p>When the residual magnetism in the part could interfere with subsequent processing or usage, demagnetization techniques should be used to reduce the residual magnetic field to within acceptable limits. Care should be taken when performing MT during the welding process. If a residual field is left in a partially completed weld, this field may deflect the weld arc and make it difficult to control the weld deposit.</p>
    
    <h3>8.5 Alternating Current Field Measurement</h3>
    <p>The ACFM technique is an electromagnetic, noncontacting technique that is able to detect and size surface breaking imperfections in a range of different materials and through coatings of varying thicknesses. This technique can be used for inspecting complex geometries such as nozzles, ring-grooves, and grind-out areas. It requires minimal surface preparation and can be used at elevated temperatures up to 900 °F (480 °C). However, it is less sensitive and more prone to operator errors than WFMT. ACFM is used for the evaluation and monitoring of existing cracks.</p>
    <p>ACFM uses a probe similar to an eddy current probe and introduces an alternating current in a thin skin near the surface of any conductor. When a uniform current is introduced into the area under test, if it is free of imperfections, the current is undisturbed. If the area has a crack, the current flows around the ends and the faces of the crack. A magnetic field exists above the surface associated with this uniform alternating current and becomes disturbed if a surface-breaking crack is present.</p>
    <p>The probe is scanned longitudinally along the weld with the front of the probe parallel and adjacent to the weld toe. Two components of the magnetic field are measured: Bx along the length of the defect, which responds to changes in surface current density and gives an indication of depth when the reduction is the greatest; and Bz, which gives a negative and positive response at either end of the defect caused by current-generated poles, providing an indication of length. A physical measurement of defect length indicated by the probe position is then used together with a software program to accurately determine the length and depth of the imperfection.</p>
    <p>During the application of the ACFM technique, actual values of the magnetic field are being measured in real time. These are used with mathematical model look-up tables to eliminate the need for calibration of the ACFM instrument using a calibration piece with artificial defects such as slots.</p>
    
    <h3>8.6 Liquid Penetrant Examination (PT)</h3>
    <h4>8.6.1 General</h4>
    <p>PT is capable of detecting surface-connecting discontinuities in ferrous and nonferrous alloys, as well as nonmetal objects. PT can be used to examine weld joint surfaces, completed welds, and perform intermediate checks of individual weld passes. This technique is commonly employed on austenitic stainless steels where MT is not possible. The examiner should recognize that many specifications limit contaminants in the penetrant materials that could adversely affect the weld or parent materials. Most penetrant manufacturers provide material certifications on the amounts of contaminants (e.g. chlorine, fluorine, sulfur, and halogens).</p>
    <p>Capillary action (a force resulting from adhesion, cohesion, and surface tension in liquids that are in contact with solids, as in a capillary tube) is the basis for the penetrant to be drawn into a material. Reverse capillary action is the principle behind the visualization of indications after the application of developer.</p>
    <p>A limitation of PT is that standard penetrant systems are restricted to a maximum of 125 °F (52 °C), so the weld or material to be inspected must be below this temperature, which significantly slows down the welding operation. Additionally, this method requires extensive clean-up so as not to contaminate the weld surface. High-temperature penetrant systems can be qualified to extend the temperature envelope.</p>
    <p>During PT, the test surface is generally solvent cleaned and coated with a penetrating liquid that seeks surface connected discontinuities. The length of time the penetrant remains on the surface, also known as dwell time, is based upon several factors, primarily the type of imperfection that can be expected to be present. After the excess surface liquid penetrant is carefully removed, a solvent-based powder suspension (developer) is normally applied by spraying. The liquid in any discontinuity bleeds out to stain the powder coating. An indication of depth is possible if the inspector observes and compares the indication bleed-out to the opening size visible at the surface. The greater the bleed-out to surface-opening ratio, the greater the volume of the discontinuity.</p>
    
    <h4>8.6.2 Liquid Penetrant Techniques</h4>
    <p>The two general penetrant techniques approved for use include the color-contrast penetrant technique (normally red in color to contrast with a white background) and the fluorescent penetrant technique, which uses a fluorescing dye that is visible using ultraviolet light, as shown in Figure 30. Fluorescent penetrant techniques are generally used to detect fine linear-type indications. The examination is performed in a darkened area using a filtered ultraviolet light source, commonly referred to as a blacklight.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_30.png" class="figure-image">
        <p>Figure 30—Fluorescent Penetrant Technique</p>
    </div>
    
    <p>Three penetrant systems are available for use with both techniques. They are:</p>
    <ul>
        <li>solvent removable,</li>
        <li>water washable, and</li>
        <li>post emulsifiable.</li>
    </ul>
    <p>Compatibility with base metals, surface profile (welds), and process material should be considered before penetrants are used, since they can be difficult to completely remove.</p>
    <p>ASME Section V, Article 6, Paragraph T-620, lists general requirements for PT. Codes and specifications may list compliance with these requirements as mandatory. API Standard 650, ASME B31.3, and ASME Section VIII, Division 1, require PT to be performed in accordance with ASME Section V, Article 6. Some requirements listed in this article include the following:</p>
    <ul>
        <li>inspection to be performed in accordance with a procedure (as specified by the referencing code section);</li>
        <li>type of penetrant materials to be used;</li>
        <li>details for pre-examination cleaning including minimum drying time;</li>
        <li>dwell time for the penetrant;</li>
        <li>details for removing excess penetrant, applying the developer, and time before interpretation;</li>
        <li>evaluation of indications in terms of the acceptance standards of the referencing code;</li>
        <li>postexamination cleaning requirements;</li>
        <li>minimum required surface illumination (visible or blacklight) of the part under examination.</li>
    </ul>
    
    <h3>8.7 Eddy Current Examination (ET)</h3>
    <h4>8.7.1 General</h4>
    <p>Eddy current inspection is used to detect surface imperfections, and in some cases, subsurface discontinuities in tubing, pipe, wire, rod, and bar stock. ET has limited use in weld inspection. ET can be used as a quick test to determine that components being joined during welding have the same material properties, and as a quick check for imperfections of the weld joint faces. It can also be used to measure the thickness of protective, nonconductive surface coatings and cladding thickness.</p>
    <p>ET uses a magnetic field to create circulating currents in electrically conductive material. Discontinuities in the material alter the magnetically induced fields and present them on the unit's display. Similar to MT, this technique provides the greatest probability of detection when the circulating currents are perpendicular to the discontinuity.</p>
    <p>More information can be found in ASME Section V, Article 8, which addresses ET of tubular products.</p>
    
    <h4>8.7.2 Tangential Eddy Current Examination (TECA)</h4>
    <p>TECA uses an eddy current array to introduce alternating currents into the surface of the tested component to detect and size surface-breaking cracks. The method uses a probe to introduce the current and alert the operator to the presence of defects and their magnitude.</p>
    <p>The method's use of multiplexed tangential coils and pancake coils allows scans of wide surfaces in a single pass to reduce the inspection time.</p>
    
    <h3>8.8 Radiographic Examination (RT)</h3>
    <h4>8.8.1 General</h4>
    <p>RT is a volumetric examination method capable of examining the entire specimen rather than just the surface. It is the historical approach to examine completed welds for surface and subsurface discontinuities. The method uses the change in absorption of radiation by solid metal and in areas of discontinuity (voids). The transmitted radiation causes a permanent image (radiograph) of the weld to be captured on film. Alternate methods can be used to create the image: computed radiography (CR) or digital radiography (DR). Any of the methods will create a "negative image" of the material being examined, as thicker areas will appear lighter while thinner sections will appear darker. Materials with relatively higher density, such as tungsten, will appear much lighter than the weld/base metal. Due to the hazard of radiation and the licensing requirements, the cost of RT can be higher and trained and certified personnel less available than with other NDE methods.</p>
    <p>An NDT examiner interprets and evaluates the radiographs for differences in absorption and transmission results. Radiographic indications display a different density in contrast to the normal background image of the weld or part being inspected. The radiographer also ensures that the film is exposed by the primary source of the radiation and not the undesirable backscatter or secondary radiation exposure.</p>
    <p>The NDT examiner who performs the film interpretation, evaluation, and reporting shall be certified at a minimum to ASNT Level II requirements. However, all personnel performing radiography are required to attend radiation-safety training and comply with the applicable regulatory requirements.</p>
    <p>ASME Section V, Article 2, Paragraph T-220, lists the general requirements for radiographic examination. There are very specific requirements regarding the quality of the produced radiograph, including the sharpness of the image, the ability to prove adequate film density in the area of interest, and sensitivity to the size and type of expected flaws. Requirements listed in Article 2 include:</p>
    <ul>
        <li>method to determine if backscatter is present;</li>
        <li>permanent identification, traceable to the component;</li>
        <li>film selection in accordance with SE-1815;</li>
        <li>designations for hole or wire type image quality indicators;</li>
        <li>suggested radiographic techniques;</li>
        <li>facilities for viewing radiographs;</li>
        <li>calibration (certification of source size).</li>
    </ul>
    <p>The creation of a radiograph is considered acceptable when it meets the required quality features in general terms of sensitivity and density. These factors are designed to ensure that imperfections of a dimension relative to section thickness are revealed.</p>
    
    <h4>8.8.2 Image Quality Indicators (IQIs)</h4>
    <p>Standards for industrial radiography require the use of one or more IQIs to determine that the required sensitivity has been achieved. The IQI was previously called a penetrameter, but this term is no longer used in most codes. To determine radiographic sensitivity, the required plaque-type hole (and outline) or wire, as specified by the governing code, must be clearly visible on the radiograph. Mistakes with IQI selection can have much greater impact on the interpretation of radiographs of thinner wall pipe where large root pass imperfections can significantly reduce the strength and integrity of a weld.</p>
    <p>IQIs are tools used in industrial radiography to establish the quality level of the radiographic technique, but they are not used to determine the size of an imperfection. IQIs are selected based on the following:</p>
    <ul>
        <li>material being radiographed: the IQI must be made from material that is radiographically similar to that being radiographed;</li>
        <li>thickness of the base material plus weld reinforcement (internal and external): the thickness of any backing ring or strip is not a consideration in IQI selection.</li>
    </ul>
    <p>There are two general types of IQIs.</p>
    <p>Wire-type IQIs are constructed of an array of (generally) six parallel wires of specified diameters encased in plastic. They are made of material that is radiographically similar to the component being radiographed. Wire-type IQIs are placed on and perpendicular to the weld prior to the exposure of a radiograph. The diameter of the essential wire, based upon code requirements as a function of thickness, visible as a lighter white image on the radiograph, documents that the radiographic technique has the required sensitivity, as a function of contrast and definition. The specific wire that is to be clearly visible on an acceptable radiograph is known as the essential wire and it is specified by the standard. Wire-type IQIs are most often placed perpendicular to the center line of the weld with the required sensitivity based on weld thickness.</p>
    <p>Hole-type IQIs are plaques (strips of metal) of known thickness with holes of a specified diameter drilled or punched through the sheet. They are made of material that is radiographically similar to the component being radiographed. The thicknesses of hole-type IQIs are specified to represent approximately 2 % or 4 % of the thickness of the object being radiographed. The holes in the IQI are projected on a radiograph as darker (black or gray) spots. The ability to see the plaque outline and the diameter of the required hole visible as a darker image on the radiograph documents the sensitivity of the radiographic technique. The diameters of the holes in hole-type IQIs are a multiple of the thickness of the sheet. Common hole diameters are one, two, and four times the thickness (1T, 2T, and 4T) of the IQI, as shown in Figure 31. Hole-type IQIs are placed adjacent to the weld either on the parent material or on a shim having a thickness equivalent to the weld combined reinforcement (internal and external).</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_31.png" class="figure-image">
        <p>Figure 31—IQI Common Hole Diameters</p>
    </div>
    
    <p>For a pipe weld thickness of 0.312 in. (7.9 mm), a No. 15 ASTM IQI with a thickness of 0.015 in. (0.38 mm) as shown in Figure 32 would be required. See Table 7 for IQI numbers for other thicknesses. This table illustrates the specified thickness and number of ASTM E94 IQIs for all thickness ranges, and summarizes the essential hole diameter requirements for hole-type IQIs.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_32.png" class="figure-image">
        <p>Figure 32—IQI</p>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 7—ASTM E94 IQIs</caption>
            <thead>
                <tr>
                    <th>Pipe Wall or Weld Thickness<br>in. (mm)</th>
                    <th>No.</th>
                    <th>Essential Hole Diameter<br>in. (mm)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>0 to 0.250 (0 to 5.6)</td><td>12</td><td>0.025 (0.63)</td></tr>
                <tr><td>> 0.250 to 0.375 (5.8 to 9.5)</td><td>15</td><td>0.030 (0.76)</td></tr>
                <tr><td>> 0.375 to 0.500 (9.5 to 12.7)</td><td>17</td><td>0.035 (0.89)</td></tr>
                <tr><td>> 0.500 to 0.750 (12.7 to 19.0)</td><td>20</td><td>0.040 (1.02)</td></tr>
                <tr><td>> 0.750 to 1.000 (19.0 to 25.4)</td><td>25</td><td>0.050 (1.27)</td></tr>
                <tr><td>> 1.000 to 2.000 (25.4 to 50.8)</td><td>30</td><td>0.060 (1.52)</td></tr>
            </tbody>
        </table>
    </div>
    
    <p>The hole that is required to be visible on an acceptable radiograph is called the essential hole. Each size of hole-type IQI is identified by a number that is related to the sheet thickness in inches. For example, a No. 10 IQI is 0.010 in. (0.25 mm) thick while a No. 20 is 0.020 in. (0.51 mm) thick.</p>
    
    <h4>8.8.3 Radioactive Source Selection</h4>
    <p>For weld inspection, iridium 192, cobalt 60, and selenium 75 radioactive isotopes are used. X-ray machines may also be used. Iridium 192 is normally used for performing radiography on steel with a thickness range of 0.25 in. to 3 in. (6 mm to 75 mm). Cobalt 60 is used for steel thickness of 1.5 in. to 7 in. (38 mm to 175 mm). The minimum or maximum thickness that can be radiographed for a given material is determined by demonstrating that the required radiographic sensitivity has been documented.</p>
    
    <h4>8.8.4 Radiographic Film</h4>
    <p>Although digital recording of radiography is sometimes used, radiographic film Class I or II is extensively used for industrial RT. The film is required to be of a sufficient length and width to allow a minimum of 1 in. (25 mm) on consecutive circumferential exposures, and 3/4 in. (19 mm) coverage on either side of the weld. Film should be stored in a cool, dry, clean area away from the exposure area, where the emulsion cannot be affected by heat, moisture, or radiation.</p>
    <p>An industry standard is to select a radiographic film capable of providing the required radiographic quality level in the most expedient timeframe. There are several options with respect to industrial radiographic film selection. Radiographic film with an ultrafine (smaller) grained structure is capable of providing very high contrast with excellent definition. This film is generally known as Class I Film. Radiographic film with a larger grain structure has a resultant lower contrast and definition, and is known as Class 2 film. Because the grains in Class 1 film are much smaller than those in Class 2 film, the exposure times for Class 1 film are longer than those of Class 2 film. The tradeoff of increased quality versus reduced exposure time must be evaluated when selecting radiographic film for each specific application.</p>
    
    <h4>8.8.5 Film Processing</h4>
    <p>Exposed film can either be manually processed or the examiner may use an automatic processor. Typical development time is 5 to 8 min at 68 °F (20 °C). When the developer temperature is higher or lower, the developing time is adjusted; however, processing time and temperature must be in accordance with the chemical manufacturer's recommendations. Automatic processing consistently produces radiographs of desired quality. The chemicals used in processing (developer, stop bath, fixer, and rinse water) are changed on a regular basis to maintain quality requirements.</p>
    
    <h4>8.8.6 Surface Preparation</h4>
    <p>Surface conditions that could mask an imperfection, if visually detected by the radiographer prior to radiography, should be remedied prior to exposure. Weld ripples or other irregularities on the inside, where accessible, or on the outside should be removed so the surface feature cannot be confused with the image of a discontinuity.</p>
    
    <h4>8.8.7 Radiographic Identification</h4>
    <p>The identification information on all radiographs should be plainly and permanently produced, traceable to contract, manufacturer, date, and to component, weld or weld seam, and part numbers as appropriate, and should not obscure any area of interest. This is typically accomplished using lead characters. Location markers should also appear on the film identifying the area of coverage.</p>
    
    <h4>8.8.8 Radiographic Techniques</h4>
    <h4>8.8.8.1 General</h4>
    <p>The most effective technique from both quality and efficiency standpoints is one in which the radiation passes through a single thickness of the material being radiographed and the film is in contact with the surface opposite the source side. Other techniques may be used as the referencing code or situation dictates. Regardless of the technique used, the goal is to achieve the highest possible quality. The IQI should be placed according to the referencing code or specification. Placing the IQI as close to the weld as possible without interfering with the weld image is a basic requirement of all codes and specifications.</p>
    <p>A technique should be chosen based upon its ability to produce clear images of discontinuities, especially those that may not be oriented in a favorable direction to the radiation source. Radiography is extremely sensitive to the orientation of tight planar discontinuities such as cracks. If a tight planar discontinuity is expected to be at an angle to the source of the radiation, it may be difficult or impossible to detect. The nature, location, and orientation of discontinuities should always be a major factor in establishing the technique.</p>
    
    <h4>8.8.8.2 Single-Wall Exposure, Single-Wall Viewing Technique</h4>
    <p>A single-wall exposure technique should be used whenever practical. In the single-wall technique, the radiation passes through only one wall of the material or weld, which is viewed for acceptance on the radiograph (see Figure 33). An adequate number of exposures should be made to demonstrate that the minimum required coverage has been obtained.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_33.png" class="figure-image">
        <p>Figure 33—Single-Wall Techniques</p>
    </div>
    
    <h4>8.8.8.3 Double-Wall Exposure, Single-Wall Viewing Technique</h4>
    <p>A technique may be used in which the radiation passes through two walls and only the weld on the film side is evaluated. An adequate number of exposures should be made to demonstrate that the required coverage is met for circumferential welds (materials). A minimum of three exposures taken at 120° to each other should be made.</p>
    
    <h4>8.8.8.4 Double-Wall Exposure, Double-Wall Viewing Technique</h4>
    <p>When it is not practical to use a single-wall technique, a double-wall technique should be used.</p>
    <p>For materials and welds in components having a nominal pipe size (NPS) of 3 [outside diameter of 3.5 in. (90 mm) or less], a technique may be used in which the radiation passes through two walls and the weld (material) in both walls is viewed for acceptance on a single radiograph. For double-wall viewing of welds, the radiation beam may be offset from the plane of the weld at an angle sufficient to separate the images of the source-side portions and the film-side portions of the weld so there is no overlap of the areas to be interpreted (see Figure 34). When complete coverage is required, a minimum of two exposures taken at 90° to each other should be made of each weld joint.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_34.png" class="figure-image">
        <p>Figure 34—Double-Wall Techniques</p>
    </div>
    
    <p>Alternatively, the weld may be radiographed with the radiation beam positioned such that both walls are superimposed. When complete coverage is required, a minimum of three exposures taken at either 60° or 120° to each other should be made for each weld joint.</p>
    <p>Due to inherent problems including geometric unsharpness, RT of fillet welds is not recommended.</p>
    
    <h4>8.8.8.5 Storage of Film and Other Imaging Media</h4>
    <p>All unexposed films shall be stored in a clean, dry place where the conditions will not detrimentally affect the emulsion. If any question arises about the condition of the unexposed film, sheets from the front and back of each package or a length of film equal to the circumference of each original roll shall be processed in the normal manner without exposure to light or radiation. If the processed film shows fog, the entire box or roll from which the test film was removed shall be discarded, unless additional tests prove that the remaining film in the box or roll is free from pre-exposure fog exceeding 0.30 H&D transmitted density for transparent-based film or 0.05 H&D reflected density for opaque-based film. (H&D refers to the Hurter–Driffield method of defining quantitative blackening of film.)</p>
    
    <h4>8.8.9 Evaluation of Radiographs</h4>
    <h4>8.8.9.1 General</h4>
    <p>The final step in the radiographic process is the evaluation of the radiograph. Accurate film interpretation is the most essential step in the RT process; it requires hours of reviewing and the understanding of principles regarding the nature of ionizing radiation as well as the different types of images and conditions associated in industrial radiography. The interpreter should be aware of different welding processes and the discontinuities associated with those processes. The various discontinuities found in weldments may not always be readily detectable. For example, rounded indications such as porosity, slag, and inclusions have a much greater probability of detection than planar indications such as cracks, LOF, or overlap. A weld crack is generally tight and not always detectable by radiography unless its orientation is in the offset relative to the direction of the radiation. For example, a radiographic source that is offset ±5° from the weld has a lower probability of detecting a crack in a weld where the source is offset 10° from the weld. LOF is typically narrow and linear, and it tends to be straighter than a crack. In many cases, LOF is located at the weld bevel angle or between two subsequent weld bead passes. This may add to the degree of difficulty in identifying this condition.</p>
    
    <h4>8.8.9.2 Facilities for Viewing Radiographs</h4>
    <p>Viewing facilities need to provide subdued background lighting of an intensity sufficient to avoid troublesome reflections, shadows, or glare on the radiograph. Equipment used to view radiographs for interpretation needs to provide a light source sufficient for the weld, base metal, and essential IQI hole or wire to be visible through the specified density range. The viewing conditions should be such that the light from around the outer edge of the radiograph or coming through low-density portions of the radiograph does not interfere with the interpretation. Low-power magnification devices (1.5x to 3x) may also be used to aid in film interpretation and evaluation, but high magnification also enhances the graininess of the film. For example, comparators with scales etched into the glass offer enhanced magnification and measuring capabilities.</p>
    
    <h4>8.8.9.3 Quality of Radiographs</h4>
    <p>Radiographs should be free from mechanical, chemical, or other blemishes to the extent that they do not mask and are not confused with the image of any discontinuity in the area of interest. A radiograph with any blemishes in the area of interest shall be discarded and the area radiographed again.</p>
    <p>Definition of the area of interest is often commonly misunderstood and the subject of confusion. Many of the common codes and standards in the hydrocarbon industry do not actually define the area of interest, which leads to misalignment between inspectors and fabricators. ASTM E1316 states "the specific portion of a radiograph that needs to be evaluated". This is the approach generally preferred by inspectors, and it gives the inspector the final decision to identify the area of interest. ASME Section XI for the nuclear industry has a more practical guidance of 1t where t is the nominal thickness of the component being joined. This provides a minimum recommended guidance for inspectors reviewing radiographs.</p>
    
    <h4>8.8.9.4 Radiographic Density</h4>
    <p>Film density is the quantitative measure of film blackening as a result of exposure and processing. Clear film has a zero density value. Exposed film that allows 10 % of the incident light to pass through has a 1.0 film density. A film density of 2.0 H&D, 3.0 H&D, and 4.0 H&D allows 1 %, 0.1 %, and 0.01 %, respectively, of the incident light to pass through.</p>
    <p>The transmitted film density through the radiographic image through the body of the hole-type IQI, or adjacent to the wire IQI, in the area of interest should be within the range 1.8 H&D to 4.0 for X-rays and 2.0 H&D to 4.0 H&D for gamma rays. Adequate radiographic density is essential; rejectable conditions in a weld may be undetectable if slight density variations in the radiographs are not observed.</p>
    <p>A densitometer or step wedge comparison film is used to measure or estimate the darkness (density) of the film, respectively. A densitometer is an electronic instrument calibrated using a step tablet or step wedge calibration film traceable to a national standard. The step wedge comparison film is a step wedge that has been documented to have a specific H&D density by examination using a calibrated densitometer.</p>
    <p>The density of the radiograph is measured through the IQI. Several density readings should be taken at random locations in the area of interest (excluding areas having discontinuities). The density range in the area of interest shall not vary more or less than a specified percentage of the base density as defined in the code or specification.</p>
    <p>It is a good practice to process an unexposed piece of film daily to determine the pre-exposure condition of the radiographic film.</p>
    
    <h4>8.8.9.5 Backscatter Radiation</h4>
    <p>Radiation that passes through the object and film can be reflected back towards the film (a phenomenon known as backscatter). A lead letter "B" with a minimum dimension of 1/2 in. (12 mm) and 1/16 in. (1.5 mm) thickness is typically attached to the back of each film holder/cassette during each exposure to determine if backscatter radiation is exposing the film. If a lighter density image of the letter "B" appears on any radiograph of a darker background, protection from scatter radiation is considered insufficient and the radiograph is considered unacceptable. A darker density image of the "B" on a lighter background is not cause for rejection of the radiograph.</p>
    <p>There is a common misconception by those not trained in industrial radiography that the letter "B" always appears on a radiograph. This is in fact not correct, and the opposite is true. Where there is no medium besides free air to cause backscatter, there will be insufficient radiation reflected back to the film or imaging device to produce an image.</p>
    
    <h4>8.8.9.6 Interpretation</h4>
    <p>Radiographic interpretation is the skill of extracting the maximum information from a radiographic image. This requires subjective judgment by the interpreter and is influenced by the interpreter's knowledge of:</p>
    <ul>
        <li>the characteristics of the radiation source and energy level(s) with respect to the material being examined;</li>
        <li>the characteristics of the recording media in response to the selected radiation source and the energy level(s);</li>
        <li>the processing of the recording media with respect to the image quality;</li>
        <li>the product form, welding process, and geometric configuration of the object being radiographed;</li>
        <li>the possible and most probable types of discontinuities that may occur in the test object;</li>
        <li>the possible variations of the images of the discontinuities as a function of radiographic geometry and other factors; and</li>
        <li>the acceptance criteria that are to be applied for accept/reject determination.</li>
    </ul>
    <p>Because radiographic interpreters have varying levels of knowledge and experience, training becomes an important factor for improving the agreement levels between interpreters. In applications where quality of the final product is important for safety or reliability, more than one qualified interpreter should evaluate the radiographs. Figures 35–46 are radiographic weld images illustrating some typical welding discontinuities and defects.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_35.png" class="figure-image">
        <p>Figure 35—Incomplete or Lack of Penetration (LOP)</p>
        <p>NOTE 1 The edges of the pieces have not been welded together, usually at the bottom of single V-groove welds.<br>NOTE 2 Radiographic image: A darker density band, with straight parallel edges, in the center of the width of the weld image.<br>NOTE 3 Welding process: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_36.png" class="figure-image">
        <p>Figure 36—Interpass Slag Inclusions</p>
        <p>NOTE 1 Usually caused by nonmetallic impurities that solidify on the weld surface and are not removed between weld passes.<br>NOTE 2 Radiographic image: An irregularly shaped darker density spot usually slightly elongated and randomly spaced.<br>NOTE 3 Welding process: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_37.png" class="figure-image">
        <p>Figure 37—Cluster Porosity</p>
        <p>NOTE 1 Rounded or slightly elongated voids grouped together.<br>NOTE 2 Radiographic image: Rounded or slightly elongated darker density spots in clusters randomly spaced.<br>NOTE 3 Welding process: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_38.png" class="figure-image">
        <p>Figure 38—Lack of Side Wall Fusion</p>
        <p>NOTE 1 Elongated voids between the weld beads and the joint surfaces.<br>NOTE 2 Radiographic image: Elongated parallel, or single, darker density lines sometimes with darker density spots dispersed along the LOF lines which are very straight in the lengthwise direction and not winding like elongated slag lines.<br>NOTE 3 Welding process: GMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_39.png" class="figure-image">
        <p>Figure 39—Elongated Slag (Wagon Tracks)</p>
        <p>NOTE 1 Impurities that solidify on the surface after welding and were not removed between passes.<br>NOTE 2 Radiographic image: Elongated, parallel, or single darker density lines, irregular in width and slightly winding in the lengthwise direction.<br>NOTE 3 Welding process: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_40.png" class="figure-image">
        <p>Figure 40—Burn-Through</p>
        <p>NOTE 1 A severe depression or a crater-type hole at the bottom of the weld, but usually not elongated.<br>NOTE 2 Radiographic image: A localized darker density with fuzzy edges in the center of the width of the weld image. It may be wider than the width of the root pass image.<br>NOTE 3 Welding process: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_41.png" class="figure-image">
        <p>Figure 41—Offset or Mismatch With Lack of Penetration (LOP)</p>
        <p>NOTE 1 A misalignment of the pieces to be welded and insufficient filling of the bottom of the weld or "root area".<br>NOTE 2 Radiographic image: An abrupt density change across the width of the weld image with a straight longitudinal darker density line at the center of the width of the weld image along the edge of the density change.<br>NOTE 3 Welding process: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_42.png" class="figure-image">
        <p>Figure 42—Excessive Penetration (Icicles, Drop-Through)</p>
        <p>NOTE 1 Extra metal at the bottom (root) of the weld.<br>NOTE 2 Radiographic image: A lighter density in the center of the width of the weld image, either extended along the weld or in isolated circular "drops".<br>NOTE 3 Welding process: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_43.png" class="figure-image">
        <p>Figure 43—Internal (Root) Undercut</p>
        <p>NOTE 1 A gouging out of the parent metal, alongside the edge of the bottom or internal surface of the weld.<br>NOTE 2 Radiographic image: An irregular darker density near the center of the width of the weld image along the edge of the root pass image.<br>NOTE 3 Welding process: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_44.png" class="figure-image">
        <p>Figure 44—Transverse Crack</p>
        <p>NOTE 1 A fracture in the weld metal running across the weld.<br>NOTE 2 Radiographic image: feathery, twisted line of darker density running across the width of the weld image.<br>NOTE 3 Welding process: GIAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_45.png" class="figure-image">
        <p>Figure 45—Tungsten Inclusions</p>
        <p>NOTE 1 Random bits of tungsten fused into but not melted into the weld metal.<br>NOTE 2 Radiographic image: Irregular shaped lower density spots randomly located in the weld image.<br>NOTE 3 Welding process: GIAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_46.png" class="figure-image">
        <p>Figure 46—Root Pass Aligned Porosity</p>
        <p>NOTE 1 Rounded and elongated voids in the bottom of the weld aligned along the weld centerline.<br>NOTE 2 Radiographic image: Rounded and elongated darker density spots, that may be connected, in a straight line in the center of the width of the weld image.<br>NOTE 3 Welding process: GMAW.</p>
    </div>
    
    <h4>8.8.10 Radiographic Examination Records</h4>
    <p>The information reported is to include, but not be limited to, the following:</p>
    <ul>
        <li>job/contract number/identification;</li>
        <li>location marker placement;</li>
        <li>number of radiographs (exposures);</li>
        <li>X-ray voltage or isotope type used;</li>
        <li>X-ray machine focal spot size or isotope effective focal spot source size;</li>
        <li>base material type and thickness, weld reinforcement thickness;</li>
        <li>source-to-object distance;</li>
        <li>distance from source side of object to film;</li>
        <li>film manufacturer and type/designation;</li>
        <li>number of films in each film holder/cassette;</li>
        <li>single- or double-wall exposure;</li>
        <li>single- or double-wall viewing;</li>
        <li>type of IQI and the required hole/wire number designation;</li>
        <li>procedure and/or code references, examination results;</li>
        <li>date of examination, name and qualification level of examiners.</li>
    </ul>
    <p>Any drawings, component identification, or additional details need to be provided to the customer's representative, along with the examination report. A sample radiography report is provided in Annex E.</p>
    
    <h3>8.9 Ultrasonic Examination (UT)</h3>
    <h4>8.9.1 General</h4>
    <p>UT is capable of detecting surface and subsurface discontinuities. A sound beam in the ultrasonic frequency range (>20,000 cycles per second) travels a straight line through the metal and reflects from an interface. For weld inspection, this high-frequency sound beam is introduced into the weld and HAZ along a predictable path, which, upon reflection or refraction from an imperfection or geometric feature, produces a response that is processed and presented on the display. These images are presented such that they might give the inspector both the size and positional information of the imperfection.</p>
    <p>Straight-beam techniques are used for thickness evaluation or to check for lamination, and/or other conditions which may prevent angle beams from examining the weld. Straight-beam (or zero degree) transducers direct a sound beam from an accessible surface of the test piece to a boundary or interface that is parallel or near parallel to the contacted surface. The time it takes for the sound to make a round trip through the piece is displayed on the ultrasonic instrument. There are several different ways that straight-beam ultrasonic information can be displayed, as shown in Figures 47–49, reprinted courtesy of GE Inspection. These displays represent an accurate thickness of the test piece.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_47.png" class="figure-image">
        <p>Figure 47—A-Scan</p>
        <p>Figure 48—B-Scan</p>
        <p>Figure 49—C-Scan</p>
        <p>Courtesy of GE Inspection</p>
    </div>
    
    <p>Shear wave or angle beam techniques are employed for resolution of discontinuities in welds. The sound beam enters the area of the weld at a known angle. If the sound reflects from a discontinuity, a portion of the sound beam returns to the transducer where it is displayed on the ultrasonic instrument. These images can be displayed in a number of ways to aid in evaluation. From this display, information such as the size, location, and type of discontinuity can be determined.</p>
    
    <h4>8.9.2 Types of Ultrasonic Displays</h4>
    <h4>8.9.2.1 A-Scan Display</h4>
    <p>The A-scan, as shown in Figure 47, is the most common display type. It shows the response along the path of the sound beam for a given position of the probe. It shows the amplitude of the signal coming from the discontinuity as a function of time. The x axis (right) represents the time of flight and indicates the depth of a discontinuity or back wall (thickness). The y axis shows the amplitude of the reflected signals (echoes) and can be used to estimate the size of a discontinuity compared to a known reference reflector used during instrument calibration.</p>
    
    <h4>8.9.2.2 B-Scan Display</h4>
    <p>The B-scan display (see Figure 48) shows a cross-sectional view of the object under test by scanning the probe along one axis. The horizontal axis (left) relates to the position of the probe as it moves along the surface of the object and provides information as to the lateral location of the discontinuity. Echo amplitude is usually indicated by the color or grayscale intensity of echo indications.</p>
    
    <h4>8.9.2.3 C-Scan Display</h4>
    <p>The C-scan display (see Figure 49) shows a plan view of the test object. The image is produced by mechanically or electronically scanning in an x–y plane. The x and y axes form a coordinate system that indicates probe/discontinuity position. Color or grayscale intensity can be used to represent depth of discontinuity or echo amplitude.</p>
    
    <h4>8.9.2.4 D-Scan Display</h4>
    <p>The D-scan display (see Figure 50) shows a through-thickness view showing a cross-section of the test object perpendicular to the scanning surface and perpendicular to the projection of the beam axis on the scanning surface. The D-scan display is exactly like a B-scan display except that the view is oriented perpendicular to B-scan view in the plane of the plate. The D-scan allows quick discrimination of indications along a weld by presenting their position in depth from the scanning surface. An example of the relationship between all four common ultrasonic displays is shown in Figure 50.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_50.png" class="figure-image">
        <p>Figure 50—D-Scan</p>
    </div>
    
    <h4>8.9.2.5 Phased Array S-Scan Display</h4>
    <p>The S-scan or sector display (see Figure 51) shows two-dimensional imaging of ultrasonic reflectors by analyzing data then plotting information from a multitude of angles simultaneously. The image is a cross sectional view of the area where the ultrasound passes through. Location and size information can be measured for any reflectors that are in the sectorial scan.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_51.png" class="figure-image">
        <p>Figure 51—S-Scan</p>
    </div>
    
    <p>Phased array ultrasonics accomplishes this by using a transducer that contains multiple elements, commonly 8 to 128, that are excited at intervals to create constructive interference in the wavefront of ultrasonic energy. This constructive interference is controlled by the amount of time delay in element excitation and can steer the sound through a range of angles. This array of beam angles is then plotted to create the sector scan. The ultrasonic energy provides responses in a pulse-echo fashion as with conventional straight-beam and angle beam techniques.</p>
    
    <h4>8.9.2.6 Time of Flight Diffraction (TOFD) B-Scan and D-Scan Displays (see Figure 52 and Figure 53)</h4>
    <p>The B-scan and D-scan displays are a different format than the B-scan and D-scan displays acquired in any other ultrasonic technique utilizing information provided in a pulse echo fashion. TOFD B-scan and D-scan images provide defect sizing information for through-wall extent by using diffracted signals rather than pulse echo signals. The TOFD B-scan and D-scan displays are created by stacking A-scan displays at a preset interval or collection step and viewing the data in a grayscale image where 100 % amplitude of the sine wave in either the positive or negative direction is plotted as all black or all white with gray images of signals less than 100 % amplitude.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_52.png" class="figure-image">
        <p>Figure 52—TOFD D-Scan Display</p>
    <img src="images/api577_figure_53.png" class="figure-image">
        <p>Figure 53—TOFD B-Scan</p>
    <img src="images/api577_figure_54.png" class="figure-image">
        <p>Figure 54—TOFD Transducer Arrangement and Ultrasonic Energy Beam Propagation</p>
    </div>
    
    <p>TOFD passes sound energy through a weld area by utilizing a transmitting transducer on one side of the weld and a receiving transducer on the other (see Figure 54). Any changes in the material, such as discontinuities, are vibrated by the induced ultrasonic energy. This vibration of discontinuities produces diffracted signals from the discontinuity that are then received by the receiving transducer.</p>
    <p>The set of TOFD probes can be manipulated along a weld or across a weld to create scans. Standard TOFD weld inspection is accomplished by moving TOFD probes along the weld, with one transducer on each side of the weld, where the ultrasonic energy is perpendicular to the weld. This is a TOFD D-scan or nonparallel scan. The TOFD probes can also be manipulated across an area parallel to the sound path to evaluate an indication from a position 90° from the perpendicular imaging. This is a TOFD B-scan or parallel scan. This can only be accomplished if the weld cap has been removed for the purpose of weld inspection, and is most often used to provide more accurate imperfection location information once they have been located with the TOFD D-scan.</p>
    
    <h4>8.9.2.7 Requirements for Ultrasonic Inspection</h4>
    <p>ASME Section V, Article 4, lists the general requirements for ultrasonic examination. Codes and specifications may indicate that compliance with these requirements is mandatory. ASME B31.3 and ASME Section VIII, Division 1, requires ultrasonic examination be performed in accordance with ASME Section V, Article 4, which requires a written procedure to be qualified and followed. Some procedural requirements to be included are:</p>
    <ul>
        <li>weld, base metal types, and configurations to be examined;</li>
        <li>technique (straight or angle beam);</li>
        <li>couplant type;</li>
        <li>ultrasonic instrument type;</li>
        <li>instrument linearity requirements;</li>
        <li>description of calibration;</li>
        <li>calibration block material and design;</li>
        <li>inspection surface preparation;</li>
        <li>scanning requirements (parallel and perpendicular to the weld);</li>
        <li>scanning techniques (manual or automated);</li>
        <li>evaluation requirements;</li>
        <li>data to be recorded;</li>
        <li>reporting of indications in terms of the acceptance standards of the referencing code;</li>
        <li>postexamination cleaning.</li>
    </ul>
    
    <h4>8.9.3 Ultrasonic Examination System Calibration</h4>
    <h4>8.9.3.1 General</h4>
    <p>Ultrasonic examination system calibration is the process of adjusting the controls of the ultrasonic instrument such that the UT display of the sound path is linear. Calibration is to ensure that there is sufficient sensitivity to detect discontinuities of the size and type expected in the product form and process.</p>
    <p>The inspection system includes the examiner, the ultrasonic instrument, cabling, the search unit including wedges or shoes, couplant, and a reference standard. The search unit transducer should be of a size, frequency, and angle capable of detecting the smallest rejectable defect expected to be in the part being examined. The ultrasonic instrument is required to meet the requirements of ASME Section V, Article 5, Paragraph T-530, and should provide the functionality to produce the required display of both the calibration reflectors and discontinuities located during the examination.</p>
    <p>The reference standard (calibration block) should have the same composition and heat treatment condition as the product being examined. It should also have the same surface condition as the part being examined. The reference standard should be of an acceptable size and have known reflectors of a specified size and location. These reflectors should be acceptable to the referencing code. ASME Section V, Article 4, Figure T-434.2.1 and Figure T-434.3, details the requirements for basic calibration block construction.</p>
    <p>Calibration system checks are required to be performed prior to and at the completion of an examination. In addition, a system check is required with any change in the search unit, cabling, and examiner, and after a specified time frame, such as four hours. The temperature of the calibration standard should be within 25 °F (14 °C) of the part to be examined. If the temperature falls out of that range, the reference standard is brought to within 25 °F (14 °C), and a calibration check should be performed. For high-temperature work, special high temperature transducers and couplants are usually necessary. Consideration should be given to the fact that temperature variations within the wedge or delay line can cause beam angle changes or alter the delay on the time base. System checks are typically performed at a minimum of every four hours during the process of examination, but can be done more often at the examiner's discretion after any instance of suspected system irregularity.</p>
    <p>If, during a system calibration check, it is determined that the ultrasonic equipment is not functioning properly, all areas tested since the last successful calibration should be re-examined.</p>
    
    <h4>8.9.3.2 Echo Evaluation With Distance Amplitude Correction</h4>
    <p>The distance amplitude correction (DAC) curve allows an echo evaluation of unknown reflectors by comparison of the echo height with respect to the DAC (%DAC).</p>
    <p>Due to attenuation and beam divergence inherent to all materials, the echo amplitude from a given size reflector decreases as the distance from the probe increases. To set up a DAC curve, the maximum response from a specified reference reflector (e.g. flat bottom or side drilled hole) is recorded at different depths over the required test range. The calibration block with reference reflectors should be of the same material as the part under test. The curve is plotted through the peak points of the echo signals from the reflectors as shown in Figure 55. The curve represents the signal amplitude loss based upon distance, from the same size reference reflector using a given probe. The gain setting used to establish the DAC during the initial calibration is referred to as the primary reference level sensitivity. Evaluation is performed at this sensitivity level.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_55.png" class="figure-image">
        <p>Figure 55—DAC Curve for a Specified Reference Reflector</p>
    </div>
    
    <p>Unknown reflectors (flaws) are evaluated by comparing their echo amplitude against the height of the DAC curve (i.e. 50 % DAC, 80 % DAC, etc.) at the sound path distance of the unknown reflector (see Figure 56). Material characteristics and beam divergence are automatically compensated for because the reference block and the test object are made of the same material, and have the same heat treatment and surface condition.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_56.png" class="figure-image">
        <p>Figure 56—DAC Curve for an Unknown Reflector</p>
    </div>
    
    <h4>8.9.4 Surface Preparation</h4>
    <p>Prior to ultrasonic examination, all scan surfaces should be free from weld spatter, surface irregularities, and foreign matter that might interfere with the examination. The weld surface should be prepared such that it permits a meaningful examination.</p>
    
    <h4>8.9.5 Examination Coverage</h4>
    <p>The volume of the weld, HAZ, and a portion of the adjacent base material on both sides of the weld should be examined by moving the search unit over the examination surface in order to scan the entire examination volume. Each pass of the transducer should overlap the previous pass by at least 10 % of the transducer element dimension. The rate of search unit movement should not exceed 6 in. (150 mm) per second unless the calibration was verified at an increased speed, and the instrument is capable of resolving imperfections at that speed. In many cases, the search unit is oscillated from side to side to increase the chances of detecting fine cracks that are oriented other than perpendicular to the sound beam.</p>
    
    <h4>8.9.6 Straight Beam Examination</h4>
    <p>A straight beam examination should be performed adjacent to the weld to detect reflectors that would interfere with the angle beam examining the weld, such as a lamination in the base material. All areas having this type of reflector should be identified as the system response in these areas will be different from that in unaffected locations.</p>
    
    <h4>8.9.7 Angle Beam Examination</h4>
    <h4>8.9.7.1 General</h4>
    <p>Typically, there are two different angle beam examinations performed on a weld: a scan for reflectors that are oriented parallel to the weld, and a scan for reflectors that are oriented transverse to the weld. In both cases, the scanning should be performed at a gain setting at least two times (+6 dB) the reference level sensitivity established during calibration. Evaluation of indications, however, should be performed at the primary reference level sensitivity. In both cases, the search unit should be manipulated such that the ultrasonic energy passes through the required volume of the weld and HAZ.</p>
    <p>During examination for reflectors that are oriented parallel to the weld, the sound beam is directed at approximate right angles to the weld, preferably from both sides of the weld. For reflectors that are oriented transverse to the weld, the sound beam is directed parallel to the weld and a scan is performed in one direction around the weld, then the search unit is turned 180° and another scan is performed until the ultrasonic energy has passed through the required volume of weld and HAZ in two directions.</p>
    <p>To inspect for transverse flaws, the angle beam transducers should be rotated 90°, or additional transverse flaw inspection using other techniques may be performed to supplement automated ultrasonic weld inspection techniques.</p>
    
    <h4>8.9.7.2 Supplemental Angle Beam Examination</h4>
    <p>When inspecting a weld with TOFD, the presence of the lateral wave and back-wall indication signals may obscure detection of flaws present in these zones. ASME BPVC, Section V, requires that the weld's near and far surfaces (i.e. both top and bottom surfaces) be examined by angle beam with the angles chosen that are closest to being perpendicular to the weld interfaces. This examination may be performed manually or mechanized; if mechanized, the data should be collected in conjunction with the TOFD examination.</p>
    
    <h4>8.9.8 Automated Ultrasonic Examination (AUT)</h4>
    <p>Volumetric Inspection of welds may be performed using one of the four automated ultrasonic weld inspection techniques.</p>
    <ul>
        <li><strong>Pulse Echo Raster Scanning:</strong> This technique inspects with zero degree compression and two angle beam transducers interrogating the weld from either side simultaneously. The compression transducers examine for corrosion or laminar defects in the base metal and the angle beam transducers scan the volume of the weld metal.</li>
        <li><strong>Pulse Echo Zoned Inspection:</strong> The zoned inspection is a line scan technique. The technique uses an array of transducers on either side of the weld with the transducer angles and transit time gates set to ensure that the complete volume of the weld is inspected.</li>
        <li><strong>Time of Flight Diffraction (TOFD):</strong> This is a line scan technique used in the pitch-catch mode. The multimode transducers are used to obtain the maximum volume inspection of the weld region. More than one set of transducers may be required for a complete volumetric inspection.</li>
        <li><strong>Phased Array (PA) Inspection:</strong> This technique utilizes an array of transducer elements to produce steering of the ultrasonic beam axis or focusing of the ultrasonic beam over a specified range. This allows the user the ability to inspect certain portions or zones of the component being tested using many different beam angles.</li>
    </ul>
    
    <h4>8.9.9 Discontinuity Evaluation and Sizing</h4>
    <h4>8.9.9.1 General</h4>
    <p>UT procedures should include the requirements for the evaluation of discontinuities. Typically, any imperfection that causes an indication in excess of a certain percentage of DAC curve should be investigated in terms of the acceptance standards. The procedure should detail the sizing technique to be used to plot the through thickness dimension and length.</p>
    <p>One commonly used sizing technique is called the "intensity drop" or "6 dB drop" technique. This sizing technique uses the beam spread of the transducer to quickly estimate the axial length of the reflector. Using this technique, the transducer is positioned on the part such that the amplitude from the reflector is maximized. This point is marked with a grease pencil. The UT instrument is adjusted to set the signal to 80 % full screen height (FSH). The transducer is then moved laterally until the echo has dropped to 40 % FSH (6 dB). This position is also marked. The transducer is then moved laterally in the other direction, past the maximum amplitude point, until the echo response again reaches 40 % FSH. This point is marked with the grease pencil. The two outside marks produce the approximate axial size of the flaw.</p>
    <p>Other sizing techniques should be used to obtain a more precise measurement of the length and through-wall dimension of the flaw. With advances in technologies, a number of other through-thickness sizing techniques are described in Sections 8.9.9.2–8.9.9.5.</p>
    
    <h4>8.9.9.2 ID Creeping Wave Method</h4>
    <p>The inside diameter (ID) creeping wave method uses the effects of multiple sound transfer modes, such as longitudinal waves and shear waves to qualitatively size flaws. The method is used for the global location of flaws in the bottom 1/3, middle 1/3, and top 1/3 regions of the object/weld. Three distinct waves are presented with the ID creeping wave method:</p>
    <ol>
        <li>High-angle refracted longitudinal wave of approximately 70°;</li>
        <li>direct 30° shear wave which mode converts to a 70° refracted longitudinal wave;</li>
        <li>indirect shear or "head" wave which mode converts at the inside diameter from a shear wave to a longitudinal wave, and moves along the surface.</li>
    </ol>
    
    <h4>8.9.9.3 Tip Diffraction Method</h4>
    <p>Tip diffraction methods are very effective for sizing flaws that are open to the inside or outside diameter surface. For ID connected flaws, the half "V" path or one and one half "V" path technique is used. For outside diameter (OD) connected flaws, two techniques are available: the time-of-flight tip diffraction technique and the time measurement technique of the tip diffracted signal and the base signal.</p>
    
    <h4>8.9.9.4 High-Angle Longitudinal Method</h4>
    <p>The high-angle refracted longitudinal wave method is very effective for very deep flaws. Dual-element, focused, 60, 70, and OD creeping waves are used to examine the outer one-half thickness of the component material. Probe designs vary with the manufacturer. Depth of penetration is dependent upon angle of refraction, frequency, and focused depth. Many of these transducers are used not only for sizing, but also for detection and confirmation of flaws detected during the primary detection examination. For coarse-grain materials, these probes work well where shear-wave probes are ineffective.</p>
    
    <h4>8.9.9.5 Bimodal Method</h4>
    <p>The bimodal method is a dual-element tandem probe with the transducer crystals located one in front of the other. The probe also generates an ID creeping wave. The wave physics are essentially the same. The pseudofocusing effect of the dual-element crystals is very effective for ID connected flaws in the mid-wall region, 30 % to 60 % through the wall depth. A low-angle shear wave (indirect) mode converts at the ID to produce an ID creeping wave, which detects the base of the flaw. A further low-angle shear-wave mode converts at the ID to a longitudinal wave, which reflects a longitudinal wave from the flaw face. A high-angle refracted longitudinal wave detects the upper extremity of the flaw (70°). The bimodal method can be used to confirm the depth of shallow to deep ID connected flaws. However, very shallow flaws of less than 10 % to 20 % tend to be slightly oversized, and very deep flaws tend to be slightly undersized.</p>
    
    <h4>8.9.9.6 Phased Array Method</h4>
    <p>The phased array method utilizes an array of transducer elements, excited in precise timing patterns, to produce steering or focusing of the ultrasonic beam over a specific range of angles in the component being inspected. The system consists of a computerized ultrasonic pulser/receiver instrument that contains the collection setup and analysis software, an umbilical cable, and the phased array probe/wedge. The phased inspection may be performed manually, or with an encoder for semi-automated scans, or with a mechanized scanner for fully automated scanning.</p>
    <p>The method allows the user the ability to inspect certain portions or zones of the component under test using many different beam angles. The results may be viewed as A-scan, B-scan, C-scan, or as Sectorial scan images. Multiple views may be viewed simultaneously as well to assist with data analysis. This technique is also used in a single-axis scan motion, which makes it more efficient than manual scanning for data collection.</p>
    
    <p>Significant training and experience are required to effectively utilize some of the more advanced UT detection and sizing techniques.</p>
    
    <h3>8.10 Hardness Testing</h3>
    <h4>8.10.1 Hardness Testing for PQR and Production Welds</h4>
    <p>Hardness testing of the base metal, weld, and HAZ is often required to ensure that the welding process, and any PWHT, has resulted in an acceptable relative hardness. Testing production welds and HAZ requires a clean, flat area on the weld and on the base material as close as possible to the toe of the weld to accommodate the hardness testing instrument in the area of interest. The HAZ can be difficult to locate and is often assumed for testing purposes to be just adjacent to the toe of the weld. Hardness testing for a PQR is easier because the coupon is cross-sectioned and etched to identify the weld, weld interface, and HAZ. API 582 details hardness test requirements for PQRs and production welds. High hardness is particularly an issue with hardenable materials where the weld size is small compared to the base metal being welded (i.e. tube-to tubesheet welds).</p>
    <p>Hardness testing of production welds often utilizes portable equipment. Field measurements tend to have greater variability and so additional measurements may be required to verify results. However, hardness testing performed as part of the PQR uses laboratory equipment where significantly greater accuracy is possible. Portable hardness testers are not substitutes for the bench top models, and results from portable testers are prone to error, due to the limited capabilities of such equipment, as well as their improper use.</p>
    
    <h4>8.10.2 Hardness Testing for Repair Welds</h4>
    <p>On-site hardness testing may be required on pressure-retaining welds after any PWHT in accordance with API 582 and NACE SP0472. Hardness testing of repair welds can be conducted with portable hardness testers in accordance with either ASTM A833, ASTM A1038, or ASTM A956.</p>
    <p>Using API RP 582 as a reference, the HAZ hardness readings may include locations as close as possible (approximately 0.2 mm) to the weld interface (see Figure 57). The surface should be polished and should not exceed 16 μin. (0.4 μm) maximum. After the surface has been polished, it should be etched to identify the weld metal, weld interface, and HAZ.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_57.png" class="figure-image">
        <p>Figure 57—Location of Hardness Measurements</p>
    </div>
    
    <p>An example of how hardness measurements may be conducted is shown in Figure 57. Five impressions in an area of approximately 1 in.2 (650 mm2) should constitute a test. Because field hardness measurements tend to have greater variability, additional assessments such as field metallography replication (FMR) can be conducted to determine whether an excessively hard HAZ microstructure has been formed.</p>
    
    <h3>8.11 Pressure and Leak Testing/Examination (LT)</h3>
    <p>Where a hydrostatic or pneumatic pressure test is required by code, the inspector should adopt code and specification requirements relevant to vessels or piping. API 510, API 570, API 574, ASME B31.3, and ASME PCC-2 provide guidance on the application of pressure tests. Pressure tests should be conducted at temperatures appropriate for the material of construction, above what is known as the minimum design material temperature (MDMT) to avoid brittle fractures.</p>
    <p>Some codes and specifications identify the test pressure and duration. Others provide a general direction without a specific set of guidelines. The test should be held long enough for a thorough visual inspection to be completed to identify any potential leaks. Typically, a pressure test should be held for at least 30 min, or as specified by the referencing code or specification. The inspector should be aware of the effect that changing temperature of the test medium has in causing an increase or decrease of pressure during the test period.</p>
    <p>Pneumatic pressure tests often require special approvals and additional safety considerations due to the amount of stored energy in the system. Where pneumatic LT is conducted, the inspector should verify safe pressure-relieving devices, and the cordoning off of test areas to exclude all but essential personnel, and the inspector should use extreme caution. Safety professionals should provide the necessary direction to ensure the safety of all personnel in the area.</p>
    <p>LT may be required by code or specification to demonstrate system tightness or integrity, or may be performed during a hydrostatic pressure test to demonstrate containment of a sealed unit such as a pressure vessel. ASME Section V, Article 10, addresses LT methods and indicates various test systems to be used for both open and closed units, based upon the desired test sensitivity. LT of a welded tube-to-tubesheet joint may be specified for service applications that are sensitive to small tube-to-tubesheet joint leaks. Helium LT is especially effective for tube-to-tubesheet joints when highly sensitive LT is required.</p>
    <p class="note">NOTE LT is not the same as, nor is it a substitute for, hydrostatic or pneumatic testing.</p>
    <p>One of the most common methods used during pneumatic LT is the direct pressure bubble test. This method employs a liquid bubble solution that is applied to the areas of a closed system under pressure. A visual test is then performed to note any bubbles that are formed as the leakage gas passes through it. When performing the bubble test, some items of concern include the temperature of the surface to be inspected, pretest and posttest cleaning of the part to be inspected, lighting, visual aids, and the hold time at a specific pressure prior to application of the bubble solution. Typically, the area under test is found to be acceptable when no continuous bubble formation is observed. If the unit under pressure is found to have leakage, it should be depressurized, the leaks repaired per the governing code, and the test repeated.</p>
    <p>A wide variety of viscous fluids and methods can be used, dependent on the desired result. Considerations for system design limitations may prevent the use of water (the most common type of leak test). Drying, hydrostatic head, and support limitations should be addressed before water is used. The required sensitivity of the results may also require a more sensitive leak test medium and method.</p>
    <p class="note">NOTE Publications on pressure testing safety are available from several sources, including (but not limited to) Interstate Natural Gas Association of America (INGAA), Health and Safety Executive (HSE), and Mechanical Contractors Association of America (MCAA). These are not the only sources on the subject. Information on them is included in the bibliography.</p>`,
    contentEs: `<h2>8 Examen No Destructivo</h2>
    <h3>8.1 Discontinuidades/imperfecciones</h3>
    <p>Los END se definen como aquellos métodos de inspección que permiten examinar los materiales sin cambiar o destruir su utilidad futura. Los END son parte integral del programa de aseguramiento de la calidad de una organización. Se emplean varios métodos END para garantizar que la soldadura cumpla con las especificaciones de diseño y no contenga defectos.</p>
    <p>El inspector debe elegir un método END con la capacidad y sensibilidad adecuadas para detectar discontinuidades en las uniones soldadas que requieren examen para evaluación de aceptación/rechazo. La Tabla 2 y la Figura 13 (reproducidas de AWS B1.10<sup>4</sup>) enumeran los tipos y ubicaciones comunes de discontinuidades e ilustran sus posiciones dentro de una soldadura a tope. Los métodos END más comúnmente utilizados durante la inspección de soldaduras se muestran en la Tabla 3.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 2—Tipos Comunes de Discontinuidades</caption>
            <thead>
                <tr>
                    <th>Tipo de Discontinuidad</th>
                    <th>Subcláusula*</th>
                    <th>Ubicación</th>
                    <th>Observaciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1) Porosidad<br>a) Uniformemente dispersa<br>b) Agrupada<br>c) Tubular<br>d) Alineada<br>e) Alargada</td>
                    <td>4.3<br>4.3.1<br>4.3.2<br>4.3.3<br>4.3.4<br>4.3.5</td>
                    <td>ZMS</td>
                    <td>La porosidad también puede encontrarse en el metal base y la ZAC si el metal base es una fundición.</td>
                </tr>
                <tr>
                    <td>2) Inclusión<br>a) Escoria<br>b) Tungsteno</td>
                    <td>4.4<br>4.4.1<br>4.4.2</td>
                    <td>ZMS/IS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>3) Fusión incompleta</td>
                    <td>4.5</td>
                    <td>ZMS/IS</td>
                    <td>ZMS entre pasadas.</td>
                </tr>
                <tr>
                    <td>4) Penetración incompleta en la unión</td>
                    <td>4.6</td>
                    <td>ZMB</td>
                    <td>Raíz de la soldadura en una soldadura de ranura.</td>
                </tr>
                <tr>
                    <td>5) Socavación</td>
                    <td>4.7</td>
                    <td>IS/ZAC</td>
                    <td>Adyacente al pie de la soldadura o raíz de la soldadura en el metal base.</td>
                </tr>
                <tr>
                    <td>6) Infrallenado</td>
                    <td>4.8</td>
                    <td>ZMS</td>
                    <td>Superficie de la soldadura o superficie de la raíz en una soldadura de ranura.</td>
                </tr>
                <tr>
                    <td>7) Solape</td>
                    <td>4.9</td>
                    <td>ZMS</td>
                    <td>Pie de la soldadura o superficie de la raíz.</td>
                </tr>
                <tr>
                    <td>8) Laminación</td>
                    <td>4.10</td>
                    <td>ZMB</td>
                    <td>Metal base, generalmente cerca del espesor medio de la sección.</td>
                </tr>
                <tr>
                    <td>9) Delaminación</td>
                    <td>4.11</td>
                    <td>ZMB</td>
                    <td>Metal base, generalmente cerca del espesor medio de la sección.</td>
                </tr>
                <tr>
                    <td>10> Costura y solape</td>
                    <td>4.12</td>
                    <td>ZMB</td>
                    <td>Superficie del metal base generalmente alineada con la dirección de laminación.</td>
                </tr>
                <tr>
                    <td>11> Desgarro laminar</td>
                    <td>4.13</td>
                    <td>ZMB</td>
                    <td>Metal base.</td>
                </tr>
                <tr>
                    <td>12) Grieta (incluye grietas calientes y grietas frías descritas en el texto)<br>a) Longitudinal<br>b) Transversal<br>c) Cráter<br>d) Garganta<br>e) Pie<br>f) Cara y raíz<br>g) Bajo el cordón y ZAC</td>
                    <td>4.14<br>4.14.1<br>4.14.2, 4.14.3<br>4.14.2, 4.14.4<br>4.14.5<br>4.14.6<br>4.14.7<br>4.14.8<br>4.14.9</td>
                    <td>ZMS, ZAC, ZMB<br>ZMS, ZAC, ZMB<br>ZMS<br>ZMS<br>IS, ZAC<br>ZMS<br>ZAC</td>
                    <td>Metal de soldadura o metal base adyacente a IS.<br>Metal de soldadura (puede propagarse a la ZAC y al metal base).<br>Metal de soldadura en el punto donde se termina el arco.<br>Paralelo al eje de la soldadura.<br>A través de la garganta de una soldadura de filete.<br>Superficie de la raíz o raíz de la soldadura.<br>Cara o raíz de sus superficies.<br>ZAC (puede propagarse al metal base).</td>
                </tr>
                <tr>
                    <td>13) Concavidad</td>
                    <td>4.15</td>
                    <td>ZMS</td>
                    <td>Superficie de la soldadura o soldadura de filete.</td>
                </tr>
                <tr>
                    <td>14) Convexidad</td>
                    <td>4.16</td>
                    <td>ZMS</td>
                    <td>Superficie de la soldadura o soldadura de filete.</td>
                </tr>
                <tr>
                    <td>15) Refuerzo de soldadura</td>
                    <td>4.17</td>
                    <td>ZMS</td>
                    <td>Superficie de la soldadura o superficie de la raíz en una soldadura de ranura.</td>
                </tr>
                <tr>
                    <td>16) Salpicaduras</td>
                    <td></td>
                    <td>ZMS, ZMB</td>
                    <td>Superficie de la soldadura o superficie del metal base.</td>
                </tr>
                <tr>
                    <td>17) Arco eléctrico incidental</td>
                    <td></td>
                    <td>ZMS, ZMB</td>
                    <td>Superficie de la soldadura o superficie del metal base.</td>
                </tr>
            </tbody>
        </table>
        <p class="note">ZMS—zona de metal de soldadura; ZMB—zona de metal base; ZAC—zona afectada por el calor; IS—interfaz de soldadura.<br>* Las referencias de subcláusula se refieren a secciones de AWS B1.10, Edición 2016.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_13.png" class="figure-image">
        <p>De AWS B1.10. Reproducido cortesía de AWS.</p>
        <p>Figura 13—Discontinuidades Típicas Presentes en una Soldadura de Ranura de Bisel Simple en una Unión a Tope</p>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 3—Métodos END Comúnmente Utilizados</caption>
            <thead>
                <tr>
                    <th>Método END</th>
                    <th>Símbolos</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Examen Visual</td><td>VT</td></tr>
                <tr><td>Examen de Partículas Magnéticas</td><td>MT</td></tr>
                <tr><td>Examen de Partículas Magnéticas Fluorescentes Húmedas</td><td>WFMT</td></tr>
                <tr><td>Examen de Líquidos Penetrantes</td><td>PT</td></tr>
                <tr><td>Prueba/Examen de Fugas</td><td>LT</td></tr>
                <tr><td>Examen de Corrientes de Foucault</td><td>ET</td></tr>
                <tr><td>Examen Radiográfico</td><td>RT</td></tr>
                <tr><td>Examen Ultrasónico</td><td>UT</td></tr>
                <tr><td>Medición de Campo de Corriente Alterna</td><td>ACFM</td></tr>
            </tbody>
        </table>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 4—Capacidad del Método de Examen Aplicable para Uniones Tipo Soldadura</caption>
            <thead>
                <tr>
                    <th rowspan="2">Uniones</th>
                    <th colspan="8">Métodos de Inspección</th>
                </tr>
                <tr>
                    <th colspan="4">Volumétrico</th>
                    <th colspan="4">Superficial</th>
                </tr>
                <tr>
                    <th></th>
                    <th>RT</th>
                    <th>UT</th>
                    <th>ET</th>
                    <th>PT</th>
                    <th>MT</th>
                    <th>VT</th>
                    <th>LT</th>
                    <th>ACFM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A tope</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Esquina</td>
                    <td>M</td>
                    <td>A</td>
                    <td>M</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>T</td>
                    <td>M</td>
                    <td>A</td>
                    <td>M</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Solape</td>
                    <td>M</td>
                    <td>M</td>
                    <td>M</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>M</td>
                </tr>
                <tr>
                    <td>Borde</td>
                    <td>M</td>
                    <td>M</td>
                    <td>M</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
            </tbody>
        </table>
        <p class="note">Volumétrico<br>Superficial<br>RT: examen radiográfico (volumétrico)<br>UT: examen ultrasónico (volumétrico)<br>ET: examen de corrientes de Foucault (se muestra tanto en volumétrico como en superficial ya que puede detectar defectos cerca de la superficie)<br>PT: examen de líquidos penetrantes incluyendo penetrante de contraste de color y penetrante fluorescente (superficial)<br>MT: examen de partículas magnéticas (superficial)<br>VT: examen visual (superficial)<br>LT: examen de fugas (superficial)<br>ACFM: medición de campo de corriente alterna (superficial)<br>A: método aplicable<br>M: aplicabilidad marginal (depende de otros factores, como el espesor del material, tamaño de la discontinuidad, orientación y ubicación</p>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 5—Capacidad del Método Aplicable vs. Discontinuidad</caption>
            <thead>
                <tr>
                    <th></th>
                    <th colspan="7">Métodos de Inspección</th>
                </tr>
                <tr>
                    <th>Discontinuidades</th>
                    <th>RT</th>
                    <th>UT</th>
                    <th>PT<sup>a,c</sup></th>
                    <th>MT<sup>b,c,d</sup></th>
                    <th>VT<sup>a</sup></th>
                    <th>ET</th>
                    <th>LT<sup>e</sup></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Porosidad</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Inclusiones de escoria</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>Fusión incompleta</td>
                    <td>O</td>
                    <td>A</td>
                    <td>U</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Penetración incompleta en la unión</td>
                    <td>A</td>
                    <td>A</td>
                    <td>U</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>Socavación</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>A</td>
                    <td>O</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>Solape</td>
                    <td>U</td>
                    <td>O</td>
                    <td>A</td>
                    <td>A</td>
                    <td>O</td>
                    <td>O</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>Grietas</td>
                    <td>O</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Laminaciones</td>
                    <td>U</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>A</td>
                    <td>U</td>
                    <td>U</td>
                </tr>
            </tbody>
        </table>
        <p class="note">RT—Examen radiográfico<br>UT—Examen ultrasónico<br>PT—Examen de líquidos penetrantes incluyendo DPT (examen de penetrante de color) y FPT (examen de penetrante fluorescente)<br>MT—Examen de partículas magnéticas<br>VT—Examen visual<br>ET—Examen electromagnético<br>LT—Prueba/examen de fugas<br>A—Método aplicable<br>O—Aplicabilidad marginal (dependiendo de otros factores como el espesor del material, tamaño de la discontinuidad, orientación y ubicación)<br>U—Generalmente no se utiliza<br>a Superficie.<br>b Superficie y ligeramente subsuperficial.<br>c Preparación de soldadura o borde del metal base.<br>d El examen de partículas magnéticas es aplicable solo a materiales ferromagnéticos.<br>e La prueba/examen de fugas es aplicable solo a estructuras cerradas que puedan sellarse y presurizarse durante la prueba/examen.</p>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 6—Discontinuidades Comúnmente Encontradas con Procesos de Soldadura</caption>
            <thead>
                <tr>
                    <th>Material</th>
                    <th>Tipo de Discontinuidad</th>
                    <th>Procesos de Soldadura</th>
                    <th>Método END Típico</th>
                    <th>Solución Práctica</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="10">Acero al Carbono</td>
                    <td>Grietas por hidrógeno</td>
                    <td>SMAW, FCAW, SAW</td>
                    <td>VT, PT, MT después del enfriamiento</td>
                    <td>Electrodo de bajo hidrógeno, precalentamiento, postcalentamiento, limpieza de la junta de soldadura.</td>
                </tr>
                <tr>
                    <td>Falta de fusión (LOF)</td>
                    <td>TODOS</td>
                    <td>UT</td>
                    <td>Aporte de calor adecuado, técnica de soldadura adecuada.</td>
                </tr>
                <tr>
                    <td>Penetración incompleta</td>
                    <td>TODOS</td>
                    <td>RT, UT, VT<sup>a</sup></td>
                    <td>Aporte de calor adecuado, diseño de junta adecuado.</td>
                </tr>
                <tr>
                    <td>Socavación</td>
                    <td>SAW, SMAW, FCAW, GMAW</td>
                    <td>VT</td>
                    <td>Reducir corriente, velocidad de avance.</td>
                </tr>
                <tr>
                    <td>Inclusión de escoria</td>
                    <td>SMAW, FCAW, SAW</td>
                    <td>RT, UT</td>
                    <td>Técnica de soldadura adecuada, limpieza, evitar oscilación excesiva.</td>
                </tr>
                <tr>
                    <td>Porosidad</td>
                    <td>TODOS</td>
                    <td>RT</td>
                    <td>Bajo hidrógeno, ambiente bajo en azufre, limpieza y protección adecuadas.</td>
                </tr>
                <tr>
                    <td>Quemadura</td>
                    <td>SAW, FCAW, GMAW, SMAW</td>
                    <td>RT, VT<sup>a</sup></td>
                    <td>Aporte de calor adecuado.</td>
                </tr>
                <tr>
                    <td>Arco eléctrico incidental</td>
                    <td>TODOS</td>
                    <td>VT, MT, PT, Macroataque</td>
                    <td>Eliminar por esmerilado.</td>
                </tr>
                <tr>
                    
                    <td>Falta de fusión de pared lateral</td>
                    <td>GMAW-S</td>
                    <td>UT</td>
                    <td>Aporte de calor adecuado, vertical ascendente.</td>
                </tr>
                <tr>
                  
                    <td>Inclusión de tungsteno</td>
                    <td>GTAW</td>
                    <td>RT</td>
                    <td>Control de la longitud del arco.</td>
                </tr>
                <tr>
                    <td rowspan="8">Acero Inoxidable Austenítico</td>
                    <td>Grietas de solidificación</td>
                    <td>TODOS</td>
                    <td>PT</td>
                    <td>Material de aporte adecuado, contenido de ferrita, diseño de junta adecuado.</td>
                </tr>
                <tr>
                    <td>Grietas en caliente</td>
                    <td>SAW, FCAW, GMAW, SMAW</td>
                    <td>RT, PT, UT</td>
                    <td>Bajo aporte de calor, cordón de filete.</td>
                </tr>
                <tr>
                    <td>Penetración incompleta</td>
                    <td>TODOS</td>
                    <td>RT, UT</td>
                    <td>Aporte de calor adecuado.</td>
                </tr>
                <tr>
                    <td>Socavación</td>
                    <td>SAW, SMAW, FCAW, GMAW</td>
                    <td>VT</td>
                    <td>Reducir velocidad de avance.</td>
                </tr>
                <tr>
                    <td>Inclusión de escoria</td>
                    <td>SMAW, FCAW, SAW</td>
                    <td>RT, UT</td>
                    <td>Limpieza adecuada.</td>
                </tr>
                <tr>
                    <td>Porosidad</td>
                    <td>TODOS</td>
                    <td>RT</td>
                    <td>Bajo hidrógeno, ambiente bajo en azufre, protección adecuada.</td>
                </tr>
                <tr>
                    <td>Arco eléctrico incidental</td>
                    <td>TODOS</td>
                    <td>VT, PT, Macroataque</td>
                    <td>Eliminar por esmerilado.</td>
                </tr>
                <tr>
                    <td>Inclusión de tungsteno</td>
                    <td>GTAW</td>
                    <td>RT</td>
                    <td>Control de la longitud del arco.</td>
                </tr>
            </tbody>
        </table>
        <p class="note">a Cuando la raíz es accesible.</p>
    </div>
    
    <h3>8.2 Identificación de Materiales</h3>
    <p>Durante la inspección de soldadura, el inspector debe verificar la conformidad de las químicas del metal base y del metal de aporte para los materiales aleados seleccionados o especificados según lo requiera el WPS relevante. Esto debe incluir la revisión del informe de prueba de molino certificado, la revisión de sellos o marcas en los componentes, o requerir pruebas de identificación positiva de metales (PMI). Es responsabilidad del propietario-usuario establecer un programa de verificación de materiales por escrito que indique el alcance y tipo de PMI según lo descrito en API 578.</p>
    
    <h3>8.3 Examen Visual (VT)</h3>
    <h4>8.3.1 General</h4>
    <p>VT es el método END más extensamente utilizado para soldaduras. Incluye la observación directa o indirecta de las superficies expuestas de la soldadura y el metal base. El VT directo se realiza cuando el acceso es suficiente para colocar el ojo dentro de 6 pulg. a 24 pulg. (150 mm a 600 mm) de la superficie a examinar y en un ángulo no inferior a 30° con respecto a la superficie, como se ilustra en la Figura 14. Se pueden usar espejos para mejorar el ángulo de visión.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_14.png" class="figure-image">
        <p>Cortesía de CJ Hellier</p>
        <p>Figura 14—Requisitos de Examen Visual Directo</p>
    </div>
    
    <p>El VT remoto puede sustituir al examen directo. El examen remoto puede utilizar ayudas como telescopios, boroscopios, fibroscopios, cámaras u otros instrumentos adecuados, siempre que tengan una resolución al menos equivalente a la que se alcanza con el examen visual directo. En cualquier caso, la iluminación debe ser suficiente para permitir la resolución de detalles finos. Estos requisitos de iluminación deben abordarse en un procedimiento por escrito.</p>
    <p>ASME Sección V, Artículo 9, enumera los requisitos para VT. Los códigos y especificaciones pueden indicar que el cumplimiento de estos requisitos es obligatorio. Algunos de los requisitos enumerados en este artículo incluyen los siguientes:</p>
    <ul>
        <li>un procedimiento escrito y calificado;</li>
        <li>la cantidad mínima de información que debe incluirse en el procedimiento escrito;</li>
        <li>demostración de la adecuación del procedimiento de inspección;</li>
        <li>el personal de inspección debe estar certificado por su empleador para el método específico;</li>
        <li>el personal debe documentar la finalización anual de una prueba de visión ocular tipo J-1 Jaeger (con o sin corrección);</li>
        <li>el VT directo requiere acceso para permitir que el ojo esté dentro de 6 pulg. a 24 pulg. (150 mm a 600 mm) de la superficie, en un ángulo no inferior a 30°;</li>
        <li>la iluminación mínima requerida de la pieza bajo examen;</li>
        <li>el VT indirecto permite el uso de examen visual remoto y dispositivos;</li>
        <li>evaluación de indicaciones según los estándares de aceptación del código de referencia;</li>
        <li>un formulario que documente adecuadamente los resultados según la sección de código relevante.</li>
    </ul>
    
    <h4>8.3.2 Herramientas de Inspección Visual</h4>
    <h4>8.3.2.1 General</h4>
    <p>Para inspeccionar y evaluar visualmente las soldaduras, una iluminación adecuada y una buena visión son los requisitos básicos. Además, un conjunto básico de ayudas ópticas y herramientas de medición, diseñadas específicamente para la inspección de soldaduras, puede ayudar al inspector. En las siguientes subsecciones se presentan algunas herramientas y métodos comúnmente utilizados para VT de soldaduras.</p>
    
    <h4>8.3.2.2 Ayudas Ópticas</h4>
    <p>Las ayudas ópticas utilizadas en la inspección visual incluyen las siguientes:</p>
    <ul>
        <li><strong>Iluminación:</strong> La iluminación de la superficie de inspección es de extrema importancia. Deben establecerse niveles de iluminación adecuados para garantizar una inspección visual efectiva. Estándares como ASME Sección V, Artículo 9, especifican niveles mínimos de iluminación de 100 pies-bujía (1000 lux) en la superficie de examen. Esto no siempre es fácil de lograr, por lo que los inspectores deben ser conscientes de la necesidad de medir las condiciones de iluminación utilizando un medidor de luz.</li>
        <li><strong>Espejos:</strong> Valiosos para el inspector, permitiéndoles mirar dentro de tuberías, orificios roscados y barrenados, y fundiciones, y alrededor de esquinas si es necesario.</li>
        <li><strong>Lupas:</strong> Útiles para resaltar detalles pequeños e imperfecciones.</li>
        <li><strong>Boroscopios y fibroscopios:</strong> Ampliamente utilizados para examinar tubos, orificios profundos, barrenos largos y curvas de tubería que tienen superficies internas no accesibles a la visualización directa.</li>
            </ul>
    
    <h4>8.3.2.3 Ayudas Mecánicas</h4>
    <p>Las ayudas mecánicas utilizadas en la inspección visual incluyen las siguientes:</p>
    <ul>
        <li><strong>Regla de acero:</strong> Disponible en una amplia selección de tamaños y graduaciones para satisfacer las necesidades de la inspección (considerada un instrumento de medición no de precisión).</li>
        <li><strong>Escala Vernier:</strong> un instrumento de precisión, capaz de medir con un factor de precisión de 0.0001 pulg. El sistema Vernier se utiliza en varios instrumentos de medición de precisión, como calibradores, micrómetros, medidores de altura y profundidad, el diente del engranaje y transportadores.</li>
        <li><strong>Juego de escuadra combinada:</strong> Consistente en una hoja y un conjunto de tres cabezales: escuadra, centro y transportador, utilizado universalmente en trabajos mecánicos para el montaje y examen de diseño.</li>
        <li><strong>Calibrador de espesor mecánico:</strong> Comúnmente llamado "calibrador de espesores", y se utiliza para medir la holgura entre objetos.</li>
        <li><strong>Niveles:</strong> Herramientas diseñadas para verificar si un plano o superficie es verdaderamente horizontal o vertical.</li>
    </ul>
    
    <h4>8.3.2.4 Dispositivos de Examen de Soldadura</h4>
    <p>Las herramientas de inspección típicas para la inspección de soldaduras incluyen las siguientes:</p>
    <ul>
        <li><strong>Juego del inspector (ver Figura 15):</strong> Contiene algunas de las herramientas básicas necesarias para realizar un examen visual adecuado de una soldadura durante todas las etapas de la soldadura. Incluye todo, desde una lupa iluminada hasta un calibrador Vernier.</li>
        <li><strong>Calibrador de puente con leva (ver Figura 16):</strong> Puede usarse para determinar el ángulo de preparación de la soldadura antes de soldar. Esta herramienta también puede usarse para medir el exceso de metal de soldadura (refuerzo), la profundidad de socavación o picaduras, el tamaño de la garganta de la soldadura de filete, o la longitud de la pierna de la soldadura y la desalineación (alto-bajo).</li>
        <li><strong>Calibrador de soldadura de filete:</strong> Proporciona un medio rápido y preciso para medir los tamaños de soldadura de filete más comúnmente utilizados. Los tipos de calibradores de soldadura de filete incluyen:
            <ol>
                <li>El calibrador ajustable de soldadura de filete (ver Figura 17) mide tamaños de soldadura para montajes con miembros a 45° y soldaduras con longitudes desiguales de pierna de soldadura;</li>
                <li>El calibrador de soldadura de filete Sesgado-T (ver Figura 18) mide el ángulo del miembro vertical;</li>
                <li>El calibrador de soldadura de filete (ver Figura 19) es un calibrador rápido de pasa/no pasa que se usa para medir el tamaño de la pierna de la soldadura de filete. Los calibradores generalmente vienen en juegos con tamaños de pierna de soldadura desde 3 mm (1/8 pulg.) hasta 25 mm (1 pulg.). La Figura 20 muestra un calibrador de soldadura de filete que se usa para determinar si la corona tiene una concavidad o convexidad aceptable.</li>
            </ol>
        </li>
        <li><strong>Calibrador de tamaño de soldadura (ver Figura 21):</strong> Mide el tamaño de soldaduras de filete, el tamaño real de la garganta de soldaduras de filete convexas y cóncavas, el refuerzo de soldaduras a tope, y aberturas de raíz.</li>
        <li><strong>Calibrador de soldadura Hi-lo (ver Figura 22):</strong> Mide la desalineación interna después del montaje, el espesor de la pared de la tubería después de la alineación, la longitud entre líneas de marcado, la abertura de raíz, bisel de 371/2°, tamaño de la pierna de la soldadura de filete, y refuerzo en soldaduras a tope. El calibrador hi-lo proporciona la capacidad de garantizar la alineación adecuada de las piezas a soldar. También mide la desalineación interna, la altura de la corona de la soldadura y el espaciado de la raíz de la soldadura.</li>
        <li><strong>Pirómetro digital o infrarrojo o crayones sensibles a la temperatura:</strong> Mide las temperaturas de precalentamiento y entre pasadas.</li>
    </ul>
    
    <div class="figure-container">
    <img src="images/api577_figure_15.png" class="figure-image">
        <p>Figura 15—Juego del Inspector</p>
        <p>Cortesía de G.A.I., Gage Co.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_16.png" class="figure-image">
        <p>Figura 16—Calibrador de Puente con Leva</p>
        <p>Cortesía de G.A.I., Gage Co.</p>
        <p>Los productos en las fotografías de esta página se usan solo como ejemplos y no constituyen un respaldo de estos productos por parte de API ni un requisito de su uso para el cumplimiento del estándar.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_17.png" class="figure-image">
        <p>Figura 17—Calibrador Ajustable de Soldadura de Filete</p>
        <p>Cortesía de G.A.I., Gage Co.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_18.png" class="figure-image">
        <p>Figura 18—Calibrador de Soldadura de Filete Sesgado-T</p>
        <p>Cortesía de G.A.I., Gage Co.</p>
        <p>Los productos en las fotografías de esta página se usan solo como ejemplos y no constituyen un respaldo de estos productos por parte de API ni un requisito de su uso para el cumplimiento del estándar.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_19.png" class="figure-image">
        <p>Figura 19—Calibrador de Soldadura de Filete</p>
        <p>Cortesía de G.A.I., Gage Co.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_20.png" class="figure-image">
        <p>Figura 20—Calibrador de Soldadura de Filete</p>
        <p>Cortesía de G.A.I., Gage Co.</p>
        <p>Los productos en las fotografías de esta página se usan solo como ejemplos y no constituyen un respaldo de estos productos por parte de API ni un requisito de su uso para el cumplimiento del estándar.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_21.png" class="figure-image">
        <p>Figura 21—Calibrador de Tamaño de Soldadura</p>
        <p>Cortesía de G.A.I., Gage Co.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_22.png" class="figure-image">
        <p>Figura 22—Calibrador Hi-lo</p>
        <p>Cortesía de G.A.I., Gage Co.</p>
        <p>Los productos en las fotografías de esta página se usan solo como ejemplos y no constituyen un respaldo de estos productos por parte de API ni un requisito de su uso para el cumplimiento del estándar.</p>
    </div>
    
    <h3>8.4 Examen de Partículas Magnéticas (MT)</h3>
    <h4>8.4.1 General</h4>
    <p>MT es eficaz para localizar discontinuidades superficiales o subsuperficiales de materiales ferromagnéticos. Se usa comúnmente para evaluar superficies de uniones soldadas, verificaciones intermedias de capas de soldadura y superficies de biselado posterior de soldaduras completadas. Los tipos típicos de discontinuidades que pueden detectarse mediante MT, con accesibilidad adecuada, incluyen grietas, laminaciones, solapes y costuras.</p>
    <p>En este método, la soldadura (y la ZAC) se magnetiza localmente, creando un campo magnético en el material. Luego se aplican partículas ferromagnéticas finamente divididas a la superficie magnetizada y son atraídas a las interrupciones en el campo magnético (causando la formación de polos norte y sur en la imperfección) resultantes de discontinuidades, como se muestra en la Figura 23 y la Figura 24.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_23.png" class="figure-image">
        <p>Figura 23—Discontinuidad que Rompe la Superficie</p>
        <p>Cortesía de CJ Hellier</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_24.png" class="figure-image">
        <p>Figura 24—Discontinuidad Subsuperficial</p>
        <p>Cortesía de CJ Hellier</p>
    </div>
    
    <p>La Figura 23 muestra la interrupción del campo magnético causada por un defecto abierto a la superficie. Las partículas ferromagnéticas son atraídas a la interrupción en el campo de flujo, creando polos norte y sur. El patrón de las partículas puede ser muy nítido y distinto, o difuso, dependiendo de varios factores que incluyen la fuerza del campo, el tipo de imperfección y el medio indicador. La Figura 24 ilustra cómo un defecto subsuperficial también interrumpiría las líneas de flujo magnético. La indicación observada no estaría tan claramente definida como la de un defecto abierto a la superficie. El patrón formado por las partículas representa la forma y el tamaño de cualquier discontinuidad existente, como se ve en la Figura 25. Las partículas utilizadas durante el examen pueden ser secas o húmedas, dependiendo del tipo de imperfección que se esté examinando y el nivel de sensibilidad requerido. Si el examen se realiza en iluminación normal, el color de las partículas (conocido como el método de contraste de color) debe proporcionar un contraste adecuado con la superficie de examen. Los mejores resultados se logran cuando las líneas de flujo son perpendiculares a la discontinuidad. Las inspecciones deben superponerse al menos 50 mm (2 pulg.). Normalmente se realizan dos inspecciones, una paralela a la soldadura y otra perpendicular a la soldadura, para proporcionar la máxima probabilidad de cobertura. Cuando se aplica una fuerza magnética al material, se crea un campo de flujo magnético alrededor y a través del material. Las discontinuidades que son perpendiculares a las líneas de flujo atraen las partículas magnéticas, causando una indicación como se muestra en la Figura 26. La Figura 27 ilustra la configuración para detectar indicaciones transversales. El yugo se coloca paralelo a la soldadura para detectar discontinuidades transversales a la soldadura. La Figura 28 muestra la configuración para detectar indicaciones que corren paralelas a la soldadura. En este caso, el yugo se coloca a través de la soldadura para detectar discontinuidades paralelas a la soldadura. Las imperfecciones deberán ser perpendiculares al campo de flujo magnético para una máxima probabilidad de detección.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_25.png" class="figure-image">
        <p>Figura 25—Discontinuidad de Soldadura</p>
        <p>Cortesía de CJ Hellier</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_26.png" class="figure-image">
        <p>Figura 26—Líneas de Flujo</p>
        <p>Cortesía de CJ Hellier</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_27.png" class="figure-image">
        <p>Figura 27—Detección de Discontinuidades Transversales a la Soldadura</p>
        <p>Cortesía de CJ Hellier</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_28.png" class="figure-image">
        <p>Figura 28—Detección de Discontinuidades Paralelas a la Soldadura</p>
        <p>Cortesía de CJ Hellier</p>
    </div>
    
    <p>Para mayor sensibilidad, se pueden utilizar técnicas de partículas magnéticas fluorescentes húmedas (WFMT). Con esta técnica, se utiliza una luz negra filtrada para observar las partículas, lo que requiere que el área de examen se oscurezca según lo especificado en ASME Sección V, Artículo 7.</p>
    <p>ASME Sección V, Artículo 7, enumera los requisitos para MT. Algunos códigos y especificaciones pueden indicar que el cumplimiento de estos requisitos es obligatorio. ASME B31.3 y ASME Sección VIII, División 1, requieren que MT se realice de acuerdo con el Artículo 7. Algunos de los requisitos enumerados en este artículo incluyen:</p>
    <ul>
        <li>información del procedimiento de examen;</li>
        <li>uso de un método de aplicación continua de partículas;</li>
        <li>uso de una de las cinco técnicas de magnetización;</li>
        <li>calibración requerida del equipo;</li>
        <li>dos exámenes perpendiculares entre sí;</li>
        <li>temperatura superficial máxima para el examen;</li>
        <li>corrientes de magnetización;</li>
        <li>evaluación de indicaciones según los estándares de aceptación del código de referencia;</li>
        <li>desmagnetización;</li>
        <li>iluminación superficial mínima requerida (visible o luz negra) de la pieza bajo examen.</li>
    </ul>
    
    <h4>8.4.2 Indicador de Dirección del Flujo Magnético</h4>
    <p>La dirección del flujo magnético puede confirmarse mediante el uso de varios indicadores. Uno de los indicadores más populares es el indicador de pastel. Consiste en ocho segmentos de acero bajo en carbono, soldados con aleación para formar una placa octogonal que está plateada con cobre en un lado para ocultar las líneas de unión (ver Figura 29). La placa se coloca sobre la pieza de prueba, adyacente a la soldadura, durante la magnetización con el lado de cobre hacia arriba. Las partículas ferromagnéticas se aplican a la cara de cobre y delinean la orientación del campo resultante.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_29.png" class="figure-image">
        <p>Figura 29—Indicador de Pastel</p>
    </div>
    
    <h4>8.4.3 Desmagnetización</h4>
    <p>Cuando el magnetismo residual en la pieza podría interferir con el procesamiento o uso posterior, se deben utilizar técnicas de desmagnetización para reducir el campo magnético residual dentro de los límites aceptables. Se debe tener cuidado al realizar MT durante el proceso de soldadura. Si se deja un campo residual en una soldadura parcialmente completada, este campo podría desviar el arco de soldadura y dificultar el control del depósito de soldadura.</p>
    
    <h3>8.5 Medición de Campo de Corriente Alterna</h3>
    <p>La técnica ACFM es una técnica electromagnética, sin contacto, que es capaz de detectar y dimensionar imperfecciones que rompen la superficie en una gama de diferentes materiales y a través de recubrimientos de diversos espesores. Esta técnica puede usarse para inspeccionar geometrías complejas como boquillas, ranuras de anillo y áreas de rectificado. Requiere una preparación mínima de la superficie y puede usarse a temperaturas elevadas de hasta 900 °F (480 °C). Sin embargo, es menos sensible y más propensa a errores del operador que WFMT. ACFM se utiliza para la evaluación y monitoreo de grietas existentes.</p>
    <p>ACFM utiliza una sonda similar a una sonda de corrientes de Foucault e introduce una corriente alterna en una capa delgada cerca de la superficie de cualquier conductor. Cuando se introduce una corriente uniforme en el área bajo prueba, si está libre de imperfecciones, la corriente no se altera. Si el área tiene una grieta, la corriente fluye alrededor de los extremos y las caras de la grieta. Existe un campo magnético sobre la superficie asociado con esta corriente alterna uniforme y se altera si hay presente una grieta que rompe la superficie.</p>
    <p>La sonda se escanea longitudinalmente a lo largo de la soldadura con el frente de la sonda paralelo y adyacente al pie de la soldadura. Se miden dos componentes del campo magnético: Bx a lo largo de la longitud del defecto, que responde a los cambios en la densidad de corriente superficial y da una indicación de profundidad cuando la reducción es mayor; y Bz, que da una respuesta negativa y positiva en cada extremo del defecto causada por polos generados por la corriente, proporcionando una indicación de longitud. Una medición física de la longitud del defecto indicada por la posición de la sonda se usa junto con un programa de software para determinar con precisión la longitud y profundidad de la imperfección.</p>
    <p>Durante la aplicación de la técnica ACFM, los valores reales del campo magnético se miden en tiempo real. Estos se usan con tablas de búsqueda de modelos matemáticos para eliminar la necesidad de calibración del instrumento ACFM utilizando una pieza de calibración con defectos artificiales como ranuras.</p>
    
    <h3>8.6 Examen de Líquidos Penetrantes (PT)</h3>
    <h4>8.6.1 General</h4>
    <p>PT es capaz de detectar discontinuidades que conectan con la superficie en aleaciones ferrosas y no ferrosas, así como en objetos no metálicos. PT puede usarse para examinar superficies de uniones soldadas, soldaduras completadas y realizar verificaciones intermedias de pasadas de soldadura individuales. Esta técnica se emplea comúnmente en aceros inoxidables austeníticos donde no es posible MT. El examinador debe reconocer que muchas especificaciones limitan los contaminantes en los materiales penetrantes que podrían afectar adversamente la soldadura o los materiales parentales. La mayoría de los fabricantes de penetrantes proporcionan certificaciones de materiales sobre las cantidades de contaminantes (p. ej., cloro, flúor, azufre y halógenos).</p>
    <p>La acción capilar (una fuerza resultante de la adhesión, cohesión y tensión superficial en líquidos que están en contacto con sólidos, como en un tubo capilar) es la base para que el penetrante sea atraído hacia un material. La acción capilar inversa es el principio detrás de la visualización de indicaciones después de la aplicación del revelador.</p>
    <p>Una limitación de PT es que los sistemas de penetrante estándar están restringidos a un máximo de 125 °F (52 °C), por lo que la soldadura o material a inspeccionar debe estar por debajo de esta temperatura, lo que ralentiza significativamente la operación de soldadura. Además, este método requiere una limpieza extensa para no contaminar la superficie de la soldadura. Los sistemas de penetrante de alta temperatura pueden calificarse para extender el rango de temperatura.</p>
    <p>Durante PT, la superficie de prueba generalmente se limpia con solvente y se recubre con un líquido penetrante que busca discontinuidades conectadas a la superficie. El tiempo que el penetrante permanece en la superficie, también conocido como tiempo de permanencia, se basa en varios factores, principalmente el tipo de imperfección que se espera que esté presente. Después de eliminar cuidadosamente el exceso de líquido penetrante superficial, normalmente se aplica por pulverización una suspensión de polvo a base de solvente (revelador). El líquido en cualquier discontinuidad se filtra para manchar el recubrimiento de polvo. Es posible una indicación de profundidad si el inspector observa y compara la salida de la indicación con el tamaño de la abertura visible en la superficie. Cuanto mayor sea la relación de salida a abertura superficial, mayor será el volumen de la discontinuidad.</p>
    
    <h4>8.6.2 Técnicas de Líquidos Penetrantes</h4>
    <p>Las dos técnicas generales de penetrante aprobadas para su uso incluyen la técnica de penetrante de contraste de color (normalmente rojo para contrastar con un fondo blanco) y la técnica de penetrante fluorescente, que utiliza un colorante fluorescente que es visible usando luz ultravioleta, como se muestra en la Figura 30. Las técnicas de penetrante fluorescente generalmente se usan para detectar indicaciones de tipo lineal fino. El examen se realiza en un área oscurecida usando una fuente de luz ultravioleta filtrada, comúnmente conocida como luz negra.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_30.png" class="figure-image">
        <p>Figura 30—Técnica de Penetrante Fluorescente</p>
    </div>
    
    <p>Tres sistemas de penetrante están disponibles para su uso con ambas técnicas. Son:</p>
    <ul>
        <li>removible con solvente,</li>
        <li>lavable con agua, y</li>
        <li>postemulsificable.</li>
    </ul>
    <p>Se debe considerar la compatibilidad con los metales base, el perfil superficial (soldaduras) y el material del proceso antes de usar penetrantes, ya que pueden ser difíciles de eliminar por completo.</p>
    <p>ASME Sección V, Artículo 6, Párrafo T-620, enumera los requisitos generales para PT. Los códigos y especificaciones pueden indicar que el cumplimiento de estos requisitos es obligatorio. El Estándar API 650, ASME B31.3 y ASME Sección VIII, División 1, requieren que PT se realice de acuerdo con ASME Sección V, Artículo 6. Algunos requisitos enumerados en este artículo incluyen los siguientes:</p>
    <ul>
        <li>la inspección se realizará de acuerdo con un procedimiento (según lo especificado por la sección de código de referencia);</li>
        <li>tipo de materiales penetrantes a utilizar;</li>
        <li>detalles para la limpieza previa al examen, incluyendo el tiempo mínimo de secado;</li>
        <li>tiempo de permanencia para el penetrante;</li>
        <li>detalles para eliminar el exceso de penetrante, aplicar el revelador y el tiempo antes de la interpretación;</li>
        <li>evaluación de indicaciones según los estándares de aceptación del código de referencia;</li>
        <li>requisitos de limpieza posterior al examen;</li>
        <li>iluminación superficial mínima requerida (visible o luz negra) de la pieza bajo examen.</li>
    </ul>
    
    <h3>8.7 Examen de Corrientes de Foucault (ET)</h3>
    <h4>8.7.1 General</h4>
    <p>La inspección por corrientes de Foucault se utiliza para detectar imperfecciones superficiales y, en algunos casos, discontinuidades subsuperficiales en tubos, tuberías, alambre, barras y perfiles. ET tiene un uso limitado en la inspección de soldaduras. ET puede usarse como una prueba rápida para determinar que los componentes que se están uniendo durante la soldadura tienen las mismas propiedades del material, y como una verificación rápida de imperfecciones de las caras de la unión soldada. También puede usarse para medir el espesor de recubrimientos protectores no conductores y el espesor de revestimientos.</p>
    <p>ET utiliza un campo magnético para crear corrientes circulantes en material conductor eléctrico. Las discontinuidades en el material alteran los campos inducidos magnéticamente y los presentan en la pantalla de la unidad. Similar a MT, esta técnica proporciona la mayor probabilidad de detección cuando las corrientes circulantes son perpendiculares a la discontinuidad.</p>
    <p>Se puede encontrar más información en ASME Sección V, Artículo 8, que aborda ET de productos tubulares.</p>
    
    <h4>8.7.2 Examen de Corrientes de Foucault Tangenciales (TECA)</h4>
    <p>TECA utiliza una matriz de corrientes de Foucault para introducir corrientes alternas en la superficie del componente probado para detectar y dimensionar grietas que rompen la superficie. El método utiliza una sonda para introducir la corriente y alertar al operador sobre la presencia de defectos y su magnitud.</p>
    <p>El uso del método de bobinas tangenciales multiplexadas y bobinas planas permite escaneos de superficies amplias en una sola pasada para reducir el tiempo de inspección.</p>
    
    <h3>8.8 Examen Radiográfico (RT)</h3>
    <h4>8.8.1 General</h4>
    <p>RT es un método de examen volumétrico capaz de examinar la muestra completa en lugar de solo la superficie. Es el método histórico para examinar soldaduras completas en busca de discontinuidades superficiales y subsuperficiales. El método utiliza el cambio en la absorción de radiación por parte del metal sólido y en áreas de discontinuidad (vacíos). La radiación transmitida causa una imagen permanente (radiografía) de la soldadura que se captura en una película. Se pueden usar métodos alternativos para crear la imagen: radiografía computarizada (CR) o radiografía digital (DR). Cualquiera de los métodos creará una "imagen negativa" del material que se está examinando, ya que las áreas más gruesas aparecerán más claras mientras que las secciones más delgadas aparecerán más oscuras. Los materiales con una densidad relativamente mayor, como el tungsteno, aparecerán mucho más claros que el metal base/soldadura. Debido al peligro de la radiación y los requisitos de licencia, el costo de RT puede ser mayor y el personal capacitado y certificado menos disponible que con otros métodos END.</p>
    <p>Un examinador NDT interpreta y evalúa las radiografías en busca de diferencias en los resultados de absorción y transmisión. Las indicaciones radiográficas muestran una densidad diferente en contraste con la imagen de fondo normal de la soldadura o pieza que se está inspeccionando. El radiógrafo también se asegura de que la película esté expuesta por la fuente primaria de radiación y no por la exposición no deseada a radiación de retrodispersión o secundaria.</p>
    <p>El examinador NDT que realice la interpretación, evaluación e informe de la película deberá estar certificado como mínimo según los requisitos de Nivel II de ASNT. Sin embargo, todo el personal que realice radiografía debe recibir capacitación en seguridad radiológica y cumplir con los requisitos reglamentarios aplicables.</p>
    <p>ASME Sección V, Artículo 2, Párrafo T-220, enumera los requisitos generales para el examen radiográfico. Hay requisitos muy específicos con respecto a la calidad de la radiografía producida, incluida la nitidez de la imagen, la capacidad de demostrar una densidad adecuada de la película en el área de interés y la sensibilidad al tamaño y tipo de defectos esperados. Los requisitos enumerados en el Artículo 2 incluyen:</p>
    <ul>
        <li>método para determinar si hay retrodispersión;</li>
        <li>identificación permanente, rastreable al componente;</li>
        <li>selección de película de acuerdo con SE-1815;</li>
        <tdesignaciones para indicadores de calidad de imagen tipo orificio o alambre;</li>
        <li>técnicas radiográficas sugeridas;</li>
        <li>instalaciones para ver radiografías;</li>
        <li>calibración (certificación del tamaño de la fuente).</li>
    </ul>
    <p>La creación de una radiografía se considera aceptable cuando cumple con las características de calidad requeridas en términos generales de sensibilidad y densidad. Estos factores están diseñados para garantizar que se revelen imperfecciones de una dimensión relativa al espesor de la sección.</p>
    
    <h4>8.8.2 Indicadores de Calidad de Imagen (IQI)</h4>
    <p>Los estándares para radiografía industrial requieren el uso de uno o más IQI para determinar que se ha logrado la sensibilidad requerida. El IQI anteriormente se llamaba penetrámetro, pero este término ya no se usa en la mayoría de los códigos. Para determinar la sensibilidad radiográfica, el orificio tipo placa (y contorno) o alambre, según lo especificado por el código gobernante, debe ser claramente visible en la radiografía. Los errores con la selección de IQI pueden tener un impacto mucho mayor en la interpretación de radiografías de tubería de pared delgada donde grandes imperfecciones en el cordón de raíz pueden reducir significativamente la resistencia e integridad de una soldadura.</p>
    <p>Los IQI son herramientas utilizadas en radiografía industrial para establecer el nivel de calidad de la técnica radiográfica, pero no se usan para determinar el tamaño de una imperfección. Los IQI se seleccionan según lo siguiente:</p>
    <ul>
        <li>material que se está radiografiando: el IQI debe estar hecho de un material que sea radiográficamente similar al que se está radiografiando;</li>
        <li>espesor del material base más refuerzo de soldadura (interno y externo): el espesor de cualquier anillo de respaldo o tira no se considera en la selección de IQI.</li>
    </ul>
    <p>Hay dos tipos generales de IQI.</p>
    <p>Los IQI tipo alambre están construidos con una matriz de (generalmente) seis alambres paralelos de diámetros especificados encapsulados en plástico. Están hechos de un material que es radiográficamente similar al componente que se está radiografiando. Los IQI tipo alambre se colocan sobre y perpendiculares a la soldadura antes de la exposición de una radiografía. El diámetro del alambre esencial, basado en los requisitos del código como función del espesor, visible como una imagen blanca más clara en la radiografía, documenta que la técnica radiográfica tiene la sensibilidad requerida, como función de contraste y definición. El alambre específico que debe ser claramente visible en una radiografía aceptable se conoce como el alambre esencial y está especificado por el estándar. Los IQI tipo alambre se colocan más a menudo perpendiculares a la línea central de la soldadura con la sensibilidad requerida basada en el espesor de la soldadura.</p>
    <p>Los IQI tipo orificio son placas (tiras de metal) de espesor conocido con orificios de un diámetro especificado perforados o punzonados a través de la lámina. Están hechos de un material que es radiográficamente similar al componente que se está radiografiando. Los espesores de los IQI tipo orificio se especifican para representar aproximadamente el 2 % o el 4 % del espesor del objeto que se está radiografiando. Los orificios en el IQI se proyectan en una radiografía como manchas más oscuras (negras o grises). La capacidad de ver el contorno de la placa y el diámetro del orificio requerido visible como una imagen más oscura en la radiografía documenta la sensibilidad de la técnica radiográfica. Los diámetros de los orificios en los IQI tipo orificio son un múltiplo del espesor de la lámina. Los diámetros de orificio comunes son uno, dos y cuatro veces el espesor (1T, 2T y 4T) del IQI, como se muestra en la Figura 31. Los IQI tipo orificio se colocan adyacentes a la soldadura, ya sea en el material parental o en una calza que tenga un espesor equivalente al refuerzo combinado de la soldadura (interno y externo).</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_31.png" class="figure-image">
        <p>Figura 31—Diámetros Comunes de Orificio IQI</p>
    </div>
    
    <p>Para un espesor de soldadura de tubería de 0.312 pulg. (7.9 mm), se requeriría un IQI ASTM No. 15 con un espesor de 0.015 pulg. (0.38 mm) como se muestra en la Figura 32. Véase la Tabla 7 para los números de IQI para otros espesores. Esta tabla ilustra el espesor especificado y el número de IQI ASTM E94 para todos los rangos de espesor, y resume los requisitos de diámetro de orificio esencial para los IQI tipo orificio.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_32.png" class="figure-image">
        <p>Figura 32—IQI</p>
    </div>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 7—IQI ASTM E94</caption>
            <thead>
                <tr>
                    <th>Espesor de Pared o Soldadura de Tubería<br>pulg. (mm)</th>
                    <th>No.</th>
                    <th>Diámetro de Orificio Esencial<br>pulg. (mm)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>0 a 0.250 (0 a 5.6)</td><td>12</td><td>0.025 (0.63)</td></tr>
                <tr><td>> 0.250 a 0.375 (5.8 a 9.5)</td><td>15</td><td>0.030 (0.76)</td></tr>
                <tr><td>> 0.375 a 0.500 (9.5 a 12.7)</td><td>17</td><td>0.035 (0.89)</td></tr>
                <tr><td>> 0.500 a 0.750 (12.7 a 19.0)</td><td>20</td><td>0.040 (1.02)</td></tr>
                <tr><td>> 0.750 a 1.000 (19.0 a 25.4)</td><td>25</td><td>0.050 (1.27)</td></tr>
                <tr><td>> 1.000 a 2.000 (25.4 a 50.8)</td><td>30</td><td>0.060 (1.52)</td></tr>
            </tbody>
        </table>
    </div>
    
    <p>El orificio que debe ser visible en una radiografía aceptable se llama orificio esencial. Cada tamaño de IQI tipo orificio se identifica con un número que está relacionado con el espesor de la lámina en pulgadas. Por ejemplo, un IQI No. 10 tiene 0.010 pulg. (0.25 mm) de espesor mientras que un No. 20 tiene 0.020 pulg. (0.51 mm) de espesor.</p>
    
    <h4>8.8.3 Selección de Fuente Radiactiva</h4>
    <p>Para la inspección de soldaduras, se utilizan isótopos radiactivos de iridio 192, cobalto 60 y selenio 75. También se pueden usar máquinas de rayos X. El iridio 192 normalmente se usa para realizar radiografía en acero con un rango de espesor de 0.25 pulg. a 3 pulg. (6 mm a 75 mm). El cobalto 60 se usa para espesores de acero de 1.5 pulg. a 7 pulg. (38 mm a 175 mm). El espesor mínimo o máximo que se puede radiografiar para un material determinado se determina demostrando que se ha documentado la sensibilidad radiográfica requerida.</p>
    
    <h4>8.8.4 Película Radiográfica</h4>
    <p>Aunque a veces se utiliza el registro digital de radiografía, la película radiográfica Clase I o II se utiliza ampliamente para RT industrial. La película debe ser de una longitud y anchura suficientes para permitir un mínimo de 1 pulg. (25 mm) en exposiciones circunferenciales consecutivas, y 3/4 pulg. (19 mm) de cobertura a cada lado de la soldadura. La película debe almacenarse en un área fresca, seca y limpia, lejos del área de exposición, donde la emulsión no pueda ser afectada por el calor, la humedad o la radiación.</p>
    <p>Un estándar industrial es seleccionar una película radiográfica capaz de proporcionar el nivel de calidad radiográfica requerida en el plazo más expedito posible. Hay varias opciones con respecto a la selección de película radiográfica industrial. La película radiográfica con una estructura de grano ultrafino (más pequeño) es capaz de proporcionar un contraste muy alto con una definición excelente. Esta película generalmente se conoce como Película Clase I. La película radiográfica con una estructura de grano más grande tiene como resultado un contraste y definición más bajos, y se conoce como película Clase 2. Debido a que los granos en la película Clase 1 son mucho más pequeños que los de la película Clase 2, los tiempos de exposición para la película Clase 1 son más largos que los de la película Clase 2. La compensación entre mayor calidad y tiempo de exposición reducido debe evaluarse al seleccionar la película radiográfica para cada aplicación específica.</p>
    
    <h4>8.8.5 Procesado de Película</h4>
    <p>La película expuesta puede procesarse manualmente o el examinador puede usar un procesador automático. El tiempo de revelado típico es de 5 a 8 min a 68 °F (20 °C). Cuando la temperatura del revelador es más alta o más baja, el tiempo de revelado se ajusta; sin embargo, el tiempo de procesamiento y la temperatura deben estar de acuerdo con las recomendaciones del fabricante de productos químicos. El procesamiento automático produce consistentemente radiografías de la calidad deseada. Los productos químicos utilizados en el procesamiento (revelador, baño de parada, fijador y agua de enjuague) se cambian regularmente para mantener los requisitos de calidad.</p>
    
    <h4>8.8.6 Preparación de Superficie</h4>
    <p>Las condiciones de la superficie que podrían enmascarar una imperfección, si se detectan visualmente por el radiógrafo antes de la radiografía, deben remediarse antes de la exposición. Las ondulaciones de la soldadura u otras irregularidades en el interior, donde sea accesible, o en el exterior deben eliminarse para que la característica superficial no pueda confundirse con la imagen de una discontinuidad.</p>
    
    <h4>8.8.7 Identificación Radiográfica</h4>
    <p>La información de identificación en todas las radiografías debe producirse de manera clara y permanente, rastreable al contrato, fabricante, fecha, y al componente, soldadura o cordón de soldadura, y números de pieza según corresponda, y no debe oscurecer ninguna área de interés. Esto generalmente se logra utilizando caracteres de plomo. Los marcadores de ubicación también deben aparecer en la película identificando el área de cobertura.</p>
    
    <h4>8.8.8 Técnicas Radiográficas</h4>
    <h4>8.8.8.1 General</h4>
    <p>La técnica más efectiva tanto desde el punto de vista de la calidad como de la eficiencia es aquella en la que la radiación pasa a través de un solo espesor del material que se está radiografiando y la película está en contacto con la superficie opuesta al lado de la fuente. Se pueden usar otras técnicas según lo dicte el código de referencia o la situación. Independientemente de la técnica utilizada, el objetivo es lograr la mayor calidad posible. El IQI debe colocarse según el código de referencia o especificación. Colocar el IQI lo más cerca posible de la soldadura sin interferir con la imagen de la soldadura es un requisito básico de todos los códigos y especificaciones.</p>
    <p>Se debe elegir una técnica basada en su capacidad para producir imágenes claras de discontinuidades, especialmente aquellas que pueden no estar orientadas en una dirección favorable a la fuente de radiación. La radiografía es extremadamente sensible a la orientación de discontinuidades planas ajustadas como grietas. Si se espera que una discontinuidad plana ajustada esté en un ángulo con respecto a la fuente de radiación, puede ser difícil o imposible de detectar. La naturaleza, ubicación y orientación de las discontinuidades siempre deben ser un factor importante para establecer la técnica.</p>
    
    <h4>8.8.8.2 Técnica de Exposición de Pared Simple, Visualización de Pared Simple</h4>
    <p>Se debe utilizar una técnica de exposición de pared simple siempre que sea práctico. En la técnica de pared simple, la radiación pasa a través de solo una pared del material o soldadura, que se visualiza para aceptación en la radiografía (ver Figura 33). Se debe realizar un número adecuado de exposiciones para demostrar que se ha obtenido la cobertura mínima requerida.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_33.png" class="figure-image">
        <p>Figura 33—Técnicas de Pared Simple</p>
    </div>
    
    <h4>8.8.8.3 Técnica de Exposición de Pared Doble, Visualización de Pared Simple</h4>
    <p>Se puede utilizar una técnica en la que la radiación pasa a través de dos paredes y solo se evalúa la soldadura en el lado de la película. Se debe realizar un número adecuado de exposiciones para demostrar que se cumple la cobertura requerida para soldaduras circunferenciales (materiales). Se debe realizar un mínimo de tres exposiciones tomadas a 120° entre sí.</p>
    
    <h4>8.8.8.4 Técnica de Exposición de Pared Doble, Visualización de Pared Doble</h4>
    <p>Cuando no sea práctico utilizar una técnica de pared simple, se debe utilizar una técnica de pared doble.</p>
    <p>Para materiales y soldaduras en componentes que tienen un tamaño de tubería nominal (NPS) de 3 [diámetro exterior de 3.5 pulg. (90 mm) o menos], se puede utilizar una técnica en la que la radiación pasa a través de dos paredes y la soldadura (material) en ambas paredes se visualiza para aceptación en una sola radiografía. Para la visualización de pared doble de soldaduras, el haz de radiación puede desviarse del plano de la soldadura en un ángulo suficiente para separar las imágenes de las porciones del lado de la fuente y las porciones del lado de la película de la soldadura para que no haya superposición de las áreas que se interpretarán (ver Figura 34). Cuando se requiere cobertura completa, se debe realizar un mínimo de dos exposiciones tomadas a 90° entre sí de cada unión soldada.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_34.png" class="figure-image">
        <p>Figura 34—Técnicas de Pared Doble</p>
    </div>
    
    <p>Alternativamente, la soldadura puede radiografiarse con el haz de radiación posicionado de manera que ambas paredes estén superpuestas. Cuando se requiere cobertura completa, se debe realizar un mínimo de tres exposiciones tomadas a 60° o 120° entre sí para cada unión soldada.</p>
    <p>Debido a problemas inherentes que incluyen la falta de definición geométrica, no se recomienda RT de soldaduras de filete.</p>
    
    <h4>8.8.8.5 Almacenamiento de Película y Otros Medios de Imagen</h4>
    <p>Todas las películas no expuestas deben almacenarse en un lugar limpio y seco donde las condiciones no afecten detrimentemente la emulsión. Si surge alguna pregunta sobre la condición de la película no expuesta, las hojas del frente y la parte posterior de cada paquete o una longitud de película igual a la circunferencia de cada rollo original deben procesarse de manera normal sin exposición a la luz o la radiación. Si la película procesada muestra velado, toda la caja o rollo del cual se eliminó la película de prueba debe descartarse, a menos que pruebas adicionales demuestren que la película restante en la caja o rollo está libre de velado previo a la exposición que exceda 0.30 de densidad transmitida H&D para película base transparente o 0.05 de densidad reflejada H&D para película base opaca. (H&D se refiere al método Hurter-Driffield de definir el ennegrecimiento cuantitativo de la película).</p>
    
    <h4>8.8.9 Evaluación de Radiografías</h4>
    <h4>8.8.9.1 General</h4>
    <p>El paso final en el proceso radiográfico es la evaluación de la radiografía. La interpretación precisa de la película es el paso más esencial en el proceso RT; requiere horas de revisión y la comprensión de principios sobre la naturaleza de la radiación ionizante, así como los diferentes tipos de imágenes y condiciones asociadas en la radiografía industrial. El intérprete debe estar consciente de los diferentes procesos de soldadura y las discontinuidades asociadas con esos procesos. Las diversas discontinuidades encontradas en las soldaduras pueden no ser siempre fácilmente detectables. Por ejemplo, las indicaciones redondeadas como porosidad, escoria e inclusiones tienen una probabilidad mucho mayor de detección que las indicaciones planas como grietas, LOF o solape. Una grieta de soldadura generalmente es ajustada y no siempre detectable por radiografía a menos que su orientación esté en el desplazamiento con respecto a la dirección de la radiación. Por ejemplo, una fuente radiográfica que está desplazada ±5° de la soldadura tiene una menor probabilidad de detectar una grieta en una soldadura donde la fuente está desplazada 10° de la soldadura. LOF es típicamente estrecha y lineal, y tiende a ser más recta que una grieta. En muchos casos, LOF se encuentra en el ángulo de bisel de la soldadura o entre dos pasadas de cordón de soldadura posteriores. Esto puede añadirse al grado de dificultad para identificar esta condición.</p>
    
    <h4>8.8.9.2 Instalaciones para Ver Radiografías</h4>
    <p>Las instalaciones de visualización deben proporcionar iluminación de fondo tenue de una intensidad suficiente para evitar reflexiones, sombras o deslumbramiento molestos en la radiografía. El equipo utilizado para ver radiografías para interpretación debe proporcionar una fuente de luz suficiente para que la soldadura, el metal base y el orificio o alambre esencial del IQI sean visibles a través del rango de densidad especificado. Las condiciones de visualización deben ser tales que la luz alrededor del borde exterior de la radiografía o que pasa a través de porciones de baja densidad de la radiografía no interfiera con la interpretación. También se pueden usar dispositivos de baja magnificación (1.5x a 3x) para ayudar en la interpretación y evaluación de la película, pero la alta magnificación también realza la granulosidad de la película. Por ejemplo, los comparadores con escalas grabadas en el vidrio ofrecen capacidades de magnificación y medición mejoradas.</p>
    
    <h4>8.8.9.3 Calidad de las Radiografías</h4>
    <p>Las radiografías deben estar libres de manchas mecánicas, químicas u otras en la medida en que no enmascaren ni se confundan con la imagen de cualquier discontinuidad en el área de interés. Una radiografía con cualquier mancha en el área de interés debe descartarse y radiografiarse nuevamente el área.</p>
    <p>La definición del área de interés a menudo se malinterpreta comúnmente y es objeto de confusión. Muchos de los códigos y estándares comunes en la industria de los hidrocarburos en realidad no definen el área de interés, lo que lleva a una desalineación entre inspectores y fabricantes. ASTM E1316 establece "la porción específica de una radiografía que necesita ser evaluada". Este es el enfoque generalmente preferido por los inspectores, y le da al inspector la decisión final de identificar el área de interés. ASME Sección XI para la industria nuclear tiene una guía más práctica de 1t donde t es el espesor nominal del componente que se está uniendo. Esto proporciona una guía mínima recomendada para los inspectores que revisan radiografías.</p>
    
    <h4>8.8.9.4 Densidad Radiográfica</h4>
    <p>La densidad de la película es la medida cuantitativa del ennegrecimiento de la película como resultado de la exposición y el procesamiento. Una película clara tiene un valor de densidad cero. Una película expuesta que permite el 10 % de la luz incidente pasar a través tiene una densidad de película de 1.0. Una densidad de película de 2.0 H&D, 3.0 H&D y 4.0 H&D permite el 1 %, 0.1 % y 0.01 %, respectivamente, de la luz incidente pasar a través.</p>
    <p>La densidad de película transmitida a través de la imagen radiográfica a través del cuerpo del IQI tipo orificio, o adyacente al IQI tipo alambre, en el área de interés debe estar dentro del rango de 1.8 H&D a 4.0 para rayos X y 2.0 H&D a 4.0 H&D para rayos gamma. Una densidad radiográfica adecuada es esencial; las condiciones rechazables en una soldadura pueden no ser detectables si no se observan ligeras variaciones de densidad en las radiografías.</p>
    <p>Se utiliza un densitómetro o una película de comparación de escalón para medir o estimar la oscuridad (densidad) de la película, respectivamente. Un densitómetro es un instrumento electrónico calibrado utilizando una tableta de escalón o una película de calibración de escalón rastreable a un estándar nacional. La película de comparación de escalón es un escalón que ha sido documentado para tener una densidad H&D específica mediante examen utilizando un densitómetro calibrado.</p>
    <p>La densidad de la radiografía se mide a través del IQI. Se deben tomar varias lecturas de densidad en ubicaciones aleatorias en el área de interés (excluyendo áreas que tengan discontinuidades). El rango de densidad en el área de interés no debe variar más o menos que un porcentaje especificado de la densidad base según lo definido en el código o especificación.</p>
    <p>Es una buena práctica procesar una pieza de película no expuesta diariamente para determinar la condición previa a la exposición de la película radiográfica.</p>
    
    <h4>8.8.9.5 Radiación de Retrodispersión</h4>
    <p>La radiación que pasa a través del objeto y la película puede reflejarse hacia la película (un fenómeno conocido como retrodispersión). Una letra de plomo "B" con una dimensión mínima de 1/2 pulg. (12 mm) y 1/16 pulg. (1.5 mm) de espesor generalmente se adjunta a la parte posterior de cada portapelícula/casete durante cada exposición para determinar si la radiación de retrodispersión está exponiendo la película. Si aparece una imagen de densidad más clara de la letra "B" en cualquier radiografía de un fondo más oscuro, se considera que la protección contra la radiación de dispersión es insuficiente y la radiografía se considera inaceptable. Una imagen de densidad más oscura de la "B" sobre un fondo más claro no es motivo para el rechazo de la radiografía.</p>
    <p>Hay una idea errónea común por parte de aquellos no capacitados en radiografía industrial de que la letra "B" siempre aparece en una radiografía. De hecho, esto no es correcto, y todo lo contrario es cierto. Cuando no hay ningún medio además del aire libre para causar retrodispersión, habrá radiación insuficiente reflejada hacia la película o dispositivo de imagen para producir una imagen.</p>
    
    <h4>8.8.9.6 Interpretación</h4>
    <p>La interpretación radiográfica es la habilidad de extraer la máxima información de una imagen radiográfica. Esto requiere un juicio subjetivo por parte del intérprete y está influenciado por el conocimiento del intérprete de:</p>
    <ul>
        <li>las características de la fuente de radiación y los niveles de energía con respecto al material que se está examinando;</li>
        <li>las características del medio de grabación en respuesta a la fuente de radiación seleccionada y los niveles de energía;</li>
        <li>el procesamiento del medio de grabación con respecto a la calidad de la imagen;</li>
        <li>la forma del producto, el proceso de soldadura y la configuración geométrica del objeto que se está radiografiando;</li>
        <li>los tipos posibles y más probables de discontinuidades que pueden ocurrir en el objeto de prueba;</li>
        <li>las posibles variaciones de las imágenes de las discontinuidades como función de la geometría radiográfica y otros factores; y</li>
        <li>los criterios de aceptación que se aplicarán para la determinación de aceptación/rechazo.</li>
    </ul>
    <p>Debido a que los intérpretes radiográficos tienen niveles variables de conocimiento y experiencia, la capacitación se convierte en un factor importante para mejorar los niveles de acuerdo entre los intérpretes. En aplicaciones donde la calidad del producto final es importante para la seguridad o la confiabilidad, más de un intérprete calificado debe evaluar las radiografías. Las Figuras 35-46 son imágenes de soldadura radiográficas que ilustran algunas discontinuidades y defectos típicos de soldadura.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_35.png" class="figure-image">
        <p>Figura 35—Penetración Incompleta o Falta de Penetración (LOP)</p>
        <p>NOTA 1 Los bordes de las piezas no se han soldado juntos, generalmente en la parte inferior de soldaduras de ranura en V simple.<br>NOTA 2 Imagen radiográfica: Una banda de densidad más oscura, con bordes paralelos rectos, en el centro del ancho de la imagen de la soldadura.<br>NOTA 3 Proceso de soldadura: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_36.png" class="figure-image">
        <p>Figura 36—Inclusiones de Escoria Interpasada</p>
        <p>NOTA 1 Generalmente causada por impurezas no metálicas que se solidifican en la superficie de la soldadura y no se eliminan entre pasadas de soldadura.<br>NOTA 2 Imagen radiográfica: Una mancha de densidad más oscura de forma irregular generalmente ligeramente alargada y espaciada aleatoriamente.<br>NOTA 3 Proceso de soldadura: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_37.png" class="figure-image">
        <p>Figura 37—Porosidad Agrupada</p>
        <p>NOTA 1 Vacíos redondeados o ligeramente alargados agrupados.<br>NOTA 2 Imagen radiográfica: Manchas de densidad más oscura redondeadas o ligeramente alargadas en grupos espaciados aleatoriamente.<br>NOTA 3 Proceso de soldadura: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_38.png" class="figure-image">
        <p>Figura 38—Falta de Fusión de Pared Lateral</p>
        <p>NOTA 1 Vacíos alargados entre los cordones de soldadura y las superficies de la unión.<br>NOTA 2 Imagen radiográfica: Líneas de densidad más oscura alargadas, paralelas o individuales, a veces con manchas de densidad más oscura dispersas a lo largo de las líneas LOF que son muy rectas en la dirección longitudinal y no sinuosas como las líneas de escoria alargada.<br>NOTA 3 Proceso de soldadura: GMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_39.png" class="figure-image">
        <p>Figura 39—Escoria Alargada (Vías de Ferrocarril)</p>
        <p>NOTA 1 Impurezas que se solidifican en la superficie después de soldar y no se eliminaron entre pasadas.<br>NOTA 2 Imagen radiográfica: Líneas de densidad más oscura alargadas, paralelas o individuales, irregulares en ancho y ligeramente sinuosas en la dirección longitudinal.<br>NOTA 3 Proceso de soldadura: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_40.png" class="figure-image">
        <p>Figura 40—Quemadura</p>
        <p>NOTA 1 Una depresión severa o un agujero tipo cráter en la parte inferior de la soldadura, pero generalmente no alargado.<br>NOTA 2 Imagen radiográfica: Una densidad más oscura localizada con bordes difusos en el centro del ancho de la imagen de la soldadura. Puede ser más ancha que el ancho de la imagen del cordón de raíz.<br>NOTA 3 Proceso de soldadura: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_41.png" class="figure-image">
        <p>Figura 41—Desalineación o Desajuste con Falta de Penetración (LOP)</p>
        <p>NOTA 1 Una desalineación de las piezas a soldar y un llenado insuficiente de la parte inferior de la soldadura o "área de raíz".<br>NOTA 2 Imagen radiográfica: Un cambio de densidad abrupto a través del ancho de la imagen de la soldadura con una línea longitudinal más oscura recta en el centro del ancho de la imagen de la soldadura a lo largo del borde del cambio de densidad.<br>NOTA 3 Proceso de soldadura: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_42.png" class="figure-image">
        <p>Figura 42—Penetración Excesiva (Carámbanos, Goteo)</p>
        <p>NOTA 1 Metal extra en la parte inferior (raíz) de la soldadura.<br>NOTA 2 Imagen radiográfica: Una densidad más clara en el centro del ancho de la imagen de la soldadura, ya sea extendida a lo largo de la soldadura o en "gotas" circulares aisladas.<br>NOTA 3 Proceso de soldadura: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_43.png" class="figure-image">
        <p>Figura 43—Socavación Interna (de Raíz)</p>
        <p>NOTA 1 Un socavado del metal parental, junto al borde de la parte inferior o superficie interna de la soldadura.<br>NOTA 2 Imagen radiográfica: Una densidad más oscura irregular cerca del centro del ancho de la imagen de la soldadura a lo largo del borde de la imagen del cordón de raíz.<br>NOTA 3 Proceso de soldadura: SMAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_44.png" class="figure-image">
        <p>Figura 44—Grieta Transversal</p>
        <p>NOTA 1 Una fractura en el metal de soldadura que cruza la soldadura.<br>NOTA 2 Imagen radiográfica: Una línea retorcida y plumosa de densidad más oscura que cruza el ancho de la imagen de la soldadura.<br>NOTA 3 Proceso de soldadura: GIAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_45.png" class="figure-image">
        <p>Figura 45—Inclusiones de Tungsteno</p>
        <p>NOTA 1 Fragmentos aleatorios de tungsteno fusionados en pero no derretidos en el metal de soldadura.<br>NOTA 2 Imagen radiográfica: Manchas de forma irregular de menor densidad ubicadas aleatoriamente en la imagen de la soldadura.<br>NOTA 3 Proceso de soldadura: GIAW.</p>
    </div>
    
    <div class="figure-container">
    <img src="images/api577_figure_46.png" class="figure-image">
        <p>Figura 46—Porosidad Alineada en el Cordón de Raíz</p>
        <p>NOTA 1 Vacíos redondeados y alargados en la parte inferior de la soldadura alineados a lo largo de la línea central de la soldadura.<br>NOTA 2 Imagen radiográfica: Manchas de densidad más oscura redondeadas y alargadas, que pueden estar conectadas, en una línea recta en el centro del ancho de la imagen de la soldadura.<br>NOTA 3 Proceso de soldadura: GMAW.</p>
    </div>
    
    <h4>8.8.10 Registros del Examen Radiográfico</h4>
    <p>La información reportada debe incluir, pero no limitarse a, lo siguiente:</p>
    <ul>
        <li>número/identificación del trabajo/contrato;</li>
        <li>colocación de marcadores de ubicación;</li>
        <li>número de radiografías (exposiciones);</li>
        <li>voltaje de rayos X o tipo de isótopo utilizado;</li>
        <li>tamaño del punto focal de la máquina de rayos X o tamaño efectivo del punto focal de la fuente de isótopo;</li>
        <li>tipo y espesor del material base, espesor del refuerzo de soldadura;</li>
        <li>distancia fuente-objeto;</li>
        <li>distancia del lado de la fuente del objeto a la película;</li>
        <li>fabricante y tipo/designación de la película;</li>
        <li>número de películas en cada portapelícula/casete;</li>
        <li>exposición de pared simple o doble;</li>
        <li>visualización de pared simple o doble;</li>
        <li>tipo de IQI y la designación requerida del número de orificio/alambre;</li>
        <li>referencias de procedimiento y/o código, resultados del examen;</li>
        <li>fecha del examen, nombre y nivel de calificación de los examinadores.</li>
    </ul>
    <p>Cualquier dibujo, identificación de componente o detalles adicionales deben proporcionarse al representante del cliente, junto con el informe de examen. Se proporciona un informe de radiografía de muestra en el Anexo E.</p>
    
    <h3>8.9 Examen Ultrasónico (UT)</h3>
    <h4>8.9.1 General</h4>
    <p>UT es capaz de detectar discontinuidades superficiales y subsuperficiales. Un haz de sonido en el rango de frecuencia ultrasónica (>20,000 ciclos por segundo) viaja en línea recta a través del metal y se refleja desde una interfaz. Para la inspección de soldaduras, este haz de sonido de alta frecuencia se introduce en la soldadura y la ZAC a lo largo de una trayectoria predecible, que, al reflejarse o refractarse desde una imperfección o característica geométrica, produce una respuesta que se procesa y presenta en la pantalla. Estas imágenes se presentan de manera que puedan proporcionar al inspector tanto la información de tamaño como la posicional de la imperfección.</p>
    <p>Las técnicas de haz recto se utilizan para la evaluación del espesor o para verificar laminaciones y/u otras condiciones que puedan impedir que los haces angulares examinen la soldadura. Los transductores de haz recto (o de cero grados) dirigen un haz de sonido desde una superficie accesible de la pieza de prueba hasta un límite o interfaz que es paralelo o casi paralelo a la superficie contactada. El tiempo que tarda el sonido en hacer un viaje de ida y vuelta a través de la pieza se muestra en el instrumento ultrasónico. Hay varias formas diferentes en que la información ultrasónica de haz recto puede mostrarse, como se muestra en las Figuras 47-49, reproducidas cortesía de GE Inspection. Estas pantallas representan un espesor preciso de la pieza de prueba.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_47.png" class="figure-image">
        <p>Figura 47—Exploración A</p>
    <img src="images/api577_figure_48.png" class="figure-image">
        <p>Figura 48—Exploración B</p>
    <img src="images/api577_figure_49.png" class="figure-image">
        <p>Figura 49—Exploración C</p>
        <p>Cortesía de GE Inspection</p>
    </div>
    
    <p>Se emplean técnicas de haz de onda de corte o angular para la resolución de discontinuidades en soldaduras. El haz de sonido entra en el área de la soldadura en un ángulo conocido. Si el sonido se refleja desde una discontinuidad, una parte del haz de sonido regresa al transductor donde se muestra en el instrumento ultrasónico. Estas imágenes pueden mostrarse de varias maneras para ayudar en la evaluación. A partir de esta pantalla, se puede determinar información como el tamaño, ubicación y tipo de discontinuidad.</p>
    
    <h4>8.9.2 Tipos de Pantallas Ultrasónicas</h4>
    <h4>8.9.2.1 Pantalla de Exploración A</h4>
    <p>La exploración A, como se muestra en la Figura 47, es el tipo de pantalla más común. Muestra la respuesta a lo largo de la trayectoria del haz de sonido para una posición dada de la sonda. Muestra la amplitud de la señal que proviene de la discontinuidad como una función del tiempo. El eje x (derecha) representa el tiempo de vuelo e indica la profundidad de una discontinuidad o pared posterior (espesor). El eje y muestra la amplitud de las señales reflejadas (ecos) y puede usarse para estimar el tamaño de una discontinuidad en comparación con un reflector de referencia conocido utilizado durante la calibración del instrumento.</p>
    
    <h4>8.9.2.2 Pantalla de Exploración B</h4>
    <p>La pantalla de exploración B (ver Figura 48) muestra una vista en sección transversal del objeto bajo prueba escaneando la sonda a lo largo de un eje. El eje horizontal (izquierda) se relaciona con la posición de la sonda a medida que se mueve a lo largo de la superficie del objeto y proporciona información sobre la ubicación lateral de la discontinuidad. La amplitud del eco generalmente se indica por la intensidad de color o escala de grises de las indicaciones de eco.</p>
    
    <h4>8.9.2.3 Pantalla de Exploración C</h4>
    <p>La pantalla de exploración C (ver Figura 49) muestra una vista en planta del objeto de prueba. La imagen se produce escaneando mecánica o electrónicamente en un plano x-y. Los ejes x e y forman un sistema de coordenadas que indica la posición de la sonda/discontinuidad. La intensidad de color o escala de grises puede usarse para representar la profundidad de la discontinuidad o la amplitud del eco.</p>
    
    <h4>8.9.2.4 Pantalla de Exploración D</h4>
    <p>La pantalla de exploración D (ver Figura 50) muestra una vista a través del espesor que muestra una sección transversal del objeto de prueba perpendicular a la superficie de escaneo y perpendicular a la proyección del eje del haz en la superficie de escaneo. La pantalla de exploración D es exactamente como una pantalla de exploración B excepto que la vista está orientada perpendicular a la vista de exploración B en el plano de la placa. La exploración D permite una discriminación rápida de indicaciones a lo largo de una soldadura presentando su posición en profundidad desde la superficie de escaneo. Un ejemplo de la relación entre las cuatro pantallas ultrasónicas comunes se muestra en la Figura 50.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_50.png" class="figure-image">
        <p>Figura 50—Exploración D</p>
    </div>
    
    <h4>8.9.2.5 Pantalla de Exploración S de Arreglo Faseado</h4>
    <p>La pantalla de exploración S o sector (ver Figura 51) muestra imágenes bidimensionales de reflectores ultrasónicos analizando datos y luego trazando información de una multitud de ángulos simultáneamente. La imagen es una vista en sección transversal del área donde pasa el ultrasonido. Se puede medir información de ubicación y tamaño para cualquier reflector que esté en el escaneo sectorial.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_51.png" class="figure-image">
        <p>Figura 51—Exploración S</p>
    </div>
    
    <p>La ultrasonografía de arreglo faseado logra esto utilizando un transductor que contiene múltiples elementos, comúnmente de 8 a 128, que se excitan a intervalos para crear interferencia constructiva en el frente de onda de energía ultrasónica. Esta interferencia constructiva se controla por la cantidad de tiempo de retraso en la excitación del elemento y puede dirigir el sonido a través de un rango de ángulos. Esta matriz de ángulos de haz luego se traza para crear el escaneo sectorial. La energía ultrasónica proporciona respuestas de manera pulso-eco como con las técnicas convencionales de haz recto y haz angular.</p>
    
    <h4>8.9.2.6 Pantallas de Exploración B y D de Tiempo de Vuelo de Difracción (TOFD) (ver Figura 52 y Figura 53)</h4>
    <p>Las pantallas de exploración B y D son un formato diferente al de las pantallas de exploración B y D adquiridas en cualquier otra técnica ultrasónica que utilice información proporcionada de manera pulso-eco. Las imágenes de exploración B y D de TOFD proporcionan información de dimensionamiento de defectos para la extensión a través de la pared utilizando señales difractadas en lugar de señales de pulso-eco. Las pantallas de exploración B y D de TOFD se crean apilando pantallas de exploración A a un intervalo preestablecido o paso de recolección y viendo los datos en una imagen de escala de grises donde el 100 % de amplitud de la onda sinusoidal en cualquier dirección (positiva o negativa) se traza como todo negro o todo blanco con imágenes grises de señales de menos del 100 % de amplitud.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_52.png" class="figure-image">
        <p>Figura 52—Pantalla de Exploración D de TOFD</p>
    <img src="images/api577_figure_53.png" class="figure-image">
        <p>Figura 53—Pantalla de Exploración B de TOFD</p>
    <img src="images/api577_figure_54.png" class="figure-image">
        <p>Figura 54—Arreglo de Transductor TOFD y Propagación del Haz de Energía Ultrasónica</p>
    </div>
    
    <p>TOFD pasa energía de sonido a través de un área de soldadura utilizando un transductor transmisor en un lado de la soldadura y un transductor receptor en el otro (ver Figura 54). Cualquier cambio en el material, como discontinuidades, es vibrado por la energía ultrasónica inducida. Esta vibración de discontinuidades produce señales difractadas desde la discontinuidad que luego son recibidas por el transductor receptor.</p>
    <p>El conjunto de sondas TOFD puede manipularse a lo largo de una soldadura o a través de una soldadura para crear escaneos. La inspección estándar de soldadura TOFD se realiza moviendo sondas TOFD a lo largo de la soldadura, con un transductor a cada lado de la soldadura, donde la energía ultrasónica es perpendicular a la soldadura. Esto es una exploración D de TOFD o escaneo no paralelo. Las sondas TOFD también pueden manipularse a través de un área paralela a la trayectoria del sonido para evaluar una indicación desde una posición de 90° desde la imagen perpendicular. Esto es una exploración B de TOFD o escaneo paralelo. Esto solo puede lograrse si se ha eliminado el cordón de la soldadura con el propósito de inspección de soldadura, y se usa más a menudo para proporcionar información de ubicación de imperfección más precisa una vez que han sido ubicadas con la exploración D de TOFD.</p>
    
    <h4>8.9.2.7 Requisitos para la Inspección Ultrasónica</h4>
    <p>ASME Sección V, Artículo 4, enumera los requisitos generales para el examen ultrasónico. Los códigos y especificaciones pueden indicar que el cumplimiento de estos requisitos es obligatorio. ASME B31.3 y ASME Sección VIII, División 1, requieren que el examen ultrasónico se realice de acuerdo con ASME Sección V, Artículo 4, que requiere que se califique y siga un procedimiento por escrito. Algunos requisitos de procedimiento que deben incluirse son:</p>
    <ul>
        <li>soldadura, tipos de metal base y configuraciones a examinar;</li>
        <li>técnica (haz recto o angular);</li>
        <li>tipo de acoplante;</li>
        <li>tipo de instrumento ultrasónico;</li>
        <li>requisitos de linealidad del instrumento;</li>
        <li>descripción de la calibración;</li>
        <li>material y diseño del bloque de calibración;</li>
        <li>preparación de la superficie de inspección;</li>
        <li>requisitos de escaneo (paralelo y perpendicular a la soldadura);</li>
        <li>técnicas de escaneo (manual o automatizado);</li>
        <li>requisitos de evaluación;</li>
        <li>datos a registrar;</li>
        <li>informe de indicaciones según los estándares de aceptación del código de referencia;</li>
        <li>limpieza posterior al examen.</li>
    </ul>
    
    <h4>8.9.3 Calibración del Sistema de Examen Ultrasónico</h4>
    <h4>8.9.3.1 General</h4>
    <p>La calibración del sistema de examen ultrasónico es el proceso de ajustar los controles del instrumento ultrasónico de manera que la pantalla UT de la trayectoria del sonido sea lineal. La calibración es para garantizar que haya suficiente sensibilidad para detectar discontinuidades del tamaño y tipo esperados en la forma del producto y el proceso.</p>
    <p>El sistema de inspección incluye al examinador, el instrumento ultrasónico, el cableado, la unidad de búsqueda incluyendo cuñas o zapatas, el acoplante y un estándar de referencia. El transductor de la unidad de búsqueda debe ser de un tamaño, frecuencia y ángulo capaces de detectar el defecto rechazable más pequeño que se espera que esté en la pieza que se está examinando. El instrumento ultrasónico debe cumplir con los requisitos de ASME Sección V, Artículo 5, Párrafo T-530, y debe proporcionar la funcionalidad para producir la pantalla requerida tanto de los reflectores de calibración como de las discontinuidades ubicadas durante el examen.</p>
    <p>El estándar de referencia (bloque de calibración) debe tener la misma composición y condición de tratamiento térmico que el producto que se está examinando. También debe tener la misma condición superficial que la pieza que se está examinando. El estándar de referencia debe ser de un tamaño aceptable y tener reflectores conocidos de un tamaño y ubicación especificados. Estos reflectores deben ser aceptables para el código de referencia. ASME Sección V, Artículo 4, Figura T-434.2.1 y Figura T-434.3, detalla los requisitos para la construcción básica del bloque de calibración.</p>
    <p>Las verificaciones del sistema de calibración deben realizarse antes y al finalizar un examen. Además, se requiere una verificación del sistema con cualquier cambio en la unidad de búsqueda, el cableado y el examinador, y después de un marco de tiempo específico, como cuatro horas. La temperatura del estándar de calibración debe estar dentro de 25 °F (14 °C) de la pieza que se va a examinar. Si la temperatura cae fuera de ese rango, el estándar de referencia se lleva a dentro de 25 °F (14 °C), y se debe realizar una verificación de calibración. Para trabajos de alta temperatura, generalmente son necesarios transductores y acoplantes especiales de alta temperatura. Se debe considerar que las variaciones de temperatura dentro de la cuña o línea de retraso pueden causar cambios en el ángulo del haz o alterar el retraso en la base de tiempo. Las verificaciones del sistema generalmente se realizan como mínimo cada cuatro horas durante el proceso de examen, pero pueden hacerse con más frecuencia a discreción del examinador después de cualquier instancia de irregularidad sospechosa del sistema.</p>
    <p>Si, durante una verificación de calibración del sistema, se determina que el equipo ultrasónico no funciona correctamente, todas las áreas probadas desde la última calibración exitosa deben reexaminarse.</p>
    
    <h4>8.9.3.2 Evaluación de Eco con Corrección de Amplitud de Distancia</h4>
    <p>La curva de corrección de amplitud de distancia (DAC) permite una evaluación de eco de reflectores desconocidos mediante la comparación de la altura del eco con respecto a la DAC (%DAC).</p>
    <p>Debido a la atenuación y divergencia del haz inherentes a todos los materiales, la amplitud del eco de un reflector de un tamaño dado disminuye a medida que aumenta la distancia desde la sonda. Para establecer una curva DAC, se registra la respuesta máxima de un reflector de referencia especificado (p. ej., fondo plano orificio perforado lateral) a diferentes profundidades sobre el rango de prueba requerido. El bloque de calibración con reflectores de referencia debe ser del mismo material que la pieza bajo prueba. La curva se traza a través de los puntos pico de las señales de eco de los reflectores como se muestra en la Figura 55. La curva representa la pérdida de amplitud de la señal basada en la distancia, desde el mismo reflector de tamaño de referencia utilizando una sonda dada. La configuración de ganancia utilizada para establecer la DAC durante la calibración inicial se conoce como el nivel de sensibilidad de referencia primario. La evaluación se realiza en este nivel de sensibilidad.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_55.png" class="figure-image">
        <p>Figura 55—Curva DAC para un Reflector de Referencia Especificado</p>
    </div>
    
    <p>Los reflectores desconocidos (defectos) se evalúan comparando su amplitud de eco con la altura de la curva DAC (es decir, 50 % DAC, 80 % DAC, etc.) en la distancia de trayectoria del sonido del reflector desconocido (ver Figura 56). Las características del material y la divergencia del haz se compensan automáticamente porque el bloque de referencia y el objeto de prueba están hechos del mismo material, y tienen el mismo tratamiento térmico y condición superficial.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_56.png" class="figure-image">
        <p>Figura 56—Curva DAC para un Reflector Desconocido</p>
    </div>
    
    <h4>8.9.4 Preparación de Superficie</h4>
    <p>Antes del examen ultrasónico, todas las superficies de escaneo deben estar libres de salpicaduras de soldadura, irregularidades superficiales y materia extraña que puedan interferir con el examen. La superficie de la soldadura debe prepararse de manera que permita un examen significativo.</p>
    
    <h4>8.9.5 Cobertura del Examen</h4>
    <p>El volumen de la soldadura, la ZAC y una porción del metal base adyacente en ambos lados de la soldadura deben examinarse moviendo la unidad de búsqueda sobre la superficie de examen para escanear todo el volumen de examen. Cada pasada del transductor debe superponerse a la pasada anterior en al menos un 10 % de la dimensión del elemento del transductor. La velocidad de movimiento de la unidad de búsqueda no debe exceder las 6 pulg. (150 mm) por segundo a menos que la calibración se haya verificado a una velocidad aumentada, y el instrumento sea capaz de resolver imperfecciones a esa velocidad. En muchos casos, la unidad de búsqueda se oscila de lado a lado para aumentar las posibilidades de detectar grietas finas que estén orientadas de manera diferente a perpendicular al haz de sonido.</p>
    
    <h4>8.9.6 Examen de Haz Recto</h4>
    <p>Se debe realizar un examen de haz recto adyacente a la soldadura para detectar reflectores que interferirían con el examen de haz angular de la soldadura, como una laminación en el material base. Todas las áreas que tengan este tipo de reflector deben identificarse ya que la respuesta del sistema en estas áreas será diferente a la de las ubicaciones no afectadas.</p>
    
    <h4>8.9.7 Examen de Haz Angular</h4>
    <h4>8.9.7.1 General</h4>
    <p>Típicamente, se realizan dos exámenes de haz angular diferentes en una soldadura: un escaneo para reflectores que están orientados paralelos a la soldadura, y un escaneo para reflectores que están orientados transversales a la soldadura. En ambos casos, el escaneo debe realizarse a una configuración de ganancia de al menos dos veces (+6 dB) el nivel de sensibilidad de referencia establecido durante la calibración. Sin embargo, la evaluación de indicaciones debe realizarse en el nivel de sensibilidad de referencia primario. En ambos casos, la unidad de búsqueda debe manipularse de manera que la energía ultrasónica pase a través del volumen requerido de la soldadura y la ZAC.</p>
    <p>Durante el examen de reflectores que están orientados paralelos a la soldadura, el haz de sonido se dirige en ángulos rectos aproximados a la soldadura, preferiblemente desde ambos lados de la soldadura. Para reflectores que están orientados transversales a la soldadura, el haz de sonido se dirige paralelo a la soldadura y se realiza un escaneo en una dirección alrededor de la soldadura, luego la unidad de búsqueda se gira 180° y se realiza otro escaneo hasta que la energía ultrasónica haya pasado a través del volumen requerido de soldadura y ZAC en dos direcciones.</p>
    <p>Para inspeccionar defectos transversales, los transductores de haz angular deben rotarse 90°, o puede realizarse una inspección adicional de defectos transversales utilizando otras técnicas para complementar las técnicas automatizadas de inspección ultrasónica de soldaduras.</p>
    
    <h4>8.9.7.2 Examen de Haz Angular Suplementario</h4>
    <p>Al inspeccionar una soldadura con TOFD, la presencia de la señal de onda lateral y las señales de indicación de pared posterior pueden oscurecer la detección de defectos presentes en estas zonas. ASME BPVC, Sección V, requiere que las superficies cercana y lejana de la soldadura (es decir, ambas superficies superior e inferior) sean examinadas por haz angular con los ángulos elegidos que sean más cercanos a ser perpendiculares a las interfaces de la soldadura. Este examen puede realizarse manualmente o mecanizado; si se mecaniza, los datos deben recopilarse junto con el examen TOFD.</p>
    
    <h4>8.9.8 Examen Ultrasónico Automatizado (AUT)</h4>
    <p>La inspección volumétrica de soldaduras puede realizarse utilizando una de las cuatro técnicas de inspección ultrasónica de soldadura automatizadas.</p>
    <ul>
        <li><strong>Escaneo Raster de Eco Pulsado:</strong> Esta técnica inspecciona con compresión de cero grados y dos transductores de haz angular que interrogan la soldadura desde ambos lados simultáneamente. Los transductores de compresión examinan en busca de corrosión o defectos laminares en el metal base y los transductores de haz angular escanean el volumen del metal de soldadura.</li>
        <li><strong>Inspección por Zonas de Eco Pulsado:</strong> La inspección por zonas es una técnica de escaneo lineal. La técnica utiliza una matriz de transductores a cada lado de la soldadura con los ángulos del transductor y las compuertas de tiempo de tránsito establecidas para garantizar que se inspeccione el volumen completo de la soldadura.</li>
        <li><strong>Tiempo de Vuelo de Difracción (TOFD):</strong> Esta es una técnica de escaneo lineal utilizada en el modo emisor-receptor. Se utilizan transductores multimodo para obtener la inspección de volumen máximo de la región de la soldadura. Puede requerirse más de un conjunto de transductores para una inspección volumétrica completa.</li>
        <li><strong>Inspección de Arreglo Faseado (PA):</strong> Esta técnica utiliza una matriz de elementos del transductor para producir la dirección del eje del haz ultrasónico o el enfoque del haz ultrasónico sobre un rango especificado. Esto permite al usuario la capacidad de inspeccionar ciertas porciones o zonas del componente que se está probando utilizando muchos ángulos de haz diferentes.</li>
    </ul>
    
    <h4>8.9.9 Evaluación y Dimensionamiento de Discontinuidades</h4>
    <h4>8.9.9.1 General</h4>
    <p>Los procedimientos UT deben incluir los requisitos para la evaluación de discontinuidades. Típicamente, cualquier imperfección que cause una indicación en exceso de un cierto porcentaje de la curva DAC debe investigarse en términos de los estándares de aceptación. El procedimiento debe detallar la técnica de dimensionamiento que se utilizará para trazar la dimensión a través del espesor y la longitud.</p>
    <p>Una técnica de dimensionamiento comúnmente utilizada se llama "caída de intensidad" o técnica de "caída de 6 dB". Esta técnica de dimensionamiento utiliza la dispersión del haz del transductor para estimar rápidamente la longitud axial del reflector. Utilizando esta técnica, el transductor se posiciona en la pieza de manera que la amplitud del reflector se maximice. Este punto se marca con un lápiz de grasa. El instrumento UT se ajusta para establecer la señal al 80 % de la altura de pantalla completa (FSH). Luego, el transductor se mueve lateralmente hasta que el eco ha caído al 40 % FSH (6 dB). Esta posición también se marca. El transductor luego se mueve lateralmente en la otra dirección, pasado el punto de amplitud máxima, hasta que la respuesta del eco alcance nuevamente el 40 % FSH. Este punto se marca con el lápiz de grasa. Las dos marcas exteriores producen el tamaño axial aproximado del defecto.</p>
    <p>Se deben utilizar otras técnicas de dimensionamiento para obtener una medición más precisa de la longitud y la dimensión a través de la pared del defecto. Con los avances en tecnologías, se describen varias otras técnicas de dimensionamiento a través del espesor en las Secciones 8.9.9.2–8.9.9.5.</p>
    
    <h4>8.9.9.2 Método de Onda Creeping ID</h4>
    <p>El método de onda creeping de diámetro interior (ID) utiliza los efectos de múltiples modos de transferencia de sonido, como ondas longitudinales y ondas de corte para dimensionar cualitativamente defectos. El método se utiliza para la ubicación global de defectos en las regiones inferior 1/3, media 1/3 y superior 1/3 del objeto/soldadura. Se presentan tres ondas distintas con el método de onda creeping ID:</p>
    <ol>
        <li>Onda longitudinal refractada de alto ángulo de aproximadamente 70°;</li>
        <li>onda de corte directa de 30° que se convierte en una onda longitudinal refractada de 70°;</li>
        <li>onda de corte indirecta u "onda de cabeza" que se convierte en el diámetro interior de una onda de corte a una onda longitudinal, y se mueve a lo largo de la superficie.</li>
    </ol>
    
    <h4>8.9.9.3 Método de Difracción de Punta</h4>
    <p>Los métodos de difracción de punta son muy eficaces para dimensionar defectos que están abiertos a la superficie del diámetro interior o exterior. Para defectos conectados al ID, se utiliza la técnica de media "V" o una y media "V". Para defectos conectados al diámetro exterior (OD), hay dos técnicas disponibles: la técnica de difracción de punta de tiempo de vuelo y la técnica de medición de tiempo de la señal difractada de punta y la señal base.</p>
    
    <h4>8.9.9.4 Método Longitudinal de Alto Ángulo</h4>
    <p>El método de onda longitudinal refractada de alto ángulo es muy eficaz para defectos muy profundos. Se utilizan ondas de enfoque dual, de 60, 70 y creeping OD para examinar la mitad exterior del espesor del material del componente. Los diseños de sonda varían según el fabricante. La profundidad de penetración depende del ángulo de refracción, la frecuencia y la profundidad de enfoque. Muchos de estos transductores se utilizan no solo para dimensionar, sino también para la detección y confirmación de defectos detectados durante el examen de detección primario. Para materiales de grano grueso, estas sondas funcionan bien donde las sondas de onda de corte son ineficaces.</p>
    
    <h4>8.9.9.5 Método Bimodal</h4>
    <p>El método bimodal es una sonda tándem de doble elemento con los cristales del transductor ubicados uno frente al otro. La sonda también genera una onda creeping ID. La física de las ondas es esencialmente la misma. El efecto de enfoque pseudoparabólico de los cristales de doble elemento es muy eficaz para defectos conectados al ID en la región de la pared media, del 30 % al 60 % a través de la profundidad de la pared. Una onda de corte de bajo ángulo (indirecta) se convierte en el ID para producir una onda creeping ID, que detecta la base del defecto. Una onda de corte de bajo ángulo adicional se convierte en el ID en una onda longitudinal, que refleja una onda longitudinal desde la cara del defecto. Una onda longitudinal refractada de alto ángulo detecta el extremo superior del defecto (70°). El método bimodal puede usarse para confirmar la profundidad de defectos conectados al ID desde poco profundos hasta profundos. Sin embargo, los defectos muy poco profundos de menos del 10 % al 20 % tienden a ser ligeramente sobredimensionados, y los defectos muy profundos tienden a ser ligeramente subdimensionados.</p>
    
    <h4>8.9.9.6 Método de Arreglo Faseado</h4>
    <p>El método de arreglo faseado utiliza una matriz de elementos del transductor, excitados en patrones de tiempo precisos, para producir la dirección o el enfoque del haz ultrasónico sobre un rango específico de ángulos en el componente que se está inspeccionando. El sistema consiste en un instrumento ultrasónico de pulso/receptor computarizado que contiene el software de configuración de recolección y análisis, un cable umbilical y la sonda/cuña de arreglo faseado. La inspección faseada puede realizarse manualmente, o con un codificador para escaneos semiautomatizados, o con un escáner mecanizado para escaneos completamente automatizados.</p>
    <p>El método permite al usuario la capacidad de inspeccionar ciertas porciones o zonas del componente bajo prueba utilizando muchos ángulos de haz diferentes. Los resultados pueden verse como imágenes de exploración A, B, C o como imágenes sectoriales. También pueden verse múltiples vistas simultáneamente para ayudar con el análisis de datos. Esta técnica también se utiliza en un movimiento de escaneo de un solo eje, lo que lo hace más eficiente que el escaneo manual para la recolección de datos.</p>
    
    <p>Se requiere una capacitación y experiencia significativas para utilizar eficazmente algunas de las técnicas más avanzadas de detección y dimensionamiento UT.</p>
    
    <h3>8.10 Ensayo de Dureza</h3>
    <h4>8.10.1 Ensayo de Dureza para PQR y Soldaduras de Producción</h4>
    <p>A menudo se requiere el ensayo de dureza del metal base, la soldadura y la ZAC para garantizar que el proceso de soldadura y cualquier PWHT hayan resultado en una dureza relativa aceptable. Las soldaduras de producción y la ZAC de prueba requieren un área limpia y plana en la soldadura y en el material base lo más cerca posible del pie de la soldadura para acomodar el instrumento de ensayo de dureza en el área de interés. La ZAC puede ser difícil de localizar y a menudo se asume para fines de prueba que está justo adyacente al pie de la soldadura. El ensayo de dureza para un PQR es más fácil porque el cupón se secciona transversalmente y se ataca para identificar la soldadura, la interfaz de la soldadura y la ZAC. API 582 detalla los requisitos de ensayo de dureza para PQR y soldaduras de producción. La alta dureza es particularmente un problema con los materiales endurecibles donde el tamaño de la soldadura es pequeño en comparación con el metal base que se está soldando (es decir, soldaduras de tubo a placa tubular).</p>
    <p>El ensayo de dureza de las soldaduras de producción a menudo utiliza equipos portátiles. Las mediciones de campo tienden a tener una mayor variabilidad, por lo que pueden requerirse mediciones adicionales para verificar los resultados. Sin embargo, el ensayo de dureza realizado como parte del PQR utiliza equipos de laboratorio donde es posible una precisión significativamente mayor. Los durómetros portátiles no son sustitutos de los modelos de sobremesa, y los resultados de los probadores portátiles son propensos a errores, debido a las capacidades limitadas de dicho equipo, así como a su uso incorrecto.</p>
    
    <h4>8.10.2 Ensayo de Dureza para Soldaduras de Reparación</h4>
    <p>Puede requerirse un ensayo de dureza in situ en soldaduras que retienen presión después de cualquier PWHT de acuerdo con API 582 y NACE SP0472. El ensayo de dureza de las soldaduras de reparación puede realizarse con durómetros portátiles de acuerdo con ASTM A833, ASTM A1038 o ASTM A956.</p>
    <p>Usando API RP 582 como referencia, las lecturas de dureza de la ZAC pueden incluir ubicaciones lo más cerca posible (aproximadamente 0.2 mm) de la interfaz de la soldadura (ver Figura 57). La superficie debe pulirse y no debe exceder las 16 μin. (0.4 μm) máximo. Después de que la superficie haya sido pulida, debe atacarse para identificar el metal de soldadura, la interfaz de la soldadura y la ZAC.</p>
    
    <div class="figure-container">
    <img src="images/api577_figure_57.png" class="figure-image">
        <p>Figura 57—Ubicación de las Mediciones de Dureza</p>
    </div>
    
    <p>Un ejemplo de cómo pueden realizarse las mediciones de dureza se muestra en la Figura 57. Cinco impresiones en un área de aproximadamente 1 pulg.2 (650 mm2) deben constituir una prueba. Debido a que las mediciones de dureza de campo tienden a tener una mayor variabilidad, se pueden realizar evaluaciones adicionales como la réplica de metalografía de campo (FMR) para determinar si se ha formado una microestructura de ZAC excesivamente dura.</p>
    
    <h3>8.11 Prueba y Examen de Presión y Fugas (LT)</h3>
    <p>Donde un código requiera una prueba de presión hidrostática o neumática, el inspector debe adoptar los requisitos de código y especificación relevantes para recipientes o tuberías. API 510, API 570, API 574, ASME B31.3 y ASME PCC-2 proporcionan orientación sobre la aplicación de pruebas de presión. Las pruebas de presión deben realizarse a temperaturas apropiadas para el material de construcción, por encima de lo que se conoce como la temperatura mínima de diseño del material (MDMT) para evitar fracturas frágiles.</p>
    <p>Algunos códigos y especificaciones identifican la presión y duración de la prueba. Otros proporcionan una dirección general sin un conjunto específico de pautas. La prueba debe mantenerse el tiempo suficiente para completar una inspección visual minuciosa para identificar posibles fugas. Típicamente, una prueba de presión debe mantenerse durante al menos 30 min, o según lo especificado por el código o especificación de referencia. El inspector debe ser consciente del efecto que tiene la temperatura cambiante del medio de prueba en causar un aumento o disminución de la presión durante el período de prueba.</p>
    <p>Las pruebas de presión neumática a menudo requieren aprobaciones especiales y consideraciones de seguridad adicionales debido a la cantidad de energía almacenada en el sistema. Donde se realice LT neumático, el inspector debe verificar dispositivos de alivio de presión seguros, y el acordonamiento de áreas de prueba para excluir a todo el personal excepto al esencial, y el inspector debe usar extrema precaución. Los profesionales de seguridad deben proporcionar la dirección necesaria para garantizar la seguridad de todo el personal en el área.</p>
    <p>LT puede ser requerido por código o especificación para demostrar la estanqueidad o integridad del sistema, o puede realizarse durante una prueba de presión hidrostática para demostrar la contención de una unidad sellada como un recipiente a presión. ASME Sección V, Artículo 10, aborda los métodos LT e indica varios sistemas de prueba que se utilizarán tanto para unidades abiertas como cerradas, según la sensibilidad de prueba deseada. LT de una unión soldada de tubo a placa tubular puede especificarse para aplicaciones de servicio que son sensibles a pequeñas fugas en la unión de tubo a placa tubular. El LT con helio es especialmente eficaz para uniones de tubo a placa tubular cuando se requiere LT de alta sensibilidad.</p>
    <p class="note">NOTA LT no es lo mismo, ni es un sustituto de, las pruebas hidrostáticas o neumáticas.</p>
    <p>Uno de los métodos más comunes utilizados durante LT neumático es la prueba de burbuja de presión directa. Este método emplea una solución de burbuja líquida que se aplica a las áreas de un sistema cerrado bajo presión. Luego se realiza una prueba visual para notar cualquier burbuja que se forme cuando el gas de fuga pasa a través de ella. Al realizar la prueba de burbuja, algunos elementos de preocupación incluyen la temperatura de la superficie a inspeccionar, la limpieza previa y posterior a la prueba de la pieza a inspeccionar, la iluminación, las ayudas visuales y el tiempo de retención a una presión específica antes de aplicar la solución de burbuja. Típicamente, el área bajo prueba se considera aceptable cuando no se observa formación continua de burbujas. Si se encuentra que la unidad bajo presión tiene fugas, debe despresurizarse, repararse las fugas según el código gobernante y repetirse la prueba.</p>
    <p>Se puede utilizar una amplia variedad de fluidos viscosos y métodos, dependiendo del resultado deseado. Las consideraciones de limitaciones de diseño del sistema pueden impedir el uso de agua (el tipo más común de prueba de fuga). El secado, la cabeza hidrostática y las limitaciones de soporte deben abordarse antes de usar agua. La sensibilidad requerida de los resultados también puede requerir un medio y método de prueba de fuga más sensibles.</p>
    <p class="note">NOTA Las publicaciones sobre seguridad en pruebas de presión están disponibles de varias fuentes, incluyendo (pero no limitado a) Interstate Natural Gas Association of America (INGAA), Health and Safety Executive (HSE) y Mechanical Contractors Association of America (MCAA). Estas no son las únicas fuentes sobre el tema. La información sobre ellas se incluye en la bibliografía.</p>`
});