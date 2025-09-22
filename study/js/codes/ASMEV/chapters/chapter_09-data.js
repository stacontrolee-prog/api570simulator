// Registrar el código ASME BPVC.V-2023 si no existe
if (!getCode('ASMEV')) {
    console.error('El código ASME BPVC.V-2023 no está registrado. Registrándolo ahora...');
    registerCode('ASMEV', {
        title: "ASME Boiler and Pressure Vessel Code Section V - Nondestructive Examination",
        titleEs: "Código de Calderas y Recipientes a Presión ASME Sección V - Examen No Destructor"
    });
}

// Registrar el capítulo 9
registerChapter('ASMEV', {
    id: 9,
    title: "Visual Examination",
    titleEs: "Examen Visual",
    content: `<h3>ARTICLE 9 VISUAL EXAMINATION</h3>
    <div class="subsection">
        <h4>T-910 SCOPE</h4>
        <p>(a) This Article contains methods and requirements for visual examination applicable when specified by a referencing Code Section. Specific visual examination procedures required for every type of examination are not included in this Article, because there are many applications where visual examinations are required. Some examples of these applications include nondestructive examinations, leak testing, in-service examinations and fabrication procedures.</p>
        <p>(b) The requirements of Article 1, General Requirements, apply when visual examination, in accordance with Article 9, is required by a referencing Code Section.</p>
        <p>(c) Definitions of terms for visual examination appear in Article 1, Mandatory Appendix I, I-121.6, VT — Visual Examination.</p>
    </div>
    <div class="subsection">
        <h4>T-920 GENERAL</h4>
        <div class="subsection">
            <h4>T-921 WRITTEN PROCEDURE REQUIREMENTS</h4>
            <div class="subsection">
                <h4>T-921.1 Requirements</h4>
                <p>Visual examinations shall be performed in accordance with a written procedure, which shall, as a minimum, contain the requirements listed in Table T-921. The written procedure shall establish a single value, or range of values, for each requirement.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-921.png" class="figure-image">
                    <p class="figure-caption">Table T-921 Requirements of a Visual Examination Procedure</p>
                </div>
            </div>
            <div class="subsection">
                <h4>T-921.2 Procedure Qualification</h4>
                <p>When procedure qualification is specified by the referencing Code Section, a change of a requirement in Table T-921 identified as an essential variable shall require requalification of the written procedure by demonstration. A change of a requirement identified as a nonessential variable does not require requalification of the written procedure. All changes of essential or nonessential variables from those specified within the written procedure shall require revision of, or an addendum to, the written procedure.</p>
            </div>
            <div class="subsection">
                <h4>T-921.3 Demonstration</h4>
                <p>The procedure shall contain or reference a report of what was used to demonstrate that the examination procedure was adequate. In general, a fine line 1/32 in. (0.8 mm) or less in width, an artificial imperfection or a simulated condition, located on the surface or a similar surface to that to be examined, may be considered as a method for procedure demonstration. The condition or artificial imperfection should be in the least discernable location on the area surface to be examined to validate the procedure.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-922 PERSONNEL REQUIREMENTS</h4>
            <p>The user of this Article shall be responsible for assigning qualified personnel to perform visual examinations to the requirements of this Article. At the option of the organization, he may maintain one certification for each product, or several separate signed records based on the area or type of work, or both combined. Where impractical to use specialized visual examination personnel, knowledgeable and trained personnel, having limited qualifications, may be used to perform specific examinations, and to sign the report forms. Personnel performing examinations shall be qualified in accordance with requirements of the referencing Code Section.</p>
        </div>
        <div class="subsection">
            <h4>T-923 PHYSICAL REQUIREMENTS</h4>
            <p>Personnel shall have an annual vision test to assure natural or corrected near distance acuity such that they are capable of reading standard J-1 letters on standard Jaeger test type charts for near vision. Equivalent near vision tests are acceptable.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-930 EQUIPMENT</h4>
        <p>Equipment used for visual examination techniques, for example, direct, remote, or translucent, shall have the capabilities as specified in the procedure. Capabilities include, but are not limited to viewing, magnifying, identifying, measuring, and/or recording observations in accordance with requirements of the referencing Code Section.</p>
    </div>
    <div class="subsection">
        <h4>T-950 TECHNIQUE</h4>
        <div class="subsection">
            <h4>T-951 APPLICATIONS</h4>
            <p>Visual examination is generally used to determine such things as the surface condition of the part, alignment of mating surfaces, shape, or evidence of leaking. In addition, visual examination is used to determine a composite material's (translucent laminate) subsurface conditions.</p>
        </div>
        <div class="subsection">
            <h4>T-952 DIRECT VISUAL EXAMINATION</h4>
            <p>Direct visual examination may usually be made when access is sufficient to place the eye within 24 in. (600 mm) of the surface to be examined and at an angle not less than 30 deg to the surface to be examined. Mirrors may be used to improve the angle of vision, and aids such as a magnifying lens may be used to assist examinations. Illumination (natural or supplemental white light) of the examination surface is required for the specific part, component, vessel, or section thereof being examined. The minimum light intensity shall be 100 fc (1 076 lx). The light intensity, natural or supplemental white light source, shall be measured with a white light meter prior to the examination or a verified light source shall be used. Verification of light sources is required to be demonstrated only one time, documented, and maintained on file.</p>
        </div>
        <div class="subsection">
            <h4>T-953 REMOTE VISUAL EXAMINATION</h4>
            <p>In some cases, remote visual examination may have to be substituted for direct examination. Remote visual examination may use visual aids such as mirrors, telescopes, borescopes, fiber optics, cameras, or other suitable instruments. Such systems shall be demonstrated to have a resolution capability and lighting intensity at least equivalent to that obtainable by direct visual observation (e.g., T-921.3; Section XI, Division 1, Table IWA-2211-1; ISO 12233; USAF 1951 Resolution Target).</p>
        </div>
        <div class="subsection">
            <h4>T-954 TRANSLUCENT VISUAL EXAMINATION</h4>
            <p>Translucent visual examination is a supplement of direct visual examination. The method of translucent visual examination uses the aid of artificial lighting, which can be contained in an illuminator that produces directional lighting. The illuminator shall provide light of an intensity that will illuminate and diffuse the light evenly through the area or region under examination. The ambient lighting must be so arranged that there are no surface glares or reflections from the surface under examination and shall be less than the light applied through the area or region under examination. The artificial light source shall have sufficient intensity to permit "candling" any translucent laminate thickness variations.</p>
        </div>
        <div class="subsection">
            <h4>T-955 LIGHT METER CALIBRATION</h4>
            <p>Light meters shall be calibrated at least once a year or whenever they have been repaired. If meters have not been in use for 1 yr or more, they shall be calibrated before they are used.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-980 EVALUATION</h4>
        <p>(a) All examinations shall be evaluated in terms of the acceptance standards of the referencing Code Section.</p>
        <p>(b) An examination checklist shall be used to plan visual examination and to verify that the required visual observations were performed. This checklist establishes minimum examination requirements and does not indicate the maximum examination which the Manufacturer may perform in process.</p>
    </div>
    <div class="subsection">
        <h4>T-990 DOCUMENTATION</h4>
        <div class="subsection">
            <h4>T-991 REPORT OF EXAMINATION</h4>
            <p>(a) A written report of the examination shall contain the following information:</p>
            <p>(1) the date of the examination</p>
            <p>(2) procedure identification and revision used</p>
            <p>(3) technique used</p>
            <p>(4) results of the examination</p>
            <p>(5) examination personnel identity, and, when required by the referencing Code Section, qualification level</p>
            <p>(6) identification of the part or component examined</p>
            <p>(b) Even though dimensions, etc., were recorded in the process of visual examination to aid in the evaluation, there need not be documentation of each viewing or each dimensional check. Documentation shall include all observation and dimensional checks specified by the referencing Code Section.</p>
        </div>
        <div class="subsection">
            <h4>T-993 RECORD MAINTENANCE</h4>
            <p>Records shall be maintained as required by the referencing Code Section.</p>
        </div>
    </div>
    `,
    contentEs: `<h3>ARTÍCULO 9 EXAMEN VISUAL</h3>
    <div class="subsection">
        <h4>T-910 ALCANCE</h4>
        <p>(a) Este Artículo contiene métodos y requisitos para el examen visual aplicables cuando sea especificado por una Sección de Código de referencia. Los procedimientos específicos de examen visual requeridos para cada tipo de examen no están incluidos en este Artículo, porque hay muchas aplicaciones donde se requieren exámenes visuales. Algunos ejemplos de estas aplicaciones incluyen exámenes no destructivos, pruebas de fugas, exámenes en servicio y procedimientos de fabricación.</p>
        <p>(b) Los requisitos del Artículo 1, Requisitos Generales, se aplican cuando el examen visual, de acuerdo con el Artículo 9, es requerido por una Sección de Código de referencia.</p>
        <p>(c) Las definiciones de los términos para el examen visual aparecen en el Artículo 1, Apéndice Obligatorio I, I-121.6, VT — Examen Visual.</p>
    </div>
    <div class="subsection">
        <h4>T-920 GENERAL</h4>
        <div class="subsection">
            <h4>T-921 REQUISITOS DE PROCEDIMIENTO ESCRITO</h4>
            <div class="subsection">
                <h4>T-921.1 Requisitos</h4>
                <p>Los exámenes visuales se realizarán de acuerdo con un procedimiento escrito que contendrá como mínimo los requisitos enumerados en la Tabla T-921. El procedimiento escrito establecerá un valor único o un rango de valores para cada requisito.</p>
                
                <div class="figure-container">
                    <img src="images/asmev_figure_t-921.png" class="figure-image">
                    <p class="figure-caption">Tabla T-921 Requisitos de un Procedimiento de Examen Visual</p>
                </div>
            </div>
            <div class="subsection">
                <h4>T-921.2 Calificación del Procedimiento</h4>
                <p>Cuando la calificación del procedimiento sea especificada por la Sección de Código de referencia, un cambio en un requisito de la Tabla T-921 identificado como una variable esencial requerirá la recalificación del procedimiento escrito mediante demostración. Un cambio en un requisito identificado como una variable no esencial no requerirá la recalificación del procedimiento escrito. Todos los cambios de variables esenciales o no esenciales con respecto a los especificados en el procedimiento escrito requerirán una revisión o un addendo al procedimiento escrito.</p>
            </div>
            <div class="subsection">
                <h4>T-921.3 Demostración</h4>
                <p>El procedimiento deberá contener o hacer referencia a un informe de lo que se utilizó para demostrar que el procedimiento de examen era adecuado. En general, una línea fina de 1/32 pulg. (0.8 mm) o menos de ancho, una imperfección artificial o una condición simulada, ubicada en la superficie o una superficie similar a la que se va a examinar, puede considerarse como un método para la demostración del procedimiento. La condición o imperfección artificial debe estar en la ubicación menos discernible en la superficie del área a examinar para validar el procedimiento.</p>
            </div>
        </div>
        <div class="subsection">
            <h4>T-922 REQUISITOS DE PERSONAL</h4>
            <p>El usuario de este Artículo será responsable de asignar personal calificado para realizar exámenes visuales de acuerdo con los requisitos de este Artículo. A opción de la organización, puede mantener una certificación para cada producto, o varios registros firmados separados basados en el área o tipo de trabajo, o ambos combinados. Cuando sea impracticable usar personal especializado en examen visual, se puede usar personal conocedor y capacitado, con calificaciones limitadas, para realizar exámenes específicos y firmar los formularios de informe. El personal que realice los exámenes estará calificado de acuerdo con los requisitos de la Sección de Código de referencia.</p>
        </div>
        <div class="subsection">
            <h4>T-923 REQUISITOS FÍSICOS</h4>
            <p>El personal deberá someterse a una prueba anual de la vista para asegurar una agudeza visual natural o corregida a corta distancia tal que sean capaces de leer las letras estándar J-1 en las tablas de tipo de prueba estándar Jaeger para visión cercana. Se aceptan pruebas equivalentes de visión cercana.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-930 EQUIPO</h4>
        <p>El equipo utilizado para las técnicas de examen visual, por ejemplo, directo, remoto o translúcido, deberá tener las capacidades especificadas en el procedimiento. Las capacidades incluyen, pero no se limitan a, visualización, amplificación, identificación, medición y/o registro de observaciones de acuerdo con los requisitos de la Sección de Código de referencia.</p>
    </div>
    <div class="subsection">
        <h4>T-950 TÉCNICA</h4>
        <div class="subsection">
            <h4>T-951 APLICACIONES</h4>
            <p>El examen visual se utiliza generalmente para determinar cosas como el estado superficial de la pieza, la alineación de las superficies de acoplamiento, la forma o evidencia de fugas. Además, el examen visual se utiliza para determinar las condiciones subsuperficiales de un material compuesto (laminado translúcido).</p>
        </div>
        <div class="subsection">
            <h4>T-952 EXAMEN VISUAL DIRECTO</h4>
            <p>El examen visual directo generalmente puede realizarse cuando el acceso es suficiente para colocar el ojo dentro de las 24 pulg. (600 mm) de la superficie a examinar y en un ángulo no menor de 30 grados con respecto a la superficie a examinar. Pueden usarse espejos para mejorar el ángulo de visión, y ayudas como una lupa pueden usarse para asistir los exámenes. Se requiere iluminación (natural o suplementaria de luz blanca) de la superficie de examen para la pieza específica, componente, recipiente o sección del mismo que se está examinando. La intensidad mínima de la luz será de 100 fc (1 076 lx). La intensidad de la luz, fuente de luz blanca natural o suplementaria, se medirá con un medidor de luz blanca antes del examen o se utilizará una fuente de luz verificada. La verificación de las fuentes de luz solo debe demostrarse una vez, documentarse y mantenerse en archivo.</p>
        </div>
        <div class="subsection">
            <h4>T-953 EXAMEN VISUAL REMOTO</h4>
            <p>En algunos casos, el examen visual remoto puede tener que sustituir al examen directo. El examen visual remoto puede utilizar ayudas visuales como espejos, telescopios, boroscopios, fibra óptica, cámaras u otros instrumentos adecuados. Dichos sistemas deberán demostrar que tienen una capacidad de resolución e intensidad de iluminación al menos equivalente a la obtenible por observación visual directa (p. ej., T-921.3; Sección XI, División 1, Tabla IWA-2211-1; ISO 12233; Objetivo de Resolución USAF 1951).</p>
        </div>
        <div class="subsection">
            <h4>T-954 EXAMEN VISUAL TRANSLÚCIDO</h4>
            <p>El examen visual translúcido es un complemento del examen visual directo. El método de examen visual translúcido utiliza la ayuda de iluminación artificial, que puede estar contenida en un iluminador que produce iluminación direccional. El iluminador deberá proporcionar luz de una intensidad que iluminará y difundirá la luz uniformemente a través del área o región bajo examen. La iluminación ambiental debe estar dispuesta de tal manera que no haya deslumbramientos superficiales o reflejos de la superficie bajo examen y será menor que la luz aplicada a través del área o región bajo examen. La fuente de luz artificial deberá tener suficiente intensidad para permitir "visualizar por transparencia" cualquier variación en el espesor del laminado translúcido.</p>
            </div>
        <div class="subsection">
            <h4>T-955 CALIBRACIÓN DEL MEDIDOR DE LUZ</h4>
            <p>Los medidores de luz deberán calibrarse al menos una vez al año o siempre que hayan sido reparados. Si los medidores no han sido utilizados durante 1 año o más, deberán calibrarse antes de ser utilizados.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>T-980 EVALUACIÓN</h4>
        <p>(a) Todos los exámenes deberán evaluarse en términos de los estándares de aceptación de la Sección de Código de referencia.</p>
        <p>(b) Se utilizará una lista de verificación de examen para planificar el examen visual y verificar que se realizaron las observaciones visuales requeridas. Esta lista de verificación establece los requisitos mínimos de examen y no indica el examen máximo que el Fabricante puede realizar en el proceso.</p>
    </div>
    <div class="subsection">
        <h4>T-990 DOCUMENTACIÓN</h4>
        <div class="subsection">
            <h4>T-991 INFORME DEL EXAMEN</h4>
            <p>(a) Un informe escrito del examen contendrá la siguiente información:</p>
            <p>(1) la fecha del examen</p>
            <p>(2) identificación del procedimiento y revisión utilizada</p>
            <p>(3) técnica utilizada</p>
            <p>(4) resultados del examen</p>
            <p>(5) identidad del personal de examen, y cuando sea requerido por la Sección de Código de referencia, nivel de calificación</p>
            <p>(6) identificación de la pieza o componente examinado</p>
            <p>(b) Aunque las dimensiones, etc., se registraron en el proceso de examen visual para ayudar en la evaluación, no es necesario documentar cada visualización o cada verificación dimensional. La documentación deberá incluir todas las observaciones y verificaciones dimensionales especificadas por la Sección de Código de referencia.</p>
        </div>
        <div class="subsection">
            <h4>T-993 MANTENIMIENTO DE REGISTROS</h4>
            <p>Los registros se mantendrán según lo requerido por la Sección de Código de referencia.</p>
        </div>
    </div>
    `
});