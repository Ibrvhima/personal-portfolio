import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-200 via-white to-violet-200 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-blue-600 text-sm uppercase tracking-wide font-semibold mb-2">
            Développeur Frontend & UI Designer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Salut, je suis <span className="text-blue-600">Ibrahima Diallo</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Je crée des interfaces modernes, performantes et responsives avec React, Tailwind CSS et d'autres technologies innovantes. Passionné par le design et le code.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Me contacter
          </motion.a>

          <div className="flex justify-center md:justify-start items-center gap-5 mt-6">
            {[{
              Icon: FaGithub, link: "https://github.com/tonprofil", label: "GitHub"
            }, {
              Icon: FaLinkedin, link: "https://linkedin.com/in/tonprofil", label: "LinkedIn"
            }, {
              Icon: FaTwitter, link: "https://twitter.com/tonprofil", label: "Twitter"
            }].map(({ Icon, link, label }, index) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 text-2xl transition"
                aria-label={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="IA AMU-75.png"
            alt="Portrait d'Ibrahima Diallo"
            className="w-80 sm:w-96 md:w-[420px] lg:w-[430px] rounded-2xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
