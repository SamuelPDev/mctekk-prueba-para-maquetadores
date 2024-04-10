import GameControllerIcon from "../assets/build-ico.png";
import DollarSignIcon from "../assets/glass.png";
import WarrantyIcon from "../assets/2year-ico.png";
import GearsIcon from "../assets/shipping-ico.png";

const InformativeSections = () => {
  const sections = [
    {
      icon: GameControllerIcon,
      title: "TAILORED FOR GAMES",
      description:
        "We've done the research and our algorithm takes care of the rest.",
      link: "LEARN MORE",
    },
    {
      icon: DollarSignIcon,
      title: "TRANSPARENT PRICING",
      description:
        "Customize your build with our curated parts. With straightforward pricing and a flat $99 assembly fee.",
      link: "LEARN MORE",
    },
    {
      icon: WarrantyIcon,
      title: "ALL-IN-ONE WARRANTY",
      description:
        "All components under one warranty plan – NZXT will manage any problems for you.",
      link: "LEARN MORE",
    },
    {
      icon: GearsIcon,
      title: "48-HOUR TURNAROUND",
      description: "Get in the game quickly.",
      link: "LEARN MORE",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-500">
      {sections.map((section, index) => (
        <article
          key={index}
          className="bg-gray-500 text-white p-4 rounded-lg space-y-4 m-4"
        >
          <figure className="flex justify-center">
            <img src={section.icon} alt={section.title} className="w-16 h-16" />
          </figure>
          <h2 className="text-xl font-bold text-center">{section.title}</h2>
          <p className="text-center">{section.description}</p>
          <a href="#" className="text-white text-center font-bold block">
            {section.link}
          </a>
        </article>
      ))}
    </section>
  );
};

export default InformativeSections;
