// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 4
registerChapter('API578', {
    id: 4,
    title: "Examples of Where Material Verification Program May Be Needed",
    titleEs: "Ejemplos de Dónde Puede Ser Necesario un Programa de Verificación de Materiales",
    content: `<h3>4 Examples of Where Material Verification Program May Be Needed</h3>
    <div class="subsection">
        <h4>4.1 Carbon Steel Substitutions in Low-alloy Steel Systems</h4>
        <p>When considering the likelihood of material nonconformances, it is worth noting that, historically, the greatest number of material nonconformances with serious consequences has involved placing unapproved carbon steel components into low-alloy steel (e.g., 1%Cr-1/2Mo, 2%Cr-1Mo, 5Cr-1/2Mo, 9Cr-1Mo) piping systems. Carbon steels visually appear to be the same as the low-alloy steels but behave much differently in the services where low-alloy steels are specified.</p>
    </div>
    
    <div class="subsection">
        <h4>4.2 Alloy Substitutions for Carbon Steel</h4>
        <p>When determining the need to perform material verification on carbon steel, the owner/operator should evaluate the effect that the process stream could have on substituted materials. In some cases, the substitution of hardenable alloy materials for carbon steel has resulted in failure and loss of containment (e.g., stress cracking). Examples of such systems include those handling wet hydrogen sulfide (H<sub>2</sub>S), hydrofluoric acid (HF), or sulfuric acid (H<sub>2</sub>SO<sub>4</sub>). The extent of verification should be evaluated and appropriate for the risk associated with an unintended substitution, and greater levels of verification may be used for situations where the material substitution can lead to a failure and/or loss of containment.</p>
    </div>
    
    <div class="subsection">
        <h4>4.3 Stainless Steel and Nonferrous Substitutions Within High-alloy Systems</h4>
        <p>There is an assortment of stainless steels with varying compositions and varying corrosion resistances to different process streams. PMI should be considered by the owner/operator depending upon the level of risk (probability and consequence of failure) based upon the potential damage mechanisms and damage rates associated with the installation of an unapproved high alloy during fabrication and installation.</p>
        <p>Examples of such situations include, but are not limited to, the following:</p>
        <ul>
            <li>substitution of stainless steels for Alloy 400 in HF alkylation services;</li>
            <li>substitution of a nonstabilized grade of stainless steel for a stabilized grade in a high-temperature service;</li>
            <li>substitution of Type 304 stainless steel for Type 316 stainless steel where the molybdenum content is important for corrosion resistance;</li>
            <li>substitution of austenitic stainless steel for duplex stainless steel.</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>4.4 Residual Elements in Carbon Steels in Hydrofluoric Acid Alkylation Units</h4>
        <p>Carbon steels in some specific locations in HF acid service can experience increased corrosion rates based on the residual element (RE) content in the steels, e.g. Cr, Ni, Cu (see API 751). PMI methods can be used to assess the suitability of materials for HF service. Consideration should be given to the ability and/or accuracy of the PMI method to detect the various elemental concentrations, which are miniscule in comparison to the bulk analysis.</p>
    </div>
    
    <div class="subsection">
        <h4>4.5 Process Units Susceptible to Sulfidation</h4>
        <p>Carbon steels with low silicon (Si &lt; 0.10 %) content can corrode at a greater rate compared with carbon steels with higher silicon (Si &gt; 0.10 %) content when exposed to hydrogen-free sulfidation conditions. These phenomena are discussed more extensively in API 571 and API 939-C. Owner/operators with assets at risk from this type of degradation should consider the risks and the requirements needed to apply PMI material control to verify silicon levels and the effect on predicted corrosion rate. Alternatively, the owner/operator may want to consider locating and conducting thickness measurements on all potentially susceptible carbon steel materials in a circuit exposed to hot sulfidation to determine if low-silicon components originally installed may be resulting in higher corrosion rates than the rest of a piping circuit.</p>
    </div>
    
    <div class="subsection">
        <h4>4.6 Gasket Materials</h4>
        <p>Gaskets in incompatible service may result in premature failures. The principles outlined in this document can be applied to gasket materials. The owner/operator should define the material control methods to be used. The actual test procedures may be complex due to the construction of the gasket.</p>
    </div>
    
    <div class="subsection">
        <h4>4.7 Refractory Installation Systems (Anchors)</h4>
        <p>Testing to verify that the refractory anchors match specifications should be considered by the owner/operator. Material specifications and maximum design temperatures for selected materials are presented in API 560.</p>
    </div>
    
    <div class="subsection">
        <h4>4.8 Bolting Materials</h4>
        <p>When specialized bolting materials are specified for a variety of reasons, owner/operators should consider the need to add requirements to their MVP to validate that the specified bolting materials were received and installed. One example is the use of B7M bolting where there may be susceptibility of stress cracking in service. In such cases, owner/operators should require methods of validating that B7M studs were actually received. That validation may include checking for appropriate certifications, markings, receiving paperwork, and hardness testing. Other applications may require high-alloy bolting that should also be verified as received and installed (e.g., exchanger floating head bolting and other applications of internal bolting failures could lead to significant reliability or process safety incidents).</p>
    </div>`,
    contentEs: `<h3>4 Ejemplos de Dónde Puede Ser Necesario un Programa de Verificación de Materiales</h3>
    <div class="subsection">
        <h4>4.1 Sustituciones de Acero al Carbono en Sistemas de Acero de Baja Aleación</h4>
        <p>Al considerar la probabilidad de no conformidades de materiales, vale la pena señalar que, históricamente, el mayor número de no conformidades de materiales con consecuencias graves ha implicado la colocación de componentes no aprobados de acero al carbono en sistemas de tuberías de acero de baja aleación (ej., 1%Cr-1/2Mo, 2%Cr-1Mo, 5%Cr-1/2Mo, 9%Cr-1Mo). Los aceros al carbono visualmente parecen iguales a los aceros de baja aleación pero se comportan de manera muy diferente en los servicios donde se especifican aceros de baja aleación.</p>
    </div>
    
    <div class="subsection">
        <h4>4.2 Sustituciones de Aleaciones por Acero al Carbono</h4>
        <p>Al determinar la necesidad de realizar verificación de materiales en acero al carbono, el propietario/operador debe evaluar el efecto que la corriente de proceso podría tener sobre los materiales sustituidos. En algunos casos, la sustitución de materiales de aleación endurecibles por acero al carbono ha resultado en fallas y pérdida de contención (ej., agrietamiento por esfuerzo). Ejemplos de tales sistemas incluyen aquellos que manejan sulfuro de hidrógeno húmedo (H<sub>2</sub>S), ácido fluorhídrico (HF) o ácido sulfúrico (H<sub>2</sub>SO<sub>4</sub>). El alcance de la verificación debe evaluarse y ser apropiado para el riesgo asociado con una sustitución no intencional, y pueden usarse niveles mayores de verificación para situaciones donde la sustitución del material puede llevar a una falla y/o pérdida de contención.</p>
    </div>
    
    <div class="subsection">
        <h4>4.3 Sustituciones de Acero Inoxidable y Materiales No Ferrosos dentro de Sistemas de Alta Aleación</h4>
        <p>Existe una variedad de aceros inoxidables con composiciones variables y resistencias a la corrosión variables para diferentes corrientes de proceso. El propietario/operador debe considerar el uso de PMI dependiendo del nivel de riesgo (probabilidad y consecuencia de falla) basado en los mecanismos de daño potenciales y las tasas de daño asociadas con la instalación de una aleación alta no aprobada durante la fabricación e instalación.</p>
        <p>Ejemplos de tales situaciones incluyen, pero no se limitan a, los siguientes:</p>
        <ul>
            <li>sustitución de aceros inoxidables por la Aleación 400 en servicios de alquilación con HF;</li>
            <li>sustitución de un grado no estabilizado de acero inoxidable por un grado estabilizado en un servicio de alta temperatura;</li>
            <li>sustitución de acero inoxidable Tipo 304 por acero inoxidable Tipo 316 donde el contenido de molibdeno es importante para la resistencia a la corrosión;</li>
            <li>sustitución de acero inoxidable austenítico por acero inoxidable dúplex.</li>
        </ul>
    </div>
    
    <div class="subsection">
        <h4>4.4 Elementos Residuales en Aceros al Carbono en Unidades de Alquilación con Ácido Fluorhídrico</h4>
        <p>Los aceros al carbono en algunas ubicaciones específicas en servicio con ácido HF pueden experimentar tasas de corrosión aumentadas basadas en el contenido de elementos residuales (RE) en los aceros, ej. Cr, Ni, Cu (ver API 751). Los métodos PMI pueden usarse para evaluar la idoneidad de los materiales para servicio con HF. Debe considerarse la capacidad y/o precisión del método PMI para detectar las diversas concentraciones elementales, que son minúsculas en comparación con el análisis a granel.</p>
    </div>
    
    <div class="subsection">
        <h4>4.5 Unidades de Proceso Susceptibles a Sulfuración</h4>
        <p>Los aceros al carbono con bajo contenido de silicio (Si &lt; 0.10 %) pueden corroerse a una tasa mayor en comparación con los aceros al carbono con mayor contenido de silicio (Si &gt; 0.10 %) cuando se exponen a condiciones de sulfuración sin hidrógeno. Estos fenómenos se discuten más extensamente en API 571 y API 939-C. Los propietarios operadores con activos en riesgo por este tipo de degradación deben considerar los riesgos y los requisitos necesarios para aplicar el control de materiales PMI para verificar los niveles de silicio y el efecto en la tasa de corrosión predicha. Alternativamente, el propietario/operador puede querer considerar localizar y realizar mediciones de espesor en todos los materiales de acero al carbono potencialmente susceptibles en un circuito expuesto a sulfuración caliente para determinar si los componentes de bajo silicio instalados originalmente pueden estar resultando en tasas de corrosión más altas que el resto de un circuito de tubería.</p>
    </div>
    
    <div class="subsection">
        <h4>4.6 Materiales de Empaquetadura (Juntas)</h4>
        <p>Las empaquetaduras (juntas) en servicios incompatibles pueden resultar en fallas prematuras. Los principios descritos en este documento pueden aplicarse a los materiales de empaquetadura. El propietario/operador debe definir los métodos de control de materiales a utilizar. Los procedimientos de prueba reales pueden ser complejos debido a la construcción de la empaquetadura.</p>
    </div>
    
    <div class="subsection">
        <h4>4.7 Sistemas de Instalación Refractaria (Anclajes)</h4>
        <p>El propietario/operador debe considerar la realización de pruebas para verificar que los anclajes refractarios coincidan con las especificaciones. Las especificaciones de materiales y las temperaturas máximas de diseño para los materiales seleccionados se presentan en API 560.</p>
    </div>
    
    <div class="subsection">
        <h4>4.8 Materiales de Pernos</h4>
        <p>Cuando se especifican materiales de pernos especializados por diversas razones, los propietarios operadores deben considerar la necesidad de agregar requisitos a su MVP para validar que los materiales de pernos especificados fueron recibidos e instalados. Un ejemplo es el uso de pernos B7M donde puede haber susceptibilidad de agrietamiento por esfuerzo en servicio. En tales casos, los propietarios operadores deben requerir métodos para validar que los pernos B7M fueron realmente recibidos. Esa validación puede incluir verificar certificaciones apropiadas, marcado, documentación de recepción y pruebas de dureza. Otras aplicaciones pueden requerir pernos de alta aleación que también deben verificarse como recibidos e instalados (ej., pernos de cabeza flotante de intercambiador y otras aplicaciones de fallas de pernos internos podrían llevar a incidentes significativos de confiabilidad o seguridad de proceso).</p>
    </div>`
});