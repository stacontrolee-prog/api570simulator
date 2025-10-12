// Registrar el código ASME PCC-2 si no existe
if (!getCode('ASMEPCC2')) {
    console.error('El código ASME PCC-2 no está registrado. Registrándolo ahora...');
    registerCode('ASMEPCC2', {
        title: "ASME PCC-2 Repair of Pressure Equipment and Piping",
        titleEs: "ASME PCC-2 Reparación de Equipos a Presión y Tuberías"
    });
}

// Registrar el artículo 501
registerChapter('ASMEPCC2', {
    id: 501,
    title: "Pressure and Tightness Testing of Piping and Equipment",
    titleEs: "Pruebas de Presión y Estanqueidad de Tuberías y Equipos",
    content: `<h3>Article 501 Pressure and Tightness Testing of Piping and Equipment</h3>

    <div class="subsection">
        <h4>501-1 DESCRIPTION</h4>
        <p>(a) This Article provides general good practice for determining the type of test, the test pressure, and the procedure for pressure and tightness testing of pressure equipment, including tubular heat exchangers, pressure vessels, and piping systems. This Article is intended for use when</p>
        <p>(1) a complete vessel or system is to be pressure tested</p>
        <p>(2) a pressure vessel or system is isolated such that pressure testing is completed on a portion of the pressure vessel or system. For selection of test devices for localized pressure testing of welded repairs of piping systems, see Article 503.</p>
        <p>(b) General information regarding the various types of tests to choose from is provided, including application, benefits, and limitations.</p>
        <p>(c) Refer to individual repair articles of this Standard for any pressure or leak testing requirements or recommendations that should be followed.</p>
    </div>

    <div class="subsection">
        <h4>501-2 LIMITATIONS</h4>
        <p>(a) Part 1 of this Standard contains additional requirements and limitations. This Article shall be used in conjunction with Part 1.</p>
        <p>(b) This Article shall be limited to use for field pressure or tightness testing of existing equipment and piping using either of the two fluid mediums, liquid or gas.</p>
        <p>(c) This Article shall not be used for vacuum testing of equipment or piping.</p>
        <p>(d) This Article addresses pneumatic testing. Pneumatic testing is potentially much more hazardous than hydrostatic testing due to the higher levels of potential energy in the pressurized system; therefore, all reasonable alternatives shall be considered before this option is selected.</p>
    </div>

    <div class="subsection">
        <h4>501-3 DESIGN</h4>
        
        <div class="subsection">
            <h4>501-3.1 Definitions</h4>
            <p>See para. 101-3.2 for definitions.</p>
        </div>

        <div class="subsection">
            <h4>501-3.2 Reasons for Pressure and Tightness Testing</h4>
            <p>(a) The primary purpose of performing a pressure test is to verify the integrity of a pressure system. This is especially true when welded repairs or alterations have been performed on the pressure boundary. Pressure and tightness testing are not substitutes for proof testing a design.</p>
            <p>(b) Pressure or tightness tests can be used to check for pressure system leakage, especially in flanged joints. Tightness tests may be performed in conjunction with the pressure test.</p>
            <p>(c) Hydrostatic pressure testing can provide some mechanical stress relieving. This is accomplished when local regions of high stress, such as at stress concentrations and crack-like imperfections, undergo local yielding during the pressure test. Release of pressure then produces compressive residual stress in these regions, such that when pressure is reapplied, the operating stress is less than would have occurred otherwise. This can help mitigate the risk of brittle fracture when it is a consideration. Subsequent operation, especially at elevated temperatures, can reduce or eliminate any stress-relief benefit or brittle fracture control. Hydrostatic pressure testing does not eliminate the need for postweld heat treatment, whether required by the applicable construction code or by the user's requirements. See also para. 502-1.7.</p>
            <p>(d) The use of a device to isolate and test a weld independently of the complete pressure vessel or system may be considered when pressure testing at a full test pressure in accordance with section 501-6 is required (see para. 501-3.3). It should be noted that use of devices to isolate and test a weld should be used in conjunction with activity-appropriate welding controls, in-process weld examinations, and NDE (see Article 502). For selection of test devices for localized pressure testing of welded repairs of piping systems, see Article 503.</p>
            <p>(e) Tightness testing may be considered when structural integrity does not need to be verified but leak tightness must be verified prior to start-up.</p>
            <p>(f) In-service leak testing can be considered when structural integrity does not need to be verified and the consequences of a leak during start-up are acceptable, or when permitted by the applicable construction code or post-construction code.</p>
        </div>

        <div class="subsection">
            <h4>501-3.3 Test Type Selection</h4>
            <p>The requirement for pressure testing can be found in the applicable construction code or post-construction code. When no test is specifically referenced, Figure 501-3.3-1 shall be used to determine the type of test to be performed.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_501-3.3-1.png" class="figure-image">
                <p class="figure-caption">Figure 501-3.3-1 Test Type Selection</p>
            </div>
        </div>

        <div class="subsection">
            <h4>501-3.4 Pressure Test - General</h4>
            <p>(a) A pressure test of equipment or a piping system should be considered if an alteration or repair has been performed, the equipment has been rerated, or it needs to be recertified to determine integrity.</p>
            <p>(b) A pressure test may not be required for rerating equipment using a higher allowable stress since the original pressure test could be higher than the test pressure required for rerating.</p>
            <p>(c) Pressure testing [or alternatively, tightness testing; see para. 501-6.3(a)] should be considered during routine inspections and after cleaning operations when the integrity of tube-to-tubesheet joints is in question. Following the completion of the pressure test, the tubes should be inspected for buckling that may have occurred.</p>

            <div class="subsection">
                <h4>501-3.4.1 Exclusions From Hydrostatic Test</h4>
                <p>Pressure testing should be performed hydrostatically unless one of the following conditions apply:</p>
                <p>(a) The equipment, piping, and/or supports, including foundations, cannot adequately support the liquid weight.</p>
                <p>(b) The equipment or piping cannot be dried and traces of the test liquid may result in contamination of the system or its contents after returning to service.</p>
                <p>(c) The equipment or piping contains internal linings that could be damaged by the test medium.</p>
            </div>

            <div class="subsection">
                <h4>501-3.4.2 Pneumatic Test Conditions</h4>
                <p>If a hydrostatic test cannot be performed per para. 501-3.4.1, then a pneumatic pressure test should be considered.</p>
                <p>(a) If a pneumatic pressure test would present unacceptable hazards, such as risk of brittle fracture at the metal test temperature, then a substitute for pressure testing should be developed.</p>
                <p>(b) See para. 501-6.2(d) for information regarding the need for risk analysis.</p>
            </div>

            <div class="subsection">
                <h4>501-3.4.3 Localized Pressure Testing Considerations</h4>
                <p>(a) Use of a test device for localized pressure testing may be considered when any of the following conditions exist:</p>
                <p>(1) Other welds in the system under consideration have already been tested or are exempt from testing.</p>
                <p>(2) Brittle fracture may be a consideration.</p>
                <p>(3) There is a need to minimize the number of flanged joints to disassemble for the purpose of installing isolation blind flanges.</p>
                <p>(4) There is a need to minimize the amount of test fluid and/or avoid contamination of process items in the system, such as catalyst, linings, refractory, or other process equipment.</p>
                <p>(5) Complete isolation is not possible or practicable, such as when a piping system is welded directly to the nozzle of a pressure vessel.</p>
                <p>(6) Sole use of radiographic testing (RT) or other volumetric examination is not desired or practicable.</p>
                <p>(7) There is a need to minimize the amount of insulation abatement and reinstallation.</p>
                <p>(8) There are potential consequences or additional risks associated with test fluid remaining in the system following completion of a pressure test.</p>
                <p>(9) There is a need to minimize disassembly and/or removal of system components.</p>
                <p>(10) A repair versus an alteration has been performed. (See Article 502 for information on repair and alteration.)</p>
                <p>(b) Test devices for localized pressure testing shall be selected and installed in accordance with Article 503.</p>
            </div>

            <div class="subsection">
                <h4>501-3.4.4 Nondestructive Examination Considerations</h4>
                <p>Nondestructive examination may be considered in lieu of pressure testing to verify repairs or alterations in some instances (see Article 502). This may require the use of tightness testing as well.</p>
            </div>
        </div>

        <div class="subsection">
            <h4>501-3.5 Documentation</h4>
            <p>A pressure test record form should be prepared prior to the pressure test and completed upon acceptance of the test by the owner or the owner's designated representative. A sample record form is provided in Mandatory Appendix 501-1.</p>
        </div>
    </div>

    <div class="subsection">
        <h4>501-4 FABRICATION</h4>
        <p>Within the context of this Article, this section is not applicable.</p>
    </div>

    <div class="subsection">
        <h4>501-5 EXAMINATION</h4>
        <p>Visual examination shall be performed during the pressure, tightness, or in-service leak test to determine if any leakage is occurring during the test. When visual examination is not possible, e.g., with underground piping, monitoring of system pressure for pressure drop during tightness or in-service leak test may be substituted when approved by the owner. See paras. 501-6.1(t)(8) and 501-6.2.1, Step 3 (c) regarding safety practices.</p>
    </div>

    <div class="subsection">
        <h4>501-6 TESTING</h4>
        
        <div class="subsection">
            <h4>501-6.1 Hydrostatic Pressure Test of Pressure Vessels or Piping Systems</h4>
            <p>(a) The fabrication and in-service inspection records along with any necessary operational records should be reviewed prior to testing to determine if the pressure component/system has experienced a credible damage mechanism. Consideration should be given to how each mechanism could manifest itself during a pressure test. See section 501-7 for references that provide considerations for damage mechanisms.</p>
            <p>(1) The inspection records should be reviewed for thinning beyond the specified limit. If thinning has occurred beyond the specified corrosion allowance, an engineering evaluation shall be performed using current inspection data.</p>
            <p>(2) The material may have been subjected to damage due to temperature or process exposure. If evidence of damage is found by inspection, an engineering evaluation shall be performed using current inspection data.</p>
            <p>(3) The component/system may have been damaged by mechanical means such as high vibration. Consideration should be given to analyzing the system for areas where damage could occur and then inspecting these areas prior to testing to look for evidence of damage.</p>
            
            <p>(b) In order to reduce the risk of brittle fracture during the test, the temperature of the metal during the pressure test of pressure vessels should be maintained at a minimum of 17°C (30°F) above the minimum design metal temperature (MDMT) (as shown on the Manufacturer's Data Report).</p>
            <p>(1) If the MDMT is unknown, the minimum allowable temperature (MAT) of the component or system should be determined using a fitness-for-service evaluation.</p>
            <p>(2) If a vessel made of low-alloy steel has been subjected to thermal treatment or service temperatures over 370°C (700°F), an upward shift in the ductile-to-brittle transition temperature may have occurred. This loss of toughness may not be readily apparent during operation; however, the vessel may be susceptible to brittle fracture. Therefore, the temperature used for the pressure test may need to be determined by a fitness-for-service evaluation.</p>
            
            <p>(c) When pressure testing piping systems, the ambient temperature should be greater than 2°C (35°F). When pressure testing at colder temperatures, the use of an antifreeze solution should be considered as the test medium to prevent freezing; however, the metal temperature should be kept above the ductile-brittle transition temperature. Additional guidance regarding pressure testing at cold temperatures may be found in the references listed in section 501-7.</p>
            
            <p>(d) The vessel and its supports and the foundation and/or the piping system and its supports and support structures should be evaluated to determine if they will adequately support the weight of the test medium.</p>
            
            <p>(e) Pressure gauges used for recording test pressures should be calibrated and located at the highest point on the vessel or on the piping system. The gauges should meet the requirements of ASME PTC 19.2 or similar gauge performance standard, and be corrected as required to compensate for the static head present in the system.</p>
            
            <p>(f) Vents shall be provided at the high points of the vessel and/or piping system to purge air from the tested component while it is being filled.</p>
            
            <p>(g) The vessel or piping system shall be evaluated for components that will not withstand the test pressure or will otherwise interfere with a pressure test. Examples of these components include orifice plates, flow nozzles, control valves, expansion joints, etc.</p>
            
            <p>(h) An evaluation for the need of overpressure relief devices shall be performed. The set pressure of a pressure relief device should be no more than the lesser of:</p>
            <p>(1) the test pressure plus 345 kPa (50 psi), or</p>
            <p>(2) 110% of the test pressure</p>
            
            <p>(i) Consideration shall be given to proper disposal of the test water, as it may contain residual traces of the system contents.</p>
            
            <p>(j) Pressure testing should be completed prior to insulating. Welds or other joints that have previously been pressure tested can be insulated or otherwise covered when agreed to by the owner-user.</p>
            
            <p>(k) Pressure testing should be completed prior to painting weld joints, unless the weld joints were previously tested. Documented test results indicate various types of paint will retain pressure during a pressure test when covering a through-wall "pinhole." When deciding whether or not welds may be painted prior to pressure testing, the following should be given consideration:</p>
            <p>(1) the paint system(s) being used and its ability to mask a potential leak</p>
            <p>(2) the probability that the process fluid(s) will act as a solvent on the paint system if a pinhole is present, thus increasing the potential for a leak to occur</p>
            <p>(3) the effect on nearby equipment or personnel if a leak occurs</p>
            <p>(4) the cost of performing repairs in the field if such a failure occurs</p>
            
            <p>(l) It is not required for the inspector approving the hydrostatic pressure test to be certified per SNT-TC-1A for Leak Testing or Visual Examination; however, the inspector should have the authority to stop a pressure test when deemed necessary to do so. Dedicated lines of communication should be in place between the inspector having oversight authority and all other personnel performing the pressure test.</p>
            
            <p>(m) The test pressure of a hydrostatic pressure test of pressure vessels or heat exchangers should be according to the original construction code, considering also any subsequent engineering analysis as deemed necessary.</p>
            
            <p>(n) When the requirements of the original construction code are not available, the test pressure for a hydrostatic pressure test for pressure vessels or heat exchangers shall be the lesser of (1) or (2) below.</p>
            <p>(1) Equation (1)</p>
            <p>P<sub>t</sub> = 1.3 × P × S<sub>at</sub>/S<sub>dt</sub></p>
            <p>where</p>
            <p>1.3 = test factor</p>
            <p>P = maximum allowable working pressure from the Manufacturer's Data Report, or the value to which the vessel is being rerated</p>
            <p>P<sub>t</sub> = test pressure to be used, measured at the top of the vessel in its normal operating position</p>
            <p>S<sub>at</sub> = allowable stress at test temperature from the applicable construction code for the material of which the component under consideration is constructed</p>
            <p>S<sub>dt</sub> = allowable stress at design temperature from the applicable construction code for the material of which the component under consideration is constructed</p>
            <p>S<sub>at</sub>/S<sub>dt</sub> = ratio of allowable stresses; the lowest value shall be used in eq. (1) for all materials considered</p>
            
            <p>(2) A pressure equal to that which results in an applied general primary membrane tensile stress equal to 90% the specified minimum yield stress at test temperature of carbon steel material, or 100% of austenitic steel material. Values for yield strengths for some materials are provided in ASME BPVC, Section II, Part D.</p>
            
            <p>(o) The test pressure for a hydrostatic pressure test for piping systems should be specified by the owner and should be according to the original construction code.</p>
            
            <p>(p) When the requirements of the original construction code are not available, the test pressure for a hydrostatic pressure test for piping systems should be specified by the owner and should be at least</p>
            <p>P<sub>t</sub> = 1.5 × P × S<sub>at</sub>/S<sub>dt</sub></p>
            <p>where</p>
            <p>1.5 = test factor</p>
            <p>P = internal design pressure of the piping system</p>
            <p>P<sub>t</sub> = test pressure to be used, measured at the highest point of the piping system in its normal operating position</p>
            <p>S<sub>at</sub> = allowable stress at test temperature from the applicable construction code for the material of which the component under consideration is constructed</p>
            <p>S<sub>dt</sub> = allowable stress at design temperature from the applicable construction code for the material of which the component under consideration is constructed</p>
            <p>S<sub>at</sub>/S<sub>dt</sub> = ratio of allowable stresses; the lowest value shall be used in eq. (2) for all materials considered</p>
            <p>The resulting stress due to test pressure, P<sub>t</sub>, shall be limited to 100% of yield strength, S<sub>y</sub>.</p>
            
            <p>(q) If the design pressure of the piping system cannot be verified, the value for P in eq. (2) may be the lesser of (1) or (2) below normalized to the highest point of the piping system.</p>
            <p>(1) The working pressure at design temperature for flanges in the piping system from ASME B16.5 or other applicable standard.</p>
            <p>(2) The maximum allowable pressure calculated for the limiting component of the piping system.</p>
            <p>(3) The test pressure should not exceed that which results in an applied general primary membrane tensile stress greater than 100% the specified minimum yield stress at test temperature. Yield strengths at ambient temperature may be found in ASME B31.3 or other applicable construction code. Yield strengths at higher temperatures may be found in ASME BPVC, Section II, Part D.</p>
            
            <p>(r) Pressure testing of a piping system through equipment is not recommended. Piping may be tested with a pressure vessel if it is impractical to isolate the piping from the vessel, the test pressure of the piping is equal to or less than the test pressure of the vessel and the vessel and its supports will adequately support the weight of the test liquid.</p>
            <p>If the test pressure of the piping exceeds the test pressure of the vessel, the vessel test pressure can be used, provided it is at least 77% of the piping test pressure; otherwise the piping should be isolated from the pressure vessel and pressure tested independently.</p>
            
            <p>(s) Piping systems that operate at atmospheric pressure may be leak tested by filling with test liquid only.</p>
            
            <p>(t) The items specified in (1) through (9) below should be considered when developing hydrostatic pressure test procedures for vessels or piping systems.</p>
            <p>(1) All equipment and/or piping to be tested should be verified as being clean of dirt, weld slag, construction debris, or other unacceptable foreign matter.</p>
            <p>(2) Items identified in (g) should be removed.</p>
            <p>(3) All spring supports in vapor service lines should be protected with adequate travel stops to prevent overloading during the pressure test.</p>
            <p>(4) Temporary supports should be provided for piping and/or piping supports that have not been designed to support the weight of the test liquid used for hydrostatic pressure test.</p>
            <p>(5) The use of salt or brackish water should be avoided. Test water should be free from sediment and corrosive substances.</p>
            <p>(6) The test water should be verified to be free of microbes. If the water contains an unacceptable level of microbes, it should be disinfected.</p>
            <p>(7) Test water used for austenitic steel vessels or piping systems, or for components clad or overlaid with austenitic stainless steel, should be condensate, demineralized, or of potable quality, with a verified chloride content of less than 50 ppm.</p>
            <p>(8) Following a hold-time of a minimum of 10 min the pressure should be reduced by 30%, or to the internal design pressure, whichever is lower, and a visual examination for evidence of leaks at locations such as flanges, weld joints, threaded connections, and any repaired locations should be conducted.</p>
            <p>(9) Test liquid should be drained immediately after completion of the hydrostatic test. Care should be exercised to provide proper venting to prevent the creation of internal negative pressure (vacuum) during draining.</p>
            <p>(-a) Pressure vessels and/or piping systems that will hold the test water for more than 10 days, whether or not the test liquid is pressurized, should be treated with a corrosion inhibitor and biocide. A corrosion engineer should be consulted.</p>
            <p>(-b) If further drying is necessary, the use of hot air or hot nitrogen should be considered.</p>
            <p>(-c) If complete drainage of austenitic stainless steel vessels and/or piping systems is not possible, the components should be flushed with low-chloride (less than 5 ppm) water.</p>
            
            <p>(10) After completion of the test, the vessel and/or piping system should be restored to its operating condition. This includes, but is not limited to, (-a) through (-f) below.</p>
            <p>(-a) All flanged joints blinded for pressure testing should be reassembled with new gaskets and tightened in accordance with applicable specifications. Consideration should be given to ASME PCC-1.</p>
            <p>(-b) All strainers contained in the piping system should be removed, cleaned, and reinstalled.</p>
            <p>(-c) Temporary travel stops installed in spring supports should be removed.</p>
            <p>(-d) Vent and bleed connections that were installed for testing purposes only should be plugged using materials and methods per the applicable specification. Consideration should be given to seal welding when necessary.</p>
            <p>(-e) Relief or safety valves that were isolated for the test shall have the isolating devices (e.g., gags, slip blinds, etc.) removed.</p>
            <p>(-f) Expansion joints that were locked to prevent damage during the pressure test shall be unlocked.</p>
        </div>

        <div class="subsection">
            <h4>501-6.2 Pneumatic Pressure Test of Pressure Vessels or Piping</h4>
            <p>(a) When a hydrostatic pressure test cannot be performed per para. 501-6.1 (see para. 501-3.4.1), a pneumatic pressure test may be performed.</p>
            
            <p>(b) Nitrogen should be the test medium since it cannot support combustion. Alternatively, clean, dry, oil-free air meeting the requirements of Class 1, 2, or 3 air per ISO 8573-1:2010 should be used with a dew point ranging from -20°C to -70°C (-4°F to -94°F). Caution should be used when introducing air into any system that cannot be verified as being free of hydrocarbons, since this could result in the formation of an explosive mixture. When necessary, the design service fluid can be used for pneumatic pressure testing.</p>
            
            <p>(c) The fabrication and in-service inspection records, along with any necessary operational records, should be reviewed prior to testing to determine if the pressure component/system has experienced a credible deterioration mechanism. Consideration should be given to how each mechanism could manifest itself.</p>
            <p>(1) The inspection records should be reviewed for thinning beyond the specified limit. If thinning has occurred beyond the specified corrosion allowance, an engineering evaluation shall be performed.</p>
            <p>(2) The component/system may have been damaged by mechanical means such as high vibration. Consideration should be given to inspecting the entire system prior to testing to look for evidence of damage.</p>
            
            <p>(d) Components fabricated from brittle materials such as cast iron and ductile iron shall not be pneumatically pressure tested unless the following requirements are adhered to:</p>
            <p>(1) the pressure test does not exceed MAWP</p>
            <p>(2) additional NDE, such as Acoustic Emission (AE) testing, is performed along with the pressure test</p>
            <p>(3) the procedures from para. 501-6.2.1 are followed</p>
            
            <p>(e) The maximum calculated stored energy of any vessel or piping system being pneumatically pressure tested should not be greater than 271 000 000 J (200,000,000 ft-lb). When calculating the stored energy for a vessel, the total volume shall be considered. When calculating the stored energy of a piping system, a maximum volume based on a length of 8 pipe diameters may be considered for any single failure analyzed.</p>
            
            <p>(f) If the calculated stored energy is greater than 271 000 000 J (200,000,000 ft-lb), then one of the following shall occur:</p>
            <p>(1) The system shall be divided into smaller volumes such that each subsystem has a stored energy not greater than 271 000 000 J (200,000,000 ft-lb).</p>
            <p>(2) A minimum distance shall be calculated per Mandatory Appendix 501-III, eq. (III-1), and this distance shall be adhered to.</p>
            <p>(3) A barricade per (h) shall be installed.</p>
            
            <p>(g) A detailed hazard analysis should also be performed to evaluate the risk associated with the release of stored energy. See Mandatory Appendix 501-IV for considerations relative to risk evaluation. Factors to consider in this analysis should include:</p>
            <p>(1) any damage mechanisms identified by review of fabrication or in-service inspection records along with operational records</p>
            <p>(2) the MDMT of the components being pressure tested, and its relative comparison to the test temperature to address the risk of brittle fracture</p>
            <p>(3) the stress level of the system while undergoing a test</p>
            <p>(4) the amount of nondestructive examination performed on welds that have not previously been subjected to a hydrostatic or pneumatic pressure test</p>
            <p>(5) other simultaneous inspection methods being performed during the pressure test such as acoustic emission (AE) testing</p>
            <p>(6) pressure wave from potential blast</p>
            <p>(7) size of potential fragments resulting from failure of system, distance of travel, and existence of barriers sufficient to stop fragment projectiles</p>
            
            <p>(h) For pressure tests where the risk of injury from potential fragments, shock waves, or other consequences of any pressurized system failure is determined to be unacceptable, a limited access area and pressure control point should be established. The minimum distance from the boundary of this area to the pressurized component should be calculated according to the procedure of Mandatory Appendix 501-III.</p>
            <p>When the spacing requirements described in Mandatory Appendix 501-III are not achievable, consideration should be given to the design, fabrication, and installation of an alternative barricade capable of withstanding the blast of stored energy within the system. See also (e).</p>
            
            <p>(i) Overpressure relief protection shall be provided. The set pressure of a pressure relief device should be not more than the greater of</p>
            <p>(1) the test pressure plus 70 kPa (10 psi), or</p>
            <p>(2) 110% of the test pressure</p>
            
            <p>(j) The test pressure for a pneumatic pressure test for equipment should be according to the original construction code, considering also any subsequent engineering analysis as deemed necessary.</p>
            
            <p>(k) If the requirements of the original construction code are not available, the test pressure for a pneumatic pressure test for pressure vessels shall be</p>
            <p>P<sub>t</sub> = 1.1 × P × S<sub>at</sub>/S<sub>dt</sub></p>
            <p>where</p>
            <p>1.1 = test factor</p>
            <p>P = maximum allowable working pressure from the Manufacturer's Data Report. If unknown, use the vessel's design or rated pressure.</p>
            <p>P<sub>t</sub> = test pressure to be used</p>
            <p>S<sub>at</sub> = allowable stress at test temperature from the applicable construction code for the material of which the component under consideration is constructed</p>
            <p>S<sub>dt</sub> = allowable stress at design temperature from the applicable construction code for the material of which the component under consideration is constructed</p>
            <p>S<sub>at</sub>/S<sub>dt</sub> = ratio of allowable stresses; the lowest value shall be used in eq. (3) for all materials considered</p>
            
            <p>(l) If the requirements of the original construction code are not available, the test pressure for a pneumatic pressure test for piping systems shall be</p>
            <p>P<sub>t</sub> = 1.1 × P</p>
            <p>where</p>
            <p>1.1 = test factor</p>
            <p>P = internal design pressure of the piping system</p>
            <p>P<sub>t</sub> = test pressure to be used</p>
            
            <p>(m) The stored energy of the equipment or piping system under pneumatic pressure should be calculated and converted to equivalent pounds of TNT (Trinitrotoluene) using the equations shown in Mandatory Appendix 501-II. The value calculated may be used for alternative safe distance calculations as per Mandatory Appendix 501-III. The minimum safe distance shall be the greater of the distance required by para. 501-III-1(a) or as calculated by Mandatory Appendix 501-III, eq. (III-1). See also Mandatory Appendix 501-III, Table 501-III-2-1 when fragments are to be considered.</p>
            <p>Risk evaluation may also be required; see (d) and Mandatory Appendix 501-IV.</p>

            <div class="subsection">
                <h4>501-6.2.1 Pneumatic Test Procedures</h4>
                <p>The items specified in Steps 1 through 5 should be considered when developing pneumatic pressure test procedures for vessels or piping systems.</p>
                
                <p><strong>Step 1.</strong> See (a) through (e) of this Step.</p>
                <p>(a) Raise pressure to the lesser of 170 kPa (25 psi) or 25% of test pressure.</p>
                <p>(b) Block in supply and hold for 10 min.</p>
                <p>(c) Visually inspect system for leaks.</p>
                <p>(d) If leaks are discovered, release pressure, repair, and return to Step 1.</p>
                <p>(e) If no leaks are discovered, proceed to Step 2.</p>
                
                <p><strong>Step 2.</strong> Gradually increase system pressure to 50% of the test pressure as follows:</p>
                <p>(a) Increase pressure in Step 1 by 350 kPa (50 psi) or to 35% test pressure, whichever is greater. Hold for a minimum of 3 min to allow strains to equalize. Continue to increase by 350 kPa (50 psi) increments until the system pressure is at 50% test pressure.</p>
                <p>(b) Hold at 50% test pressure for a minimum of 10 min. Observe pressure gauge for loss of system pressure. If pressure loss exceeds 10% of test pressure, the system pressure should be reduced to 25% test pressure and the system checked for leaks.</p>
                <p>(c) If no loss of pressure is detected, subject to approval of the inspector, proceed to Step 3.</p>
                
                <p><strong>Step 3.</strong> See (a) through (c) of this Step.</p>
                <p>(a) Gradually increase system pressure in increments of 10% of test pressure. At each increment, block supply and observe pressure gauge for 5 min.</p>
                <p>If pressure loss is observed, reduce pressure to 25% test pressure and check for leaks. If necessary, release pressure and perform necessary repairs. Return to Step 1.</p>
                <p>(b) Once full test pressure is reached, block supply and observe pressure gauge for a minimum of 10 min.</p>
                <p>(c) Reduce system pressure to the following applicable pressure:</p>
                <p>(1) the test pressure divided by the test factor for vessels [see para. 501-6.2(j), eq. (3)]. If there is no test factor available, use 4/5 test pressure.</p>
                <p>(2) design pressure for piping.</p>
                
                <p><strong>Step 4.</strong> See (a) through (c) of this Step.</p>
                <p>(a) Conduct a complete inspection for leakage of the vessel or piping system, or both, at locations such as flanges, weld joints, and threaded connections.</p>
                <p>NOTE: It is assumed that the integrity of the pressurized system has been proven by Step 3 (b) and the barricades required by para. 501-6.2(e) can be safely passed.</p>
                <p>(b) If no leakage is discovered, release system pressure.</p>
                <p>(c) If leakage that is not acceptable is discovered, relieve all system pressure and repair. Repeat Steps 2 and 3.</p>
                
                <p><strong>Step 5.</strong> After completion of the test, the vessel or piping system, or both, should be restored to its design condition. This includes, but is not limited to, the following:</p>
                <p>(a) All flanged joints blinded for pressure testing should be reassembled with new gaskets and tightened in accordance with applicable specifications. Consideration should be given to ASME PCC-1.</p>
                <p>(b) Vent and bleed connections that were installed solely for testing purposes should be plugged using materials and methods per the applicable specification. Consideration should be given to seal welding when necessary.</p>
            </div>
        </div>

        <div class="subsection">
            <h4>501-6.3 Tightness Test</h4>
            <p>(a) A tightness test may be performed to detect leaks at various locations within a pressure system. It may be performed on systems that have previously been pressure tested, for closure welds of piping systems, on tube-to-tubesheet joints, and on systems exempted from hydrostatic or pneumatic testing. ASME BPVC, Section V, Article 10 provides information on a variety of leak testing methods.</p>
            
            <p>(b) A sensitive leak test per ASME B31.3 is the preferred method for conducting a tightness test.</p>
            
            <p>(c) The applied test pressure for vessels and piping should not exceed 35% of the design pressure. However, leakage at flanged joints may be evident at much lower pressures when using sensitive leak detection methods; therefore, the minimum test pressure should be specified which enables the test sensitivity requirements to be met.</p>
            
            <p>(d) Where the consequences of leakage of the process medium are acceptable, an in-service leak test may be performed as a tightness test using the process medium during the start-up of the system.</p>

            <div class="subsection">
                <h4>501-6.3.1 Pneumatic Tightness Test Procedures</h4>
                <p>The items specified in (a) through (f) should be considered when developing pneumatic tightness test procedures for vessels or piping systems.</p>
                
                <p>(a) Clean, dry, oil-free air should be used as the test medium, except in systems which cannot be verified as free from hydrocarbons. For this situation, nitrogen should be used as the test medium [see para. 501-6.2(b)].</p>
                
                <p>(b) To minimize the stored energy of a system, the maximum test pressure should be not more than 35% of the design pressure of the vessel or piping system. The test pressure should be no less than the lesser of 105 kPa (15 psi) or 25% of the system design pressure.</p>
                
                <p>(c) The system pressure should be gradually increased until the system pressure is the lesser of 170 kPa (25 psi) or 25% of the test pressure. Hold at this pressure long enough to conduct a preliminary inspection for leaks.</p>
                
                <p>(d) System pressure should be gradually increased in increments of 10% of test pressure, holding for 30 s to 1 min at each increment. Hold at final test pressure and complete a thorough inspection for leakage using the Gas and Bubble test method specified in ASME BPVC, Section V, Article 10, or other method of equal or better sensitivity.</p>
                
                <p>(e) If leakage is discovered and a joint needs to be tightened, reduce system pressure to the lesser of 50% of test pressure or 170 kPa (25 psi) and tighten.</p>
                
                <p>(f) After completion of the test, the vessel and/or piping system should be restored to its operating condition.</p>
            </div>
        </div>
    </div>

    <div class="subsection">
        <h4>501-7 REFERENCES</h4>
        <p>The following is a list of publications referenced in this Article. Unless otherwise specified, the latest edition shall apply.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Table 501-7-1 References</caption>
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Title</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ANSI/ASNT CP-189-2006</td>
                        <td>ASNT Standard for Qualification and Certification of Nondestructive Testing Personnel</td>
                        <td>ASNT</td>
                    </tr>
                    <tr>
                        <td>ASNT SNT-TC-1A</td>
                        <td>Personnel Qualification and Certification in Nondestructive Testing</td>
                        <td>ASNT</td>
                    </tr>
                    <tr>
                        <td>API RP 571</td>
                        <td>Damage Mechanisms Affecting Fixed Equipment in the Refining Industry</td>
                        <td>API</td>
                    </tr>
                    <tr>
                        <td>API RP 579-1/ASME FFS-1</td>
                        <td>Fitness-for-Service</td>
                        <td>API/ASME</td>
                    </tr>
                    <tr>
                        <td>API RP 580</td>
                        <td>Risk-Based Inspection</td>
                        <td>API</td>
                    </tr>
                    <tr>
                        <td>ASME Boiler and Pressure Vessel Code</td>
                        <td>Various Sections</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ASME B16.5</td>
                        <td>Pipe Flanges and Flanged Fittings</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ASME B31.3</td>
                        <td>Process Piping</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ASME PCC-1</td>
                        <td>Pressure Boundary Bolted Flange Joint Assembly</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ASME PTC 19.2</td>
                        <td>Pressure Measurement, Instruments and Apparatus</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ISO 8573-1</td>
                        <td>Compressed Air - Part 1: Contaminants and purity classes</td>
                        <td>ISO</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="subsection">
        <h4>Mandatory Appendix 501-I Pressure/Leak Testing</h4>
        <p>This Appendix provides an example of a design data sheet as referenced in para. 501-3.5.</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_501-I.png" class="figure-image">
            <p class="figure-caption">Figure 501-I Test Record</p>
        </div>
    </div>

    <div class="subsection">
        <h4>Mandatory Appendix 501-II Stored Energy Calculations for Pneumatic Pressure Test</h4>
        
        <div class="subsection">
            <h4>501-II-1 GENERAL</h4>
            <p>The stored energy of the equipment or piping system should be calculated and converted to equivalent kilograms (pounds) of TNT (Trinitrotoluene) using the following equations:</p>
            
            <p>E = [1/(k - 1)] × P<sub>at</sub> × V[1 - (P<sub>a</sub>/P<sub>at</sub>)<sup>(k-1)/k</sup>] (II-1)</p>
            
            <p>where</p>
            <p>E = stored energy, J (ft-lb)</p>
            <p>k = ratio of specific heat for the test fluid</p>
            <p>P<sub>a</sub> = absolute atmospheric pressure, 101 kPa (14.7 psia)</p>
            <p>P<sub>at</sub> = absolute test pressure, Pa (psia)</p>
            <p>V = total volume under test pressure, m<sup>3</sup> (ft<sup>3</sup>)</p>
            
            <p>When using air or nitrogen as the test medium (k = 1.4), this equation becomes</p>
            
            <p>E = 2.5 × P<sub>at</sub> × V [1 - (P<sub>a</sub>/P<sub>at</sub>)<sup>0.286</sup>] (II-2)</p>
            
            <p>where</p>
            <p>E = stored energy, ft-lb</p>
            <p>P<sub>a</sub> = absolute atmospheric pressure, 14.7 psia</p>
            <p>P<sub>at</sub> = absolute test pressure, psia</p>
            <p>V = total volume under test pressure, ft<sup>3</sup></p>
            
            <p>and</p>
            
            <p>TNT = E / 4,266,920 (II-3)</p>
            
            <p>where</p>
            <p>TNT = energy measured in TNT, kg</p>
            
            <p>For SI units using air or nitrogen as the test medium (k = 1.4), this equation becomes</p>
            
            <p>E = 360 × P<sub>at</sub> × V [1 - (P<sub>a</sub>/P<sub>at</sub>)<sup>0.286</sup>] (II-4)</p>
            
            <p>where</p>
            <p>E = stored energy, J</p>
            <p>P<sub>a</sub> = absolute atmospheric pressure, 101,000 Pa</p>
            <p>P<sub>at</sub> = absolute test pressure, Pa</p>
            <p>V = total volume under test pressure, m<sup>3</sup></p>
            
            <p>and</p>
            
            <p>TNT = E / 4,266,920 (II-5)</p>
            
            <p>where</p>
            <p>TNT = energy measured in TNT, lb</p>
            
            <p>When calculating the stored energy for a vessel, the total volume shall be considered. When calculating the stored energy of a piping system, a maximum volume based on a length of 8 pipe diameters may be considered for any single failure analyzed.</p>
            
            <p>See also paras. 501-6.2(e) and 501-6.2(f).</p>
        </div>
    </div>

    <div class="subsection">
        <h4>Mandatory Appendix 501-III Safe Distance Calculations for Pneumatic Pressure Test</h4>
        
        <div class="subsection">
            <h4>501-III-1 BLAST WAVE DISTANCE</h4>
            <p>The minimum distance between all personnel and the equipment being tested shall be</p>
            <p>(a) R = 30 m (100 ft) for E ≤ 8,130,000 J (6,000,000 ft-lb)</p>
            <p>(b) as determined by eq. (III-1) for E > 8,130,000 J (6,000,000 ft-lb)</p>
            
            <p>R = R<sub>scaled</sub> × (2 × TNT)<sup>1/3</sup> (III-1)</p>
            
            <p>where</p>
            <p>E = stored energy as calculated by Mandatory Appendix 501-II, eq. (II-1) or eq. (II-2)</p>
            <p>R = actual distance from equipment</p>
            <p>R<sub>scaled</sub> = scaled consequence factor; value for eq. (III-1) shall be 20 m/kg<sup>1/3</sup> (50 ft/lb<sup>1/3</sup>) or greater</p>
            <p>TNT = energy measured in TNT, kg (lb), determined from Mandatory Appendix 501-II, eq. (II-3) or eq. (II-5)</p>
            
            <p>If the minimum calculated distance cannot be obtained, an alternative value for R<sub>scaled</sub> may be chosen based on Table 501-III-1-1 for use in eq. (III-1). See also para. 501-6.2(g).</p>
            
            <div class="table-container">
                <table class="api-table">
                    <caption>Table 501-III-1-1 Alternative Values for R<sub>scaled</sub></caption>
                    <thead>
                        <tr>
                            <th>Consequence</th>
                            <th>R<sub>scaled</sub> (m/kg<sup>1/3</sup>)</th>
                            <th>R<sub>scaled</sub> (ft/lb<sup>1/3</sup>)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Minor injury possible</td>
                            <td>10</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Serious injury likely</td>
                            <td>15</td>
                            <td>37.5</td>
                        </tr>
                        <tr>
                            <td>Lethal injury likely</td>
                            <td>20</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <p>For example, to prevent lung damage, the distance a person is from the equipment should result in an R<sub>scaled</sub> value of more than 6 m/kg<sup>1/3</sup> (15 ft/lb<sup>1/3</sup>). Note the structural damage that can occur, which shall be considered.</p>
        </div>

        <div class="subsection">
            <h4>501-III-2 FRAGMENT THROW DISTANCE</h4>
            <p>(a) When fragments of vessel or piping are at risk of being created and impacting personnel, the minimum distance between all persons and the equipment being tested shall be as shown in Table 501-III-2-1.</p>
            
            <div class="table-container">
                <table class="api-table">
                    <caption>Table 501-III-2-1 Minimum Distances for Fragment Throw Considerations</caption>
                    <thead>
                        <tr>
                            <th>Stored Energy</th>
                            <th>Minimum Distance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>≤ 8,130,000 J (6,000,000 ft-lb)</td>
                            <td>30 m (100 ft)</td>
                        </tr>
                        <tr>
                            <td>> 8,130,000 J to 27,100,000 J (6,000,000 to 20,000,000 ft-lb)</td>
                            <td>60 m (200 ft)</td>
                        </tr>
                        <tr>
                            <td>> 27,100,000 J to 81,300,000 J (20,000,000 to 60,000,000 ft-lb)</td>
                            <td>120 m (400 ft)</td>
                        </tr>
                        <tr>
                            <td>> 81,300,000 J (60,000,000 ft-lb)</td>
                            <td>240 m (800 ft)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <p>(b) If the distances in Table 501-III-2-1 are not achievable, the distance may be evaluated using methods available in the public domain.</p>
        </div>
    </div>

    <div class="subsection">
        <h4>Mandatory Appendix 501-IV Risk Evaluation Considerations for Pneumatic Pressure Test</h4>
        
        <div class="subsection">
            <h4>501-IV-1 INTRODUCTION</h4>
            <p>When considering the risk analysis factors listed in para. 501-6.2(f), it should be remembered that risk is a two-dimensional combination of probability (or likelihood) and consequence. Risk is the measure of the potential for harm or loss (i.e., hazard) that reflects the likelihood (or frequency) and severity of an adverse effect to health, property, or the environment. If probability and consequence are defined quantitatively (i.e., numerical values are assigned), risk is the product.</p>
            
            <p>risk = probability × consequence (IV-1)</p>
            
            <p>In a qualitative assessment, a matrix is typically used to combine probability and consequence. Consideration should be given to the level of risk that is acceptable when performing pneumatic tests. Reference API RP 580 for use of risk assessment in determining the acceptable levels of risk associated with pneumatic testing.</p>
            
            <p>In reviewing eq. (IV-1), it is clear that even though the consequence may be significant, if the probability is very low the risk may become acceptable. For example, the consequence of an airliner crashing is significant in that it will most likely result in serious injury or death to the passengers along with major damage to or total loss of the aircraft. However, the probability of an airliner crashing is very low; thus, the public accepts the risk associated with airline travel.</p>
        </div>

        <div class="subsection">
            <h4>501-IV-2 PNEUMATIC TEST RISK CONSIDERATIONS</h4>
            <p>Risk considerations can be applied to pneumatic testing also. Examples may include</p>
            <p>(a) a new austenitic stainless steel piping system that has been hydrostatically tested during shop fabrication, with the exception of four final field assembly circumferential butt welds. The piping system has a total volume that results in an energy level greater than 271,000,000 J (200,000,000 ft-lb); however, it is not feasible to separate the piping system into smaller sections for testing, nor is it feasible to install blast barriers. By performing volumetric examination such as UT or RT and determining the field welds are free of rejectable indications, the risk associated with a full pneumatic pressure test of this system may be deemed acceptable.</p>
            
            <p>(b) an existing carbon steel vessel with an MDMT rating of -45°C (-50°F) into which a new nozzle had been installed following all requirements of the original construction code. The vessel has a total volume that results in an energy level greater than 271,000,000 J (200,000,000 ft-lb); however, it is still desirable to perform a pressure test to check the integrity of the weld and obtain the other benefits of pressure testing. It is not feasible to install blast barriers. By performing volumetric examination such as UT on the nozzle attachment weld and determining the weld is free of rejectable indications, along with verification by inspection that the vessel is in a like-new condition, the risk associated with a full pneumatic pressure test of this vessel may be deemed acceptable.</p>
            
            <p>(c) When considering the volume of piping to complete stored energy calculations, the use of 8 pipe diameters may not be sufficient.</p>
            <p>(1) brittle failure or failure along the length of a poor longitudinal weld seam, where the actual opening may be instantaneous and the release of energy larger than that as calculated by 8 pipe diameters</p>
            <p>(2) installations where the pipe or pipeline is not restrained and can become a projectile; see Table 501-III-2-1</p>
        </div>

        <div class="subsection">
            <h4>501-IV-3 PIPING SYSTEM VOLUME CONSIDERATIONS</h4>
            <p>A schematic illustration of the pipeline rupture leading to burst explosion is shown in Figure 501-IV-3-1. The volume of gas that should be included within the stored energy calculation is not just the volume contained within the pipe length that has ruptured, but should include a section of each end of pipe that is starting to depressurize, given as d in Figure 501-IV-3-1. The distance d can be calculated by considering the speed that information about the loss of containment can travel down the pipe. When the rupture occurs, the shock wave of the rupture travels down the pipe at the speed of sound of the compressed gas. The shock wave for this type of explosion has a typical signature shape with a steep rise time. The exact rise time would vary for each incident, but will be less than the measured rise time within a deflagration explosion (which has a shallower profile initially) and is consequently less than 10 ms.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_501-IV-3-1.png" class="figure-image">
                <p class="figure-caption">Figure 501-IV-3-1 A Schematic Diagram of a Pipeline Burst, Showing the Flow of Gas Within the Pipes</p>
            </div>
            
            <p>The basis for total piping volume vary and are summarized below:</p>
            <p>(a) Baker Model - 8 pipe diameters</p>
            <p>(b) TNT Model - 11 m of pipe</p>
            <p>(c) Major Refining Operator - 18 m of pipe</p>
        </div>
    </div>
    `,
    contentEs: `<h3>Artículo 501 Pruebas de Presión y Estanqueidad de Tuberías y Equipos</h3>

    <div class="subsection">
        <h4>501-1 DESCRIPCIÓN</h4>
        <p>(a) Este Artículo proporciona buenas prácticas generales para determinar el tipo de prueba, la presión de prueba y el procedimiento para pruebas de presión y estanqueidad de equipos a presión, incluyendo intercambiadores de calor tubulares, recipientes a presión y sistemas de tuberías. Este Artículo está destinado para uso cuando</p>
        <p>(1) se va a probar a presión un recipiente o sistema completo</p>
        <p>(2) un recipiente o sistema a presión está aislado de manera que la prueba de presión se completa en una porción del recipiente o sistema a presión. Para la selección de dispositivos de prueba para pruebas de presión localizadas de reparaciones soldadas de sistemas de tuberías, ver Artículo 503.</p>
        <p>(b) Se proporciona información general sobre los diversos tipos de pruebas a elegir, incluyendo aplicación, beneficios y limitaciones.</p>
        <p>(c) Consulte los artículos de reparación individuales de esta Norma para cualquier requisito o recomendación de prueba de presión o fugas que deba seguirse.</p>
    </div>

    <div class="subsection">
        <h4>501-2 LIMITACIONES</h4>
        <p>(a) La Parte 1 de esta Norma contiene requisitos y limitaciones adicionales. Este Artículo deberá usarse en conjunto con la Parte 1.</p>
        <p>(b) Este Artículo se limitará al uso para pruebas de presión o estanqueidad de campo de equipos y tuberías existentes utilizando cualquiera de los dos medios fluidos, líquido o gas.</p>
        <p>(c) Este Artículo no deberá usarse para pruebas de vacío de equipos o tuberías.</p>
        <p>(d) Este Artículo aborda las pruebas neumáticas. Las pruebas neumáticas son potencialmente mucho más peligrosas que las pruebas hidrostáticas debido a los niveles más altos de energía potencial en el sistema presurizado; por lo tanto, se considerarán todas las alternativas razonables antes de seleccionar esta opción.</p>
    </div>

    <div class="subsection">
        <h4>501-3 DISEÑO</h4>
        
        <div class="subsection">
            <h4>501-3.1 Definiciones</h4>
            <p>Ver párrafo 101-3.2 para definiciones.</p>
        </div>

        <div class="subsection">
            <h4>501-3.2 Razones para las Pruebas de Presión y Estanqueidad</h4>
            <p>(a) El propósito principal de realizar una prueba de presión es verificar la integridad de un sistema a presión. Esto es especialmente cierto cuando se han realizado reparaciones o alteraciones soldadas en el límite de presión. Las pruebas de presión y estanqueidad no son sustitutos de las pruebas de verificación de diseño.</p>
            <p>(b) Las pruebas de presión o estanqueidad pueden usarse para verificar fugas del sistema de presión, especialmente en juntas bridadas. Las pruebas de estanqueidad pueden realizarse en conjunto con la prueba de presión.</p>
            <p>(c) Las pruebas de presión hidrostática pueden proporcionar cierto alivio de tensiones mecánico. Esto se logra cuando las regiones locales de alto esfuerzo, como en concentraciones de esfuerzo e imperfecciones similares a grietas, experimentan fluencia local durante la prueba de presión. La liberación de presión luego produce esfuerzo residual compresivo en estas regiones, de modo que cuando se reaplica la presión, el esfuerzo de operación es menor de lo que hubiera ocurrido de otra manera. Esto puede ayudar a mitigar el riesgo de fractura frágil cuando es una consideración. La operación posterior, especialmente a temperaturas elevadas, puede reducir o eliminar cualquier beneficio de alivio de tensiones o control de fractura frágil. Las pruebas de presión hidrostática no eliminan la necesidad de tratamiento térmico post-soldadura, ya sea requerido por el código de construcción aplicable o por los requisitos del usuario. Ver también párrafo 502-1.7.</p>
            <p>(d) Puede considerarse el uso de un dispositivo para aislar y probar una soldadura independientemente del recipiente o sistema a presión completo cuando se requiera una prueba de presión a presión de prueba completa de acuerdo con la sección 501-6 (ver párrafo 501-3.3). Debe notarse que el uso de dispositivos para aislar y probar una soldadura debe usarse en conjunto con controles de soldadura apropiados para la actividad, exámenes de soldadura en proceso y END (ver Artículo 502). Para la selección de dispositivos de prueba para pruebas de presión localizadas de reparaciones soldadas de sistemas de tuberías, ver Artículo 503.</p>
            <p>(e) Puede considerarse una prueba de estanqueidad cuando no es necesario verificar la integridad estructural pero debe verificarse la estanqueidad antes del arranque.</p>
            <p>(f) Puede considerarse una prueba de fugas en servicio cuando no es necesario verificar la integridad estructural y las consecuencias de una fuga durante el arranque son aceptables, o cuando lo permita el código de construcción aplicable o el código post-construcción.</p>
        </div>

        <div class="subsection">
            <h4>501-3.3 Selección del Tipo de Prueba</h4>
            <p>El requisito para las pruebas de presión se puede encontrar en el código de construcción aplicable o código post-construcción. Cuando no se hace referencia específica a ninguna prueba, la Figura 501-3.3-1 deberá usarse para determinar el tipo de prueba a realizar.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_501-3.3-1.png" class="figure-image">
                <p class="figure-caption">Figura 501-3.3-1 Selección del Tipo de Prueba</p>
            </div>
        </div>

        <div class="subsection">
            <h4>501-3.4 Prueba de Presión - General</h4>
            <p>(a) Debe considerarse una prueba de presión de equipos o un sistema de tuberías si se ha realizado una alteración o reparación, el equipo ha sido reclasificado o necesita ser recertificado para determinar la integridad.</p>
            <p>(b) Puede que no se requiera una prueba de presión para reclasificar equipos usando un esfuerzo permisible más alto ya que la prueba de presión original podría ser más alta que la presión de prueba requerida para la reclasificación.</p>
            <p>(c) Debe considerarse la prueba de presión [o alternativamente, prueba de estanqueidad; ver párrafo 501-6.3(a)] durante inspecciones de rutina y después de operaciones de limpieza cuando la integridad de las juntas tubo-placa de tubos esté en duda. Después de completar la prueba de presión, deben inspeccionarse los tubos en busca de pandeo que pueda haber ocurrido.</p>

            <div class="subsection">
                <h4>501-3.4.1 Exclusiones de la Prueba Hidrostática</h4>
                <p>Las pruebas de presión deben realizarse hidrostáticamente a menos que se aplique una de las siguientes condiciones:</p>
                <p>(a) El equipo, tuberías y/o soportes, incluyendo cimentaciones, no pueden soportar adecuadamente el peso del líquido.</p>
                <p>(b) El equipo o tuberías no pueden secarse y los rastros del líquido de prueba pueden resultar en contaminación del sistema o su contenido después de regresar al servicio.</p>
                <p>(c) El equipo o tuberías contiene revestimientos internos que podrían dañarse por el medio de prueba.</p>
            </div>

            <div class="subsection">
                <h4>501-3.4.2 Condiciones de Prueba Neumática</h4>
                <p>Si no se puede realizar una prueba hidrostática por párrafo 501-3.4.1, entonces debe considerarse una prueba de presión neumática.</p>
                <p>(a) Si una prueba de presión neumática presentaría peligros inaceptables, como riesgo de fractura frágil a la temperatura de prueba del metal, entonces debe desarrollarse un sustituto para la prueba de presión.</p>
                <p>(b) Ver párrafo 501-6.2(d) para información sobre la necesidad de análisis de riesgo.</p>
            </div>

            <div class="subsection">
                <h4>501-3.4.3 Consideraciones de Pruebas de Presión Localizadas</h4>
                <p>(a) Puede considerarse el uso de un dispositivo de prueba para pruebas de presión localizadas cuando exista alguna de las siguientes condiciones:</p>
                <p>(1) Otras soldaduras en el sistema bajo consideración ya han sido probadas o están exentas de prueba.</p>
                <p>(2) La fractura frágil puede ser una consideración.</p>
                <p>(3) Existe la necesidad de minimizar el número de juntas bridadas para desmontar con el propósito de instalar bridas ciegas de aislamiento.</p>
                <p>(4) Existe la necesidad de minimizar la cantidad de fluido de prueba y/o evitar la contaminación de elementos del proceso en el sistema, como catalizador, revestimientos, refractario u otros equipos de proceso.</p>
                <p>(5) El aislamiento completo no es posible o práctico, como cuando un sistema de tuberías está soldado directamente a la boquilla de un recipiente a presión.</p>
                <p>(6) El uso exclusivo de pruebas radiográficas (RT) u otros exámenes volumétricos no es deseado o práctico.</p>
                <p>(7) Existe la necesidad de minimizar la cantidad de reducción y reinstalación de aislamiento.</p>
                <p>(8) Existen consecuencias potenciales o riesgos adicionales asociados con el fluido de prueba que permanece en el sistema después de completar una prueba de presión.</p>
                <p>(9) Existe la necesidad de minimizar el desmontaje y/o remoción de componentes del sistema.</p>
                <p>(10) Se ha realizado una reparación versus una alteración. (Ver Artículo 502 para información sobre reparación y alteración.)</p>
                <p>(b) Los dispositivos de prueba para pruebas de presión localizadas deberán seleccionarse e instalarse de acuerdo con el Artículo 503.</p>
            </div>

            <div class="subsection">
                <h4>501-3.4.4 Consideraciones de Examen No Destructivo</h4>
                <p>Puede considerarse el examen no destructivo en lugar de las pruebas de presión para verificar reparaciones o alteraciones en algunos casos (ver Artículo 502). Esto puede requerir el uso de pruebas de estanqueidad también.</p>
            </div>
        </div>

        <div class="subsection">
            <h4>501-3.5 Documentación</h4>
            <p>Debe prepararse un formulario de registro de prueba de presión antes de la prueba de presión y completarse una vez que el propietario o su representante designado acepte la prueba. Se proporciona un formulario de registro de muestra en el Apéndice Obligatorio 501-1.</p>
        </div>
    </div>

    <div class="subsection">
        <h4>501-4 FABRICACIÓN</h4>
        <p>Dentro del contexto de este Artículo, esta sección no es aplicable.</p>
    </div>

    <div class="subsection">
        <h4>501-5 EXAMEN</h4>
        <p>Debe realizarse un examen visual durante la prueba de presión, estanqueidad o fuga en servicio para determinar si ocurre alguna fuga durante la prueba. Cuando el examen visual no sea posible, ej., con tuberías subterráneas, el monitoreo de la presión del sistema para caída de presión durante la prueba de estanqueidad o fuga en servicio puede sustituirse cuando sea aprobado por el propietario. Ver párrs. 501-6.1(t)(8) y 501-6.2.1, Paso 3 (c) respecto a prácticas de seguridad.</p>
    </div>

    <div class="subsection">
        <h4>501-6 PRUEBAS</h4>
        
        <div class="subsection">
            <h4>501-6.1 Prueba de Presión Hidrostática de Recipientes a Presión o Sistemas de Tuberías</h4>
            <p>(a) Los registros de fabricación e inspección en servicio junto con cualquier registro operativo necesario deben revisarse antes de las pruebas para determinar si el componente/sistema de presión ha experimentado un mecanismo de daño creíble. Debe considerarse cómo cada mecanismo podría manifestarse durante una prueba de presión. Ver sección 501-7 para referencias que proporcionan consideraciones para mecanismos de daño.</p>
            <p>(1) Los registros de inspección deben revisarse para adelgazamiento más allá del límite especificado. Si ha ocurrido adelgazamiento más allá del margen de corrosión especificado, debe realizarse una evaluación de ingeniería utilizando datos de inspección actuales.</p>
            <p>(2) El material puede haber sido sometido a daño debido a temperatura o exposición al proceso. Si se encuentra evidencia de daño por inspección, debe realizarse una evaluación de ingeniería utilizando datos de inspección actuales.</p>
            <p>(3) El componente/sistema puede haber sido dañado por medios mecánicos como alta vibración. Debe considerarse analizar el sistema en busca de áreas donde podría ocurrir daño y luego inspeccionar estas áreas antes de las pruebas para buscar evidencia de daño.</p>
            
            <p>(b) Para reducir el riesgo de fractura frágil durante la prueba, la temperatura del metal durante la prueba de presión de recipientes a presión debe mantenerse a un mínimo de 17°C (30°F) por encima de la temperatura mínima de diseño del metal (MDMT) (como se muestra en el Reporte de Datos del Fabricante).</p>
            <p>(1) Si la MDMT es desconocida, la temperatura mínima permisible (MAT) del componente o sistema debe determinarse usando una evaluación de aptitud para el servicio.</p>
            <p>(2) Si un recipiente hecho de acero de baja aleación ha sido sometido a tratamiento térmico o temperaturas de servicio superiores a 370°C (700°F), puede haber ocurrido un cambio ascendente en la temperatura de transición dúctil-frágil. Esta pérdida de tenacidad puede no ser aparente durante la operación; sin embargo, el recipiente puede ser susceptible a fractura frágil. Por lo tanto, la temperatura utilizada para la prueba de presión puede necesitar ser determinada por una evaluación de aptitud para el servicio.</p>
            
            <p>(c) Al probar sistemas de tuberías a presión, la temperatura ambiente debe ser mayor que 2°C (35°F). Al probar a presión a temperaturas más frías, debe considerarse el uso de una solución anticongelante como medio de prueba para prevenir la congelación; sin embargo, la temperatura del metal debe mantenerse por encima de la temperatura de transición dúctil-frágil. Puede encontrarse orientación adicional sobre pruebas de presión a temperaturas frías en las referencias listadas en la sección 501-7.</p>
            
            <p>(d) El recipiente y sus soportes y la cimentación y/o el sistema de tuberías y sus soportes y estructuras de soporte deben evaluarse para determinar si soportarán adecuadamente el peso del medio de prueba.</p>
            
            <p>(e) Los manómetros utilizados para registrar presiones de prueba deben calibrarse y ubicarse en el punto más alto del recipiente o en el sistema de tuberías. Los manómetros deben cumplir con los requisitos de ASME PTC 19.2 o estándar de desempeño de manómetro similar, y corregirse según sea necesario para compensar la carga estática presente en el sistema.</p>
            
            <p>(f) Deben proporcionarse ventilas en los puntos altos del recipiente y/o sistema de tuberías para purgar el aire del componente probado mientras se está llenando.</p>
            
            <p>(g) El recipiente o sistema de tuberías debe evaluarse para componentes que no resistirán la presión de prueba o interferirán de otra manera con una prueba de presión. Ejemplos de estos componentes incluyen placas de orificio, toberas de flujo, válvulas de control, juntas de expansión, etc.</p>
            
            <p>(h) Debe realizarse una evaluación de la necesidad de dispositivos de alivio de sobrepresión. La presión de ajuste de un dispositivo de alivio de presión no debe ser mayor que el menor de:</p>
            <p>(1) la presión de prueba más 345 kPa (50 psi), o</p>
            <p>(2) 110% de la presión de prueba</p>
            
            <p>(i) Debe considerarse la disposición adecuada del agua de prueba, ya que puede contener rastros residuales del contenido del sistema.</p>
            
            <p>(j) Las pruebas de presión deben completarse antes del aislamiento. Las soldaduras u otras juntas que previamente han sido probadas a presión pueden aislarse o cubrirse de otra manera cuando sea acordado por el propietario-usuario.</p>
            
            <p>(k) Las pruebas de presión deben completarse antes de pintar las juntas de soldadura, a menos que las juntas de soldadura hayan sido probadas previamente. Los resultados de pruebas documentados indican que varios tipos de pintura retendrán presión durante una prueba de presión cuando cubren un "orificio de alfiler" a través de la pared. Al decidir si las soldaduras pueden pintarse antes de las pruebas de presión, debe considerarse lo siguiente:</p>
            <p>(1) el sistema(s) de pintura que se está utilizando y su capacidad para enmascarar una fuga potencial</p>
            <p>(2) la probabilidad de que el(los) fluido(s) de proceso actúe(n) como solvente en el sistema de pintura si existe un orificio de alfiler, aumentando así el potencial de que ocurra una fuga</p>
            <p>(3) el efecto en equipos o personal cercano si ocurre una fuga</p>
            <p>(4) el costo de realizar reparaciones en el campo si ocurre tal falla</p>
            
            <p>(l) No se requiere que el inspector que aprueba la prueba de presión hidrostática esté certificado por SNT-TC-1A para Pruebas de Fuga o Examen Visual; sin embargo, el inspector debe tener la autoridad para detener una prueba de presión cuando se considere necesario hacerlo. Deben establecerse líneas de comunicación dedicadas entre el inspector que tiene autoridad de supervisión y todo el otro personal que realiza la prueba de presión.</p>
            
            <p>(m) La presión de prueba de una prueba de presión hidrostática de recipientes a presión o intercambiadores de calor debe ser de acuerdo con el código de construcción original, considerando también cualquier análisis de ingeniería posterior que se considere necesario.</p>
            
            <p>(n) Cuando los requisitos del código de construcción original no están disponibles, la presión de prueba para una prueba de presión hidrostática para recipientes a presión o intercambiadores de calor será la menor de (1) o (2) a continuación.</p>
            <p>(1) Ecuación (1)</p>
            <p>P<sub>t</sub> = 1.3 × P × S<sub>at</sub>/S<sub>dt</sub></p>
            <p>donde</p>
            <p>1.3 = factor de prueba</p>
            <p>P = presión máxima de trabajo permisible del Reporte de Datos del Fabricante, o el valor al cual se está reclasificando el recipiente</p>
            <p>P<sub>t</sub> = presión de prueba a utilizar, medida en la parte superior del recipiente en su posición operativa normal</p>
            <p>S<sub>at</sub> = esfuerzo permisible a temperatura de prueba del código de construcción aplicable para el material del cual está construido el componente bajo consideración</p>
            <p>S<sub>dt</sub> = esfuerzo permisible a temperatura de diseño del código de construcción aplicable para el material del cual está construido el componente bajo consideración</p>
            <p>S<sub>at</sub>/S<sub>dt</sub> = relación de esfuerzos permisibles; el valor más bajo debe usarse en la ecuación (1) para todos los materiales considerados</p>
            
            <p>(2) Una presión igual a la que resulta en un esfuerzo de tensión de membrana primario general aplicado igual al 90% del esfuerzo de fluencia mínimo especificado a temperatura de prueba del material de acero al carbono, o 100% del material de acero austenítico. Los valores de resistencias a la fluencia para algunos materiales se proporcionan en ASME BPVC, Sección II, Parte D.</p>
            
            <p>(o) La presión de prueba para una prueba de presión hidrostática para sistemas de tuberías debe ser especificada por el propietario y debe ser de acuerdo con el código de construcción original.</p>
            
            <p>(p) Cuando los requisitos del código de construcción original no están disponibles, la presión de prueba para una prueba de presión hidrostática para sistemas de tuberías debe ser especificada por el propietario y debe ser al menos</p>
            <p>P<sub>t</sub> = 1.5 × P × S<sub>at</sub>/S<sub>dt</sub></p>
            <p>donde</p>
            <p>1.5 = factor de prueba</p>
            <p>P = presión de diseño interna del sistema de tuberías</p>
            <p>P<sub>t</sub> = presión de prueba a utilizar, medida en el punto más alto del sistema de tuberías en su posición operativa normal</p>
            <p>S<sub>at</sub> = esfuerzo permisible a temperatura de prueba del código de construcción aplicable para el material del cual está construido el componente bajo consideración</p>
            <p>S<sub>dt</sub> = esfuerzo permisible a temperatura de diseño del código de construcción aplicable para el material del cual está construido el componente bajo consideración</p>
            <p>S<sub>at</sub>/S<sub>dt</sub> = relación de esfuerzos permisibles; el valor más bajo debe usarse en la ecuación (2) para todos los materiales considerados</p>
            <p>El esfuerzo resultante debido a la presión de prueba, P<sub>t</sub>, debe limitarse al 100% de la resistencia a la fluencia, S<sub>y</sub>.</p>
            
            <p>(q) Si la presión de diseño del sistema de tuberías no puede verificarse, el valor para P en la ecuación (2) puede ser el menor de (1) o (2) a continuación normalizado al punto más alto del sistema de tuberías.</p>
            <p>(1) La presión de trabajo a temperatura de diseño para bridas en el sistema de tuberías de ASME B16.5 u otro estándar aplicable.</p>
            <p>(2) La presión máxima permisible calculada para el componente limitante del sistema de tuberías.</p>
            <p>(3) La presión de prueba no debe exceder la que resulta en un esfuerzo de tensión de membrana primario general aplicado mayor al 100% del esfuerzo de fluencia mínimo especificado a temperatura de prueba. Las resistencias a la fluencia a temperatura ambiente pueden encontrarse en ASME B31.3 u otro código de construcción aplicable. Las resistencias a la fluencia a temperaturas más altas pueden encontrarse en ASME BPVC, Sección II, Parte D.</p>
            
            <p>(r) No se recomienda la prueba de presión de un sistema de tuberías a través de equipos. Las tuberías pueden probarse con un recipiente a presión si no es práctico aislar las tuberías del recipiente, la presión de prueba de las tuberías es igual o menor que la presión de prueba del recipiente y el recipiente y sus soportes soportarán adecuadamente el peso del líquido de prueba.</p>
            <p>Si la presión de prueba de las tuberías excede la presión de prueba del recipiente, puede usarse la presión de prueba del recipiente, siempre que sea al menos 77% de la presión de prueba de las tuberías; de lo contrario, las tuberías deben aislarse del recipiente a presión y probarse a presión independientemente.</p>
            
            <p>(s) Los sistemas de tuberías que operan a presión atmosférica pueden probarse en busca de fugas llenando solo con líquido de prueba.</p>
            
            <p>(t) Los elementos especificados en (1) a (9) a continuación deben considerarse al desarrollar procedimientos de prueba de presión hidrostática para recipientes o sistemas de tuberías.</p>
            <p>(1) Todo el equipo y/o tuberías a probar deben verificarse como limpios de suciedad, escoria de soldadura, escombros de construcción u otra materia extraña inaceptable.</p>
            <p>(2) Los elementos identificados en (g) deben removerse.</p>
            <p>(3) Todos los soportes de resorte en líneas de servicio de vapor deben protegerse con topes de recorrido adecuados para prevenir sobrecarga durante la prueba de presión.</p>
            <p>(4) Deben proporcionarse soportes temporales para tuberías y/o soportes de tuberías que no han sido diseñados para soportar el peso del líquido de prueba utilizado para la prueba de presión hidrostática.</p>
            <p>(5) Debe evitarse el uso de agua salada o salobre. El agua de prueba debe estar libre de sedimentos y sustancias corrosivas.</p>
            <p>(6) El agua de prueba debe verificarse para estar libre de microbios. Si el agua contiene un nivel inaceptable de microbios, debe desinfectarse.</p>
            <p>(7) El agua de prueba utilizada para recipientes de acero austenítico o sistemas de tuberías, o para componentes revestidos o sobrepuestos con acero inoxidable austenítico, debe ser condensado, desmineralizada o de calidad potable, con un contenido de cloruro verificado de menos de 50 ppm.</p>
            <p>(8) Después de un tiempo de retención mínimo de 10 min, la presión debe reducirse en 30%, o a la presión de diseño interna, la que sea menor, y debe realizarse un examen visual en busca de evidencia de fugas en ubicaciones como bridas, juntas de soldadura, conexiones roscadas y cualquier ubicación reparada.</p>
            <p>(9) El líquido de prueba debe drenarse inmediatamente después de completar la prueba hidrostática. Debe ejercerse cuidado para proporcionar ventilación adecuada para prevenir la creación de presión negativa interna (vacío) durante el drenado.</p>
            <p>(-a) Los recipientes a presión y/o sistemas de tuberías que contendrán el agua de prueba por más de 10 días, ya sea que el líquido de prueba esté presurizado o no, deben tratarse con un inhibidor de corrosión y biocida. Debe consultarse a un ingeniero de corrosión.</p>
            <p>(-b) Si es necesario un secado adicional, debe considerarse el uso de aire caliente o nitrógeno caliente.</p>
            <p>(-c) Si no es posible el drenado completo de recipientes y/o sistemas de tuberías de acero inoxidable austenítico, los componentes deben enjuagarse con agua de bajo cloruro (menos de 5 ppm).</p>
            
            <p>(10) Después de completar la prueba, el recipiente y/o sistema de tuberías debe restaurarse a su condición operativa. Esto incluye, pero no se limita a, (-a) a (-f) a continuación.</p>
            <p>(-a) Todas las juntas bridadas cegadas para pruebas de presión deben reensamblarse con juntas nuevas y apretadas de acuerdo con las especificaciones aplicables. Debe considerarse ASME PCC-1.</p>
            <p>(-b) Todos los coladores contenidos en el sistema de tuberías deben removerse, limpiarse y reinstalarse.</p>
            <p>(-c) Los topes de recorrido temporales instalados en soportes de resorte deben removerse.</p>
            <p>(-d) Las conexiones de ventilación y purga que se instalaron solo para fines de prueba deben taponarse usando materiales y métodos por la especificación aplicable. Debe considerarse la soldadura de sellado cuando sea necesario.</p>
            <p>(-e) Las válvulas de alivio o seguridad que fueron aisladas para la prueba deberán tener los dispositivos de aislamiento (ej., topes, bridas deslizantes, etc.) removidos.</p>
            <p>(-f) Las juntas de expansión que fueron bloqueadas para prevenir daño durante la prueba de presión deben desbloquearse.</p>
        </div>

        <div class="subsection">
            <h4>501-6.2 Prueba de Presión Neumática de Recipientes a Presión o Tuberías</h4>
            <p>(a) Cuando no se puede realizar una prueba de presión hidrostática por párrafo 501-6.1 (ver párrafo 501-3.4.1), puede realizarse una prueba de presión neumática.</p>
            
            <p>(b) El nitrógeno debe ser el medio de prueba ya que no puede soportar la combustión. Alternativamente, debe usarse aire limpio, seco y libre de aceite que cumpla con los requisitos de Clase 1, 2 o 3 de aire por ISO 8573-1:2010 con un punto de rocío que oscile entre -20°C y -70°C (-4°F a -94°F). Debe usarse precaución al introducir aire en cualquier sistema que no pueda verificarse como libre de hidrocarburos, ya que esto podría resultar en la formación de una mezcla explosiva. Cuando sea necesario, el fluido de servicio de diseño puede usarse para pruebas de presión neumática.</p>
            
            <p>(c) Los registros de fabricación e inspección en servicio, junto con cualquier registro operativo necesario, deben revisarse antes de las pruebas para determinar si el componente/sistema de presión ha experimentado un mecanismo de deterioro creíble. Debe considerarse cómo cada mecanismo podría manifestarse.</p>
            <p>(1) Los registros de inspección deben revisarse para adelgazamiento más allá del límite especificado. Si ha ocurrido adelgazamiento más allá del margen de corrosión especificado, debe realizarse una evaluación de ingeniería.</p>
            <p>(2) El componente/sistema puede haber sido dañado por medios mecánicos como alta vibración. Debe considerarse inspeccionar todo el sistema antes de las pruebas para buscar evidencia de daño.</p>
            
            <p>(d) Los componentes fabricados de materiales frágiles como hierro fundido y hierro dúctil no deben probarse neumáticamente a presión a menos que se cumplan los siguientes requisitos:</p>
            <p>(1) la prueba de presión no excede la PMAP</p>
            <p>(2) se realiza END adicional, como pruebas de Emisión Acústica (AE), junto con la prueba de presión</p>
            <p>(3) se siguen los procedimientos del párrafo 501-6.2.1</p>
            
            <p>(e) La energía almacenada máxima calculada de cualquier recipiente o sistema de tuberías siendo probado neumáticamente a presión no debe ser mayor que 271,000,000 J (200,000,000 ft-lb). Al calcular la energía almacenada para un recipiente, se considerará el volumen total. Al calcular la energía almacenada de un sistema de tuberías, puede considerarse un volumen máximo basado en una longitud de 8 diámetros de tubería para cualquier falla única analizada.</p>
            
            <p>(f) Si la energía almacenada calculada es mayor que 271,000,000 J (200,000,000 ft-lb), entonces debe ocurrir uno de los siguientes:</p>
            <p>(1) El sistema debe dividirse en volúmenes más pequeños de modo que cada subsistema tenga una energía almacenada no mayor que 271,000,000 J (200,000,000 ft-lb).</p>
            <p>(2) Debe calcularse una distancia mínima por Apéndice Obligatorio 501-III, ecuación (III-1), y debe cumplirse esta distancia.</p>
            <p>(3) Debe instalarse una barrera por (h).</p>
            
            <p>(g) También debe realizarse un análisis de peligro detallado para evaluar el riesgo asociado con la liberación de energía almacenada. Ver Apéndice Obligatorio 501-IV para consideraciones relativas a la evaluación de riesgo. Los factores a considerar en este análisis deben incluir:</p>
            <p>(1) cualquier mecanismo de daño identificado por revisión de registros de fabricación o inspección en servicio junto con registros operativos</p>
            <p>(2) la MDMT de los componentes siendo probados a presión, y su comparación relativa con la temperatura de prueba para abordar el riesgo de fractura frágil</p>
            <p>(3) el nivel de esfuerzo del sistema mientras se somete a una prueba</p>
            <p>(4) la cantidad de examen no destructivo realizado en soldaduras que no han sido sometidas previamente a una prueba de presión hidrostática o neumática</p>
            <p>(5) otros métodos de inspección simultáneos que se realizan durante la prueba de presión como pruebas de emisión acústica (AE)</p>
            <p>(6) onda de presión de explosión potencial</p>
            <p>(7) tamaño de fragmentos potenciales resultantes de falla del sistema, distancia de viaje, y existencia de barreras suficientes para detener proyectiles de fragmentos</p>
            
            <p>(h) Para pruebas de presión donde el riesgo de lesión por fragmentos potenciales, ondas de choque u otras consecuencias de cualquier falla del sistema presurizado se determina inaceptable, debe establecerse un área de acceso limitado y punto de control de presión. La distancia mínima desde el límite de esta área al componente presurizado debe calcularse de acuerdo con el procedimiento del Apéndice Obligatorio 501-III.</p>
            <p>Cuando los requisitos de espaciamiento descritos en el Apéndice Obligatorio 501-III no son alcanzables, debe considerarse el diseño, fabricación e instalación de una barrera alternativa capaz de resistir la explosión de energía almacenada dentro del sistema. Ver también (e).</p>
            
            <p>(i) Debe proporcionarse protección de alivio de sobrepresión. La presión de ajuste de un dispositivo de alivio de presión no debe ser mayor que el mayor de</p>
            <p>(1) la presión de prueba más 70 kPa (10 psi), o</p>
            <p>(2) 110% de la presión de prueba</p>
            
            <p>(j) La presión de prueba para una prueba de presión neumática para equipos debe ser de acuerdo con el código de construcción original, considerando también cualquier análisis de ingeniería posterior que se considere necesario.</p>
            
            <p>(k) Si los requisitos del código de construcción original no están disponibles, la presión de prueba para una prueba de presión neumática para recipientes a presión será</p>
            <p>P<sub>t</sub> = 1.1 × P × S<sub>at</sub>/S<sub>dt</sub></p>
            <p>donde</p>
            <p>1.1 = factor de prueba</p>
            <p>P = presión máxima de trabajo permisible del Reporte de Datos del Fabricante. Si se desconoce, use la presión de diseño o nominal del recipiente.</p>
            <p>P<sub>t</sub> = presión de prueba a utilizar</p>
            <p>S<sub>at</sub> = esfuerzo permisible a temperatura de prueba del código de construcción aplicable para el material del cual está construido el componente bajo consideración</p>
            <p>S<sub>dt</sub> = esfuerzo permisible a temperatura de diseño del código de construcción aplicable para el material del cual está construido el componente bajo consideración</p>
            <p>S<sub>at</sub>/S<sub>dt</sub> = relación de esfuerzos permisibles; el valor más bajo debe usarse en la ecuación (3) para todos los materiales considerados</p>
            
            <p>(l) Si los requisitos del código de construcción original no están disponibles, la presión de prueba para una prueba de presión neumática para sistemas de tuberías será</p>
            <p>P<sub>t</sub> = 1.1 × P</p>
            <p>donde</p>
            <p>1.1 = factor de prueba</p>
            <p>P = presión de diseño interna del sistema de tuberías</p>
            <p>P<sub>t</sub> = presión de prueba a utilizar</p>
            
            <p>(m) La energía almacenada del equipo o sistema de tuberías bajo presión neumática debe calcularse y convertirse a libras equivalentes de TNT (Trinitrotolueno) usando las ecuaciones mostradas en el Apéndice Obligatorio 501-II. El valor calculado puede usarse para cálculos de distancia segura alternativa según el Apéndice Obligatorio 501-III. La distancia segura mínima será la mayor de la distancia requerida por párrafo 501-III-1(a) o como calculada por Apéndice Obligatorio 501-III, ecuación (III-1). Ver también Apéndice Obligatorio 501-III, Tabla 501-III-2-1 cuando se consideren fragmentos.</p>
            <p>También puede requerirse evaluación de riesgo; ver (d) y Apéndice Obligatorio 501-IV.</p>

            <div class="subsection">
                <h4>501-6.2.1 Procedimientos de Prueba Neumática</h4>
                <p>Los elementos especificados en Pasos 1 a 5 deben considerarse al desarrollar procedimientos de prueba de presión neumática para recipientes o sistemas de tuberías.</p>
                
                <p><strong>Paso 1.</strong> Ver (a) a (e) de este Paso.</p>
                <p>(a) Aumentar la presión al menor de 170 kPa (25 psi) o 25% de la presión de prueba.</p>
                <p>(b) Bloquear el suministro y mantener durante 10 min.</p>
                <p>(c) Inspeccionar visualmente el sistema en busca de fugas.</p>
                <p>(d) Si se descubren fugas, liberar presión, reparar y regresar al Paso 1.</p>
                <p>(e) Si no se descubren fugas, proceder al Paso 2.</p>
                
                <p><strong>Paso 2.</strong> Aumentar gradualmente la presión del sistema al 50% de la presión de prueba como sigue:</p>
                <p>(a) Aumentar la presión en el Paso 1 en 350 kPa (50 psi) o al 35% de la presión de prueba, lo que sea mayor. Mantener durante un mínimo de 3 min para permitir que las deformaciones se igualen. Continuar aumentando en incrementos de 350 kPa (50 psi) hasta que la presión del sistema esté al 50% de la presión de prueba.</p>
                <p>(b) Mantener al 50% de presión de prueba durante un mínimo de 10 min. Observar el manómetro para pérdida de presión del sistema. Si la pérdida de presión excede el 10% de la presión de prueba, la presión del sistema debe reducirse al 25% de la presión de prueba y el sistema verificado en busca de fugas.</p>
                <p>(c) Si no se detecta pérdida de presión, sujeto a aprobación del inspector, proceder al Paso 3.</p>
                
                <p><strong>Paso 3.</strong> Ver (a) a (c) de este Paso.</p>
                <p>(a) Aumentar gradualmente la presión del sistema en incrementos del 10% de la presión de prueba. En cada incremento, bloquear el suministro y observar el manómetro durante 5 min.</p>
                <p>Si se observa pérdida de presión, reducir la presión al 25% de la presión de prueba y verificar en busca de fugas. Si es necesario, liberar presión y realizar las reparaciones necesarias. Regresar al Paso 1.</p>
                <p>(b) Una vez que se alcanza la presión de prueba completa, bloquear el suministro y observar el manómetro durante un mínimo de 10 min.</p>
                <p>(c) Reducir la presión del sistema a la siguiente presión aplicable:</p>
                <p>(1) la presión de prueba dividida por el factor de prueba para recipientes [ver párrafo 501-6.2(j), ecuación (3)]. Si no hay factor de prueba disponible, usar 4/5 de la presión de prueba.</p>
                <p>(2) presión de diseño para tuberías.</p>
                
                <p><strong>Paso 4.</strong> Ver (a) a (c) de este Paso.</p>
                <p>(a) Realizar una inspección completa para fugas del recipiente o sistema de tuberías, o ambos, en ubicaciones como bridas, juntas de soldadura y conexiones roscadas.</p>
                <p>NOTA: Se asume que la integridad del sistema presurizado ha sido probada por el Paso 3 (b) y las barreras requeridas por párrafo 501-6.2(e) pueden pasarse de manera segura.</p>
                <p>(b) Si no se descubre ninguna fuga, liberar la presión del sistema.</p>
                <p>(c) Si se descubre fuga que no es aceptable, aliviar toda la presión del sistema y reparar. Repetir Pasos 2 y 3.</p>
                
                <p><strong>Paso 5.</strong> Después de completar la prueba, el recipiente o sistema de tuberías, o ambos, deben restaurarse a su condición de diseño. Esto incluye, pero no se limita a, lo siguiente:</p>
                <p>(a) Todas las juntas bridadas cegadas para pruebas de presión deben reensamblarse con juntas nuevas y apretadas de acuerdo con las especificaciones aplicables. Debe considerarse ASME PCC-1.</p>
                <p>(b) Las conexiones de ventilación y purga que se instalaron únicamente para fines de prueba deben taponarse usando materiales y métodos por la especificación aplicable. Debe considerarse la soldadura de sellado cuando sea necesario.</p>
            </div>
        </div>

        <div class="subsection">
            <h4>501-6.3 Prueba de Estanqueidad</h4>
            <p>(a) Puede realizarse una prueba de estanqueidad para detectar fugas en varias ubicaciones dentro de un sistema a presión. Puede realizarse en sistemas que previamente han sido probados a presión, para soldaduras de cierre de sistemas de tuberías, en juntas tubo-placa de tubos, y en sistemas exentos de pruebas hidrostáticas o neumáticas. ASME BPVC, Sección V, Artículo 10 proporciona información sobre una variedad de métodos de prueba de fugas.</p>
            
            <p>(b) Una prueba de fuga sensible por ASME B31.3 es el método preferido para conducir una prueba de estanqueidad.</p>
            
            <p>(c) La presión de prueba aplicada para recipientes y tuberías no debe exceder el 35% de la presión de diseño. Sin embargo, las fugas en juntas bridadas pueden ser evidentes a presiones mucho más bajas cuando se usan métodos de detección de fugas sensibles; por lo tanto, debe especificarse la presión de prueba mínima que permita cumplir con los requisitos de sensibilidad de prueba.</p>
            
            <p>(d) Donde las consecuencias de fuga del medio de proceso son aceptables, puede realizarse una prueba de fuga en servicio como una prueba de estanqueidad usando el medio de proceso durante el arranque del sistema.</p>

            <div class="subsection">
                <h4>501-6.3.1 Procedimientos de Prueba de Estanqueidad Neumática</h4>
                <p>Los elementos especificados en (a) a (f) deben considerarse al desarrollar procedimientos de prueba de estanqueidad neumática para recipientes o sistemas de tuberías.</p>
                
                <p>(a) Debe usarse aire limpio, seco y libre de aceite como medio de prueba, excepto en sistemas que no pueden verificarse como libres de hidrocarburos. Para esta situación, debe usarse nitrógeno como medio de prueba [ver párrafo 501-6.2(b)].</p>
                
                <p>(b) Para minimizar la energía almacenada de un sistema, la presión de prueba máxima no debe ser más del 35% de la presión de diseño del recipiente o sistema de tuberías. La presión de prueba no debe ser menor que el menor de 105 kPa (15 psi) o 25% de la presión de diseño del sistema.</p>
                
                <p>(c) La presión del sistema debe aumentarse gradualmente hasta que la presión del sistema sea el menor de 170 kPa (25 psi) o 25% de la presión de prueba. Mantener a esta presión el tiempo suficiente para conducir una inspección preliminar en busca de fugas.</p>
                
                <p>(d) La presión del sistema debe aumentarse gradualmente en incrementos del 10% de la presión de prueba, manteniendo de 30 s a 1 min en cada incremento. Mantener a la presión de prueba final y completar una inspección exhaustiva para fugas usando el método de prueba de Gas y Burbujas especificado en ASME BPVC, Sección V, Artículo 10, u otro método de sensibilidad igual o mejor.</p>
                
                <p>(e) Si se descubre fuga y una junta necesita apretarse, reducir la presión del sistema al menor del 50% de la presión de prueba o 170 kPa (25 psi) y apretar.</p>
                
                <p>(f) Después de completar la prueba, el recipiente y/o sistema de tuberías debe restaurarse a su condición operativa.</p>
            </div>
        </div>
    </div>

    <div class="subsection">
        <h4>501-7 REFERENCIAS</h4>
        <p>La siguiente es una lista de publicaciones referenciadas en este Artículo. A menos que se especifique lo contrario, se aplicará la última edición.</p>
        
        <div class="table-container">
            <table class="api-table">
                <caption>Tabla 501-7-1 Referencias</caption>
                <thead>
                    <tr>
                        <th>Referencia</th>
                        <th>Título</th>
                        <th>Editor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ANSI/ASNT CP-189-2006</td>
                        <td>Estándar ASNT para Calificación y Certificación de Personal de Pruebas No Destructivas</td>
                        <td>ASNT</td>
                    </tr>
                    <tr>
                        <td>ASNT SNT-TC-1A</td>
                        <td>Calificación y Certificación de Personal en Pruebas No Destructivas</td>
                        <td>ASNT</td>
                    </tr>
                    <tr>
                        <td>API RP 571</td>
                        <td>Mecanismos de Daño que Afectan Equipos Fijos en la Industria de Refinación</td>
                        <td>API</td>
                    </tr>
                    <tr>
                        <td>API RP 579-1/ASME FFS-1</td>
                        <td>Aptitud para el Servicio</td>
                        <td>API/ASME</td>
                    </tr>
                    <tr>
                        <td>API RP 580</td>
                        <td>Inspección Basada en Riesgo</td>
                        <td>API</td>
                    </tr>
                    <tr>
                        <td>ASME Boiler and Pressure Vessel Code</td>
                        <td>Varias Secciones</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ASME B16.5</td>
                        <td>Bridas de Tubería y Accesorios Bridados</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ASME B31.3</td>
                        <td>Tuberías de Proceso</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ASME PCC-1</td>
                        <td>Ensamblaje de Juntas Bridadas del Límite de Presión</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ASME PTC 19.2</td>
                        <td>Medición de Presión, Instrumentos y Aparatos</td>
                        <td>ASME</td>
                    </tr>
                    <tr>
                        <td>ISO 8573-1</td>
                        <td>Aire Comprimido - Parte 1: Contaminantes y clases de pureza</td>
                        <td>ISO</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="subsection">
        <h4>Apéndice Obligatorio 501-I Pruebas de Presión/Fugas</h4>
        <p>Este Apéndice proporciona un ejemplo de una hoja de datos de diseño como se hace referencia en el párrafo 501-3.5.</p>
        
        <div class="figure-container">
            <img src="images/asme_pcc2_figure_501-I.png" class="figure-image">
            <p class="figure-caption">Figura 501-I Registro de Prueba</p>
        </div>
    </div>

    <div class="subsection">
        <h4>Apéndice Obligatorio 501-II Cálculos de Energía Almacenada para Pruebas Neumáticas de Presión</h4>
        
        <div class="subsection">
            <h4>501-II-1 GENERAL</h4>
            <p>La energía almacenada del equipo o sistema de tuberías debe calcularse y convertirse a kilogramos (libras) equivalentes de TNT (Trinitrotolueno) usando las siguientes ecuaciones:</p>
            
            <p>E = [1/(k - 1)] × P<sub>at</sub> × V[1 - (P<sub>a</sub>/P<sub>at</sub>)<sup>(k-1)/k</sup>] (II-1)</p>
            
            <p>donde</p>
            <p>E = energía almacenada, J (ft-lb)</p>
            <p>k = relación de calor específico para el fluido de prueba</p>
            <p>P<sub>a</sub> = presión atmosférica absoluta, 101 kPa (14.7 psia)</p>
            <p>P<sub>at</sub> = presión de prueba absoluta, Pa (psia)</p>
            <p>V = volumen total bajo presión de prueba, m<sup>3</sup> (ft<sup>3</sup>)</p>
            
            <p>Cuando se usa aire o nitrógeno como medio de prueba (k = 1.4), esta ecuación se convierte en</p>
            
            <p>E = 2.5 × P<sub>at</sub> × V [1 - (P<sub>a</sub>/P<sub>at</sub>)<sup>0.286</sup>] (II-2)</p>
            
            <p>donde</p>
            <p>E = energía almacenada, ft-lb</p>
            <p>P<sub>a</sub> = presión atmosférica absoluta, 14.7 psia</p>
            <p>P<sub>at</sub> = presión de prueba absoluta, psia</p>
            <p>V = volumen total bajo presión de prueba, ft<sup>3</sup></p>
            
            <p>y</p>
            
            <p>TNT = E / 4,266,920 (II-3)</p>
            
            <p>donde</p>
            <p>TNT = energía medida en TNT, kg</p>
            
            <p>Para unidades SI usando aire o nitrógeno como medio de prueba (k = 1.4), esta ecuación se convierte en</p>
            
            <p>E = 360 × P<sub>at</sub> × V [1 - (P<sub>a</sub>/P<sub>at</sub>)<sup>0.286</sup>] (II-4)</p>
            
            <p>donde</p>
            <p>E = energía almacenada, J</p>
            <p>P<sub>a</sub> = presión atmosférica absoluta, 101,000 Pa</p>
            <p>P<sub>at</sub> = presión de prueba absoluta, Pa</p>
            <p>V = volumen total bajo presión de prueba, m<sup>3</sup></p>
            
            <p>y</p>
            
            <p>TNT = E / 4,266,920 (II-5)</p>
            
            <p>donde</p>
            <p>TNT = energía medida en TNT, lb</p>
            
            <p>Al calcular la energía almacenada para un recipiente, se considerará el volumen total. Al calcular la energía almacenada de un sistema de tuberías, se puede considerar un volumen máximo basado en una longitud de 8 diámetros de tubería para cualquier falla única analizada.</p>
            
            <p>Ver también párrs. 501-6.2(e) y 501-6.2(f).</p>
        </div>
    </div>

    <div class="subsection">
        <h4>Apéndice Obligatorio 501-III Cálculos de Distancia Segura para Pruebas Neumáticas de Presión</h4>
        
        <div class="subsection">
            <h4>501-III-1 DISTANCIA DE ONDA DE EXPLOSIÓN</h4>
            <p>La distancia mínima entre todo el personal y el equipo siendo probado será</p>
            <p>(a) R = 30 m (100 pies) para E ≤ 8,130,000 J (6,000,000 ft-lb)</p>
            <p>(b) como determinado por la ecuación (III-1) para E > 8,130,000 J (6,000,000 ft-lb)</p>
            
            <p>R = R<sub>escalado</sub> × (2 × TNT)<sup>1/3</sup> (III-1)</p>
            
            <p>donde</p>
            <p>E = energía almacenada como calculada por Apéndice Obligatorio 501-II, ecuación (II-1) o ecuación (II-2)</p>
            <p>R = distancia real desde el equipo</p>
            <p>R<sub>escalado</sub> = factor de consecuencia escalado; valor para ecuación (III-1) será 20 m/kg<sup>1/3</sup> (50 pies/lb<sup>1/3</sup>) o mayor</p>
            <p>TNT = energía medida en TNT, kg (lb), determinada de Apéndice Obligatorio 501-II, ecuación (II-3) o ecuación (II-5)</p>
            
            <p>Si no puede obtenerse la distancia mínima calculada, puede elegirse un valor alternativo para R<sub>escalado</sub> basado en la Tabla 501-III-1-1 para usar en la ecuación (III-1). Ver también párrafo 501-6.2(g).</p>
            
            <div class="table-container">
                <table class="api-table">
                    <caption>Tabla 501-III-1-1 Valores Alternativos para R<sub>escalado</sub></caption>
                    <thead>
                        <tr>
                            <th>Consecuencia</th>
                            <th>R<sub>escalado</sub> (m/kg<sup>1/3</sup>)</th>
                            <th>R<sub>escalado</sub> (pies/lb<sup>1/3</sup>)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lesión menor posible</td>
                            <td>10</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Lesión seria probable</td>
                            <td>15</td>
                            <td>37.5</td>
                        </tr>
                        <tr>
                            <td>Lesión letal probable</td>
                            <td>20</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <p>Por ejemplo, para prevenir daño pulmonar, la distancia a la que una persona está del equipo debe resultar en un valor R<sub>escalado</sub> de más de 6 m/kg<sup>1/3</sup> (15 pies/lb<sup>1/3</sup>). Note el daño estructural que puede ocurrir, que debe considerarse.</p>
        </div>

        <div class="subsection">
            <h4>501-III-2 DISTANCIA DE LANZAMIENTO DE FRAGMENTOS</h4>
            <p>(a) Cuando los fragmentos de recipiente o tubería están en riesgo de ser creados e impactar personal, la distancia mínima entre todas las personas y el equipo siendo probado será como se muestra en la Tabla 501-III-2-1.</p>
            
            <div class="table-container">
                <table class="api-table">
                    <caption>Tabla 501-III-2-1 Distancias Mínimas para Consideraciones de Lanzamiento de Fragmentos</caption>
                    <thead>
                        <tr>
                            <th>Energía Almacenada</th>
                            <th>Distancia Mínima</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>≤ 8,130,000 J (6,000,000 ft-lb)</td>
                            <td>30 m (100 pies)</td>
                        </tr>
                        <tr>
                            <td>> 8,130,000 J a 27,100,000 J (6,000,000 a 20,000,000 ft-lb)</td>
                            <td>60 m (200 pies)</td>
                        </tr>
                        <tr>
                            <td>> 27,100,000 J a 81,300,000 J (20,000,000 a 60,000,000 ft-lb)</td>
                            <td>120 m (400 pies)</td>
                        </tr>
                        <tr>
                            <td>> 81,300,000 J (60,000,000 ft-lb)</td>
                            <td>240 m (800 pies)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <p>(b) Si las distancias en la Tabla 501-III-2-1 no son alcanzables, la distancia puede evaluarse usando métodos disponibles en el dominio público.</p>
        </div>
    </div>

    <div class="subsection">
        <h4>Apéndice Obligatorio 501-IV Consideraciones de Evaluación de Riesgo para Pruebas Neumáticas de Presión</h4>
        
        <div class="subsection">
            <h4>501-IV-1 INTRODUCCIÓN</h4>
            <p>Al considerar los factores de análisis de riesgo listados en el párrafo 501-6.2(f), debe recordarse que el riesgo es una combinación bidimensional de probabilidad (o verosimilitud) y consecuencia. El riesgo es la medida del potencial de daño o pérdida (es decir, peligro) que refleja la verosimilitud (o frecuencia) y severidad de un efecto adverso a la salud, propiedad o ambiente. Si la probabilidad y consecuencia se definen cuantitativamente (es decir, se asignan valores numéricos), el riesgo es el producto.</p>
            
            <p>riesgo = probabilidad × consecuencia (IV-1)</p>
            
            <p>En una evaluación cualitativa, típicamente se usa una matriz para combinar probabilidad y consecuencia. Debe considerarse el nivel de riesgo que es aceptable al realizar pruebas neumáticas. Referencia API RP 580 para el uso de evaluación de riesgo en determinar los niveles aceptables de riesgo asociados con pruebas neumáticas.</p>
            
            <p>Al revisar la ecuación (IV-1), es claro que aunque la consecuencia pueda ser significativa, si la probabilidad es muy baja el riesgo puede volverse aceptable. Por ejemplo, la consecuencia de que se estrelle un avión es significativa en que muy probablemente resultará en lesión seria o muerte a los pasajeros junto con daño mayor o pérdida total de la aeronave. Sin embargo, la probabilidad de que se estrelle un avión es muy baja; así, el público acepta el riesgo asociado con los viajes aéreos.</p>
        </div>

        <div class="subsection">
            <h4>501-IV-2 CONSIDERACIONES DE RIESGO DE PRUEBA NEUMÁTICA</h4>
            <p>Las consideraciones de riesgo pueden aplicarse también a las pruebas neumáticas. Los ejemplos pueden incluir</p>
            <p>(a) un sistema de tuberías de acero inoxidable austenítico nuevo que ha sido probado hidrostáticamente durante fabricación en taller, con la excepción de cuatro soldaduras a tope circunferenciales de ensamblaje de campo final. El sistema de tuberías tiene un volumen total que resulta en un nivel de energía mayor que 271,000,000 J (200,000,000 ft-lb); sin embargo, no es factible separar el sistema de tuberías en secciones más pequeñas para prueba, ni es factible instalar barreras de explosión. Al realizar examen volumétrico como UT o RT y determinar que las soldaduras de campo están libres de indicaciones rechazables, el riesgo asociado con una prueba de presión neumática completa de este sistema puede considerarse aceptable.</p>
            
            <p>(b) un recipiente de acero al carbono existente con una clasificación MDMT de -45°C (-50°F) en el cual se había instalado una nueva boquilla siguiendo todos los requisitos del código de construcción original. El recipiente tiene un volumen total que resulta en un nivel de energía mayor que 271,000,000 J (200,000,000 ft-lb); sin embargo, todavía es deseable realizar una prueba de presión para verificar la integridad de la soldadura y obtener los otros beneficios de las pruebas de presión. No es factible instalar barreras de explosión. Al realizar examen volumétrico como UT en la soldadura de unión de boquilla y determinar que la soldadura está libre de indicaciones rechazables, junto con verificación por inspección de que el recipiente está en condición como nuevo, el riesgo asociado con una prueba de presión neumática completa de este recipiente puede considerarse aceptable.</p>
            
            <p>(c) Al considerar el volumen de tubería para completar cálculos de energía almacenada, el uso de 8 diámetros de tubería puede no ser suficiente.</p>
            <p>(1) falla frágil o falla a lo largo de la longitud de una costura de soldadura longitudinal pobre, donde la apertura real puede ser instantánea y la liberación de energía más grande que la calculada por 8 diámetros de tubería</p>
            <p>(2) instalaciones donde la tubería o línea de tubería no está restringida y puede convertirse en un proyectil; ver Tabla 501-III-2-1</p>
        </div>

        <div class="subsection">
            <h4>501-IV-3 CONSIDERACIONES DE VOLUMEN DEL SISTEMA DE TUBERÍAS</h4>
            <p>Una ilustración esquemática de la ruptura de línea de tubería que lleva a explosión por estallido se muestra en la Figura 501-IV-3-1. El volumen de gas que debe incluirse dentro del cálculo de energía almacenada no es solo el volumen contenido dentro de la longitud de tubería que se ha roto, sino que debe incluir una sección de cada extremo de tubería que está comenzando a despresurizarse, dado como d en la Figura 501-IV-3-1. La distancia d puede calcularse considerando la velocidad a la que la información sobre la pérdida de contención puede viajar por la tubería. Cuando ocurre la ruptura, la onda de choque de la ruptura viaja por la tubería a la velocidad del sonido del gas comprimido. La onda de choque para este tipo de explosión tiene una forma de firma típica con un tiempo de subida empinado. El tiempo de subida exacto variaría para cada incidente, pero será menor que el tiempo de subida medido dentro de una explosión por deflagración (que tiene un perfil inicial más superficial) y es consecuentemente menor que 10 ms.</p>
            
            <div class="figure-container">
                <img src="images/asme_pcc2_figure_501-IV-3-1.png" class="figure-image">
                <p class="figure-caption">Figura 501-IV-3-1 Un Diagrama Esquemático de un Estallido de Línea de Tubería, Mostrando el Flujo de Gas Dentro de las Tuberías</p>
            </div>
            
            <p>Las bases para el volumen total de tubería varían y se resumen a continuación:</p>
            <p>(a) Modelo Baker - 8 diámetros de tubería</p>
            <p>(b) Modelo TNT - 11 m de tubería</p>
            <p>(c) Operador Principal de Refinación - 18 m de tubería</p>
        </div>
    </div>
    `
});