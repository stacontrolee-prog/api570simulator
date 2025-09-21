// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 3 para API 577 con numeración completa
registerChapter('API577', {
    id: 3,
    title: "Terms, Definitions, and Acronyms",
    titleEs: "Términos, Definiciones y Acrónimos",
    content: `<h2>Terms, Definitions, and Acronyms</h2>
    <h3>3 Terms, Definitions, and Acronyms</h3>
    <div class="subsection">
        <h4>3.1 Terms and Definitions</h4>
        <p>In an effort to minimize confusion, definitions in this document have been harmonized with AWS standard welding terms and definitions. Any variances from those definitions are identified with footnotes. The reader should consult the applicable code of construction for definitions of terms as they apply to that specific code. For the purposes of this document, the following terms and definitions apply.</p>
        
        <div class="term-definition">
            <h4>3.1.1 alternating current field measurement</h4>
            <p><strong>ACFM</strong><br>
            Electromagnetic inspection technique that can be used to detect and size surface-breaking (or in some cases near-surface) defects in both magnetic and non-magnetic materials.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.2 actual throat</h4>
            <p>Shortest distance between the weld root and the face of a fillet weld.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.3 air carbon arc cutting</h4>
            <p><strong>CAC-A</strong><br>
            Carbon arc cutting process variation that removes molten metal with a jet of air.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.4 arc blow</h4>
            <p>Deflection of an arc from its normal path due to by magnetic forces.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.5 arc length</h4>
            <p>Distance from the tip of the welding electrode to the adjacent surface of the weld pool.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.6 arc strike</h4>
            <p><strong>arc burn</strong><br>
            Discontinuity resulting from an arc, consisting of any localized remelted metal, heat-affected metal, or change in the surface profile of any metal object.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.7 arc welding</h4>
            <p><strong>AW</strong><br>
            Group of welding processes producing coalescence of workpieces by melting them with an arc, with or without the application of pressure and with or without filler metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.8 artifact</h4>
            <p><strong>radiographic film artifact</strong><br>
            Indications on radiographic film that may be caused by damage to the film before, during, or after processing.<br>
            <em>NOTE It is extremely important to identify these false indications as such and note them on the interpreter's report.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.9 autogenous weld</h4>
            <p>Fusion weld made without filler metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.10 back-gouging</h4>
            <p>Removal of weld metal and base metal from the weld root side of a welded joint to facilitate complete fusion and complete joint penetration upon subsequent welding from that side.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.11 backing</h4>
            <p>Material or device placed against the back side of the joint adjacent to the joint root, or at both sides of a joint in electroslag or electrogas welding, to support and shield molten weld metal. The material may be partially fused or remain unfused during the welding process.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.12 base metal</h4>
            <p><strong>base material</strong><br>
            <strong>substrate</strong><br>
            <strong>parent metal (nonstandard)</strong><br>
            Metal or alloy being welded, brazed, soldered, or cut.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.13 base metal zone</h4>
            <p><strong>BMZ</strong><br>
            Portion of base metal adjacent to a weld, braze, or solder joint or thermal cut and unaffected by welding, brazing, soldering, or thermal cutting.<br>
            <em>NOTE See also heat-affected zone and weld metal zone.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.14 bevel angle</h4>
            <p>Angle between the bevel of a joint member and a plane perpendicular to the surface of the member.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.15 burn-through</h4>
            <p>Hole or depression in the root bead of a single-groove weld due to excess penetration.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.16 buttering</h4>
            <p>Surfacing variation depositing surfacing metal on one or more surfaces to provide metallurgically compatible weld metal for the subsequent completion of the weld.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.17 cold crack</h4>
            <p>Crack occurring in a metal at or near ambient temperatures.<br>
            <em>NOTE Cold cracks can occur in base metal, heat-affected, and weld metal zones. See also hot crack.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.18 complete fusion</h4>
            <p>Fusion over the entire fusion faces and between all adjoining weld beads.<br>
            <em>NOTE See also incomplete fusion.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.19 constant-current power source</h4>
            <p><strong>CC</strong><br>
            Arc welding power source with a volt–ampere relationship yielding a small welding current change from a large arc voltage change.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.20 constant-voltage power source</h4>
            <p><strong>CV</strong><br>
            Arc welding power source with a volt–ampere relationship yielding a large welding current change from a small arc voltage change.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.21 controlled deposition welding<sup>8</sup></h4>
            <p><strong>CDW</strong><br>
            <strong>half-bead technique</strong><br>
            <strong>temper bead technique</strong><br>
            Welding technique used to obtain controlled grain refinement and tempering of the underlying heat-affected zone in the base metal.<br>
            <em>NOTE Various controlled-deposition techniques, such as temper bead (tempering of the layer below the current bead being deposited) and half bead (requiring removal of one-half of the first layer), are included.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.22 corrosion specialist</h4>
            <p>Person, acceptable to the owner–user, who has knowledge and experience in corrosion damage mechanisms, metallurgy, materials selection, and corrosion monitoring techniques.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.23 crack</h4>
            <p>Fracture-type discontinuity characterized by a sharp tip and high ratio of length and width to opening displacement.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.24 defect</h4>
            <p>Discontinuity or discontinuities that, by nature or accumulated effect, render a part or product unable to meet minimum applicable acceptance standards or specifications (e.g. total crack length).<br>
            <em>NOTE The term designates rejectability.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.25 direct current electrode negative</h4>
            <p><strong>DCEN</strong><br>
            <strong>straight polarity</strong><br>
            Arrangement of direct current arc welding leads in which the electrode is the negative pole and the workpiece is the positive pole of the welding arc.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.26 direct current electrode positive</h4>
            <p><strong>DCEP</strong><br>
            <strong>reverse polarity</strong><br>
            Arrangement of direct current arc welding leads in which the electrode is the positive pole and the workpiece is the negative pole of the welding arc.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.27 discontinuity</h4>
            <p>Interruption of the typical structure of a material, such as a lack of homogeneity in its mechanical, metallurgical, or physical characteristics.<br>
            <em>NOTE A discontinuity is not necessarily a defect. See also defect and flaw.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.28 distortion</h4>
            <p>Change in shape or dimensions, whether temporary or permanent, of a part as a result of heating or welding.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.29 eddy current examination technique</h4>
            <p><strong>ET</strong><br>
            Inspection method that applies primarily to nonferromagnetic materials.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.30 examiner</h4>
            <p>Person who assists the inspector by performing specific NDE on components but does not evaluate the results of those examinations in accordance with the appropriate inspection code, unless specifically trained and authorized to do so by the owner or user.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.31 flaw</h4>
            <p>Undesirable discontinuity.<br>
            <em>NOTE See also defect.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.32 filler metal</h4>
            <p>Metal or alloy to be added in making a brazed, soldered, or welded joint.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.33 fillet weld size</h4>
            <p>For equal leg fillet welds, the leg lengths of the largest isosceles right triangle that can be inscribed within the fillet weld cross section. For unequal leg fillet welds, the leg lengths of the largest right triangle that can be inscribed within the fillet weld cross section.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.34 groove angle</h4>
            <p>Included angle between faces of a weld or groove between work pieces.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.35 heat-affected zone</h4>
            <p><strong>HAZ</strong><br>
            Portion of base metal whose mechanical properties or microstructure have been altered by the heat of welding, brazing, soldering, or thermal cutting.<br>
            <em>NOTE See also base metal zone and weld metal zone.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.36 heat input</h4>
            <p>Energy applied to the workpiece during welding.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.37 hot crack</h4>
            <p>Crack occurring in a metal during solidification or at elevated temperatures. Hot cracks can occur in both heat affected zones and weld metal zones.<br>
            <em>NOTE See also cold crack.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.38 image quality indicator<sup>9</sup></h4>
            <p><strong>IQI</strong><br>
            <strong>penetrameter (archaic)</strong><br>
            Device used to determine the sensitivity and ability of a radiograph to discern an image, or confirm the adequacy of the radiographic technique to produce radiographs with the required image quality level or radiographic sensitivity.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.39 Imperfection<sup>10</sup></h4>
            <p>Discontinuity or irregularity in a weld or deviation from the intended geometry that is detectable by methods outlined in this standard.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.40 inclusion</h4>
            <p>Entrapped foreign solid material, such as slag, flux, tungsten, or oxide.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.41 incomplete fusion</h4>
            <p><strong>IF</strong><br>
            <strong>lack of fusion</strong><br>
            Weld discontinuity in which fusion did not occur between the weld metal and the fusion faces or adjoining weld beads.<br>
            <em>NOTE See also complete fusion.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.42 incomplete joint penetration</h4>
            <p>Joint root condition in a groove weld in which weld metal does not extend through the joint thickness.<br>
            <em>NOTE See also joint penetration.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.43 inert gas</h4>
            <p>Gas that does not react chemically with materials.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.44 indication</h4>
            <p>Signal of discontinuity in the material under NDE.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.45 inspector</h4>
            <p>Person who is qualified and certified to perform inspections under the appropriate inspection code or standard.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.46 interpass temperature, welding<sup>11</sup></h4>
            <p>Highest temperature in the weld joint immediately prior to welding, or in the case of multiple pass welds, the highest temperature in the section of the previously deposited weld metal, immediately before the next pass is started.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.47 joint penetration</h4>
            <p>Distance that the weld metal extends from the weld face into a joint, exclusive of weld reinforcement.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.48 joint type</h4>
            <p>Weld joint classification based on the relative orientation of the member being joined.<br>
            <em>NOTE The five basic joint types are butt, corner, edge, lap, and T-joints.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.49 lack of fusion</h4>
            <p><strong>LOF</strong><br>
            See incomplete fusion.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.50 lamellar tear</h4>
            <p>Subsurface terrace and step-like crack in the base metal with a basic orientation parallel to the wrought surface caused by tensile stresses in the through-thickness direction of the base metals weakened by the presence of small, dispersed, planar-shaped, nonmetallic inclusions parallel to the metal surface.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.51 lamination</h4>
            <p>Type of discontinuity with separation or weakness generally aligned parallel to the worked surface of a metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.52 longitudinal crack</h4>
            <p>Crack with its major axis orientation approximately parallel to the weld axis.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.53 nondestructive examination</h4>
            <p><strong>NDE</strong><br>
            Act of determining the suitability of a material or component for its intended purpose using methods and techniques that do not affect its serviceability.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.54 nonrelevant indication<sup>12</sup></h4>
            <p>NDE indication caused by a condition or type of discontinuity that is not rejectable.<br>
            <em>NOTE False indications are nonrelevant. Not all nonrelevant indications are recordable.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.55 overlap</h4>
            <p>Protrusion of weld metal beyond the weld toe or weld root.<br>
            <em>NOTE The term also refers to the portion of the preceding weld nugget remelted by the succeeding weld in resistance seam welding.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.56 oxyacetylene cutting</h4>
            <p><strong>OFC-A</strong><br>
            Oxygen-fuel gas cutting process variation employing acetylene as the fuel gas.<br>
            <em>NOTE This is considered a thermal process and is an essential variable for some processes. It is not listed in ASME Section IX.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.57 peening</h4>
            <p>Mechanical working of metals using impact blows.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.58 porosity</h4>
            <p>Cavity-type discontinuities formed by gas entrapment during solidification or in a thermal spray deposit.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.59 positive material identification</h4>
            <p><strong>PMI</strong><br>
            Physical evaluation or test of a material to confirm that the material that has been or will be placed into service is consistent with the selected or specified alloy material designated by the owner–user.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.60 preheat</h4>
            <p>Metal temperature value achieved in a base metal or substrate prior to initiating thermal operations.<br>
            <em>NOTE Also equal to the minimum interpass temperature.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.61 procedure qualification record</h4>
            <p><strong>PQR</strong><br>
            Record of welding variables used to produce an acceptable test weldment, and the results of tests conducted on the weldment to qualify a welding procedure specification.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.62 recordable indication</h4>
            <p>Recording on a datasheet of an indication or condition that does not necessarily exceed the rejection criteria in terms of code or contract, but is documented.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.63 reportable indication</h4>
            <p>Recording on a datasheet of an indication that exceeds the reject flaw size criteria and requires not only documentation, but also notification to the appropriate authority for correction.<br>
            <em>NOTE All reportable indications are recordable indications but not vice versa.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.64 relevant indication<sup>13</sup></h4>
            <p>NDE indication caused by a condition or type of discontinuity that requires evaluation.<br>
            <em>NOTE All relevant indications are recordable.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.65 reverse polarity</h4>
            <p>See direct current electrode positive.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.66 root face</h4>
            <p>Portion of the groove face within the joint root.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.67 root opening</h4>
            <p><strong>root spacing</strong><br>
            Separation at the joint root between the workpieces.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.68 shielding gas</h4>
            <p><strong>backing gas</strong><br>
            Gases used to produce a protective atmosphere.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.69 slag</h4>
            <p>Nonmetallic product resulting from the mutual dissolution of flux and nonmetallic impurities in some welding and brazing processes.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.70 slag inclusion</h4>
            <p>Discontinuity consisting of slag entrapped in weld metal or at the weld interface.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.71 spatter</h4>
            <p>Metal particles expelled during fusion welding that do not form part of the weld.<br>
            <em>NOTE This is a deleterious surface condition that can interfere with subsequent operations such as inspection or coating.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.72 tack weld</h4>
            <p>Weld made to hold the parts of a weldment in proper alignment until the final welds are made.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.73 temper bead welding</h4>
            <p>See controlled deposition welding.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.74 throat, theoretical</h4>
            <p>Distance from the beginning of the joint root perpendicular to the hypotenuse of the largest right triangle that can be inscribed within the cross-section of a fillet weld.<br>
            <em>NOTE This dimension is based on the assumption that the root opening is equal to zero.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.75 transverse crack</h4>
            <p>Crack with its major axis oriented approximately perpendicular to the weld axis.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.76 travel angle</h4>
            <p><strong>drag angle</strong><br>
            <strong>push angle</strong><br>
            <strong>work angle</strong><br>
            Angle that is less than 90° between the electrode axis and a line perpendicular to the weld axis, in a plane determined by the electrode axis and the weld axis.<br>
            <em>NOTE This angle can also be used to partially define the position of guns, torches, rods, and beams.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.77 tungsten inclusion</h4>
            <p>Discontinuity consisting of tungsten entrapped in weld metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.78 undercut</h4>
            <p>Groove melted into the base metal adjacent to the weld toe or weld root and left unfilled by weld metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.79 underfill</h4>
            <p>Groove weld condition in which the weld face or root surface is below the adjacent surface of the base metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.80 welder</h4>
            <p>Person who performs manual or semiautomatic welding.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.81 welder certification</h4>
            <p>Written verification that a welder has produced welds meeting a prescribed standard of welder performance.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.82 welder performance qualification</h4>
            <p><strong>WPQ</strong><br>
            Demonstration of a welder's or welding operator's ability to produce welds meeting prescribed standards.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.83 welding</h4>
            <p>Joining process that produces coalescence of materials by heating them to the welding temperature, with or without the application of pressure or by the application of pressure alone, and with or without the use of filler metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.84 welding engineer</h4>
            <p>Person who holds an engineering degree and is knowledgeable and experienced in the engineering disciplines associated with welding.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.85 welding operator</h4>
            <p>Person who operates adaptive control, automatic, mechanized, or robotic welding equipment.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.86 welding procedure specification</h4>
            <p><strong>WPS</strong><br>
            Document that provides the required welding variables for a specific application to ensure repeatability by properly trained welders and welding operators.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.87 weldment</h4>
            <p>Assembly joined by welding.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.88 weld interface</h4>
            <p><strong>fusion line (nonstandard)</strong><br>
            Boundary between weld metal and base metal in a fusion weld, between base metals in a solid-state weld without filler metal, or between filler metal and base metal in a solid-state weld with filler metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.89 weld joint</h4>
            <p>Junction of members or edges of members that are to be joined or have been joined by welding.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.90 weld metal zone</h4>
            <p><strong>WMZ</strong><br>
            Portion of the weld area consisting of weld metal.<br>
            <em>NOTE See also base metal zone and heat-affected zone.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.91 weld reinforcement</h4>
            <p><strong>convexity</strong><br>
            <strong>face reinforcement</strong><br>
            <strong>root reinforcement</strong><br>
            Weld metal in excess of the quantity required to fill a weld groove.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.92 weld toe</h4>
            <p>Junction of the weld face and the base metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.93 wet fluorescent magnetic-particle examination technique</h4>
            <p><strong>WFMT</strong><br>
            Inspection method suitable only for ferromagnetic materials.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>3.2 Acronyms</h4>
        <ul>
            <li><strong>LT</strong> - leak testing/examination method</li>
            <li><strong>MT</strong> - magnetic particle examination method</li>
            <li><strong>NDE</strong> - nondestructive examination</li>
            <li><strong>PT</strong> - dye penetrant examination method</li>
            <li><strong>RT</strong> - radiographic examination method</li>
            <li><strong>VT</strong> - visual examination method</li>
        </ul>
    </div>
    
    <div class="footnotes">
        <p><sup>8</sup> Term not defined in AWS A3.0M/A3.0:2010; definition is based on the definition in the International Association of Drilling Contractors (IADC) Lexicon.</p>
        <p><sup>9</sup> Term not defined in AWS A3.0M/A3.0:2010; definition is based on ASME V (2015), Article 1, I-121.1.</p>
        <p><sup>10</sup> Term not defined in AWS A3.0M/A3.0:2010; definition is loosely based on ASME V (2017), Article 1, I-121.</p>
        <p><sup>11</sup> Definition from ASME IX used as it is more descriptive than that in AWS.</p>
        <p><sup>12</sup> Term not defined in AWS A3.0M/A3.0:2010; definition is from ASME V (2017), Article 1, I-121.</p>
        <p><sup>13</sup> Term not defined in AWS A3.0M/A3.0:2010; definition is based on ASME V (2017), Article 1, I-121.</p>
    </div>`,
    contentEs: `<h2>Términos, Definiciones y Acrónimos</h2>
    <h3>3 Términos, Definiciones y Acrónimos</h3>
    <div class="subsection">
        <h4>3.1 Términos y Definiciones</h4>
        <p>En un esfuerzo por minimizar la confusión, las definiciones en este documento han sido armonizadas con los términos y definiciones estándar de soldadura de AWS. Cualquier variación de esas definiciones se identifica con notas a pie de página. El lector debe consultar el código de construcción aplicable para las definiciones de los términos tal como se aplican a ese código específico. Para los propósitos de este documento, se aplican los siguientes términos y definiciones.</p>
        
        <div class="term-definition">
            <h4>3.1.1 medición de campo de corriente alterna</h4>
            <p><strong>ACFM</strong><br>
            Técnica de inspección electromagnética que puede utilizarse para detectar y dimensionar defectos que rompen la superficie (o en algunos casos cerca de la superficie) en materiales tanto magnéticos como no magnéticos.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.2 garganta real</h4>
            <p>Distancia más corta entre la raíz de la soldadura y la cara de una soldadura de filete.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.3 corte por arco de aire-carbono</h4>
            <p><strong>CAC-A</strong><br>
            Variación del proceso de corte por arco de carbono que elimina el metal fundido con un chorro de aire.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.4 soplo del arco</h4>
            <p>Desviación de un arco de su trayectoria normal debido a fuerzas magnéticas.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.5 longitud del arco</h4>
            <p>Distancia desde la punta del electrodo de soldadura hasta la superficie adyacente del baño de soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.6 golpe de arco</h4>
            <p><strong>quema de arco</strong><br>
            Discontinuidad resultante de un arco, que consiste en cualquier metal refundido localizado, metal afectado por el calor o cambio en el perfil superficial de cualquier objeto metálico.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.7 soldadura por arco</h4>
            <p><strong>AW</strong><br>
            Grupo de procesos de soldadura que producen la coalescencia de piezas de trabajo fundiéndolas con un arco, con o sin la aplicación de presión y con o sin metal de aporte.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.8 artefacto</h4>
            <p><strong>artefacto de película radiográfica</strong><br>
            Indicaciones en la película radiográfica que pueden ser causadas por daños a la película antes, durante o después del procesamiento.<br>
            <em>NOTA Es extremadamente importante identificar estas indicaciones falsas como tales y anotarlas en el informe del intérprete.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.9 soldadura autógena</h4>
            <p>Soldadura de fusión realizada sin metal de aporte.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.10 escopleado posterior</h4>
            <p>Eliminación de metal de soldadura y metal base del lado de la raíz de la soldadura de una unión soldada para facilitar la fusión completa y la penetración completa de la unión en la soldadura posterior de ese lado.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.11 respaldo</h4>
            <p>Material o dispositivo colocado contra la parte posterior de la unión adyacente a la raíz de la unión, o en ambos lados de una unión en soldadura por electroescoria o electrogas, para soportar y proteger el metal de soldadura fundido. El material puede estar parcialmente fundido o permanecer sin fundir durante el proceso de soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.12 metal base</h4>
            <p><strong>material base</strong><br>
            <strong>substrato</strong><br>
            <strong>metal parental (no estándar)</strong><br>
            Metal o aleación que está siendo soldado, brazado, soldado con estaño o cortado.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.13 zona de metal base</h4>
            <p><strong>BMZ</strong><br>
            Porción de metal base adyacente a una unión de soldadura, brasaje o soldadura blanda o corte térmico y no afectada por la soldadura, brasaje, soldadura blanda o corte térmico.<br>
            <em>NOTA Véase también zona afectada por el calor y zona de metal de soldadura.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.14 ángulo de chaflán</h4>
            <p>Ángulo entre el chaflán de un miembro de la unión y un plano perpendicular a la superficie del miembro.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.15 quema a través</h4>
            <p>Agujero o depresión en el cordón de raíz de una soldadura de ranura simple debido a penetración excesiva.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.16 recubrimiento de aporte</h4>
            <p>Variación de recubrimiento que deposita metal de recubrimiento en una o más superficies para proporcionar metal de soldadura metalúrgicamente compatible para la finalización posterior de la soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.17 grieta en frío</h4>
            <p>Grieta que ocurre en un metal a o cerca de temperaturas ambiente.<br>
            <em>NOTA Las grietas en frío pueden ocurrir en el metal base, en la zona afectada por el calor y en la zona de metal de soldadura. Véase también grieta en caliente.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.18 fusión completa</h4>
            <p>Fusión sobre todas las caras de fusión y entre todos los cordones de soldadura adyacentes.<br>
            <em>NOTA Véase también fusión incompleta.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.19 fuente de poder de corriente constante</h4>
            <p><strong>CC</strong><br>
            Fuente de poder de soldadura por arco con una relación voltio-amperio que produce un pequeño cambio en la corriente de soldadura a partir de un gran cambio en el voltaje del arco.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.20 fuente de poder de voltaje constante</h4>
            <p><strong>CV</strong><br>
            Fuente de poder de soldadura por arco con una relación voltio-amperio que produce un gran cambio en la corriente de soldadura a partir de un pequeño cambio en el voltaje del arco.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.21 soldadura de deposición controlada<sup>8</sup></h4>
            <p><strong>CDW</strong><br>
            <strong>técnica de medio cordón</strong><br>
            <strong>técnica de cordón de temple</strong><br>
            Técnica de soldadura utilizada para obtener un refinamiento de grano controlado y temple de la zona afectada por el calor subyacente en el metal base.<br>
            <em>NOTA Se incluyen varias técnicas de deposición controlada, como el cordón de temple (temple de la capa debajo del cordón actual que se está depositando) y el medio cordón (que requiere la eliminación de la mitad de la primera capa).</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.22 especialista en corrosión</h4>
            <p>Persona, aceptable por el propietario-usuario, que tiene conocimiento y experiencia en mecanismos de daño por corrosión, metalurgia, selección de materiales y técnicas de monitoreo de corrosión.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.23 grieta</h4>
            <p>Discontinuidad de tipo fractura caracterizada por una punta aguda y una alta relación de longitud y anchura con respecto al desplazamiento de apertura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.24 defecto</h4>
            <p>Discontinuidad o discontinuidades que, por su naturaleza o efecto acumulado, hacen que una parte o producto no pueda cumplir con los estándares mínimos de aceptación aplicables o especificaciones (por ejemplo, longitud total de grietas).<br>
            <em>NOTA El término designa rechazabilidad.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.25 corriente continua electrodo negativo</h4>
            <p><strong>DCEN</strong><br>
            <strong>polaridad directa</strong><br>
            Disposición de los cables de soldadura por arco de corriente continua en la que el electrodo es el polo negativo y la pieza de trabajo es el polo positivo del arco de soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.26 corriente continua electrodo positivo</h4>
            <p><strong>DCEP</strong><br>
            <strong>polaridad inversa</strong><br>
            Disposición de los cables de soldadura por arco de corriente continua en la que el electrodo es el polo positivo y la pieza de trabajo es el polo negativo del arco de soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.27 discontinuidad</h4>
            <p>Interrupción de la estructura típica de un material, como una falta de homogeneidad en sus características mecánicas, metalúrgicas o físicas.<br>
            <em>NOTA Una discontinuidad no es necesariamente un defecto. Véase también defecto y flaw.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.28 distorsión</h4>
            <p>Cambio en la forma o dimensiones, ya sea temporal o permanente, de una parte como resultado del calentamiento o la soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.29 técnica de examen por corrientes de eddy</h4>
            <p><strong>ET</strong><br>
            Método de inspección que se aplica principalmente a materiales no ferromagnéticos.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.30 examinador</h4>
            <p>Persona que ayuda al inspector realizando END específicos en componentes pero no evalúa los resultados de esos exámenes de acuerdo con el código de inspección apropiado, a menos que esté específicamente capacitado y autorizado para hacerlo por el propietario o usuario.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.31 flaw</h4>
            <p>Discontinuidad indeseable.<br>
            <em>NOTA Véase también defecto.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.32 metal de aporte</h4>
            <p>Metal o aleación que se agregará al hacer una unión brasada, soldada con estaño o soldada.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.33 tamaño de soldadura de filete</h4>
            <p>Para soldaduras de filete de patas iguales, las longitudes de las patas del triángulo rectángulo isósceles más grande que puede inscribirse dentro de la sección transversal de la soldadura de filete. Para soldaduras de filete de patas desiguales, las longitudes de las patas del triángulo rectángulo más grande que puede inscribirse dentro de la sección transversal de la soldadura de filete.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.34 ángulo de ranura</h4>
            <p>Ángulo incluido entre las caras de una soldadura o ranura entre piezas de trabajo.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.35 zona afectada por el calor</h4>
            <p><strong>HAZ</strong><br>
            Porción de metal base cuyas propiedades mecánicas o microestructura han sido alteradas por el calor de la soldadura, brasaje, soldadura blanda o corte térmico.<br>
            <em>NOTA Véase también zona de metal base y zona de metal de soldadura.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.36 aporte de calor</h4>
            <p>Energía aplicada a la pieza de trabajo durante la soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.37 grieta en caliente</h4>
            <p>Grieta que ocurre en un metal durante la solidificación o a temperaturas elevadas. Las grietas en caliente pueden ocurrir tanto en las zonas afectadas por el calor como en las zonas de metal de soldadura.<br>
            <em>NOTA Véase también grieta en frío.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.38 indicador de calidad de imagen<sup>9</sup></h4>
            <p><strong>IQI</strong><br>
            <strong>penetrámetro (arcaico)</strong><br>
            Dispositivo utilizado para determinar la sensibilidad y capacidad de una radiografía para discernir una imagen, o confirmar la adecuación de la técnica radiográfica para producir radiografías con el nivel de calidad de imagen requerido o sensibilidad radiográfica.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.39 Imperfección<sup>10</sup></h4>
            <p>Discontinuidad o irregularidad en una soldadura o desviación de la geometría prevista que es detectable por los métodos descritos en esta norma.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.40 inclusión</h4>
            <p>Material sólido extraño atrapado, como escoria, fundente, tungsteno u óxido.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.41 fusión incompleta</h4>
            <p><strong>IF</strong><br>
            <strong>falta de fusión</strong><br>
            Discontinuidad de soldadura en la que no ocurrió fusión entre el metal de soldadura y las caras de fusión o cordones de soldadura adyacentes.<br>
            <em>NOTA Véase también fusión completa.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.42 penetración incompleta de la unión</h4>
            <p>Condición de la raíz de la unión en una soldadura de ranura en la que el metal de soldadura no se extiende a través del espesor de la unión.<br>
            <em>NOTA Véase también penetración de la unión.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.43 gas inerte</h4>
            <p>Gas que no reacciona químicamente con los materiales.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.44 indicación</h4>
            <p>Señal de discontinuidad en el material bajo END.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.45 inspector</h4>
            <p>Persona que está calificada y certificada para realizar inspecciones bajo el código o estándar de inspección apropiado.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.46 temperatura entre pasadas, soldadura<sup>11</sup></h4>
            <p>Temperatura más alta en la unión de soldadura inmediatamente antes de la soldadura, o en el caso de soldaduras de múltiples pasadas, la temperatura más alta en la sección del metal de soldadura depositado previamente, inmediatamente antes de que se inicie el siguiente pase.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.47 penetración de la unión</h4>
            <p>Distancia que el metal de soldadura se extiende desde la cara de la soldadura hacia una unión, excluyendo el refuerzo de la soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.48 tipo de unión</h4>
            <p>Clasificación de la unión de soldadura basada en la orientación relativa del miembro que está siendo unido.<br>
            <em>NOTA Los cinco tipos básicos de uniones son a tope, en esquina, de borde, solapada y en T.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.49 falta de fusión</h4>
            <p><strong>LOF</strong><br>
            Véase fusión incompleta.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.50 desgarro laminar</h4>
            <p>Grieta subsuperficial en forma de terraza y escalones en el metal base con una orientación básica paralela a la superficie forjada causada por tensiones de tracción en la dirección del espesor del metal base debilitado por la presencia de pequeñas inclusiones no metálicas dispersas en forma plana paralelas a la superficie del metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.51 laminación</h4>
            <p>Tipo de discontinuidad con separación o debilidad generalmente alineada paralela a la superficie trabajada de un metal.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.52 grieta longitudinal</h4>
            <p>Grieta con su eje mayor orientado aproximadamente paralelo al eje de la soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.53 examen no destructivo</h4>
            <p><strong>END</strong><br>
            Acto de determinar la idoneidad de un material o componente para su propósito previsto utilizando métodos y técnicas que no afectan su servicioabilidad.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.54 indicación no relevante<sup>12</sup></h4>
            <p>Indicación END causada por una condición o tipo de discontinuidad que no es rechazable.<br>
            <em>NOTA Las indicaciones falsas son no relevantes. No todas las indicaciones no relevantes son registrables.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.55 solapamiento</h4>
            <p>Protuberancia de metal de soldadura más allá del pie de la soldadura o la raíz de la soldadura.<br>
            <em>NOTA El término también se refiere a la porción del nugget de soldadura anterior refundido por la soldadura siguiente en la soldadura por resistencia de costura.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.56 corte por oxiacetileno</h4>
            <p><strong>OFC-A</strong><br>
            Variación del proceso de corte por gas oxígeno-combustible que emplea acetileno como gas combustible.<br>
            <em>NOTA Esto se considera un proceso térmico y es una variable esencial para algunos procesos. No está listado en la Sección IX de ASME.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.57 martillado</h4>
            <p>Trabajo mecánico de metales utilizando golpes de impacto.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.58 porosidad</h4>
            <p>Discontinuidades tipo cavidad formadas por el atrapamiento de gas durante la solidificación o en un depósito de pulverización térmica.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.59 identificación positiva de materiales</h4>
            <p><strong>PMI</strong><br>
            Evaluación física o prueba de un material para confirmar que el material que ha sido o será puesto en servicio es consistente con el material de aleación seleccionado o especificado designado por el propietario-usuario.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.60 precalentamiento</h4>
            <p>Valor de temperatura del metal alcanzado en un metal base o sustrato antes de iniciar operaciones térmicas.<br>
            <em>NOTA También igual a la temperatura mínima entre pasadas.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.61 registro de calificación de procedimiento</h4>
            <p><strong>PQR</strong><br>
            Registro de las variables de soldadura utilizadas para producir una pieza de prueba de soldadura aceptable, y los resultados de las pruebas realizadas en la pieza de prueba para calificar una especificación de procedimiento de soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.62 indicación registrable</h4>
            <p>Registro en una hoja de datos de una indicación o condición que no necesariamente excede los criterios de rechazo en términos de código o contrato, pero que está documentada.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.63 indicación reportable</h4>
            <p>Registro en una hoja de datos de una indicación que excede los criterios de tamaño de flaw rechazable y requiere no solo documentación, sino también notificación a la autoridad apropiada para su corrección.<br>
            <em>NOTA Todas las indicaciones reportables son indicaciones registrables pero no viceversa.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.64 indicación relevante<sup>13</sup></h4>
            <p>Indicación END causada por una condición o tipo de discontinuidad que requiere evaluación.<br>
            <em>NOTA Todas las indicaciones relevantes son registrables.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.65 polaridad inversa</h4>
            <p>Véase corriente continua electrodo positivo.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.66 cara de la raíz</h4>
            <p>Porción de la cara de la ranura dentro de la raíz de la unión.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.67 abertura de raíz</h4>
            <p><strong>separación de raíz</strong><br>
            Separación en la raíz de la unión entre las piezas de trabajo.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.68 gas de protección</h4>
            <p><strong>gas de respaldo</strong><br>
            Gases utilizados para producir una atmósfera protectora.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.69 escoria</h4>
            <p>Producto no metálico resultante de la disolución mutua de fundente e impurezas no metálicas en algunos procesos de soldadura y brasaje.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.70 inclusión de escoria</h4>
            <p>Discontinuidad que consiste en escoria atrapada en el metal de soldadura o en la interfaz de la soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.71 salpicadura</h4>
            <p>Partículas de metal expulsadas durante la soldadura por fusión que no forman parte de la soldadura.<br>
            <em>NOTA Esta es una condición superficial perjudicial que puede interferir con operaciones posteriores como la inspección o el recubrimiento.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.72 punto de soldadura</h4>
            <p>Soldadura realizada para mantener las partes de una pieza soldada en la alineación adecuada hasta que se realicen las soldaduras finales.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.73 soldadura de cordón de temple</h4>
            <p>Véase soldadura de deposición controlada.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.74 garganta teórica</h4>
            <p>Distancia desde el inicio de la raíz de la unión perpendicular a la hipotenusa del triángulo rectángulo más grande que puede inscribirse dentro de la sección transversal de una soldadura de filete.<br>
            <em>NOTA Esta dimensión se basa en la suposición de que la abertura de raíz es igual a cero.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.75 grieta transversal</h4>
            <p>Grieta con su eje mayor orientado aproximadamente perpendicular al eje de la soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.76 ángulo de desplazamiento</h4>
            <p><strong>ángulo de arrastre</strong><br>
            <strong>ángulo de empuje</strong><br>
            <strong>ángulo de trabajo</strong><br>
            Ángulo menor de 90° entre el eje del electrodo y una línea perpendicular al eje de la soldadura, en un plano determinado por el eje del electrodo y el eje de la soldadura.<br>
            <em>NOTA Este ángulo también puede utilizarse para definir parcialmente la posición de pistolas, antorchas, varillas y haces.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.77 inclusión de tungsteno</h4>
            <p>Discontinuidad que consiste en tungsteno atrapado en el metal de soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.78 socavación</h4>
            <p>Surco fundido en el metal base adyacente al pie de la soldadura o la raíz de la soldadura y dejado sin rellenar por metal de soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.79 falta de relleno</h4>
            <p>Condición de soldadura de ranura en la que la cara de la soldadura o la superficie de la raíz está por debajo de la superficie adyacente del metal base.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.80 soldador</h4>
            <p>Persona que realiza soldadura manual o semiautomática.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.81 certificación de soldador</h4>
            <p>Verificación por escrito de que un soldador ha producido soldaduras que cumplen con un estándar prescrito de rendimiento del soldador.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.82 calificación de rendimiento del soldador</h4>
            <p><strong>WPQ</strong><br>
            Demostración de la capacidad de un soldador u operador de soldadura para producir soldaduras que cumplen con los estándares prescritos.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.83 soldadura</h4>
            <p>Proceso de unión que produce la coalescencia de materiales calentándolos a la temperatura de soldadura, con o sin la aplicación de presión o mediante la aplicación de presión sola, y con o sin el uso de metal de aporte.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.84 ingeniero de soldadura</h4>
            <p>Persona que tiene un título de ingeniería y tiene conocimiento y experiencia en las disciplinas de ingeniería asociadas con la soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.85 operador de soldadura</h4>
            <p>Persona que opera equipos de soldadura de control adaptativo, automáticos, mecanizados o robóticos.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.86 especificación de procedimiento de soldadura</h4>
            <p><strong>WPS</strong><br>
            Documento que proporciona las variables de soldadura requeridas para una aplicación específica para garantizar la repetibilidad por parte de soldadores y operadores de soldadura debidamente capacitados.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.87 pieza soldada</h4>
            <p>Ensamblaje unido por soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.88 interfaz de soldadura</h4>
            <p><strong>línea de fusión (no estándar)</strong><br>
            Límite entre el metal de soldadura y el metal base en una soldadura de fusión, entre metales base en una soldadura en estado sólido sin metal de aporte, o entre metal de aporte y metal base en una soldadura en estado sólido con metal de aporte.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.89 unión de soldadura</h4>
            <p>Unión de miembros o bordes de miembros que van a ser unidos o han sido unidos por soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.90 zona de metal de soldadura</h4>
            <p><strong>WMZ</strong><br>
            Porción del área de soldadura que consiste en metal de soldadura.<br>
            <em>NOTA Véase también zona de metal base y zona afectada por el calor.</em></p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.91 refuerzo de soldadura</h4>
            <p><strong>convexidad</strong><br>
            <strong>refuerzo de cara</strong><br>
            <strong>refuerzo de raíz</strong><br>
            Metal de soldadura en exceso de la cantidad requerida para llenar una ranura de soldadura.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.92 pie de la soldadura</h4>
            <p>Unión de la cara de la soldadura y el metal base.</p>
        </div>
        
        <div class="term-definition">
            <h4>3.1.93 técnica de examen por partículas magnéticas fluorescentes húmedas</h4>
            <p><strong>WFMT</strong><br>
            Método de inspección adecuado solo para materiales ferromagnéticos.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>3.2 Acrónimos</h4>
        <ul>
            <li><strong>LT</strong> - método de examen/prueba de fugas</li>
            <li><strong>MT</strong> - método de examen por partículas magnéticas</li>
            <li><strong>NDE</strong> - examen no destructivo</li>
            <li><strong>PT</strong> - método de examen por líquidos penetrantes</li>
            <li><strong>RT</strong> - método de examen radiográfico</li>
            <li><strong>VT</strong> - método de examen visual</li>
        </ul>
    </div>
    
    <div class="footnotes">
        <p><sup>8</sup> Término no definido en AWS A3.0M/A3.0:2010; la definición se basa en la definición en el Léxico de la Asociación Internacional de Contratistas de Perforación (IADC).</p>
        <p><sup>9</sup> Término no definido en AWS A3.0M/A3.0:2010; la definición se basa en ASME V (2015), Artículo 1, I-121.1.</p>
        <p><sup>10</sup> Término no definido en AWS A3.0M/A3.0:2010; la definición se basa libremente en ASME V (2017), Artículo 1, I-121.</p>
        <p><sup>11</sup> Definición de ASME IX utilizada ya que es más descriptiva que la de AWS.</p>
        <p><sup>12</sup> Término no definido en AWS A3.0M/A3.0:2010; la definición es de ASME V (2017), Artículo 1, I-121.</p>
        <p><sup>13</sup> Término no definido en AWS A3.0M/A3.0:2010; la definición se basa en ASME V (2017), Artículo 1, I-121.</p>
    </div>`
});