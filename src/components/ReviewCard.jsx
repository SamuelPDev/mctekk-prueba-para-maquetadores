import pcg from "../assets/PCG_Logo_HiRes.jpg";
import kotaku from "../assets/logo_site_kotaku.png";

const reviews = [
  {
    logo: pcg,
    quote: "Offering real-world performance data is a great idea, and makes the process of ordering a PC much less abstract for newcomers than pick...",
  },
  {
    logo: kotaku,
    quote: "BLD removes all the guesswork when it comes to building the perfect gaming PC for YOU. Their machines are fast, beautiful, and competitive...",
  },
  {
    logo: pcg,
    quote: "There's something lovely about having a PC that comes with a set of guaranteed predicted frames-per-second targets for the games i planned...",
  },
  {
    logo: kotaku,
    quote: "This is certainly a very neat idea, and the company is putting its money where its mouth is regarding the frame-rate estimations.",
  },
];

const ReviewCard = () => {
  return (
    <section className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {reviews.map((review) => (
        <article
          key={review.quote}
          className="grid grid-cols-1 text-white p-8 rounded items-center justify-center"
        >
          <figure className="p-2 rounded flex flex-col items-center">
            <img src={review.logo} alt="Logo" className="w-24 h-10 mb-8" />
          </figure>
          <p className="text-center">{review.quote}</p>
        </article>
      ))}
    </section>
  );
};

export default ReviewCard;
