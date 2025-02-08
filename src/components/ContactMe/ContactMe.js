import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaMobileAlt, FaMedium } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const ContactTile = ({ icon: Icon, title, content, href }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/20 transition-colors duration-300">
    <Icon className="text-4xl mb-3 text-white" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/90 hover:text-white transition-colors duration-300 underline-offset-2 hover:underline"
      >
        {content}
      </a>
    ) : (
      <p className="text-white/90">{content}</p>
    )}
  </div>
);

const ContactMe = () => {
  const contactInfo = [
    {
      icon: FaLocationDot,
      title: "Location",
      content: "San Francisco, California",
    },
    {
      icon: MdEmail,
      title: "Email",
      content: "lainey.code@gmail.com",
      href: "mailto:lainey.code@gmail.com",
    },
    {
      icon: FaGithub,
      title: "Github",
      content: "lainey1",
      href: "https://github.com/lainey1",
    },
    {
      icon: CiLinkedin,
      title: "LinkedIn",
      content: "laineypad",
      href: "https://www.linkedin.com/in/laineypad",
    },
    {
      icon: FaMobileAlt,
      title: "Phone",
      content: "415-610-1885",
      href: "tel:415-610-1885",
    },
    {
      icon: FaMedium,
      title: "Medium",
      content: "@laineycodes",
      href: "https://medium.com/@laineycodes",
    },
  ];

  return (
    <section className="bg-purple-600 py-16" id="contact-me-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Cool
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            I'm always open to discussing innovative projects and bringing
            creative ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <ContactTile
              key={index}
              icon={contact.icon}
              title={contact.title}
              content={contact.content}
              href={contact.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
