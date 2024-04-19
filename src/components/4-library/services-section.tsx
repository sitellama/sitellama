function ServicesSection() {
  // Define service data
  const services = [
    {
        imageUrl: "src/assets/smileyface.svg",
        title: "Branding",
        description: "Lorem ipsum dolor sit amet, #brands."
    },
    {
        imageUrl: "src/assets/lightning-bolt.svg",
        title: "Hosting",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        imageUrl: "src/assets/lightbulb.png",
        title: "Web Design",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        imageUrl: "src/assets/idea.png",
        title: "Web Development",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        imageUrl: "src/assets/gears.png",
        title: "Maintenence",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        imageUrl: "src/assets/smileyface.svg",
        title: "Site Revamp",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
      
  ];

  // ServiceCard component
  const ServiceCard = ({ imageUrl, title, description }) => (
    <a href="#" className="shadow-2xl relative rounded-lg">
      <div className="h-full relative shadow-2x1 shadow-purple-900 overflow-hidden group">
        <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-purple-900 transition-all ease-in-out duration-500">
          <div className="w-3/6 h-full p-3 relative">
            <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
              <h2 className="text-2xl font-bold text-white mb-0 pb-1">{title}</h2>
              <p className="text-lg font-light text-white">{description}</p>
            </div>
          </div>
        </div>
        <img src={imageUrl} className="w-full z-0 h-full object-fill example" alt="Service" />
      </div>
    </a>
  );

  return (
    <section className="sm:py-12 lg:py-16 z-40 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light text-black sm:text-4xl lg:text-5xl">
          What can{' '}
          <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-500 lg:inline">
            Site Llama
          </span>{' '}
          can do for you!
        </h2>
        <p className="mb-20 text-lg text-gray-900">
          We make your ideas with a whole Llama love!
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 rounded">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
