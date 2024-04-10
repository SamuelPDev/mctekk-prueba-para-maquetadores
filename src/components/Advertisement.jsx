import pc from "../assets/H500i_White Black new- hGPU-Purplelight.png";
import bldLogo from "../assets/logo-white.png";
import nzxtLogo from "../assets/logo-nzxt.png";

const Advertisement = () => {
  return (
    <section className="bg-gray-900 text-white p-8 bg-[url('../assets/bg.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <figure className="flex-1 items-center justify-center mb-8 md:mb-0">
          <img src={pc} alt="Gaming PC" className="w-full md:w-2/3 h-auto" />
        </figure>

        <div className="flex-1 ml-8 text-left">
          <header className="flex flex-col">
            <img src={bldLogo} alt="BLD by NZXT" className="w-52 h-26" />
            <div className="flex items-center mt-2">
              <span className="mr-2 text-sm">By</span>
              <img src={nzxtLogo} alt="NZXT" className="w-8 h-4" />
            </div>
          </header>

          <h1 className="text-4xl font-bold mt-4">
            GAMING PC&apos;S MADE SIMPLE
          </h1>

          <p className="mt-2">
            Choose a game, set a budget and we&apos;ll BLD it
          </p>

          <button className="mt-4 px-8 py-2 bg-teal-400 text-white rounded-full">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;


