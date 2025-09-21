// Registrar el código API 578 si no existe
if (!getCode('API578')) {
    console.error('El código API 578 no está registrado. Registrándolo ahora...');
    registerCode('API578', {
        title: "API 578 Material Verification Program for New and Existing Alloy Piping Systems",
        titleEs: "API 578 Programa de Verificación de Materiales para Sistemas de Tuberías de Aleación Nuevos y Existentes"
    });
}

// Registrar el capítulo 8
registerChapter('API578', {
    id: 8,
    title: "Materials Identification",
    titleEs: "Identificación de Materiales",
    content: `<h3>8 Materials Identification</h3>
    <div class="subsection">
        <h4>8.1 Identification Process</h4>
        <p>Alloy materials should be identified by their alloy designation or nominal composition. Examples of some acceptable identification methods are as follows:</p>
        <ul>
            <li>color coding by alloy;</li>
            <li>a low-stress stamp marking indicating that the test has been performed;</li>
            <li>documentation showing both the PMI results and the PMI locations.</li>
        </ul>
        <p>Test locations should be shown on appropriate drawings so that each test site can be traceable to the fabricated components.</p>
    </div>
    
    <div class="subsection">
        <h4>8.2 Color Coding/Marking</h4>
        <div class="subsection">
            <h4>8.2.1</h4>
            <p>If the MVP procedure established by the owner/operator requires a visual identification such as color coding or marking, the owner/operator should maintain a record of the alloy material/color code combinations. PFI ES-22 is an example of one such system. Materials identification by color coding is not a substitute for permanent manufacturers' markings required by applicable ASTM or other materials specifications.</p>
        </div>
        
        <div class="subsection">
            <h4>8.2.2</h4>
            <p>Where reliance on color marking is used, persons responsible for reading the colors should have their eyesight tested to confirm that they are able to distinguish the difference between the colors being used (i.e., not be color-blind).</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>8.3 Marking of Components</h4>
        <p>If the owner/operator's documentation process requires physical marking of equipment components, it should specify one of the following:</p>
        <ul>
            <li>the marking system should remain legible for the expected life of the component without deterioration due to corrosion or elevated temperature;</li>
            <li>the marking system is only temporary to facilitate proper handling and identification from the point of PMI to final installation; this marking can be semipermanent paint applied to each item. The markers should not contain additives such as metallic pigments (Al, Pb, or Zn), sulfur, or chlorides.</li>
        </ul>
    </div>`,
    contentEs: `<h3>8 Identificación de Materiales</h3>
    <div class="subsection">
        <h4>8.1 Proceso de Identificación</h4>
        <p>Los materiales de aleación deben identificarse por su designación de aleación o composición nominal. Algunos ejemplos de métodos de identificación aceptables son los siguientes:</p>
        <ul>
            <li>codificación por colores por aleación;</li>
            <li>una marca de estampado de baja tensión que indique que se ha realizado la prueba;</li>
            <li>documentación que muestre tanto los resultados de PMI como las ubicaciones de PMI.</li>
        </ul>
        <p>Las ubicaciones de prueba deben mostrarse en los dibujos apropiados para que cada sitio de prueba pueda rastrearse hasta los componentes fabricados.</p>
    </div>
    
    <div class="subsection">
        <h4>8.2 Codificación por Colores/Marcado</h4>
        <div class="subsection">
            <h4>8.2.1</h4>
            <p>Si el procedimiento MVP establecido por el propietario/operador requiere una identificación visual como codificación por colores o marcado, el propietario/operador debe mantener un registro de las combinaciones de material de aleación/código de color. PFI ES-22 es un ejemplo de uno de estos sistemas. La identificación de materiales por codificación por colores no es un sustituto de las marcas permanentes del fabricante requeridas por las especificaciones ASTM aplicables u otras especificaciones de materiales.</p>
        </div>
        
        <div class="subsection">
            <h4>8.2.2</h4>
            <p>Donde se utilice la dependencia del marcado por colores, las personas responsables de leer los colores deben hacerse una prueba de la vista para confirmar que son capaces de distinguir la diferencia entre los colores que se utilizan (es decir, que no sean daltónicos).</p>
        </div>
    </div>
    
    <div class="subsection">
        <h4>8.3 Marcado de Componentes</h4>
        <p>Si el proceso de documentación del propietario/operador requiere el marcado físico de los componentes del equipo, debe especificar uno de los siguientes:</p>
        <ul>
            <li>el sistema de marcado debe permanecer legible durante la vida útil esperada del componente sin deterioro debido a la corrosión o temperatura elevada;</li>
            <li>el sistema de marcado es solo temporal para facilitar el manejo adecuado e identificación desde el punto de PMI hasta la instalación final; este marcado puede ser pintura semipermanente aplicada a cada artículo. Los marcadores no deben contener aditivos como pigmentos metálicos (Al, Pb o Zn), azufre o cloruros.</li>
        </ul>
    </div>`
});