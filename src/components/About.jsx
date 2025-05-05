import { motion } from "framer-motion";
import { FaCheckCircle, FaDownload } from "react-icons/fa";


const skills = [
  { tech: "HTML5", logo: "logos/html.png", level: 90 },
  { tech: "CSS3", logo: "logos/css.png", level: 85 },
  { tech: "JavaScript", logo: "logos/javascript.png", level: 80 },
  { tech: "React", logo: "logos/react.png", level: 75 },
  { tech: "Bootstrap", logo: "logos/bootstrap.png", level: 70 },
  { tech: "Tailwind CSS", logo: "logos/tailwind.png", level: 85 },
  { tech: "Git", logo: "logos/git.png", level: 80 },
  { tech: "GitHub", logo: "logos/github.png", level: 85 },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <motion.div
  className="w-52 h-52 md:w-64 md:h-64 rounded-full p-2 bg-white border-4 border-blue-300 shadow-xl"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <img
    src="IA AMU-75.png"
    alt="Portrait d'Ibrahima Diallo"
    className="w-full h-full object-cover rounded-full"
  />
</motion.div>


        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 uppercase text-sm tracking-wider mb-2">
            Développeur Frontend
          </p>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            À propos de moi
          </h2>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Je suis un développeur frontend passionné par la création
            d’interfaces modernes, fluides et intuitives. J’aime transformer les
            idées en réalité digitale à travers React, Tailwind CSS et d'autres
            technologies modernes.
          </p>

          <p className="italic text-gray-600 text-sm mb-6">
            "Mon objectif est de concevoir des expériences utilisateurs fluides
            et accessibles à tous."
          </p>

          <ul className="text-gray-700 mb-8 grid gap-y-2 gap-x-4 sm:grid-cols-2 text-sm">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              React.js & Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              UI/UX Design
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Responsive Web Design
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Git & GitHub
            </li>
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {skills.map(({ tech, logo, level }) => (
              <div key={tech} className="flex items-center gap-4">
                <img
                  src={logo}
                  alt={`Logo ${tech}`}
                  title={tech}
                  className="w-8 h-8 sm:w-10 sm:h-10 shadow-md hover:scale-110 hover:shadow-lg transition-transform"
                />
                <div className="flex-1">
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>{tech}</span>
                    <span className="text-gray-500">{level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/cvde_ibrahima.pdf"
            download
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaDownload />
            Télécharger mon CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
