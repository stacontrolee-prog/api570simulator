// js/exams/api574_open.js
export default {
    title: "API 574 - Libro Abierto",
    questions: [
        {
            id: 96,
            text: "In the Barlow formula for determining pipe thickness, the term S stands for:",
            options: [
                "internal design gage pressure of the pipe in psi.",
                "pressure design strength for internal pressure, in inches.",
                "allowable unit stress at the design temperature, in psi.",
                "maximum strain at the average operating temperature, in psi."
            ],
            correct: 2,
            reference: "API 574, 11.1"
        },
        {
            id: 97,
            text: "At low pressures and temperatures, the thicknesses determined by the Barlow formula may be so small that the pipe would have ______ structural strength.",
            options: [
                "adequate",
                "insufficient",
                "ample",
                "good"
            ],
            correct: 1,
            reference: "API 574, 11.1"
        },
        {
            id: 98,
            text: "A seamless NPS 12, A-106 Grade A pipe operates at 300 degrees F and 941 psi. The allowable stress is 16000 psi. Using the Barlow Equation, determine the thickness required for these conditions.",
            options: [
                "0.375\"",
                "0.750\"",
                "0.353\"",
                "0.706\""
            ],
            correct: 0,
            reference: "API 574, 11.1"
        },
        {
            id: 99,
            text: "A seamless NPS 6, A-106 Grade A pipe operates at 300 degrees F and 941 psi. The allowable stress is 16000 psi. The owner-user specified that the pipe must have 0.1\" allowed for corrosion allowance. Using the Barlow Equation, determine the thickness required for these conditions.",
            options: [
                "0.295\"",
                "0.195\"",
                "0.277\"",
                "0.352\""
            ],
            correct: 0,
            reference: "API 574, 11.1"
        },
        {
            id: 100,
            text: "A seamless NPS 8, A-53 Grade B pipe operates at 700 degrees F and 700 psi. The allowable stress is 16500 psi. The pipe has been in service for 6 years. The measured wall thickness of the pipe was 0.375\" prior to being placed in service. The pipe wall now measures 0.30\". Using the Barlow formula, and considering no structural requirements, estimate how long the piping can continue to operate and not be below the minimum thickness.",
            options: [
                "4.68 yrs",
                "9.8 yrs",
                "0 yrs, pipe below minimum now.",
                "10.42 yrs"
            ],
            correct: 1,
            reference: "API 574, 11.1"
        },
        {
            id: 101,
            text: "An Inspector finds a thin area in the body of a NPS 8 (8.625\" O.D.), 600# gate valve. The valve's body is made from ASTM A216 WCB material. The system operates at 700 psi and 750 degrees F. Using a corrosion allowance of 0.125\", what thickness must be present in order to continue to safely operate? Round your answer to the nearest hundredth, and use the Barlow equation with the 1.5 intensification factor as discussed in RP 574.",
            options: [
                "0.48\"",
                "0.38\"",
                "0.51\"",
                "0.43\""
            ],
            correct: 2,
            reference: "API 574, 11.2"
        },
        {
            id: 102,
            text: "If corrosion or erosion is anticipated for a valve, what should be done prior to installing the valve?",
            options: [
                "Severance thickness determinations should be made when the valves are installed so that the fretting rate and metal ruination can be determined.",
                "Retirement thickness measurements should be made after installation so that the fatigue rate and metal loss can be determined.",
                "Reference thickness measurements should be made when the valves are installed so that the corrosion rate and metal loss can be determined.",
                "Retina measurements of the macula should be made when the iris' are installed so the optical rate and the losses of perception can be determined."
            ],
            correct: 2,
            reference: "API 574, 11.2"
        },
        {
            id: 103,
            text: "Which of the items listed below would NOT normally be contained in inspection records or piping?",
            options: [
                "original date of installation, the specifications and strength levels of the materials used.",
                "original vessel hydrotest pressures and conditions that the tests were performed under.",
                "original thickness measurements and the locations and dates of all subsequent readings.",
                "calculated retirement thicknesses."
            ],
            correct: 1,
            reference: "API 574, 12.1"
        },
        {
            id: 104,
            text: "Accurate records of a piping system make possible an evaluation of ______ on any piping, valve, or fitting.",
            options: [
                "computerization",
                "security and continuity",
                "cost and competency",
                "service life"
            ],
            correct: 3,
            reference: "API 574, 12.1"
        },
        {
            id: 105,
            text: "You are working as an inspector. While reviewing a tabulation of thickness data on a section of piping in non-corrosive or very low corrosive service, you find the initial thickness reading of an inspection point to be 0.432\" and marked nominal on a NPS 6 pipe. At the next inspection 12 months later you find a reading by ultrasonics of 0.378\" at the same point. Twelve months later UT readings were taken and the thickness at the point was still 0.378\". What would this mean to you?",
            options: [
                "No measurement was taken originally, the nominal thickness was listed and the piping probably had an under-tolerance of 12.5%.",
                "There was an error made by the inspector at the installation or the inspector who UT'd the piping at the next inspection made an error.",
                "The UT machine that the inspector used during the 12 month inspection after installation was defective and not reading correctly.",
                "The pipe contractor or the installer put the wrong schedule piping in service."
            ],
            correct: 0,
            reference: "API 574, 4.1.1"
        },
        {
            id: 106,
            text: "You are working as an inspector. While reviewing a tabulation of thickness data on a section of piping, you find the letter \"C\" marked under a column headed by the word METHOD. What does the \"C\" indicate?",
            options: [
                "The inspection temperature of the pipe was COLD.",
                "The thickness measurement was made by an inspector with the I.D. of \"C\".",
                "The thickness measurement was taken with calipers.",
                "The thickness measurement was CONFIRMED by a second party."
            ],
            correct: 2,
            reference: "API 574, Figure 34"
        },
        {
            id: 107,
            text: "Which of the following is not an important function of an accurate sketch?",
            options: [
                "assist in determining future locations that urgently require examination.",
                "identifying systems and circuits in terms of location, size, materials, etc.",
                "serve as field data sheets.",
                "none of the above."
            ],
            correct: 3,
            reference: "API 574, 12.2"
        },
        {
            id: 108,
            text: "As soon as possible after completing an inspection, the Inspector should:",
            options: [
                "review the inspection records and schedule the next inspection.",
                "always require a hydrotest.",
                "sign all RT records.",
                "notify the Piping Engineer, so he can wake up and go home."
            ],
            correct: 0,
            reference: "API 574, 12.5"
        },
        {
            id: 109,
            text: "The Wenner 4-Pin method, the soil bar, and the soil box do not represent methods of determining:",
            options: [
                "holidays",
                "pipe-to-soil potentials",
                "cathodic protection acceptability",
                "all of the above."
            ],
            correct: 3,
            reference: "API 574, 10.3.1"
        },
        {
            id: 110,
            text: "The total resistivity for a Wenner 4-Pin test that utilizes pins spaced 2 feet apart and a 6 \"R\" factor is:",
            options: [
                "2298 ohm/cm",
                "3500 ohm/cm",
                "6000 ohm/cm",
                "8000 ohm/cm"
            ],
            correct: 0,
            reference: "API 574, 10.3.1.4"
        },
        {
            id: 111,
            text: "Which of the following is not a consideration when using a soil bar?",
            options: [
                "using a standard prod bar",
                "avoiding the addition of water",
                "applying pressure on the soil bar after injection",
                "none of the above"
            ],
            correct: 3,
            reference: "API 574, 10.3.1.4"
        },
        {
            id: 112,
            text: "Which of the following is a consideration when using a soil box:",
            options: [
                "depth of Pins less than 4% of spacing",
                "ensuring the soil has dried out before testing",
                "avoiding contamination of the sample during handling and storage",
                "all of the above"
            ],
            correct: 2,
            reference: "API 574, 10.3.1.9"
        }
    ]
};