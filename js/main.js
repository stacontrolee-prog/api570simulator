// Variables globales
let currentExam = '';
let examData = null;
let userName = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = 0;
let timerInterval = null;
let markedForReview = []; // Array para almacenar preguntas marcadas

// Lista de normas de referencia para el examen de libro abierto
const openBookStandards = [
    { name: "API 570", url: "./pdfs/API_570_2024.pdf" },
    { name: "API 571", url: "./pdfs/API_571_2020.pdf" },
    { name: "API 574", url: "./pdfs/API_574_2024.pdf" },
    { name: "API 576", url: "./pdfs/API_576_2017.pdf" },
    { name: "API 577", url: "./pdfs/API_577_2020.pdf" },
    { name: "API 578", url: "./pdfs/API_578_2023.pdf" },
    { name: "ASME B31.3", url: "./pdfs/ASME_B31_3_2024.pdf" },
    { name: "ASME B16.5", url: "./pdfs/ASME_B16_5_2020.pdf" },
    { name: "ASME BPVC Sec V", url: "./pdfs/ASME_BPVC_V_2023.pdf" },
    { name: "ASME BPVC Sec IX", url: "./pdfs/ASME_BPVC_IX_2023.pdf" },
    { name: "ASME PCC-2", url: "./pdfs/ASME_PCC_2_2022.pdf" }
];

// Lista de documentos adjuntos para las preguntas 41-50 (todos comparten los mismos dos)
const attachmentsForQuestions = {
    41: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    42: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    43: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    44: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    45: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    46: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    47: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    48: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    49: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ],
    50: [
        { name: "WPS-GMAW-2", url: "./pdfs/WPS_GMAW_2.pdf" },
        { name: "PQR-GMAW-2", url: "./pdfs/PQR_GMAW_2.pdf" }
    ]
};

// Función para seleccionar tipo de examen
function selectExam(examType) {
    currentExam = examType;
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('name-view').classList.remove('hidden');
    document.getElementById('user-name').focus();
}

// Función para volver al inicio
function backToHome() {
    // Ocultar todas las vistas
    document.getElementById('name-view').classList.add('hidden');
    document.getElementById('exam-view').classList.add('hidden');
    document.getElementById('index-view').classList.add('hidden');
    document.getElementById('result-view').classList.add('hidden');
    document.getElementById('review-view').classList.add('hidden');
    
    // Mostrar la vista principal
    document.getElementById('home-view').classList.remove('hidden');
    
    // Resetear variables
    currentExam = '';
    examData = null;
    userName = '';
    currentQuestionIndex = 0;
    userAnswers = [];
    markedForReview = [];
    clearInterval(timerInterval);
}

// Función para comenzar el examen
async function startExam() {
    userName = document.getElementById('user-name').value.trim();
    
    if (!userName) {
        alert('Por favor ingresa tu nombre');
        return;
    }
    
    // Cargar dinámicamente el archivo del examen
    try {
        const examModule = await import(`./exams/${currentExam}.js`);
        examData = examModule.default;
    } catch (error) {
        console.error('Error al cargar el examen:', error);
        alert('Error al cargar el examen. Por favor, inténtalo de nuevo.');
        return;
    }
    
    document.getElementById('name-view').classList.add('hidden');
    document.getElementById('exam-view').classList.remove('hidden');
    
    // Configurar examen
    const examTitle = examData.title;
    document.getElementById('exam-title').textContent = examTitle;
    document.getElementById('display-name').textContent = userName;
    
    // Inicializar array de respuestas
    userAnswers = new Array(examData.questions.length).fill(-1);
    
    // Resetear marcas
    markedForReview = [];
    
    // Iniciar temporizador
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    
    // Cargar primera pregunta
    loadQuestion();
}

