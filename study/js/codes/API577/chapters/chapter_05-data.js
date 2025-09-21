// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 5 para API 577
registerChapter('API577', {
    id: 5,
    title: "Welding Materials",
    titleEs: "Materiales de Soldadura",
    content: `<h2>Welding Materials</h2>
    <h3>5.1 General</h3>
    <p>Welding materials refers to the many materials involved in welding, including the base metal, filler metal, fluxes, and gases, if any, as each of these has an impact on the welding procedure specification (WPS) and the weldment mechanical properties. An understanding of the conventions used by the ASME Section IX is necessary to adequately review a qualified welding procedure.</p>
    
    <h3>5.2 P-Number Assignment to Base Metals</h3>
    <p>Base metals are assigned P-numbers in ASME Section IX to reduce the number of welding procedure qualifications required. For ferrous base metals having specified impact test requirements, group numbers within P-numbers are assigned, which may become essential variables under certain circumstances. These assignments are based on comparable base metal characteristics such as composition, weldability, and mechanical properties. Table 1 lists the assignments of base metals to P-numbers.</p>
    <p>A complete listing of P-number, S-number, and group number assignments are provided in QW/QB-422 of ASME Section IX. This list is an ascending sort based on specification numbers. Specification numbers grouped by P-number and group number are also listed in ASME Section IX nonmandatory Annex D. Within each list of the same P-number and group number, the specifications are listed in an ascending sort.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 1—P-Number Assignments</caption>
            <thead>
                <tr>
                    <th>Base Metal</th>
                    <th>Welding</th>
                    <th>Brazing</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Steel and alloys</td>
                    <td>P-No.1 through P-No. 11, including P-No. 5A, 5B, 5C, and 15E</td>
                    <td>P-No. 101 through P-No. 103</td>
                </tr>
                <tr>
                    <td>Aluminum and aluminum-base alloys</td>
                    <td>P-No. 21 through P-No. 25</td>
                    <td>P-No. 104 and P-No. 105</td>
                </tr>
                <tr>
                    <td>Copper and copper-base alloys</td>
                    <td>P-No. 31 through P-No. 35</td>
                    <td>P-No. 107 and P-No. 108</td>
                </tr>
                <tr>
                    <td>Nickel and nickel-base alloys</td>
                    <td>P-No. 41 through P-No. 47</td>
                    <td>P-No. 110 through P-No. 112</td>
                </tr>
                <tr>
                    <td>Titanium and titanium-base alloys</td>
                    <td>P-No. 51 through P-No. 53</td>
                    <td>P-No. 115</td>
                </tr>
                <tr>
                    <td>Zirconium and zirconium-base alloys</td>
                    <td>P-No. 61 through P-No. 62</td>
                    <td>P-No. 117</td>
                </tr>
            </tbody>
        </table>
        <p class="table-note">Reprinted Courtesy of ASME.</p>
    </div>
    
    <h3>5.3 F-Number Assignment to Filler Metals</h3>
    <p>Electrodes and welding rods are assigned F-numbers to reduce the number of welding procedure and performance qualifications. The F-number groupings are based primarily upon their usability characteristics, which fundamentally determines the ability of welders to make satisfactory welds for a given process and filler metal.</p>
    <p>Welders who qualify with one filler metal are qualified to weld with all filler metals having the same F-number, and in the case of carbon steel SMAW electrodes, may additionally qualify to weld with electrodes having lower F-numbers. For example, a welder who qualified with an E7018 (an F-4 electrode) is qualified to weld with all F-4 electrodes, plus all F-1, F-2, and F-3 electrodes (with backing limitations). However, other F-numbers, such as F-6, qualify for that F-number alone. The grouping does not imply that base metals or filler metals within a group may be indiscriminately substituted for a metal that was used in the qualification test. Consideration should be given to the compatibility of the base and filler metals from the standpoint of metallurgical properties, postweld heat treatment, design and service requirements, and mechanical properties.</p>
    <p>A complete list of F-numbers for electrodes and welding rods is addressed in ASME Section IX, Table QW 432.</p>
    
    <h3>5.4 AWS Classification of Filler Metals</h3>
    <p>An AWS classification number identifies welding electrodes and rods. The AWS classification numbers are specified in ASME Section IIC under their appropriate SFA specification number. ASME Section IX, Table QW 432, lists the AWS classification numbers and SFA specification numbers included under each of the F numbers. Note that the Xs in the AWS classification numbers represent numerals, i.e. the AWS classifications E6010, E7010, E8010, E9010, and E10010 are incorporated under F-number 3 (EXX10). Annex A contains additional details on the conventions used in identification of filler metals for welding processes.</p>
    
    <h3>5.5 A-Number</h3>
    <p>To minimize the number of welding procedure qualifications, steel and steel-alloy filler metals are also grouped according to their A-number. The A-number grouping in ASME Section IX, Table QW-442, is based on the chemical composition of the deposited weld metal. This grouping does not imply that filler metals may be indiscriminately substituted without consideration for the compatibility with the base metal and the service requirements.</p>
    
    <h3>5.6 Filler Metal Selection</h3>
    <p>Inspectors should verify the filler metal selection is appropriate for the base metal being welded. Some considerations in selection include:</p>
    <ul>
        <li>chemical composition of filler metal;</li>
        <li>tensile strength of filler metal and base metal;</li>
        <li>dilution of alloying elements from base metal;</li>
        <li>hardenability of filler metal;</li>
        <li>susceptibility to hot cracking;</li>
        <li>corrosion resistance of filler metal;</li>
        <li>toughness.</li>
    </ul>
    <p>Annex D provides a guide of common filler metals for base metals most often used in petrochemical plants. In addition, Table D.4 compares the current AWS filler metal classifications to the previous ones for low-alloy steels. AWS has modified the classifications for several common low-alloy filler metals.</p>
    
    <h3>5.7 Consumable Storage and Handling</h3>
    <p>Welding consumable storage and handling guidelines should be in accordance with the consumable manufacturer's instructions and guidelines and as given in the AWS A5.XX series of filler metal specifications. Covered electrodes exposed to moisture can become unstable due to moisture pickup by the coating. Particularly susceptible to moisture pickup are coatings on low-hydrogen electrodes and stainless-steel electrodes. Moisture can be a source of hydrogen, which can cause weldment cracking.</p>
    <p>To reduce exposure to moisture, certain welding consumables should be stored in heated holding ovens after they have been removed from the manufacturer's packaging. Low-hydrogen SMAW electrodes are characterized by a final identification digit of 5, 6, or 8 (e.g. E7016, E8018) and are supplied in non-hermetically sealed containers. Some manufacturers recommend that these electrodes be warmed according to specific temperature requirements prior to use. The electrodes should be stored separately from other types of electrodes with higher hydrogen content, such as cellulose-based electrodes (E6010, E8010), as these can be a primary source of hydrogen pickup. Some welding consumables that are slightly damp can be reconditioned by baking in separate special ovens; however, this is not a universally accepted practice. Electrode ovens should be heated by electrical means and have automatic heat controls and visible temperature indicators. These ovens should only be used for electrode storage, as using them for food storage or cooking could cause the electrode coatings to absorb moisture. Any electrodes or fluxes that have become wet should be discarded.</p>`,
    
    contentEs: `<h2>Materiales de Soldadura</h2>
    <h3>5.1 General</h3>
    <p>Los materiales de soldadura se refieren a los diversos materiales involucrados en la soldadura, incluyendo el metal base, metal de aporte, fundentes y gases, si los hubiera, ya que cada uno de estos impacta en la especificación del procedimiento de soldadura (WPS) y las propiedades mecánicas de la soldadura. Es necesario comprender las convenciones utilizadas por la Sección IX de ASME para revisar adecuadamente un procedimiento de soldadura calificado.</p>
    
    <h3>5.2 Asignación de Número P a Metales Base</h3>
    <p>Los metales base reciben números P en la Sección IX de ASME para reducir el número de calificaciones de procedimientos de soldadura requeridos. Para los metales base ferrosos que tienen requisitos especificados de pruebas de impacto, se asignan números de grupo dentro de los números P, los cuales pueden convertirse en variables esenciales bajo ciertas circunstancias. Estas asignaciones se basan en características comparables del metal base como composición, soldabilidad y propiedades mecánicas. La Tabla 1 lista las asignaciones de metales base a números P.</p>
    <p>Una lista completa de asignaciones de número P, número S y número de grupo se proporciona en QW/QB-422 de la Sección IX de ASME. Esta lista está ordenada ascendentemente según los números de especificación. Los números de especificación agrupados por número P y número de grupo también se listan en el Apéndice D no obligatorio de la Sección IX de ASME. Dentro de cada lista del mismo número P y número de grupo, las especificaciones se listan en orden ascendente.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 1—Asignaciones de Número P</caption>
            <thead>
                <tr>
                    <th>Metal Base</th>
                    <td>Soldadura</td>
                    <td>Brazing</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Acero y aleaciones</td>
                    <td>P-No.1 a P-No. 11, incluyendo P-No. 5A, 5B, 5C y 15E</td>
                    <td>P-No. 101 a P-No. 103</td>
                </tr>
                <tr>
                    <td>Aluminio y aleaciones base aluminio</td>
                    <td>P-No. 21 a P-No. 25</td>
                    <td>P-No. 104 y P-No. 105</td>
                </tr>
                <tr>
                    <td>Cobre y aleaciones base cobre</td>
                    <td>P-No. 31 a P-No. 35</td>
                    <td>P-No. 107 y P-No. 108</td>
                </tr>
                <tr>
                    <td>Níquel y aleaciones base níquel</td>
                    <td>P-No. 41 a P-No. 47</td>
                    <td>P-No. 110 a P-No. 112</td>
                </tr>
                <tr>
                    <td>Titanio y aleaciones base titanio</td>
                    <td>P-No. 51 a P-No. 53</td>
                    <td>P-No. 115</td>
                </tr>
                <tr>
                    <td>Circonio y aleaciones base circonio</td>
                    <td>P-No. 61 a P-No. 62</td>
                    <td>P-No. 117</td>
                </tr>
            </tbody>
        </table>
        <p class="table-note">Reimpreso con cortesía de ASME.</p>
    </div>
    
    <h3>5.3 Asignación de Número F a Metales de Aporte</h3>
    <p>Los electrodos y varillas de soldadura reciben números F para reducir el número de calificaciones de procedimientos de soldadura y calificaciones de desempeño. Los agrupamientos por número F se basan principalmente en sus características de usabilidad, lo que fundamentalmente determina la capacidad de los soldadores para realizar soldaduras satisfactorias para un proceso y metal de aporte dados.</p>
    <p>Los soldadores que califican con un metal de aporte están calificados para soldar con todos los metales de aporte que tengan el mismo número F, y en el caso de los electrodos SMAW de acero al carbono, pueden calificarse adicionalmente para soldar con electrodos que tengan números F más bajos. Por ejemplo, un soldador que calificó con un E7018 (un electrodo F-4) está calificado para soldar con todos los electrodos F-4, más todos los electrodos F-1, F-2 y F-3 (con limitaciones de respaldo). Sin embargo, otros números F, como F-6, califican solo para ese número F. El agrupamiento no implica que los metales base o metales de aporte dentro de un grupo puedan ser sustituidos indiscriminadamente por un metal que se usó en la prueba de calificación. Se debe considerar la compatibilidad de los metales base y de aporte desde el punto de vista de las propiedades metalúrgicas, tratamiento térmico posterior a la soldadura, requisitos de diseño y servicio, y propiedades mecánicas.</p>
    <p>Una lista completa de números F para electrodos y varillas de soldadura se encuentra en la Sección IX de ASME, Tabla QW 432.</p>
    
    <h3>5.4 Clasificación AWS de Metales de Aporte</h3>
    <p>Un número de clasificación AWS identifica los electrodos y varillas de soldadura. Los números de clasificación AWS se especifican en la Sección IIC de ASME bajo su número de especificación SFA apropiado. La Sección IX de ASME, Tabla QW 432, lista los números de clasificación AWS y los números de especificación SFA incluidos bajo cada uno de los números F. Nótese que las X en los números de clasificación AWS representan numerales, es decir, las clasificaciones AWS E6010, E7010, E8010, E9010 y E10010 se incorporan bajo el número F 3 (EXX10). El Apéndice A contiene detalles adicionales sobre las convenciones utilizadas en la identificación de metales de aporte para procesos de soldadura.</p>
    
    <h3>5.5 Número A</h3>
    <p>Para minimizar el número de calificaciones de procedimientos de soldadura, los metales de aporte de acero y aleaciones de acero también se agrupan según su número A. El agrupamiento por número A en la Sección IX de ASME, Tabla QW-442, se basa en la composición química del metal de soldadura depositado. Este agrupamiento no implica que los metales de aporte puedan ser sustituidos indiscriminadamente sin considerar la compatibilidad con el metal base y los requisitos de servicio.</p>
    
    <h3>5.6 Selección del Metal de Aporte</h3>
    <p>Los inspectores deben verificar que la selección del metal de aporte sea apropiada para el metal base que se está soldando. Algunas consideraciones en la selección incluyen:</p>
    <ul>
        <li>composición química del metal de aporte;</li>
        <li>resistencia a la tracción del metal de aporte y del metal base;</li>
        <li>dilución de elementos de aleación del metal base;</li>
        <li>templabilidad del metal de aporte;</li>
        <li>susceptibilidad al agrietamiento en caliente;</li>
        <li>resistencia a la corrosión del metal de aporte;</li>
        <li>tenacidad.</li>
    </ul>
    <p>El Apéndice D proporciona una guía de metales de aporte comunes para metales base utilizados con mayor frecuencia en plantas petroquímicas. Además, la Tabla D.4 compara las clasificaciones actuales de metales de aporte AWS con las anteriores para aceros de baja aleación. AWS ha modificado las clasificaciones para varios metales de aporte comunes de baja aleación.</p>
    
    <h3>5.7 Almacenamiento y Manejo de Consumibles</h3>
    <p>Las directrices de almacenamiento y manejo de consumibles de soldadura deben estar de acuerdo con las instrucciones y directrices del fabricante de consumibles y como se indica en la serie de especificaciones de metales de aporte AWS A5.XX. Los electrodos revestidos expuestos a la humedad pueden volverse inestables debido a la absorción de humedad por el revestimiento. Particularmente susceptibles a la absorción de humedad son los revestimientos de los electrodos de bajo hidrógeno y los electrodos de acero inoxidable. La humedad puede ser una fuente de hidrógeno, lo que puede causar agrietamiento en la soldadura.</p>
    <p>Para reducir la exposición a la humedad, ciertos consumibles de soldadura deben almacenarse en hornos de mantenimiento calentados después de haber sido retirados del embalaje del fabricante. Los electrodos SMAW de bajo hidrógeno se caracterizan por un dígito de identificación final de 5, 6 u 8 (por ejemplo, E7016, E8018) y se suministran en contenedores no herméticamente sellados. Algunos fabricantes recomiendan que estos electrodos se calienten según requisitos de temperatura específicos antes de su uso. Los electrodos deben almacenarse por separado de otros tipos de electrodos con mayor contenido de hidrógeno, como los electrodos a base de celulosa (E6010, E8010), ya que estos pueden ser una fuente primaria de absorción de hidrógeno. Algunos consumibles de soldadura que están ligeramente húmedos pueden ser acondicionados nuevamente horneándolos en hornos especiales separados; sin embargo, esta no es una práctica universalmente aceptada. Los hornos de electrodos deben calentarse por medios eléctricos y tener controles automáticos de calor e indicadores de temperatura visibles. Estos hornos solo deben usarse para almacenamiento de electrodos, ya que usarlos para almacenamiento de alimentos o cocción podría hacer que los revestimientos de los electrodos absorban humedad. Cualquier electrodo o fundente que se haya mojado debe desecharse.</p>`
});