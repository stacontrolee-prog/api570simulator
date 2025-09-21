// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 2
registerChapter('API571', {
    id: 2,
    title: "Terms and Definitions",
    titleEs: "Términos y Definiciones",
    content: `<h3>2 Terms and Definitions</h3>
    <div class="subsection">
        <h4>2.1 Definitions</h4>
        <p>For the purposes of this document, the following definitions apply.</p>
        <div class="subsection">
            <h4>2.1.1 austenitic</h4>
            <p>A term that refers to a type of metallurgical structure (austenite) normally found in 300 series stainless steel (SS) and nickel-based alloys. These materials have a face centered cubic crystallographic structure and are generally nonmagnetic.</p>
        </div>
        <div class="subsection">
            <h4>2.1.2 austenitic stainless steels</h4>
            <p>The 300 series SS, which commonly include Types 304, 304L, 304H, 309, 310, 316, 316L, 316H, 317, 317L, 321, 321H, 347, and 347H. The "L" and "H" suffixes refer to controlled ranges of low and high carbon content, respectively. These alloys are characterized by an austenitic structure.</p>
        </div>
        <div class="subsection">
            <h4>2.1.3 carbon steel</h4>
            <p>An alloy consisting primarily of iron (Fe) with a small amount of carbon (C). Carbon steels do not have alloying elements intentionally added. However, there may be small amounts of elements permitted by specifications such as ASTM A516 and ASTM A106, for example, that can affect corrosion-related properties, hardness after welding, and toughness. Elements that may be found in small quantities include Mn, Cr, Ni, Mo, Cu, S, Si, P, Al, V, and B.</p>
        </div>
        <div class="subsection">
            <h4>2.1.4 diethanolamine</h4>
            <p>DEA</p>
            <p>Chemical used in amine treating to remove H<sub>2</sub>S and CO<sub>2</sub> from hydrocarbon streams.</p>
        </div>
        <div class="subsection">
            <h4>2.1.5 diglycolamine</h4>
            <p>DGA</p>
            <p>Chemical used in amine treating to remove H<sub>2</sub>S and CO<sub>2</sub> from hydrocarbon streams.</p>
        </div>
        <div class="subsection">
            <h4>2.1.6 duplex stainless steel</h4>
            <p>A family of stainless steels that contain a mixed austenitic-ferritic structure including Alloys 2205, 2304, and 2507. The welds of 300 series SS may also exhibit a duplex structure.</p>
        </div>
        <div class="subsection">
            <h4>2.1.7 ferritic</h4>
            <p>A term that refers to a type of metallurgical structure (ferrite) normally found in carbon and low-alloy steels and many 400 series SS. These materials have a body centered cubic crystallographic structure and are generally magnetic.</p>
        </div>
        <div class="subsection">
            <h4>2.1.8 ferritic stainless steels</h4>
            <p>A family of stainless steels including Types 405, 409, 410S, 430, 442, and 446.</p>
        </div>
        <div class="subsection">
            <h4>2.1.9 heat-affected zone</h4>
            <p>HAZ</p>
            <p>The portion of the base metal adjacent to a weld that has not been melted, but in which the metallurgical microstructure and mechanical properties have been changed by the heat of welding, sometimes with undesirable effects.</p>
        </div>
        <div class="subsection">
            <h4>2.1.10 high-strength low-alloy steel</h4>
            <p>HSLA steel</p>
            <p>A family of carbon steels in which higher strength levels are achieved by the addition of moderate amounts of alloying elements such as titanium, vanadium, or niobium in amounts of less than 0.1 %. They can be more sensitive to cracking during fabrication from hydrogen embrittlement (HE) (delayed cracking; also known as underbead cracking).</p>
        </div>
        <div class="subsection">
            <h4>2.1.11 low-alloy steel</h4>
            <p>A family of steels containing up to 9 % chromium and other alloying additions for high temperature strength and creep resistance. The low-alloy steels commonly encountered in refining include C-0.5Mo, Mn-0.5Mo, 1Cr-0.5Mo, 1.25Cr-0.5Mo, 2.25Cr-1.0Mo, 5Cr-0.5Mo, and 9Cr-1Mo. These are considered ferritic steels, although their microstructures might be an alteration of the ferrite phase found in carbon steel.</p>
        </div>
        <div class="subsection">
            <h4>2.1.12 martensitic</h4>
            <p>A term that refers to a type of hard metallurgical structure (martensite) normally found in some 400 series SS. Heat treatment or welding followed by rapid cooling can sometimes produce this or a similar hard metallurgical structure in carbon and low-alloy steels. Martensitic and similar hard microstructures typically need to be tempered by heat treatment to soften them in order to make the material suitable for use in refining applications.</p>
        </div>
        <div class="subsection">
            <h4>2.1.13 martensitic stainless steel</h4>
            <p>A family of stainless steels including Types 410, 416, 420, 440A, 440B, and 440C.</p>
        </div>
        <div class="subsection">
            <h4>2.1.14 methyl diethanolamine</h4>
            <p>MDEA</p>
            <p>Chemical used in amine treating to remove H<sub>2</sub>S and CO<sub>2</sub> from hydrocarbon streams.</p>
        </div>
        <div class="subsection">
            <h4>2.1.15 monoethanolamine</h4>
            <p>MEA</p>
            <p>Chemical used in amine treating to remove H<sub>2</sub>S and CO<sub>2</sub> from hydrocarbon streams.</p>
        </div>
        <div class="subsection">
            <h4>2.1.16 nickel-based</h4>
            <p>A family of alloys containing nickel as a major alloying element (>30 % Ni) including Alloys 200, 400, K-500, 800, 800H, 825, 600, 600H, 617, 625, 718, X-750, and C276.</p>
        </div>
        <div class="subsection">
            <h4>2.1.17 stainless steel</h4>
            <p>An alloy of iron (Fe) with at least 10.5 % chromium (Cr) plus other alloy additions, depending on the specific grade. There are four major categories of stainless steels that are characterized by their metallurgical structure at room temperature: austenitic, ferritic, martensitic, and duplex. These alloys have varying amounts of chromium and other alloying elements that give them resistance to certain types of degradation depending on the alloy.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>2.2 Acronyms and Abbreviations</h4>
        <p>For the purposes of this document, the following acronyms and abbreviations apply.</p>
        <div class="table-container">
            <table class="api-table">
                <caption>Table 1—Acronyms and Abbreviations</caption>
                <thead>
                    <tr>
                        <th>Acronym</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ABSA</td>
                        <td>angle beam spectral analysis</td>
                    </tr>
                    <tr>
                        <td>ACFM</td>
                        <td>alternating current field measurement</td>
                    </tr>
                    <tr>
                        <td>ACSCC</td>
                        <td>alkaline carbonate stress corrosion cracking</td>
                    </tr>
                    <tr>
                        <td>AET</td>
                        <td>acoustic emission testing</td>
                    </tr>
                    <tr>
                        <td>AGO</td>
                        <td>atmospheric gas oil</td>
                    </tr>
                    <tr>
                        <td>Al</td>
                        <td>aluminum</td>
                    </tr>
                    <tr>
                        <td>ARH</td>
                        <td>acid relief header</td>
                    </tr>
                    <tr>
                        <td>ARN</td>
                        <td>acid relief neutralizer</td>
                    </tr>
                    <tr>
                        <td>ASCC</td>
                        <td>alkaline stress corrosion cracking</td>
                    </tr>
                    <tr>
                        <td>AUBT</td>
                        <td>automated ultrasonic backscatter testing</td>
                    </tr>
                    <tr>
                        <td>AUT</td>
                        <td>automated ultrasonic testing</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>boron</td>
                    </tr>
                    <tr>
                        <td>BFW</td>
                        <td>boiler feedwater</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>carbon</td>
                    </tr>
                    <tr>
                        <td>C3</td>
                        <td>chemical symbol referring to propane or propylene</td>
                    </tr>
                    <tr>
                        <td>C4</td>
                        <td>chemical symbol referring to butane or butylene</td>
                    </tr>
                    <tr>
                        <td>Cat</td>
                        <td>catalyst or catalytic</td>
                    </tr>
                    <tr>
                        <td>CCR</td>
                        <td>continuous catalytic reforming</td>
                    </tr>
                    <tr>
                        <td>CH<sub>4</sub></td>
                        <td>methane</td>
                    </tr>
                    <tr>
                        <td>Cl<sup>−</sup> SCC</td>
                        <td>chloride stress corrosion cracking</td>
                    </tr>
                    <tr>
                        <td>CO</td>
                        <td>carbon monoxide</td>
                    </tr>
                    <tr>
                        <td>CO<sub>2</sub></td>
                        <td>carbon dioxide</td>
                    </tr>
                    <tr>
                        <td>Cr</td>
                        <td>chromium</td>
                    </tr>
                    <tr>
                        <td>Cu</td>
                        <td>copper</td>
                    </tr>
                    <tr>
                        <td>CuF</td>
                        <td>cuprous fluoride</td>
                    </tr>
                    <tr>
                        <td>CuF<sub>2</sub></td>
                        <td>cupric fluoride</td>
                    </tr>
                    <tr>
                        <td>CUI</td>
                        <td>corrosion under insulation</td>
                    </tr>
                    <tr>
                        <td>CVN</td>
                        <td>Charpy V-notch</td>
                    </tr>
                    <tr>
                        <td>CW</td>
                        <td>cooling water</td>
                    </tr>
                    <tr>
                        <td>DEA</td>
                        <td>diethanolamine</td>
                    </tr>
                    <tr>
                        <td>DGA</td>
                        <td>diglycolamine</td>
                    </tr>
                    <tr>
                        <td>DIPA</td>
                        <td>diisopropylamine</td>
                    </tr>
                    <tr>
                        <td>DMW</td>
                        <td>dissimilar metal weld</td>
                    </tr>
                    <tr>
                        <td>DNB</td>
                        <td>departure from nucleate boiling</td>
                    </tr>
                    <tr>
                        <td>ECT</td>
                        <td>eddy current testing</td>
                    </tr>
                    <tr>
                        <td>EMAT</td>
                        <td>electromagnetic acoustic transducer</td>
                    </tr>
                    <tr>
                        <td>FAC</td>
                        <td>flow accelerated corrosion (in boiler water and steam condensate)</td>
                    </tr>
                    <tr>
                        <td>FCC</td>
                        <td>fluid catalytic cracker</td>
                    </tr>
                    <tr>
                        <td>Fe</td>
                        <td>iron</td>
                    </tr>
                    <tr>
                        <td>Fe<sub>3</sub>O<sub>4</sub></td>
                        <td>magnetite</td>
                    </tr>
                    <tr>
                        <td>FeS</td>
                        <td>iron sulfide</td>
                    </tr>
                    <tr>
                        <td>FFS</td>
                        <td>Fitness-For-Service</td>
                    </tr>
                    <tr>
                        <td>FGE</td>
                        <td>fuel grade ethanol</td>
                    </tr>
                    <tr>
                        <td>FMR</td>
                        <td>field metallographic replication</td>
                    </tr>
                    <tr>
                        <td>FRP</td>
                        <td>fiber-reinforced plastic</td>
                    </tr>
                    <tr>
                        <td>GWT</td>
                        <td>guided wave testing</td>
                    </tr>
                    <tr>
                        <td>H<sub>2</sub></td>
                        <td>diatomic hydrogen gas</td>
                    </tr>
                    <tr>
                        <td>HAZ</td>
                        <td>heat-affected zone</td>
                    </tr>
                    <tr>
                        <td>HB</td>
                        <td>Brinell hardness number</td>
                    </tr>
                    <tr>
                        <td>HCGO</td>
                        <td>heavy coker gas oil</td>
                    </tr>
                    <tr>
                        <td>HCl</td>
                        <td>hydrochloric (acid)</td>
                    </tr>
                    <tr>
                        <td>HCN</td>
                        <td>hydrogen cyanide</td>
                    </tr>
                    <tr>
                        <td>H<sub>2</sub>CO<sub>3</sub></td>
                        <td>carbonic acid</td>
                    </tr>
                    <tr>
                        <td>HE</td>
                        <td>hydrogen embrittlement</td>
                    </tr>
                    <tr>
                        <td>HF</td>
                        <td>hydrofluoric (acid)</td>
                    </tr>
                    <tr>
                        <td>Hg</td>
                        <td>mercury</td>
                    </tr>
                    <tr>
                        <td>HHPS</td>
                        <td>hot high-pressure separator</td>
                    </tr>
                    <tr>
                        <td>HIC</td>
                        <td>hydrogen-induced cracking</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>high pressure</td>
                    </tr>
                    <tr>
                        <td>HPS</td>
                        <td>high-pressure separator</td>
                    </tr>
                    <tr>
                        <td>HRC</td>
                        <td>Rockwell hardness number (based on Rockwell C scale)</td>
                    </tr>
                    <tr>
                        <td>HRSG</td>
                        <td>heat-recovery steam generator</td>
                    </tr>
                    <tr>
                        <td>H<sub>2</sub>S</td>
                        <td>hydrogen sulfide</td>
                    </tr>
                    <tr>
                        <td>HSAS</td>
                        <td>heat stable amine salts</td>
                    </tr>
                    <tr>
                        <td>HSLA</td>
                        <td>high-strength low-alloy</td>
                    </tr>
                    <tr>
                        <td>H<sub>2</sub>SO<sub>4</sub></td>
                        <td>sulfuric acid</td>
                    </tr>
                    <tr>
                        <td>HCO</td>
                        <td>heavy cycle oil</td>
                    </tr>
                    <tr>
                        <td>HTHA</td>
                        <td>high-temperature hydrogen attack</td>
                    </tr>
                    <tr>
                        <td>HVGO</td>
                        <td>heavy vacuum gas oil</td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>inside diameter</td>
                    </tr>
                    <tr>
                        <td>IOW</td>
                        <td>integrity operating window</td>
                    </tr>
                    <tr>
                        <td>IRIS</td>
                        <td>internal rotating inspection system</td>
                    </tr>
                    <tr>
                        <td>K.O. or KO</td>
                        <td>knock out, as in K.O. drum</td>
                    </tr>
                    <tr>
                        <td>KOH</td>
                        <td>potassium hydroxide</td>
                    </tr>
                    <tr>
                        <td>LCGO</td>
                        <td>light coker gas oil</td>
                    </tr>
                    <tr>
                        <td>LCO</td>
                        <td>light cycle oil</td>
                    </tr>
                    <tr>
                        <td>LP</td>
                        <td>low pressure</td>
                    </tr>
                    <tr>
                        <td>LPS</td>
                        <td>low-pressure separator</td>
                    </tr>
                    <tr>
                        <td>LVGO</td>
                        <td>light vacuum gas oil</td>
                    </tr>
                    <tr>
                        <td>MAWP</td>
                        <td>maximum allowable working pressure</td>
                    </tr>
                    <tr>
                        <td>MDEA</td>
                        <td>methyl diethanolamine</td>
                    </tr>
                    <tr>
                        <td>MDMT</td>
                        <td>minimum design metal temperature</td>
                    </tr>
                    <tr>
                        <td>MEA</td>
                        <td>monoethanolamine</td>
                    </tr>
                    <tr>
                        <td>MFL</td>
                        <td>magnetic flux leakage</td>
                    </tr>
                    <tr>
                        <td>MIC</td>
                        <td>microbiologically influenced corrosion</td>
                    </tr>
                    <tr>
                        <td>Mn</td>
                        <td>manganese</td>
                    </tr>
                    <tr>
                        <td>Mo</td>
                        <td>molybdenum</td>
                    </tr>
                    <tr>
                        <td>MPT</td>
                        <td>minimum pressurization temperature</td>
                    </tr>
                    <tr>
                        <td>mpy</td>
                        <td>mils per year</td>
                    </tr>
                    <tr>
                        <td>MT</td>
                        <td>magnetic particle testing</td>
                    </tr>
                    <tr>
                        <td>MVP</td>
                        <td>materials verification program</td>
                    </tr>
                    <tr>
                        <td>Na</td>
                        <td>sodium</td>
                    </tr>
                    <tr>
                        <td>NAC</td>
                        <td>naphthenic acid corrosion</td>
                    </tr>
                    <tr>
                        <td>NaOH</td>
                        <td>sodium hydroxide</td>
                    </tr>
                    <tr>
                        <td>Nb</td>
                        <td>niobium</td>
                    </tr>
                    <tr>
                        <td>NDE</td>
                        <td>nondestructive examination</td>
                    </tr>
                    <tr>
                        <td>NFT</td>
                        <td>near-field testing</td>
                    </tr>
                    <tr>
                        <td>NH<sub>3</sub></td>
                        <td>ammonia</td>
                    </tr>
                    <tr>
                        <td>NH<sub>4</sub>HS</td>
                        <td>ammonium bisulfide</td>
                    </tr>
                    <tr>
                        <td>Ni</td>
                        <td>nickel</td>
                    </tr>
                    <tr>
                        <td>NO<sub>2</sub></td>
                        <td>nitrogen dioxide</td>
                    </tr>
                    <tr>
                        <td>NPSH</td>
                        <td>net positive suction head</td>
                    </tr>
                    <tr>
                        <td>O<sub>2</sub></td>
                        <td>oxygen</td>
                    </tr>
                    <tr>
                        <td>OD</td>
                        <td>outside diameter</td>
                    </tr>
                    <tr>
                        <td>P</td>
                        <td>phosphorus</td>
                    </tr>
                    <tr>
                        <td>PAUT</td>
                        <td>phased array ultrasonic testing</td>
                    </tr>
                    <tr>
                        <td>PEC</td>
                        <td>pulsed eddy current</td>
                    </tr>
                    <tr>
                        <td>PFD</td>
                        <td>process flow diagram</td>
                    </tr>
                    <tr>
                        <td>PMI</td>
                        <td>positive materials identification</td>
                    </tr>
                    <tr>
                        <td>POX</td>
                        <td>partial oxidation</td>
                    </tr>
                    <tr>
                        <td>PREN</td>
                        <td>pitting resistance equivalent number</td>
                    </tr>
                    <tr>
                        <td>PT</td>
                        <td>liquid penetrant testing</td>
                    </tr>
                    <tr>
                        <td>PTA SCC</td>
                        <td>polythionic acid stress corrosion cracking</td>
                    </tr>
                    <tr>
                        <td>PTFE</td>
                        <td>polytetrafluoroethylene</td>
                    </tr>
                    <tr>
                        <td>PVC</td>
                        <td>polyvinyl chloride</td>
                    </tr>
                    <tr>
                        <td>PWHT</td>
                        <td>postweld heat treatment</td>
                    </tr>
                    <tr>
                        <td>RE</td>
                        <td>residual element</td>
                    </tr>
                    <tr>
                        <td>RFT</td>
                        <td>remote field testing</td>
                    </tr>
                    <tr>
                        <td>RT</td>
                        <td>radiographic testing</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td>sulfur</td>
                    </tr>
                    <tr>
                        <td>SAW</td>
                        <td>submerged-arc welding</td>
                    </tr>
                    <tr>
                        <td>SCC</td>
                        <td>stress corrosion cracking</td>
                    </tr>
                    <tr>
                        <td>SEM</td>
                        <td>scanning electron microscope</td>
                    </tr>
                    <tr>
                        <td>Si</td>
                        <td>silicon</td>
                    </tr>
                    <tr>
                        <td>SLOFEC</td>
                        <td>saturated low-frequency eddy current</td>
                    </tr>
                    <tr>
                        <td>SO<sub>2</sub></td>
                        <td>sulfur dioxide</td>
                    </tr>
                    <tr>
                        <td>SOHIC</td>
                        <td>stress-oriented hydrogen-induced cracking</td>
                    </tr>
                    <tr>
                        <td>SRB</td>
                        <td>sulfate-reducing bacteria</td>
                    </tr>
                    <tr>
                        <td>SRC</td>
                        <td>stress relaxation cracking</td>
                    </tr>
                    <tr>
                        <td>SRU</td>
                        <td>sulfur recovery unit</td>
                    </tr>
                    <tr>
                        <td>SS</td>
                        <td>stainless steel</td>
                    </tr>
                    <tr>
                        <td>SSC</td>
                        <td>sulfide stress cracking</td>
                    </tr>
                    <tr>
                        <td>SW</td>
                        <td>sour water</td>
                    </tr>
                    <tr>
                        <td>SWS</td>
                        <td>sour water stripper</td>
                    </tr>
                    <tr>
                        <td>SWUT</td>
                        <td>shear wave ultrasonic testing</td>
                    </tr>
                    <tr>
                        <td>TAN</td>
                        <td>total acid number</td>
                    </tr>
                    <tr>
                        <td>Ti</td>
                        <td>titanium</td>
                    </tr>
                    <tr>
                        <td>TOFD</td>
                        <td>time of flight diffraction</td>
                    </tr>
                    <tr>
                        <td>UT</td>
                        <td>ultrasonic testing</td>
                    </tr>
                    <tr>
                        <td>UTS</td>
                        <td>ultimate tensile strength</td>
                    </tr>
                    <tr>
                        <td>V</td>
                        <td>vanadium</td>
                    </tr>
                    <tr>
                        <td>VT</td>
                        <td>visual inspection (visual testing)</td>
                    </tr>
                    <tr>
                        <td>WFMT</td>
                        <td>wet fluorescent magnetic particle testing</td>
                    </tr>
                    <tr>
                        <td>Zn</td>
                        <td>zinc</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `,
    contentEs: `<h3>2 Términos y Definiciones</h3>
    <div class="subsection">
        <h4>2.1 Definiciones</h4>
        <p>Para los propósitos de este documento, aplican las siguientes definiciones.</p>
        <div class="subsection">
            <h4>2.1.1 austenítico</h4>
            <p>Término que se refiere a un tipo de estructura metalúrgica (austenita) normalmente encontrada en aceros inoxidables serie 300 (SS) y aleaciones base níquel. Estos materiales tienen una estructura cristalográfica cúbica centrada en las caras y generalmente son no magnéticos.</p>
        </div>
        <div class="subsection">
            <h4>2.1.2 aceros inoxidables austeníticos</h4>
            <p>Los SS serie 300, que comúnmente incluyen los Tipos 304, 304L, 304H, 309, 310, 316, 316L, 316H, 317, 317L, 321, 321H, 347 y 347H. Los sufijos "L" y "H" se refieren a rangos controlados de bajo y alto contenido de carbono, respectivamente. Estas aleaciones se caracterizan por una estructura austenítica.</p>
        </div>
        <div class="subsection">
            <h4>2.1.3 acero al carbono</h4>
            <p>Una aleación que consiste principalmente en hierro (Fe) con una pequeña cantidad de carbono (C). Los aceros al carbono no tienen elementos de aleación añadidos intencionalmente. Sin embargo, puede haber pequeñas cantidades de elementos permitidos por especificaciones como ASTM A516 y ASTM A106, por ejemplo, que pueden afectar las propiedades relacionadas con la corrosión, la dureza después de la soldadura y la tenacidad. Los elementos que pueden encontrarse en pequeñas cantidades incluyen Mn, Cr, Ni, Mo, Cu, S, Si, P, Al, V y B.</p>
        </div>
        <div class="subsection">
            <h4>2.1.4 dietanolamina</h4>
            <p>DEA</p>
            <p>Químico utilizado en el tratamiento con aminas para eliminar H<sub>2</sub>S y CO<sub>2</sub> de corrientes de hidrocarburos.</p>
        </div>
        <div class="subsection">
            <h4>2.1.5 diglicolamina</h4>
            <p>DGA</p>
            <p>Químico utilizado en el tratamiento con aminas para eliminar H<sub>2</sub>S y CO<sub>2</sub> de corrientes de hidrocarburos.</p>
        </div>
        <div class="subsection">
            <h4>2.1.6 acero inoxidable dúplex</h4>
            <p>Una familia de aceros inoxidables que contienen una estructura mixta austenítica-ferrítica incluyendo las Aleaciones 2205, 2304 y 2507. Las soldaduras de los SS serie 300 también pueden exhibir una estructura dúplex.</p>
        </div>
        <div class="subsection">
            <h4>2.1.7 ferrítico</h4>
            <p>Término que se refiere a un tipo de estructura metalúrgica (ferrita) normalmente encontrada en aceros al carbono y de baja aleación y muchos SS serie 400. Estos materiales tienen una estructura cristalográfica cúbica centrada en el cuerpo y generalmente son magnéticos.</p>
        </div>
        <div class="subsection">
            <h4>2.1.8 aceros inoxidables ferríticos</h4>
            <p>Una familia de aceros inoxidables que incluye los Tipos 405, 409, 410S, 430, 442 y 446.</p>
        </div>
        <div class="subsection">
            <h4>2.1.9 zona afectada por el calor</h4>
            <p>HAZ</p>
            <p>La porción del metal base adyacente a una soldadura que no se ha fundido, pero en la cual la microestructura metalúrgica y las propiedades mecánicas han sido cambiadas por el calor de la soldadura, a veces con efectos no deseados.</p>
        </div>
        <div class="subsection">
            <h4>2.1.10 acero de baja aleación de alta resistencia</h4>
            <p>HSLA steel</p>
            <p>Una familia de aceros al carbono en la cual se alcanzan niveles más altos de resistencia mediante la adición de cantidades moderadas de elementos de aleación como titanio, vanadio o niobio en cantidades menores al 0.1%. Pueden ser más sensibles al agrietamiento durante la fabricación debido a la fragilización por hidrógeno (HE) (agrietamiento retardado; también conocido como agrietamiento bajo el cordón).</p>
        </div>
        <div class="subsection">
            <h4>2.1.11 acero de baja aleación</h4>
            <p>Una familia de aceros que contienen hasta 9% de cromo y otras adiciones de aleación para resistencia a alta temperatura y resistencia a la fluencia. Los aceros de baja aleación comúnmente encontrados en refinación incluyen C-0.5Mo, Mn-0.5Mo, 1Cr-0.5Mo, 1.25Cr-0.5Mo, 2.25Cr-1.0Mo, 5Cr-0.5Mo y 9Cr-1Mo. Estos se consideran aceros ferríticos, aunque sus microestructuras pueden ser una alteración de la fase de ferrita encontrada en el acero al carbono.</p>
        </div>
        <div class="subsection">
            <h4>2.1.12 martensítico</h4>
            <p>Término que se refiere a un tipo de estructura metalúrgica dura (martensita) normalmente encontrada en algunos SS serie 400. El tratamiento térmico o la soldadura seguida de enfriamiento rápido a veces puede producir esta o una estructura metalúrgica dura similar en aceros al carbono y de baja aleación. Las microestructuras martensíticas y duras similares típicamente necesitan ser templadas mediante tratamiento térmico para ablandarlas y hacer el material adecuado para su uso en aplicaciones de refinación.</p>
        </div>
        <div class="subsection">
            <h4>2.1.13 acero inoxidable martensítico</h4>
            <p>Una familia de aceros inoxidables que incluye los Tipos 410, 416, 420, 440A, 440B y 440C.</p>
        </div>
        <div class="subsection">
            <h4>2.1.14 metildietanolamina</h4>
            <p>MDEA</p>
            <p>Químico utilizado en el tratamiento con aminas para eliminar H<sub>2</sub>S y CO<sub>2</sub> de corrientes de hidrocarburos.</p>
        </div>
        <div class="subsection">
            <h4>2.1.15 monoetanolamina</h4>
            <p>MEA</p>
            <p>Químico utilizado en el tratamiento con aminas para eliminar H<sub>2</sub>S y CO<sub>2</sub> de corrientes de hidrocarburos.</p>
        </div>
        <div class="subsection">
            <h4>2.1.16 base níquel</h4>
            <p>Una familia de aleaciones que contienen níquel como elemento de aleación principal (>30% Ni) incluyendo las Aleaciones 200, 400, K-500, 800, 800H, 825, 600, 600H, 617, 625, 718, X-750 y C276.</p>
        </div>
        <div class="subsection">
            <h4>2.1.17 acero inoxidable</h4>
            <p>Una aleación de hierro (Fe) con al menos 10.5% de cromo (Cr) más otras adiciones de aleación, dependiendo del grado específico. Hay cuatro categorías principales de aceros inoxidables que se caracterizan por su estructura metalúrgica a temperatura ambiente: austenítico, ferrítico, martensítico y dúplex. Estas aleaciones tienen cantidades variables de cromo y otros elementos de aleación que les dan resistencia a ciertos tipos de degradación dependiendo de la aleación.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>2.2 Acrónimos y Abreviaturas</h4>
        <p>Para los propósitos de este documento, aplican los siguientes acrónimos y abreviaturas.</p>
        <div class="table-container">
            <table class="api-table">
                <caption>Tabla 1—Acrónimos y Abreviaturas</caption>
                <thead>
                    <tr>
                        <th>Acrónimo</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ABSA</td>
                        <td>análisis espectral de haz angular</td>
                    </tr>
                    <tr>
                        <td>ACFM</td>
                        <td>medición de campo de corriente alterna</td>
                    </tr>
                    <tr>
                        <td>ACSCC</td>
                        <td>agrietamiento por corrosión bajo tensión de carbonato alcalino</td>
                    </tr>
                    <tr>
                        <td>AET</td>
                        <td>prueba de emisión acústica</td>
                    </tr>
                    <tr>
                        <td>AGO</td>
                        <td>gasóleo atmosférico</td>
                    </tr>
                    <tr>
                        <td>Al</td>
                        <td>aluminio</td>
                    </tr>
                    <tr>
                        <td>ARH</td>
                        <td>colector de alivio de ácido</td>
                    </tr>
                    <tr>
                        <td>ARN</td>
                        <td>neutralizador de alivio de ácido</td>
                    </tr>
                    <tr>
                        <td>ASCC</td>
                        <td>agrietamiento por corrosión bajo tensión alcalina</td>
                    </tr>
                    <tr>
                        <td>AUBT</td>
                        <td>prueba ultrasónica automatizada de retrodispersión</td>
                    </tr>
                    <tr>
                        <td>AUT</td>
                        <td>prueba ultrasónica automatizada</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>boro</td>
                    </tr>
                    <tr>
                        <td>BFW</td>
                        <td>agua de alimentación de caldera</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>carbono</td>
                    </tr>
                    <tr>
                        <td>C3</td>
                        <td>símbolo químico que se refiere al propano o propileno</td>
                    </tr>
                    <tr>
                        <td>C4</td>
                        <td>símbolo químico que se refiere al butano o butileno</td>
                    </tr>
                    <tr>
                        <td>Cat</td>
                        <td>catalizador o catalítico</td>
                    </tr>
                    <tr>
                        <td>CCR</td>
                        <td>reformado catalítico continuo</td>
                    </tr>
                    <tr>
                        <td>CH<sub>4</sub></td>
                        <td>metano</td>
                    </tr>
                    <tr>
                        <td>Cl<sup>−</sup> SCC</td>
                        <td>agrietamiento por corrosión bajo tensión por cloruros</td>
                    </tr>
                    <tr>
                        <td>CO</td>
                        <td>monóxido de carbono</td>
                    </tr>
                    <tr>
                        <td>CO<sub>2</sub></td>
                        <td>dióxido de carbono</td>
                    </tr>
                    <tr>
                        <td>Cr</td>
                        <td>cromo</td>
                    </tr>
                    <tr>
                        <td>Cu</td>
                        <td>cobre</td>
                    </tr>
                    <tr>
                        <td>CuF</td>
                        <td>fluoruro cuproso</td>
                    </tr>
                    <tr>
                        <td>CuF<sub>2</sub></td>
                        <td>fluoruro cúprico</td>
                    </tr>
                    <tr>
                        <td>CUI</td>
                        <td>corrosión bajo aislamiento</td>
                    </tr>
                    <tr>
                        <td>CVN</td>
                        <td>entalla Charpy V</td>
                    </tr>
                    <tr>
                        <td>CW</td>
                        <td>agua de enfriamiento</td>
                    </tr>
                    <tr>
                        <td>DEA</td>
                        <td>dietanolamina</td>
                    </tr>
                    <tr>
                        <td>DGA</td>
                        <td>diglicolamina</td>
                    </tr>
                    <tr>
                        <td>DIPA</td>
                        <td>diisopropilamina</td>
                    </tr>
                    <tr>
                        <td>DMW</td>
                        <td>soldadura de metales disímiles</td>
                    </tr>
                    <tr>
                        <td>DNB</td>
                        <td>desviación de la ebullición nucleada</td>
                    </tr>
                    <tr>
                        <td>ECT</td>
                        <td>prueba de corriente de Foucault</td>
                    </tr>
                    <tr>
                        <td>EMAT</td>
                        <td>transductor acústico electromagnético</td>
                    </tr>
                    <tr>
                        <td>FAC</td>
                        <td>corrosión acelerada por flujo (en agua de caldera y condensado de vapor)</td>
                    </tr>
                    <tr>
                        <td>FCC</td>
                        <td>cracker catalítico fluido</td>
                    </tr>
                    <tr>
                        <td>Fe</td>
                        <td>hierro</td>
                    </tr>
                    <tr>
                        <td>Fe<sub>3</sub>O<sub>4</sub></td>
                        <td>magnetita</td>
                    </tr>
                    <tr>
                        <td>FeS</td>
                        <td>sulfuro de hierro</td>
                    </tr>
                    <tr>
                        <td>FFS</td>
                        <td>Aptitud para el Servicio</td>
                    </tr>
                    <tr>
                        <td>FGE</td>
                        <td>etanol de grado combustible</td>
                    </tr>
                    <tr>
                        <td>FMR</td>
                        <td>replicación metalográfica de campo</td>
                    </tr>
                    <tr>
                        <td>FRP</td>
                        <td>plástico reforzado con fibra</td>
                    </tr>
                    <tr>
                        <td>GWT</td>
                        <td>prueba de onda guiada</td>
                    </tr>
                    <tr>
                        <td>H<sub>2</sub></td>
                        <td>gas hidrógeno diatómico</td>
                    </tr>
                    <tr>
                        <td>HAZ</td>
                        <td>zona afectada por el calor</td>
                    </tr>
                    <tr>
                        <td>HB</td>
                        <td>número de dureza Brinell</td>
                    </tr>
                    <tr>
                        <td>HCGO</td>
                        <td>gasóleo pesado de coquer</td>
                    </tr>
                    <tr>
                        <td>HCl</td>
                        <td>ácido clorhídrico</td>
                    </tr>
                    <tr>
                        <td>HCN</td>
                        <td>cianuro de hidrógeno</td>
                    </tr>
                    <tr>
                        <td>H<sub>2</sub>CO<sub>3</sub></td>
                        <td>ácido carbónico</td>
                    </tr>
                    <tr>
                        <td>HE</td>
                        <td>fragilización por hidrógeno</td>
                    </tr>
                    <tr>
                        <td>HF</td>
                        <td>ácido fluorhídrico</td>
                    </tr>
                    <tr>
                        <td>Hg</td>
                        <td>mercurio</td>
                    </tr>
                    <tr>
                        <td>HHPS</td>
                        <td>separador de alta presión caliente</td>
                    </tr>
                    <tr>
                        <td>HIC</td>
                        <td>agrietamiento inducido por hidrógeno</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>alta presión</td>
                    </tr>
                    <tr>
                        <td>HPS</td>
                        <td>separador de alta presión</td>
                    </tr>
                    <tr>
                        <td>HRC</td>
                        <td>número de dureza Rockwell (basado en escala Rockwell C)</td>
                    </tr>
                    <tr>
                        <td>HRSG</td>
                        <td>generador de vapor de recuperación de calor</td>
                    </tr>
                    <tr>
                        <td>H<sub>2</sub>S</td>
                        <td>sulfuro de hidrógeno</td>
                    </tr>
                    <tr>
                        <td>HSAS</td>
                        <td>sales de amina estables al calor</td>
                    </tr>
                    <tr>
                        <td>HSLA</td>
                        <td>alta resistencia baja aleación</td>
                    </tr>
                    <tr>
                        <td>H<sub>2</sub>SO<sub>4</sub></td>
                        <td>ácido sulfúrico</td>
                    </tr>
                    <tr>
                        <td>HCO</td>
                        <td>aceite cíclico pesado</td>
                    </tr>
                    <tr>
                        <td>HTHA</td>
                        <td>ataque de hidrógeno a alta temperatura</td>
                    </tr>
                    <tr>
                        <td>HVGO</td>
                        <td>gasóleo vacío pesado</td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>diámetro interior</td>
                    </tr>
                    <tr>
                        <td>IOW</td>
                        <td>ventana de operación de integridad</td>
                    </tr>
                    <tr>
                        <td>IRIS</td>
                        <td>sistema de inspección rotativo interno</td>
                    </tr>
                    <tr>
                        <td>K.O. o KO</td>
                        <td>separador, como en tambor K.O.</td>
                    </tr>
                    <tr>
                        <td>KOH</td>
                        <td>hidróxido de potasio</td>
                    </tr>
                    <tr>
                        <td>LCGO</td>
                        <td>gasóleo ligero de coquer</td>
                    </tr>
                    <tr>
                        <td>LCO</td>
                        <td>aceite cíclico ligero</td>
                    </tr>
                    <tr>
                        <td>LP</td>
                        <td>baja presión</td>
                    </tr>
                    <tr>
                        <td>LPS</td>
                        <td>separador de baja presión</td>
                    </tr>
                    <tr>
                        <td>LVGO</td>
                        <td>gasóleo vacío ligero</td>
                    </tr>
                    <tr>
                        <td>MAWP</td>
                        <td>presión máxima de trabajo permitida</td>
                    </tr>
                    <tr>
                        <td>MDEA</td>
                        <td>metildietanolamina</td>
                    </tr>
                    <tr>
                        <td>MDMT</td>
                        <td>temperatura mínima de diseño del metal</td>
                    </tr>
                    <tr>
                        <td>MEA</td>
                        <td>monoetanolamina</td>
                    </tr>
                    <tr>
                        <td>MFL</td>
                        <td>fuga de flujo magnético</td>
                    </tr>
                    <tr>
                        <td>MIC</td>
                        <td>corrosión influenciada microbiológicamente</td>
                    </tr>
                    <tr>
                        <td>Mn</td>
                        <td>manganeso</td>
                    </tr>
                    <tr>
                        <td>Mo</td>
                        <td>molibdeno</td>
                    </tr>
                    <tr>
                        <td>MPT</td>
                        <td>temperatura mínima de presurización</td>
                    </tr>
                    <tr>
                        <td>mpy</td>
                        <td>mils por año</td>
                    </tr>
                    <tr>
                        <td>MT</td>
                        <td>prueba de partículas magnéticas</td>
                    </tr>
                    <tr>
                        <td>MVP</td>
                        <td>programa de verificación de materiales</td>
                    </tr>
                    <tr>
                        <td>Na</td>
                        <td>sodio</td>
                    </tr>
                    <tr>
                        <td>NAC</td>
                        <td>corrosión por ácido nafténico</td>
                    </tr>
                    <tr>
                        <td>NaOH</td>
                        <td>hidróxido de sodio</td>
                    </tr>
                    <tr>
                        <td>Nb</td>
                        <td>niobio</td>
                    </tr>
                    <tr>
                        <td>NDE</td>
                        <td>examen no destructivo</td>
                    </tr>
                    <tr>
                        <td>NFT</td>
                        <td>prueba de campo cercano</td>
                    </tr>
                    <tr>
                        <td>NH<sub>3</sub></td>
                        <td>amoníaco</td>
                    </tr>
                    <tr>
                        <td>NH<sub>4</sub>HS</td>
                        <td>bisulfuro de amonio</td>
                    </tr>
                    <tr>
                        <td>Ni</td>
                        <td>níquel</td>
                    </tr>
                    <tr>
                        <td>NO<sub>2</sub></td>
                        <td>dióxido de nitrógeno</td>
                    </tr>
                    <tr>
                        <td>NPSH</td>
                        <td>carga neta positiva de succión</td>
                    </tr>
                    <tr>
                        <td>O<sub>2</sub></td>
                        <td>oxígeno</td>
                    </tr>
                    <tr>
                        <td>OD</td>
                        <td>diámetro exterior</td>
                    </tr>
                    <tr>
                        <td>P</td>
                        <td>fósforo</td>
                    </tr>
                    <tr>
                        <td>PAUT</td>
                        <td>prueba ultrasónica de arreglo faseado</td>
                    </tr>
                    <tr>
                        <td>PEC</td>
                        <td>corriente de Foucault pulsada</td>
                    </tr>
                    <tr>
                        <td>PFD</td>
                        <td>diagrama de flujo de proceso</td>
                    </tr>
                    <tr>
                        <td>PMI</td>
                        <td>identificación positiva de materiales</td>
                    </tr>
                    <tr>
                        <td>POX</td>
                        <td>oxidación parcial</td>
                    </tr>
                    <tr>
                        <td>PREN</td>
                        <td>número equivalente de resistencia a la picadura</td>
                    </tr>
                    <tr>
                        <td>PT</td>
                        <td>prueba de líquidos penetrantes</td>
                    </tr>
                    <tr>
                        <td>PTA SCC</td>
                        <td>agrietamiento por corrosión bajo tensión de ácido tiónico</td>
                    </tr>
                    <tr>
                        <td>PTFE</td>
                        <td>politetrafluoroetileno</td>
                    </tr>
                    <tr>
                        <td>PVC</td>
                        <td>cloruro de polivinilo</td>
                    </tr>
                    <tr>
                        <td>PWHT</td>
                        <td>tratamiento térmico postsoldadura</td>
                    </tr>
                    <tr>
                        <td>RE</td>
                        <td>elemento residual</td>
                    </tr>
                    <tr>
                        <td>RFT</td>
                        <td>prueba de campo remoto</td>
                    </tr>
                    <tr>
                        <td>RT</td>
                        <td>prueba radiográfica</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td>azufre</td>
                    </tr>
                    <tr>
                        <td>SAW</td>
                        <td>soldadura por arco sumergido</td>
                    </tr>
                    <tr>
                        <td>SCC</td>
                        <td>agrietamiento por corrosión bajo tensión</td>
                    </tr>
                    <tr>
                        <td>SEM</td>
                        <td>microscopio electrónico de barrido</td>
                    </tr>
                    <tr>
                        <td>Si</td>
                        <td>silicio</td>
                    </tr>
                    <tr>
                        <td>SLOFEC</td>
                        <td>corriente de Foucault de baja frecuencia saturada</td>
                    </tr>
                    <tr>
                        <td>SO<sub>2</sub></td>
                        <td>dióxido de azufre</td>
                    </tr>
                    <tr>
                        <td>SOHIC</td>
                        <td>agrietamiento inducido por hidrógeno orientado por esfuerzos</td>
                    </tr>
                    <tr>
                        <td>SRB</td>
                        <td>bacterias reductoras de sulfato</td>
                    </tr>
                    <tr>
                        <td>SRC</td>
                        <td>agrietamiento por relajación de esfuerzos</td>
                    </tr>
                    <tr>
                        <td>SRU</td>
                        <td>unidad de recuperación de azufre</td>
                    </tr>
                    <tr>
                        <td>SS</td>
                        <td>acero inoxidable</td>
                    </tr>
                    <tr>
                        <td>SSC</td>
                        <td>agrietamiento por sulfuros bajo tensión</td>
                    </tr>
                    <tr>
                        <td>SW</td>
                        <td>agua agria</td>
                    </tr>
                    <tr>
                        <td>SWS</td>
                        <td>despojador de agua agria</td>
                    </tr>
                    <tr>
                        <td>SWUT</td>
                        <td>prueba ultrasónica de onda cortante</td>
                    </tr>
                    <tr>
                        <td>TAN</td>
                        <td>número de acidez total</td>
                    </tr>
                    <tr>
                        <td>Ti</td>
                        <td>titano</td>
                    </tr>
                    <tr>
                        <td>TOFD</td>
                        <td>difracción de tiempo de vuelo</td>
                    </tr>
                    <tr>
                        <td>UT</td>
                        <td>prueba ultrasónica</td>
                    </tr>
                    <tr>
                        <td>UTS</td>
                        <td>resistencia máxima a la tracción</td>
                    </tr>
                    <tr>
                        <td>V</td>
                        <td>vanadio</td>
                    </tr>
                    <tr>
                        <td>VT</td>
                        <td>inspección visual (prueba visual)</td>
                    </tr>
                    <tr>
                        <td>WFMT</td>
                        <td>prueba de partículas magnéticas fluorescentes húmedas</td>
                    </tr>
                    <tr>
                        <td>Zn</td>
                        <td>zinc</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});