// Función para cargar una pregunta
function loadQuestion() {
    const question = examData.questions[currentQuestionIndex];
    
    document.getElementById('question-text').textContent = `${currentQuestionIndex + 1}. ${question.text}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        // Si ya se respondió esta pregunta, marcar la opción seleccionada
        const isSelected = userAnswers[currentQuestionIndex] === index;
        
        optionDiv.innerHTML = `
            <input type="radio" id="option${index}" name="answer" value="${index}" ${isSelected ? 'checked' : ''}>
            <label for="option${index}">${option}</label>
        `;
        
        if (isSelected) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.addEventListener('click', () => {
            document.getElementById(`option${index}`).checked = true;
            selectOption(index);
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Actualizar progreso
    updateProgress();
    
    // Habilitar/deshabilitar botón siguiente
    const nextBtn = document.getElementById('next-btn');
    if (userAnswers[currentQuestionIndex] !== -1) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
    
    // Cambiar texto del botón si es la última pregunta
    if (currentQuestionIndex === examData.questions.length - 1) {
        nextBtn.textContent = 'Finalizar';
    } else {
        nextBtn.textContent = 'Siguiente';
    }
    
    // Actualizar el estado del botón de marcar
    const markBtn = document.getElementById('mark-btn');
    if (markedForReview.includes(currentQuestionIndex)) {
        markBtn.textContent = '⭐ Desmarcar';
    } else {
        markBtn.textContent = '⭐ Marcar para Revisar';
    }
    
    // Habilitar/deshabilitar botones de navegación
    const prevBtn = document.getElementById('prev-btn');
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Mostrar panel de referencias solo para examen de libro abierto
    const referencesPanel = document.getElementById('references-panel');
    if (currentExam === 'api570_final_open_book') {
        referencesPanel.classList.remove('hidden');
        generateStandardsList();
        generateAttachmentsList(currentQuestionIndex);
    } else {
        referencesPanel.classList.add('hidden');
    }
}

// Función para generar la lista de normas
function generateStandardsList() {
    const standardsList = document.getElementById('standards-list');
    standardsList.innerHTML = '';
    
    openBookStandards.forEach(standard => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${standard.url}" target="_blank">
                <span class="pdf-icon">📄</span>
                ${standard.name}
            </a>
        `;
        standardsList.appendChild(li);
    });
}

