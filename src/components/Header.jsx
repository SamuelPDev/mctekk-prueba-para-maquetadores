import nzxtLogo from "../assets/logo-nzxt-black.png";

const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <img src={nzxtLogo} alt="NZXT" className="w-20" />
      <nav className="flex">
        <button className="text-teal-500 mr-2 hover:underline">LOG IN</button>
        <button className="text-teal-500 hover:underline">SIGN UP</button>
      </nav>
    </header>
  );
};

export default Header;
