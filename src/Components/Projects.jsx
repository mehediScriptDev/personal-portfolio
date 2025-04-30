import { Link } from "react-router-dom";
import profie from "../images/travel.png";
import newslater from "../images/dragonNews.png";
import gadget from "../images/Gadget Heaven.png";
import { MdOutlineOpenInNew } from "react-icons/md";
import 'animate.css';

const Projects = () => {
  return (
    <section className="xl:min-h-screen mt-14 pb-8" data-aos="fade-up">
      <h1 className="text-left text-3xl lg:text-4xl font-bold pb-3 animate__animated animate__slideInDown">Projects</h1>
      
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mt-4 mx-auto w-11/12 gap-y-6 items-center gap-3 flex-wrap">
        <div className="col-span-1">
          <div className="bg-[#141927]  text-white rounded-2xl overflow-hidden shadow-lg max-w-sm">
            <div className="relative overflow-hidden w-full h-60">
              <img
                src={profie}
                alt="TaskFlow preview"
                className="w-full object-cover "
              />
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Travel Guru</h2>
              <p className="text-sm text-gray-300">
                A Travel agency.Travel world with us..
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  Firebase
                </span>
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  Private Route
                </span>
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  Responsive
                </span>
              </div>
              <div className="flex gap-4">
                <Link
                  to={"https://simple2-54fd2.firebaseapp.com/"}
                  target="_blank"
                  className="bg-highlight hover:bg-white hover:text-highlight duration-300 btn text-white font-bold px-4 py-2 rounded-full"
                >
                  <MdOutlineOpenInNew /> Live Demo
                </Link>
                <Link
                  to="https://github.com/mehediScriptDev/travel-guru"
                  target="_blank"
                  className="btn text-white hover:bg-highlight duration-200 border-highlight  border-2 font-bold px-4 py-2 rounded-full"
                >
                  {"</>"} Code
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-[#141927]  text-white rounded-2xl overflow-hidden shadow-lg max-w-sm">
            <div className="relative overflow-hidden w-full h-60">
              <img
                src={newslater}
                alt="TaskFlow preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">News later</h2>
              <p className="text-sm text-gray-300 line-clamp-1">
                Only for showcasing API skills
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  API 
                </span>
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  Private Route
                </span>
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                Firebase
                </span>
              </div>
              <div className="flex gap-4">
                <Link
                  to={"https://dragon-news-c4d23.firebaseapp.com/"}
                  target="_blank"
                  className="bg-highlight hover:bg-white hover:text-highlight duration-300 btn text-white font-bold px-4 py-2 rounded-full"
                >
                  <MdOutlineOpenInNew /> Live Demo
                </Link>
                <Link
                  to="https://github.com/mehediScriptDev/dragon-news-later"
                  target="_blank"
                  className="btn text-white hover:bg-highlight duration-200 border-highlight  border-2 font-bold px-4 py-2 rounded-full"
                >
                  {"</>"} Code
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-[#141927]  text-white rounded-2xl overflow-hidden shadow-lg max-w-sm">
            <div className="relative overflow-hidden w-full h-60">
              <img
                src={gadget}
                alt="TaskFlow preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Gadgets Store</h2>
              <p className="text-sm text-gray-300 line-clamp-1">
                Not responsive. Just showcasing API skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  API 
                </span>
                <span className="bg-littlebg text-white text-xs px-2 py-1 rounded">
                  Tailwind
                </span>
                
              </div>
              <div className="flex gap-4">
                <Link
                  to={"/GadegetHeaven"}
                  target="_blank"
                  className="bg-highlight hover:bg-white hover:text-highlight duration-300 btn text-white font-bold px-4 py-2 rounded-full"
                >
                  <MdOutlineOpenInNew /> Live Demo
                </Link>
                <Link
                  to="https://github.com/mehediScriptDev/gadget-heaven"
                  target="_blank"
                  className="btn text-white hover:bg-highlight duration-200 border-highlight  border-2 font-bold px-4 py-2 rounded-full"
                >
                  {"</>"} Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
