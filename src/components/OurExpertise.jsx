import HighEndPCImage from "../assets/footer-pc.png";

const OurExpertise = () => {
  return (
    <section className="flex justify-between items-center p-8 flex-col md:flex-row bg-white text-gray-800">
      <div className="flex-1 text-left space-y-4">
        <h1 className="text-4xl font-bold mb-4 uppercase">
          BUILT BY EXPERTS, WITH AN EYE FOR DESIGN
        </h1>
        <p className="text-xl mb-6">
          NZXT has over 12 years of experience developing award -winning,
          high-quality PC components. Using the very best components, assembled
          by highly-trained builders, we can deliver a meticulously crafted
          gaming PC, backed by a comprehensive 2-year warranty.
        </p>
        <button className="bg-teal-400 text-white px-6 py-2 rounded uppercase font-semibold">
          LEARN MORE
        </button>
      </div>
      <figure className="flex flex-1 items-center justify-center mb-8 md:mb-0">
        <img
          src={HighEndPCImage}
          alt="High-end PC built by NZXT"
          className="w-full md:w-2/3 h-auto"
        />
      </figure>
    </section>
  );
};

export default OurExpertise;
