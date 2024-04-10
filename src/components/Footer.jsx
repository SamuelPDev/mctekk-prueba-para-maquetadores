const Footer = () => {
  const sections = {
    PRODUCTS: [
      "Cases",
      "Cooling",
      "Motherboards",
      "Lighting",
      "Accessories",
      "Power",
    ],
    "HOW TO": ["Guides", "Blog", "Build Galleries", "Join Team NZXT"],
    CONTACT: [
      "Contact Us",
      "Customer Service",
      "Create a Ticket",
      "Company",
      "Founder Q&A",
      "Careers",
      "News",
    ],
    STORE: [
      "Find a Retailer",
      "Warranty",
      "Shipping & Deliveries",
      "Returns & Exchanges",
    ],
    "PC MONITORING": [
      "CAM Support",
      "Give Feedback",
      "Change Log",
      "Cam Powered Products",
      "Download",
    ],
    "BLD SERVICES": [
      "BLD",
      "What is BLD",
      "Customer Reviews",
      "Support FAQ",
      "Customer Support",
      "Create a ticket",
      "Warranty",
      "Shipping & Deliveries",
      "Returns & Exchanges",
      "Refurbished Builds",
    ],
  };

  return (
    <footer className="bg-gray-800 text-white p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {Object.entries(sections).map(([sectionTitle, items]) => (
        <section key={sectionTitle} className="text-left">
          <h2 className="font-bold mb-2">{sectionTitle}</h2>
          <ul className="gap-2">
            {items.map((item) => (
              <li key={item} className="text-sm mb-1 hover:text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </footer>
  );
};

export default Footer;