function ServicesSection() {
  // Define service data
  const services = [
    {
        imageUrl: "src/assets/smileyface.svg",
        title: "Branding",
        description: "Lorem ipsum dolor sit amet, #brands."
    },
    {
        imageUrl: "src/assets/smileyface.svg",
        title: "Hosting",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        imageUrl: "src/assets/smileyface.svg",
        title: "Web Design",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        imageUrl: "src/assets/smileyface.svg",
        title: "Web Development",
        description: "Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        imageUrl: "src/assets/smileyface.svg",
        title: "Maintenence",
        description: "Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        imageUrl: "src/assets/smileyface.svg",
        title: "Site Revamp",
        description: "Ut enim ad minim veniam, quis nostrud exercitation"
    },
      
  ];

  // ServiceCard component
  const ServiceCard = ({ imageUrl, title, description }) => (
    <a href="#" className="shadow-3xl relative bg-black rounded-3xl">
      <div className="h-full relative shadow-2x1 shadow-purple-900 overflow-hidden group rounded-3xl bg-red-500">
        <div className="absolute group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 trasition-opacity opacity-0 hover:opacity-100 duration-200">
          <div className="w-3/6 h-full p-3 relative">
            <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
              <h2 className="text-2xl font-bold text-amber-600 mb-0 pb-1">{title}</h2>
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
      <div className="container w-[1000px] mx-auto">
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

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 rounded">
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
