import imgNote from "../assets/img-projects/TicketGenerator.png";
import urbanStyle from "../assets/img-projects/DentalBlueLanding.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/FaqAccordion.png";
import astroFit from "../assets/img-projects/SunnySideLanding.png";
import Verbenas from "../assets/img-projects/EcommerceProductPage.png";
import ReactEcommerce from "../assets/img-projects/BrowserExtensionManagerApp.png";
import PortfolioDev from "../assets/img-projects/RoomHomePage.png";
import VintageTone from "../assets/img-projects/Rickandmortyapp.png";
import AstroEcommers from "../assets/img-projects/CreditCardApp.png";

export const proyectos = [
  {
    titulo: "Rick and Morty App",
    descripcion:
      "Interactive web application that displays characters from the Rick and Morty API with real-time search, status filtering, and dynamic character detail views. Built with Web Components and client-side routing. Stack: JavaScript (ES6+) · Web Components · HTML · Tailwind CSS · REST API · LocalStorage · Vite",
    imagen: VintageTone.src,
    tecnologias: ["Javascript", "Tailwind", "API", "WebComponents"],
    demo: "https://api-rick-and-morty-cyan.vercel.app/",
    codigo: "https://github.com/candresdeavila/API-Rick-and-Morty.git",
    categoria: "fullstack",
  },
  {
    titulo: "Extensions Manager App",
    descripcion:
      "Browser extension manager web app that allows users to view, enable/disable, and manage their installed browser extensions. Built with modular JavaScript and Tailwind CSS for a responsive UI. Stack: JavaScript (ES6+) · Modules · HTML · Tailwind CSS · Vite",
    imagen: ReactEcommerce.src,
    tecnologias: ["Javascript", "Tailwind", "Express", "Modules"],
    demo: "https://browser-extensions-manager-ui-ochre.vercel.app/",
    codigo: "https://github.com/candresdeavila/browser-extensions-manager-ui.git",
    categoria: "fullstack",
  },
  {
    titulo: "Credit Card App",
    descripcion:
      "Interactive credit card form application that provides real-time visual feedback as users input their card details. Features form validation and dynamic rendering of card information. Stack: JavaScript (ES6+) · HTML · Tailwind CSS · Vite",
    imagen: AstroEcommers.src,
    tecnologias: ["Javascript", "Tailwind", "RenderForm", "Validations"],
    demo: "https://vite-project-cdn-interactive-card-d.vercel.app/",
    codigo: "https://github.com/candresdeavila/vite-project-cdn-interactive-card-details-form-main.git",
    categoria: "frontend",
  },
  {
    titulo: "Conference Ticket Generator",
    descripcion:
      "Web application that generates conference tickets based on user input, including name, event details, and ticket type. Features form validation and dynamic ticket rendering. Stack: JavaScript (ES6+) · HTML · Tailwind CSS · Vite",
    imagen: imgNote.src,
    tecnologias: ["Javascript", "Tailwind", "RenderForm", "Validations"],
    demo: "https://conference-ticket-generator-main-eta.vercel.app/",
    codigo: "https://github.com/candresdeavila/conference-ticket-generator-main.git",
    categoria: "fullstack",
  },
  {
    titulo: "Dental Blue Landing Page",
    descripcion:
      "Landing page for a dental clinic, showcasing services, team, and contact information. Built with React and Tailwind CSS for a modern, responsive design.",
    imagen: urbanStyle.src,
    tecnologias: ["Javascript", "Tailwind", "RenderForm", "Validations", "Modules"],
    demo: "https://dentalblue.vercel.app/",
    codigo: "https://github.com/candresdeavila/dentalblue.git",
    categoria: "fullstack",
  },
  {
    titulo: "Ecommerce Product Page",
    descripcion:
      "E-commerce product page featuring product details, image gallery, and shopping cart functionality. Built with JavaScript modules and Tailwind CSS for a sleek user experience.",
    imagen: Verbenas.src,
    tecnologias: ["Javascript", "Tailwind", "API", "Modules"],
    demo: "https://ecommerce-product-page-main-app.vercel.app/",
    codigo: "https://github.com/candresdeavila/ecommerce-product-page-main-app.git",
    categoria: "fullstack",
  },
  {
    titulo: "Sunnyside Agency Landing Page (practical purpose)",
    descripcion:
      "Landing page for Sunnyside Agency (practical purpose), featuring a modern design with responsive layout and interactive elements. Built with JS Vanilla and Tailwind CSS.",
    imagen: astroFit.src,
    tecnologias: ["Javascript", "Tailwind", "Flex", "Modules"],
    demo: "https://sunnyside-agency-landing-page-main-eta-rose.vercel.app/",
    codigo: "https://github.com/candresdeavila/sunnyside-agency-landing-page-main.git",
    categoria: "frontend",
  },
  {
    titulo: "Faq Accordion Card (practical purpose)",
    descripcion:
      "FAQ accordion card component that allows users to expand and collapse sections to view answers to common questions. Built with React and Tailwind CSS for a clean, user-friendly interface.",
    imagen: mediCare.src,
    tecnologias: ["React", "contextAPI", "tailwind"],
    demo: "https://faq-accordion-main-two-mu.vercel.app/",
    codigo: "https://github.com/candresdeavila/faq-accordion-main.git",
    categoria: "frontend",
  },
  {
    titulo: "Room Home Page (practical purpose)",
    descripcion:
      "Responsive homepage for Room, a modern furniture store, featuring product showcases and promotional sections. Built with JavaScript Vanilla and Tailwind CSS.",
    imagen: PortfolioDev.src,
    tecnologias: ["JavaScript Vanilla"],
    demo: "https://room-homepage-master-dun.vercel.app/",
    codigo:
      "https://github.com/candresdeavila/room-homepage-master.git",
    categoria: "frontend",
  },
/*
  {
    titulo: "Legal Staff",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para estudios jurídicos.",
    imagen: legalWeb.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/legal-staff",
    categoria: "frontend",
  },
  {
    titulo: "Medicare",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para Obras Sociales.",
    imagen: mediCare.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    categoria: "frontend",
  },
  {
    titulo: "AstroFit",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para asesorias fitness.",
    imagen: astroFit.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/GymPage.git",
    categoria: "frontend",
  },
  {
    titulo: "API REST para Ecommerce",
    descripcion:
      "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/ApiRest-Ecommerce.git",
    categoria: "backend",
  },
  {
    titulo: "API REST Vintage Tone App",
    descripcion:
      "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Cloudinary"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/VintageTone-API-REST.git",
    categoria: "backend",
  },
  {
    titulo: "API REST",
    descripcion:
      "API RESTful construida con Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
    categoria: "backend",
  },
  {
    titulo: "PlaniFy",
    descripcion:
      "App Web para organizar tus proyectos, hecha con React + Vite, TypeScript y Tailwind para los estilos.",
    imagen:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    categoria: "frontend",
  },
  {
    titulo: "Verbenas Paisajes",
    descripcion:
      "Pagina estatica desarrollada con Astro y tailwind como reto para una startup.",
    imagen: Verbenas.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    categoria: "frontend",
  },

  {
    titulo: "100 days coding in Js",
    descripcion: "100 proyectos, realizados con HTML, CSS y JavaScript.",
    imagen:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    tecnologias: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    categoria: "frontend",
  },*/
];
