// ===============================================
// INTERNACIONALIZACIÓN (i18n) - ENFOQUE HÍBRIDO
// Traduce estructura y títulos, contenido detallado en español
// ===============================================

const translations = {
  es: {
    // NAVEGACIÓN
    nav_home: "Inicio",
    nav_profile: "Perfil",
    nav_projects: "Proyectos",
    nav_interests: "Intereses",
    skip_to_content: "Saltar al contenido principal",
    
    // BREADCRUMBS
    breadcrumb_home: "Inicio",
    breadcrumb_profile: "Perfil",
    breadcrumb_projects: "Proyectos",
    breadcrumb_interests: "Intereses",
    
    // FOOTER
    contact: "Contacto",
    last_updated: "Última actualización",
    
    // INDEX - HERO
    hero_greeting: "Hola, soy",
    hero_title: "Desarrollador Web Full Stack",
    hero_tagline: "Especializado en crear aplicaciones web robustas con .NET, Angular y bases de datos empresariales",
    hero_cta_projects: "Ver Proyectos",
    hero_cta_profile: "Mi Perfil",
    
    // INDEX - ABOUT BRIEF
    about_brief_title: "Sobre Mí",
    about_brief_text: "Soy desarrollador web con experiencia en el diseño y desarrollo de aplicaciones empresariales. Me apasiona crear soluciones eficientes y escalables que resuelvan problemas reales. Actualmente cursando el Master en Ingeniería Web en la Universidad de Oviedo, combino mi experiencia profesional con formación continua en las últimas tecnologías web.",
    about_brief_text2: "Mi enfoque está en el desarrollo full stack, con especialización en tecnologías .NET, frameworks frontend modernos y gestión de bases de datos Oracle y SQL Server.",
    
    // INDEX - FEATURED PROJECTS
    featured_projects_title: "Proyectos Destacados",
    view_all_projects: "Ver todos →",
    project_ecommerce_title: "Plataforma E-Commerce",
    project_ecommerce_desc: "Sistema completo de comercio electrónico con gestión de inventario, carrito de compras y procesamiento de pagos.",
    project_task_title: "Gestor de Tareas Colaborativo",
    project_task_desc: "Aplicación web para gestión de proyectos y tareas en equipo, con asignación de responsabilidades y seguimiento en tiempo real.",
    project_analytics_title: "Dashboard Analítico",
    project_analytics_desc: "Panel de control interactivo para visualización de datos empresariales con gráficos dinámicos y reportes personalizables.",
    learn_more: "Más información",
    
    // INDEX - SKILLS
    skills_showcase_title: "Tecnologías y Herramientas",
    skills_showcase_intro: "Experiencia profesional en tecnologías modernas de desarrollo web",
    view_all_skills: "Ver todas las habilidades",
    
    // INDEX - CTA
    cta_title: "¿Trabajamos juntos?",
    cta_text: "Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme para discutir proyectos o ideas.",
    cta_email: "Enviar Email",
    cta_linkedin: "LinkedIn",
    
    // PERFIL - SOBRE MÍ
    profile_title: "Perfil Profesional",
    about_me_title: "Sobre mí",
    about_me_bio: "Soy un desarrollador web apasionado por crear soluciones digitales eficientes y elegantes. Con experiencia en desarrollo full-stack, me especializo en tecnologías .NET y frameworks JavaScript modernos. Mi enfoque combina sólidos conocimientos técnicos con una constante búsqueda de mejores prácticas y nuevas tecnologías.",
    about_me_bio2: "Actualmente curso el Máster en Ingeniería Web en la Universidad de Oviedo, donde profundizo mis conocimientos en arquitecturas web modernas, usabilidad y accesibilidad. Me motiva trabajar en proyectos desafiantes que tengan un impacto real en los usuarios.",
    
    // PERFIL - INFO PERSONAL
    personal_info_title: "Información Personal",
    name_label: "Nombre:",
    lastname_label: "Apellidos:",
    email_label: "Email:",
    university_label: "Universidad:",
    student_code_label: "Código de estudiante:",
    
    // PERFIL - FORMACIÓN
    education_title: "Formación Académica",
    master_title: "Máster en Ingeniería Web",
    master_institution: "Universidad de Oviedo",
    master_period: "En curso (2025)",
    master_description: "Especialización en tecnologías web modernas, desarrollo frontend y backend, arquitectura de aplicaciones web, usabilidad, accesibilidad y SEO.",
    degree_title: "Ingeniería en Sistemas / Informática",
    degree_institution: "Universidad Francisco de Paula Santander",
    degree_period: "Graduado",
    degree_description: "Formación en fundamentos de programación, estructuras de datos, algoritmos, bases de datos y desarrollo de software.",
    
    // PERFIL - EXPERIENCIA
    experience_title: "Experiencia Profesional",
    experience_intro: "A lo largo de mi carrera he trabajado en diferentes empresas y proyectos, desarrollando habilidades técnicas y profesionales en entornos colaborativos.",
    job_title_senior: "Ingeniero de Desarrollo Senior",
    job_title_fullstack: "Desarrollador Full Stack",
    job_title_junior: "Desarrollador Junior",
    date_january: "Enero",
    date_march: "Marzo",
    date_june: "Junio",
    date_december: "Diciembre",
    date_february: "Febrero",
    date_present: "Actualidad",
    exp_responsibilities: "Responsabilidades principales:",
    exp_achievements: "Logros destacados:",
    exp_technologies: "Tecnologías utilizadas:",
    exp_learnings: "Aprendizajes clave:",
    
    // PERFIL - SKILLS
    skills_summary_title: "Resumen de Habilidades Técnicas",
    skills_category_frontend: "Desarrollo Frontend",
    skills_category_backend: "Desarrollo Backend",
    skills_category_database: "Bases de Datos",
    skills_category_devops: "DevOps & Herramientas",
    
    // PERFIL - CERTIFICACIONES
    certifications_title: "Certificaciones",
    
    // PERFIL - REFERENCIAS
    references_title: "Referencias Profesionales",
    references_intro: "Personas con las que he trabajado y que pueden dar fe de mi desempeño profesional.",
    
    // INTERESES
    interests_title: "Intereses",
    interests_subtitle: "Mis Pasatiempos Favoritos",
    interests_intro: "Fuera del mundo profesional, disfruto de diversas actividades que me ayudan a mantener un equilibrio entre lo técnico y lo personal, aprender constantemente y mantenerme activo.",
    hobby_programming_title: "💻 Programación Personal",
    hobby_programming_text: "La programación no es solo mi carrera, también es mi pasión. En mi tiempo libre trabajo en proyectos personales, experimento con nuevas tecnologías y contribuyo a proyectos open source. Me gusta explorar lenguajes y frameworks fuera de mi stack habitual para ampliar mi perspectiva.",
    favorite_languages: "Lenguajes favoritos:",
    hobby_hiking_title: "🥾 Senderismo y Naturaleza",
    hobby_hiking_text: "Me encanta estar en contacto con la naturaleza. El senderismo me permite desconectar de la tecnología, ejercitarme y disfrutar de paisajes increíbles. Es mi forma de recargar energías y encontrar inspiración.",
    favorite_routes: "Rutas favoritas:",
    video_title: "Mi ruta de senderismo soñada: La Ruta del Cares en Picos de Europa",
    video_caption: "La Ruta del Cares es una de las rutas de senderismo más espectaculares de España, ubicada en los Picos de Europa entre Asturias y León.",
    hobby_music_title: "🎵 Música",
    hobby_music_text: "La música es mi compañera constante, tanto cuando programo como cuando me relajo. Disfruto de una gran variedad de géneros y siempre estoy descubriendo nuevos artistas.",
    favorite_genres: "Géneros favoritos:",
    hobby_reading_title: "📚 Lectura",
    hobby_reading_text: "Leo tanto literatura técnica como ficción. Me interesan especialmente los libros sobre arquitectura de software, metodologías ágiles y desarrollo personal. En ficción, disfruto de la ciencia ficción y las novelas de suspense.",
    favorite_books: "Libros recomendados:",
    hobby_learning_title: "🎓 Aprendizaje Continuo",
    hobby_learning_text: "Dedico tiempo regularmente a aprender nuevas tecnologías y mejorar mis habilidades. Tomo cursos online, participo en webinars y sigo a líderes técnicos en redes sociales para mantenerme actualizado con las últimas tendencias en desarrollo web.",
    
    // PROYECTOS
    projects_title: "Proyectos desarrollados",
    portfolio_title: "Portfolio de Proyectos",
    portfolio_intro: "Aquí puedes ver algunos de los proyectos en los que he trabajado durante mi formación y tiempo libre:",
    technologies: "Tecnologías:",
    description: "Descripción:",
    highlights: "Características destacadas:",
    status: "Estado:",
    status_completed: "Terminado",
    project_blog_title: "Blog Personal",
    project_processor_title: "Procesador Estadístico",
    project_validator_title: "Validador y Extractor",
    project_analyzer_title: "Analizador Semántico"
  },
  
  en: {
    // NAVIGATION
    nav_home: "Home",
    nav_profile: "Profile",
    nav_projects: "Projects",
    nav_interests: "Interests",
    skip_to_content: "Skip to main content",
    
    // BREADCRUMBS
    breadcrumb_home: "Home",
    breadcrumb_profile: "Profile",
    breadcrumb_projects: "Projects",
    breadcrumb_interests: "Interests",
    
    // FOOTER
    contact: "Contact",
    last_updated: "Last updated",
    
    // INDEX - HERO
    hero_greeting: "Hi, I'm",
    hero_title: "Full Stack Web Developer",
    hero_tagline: "Specialized in building robust web applications with .NET, Angular and enterprise databases",
    hero_cta_projects: "View Projects",
    hero_cta_profile: "My Profile",
    
    // INDEX - ABOUT BRIEF
    about_brief_title: "About Me",
    about_brief_text: "I am a web developer with experience in designing and developing enterprise applications. I am passionate about creating efficient and scalable solutions that solve real problems. Currently pursuing a Master's in Web Engineering at the University of Oviedo, I combine my professional experience with continuous training in the latest web technologies.",
    about_brief_text2: "My focus is on full stack development, with specialization in .NET technologies, modern frontend frameworks and Oracle and SQL Server database management.",
    
    // INDEX - FEATURED PROJECTS
    featured_projects_title: "Featured Projects",
    view_all_projects: "View all →",
    project_ecommerce_title: "E-Commerce Platform",
    project_ecommerce_desc: "Complete e-commerce system with inventory management, shopping cart and payment processing.",
    project_task_title: "Collaborative Task Manager",
    project_task_desc: "Web application for project and team task management, with responsibility assignment and real-time tracking.",
    project_analytics_title: "Analytics Dashboard",
    project_analytics_desc: "Interactive control panel for business data visualization with dynamic charts and customizable reports.",
    learn_more: "Learn more",
    
    // INDEX - SKILLS
    skills_showcase_title: "Technologies and Tools",
    skills_showcase_intro: "Professional experience in modern web development technologies",
    view_all_skills: "View all skills",
    
    // INDEX - CTA
    cta_title: "Let's work together?",
    cta_text: "I'm open to new opportunities and collaborations. Feel free to contact me to discuss projects or ideas.",
    cta_email: "Send Email",
    cta_linkedin: "LinkedIn",
    
    // PROFILE - ABOUT ME
    profile_title: "Professional Profile",
    about_me_title: "About Me",
    about_me_bio: "I am a web developer passionate about creating efficient and elegant digital solutions. With experience in full-stack development, I specialize in .NET technologies and modern JavaScript frameworks. My approach combines solid technical knowledge with a constant pursuit of best practices and new technologies.",
    about_me_bio2: "I am currently pursuing a Master's in Web Engineering at the University of Oviedo, where I deepen my knowledge in modern web architectures, usability and accessibility. I am motivated to work on challenging projects that have a real impact on users.",
    
    // PROFILE - PERSONAL INFO
    personal_info_title: "Personal Information",
    name_label: "Name:",
    lastname_label: "Last name:",
    email_label: "Email:",
    university_label: "University:",
    student_code_label: "Student code:",
    
    // PROFILE - EDUCATION
    education_title: "Academic Background",
    master_title: "Master's in Web Engineering",
    master_institution: "University of Oviedo",
    master_period: "In progress (2025)",
    master_description: "Specialization in modern web technologies, frontend and backend development, web application architecture, usability, accessibility and SEO.",
    degree_title: "Systems Engineering / Computer Science",
    degree_institution: "Francisco de Paula Santander University",
    degree_period: "Graduated",
    degree_description: "Training in programming fundamentals, data structures, algorithms, databases and software development.",
    
    // PROFILE - EXPERIENCE
    experience_title: "Professional Experience",
    experience_intro: "Throughout my career I have worked in different companies and projects, developing technical and professional skills in collaborative environments.",
    job_title_senior: "Senior Development Engineer",
    job_title_fullstack: "Full Stack Developer",
    job_title_junior: "Junior Developer",
    date_january: "January",
    date_march: "March",
    date_june: "June",
    date_december: "December",
    date_february: "February",
    date_present: "Present",
    exp_responsibilities: "Main Responsibilities:",
    exp_achievements: "Key Achievements:",
    exp_technologies: "Technologies Used:",
    exp_learnings: "Key Learnings:",
    
    // PROFILE - SKILLS
    skills_summary_title: "Technical Skills Summary",
    skills_category_frontend: "Frontend Development",
    skills_category_backend: "Backend Development",
    skills_category_database: "Databases",
    skills_category_devops: "DevOps & Tools",
    
    // PROFILE - CERTIFICATIONS
    certifications_title: "Certifications",
    
    // PROFILE - REFERENCES
    references_title: "Professional References",
    references_intro: "People I have worked with who can attest to my professional performance.",
    
    // INTERESTS
    interests_title: "Interests",
    interests_subtitle: "My Favorite Hobbies",
    interests_intro: "Outside the professional world, I enjoy various activities that help me maintain a balance between the technical and personal, learn constantly and stay active.",
    hobby_programming_title: "💻 Personal Programming",
    hobby_programming_text: "Programming is not only my career, it's also my passion. In my free time I work on personal projects, experiment with new technologies and contribute to open source projects. I like to explore languages and frameworks outside my usual stack to broaden my perspective.",
    favorite_languages: "Favorite languages:",
    hobby_hiking_title: "🥾 Hiking and Nature",
    hobby_hiking_text: "I love being in contact with nature. Hiking allows me to disconnect from technology, exercise and enjoy incredible landscapes. It's my way of recharging energies and finding inspiration.",
    favorite_routes: "Favorite routes:",
    video_title: "My dream hiking route: The Cares Route in Picos de Europa",
    video_caption: "The Cares Route is one of the most spectacular hiking routes in Spain, located in the Picos de Europa between Asturias and León.",
    hobby_music_title: "🎵 Music",
    hobby_music_text: "Music is my constant companion, both when I code and when I relax. I enjoy a wide variety of genres and I'm always discovering new artists.",
    favorite_genres: "Favorite genres:",
    hobby_reading_title: "📚 Reading",
    hobby_reading_text: "I read both technical literature and fiction. I'm especially interested in books about software architecture, agile methodologies and personal development. In fiction, I enjoy science fiction and suspense novels.",
    favorite_books: "Recommended books:",
    hobby_learning_title: "🎓 Continuous Learning",
    hobby_learning_text: "I regularly dedicate time to learning new technologies and improving my skills. I take online courses, participate in webinars and follow technical leaders on social networks to keep up with the latest trends in web development.",
    
    // PROJECTS
    projects_title: "Developed Projects",
    portfolio_title: "Projects Portfolio",
    portfolio_intro: "Here you can see some of the projects I have worked on during my training and free time:",
    technologies: "Technologies:",
    description: "Description:",
    highlights: "Featured characteristics:",
    status: "Status:",
    status_completed: "Completed",
    project_blog_title: "Personal Blog",
    project_processor_title: "Statistical Processor",
    project_validator_title: "Validator and Extractor",
    project_analyzer_title: "Semantic Analyzer"
  }
};

