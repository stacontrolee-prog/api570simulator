// Array para almacenar todos los capítulos
const chapters = [];

// Función para registrar un nuevo capítulo
function registerChapter(chapterData) {
    chapters.push(chapterData);
}

// Función para obtener todos los capítulos
function getChapters() {
    return chapters;
}

// Función para obtener un capítulo por ID
function getChapterById(id) {
    return chapters.find(chapter => chapter.id === id);
}