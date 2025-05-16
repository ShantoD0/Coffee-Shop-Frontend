import backgroundImage from '../../assets/3.png'


function Hero() {
  return (
    <div
      className="hero min-h-[80vh] text-white grid md:grid-cols-2 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content md:col-start-2 text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn btn-primary hover:bg-transparent hover:text-white hover:border-white outline-transparent hover:shadow-none text-black">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
