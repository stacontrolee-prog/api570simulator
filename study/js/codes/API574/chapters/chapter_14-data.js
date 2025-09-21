// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}
// Registrar el capítulo 14
registerChapter('API574', {
    id: 14,
    title: "Records and Reports",
    titleEs: "Registros e Informes",
    content: `<h3>14 Records and Reports</h3>
    <div class="subsection">
        <h4>14.1 General</h4>
        <p>The necessity of keeping complete records in a detailed and orderly manner is an important responsibility of the inspector as well as a requirement of many regulations (e.g. OSHA 29 CFR 1910.119). Accurate records allow an evaluation of service life on any piping, valve, or fitting. From such records, a comprehensive picture of the general condition of any piping system can be determined. When properly organized, such records form a permanent record from which corrosion rates, inspection intervals and probable replacement or repair intervals can be determined. A computer program (e.g. IDMS) can be used to assist in a more complete evaluation of recorded information and to determine the next inspection date.</p>
        <p>Inspection records should contain the following:</p>
        <ul>
            <li>original date of installation;</li>
            <li>specifications of the materials used;</li>
            <li>original thickness measurements (i.e. baseline measurements);</li>
            <li>locations and dates of all subsequent thickness measurements;</li>
            <li>calculated retirement thickness;</li>
            <li>repairs and replacements;</li>
            <li>temporary repairs;</li>
            <li>pertinent operational changes (i.e. change in service);</li>
            <li>Fitness-For-Service assessments;</li>
            <li>RBI assessments.</li>
        </ul>
        <p>These and other pertinent data should be arranged on suitable forms so that successive inspection records will furnish a chronological picture. Each inspection group should develop appropriate inspection forms.</p>
    </div>
    <div class="subsection">
        <h4>14.2 Records</h4>
        <div class="subsection">
            <h4>14.2.1 Sketches</h4>
            <p>Isometric or oblique drawings provide a means of documenting the size and orientation of piping lines, the location and types of fittings, valves, orifices, etc., and the locations of CMLs. Although original construction drawings can be used, normally separate sketches are made by, or for, the inspection department. Figure 34 is a typical isometric sketch for recording field data.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_34.png" class="figure-image">
                <p class="figure-caption">Figure 34—Typical Isometric Sketch</p>
            </div>
            
            <p>Sketches have the following functions:</p>
            <ul>
                <li>identify particular piping systems and circuits in terms of location, size, material specification, general process flow, and service conditions;</li>
                <li>show points to be opened for visual inspection and parts that require replacement or repair;</li>
                <li>serve as field data sheets on which can be recorded the locations of thickness measurements, corrosion findings, and sections requiring replacement; these data can be transferred to continuous records at a later date;</li>
                <li>assist at future inspections in determining locations that require examination;</li>
                <li>identification of temporary repairs (e.g. clamps, wraps).</li>
            </ul>
            <p>Sketches may also contain the following:</p>
            <ul>
                <li>pipe schedule;</li>
                <li>location of piping supports;</li>
                <li>location of SAI;</li>
                <li>P&ID number.</li>
            </ul>
            <p>Refer to 7.3.3 for additional guidance on isometric drawings and their content.</p>
        </div>
        <div class="subsection">
            <h4>14.2.2 Numbering Systems</h4>
            <p>Typically, a coding system is used to uniquely identify the process unit, the piping system, the circuit, and the CMLs.</p>
        </div>
        <div class="subsection">
            <h4>14.2.3 Thickness Data</h4>
            <p>A record of thickness data obtained during periodic or scheduled inspections provides a means of arriving at corrosion or erosion rates and expected material life. Some companies use computerized record systems (e.g. IDMS) for this purpose. The data can be shown on sketches or presented as tabulated information attached to the sketches. Figure 35 shows one method of tabulating thickness readings and other information.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_35.png" class="figure-image">
                <p class="figure-caption">Figure 35—Typical Tabulation of Thickness Data</p>
            </div>
        </div>
        <div class="subsection">
            <h4>14.2.4 Review of Records</h4>
            <p>Records of previous inspections and inspections conducted during the current operating period should be reviewed soon after the inspections are conducted to schedule the next inspection date. This review should provide lists of areas that are approaching retirement thickness, areas that have previously shown high corrosion rates, and areas in which current inspection has indicated a need for further investigation. From these lists, a work schedule should be prepared for additional on-stream inspection, if possible, and for inspections to be conducted during the next shutdown period. Such a schedule will assist in determining the number of inspectors to be assigned to the work.</p>
            <p>In addition, from the review of the records of previous inspections, a list should be made of all expected repairs and replacements. This list should be submitted to the maintenance department far enough in advance of the shutdown to permit any required material to be obtained or, if necessary, fabricated. This list will also assist the maintenance personnel in determining the number of personnel required during the shutdown period.</p>
        </div>
        <div class="subsection">
            <h4>14.2.5 Record Updates</h4>
            <p>Records should be updated following inspection activities within a reasonable amount of time affording the inspector enough time to properly gather, analyze, and record data. Many sites have internal requirements indicating a maximum duration between obtaining data and updating records. These requirements generally allow records to be updated within a few weeks of completing the inspection activities. Establishing a time frame for record updates helps ensure that data and information are accurately recorded and do not become lost and details forgotten.</p>
        </div>
        <div class="subsection">
            <h4>14.2.6 Audit of Records</h4>
            <p>Inspection records should be regularly audited against code requirements, the site's quality assurance inspection manual, and site procedures. The audit should assess whether the records meet those requirements and whether the records are of appropriate quality/accuracy. Regular audits provide a means to identify gaps and deficiencies in existing inspection programs and define corrective actions, such as focused training.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>14.3 Reports (Future Content)</h4>
        <p>This section is reserved for future content.</p>
    </div>
    `,
    contentEs: `<h3>14 Registros e Informes</h3>
    <div class="subsection">
        <h4>14.1 General</h4>
        <p>La necesidad de mantener registros completos de manera detallada y ordenada es una responsabilidad importante del inspector, así como un requisito de muchos reglamentos (por ejemplo, OSHA 29 CFR 1910.119). Los registros precisos permiten una evaluación de la vida útil de cualquier tubería, válvula o accesorio. A partir de dichos registros, puede determinarse una imagen integral del estado general de cualquier sistema de tubería. Cuando están debidamente organizados, dichos registros forman un registro permanente a partir del cual pueden determinarse las tasas de corrosión, los intervalos de inspección y los intervalos probables de reemplazo o reparación. Se puede utilizar un programa informático (por ejemplo, IDMS) para ayudar en una evaluación más completa de la información registrada y para determinar la próxima fecha de inspección.</p>
        <p>Los registros de inspección deben contener lo siguiente:</p>
        <ul>
            <li>fecha original de instalación;</li>
            <li>especificaciones de los materiales utilizados;</li>
            <li>mediciones de espesor originales (es decir, mediciones de referencia);</li>
            <li>ubicaciones y fechas de todas las mediciones de espesor posteriores;</li>
            <li>espesor de retiro calculado;</li>
            <li>reparaciones y reemplazos;</li>
            <li>reparaciones temporales;</li>
            <li>cambios operativos pertinentes (es decir, cambio en el servicio);</li>
            <li>evaluaciones de Aptitud para el Servicio;</li>
            <li>evaluaciones RBI.</li>
        </ul>
        <p>Estos y otros datos pertinentes deben organizarse en formularios adecuados para que los registros de inspección sucesivos proporcionen una imagen cronológica. Cada grupo de inspección debe desarrollar formularios de inspección apropiados.</p>
    </div>
    <div class="subsection">
        <h4>14.2 Registros</h4>
        <div class="subsection">
            <h4>14.2.1 Bosquejos</h4>
            <p>Los dibujos isométricos u oblicuos proporcionan un medio para documentar el tamaño y la orientación de las líneas de tubería, la ubicación y los tipos de accesorios, válvulas, orificios, etc., y las ubicaciones de los CMLs. Aunque se pueden utilizar los dibujos de construcción originales, normalmente el departamento de inspección realiza o prepara bosquejos separados. La Figura 34 es un bosquejo isométrico típico para registrar datos de campo.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_34.png" class="figure-image">
                <p class="figure-caption">Figura 34—Bosquejo Isométrico Típico</p>
            </div>
            
            <p>Los bosquejos tienen las siguientes funciones:</p>
            <ul>
                <li>identificar sistemas y circuitos de tubería particulares en términos de ubicación, tamaño, especificación de material, flujo de proceso general y condiciones de servicio;</li>
                <li>mostrar puntos que deben abrirse para inspección visual y partes que requieren reemplazo o reparación;</li>
                <li>servir como hojas de datos de campo en las que pueden registrarse las ubicaciones de las mediciones de espesor, hallazgos de corrosión y secciones que requieren reemplazo; estos datos pueden transferirse a registros continuos en una fecha posterior;</li>
                <li>ayudar en futuras inspecciones para determinar las ubicaciones que requieren examen;</li>
                <li>identificación de reparaciones temporales (por ejemplo, abrazaderas, envolturas).</li>
            </ul>
            <p>Los bosquejos también pueden contener lo siguiente:</p>
            <ul>
                <li>programa de tubería (cédula);</li>
                <li>ubicación de los soportes de tubería;</li>
                <li>ubicación de SAI;</li>
                <li>número de P&ID.</li>
            </ul>
            <p>Consulte 7.3.3 para obtener orientación adicional sobre los dibujos isométricos y su contenido.</p>
        </div>
        <div class="subsection">
            <h4>14.2.2 Sistemas de Numeración</h4>
            <p>Típicamente, se utiliza un sistema de codificación para identificar de manera única la unidad de proceso, el sistema de tubería, el circuito y los CMLs.</p>
        </div>
        <div class="subsection">
            <h4>14.2.3 Datos de Espesor</h4>
            <p>Un registro de los datos de espesor obtenidos durante las inspecciones periódicas o programadas proporciona un medio para determinar las tasas de corrosión o erosión y la vida útil esperada del material. Algunas empresas utilizan sistemas de registro informatizados (por ejemplo, IDMS) para este propósito. Los datos pueden mostrarse en bosquejos o presentarse como información tabulada adjunta a los bosquejos. La Figura 35 muestra un método de tabulación de lecturas de espesor y otra información.</p>
            
            <div class="figure-container">
                <img src="images/api574_figure_35.png" class="figure-image">
                <p class="figure-caption">Figura 35—Tabulación Típica de Datos de Espesor</p>
            </div>
        </div>
        <div class="subsection">
            <h4>14.2.4 Revisión de Registros</h4>
            <p>Los registros de inspecciones anteriores y las inspecciones realizadas durante el período de operación actual deben revisarse poco después de realizarse las inspecciones para programar la próxima fecha de inspección. Esta revisión debe proporcionar listas de áreas que se acercan al espesor de retiro, áreas que han mostrado previamente altas tasas de corrosión y áreas en las que la inspección actual ha indicado la necesidad de una investigación adicional. A partir de estas listas, debe prepararse un programa de trabajo para inspecciones adicionales en operación, si es posible, y para inspecciones que se realizarán durante el próximo período de parada. Dicho programa ayudará a determinar el número de inspectores que se asignarán al trabajo.</p>
            <p>Además, a partir de la revisión de los registros de inspecciones anteriores, debe hacerse una lista de todas las reparaciones y reemplazos esperados. Esta lista debe presentarse al departamento de mantenimiento con suficiente antelación a la parada para permitir que se obtenga cualquier material necesario o, si es necesario, se fabrique. Esta lista también ayudará al personal de mantenimiento a determinar el número de personal necesario durante el período de parada.</p>
        </div>
        <div class="subsection">
            <h4>14.2.5 Actualización de Registros</h4>
            <p>Los registros deben actualizarse después de las actividades de inspección dentro de un período de tiempo razonable que permita al inspector suficiente tiempo para recopilar, analizar y registrar datos adecuadamente. Muchos sitios tienen requisitos internos que indican una duración máxima entre la obtención de datos y la actualización de registros. Estos requisitos generalmente permiten que los registros se actualicen dentro de unas pocas semanas de completar las actividades de inspección. Establecer un marco de tiempo para la actualización de registros ayuda a garantizar que los datos y la información se registren con precisión y no se pierdan y se olviden los detalles.</p>
        </div>
        <div class="subsection">
            <h4>14.2.6 Auditoría de Registros</h4>
            <p>Los registros de inspección deben auditarse regularmente según los requisitos del código, el manual de inspección de garantía de calidad del sitio y los procedimientos del sitio. La auditoría debe evaluar si los registros cumplen con esos requisitos y si los registros son de la calidad/precisión adecuada. Las auditorías regulares proporcionan un medio para identificar brechas y deficiencias en los programas de inspección existentes y definir acciones correctivas, como capacitación enfocada.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>14.3 Informes (Contenido Futuro)</h4>
        <p>Esta sección está reservada para contenido futuro.</p>
    </div>
    `
});