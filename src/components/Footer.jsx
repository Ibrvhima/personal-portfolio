import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Texte copyright */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Ibrahima Diallo. Tous droits réservés.
        </p>

        {/* Liens sociaux */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/ton-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahima-diallo-749a8a281/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ibrahimadialloib300@gmail.com"
            className="hover:text-gray-300 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
