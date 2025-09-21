// Registrar el código API 577 si no existe
if (!getCode('API577')) {
    console.error('El código API577 no está registrado. Registrándolo ahora...');
    registerCode('API577', {
        title: "API 577 Welding Inspection and Metallurgy",
        titleEs: "API 577 Inspección de Soldadura y Metalurgia"
    });
}

// Registrar el capítulo 6 para API 577
registerChapter('API577', {
    id: 6,
    title: "Welding Procedure",
    titleEs: "Procedimiento de Soldadura",
    content: `<h2>Welding Procedure</h2>
    <h3>6.1 General</h3>
    <p>Qualified welding procedures are required for welding fabrication and repair of pressure vessels, piping, tanks, and other items. These procedures detail the steps necessary to make a specific weld and generally consist of a written description, details of the weld joint and welding process variables, and test data to demonstrate that the procedure produces weldments meeting design requirements.</p>
    <p>While various codes and standards exist for the development of welding procedures, this section reflects criteria described in ASME BPVC Section IX. Welding procedures qualified to ASME Section IX are required by API inspection codes for both fabrication and repair welding. However, construction codes and proprietary company specifications may have additional requirements or allow specific additions or exceptions, so they should be reviewed for each weld application.</p>
    <p>Welding procedures required by ASME Section IX include a written WPS and an attendant document called a procedure qualification record (PQR). The purpose of the WPS is to provide specific direction to the person applying the material during the welding process. As well as defining parameters for the welder or welding operator, the WPS also provides information to the welding inspector to measure a weld against the relevant WPS.</p>
    <p>The PQR is a record of the welding data and variables used to weld a test coupon and the test results used to qualify the WPS. The purpose of PQR is to demonstrate that the joining process proposed for construction is capable of producing joints having the required mechanical properties for the intended application.</p>
    <p>It is important to differentiate the PQR from the welder performance qualification (WPQ), detailed in Section 7. The purpose of the WPQ is to provide a record of the welding variables and results of tests conducted on a weldment to establish that the welder is capable of making an acceptable quality weld using an appropriate WPS.</p>
    
    <h3>6.2 Welding Procedure Specification (WPS)</h3>
    <h4>6.2.1 General</h4>
    <p>ASME Section IX requires each organization to develop welding procedures to be used in the fabrication or repair of components. While this requirement may appear repetitious, qualified WPSs are an important aspect of fabrication quality control. They help each organization recognize the significance of changes in welding variables that may be required on the job and the effects of the changes on weldment properties. The WPS is only one step for welding fabrication quality assurance. Some codes and standards allow welding procedure qualification by others, provided the qualification is acceptable to the inspector and meets other conditions imposed by the referencing code or standard.</p>
    <p>The complete WPS for a welding process addresses all essential, supplementary essential, and nonessential variables when impact testing is required, or when specified by the end user (see ASME Section IX QG-101). Essential variables affect the mechanical properties of the weld. If they are changed beyond what the reference code paragraph allows for the process, the WPS shall be requalified. Nonessential variables do not affect the mechanical properties of the weld. They may be changed on the WPS without requalifying the welding procedure. When supplementary essential variables apply, or when specified by the end user, they are treated as essential variables.</p>
    
    <h4>6.2.2 Types of Variables (Refer to C.4.1)</h4>
    <h4>6.2.2.1 Essential, Supplementary Essential, and Nonessential Variables for Shielded Metal Arc Welding (SMAW)</h4>
    <div class="table-container">
    <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Article IV Paragraph</th>
                <th rowspan="2">Process Variable</th>
                <th colspan="2">Essential</th>
                <th colspan="2">Supplementary Essential</th>
                <th colspan="2">Nonessential</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Joints</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Change in groove design</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.5 The deletion of backing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Change in root spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 The addition or deletion of retainers</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Base Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Change in the group number</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Base metal thickness (T) limits toughness</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Base metal thickness (T) qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.11 The change in P-number qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Filler Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.3 A change in the size of filler metal</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 A change in the F-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 A change in the A-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 A change in the filler metal classification</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.14 The addition or deletion of filler metal</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.22 The addition or deletion of a consumable insert</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 A change in the filler metal product form</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Change in the deposited weld thickness (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 A change in the classification</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Positions</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 The addition of a position</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.2 A change of position</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.3 A change from vertical up to vertical down progression</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Preheat</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Decrease > 100 °F preheat temperature</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Increase > 100 °F interpass temperature</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>PWHT</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 A change in PWHT</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 A change in PWHT (time and temperature range)</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.1 The addition or deletion of trail gas and/or change in composition</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 A change from a single gas, mixture, or percentage</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.3 A change in the shielding gas flow rate or mixture</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.5 The addition or deletion of backing gas or flow</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.9 The deletion of backing gas or a change in composition</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.10 The deletion of trail gas or a change in composition</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Electrical Characteristics</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Heat input increase</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.3 The addition or deletion of a pulsing current</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 A change in current type (AC, DC) and polarity</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 A change in the amperage range</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.12 A change in tungsten electrode type and size</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Technique</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 A change in string or weave bead</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.3 A change in orifice, cup, or nozzle size</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 A change in the method of cleaning</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 A change in the method of back gouging</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 A change in oscillation technique</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 A change from multiple to single pass welding per side</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 A change from single to multiple electrodes</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.11 A change from closed to out of chamber</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 A change in electrode spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.25 A change from manual to automatic</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 The addition or deletion of peening</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 The use of a thermal process</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>

    <p class="table-note">NOTE 1 WPS Contents: See QW-200.1(b).</p>
    <p class="table-note">NOTE 2 PQR Contents: See QW-200.2(b).</p>
    <p class="table-note">NOTE 3 ASME Section IX must be utilized in conjunction with this table; see Article IV, Weld Data.</p>
    <p class="table-note">NOTE 4 Nonessential variables may be included on the PQR but are not required.</p>
    <p class="table-reference">Reference: ASME Section IX, Table QW-256, Welding Variables—Gas Tungsten—Arc Welding (GTAW).</p>
    </div>
    <h4>6.2.2.2 Essential, Supplementary Essential, and Nonessential Variables for Gas Tungsten Arc Welding (GTAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Article IV Paragraph</th>
                <th rowspan="2">Process Variables</th>
                <th colspan="2">Essential</th>
                <th colspan="2">Supplementary Essential</th>
                <th colspan="2">Nonessential</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Joints</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Change in groove design</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.5 The deletion of backing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Change in root spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 The addition or deletion of retainers</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Base Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Change in the group number</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Base metal thickness (T) limits toughness</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Base metal thickness (T) qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.11 The change in P-number qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Filler Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.3 A change in the size of filler metal</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 A change in the F-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 A change in the A-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 A change in the filler metal classification</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.14 The addition or deletion of filler metal</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.22 The addition or deletion of a consumable insert</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 A change in the filler metal product form</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Change in the deposited weld thickness (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 A change in the classification</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Positions</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 The addition of a position</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.2 A change of position</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.3 A change from vertical up to vertical down progression</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Preheat</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Decrease > 100 °F preheat temperature</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Increase > 100 °F Interpass temperature</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>PWHT</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 A change in the PWHT</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 A change in PWHT (time and temperature range)</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.1 The addition or deletion of trail gas and/or change in composition</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 A change from a single gas, mixture, or percentage</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.3 A change in the shielding gas flow rate or mixture</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.5 The addition or deletion of backing gas or flow</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.9 The deletion of backing gas or a change in composition</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.10 The deletion of trail gas or a change in composition</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Electrical Characteristics</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Heat input increase</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.3 The addition or deletion of a pulsing current</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 A change in current type (AC, DC) and polarity</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 A change in the amperage range</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.12 A change in tungsten electrode type and size</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Technique</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 A change in string or weave bead</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.3 A change in orifice, cup, or nozzle size</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 A change in the method of cleaning</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 A change in the method of back gouging</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 A change in oscillation technique</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 A change from multiple to single pass welding per side</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 A change from single to multiple electrodes</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.11 A change from closed to out of chamber</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 A change in electrode spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.25 A change from manual to automatic</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 The addition or deletion of peening</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 The use of a thermal process</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    
    <p class="table-note">NOTE 1 WPS Contents: See QW-200.1(b).</p>
    <p class="table-note">NOTE 2 PQR Contents: See QW-200.2(b).</p>
    <p class="table-note">NOTE 3 ASME Section IX must be utilized in conjunction with this table; see Article IV, Weld Data.</p>
    <p class="table-note">NOTE 4 Nonessential variables may be included on the PQR but are not required.</p>
    <p class="table-reference">Reference: ASME Section IX, Table QW-256, Welding Variables—Gas Tungsten—Arc Welding (GTAW).</p>
    </div>
    <h4>6.2.2.3 Essential, Supplementary Essential, and Nonessential Variables for Gas Metal Arc Welding (GMAW) and Flux-Cored Arc Welding (FCAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Article IV Paragraph</th>
                <th rowspan="2">Process Variables</th>
                <th colspan="2">Essential</th>
                <th colspan="2">Supplementary Essential</th>
                <th colspan="2">Nonessential</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Joints</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Change in groove design</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.5 The deletion of backing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Change in root spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 The addition or deletion of retainers</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Base Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Change in the group number</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Base metal thickness (T) limits toughness</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Base metal thickness (T) qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.9 t pass > ½ in. (13 mm)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.10 T limits (S. cir. Arc)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.11 Change in P-number qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Filler Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 A change in the F-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 A change in the A-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.6 Change in filler metal diameter</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 A change in the filler metal Classification</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 Change in filler metal product form</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.24 Addition/deletion or change in supplemental filler metal</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.27 Change in alloy elements</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Change in the deposited weld thickness (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.32 T limits (S. cir. Arc)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 A change in the classification</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Positions</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 The addition of a position</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.2 A change of position</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.3 A change from vertical up to vertical down progression</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Preheat</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Decrease > 100 °F preheat temperature</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Increase > 100 °F interpass temperature</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>PWHT</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 A change in the PWHT</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 A change in PWHT (time and temperature range)</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.1 The addition or deletion of trail gas and/or change in composition</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 A change from a single gas, mixture, or percentage</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.3 A change in the shielding gas flow rate or mixture</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.5 The addition/deletion or change of backing gas or flow</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.9 The deletion of backing gas or a change in composition</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.10 Change of shielding or trailing gas</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Electrical Characteristics</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Heat input increase</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.2 Change in transfer mode</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 A change in current type (AC, DC) and polarity</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 A change in the amperage range</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Technique</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 A change in string or weave bead</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.3 A change in orifice, cup, or nozzle size</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 A change in the method of cleaning</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 A change in the method of back gouging</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 A change in oscillation technique</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 A change from multiple to single pass welding per side</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 A change from single to multiple electrodes</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.11 A change from closed to out of chamber</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 A change in electrode spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.25 A change from manual to automatic</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 The addition or deletion of peening</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 The use of a thermal process</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    </div>
    
    <p class="table-note">NOTE 1 WPS Contents: See QW-200.1(b).</p>
    <p class="table-note">NOTE 2 PQR Contents: See QW-200.2(b).</p>
    <p class="table-note">NOTE 3 ASME Section IX must be utilized in conjunction with this table; see Article IV, Weld Data.</p>
    <p class="table-note">NOTE 4 Nonessential variables may be included on the PQR but are not required.</p>
    <p class="table-reference">Reference: ASME Section IX, Table QW-255, Welding Variables—GMAW and FCAW.</p>
    <div>
    <h4>6.2.2.4 Essential, Supplementary Essential, and Nonessential Variables for Submerged Arc Welding (SAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Article IV Paragraph</th>
                <th rowspan="2">Process Variables</th>
                <th colspan="2">Essential</th>
                <th colspan="2">Supplementary Essential</th>
                <th colspan="2">Nonessential</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Joints</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Change in groove design</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.4 The deletion of backing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Change in root spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 The addition or deletion of retainers</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Base Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Change in the group number</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Base metal thickness (T) limits toughness</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Base metal thickness (T) qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.9 Deposited weld thickness (t) pass > ½ inch</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.11 The change in P-number qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Filler Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 A change in the F-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 A change in the A-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.6 A change in the diameter of the electrode</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.9 Change in flux-wire classification</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.10 A change in composition of the flux</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.24 The addition/deletion/change in supplemental</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.27 The change in composition of supplemental filler metal</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.29 A change in the flux trade name and designation</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Change in the deposited weld thickness (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 A change in filler metal classification</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.34 Change in the flux type</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.35 Change in flux-wire classification</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.36 Use of recrushed slag</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Positions</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 The addition of a position</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Preheat</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Decrease > 100 °F preheat temperature</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.2 A change in preheat maintenance</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Increase > 100 °F interpass temperature</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>PWHT</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 A change in the PWHT</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 A change in PWHT (time and temperature range)</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Electrical Characteristics</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Heat input increase</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 A change in current and polarity</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 A change in the amperage and voltage range</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Technique</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 A change in string or weave bead</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 A change in the method of cleaning</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 A change in method of back gouging</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 A change in oscillation technique</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.8 A change in the tube–work distance</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 A change from multiple to single pass welding per side</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 A change from single to multiple electrodes</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 A change in the electrode spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.25 A change from manual to automatic</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 The addition or deletion of peening</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 The use of a thermal process</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    
    <p class="table-note">NOTE 1 WPS Contents: See QW-200.1(b).</p>
    <p class="table-note">NOTE 2 PQR Contents: See QW-200.2(b).</p>
    <p class="table-note">NOTE 3 ASME Section IX must be utilized in conjunction with this table, see Article IV, Weld Data.</p>
    <p class="table-note">NOTE 4 Nonessential variables may be included on the PQR but are not required.</p>
    <p class="table-reference">Reference: ASME Section IX, Table QW-254, Welding Variables—Submerged—Arc Welding (SAW).</p>
    </div>
    <h4>6.2.2.5 Essential, Supplementary Essential, and Nonessential Variables for Stud Arc Welding (SW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Article IV Paragraph</th>
                <th rowspan="2">Process Variables</th>
                <th colspan="2">Essential</th>
                <th colspan="2">Supplementary Essential</th>
                <th colspan="2">Nonessential</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Joints</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.8 Change in stud shape size</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.9 Deletion of flux or ferrule</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Base Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.17 Change in the base metal or stud metal P-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Positions</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 The addition of a position</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Preheat</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Decrease > 100 °F preheat temperature</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>PWHT</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 A change in the PWHT</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 A change in single mixture, or percent</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Electrical Characteristics</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 A change in current and polarity</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.9 A change in arc timing</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.10 A change in the amperage</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.11 A change in the power source</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Technique</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.22 A change in gun model or lift</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 The use of a thermal process</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    
    <p class="table-note">NOTE 1 WPS Contents: See QW-200.1(b).</p>
    <p class="table-note">NOTE 2 PQR Contents: See QW-200.2(b).</p>
    <p class="table-note">NOTE 3 ASME Section IX must be utilized in conjunction with this table; see Article IV, Weld Data.</p>
    <p class="table-note">NOTE 4 Nonessential variables may be included on the PQR but are not required.</p>
    <p class="table-reference">Reference: ASME Section IX, Table QW-261, Welding Variables—Stud Welding (SW).</p>
    </div>
    <h4>6.2.2.6 Essential, Supplementary Essential, and Nonessential Variables for Plasma Arc Welding (PAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Article IV Paragraph</th>
                <th rowspan="2">Process Variables</th>
                <th colspan="2">Essential</th>
                <th colspan="2">Supplementary Essential</th>
                <th colspan="2">Nonessential</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Joints</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Change in groove design</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.5 The deletion of backing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Change in root spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 The addition or deletion of retainers</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Base Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Change in the group number</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Base metal thickness (T) limits toughness</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Base metal thickness (T) qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.12 The change in P-number or melt-in</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Filler Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.3 A change in size</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 A change in the F-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 A change in the A-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 A change in the classification related to toughness</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.14 The addition or deletion of filler metal</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.22 The addition or deletion of consum. insert</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 Change in filler metal product form</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.27 Change in alloy elements</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Change in the deposited weld thickness (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 A change in the classification</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Positions</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 The addition of a position</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.2 A change of position</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.3 A change from vertical up to vertical down progression</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Preheat</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Decrease > 100 °F preheat temperature</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Increase > 100 °F interpass temperature</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>PWHT</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 A change in the PWHT</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 A change in PWHT (time and temperature range)</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.1 The addition or deletion of trail gas and/or change in composition</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.4 A change in composition</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.5 The addition or deletion of backing gas or flow</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.9 The deletion of backing gas or a change in composition</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.10 The deletion of trail gas or a change in composition</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.21 A change in flow rate</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Electrical Characteristics</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Heat input increase</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 A change in current and polarity</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 A change in the amperage and voltage range</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.12 A change in tungsten electrode</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Technique</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 A change in string or weave bead</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.3 A change in orifice, cup or nozzle size</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 A change in the method of cleaning</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 A change in the method of back gouging</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 A change in oscillation technique</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 A change from multiple to single pass welding per side</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 A change from single to multiple electrodes</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.11 A change from closed to out of chamber</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.12 A change in melt into keyhole</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 A change in electrode spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 The addition or deletion of peening</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 The use of a thermal process</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    
    <p class="table-note">NOTE 1 WPS Contents: See QW-200.1(b).</p>
    <p class="table-note">NOTE 2 PQR Contents: See QW-200.2(b).</p>
    <p class="table-note">NOTE 3 ASME Section IX must be utilized in conjunction with this table, see Article IV, Weld Data.</p>
    <p class="table-note">NOTE 4 Nonessential variables may be included on the PQR but are not required.</p>
    <p class="table-reference">Reference: ASME Section IX, Table QW-257, Welding Variables—Plasma Arc Welding (PAW).</p>
    </div>
    <h4>6.2.2.7 Essential, Supplementary Essential, and Nonessential Variables for Electrogas Welding (EGW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Article IV Paragraph</th>
                <th rowspan="2">Process Variables</th>
                <th colspan="2">Essential</th>
                <th colspan="2">Supplementary Essential</th>
                <th colspan="2">Nonessential</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Joints</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Change in groove design</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Change in root spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 Addition/deletion of retainers</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Base Metal</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.1 Change in P-number qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Change in group number</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Change base metal minimum thickness T qualified</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Change in thickness T beyond range qualified</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.9 t pass > ½ in. (13 mm)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Filler Metals</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 Change in F-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 Change in A-number</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.6 Change in diameter of electrode</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 Change in classification as related to toughness</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 Change in filler metal product form</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 Change in the classification</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Preheat</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Decrease > 100 °F (38 °C) preheat temperature</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td colspan="2"><strong>PWHT</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 A change in the PWHT</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 Change in PWHT time and temperature range</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 Change in single, mixture, or percentage</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.3 Change in shielding flow rate</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Electrical Characteristics</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Increase in heat input</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 Change in current or polarity</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 Change in I & E range</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Technique</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 A change in the method of cleaning</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 A change in oscillation technique</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 Change in multiple to single pass/side</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 Change from single to multiple electrodes</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 Change in electrode spacing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 Addition or deletion of peening</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 The use of a thermal process</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    
    <p class="table-note">NOTE 1 WPS Contents: See QW-200.1(b).</p>
    <p class="table-note">NOTE 2 PQR Contents: See QW-200.2(b).</p>
    <p class="table-note">NOTE 3 ASME Section IX must be utilized in conjunction with this table; see Article IV, Weld Data.</p>
    <p class="table-note">NOTE 4 Nonessential variables may be included on the PQR but are not required.</p>
    <p class="table-reference">Reference: ASME Section IX, Table QW-259, Welding Variables—Electrogas Welding (EGW).</p>
    </div>
    <p>The format of the WPS is not fixed, provided it addresses all essential and nonessential variables (and supplementary essential variables when applicable). An example form is available in ASME Section IX, Annex B.</p>
    <p>The WPS is issued to the welder to read and follow. The WPS gives the welder specific guidelines to successfully complete production welds. The WPS shall be available to the inspector for review and approval; the PQR shall be available to the inspector upon request.</p>
    
    <h3>6.3 Procedure Qualification Record (PQR)</h3>
    <p>The PQR records the essential and, when impact qualification is required, supplementary essential variables used to weld a test coupon, the coupon test results, and the manufacturer's certification of accuracy in the qualification of a WPS. Record of the nonessential variables used during the welding of the test coupon is optional; however, it is an excellent quality practice to record all process-dependent parameters. Nonessential variables addressed in the PQR must also be addressed in, and be within the ranges allowed in, the corresponding WPS.</p>
    <p>ASME Section IX requires that the manufacturer supervise the production of the test weldments and certify that the PQR properly qualifies the welding procedure; however, other groups may perform specimen preparation and testing. Mechanical tests are required to qualify a welding procedure to document that the properties of the weldment meet the minimum established acceptance criteria. Test sample selection and testing requirements are defined in Section IX. Typically, they include a tension test to determine the yield and ultimate strength of a groove weld, guided bend tests to determine the degree of soundness and ductility of a groove weld, notch toughness testing when toughness requirements are imposed, and hardness measurements when hardness restrictions are defined. Yield strength may also be reported. If any test specimen fails, the test coupon fails, and a new weld must be made and tested.</p>
    <p>The format of the PQR is not fixed, provided it addresses all essential variables (and supplementary essential variables when necessary). An example form is available in ASME Section IX, Annex B.</p>
    <p>The PQR should accompany the WPS and be available for review by the inspector upon request. It does not need to be available to the welder. One PQR may support several WPSs. One WPS may be qualified by more than one PQR within the limitations of the fabrication code.</p>
    
    <h3>6.4 Reviewing the WPS and PQR</h3>
    <p>Inspectors should review the WPS and PQR to verify that they are acceptable from a code perspective and applicable to the welding to be performed. While there are many ways to review a welding procedure, the most effective utilizes a systematic approach that ensures a complete and thorough review of the WPS and PQR to verify that all ASME Section IX (and construction and repair code) requirements have been addressed.</p>
    <p>The initial step is to verify that the WPS has been properly documented and addresses the requirements of Section IX and the construction/repair code. The second step is to verify that the PQR has been properly performed and documented, and addresses all the requirements of Section IX and the construction and repair code. The third step is to confirm the PQR essential variable values properly support the range specified in the WPS.</p>
    <p>The review shall document that the PQR variables represent and support the range specified in the WPS for the production application. Annex C provides an example of using a checklist for the review of WPSs and PQRs.</p>
    
    <h3>6.5 Tube-to-Tubesheet Welding Procedures</h3>
    <h4>6.5.1 General</h4>
    <p>Tube-to-tubesheet welds have many factors affecting weld quality that are different than those for conventional groove and fillet welds. These factors result mainly from the unique geometry of the welds. Therefore, a demonstration mockup in accordance with ASME IX, QW-193, may be required by the construction code or proprietary company specifications.</p>
    
    <h4>6.5.2 Essential Variables</h4>
    <p>The types of essential variables listed in ASME IX QW-288 include:</p>
    <ul>
        <li>a) joint configuration;</li>
        <li>b) tube and tubesheet thickness;</li>
        <li>c) ligament thickness;</li>
        <li>d) multiple versus single pass;</li>
        <li>e) welding position;</li>
        <li>f) interpass temperature;</li>
        <li>g) tube expansion;</li>
        <li>h) cleaning method;</li>
        <li>i) electrode or filler metal diameter;</li>
        <li>j) inserts;</li>
        <li>k) specific requirements for explosive welding;</li>
        <li>l) weld process and type;</li>
        <li>m) vertical position progression;</li>
        <li>n) P-number and A-number;</li>
        <li>o) preheat;</li>
        <li>p) postweld heat treatment (PWHT);</li>
        <li>q) weld current level;</li>
        <li>r) polarity or current type;</li>
        <li>s) welding type;</li>
        <li>t) F-number;</li>
        <li>u) shielding gas;</li>
        <li>v) gas flow rate.</li>
    </ul>
    
    <h4>6.5.3 Procedure Qualification Test</h4>
    <p>The procedure qualification test requirements for tube-to-tubesheet welds are specified in ASME IX QW-193. The tests include:</p>
    <ul>
        <li>a) visual;</li>
        <li>b) dye penetrant;</li>
        <li>c) macro examination of weld cross-sections.</li>
    </ul>
    <p>Other testing that may be specified by the construction code or proprietary company specifications include:</p>
    <ul>
        <li>1) hardness testing;</li>
        <li>2) shear load test in accordance with ASME VIII, Div. 1, Annex A.</li>
    </ul>`,
    contentEs: `<h2>Procedimiento de Soldadura</h2>
    <h3>6.1 General</h3>
    <p>Se requieren procedimientos de soldadura calificados para la fabricación y reparación por soldadura de recipientes a presión, tuberías, tanques y otros elementos. Estos procedimientos detallan los pasos necesarios para realizar una soldadura específica y generalmente consisten en una descripción escrita, detalles de la unión soldada y las variables del proceso de soldadura, y datos de prueba para demostrar que el procedimiento produce soldaduras que cumplen con los requisitos de diseño.</p>
    <p>Si bien existen varios códigos y estándares para el desarrollo de procedimientos de soldadura, esta sección refleja los criterios descritos en ASME BPVC Sección IX. Los procedimientos de soldadura calificados según ASME Sección IX son requeridos por los códigos de inspección API tanto para la fabricación como para la reparación por soldadura. Sin embargo, los códigos de construcción y las especificaciones propias de la empresa pueden tener requisitos adicionales o permitir adiciones o excepciones específicas, por lo que deben ser revisados para cada aplicación de soldadura.</p>
    <p>Los procedimientos de soldadura requeridos por ASME Sección IX incluyen una WPS escrita y un documento adjunto llamado registro de calificación del procedimiento (PQR). El propósito de la WPS es proporcionar instrucciones específicas a la persona que aplica el material durante el proceso de soldadura. Además de definir parámetros para el soldador u operador de soldadura, la WPS también proporciona información al inspector de soldadura para medir una soldadura contra la WPS relevante.</p>
    <p>El PQR es un registro de los datos y variables de soldadura utilizados para soldar una probeta de prueba y los resultados de prueba utilizados para calificar la WPS. El propósito del PQR es demostrar que el proceso de unión propuesto para la construcción es capaz de producir uniones que tengan las propiedades mecánicas requeridas para la aplicación prevista.</p>
    <p>Es importante diferenciar el PQR de la calificación de desempeño del soldador (WPQ), detallada en la Sección 7. El propósito de la WPQ es proporcionar un registro de las variables de soldadura y los resultados de las pruebas realizadas en una soldadura para establecer que el soldador es capaz de realizar una soldadura de calidad aceptable utilizando una WPS apropiada.</p>
    
    <h3>6.2 Especificación del Procedimiento de Soldadura (WPS)</h3>
    <h4>6.2.1 General</h4>
    <p>ASME Sección IX requiere que cada organización desarrolle procedimientos de soldadura para ser utilizados en la fabricación o reparación de componentes. Si bien este requisito puede parecer repetitivo, las WPS calificadas son un aspecto importante del control de calidad de fabricación. Ayudan a cada organización a reconocer la importancia de los cambios en las variables de soldadura que pueden ser necesarios en el trabajo y los efectos de los cambios en las propiedades de la soldadura. La WPS es solo un paso para la garantía de calidad de fabricación de soldaduras. Algunos códigos y estándares permiten la calificación del procedimiento de soldadura por otros, siempre que la calificación sea aceptable para el inspector y cumpla con otras condiciones impuestas por el código o estándar de referencia.</p>
    <p>La WPS completa para un proceso de soldadura aborda todas las variables esenciales, suplementarias esenciales y no esenciales cuando se requieren pruebas de impacto, o cuando lo especifica el usuario final (véase ASME Sección IX QG-101). Las variables esenciales afectan las propiedades mecánicas de la soldadura. Si se cambian más allá de lo que permite el párrafo del código de referencia para el proceso, la WPS deberá ser recalificada. Las variables no esenciales no afectan las propiedades mecánicas de la soldadura. Pueden cambiarse en la WPS sin recalificar el procedimiento de soldadura. Cuando aplican las variables suplementarias esenciales, o cuando las especifica el usuario final, se tratan como variables esenciales.</p>
    
    <h4>6.2.2 Tipos de Variables (Consultar C.4.1)</h4>
    <h4>6.2.2.1 Variables Esenciales, Suplementarias Esenciales y No Esenciales para Soldadura por Arco Metálico Protegido (SMAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Párrafo Artículo IV</th>
                <th rowspan="2">Variable de Proceso</th>
                <th colspan="2">Esencial</th>
                <th colspan="2">Suplementaria Esencial</th>
                <th colspan="2">No Esencial</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Uniones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Cambio en diseño de ranura</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.5 Eliminación de respaldo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Cambio en espaciado de raíz</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 Adición o eliminación de retenedores</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales Base</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Cambio en número de grupo</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Límites de espesor de metal base (T) tenacidad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Espesor de metal base (T) calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.11 Cambio en número P calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales de Aporte</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.3 Cambio en tamaño de metal de aporte</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 Cambio en número F</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 Cambio en número A</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 Cambio en clasificación de metal de aporte</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.14 Adición o eliminación de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.22 Adición o eliminación de inserto consumible</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 Cambio en forma de producto de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Cambio en espesor de soldadura depositada (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 Cambio en clasificación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Posiciones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 Adición de una posición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.2 Cambio de posición</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.3 Cambio de progresión vertical ascendente a vertical descendente</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Precalentamiento</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Disminución > 100 °F temperatura de precalentamiento</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Aumento > 100 °F temperatura entre pasadas</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>TPST</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 Cambio en TPST</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 Cambio en TPST (rango de tiempo y temperatura)</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.1 Adición o eliminación de gas de arrastre y/o cambio en composición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 Cambio de gas único, mezcla o porcentaje</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.3 Cambio en caudal de gas de protección o mezcla</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.5 Adición o eliminación de gas de respaldo o caudal</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.9 Eliminación de gas de respaldo o cambio en composición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.10 Eliminación de gas de arrastre o cambio en composición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Características Eléctricas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Aumento de aporte de calor</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.3 Adición o eliminación de corriente pulsada</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 Cambio en tipo de corriente (CA, CC) y polaridad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 Cambio en rango de amperaje</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.12 Cambio en tipo y tamaño de electrodo de tungsteno</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Técnica</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 Cambio en cordón rectilíneo u oscilante</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.3 Cambio en tamaño de orificio, copa o boquilla</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 Cambio en método de limpieza</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 Cambio en método de escopleado posterior</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 Cambio en técnica de oscilación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 Cambio de múltiples a una sola pasada por lado</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 Cambio de un electrodo a múltiples electrodos</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.11 Cambio de cámara cerrada a fuera de cámara</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 Cambio en espaciado de electrodos</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.25 Cambio de manual a automático</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 Adición o eliminación de martilleo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 Uso de un proceso térmico</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p class="table-note">NOTA 1 Contenidos de WPS: Ver QW-200.1(b).</p>
    <p class="table-note">NOTA 2 Contenidos de PQR: Ver QW-200.2(b).</p>
    <p class="table-note">NOTA 3 ASME Sección IX debe utilizarse en conjunción con esta tabla; ver Artículo IV, Datos de Soldadura.</p>
    <p class="table-note">NOTA 4 Las variables no esenciales pueden incluirse en el PQR pero no son requeridas.</p>
    <p class="table-reference">Referencia: ASME Sección IX, Tabla QW-256, Variables de Soldadura—Soldadura por Arco con Tungsteno y Gas (GTAW).</p>
    </div>
    <h4>6.2.2.2 Variables Esenciales, Suplementarias Esenciales y No Esenciales para Soldadura por Arco de Tungsteno con Gas (GTAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Párrafo Artículo IV</th>
                <th rowspan="2">Variables de Proceso</th>
                <th colspan="2">Esencial</th>
                <th colspan="2">Suplementaria Esencial</th>
                <th colspan="2">No Esencial</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Uniones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Cambio en diseño de ranura</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.5 Eliminación de respaldo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Cambio en espaciado de raíz</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 Adición o eliminación de retenedores</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales Base</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Cambio en número de grupo</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Límites de espesor de metal base (T) tenacidad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Espesor de metal base (T) calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.11 Cambio en número P calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales de Aporte</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.3 Cambio en tamaño de metal de aporte</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 Cambio en número F</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 Cambio en número A</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 Cambio en clasificación de metal de aporte</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.14 Adición o eliminación de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.22 Adición o eliminación de inserto consumible</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 Cambio en forma de producto de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Cambio en espesor de soldadura depositada (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 Cambio en clasificación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Posiciones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 Adición de una posición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.2 Cambio de posición</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.3 Cambio de progresión vertical ascendente a vertical descendente</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Precalentamiento</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Disminución > 100 °F temperatura de precalentamiento</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Aumento > 100 °F temperatura entre pasadas</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>TPST</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 Cambio en TPST</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 Cambio en TPST (rango de tiempo y temperatura)</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.1 Adición o eliminación de gas de arrastre y/o cambio en composición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 Cambio de gas único, mezcla o porcentaje</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.3 Cambio en caudal de gas de protección o mezcla</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.5 Adición o eliminación de gas de respaldo o caudal</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.9 Eliminación de gas de respaldo o cambio en composición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.10 Eliminación de gas de arrastre o cambio en composición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Características Eléctricas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Aumento de aporte de calor</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.3 Adición o eliminación de corriente pulsada</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 Cambio en tipo de corriente (CA, CC) y polaridad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 Cambio en rango de amperaje</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.12 Cambio en tipo y tamaño de electrodo de tungsteno</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Técnica</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 Cambio en cordón rectilíneo u oscilante</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.3 Cambio en tamaño de orificio, copa o boquilla</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 Cambio en método de limpieza</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 Cambio en método de escopleado posterior</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 Cambio en técnica de oscilación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 Cambio de múltiples a una sola pasada por lado</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 Cambio de un electrodo a múltiples electrodos</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.11 Cambio de cámara cerrada a fuera de cámara</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 Cambio en espaciado de electrodos</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.25 Cambio de manual a automático</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 Adición o eliminación de martilleo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 Uso de un proceso térmico</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p class="table-note">NOTA 1 Contenidos de WPS: Ver QW-200.1(b).</p>
    <p class="table-note">NOTA 2 Contenidos de PQR: Ver QW-200.2(b).</p>
    <p class="table-note">NOTA 3 ASME Sección IX debe utilizarse en conjunción con esta tabla; ver Artículo IV, Datos de Soldadura.</p>
    <p class="table-note">NOTA 4 Las variables no esenciales pueden incluirse en el PQR pero no son requeridas.</p>
    <p class="table-reference">Referencia: ASME Sección IX, Tabla QW-256, Variables de Soldadura—Soldadura por Arco con Tungsteno y Gas (GTAW).</p>
    </div>
    <h4>6.2.2.3 Variables Esenciales, Suplementarias Esenciales y No Esenciales para Soldadura por Arco Metálico con Gas (GMAW) y Soldadura por Arco con Núcleo Fundente (FCAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Párrafo Artículo IV</th>
                <th rowspan="2">Variables de Proceso</th>
                <th colspan="2">Esencial</th>
                <th colspan="2">Suplementaria Esencial</th>
                <th colspan="2">No Esencial</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Uniones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Cambio en diseño de ranura</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.5 Eliminación de respaldo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Cambio en espaciado de raíz</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 Adición o eliminación de retenedores</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales Base</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Cambio en número de grupo</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Límites de espesor de metal base (T) tenacidad</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Espesor de metal base (T) calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.9 t pasada > ½ pulg. (13 mm)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.10 Límites T (Arco cortocircuito)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.11 Cambio en número P calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales de Aporte</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 Cambio en número F</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 Cambio en número A</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.6 Cambio en diámetro de metal de aporte</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 Cambio en clasificación de metal de aporte</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 Cambio en forma de producto de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.24 Adición/eliminación o cambio en metal de aporte suplementario</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.27 Cambio en elementos de aleación</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Cambio en espesor de soldadura depositada (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.32 Límites T (Arco cortocircuito)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 Cambio en clasificación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Posiciones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 Adición de una posición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.2 Cambio de posición</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.3 Cambio de progresión vertical ascendente a vertical descendente</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Precalentamiento</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Disminución > 100 °F temperatura de precalentamiento</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Aumento > 100 °F temperatura entre pasadas</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>TPST</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 Cambio en TPST</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 Cambio en TPST (rango de tiempo y temperatura)</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.1 Adición o eliminación de gas de arrastre y/o cambio en composición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 Cambio de gas único, mezcla o porcentaje</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.3 Cambio en caudal de gas de protección o mezcla</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.5 Adición/eliminación o cambio de gas de respaldo o caudal</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.9 Eliminación de gas de respaldo o cambio en composición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.10 Cambio de gas de protección o de arrastre</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Características Eléctricas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Aumento de aporte de calor</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.2 Cambio en modo de transferencia</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 Cambio en tipo de corriente (CA, CC) y polaridad</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 Cambio en rango de amperaje</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Técnica</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 Cambio en cordón rectilíneo u oscilante</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.3 Cambio en tamaño de orificio, copa o boquilla</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 Cambio en método de limpieza</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 Cambio en método de escopleado posterior</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 Cambio en técnica de oscilación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 Cambio de múltiples a una sola pasada por lado</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 Cambio de un electrodo a múltiples electrodos</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.11 Cambio de cámara cerrada a fuera de cámara</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 Cambio en espaciado de electrodos</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.25 Cambio de manual a automático</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 Adición o eliminación de martilleo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 Uso de un proceso térmico</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p class="table-note">NOTA 1 Contenidos de WPS: Ver QW-200.1(b).</p>
    <p class="table-note">NOTA 2 Contenidos de PQR: Ver QW-200.2(b).</p>
    <p class="table-note">NOTA 3 ASME Sección IX debe utilizarse en conjunción con esta tabla; ver Artículo IV, Datos de Soldadura.</p>
    <p class="table-note">NOTA 4 Las variables no esenciales pueden incluirse en el PQR pero no son requeridas.</p>
    <p class="table-reference">Referencia: ASME Sección IX, Tabla QW-255, Variables de Soldadura—GMAW y FCAW.</p>
    </div>
    <h4>6.2.2.4 Variables Esenciales, Suplementarias Esenciales y No Esenciales para Soldadura por Arco Sumergido (SAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Párrafo Artículo IV</th>
                <th rowspan="2">Variables de Proceso</th>
                <th colspan="2">Esencial</th>
                <th colspan="2">Suplementaria Esencial</th>
                <th colspan="2">No Esencial</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Uniones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Cambio en diseño de ranura</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.4 Eliminación de respaldo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Cambio en espaciado de raíz</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 Adición o eliminación de retenedores</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales Base</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Cambio en número de grupo</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Límites de espesor de metal base (T) tenacidad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Espesor de metal base (T) calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.9 Espesor de soldadura depositada (t) pasada > ½ pulgada</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.11 Cambio en número P calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales de Aporte</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 Cambio en número F</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 Cambio en número A</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.6 Cambio en diámetro del electrodo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.9 Cambio en clasificación fundente-alambre</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.10 Cambio en composición del fundente</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.24 Adición/eliminación/cambio en suplementario</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.27 Cambio en composición de metal de aporte suplementario</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.29 Cambio en nombre comercial y designación del fundente</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Cambio en espesor de soldadura depositada (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 Cambio en clasificación de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.34 Cambio en tipo de fundente</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.35 Cambio en clasificación fundente-alambre</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.36 Uso de escoria rec triturada</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Posiciones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 Adición de una posición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Precalentamiento</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Disminución > 100 °F temperatura de precalentamiento</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.2 Cambio en mantenimiento de precalentamiento</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Aumento > 100 °F temperatura entre pasadas</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>TPST</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 Cambio en TPST</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 Cambio en TPST (rango de tiempo y temperatura)</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Características Eléctricas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Aumento de aporte de calor</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 Cambio en corriente y polaridad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 Cambio en rango de amperaje y voltaje</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Técnica</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 Cambio en cordón rectilíneo u oscilante</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 Cambio en método de limpieza</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 Cambio en método de escopleado posterior</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 Cambio en técnica de oscilación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.8 Cambio en distancia tubo-pieza</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 Cambio de múltiples a una sola pasada por lado</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 Cambio de un electrodo a múltiples electrodos</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 Cambio en espaciado de electrodos</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.25 Cambio de manual a automático</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 Adición o eliminación de martilleo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 Uso de un proceso térmico</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p class="table-note">NOTA 1 Contenidos de WPS: Ver QW-200.1(b).</p>
    <p class="table-note">NOTA 2 Contenidos de PQR: Ver QW-200.2(b).</p>
    <p class="table-note">NOTA 3 ASME Sección IX debe utilizarse en conjunción con esta tabla, ver Artículo IV, Datos de Soldadura.</p>
    <p class="table-note">NOTA 4 Las variables no esenciales pueden incluirse en el PQR pero no son requeridas.</p>
    <p class="table-reference">Referencia: ASME Sección IX, Tabla QW-254, Variables de Soldadura—Soldadura por Arco Sumergido (SAW).</p>
    </div>
    <h4>6.2.2.5 Variables Esenciales, Suplementarias Esenciales y No Esenciales para Soldadura de Espárragos por Arco (SW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Párrafo Artículo IV</th>
                <th rowspan="2">Variables de Proceso</th>
                <th colspan="2">Esencial</th>
                <th colspan="2">Suplementaria Esencial</th>
                <th colspan="2">No Esencial</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Uniones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.8 Cambio en tamaño y forma de espárrago</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.9 Eliminación de fundente o casquillo</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales Base</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.17 Cambio en número P de metal base o espárrago</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Posiciones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 Adición de una posición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Precalentamiento</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Disminución > 100 °F temperatura de precalentamiento</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>TPST</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 Cambio en TPST</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 Cambio en mezcla única, o porcentaje</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Características Eléctricas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 Cambio en corriente y polaridad</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.9 Cambio en temporización de arco</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.10 Cambio en amperaje</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.11 Cambio en fuente de poder</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Técnica</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.22 Cambio en modelo de pistola o levantamiento</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 Uso de un proceso térmico</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p class="table-note">NOTA 1 Contenidos de WPS: Ver QW-200.1(b).</p>
    <p class="table-note">NOTA 2 Contenidos de PQR: Ver QW-200.2(b).</p>
    <p class="table-note">NOTA 3 ASME Sección IX debe utilizarse en conjunción con esta tabla; ver Artículo IV, Datos de Soldadura.</p>
    <p class="table-note">NOTA 4 Las variables no esenciales pueden incluirse en el PQR pero no son requeridas.</p>
    <p class="table-reference">Referencia: ASME Sección IX, Tabla QW-261, Variables de Soldadura—Soldadura de Espárragos (SW).</p>
    </div>
    <h4>6.2.2.6 Variables Esenciales, Suplementarias Esenciales y No Esenciales para Soldadura por Arco de Plasma (PAW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Párrafo Artículo IV</th>
                <th rowspan="2">Variables de Proceso</th>
                <th colspan="2">Esencial</th>
                <th colspan="2">Suplementaria Esencial</th>
                <th colspan="2">No Esencial</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Uniones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Cambio en diseño de ranura</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.5 Eliminación de respaldo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Cambio en espaciado de raíz</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 Adición o eliminación de retenedores</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales Base</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Cambio en número de grupo</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Límites de espesor de metal base (T) tenacidad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Espesor de metal base (T) calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.12 Cambio en número P o fusión</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales de Aporte</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.3 Cambio en tamaño</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 Cambio en número F</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 Cambio en número A</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 Cambio en clasificación relacionada con tenacidad</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.14 Adición o eliminación de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.22 Adición o eliminación de inserto consumible</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 Cambio en forma de producto de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.27 Cambio en elementos de aleación</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.30 Cambio en espesor de soldadura depositada (t)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 Cambio en clasificación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Posiciones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.1 Adición de una posición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.2 Cambio de posición</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-405</td>
                <td>.3 Cambio de progresión vertical ascendente a vertical descendente</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Precalentamiento</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Disminución > 100 °F temperatura de precalentamiento</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.3 Aumento > 100 °F temperatura entre pasadas</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>TPST</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 Cambio en TPST</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 Cambio en TPST (rango de tiempo y temperatura)</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.1 Adición o eliminación de gas de arrastre y/o cambio en composición</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.4 Cambio en composición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.5 Adición o eliminación de gas de respaldo o caudal</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.9 Eliminación de gas de respaldo o cambio en composición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.10 Eliminación de gas de arrastre o cambio en composición</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.21 Cambio en caudal</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Características Eléctricas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Aumento de aporte de calor</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 Cambio en corriente y polaridad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 Cambio en rango de amperaje y voltaje</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.12 Cambio en electrodo de tungsteno</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Técnica</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.1 Cambio en cordón rectilíneo u oscilante</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.3 Cambio en tamaño de orificio, copa o boquilla</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 Cambio en método de limpieza</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.6 Cambio en método de escopleado posterior</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 Cambio en técnica de oscilación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 Cambio de múltiples a una sola pasada por lado</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 Cambio de un electrodo a múltiples electrodos</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.11 Cambio de cámara cerrada a fuera de cámara</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.12 Cambio en fusión a ojo de cerradura</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 Cambio en espaciado de electrodos</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 Adición o eliminación de martilleo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 Uso de un proceso térmico</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p class="table-note">NOTA 1 Contenidos de WPS: Ver QW-200.1(b).</p>
    <p class="table-note">NOTA 2 Contenidos de PQR: Ver QW-200.2(b).</p>
    <p class="table-note">NOTA 3 ASME Sección IX debe utilizarse en conjunción con esta tabla, ver Artículo IV, Datos de Soldadura.</p>
    <p class="table-note">NOTA 4 Las variables no esenciales pueden incluirse en el PQR pero no son requeridas.</p>
    <p class="table-reference">Referencia: ASME Sección IX, Tabla QW-257, Variables de Soldadura—Soldadura por Arco de Plasma (PAW).</p>
    </div>
    <h4>6.2.2.7 Variables Esenciales, Suplementarias Esenciales y No Esenciales para Soldadura por Electrogas (EGW)</h4>
    <div class="table-container">
        <table class="api-table">
        <thead>
            <tr>
                <th rowspan="2">Párrafo Artículo IV</th>
                <th rowspan="2">Variables de Proceso</th>
                <th colspan="2">Esencial</th>
                <th colspan="2">Suplementaria Esencial</th>
                <th colspan="2">No Esencial</th>
            </tr>
            <tr>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
                <th>WPS</th>
                <th>PQR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2"><strong>Uniones</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.1 Cambio en diseño de ranura</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.10 Cambio en espaciado de raíz</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-402</td>
                <td>.11 Adición/eliminación de retenedores</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metal Base</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.1 Cambio en número P calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.5 Cambio en número de grupo</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.6 Cambio espesor mínimo de metal base T calificado</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.8 Cambio en espesor T más allá del rango calificado</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-403</td>
                <td>.9 t pasada > ½ pulg. (13 mm)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Metales de Aporte</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.4 Cambio en número F</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.5 Cambio en número A</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.6 Cambio en diámetro de electrodo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.12 Cambio en clasificación relacionada con tenacidad</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.23 Cambio en forma de producto de metal de aporte</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-404</td>
                <td>.33 Cambio en clasificación</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Precalentamiento</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-406</td>
                <td>.1 Disminución > 100 °F (38 °C) temperatura de precalentamiento</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
            <tr>
                <td colspan="2"><strong>TPST</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.1 Cambio en TPST</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-407</td>
                <td>.2 Cambio en tiempo y temperatura de TPST</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Gas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.2 Cambio en gas único, mezcla o porcentaje</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-408</td>
                <td>.3 Cambio en caudal de gas de protección</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Características Eléctricas</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.1 Aumento en aporte de calor</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.4 Cambio en corriente o polaridad</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-409</td>
                <td>.8 Cambio en rango de I y E</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><strong>Técnica</strong></td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.5 Cambio en método de limpieza</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.7 Cambio en técnica de oscilación</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.9 Cambio de múltiples a una sola pasada/lado</td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.10 Cambio de un electrodo a múltiples electrodos</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.15 Cambio en espaciado de electrodos</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.26 Adición o eliminación de martilleo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td>QW-410</td>
                <td>.64 Uso de un proceso térmico</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p class="table-note">NOTA 1 Contenidos de WPS: Ver QW-200.1(b).</p>
    <p class="table-note">NOTA 2 Contenidos de PQR: Ver QW-200.2(b).</p>
    <p class="table-note">NOTA 3 ASME Sección IX debe utilizarse en conjunción con esta tabla; ver Artículo IV, Datos de Soldadura.</p>
    <p class="table-note">NOTA 4 Las variables no esenciales pueden incluirse en el PQR pero no son requeridas.</p>
    <p class="table-reference">Referencia: ASME Sección IX, Tabla QW-259, Variables de Soldadura—Soldadura por Electrogas (EGW).</p>
    </div>
    <p>El formato de la WPS no es fijo, siempre que aborde todas las variables esenciales y no esenciales (y variables suplementarias esenciales cuando sea aplicable). Un formulario de ejemplo está disponible en ASME Sección IX, Anexo B.</p>
    <p>La WPS se entrega al soldador para que la lea y siga. La WPS proporciona al soldador pautas específicas para completar con éxito las soldaduras de producción. La WPS debe estar disponible para que el inspector la revise y apruebe; el PQR debe estar disponible para el inspector cuando se solicite.</p>
    
    <h3>6.3 Registro de Calificación del Procedimiento (PQR)</h3>
    <p>El PQR registra las variables esenciales y, cuando se requiere calificación de impacto, las variables suplementarias esenciales utilizadas para soldar una probeta de prueba, los resultados de la prueba de la probeta y la certificación del fabricante de la precisión en la calificación de una WPS. El registro de las variables no esenciales utilizadas durante la soldadura de la probeta de prueba es opcional; sin embargo, es una excelente práctica de calidad registrar todos los parámetros dependientes del proceso. Las variables no esenciales abordadas en el PQR también deben abordarse en, y estar dentro de los rangos permitidos en, la WPS correspondiente.</p>
    <p>ASME Sección IX requiere que el fabricante supervise la producción de las soldaduras de prueba y certifique que el PQR califica adecuadamente el procedimiento de soldadura; sin embargo, otros grupos pueden realizar la preparación y prueba de especímenes. Se requieren pruebas mecánicas para calificar un procedimiento de soldadura para documentar que las propiedades de la soldadura cumplen con los criterios mínimos de aceptación establecidos. La selección de muestras de prueba y los requisitos de prueba se definen en la Sección IX. Típicamente, incluyen una prueba de tensión para determinar el límite elástico y la resistencia última a la tracción de una soldadura de ranura, pruebas de doblado guiado para determinar el grado de sanidad y ductilidad de una soldadura de ranura, pruebas de tenacidad de entalla cuando se imponen requisitos de tenacidad, y mediciones de dureza cuando se definen restricciones de dureza. El límite elástico también puede reportarse. Si cualquier espécimen de prueba falla, la probeta de prueba falla, y se debe hacer y probar una nueva soldadura.</p>
    <p>El formato del PQR no es fijo, siempre que aborde todas las variables esenciales (y variables suplementarias esenciales cuando sea necesario). Un formulario de ejemplo está disponible en ASME Sección IX, Anexo B.</p>
    <p>El PQR debe acompañar a la WPS y estar disponible para su revisión por parte del inspector cuando se solicite. No necesita estar disponible para el soldador. Un PQR puede respaldar varias WPS. Una WPS puede ser calificada por más de un PQR dentro de las limitaciones del código de fabricación.</p>
    
    <h3>6.4 Revisión de la WPS y el PQR</h3>
    <p>Los inspectores deben revisar la WPS y el PQR para verificar que sean aceptables desde la perspectiva del código y aplicables a la soldadura que se va a realizar. Si bien hay muchas formas de revisar un procedimiento de soldadura, la más efectiva utiliza un enfoque sistemático que garantice una revisión completa y exhaustiva de la WPS y el PQR para verificar que se hayan abordado todos los requisitos de ASME Sección IX (y del código de construcción y reparación).</p>
    <p>El paso inicial es verificar que la WPS se haya documentado correctamente y aborde los requisitos de la Sección IX y el código de construcción/reparación. El segundo paso es verificar que el PQR se haya realizado y documentado correctamente, y aborde todos los requisitos de la Sección IX y el código de construcción y reparación. El tercer paso es confirmar que los valores de las variables esenciales del PQR respalden adecuadamente el rango especificado en la WPS.</p>
    <p>La revisión debe documentar que las variables del PQR representan y respaldan el rango especificado en la WPS para la aplicación de producción. El Anexo C proporciona un ejemplo del uso de una lista de verificación para la revisión de WPS y PQR.</p>
    
    <h3>6.5 Procedimientos de Soldadura de Tubo a Placa Tubular</h3>
    <h4>6.5.1 General</h4>
    <p>Las soldaduras de tubo a placa tubular tienen muchos factores que afectan la calidad de la soldadura que son diferentes a los de las soldaduras convencionales de ranura y filete. Estos factores resultan principalmente de la geometría única de las soldaduras. Por lo tanto, puede requerirse un modelo de demostración de acuerdo con ASME IX, QW-193, por el código de construcción o especificaciones propias de la empresa.</p>
    
    <h4>6.5.2 Variables Esenciales</h4>
    <p>Los tipos de variables esenciales listadas en ASME IX QW-288 incluyen:</p>
    <ul>
        <li>a) configuración de unión;</li>
        <li>b) espesor del tubo y la placa tubular;</li>
        <li>c) espesor del ligamento;</li>
        <li>d) múltiples versus una sola pasada;</li>
        <li>e) posición de soldadura;</li>
        <li>f) temperatura entre pasadas;</li>
        <li>g) expansión del tubo;</li>
        <li>h) método de limpieza;</li>
        <li>i) diámetro del electrodo o metal de aporte;</li>
        <li>j) insertos;</li>
        <li>k) requisitos específicos para soldadura explosiva;</li>
        <li>l) proceso y tipo de soldadura;</li>
        <li>m) progresión de posición vertical;</li>
        <li>n) número P y número A;</li>
        <li>o) precalentamiento;</li>
        <li>p) tratamiento térmico posterior a la soldadura (TPST);</li>
        <li>q) nivel de corriente de soldadura;</li>
        <li>r) polaridad o tipo de corriente;</li>
        <li>s) tipo de soldadura;</li>
        <li>t) número F;</li>
        <li>u) gas de protección;</li>
        <li>v) caudal de gas.</li>
    </ul>
    
    <h4>6.5.3 Prueba de Calificación del Procedimiento</h4>
    <p>Los requisitos de prueba de calificación del procedimiento para soldaduras de tubo a placa tubular se especifican en ASME IX QW-193. Las pruebas incluyen:</p>
    <ul>
        <li>a) visual;</li>
        <li>b) líquidos penetrantes;</li>
        <li>c) examen macro de secciones transversales de la soldadura.</li>
    </ul>
    <p>Otras pruebas que pueden ser especificadas por el código de construcción o especificaciones propias de la empresa incluyen:</p>
    <ul>
        <li>1) pruebas de dureza;</li>
        <li>2) prueba de carga de corte de acuerdo con ASME VIII, Div. 1, Anexo A.</li>
    </ul>`
});