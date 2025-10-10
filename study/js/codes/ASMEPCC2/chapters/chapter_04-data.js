// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos a Presión y Tuberías"
    });
}

// Registrar el capítulo 209
registerChapter('ASMEPCC2', {
    id: 209,
    title: "Alternatives to Postweld Heat Treatment",
    titleEs: "Alternativas al Tratamiento Térmico Post-Soldadura",
    content: `<h3>209 Alternatives to Postweld Heat Treatment</h3>
    <div class="subsection">
        <h4>209-1 DESCRIPTION</h4>
        <div class="subsection">
            <h4>209-1.1 General Considerations</h4>
            <p>This Article addresses alternatives to postweld heat treatment for repair welds. Under certain service conditions, PWHT of a repair weld in accordance with the construction code can be inadvisable or impractical. An example of such a condition would be a penetration or embedment surrounded by reinforced concrete or liquid media that could be damaged or create an unsafe condition by application of PWHT temperatures. In addition, inspection of pressure vessels, tanks, and piping which have been in service can reveal defects or damage that require weld repair but not redesign of the item containing the defect. The original construction code or owner can require postweld heat treatment (PWHT).</p>
        </div>
        <div class="subsection">
            <h4>209-1.2 Factors Affecting Selection</h4>
            <p>(a) Postweld heat treatment is applied to ferritic welds and welded components to reduce high levels of residual stress, provide tempering to reduce hardness, and to diffuse hydrogen.</p>
            <p>(b) Time and temperatures for PWHT are specified with respect to individual types of material and are selected to be performed below the lower (critical) transformation temperature of the material.</p>
            <p>(c) Alternatives to postweld heat treatment can involve application of elevated preheat and/or implementation of specific welding techniques, bead sequencing, and increased control of the welding process.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>209-2 LIMITATIONS</h4>
        <div class="subsection">
            <h4>209-2.1 Post-Construction Code</h4>
            <p>Part 1 of this Standard, "Scope, Organization, and Intent," contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        </div>
        <div class="subsection">
            <h4>209-2.2 Methods</h4>
            <p>Only methods that are recognized in an applicable construction code or post-construction code, qualified, or as justified through performance of a risk assessment evaluation, shall be used.</p>
        </div>
        <div class="subsection">
            <h4>209-2.3 Suitability Tests</h4>
            <p>Tests to demonstrate suitability of the repair procedure may be needed if service conditions are subject to hydrogen embrittlement or at temperatures in the creep range or if the alternative is being considered for "on-stream" repairs or "hot tapping" on piping systems. Testing may be in accordance with owner criteria, the construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>209-2.4 Resistance to Service Conditions</h4>
            <p>If resistance to hydrogen or sulfide or stress cracking is a service requirement, test evidence shall be developed appropriate to the risk involved to show that a maximum hardness in weld metal and heat-affected base metal is not exceeded when qualifying a specific Welding Procedure Specification (WPS). Maximum hardness shall be as required by the owner, the construction code or post-construction code.</p>
        </div>
        <div class="subsection">
            <h4>209-2.5 Residual Stress Reduction</h4>
            <p>If reduction of residual stresses in weldments is required for successful operation in services subject to stress corrosion cracking (e.g., where amines, caustics, or carbonates are involved), then alternatives to postweld heat treatment shall be evaluated and determined to be acceptable for the intended service prior to use.</p>
        </div>
        <div class="subsection">
            <h4>209-2.6 Altering Material Properties</h4>
            <p>Some steels are susceptible to metallurgical change such that loss of notch toughness can occur in the weld heat-affected zone and in the base metal. Weld metal can also experience a loss of toughness and/or strength when subjected to PWHT. In other steels, intergranular cracking (often called reheat or stress relief cracking) can occur in the weld heat-affected zone during PWHT while excessive postweld heat treatment (temperature and hold times) can also cause loss of strength in the weld and/or base metal.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>209-3 DESIGN</h4>
        <div class="subsection">
            <h4>209-3.1 Dissimilar Metal Welds</h4>
            <p>Welding involving dissimilar materials shall be separately evaluated unless specifically addressed by the applicable post-construction code. Guidance in this area is provided in Method 5, NBIC, of ANSI/NB-23.</p>
        </div>
        <div class="subsection">
            <h4>209-3.2 Procedures</h4>
            <p>Requirements for implementing alternatives to postweld heat treatment should be outlined in specific documented instructions that are accompanied by a qualified Welding Procedure Specification.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>209-4 FABRICATION</h4>
        <div class="subsection">
            <h4>209-4.1 Application of Elevated Preheat</h4>
            <p>Many codes of construction or post-construction codes permit use of elevated preheat as an alternative to performing postweld heat treatment. Examples of alternatives can be found in API 510; ASME BPVC, Section I (PW-39); ASME BPVC, Section VIII; ASME B31.1 (Table 132); and ANSI/NB-23. Criteria are expressed as a function of base metal specification, type, grade, and thickness. Table 209-4.1-1 lists a variety of PWHT methods and alternates from potential applicable codes. The table is not all inclusive and should be used as a guide for selecting an alternative to postweld heat treat for work that is to be conducted with a specific construction code or post construction code.</p>
            
            <div class="table-container">
                <table class="api-table">
                    <caption>Table 209-4.1-1 Summary of Postweld Heat Treatment Requirements and Potential Alternatives</caption>
                    <thead>
                        <tr>
                            <th>Code/Standard</th>
                            <th>Section</th>
                            <th>PWHT Requirement</th>
                            <th>Alternative Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>API 510</td>
                            <td>6.5.3</td>
                            <td>Required for certain materials and thicknesses</td>
                            <td>Elevated preheat per API 510</td>
                        </tr>
                        <tr>
                            <td>ASME BPVC, Section I</td>
                            <td>PW-39</td>
                            <td>Required for specific materials and thicknesses</td>
                            <td>Elevated preheat with specified limits</td>
                        </tr>
                        <tr>
                            <td>ASME BPVC, Section VIII</td>
                            <td>UCS-56</td>
                            <td>Required for carbon and low alloy steels</td>
                            <td>Elevated preheat per code requirements</td>
                        </tr>
                        <tr>
                            <td>ASME B31.1</td>
                            <td>Table 132</td>
                            <td>Required for specific materials and thicknesses</td>
                            <td>Elevated preheat as specified</td>
                        </tr>
                        <tr>
                            <td>ANSI/NB-23</td>
                            <td>Part 3</td>
                            <td>Required for certain materials and thicknesses</td>
                            <td>Elevated preheat per NBIC requirements</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="subsection">
            <h4>209-4.2 Alternative Welding Methods</h4>
            <div class="subsection">
                <h4>209-4.2.1 Temper Bead Welding</h4>
                <p>Tempering of weld deposits may be accomplished by implementing special weld sequences and techniques. Controlled deposition techniques such as temper bead welding, for example, are offered in many construction or post-construction codes as an alternative to postweld heat treatment.</p>
            </div>
            <div class="subsection">
                <h4>209-4.2.2 Satisfying Properties</h4>
                <p>The method used shall produce weldments that satisfy mechanical and corrosion properties in accordance with the applicable construction code or post-construction code.</p>
            </div>
            <div class="subsection">
                <h4>209-4.2.3 Absence of Code Rules</h4>
                <p>When no construction code or post-construction code is specified, the rules in API 510, 7.2.3; ASME BPVC, Section IX, QW-290; or ANSI/NB-23, Part 3, may be used as rules for controlled deposition welding techniques.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>209-4.3 Requiring Additional Methods</h4>
            <p>Application of alternative methods may require that reliable preheat maintenance techniques, low hydrogen welding consumables, and optimum materials storage practices be implemented.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>209-5 EXAMINATION</h4>
        <p>Examination shall be in accordance with the applicable construction code or post-construction code.</p>
    </div>
    <div class="subsection">
        <h4>209-6 TESTING</h4>
        <p>Testing shall be in accordance with the applicable construction code or post-construction code.</p>
    </div>
    <div class="subsection">
        <h4>209-7 REFERENCES</h4>
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        <ul>
            <li>ANSI/NB-23-2007, National Board Inspection Code<br>
            Publisher: National Board of Boiler and Pressure Vessel Inspectors (NBBI), 1055 Crupper Avenue, Columbus, OH 43229 (www.nationalboard.org)</li>
            <li>API 510, Pressure Vessel Inspection Code: Maintenance Inspection, Rating, Repair, and Alteration; Revision 06, 2006<br>
            Publisher: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section I - Rules for Construction of Power Boilers</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section III, Rules for Construction of Nuclear Facility Components; Subsections NCA, NB, NC, ND, NE, NF, NG, and NH</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section VIII, Rules for Construction of Pressure Vessels; Divisions 1, 2, and 3</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section IX, Welding and Brazing Qualifications</li>
            <li>ASME Boiler and Pressure Vessel Code, 2007 Edition, Section XI, Rules for Inservice Inspection of Nuclear Power Plant Components</li>
            <li>ASME B31.1-2007, Power Piping</li>
            <li>ASME B31.3-2006, Process Piping<br>
            Publisher: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</li>
            <li>AWS D1.1/D1.1M-2006, Structural Welding Code - Steel</li>
            <li>AWS D10.8-1996, Recommended Practices for Welding Chromium-Molybdenum Steel Piping and Tubing</li>
            <li>AWS D10.10-1999, Recommended Practices for Local Heating of Welds in Piping and Tubing<br>
            Publisher: American Welding Society (AWS), 8669 NW 36 Street, No. 130, Miami, FL 33166 (www.aws.org)</li>
            <li>Recommended Practices for Local Heating of Welds in Pressure Vessels, WRC Bulletin 452, June 2000<br>
            Publisher: Welding Research Council (WRC), P.O. Box 201547, Shaker Heights, OH 44120 (www.forengineers.org/welding-research-council)</li>
        </ul>
    </div>
    `,
    contentEs: `<h3>209 Alternativas al Tratamiento Térmico Post-Soldadura</h3>
    <div class="subsection">
        <h4>209-1 DESCRIPCIÓN</h4>
        <div class="subsection">
            <h4>209-1.1 Consideraciones Generales</h4>
            <p>Este Artículo aborda alternativas al tratamiento térmico post-soldadura para soldaduras de reparación. Bajo ciertas condiciones de servicio, el PWHT de una soldadura de reparación de acuerdo con el código de construcción puede ser inadvisable o impracticable. Un ejemplo de tal condición sería una penetración o empotramiento rodeado de hormigón reforzado o medios líquidos que podrían dañarse o crear una condición insegura por la aplicación de temperaturas de PWHT. Además, la inspección de recipientes a presión, tanques y tuberías que han estado en servicio puede revelar defectos o daños que requieren reparación por soldadura pero no el rediseño del elemento que contiene el defecto. El código de construcción original o el propietario pueden requerir el tratamiento térmico post-soldadura (PWHT).</p>
        </div>
        <div class="subsection">
            <h4>209-1.2 Factores que Afectan la Selección</h4>
            <p>(a) El tratamiento térmico post-soldadura se aplica a soldaduras ferríticas y componentes soldados para reducir altos niveles de esfuerzo residual, proporcionar temple para reducir la dureza y difundir el hidrógeno.</p>
            <p>(b) El tiempo y las temperaturas para el PWHT se especifican con respecto a tipos individuales de material y se seleccionan para realizarse por debajo de la temperatura inferior (crítica) de transformación del material.</p>
            <p>(c) Las alternativas al tratamiento térmico post-soldadura pueden implicar la aplicación de precalentamiento elevado y/o la implementación de técnicas específicas de soldadura, secuencia de cordones y mayor control del proceso de soldadura.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>209-2 LIMITACIONES</h4>
        <div class="subsection">
            <h4>209-2.1 Código Post-Construcción</h4>
            <p>La Parte 1 de este Estándar, "Alcance, Organización e Intención", contiene requisitos y limitaciones adicionales. Este Artículo deberá utilizarse en conjunto con la Parte 1.</p>
        </div>
        <div class="subsection">
            <h4>209-2.2 Métodos</h4>
            <p>Solo deberán utilizarse métodos que estén reconocidos en un código de construcción aplicable o código post-construcción, calificados, o justificados mediante la realización de una evaluación de riesgo.</p>
        </div>
        <div class="subsection">
            <h4>209-2.3 Pruebas de Adecuación</h4>
            <p>Pueden ser necesarias pruebas para demostrar la adecuación del procedimiento de reparación si las condiciones de servicio están sujetas a fragilización por hidrógeno o a temperaturas en el rango de creep o si la alternativa se está considerando para reparaciones "en línea" o "hot tapping" en sistemas de tuberías. Las pruebas pueden realizarse de acuerdo con los criterios del propietario, el código de construcción o el código post-construcción.</p>
        </div>
        <div class="subsection">
            <h4>209-2.4 Resistencia a las Condiciones de Servicio</h4>
            <p>Si la resistencia al hidrógeno, sulfuro o agrietamiento por esfuerzo es un requisito de servicio, deberá desarrollarse evidencia de prueba adecuada al riesgo involucrado para demostrar que no se excede una dureza máxima en el metal de soldadura y el metal base afectado por el calor al calificar una Especificación de Procedimiento de Soldadura (WPS) específica. La dureza máxima deberá ser la requerida por el propietario, el código de construcción o el código post-construcción.</p>
        </div>
        <div class="subsection">
            <h4>209-2.5 Reducción de Esfuerzos Residuales</h4>
            <p>Si se requiere la reducción de esfuerzos residuales en soldaduras para una operación exitosa en servicios sujetos a corrosión bajo tensión (por ejemplo, donde están involucradas aminas, cáusticos o carbonatos), entonces las alternativas al tratamiento térmico post-soldadura deberán evaluarse y determinarse como aceptables para el servicio previsto antes de su uso.</p>
        </div>
        <div class="subsection">
            <h4>209-2.6 Alteración de Propiedades del Material</h4>
            <p>Algunos aceros son susceptibles a cambios metalúrgicos tales que puede ocurrir pérdida de tenacidad de entalla en la zona afectada por el calor de la soldadura y en el metal base. El metal de soldadura también puede experimentar una pérdida de tenacidad y/o resistencia cuando se somete a PWHT. En otros aceros, puede ocurrir agrietamiento intergranular (a menudo llamado agrietamiento por revenido o alivio de esfuerzos) en la zona afectada por el calor de la soldadura durante el PWHT, mientras que un tratamiento térmico post-soldadura excesivo (temperatura y tiempo de mantenimiento) también puede causar pérdida de resistencia en la soldadura y/o el metal base.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>209-3 DISEÑO</h4>
        <div class="subsection">
            <h4>209-3.1 Soldaduras de Metales Disímiles</h4>
            <p>La soldadura que involucra materiales disímiles deberá evaluarse por separado a menos que esté específicamente abordada por el código post-construcción aplicable. La orientación en esta área se proporciona en el Método 5, NBIC, de ANSI/NB-23.</p>
        </div>
        <div class="subsection">
            <h4>209-3.2 Procedimientos</h4>
            <p>Los requisitos para implementar alternativas al tratamiento térmico post-soldadura deberán delinearse en instrucciones documentadas específicas que estén acompañadas por una Especificación de Procedimiento de Soldadura calificada.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>209-4 FABRICACIÓN</h4>
        <div class="subsection">
            <h4>209-4.1 Aplicación de Precalentamiento Elevado</h4>
            <p>Muchos códigos de construcción o códigos post-construcción permiten el uso de precalentamiento elevado como alternativa a realizar el tratamiento térmico post-soldadura. Ejemplos de alternativas se pueden encontrar en API 510; ASME BPVC, Sección I (PW-39); ASME BPVC, Sección VIII; ASME B31.1 (Tabla 132); y ANSI/NB-23. Los criterios se expresan como una función de la especificación, tipo, grado y espesor del metal base. La Tabla 209-4.1-1 enumera una variedad de métodos de PWHT y alternativas de códigos potencialmente aplicables. La tabla no es exhaustiva y debe usarse como guía para seleccionar una alternativa al tratamiento térmico post-soldadura para trabajos que se realizarán con un código de construcción específico o código post-construcción.</p>
            
            <div class="table-container">
                <table class="api-table">
                    <caption>Tabla 209-4.1-1 Resumen de Requisitos de Tratamiento Térmico Post-Soldadura y Alternativas Potenciales</caption>
                    <thead>
                        <tr>
                            <th>Código/Estándar</th>
                            <th>Sección</th>
                            <th>Requisito de PWHT</th>
                            <th>Método Alternativo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>API 510</td>
                            <td>6.5.3</td>
                            <td>Requerido para ciertos materiales y espesores</td>
                            <td>Precalentamiento elevado según API 510</td>
                        </tr>
                        <tr>
                            <td>ASME BPVC, Sección I</td>
                            <td>PW-39</td>
                            <td>Requerido para materiales y espesores específicos</td>
                            <td>Precalentamiento elevado con límites especificados</td>
                        </tr>
                        <tr>
                            <td>ASME BPVC, Sección VIII</td>
                            <td>UCS-56</td>
                            <td>Requerido para aceros al carbono y baja aleación</td>
                            <td>Precalentamiento elevado según requisitos del código</td>
                        </tr>
                        <tr>
                            <td>ASME B31.1</td>
                            <td>Tabla 132</td>
                            <td>Requerido para materiales y espesores específicos</td>
                            <td>Precalentamiento elevado como se especifica</td>
                        </tr>
                        <tr>
                            <td>ANSI/NB-23</td>
                            <td>Parte 3</td>
                            <td>Requerido para ciertos materiales y espesores</td>
                            <td>Precalentamiento elevado según requisitos NBIC</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="subsection">
            <h4>209-4.2 Métodos de Soldadura Alternativos</h4>
            <div class="subsection">
                <h4>209-4.2.1 Soldadura de Cordón de Temple</h4>
                <p>El temple de los depósitos de soldadura puede lograrse mediante la implementación de secuencias y técnicas especiales de soldadura. Las técnicas de deposición controlada, como la soldadura de cordón de temple, por ejemplo, se ofrecen en muchos códigos de construcción o post-construcción como alternativa al tratamiento térmico post-soldadura.</p>
            </div>
            <div class="subsection">
                <h4>209-4.2.2 Satisfacción de Propiedades</h4>
                <p>El método utilizado deberá producir soldaduras que satisfagan las propiedades mecánicas y de corrosión de acuerdo con el código de construcción aplicable o el código post-construcción.</p>
            </div>
            <div class="subsection">
                <h4>209-4.2.3 Ausencia de Reglas del Código</h4>
                <p>Cuando no se especifica ningún código de construcción o código post-construcción, las reglas en API 510, 7.2.3; ASME BPVC, Sección IX, QW-290; o ANSI/NB-23, Parte 3, pueden usarse como reglas para técnicas de soldadura de deposición controlada.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>209-4.3 Requerir Métodos Adicionales</h4>
            <p>La aplicación de métodos alternativos puede requerir que se implementen técnicas confiables de mantenimiento de precalentamiento, consumibles de soldadura de bajo hidrógeno y prácticas óptimas de almacenamiento de materiales.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>209-5 EXAMEN</h4>
        <p>El examen deberá realizarse de acuerdo con el código de construcción aplicable o el código post-construcción.</p>
    </div>
    <div class="subsection">
        <h4>209-6 PRUEBAS</h4>
        <p>Las pruebas deberán realizarse de acuerdo con el código de construcción aplicable o el código post-construcción.</p>
    </div>
    <div class="subsection">
        <h4>209-7 REFERENCIAS</h4>
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        <ul>
            <li>ANSI/NB-23-2007, National Board Inspection Code<br>
            Editor: National Board of Boiler and Pressure Vessel Inspectors (NBBI), 1055 Crupper Avenue, Columbus, OH 43229 (www.nationalboard.org)</li>
            <li>API 510, Pressure Vessel Inspection Code: Maintenance Inspection, Rating, Repair, and Alteration; Revisión 06, 2006<br>
            Editor: American Petroleum Institute (API), 200 Massachusetts Avenue NW, Suite 1100, Washington, DC 20001-5571 (www.api.org)</li>
            <li>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección I - Reglas para la Construcción de Calderas de Potencia</li>
            <li>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección III, Reglas para la Construcción de Componentes de Instalaciones Nucleares; Subsecciones NCA, NB, NC, ND, NE, NF, NG y NH</li>
            <li>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección VIII, Reglas para la Construcción de Recipientes a Presión; Divisiones 1, 2 y 3</li>
            <li>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección IX, Calificaciones de Soldadura y Soldadura Fuerte</li>
            <li>ASME Boiler and Pressure Vessel Code, Edición 2007, Sección XI, Reglas para Inspección en Servicio de Componentes de Plantas de Energía Nuclear</li>
            <li>ASME B31.1-2007, Tuberías de Potencia</li>
            <li>ASME B31.3-2006, Tuberías de Proceso<br>
            Editor: The American Society of Mechanical Engineers (ASME), Two Park Avenue, New York, NY 10016-5990 (www.asme.org)</li>
            <li>AWS D1.1/D1.1M-2006, Código de Soldadura Estructural - Acero</li>
            <li>AWS D10.8-1996, Prácticas Recomendadas para la Soldadura de Tuberías y Tubos de Acero Cromo-Molibdeno</li>
            <li>AWS D10.10-1999, Prácticas Recomendadas para Calentamiento Local de Soldaduras en Tuberías y Tubos<br>
            Editor: American Welding Society (AWS), 8669 NW 36 Street, No. 130, Miami, FL 33166 (www.aws.org)</li>
            <li>Prácticas Recomendadas para Calentamiento Local de Soldaduras en Recipientes a Presión, WRC Bulletin 452, Junio 2000<br>
            Editor: Welding Research Council (WRC), P.O. Box 201547, Shaker Heights, OH 44120 (www.forengineers.org/welding-research-council)</li>
        </ul>
    </div>
    `
});