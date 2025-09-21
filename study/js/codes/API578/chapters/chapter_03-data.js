// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 3
registerChapter('API578', {
    id: 3,
    title: "Terms, Definitions, Acronyms, and Abbreviations",
    titleEs: "Términos, Definiciones, Acrónimos y Abreviaturas",
    content: `<h3>3 Terms, Definitions, Acronyms, and Abbreviations</h3>
    <div class="subsection">
        <h4>3.1 Terms and Definitions</h4>
        <p>For the purposes of this document, the following terms and definitions apply.</p>
        
        <div class="definition-item">
            <strong>3.1.1 alloy material</strong>
            <p>Any metallic material (including welding filler materials) that contains alloying elements, such as chromium, nickel, or molybdenum, that are intentionally added to enhance mechanical or physical properties and/or corrosion resistance.</p>
            <p class="note">NOTE 1 Alloys may be ferrous or nonferrous.</p>
            <p class="note">NOTE 2 Carbon steels are not considered alloys for the purposes of this document.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.2 asset</strong>
            <p>Equipment owned by a company that is either directly or indirectly involved with the manufacturing process.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.3 distributor</strong>
            <p>A warehousing supplier for manufacturers or suppliers of materials or components.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.4 extent of examination</strong>
            <p>The specified percentage of the number of items to be examined in an inspection lot.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.5 fabricator</strong>
            <p>An organization that utilizes the materials of construction affected by this recommended practice to create an asset.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.6 heat</strong>
            <p>A batch of metal made at the same time, able to be traced from its original constituents and manufacturing process.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.7 inspection lot</strong>
            <p>A group of items or materials of the same type from a common source from which a sample is to be drawn for examination.</p>
            <p class="note">NOTE An inspection lot does not include items from more than one heat.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.8 lot size</strong>
            <p>The number of items available in the inspection lot at the time a representative sample is selected.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.9 material certifications</strong>
            <p>certificates of compliance</p>
            <p>See "mill test report."</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.10 material manufacturer</strong>
            <p>An organization that performs or supervises and directly controls one or more of the operations that affect the chemical composition or mechanical properties of a metallic material.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.11 material nonconformance</strong>
            <p>A PMI result or other documented certification that does not conform with material specified.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.12 material supplier</strong>
            <p>An organization that supplies material furnished and certified by a material manufacturer, but does not perform any operation intended to alter the material properties required by the applicable material specification.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.13 material verification program</strong>
            <p>MVP</p>
            <p>A documented work practice that uses PMI and other testing and administrative methods to verify that the nominal composition of an asset, equipment item, an asset component, or weldment within the pressure envelope is consistent with the selected or specified construction materials.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.14 mill test report</strong>
            <p>MTR</p>
            <p>certified mill test report</p>
            <p>certified material test report</p>
            <p>mill test certificate</p>
            <p>inspection certificate</p>
            <p>certificate of test</p>
            <p>A quality assurance document used in the steelmaking industry that certifies a material's compliance with appropriate standards, including physical and chemical specifications, and applicable dimensions.</p>
            <p class="note">NOTE The MTR also includes a date of production and testing and may include notation about method of fabrication. A "mill test report" is also known by other names; MTR is the term used in this document.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.15 owner/operator</strong>
            <p>The organization that exercises control over the operation, engineering, inspection, repair, alteration, pressure testing, and rating of the assets.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.16 positive material identification</strong>
            <p>PMI</p>
            <p>A physical evaluation or test of a material performed to confirm that the material that has been or will be placed into service is consistent with what is specified by the owner/operator.</p>
            <p class="note">NOTE These evaluations or tests may provide either qualitative or quantitative information that is sufficient to verify the composition.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.17 pressure-containing components</strong>
            <p>Items that withhold the fluid contents of the equipment system and prevent the fluid from being released to the environment.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.18 quality assurance</strong>
            <p>QA</p>
            <p>All planned, systematic, and preventative actions specified to determine if materials, equipment, or services will meet specified requirements so that equipment will perform satisfactorily in service.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.19 quality control</strong>
            <p>QC</p>
            <p>Those physical activities that are conducted to check conformance with specifications in accordance with the quality assurance plan.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.20 random</strong>
            <p>Selection process by which choices are made in an arbitrary and unbiased manner.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.21 representative sample</strong>
            <p>One or more items selected at random from the inspection lot that are to be examined to determine acceptability of the inspection lot.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.22 retroactive positive material identification</strong>
            <p>retro-PMI</p>
            <p>The term commonly used for a PMI on existing material or equipment.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.23 standard reference materials</strong>
            <p>Sample materials for which laboratory chemical analysis data are available and are used in demonstrating the accuracy and reliability of a test instrument.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.24 weld button</strong>
            <p>button</p>
            <p>A sample of welding filler material deposited on relevant base metal to provide basis for PMI of the filler.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>3.2 Acronyms and Abbreviations</h4>
        <div class="table-container">
            <table class="api-table">
                <tbody>
                    <tr>
                        <td>LIBS</td>
                        <td>laser-induced breakdown spectroscopy</td>
                    </tr>
                    <tr>
                        <td>LOD</td>
                        <td>limit of detection</td>
                    </tr>
                    <tr>
                        <td>MTR</td>
                        <td>mill test report</td>
                    </tr>
                    <tr>
                        <td>MVP</td>
                        <td>material verification program</td>
                    </tr>
                    <tr>
                        <td>OES</td>
                        <td>optical emission spectrometry</td>
                    </tr>
                    <tr>
                        <td>PMI</td>
                        <td>positive material identification</td>
                    </tr>
                    <tr>
                        <td>QA</td>
                        <td>quality assurance</td>
                    </tr>
                    <tr>
                        <td>QC</td>
                        <td>quality control</td>
                    </tr>
                    <tr>
                        <td>XRF</td>
                        <td>X-ray fluorescence</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`,
    contentEs: `<h3>3 Términos, Definiciones, Acrónimos y Abreviaturas</h3>
    <div class="subsection">
        <h4>3.1 Términos y Definiciones</h4>
        <p>Para los propósitos de este documento, se aplican los siguientes términos y definiciones.</p>
        
        <div class="definition-item">
            <strong>3.1.1 material de aleación</strong>
            <p>Cualquier material metálico (incluyendo materiales de aporte para soldadura) que contiene elementos de aleación, como cromo, níquel o molibdeno, que se añaden intencionalmente para mejorar las propiedades mecánicas o físicas y/o la resistencia a la corrosión.</p>
            <p class="note">NOTA 1 Las aleaciones pueden ser ferrosas o no ferrosas.</p>
            <p class="note">NOTA 2 Los aceros al carbono no se consideran aleaciones para los propósitos de este documento.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.2 activo</strong>
            <p>Equipo propiedad de una empresa que está directa o indirectamente involucrado en el proceso de fabricación.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.3 distribuidor</strong>
            <p>Un proveedor de almacenamiento para fabricantes o proveedores de materiales o componentes.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.4 alcance del examen</strong>
            <p>El porcentaje especificado del número de artículos a examinar en un lote de inspección.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.5 fabricante</strong>
            <p>Una organización que utiliza los materiales de construcción afectados por esta práctica recomendada para crear un activo.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.6 colada</strong>
            <p>Un lote de metal fabricado al mismo tiempo, que puede ser rastreado desde sus componentes originales y proceso de fabricación.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.7 lote de inspección</strong>
            <p>Un grupo de artículos o materiales del mismo tipo de una fuente común del cual se extraerá una muestra para examen.</p>
            <p class="note">NOTA Un lote de inspección no incluye artículos de más de una colada.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.8 tamaño del lote</strong>
            <p>El número de artículos disponibles en el lote de inspección en el momento en que se selecciona una muestra representativa.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.9 certificaciones de materiales</strong>
            <p>certificados de conformidad</p>
            <p>Ver "informe de prueba de fábrica".</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.10 fabricante de materiales</strong>
            <p>Una organización que realiza o supervisa y controla directamente una o más de las operaciones que afectan la composición química o propiedades mecánicas de un material metálico.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.11 no conformidad del material</strong>
            <p>Un resultado de PMI u otra certificación documentada que no cumple con el material especificado.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.12 proveedor de materiales</strong>
            <p>Una organización que suministra material proporcionado y certificado por un fabricante de materiales, pero no realiza ninguna operación destinada a alterar las propiedades del material requeridas por la especificación de material aplicable.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.13 programa de verificación de materiales</strong>
            <p>MVP</p>
            <p>Una práctica de trabajo documentada que utiliza PMI y otros métodos de prueba y administrativos para verificar que la composición nominal de un activo, artículo de equipo, componente de activo o soldadura dentro del envolvente de presión es consistente con los materiales de construcción seleccionados o especificados.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.14 informe de prueba de fábrica</strong>
            <p>MTR</p>
            <p>informe de prueba de fábrica certificado</p>
            <p>informe de prueba de material certificado</p>
            <p>certificado de prueba de fábrica</p>
            <p>certificado de inspección</p>
            <p>certificado de prueba</p>
            <p>Un documento de aseguramiento de calidad utilizado en la industria siderúrgica que certifica el cumplimiento de un material con los estándares apropiados, incluyendo especificaciones físicas y químicas, y dimensiones aplicables.</p>
            <p class="note">NOTA El MTR también incluye una fecha de producción y prueba y puede incluir notación sobre el método de fabricación. Un "informe de prueba de fábrica" también se conoce por otros nombres; MTR es el término utilizado en este documento.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.15 propietario/operador</strong>
            <p>La organización que ejerce control sobre la operación, ingeniería, inspección, reparación, alteración, prueba de presión y clasificación de los activos.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.16 identificación positiva de materiales</strong>
            <p>PMI</p>
            <p>Una evaluación física o prueba de un material realizada para confirmar que el material que ha sido o será puesto en servicio es consistente con lo especificado por el propietario/operador.</p>
            <p class="note">NOTA Estas evaluaciones o pruebas pueden proporcionar información cualitativa o cuantitativa que sea suficiente para verificar la composición.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.17 componentes que contienen presión</strong>
            <p>Artículos que retienen los contenidos de fluido del sistema de equipo y evitan que el fluido sea liberado al ambiente.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.18 aseguramiento de calidad</strong>
            <p>QA</p>
            <p>Todas las acciones planificadas, sistemáticas y preventivas especificadas para determinar si los materiales, equipos o servicios cumplirán con los requisitos especificados para que el equipo funcione satisfactoriamente en servicio.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.19 control de calidad</strong>
            <p>QC</p>
            <p>Aquellas actividades físicas que se realizan para verificar la conformidad con las especificaciones de acuerdo con el plan de aseguramiento de calidad.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.20 aleatorio</strong>
            <p>Proceso de selección mediante el cual las elecciones se hacen de manera arbitraria e imparcial.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.21 muestra representativa</strong>
            <p>Uno o más artículos seleccionados aleatoriamente del lote de inspección que serán examinados para determinar la aceptabilidad del lote de inspección.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.22 identificación positiva de materiales retroactiva</strong>
            <p>retro-PMI</p>
            <p>El término comúnmente utilizado para un PMI en material o equipo existente.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.23 materiales de referencia estándar</strong>
            <p>Materiales de muestra para los cuales están disponibles datos de análisis químico de laboratorio y se utilizan para demostrar la precisión y fiabilidad de un instrumento de prueba.</p>
        </div>
        
        <div class="definition-item">
            <strong>3.1.24 botón de soldadura</strong>
            <p>botón</p>
            <p>Una muestra de material de aporte para soldadura depositada sobre el metal base relevante para proporcionar base para PMI del material de aporte.</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>3.2 Acrónimos y Abreviaturas</h4>
        <div class="table-container">
            <table class="api-table">
                <tbody>
                    <tr>
                        <td>LIBS</td>
                        <td>espectroscopia de emisión inducida por láser</td>
                    </tr>
                    <tr>
                        <td>LOD</td>
                        <td>límite de detección</td>
                    </tr>
                    <tr>
                        <td>MTR</td>
                        <td>informe de prueba de fábrica</td>
                    </tr>
                    <tr>
                        <td>MVP</td>
                        <td>programa de verificación de materiales</td>
                    </tr>
                    <tr>
                        <td>OES</td>
                        <td>espectrometría de emisión óptica</td>
                    </tr>
                    <tr>
                        <td>PMI</td>
                        <td>identificación positiva de materiales</td>
                    </tr>
                    <tr>
                        <td>QA</td>
                        <td>aseguramiento de calidad</td>
                    </tr>
                    <tr>
                        <td>QC</td>
                        <td>control de calidad</td>
                    </tr>
                    <tr>
                        <td>XRF</td>
                        <td>fluorescencia de rayos X</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
});