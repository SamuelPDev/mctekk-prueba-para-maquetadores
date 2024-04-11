import pubg from "../assets/Player-Unknown-Battlegrounds-Logo.png";
import ninja from "../assets/Group-99.png";

const Topics = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <div className="flex flex-col w-full aspect-video align-items-center p-4  bg-cover bg-center bg-[url('../assets/Group9.jpg')]">
        <h1 className=" text-2xl text-white text-center">
          NINJAS FORNITE BUILD
        </h1>
        <button className=" py-2 px-4 text-white hover:text-gray-300 ">
          LEARN MORE &gt;
        </button>

        <img src={ninja} alt="NINJA" className="w-3/4 h-auto self-center mt-4" />
      </div>
      <div className="flex flex-col w-full aspect-video align-items-center p-4  bg-cover bg-center bg-[url('../assets/Group9.jpg')]">
        <h1 className=" text-2xl text-white text-center">
          LIMITED EDITION PUBG CASE
        </h1>
        <button className=" py-2 px-4 text-white hover:text-gray-300 ">
          LEARN MORE &gt;
        </button>

        <img src={pubg} alt="PUBG" className="w-3/4 h-auto self-center mt-4" />
      </div>
    </div>
  );
};

export default Topics;
