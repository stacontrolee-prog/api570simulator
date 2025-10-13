// Estado actual
let currentCode = 'select'; // Código por defecto
let currentChapter = null;
let currentLanguage = 'en';
let examLoaded = false; // Para saber si un examen está cargado

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    setupCodeSelector();
    setupSidebarToggle();
    renderChapterList();
    setupLanguageButtons();
    setupScrollToTopButton();
});

// Configurar el botón para alternar el sidebar en móviles
function setupSidebarToggle() {
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Cerrar el sidebar cuando se selecciona un capítulo
    document.getElementById('chapter-list').addEventListener('click', (e) => {
        if (e.target.tagName === 'LI' || e.target.parentElement.tagName === 'LI') {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
}

// Configurar el selector de códigos
function setupCodeSelector() {
    const codeSelect = document.getElementById('code-select');
    codeSelect.addEventListener('change', (event) => {
        currentCode = event.target.value;
        currentChapter = null; // Reiniciar el capítulo actual
        
        renderChapterList();
        updateContent();
    });
}

// Renderizar lista de capítulos del código actual
function renderChapterList() {
    const chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = '';
    
    // Obtener los capítulos del código actual
    const chapters = getChaptersByCode(currentCode);
    
    if (chapters.length === 0) {
        const li = document.createElement('li');
        if (currentCode !== 'select') {
            li.textContent = currentLanguage === 'en' ? 'No chapters available' : 'No hay capítulos disponibles';
        } else {
            li.textContent = currentLanguage === 'en' ? 'Select a code' : 'Selecciona un código';
        }
        
        chapterList.appendChild(li);
        return;
    }
    
    chapters.forEach(chapter => {
        const li = document.createElement('li');
        const chapterTitle = currentLanguage === 'en' ? chapter.title : chapter.titleEs;
        li.innerHTML = `<span class="chapter-id">${chapter.id}.</span> ${chapterTitle}`;
        li.addEventListener('click', () => loadChapter(chapter.id));
        chapterList.appendChild(li);
    });
}

// Cargar contenido del capítulo
function loadChapter(chapterId) {
    currentChapter = getChapterByCodeAndId(currentCode, chapterId);
    updateContent();
    
    // Actualizar estado visual
    document.querySelectorAll('#chapter-list li').forEach((li, index) => {
        const chapters = getChaptersByCode(currentCode);
        if (chapters[index] && chapters[index].id === chapterId) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });
}

function updateContent() {
    const contentDiv = document.getElementById('chapter-content');
    const code = getCode(currentCode);
    
    if (!code) {
        if (currentLanguage === 'en') {
            contentDiv.innerHTML = `
                <h1>API 570 Piping Inspector Certification (2025)</h1>
                
                <img class="img-float-left" alt="ANSI Certified" height="213" width="250" src="image/ANAB-Symbol-RGB-17024-Personnel-Certification-Body.png" />
                
                <p><em>This exam is scheduled to be administered <a href="https://www.api.org/products-and-services/individual-certification-programs/schedule-exams">in-person</a> at designated test centers only.</em></p>
                
                <p>Certified API 570 Piping inspectors must have a broad knowledge base relating to maintenance, inspection, alteration and repair of in-service metallic piping systems. The API 570 examination is designed to determine if applicants have such knowledge.</p>
                
                <p>This certification program benefits employers and the industry as a whole by helping to:</p>
               
                <ul class="main-list">
                    <li>Provide a continued high level of safety through the use of inspectors specialized in process piping</li>
                    <li>Improve management control of process unit inspection, repair, alteration and rerating</li>
                    <li>Reduce the potential for inspection delays resulting from regulatory requirements</li>
                </ul>
               
                <p>API 570 certification is valid for a three-year term and is accredited by the American National Standards Institute (ANSI). This accreditation ensures that the exam has been developed to the highest standard for openness and integrity and meets the rigorous requirements established under the International Organization for Standardization (ISO) 17024.</p>
                
                <hr />
                
                <div class="subsection">
                    <h2>1. Studying for the Exam</h2>
                    <ul class="main-list">
                        <li>
                            <span class="list-title">Publications Effectivity Sheet</span> - Questions on the API 570 exam are derived from the publications listed in this document. Only the specific sections of publications that are listed on the Effectivity Sheet will be available to you during the open-book portion of the exam.
                            <ul class="sub-list">
                                <li><strong><a href="pdf/570_EKS_Feburary 2025_final.pdf" class="link-pdf" target="_blank" rel="noopener noreferrer">API 570 Publications Effectivity Sheet</a></strong> <em>for 2025 exams</em></li>
                            </ul>
                        </li>
                        <li>
                            <span class="list-title">Body of Knowledge</span> - List of specific topics included in the API 570 exam
                            <ul class="sub-list">
                                <li><strong><a href="pdf/BOK_570_Feburary 2025_final.pdf" class="link-pdf" target="_blank" rel="noopener noreferrer">API 570 Body of Knowledge</a></strong> <em>for 2025 exams</em></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <hr />
                
                <div class="subsection">
                    <h2>2. Exam Structure</h2>
                    <ul class="main-list">
                        <li>The API 570 exam day is 7.5 hours long - a short tutorial session, 2.75 hours for the closed-book portion, a 45-minute lunch break and 3.75 hours for the open-book portion.</li>
                        <li>There are 170 questions on the API 570 exam, of which only 140 are scored. The remaining 30 are pretest questions.
                            <ul class="sub-list">
                                <li><a href="pdf/ICP-POL-205_Pretest Questions on API Exams.pdf" class="link-pdf" target="_blank" rel="noopener noreferrer">Pretest Questions FAQs</a></li>
                            </ul>
                        </li>
                        <li>There are 110 closed-book questions and 60 open-book questions.</li>
                        <li>View the <a href="pdf/Examinations/ICP-PD-201a_ICP Tutorial 510_570_653.pdf" class="link-pdf" target="_blank" rel="noopener noreferrer">Exam Tutorial</a> before exam day to familiarize yourself with the format.</li>
                    </ul>
                </div>
                
                <hr />
                
                <div class="subsection">
                    <h2>3. What Can You Bring Into the Exam</h2>
                    <ul class="main-list">
                        <li>Papers, notes and books are <em>not allowed</em> in Prometric computer testing centers.</li>
                        <li>PDF documents of pertinent codes and standards will be available on your computer during the open book portion of the exam and will be presented in English.</li>
                        <li><a href="https://www.api.org/products-and-services/individual-certification-programs/schedule-exams">Learn More about Exam Day</a></li>
                    </ul>
                </div>
                
                <hr />
                
                <div class="subsection">
                    <h2>4. Additional Resources</h2>
                    <ul class="main-list">
                        <li>Examination Policies & Notifications: <a href="/products-and-services/individual-certification-programs/policies">Policies</a></li>
                        <li>Purchasing Authorized API Publications: <a href="/products-and-services/standards/purchase">API Publications Store</a></li>
                        <li><a href="https://anabpd.ansi.org/Accreditation/credentialing/personnel-certification/AllDirectoryDetails?&prgID=201&OrgId=72359&statusID=4" class="external-link">ANSI Accreditation</a></li>
                    </ul>
                </div>
            `;
        } else {
            contentDiv.innerHTML = `
                <h1>Certificación de Inspector de Tuberías API 570 (2025)</h1>
                
                <img class="img-float-left" alt="Certificado ANSI" height="213" width="250" src="image/ANAB-Symbol-RGB-17024-Personnel-Certification-Body.png" />
                
                <p><em>Este examen está programado para ser administrado <a href="https://www.api.org/products-and-services/individual-certification-programs/schedule-exams">en persona</a> únicamente en centros de examen designados.</em></p>
                
                <p>Los inspectores de tuberías API 570 certificados deben tener una amplia base de conocimientos relacionada con el mantenimiento, inspección, alteración y reparación de sistemas de tuberías metálicas en servicio. El examen API 570 está diseñado para determinar si los solicitantes poseen dichos conocimientos.</p>
                
                <p>Este programa de certificación beneficia a los empleadores y a la industria en general al ayudar a:</p>
               
                <ul class="main-list">
                    <li>Proporcionar un alto nivel continuo de seguridad mediante el uso de inspectores especializados en tuberías de proceso</li>
                    <li>Mejorar el control de gestión de la inspección, reparación, alteración y re-clasificación de unidades de proceso</li>
                    <li>Reducir el potencial de retrasos en la inspección resultantes de los requisitos reglamentarios</li>
                </ul>
               
                <p>La certificación API 570 es válida por un período de tres años y está acreditada por el American National Standards Institute (ANSI). Esta acreditación garantiza que el examen se ha desarrollado con los más altos estándares de apertura e integridad y cumple con los rigurosos requisitos establecidos bajo la International Organization for Standardization (ISO) 17024.</p>
                
                <hr />
                
                <div class="subsection">
                    <h2>1. Preparación para el Examen</h2>
                    <ul class="main-list">
                        <li>
                            <span class="list-title">Hoja de Efectividad de Publicaciones</span> - Las preguntas del examen API 570 se derivan de las publicaciones enumeradas en este documento. Solo las secciones específicas de las publicaciones que figuran en la Hoja de Efectividad estarán disponibles durante la parte de libro abierto del examen.
                            <ul class="sub-list">
                                <li><strong><a href="pdf/570_EKS_Feburary 2025_final.pdf" class="link-pdf" target="_blank" rel="noopener noreferrer">Hoja de Efectividad de Publicaciones API 570</a></strong> <em>para exámenes 2025</em></li>
                            </ul>
                        </li>
                        <li>
                            <span class="list-title">Cuerpo de Conocimientos</span> - Lista de temas específicos incluidos en el examen API 570
                            <ul class="sub-list">
                                <li><strong><a href="pdf/BOK_570_Feburary 2025_final.pdf" class="link-pdf" target="_blank" rel="noopener noreferrer">Cuerpo de Conocimientos API 570</a></strong> <em>para exámenes 2025</em></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <hr />
                
                <div class="subsection">
                    <h2>2. Estructura del Examen</h2>
                    <ul class="main-list">
                        <li>El día del examen API 570 tiene una duración de 7.5 horas: una breve sesión tutorial, 2.75 horas para la parte de libro cerrado, un descanso para almuerzo de 45 minutos y 3.75 horas para la parte de libro abierto.</li>
                        <li>Hay 170 preguntas en el examen API 570, de las cuales solo 140 son puntuadas. Las 30 restantes son preguntas de prueba.
                            <ul class="sub-list">
                                <li><a href="pdf/ICP-POL-205_Pretest Questions on API Exams.pdf" class="link-pdf" target="_blank" rel="noopener noreferrer">Preguntas Frecuentes sobre Preguntas de Prueba</a></li>
                            </ul>
                        </li>
                        <li>Hay 110 preguntas de libro cerrado y 60 preguntas de libro abierto.</li>
                        <li>Consulte el <a href="pdf/Examinations/ICP-PD-201a_ICP Tutorial 510_570_653.pdf" class="link-pdf" target="_blank" rel="noopener noreferrer">Tutorial del Examen</a> antes del día del examen para familiarizarse con el formato.</li>
                    </ul>
                </div>
                
                <hr />
                
                <div class="subsection">
                    <h2>3. Qué Puede Llevar al Examen</h2>
                    <ul class="main-list">
                        <li>No se permiten papeles, notas ni libros en los centros de examen por computadora de Prometric.</li>
                        <li>Los documentos PDF de códigos y estándares pertinentes estarán disponibles en su computadora durante la parte de libro abierto del examen y se presentarán en inglés.</li>
                        <li><a href="https://www.api.org/products-and-services/individual-certification-programs/schedule-exams">Más Información sobre el Día del Examen</a></li>
                    </ul>
                </div>
                
                <hr />
                
                <div class="subsection">
                    <h2>4. Recursos Adicionales</h2>
                    <ul class="main-list">
                        <li>Políticas y Notificaciones de Examen: <a href="/products-and-services/individual-certification-programs/policies">Políticas</a></li>
                        <li>Compra de Publicaciones Autorizadas de API: <a href="/products-and-services/standards/purchase">Tienda de Publicaciones API</a></li>
                        <li><a href="https://anabpd.ansi.org/Accreditation/credentialing/personnel-certification/AllDirectoryDetails?&prgID=201&OrgId=72359&statusID=4" class="external-link">Acreditación ANSI</a></li>
                    </ul>
                </div>
            `;
        }
        return;
    }
    
    const title = currentLanguage === 'en' ? code.title : code.titleEs;
    
    if (!currentChapter) {
        contentDiv.innerHTML = `
            <h1>${title}</h1>
            <p>${currentLanguage === 'en' ? 'Select a chapter from the index to start studying.' : 'Selecciona un capítulo del índice para comenzar a estudiar.'}</p>
        `;
        return;
    }
    
    const chapterTitle = currentLanguage === 'en' ? currentChapter.title : currentChapter.titleEs;
    let content = currentLanguage === 'en' ? currentChapter.content : currentChapter.contentEs;
    
    if (!content || content.trim() === '') {
        contentDiv.innerHTML = `
            <h1>${chapterTitle}</h1>
            <div class="chapter-body">
                <p>${currentLanguage === 'en' ? 'The content of this chapter is not yet available. Please check back later.' : 'El contenido de este capítulo aún no está disponible. Por favor, regrese más tarde.'}</p>
            </div>
        `;
        return;
    }
    
    // Agregar botón de examen al final del contenido
    const examButton = `
        <div class="exam-button-container">
            <button class="btn" onclick="openExam('${currentCode}', '${currentChapter.id}')">
                ${currentLanguage === 'en' ? 'Take Chapter Exam' : 'Tomar Examen del Capítulo'}
            </button>
        </div>
    `;
    
    contentDiv.innerHTML = `
        <h1>${chapterTitle}</h1>
        <div class="chapter-body">
            ${content}
        </div>
        ${examButton}
    `;
    
    // Si hay un examen cargado, ocultarlo
    if (examLoaded) {
        const examContainer = document.getElementById('exam-container');
        examContainer.classList.remove('active');
        examLoaded = false;
    }
}

// Función para abrir el examen
async function openExam(codeName, chapterId) {
    // Determinar el tipo de examen basado en el código y capítulo
    let examType = '';
    
    // Mapeo de códigos y capítulos a tipos de examen
    if (codeName === 'API570') {
        switch(chapterId) {
            case "1": examType = 'api570_cap01'; break;
            case "2": examType = 'api570_cap02'; break;
            case "3": examType = 'api570_cap03'; break;
            case "4": examType = 'api570_cap04'; break;
            case "5": examType = 'api570_cap05'; break;
            case "6": examType = 'api570_cap06'; break;
            case "7": examType = 'api570_cap07'; break;
            case "8": examType = 'api570_cap08'; break;
            case "9": examType = 'api570_cap09'; break;
            case "A": examType = 'api570_annexA'; break;
            case "B": examType = 'api570_annexB'; break;
            default: examType = 'api570_cap01';
        }
    } else if (codeName === 'API577') {
        switch(chapterId) {
            case "1": examType = 'api577_cap01'; break;
            case "2": examType = 'api577_cap02'; break;
            case "3": examType = 'api577_cap03'; break;
            case "4": examType = 'api577_cap04'; break;
            case "5": examType = 'api577_cap05'; break;
            case "6": examType = 'api577_cap06'; break;
            case "7": examType = 'api577_cap07'; break;
            case "8": examType = 'api577_cap08'; break;
            case "9": examType = 'api577_cap09'; break;
            case "10": examType = 'api577_cap10'; break;
            case "11": examType = 'api577_cap11'; break;
            default: examType = 'api577_cap01';
        }
    } else if (codeName === 'API574') {
        switch(chapterId) {
            case "1": examType = 'api574_cap01'; break;
            case "2": examType = 'api574_cap02'; break;
            case "3": examType = 'api574_cap03'; break;
            case "4": examType = 'api574_cap04'; break;
            case "5": examType = 'api574_cap05'; break;
            case "6": examType = 'api574_cap06'; break;
            case "7": examType = 'api574_cap07'; break;
            case "8": examType = 'api574_cap08'; break;
            case "9": examType = 'api574_cap09'; break;
            case "10": examType = 'api574_cap10'; break;
            case "11": examType = 'api574_cap11'; break;
            case "12": examType = 'api574_cap12'; break;
            case "13": examType = 'api574_cap13'; break;
            case "14": examType = 'api574_cap14'; break;
            case "A": examType = 'api574_annexA'; break;
            case "B": examType = 'api574_annexB'; break;
            default: examType = 'api574_cap01';
        }
    } else if (codeName === 'API576') {
        switch(chapterId) {
            case "5": examType = 'api576_cap05'; break;
            case "6": examType = 'api576_cap06'; break;
            case "8": examType = 'api576_cap08'; break;
            case "10": examType = 'api576_cap10'; break;
            case "B": examType = 'api576_annexB'; break;
            default: examType = 'api576_cap05'; // Capítulo por defecto
        }
    } else if (codeName === 'API578') {
        switch(chapterId) {
            case "1": examType = 'api578_cap01'; break;
            case "2": examType = 'api578_cap02'; break;
            case "3": examType = 'api578_cap03'; break;
            case "4": examType = 'api578_cap04'; break;
            case "5": examType = 'api578_cap05'; break;
            case "6": examType = 'api578_cap06'; break;
            case "7": examType = 'api578_cap07'; break;
            case "8": examType = 'api578_cap08'; break;
            case "9": examType = 'api578_cap09'; break;
            case "A": examType = 'api578_annexA'; break;
            default: examType = 'api578_cap01';
        }
    } else if (codeName === 'API571') {
        switch(chapterId) {
            case "2": examType = 'api571_cap02'; break;
            case "3.3": examType = 'api571_cap3-3'; break;
            case "3.8": examType = 'api571_cap3-8'; break;
            case "3.9": examType = 'api571_cap3-9'; break;
            case "3.14": examType = 'api571_cap3-14'; break;
            case "3.15": examType = 'api571_cap3-15'; break;
            case "3.17": examType = 'api571_cap3-17'; break;
            case "3.22": examType = 'api571_cap3-22'; break;
            case "3.27": examType = 'api571_cap3-27'; break;
            case "3.31": examType = 'api571_cap3-31'; break;
            case "3.37": examType = 'api571_cap3-37'; break;
            case "3.43": examType = 'api571_cap3-43'; break;
            case "3.45": examType = 'api571_cap3-45'; break;
            case "3.57": examType = 'api571_cap3-57'; break;
            case "3.58": examType = 'api571_cap3-58'; break;
            case "3.61": examType = 'api571_cap3-61'; break;
            case "A": examType = 'api571_annexA'; break;
            case "B": examType = 'api571_annexB'; break;
            default: examType = 'api571_cap02'; // Capítulo por defecto
        }
    } else if (codeName === 'ASMEV') {
        switch(chapterId) {
            case "1": examType = 'asmev_cap01'; break;
            case "2": examType = 'asmev_cap02'; break;
            case "6": examType = 'asmev_cap06'; break;
            case "7": examType = 'asmev_cap07'; break;
            case "9": examType = 'asmev_cap09'; break;
            case "10": examType = 'asmev_cap10'; break;
            case "23": examType = 'asmev_cap23'; break;
            default: examType = 'asmev_cap01';
        }
    } else if (codeName === 'ASMEPCC2') {
        switch(chapterId) {
            case "101": examType = 'asmepcc2_cap101'; break;
            case "201": examType = 'asmepcc2_cap201'; break;
            case "206": examType = 'asmepcc2_cap206'; break;
            case "209": examType = 'asmepcc2_cap209'; break;
            case "210": examType = 'asmepcc2_cap210'; break;
            case "211": examType = 'asmepcc2_cap211'; break;
            case "212": examType = 'asmepcc2_cap212'; break;
            case "304": examType = 'asmepcc2_cap304'; break;
            case "305": examType = 'asmepcc2_cap305'; break;
            case "306": examType = 'asmepcc2_cap306'; break;
            case "501": examType = 'asmepcc2_cap501'; break;
            case "502": examType = 'asmepcc2_cap502'; break;

            default: examType = 'asmepcc2_cap201';
        }
    }
    
    // Cargar el examen en el contenedor
    await loadExam(examType);
}

// Función para cargar el examen en el contenedor
async function loadExam(examType) {
    const examContainer = document.getElementById('exam-container');
    
    // Verificar si el contenedor existe
    if (!examContainer) {
        console.error('El contenedor del examen no existe. Asegúrate de que haya un elemento con id="exam-container" en el HTML.');
        alert('Error: No se encontró el contenedor del examen. Por favor, recarga la página e inténtalo de nuevo.');
        return;
    }
    
    try {
        let examData;
        
        try {
            // Construir la ruta del archivo del examen
            const examPath = `./exams/${examType}.js`;
            
            // Cargar dinámicamente el archivo del examen
            const examModule = await import(examPath);
            
            if (!examModule || !examModule.default) {
                throw new Error('El módulo del examen no contiene datos válidos');
            }
            
            examData = examModule.default;
            
        } catch (importError) {
            console.error('Error al importar el examen:', importError);
            
            // Usar examen de respaldo según el tipo
            //examData = getFallbackExam(examType);
        }
        
        // Verificar que los datos del examen sean válidos
        if (!examData || !examData.title || !examData.questions || !Array.isArray(examData.questions)) {
            throw new Error('Los datos del examen no son válidos');
        }
        
        // Crear el HTML del examen
        const examHTML = createExamHTML(examData, examType);
        
        // Insertar el HTML en el contenedor del examen
        examContainer.innerHTML = examHTML;
        
        // Mostrar el contenedor del examen
        examContainer.classList.add('active');
        examLoaded = true;
        
        // Inicializar el examen
        initExam(examData);
        
    } catch (error) {
        console.error('Error al cargar el examen:', error);
        console.error('Mensaje de error:', error.message);
        console.error('Pila de error:', error.stack);
        
        // Mostrar un mensaje de error más detallado
        alert(`Error al cargar el examen: ${error.message}\n\nPor favor, inténtalo de nuevo o contacta al administrador.`);
    }
}

// Función para crear el HTML del examen
function createExamHTML(examData, examType) {
    // Verificar que los datos del examen sean válidos
    if (!examData || typeof examData !== 'object') {
        console.error('Datos del examen inválidos:', examData);
        return '<div class="error">Error: Los datos del examen son inválidos.</div>';
    }
    
    if (!examData.title || typeof examData.title !== 'string') {
        console.error('Título del examen inválido:', examData.title);
        return '<div class="error">Error: El título del examen es inválido.</div>';
    }
    
    if (!examData.questions || !Array.isArray(examData.questions) || examData.questions.length === 0) {
        console.error('Preguntas del examen inválidas:', examData.questions);
        return '<div class="error">Error: Las preguntas del examen son inválidas.</div>';
    }
    
    return `
        <div class="exam-wrapper" id="exam-wrapper">
            <div class="exam-header">
                <div class="exam-title">${examData.title}</div>
                <div class="exam-info">
                    <div class="user-name" id="display-name">Usuario</div>
                    <div class="timer" id="timer">00:00</div>
                </div>
            </div>
            
            <div class="progress-container">
                <div class="progress-bar" id="progress-bar"></div>
            </div>
            <div class="progress-text" id="progress-text">Pregunta 1 de ${examData.questions.length}</div>
            
            <div class="exam-navigation">
                <button class="btn-nav" onclick="openQuestionIndex()">
                    📋 Índice de Preguntas
                </button>
                <button class="btn-nav" onclick="toggleMarkForReview()" id="mark-btn">
                    ⭐ Marcar para Revisar
                </button>
            </div>
            
            <div class="question-container">
                <div class="question" id="question-text">Cargando pregunta...</div>
                <div class="options" id="options-container">
                    <!-- Las opciones se generarán dinámicamente -->
                </div>
            </div>
            
            <div style="margin-top: 30px; display: flex; justify-content: space-between;">
                <button class="btn" id="prev-btn" onclick="prevQuestion()" disabled>Anterior</button>
                <div>
                    <button class="btn" id="next-btn" onclick="nextQuestion()" disabled>Siguiente</button>
                </div>
            </div>
            
            <div style="margin-top: 15px;">
                <button class="btn btn-back" onclick="confirmExit()">Salir del Examen</button>
            </div>
            
            <div style="margin-top: 20px;">
                <button class="back-to-chapter" onclick="backToChapter()">
                    ${currentLanguage === 'en' ? '← Back to Chapter' : '← Volver al Capítulo'}
                </button>
            </div>
        </div>
        
        <!-- Vista del índice de preguntas -->
        <div id="index-view" class="hidden">
            <div class="index-header">
                <h2>Índice de Preguntas</h2>
                <div class="index-legend">
                    <div class="legend-item">
                        <span class="legend-color unanswered"></span>
                        <span>Sin responder</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color answered"></span>
                        <span>Respondida</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color marked"></span>
                        <span>Marcada para revisar</span>
                    </div>
                </div>
            </div>
            
            <div class="index-container" id="index-container">
                <!-- Las preguntas se generarán dinámicamente -->
            </div>
            
            <div class="index-actions">
                <button class="btn" onclick="closeQuestionIndex()">Volver al Examen</button>
                <button class="btn btn-back" onclick="goToUnanswered()">Ir a No Respondidas</button>
                <button class="btn btn-back" onclick="goToMarked()">Ir a Marcadas</button>
            </div>
        </div>
        
        <!-- Vista de resultados -->
        <div id="result-view" class="hidden">
            <h2>Resultados del Examen</h2>
            <div class="result-container">
                <div class="result-score" id="result-score">0%</div>
                <div class="result-message" id="result-message">¡Buen trabajo!</div>
                
                <div class="result-details">
                    <div class="result-item">
                        <div class="result-value" id="correct-answers">0</div>
                        <div class="result-label">Respuestas Correctas</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value" id="incorrect-answers">0</div>
                        <div class="result-label">Respuestas Incorrectas</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value" id="time-spent">00:00</div>
                        <div class="result-label">Tiempo Utilizado</div>
                    </div>
                </div>
                
                <button class="btn" onclick="reviewAnswers()">Revisar Respuestas</button>
                <button class="btn" onclick="restartExam()">Reiniciar Examen</button>
                <button class="btn btn-back" onclick="backToChapter()">Volver al Capítulo</button>
            </div>
        </div>
        
        <!-- Vista de revisión de respuestas -->
        <div id="review-view" class="hidden">
            <h2>Revisión de Respuestas</h2>
            <div class="review-container" id="review-container">
                <!-- Las preguntas y respuestas se generarán dinámicamente -->
            </div>
            
            <div style="margin-top: 30px;">
                <button class="btn btn-back" onclick="backToResults()">Volver a Resultados</button>
            </div>
        </div>
    `;
}

// Función para volver al capítulo
function backToChapter() {
    const examContainer = document.getElementById('exam-container');
    
    // Detener el temporizador si está en ejecución
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Ocultar el contenedor del examen
    examContainer.classList.remove('active');
    examLoaded = false;
}

// Variables globales para el examen
let currentExamData = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = 0;
let timerInterval = null;
let markedForReview = [];

// Función para inicializar el examen
function initExam(examData) {
    currentExamData = examData;
    currentQuestionIndex = 0;
    userAnswers = new Array(examData.questions.length).fill(-1);
    markedForReview = [];
    
    // Iniciar temporizador
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    
    // Cargar primera pregunta
    loadQuestion();
}

// Función para cargar una pregunta
function loadQuestion() {
    const question = currentExamData.questions[currentQuestionIndex];
    
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
    if (currentQuestionIndex === currentExamData.questions.length - 1) {
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
    const progress = ((currentQuestionIndex + 1) / currentExamData.questions.length) * 100;
    
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = 
        `Pregunta ${currentQuestionIndex + 1} de ${currentExamData.questions.length}`;
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
    if (currentQuestionIndex < currentExamData.questions.length - 1) {
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
        backToChapter();
    }
}

// Función para abrir el índice de preguntas
function openQuestionIndex() {
    document.getElementById('exam-wrapper').classList.add('hidden');
    document.getElementById('index-view').classList.remove('hidden');
    renderQuestionIndex();
}

// Función para cerrar el índice de preguntas
function closeQuestionIndex() {
    document.getElementById('index-view').classList.add('hidden');
    document.getElementById('exam-wrapper').classList.remove('hidden');
}

// Función para renderizar el índice de preguntas
function renderQuestionIndex() {
    const indexContainer = document.getElementById('index-container');
    indexContainer.innerHTML = '';
    
    currentExamData.questions.forEach((question, index) => {
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
        
        questionDiv.textContent = `${index + 1}`;
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
    for (let i = startIndex; i < currentExamData.questions.length; i++) {
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
    
    for (let i = 0; i < currentExamData.questions.length; i++) {
        if (userAnswers[i] === currentExamData.questions[i].correct) {
            correctCount++;
        }
    }
    
    const incorrectCount = currentExamData.questions.length - correctCount;
    const percentage = Math.round((correctCount / currentExamData.questions.length) * 100);
    
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
    document.getElementById('exam-wrapper').classList.add('hidden');
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
    userAnswers = new Array(currentExamData.questions.length).fill(-1);
    markedForReview = [];
    
    document.getElementById('result-view').classList.add('hidden');
    document.getElementById('exam-wrapper').classList.remove('hidden');
    
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
    
    currentExamData.questions.forEach((question, index) => {
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

// Configurar botones de idioma con banderas
function setupLanguageButtons() {
    const languageToggle = document.getElementById('language-toggle');
    
    languageToggle.addEventListener('click', () => {
        // Cambiar al otro idioma
        if (currentLanguage === 'en') {
            changeLanguage('es');
        } else {
            changeLanguage('en');
        }
    });
    
    // Cargar el idioma preferido al iniciar la página
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
}

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Actualizar la variable global currentLanguage
    currentLanguage = lang;
    
    // Actualizar la bandera según el idioma
    const flagIcon = document.getElementById('flag-icon');
    if (lang === 'en') {
        flagIcon.src = 'https://flagcdn.com/w40/us.png';
        flagIcon.alt = 'English';
    } else {
        flagIcon.src = 'https://flagcdn.com/w40/es.png';
        flagIcon.alt = 'Español';
    }
    
    // Actualizar el contenido
    updateContent();
    
    // Guardar la preferencia de idioma en localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Configurar el botón de volver al principio
function setupScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    // Mostrar/ocultar el botón según el scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Acción de volver al principio al hacer clic
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// BEGIN PROTECT
(function() {
        'use strict';
        
        // 1. Protección contra clic derecho
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        // 2. Protección contra selección de texto
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
        
        // 3. Protección contra arrastrar imágenes
        document.addEventListener('dragstart', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });
        
        // 4. Protección contra teclas específicas
        document.addEventListener('keydown', function(e) {
            // F12, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+S
            const forbiddenKeys = [
                123, // F12
                (e.ctrlKey || e.metaKey) && 85, // Ctrl+U
                (e.ctrlKey || e.metaKey) && e.shiftKey && 73, // Ctrl+Shift+I
                (e.ctrlKey || e.metaKey) && e.shiftKey && 67, // Ctrl+Shift+C
                (e.ctrlKey || e.metaKey) && 83 // Ctrl+S
            ];
            
            if (forbiddenKeys.includes(e.keyCode) || 
                forbiddenKeys.some(condition => typeof condition === 'function' && condition(e))) {
                e.preventDefault();
                return false;
            }
        });
        
        // 5. Detección de herramientas de desarrollador
        const devtools = {
            open: false,
            orientation: null
        };
        
        const threshold = 160;
        
        setInterval(function() {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    // Las herramientas de desarrollador están abiertas
                    document.body.innerHTML = '<div style="text-align:center;padding:50px;"><h1>Acceso Denegado</h1><p>Las herramientas de desarrollador están deshabilitadas en esta página.</p></div>';
                }
                devtools.open = true;
            } else {
                devtools.open = false;
            }
        }, 500);
        
        // 6. Protección contra impresión
        window.addEventListener('beforeprint', function(e) {
            e.preventDefault();
            alert('La impresión está deshabilitada en esta página.');
        });
        
        // 7. Evitar iframe
        if (window.top !== window.self) {
            window.top.location = window.self.location;
        }
        
        // 8. Añadir marcado de agua
        function addWatermark() {
            const watermark = document.createElement('div');
            watermark.style.position = 'fixed';
            watermark.style.bottom = '10px';
            watermark.style.right = '10px';
            watermark.style.fontSize = '8px';
            watermark.style.color = 'rgba(255,255,255,0.01)';
            watermark.style.zIndex = '9999';
            watermark.style.pointerEvents = 'none';
            watermark.textContent = '© ' + new Date().getFullYear() + ' - Alejandro Plaza - alejandroepg@gmail.com';
            document.body.appendChild(watermark);
        }
        
        addWatermark();
        
        // 9. Deshabilitar consola
        const console = {
            log: function() {},
            warn: function() {},
            error: function() {},
            info: function() {},
            debug: function() {},
            table: function() {},
            trace: function() {},
            dir: function() {},
            dirxml: function() {},
            count: function() {},
            markTimeline: function() {},
            profile: function() {},
            profileEnd: function() {},
            time: function() {},
            timeEnd: function() {},
            timeStamp: function() {},
            clear: function() {},
            assert: function() {},
            group: function() {},
            groupCollapsed: function() {},
            groupEnd: function() {},
            memory: function() {}
        };
        
        // Mensaje de advertencia
        console.log('%c¡Alto ahí!', 'color: red; font-size: 30px; font-weight: bold;');
        console.log('%cEsta página está protegida contra copia.', 'color: blue; font-size: 20px;');
        console.log('%cSi eres el propietario, por favor contacta al administrador.', 'color: green; font-size: 16px;');
    })();
// END PROTECT

document.addEventListener('DOMContentLoaded', function() {
    const readAloudButton = document.getElementById('btn-read-aloud');
    const chapterContent = document.getElementById('chapter-content');
    let isReading = false;
    let utterance = null;
    let synth = window.speechSynthesis;

    // Función para detener la lectura actual
    function stopReading() {
        if (utterance) {
            synth.cancel();
            isReading = false;
            readAloudButton.innerHTML = '<i class="fas fa-volume-up"></i> Leer en voz alta';
        }
    }

    // Función para iniciar la lectura
    function startReading() {
        if (synth.speaking) {
            stopReading();
            return;
        }

        if (chapterContent.textContent.trim() === '') {
            alert('No hay contenido para leer.');
            return;
        }

        utterance = new SpeechSynthesisUtterance(chapterContent.textContent);

        // Obtener voces disponibles
        let voices = synth.getVoices();

        // Filtrar por idioma y preferencia (ej. voz femenina en español)
        let selectedVoice = voices.find(voice => 
            voice.lang.includes('es') && voice.name.includes('Helena') // Windows
        ) || voices.find(voice => 
            voice.lang.includes('es')
        ) || voices.find(voice => 
            voice.lang.includes('en') && voice.name.includes('Samantha') // Mac
        ) || voices.find(voice => 
            voice.lang.includes('en')
        );

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        // Configurar idioma si no se encontró voz específica
        const activeLangButton = document.querySelector('.language-selector button.active');
        if (activeLangButton.id === 'btn-es') {
            utterance.lang = 'es-ES';
        } else {
            utterance.lang = 'en-US';
        }

        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = function() {
            isReading = false;
            readAloudButton.innerHTML = '<i class="fas fa-volume-up"></i> Leer en voz alta';
        };

        synth.speak(utterance);
        isReading = true;
        readAloudButton.innerHTML = '<i class="fas fa-stop"></i> Detener lectura';
    }

    readAloudButton.addEventListener('click', function() {
        if (isReading) {
            stopReading();
        } else {
            startReading();
        }
    });

    // Detener la lectura si el usuario navega a otro capítulo
    document.addEventListener('click', function(e) {
        if (e.target.closest('#chapter-list a')) {
            stopReading();
        }
    });
});

// Obtener elementos del DOM
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];
const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const zoomResetBtn = document.getElementById("zoomReset");

// Variables para el zoom
let currentZoom = 1;
const minZoom = 0.5;
const maxZoom = 4;
const zoomStep = 0.2;

// Variables para el arrastre
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

// Función para abrir modal
function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  resetZoom();
}

// Función para cerrar modal
function closeModal() {
  modal.style.display = "none";
  resetZoom();
}

// Restablecer zoom
function resetZoom() {
  currentZoom = 1;
  updateZoom();
  modalImg.style.transform = `scale(${currentZoom})`;
  modalImg.style.left = '0';
  modalImg.style.top = '0';
}

// Actualizar zoom
function updateZoom() {
  modalImg.style.transform = `scale(${currentZoom})`;
  zoomResetBtn.textContent = Math.round(currentZoom * 100) + '%';
}

// Funciones de zoom
function zoomIn() {
  if (currentZoom < maxZoom) {
    currentZoom += zoomStep;
    updateZoom();
  }
}

function zoomOut() {
  if (currentZoom > minZoom) {
    currentZoom -= zoomStep;
    updateZoom();
  }
}

// Eventos de zoom
zoomInBtn.addEventListener("click", zoomIn);
zoomOutBtn.addEventListener("click", zoomOut);
zoomResetBtn.addEventListener("click", resetZoom);

// Zoom con rueda del mouse
modalImg.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    zoomIn();
  } else {
    zoomOut();
  }
});

// Funcionalidad de arrastre
modalImg.addEventListener('mousedown', (e) => {
  if (currentZoom > 1) {
    isDragging = true;
    startX = e.pageX - modalImg.offsetLeft;
    startY = e.pageY - modalImg.offsetTop;
    modalImg.style.cursor = 'grabbing';
  }
});

modalImg.addEventListener('mouseleave', () => {
  isDragging = false;
  modalImg.style.cursor = 'grab';
});

modalImg.addEventListener('mouseup', () => {
  isDragging = false;
  modalImg.style.cursor = 'grab';
});

modalImg.addEventListener('mousemove', (e) => {
  if (!isDragging || currentZoom <= 1) return;
  e.preventDefault();
  const x = e.pageX - modalImg.offsetLeft;
  const y = e.pageY - modalImg.offsetTop;
  const walkX = (x - startX) * 1; // Velocidad de arrastre horizontal
  const walkY = (y - startY) * 1; // Velocidad de arrastre vertical
  modalImg.style.left = `${walkX}px`;
  modalImg.style.top = `${walkY}px`;
});

// Delegación de eventos para imágenes existentes y futuras
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('figure-image')) {
    openModal(event.target);
  }
});

// Eventos para cerrar el modal
closeBtn.addEventListener("click", closeModal);

// Cerrar al hacer clic fuera de la imagen
modal.addEventListener("click", function(event) {
  if (event.target === modal || event.target.classList.contains('zoom-container')) {
    closeModal();
  }
});

// Cerrar con tecla ESC
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }

});

