# 🚀 Portafolio de Pamela Yáñez

Sitio web profesional de **Pamela Yáñez**, desarrolladora de software en formación. Este proyecto centraliza mi marca personal, consolidando mi stack técnico, mi arquitectura de frontend nativo y una vitrina automatizada conectada directamente con mis repositorios públicos de ingeniería de software.

---

## 🎯 Objetivo

Comunicar mi perfil técnico sólido y orientado al detalle, demostrando habilidades avanzadas en:

- Manipulación del DOM.
- Consumo de APIs asíncronas.
- Diseño de interfaces de usuario (UI) atractivas, fluidas y de alto rendimiento.
- Desarrollo frontend moderno utilizando tecnologías web nativas.

---

## 🛠️ Tecnologías

- **HTML5** semántico y estructurado.
- **CSS3 avanzado** utilizando variables nativas, Flexbox, Grid, animaciones cúbicas y sombras multinivel.
- **JavaScript Vanilla (ES6+)** con arquitectura asíncrona (`Async/Await` y `Fetch API`).
- **API Pública de GitHub** para sincronización de datos en tiempo real.
- **SVG nativo** para gráficos y logotipos escalables de alto rendimiento.

> **Nota:** El proyecto es completamente Frontend y no requiere Node.js, npm, frameworks ni procesos de compilación.

---

## 📂 Estructura del Proyecto

```text
portafolio-pamela-yanez/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── img/
    │   └── logo-svg.svg
    └── js/
        └── main.js
```

---

## ✨ Funcionalidades

### 🌙 Interfaz Premium Dark Mode
Paleta de colores basada en tonos pizarra oscuros (`#0f172a`, `#1e293b`) acentuados con un cian vibrante (`#38bdf8`).

### 📬 Sección de Contacto con Relieve
Caja contenedora (`.contact-wrapper`) diseñada con sombras multinivel e interactividad estilo neón al pasar el cursor.

### 🧊 Navbar Frosted Glass
Menú superior con efecto de vidrio esmerilado mediante `backdrop-filter`, integrado cromáticamente con la gama visual del sitio.

### ⬆️ Botón Volver Arriba
Flecha de navegación flotante (*Scroll to Top*) ubicada estratégicamente sobre el borde superior del footer.

### 🔄 Sincronización Inteligente con GitHub
Algoritmo en JavaScript que consume la API de GitHub, normaliza datos y muestra proyectos seleccionados con descripciones personalizadas.

### 🏷️ Inferencia de Stack Tecnológico
Lógica personalizada que reemplaza etiquetas genéricas por tecnologías reales como:

- Spring Boot
- React
- Java
- Java EE

### 📅 Footer Dinámico
Actualización automática del año actual utilizando el objeto `Date` de JavaScript.

---

## 💼 Proyectos Destacados

### 🥋 EscuelaKenpo
Sistema de gestión para escuelas de artes marciales, orientado a la administración de alumnos, cursos y grados.

### ☕ MiPrimerSpring
Aplicación Backend desarrollada con Spring Boot utilizando controladores, servicios y base de datos H2.

### 🐾 Bark & Purr
Plataforma Full Stack orientada al e-commerce y servicios veterinarios.

### 🍕 Desafío Mamma Mía Pizzería
SPA desarrollada con React y Vite enfocada en experiencia de usuario e interacción dinámica.

### ☕ MiPrimerJEEEx / PrimerProyectoJava
Fundamentos sólidos de programación utilizando Java Nativo y Java EE.

---

## ▶️ Ejecutar Localmente

Puedes abrir directamente el archivo `index.html` en tu navegador.

Sin embargo, para asegurar el correcto funcionamiento de las llamadas asíncronas, se recomienda utilizar un servidor local.

### Opción 1: Live Server

Instala la extensión **Live Server** en Visual Studio Code y ejecuta el proyecto.

### Opción 2: Python

Ejecuta el siguiente comando:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

---

## ⚙️ Datos Configurables

La sincronización con GitHub se configura desde:

```javascript
const GITHUB_USERNAME = "yanez92-K";
```

Archivo:

```text
assets/js/main.js
```

---

## 🌐 Enlaces Profesionales

### GitHub
https://github.com/yanez92-K

### LinkedIn
https://linkedin.com/in/pamela-yanez-peredo/

---

## 🚀 Publicar con GitHub Pages

1. Crear un nuevo repositorio en GitHub.
2. Subir el contenido del proyecto respetando la estructura de carpetas.
3. Ir a **Settings → Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Elegir la rama **main** (o **master**) y la carpeta **/** (root).
6. Guardar los cambios.
7. Esperar unos minutos hasta que GitHub genere la URL pública.

---

## 📈 Estado del Proyecto

🟢 **En desarrollo activo**

Proyecto en constante evolución, enfocado en mejorar la experiencia de usuario, la arquitectura frontend y la calidad del código.

---

### 👩‍💻 Autora

**Pamela Yáñez**  
Desarrolladora Full Stack Java Trainee

*"Construyendo soluciones digitales con aprendizaje continuo, creatividad y pasión por la tecnología."*