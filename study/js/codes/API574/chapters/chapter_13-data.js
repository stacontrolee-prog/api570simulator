// Registrar el código API 574 si no existe
if (!getCode('API574')) {
    console.error('El código API574 no está registrado. Registrándolo ahora...');
    registerCode('API574', {
        title: "API 574 Inspection Practices for Piping System Components",
        titleEs: "API 574 Prácticas de Inspección para Componentes de Sistemas de Tuberías"
    });
}

// Registrar el capítulo 13 para API 574
registerChapter('API574', {
    id: 13,
    title: "Pressure Tests",
    titleEs: "Pruebas de Presión",
    content: `<h2>Inspection Practices for Piping System Components</h2>
    <h3>13 Pressure Tests</h3>
    <div class="subsection">
        <h4>13.1 Purpose of Testing</h4>
        <p>A pressure test conducted on in-service piping may function as a leak test, or if the pressure is high enough, it can reveal gross errors in design or fabrication. Pressure tests of existing piping should be performed in accordance with the requirements of API 570. Piping systems that may be subjected to pressure testing include the following:</p>
        <ul>
            <li>underground lines and other inaccessible piping;</li>
            <li>water and other nonhazardous utility lines;</li>
            <li>long oil-transfer lines in areas where a leak or spill would not be hazardous to personnel or harmful to the environment;</li>
            <li>complicated manifold systems;</li>
            <li>small piping and tubing systems;</li>
            <li>all systems, after a chemical cleaning operation;</li>
            <li>when required by the jurisdiction.</li>
        </ul>
        <p>The reasons and procedures for pressure-testing piping are generally the same as those for equipment. When vessels of process units are pressure tested, the main lines connected to the vessels are often tested at the same time. Service testing of Category D piping systems is limited to the 150 psi (1034.2 kPa) design gauge pressure upper limit defined for Category D fluid service in ASME B31.3.</p>
        
        <h4>13.2 Types of Pressure Tests</h4>
        <p>Future Content</p>
        
        <h4>13.3 Performing Pressure Tests</h4>
        <p>API 570—Section 5.11 provides guidelines for preparing piping for pressure testing, and ASME PCC-2, Article 501, offers useful guidance on performing pressure and tightness testing of piping systems.</p>
        <p>During liquid pressure testing, all air should be expelled from the piping through vents provided at all high points. If the system is not full of liquid, the trapped air will compress. With large quantities of a compressible medium in the system, a failure will be more violent than in a liquid-full system because of expansion of the compressible medium.</p>
        <p>Care should be taken to ensure that the test does not overpressure the system, including components (e.g. expansion joints) that may have a lower design pressure than the remainder of the piping system.</p>
        <p>Calibrated pressure gauges properly located and of the proper range should be used and carefully watched during pressuring. When all air is expelled from the system, the pressure will rise rapidly. A sudden rise in pressure can cause shock, resulting in failure of the tested equipment.</p>
        <p>The pressure for a liquid pressure test is usually supplied by an available pump. If a pump of sufficient head is not available, the necessary test pressure can be supplied by bottled inert gas, such as nitrogen, bled in at the top of the system after the system is filled with the test liquid. This method has the disadvantage of introducing a compressible medium into the system, but the quantity can be kept small. In either case, if over pressuring can occur, a relief device should be installed to protect the system.</p>
        <p>Various fluids can be used for pressure testing. The following are the most commonly used:</p>
        <ul>
            <li>water with or without an inhibitor, freezing-point depressant, or wetting agent;</li>
            <li>liquid products normally carried in the system, if they are not toxic or likely to cause a fire in case of a leak or failure;</li>
            <li>steam;</li>
            <li>air, carbon dioxide, nitrogen, helium, or another inert gas.</li>
        </ul>
        <p><strong>NOTE:</strong> ASME B31.3 has restrictions on the use of the test mediums listed in item c) and item d).</p>
        <p>If a leak or failure occurs, fluid may be released in the area of the piping being tested. For this reason, the fluid should not be harmful to adjoining equipment or to the plant sewer system, and appropriate safety precautions are taken to avoid personnel exposure.</p>
        <p>Water may not be suitable as a test fluid in some piping systems, such as acid lines, cryogenic systems, and air-drier systems. Uninhibited salt water can cause corrosion of some nonferrous alloys and SCC of austenitic stainless steels. Salt water can also cause corrosion of ferritic steels and severe pitting of austenitic steels, such as valve trim or plating. Most natural waters contain bacteria that can lead to microbiologically induced corrosion if the water is left in the piping for too long after a pressure test. Austenitic stainless steels have failed after 2 to 5 weeks of this kind of exposure.</p>
        <p>Water can freeze in cold weather unless a freezing-point depressant is used. The depressant should not be harmful to the sewer system or other place of disposal. Steam is sometimes used to warm the water and prevent freezing. The transition temperature of the steel should be considered to prevent brittle failure when the testing is during cold weather or with cold fluids.</p>
        <p>A steam test may be advantageous where steam is used for heating or purging equipment before operation. The steam pressure should not exceed the operating pressure. An advantage of steam is that it heats the piping, thereby popping flux from welds in piping that could have passed a water test; however, steam testing does have several disadvantages. Condensation occurs, and the draining of condensate may be necessary before operations are started. When high-pressure steam is used, leaks are difficult to detect and can burn personnel who are around the equipment. Steam also has the previously mentioned disadvantage of compressible media. ASME B31.3 allows for a leakage test with the flowing medium at operating conditions for Category D fluid services [i.e. the fluid should be nonflammable, nontoxic, and 366 °F (186 °C) or lower].</p>
        <p><strong>NOTE:</strong> If steam is used as the test medium for piping other than Category D piping, the rules for pneumatic testing stated in ASME B31.3 should be followed.</p>
        <p>Pneumatic tests in conjunction with a soap solution, foaming agent, or sonic leak detector are sometimes permissible for small lines and systems. The preferred medium for pneumatic testing is an inert gas.</p>
        <p>Compressed air should not be used where flammable fluids can be present. Leaks that would not be detected during a liquid pressure test can often be detected by a pneumatic test. Because nitrogen and helium are more penetrating than air, they are used when service conditions are particularly critical. Filling any piping system with an inert gas creates an asphyxiation hazard at every stage in the process. Precautions must be taken to ensure that no personnel are inadvertently exposed to a low-oxygen atmosphere.</p>
        <p>Pneumatic testing should be conducted strictly in accordance with ASME B31.3. All the precautions specified in ASME B31.3 should be strictly observed, including the elimination of conditions under which brittle fracture might occur.</p>
        
        <h4>13.4 Pressure Testing Considerations</h4>
        <p>Future Content</p>
        
        <h4>13.5 Pressure Test Safety Considerations</h4>
        <p>The stored energy associated with a pneumatic test is significantly greater than a hydrostatic test. It is important to understand there can be a high consequence associated with the sudden release of stored energy if a piping system fails during a pneumatic test. While performing hydrostatic or pneumatic pressure tests consider cordoning off the area. For safety, personnel should maintain the designated distance from the piping until the test is completed and pressure is released. ASME PCC-2, Article 501, contains guidelines for determining safe distance based on the calculated stored energy of the test. Owner-operators often require risk analysis and higher level of approvals for performing pneumatic tests.</p>
        <p>Large diameter piping and its structural supports may not be designed to support the weight of the piping filled with water. Before a hydrostatic test is performed, the engineer should determine if the support structure is adequate for the weight. If the piping or its supports are inadequate for a hydrostatic test, a pneumatic test may be considered.</p>
        <p>Blinds and/or blanks used for pressure testing should be of adequate thickness to withstand the pressure that will be applied during testing. If it is later determined that a pressure test is needed due to inspection findings or previously unplanned repairs, the blind or blanks need to be evaluated to determine if they are adequate for the testing pressure. If they are inadequate, blinds or blanks of an appropriate thickness and material should be installed in place of the isolation blinds to resist the pressure stresses of the test.</p>
        <p>The number of inspection personnel in the area should be limited to the number necessary to run the test. When making pneumatic pressure tests, the recommendations set forth in the ASME Code should be followed.</p>
    </div>
    
    <h3>14 Records and Reports</h3>
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
    </div>`,
    contentEs: `<h2>Prácticas de Inspección para Componentes de Sistemas de Tuberías</h2>
    <h3>13 Pruebas de Presión</h3>
    <div class="subsection">
        <h4>13.1 Propósito de las Pruebas</h4>
        <p>Una prueba de presión realizada en tuberías en servicio puede funcionar como una prueba de fugas, o si la presión es lo suficientemente alta, puede revelar errores graves en el diseño o fabricación. Las pruebas de presión de tuberías existentes deben realizarse de acuerdo con los requisitos de API 570. Los sistemas de tuberías que pueden someterse a pruebas de presión incluyen los siguientes:</p>
        <ul>
            <li>tuberías subterráneas y otras tuberías inaccesibles;</li>
            <li>tuberías de agua y otros servicios públicos no peligrosos;</li>
            <li>tuberías largas de transferencia de aceite en áreas donde una fuga o derrame no sería peligroso para el personal ni dañino para el medio ambiente;</li>
            <li>sistemas de colectores complicados;</li>
            <li>sistemas de tuberías y tubos pequeños;</li>
            <li>todos los sistemas, después de una operación de limpieza química;</li>
            <li>cuando lo exija la jurisdicción.</li>
        </ul>
        <p>Las razones y procedimientos para las pruebas de presión en tuberías son generalmente los mismos que para los equipos. Cuando los recipientes de las unidades de proceso son sometidos a pruebas de presión, las líneas principales conectadas a los recipientes a menudo se prueban al mismo tiempo. Las pruebas de servicio de los sistemas de tuberías Categoría D están limitadas al límite superior de 150 psi (1034.2 kPa) de presión manométrica de diseño definido para el servicio de fluidos Categoría D en ASME B31.3.</p>
        
        <h4>13.2 Tipos de Pruebas de Presión</h4>
        <p>Contenido Futuro</p>
        
        <h4>13.3 Realización de Pruebas de Presión</h4>
        <p>La API 570—Sección 5.11 proporciona directrices para preparar tuberías para pruebas de presión, y ASME PCC-2, Artículo 501, ofrece orientación útil para realizar pruebas de presión y estanqueidad de sistemas de tuberías.</p>
        <p>Durante las pruebas de presión con líquido, todo el aire debe ser expulsado de la tubería a través de ventilaciones proporcionadas en todos los puntos altos. Si el sistema no está lleno de líquido, el aire atrapado se comprimirá. Con grandes cantidades de un medio compresible en el sistema, una falla será más violenta que en un sistema lleno de líquido debido a la expansión del medio compresible.</p>
        <p>Se debe tener cuidado de asegurar que la prueba no sobrepresione el sistema, incluyendo componentes (por ejemplo, juntas de expansión) que puedan tener una presión de diseño más baja que el resto del sistema de tuberías.</p>
        <p>Deben usarse manómetros de presión calibrados, correctamente ubicados y del rango adecuado, y vigilarse cuidadosamente durante la presurización. Cuando todo el aire sea expulsado del sistema, la presión aumentará rápidamente. Un aumento repentino de la presión puede causar un golpe de ariete, resultando en falla del equipo probado.</p>
        <p>La presión para una prueba de presión con líquido generalmente es suministrada por una bomba disponible. Si no se dispone de una bomba con suficiente carga, la presión de prueba necesaria puede ser suministrada por gas inerte embotellado, como nitrógeno, inyectado en la parte superior del sistema después de que el sistema se haya llenado con el líquido de prueba. Este método tiene la desventaja de introducir un medio compresible en el sistema, pero la cantidad puede mantenerse pequeña. En cualquier caso, si puede ocurrir sobrepresión, debe instalarse un dispositivo de alivio para proteger el sistema.</p>
        <p>Se pueden usar varios fluidos para pruebas de presión. Los siguientes son los más comúnmente utilizados:</p>
        <ul>
            <li>agua con o sin un inhibidor, depresor del punto de congelación o agente humectante;</li>
            <li>productos líquidos normalmente transportados en el sistema, si no son tóxicos o propensos a causar un incendio en caso de fuga o falla;</li>
            <li>vapor;</li>
            <li>aire, dióxido de carbono, nitrógeno, helio u otro gas inerte.</li>
        </ul>
        <p><strong>NOTA:</strong> ASME B31.3 tiene restricciones sobre el uso de los medios de prueba listados en los incisos c) y d).</p>
        <p>Si ocurre una fuga o falla, el fluido puede liberarse en el área de la tubería que se está probando. Por esta razón, el fluido no debe ser dañino para los equipos adyacentes ni para el sistema de alcantarillado de la planta, y deben tomarse las precauciones de seguridad adecuadas para evitar la exposición del personal.</p>
        <p>El agua puede no ser adecuada como fluido de prueba en algunos sistemas de tuberías, como líneas de ácido, sistemas criogénicos y sistemas de secado de aire. El agua salada sin inhibir puede causar corrosión de algunas aleaciones no ferrosas y SCC (agrietamiento por corrosión bajo tensión) de aceros inoxidables austeníticos. El agua salada también puede causar corrosión de aceros ferríticos y picaduras severas de aceros austeníticos, como los componentes de válvulas o revestimientos. La mayoría de las aguas naturales contienen bacterias que pueden conducir a corrosión inducida microbiológicamente si el agua se deja en la tubería durante demasiado tiempo después de una prueba de presión. Los aceros inoxidables austeníticos han fallado después de 2 a 5 semanas de este tipo de exposición.</p>
        <p>El agua puede congelarse en clima frío a menos que se use un depresor del punto de congelación. El depresor no debe ser dañino para el sistema de alcantarillado u otro lugar de disposición. A veces se usa vapor para calentar el agua y evitar la congelación. Debe considerarse la temperatura de transición del acero para prevenir fallas frágiles cuando la prueba se realiza durante clima frío o con fluidos fríos.</p>
        <p>Una prueba de vapor puede ser ventajosa donde se usa vapor para calentar o purgar equipos antes de la operación. La presión del vapor no debe exceder la presión de operación. Una ventaja del vapor es que calienta la tubería, haciendo que el fundente de las soldaduras en la tubería se desprenda, lo que podría haber pasado una prueba con agua; sin embargo, las pruebas con vapor tienen varias desventajas. Ocurre condensación, y puede ser necesario el drenaje del condensado antes de que se inicien las operaciones. Cuando se usa vapor a alta presión, las fugas son difíciles de detectar y pueden quemar al personal que esté alrededor del equipo. El vapor también tiene la desventaja mencionada anteriormente de los medios compresibles. ASME B31.3 permite una prueba de fugas con el medio en flujo en condiciones de operación para servicios de fluidos Categoría D [es decir, el fluido debe ser no inflamable, no tóxico, y de 366 °F (186 °C) o menos].</p>
        <p><strong>NOTA:</strong> Si se usa vapor como medio de prueba para tuberías distintas a las de Categoría D, deben seguirse las reglas para pruebas neumáticas establecidas en ASME B31.3.</p>
        <p>Las pruebas neumáticas en combinación con una solución de jabón, agente espumante o detector de fugas sónico a veces son permisibles para líneas y sistemas pequeños. El medio preferido para pruebas neumáticas es un gas inerte.</p>
        <p>No debe usarse aire comprimido donde puedan estar presentes fluidos inflamables. Las fugas que no se detectarían durante una prueba de presión con líquido a menudo pueden detectarse mediante una prueba neumática. Debido a que el nitrógeno y el helio son más penetrantes que el aire, se usan cuando las condiciones de servicio son particularmente críticas. Llenar cualquier sistema de tuberías con un gas inerte crea un riesgo de asfixia en cada etapa del proceso. Deben tomarse precauciones para asegurar que ningún personal quede expuesto involuntariamente a una atmósfera baja en oxígeno.</p>
        <p>Las pruebas neumáticas deben realizarse estrictamente de acuerdo con ASME B31.3. Todas las precauciones especificadas en ASME B31.3 deben observarse estrictamente, incluyendo la eliminación de condiciones bajo las cuales podría ocurrir una fractura frágil.</p>
        
        <h4>13.4 Consideraciones sobre Pruebas de Presión</h4>
        <p>Contenido Futuro</p>
        
        <h4>13.5 Consideraciones de Seguridad en Pruebas de Presión</h4>
        <p>La energía almacenada asociada con una prueba neumática es significativamente mayor que en una prueba hidrostática. Es importante comprender que puede haber consecuencias graves asociadas con la liberación repentina de energía almacenada si un sistema de tuberías falla durante una prueba neumática. Al realizar pruebas de presión hidrostáticas o neumáticas, considere acordonar el área. Para seguridad, el personal debe mantener la distancia designada de la tubería hasta que la prueba se complete y se libere la presión. ASME PCC-2, Artículo 501, contiene directrices para determinar una distancia segura basada en la energía almacenada calculada de la prueba. Los operadores-propietarios a menudo requieren análisis de riesgo y niveles más altos de aprobación para realizar pruebas neumáticas.</p>
        <p>Las tuberías de gran diámetro y sus soportes estructurales pueden no estar diseñados para soportar el peso de la tubería llena de agua. Antes de realizar una prueba hidrostática, el ingeniero debe determinar si la estructura de soporte es adecuada para el peso. Si la tubería o sus soportes son inadecuados para una prueba hidrostática, puede considerarse una prueba neumática.</p>
        <p>Los ciegos y/o placas ciegas utilizados para pruebas de presión deben tener un espesor adecuado para soportar la presión que se aplicará durante la prueba. Si posteriormente se determina que se necesita una prueba de presión debido a hallazgos de inspección o reparaciones no planificadas previamente, los ciegos o placas ciegas deben ser evaluados para determinar si son adecuados para la presión de prueba. Si son inadecuados, deben instalarse ciegos o placas ciegas de un espesor y material apropiados en lugar de los ciegos de aislamiento para resistir los esfuerzos de presión de la prueba.</p>
        <p>El número de personal de inspección en el área debe limitarse al número necesario para realizar la prueba. Al realizar pruebas de presión neumáticas, deben seguirse las recomendaciones establecidas en el Código ASME.</p>
    </div>
    
    <h3>14 Registros e Informes</h3>
    <div class="subsection">
        <h4>14.1 General</h4>
        <p>La necesidad de mantener registros completos de manera detallada y ordenada es una responsabilidad importante del inspector, así como un requisito de muchos reglamentos (por ejemplo, OSHA 29 CFR 1910.119). Los registros precisos permiten una evaluación de la vida útil de cualquier tubería, válvula o accesorio. A partir de dichos registros, puede determinarse una imagen integral del estado general de cualquier sistema de tuberías. Cuando están debidamente organizados, dichos registros forman un registro permanente a partir del cual pueden determinarse las tasas de corrosión, los intervalos de inspección y los intervalos probables de reemplazo o reparación. Se puede utilizar un programa informático (por ejemplo, IDMS) para ayudar en una evaluación más completa de la información registrada y para determinar la próxima fecha de inspección.</p>
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
    </div>`
});