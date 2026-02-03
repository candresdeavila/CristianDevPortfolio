import urbanStyle from "../assets/img-projects/CreditCardApp.png";
import imgNote from "../assets/img-projects/TicketGenerator.png";
import ReactEcommerce from "../assets/img-projects/BrowserExtensionManagerApp.png";
import VintageTone from "../assets/img-projects/Rickandmortyapp.png";

export const proyectos = [
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
    imagen: urbanStyle.src,
    tecnologias: ["Javascript", "Tailwind", "RenderForm", "Validations"],
    demo: "https://vite-project-cdn-interactive-card-d.vercel.app/",
    codigo: "https://github.com/candresdeavila/vite-project-cdn-interactive-card-details-form-main.git",
  },
  {
    titulo: "Conference Ticket Generator",
    imagen: imgNote.src,
    tecnologias: ["Javascript", "Tailwind", "RenderForm", "Validations"],
    demo: "https://conference-ticket-generator-main-eta.vercel.app/",
    codigo: "https://github.com/candresdeavila/conference-ticket-generator-main.git",
  },
];
