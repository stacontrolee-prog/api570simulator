// Registrar el código API 571 si no existe
if (!getCode('API571')) {
    console.error('El código API 571 no está registrado. Registrándolo ahora...');
    registerCode('API571', {
        title: "API 571 Damage Mechanisms Affecting Fixed Equipment in the Refining Industry",
        titleEs: "API 571 Mecanismos de Daño que Afectan a Equipos Fijos en la Industria de Refinación"
    });
}

// Registrar el capítulo 3-45
registerChapter('API571', {
    id: "3.45",
    title: "Microbiologically Influenced Corrosion",
    titleEs: "Corrosión Influenciada Microbiológicamente",
    content: `<h3>3.45 Microbiologically Influenced Corrosion</h3>
    <div class="subsection">
        <h4>3.45.1 Description of Damage</h4>
        <p>Corrosion caused by living organisms such as bacteria, algae, or fungi. It is often associated with the presence of tubercles or slimy organic substances. Often, the bacteria produce localized corrosion in the form of pitting or crevice corrosion.</p>
    </div>
    <div class="subsection">
        <h4>3.45.2 Affected Materials</h4>
        <p>Most common materials of construction including carbon and alloy steels, 300 series SS and 400 series SS, aluminum alloys, copper alloys, and some nickel alloys. Titanium appears to be highly resistant.</p>
    </div>
    <div class="subsection">
        <h4>3.45.3 Critical Factors</h4>
        <p>a) Microbiologically influenced corrosion (MIC) is found in aqueous environments. Occasionally it is found in services where water is intermittently present. Stagnant or low-flow conditions allow and/or promote the growth of microorganisms.</p>
        <p>b) Because there are many types, organisms can survive and grow under a wide range of conditions including lack of oxygen, light or dark, high salinity, pH range of 0 to 12, and temperatures from 0 °F to 235 °F (–15 °C to 115 °C).</p>
        <p>c) Systems may become "inoculated" by the introduction of organisms that multiply and spread unless controlled.</p>
        <p>d) Different organisms thrive on different nutrients including inorganic substances (e.g. sulfur, ammonia, iron, sulfate compounds, and H<sub>2</sub>S) and organic substances (e.g. hydrocarbons and organic acids). In addition, all organisms require a source of carbon, nitrogen, and phosphorous for growth. Corrosion is often blamed on iron-oxidizing bacteria or SRB. However, these organisms are typically only part of a complex colony of multiple types of interdependent organisms, each capable of creating by-products that might be a food source for others.</p>
        <p>e) In-leakage of process contaminants such as hydrocarbons or H<sub>2</sub>S may lead to a massive increase in biofouling and corrosion.</p>
    </div>
    <div class="subsection">
        <h4>3.45.4 Affected Units or Equipment</h4>
        <p>a) MIC is often found in water-cooled heat exchangers, in the bottom water layer of storage tanks, in piping with stagnant or low flow, and in piping in contact with some soils.</p>
        <ul>
            <li>Product storage tanks and water-cooled heat exchangers in any unit where cooling water is not properly treated can be affected.</li>
            <li>Stagnant process lines with trapped water can suffer from MIC.</li>
        </ul>
        <p>b) Drain systems and other water-containing systems associated with docks and ship loading/unloading facilities can experience MIC.</p>
        <p>c) MIC is commonly found in equipment where the hydrotest water has not been removed or where equipment has been left outside and unprotected. 300 series SS are often affected unless precautionary measures are taken.</p>
        <p>d) Fire-water systems can be affected.</p>
    </div>
    <div class="subsection">
        <h4>3.45.5 Appearance or Morphology of Damage</h4>
        <p>a) MIC corrosion is frequently observed as localized pitting under deposits or tubercles that shield the organisms. Tubercles also form on carbon steel exposed to oxygenated water, so the presence of tubercles is not a guarantee of MIC.</p>
        <p>b) Damage is often characterized by cup-shaped pits within pits (the halo effect) in carbon steel or subsurface cavities in stainless steel. However, these pits are often indistinguishable from under-deposit corrosion in carbon steel and chloride pitting in stainless steels. Pit morphology alone may not be a reliable indicator of the cause of corrosion.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-45-1—MIC on a diesel tank bottom.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-45-2—Pitting corrosion on the ID of a 6-in. carbon steel sour crude line after 2½ years of service. Pits are approximately 1-in. to 2-in. wide. Note the halo effect in Figure 3-45-3.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-45-3—Same pipe as Figure 3-45-2. Note the halo effect.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-4.png" class="figure-image">
            <p class="figure-caption">Figure 3-45-4—Oil line with MIC damage beneath tubercles.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-5.png" class="figure-image">
            <p class="figure-caption">Figure 3-45-5—Same oil line as Figure 3-45-4. Hemispherical pitting typical of MIC can be seen after grit blasting to remove the scale.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-6.png" class="figure-image">
            <p class="figure-caption">Figure 3-45-6—Type 304 stainless steel exchanger tubes failed from pitting corrosion on the shell side in cooling water service after 2½ years without biocide treatment.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-7.png" class="figure-image">
            <p class="figure-caption">Figure 3-45-7—A cross section of the tube in Figure 3-45-6 revealing severe subsurface tunneling, typical of MIC.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.45.6 Prevention/Mitigation</h4>
        <p>a) Microbes require water to thrive. Systems that contain water (cooling water, storage tanks, etc.) should be treated with biocides such as chlorine, bromine, ozone, ultraviolet light, or proprietary compounds. Often, multiple biocides are needed to keep the levels of bacteria in the appropriate ranges.</p>
        <p>b) Proper application of biocides will control, but not eliminate, microbes; therefore, continued treatment is often necessary.</p>
        <p>c) Periodically flushing and cleaning susceptible systems will help minimize colony growth and resultant MIC.</p>
        <p>d) Minimize low-flow or stagnant zones in water-containing systems. A flow rate of 3 fps (1 m/s) will inhibit colony formation and thereby minimize the likelihood of MIC.</p>
        <p>e) Lines should be sloped to assist in drainage.</p>
        <p>f) Systems that are not designed or intended for water containment should be kept clean and dry.</p>
        <p>g) Empty hydrotest water as soon as possible. Remove moisture and prevent additional moisture intrusion.</p>
        <p>h) Coating and cathodically protecting underground structures and interiors of storage tanks have been shown to be effective mitigation methods for MIC.</p>
        <p>i) Biocides are generally not effective in a system that is already contaminated with colonies protected by a sludge layer. Effective mitigation of established organisms requires complete removal of deposits and organisms, typically using some combination of pigging, blasting, chemical cleaning, and biocide treatment.</p>
    </div>
    <div class="subsection">
        <h4>3.45.7 Inspection and Monitoring</h4>
        <p>a) In cooling water systems, effectiveness of treatment is monitored by measuring biocide residual, microbe counts, and visual appearance of the water. Sampling and analysis can be performed to better understand the bacteria population (e.g. ATP, qPCR). While effective treatment and monitoring are key to identifying the potential for MIC, it still can occur in areas with stagnant flow. Also, the type of microorganisms being investigated should be identified to ensure proper incubation of water samples (e.g. using an appropriate temperature for incubation for thermophilic bacteria).</p>
        <p>b) Special probes have been designed to monitor for evidence of fouling that may precede or coincide with MIC damage. Corrosion coupons can be used to identify MIC by sampling the coupon surface after it is pulled from service; however, it should be noted that just because sessile bacteria populations are not found on the coupon, it does not mean they do not exist in the system.</p>
        <p>c) An increase in the loss of duty of a heat exchanger may be indicative of fouling and potential MIC damage. RFT can be performed to gauge depth of corrosion on heat exchanger tubes.</p>
        <p>d) Foul smelling water may indicate biological activity.</p>
        <p>e) MIC is often highly localized, so a technique that can find localized corrosion should be chosen, as applicable to the circumstances (e.g. VT, AUT, or RT).</p>
    </div>
    <div class="subsection">
        <h4>3.45.8 Related Mechanisms</h4>
        <p>Cooling water corrosion (3.20), brine corrosion (3.10), oxygenated water corrosion (3.49), and concentration cell corrosion (3.19).</p>
    </div>
    <div class="subsection">
        <h4>3.45.9 References</h4>
        <p>1. D.H. Pope and J.G. Stoecker, "Microbiologically Influenced Corrosion," Process Industries Corrosion—The Theory and Practice," NACE International, Houston, TX, 1986, pp. 227–242.</p>
        <p>2. T.J. Tvedt, Jr., "Cooling Water Systems," Corrosion Control in the Refining Industry, NACE Course Book, NACE International, Houston, TX, 1999.</p>
        <p>3. S.C. Dexter, "Biologically Induced Corrosion," NACE Proceedings of the International Conference on Biologically Induced Corrosion, June 10–12, 1985, NACE International, Houston, TX.</p>
        <p>4. B.J. Little and J.S. Lee, Microbiologically Influenced Corrosion, John Wiley & Sons, 2007.</p>
        <p>5. NACE TM0194, Field Monitoring of Bacterial Growth in Oil and Gas Systems, NACE International, Houston, TX.</p>
    </div>
    `,
    contentEs: `<h3>3.45 Corrosión Influenciada Microbiológicamente</h3>
    <div class="subsection">
        <h4>3.45.1 Descripción del Daño</h4>
        <p>Corrosión causada por organismos vivos como bacterias, algas u hongos. A menudo se asocia con la presencia de tubérculos o sustancias orgánicas viscosas. A menudo, las bacterias producen corrosión localizada en forma de picaduras o corrosión por rendija.</p>
    </div>
    <div class="subsection">
        <h4>3.45.2 Materiales Afectados</h4>
        <p>La mayoría de los materiales de construcción comunes, incluyendo aceros al carbono y aleados, aceros inoxidables de la serie 300 y 400, aleaciones de aluminio, aleaciones de cobre y algunas aleaciones de níquel. El titanio parece ser altamente resistente.</p>
    </div>
    <div class="subsection">
        <h4>3.45.3 Factores Críticos</h4>
        <p>a) La corrosión influenciada microbiológicamente (MIC) se encuentra en ambientes acuosos. Ocasionalmente se encuentra en servicios donde el agua está presente intermitentemente. Las condiciones estancadas o de bajo flujo permiten y/o promueven el crecimiento de microorganismos.</p>
        <p>b) Debido a que hay muchos tipos, los organismos pueden sobrevivir y crecer en una amplia gama de condiciones, incluyendo falta de oxígeno, luz u oscuridad, alta salinidad, rango de pH de 0 a 12, y temperaturas desde 0 °F hasta 235 °F (–15 °C a 115 °C).</p>
        <p>c) Los sistemas pueden "inocularse" mediante la introducción de organismos que se multiplican y propagan a menos que se controlen.</p>
        <p>d) Diferentes organismos prosperan con diferentes nutrientes, incluyendo sustancias inorgánicas (por ejemplo, azufre, amoníaco, hierro, compuestos de sulfato y H<sub>2</sub>S) y sustancias orgánicas (por ejemplo, hidrocarburos y ácidos orgánicos). Además, todos los organismos requieren una fuente de carbono, nitrógeno y fósforo para el crecimiento. La corrosión a menudo se atribuye a bacterias oxidantes de hierro o SRB. Sin embargo, estos organismos típicamente son solo parte de una colonia compleja de múltiples tipos de organismos interdependientes, cada uno capaz de crear subproductos que podrían ser una fuente de alimento para otros.</p>
        <p>e) La entrada de contaminantes del proceso como hidrocarburos o H<sub>2</sub>S puede llevar a un aumento masivo en la incrustación biológica y la corrosión.</p>
    </div>
    <div class="subsection">
        <h4>3.45.4 Unidades o Equipos Afectados</h4>
        <p>a) La MIC se encuentra a menudo en intercambiadores de calor enfriados por agua, en la capa de agua inferior de tanques de almacenamiento, en tuberías con flujo estancado o bajo y en tuberías en contacto con algunos suelos.</p>
        <ul>
            <li>Los tanques de almacenamiento de productos y los intercambiadores de calor enfriados por agua en cualquier unidad donde el agua de enfriamiento no está tratada adecuadamente pueden verse afectados.</li>
            <li>Las líneas de proceso estancadas con agua atrapada pueden sufrir de MIC.</li>
        </ul>
        <p>b) Los sistemas de drenaje y otros sistemas que contienen agua asociados con muelles e instalaciones de carga/descarga de barcos pueden experimentar MIC.</p>
        <p>c) La MIC se encuentra comúnmente en equipos donde el agua de prueba hidrostática no ha sido eliminada o donde los equipos han quedado expuestos al exterior sin protección. Los aceros inoxidables de la serie 300 a menudo se ven afectados a menos que se tomen medidas preventivas.</p>
        <p>d) Los sistemas de agua contra incendios pueden verse afectados.</p>
    </div>
    <div class="subsection">
        <h4>3.45.5 Apariencia o Morfología del Daño</h4>
        <p>a) La corrosión por MIC se observa frecuentemente como picaduras localizadas debajo de depósitos o tubérculos que protegen a los organismos. Los tubérculos también se forman en el acero al carbono expuesto al agua oxigenada, por lo que la presencia de tubérculos no garantiza la existencia de MIC.</p>
        <p>b) El daño a menudo se caracteriza por picaduras en forma de copa dentro de picaduras (el efecto halo) en el acero al carbono o cavidades subsuperficiales en el acero inoxidable. Sin embargo, estas picaduras a menudo son indistinguibles de la corrosión debajo de depósitos en el acero al carbono y las picaduras por cloruro en los aceros inoxidables. La morfología de las picaduras por sí sola puede no ser un indicador fiable de la causa de la corrosión.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-45-1—MIC en el fondo de un tanque de diésel.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-45-2—Corrosión por picaduras en el ID de una línea de crudo agrio de acero al carbono de 6 pulg. después de 2½ años de servicio. Las picaduras tienen aproximadamente de 1 a 2 pulg. de ancho. Nótese el efecto halo en la Figura 3-45-3.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-45-3—La misma tubería que en la Figura 3-45-2. Nótese el efecto halo.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-4.png" class="figure-image">
            <p class="figure-caption">Figura 3-45-4—Línea de aceite con daño por MIC debajo de tubérculos.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-5.png" class="figure-image">
            <p class="figure-caption">Figura 3-45-5—La misma línea de aceite que en la Figura 3-45-4. Se puede ver la picadura hemisférica típica de la MIC después de la limpieza con chorro de arena para eliminar las incrustaciones.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-6.png" class="figure-image">
            <p class="figure-caption">Figura 3-45-6—Tubos de intercambiador de acero inoxidable tipo 304 que fallaron por corrosión por picaduras en el lado del casco en servicio de agua de enfriamiento después de 2½ años sin tratamiento con biocida.</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-45-7.png" class="figure-image">
            <p class="figure-caption">Figura 3-45-7—Una sección transversal del tubo de la Figura 3-45-6 que revela un túnel subsuperficial severo, típico de la MIC.</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.45.6 Prevención/Mitigación</h4>
        <p>a) Los microbios requieren agua para prosperar. Los sistemas que contienen agua (agua de enfriamiento, tanques de almacenamiento, etc.) deben tratarse con biocidas como cloro, bromo, ozono, luz ultravioleta o compuestos patentados. A menudo, se necesitan múltiples biocidas para mantener los niveles de bacterias en los rangos apropiados.</p>
        <p>b) La aplicación adecuada de biocidas controlará, pero no eliminará, los microbios; por lo tanto, a menudo es necesario un tratamiento continuo.</p>
        <p>c) El enjuague y la limpieza periódica de los sistemas susceptibles ayudarán a minimizar el crecimiento de colonias y la MIC resultante.</p>
        <p>d) Minimizar las zonas de bajo flujo o estancadas en los sistemas que contienen agua. Una velocidad de flujo de 3 fps (1 m/s) inhibirá la formación de colonias y thereby minimizará la probabilidad de MIC.</p>
        <p>e) Las líneas deben tener una pendiente para ayudar al drenaje.</p>
        <p>f) Los sistemas que no están diseñados o destinados para contener agua deben mantenerse limpios y secos.</p>
        <p>g) Vaciar el agua de prueba hidrostática tan pronto como sea posible. Eliminar la humedad y prevenir la intrusión adicional de humedad.</p>
        <p>h) Se ha demostrado que el recubrimiento y la protección catódica de estructuras subterráneas e interiores de tanques de almacenamiento son métodos de mitigación efectivos para la MIC.</p>
        <p>i) Los biocidas generalmente no son efectivos en un sistema que ya está contaminado con colonias protegidas por una capa de lodos. La mitigación efectiva de organismos establecidos requiere la eliminación completa de depósitos y organismos, típicamente usando alguna combinación de limpieza con pig, chorro de arena, limpieza química y tratamiento con biocida.</p>
    </div>
    <div class="subsection">
        <h4>3.45.7 Inspección y Monitoreo</h4>
        <p>a) En los sistemas de agua de enfriamiento, la efectividad del tratamiento se monitorea midiendo el residuo de biocida, los recuentos de microbios y la apariencia visual del agua. Se pueden realizar muestreos y análisis para comprender mejor la población de bacterias (por ejemplo, ATP, qPCR). Si bien el tratamiento y monitoreo efectivos son clave para identificar el potencial de MIC, aún puede ocurrir en áreas con flujo estancado. Además, debe identificarse el tipo de microorganismos que se están investigando para asegurar una incubación adecuada de las muestras de agua (por ejemplo, usando una temperatura adecuada para la incubación de bacterias termófilas).</p>
        <p>b) Se han diseñado sondas especiales para monitorear evidencia de incrustaciones que pueden preceder o coincidir con el daño por MIC. Se pueden usar cupones de corrosión para identificar la MIC muestreando la superficie del cupón después de que se retira del servicio; sin embargo, debe tenerse en cuenta que solo porque no se encuentran poblaciones de bacterias sésiles en el cupón, no significa que no existan en el sistema.</p>
        <p>c) Un aumento en la pérdida de eficiencia de un intercambiador de calor puede ser indicativo de incrustaciones y posible daño por MIC. Se puede realizar RFT para evaluar la profundidad de la corrosión en los tubos del intercambiador de calor.</p>
        <p>d) El agua con mal olor puede indicar actividad biológica.</p>
        <p>e) La MIC a menudo es altamente localizada, por lo que debe elegirse una técnica que pueda encontrar corrosión localizada, según sea aplicable a las circunstancias (por ejemplo, VT, AUT o RT).</p>
    </div>
    <div class="subsection">
        <h4>3.45.8 Mecanismos Relacionados</h4>
        <p>Corrosión por agua de enfriamiento (3.20), corrosión por salmuera (3.10), corrosión por agua oxigenada (3.49) y corrosión por celda de concentración (3.19).</p>
    </div>
    <div class="subsection">
        <h4>3.45.9 Referencias</h4>
        <p>1. D.H. Pope y J.G. Stoecker, "Microbiologically Influenced Corrosion," Process Industries Corrosion—The Theory and Practice," NACE International, Houston, TX, 1986, pp. 227–242.</p>
        <p>2. T.J. Tvedt, Jr., "Cooling Water Systems," Corrosion Control in the Refining Industry, NACE Course Book, NACE International, Houston, TX, 1999.</p>
        <p>3. S.C. Dexter, "Biologically Induced Corrosion," NACE Proceedings of the International Conference on Biologically Induced Corrosion, June 10–12, 1985, NACE International, Houston, TX.</p>
        <p>4. B.J. Little y J.S. Lee, Microbiologically Influenced Corrosion, John Wiley & Sons, 2007.</p>
        <p>5. NACE TM0194, Field Monitoring of Bacterial Growth in Oil and Gas Systems, NACE International, Houston, TX.</p>
    </div>
    `
});