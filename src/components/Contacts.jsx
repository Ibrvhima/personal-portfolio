import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Veuillez remplir tous les champs.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c6fbff5e-08bd-4821-9ee2-dfc02fb68164",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "Nouveau message depuis le portfolio",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMessage("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Erreur : " + data.message);
      }
    } catch (error) {
      setStatusMessage("Une erreur est survenue. Veuillez réessayer.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Contactez-moi
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Si vous avez des questions ou souhaitez discuter d'un projet,
            n'hésitez pas à me contacter !
          </p>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
            aria-label="Formulaire de contact"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                <FaUser className="inline-block mr-2 text-blue-500" />
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Votre nom"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                <FaEnvelope className="inline-block mr-2 text-blue-500" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Votre email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                <FaPaperPlane className="inline-block mr-2 text-blue-500" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Votre message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg shadow flex items-center justify-center gap-2 transition ${
                isSubmitting
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              <FaPaperPlane />
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>

            {statusMessage && (
              <p className="text-center text-sm mt-4 text-green-600 font-medium">
                {statusMessage}
              </p>
            )}
          </form>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg mb-6">
            Vous pouvez également me contacter via :
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-4 gap-x-6">
            <a
              href="mailto:ibrahimadialloib300@gmail.com"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <FaEnvelope className="mr-2 text-lg sm:text-xl" />
              Email
            </a>

            <a
              href="tel:+224611537838"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <FaPhoneAlt className="mr-2 text-lg sm:text-xl" />
              Téléphone
            </a>

            <a
              href="https://wa.me/224611537838"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 flex items-center"
            >
              <FaWhatsapp className="mr-2 text-lg sm:text-xl" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
