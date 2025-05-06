import { motion } from "framer-motion";

const projects = [
  {
    title: "UniGilet",
    description:
      "est une mini application de vente en ligne de gilets scolaires. Elle permet d'afficher une liste de produits avec leurs stocks et leurs prix, et de les ajouter dans un panier dynamique avec gestion des quantités. Le projet est réalisé avec React.js et Bootstrap.",
    image: "/unigilet.png",
    link: "https://unigilet.vercel.app",
    github: "https://github.com/Ibrvhima/unigilet.git",
  },
  {
    title: "Notes Hack",
    description:
      "Une application simple de prise de notes développée avec React.js. Elle permet d’ajouter, modifier, supprimer et vider toutes les notes. Elle inclut également un système de changement de thème de fond.",
    image: "/notehack.png",
    link: "https://hack-note.vercel.app",
    github: "https://github.com/Ibrvhima/note-hack.git",
  },
  {
    title: "Techno Skills",
    description:
      "Techno Skills est une application web intuitive et moderne conçue pour aider les développeurs, étudiants, formateurs et professionnels à organiser, suivre et valoriser leurs compétences techniques.",
    image: "/technoskills.png",
    link: "https://technology-skills.vercel.app",
    github: "https://github.com/Ibrvhima/technology_skills.git",
  },
  {
    title: "Eat-N-Split",
    description:
      "Une application React moderne et légère conçue pour simplifier la gestion des dépenses partagées entre amis. Que ce soit pour un voyage, une colocation ou une sortie entre amis, cette application vous permet de suivre qui a payé quoi, de répartir équitablement les dépenses et de garder une trace claire des soldes entre les participants, le tout à travers une interface simple, fluide et intuitive.",
    image: "/bilt.png",
    link: "https://eat-n-split-eta-two.vercel.app",
    github: "https://github.com/Ibrvhima/eat-n-split.git",
  },

  {
     title: "Techno Skills",
     description:
       "Techno Skills est une application web intuitive et moderne conçue pour aider les développeurs, étudiants, formateurs et professionnels à organiser, suivre et valoriser leurs compétences techniques.",
     image: "/technoskills.png",
     link: "https://technology-skills.vercel.app",
     github: "https://github.com/Ibrvhima/technology_skills.git",
   }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm w-full mx-auto"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-45 p-3 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Voir
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
