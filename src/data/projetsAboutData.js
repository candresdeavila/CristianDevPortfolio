import urbanStyle from "../assets/img-projects/DentalBlueLanding.png";
import imgNote from "../assets/img-projects/CreditCardApp.png";
import ReactEcommerce from "../assets/img-projects/BrowserExtensionManagerApp.png";
import VintageTone from "../assets/img-projects/Rickandmortyapp.png";

export const proyectos = [
  {
    titulo: "Dental Blue Landing Page",
    descripcion:
      "Landing page for a dental clinic, showcasing services, team, and contact information. Built with React and Tailwind CSS for a modern, responsive design.",
    imagen: urbanStyle.src,
    tecnologias: ["Javascript", "Tailwind", "RenderForm", "Validations", "Modules"],
    demo: "https://dentalbluesoledad.com/",
    codigo: "https://github.com/candresdeavila/dentalblue.git",
    categoria: "fullstack",
  },
  {
    titulo: "Rick and Morty App",
    imagen: VintageTone.src,
    tecnologias: ["Javascript", "Tailwind", "API", "WebComponents"],
    demo: "https://api-rick-and-morty-cyan.vercel.app/",
    codigo: "https://github.com/candresdeavila/API-Rick-and-Morty.git",
    categoria: "Junior",
  },
  {
    titulo: "Extensions Manager App",
    imagen: ReactEcommerce.src,
    tecnologias: ["Javascript", "Tailwind", "Modules" ,"Components"],
    demo: "https://browser-extensions-manager-ui-ochre.vercel.app/",
    codigo: "https://github.com/candresdeavila/browser-extensions-manager-ui.git",
  },
  {
    titulo: "Credit Card App",
    descripcion: "Descripción breve del proyecto 1.",
    imagen: imgNote.src,
    tecnologias: ["Javascript", "Tailwind", "RenderForm", "Validations"],
    demo: "https://vite-project-cdn-interactive-card-d.vercel.app/",
    codigo: "https://github.com/candresdeavila/vite-project-cdn-interactive-card-details-form-main.git",
  },
];