// Función para generar la lista de adjuntos para la pregunta actual
function generateAttachmentsList(questionIndex) {
    const attachmentsSection = document.getElementById('attachments-section');
    const attachmentsList = document.getElementById('attachments-list');
    
    // Convertir índice 0-based a número de pregunta 1-based
    const questionNumber = questionIndex + 1;

    // Mostrar adjuntos solo si la pregunta está entre 41 y 50
    if (questionNumber >= 41 && questionNumber <= 50) {
        attachmentsSection.classList.remove('hidden');
        attachmentsList.innerHTML = '';

        const attachments = attachmentsForQuestions[questionNumber]; // Ahora es un array

        if (attachments && Array.isArray(attachments)) {
            attachments.forEach(file => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="${file.url}" target="_blank">
                        <span class="pdf-icon">📄</span>
                        ${file.name}
                    </a>
                `;
                attachmentsList.appendChild(li);
            });
        }
    } else {
        attachmentsSection.classList.add('hidden');
    }
}

// Función para seleccionar una opción
function selectOption(index) {
    // Quitar selección previa
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Marcar opción seleccionada
    document.querySelectorAll('.option')[index].classList.add('selected');
    
    // Habilitar botón siguiente
    document.getElementById('next-btn').disabled = false;
    
    // Guardar respuesta
    userAnswers[currentQuestionIndex] = index;
}

// Función para actualizar la barra de progreso
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / examData.questions.length) * 100;
    
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = 
        `Pregunta ${currentQuestionIndex + 1} de ${examData.questions.length}`;
}

// Función para actualizar el temporizador
function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const seconds = (elapsed % 60).toString().padStart(2, '0');
    
    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

// Función para ir a la pregunta anterior
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
    if (currentQuestionIndex < examData.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Si es la última pregunta, mostrar confirmación
        if (confirm('¿Estás seguro que deseas finalizar el examen? Podrás revisar tus respuestas antes de enviar.')) {
            finishExam();
        }
    }
}

// Función para confirmar salida del examen
function confirmExit() {
    if (confirm('¿Estás seguro que deseas salir del examen? Se perderá todo tu progreso.')) {
        clearInterval(timerInterval);
        backToHome();
    }
}

// Función para abrir el índice de preguntas
function openQuestionIndex() {
    document.getElementById('exam-view').classList.add('hidden');
    document.getElementById('index-view').classList.remove('hidden');
    renderQuestionIndex();
}

// Función para cerrar el índice de preguntas
function closeQuestionIndex() {
    document.getElementById('index-view').classList.add('hidden');
    document.getElementById('exam-view').classList.remove('hidden');
}

// Función para renderizar el índice de preguntas
function renderQuestionIndex() {
    const indexContainer = document.getElementById('index-container');
    indexContainer.innerHTML = '';
    
    examData.questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'index-question';
        
        // Determinar el estado de la pregunta
        if (markedForReview.includes(index)) {
            questionDiv.classList.add('marked');
        } else if (userAnswers[index] !== -1) {
            questionDiv.classList.add('answered');
        } else {
            questionDiv.classList.add('unanswered');
        }
        
        // Marcar la pregunta actual
        if (index === currentQuestionIndex) {
            questionDiv.classList.add('current');
        }
        
        questionDiv.textContent = `Pregunta ${index + 1}`;
        questionDiv.onclick = () => goToQuestion(index);
        
        indexContainer.appendChild(questionDiv);
    });
}

// Función para ir a una pregunta específica
function goToQuestion(questionIndex) {
    currentQuestionIndex = questionIndex;
    closeQuestionIndex();
    loadQuestion();
}

// Función para marcar/desmarcar una pregunta para revisión
function toggleMarkForReview() {
    const index = markedForReview.indexOf(currentQuestionIndex);
    
    if (index === -1) {
        // Marcar la pregunta
        markedForReview.push(currentQuestionIndex);
        document.getElementById('mark-btn').textContent = '⭐ Desmarcar';
    } else {
        // Desmarcar la pregunta
        markedForReview.splice(index, 1);
        document.getElementById('mark-btn').textContent = '⭐ Marcar para Revisar';
    }
    
    // Actualizar el índice si está abierto
    if (!document.getElementById('index-view').classList.contains('hidden')) {
        renderQuestionIndex();
    }
}

// Función para ir a la siguiente pregunta no respondida
function goToUnanswered() {
    let found = false;
    let startIndex = currentQuestionIndex;
    
    // Buscar hacia adelante
    for (let i = startIndex; i < examData.questions.length; i++) {
        if (userAnswers[i] === -1) {
            goToQuestion(i);
            found = true;
            break;
        }
    }
    
    // Si no encuentra, buscar desde el principio
    if (!found) {
        for (let i = 0; i < startIndex; i++) {
            if (userAnswers[i] === -1) {
                goToQuestion(i);
                found = true;
                break;
            }
        }
    }
    
    // Si todas están respondidas
    if (!found) {
        alert('¡Todas las preguntas han sido respondidas!');
    }
}

// Función para ir a la siguiente pregunta marcada
function goToMarked() {
    if (markedForReview.length === 0) {
        alert('No hay preguntas marcadas para revisar.');
        return;
    }
    
    let found = false;
    let startIndex = currentQuestionIndex;
    
    // Buscar hacia adelante
    for (let i = 0; i < markedForReview.length; i++) {
        const questionIndex = markedForReview[i];
        if (questionIndex > startIndex) {
            goToQuestion(questionIndex);
            found = true;
            break;
        }
    }
    
    // Si no encuentra, buscar desde el principio
    if (!found) {
        goToQuestion(markedForReview[0]);
    }
}

// Función para finalizar el examen
function finishExam() {
    clearInterval(timerInterval);
    
    // Calcular resultados
    let correctCount = 0;
    
    for (let i = 0; i < examData.questions.length; i++) {
        if (userAnswers[i] === examData.questions[i].correct) {
            correctCount++;
        }
    }
    
    const incorrectCount = examData.questions.length - correctCount;
    const percentage = Math.round((correctCount / examData.questions.length) * 100);
    
    // Determinar mensaje
    let message = '';
    if (percentage >= 90) {
        message = '¡Excelente trabajo! Dominas el material.';
    } else if (percentage >= 70) {
        message = '¡Buen trabajo! Tienes un buen conocimiento.';
    } else if (percentage >= 50) {
        message = 'Trabajo aceptable. Hay áreas que puedes mejorar.';
    } else {
        message = 'Necesitas estudiar más. ¡No te rindas!';
    }
    
    // Mostrar resultados
    document.getElementById('exam-view').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');
    
    document.getElementById('result-score').textContent = `${percentage}%`;
    document.getElementById('result-message').textContent = message;
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('incorrect-answers').textContent = incorrectCount;
    document.getElementById('time-spent').textContent = document.getElementById('timer').textContent;
}

// Función para reiniciar el examen
function restartExam() {
    currentQuestionIndex = 0;
    userAnswers = new Array(examData.questions.length).fill(-1);
    markedForReview = [];
    
    document.getElementById('result-view').classList.add('hidden');
    document.getElementById('exam-view').classList.remove('hidden');
    
    // Reiniciar temporizador
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    
    loadQuestion();
}

// Función para revisar respuestas
function reviewAnswers() {
    document.getElementById('result-view').classList.add('hidden');
    document.getElementById('review-view').classList.remove('hidden');
    
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    examData.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const questionDiv = document.createElement('div');
        questionDiv.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;
        
        let optionsHtml = '';
        question.options.forEach((option, optIndex) => {
            let optionClass = 'review-option';
            if (optIndex === question.correct) {
                optionClass += ' correct-answer';
            }
            if (optIndex === userAnswer && userAnswer !== -1) {
                optionClass += ' user-selected';
            }
            
            optionsHtml += `<div class="${optionClass}">${option}</div>`;
        });
        
        questionDiv.innerHTML = `
            <h3>Pregunta ${index + 1}</h3>
            <p>${question.text}</p>
            <div class="review-options">
                ${optionsHtml}
            </div>
            ${question.reference ? `<div class="review-reference">Referencia: ${question.reference}</div>` : ''}
        `;
        
        reviewContainer.appendChild(questionDiv);
    });
}

// Función para volver a resultados
function backToResults() {
    document.getElementById('review-view').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');
}

// Inicializar la página cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Asegurarse de que la vista de inicio esté visible
    const homeView = document.getElementById('home-view');
    if (homeView) {
        homeView.classList.remove('hidden');
    }
});
