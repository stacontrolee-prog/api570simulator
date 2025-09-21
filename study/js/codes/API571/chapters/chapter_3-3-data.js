// Registrar el capítulo 3.3 de API 571
registerChapter('API571', {
    id: '3.3',
    title: "Amine Stress Corrosion Cracking",
    titleEs: "Agrietamiento por Corrosión bajo Tensión por Aminas",
    content: `<h3>3.3 Amine Stress Corrosion Cracking</h3>
    <div class="subsection">
        <h4>3.3.1 Description of Damage</h4>
        <p>a) Amine SCC (or amine cracking) is the cracking of steels under the combined action of tensile stress and an aqueous alkanolamine solution used to remove (absorb) H<sub>2</sub>S and/or CO<sub>2</sub> and their mixtures from various gas and liquid hydrocarbon streams.</p>
        <p>b) Amine cracking is a form of alkaline stress corrosion cracking (ASCC).</p>
        <p>c) It is most often found at or adjacent to non-postweld-heat-treated (non-PWHT'd) carbon steel welds or in highly cold worked parts.</p>
        <p>d) Amine cracking should not be confused with several other types of SCC that can occur in amine environments, which are further described in 3.66 and 3.12.</p>
    </div>
    <div class="subsection">
        <h4>3.3.2 Affected Materials</h4>
        <p>Carbon steel and low-alloy steels.</p>
    </div>
    <div class="subsection">
        <h4>3.3.3 Critical Factors</h4>
        <p>a) The critical factors are the level of tensile stress, the type of amine, and temperature.</p>
        <p>b) Increasing stress level increases the likelihood and severity of cracking. Cracking is most often associated with high residual stresses from welding or cold working that have not been removed by an effective stress relieving heat treatment.</p>
        <p>c) Cracking is more likely to occur in MEA and DEA services, but is also found in most amines including MDEA and DIPA (ADIP).</p>
        <p>d) Increasing temperature increases the likelihood and severity of cracking; however, cracking has been reported down to ambient temperatures with some amines, MEA in particular. Other than in special cases (such as where the steel component is completely clad or overlayed with stainless steel or other alloy and the welds are not exposed), PWHT is now commonly recommended for all lean amine systems (excluding fresh amine) at all operating temperatures, regardless of amine type. Some refiners also PWHT'd rich amine service equipment, whether for amine SCC resistance, wet H<sub>2</sub>S [SSC and stress-oriented hydrogen-induced cracking (SOHIC)] resistance, or both. Refer to API 945 for guidelines on PWHT for various amine services.</p>
        <p>e) Amine cracking is most often associated with lean amine services, where a solution of amine and water is used. The pure alkanolamine does not cause cracking. In rich amine services in H<sub>2</sub>S removal systems, the H<sub>2</sub>S helps form an iron sulfide (FeS) film on steel surfaces that helps impede amine SCC. Cracking in rich amine services is most often associated with wet H<sub>2</sub>S. (See 3.67.)</p>
        <p>f) Cracking can occur in non-PWHT'd piping and equipment as the result of exposure to steam out and to short term amine carryover. This is another reason PWHT (for stress relief) is now commonly recommended regardless of operating temperature.</p>
        <p>g) Amine concentration does not appear to have a significant effect on the propensity for cracking.</p>
    </div>
    <div class="subsection">
        <h4>3.3.4 Affected Units or Equipment</h4>
        <p>All non-PWHT'd carbon steel piping and equipment in amine service, including contactors, absorbers, strippers, filters, regenerators, and heat exchangers, as well as any equipment subject to amine carryover, are subject to cracking. Equipment in rich amine service is less susceptible than equipment in lean amine service, but not necessarily immune, especially vessels where acid gas is either entering the amine (making rich amine) or leaving the amine (making lean amine).</p>
    </div>
    <div class="subsection">
        <h4>3.3.5 Appearance or Morphology of Damage</h4>
        <p>a) Amine SCC cracks initiate on the (process side) surface of piping and equipment, primarily at welds. Cracks can appear in the HAZ and/or the weld metal but are most often found in the high residual stress zone, which is typically beyond the metallurgical HAZ, about a tenth of an inch or more (several millimeters) from the weld.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-1.png" class="figure-image">
            <p class="figure-caption">Figure 3-3-1—A photomicrograph of a cross section of a weld in non-PWHT'd carbon steel piping showing amine SCC in the vicinity of a piping weld. Magnification 6X (from API 945).</p>
        </div>
        
        <p>b) Cracking typically develops parallel to the weld, and there may be multiple parallel cracks. In weld metal, the cracks are either longitudinal or transverse to the weld.</p>
        <p>c) At set-on nozzles, the cracks are radial in the base metal, i.e. they fan out from the bore.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-2.png" class="figure-image">
            <p class="figure-caption">Figure 3-3-2—Radial amine SCC cracks emanating from the bore of a nozzle in a rich amine reboiler exchanger.</p>
        </div>
        
        <p>d) At set-in nozzles, the cracks are usually parallel to the weld.</p>
        <p>e) The appearance of the cracks on the surface may be similar to those caused by wet H<sub>2</sub>S cracking.</p>
        <p>f) Because residual stress is a driving force for cracking, cracks can occur on the process side opposite external attachment welds.</p>
        <p>g) Positive identification of amine cracking can be confirmed by metallographic analysis. The cracking is typically intergranular and oxide filled with some branching.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-3.png" class="figure-image">
            <p class="figure-caption">Figure 3-3-3—A higher-magnification view of the crack tip in Figure 3-3-1. Magnification 200X (from API 945).</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-4.png" class="figure-image">
            <p class="figure-caption">Figure 3-3-4—A photomicrograph of a cross section of a carbon steel piping weld showing amine SCC in a section of the line from the MEA absorber column normally operated at 100 °F (38 °C). Magnification 6X (from API 945).</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-5.png" class="figure-image">
            <p class="figure-caption">Figure 3-3-5—A higher-magnification view of the cracks in Figure 3-3-4, which illustrates the intergranular nature of the cracking. Magnification 200X (from API 945).</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.3.6 Prevention/Mitigation</h4>
        <p>a) Carbon steel welds in piping and equipment should be stress relieved in accordance with API 945 and NACE SP0472. The recommended minimum stress-relief temperature is 1175 ± 25 °F (635 ± 15 °C). The same recommendation applies to repair welds and to internal and external attachment welds.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-6.png" class="figure-image">
            <p class="figure-caption">Figure 3-3-6—Amine SCC developed on the inside diameter (ID) beneath an arc strike on the outside diameter (OD) of a 3-in. line in 20 % MEA. The original line was PWHT'd during original fabrication but not the arc strike. Leaks occurred after 30 years of service.</p>
        </div>
        
        <p>For local PWHT, recommended heat treatment band width is listed in NACE SP0472 with reference to WRC 452.</p>
        <p>b) Consider using solid or clad stainless steel or other corrosion-resistant alloys in lieu of carbon steel.</p>
        <p>c) Thoroughly water wash non-PWHT'd carbon steel piping and equipment prior to welding, heat treatment, or steam out.</p>
    </div>
    <div class="subsection">
        <h4>3.3.7 Inspection and Monitoring</h4>
        <p>a) Wet fluorescent magnetic particle testing (WFMT), alternating current field measurement (ACFM), and eddy current testing (ECT) can be effective techniques to detect these surface-breaking cracks. Proper surface preparation by grit blasting, high-pressure water blasting, flapper wheel abrasive grinding, or other method is required to remove scale and contaminants. The method of surface preparation is dependent upon the specific technique.</p>
        <p>b) Angle beam [shear wave ultrasonic testing (SWUT) and phased array ultrasonic testing (PAUT)] ultrasonic techniques can be effective to detect and size cracks and would be the methods typically used for piping; however, caution must be exercised when interpreting results on piping welds that have not previously been inspected with angle beam UT (SWUT or PAUT) as it may be difficult to distinguish SCC from original fabrication flaws. SWUT and PAUT can also be used to periodically monitor crack growth.</p>
        <p>c) Liquid penetrant testing (PT) may be used but should not be the only means of detection. PT may not be effective in finding tight cracks because the cracks are oxide filled.</p>
        <p>d) RT may not be effective in detecting fine, tight cracks.</p>
        <p>e) Acoustic emission testing (AET) can be used for locating cracks and monitoring crack growth.</p>
    </div>
    <div class="subsection">
        <h4>3.3.8 Related Mechanisms</h4>
        <p>Caustic SCC (3.15) and carbonate SCC (3.12) are other forms of ASCC that are similar in appearance. Ammonia SCC of carbon steel (3.4) is also similar in appearance.</p>
    </div>
    <div class="subsection">
        <h4>3.3.9 References</h4>
        <p>1. API Recommended Practice 945, Avoiding Environmental Cracking in Amine Units, American Petroleum Institute, Washington, DC.</p>
        <p>2. "Fitness-For-Service Evaluation Procedures for Operating Pressure Vessels, Tanks, and Piping in Refinery and Chemical Service," Materials Properties Council, FS-26, Draft No. 5, Consultants Report, NY, 1995.</p>
        <p>3. J. Gutzeit and J.M. Johnson, "Stress Corrosion Cracking of Carbon Steel Welds in Amine Service," Materials Performance, Vol. 25, No. 7, 1986, p.18.</p>
        <p>4. J.P. Richert et al., "Stress Corrosion Cracking of Carbon Steel in Amine Systems," Paper No. 187, Corrosion/87, NACE International, Houston, TX.</p>
        <p>5. A. Bagdasarian et al., "Stress Corrosion Cracking of Carbon Steel in DEA and ADIP Solutions," Materials Performance, 1991, pp. 63–67.</p>
        <p>6. NACE SP0472, Methods and Controls to Prevent In-service Environmental Cracking of Carbon Steel Weldments in Corrosive Petroleum Refining Environments, NACE International, Houston, TX.</p>
        <p>7. WRC Bulletin 452, Recommended Practices for Local Heating of Welds in Pressure Vessels, Welding Research Council, Shaker Heights, OH, June 2000.</p>
    </div>
    `,
    contentEs: `<h3>3.3 Agrietamiento por Corrosión bajo Tensión por Aminas</h3>
    <div class="subsection">
        <h4>3.3.1 Descripción del Daño</h4>
        <p>a) El SCC por aminas (o agrietamiento por aminas) es el agrietamiento de los aceros bajo la acción combinada de esfuerzo de tensión y una solución acuosa de alcanolamina utilizada para eliminar (absorber) H<sub>2</sub>S y/o CO<sub>2</sub> y sus mezclas de varias corrientes de hidrocarburos gaseosos y líquidos.</p>
        <p>b) El agrietamiento por aminas es una forma de agrietamiento por corrosión bajo tensión alcalina (ASCC).</p>
        <p>c) Se encuentra con mayor frecuencia en o adyacente a soldaduras de acero al carbono sin tratamiento térmico postsoldadura (sin PWHT) o en partes altamente trabajadas en frío.</p>
        <p>d) El agrietamiento por aminas no debe confundirse con varios otros tipos de SCC que pueden ocurrir en ambientes de aminas, que se describen adicionalmente en 3.66 y 3.12.</p>
    </div>
    <div class="subsection">
        <h4>3.3.2 Materiales Afectados</h4>
        <p>Acero al carbono y aceros de baja aleación.</p>
    </div>
    <div class="subsection">
        <h4>3.3.3 Factores Críticos</h4>
        <p>a) Los factores críticos son el nivel de esfuerzo de tensión, el tipo de amina y la temperatura.</p>
        <p>b) El aumento del nivel de esfuerzo aumenta la probabilidad y severidad del agrietamiento. El agrietamiento se asocia con mayor frecuencia a altos esfuerzos residuales de la soldadura o trabajo en frío que no han sido eliminados por un tratamiento térmico de alivio de esfuerzos efectivo.</p>
        <p>c) Es más probable que ocurra agrietamiento en servicios de MEA y DEA, pero también se encuentra en la mayoría de las aminas, incluyendo MDEA y DIPA (ADIP).</p>
        <p>d) El aumento de la temperatura aumenta la probabilidad y severidad del agrietamiento; sin embargo, se ha reportado agrietamiento hasta temperaturas ambiente con algunas aminas, particularmente MEA. Además de en casos especiales (como cuando el componente de acero está completamente revestido o sobrepuesto con acero inoxidable u otra aleación y las soldaduras no están expuestas), ahora se recomienda comúnmente PWHT para todos los sistemas de amina pobre (excluyendo amina fresca) a todas las temperaturas de operación, independientemente del tipo de amina. Algunas refinerías también aplican PWHT a equipos en servicio de amina rica, ya sea para resistencia al SCC por aminas, resistencia al H<sub>2</sub>S húmedo [SCC y agrietamiento inducido por hidrógeno orientado por esfuerzos (SOHIC)], o ambos. Consulte API 945 para obtener pautas sobre PWHT para varios servicios de aminas.</p>
        <p>e) El agrietamiento por aminas se asocia con mayor frecuencia a servicios de amina pobre, donde se utiliza una solución de amina y agua. La alcanolamina pura no causa agrietamiento. En servicios de amina rica en sistemas de eliminación de H<sub>2</sub>S, el H<sub>2</sub>S ayuda a formar una película de sulfuro de hierro (FeS) en las superficies de acero que ayuda a impedir el SCC por aminas. El agrietamiento en servicios de amina rica se asocia con mayor frecuencia al H<sub>2</sub>S húmedo. (Véase 3.67.)</p>
        <p>f) Puede ocurrir agrietamiento en tuberías y equipos sin PWHT como resultado de la exposición a purga con vapor y a arrastre de aminas a corto plazo. Esta es otra razón por la que ahora se recomienda comúnmente PWHT (para alivio de esfuerzos) independientemente de la temperatura de operación.</p>
        <p>g) La concentración de amina no parece tener un efecto significativo en la propensión al agrietamiento.</p>
    </div>
    <div class="subsection">
        <h4>3.3.4 Unidades o Equipos Afectados</h4>
        <p>Toda la tubería y equipos de acero al carbono sin PWHT en servicio de aminas, incluyendo contactores, absorbedores, strippers, filtros, regeneradores e intercambiadores de calor, así como cualquier equipo sujeto a arrastre de aminas, están sujetos a agrietamiento. Los equipos en servicio de amina rica son menos susceptibles que los equipos en servicio de amina pobre, pero no necesariamente inmunes, especialmente recipientes donde el gas ácido está entrando a la amina (formando amina rica) o saliendo de la amina (formando amina pobre).</p>
    </div>
    <div class="subsection">
        <h4>3.3.5 Apariencia o Morfología del Daño</h4>
        <p>a) Las grietas de SCC por aminas se inician en la superficie (lado del proceso) de tuberías y equipos, principalmente en soldaduras. Las grietas pueden aparecer en la ZAC y/o el metal de soldadura, pero se encuentran con mayor frecuencia en la zona de alto esfuerzo residual, que típicamente está más allá de la ZAC metalúrgica, a aproximadamente una décima de pulgada o más (varios milímetros) de la soldadura.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-1.png" class="figure-image">
            <p class="figure-caption">Figura 3-3-1—Fotomicrografía de una sección transversal de una soldadura en tubería de acero al carbono sin PWHT que muestra SCC por aminas en las proximidades de una soldadura de tubería. Ampliación 6X (de API 945).</p>
        </div>
        
        <p>b) El agrietamiento típicamente se desarrolla paralelo a la soldadura, y puede haber múltiples grietas paralelas. En el metal de soldadura, las grietas son longitudinales o transversales a la soldadura.</p>
        <p>c) En boquillas de tipo set-on, las grietas son radiales en el metal base, es decir, se extienden desde el diámetro interior.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-2.png" class="figure-image">
            <p class="figure-caption">Figura 3-3-2—Grietas radiales de SCC por aminas que se extienden desde el diámetro interior de una boquilla en un intercambiador de rehervidor de amina rica.</p>
        </div>
        
        <p>d) En boquillas de tipo set-in, las grietas son usualmente paralelas a la soldadura.</p>
        <p>e) La apariencia de las grietas en la superficie puede ser similar a las causadas por agrietamiento por H<sub>2</sub>S húmedo.</p>
        <p>f) Debido a que el esfuerzo residual es una fuerza impulsora del agrietamiento, pueden ocurrir grietas en el lado del proceso opuesto a soldaduras de accesorios externos.</p>
        <p>g) La identificación positiva del agrietamiento por aminas puede confirmarse mediante análisis metalográfico. El agrietamiento es típicamente intergranular y lleno de óxido con alguna ramificación.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-3.png" class="figure-image">
            <p class="figure-caption">Figura 3-3-3—Vista de mayor ampliación de la punta de la grieta en la Figura 3-3-1. Ampliación 200X (de API 945).</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-4.png" class="figure-image">
            <p class="figure-caption">Figura 3-3-4—Fotomicrografía de una sección transversal de una soldadura de tubería de acero al carbono que muestra SCC por aminas en una sección de la línea de la columna de absorbedor de MEA normalmente operada a 100 °F (38 °C). Ampliación 6X (de API 945).</p>
        </div>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-5.png" class="figure-image">
            <p class="figure-caption">Figura 3-3-5—Vista de mayor ampliación de las grietas en la Figura 3-3-4, que ilustra la naturaleza intergranular del agrietamiento. Ampliación 200X (de API 945).</p>
        </div>
    </div>
    <div class="subsection">
        <h4>3.3.6 Prevención/Mitigación</h4>
        <p>a) Las soldaduras de acero al carbono en tuberías y equipos deben ser aliviadas de esfuerzos de acuerdo con API 945 y NACE SP0472. La temperatura mínima recomendada de alivio de esfuerzos es 1175 ± 25 °F (635 ± 15 °C). La misma recomendación se aplica a soldaduras de reparación y a soldaduras de accesorios internos y externos.</p>
        
        <div class="figure-container">
            <img src="images/api571_figure_3-3-6.png" class="figure-image">
            <p class="figure-caption">Figura 3-3-6—SCC por aminas desarrollado en el diámetro interior (ID) debajo de un arco eléctrico en el diámetro exterior (OD) de una línea de 3 pulgadas en 20 % de MEA. La línea original fue PWHT'd durante la fabricación original pero no el arco eléctrico. Ocurrieron fugas después de 30 años de servicio.</p>
        </div>
        
        <p>Para PWHT local, el ancho de banda de tratamiento térmico recomendado se lista en NACE SP0472 con referencia a WRC 452.</p>
        <p>b) Considere el uso de acero inoxidable sólido o revestido u otras aleaciones resistentes a la corrosión en lugar de acero al carbono.</p>
        <p>c) Lave a fondo con agua las tuberías y equipos de acero al carbono sin PWHT antes de soldar, tratamiento térmico o purga con vapor.</p>
    </div>
    <div class="subsection">
        <h4>3.3.7 Inspección y Monitoreo</h4>
        <p>a) La prueba de partículas magnéticas fluorescentes húmedas (WFMT), la medición de campo de corriente alterna (ACFM) y la prueba de corriente de Foucault (ECT) pueden ser técnicas efectivas para detectar estas grietas que llegan a la superficie. Se requiere una preparación adecuada de la superficie mediante chorro de arena, chorro de agua a alta presión, molienda abrasiva con rueda de aletas u otro método para eliminar incrustaciones y contaminantes. El método de preparación de la superficie depende de la técnica específica.</p>
        <p>b) Las técnicas ultrasónicas de haz angular [prueba ultrasónica de onda cortante (SWUT) y prueba ultrasónica de arreglo faseado (PAUT)] pueden ser efectivas para detectar y dimensionar grietas y serían los métodos típicamente utilizados para tuberías; sin embargo, debe tenerse precaución al interpretar resultados en soldaduras de tuberías que no han sido inspeccionadas previamente con UT de haz angular (SWUT o PAUT) ya que puede ser difícil distinguir el SCC de defectos originales de fabricación. SWUT y PAUT también pueden usarse para monitorear periódicamente el crecimiento de grietas.</p>
        <p>c) La prueba de líquidos penetrantes (PT) puede usarse pero no debe ser el único medio de detección. PT puede no ser efectiva para encontrar grietas estrechas porque las grietas están llenas de óxido.</p>
        <p>d) RT puede no ser efectiva para detectar grietas finas y estrechas.</p>
        <p>e) La prueba de emisión acústica (AET) puede usarse para localizar grietas y monitorear el crecimiento de grietas.</p>
    </div>
    <div class="subsection">
        <h4>3.3.8 Mecanismos Relacionados</h4>
        <p>El SCC cáustico (3.15) y el SCC por carbonato (3.12) son otras formas de ASCC que son similares en apariencia. El SCC por amoníaco del acero al carbono (3.4) también es similar en apariencia.</p>
    </div>
    <div class="subsection">
        <h4>3.3.9 Referencias</h4>
        <p>1. API Recommended Practice 945, Avoiding Environmental Cracking in Amine Units, American Petroleum Institute, Washington, DC.</p>
        <p>2. "Fitness-For-Service Evaluation Procedures for Operating Pressure Vessels, Tanks, and Piping in Refinery and Chemical Service," Materials Properties Council, FS-26, Draft No. 5, Consultants Report, NY, 1995.</p>
        <p>3. J. Gutzeit y J.M. Johnson, "Stress Corrosion Cracking of Carbon Steel Welds in Amine Service," Materials Performance, Vol. 25, No. 7, 1986, p.18.</p>
        <p>4. J.P. Richert et al., "Stress Corrosion Cracking of Carbon Steel in Amine Systems," Paper No. 187, Corrosion/87, NACE International, Houston, TX.</p>
        <p>5. A. Bagdasarian et al., "Stress Corrosion Cracking of Carbon Steel in DEA and ADIP Solutions," Materials Performance, 1991, pp. 63–67.</p>
        <p>6. NACE SP0472, Methods and Controls to Prevent In-service Environmental Cracking of Carbon Steel Weldments in Corrosive Petroleum Refining Environments, NACE International, Houston, TX.</p>
        <p>7. WRC Bulletin 452, Recommended Practices for Local Heating of Welds in Pressure Vessels, Welding Research Council, Shaker Heights, OH, June 2000.</p>
    </div>
    `
});