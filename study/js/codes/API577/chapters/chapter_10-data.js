// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 10 para API 577
registerChapter('API577', {
    id: 10,
    title: "Metallurgy",
    titleEs: "Metalurgia",
    content: `<h2>10 Metallurgy</h2>
    <h3>10.1 General</h3>
    <p>A general understanding of the major principles is important to the inspector, due to the wide variety of base metals that may be joined by welding during the repair of equipment, and the significant impact on the metals resulting from the welding process. The welding process can affect both the mechanical properties and the corrosion resistance properties of the weldment. This section is designed to provide an awareness of metallurgical effects important to personnel performing inspections, but is not to be considered an in-depth resource of metallurgy.</p>
    <p>Based on the concept that this section provides a basic understanding, this section does not describe all aspects of metallurgy such as crystalline structures of materials and atomic configurations, which are left to other more complete metallurgy texts.</p>
    
    <h3>10.2 Structure of Metals and Alloys</h3>
    <h4>10.2.1 General</h4>
    <p>Metals are crystalline in nature and have a structure in which the atoms of each crystal are arranged in a specific geometric pattern based upon several factors including material type/grade and heat treatment condition. The physical properties of metallic materials including strength, ductility, and toughness can be attributed to the chemical make-up and orderly arrangement of these atoms.</p>
    <p>Metals in molten or liquid states have no orderly arrangement to the atoms contained in the melt. As the melt cools, a temperature is reached at which clusters of atoms bond with each other and start to solidify, developing into solid crystals within the melt. The individual crystals of pure metal are identical except for their orientation and are called grains. As the temperature is reduced further, these crystals change in form, eventually touch, and where the grains touch, an irregular transition layer of atoms is formed, called the grain boundary. Eventually, the entire melt solidifies, interlocking the grains into a solid metallic structure called a casting.</p>
    <p>Knowledge of cast structures is important since the welding process is somewhat akin to making a casting in a foundry. Because of the similarity in the shape of its grains, a weld can be considered a small casting. A solidified weld may have a structure that looks very much like that of a cast piece of equipment. However, the thermal conditions that are experienced during welding produce a cast structure with characteristics both beneficial and deleterious, unique to welding.</p>
    
    <h4>10.2.2 Castings</h4>
    <p>Since the structure of a completed weld is akin to a casting, it is important to review the nature of castings. The overall arrangement of the grains, grain boundaries, and phases present in the casting is called the microstructure of the metal. Microstructure is an area of specialty that inspectors should understand, as it is largely responsible for the physical and mechanical properties of the metal. Because castings used in the refinery industry are typically alloyed, they typically contain several microstructural phases. A phase is any structure that is physically and compositionally distinct. As the chemical composition is altered or temperature changed, new phases may form or existing phases may disappear.</p>
    <p>Cast structures, depending on their chemical composition, can exhibit a wide range of mechanical properties for several reasons. In general, it is desirable to keep the size of grains small, which improves strength and toughness. This can be achieved by maximizing the cooling rate or minimizing the heat input (in the case of welding). This increases the rate of crystal formation and decreases the time available for crystal growth, which has a net effect of reducing crystalline grain size.</p>
    <p>The properties of the cast structure can also be impaired by compositional variations in the microstructure called segregation. Because of the solubility of trace and alloying elements, such elements as carbon, sulfur, and phosphorous can vary in a pure metal; these elements can cause variations in the solidification temperature of different microstructural phases within the melt. As the melt cools, these elements are eventually contained in the microstructural phases that solidify last in spaces between the grains. These grain boundary regions can have a much higher percentage of trace elements than the grains themselves, which may lead to reductions in ductility and strength properties. This effect can be minimized by using high-purity melting stocks, by special melting practices (melting under vacuum or inert gas, for example) to minimize contamination and/or subsequent heat treatment to homogenize the structure. In many carbon steels, this is achieved using oxygen scavengers such as aluminum, silicon, or silicon plus aluminum, and the steels are often described as "killed" or "fully killed" steels. Minimizing trace elements or "inclusions" at this stage is often important as they can provide sites for formation of in-service defects such as hydrogen-assisted cracking.</p>
    <p>Gases such as hydrogen which become entrapped in the melt as it solidifies can also affect the casting's integrity. In some cases, these gases create voids or porosity in the structure, or can lead to cracking. Weldments are particularly prone to cracking because of trapped hydrogen gases. This problem can be avoided by careful cleaning of the weld bevels to remove hydrocarbons and moisture, the use of low-hydrogen electrodes, correct storage or baking of electrodes, and use of proper purging techniques with high-quality welding gases.</p>
    <p>For refinery applications, castings are used primarily for components having complex shapes in order to minimize the amount of machining required. These include pump components (casings, impellers, and stuffing boxes) and valve bodies.</p>
    
    <h4>10.2.3 Wrought Materials</h4>
    <p>The majority of metallic materials used for the fabrication of refinery and chemical plant equipment are used in the wrought form rather than cast. Mechanical working of the cast ingot produces wrought materials by processes such as rolling, forging, or extrusion, which are normally performed at an elevated temperature. These processes result in a microstructure that has a uniform composition and a smaller, more uniform grain shape.</p>
    <p>Wrought materials may consist of one or more microstructural phases that may have different grain structures. Austenitic stainless steels, for example, are composed of microstructural phases call austenite, which have grains of the same crystal structure. Many nickel, aluminum, titanium, and copper alloys are also single-phase materials. Single-phase materials are often strengthened by the addition of alloying elements that lead to the formation of nonmetallic or intermetallic precipitates. The addition of carbon to austenitic stainless steels, for example, leads to the formation of very small iron and chromium carbide precipitates in the grains and at grain boundaries. The effect of these precipitates is to strengthen the alloy. However, the formation of chromium carbide precipitates on the grain boundaries during welding (or other high-temperature exposure) depletes the area adjacent to the grain boundaries of chromium. This microstructure in austenitic stainless steel is referred to as a "sensitized microstructure." As a result, the chromium-depleted area adjacent to the grain boundary may experience severe intergranular corrosion. In general, greater strengthening occurs with the finer distribution of precipitates. This effect is usually dependent on temperature; at elevated temperatures, the precipitates begin to break down and the strengthening effect is lost.</p>
    <p>Alloys may also consist of more than one microstructural phase and crystal structure. A number of copper alloys including some brasses are composed of two distinct phases. Plain carbon steel is also a two-phase alloy. One phase is a relatively pure form of iron called ferrite. By itself, ferrite is a weak material. With the addition of more than 0.06 % carbon, a second phase called pearlite is formed which adds strength to steel. Pearlite is a lamellar (i.e. plate-like) mixture of ferrite and Fe3C iron carbide.</p>
    <p>As a result of fast cooling such as quenching in nonalloyed steels and also with the addition of alloying elements such as chromium to steel, other phases may form. Rather than pearlite, phases such as bainite or martensite may be produced. These phases tend to increase the strength and hardness of the metal with some loss of ductility. The formation of structures such as bainite and martensite may also be the result of rapid or controlled cooling and reheating within certain temperature ranges often termed "quenching" and "tempering." With certain exceptions, such as hard facing products, bainite and martensite structures are not considered desirable.</p>
    
    <h4>10.2.4 Welding Metallurgy</h4>
    <p>Welding metallurgy is concerned with melting, solidification, gas–metal reactions, slag–metal reactions, surface phenomena, and base metal reactions. These reactions occur rapidly during welding due to the rapid changes in temperature caused by the welding process. This is in contrast to metallurgy of castings, which tends to be slower and often more controlled. There are three parts of a weld: the weld metal, heat-affected metal (zone), and base metal. The metallurgy of each area is related to the composition of the base and weld metal, the welding process, and welding procedures used.</p>
    <p>Most typical weld metals are rapidly solidified and, like the structure of a casting described earlier, usually solidify in the same manner as a casting and have a fine-grain dendritic microstructure. The solidified weld metal is a mixture of melted base metal and deposited weld filler metal, if used. In most welds, there also can be some segregation of alloy elements. The amount of segregation is determined by the chemical composition of the weld and the base metal. Consequently, the weld is less homogeneous than the base metal, which can negatively affect the mechanical properties of the weld.</p>
    <p>The HAZ is adjacent to the weld and is that portion of the base metal that has not been melted, but whose mechanical properties or microstructure have been altered by the heat of welding. There typically is a change in grain size or grain structure and hardness in the HAZ of steel. The size or width of the HAZ is dependent on the heat input used during welding. For carbon steels, the HAZ includes those regions heated to greater than 1350 °F (730 °C). Each weld pass applied has its own HAZ and the overlapping heat-affected zones extend through the full thickness of the plate or part welded.</p>
    <p>The third component in a welded joint is the base metal. Most of the common carbon and low-alloy steels used for tanks and pressure vessels are weldable. The primary factor affecting the weldability of a base metal is its chemical composition and carbon content of carbon steels. Each type of metal has welding procedural limits within which sound welds with satisfactory mechanical properties can be made. If these limits are wide, the metal is said to have good weldability, and if the limits are narrow, the metal is said to have poor weldability.</p>
    <p>A significant aspect of welding metallurgy is the gas–metal reaction between the molten weld metal and gases present during welding. Gas–metal reactions depend on the presence of oxygen, hydrogen, or nitrogen, individually or combined in the shielding atmosphere. Oxygen can be drawn in from the atmosphere or occur from the dissociation of water vapor, carbon dioxide, or metal oxide. Air is the most common source of nitrogen, but it can also be used as a shielding gas for welding of austenitic or duplex stainless steels. There are many sources of hydrogen. In SMAW or SAW, hydrogen may be present as water in the electrode coating or loose flux. Hydrogen can also come from lubricants, water on the work piece, surface oxides, contaminated filler metal, or humidity or rain.</p>
    <p>An important factor in selecting shielding gases is the type of mixture. A reactive gas such as carbon dioxide can break down at arc temperatures into carbon and oxygen. This is not generally a problem on carbon and low-alloy steels. However, on high-alloy and reactive metals, this can cause an increase in carbon content and the formation of oxides that can lower the corrosion-resistant properties of the weld. High-alloy materials welded with gas-shielded processes usually employ inert shielding gases or mixtures with only slight additions of reactive gases to promote arc stability.</p>
    
    <h3>10.3 Physical Properties</h3>
    <h4>10.3.1 General</h4>
    <p>The physical properties of base metals, filler metals, and alloys being joined can have an influence on the efficiency and applicability of a welding process. The nature and properties of gas shielding provided by the decomposition of fluxing materials or the direct introduction of shielding gases used to protect the weldment from atmospheric contamination can have a pronounced effect on its ability to provide adequate shielding and on the final chemical and mechanical properties of a weldment.</p>
    <p>The physical properties of a metal or alloy are those which are relatively insensitive to structure and can be measured without the application of force. Examples of physical properties of a metal are the melting temperature, the thermal conductivity, electrical conductivity, the coefficient of thermal expansion, and density.</p>
    
    <h4>10.3.2 Melting Temperature</h4>
    <p>The melting temperature of different metals is important to know because the higher the melting point, the greater the amount of heat that is needed to melt a given volume of metal. This is seldom a problem in arc welding since the arc temperatures far exceed the melting temperatures of carbon and low-alloy steels. The welder simply increases the amperage to get more heat, thus controlling the volume of weld metal melted per unit length of weld at a given voltage or arc length and travel speed.</p>
    <p>A pure metal has a definite, specific melting temperature that is just above its solidification temperature. However, complete melting of alloyed materials occurs over a range of temperatures, depending primarily upon the percentages of alloying elements. Alloyed metals start to melt at a temperature which is just above its solidus temperature, and, because they may contain different metallurgical phases, melting continues as the temperature increases until it reaches its liquidus temperature.</p>
    
    <h4>10.3.3 Thermal Conductivity</h4>
    <p>The thermal conductivity of a material is the rate at which heat is transmitted through a material by conduction or thermal transmittance. In general, metals with high electrical conductivity also have high thermal conductivity. Materials with high thermal conductivity require higher heat inputs to weld than those with lower thermal conductivity and may require a preheat. Steel is a poor conductor of heat as compared with aluminum or copper. As a result, it takes less heat to melt steel. Aluminum is a good conductor of heat and has the ability to transfer heat efficiently. This ability of aluminum to transfer heat so efficiently also makes it more difficult to weld with low-temperature heat sources.</p>
    <p>The thermal conductivity of a material decreases as temperatures increase. The alloying of pure metals also decreases a material's thermal conductivity. Generally, a material that contains substantial alloying elements would have a resultant lower thermal conductivity, and lower heat inputs are required to raise the material to a desired temperature.</p>
    
    <h4>10.3.4 Electrical Conductivity</h4>
    <p>The electrical conductivity of a material is a measure of its efficiency while conducting electrical current. Metals are good conductors of electricity. Metals that have high electrical conductivity are more efficient in conducting electrical current than those with low electrical conductivity.</p>
    <p>Aluminum and copper have high electrical conductivity as compared to iron and steel. Their electrical resistance is also much lower, and as a result, less heat is generated in the process of carrying an electrical current. This is one of the reasons that copper and aluminum are used in electric wiring and cables.</p>
    <p>The ability of steel to carry an electrical current is much less efficient and more heat is produced by its high measure of electrical resistance. Accordingly, steel can be heated with lower heat inputs than that required for aluminum or copper because of its lower measure of electrical conductivity and higher electrical resistance.</p>
    
    <h4>10.3.5 Coefficient of Thermal Expansion</h4>
    <p>As metals are heated, there is an increase in volume. This increase is measured in linear dimensions as the temperature is increased. This linear increase with increased temperature, per degree, is expressed as the coefficient of thermal expansion. An example of this would be the increased length of a steel bar that has been heated in its middle with an oxyfuel torch. As the bar is heated, there is a measurable increase in length that correlates to the temperature and the specified coefficient of thermal expansion for the material at that temperature. This coefficient of thermal expansion may not be constant throughout a given temperature range because of the phase changes that a material experiences at different temperatures and the increases or decreases in volume that accompany these phase changes.</p>
    <p>Metals with a high coefficient of thermal expansion are much more susceptible to warping and distortion during welding. The increases in length and shrinkage that accompany the heating and cooling during welding should be anticipated, and procedures established that would ensure that proper tolerances are used to minimize the effects of thermal conditions. The joining of metals whose coefficients of thermal expansion differ greatly can also contribute to thermal fatigue conditions, and result in a premature failure of the component. Welding procedures are often employed that specify special filler metals that minimize the adverse effects caused by inherent differences between the metals being joined. Additional controls include avoidance of excessive restraint during welding and PWHT to relieve the residual stresses generated during the welding process.</p>
    
    <h4>10.3.6 Density</h4>
    <p>The density of a material is defined as its mass per unit volume. Castings, and therefore welds, are usually less dense than a wrought material of similar composition. Castings and welds contain porosity and inclusions that produce a metal of lower density. This is an important factor employed during RT of welded joints.</p>
    <p>The density of a metal is important to a designer, but more important to the welder is the density of shielding gases. A gas with a higher density is more efficient as a shielding gas than one of a lower density as it protects the weld environment longer before dispersion.</p>
    
    <h3>10.4 Mechanical Properties</h3>
    <h4>10.4.1 General</h4>
    <p>The mechanical properties of base metals, filler metals, and completed welds are of major importance in the consideration of the design and integrity of welded structures and components. Engineers select materials of construction that provide the required material properties at operating temperatures and pressures. For the inspector, verification that mechanical properties meet the design requirements is essential. Inspectors should understand the underlying principles of mechanical properties and the nature of tests conducted to verify the value of those properties. This is one of the fundamental principles of performing welding procedure qualification tests. Examples of mechanical properties of metals and alloys are the tensile strength, yield strength, ductility, hardness, and toughness.</p>
    
    <h4>10.4.2 Tensile and Yield Strength</h4>
    <p>Tensile testing is used to determine a metal's ultimate tensile strength, yield strength, and elongation and reduction in area. A tensile test is performed by pulling a test specimen to failure with increasing load.</p>
    <p>Stress is defined as the force acting in a given region of the metal when an external load is applied. The nominal stress of a metal is equal to the tensile strength. The ultimate tensile strength of a metal is determined by dividing the external load applied by the cross-sectional area of the tensile specimen.</p>
    <p>Strain is defined as the amount of deformation, or change in shape, that a specimen has experienced when stressed. Strain is expressed as the length of elongation divided by the original length of the specimen prior to being stressed.</p>
    <p>When the specimen is subjected to small stresses, the strain is directly proportional to stress. This continues until the yield point of the material is reached. If the stress were removed prior to reaching the yield point of the metal, the specimen should return to its original length, and this is considered elastic deformation. However, stress applied above the yield point produces a permanent increase in specimen length and the yielding is considered plastic deformation. Continued stress may result in some work hardening (strength increase of a material via plastic deformation) with an increase in the specimen strength. Uniform elongation will continue, and the elongation will begin to concentrate in one localized region within the gauge length, as does the reduction in the diameter of the specimen. The test specimen is said to begin to "neck down." The necking down continues until the specimen can no longer resist the stress and the specimen separates or fractures. The stress at which this occurs is called the ultimate tensile strength.</p>
    <p>For design purposes, the maximum usefulness should be based on the yield strength of a material, as this is considered the elastic/plastic zone for a material, rather than only on the ultimate tensile strength or fracture strength of a material.</p>
    
    <h4>10.4.3 Ductility</h4>
    <p>In tensile testing, ductility is defined as the ability of a material to deform plastically without fracturing, measured by elongation or reduction of area.</p>
    <p>Elongation is the increase in gauge length, measured after fracture of the specimen within the gauge length, usually expressed as a percentage of the original gauge length. A material's ductility, when subjected to increasing tensile loads, can be helpful to the designer for determining the extent to which a metal can be deformed without fracture in metalworking operations such as rolling and extrusion, or during service conditions.</p>
    <p>The tensile specimen is punch marked twice in the central section of the specimen, this distance is measured, and the diameter of the reduced area prior to subjecting it to the tensile load is measured. After the specimen has been fractured, the two halves of the fractured tensile specimen are fitted back together as closely as possible, and the distance between the punch marks is again measured. The increase in the after-fracture gauge length as compared to the original gauge length prior to subjecting the specimen to tensile loads is the elongation of the specimen. This is usually expressed as the percentage of elongation within 2 in. (50 mm) of gauge length. The diameter at the point of fracture is also measured and the reduction in area from the original area is calculated. This reduction in area is expressed as a percentage. Both the elongation and the reduction in area percentage are measures of a material's ductility.</p>
    <p>The design of components can be based on yield strength as well as tensile strength. Permanent deformation resulting from plastic flow occurs when the component's elastic limit is exceeded. A material subjected to loads beyond its elastic limit may become strain hardened, or work hardened. This results in a higher effective yield strength; however, the overall ductility based on the strain-hardened condition is lower than that of a material which has not been subjected to loads exceeding the elastic limit. Some materials also deteriorate in terms of ductility due to thermal cycling in service. Reduction in ductility in these cases may decrease so far that cracking during in-service repair may be very difficult to avoid. This is sometimes experienced during the repair welding of complex alloy exchanger tubesheets.</p>
    <p>One of the most common tests used in the development of welding procedures is the bend test. The bend test is used to evaluate the relative ductility and soundness of welded joint or weld test specimen. The specimen is usually bent in a special guided test jig. The specimens are subjected to strain to the convex side of the specimen by bending the specimen to a specified radius that is based on the type of material and specimen thickness. Codes generally specify a maximum allowable size for cracks or other imperfections on the bend specimen. Cracks and tears resulting from a lack of ductility or discontinuities in the weld metal are evaluated for acceptance or rejection to the applicable code requirements.</p>
    
    <h4>10.4.4 Hardness and Hardness Testing</h4>
    <p>The hardness of a material is defined as the resistance to plastic deformation by indentation. Indentation hardness may be measured by various hardness tests, such as Brinell, Rockwell, Knoop, and Vickers.</p>
    <p>Hardness measurements can provide information about the metallurgical changes caused by welding or cold working. In alloy steels, a high hardness measurement could indicate the presence of untempered martensite in the weld or heat-affected zone, while low hardness may indicate an overtempered condition.</p>
    <p>There is an approximate interrelationship among the different hardness test results and the tensile strength of some metals. Correlation between hardness values and tensile strength should be used with caution when applied to welded joints or any metal with a heterogeneous structure.</p>
    <p>A field test comparable to a Brinell test, commonly referred to as telebrineller, consists of applying load (force), on a 10 mm diameter hardened steel or tungsten carbide ball to a flat surface of a test specimen by striking the anvil on the Brinell device with a hammer. The impact is transmitted equally to a test bar that is held within the device that has a known Brinell hardness value and through the impression ball to the test specimen surface. The result is an indentation diameter in the test bar and the test specimen surface. The diameters of the resulting impressions are viewed using an optical comparator with a graduated scale and are directly related to the respective hardnesses of the test bar and the test specimen.</p>
    <p>Rockwell hardness testing differs from Brinell testing in that the hardness number is based on an inverse relationship to the measurement of the additional depth to which an indenter is forced by a heavy (major) load beyond the depth of a previously applied (minor) load.</p>
    <p>The Rockwell test is simple and rapid. The minor load is automatically applied by manually bringing the work piece up against the indenter until the "set" position is established. The zero position is then set on the dial gauge of the testing machine. The major load is then applied, and without removing the work piece, the major load is removed, and the Rockwell number then read from the dial.</p>
    <p>In Rockwell testing, the minor load is always 10 kg, but the major load can be 60 kg, 100 kg, or 150 kg. Indenters can be diamond-cone indenters (commonly known as Brale), or hardened steel-ball indenters of various diameters. The type of indenters and applied loads depends on the type of material to be tested, as well as anticipated hardness.</p>
    <p>A letter has been assigned to each combination of load and indenter. Scale is indicated by a suffix combination of H for hardness, R for Rockwell, and then a letter indicating scale employed. For instance, a value of 55 on the C scale is expressed as 55 HRC.</p>
    <p>Vickers hardness testing follows the Brinell principle in that the hardness is calculated from the ratio of load to area of an indentation as opposed to the depth (the Rockwell principle). In the Vickers hardness test, an indenter of a definite shape is pressed into the work material, the load removed, and the diagonals of the resulting indentation measured. The hardness number is calculated by dividing the load by the surface area of the indentation. The indenter for the Vickers test is made of diamond in the form of a square-based pyramid. The depth of indentation is about one-seventh of the diagonal length. The Vickers hardness value is preceded by the designation (HV). The Vickers hardness number is the same as the diamond pyramid hardness number (DPH).</p>
    <p>In-service hardness testing may involve the use of portable variations of the above-described methods. Alternatively, varying techniques based on rebound, indentation resistance, or comparator indentations may be applied and the results related to the hardness scales more commonly accepted. Whatever technique is employed may be acceptable as long as it produces verifiable and consistent results.</p>
    <p>Various codes and standards place hardness requirements on base metal and welds. The test results for the material or welding procedures should be compared with the applicable standards to ensure that the requirements for hardness testing are being met, and that the test results are satisfactory with that specified by the applicable code. There are often in-service degradation requirements that are hardness related. For example, susceptibility to wet H2S cracking in carbon steel is reduced if hardness levels are maintained below HRC 22 (respectively, a "100" reading on the HRB or a "61.5" reading on the HRA scale).</p>
    <p>There are several issues to keep in mind when conducting field hardness tests and when comparing hardness numbers from different methods.</p>
    
    <h4>10.4.5 Toughness</h4>
    <p>Toughness is the ability of a metal to absorb energy and deform plastically before fracturing. An important material property to tank and pressure vessel designers is the "fracture toughness" of a metal, which is defined as the ability to resist fracture or crack propagation under stress. It is usually measured by the energy absorbed in a notch impact test. There are several types of fracture toughness tests. One of the most common is a notched bar impact test called the Charpy impact test. The Charpy impact test is a pendulum-type single-blow impact test where the specimen is supported at both ends as a simple beam and broken by a falling pendulum. The energy absorbed, as determined by the subsequent rise of the pendulum, is a measure of the impact strength or notch toughness of a material. The tests results are usually recorded in foot-pounds. The type of notch and the impact test temperature are generally specified and recorded, in addition to specimen size (if they are subsize specimens, smaller than 10 mm x 10 mm).</p>
    <p>Materials are often tested at various temperatures to determine the ductile-to-brittle transition temperature. Many codes and standards require impact testing at or below the minimum design metal temperature based on service or location temperatures to ensure that the material has sufficient toughness to resist brittle fracture.</p>
    
    <h3>10.5 Preheating</h3>
    <p>Preheating, for these purposes, is defined as heating of the weld and surrounding base metal to a predetermined temperature prior to the start of welding. Additionally, a maximum allowable temperature known as the interpass temperature is generally specified on a welding procedure. The primary purpose for preheating carbon and low-alloy steels is to reduce the tendency for hydrogen-induced delayed cracking. It does this by driving moisture from the surface to be welded and slowing the cooling rate, which helps prevent the formation of martensite in the weld and base metal HAZ. However, preheating may be performed for many reasons, including the following.</p>
    <ul>
        <li>To bring the temperature up to preheat or interpass temperatures required by the WPS;</li>
        <li>To reduce shrinkage stresses in the weld and base metal, which is especially important in weld joints with high restraint;</li>
        <li>To reduce the cooling rate to prevent hardening and a reduction in ductility of the weld and base metal HAZ;</li>
        <li>To maintain weld interpass temperatures;</li>
        <li>To eliminate moisture from the weld area;</li>
        <li>To meet the requirements of the applicable fabrication code, such as the ASME Boiler and Pressure Vessel Code, depending on the intended use, chemistry, and thickness of the metal to be welded.</li>
    </ul>
    <p>If preheat is specified in the WPS, it is important that the inspector confirms that the required temperature is maintained. This can be done using several methods, including thermocouples, contact pyrometer, infrared temperature measuring instruments, or temperature-indicating crayons. The inspector should remember that if preheat is required during welding, the same preheat should be applied during tack welding, arc gouging, and thermal cutting of the metal, all of which induce temperature changes similar to welding of the joint. The most important temperatures are the preheat temperature and the interpass temperature.</p>
    <p>Preheat can be applied using several different techniques, but the most common techniques used in pipe and tank fabrication are electrical resistance coils, or an oxyacetylene or natural-gas torch. Good practice is to uniformly heat an area on either side of the weld joint for a distance three times the width of the weld. Preheat should be applied and extend to at least 2 in. (50 mm) on either side of the weld to encompass the weld and potential HAZ areas. Inspectors should exercise caution when welding metals of different chemistries or preheat requirements, ensuring that preheats for both metals are in accordance with codes and the WPS documentation. Typically, the metal with the highest preheat requirement governs and will be identified on the welding procedure.</p>
    <p>Some alloys require controlled cooling or extended heating after weld completion, before PWHT begins. ASME Section IX defines this as "preheat maintenance." Continuous or special heating during welding may also be necessary to avoid cracking.</p>
    
    <h3>10.6 Heat Treatment</h3>
    <p>The purpose of heat treatment is to impart desirable mechanical properties to a steel that are appropriate for its intended service through microstructural changes (phase transformations). While there are many types of heat treatments based upon the material and its specific application, the descriptions that follow are those typically used across many industries. Heat treatments are achieved by bringing the material to transformation temperatures (material based, 1700 °F to 1800 °F for steels), holding for a period of time, and cooling down at various rates.</p>
    
    <h4>10.6.1 Full Annealing</h4>
    <p>This process consists of heating steel to and holding at a suitable temperature above the transformation temperature range, followed by slow cooling to well below the transformation temperature. The cool-down cycle generally occurs in a furnace or as the part is contained within a heat-insulating material. The resulting material will have relatively low hardness and high toughness and ductility values for further metal working.</p>
    
    <h4>10.6.2 Normalizing</h4>
    <p>This method is carried out at relatively high temperatures, which causes the material's grain structure to realign, resulting in a structure that has higher hardness and greater relative strength than full annealing. The ferrous material is heated to a temperature above the transformation temperature range followed by cooling in still air to well below the transformation temperature range. Unlike full annealing, the material is removed from the furnace and air-cooled.</p>
    
    <h4>10.6.3 Carburizing</h4>
    <p>The purpose of carburizing is to diffuse carbon atoms to the outer layer of a material to form carbides which significantly increase the material's surface hardness at the sacrifice of ductility. Typical applications include wear surfaces such as blades. Carburizing is performed at relatively high temperatures, 1700 °F (930 °C), in either a carbon-rich liquid bath or gas environment. Dimensional changes are a typical result of this operation.</p>
    
    <h4>10.6.4 Hardening</h4>
    <p>Hardening or hardenability is defined as that property of a ferrous alloy that determines the depth and distribution of hardness induced by quenching. It is important to note that there is no close relation between hardenability and hardness, which is the resistance to indentation. Hardness depends primarily on the carbon content of the material, whereas hardenability is strongly affected by the presence of alloying elements such as chromium, molybdenum, and vanadium, and to a lesser extent by carbon content and alloying elements such as nickel, copper, and silicon. For example, a standard medium-carbon steel, such as AISI 1040 with no alloying elements, has a lower hardenability than AISI 4340 low-alloy steel, which has the same amount of carbon but contains small amounts of chromium, nickel, molybdenum, and silicon as alloying elements. Other factors can also affect hardenability to a lesser extent than chemical composition; these include grain structure, alloy homogeneity, amount of certain microstructural phases present in the steel, and overall microcleanliness of the steel.</p>
    <p>Welding variables such as heat input, interpass temperature and size of the weld bead being applied all affect the cooling rate of the base metal HAZ, which in turn affects the microstructure (ferrite/pearlite/martensite formation) and resulting hardness. The cooling rate of the base metal can also be affected by the section size of the base metal being welded, temperature of the metal being welded, and weld joint geometry. If the alloying elements that increase hardenability are found in the base metal HAZ, the cooling rate during welding necessary to produce a high hardness HAZ are generally lower than for plain carbon steel without high percentages of alloying elements.</p>
    <p>The simplest means to determine hardenability is to measure the depth to which a piece of steel hardens during quenching from an elevated temperature. There are several standardized tests for determining hardenability. A typical test of hardenability is called the Jominy End Quench Test. In this test, a round bar is heated to a predetermined elevated temperature until heated evenly through the cross-section. The specimen is then subjected to rapid quenching by spraying water against the bottom end of the round bar. The hardness of the test specimen is measured as a function of distance away from the surface being quenched. Steels that obtain high hardness well away from the quenched surface are considered to have high hardenability. Conversely, steels that do not harden well away from the quenched surface are considered to have low hardenability.</p>
    <p>It may be important for the designer, welding engineer, and inspector to understand the hardenability of the steel as it can be an indirect indicator of weldability. Hardenability relates to the amount of martensite that forms during the heating and cooling cycles of welding. This is most evident in the base metal HAZ. Significant amounts of martensite formation in the HAZ can lead to hydrogen-assisted cracking or a loss in ductility and toughness. Certain steels with high hardenability form martensite when they are cooled in air. Other steels with low hardenability require much faster cooling rates to form martensite. Knowing the hardenability helps the engineer or inspector determine if preheat or PWHT are required, or if a controlled cooling practice may be acceptable to produce a serviceable weld and acceptable properties in the HAZ.</p>
    <p>Hardening of the weld and base metal HAZ are important because of hydrogen-assisted cracking that occurs in carbon and low-alloy steels. As the hardness of the base metal HAZ increases, so does the susceptibility to hydrogen-assisted cracking. The hardness limits currently recommended for steels in refinery process service are listed in Table 11. Hardness values obtained in excess of these usually indicate that PWHT is necessary, regardless of whether it is specified on the welding procedure specification. In those instances where PWHT is needed, an alternate welding procedure qualified with PWHT is necessary.</p>
    <p>Hardness in excess of those listed can result in stress corrosion cracking in service due to the presence of sulfides in the process. The 200 BHN limit for carbon steel is equally as important in sulfur-containing oils as is the limit for Cr-Mo steels.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 11—Brinell Hardness Limits for Steels in Refining Services</caption>
            <thead>
                <tr>
                    <th>Base Metal</th>
                    <th>Brinell Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Carbon Steel</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>C-1/2 Mo</td>
                    <td>225</td>
                </tr>
                <tr>
                    <td>1-1/4 Cr-1/2 Mo</td>
                    <td>225</td>
                </tr>
                <tr>
                    <td>2-1/4 Cr-1 Mo</td>
                    <td>241</td>
                </tr>
                <tr>
                    <td>5, 7, 9, Cr-Mo</td>
                    <td>241</td>
                </tr>
                <tr>
                    <td>12 Cr</td>
                    <td>241</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <h4>10.6.5 Tempering</h4>
    <p>The purpose of tempering is to decrease material brittleness, increasing its ductility and toughness, and to relieve residual stresses, either from its manufacturing process or imparted during previously applied heat treatment operations. The resulting operation generally results in a reduction of yield and tensile strength.</p>
    
    <h4>10.6.6 Postweld Heat Treatment</h4>
    <p>PWHT produces both mechanical and metallurgical effects in carbon and low-alloy steels that varies widely depending on the composition of the steel, its past thermal history, the temperature and duration of the PWHT, and heating and cooling rates employed during the PWHT. The need for PWHT is dependent on many factors, including chemistry of the metal, thickness of the parts being joined, joint design, welding processes, and service or process conditions. The type of PWHT is selected by considering the changes being sought in the equipment or structure. For example, a simple stress relief to reduce residual stresses is performed at a lower temperature than a normalizing heat treatment. The holding time at temperature should also be selected to allow the desired time at temperature dependent actions to take place. In some isolated cases, holding time and temperature are interchangeable, but small temperature changes have been shown to be equivalent to large changes in holding times.</p>
    <p>The primary reason for PWHT is to relieve residual stresses in a welded fabrication. In ferritic welds, PWHT is also conducted to reduce the hardness of the HAZ. Stresses occur during welding due to the localized heating and severe temperature changes that occur. PWHT releases these stresses by allowing the metal to creep slightly at the elevated temperature. However, there may also be in-service conditions that require particular PWHT conditions. These may not be so closely detailed in construction specifications and inspectors should therefore be particularly aware of these potential requirements when allowing, authorizing, or inspecting in service repairs.</p>
    <p>PWHT (stress relief) can be applied by electrical resistance heating, furnace heating, or, if allowed by the code, local flame heating. Temperatures should be monitored and recorded by thermocouples attached to the part being heated. Multiple thermocouples are necessary to ensure proper PWHT of all components. Adequate support should be provided during any PWHT to prevent sagging.</p>
    
    <h3>10.7 Material Test Reports</h3>
    <p>There are typically two types of test reports on a material test report (MTR). A heat analysis, or mill certificate, is a statement of the chemical analysis and weight percent of the chemical elements present in an ingot or a billet. An ingot and a billet are the customary shapes into which a molten metal is cast. These shapes are the starting points for the manufacture of wrought shapes by the metal-forming process, such as rolling, drawing, forging, or extrusion. A product analysis is a statement of the chemical analysis of the end product and is supplied by the manufacturer of the material. These reports can be supplied for any form of material, including wrought products, such as plate, pipe, fittings, tubing, castings, and weld filler metals. The product analysis is more useful to the inspector and engineer because it provides a more reliable identification of the actual material being used for new fabrication or repair of existing equipment.</p>
    <p>For the purposes of this publication, the information about MTRs pertains to product certificates for carbon, low-alloy steel, and stainless steels. However, it should be noted that the MTR documents may include, but are not limited to, the following information:</p>
    <ul>
        <li>manufacturer of the material;</li>
        <li>date of manufacture;</li>
        <li>heat number of the material;</li>
        <li>applicable national standard(s) to which the heat conforms, such as ASTM, ASME, or MIL-STD;</li>
        <li>heat treatment, if applicable;</li>
        <li>chemistry of the heat;</li>
        <li>mechanical properties, at a minimum those required by the applicable National Standards;</li>
        <li>any other requirement specified by the applicable National Standard;</li>
        <li>any supplemental information or testing requested by the purchaser, which may include but is not limited to:
            <ol>
                <li>impact strength;</li>
                <li>ductile-to-brittle transition temperature determination;</li>
                <li>fracture toughness;</li>
                <li>elevated mechanical property testing (i.e. tensile, hot ductility, or creep testing);</li>
                <li>hardenability;</li>
                <li>hardness;</li>
                <li>response to heat treatment (i.e. proposed postfabrication heat treatment such as precipitation hardening, necessary to achieve mechanical properties);</li>
                <li>microstructural analysis, such as grain size evaluation;</li>
                <li>nondestructive examination, such as UT.</li>
            </ol>
        </li>
    </ul>
    <p>The inspector should review the MTR to confirm that the materials being used for fabrication of new equipment or repair of existing equipment meet the requirements specified by the applicable code/standard or additional requirements specified by the user. The welding engineer can also use the information from a MTR to determine the weldability of the materials to be used, and to recommend proper welding procedures, preheat, and postweld heat treatment. The chemical analysis given in the test report can be used to calculate the carbon equivalent for that material. It is important to note that MTRs are not generally supplied to the purchaser unless requested. It is good practice for the purchaser to request the mill test reports.</p>
    
    <h3>10.8 Weldability of Metals</h3>
    <h4>10.8.1 General</h4>
    <p>There are many books devoted to the weldability of metals and alloys. Weldability is a complicated property that does not have a universally accepted definition. The term is widely interpreted by individual experience. The American Welding Society defines weldability as "the capacity of a metal to be welded under the fabrication conditions imposed, into a specific, suitably designed structure, and to perform satisfactorily in the intended service." Weldability is related to many factors including the following:</p>
    <ul>
        <li>the metallurgical compatibility of the metal or alloy being welded, which is related to the chemical composition and microstructure of the metal or alloy, and the weld filler metal used;</li>
        <li>the specific welding processes being used to join the metal;</li>
        <li>the mechanical properties of the metal, such as (yield and tensile) strength, ductility and toughness;</li>
        <li>the ability of the metal to be welded such that the completed weld has sound mechanical properties;</li>
        <li>the weld joint design.</li>
    </ul>
    
    <h4>10.8.2 Metallurgy and Weldability</h4>
    <p>A primary factor affecting weldability of metals and alloys is their chemical composition. Chemical composition not only controls the range of mechanical properties in carbon and alloy steels, it has the most influence on the effects of welding on the material. The heat cycles from welding in effect produce a heat treatment on the metal that can have a substantial effect on mechanical properties, depending on the chemical composition of the metal being welded. As noted earlier, each type of metal has welding procedural limits within which sound weldments with satisfactory properties can be fabricated. If these limits are wide, the metal is said to have good weldability. If the limits are narrow, the metal is considered to have poor weldability.</p>
    <p>The addition of carbon generally makes the metal more difficult to weld without cracking. Carbon content has the greatest effect on mechanical properties, such as tensile strength, ductility, and toughness in the base metal HAZ and weldment. Carbon content influences the susceptibility of the metal to delayed cracking problems from hydrogen. The carbon content, or carbon equivalent, of carbon steel determines the necessity for preheat and PWHT.</p>
    <p>Alloying elements other than carbon are added to alloy steels for various reasons and can have an influence on the weldability and mechanical properties of the metal. Some alloying elements, such as manganese, chromium, nickel, and molybdenum are added to provide beneficial effects on strength, toughness, and corrosion resistance. Some of these elements are beneficial in non-heat-treated steel, while others come into play during heat treatments necessary to produce the desired mechanical properties. These alloying elements can have a strong effect on hardenability, so they can also affect the weldability of the metal being welded.</p>
    <p>There are some elements present in carbon and alloy steels that are not deliberately added that can have an effect on weldability. These include sulfur, phosphorus, tin, antimony, and arsenic. These elements are sometimes referred to as "tramp" or "scavenger" elements.</p>
    <p>One tool that has been developed to help evaluate the weldability of carbon and alloy steel is the carbon equivalent (CE) concept. The CE calculation establishes a theoretical carbon content of the metal and considers not only carbon, but also the effect of other alloying elements and tramp elements. Several different equations for expressing carbon equivalent are in use. One common equation for carbon and carbon–manganese steels is:</p>
    <p>CE = C+Mn/6 + C+Mo+V/5 + Ni+Cu/15</p>
    <p>Typically, steels with a CE less than 0.35 require no preheat. Steels with a CE of 0.35 to 0.55 usually require preheating, and steels with a CE greater than 0.55 require both preheating and a PWHT. However, requirements for preheating should be evaluated by considering other factors such as hydrogen level, humidity, and section thickness. As preheating provides a significant benefit to the weldment, it should be considered when developing a welding procedure.</p>
    
    <h4>10.8.3 Weldability Testing</h4>
    <p>One of the best means to determine weldability of a metal or combination of metals is to perform direct weldability testing. Direct tests for weldability are defined as those tests that specify welding as an essential feature of the test specimen. Weldability testing provides a measure of the changes induced by welding in a specified steel property and a means to evaluate the expected performance of welded joints.</p>
    <p>The problem with predicting the performance of structures or welded equipment from a laboratory-type test is a complex one because size, configuration, environment, and type of loading are not consistent under most service conditions. For this reason, no single test can be expected to measure all of the aspects of a property as complex as weldability, and most weldments are evaluated by several tests. If tests are to be useful in connection with fabrication, they should be designed to measure the susceptibility of the weld metal–base metal system to such defects as weld metal or base metal cracks, lamellar tearing, and porosity or inclusions under typical, properly controlled welding conditions. Selection of a test method may also have to balance time and cost for emergency repairs or shutdown work.</p>
    <p>The simplest weldability tests are those that evaluate the strength and ductility of the weld. Tests that evaluate strength include weld tension tests, shear strength, and hardness. Ductility and fracture toughness tests include bend tests and impact tests. These tests evaluate the breaking strength, ductility, and toughness of simple weld joints. These tests are the same as tests used for welding procedure and welder qualification to the ASME Boiler and Pressure Vessel Code. If the weldment has adequate strength and ductility, it is usually deemed acceptable for service.</p>
    <p>Fabrication weldability tests that incorporate welding into their execution can be broadly classified as restraint cracking tests, lamellar tearing tests, externally loaded cracking tests, underbead cracking tests, or simple weld metal soundness tests. Some of these tests can be used to detect the susceptibility to more than one type of defect, while others are intended as single-purpose tests, and still others may be go/no-go types of tests.</p>
    <p>Weld restraint induces stresses that can contribute to cracking of both the weld and base metal in fabrication welds. This type of cracking occurs when the rigidity of the joint is so severe that the base metal or weld metal strength cannot adequately resist the stress and strain applied by expansion and contraction of the weld joint. Weld restraint cracking specimens are designed to permit a quantitative variation in restraint under realistic welding conditions so the contribution of the weld metal, base metal, and welding processes can be evaluated with respect to contribution to cracking. Typical weld restraint test methods include the Lehigh restraint test, slot test, rigid restraint cracking (RRC) test, and circular weld restraint cracking test.</p>
    <p>Another approach to measuring susceptibility to weld cracking is to apply an external load during welding or subsequent to welding. The loading is intended to duplicate or magnify stresses from restraint of a rigid weld joint. The tests provide an ability to control the stress and strain applied to the weld joint and, therefore, provide a relative index of the susceptibility to weld cracking. Test methods that use external loading include the implant test, tension restraint cracking (TRC) test, and Varestraint Hot Ductility test. There is also a specialized test called the Gleeble test that also applies a load to the specimen during heating or melting of the metal.</p>
    <p>It is beyond the scope of this document to describe each test in detail; however, a general overview of different types of tests and the types of defects they can detect is given in Table 12.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Table 12—Weld Crack Tests</caption>
            <thead>
                <tr>
                    <th></th>
                    <th colspan="5">Weld Metal Cracking</th>
                    <th colspan="5">Base Metal Cracking</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Solidification</th>
                    <th>Root and Toe</th>
                    <th>Microcracks</th>
                    <th>H-assisted</th>
                    <th>Stress Relief</th>
                    <th>Lamellar Tearing</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Restraint Tests</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Lehigh Test</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Slot Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Tekken Test</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>RRC Test</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Circular Weld Test</td>
                    <td>x</td>
                    <td>x</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Externally Loaded Tests</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Varestraint Test</td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Implant Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                </tr>
                <tr>
                    <td>TRC Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Lamellar Tearing Test</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Cantilever Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                </tr>
                <tr>
                    <td>Cranfield Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                </tr>
                <tr>
                    <td><strong>Underbead Cracking Test</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Longitudinal Bead Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Cruciform Test</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>CTS Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td>x</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <h3>10.9 Weldability of High Alloys</h3>
    <h4>10.9.1 General</h4>
    <p>This section gives information about welding of high-alloy metals, such as austenitic stainless steels, precipitation hardening stainless steels, and nickel-based alloys. These materials are not as common as carbon and low-alloy steels (e.g. 11/4 Cr-1/2 Mo through 9 Cr-1 Mo steels) but may still be used in some processes within the oil industry.</p>
    
    <h4>10.9.2 Austenitic Stainless Steels</h4>
    <p>Austenitic stainless steels are iron-based alloys that typically contain low carbon, chromium between 15 % to 32 %, and nickel between 8 % to 37 %. They are used for their corrosion resistance and resistance to high-temperature degradation. Austenitic stainless steels are considered to have good weldability and can be welded using any common welding process or technique. The most important considerations to welding austenitic stainless steels are solidification cracking, hot cracking, distortion, and maintaining corrosion resistance.</p>
    <p>Solidification cracking and hot cracking (sometimes called hot shortness) are directly related to weld metal chemistry and the resultant metallurgical phases that form in the weld metal. The cracking mechanism of both solidification cracking and hot cracking is the same. Cracks can occur in various regions of the weld with different orientations. They can appear as centerline cracks, transverse cracks, and as microcracks in the underlying weld metal or adjacent HAZ. Cracking is primarily due to low-melting-point liquid phases which allow boundaries to separate under the thermal and shrinkage stresses during weld solidification and cooling.</p>
    <p>The most common measure of weldability and susceptibility to hot cracking is the ferrite number of the weld metal. Austenitic welds require a minimum amount of delta ferrite to resist cracking. The amount of ferrite in the weld metal is primarily a function of both base metal and weld metal chemistry. For welds made without filler metal, the base metal chemistry should be appropriate to produce the small amounts of ferrite that are needed to prevent cracking. If the base metal chemistry does not allow for ferrite formation, then filler metal is recommended to produce adequate ferrite in the weld metal. Welding parameters and practices can also affect ferrite formation. For example, small amounts of nitrogen absorbed into the weld metal can reduce ferrite formation. WRC Bulletin 342 contains diagrams that accurately predict the amount of ferrite present in a weld metal based on the calculation of nickel and chromium equivalents based on weld metal and base metal chemistry. Several resources recommend a minimum of 5 % to 20 % ferrite content to prevent cracking.</p>
    <p>Weldability of austenitic stainless steels can also be affected by the presence of high levels of low-melting point elements like sulfur, phosphorus, and selenium. Other elements such as silicon and columbium (niobium) also increase the hot cracking susceptibility of austenitic stainless steels.</p>
    <p>Distortion is more often a problem with welding of austenitic stainless steels than carbon or low-alloy steels. The thermal conductivity of austenitic stainless steels is about one-third that of carbon steel and the coefficient of thermal expansion is about 30 % greater. This means that distortion is greater for austenitic stainless steels than for carbon steels. More frequent tack welds may be necessary for stainless steels to limit shrinkage.</p>
    <p>Welding can reduce the corrosion resistance of regions of the HAZ of some austenitic stainless steels. Areas exposed to temperatures between 800 °F to 1650 °F (430 °C to 900 °C) for a long enough time may precipitate chromium carbides at the grain boundaries. Using low-carbon-content stainless steels such as Type 304L or 316L, or stabilized grades of stainless steels such as Type 321 and 347, can prevent this phenomenon. It is also important to select the proper filler metal to prevent a loss in corrosion resistance. Low-carbon electrodes or stabilized grades of bare filler metal should be used.</p>
    <p>Oxidation of the underside of welds made without proper shielding can also be detrimental to the corrosion resistance of austenitic stainless steels. To prevent a loss in corrosion resistance, the root of the weld should be protected by using an inert backing gas such as argon or nitrogen.</p>
    
    <h4>10.9.3 Nickel Alloys</h4>
    <p>Nickel alloys, such as Alloy C276 or Alloy 625, suffer from similar problems as austenitic stainless steels. In general, most nickel-alloy materials are considered to have less weldability than austenitic stainless steels. Some nickel alloys, such as Alloy 825, Alloy 600, and Alloy 625, have similar welding characteristics to austenitic stainless steels, while Alloy 200, Alloy 400, and Alloy B-2 have very different welding characteristics than austenitic stainless steels.</p>
    <p>One of the main differences between nickel-alloy and carbon steels and austenitic stainless steels is the tendency for nickel-alloy welds to be sluggish during welding. This means for nickel alloys that the molten weld pool will not move as easily as it does for other metals. This sluggish tendency means the welder should move the weld pool with a weave or oscillation pattern to ensure good sidewall fusion. If some oscillation is not used, a high convex weld contour will result, which will cause sidewall LOF, weld undercut, or slag inclusions. The formation of a slightly concave weld bead profile will be more resistant to centerline cracking. It is also important that the bevel angle for nickel alloys be wide enough to allow for this necessary oscillation of the welding torch.</p>
    <p>The wider weld bevel will also be beneficial with respect to weld penetration. Nickel alloys also suffer from shallower weld penetration as compared to carbon steels and austenitic stainless steel. To overcome this, the weld joint is modified by having a wider bevel and thinner root face.</p>
    <p>Nickel alloys are also susceptible to hot cracking, in some cases more so than austenitic stainless steels. This hot tearing will occur as the weld pool cools and solidifies. To help prevent hot cracking, the weld joint should be designed to minimize restraint and the weld should be allowed to cool as quickly as possible. The faster a nickel-alloy weld solidifies (freezes), the less time it spends in the temperature range where it can tear. For this reason, preheating, which slows down the cooling rate of the weld, could actually be harmful, as it permits more opportunity for hot tearing to occur.</p>
    <p>As with austenitic stainless steels, the weldability of nickel alloys can also be affected by the presence of high levels of low-melting-point elements like sulfur, phosphorus, zinc, copper, and lead. All of these contaminants can lead to cracking in either the weld or base metal.</p>`,
    
    contentEs: `<h2>10 Metalurgia</h2>
    <h3>10.1 General</h3>
    <p>Un conocimiento general de los principios principales es importante para el inspector, debido a la amplia variedad de metales base que pueden unirse mediante soldadura durante la reparación de equipos, y el impacto significativo en los metales resultante del proceso de soldadura. El proceso de soldadura puede afectar tanto a las propiedades mecánicas como a las propiedades de resistencia a la corrosión de la soldadura. Esta sección está diseñada para proporcionar conciencia sobre los efectos metalúrgicos importantes para el personal que realiza inspecciones, pero no debe considerarse un recurso exhaustivo de metalurgia.</p>
    <p>Basado en el concepto de que esta sección proporciona un conocimiento básico, esta sección no describe todos los aspectos de la metalurgia como las estructuras cristalinas de los materiales y las configuraciones atómicas, que se dejan para otros textos de metalurgia más completos.</p>
    
    <h3>10.2 Estructura de Metales y Aleaciones</h3>
    <h4>10.2.1 General</h4>
    <p>Los metales son de naturaleza cristalina y tienen una estructura en la que los átomos de cada cristal están dispuestos en un patrón geométrico específico basado en varios factores incluyendo el tipo/grado del material y la condición de tratamiento térmico. Las propiedades físicas de los materiales metálicos incluyendo resistencia, ductilidad y tenacidad pueden atribuirse a la composición química y la disposición ordenada de estos átomos.</p>
    <p>Los metales en estados fundidos o líquidos no tienen una disposición ordenada de los átomos contenidos en el fundido. A medida que el fundido se enfría, se alcanza una temperatura a la cual grupos de átomos se unen entre sí y comienzan a solidificarse, desarrollándose en cristales sólidos dentro del fundido. Los cristales individuales de metal puro son idénticos excepto por su orientación y se llaman granos. A medida que la temperatura se reduce aún más, estos cristales cambian de forma, eventualmente se tocan, y donde los granos se tocan, se forma una capa de transición irregular de átomos, llamada límite de grano. Eventualmente, todo el fundido se solidifica, entrelazando los granos en una estructura metálica sólida llamada fundición.</p>
    <p>El conocimiento de las estructuras de fundición es importante ya que el proceso de soldadura es algo similar a hacer una fundición en una fundidora. Debido a la similitud en la forma de sus granos, una soldadura puede considerarse una pequeña fundición. Una soldadura solidificada puede tener una estructura que se parece mucho a la de una pieza de equipo fundido. Sin embargo, las condiciones térmicas que se experimentan durante la soldadura producen una estructura de fundición con características tanto beneficiosas como perjudiciales, únicas de la soldadura.</p>
    
    <h4>10.2.2 Fundiciones</h4>
    <p>Dado que la estructura de una soldadura completada es similar a una fundición, es importante revisar la naturaleza de las fundiciones. La disposición general de los granos, límites de grano y fases presentes en la fundición se llama microestructura del metal. La microestructura es un área de especialidad que los inspectores deben entender, ya que es en gran parte responsable de las propiedades físicas y mecánicas del metal. Debido a que las fundiciones utilizadas en la industria de refinación son típicamente aleadas, generalmente contienen varias fases microestructurales. Una fase es cualquier estructura que es física y composicionalmente distinta. A medida que se altera la composición química o cambia la temperatura, pueden formarse nuevas fases o las fases existentes pueden desaparecer.</p>
    <p>Las estructuras de fundición, dependiendo de su composición química, pueden exhibir una amplia gama de propiedades mecánicas por varias razones. En general, es deseable mantener el tamaño de los granos pequeño, lo que mejora la resistencia y la tenacidad. Esto puede lograrse maximizando la velocidad de enfriamiento o minimizando el aporte de calor (en el caso de la soldadura). Esto aumenta la tasa de formación de cristales y disminuye el tiempo disponible para el crecimiento de cristales, lo que tiene un efecto neto de reducir el tamaño del grano cristalino.</p>
    <p>Las propiedades de la estructura de fundición también pueden verse afectadas por variaciones composicionales en la microestructura llamadas segregación. Debido a la solubilidad de elementos traza y de aleación, elementos como carbono, azufre y fósforo pueden variar en un metal puro; estos elementos pueden causar variaciones en la temperatura de solidificación de diferentes fases microestructurales dentro del fundido. A medida que el fundido se enfría, estos elementos finalmente están contenidos en las fases microestructurales que solidifican último en los espacios entre los granos. Estas regiones de límite de grano pueden tener un porcentaje mucho mayor de elementos traza que los propios granos, lo que puede llevar a reducciones en las propiedades de ductilidad y resistencia. Este efecto puede minimizarse utilizando stocks de fusión de alta pureza, mediante prácticas de fusión especiales (fundición bajo vacío o gas inerte, por ejemplo) para minimizar la contaminación y/o tratamiento térmico posterior para homogeneizar la estructura. En muchos aceros al carbono, esto se logra utilizando desoxidantes como aluminio, silicio, o silicio más aluminio, y los aceros a menudo se describen como aceros "calmados" o "totalmente calmados". Minimizar los elementos traza o "inclusiones" en esta etapa es a menudo importante ya que pueden proporcionar sitios para la formación de defectos en servicio como el agrietamiento asistido por hidrógeno.</p>
    <p>Gases como el hidrógeno que quedan atrapados en el fundido a medida que se solidifica también pueden afectar la integridad de la fundición. En algunos casos, estos gases crean vacíos o porosidad en la estructura, o pueden llevar al agrietamiento. Las soldaduras son particularmente propensas al agrietamiento debido a los gases de hidrógeno atrapados. Este problema puede evitarse mediante una limpieza cuidadosa de los chaflanes de soldadura para eliminar hidrocarburos y humedad, el uso de electrodos de bajo hidrógeno, almacenamiento correcto o secado de electrodos, y el uso de técnicas de purga adecuadas con gases de soldadura de alta calidad.</p>
    <p>Para aplicaciones de refinación, las fundiciones se utilizan principalmente para componentes con formas complejas con el fin de minimizar la cantidad de mecanizado requerido. Estos incluyen componentes de bomba (carcasas, rodetes y cajas de empaquetadura) y cuerpos de válvulas.</p>
    
    <h4>10.2.3 Materiales Forjados</h4>
    <p>La mayoría de los materiales metálicos utilizados para la fabricación de equipos de refinería y plantas químicas se utilizan en forma forjada en lugar de fundida. El trabajo mecánico del lingote fundido produce materiales forjados mediante procesos como laminado, forja o extrusión, que normalmente se realizan a temperatura elevada. Estos procesos dan como resultado una microestructura que tiene una composición uniforme y una forma de grano más pequeña y uniforme.</p>
    <p>Los materiales forjados pueden consistir en una o más fases microestructurales que pueden tener diferentes estructuras de grano. Los aceros inoxidable austeníticos, por ejemplo, están compuestos de fases microestructurales llamadas austenita, que tienen granos de la misma estructura cristalina. Muchas aleaciones de níquel, aluminio, titanio y cobre también son materiales de una sola fase. Los materiales de una sola fase a menudo se fortalecen mediante la adición de elementos de aleación que llevan a la formación de precipitados no metálicos o intermetálicos. La adición de carbono a los aceros inoxidable austeníticos, por ejemplo, lleva a la formación de precipitados muy pequeños de carburos de hierro y cromo en los granos y en los límites de grano. El efecto de estos precipitados es fortalecer la aleación. Sin embargo, la formación de precipitados de carburo de cromo en los límites de grano durante la soldadura (u otra exposición a alta temperatura) agota el área adyacente a los límites de grano de cromo. Esta microestructura en el acero inoxidable austenítico se conoce como "microestructura sensibilizada". Como resultado, la área empobrecida en cromo adyacente al límite de grano puede experimentar una corrosión intergranular severa. En general, un mayor fortalecimiento ocurre con la distribución más fina de precipitados. Este efecto generalmente depende de la temperatura; a temperaturas elevadas, los precipitados comienzan a descomponerse y se pierde el efecto de fortalecimiento.</p>
    <p>Las aleaciones también pueden consistir en más de una fase microestructural y estructura cristalina. Una serie de aleaciones de cobre incluyendo algunos latones están compuestas de dos fases distintas. El acero al carbono simple también es una aleación de dos fases. Una fase es una forma relativamente pura de hierro llamada ferrita. Por sí sola, la ferrita es un material débil. Con la adición de más del 0.06 % de carbono, se forma una segunda fase llamada perlita que añade resistencia al acero. La perlita es una mezcha laminar (es decir, similar a placas) de ferrita y carburo de hierro Fe3C.</p>
    <p>Como resultado del enfriamiento rápido como el temple en aceros no aleados y también con la adición de elementos de aleación como el cromo al acero, pueden formarse otras fases. En lugar de perlita, pueden producirse fases como bainita o martensita. Estas fases tienden a aumentar la resistencia y dureza del metal con alguna pérdida de ductilidad. La formación de estructuras como bainita y martensita también puede ser el resultado de un enfriamiento rápido o controlado y recalentamiento dentro de ciertos rangos de temperatura a menudo denominados "templado" y "revenido". Con ciertas excepciones, como los productos de recubrimiento duro, las estructuras de bainita y martensita no se consideran deseables.</p>
    
    <h4>10.2.4 Metalurgia de la Soldadura</h4>
    <p>La metalurgia de la soldadura se ocupa de la fusión, solidificación, reacciones gas-metal, reacciones escoria-metal, fenómenos superficiales y reacciones del metal base. Estas reacciones ocurren rápidamente durante la soldadura debido a los cambios rápidos de temperatura causados por el proceso de soldadura. Esto contrasta con la metalurgia de las fundiciones, que tiende a ser más lenta y a menudo más controlada. Hay tres partes de una soldadura: el metal de soldadura, el metal afectado por el calor (zona) y el metal base. La metalurgia de cada área está relacionada con la composición del metal base y del metal de soldadura, el proceso de soldadura y los procedimientos de soldadura utilizados.</p>
    <p>La mayoría de los metales de soldadura típicos se solidifican rápidamente y, como la estructura de una fundición descrita anteriormente, generalmente se solidifican de la misma manera que una fundición y tienen una microestructura dendrítica de grano fino. El metal de soldadura solidificado es una mezcla de metal base fundido y metal de aporte de soldadura depositado, si se utiliza. En la mayoría de las soldaduras, también puede haber cierta segregación de elementos de aleación. La cantidad de segregación está determinada por la composición química de la soldadura y del metal base. En consecuencia, la soldadura es menos homogénea que el metal base, lo que puede afectar negativamente las propiedades mecánicas de la soldadura.</p>
    <p>La ZAT es adyacente a la soldadura y es esa porción del metal base que no se ha fundido, cuyas propiedades mecánicas o microestructura han sido alteradas por el calor de la soldadura. Típicamente hay un cambio en el tamaño de grano o estructura de grano y dureza en la ZAT del acero. El tamaño o ancho de la ZAT depende del aporte de calor utilizado durante la soldadura. Para aceros al carbono, la ZAT incluye aquellas regiones calentadas a más de 1350 °F (730 °C). Cada pasada de soldadura aplicada tiene su propia ZAT y las zonas afectadas por el calor superpuestas se extienden a través del espesor completo de la placa o pieza soldada.</p>
    <p>El tercer componente en una unión soldada es el metal base. La mayoría de los aceros comunes al carbono y de baja aleación utilizados para tanques y recipientes a presión son soldables. El factor principal que afecta la soldabilidad de un metal base es su composición química y el contenido de carbono de los aceros al carbono. Cada tipo de metal tiene límites de procedimiento de soldadura dentro de los cuales se pueden hacer soldaduras sanas con propiedades mecánicas satisfactorias. Si estos límites son amplios, se dice que el metal tiene buena soldabilidad, y si los límites son estrechos, se dice que el metal tiene pobre soldabilidad.</p>
    <p>Un aspecto significativo de la metalurgia de la soldadura es la reacción gas-metal entre el metal de soldadura fundido y los gases presentes durante la soldadura. Las reacciones gas-metal dependen de la presencia de oxígeno, hidrógeno o nitrógeno, individualmente o combinados en la atmósfera de protección. El oxígeno puede ser aspirado de la atmósfera o provenir de la disociación de vapor de agua, dióxido de carbono u óxido metálico. El aire es la fuente más común de nitrógeno, pero también puede usarse como gas de protección para la soldadura de aceros inoxidable austeníticos o dúplex. Hay muchas fuentes de hidrógeno. En SMAW o SAW, el hidrógeno puede estar presente como agua en el revestimiento del electrodo o fundente suelto. El hidrógeno también puede provenir de lubricantes, agua en la pieza de trabajo, óxidos superficiales, metal de aporte contaminado, o humedad o lluvia.</p>
    <p>Un factor importante en la selección de gases de protección es el tipo de mezcla. Un gas reactivo como el dióxido de carbono puede descomponerse a temperaturas de arco en carbono y oxígeno. Esto generalmente no es un problema en aceros al carbono y de baja aleación. Sin embargo, en metales de alta aleación y reactivos, esto puede causar un aumento en el contenido de carbono y la formación de óxidos que pueden disminuir las propiedades resistentes a la corrosión de la soldadura. Los materiales de alta aleación soldados con procesos protegidos por gas generalmente emplean gases de protección inertes o mezclas con solo ligeras adiciones de gases reactivos para promover la estabilidad del arco.</p>
    
    <h3>10.3 Propiedades Físicas</h3>
    <h4>10.3.1 General</h4>
    <p>Las propiedades físicas de los metales base, metales de aporte y aleaciones que se están uniendo pueden influir en la eficiencia y aplicabilidad de un proceso de soldadura. La naturaleza y propiedades de la protección gaseosa proporcionada por la descomposición de materiales fundentes o la introducción directa de gases de protección utilizados para proteger la soldadura de la contaminación atmosférica pueden tener un efecto pronunciado en su capacidad para proporcionar una protección adecuada y en las propiedades químicas y mecánicas finales de una soldadura.</p>
    <p>Las propiedades físicas de un metal o aleación son aquellas que son relativamente insensibles a la estructura y pueden medirse sin la aplicación de fuerza. Ejemplos de propiedades físicas de un metal son la temperatura de fusión, la conductividad térmica, la conductividad eléctrica, el coeficiente de expansión térmica y la densidad.</p>
    
    <h4>10.3.2 Temperatura de Fusión</h4>
    <p>Es importante conocer la temperatura de fusión de los diferentes metales porque cuanto más alto sea el punto de fusión, mayor será la cantidad de calor necesaria para fundir un volumen dado de metal. Esto rara vez es un problema en la soldadura por arco ya que las temperaturas del arco superan con creces las temperaturas de fusión de los aceros al carbono y de baja aleación. El soldador simplemente aumenta el amperaje para obtener más calor, controlando así el volumen de metal de soldadura fundido por unidad de longitud de soldadura a un voltaje o longitud de arco y velocidad de avance dados.</p>
    <p>Un metal puro tiene una temperatura de fusión definida y específica que está justo por encima de su temperatura de solidificación. Sin embargo, la fusión completa de materiales aleados ocurre en un rango de temperaturas, dependiendo principalmente de los porcentajes de elementos de aleación. Los metales aleados comienzan a fundirse a una temperatura que está justo por encima de su temperatura sólido, y, debido a que pueden contener diferentes fases metalúrgicas, la fusión continúa a medida que aumenta la temperatura hasta que alcanza su temperatura líquido.</p>
    
    <h4>10.3.3 Conductividad Térmica</h4>
    <p>La conductividad térmica de un material es la velocidad a la que el calor se transmite a través de un material por conducción o transmisión térmica. En general, los metales con alta conductividad eléctrica también tienen alta conductividad térmica. Los materiales con alta conductividad térmica requieren mayores aportes de calor para soldarse que aquellos con menor conductividad térmica y pueden requerir precalentamiento. El acero es un mal conductor del calor en comparación con el aluminio o el cobre. Como resultado, se requiere menos calor para fundir el acero. El aluminio es un buen conductor del calor y tiene la capacidad de transferir calor eficientemente. Esta capacidad del aluminio para transferir calor tan eficientemente también lo hace más difícil de soldar con fuentes de calor de baja temperatura.</p>
    <p>La conductividad térmica de un material disminuye a medida que aumentan las temperaturas. La aleación de metales puros también disminuye la conductividad térmica de un material. Generalmente, un material que contiene elementos de aleación sustanciales tendría como resultado una menor conductividad térmica, y se requieren menores aportes de calor para elevar el material a una temperatura deseada.</p>
    
    <h4>10.3.4 Conductividad Eléctrica</h4>
    <p>La conductividad eléctrica de un material es una medida de su eficiencia mientras conduce corriente eléctrica. Los metales son buenos conductores de la electricidad. Los metales que tienen alta conductividad eléctrica son más eficientes en conducir corriente eléctrica que aquellos con baja conductividad eléctrica.</p>
    <p>El aluminio y el cobre tienen alta conductividad eléctrica en comparación con el hierro y el acero. Su resistencia eléctrica también es mucho menor, y como resultado, se genera menos calor en el proceso de transportar corriente eléctrica. Esta es una de las razones por las que el cobre y el aluminio se utilizan en cables y alambres eléctricos.</p>
    <p>La capacidad del acero para transportar corriente eléctrica es mucho menos eficiente y se produce más calor por su alta medida de resistencia eléctrica. En consecuencia, el acero puede calentarse con menores aportes de calor que los requeridos para el aluminio o el cobre debido a su menor medida de conductividad eléctrica y mayor resistencia eléctrica.</p>
    
    <h4>10.3.5 Coeficiente de Expansión Térmica</h4>
    <p>A medida que los metales se calientan, hay un aumento en el volumen. Este aumento se mide en dimensiones lineales a medida que aumenta la temperatura. Este aumento lineal con aumento de temperatura, por grado, se expresa como el coeficiente de expansión térmica. Un ejemplo de esto sería el aumento de longitud de una barra de acero que ha sido calentada en su centro con un soplete oxi-combustible. A medida que la barra se calienta, hay un aumento medible en la longitud que se correlaciona con la temperatura y el coeficiente de expansión térmica especificado para el material a esa temperatura. Este coeficiente de expansión térmica puede no ser constante en todo un rango de temperatura dado debido a los cambios de fase que experimenta un material a diferentes temperaturas y los aumentos o disminuciones en el volumen que acompañan a estos cambios de fase.</p>
    <p>Los metales con un alto coeficiente de expansión térmica son mucho más susceptibles a la deformación y distorsión durante la soldadura. Los aumentos en longitud y contracción que acompañan al calentamiento y enfriamiento durante la soldadura deben anticiparse, y establecer procedimientos que aseguren que se utilicen tolerancias adecuadas para minimizar los efectos de las condiciones térmicas. La unión de metales cuyos coeficientes de expansión térmica difieren greatly también puede contribuir a condiciones de fatiga térmica, y resultar en una falla prematura del componente. A menudo se emplean procedimientos de soldadura que especifican metales de aporte especiales que minimizan los efectos adversos causados por diferencias inherentes entre los metales que se están uniendo. Los controles adicionales incluyen evitar la restricción excesiva durante la soldadura y TTSP para aliviar las tensiones residuales generadas durante el proceso de soldadura.</p>
    
    <h4>10.3.6 Densidad</h4>
    <p>La densidad de un material se define como su masa por unidad de volumen. Las fundiciones, y por lo tanto las soldaduras, generalmente son menos densas que un material forjado de composición similar. Las fundiciones y soldaduras contienen porosidad e inclusiones que producen un metal de menor densidad. Este es un factor importante empleado durante la radiografía (RT) de uniones soldadas.</p>
    <p>La densidad de un metal es importante para un diseñador, pero más importante para el soldador es la densidad de los gases de protección. Un gas con mayor densidad es más eficiente como gas de protección que uno de menor densidad ya que protege el entorno de soldadura por más tiempo antes de dispersarse.</p>
    
    <h3>10.4 Propiedades Mecánicas</h3>
    <h4>10.4.1 General</h4>
    <p>Las propiedades mecánicas de los metales base, metales de aporte y soldaduras completadas son de gran importancia en la consideración del diseño e integridad de estructuras y componentes soldados. Los ingenieros seleccionan materiales de construcción que proporcionan las propiedades del material requeridas a las temperaturas y presiones de operación. Para el inspector, es esencial verificar que las propiedades mecánicas cumplan con los requisitos de diseño. Los inspectores deben entender los principios subyacentes de las propiedades mecánicas y la naturaleza de las pruebas realizadas para verificar el valor de esas propiedades. Este es uno de los principios fundamentales para realizar pruebas de calificación de procedimientos de soldadura. Ejemplos de propiedades mecánicas de metales y aleaciones son la resistencia a la tracción, el límite elástico, la ductilidad, la dureza y la tenacidad.</p>
    
    <h4>10.4.2 Resistencia a la Tracción y Límite Elástico</h4>
    <p>La prueba de tracción se utiliza para determinar la resistencia a la tracción última, el límite elástico y la elongación y reducción de área de un metal. Una prueba de tracción se realiza tirando de una probeta de prueba hasta la falla con carga creciente.</p>
    <p>El esfuerzo se define como la fuerza que actúa en una región dada del metal cuando se aplica una carga externa. El esfuerzo nominal de un metal es igual a la resistencia a la tracción. La resistencia a la tracción última de un metal se determina dividiendo la carga externa aplicada por el área de la sección transversal de la probeta de tracción.</p>
    <p>La deformación se define como la cantidad de deformación, o cambio de forma, que una probeta ha experimentado cuando se somete a esfuerzo. La deformación se expresa como la longitud de elongación dividida por la longitud original de la probeta antes de ser sometida a esfuerzo.</p>
    <p>Cuando la probeta se somete a esfuerzos pequeños, la deformación es directamente proporcional al esfuerzo. Esto continúa hasta que se alcanza el punto de fluencia del material. Si el esfuerzo se eliminara antes de alcanzar el punto de fluencia del metal, la probeta debería volver a su longitud original, y esto se considera deformación elástica. Sin embargo, el esfuerzo aplicado por encima del punto de fluencia produce un aumento permanente en la longitud de la probeta y la fluencia se considera deformación plástica. El esfuerzo continuado puede resultar en algún endurecimiento por trabajo (aumento de la resistencia de un material mediante deformación plástica) con un aumento en la resistencia de la probeta. La elongación uniforme continuará, y la elongación comenzará a concentrarse en una región localizada dentro de la longitud calibrada, al igual que la reducción del diámetro de la probeta. Se dice que la probeta de prueba comienza a "estrecharse". El estrechamiento continúa hasta que la probeta ya no puede resistir el esfuerzo y la probeta se separa o fractura. El esfuerzo al que esto ocurre se llama resistencia a la tracción última.</p>
    <p>Para fines de diseño, la máxima utilidad debe basarse en el límite elástico de un material, ya que este se considera la zona elástica/plástica para un material, en lugar de solo en la resistencia a la tracción última o resistencia a la fractura de un material.</p>
    
    <h4>10.4.3 Ductilidad</h4>
    <p>En la prueba de tracción, la ductilidad se define como la capacidad de un material para deformarse plásticamente sin fracturarse, medida por elongación o reducción de área.</p>
    <p>La elongación es el aumento en la longitud calibrada, medido después de la fractura de la probeta dentro de la longitud calibrada, generalmente expresado como un porcentaje de la longitud calibrada original. La ductilidad de un material, cuando se somete a cargas de tracción crecientes, puede ser útil para el diseñador para determinar hasta qué punto un metal puede deformarse sin fractura en operaciones de trabajo de metales como laminado y extrusión, o durante condiciones de servicio.</p>
    <p>La probeta de tracción se marca con punzón dos veces en la sección central de la probeta, se mide esta distancia, y se mide el diámetro del área reducida antes de someterla a la carga de tracción. Después de que la probeta se ha fracturado, las dos mitades de la probeta de tracción fracturada se vuelven a juntar lo más cerca posible, y se vuelve a medir la distancia entre las marcas de punzón. El aumento en la longitud calibrada después de la fractura en comparación con la longitud calibrada original antes de someter la probeta a cargas de tracción es la elongación de la probeta. Esto generalmente se expresa como el porcentaje de elongación dentro de 2 pulg. (50 mm) de longitud calibrada. También se mide el diámetro en el punto de fractura y se calcula la reducción de área a partir del área original. Esta reducción de área se expresa como un porcentaje. Tanto la elongación como el porcentaje de reducción de área son medidas de la ductilidad de un material.</p>
    <p>El diseño de componentes puede basarse tanto en el límite elástico como en la resistencia a la tracción. La deformación permanente resultante del flujo plástico ocurre cuando se excede el límite elástico del componente. Un material sometido a cargas más allá de su límite elástico puede volverse endurecido por deformación, o endurecido por trabajo. Esto resulta en un límite elástico efectivo más alto; sin embargo, la ductilidad general basada en la condición endurecida por deformación es menor que la de un material que no ha sido sometido a cargas que exceden el límite elástico. Algunos materiales también se deterioran en términos de ductilidad debido al ciclo térmico en servicio. La reducción en ductilidad en estos casos puede disminuir tanto que la fractura durante la reparación en servicio puede ser muy difícil de evitar. Esto a veces se experimenta durante la soldadura de reparación de placas tubulares de intercambiadores de aleación compleja.</p>
    <p>Una de las pruebas más comunes utilizadas en el desarrollo de procedimientos de soldadura es la prueba de doblado. La prueba de doblado se utiliza para evaluar la ductilidad relativa y solidez de la unión soldada o probeta de soldadura. La probeta generalmente se dobla en un dispositivo de prueba guiado especial. Las probetas se someten a deformación en el lado convexo de la probeta doblando la probeta a un radio especificado que se basa en el tipo de material y grosor de la probeta. Los códigos generalmente especifican un tamaño máximo permitido para grietas u otras imperfecciones en la probeta de doblado. Las grietas y desgarros resultantes de una falta de ductilidad o discontinuidades en el metal de soldadura se evalúan para aceptación o rechazo según los requisitos del código aplicable.</p>
    
    <h4>10.4.4 Dureza y Pruebas de Dureza</h4>
    <p>La dureza de un material se define como la resistencia a la deformación plástica por indentación. La dureza por indentación puede medirse mediante varias pruebas de dureza, como Brinell, Rockwell, Knoop y Vickers.</p>
    <p>Las mediciones de dureza pueden proporcionar información sobre los cambios metalúrgicos causados por la soldadura o el trabajo en frío. En los aceros aleados, una medición de alta dureza podría indicar la presencia de martensita sin revenir en la soldadura o zona afectada por el calor, mientras que una baja dureza puede indicar una condición sobre-revenida.</p>
    <p>Hay una relación interaproximada entre los diferentes resultados de pruebas de dureza y la resistencia a la tracción de algunos metales. La correlación entre los valores de dureza y la resistencia a la tracción debe usarse con precaución cuando se aplica a uniones soldadas o cualquier metal con una estructura heterogénea.</p>
    <p>Una prueba de campo comparable a una prueba Brinell, comúnmente conocida como telebrineller, consiste en aplicar carga (fuerza), sobre una bola de acero endurecido o carburo de tungsteno de 10 mm de diámetro a una superficie plana de una probeta de prueba golpeando el yunque en el dispositivo Brinell con un martillo. El impacto se transmite por igual a una barra de prueba que se sostiene dentro del dispositivo que tiene un valor de dureza Brinell conocido y a través de la bola de indentación a la superficie de la probeta de prueba. El resultado es un diámetro de indentación en la barra de prueba y la superficie de la probeta de prueba. Los diámetros de las indentaciones resultantes se ven usando un comparador óptico con una escala graduada y están directamente relacionados con las durezas respectivas de la barra de prueba y la probeta de prueba.</p>
    <p>La prueba de dureza Rockwell difiere de la prueba Brinell en que el número de dureza se basa en una relación inversa a la medición de la profundidad adicional a la cual un indentador es forzado por una carga pesada (principal) más allá de la profundidad de una carga previamente aplicada (secundaria).</p>
    <p>La prueba Rockwell es simple y rápida. La carga secundaria se aplica automáticamente llevando manualmente la pieza de trabajo contra el indentador hasta que se establece la posición "fija". La posición cero se establece entonces en el indicador dial de la máquina de prueba. Luego se aplica la carga principal, y sin quitar la pieza de trabajo, se retira la carga principal, y el número Rockwell se lee entonces del dial.</p>
    <p>En la prueba Rockwell, la carga secundaria es siempre de 10 kg, pero la carga principal puede ser de 60 kg, 100 kg o 150 kg. Los indentadores pueden ser indentadores de cono de diamante (comúnmente conocidos como Brale), o indentadores de bola de acero endurecido de varios diámetros. El tipo de indentadores y cargas aplicadas depende del tipo de material a probar, así como de la dureza anticipada.</p>
    <p>Se ha asignado una letra a cada combinación de carga e indentador. La escala se indica mediante una combinación de sufijo de H para dureza, R para Rockwell, y luego una letra que indica la escala empleada. Por ejemplo, un valor de 55 en la escala C se expresa como 55 HRC.</p>
    <p>La prueba de dureza Vickers sigue el principio Brinell en que la dureza se calcula a partir de la relación de carga a área de una indentación en lugar de la profundidad (el principio Rockwell). En la prueba de dureza Vickers, un indentador de forma definida se presiona en el material de trabajo, se retira la carga, y se miden las diagonales de la indentación resultante. El número de dureza se calcula dividiendo la carga por el área de la superficie de la indentación. El indentador para la prueba Vickers está hecho de diamante en forma de pirámide de base cuadrada. La profundidad de la indentación es aproximadamente un séptimo de la longitud de la diagonal. El valor de dureza Vickers va precedido de la designación (HV). El número de dureza Vickers es el mismo que el número de dureza de pirámide de diamante (DPH).</p>
    <p>Las pruebas de dureza en servicio pueden implicar el uso de variaciones portátiles de los métodos descritos anteriormente. Alternativamente, pueden aplicarse técnicas variables basadas en rebote, resistencia a la indentación o indentaciones de comparador y los resultados relacionados con las escalas de dureza más comúnmente aceptadas. Cualquier técnica empleada puede ser aceptable siempre que produzca resultados verificables y consistentes.</p>
    <p>Varios códigos y estándares establecen requisitos de dureza para el metal base y las soldaduras. Los resultados de la prueba para el material o procedimientos de soldadura deben compararse con los estándares aplicables para asegurar que se cumplan los requisitos para las pruebas de dureza, y que los resultados de la prueba sean satisfactorios con los especificados por el código aplicable. A menudo hay requisitos de degradación en servicio que están relacionados con la dureza. Por ejemplo, la susceptibilidad al agrietamiento por H2S húmedo en el acero al carbono se reduce si los niveles de dureza se mantienen por debajo de HRC 22 (respectivamente, una lectura de "100" en HRB o una lectura de "61.5" en la escala HRA).</p>
    <p>Hay varios problemas a tener en cuenta al realizar pruebas de dureza de campo y al comparar números de dureza de diferentes métodos.</p>
    
    <h4>10.4.5 Tenacidad</h4>
    <p>La tenacidad es la capacidad de un metal para absorber energía y deformarse plásticamente antes de fracturarse. Una propiedad importante del material para los diseñadores de tanques y recipientes a presión es la "tenacidad a la fractura" de un metal, que se define como la capacidad de resistir la fractura o propagación de grietas bajo esfuerzo. Generalmente se mide por la energía absorbida en una prueba de impacto por entalla. Hay varios tipos de pruebas de tenacidad a la fractura. Una de las más comunes es una prueba de impacto por barra entallada llamada prueba de impacto Charpy. La prueba de impacto Charpy es una prueba de impacto de golpe único tipo péndulo donde la probeta se soporta en ambos extremos como una viga simple y se rompe por un péndulo que cae. La energía absorbida, según lo determinado por el subsiguiente ascenso del péndulo, es una medida de la resistencia al impacto o tenacidad a la entalla de un material. Los resultados de las pruebas generalmente se registran en libras-pie. El tipo de entalla y la temperatura de la prueba de impacto generalmente se especifican y registran, además del tamaño de la probeta (si son probetas subdimensionales, más pequeñas de 10 mm x 10 mm).</p>
    <p>Los materiales a menudo se prueban a varias temperaturas para determinar la temperatura de transición dúctil-frágil. Muchos códigos y estándares requieren pruebas de impacto a o por debajo de la temperatura mínima de diseño del metal basada en temperaturas de servicio o ubicación para asegurar que el material tenga suficiente tenacidad para resistir la fractura frágil.</p>
    
    <h3>10.5 Precalentamiento</h3>
    <p>Para estos propósitos, el precalentamiento se define como el calentamiento de la soldadura y el metal base circundante a una temperatura predeterminada antes del inicio de la soldadura. Además, generalmente se especifica una temperatura máxima permitida conocida como temperatura entre pasadas en un procedimiento de soldadura. El propósito principal del precalentamiento para aceros al carbono y de baja aleación es reducir la tendencia al agrietamiento diferido inducido por hidrógeno. Esto se logra expulsando la humedad de la superficie a soldar y ralentizando la velocidad de enfriamiento, lo que ayuda a prevenir la formación de martensita en la soldadura y la ZAT del metal base. Sin embargo, el precalentamiento puede realizarse por muchas razones, incluyendo las siguientes.</p>
    <ul>
        <li>Para elevar la temperatura a las temperaturas de precalentamiento o entre pasadas requeridas por el WPS;</li>
        <li>Para reducir las tensiones de contracción en la soldadura y el metal base, lo que es especialmente importante en uniones soldadas con alta restricción;</li>
        <li>Para reducir la velocidad de enfriamiento para prevenir el endurecimiento y una reducción en la ductilidad de la soldadura y la ZAT del metal base;</li>
        <li>Para mantener las temperaturas entre pasadas de la soldadura;</li>
        <li>Para eliminar la humedad del área de soldadura;</li>
        <li>Para cumplir con los requisitos del código de fabricación aplicable, como el Código ASME de Calderas y Recipientes a Presión, dependiendo del uso previsto, la química y el grosor del metal a soldar.</li>
    </ul>
    <p>Si se especifica precalentamiento en el WPS, es importante que el inspector confirme que se mantiene la temperatura requerida. Esto puede hacerse utilizando varios métodos, incluyendo termopares, pirómetro de contacto, instrumentos de medición de temperatura por infrarrojos, o crayones indicadores de temperatura. El inspector debe recordar que si se requiere precalentamiento durante la soldadura, el mismo precalentamiento debe aplicarse durante la soldadura de puntos, el biselado por arco y el corte térmico del metal, todos los cuales inducen cambios de temperatura similares a la soldadura de la unión. Las temperaturas más importantes son la temperatura de precalentamiento y la temperatura entre pasadas.</p>
    <p>El precalentamiento puede aplicarse utilizando varias técnicas diferentes, pero las técnicas más comunes utilizadas en la fabricación de tuberías y tanques son bobinas de resistencia eléctrica, o un soplete oxiacetilénico o de gas natural. La buena práctica es calentar uniformemente un área a cada lado de la unión soldada a una distancia tres veces el ancho de la soldadura. El precalentamiento debe aplicarse y extenderse al menos a 2 pulg. (50 mm) a cada lado de la soldadura para abarcar la soldadura y las áreas potenciales de ZAT. Los inspectores deben tener precaución al soldar metales de diferentes químicas o requisitos de precalentamiento, asegurando que los precalentamientos para ambos metales estén de acuerdo con los códigos y la documentación del WPS. Típicamente, el metal con el mayor requisito de precalentamiento rige y se identificará en el procedimiento de soldadura.</p>
    <p>Algunas aleaciones requieren enfriamiento controlado o calentamiento extendido después de completar la soldadura, antes de que comience el TTSP. La Sección IX de ASME define esto como "mantenimiento del precalentamiento". El calentamiento continuo o especial durante la soldadura también puede ser necesario para evitar el agrietamiento.</p>
    
    <h3>10.6 Tratamiento Térmico</h3>
    <p>El propósito del tratamiento térmico es impartir propiedades mecánicas deseables a un acero que sean apropiadas para su servicio previsto a través de cambios microestructurales (transformaciones de fase). Si bien hay muchos tipos de tratamientos térmicos basados en el material y su aplicación específica, las descripciones que siguen son aquellas típicamente utilizadas en muchas industrias. Los tratamientos térmicos se logran llevando el material a temperaturas de transformación (basado en el material, 1700 °F a 1800 °F para aceros), manteniendo durante un período de tiempo, y enfriando a varias velocidades.</p>
    
    <h4>10.6.1 Recocido Completo</h4>
    <p>Este proceso consiste en calentar el acero a y mantener a una temperatura adecuada por encima del rango de temperatura de transformación, seguido de un enfriamiento lento muy por debajo de la temperatura de transformación. El ciclo de enfriamiento generalmente ocurre en un horno o cuando la pieza está contenida dentro de un material aislante térmico. El material resultante tendrá valores de dureza relativamente bajos y alta tenacidad y ductilidad para posteriores trabajos de metal.</p>
    
    <h4>10.6.2 Normalizado</h4>
    <p>Este método se lleva a cabo a temperaturas relativamente altas, lo que hace que la estructura de grano del material se realinee, resultando en una estructura que tiene mayor dureza y mayor resistencia relativa que el recocido completo. El material férreo se calienta a una temperatura por encima del rango de temperatura de transformación seguido de enfriamiento en aire quieto muy por debajo del rango de temperatura de transformación. A diferencia del recocido completo, el material se retira del horno y se enfría al aire.</p>
    
    <h4>10.6.3 Cementación</h4>
    <p>El propósito de la cementación es difundir átomos de carbono a la capa externa de un material para formar carburos que aumenten significativamente la dureza superficial del material a expensas de la ductilidad. Las aplicaciones típicas incluyen superficies de desgaste como cuchillas. La cementación se realiza a temperaturas relativamente altas, 1700 °F (930 °C), en un baño líquido rico en carbono o ambiente gaseoso. Los cambios dimensionales son un resultado típico de esta operación.</p>
    
    <h4>10.6.4 Endurecimiento</h4>
    <p>El endurecimiento o templabilidad se define como esa propiedad de una aleación férrea que determina la profundidad y distribución de la dureza inducida por el temple. Es importante tener en cuenta que no hay una relación cercana entre la templabilidad y la dureza, que es la resistencia a la indentación. La dureza depende principalmente del contenido de carbono del material, mientras que la templabilidad se ve fuertemente afectada por la presencia de elementos de aleación como cromo, molibdeno y vanadio, y en menor medida por el contenido de carbono y elementos de aleación como níquel, cobre y silicio. Por ejemplo, un acero medio al carbono estándar, como AISI 1040 sin elementos de aleación, tiene menor templabilidad que el acero de baja aleación AISI 4340, que tiene la misma cantidad de carbono pero contiene pequeñas cantidades de cromo, níquel, molibdeno y silicio como elementos de aleación. Otros factores también pueden afectar la templabilidad en menor medida que la composición química; estos incluyen la estructura de grano, homogeneidad de la aleación, cantidad de ciertas fases microestructurales presentes en el acero, y limpieza microgeneral del acero.</p>
    <p>Las variables de soldadura como el aporte de calor, la temperatura entre pasadas y el tamaño del cordón de soldadura que se aplica afectan la velocidad de enfriamiento de la ZAT del metal base, lo que a su vez afecta la microestructura (formación de ferrita/perlita/martensita) y la dureza resultante. La velocidad de enfriamiento del metal base también puede verse afectada por el tamaño de la sección del metal base que se está soldando, la temperatura del metal que se está soldando, y la geometría de la unión soldada. Si los elementos de aleación que aumentan la templabilidad se encuentran en la ZAT del metal base, la velocidad de enfriamiento durante la soldadura necesaria para producir una ZAT de alta dureza generalmente es menor que para el acero al carbono simple sin altos porcentajes de elementos de aleación.</p>
    <p>El medio más simple para determinar la templabilidad es medir la profundidad a la cual una pieza de acero se endurece durante el temple desde una temperatura elevada. Hay varias pruebas estandarizadas para determinar la templabilidad. Una prueba típica de templabilidad se llama Prueba Jominy de Temple Extremo. En esta prueba, una barra redonda se calienta a una temperatura elevada predeterminada hasta calentarse uniformemente a través de la sección transversal. La probeta se somete entonces a un temple rápido rociando agua contra el extremo inferior de la barra redonda. La dureza de la probeta de prueba se mide en función de la distancia desde la superficie que se está templando. Los aceros que obtienen alta dureza bien lejos de la superficie templada se consideran que tienen alta templabilidad. Por el contrario, los aceros que no se endurecen bien lejos de la superficie templada se consideran que tienen baja templabilidad.</p>
    <p>Puede ser importante para el diseñador, ingeniero de soldadura e inspector entender la templabilidad del acero ya que puede ser un indicador indirecto de la soldabilidad. La templabilidad se relaciona con la cantidad de martensita que se forma durante los ciclos de calentamiento y enfriamiento de la soldadura. Esto es más evidente en la ZAT del metal base. Cantidades significativas de formación de martensita en la ZAT pueden llevar al agrietamiento asistido por hidrógeno o una pérdida en ductilidad y tenacidad. Ciertos aceros con alta templabilidad forman martensita cuando se enfrían al aire. Otros aceros con baja templabilidad requieren velocidades de enfriamiento mucho más rápidas para formar martensita. Conocer la templabilidad ayuda al ingeniero o inspector a determinar si se requiere precalentamiento o TTSP, o si una práctica de enfriamiento controlado puede ser aceptable para producir una soldadura utilizable y propiedades aceptables en la ZAT.</p>
    <p>El endurecimiento de la soldadura y la ZAT del metal base son importantes debido al agrietamiento asistido por hidrógeno que ocurre en aceros al carbono y de baja aleación. A medida que aumenta la dureza de la ZAT del metal base, también aumenta la susceptibilidad al agrietamiento asistido por hidrógeno. Los límites de dureza actualmente recomendados para aceros en servicio de proceso de refinería se enumeran en la Tabla 11. Los valores de dureza obtenidos por encima de estos generalmente indican que se necesita TTSP, independientemente de si está especificado en la especificación del procedimiento de soldadura. En aquellos casos donde se necesita TTSP, es necesario un procedimiento de soldadura alternativo calificado con TTSP.</p>
    <p>La dureza por encima de las enumeradas puede resultar en agrietamiento por corrosión bajo tensión en servicio debido a la presencia de sulfuros en el proceso. El límite de 200 BHN para el acero al carbono es igualmente importante en los aceites que contienen azufre como el límite para los aceros Cr-Mo.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 11—Límites de Dureza Brinell para Aceros en Servicios de Refinería</caption>
            <thead>
                <tr>
                    <th>Metal Base</th>
                    <th>Valor Brinell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Acero al Carbono</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>C-1/2 Mo</td>
                    <td>225</td>
                </tr>
                <tr>
                    <td>1-1/4 Cr-1/2 Mo</td>
                    <td>225</td>
                </tr>
                <tr>
                    <td>2-1/4 Cr-1 Mo</td>
                    <td>241</td>
                </tr>
                <tr>
                    <td>5, 7, 9, Cr-Mo</td>
                    <td>241</td>
                </tr>
                <tr>
                    <td>12 Cr</td>
                    <td>241</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <h4>10.6.5 Revenido</h4>
    <p>El propósito del revenido es disminuir la fragilidad del material, aumentando su ductilidad y tenacidad, y aliviar las tensiones residuales, ya sea de su proceso de fabricación o impartidas durante operaciones de tratamiento térmico previamente aplicadas. La operación resultante generalmente resulta en una reducción del límite elástico y la resistencia a la tracción.</p>
    
    <h4>10.6.6 Tratamiento Térmico Posterior a la Soldadura (TTSP)</h4>
    <p>El TTSP produce efectos mecánicos y metalúrgicos en aceros al carbono y de baja aleación que varían ampliamente dependiendo de la composición del acero, su historial térmico pasado, la temperatura y duración del TTSP, y las velocidades de calentamiento y enfriamiento empleadas durante el TTSP. La necesidad de TTSP depende de muchos factores, incluyendo la química del metal, el grosor de las piezas que se están uniendo, el diseño de la unión, los procesos de soldadura, y las condiciones de servicio o proceso. El tipo de TTSP se selecciona considerando los cambios que se buscan en el equipo o estructura. Por ejemplo, un simple alivio de tensiones para reducir las tensiones residuales se realiza a una temperatura más baja que un tratamiento térmico de normalizado. El tiempo de mantenimiento a la temperatura también debe seleccionarse para permitir que las acciones dependientes del tiempo a temperatura tengan lugar. En algunos casos aislados, el tiempo de mantenimiento y la temperatura son intercambiables, pero se ha demostrado que pequeños cambios de temperatura son equivalentes a grandes cambios en los tiempos de mantenimiento.</p>
    <p>La razón principal para el TTSP es aliviar las tensiones residuales en una fabricación soldada. En soldaduras ferríticas, el TTSP también se realiza para reducir la dureza de la ZAT. Las tensiones ocurren durante la soldadura debido al calentamiento localizado y los cambios severos de temperatura que ocurren. El TTSP libera estas tensiones permitiendo que el metal se deforme ligeramente a la temperatura elevada. Sin embargo, también puede haber condiciones en servicio que requieran condiciones particulares de TTSP. Estas pueden no estar tan detalladas en las especificaciones de construcción y los inspectores por lo tanto deben ser particularmente conscientes de estos requisitos potenciales al permitir, autorizar o inspeccionar reparaciones en servicio.</p>
    <p>El TTSP (alivio de tensiones) puede aplicarse mediante calentamiento por resistencia eléctrica, calentamiento en horno, o, si lo permite el código, calentamiento local con llama. Las temperaturas deben monitorearse y registrarse mediante termopares adjuntos a la pieza que se está calentando. Son necesarios múltiples termopares para asegurar un TTSP adecuado de todos los componentes. Debe proporcionarse soporte adecuado durante cualquier TTSP para evitar la deformación.</p>
    
    <h3>10.7 Informes de Prueba de Materiales</h3>
    <p>Típicamente hay dos tipos de informes de prueba en un informe de prueba de materiales (MTR). Un análisis de colada, o certificado de fábrica, es una declaración del análisis químico y el porcentaje en peso de los elementos químicos presentes en un lingote o una billet. Un lingote y una billet son las formas habituales en las que se funde un metal fundido. Estas formas son los puntos de partida para la fabricación de formas forjadas mediante el proceso de conformado de metales, como laminado, estirado, forja o extrusión. Un análisis de producto es una declaración del análisis químico del producto final y es suministrado por el fabricante del material. Estos informes pueden suministrarse para cualquier forma de material, incluyendo productos forjados, como placas, tuberías, accesorios, tubos, fundiciones y metales de aporte de soldadura. El análisis de producto es más útil para el inspector e ingeniero porque proporciona una identificación más confiable del material real que se utiliza para nueva fabricación o reparación de equipos existentes.</p>
    <p>Para los propósitos de esta publicación, la información sobre los MTR pertenece a los certificados de producto para aceros al carbono, de baja aleación e inoxidable. Sin embargo, debe tenerse en cuenta que los documentos MTR pueden incluir, pero no se limitan a, la siguiente información:</p>
    <ul>
        <li>fabricante del material;</li>
        <li>fecha de fabricación;</li>
        <li>número de colada del material;</li>
        <li>estándar(es) nacional(es) aplicable(s) a los que se conforma la colada, como ASTM, ASME, o MIL-STD;</li>
        <li>tratamiento térmico, si es aplicable;</li>
        <li>química de la colada;</li>
        <li>propiedades mecánicas, como mínimo las requeridas por los Estándares Nacionales aplicables;</li>
        <li>cualquier otro requisito especificado por el Estándar Nacional aplicable;</li>
        <li>cualquier información suplementaria o prueba solicitada por el comprador, que puede incluir pero no limitarse a:
            <ol>
                <li>resistencia al impacto;</li>
                <li>determinación de la temperatura de transición dúctil-frágil;</li>
                <li>tenacidad a la fractura;</li>
                <li>pruebas de propiedades mecánicas elevadas (es decir, tracción, ductilidad en caliente, o pruebas de creep);</li>
                <li>templabilidad;</li>
                <li>dureza;</li>
                <li>respuesta al tratamiento térmico (es decir, tratamiento térmico postfabricación propuesto como endurecimiento por precipitación, necesario para lograr propiedades mecánicas);</li>
                <li>análisis microestructural, como evaluación del tamaño de grano;</li>
                <li>examen no destructivo, como UT.</li>
            </ol>
        </li>
    </ul>
    <p>El inspector debe revisar el MTR para confirmar que los materiales que se utilizan para la fabricación de nuevos equipos o reparación de equipos existentes cumplen con los requisitos especificados por el código/estándar aplicable o requisitos adicionales especificados por el usuario. El ingeniero de soldadura también puede utilizar la información de un MTR para determinar la soldabilidad de los materiales que se utilizarán, y recomendar procedimientos de soldadura adecuados, precalentamiento y tratamiento térmico posterior a la soldadura. El análisis químico dado en el informe de prueba puede usarse para calcular el equivalente de carbono para ese material. Es importante tener en cuenta que los MTR generalmente no se suministran al comprador a menos que se soliciten. Es una buena práctica para el comprador solicitar los informes de prueba de fábrica.</p>
    
    <h3>10.8 Soldabilidad de Metales</h3>
    <h4>10.8.1 General</h4>
    <p>Hay muchos libros dedicados a la soldabilidad de metales y aleaciones. La soldabilidad es una propiedad complicada que no tiene una definición universalmente aceptada. El término se interpreta ampliamente por la experiencia individual. La American Welding Society define la soldabilidad como "la capacidad de un metal para ser soldado bajo las condiciones de fabricación impuestas, en una estructura específica y adecuadamente diseñada, y para desempeñarse satisfactoriamente en el servicio previsto". La soldabilidad está relacionada con muchos factores incluyendo los siguientes:</p>
    <ul>
        <li>la compatibilidad metalúrgica del metal o aleación que se está soldando, que está relacionada con la composición química y microestructura del metal o aleación, y el metal de aporte de soldadura utilizado;</li>
        <li>los procesos específicos de soldadura que se utilizan para unir el metal;</li>
        <li>las propiedades mecánicas del metal, como resistencia (límite elástico y a la tracción), ductilidad y tenacidad;</li>
        <li>la capacidad del metal para ser soldado de manera que la soldadura completada tenga propiedades mecánicas sanas;</li>
        <li>el diseño de la unión soldada.</li>
    </ul>
    
    <h4>10.8.2 Metalurgia y Soldabilidad</h4>
    <p>Un factor principal que afecta la soldabilidad de metales y aleaciones es su composición química. La composición química no solo controla el rango de propiedades mecánicas en aceros al carbono y aleados, tiene la mayor influencia en los efectos de la soldadura sobre el material. Los ciclos térmicos de la soldadura en efecto producen un tratamiento térmico sobre el metal que puede tener un efecto sustancial en las propiedades mecánicas, dependiendo de la composición química del metal que se está soldando. Como se señaló anteriormente, cada tipo de metal tiene límites de procedimiento de soldadura dentro de los cuales se pueden fabricar soldaduras sanas con propiedades satisfactorias. Si estos límites son amplios, se dice que el metal tiene buena soldabilidad. Si los límites son estrechos, se considera que el metal tiene pobre soldabilidad.</p>
    <p>La adición de carbono generalmente hace que el metal sea más difícil de soldar sin agrietamiento. El contenido de carbono tiene el mayor efecto en las propiedades mecánicas, como resistencia a la tracción, ductilidad y tenacidad en la ZAT del metal base y la soldadura. El contenido de carbono influye en la susceptibilidad del metal a problemas de agrietamiento diferido por hidrógeno. El contenido de carbono, o equivalente de carbono, del acero al carbono determina la necesidad de precalentamiento y TTSP.</p>
    <p>Los elementos de aleación distintos del carbono se añaden a los aceros aleados por varias razones y pueden tener una influencia en la soldabilidad y propiedades mecánicas del metal. Algunos elementos de aleación, como manganeso, cromo, níquel y molibdeno se añaden para proporcionar efectos beneficiosos en la resistencia, tenacidad y resistencia a la corrosión. Algunos de estos elementos son beneficiosos en los aceros sin tratamiento térmico, mientras que otros entran en juego durante los tratamientos térmicos necesarios para producir las propiedades mecánicas deseadas. Estos elementos de aleación pueden tener un fuerte efecto en la templabilidad, por lo que también pueden afectar la soldabilidad del metal que se está soldando.</p>
    <p>Hay algunos elementos presentes en aceros al carbono y aleados que no se añaden deliberadamente que pueden tener un efecto en la soldabilidad. Estos incluyen azufre, fósforo, estaño, antimonio y arsénico. Estos elementos a veces se denominan elementos "tramposos" o "capturadores".</p>
    <p>Una herramienta que se ha desarrollado para ayudar a evaluar la soldabilidad de aceros al carbono y aleados es el concepto de equivalente de carbono (CE). El cálculo de CE establece un contenido teórico de carbono del metal y considera no solo el carbono, sino también el efecto de otros elementos de aleación y elementos tramposos. Varias ecuaciones diferentes para expresar el equivalente de carbono están en uso. Una ecuación común para aceros al carbono y aceros al manganeso es:</p>
    <p>CE = C+Mn/6 + C+Mo+V/5 + Ni+Cu/15</p>
    <p>Típicamente, los aceros con un CE menor de 0.35 no requieren precalentamiento. Los aceros con un CE de 0.35 a 0.55 generalmente requieren precalentamiento, y los aceros con un CE mayor de 0.55 requieren tanto precalentamiento como TTSP. Sin embargo, los requisitos para el precalentamiento deben evaluarse considerando otros factores como el nivel de hidrógeno, humedad y grosor de la sección. Dado que el precalentamiento proporciona un beneficio significativo a la soldadura, debe considerarse al desarrollar un procedimiento de soldadura.</p>
    
    <h4>10.8.3 Pruebas de Soldabilidad</h4>
    <p>Uno de los mejores medios para determinar la soldabilidad de un metal o combinación de metales es realizar pruebas directas de soldabilidad. Las pruebas directas para soldabilidad se definen como aquellas pruebas que especifican la soldadura como una característica esencial de la probeta de prueba. Las pruebas de soldabilidad proporcionan una medida de los cambios inducidos por la soldadura en una propiedad específica del acero y un medio para evaluar el rendimiento esperado de las uniones soldadas.</p>
    <p>El problema de predecir el rendimiento de estructuras o equipos soldados a partir de una prueba de tipo laboratorio es complejo porque el tamaño, configuración, ambiente y tipo de carga no son consistentes bajo la mayoría de las condiciones de servicio. Por esta razón, ninguna prueba única puede esperarse que mida todos los aspectos de una propiedad tan compleja como la soldabilidad, y la mayoría de las soldaduras se evalúan mediante varias pruebas. Si las pruebas van a ser útiles en relación con la fabricación, deben diseñarse para medir la susceptibilidad del sistema metal de soldadura-metal base a defectos como grietas en el metal de soldadura o metal base, desgarro laminar, y porosidad o inclusiones bajo condiciones típicas de soldadura adecuadamente controladas. La selección de un método de prueba también puede tener que equilibrar tiempo y costo para reparaciones de emergencia o trabajos de parada.</p>
    <p>Las pruebas de soldabilidad más simples son aquellas que evalúan la resistencia y ductilidad de la soldadura. Las pruebas que evalúan la resistencia incluyen pruebas de tensión de soldadura, resistencia al corte y dureza. Las pruebas de ductilidad y tenacidad a la fractura incluyen pruebas de doblado e impacto. Estas pruebas evalúan la resistencia a la rotura, ductilidad y tenacidad de uniones soldadas simples. Estas pruebas son las mismas que las pruebas utilizadas para la calificación de procedimientos de soldadura y soldadores según el Código ASME de Calderas y Recipientes a Presión. Si la soldadura tiene resistencia y ductilidad adecuadas, generalmente se considera aceptable para el servicio.</p>
    <p>Las pruebas de soldabilidad de fabricación que incorporan la soldadura en su ejecución pueden clasificarse ampliamente como pruebas de agrietamiento por restricción, pruebas de desgarro laminar, pruebas de agrietamiento por carga externa, pruebas de agrietamiento bajo el cordón, o pruebas simples de solidez del metal de soldadura. Algunas de estas pruebas pueden usarse para detectar la susceptibilidad a más de un tipo de defecto, mientras que otras están destinadas como pruebas de un solo propósito, y otras aún pueden ser de tipo pasa/no pasa.</p>
    <p>La restricción de la soldadura induce tensiones que pueden contribuir al agrietamiento tanto de la soldadura como del metal base en soldaduras de fabricación. Este tipo de agrietamiento ocurre cuando la rigidez de la unión es tan severa que la resistencia del metal base o del metal de soldadura no puede resistir adecuadamente el esfuerzo y la deformación aplicados por la expansión y contracción de la unión soldada. Las probetas de agrietamiento por restricción de soldadura están diseñadas para permitir una variación cuantitativa en la restricción bajo condiciones realistas de soldadura para que pueda evaluarse la contribución del metal de soldadura, metal base y procesos de soldadura con respecto a la contribución al agrietamiento. Los métodos típicos de prueba de restricción de soldadura incluyen la prueba de restricción Lehigh, prueba de ranura, prueba de agrietamiento por restricción rígida (RRC), y prueba de agrietamiento por restricción de soldadura circular.</p>
    <p>Otro enfoque para medir la susceptibilidad al agrietamiento de soldadura es aplicar una carga externa durante la soldadura o posterior a la soldadura. La carga está destinada a duplicar o magnificar las tensiones de la restricción de una unión soldada rígida. Las pruebas proporcionan una capacidad para controlar el esfuerzo y la deformación aplicados a la unión soldada y, por lo tanto, proporcionan un índice relativo de la susceptibilidad al agrietamiento de soldadura. Los métodos de prueba que utilizan carga externa incluyen la prueba de implante, prueba de agrietamiento por restricción de tracción (TRC), y prueba de ductilidad en caliente Varestraint. También hay una prueba especializada llamada prueba Gleeble que también aplica una carga a la probeta durante el calentamiento o fusión del metal.</p>
    <p>Está más allá del alcance de este documento describir cada prueba en detalle; sin embargo, una descripción general de diferentes tipos de pruebas y los tipos de defectos que pueden detectar se da en la Tabla 12.</p>
    
    <div class="table-container">
        <table class="api-table">
            <caption>Tabla 12—Pruebas de Grietas de Soldadura</caption>
            <thead>
                <tr>
                    <th></th>
                    <th colspan="5">Agrietamiento del Metal de Soldadura</th>
                    <th colspan="5">Agrietamiento del Metal Base</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Solidificación</th>
                    <th>Raíz y Talón</th>
                    <th>Microgrietas</th>
                    <th>Asistido por H</th>
                    <th>Alivio de Tensión</th>
                    <th>Desgarro Laminar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Pruebas de Restricción</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba Lehigh</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba de Ranura</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba Tekken</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba RRC</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba de Soldadura Circular</td>
                    <td>x</td>
                    <td>x</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Pruebas con Carga Externa</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba Varestraint</td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba de Implante</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                </tr>
                <tr>
                    <td>Prueba TRC</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Prueba de Desgarro Laminar</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba de Voladizo</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                </tr>
                <tr>
                    <td>Prueba Cranfield</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                </tr>
                <tr>
                    <td><strong>Prueba de Agrietamiento Bajo el Cordón</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba de Cordón Longitudinal</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba Cruciforme</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Prueba CTS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>x</td>
                    <td></td>
                    <td>x</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <h3>10.9 Soldabilidad de Aleaciones Altas</h3>
    <h4>10.9.1 General</h4>
    <p>Esta sección proporciona información sobre la soldadura de metales de alta aleación, como aceros inoxidable austeníticos, aceros inoxidable endurecibles por precipitación, y aleaciones base níquel. Estos materiales no son tan comunes como los aceros al carbono y de baja aleación (por ejemplo, aceros 11/4 Cr-1/2 Mo a 9 Cr-1 Mo) pero aún pueden usarse en algunos procesos dentro de la industria del petróleo.</p>
    
    <h4>10.9.2 Aceros Inoxidables Austeníticos</h4>
    <p>Los aceros inoxidable austeníticos son aleaciones base hierro que típicamente contienen bajo carbono, cromo entre 15 % a 32 %, y níquel entre 8 % a 37 %. Se utilizan por su resistencia a la corrosión y resistencia a la degradación a alta temperatura. Los aceros inoxidable austeníticos se consideran que tienen buena soldabilidad y pueden soldarse utilizando cualquier proceso o técnica de soldadura común. Las consideraciones más importantes para la soldadura de aceros inoxidable austeníticos son el agrietamiento por solidificación, agrietamiento en caliente, distorsión, y mantener la resistencia a la corrosión.</p>
    <p>El agrietamiento por solidificación y el agrietamiento en caliente (a veces llamado fragilidad en caliente) están directamente relacionados con la química del metal de soldadura y las fases metalúrgicas resultantes que se forman en el metal de soldadura. El mecanismo de agrietamiento tanto del agrietamiento por solidificación como del agrietamiento en caliente es el mismo. Las grietas pueden ocurrir en varias regiones de la soldadura con diferentes orientaciones. Pueden aparecer como grietas en la línea central, grietas transversales, y como microgrietas en el metal de soldadura subyacente o ZAT adyacente. El agrietamiento se debe principalmente a fases líquidas de bajo punto de fusión que permiten que los límites se separen bajo los esfuerzos térmicos y de contracción durante la solidificación y enfriamiento de la soldadura.</p>
    <p>La medida más común de soldabilidad y susceptibilidad al agrietamiento en caliente es el número de ferrita del metal de soldadura. Las soldaduras austeníticas requieren una cantidad mínima de ferrita delta para resistir el agrietamiento. La cantidad de ferrita en el metal de soldadura es principalmente una función tanto de la química del metal base como del metal de soldadura. Para soldaduras hechas sin metal de aporte, la química del metal base debe ser apropiada para producir las pequeñas cantidades de ferrita que se necesitan para prevenir el agrietamiento. Si la química del metal base no permite la formación de ferrita, entonces se recomienda metal de aporte para producir ferrita adecuada en el metal de soldadura. Los parámetros y prácticas de soldadura también pueden afectar la formación de ferrita. Por ejemplo, pequeñas cantidades de nitrógeno absorbidas en el metal de soldadura pueden reducir la formación de ferrita. El Boletín WRC 342 contiene diagramas que predicen con precisión la cantidad de ferrita presente en un metal de soldadura basado en el cálculo de equivalentes de níquel y cromo basados en la química del metal de soldadura y el metal base. Varios recursos recomiendan un mínimo de 5 % a 20 % de contenido de ferrita para prevenir el agrietamiento.</p>
    <p>La soldabilidad de los aceros inoxidable austeníticos también puede verse afectada por la presencia de altos niveles de elementos de bajo punto de fusión como azufre, fósforo y selenio. Otros elementos como silicio y columbio (niobio) también aumentan la susceptibilidad al agrietamiento en caliente de los aceros inoxidable austeníticos.</p>
    <p>La distorsión es más a menudo un problema con la soldadura de aceros inoxidable austeníticos que con aceros al carbono o de baja aleación. La conductividad térmica de los aceros inoxidable austeníticos es aproximadamente un tercio la del acero al carbono y el coeficiente de expansión térmica es aproximadamente un 30 % mayor. Esto significa que la distorsión es mayor para los aceros inoxidable austeníticos que para los aceros al carbono. Pueden ser necesarias soldaduras de puntos más frecuentes para los aceros inoxidable para limitar la contracción.</p>
    <p>La soldadura puede reducir la resistencia a la corrosión de regiones de la ZAT de algunos aceros inoxidable austeníticos. Las áreas expuestas a temperaturas entre 800 °F a 1650 °F (430 °C a 900 °C) durante el tiempo suficiente pueden precipitar carburos de cromo en los límites de grano. El uso de aceros inoxidable de bajo contenido de carbono como el Tipo 304L o 316L, o grados estabilizados de aceros inoxidable como el Tipo 321 y 347, puede prevenir este fenómeno. También es importante seleccionar el metal de aporte adecuado para prevenir una pérdida en la resistencia a la corrosión. Deben usarse electrodos de bajo carbono o grados estabilizados de metal de aporte desnudo.</p>
    <p>La oxidación del lado inferior de las soldaduras hechas sin protección adecuada también puede ser perjudicial para la resistencia a la corrosión de los aceros inoxidable austeníticos. Para prevenir una pérdida en la resistencia a la corrosión, la raíz de la soldadura debe protegerse mediante el uso de un gas de respaldo inerte como argón o nitrógeno.</p>
    
    <h4>10.9.3 Aleaciones de Níquel</h4>
    <p>Las aleaciones de níquel, como la Aleación C276 o la Aleación 625, sufren problemas similares a los aceros inoxidable austeníticos. En general, la mayoría de los materiales de aleación de níquel se consideran que tienen menor soldabilidad que los aceros inoxidable austeníticos. Algunas aleaciones de níquel, como la Aleación 825, la Aleación 600 y la Aleación 625, tienen características de soldadura similares a los aceros inoxidable austeníticos, mientras que la Aleación 200, la Aleación 400 y la Aleación B-2 tienen características de soldadura muy diferentes a los aceros inoxidable austeníticos.</p>
    <p>Una de las principales diferencias entre las aleaciones de níquel y los aceros al carbono y aceros inoxidable austeníticos es la tendencia de las soldaduras de aleación de níquel a ser lentas durante la soldadura. Esto significa que para las aleaciones de níquel que el charco de soldadura fundido no se moverá tan fácilmente como lo hace para otros metales. Esta tendencia lenta significa que el soldador debe mover el charco de soldadura con un patrón de tejido u oscilación para asegurar una buena fusión de la pared lateral. Si no se usa alguna oscilación, resultará un perfil de soldadura convexo alto, lo que causará falta de fusión (LOF) en la pared lateral, socavación de la soldadura o inclusiones de escoria. La formación de un perfil de cordón de soldadura ligeramente cóncavo será más resistente al agrietamiento en la línea central. También es importante que el ángulo del chaflán para las aleaciones de níquel sea lo suficientemente ancho para permitir esta oscilación necesaria de la antorcha de soldadura.</p>
    <p>El chaflán de soldadura más ancho también será beneficioso con respecto a la penetración de la soldadura. Las aleaciones de níquel también sufren de una penetración de soldadura más superficial en comparación con los aceros al carbono y aceros inoxidable austeníticos. Para superar esto, la unión soldada se modifica teniendo un chaflán más ancho y una cara de raíz más delgada.</p>
    <p>Las aleaciones de níquel también son susceptibles al agrietamiento en caliente, en algunos casos más que los aceros inoxidable austeníticos. Este desgarro en caliente ocurrirá a medida que el charco de soldadura se enfría y solidifica. Para ayudar a prevenir el agrietamiento en caliente, la unión soldada debe diseñarse para minimizar la restricción y la soldadura debe permitirse enfriar tan rápido como sea posible. Cuanto más rápido se solidifique (congele) una soldadura de aleación de níquel, menos tiempo pasará en el rango de temperatura donde puede desgarrarse. Por esta razón, el precalentamiento, que ralentiza la velocidad de enfriamiento de la soldadura, podría ser perjudicial, ya que permite más oportunidad para que ocurra el desgarro en caliente.</p>
    <p>Al igual que con los aceros inoxidable austeníticos, la soldabilidad de las aleaciones de níquel también puede verse afectada por la presencia de altos niveles de elementos de bajo punto de fusión como azufre, fósforo, zinc, cobre y plomo. Todos estos contaminantes pueden llevar al agrietamiento ya sea en la soldadura o en el metal base.</p>`
});