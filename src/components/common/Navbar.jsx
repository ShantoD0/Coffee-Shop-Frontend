import backgroundImage from '../../assets/15.jpg'

function Navbar() {
  return (
    <div style={{background:`url(${backgroundImage})`}} className="bg-center navbar bg-contain flex justify-center items-center">
      <div className="flex justify-center items-center gap-4">
        <img width='75px' src="./more/logo1.png" alt="" />
        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white">Espresso Emporium</h1>
      </div>
    </div>
  );
}

export default Navbar;
