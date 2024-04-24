function PricingSection() {
  return (
    <section className="font-sans bg-gray-100">
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <div className="text-center font-semibold">
            <h1 className="text-5xl">
              <span className="text-blue-700 tracking-wide">Site Llama </span>
              <span>Plans</span>
            </h1>
            <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
              Choose a plan that works best for you and
              <br /> your team.
            </p>
          </div>
          <div className="pt-24 flex flex-col gap-4 sm:flex-row">
            {/* Basic Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl hover:scale-105 hover:bg-blue-200 transition-transform">
              <h1 className="text-black font-semibold text-2xl">Basic</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">10</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p>{"You get this"}</p>
                <p>{"You also get this!"}</p>
                <p>{"But also this too!"}</p>
              </div>
            </div>
            {/* Startup Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl hover:scale-105 hover:bg-blue-200 transition-transform relative">
              <h1 className="text-black font-semibold text-2xl">Startup</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">24</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <p>{"This one is cool!"}</p>
                <p>{"You also get this!"}</p>
                <p>{"But also this too!"}</p>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bg-blue-400 bg-opacity-100 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                  Popular
                </p>
              </div>
            </div>
            {/* Enterprise Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl hover:scale-105 hover:bg-blue-200 transition-transform">
              <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">35</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p>{"Woah what a site!"}</p>
                <p>{"You also get this!"}</p>
                <p>{"But also this too!"}</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
