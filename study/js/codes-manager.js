// Objeto para almacenar todos los códigos y sus capítulos
const codes = {};

// Función para registrar un nuevo código
function registerCode(codeName, codeData) {
    //console.log('Registrando código:', codeName);
    codes[codeName] = {
        title: codeData.title,
        titleEs: codeData.titleEs,
        chapters: []
    };
}

// Función para registrar un capítulo en un código específico
function registerChapter(codeName, chapterData) {
    //console.log('Intentando registrar capítulo para código:', codeName);
    //console.log('Datos del capítulo:', chapterData);
    
    // Verificar si codeName es un objeto (error común)
    if (typeof codeName !== 'string') {
        console.error('Error: el nombre del código debe ser una cadena, no un objeto. Valor recibido:', codeName);
        return;
    }
    
    // Verificar si el código existe
    if (!codes[codeName]) {
        console.error(`El código ${codeName} no existe. Creándolo ahora...`);
        codes[codeName] = {
            title: `Código ${codeName}`,
            titleEs: `Código ${codeName}`,
            chapters: []
        };
    }
    
    // Verificar si chapterData es válido
    if (!chapterData || typeof chapterData !== 'object') {
        console.error('Datos de capítulo inválidos:', chapterData);
        return;
    }
    
    if (!chapterData.id) {
        console.error('El capítulo no tiene un ID:', chapterData);
        return;
    }
    
    //console.log('Registrando capítulo:', chapterData.id, 'para código:', codeName);
    codes[codeName].chapters.push(chapterData);
}

// Función para obtener todos los códigos
function getCodes() {
    return Object.keys(codes);
}

// Función para obtener los datos de un código
function getCode(codeName) {
    return codes[codeName] || null;
}

// Función para obtener los capítulos de un código
function getChaptersByCode(codeName) {
    return codes[codeName] ? codes[codeName].chapters : [];
}

// Función para obtener un capítulo por ID en un código específico
function getChapterByCodeAndId(codeName, chapterId) {
    const code = codes[codeName];
    if (code) {
        return code.chapters.find(chapter => chapter.id === chapterId);
    }
    return null;
}