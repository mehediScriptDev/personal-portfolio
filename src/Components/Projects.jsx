import profie from '../images/profile.jpg'


const Projects = () => {
  return (
    <section className="min-h-screen mt-10">
      <h1 className="text-left text-3xl font-bold">Projects</h1>
      <p className="text-highlight font-bold">All</p>
      <div className='flex justify-center'>
      <div className="bg-[#141927]  text-white rounded-2xl overflow-hidden shadow-lg max-w-sm">
        <div className="relative">
          <img
            src={profie}
            alt="TaskFlow preview"
            className="w-full object-cover"
          />
        </div>
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Travel Guru</h2>
          <p className="text-sm text-gray-300">
            A Travel agency .
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
              React
            </span>
            <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
              Tailwind
            </span>
            <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
              Firebase
            </span>
            <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
              Private Route
            </span>
          </div>
          <div className="flex gap-4">
            <button className="bg-highlight hover:bg-white hover:text-highlight duration-300 btn text-white font-bold px-4 py-2 rounded-lg">
            Live Demo
            </button>
            <button
              variant="outline"
              className="btn text-white hover:bg-highlight duration-200 border-highlight  border-2 font-bold px-4 py-2 rounded-full"
            >
              {"</>"} Code
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
