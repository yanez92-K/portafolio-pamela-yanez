// CONFIGURACIÓN: Tu usuario real de GitHub
const GITHUB_USERNAME = "yanez92-K";

// 1. Mapeo exacto de tus proyectos con sus descripciones personalizadas
const TEXTOS_PROYECTOS = {
  MiPrimerSpring:
    "Proyecto inicial de Spring Boot, demostrando la integración de controladores, servicios y repositorios con una base de datos H2 en memoria.",
  MiPrimerJEEEx:
    "Ejercicios introductorios sobre programación en Java EE, enfocados en la implementación de arquitecturas robustas.",
  PrimerProyectoJava:
    "Clases de Java Nativo curso RTD FSJ 0050-1 Kibernum, incluyendo estructuras de datos y algoritmos básicos.",
  "Desafio-Mamma-Mia-Pizzeria":
    "Aplicación frontend desarrollada con React y Vite, enfocada en una experiencia de usuario dinámica, intuitiva y responsive.",
  "bark-and-purr":
    "Plataforma Full Stack para la gestión de productos y servicios para mascotas, integrando frontend, backend y base de datos relacional.",
  EscuelaKenpo:
    "Repositorio principal del proyecto de la Escuela de Kenpo, incluyendo documentación, recursos y código fuente para la gestión de cursos y alumnos.",
};

// Array con los nombres para que el script sepa cuáles buscar
const PROYECTOS_DESTACADOS = Object.keys(TEXTOS_PROYECTOS);

document.addEventListener("DOMContentLoaded", () => {
  // 2. Actualizar año de forma dinámica en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Selección y validación del contenedor de proyectos
  const projectsContainer =
    document.getElementById("github-projects") ||
    document.getElementById("github-projects-grid");

  if (!projectsContainer) {
    console.error(
      "Falta el contenedor HTML (id='github-projects' o 'github-projects-grid')",
    );
    return;
  }

  // Función para normalizar texto y comparar nombres de forma segura sin importar guiones o mayúsculas
  const cleanString = (str) =>
    str ? str.toLowerCase().replace(/[-_\s]/g, "") : "";

  async function fetchSpecificRepos() {
    try {
      // Llamada directa a la API oficial de GitHub
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      );

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const allRepos = await response.json();
      projectsContainer.innerHTML = ""; // Limpia el mensaje de "Cargando..." de inmediato

      // Filtrado de tus repositorios según tu lista personalizada
      const filteredRepos = allRepos.filter((repo) =>
        PROYECTOS_DESTACADOS.some(
          (name) => cleanString(name) === cleanString(repo.name),
        ),
      );

      // Si por alguna razón la API no encuentra coincidencias, cargamos tus repositorios públicos como respaldo
      if (filteredRepos.length === 0) {
        console.warn("Mostrando repositorios de respaldo.");
        allRepos.slice(0, 4).forEach((repo) => filteredRepos.push(repo));
      }

      // Renderizar las tarjetas
      filteredRepos.forEach((repo) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        // Buscar la clave original de tu objeto para extraer la descripción personalizada exacta
        const originalKey = PROYECTOS_DESTACADOS.find(
          (name) => cleanString(name) === cleanString(repo.name),
        );
        const description =
          TEXTOS_PROYECTOS[originalKey] ||
          repo.description ||
          "Proyecto de ingeniería de software.";

        if (repo.name.toLowerCase().includes("kenpo")) {
          projectCard.className = "project-card featured-project";
        }

        // Limpiar el nombre para la vista del usuario (ej: "bark-and-purr" -> "bark and purr")
        let displayName = repo.name.replace(/[-_]/g, " ");

        // Formateo visual estético para proyectos específicos
        if (repo.name === "Desafio-Mamma-Mia-Pizzeria")
          displayName = "Pizzería Mamma Mía";
        if (repo.name === "bark-and-purr")
          displayName = "Marketplace Bark and Purr";

        // Configuración personalizada de Lenguajes y Colores para el portafolio
        const colors = {
          java: "#b07219",
          javascript: "#f1e05a",
          react: "#61dafb",
          spring: "#6db33f",
          html: "#e34c26",
          css: "var(--accent)",
        };

        let currentLanguage = repo.language || "Sin especificar";

        // Forzar tecnologías más representativas que las genéricas de GitHub
        let repoNameLower = repo.name.toLowerCase();

        if (repoNameLower.includes("spring")) {
          currentLanguage = "Spring Boot";
        } else if (repoNameLower.includes("pizzeria")) {
          currentLanguage = "React";
        } else if (repoNameLower.includes("purr")) {
          currentLanguage = "Full Stack (Node/React)";
        } else if (
          repoNameLower.includes("kenpo") ||
          repoNameLower.includes("jeeex") ||
          repoNameLower.includes("java")
        ) {
          currentLanguage = "Java";
        }

        // Extrae la primera palabra en minúsculas para el color (ej: "spring", "react", "full", "java")
        const langKey = currentLanguage.toLowerCase().split(" ")[0];
        const dotColor = colors[langKey] || "var(--accent)";

        projectCard.innerHTML = `
          <div class="project-content">
            <h3>${displayName}</h3>
            <p>${description}</p>
          </div>
          <div class="repo-metadata" style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); margin: 1rem 0; align-items: center;">
            <span class="repo-lang" style="display: inline-flex; align-items: center; gap: 0.4rem;">
              <span class="lang-dot" style="width: 8px; height: 8px; border-radius: 50%; display: inline-block; background-color: ${dotColor};"></span> 
              ${currentLanguage}
            </span>
            <span class="repo-stars">★ ${repo.stargazers_count}</span>
          </div>
          <a href="${repo.html_url}" target="_blank" class="project-link">
            Explorar Repositorio <i class="fab fa-github"></i>
          </a>
        `;
        projectsContainer.appendChild(projectCard);
      }); // <-- Aquí cierra correctamente el bucle de las tarjetas
    } catch (error) {
      console.error("Error cargando los repositorios de GitHub:", error);
      projectsContainer.innerHTML =
        "<p class='subtitle' style='color: #f87171;'>No se pudieron sincronizar los proyectos en este momento. Por favor visita mi GitHub directamente.</p>";
    }
  }

  // Ejecutamos la consulta a GitHub
  fetchSpecificRepos();

  // ==========================================================================
  // 4. Funcionalidad del botón Volver Arriba (Ubicación global y segura)
  // ==========================================================================
  const scrollTopBtn = document.getElementById("scroll-to-top");

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    });
  }
});