let currentLang = localStorage.getItem('language') || 'es';

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('.language-selector button').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  updateLastModifiedDate();
}

function toggleMobileMenu() {
  const nav = document.querySelector('.nav ul');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuIcon = menuToggle?.querySelector('.menu-icon');
  
  if (!nav || !menuToggle) return;
  
  const isShowing = nav.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', isShowing);
  
  if (menuIcon) {
    menuIcon.classList.toggle('active');
  }
}

function closeMobileMenuOnClick() {
  const navLinks = document.querySelectorAll('.nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav ul');
        const menuToggle = document.querySelector('.menu-toggle');
        const menuIcon = menuToggle?.querySelector('.menu-icon');
        
        if (nav) nav.classList.remove('show');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        if (menuIcon) menuIcon.classList.remove('active');
      }
    });
  });
}

function enhanceKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const nav = document.querySelector('.nav ul');
      const menuToggle = document.querySelector('.menu-toggle');
      const menuIcon = menuToggle?.querySelector('.menu-icon');
      
      if (nav && nav.classList.contains('show')) {
        nav.classList.remove('show');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.focus();
        }
        if (menuIcon) menuIcon.classList.remove('active');
      }
    }
  });
}

function updateLastModifiedDate() {
  const lastUpdatedElement = document.querySelector('.last-updated time');
  if (lastUpdatedElement) {
    const date = new Date();
    const formattedDate = date.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long'
    });
    lastUpdatedElement.textContent = formattedDate;
  }
}

function applyLanguageOnLoad() {
  const savedLang = localStorage.getItem('language') || 'es';
  changeLanguage(savedLang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguageOnLoad();
  
  document.querySelectorAll('.language-selector button').forEach(btn => {
    btn.addEventListener('click', () => {
      changeLanguage(btn.dataset.lang);
    });
  });
  
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  closeMobileMenuOnClick();
  enhanceKeyboardNavigation();
  updateLastModifiedDate();
  
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
        const nav = document.querySelector('.nav ul');
        const menuToggle = document.querySelector('.menu-toggle');
        const menuIcon = menuToggle?.querySelector('.menu-icon');
        
        if (nav) nav.classList.remove('show');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        if (menuIcon) menuIcon.classList.remove('active');
      }
    }, 250);
  });
  
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(skipLink.getAttribute('href'));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

(function() {
  const savedLang = localStorage.getItem('language') || 'es';
  if (savedLang === 'en') {
    document.documentElement.lang = 'en';
  }
})();
