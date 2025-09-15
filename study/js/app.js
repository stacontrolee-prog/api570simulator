// Estado actual
let currentChapter = null;
let currentLanguage = 'en';

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderChapterList();
    setupLanguageButtons();
});

// Renderizar lista de capítulos
function renderChapterList() {
    const chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = '';
    
    // Obtener todos los capítulos registrados
    const chapters = getChapters();
    
    chapters.forEach(chapter => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="chapter-id">${chapter.id}.</span> ${chapter.title}`;
        li.addEventListener('click', () => loadChapter(chapter.id));
        chapterList.appendChild(li);
    });
}

// Cargar contenido del capítulo
function loadChapter(chapterId) {
    currentChapter = getChapterById(chapterId);
    updateContent();
    
    // Actualizar estado visual
    document.querySelectorAll('#chapter-list li').forEach((li, index) => {
        li.classList.toggle('active', index === chapterId - 1);
    });
}

// Actualizar contenido según idioma
function updateContent() {
    if (!currentChapter) return;
    
    const contentDiv = document.getElementById('chapter-content');
    const title = currentLanguage === 'en' ? currentChapter.title : currentChapter.titleEs;
    const content = currentLanguage === 'en' ? currentChapter.content : currentChapter.contentEs;
    
    if (!content || content.trim() === '') {
        contentDiv.innerHTML = `
            <h1>${title}</h1>
            <div class="chapter-body">
                <p>El contenido de este capítulo aún no está disponible. Por favor, regrese más tarde.</p>
            </div>
        `;
        return;
    }
    
    contentDiv.innerHTML = `
        <h1>${title}</h1>
        <div class="chapter-body">
            ${content}
        </div>
    `;
}

// Configurar botones de idioma
function setupLanguageButtons() {
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    
    btnEn.addEventListener('click', () => {
        currentLanguage = 'en';
        btnEn.classList.add('active');
        btnEs.classList.remove('active');
        updateContent();
    });
    
    btnEs.addEventListener('click', () => {
        currentLanguage = 'es';
        btnEs.classList.add('active');
        btnEn.classList.remove('active');
        updateContent();
    });
}