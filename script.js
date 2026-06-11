// EFECTO DE ESCRITURA
const textElement = document.querySelector(".typing");
const text = "KAREN CARRILLO";
let index = 0;

function typeEffect() {
    if (!textElement) return;

    textElement.textContent = text.substring(0, index);
    index++;

    if (index > text.length) {
        setTimeout(() => {
            index = 0;
            typeEffect();
        }, 1200);
    } else {
        setTimeout(typeEffect, 180);
    }
}

typeEffect();


// TRADUCCIONES COMPLETAS
const translations = {
    es: {
        pageTitle: "Portafolio Karen Carrillo",
        inicio: "Inicio",
        sobreMi: "Sobre mí",
        intereses: "Interes",
        proyectos: "Proyectos",
        contacto: "Contacto",

        hola: "HOLA, SOY",
        cargo: "SCRUM MASTER | GESTIÓN DE PROYECTOS TECNOLÓGICOS",
        formacionTexto: "(EN FORMACIÓN)",

        acerca: "Acerca de mí",
        nombreCompleto: "Karen Lisbeth Carrillo Lara",
        descripcion1: "Soy estudiante de Ingeniería en Sistemas y Redes Informáticas, con interés en la gestión de proyectos y las metodologías ágiles, especialmente Scrum. Me enfoco en desarrollar habilidades que ayuden a los equipos a trabajar de forma organizada, colaborativa y orientada a resultados.",
        descripcion2: "Me interesa mejorar los procesos de trabajo, fortalecer la comunicación entre los equipos y contribuir a que los proyectos avancen de manera clara y eficiente, mientras continúo fortaleciendo mis habilidades profesionales.",
        descargar: "Descargar CV",

        tituloIntereses: "Mis Intereses",

        gestionProyectos: "Gestión de Proyectos",
        gestionProyectosDesc: "Planificación, organización y seguimiento de proyectos tecnológicos, promoviendo el cumplimiento de objetivos, tiempos y entregables.",

        scrumMaster: "Scrum Master",
        scrumMasterDesc: "Aplicación de metodologías ágiles para facilitar el trabajo en equipo, la comunicación efectiva y la mejora continua.",

        desarrolloWeb: "Desarrollo Web",
        desarrolloWebDesc: "Creación de aplicaciones y sitios web funcionales, accesibles y enfocados en brindar una experiencia de usuario eficiente.",

        innovacionTecnologia: "Innovación y Tecnología",
        innovacionTecnologiaDesc: "Exploración constante de nuevas herramientas, tendencias y soluciones tecnológicas para impulsar la transformación digital.",

        testingSoftware: "Testing de Software",
        testingSoftwareDesc: "Aseguramiento de la calidad mediante pruebas, validaciones y procesos que contribuyan a la entrega de productos confiables.",

        formacionTitulo: "FORMACIÓN",
        formacionDesc: "Estudiante de Ingeniería en Sistemas y Redes Informáticas.",

        tituloProyectos: "EXPERIENCIA - PROYECTOS ACADÉMICOS",

        proyecto1Titulo: "ALBAS SALON - Sitio web para salón de belleza",
        proyecto1Fecha: "Julio 2024 - Diciembre 2024",
        proyecto1Desc: "Sitio web informativo diseñado para presentar los servicios, información de contacto y contenido visual de un salón de belleza.",

        proyecto2Titulo: "FINECONIA - Aplicación web de Finanzas y Economía Familiar",
        proyecto2Fecha: "Febrero 2025 - Diciembre 2025",
        proyecto2Desc: "Aplicación web orientada a la gestión de finanzas familiares, permitiendo el registro de ingresos, gastos y presupuestos para mejorar la organización económica del hogar.",

        rol: "Rol:",
        rolScrum: "Scrum Master",
        actividades: "Actividades realizadas:",
        herramientas: "Herramientas utilizadas:",

        p1Act1: "Planifiqué la estructura y organización del sitio web.",
        p1Act2: "Coordiné el desarrollo del proyecto.",
        p1Act3: "Supervisé el avance del equipo.",
        p1Act4: "Organicé el contenido visual.",

        p2Act1: "Lideré la planificación del sistema.",
        p2Act2: "Coordiné el trabajo del equipo con Scrum.",
        p2Act3: "Definí funcionalidades clave.",
        p2Act4: "Participé en el diseño de la interfaz.",

        proyecto3Titulo: "Calculadora Salarial",
        proyecto3Fecha: "Febrero 2026",
        proyecto3Desc: "Aplicación web desarrollada para calcular el salario de los usuarios, permitiendo estimar ingresos de forma rápida y sencilla.",
        proyecto3Rol: "Desarrolladora",

        p3Act1: "Diseñé y desarrollé la interfaz de la aplicación.",
        p3Act2: "Implementé la lógica para el cálculo del salario.",
        p3Act3: "Realicé pruebas para asegurar el correcto funcionamiento.",

        contactame: "Contáctame",
        nombreContacto: "Nombre completo",
        correoContacto: "Correo",
        asuntoContacto: "Asunto",
        mensajeContacto: "Mensaje",
        enviarContacto: "ENVIAR"

        ,idiomaTexto: "Inglés"
    },

    en: {
        pageTitle: "Karen Carrillo Portfolio",
        inicio: "Home",
        sobreMi: "About me",
        intereses: "interest",
        proyectos: "Projects",
        contacto: "Contact",

        hola: "HELLO, I AM",
        cargo: "SCRUM MASTER | TECHNOLOGY PROJECT MANAGEMENT",
        formacionTexto: "(IN TRAINING)",

        acerca: "About me",
        nombreCompleto: "Karen Lisbeth Carrillo Lara",
        descripcion1: "I am a Systems and Computer Networks Engineering student with an interest in project management and agile methodologies, especially Scrum. I focus on developing skills that help teams work in an organized, collaborative, and results-oriented way.",
        descripcion2: "I am interested in improving work processes, strengthening communication between teams, and contributing to projects moving forward clearly and efficiently while continuing to develop my professional skills.",
        descargar: "Download CV",

        tituloIntereses: "My Interests",

        gestionProyectos: "Project Management",
        gestionProyectosDesc: "Planning, organizing, and monitoring technology projects to ensure objectives, timelines, and deliverables are achieved.",

        scrumMaster: "Scrum Master",
        scrumMasterDesc: "Applying agile methodologies to facilitate teamwork, effective communication, and continuous improvement.",

        desarrolloWeb: "Web Development",
        desarrolloWebDesc: "Creation of functional and accessible websites and web applications focused on delivering an efficient user experience.",

        innovacionTecnologia: "Innovation & Technology",
        innovacionTecnologiaDesc: "Continuous exploration of new tools, trends, and technological solutions to drive digital transformation.",

        testingSoftware: "Software Testing",
        testingSoftwareDesc: "Quality assurance through testing, validations, and processes that contribute to delivering reliable software products.",

        formacionTitulo: "EDUCATION",
        formacionDesc: "Systems and Computer Networks Engineering student.",

        tituloProyectos: "EXPERIENCE - ACADEMIC PROJECTS",

        proyecto1Titulo: "ALBAS SALON - Beauty salon website",
        proyecto1Fecha: "July 2024 - December 2024",
        proyecto1Desc: "Informational website designed to present services, contact information, and visual content for a beauty salon.",

        proyecto2Titulo: "FINECONIA - Family Finance and Economics Web Application",
        proyecto2Fecha: "February 2025 - December 2025",
        proyecto2Desc: "Web application focused on managing family finances, allowing users to record income, expenses, and budgets to improve household financial organization.",

        rol: "Role:",
        rolScrum: "Scrum Master",
        actividades: "Activities performed:",
        herramientas: "Tools used:",

        p1Act1: "Planned the structure and organization of the website.",
        p1Act2: "Coordinated the project development.",
        p1Act3: "Monitored the team’s progress.",
        p1Act4: "Organized the visual content.",

        p2Act1: "Led the planning of the system.",
        p2Act2: "Coordinated the team’s work using Scrum.",
        p2Act3: "Defined key functionalities.",
        p2Act4: "Participated in the interface design.",

        proyecto3Titulo: "Salary Calculator",
        proyecto3Fecha: "February 2026",
        proyecto3Desc: "Web application developed to calculate user salaries, allowing quick and simple income estimation.",
        proyecto3Rol: "Developer",

        p3Act1: "Designed and developed the application interface.",
        p3Act2: "Implemented the salary calculation logic.",
        p3Act3: "Performed testing to ensure proper functionality.",

        contactame: "Contact Me",
        nombreContacto: "Full Name",
        correoContacto: "Email",
        asuntoContacto: "Subject",
        mensajeContacto: "Message",
        enviarContacto: "SEND"

        ,idiomaTexto: "Spanish"
    }
};

