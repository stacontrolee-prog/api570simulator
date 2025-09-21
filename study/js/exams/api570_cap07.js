export default {
    title: "API 570 Chapter 7 - Inspection Data Evaluation, Analysis, and Recording",
    questions: [
        {
            id: 1,
            text: "According to API 570, which methods can be used to determine corrosion rates?",
            options: [
                "Only point-to-point analysis method",
                "Only statistical analysis method",
                "Either point-to-point analysis method or statistical analysis method, or a combination of both",
                "Only RBI assessment method"
            ],
            correct: 2,
            reference: "API 570 Section 7.1.1"
        },
        {
            id: 2,
            text: "How is the long-term (LT) corrosion rate calculated using the point-to-point method?",
            options: [
                "(tinitial - tactual) / time (years) between tinitial and tactual",
                "(tprevious - tactual) / time (years) between tprevious and tactual",
                "(tactual - trequired) / time (years)",
                "(tinitial - tprevious) / time (years) between tinitial and tprevious"
            ],
            correct: 0,
            reference: "API 570 Section 7.1.2"
        },
        {
            id: 3,
            text: "How is the remaining life of piping calculated according to API 570?",
            options: [
                "(tinitial - tactual) / corrosion rate",
                "(tactual - trequired) / corrosion rate",
                "(trequired - tactual) / corrosion rate",
                "(tprevious - tactual) / corrosion rate"
            ],
            correct: 1,
            reference: "API 570 Section 7.2"
        },
        {
            id: 4,
            text: "For a newly installed piping system, which method should NOT be used to determine the probable corrosion rate?",
            options: [
                "Data from piping operating in the same or similar service",
                "Appropriately placed ultrasonic sensors on the piping",
                "Estimation by a corrosion specialist",
                "Assuming zero corrosion rate until first inspection"
            ],
            correct: 3,
            reference: "API 570 Section 7.3"
        },
        {
            id: 5,
            text: "What should be used to compute the MAWP for continued use of piping systems?",
            options: [
                "The nominal thickness minus corrosion allowance",
                "The actual thickness as determined by inspection minus twice the estimated corrosion loss before next inspection",
                "The minimum required thickness only",
                "The original design thickness"
            ],
            correct: 1,
            reference: "API 570 Section 7.5"
        },
        {
            id: 6,
            text: "The required thickness of a pipe shall be the greater of which two values?",
            options: [
                "Pressure design thickness and corrosion allowance",
                "Pressure design thickness and structural minimum thickness",
                "Structural minimum thickness and corrosion allowance",
                "Original design thickness and actual thickness"
            ],
            correct: 1,
            reference: "API 570 Section 7.6"
        },
        {
            id: 7,
            text: "Which API standard should be used for Fitness-For-Service assessment of local metal loss?",
            options: [
                "API 570",
                "API 574",
                "API 579-1/ASME FFS-1, Part 4",
                "API 579-1/ASME FFS-1, Part 5"
            ],
            correct: 3,
            reference: "API 570 Section 7.7"
        },
        {
            id: 8,
            text: "When is piping stress analysis typically required according to API 570?",
            options: [
                "For all piping systems during every inspection",
                "Only for new piping systems",
                "Not normally performed as part of piping inspection but may be needed when unexpected movement is observed",
                "Only for high-temperature piping systems"
            ],
            correct: 2,
            reference: "API 570 Section 7.8"
        },
        {
            id: 9,
            text: "What is the primary purpose of inspection isometric drawings (ISOs) according to API 570?",
            options: [
                "To show the complete design of the piping system",
                "To identify the location of CMLs and recommended maintenance",
                "To document the fabrication process",
                "To show pressure rating calculations"
            ],
            correct: 1,
            reference: "API 570 Section 7.9.6"
        },
        {
            id: 10,
            text: "What information should be recorded for each piping circuit with CMLs?",
            options: [
                "Only the material of construction",
                "Only the operating pressure and temperature",
                "Only the corrosion rate",
                "Material of construction, piping diameter, operating conditions, process fluids, corrosion rate, and other specified information"
            ],
            correct: 3,
            reference: "API 570 Section 7.9.5"
        },
        {
            id: 11,
            text: "What should the recommendation tracking system for repairs include?",
            options: [
                "Only the recommended corrective action",
                "Only the due date for completion",
                "Only the piping system identifier",
                "Recommended corrective action, due date, piping system identifier, temporary repairs list, and other specified information"
            ],
            correct: 3,
            reference: "API 570 Section 7.10.1"
        },
        {
            id: 12,
            text: "How should inspection repair recommendations be changed or deleted?",
            options: [
                "Only with the inspector's approval",
                "Only with the piping engineer's approval",
                "After review by the inspector or inspection supervisor and optionally by piping engineer, with documentation",
                "Without any documentation if approved by operations"
            ],
            correct: 2,
            reference: "API 570 Section 7.10.2"
        },
        {
            id: 13,
            text: "What should be done with piping failures and near-misses according to API 570?",
            options: [
                "Only recorded",
                "Only reported to the owner-operator",
                "Recorded, reported to the owner-operator, and investigated to identify and correct the cause",
                "Ignored if no significant damage occurred"
            ],
            correct: 2,
            reference: "API 570 Section 7.12"
        },
        {
            id: 14,
            text: "Under what conditions can a simplified short-term deferral be approved?",
            options: [
                "If the proposed new due date would not increase the current interval by more than 20% or 12 months",
                "If the current due date has not been previously deferred and the increase is not more than 10% or 6 months",
                "Only for Class 3 and 4 piping systems",
                "Without any approval process"
            ],
            correct: 1,
            reference: "API 570 Section 7.13.2"
        },
        {
            id: 15,
            text: "What is required for a deferral request that doesn't meet simplified deferral conditions?",
            options: [
                "Only the inspector's approval",
                "A documented risk assessment and other specified requirements",
                "Only operations management approval",
                "No additional requirements beyond simplified deferral"
            ],
            correct: 1,
            reference: "API 570 Section 7.13.3"
        },
        {
            id: 16,
            text: "What should be documented for deferral of inspection repair recommendations?",
            options: [
                "Only the justification of the due date",
                "Only the approval by appropriate personnel",
                "The justification, approval, and documentation in inspection records",
                "Only the new due date"
            ],
            correct: 2,
            reference: "API 570 Section 7.14"
        },
        {
            id: 17,
            text: "According to API 570, when should statistical analysis methods not be used for corrosion rate determination?",
            options: [
                "For all piping systems",
                "For piping circuits with significant localized unpredictable corrosion mechanisms",
                "For new piping systems only",
                "For Class 1 piping systems only"
            ],
            correct: 1,
            reference: "API 570 Section 7.1.3"
        },
        {
            id: 18,
            text: "What should be done when the short-term corrosion rate changes from the anticipated rate?",
            options: [
                "Ignore it if within acceptable limits",
                "Consult with a corrosion specialist to determine the cause and consider appropriate responses",
                "Immediately replace the piping",
                "Only document the change"
            ],
            correct: 1,
            reference: "API 570 Section 7.1.2"
        },
        {
            id: 19,
            text: "For repaired or in-kind replacement piping, how should the corrosion rate be established?",
            options: [
                "Assumed to be zero",
                "Based on the previous worst-case measured rate at the replacement location or the circuit average rate",
                "Based on published data only",
                "Based on the original design corrosion rate"
            ],
            correct: 1,
            reference: "API 570 Section 7.4"
        },
        {
            id: 20,
            text: "What is the purpose of an Inspection Data Management System (IDMS) according to API 570?",
            options: [
                "Only for storing thickness readings",
                "For storing, calculating, and analyzing data, calculating corrosion rates, and inspection planning",
                "Only for generating inspection reports",
                "Only for tracking repairs"
            ],
            correct: 1,
            reference: "API 570 Section 7.9.4"
        }
    ]
};