import { FaUser, FaBriefcase, FaEnvelope, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-blue-200 via-white to-violet-100  fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Mon Portfolio</h1>

        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <FaBars />
        </button>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-500 flex items-center gap-1">
            <FaUser /> À propos
          </a>
          <a href="#projects" className="hover:text-blue-500 flex items-center gap-1">
            <FaBriefcase /> Projets
          </a>
          <a href="#contact" className="hover:text-blue-500 flex items-center gap-1">
            <FaEnvelope /> Contact
          </a>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 pb-4 overflow-hidden"
          >
            <nav className="flex flex-col gap-4 text-gray-700 font-medium">
              <a href="#about" className="hover:text-blue-500 flex items-center gap-1">
                <FaUser /> À propos
              </a>
              <a href="#projects" className="hover:text-blue-500 flex items-center gap-1">
                <FaBriefcase /> Projets
              </a>
              <a href="#contact" className="hover:text-blue-500 flex items-center gap-1">
                <FaEnvelope /> Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