const languageBtn = document.getElementById("languageBtn");
const languageIcon = document.getElementById("languageIcon");

let currentLanguage = "es";

function changeLanguage() {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    const t = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-text]").forEach(element => {
        const key = element.getAttribute("data-text");
        if (t[key]) element.textContent = t[key];
    });

    document.title = t.pageTitle;

    languageIcon.src = currentLanguage === "es"
        ? "icono/IDIOMA INGLES.png"
        : "icono/IDIOMA ESPAÑOL.png";

    languageIcon.alt = t.idiomaTexto;
    languageIcon.title = t.idiomaTexto;

    const cvBtn = document.getElementById("cvBtn");

    if (cvBtn) {
        cvBtn.href = currentLanguage === "es"
            ? "cv/CV - Karen Lisbeth Carrillo Lara.pdf"
            : "cv/CV - Karen Lisbeth Carrillo Lara English.pdf";
    }
}

languageBtn.addEventListener("click", changeLanguage);


// MENÚ ACTIVO
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// MODAL DE IMÁGENES
const projectImages = document.querySelectorAll(".project-img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

projectImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
const form = document.getElementById("contactForm");
const mensajeExito = document.getElementById("mensaje-exito");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const datos = new FormData(form);

    try {
        const respuesta = await fetch(
            "https://formsubmit.co/ajax/karencarrillolara1@gmail.com",
            {
                method: "POST",
                body: datos
            }
        );

        const resultado = await respuesta.json();

        if (resultado.success === "true") {
            mensajeExito.style.display = "block";
            form.reset();

            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 5000);
        }
    } catch (error) {
        alert("Ocurrió un error al enviar el mensaje.");
    }
});