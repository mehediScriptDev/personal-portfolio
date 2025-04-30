import { motion } from "framer-motion";
import {
  GrCss3,
  GrGithub,
  GrHtml5,
  GrJs,
  GrReactjs,
} from "react-icons/gr";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";
import { IoIosDoneAll } from "react-icons/io";
import { DiResponsive } from "react-icons/di";

const Skills = () => {
  return (
    <section className="xl:min-h-screen mt-11" data-aos="fade-up">
      <h1 className="text-left text-3xl font-bold">Skills</h1>
      <p className="text-highlight font-bold">2024-2025</p>
      <div className="grid grid-cols-1 md:grid-cols-12  justify-center items-center gap-y-3 gap-3">
        <div className="w-11/12 mx-auto border-2 border-highlight mt-3 col-span-6">
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">Responsive design <DiResponsive className="text-3xl"/></span>{" "}
              <p>99%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={99}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">Clean Code <IoIosDoneAll className="text-3xl"/></span>{" "}
              <p>99%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={99}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">
                Firebase <BiLogoFirebase className="text-3xl" />
              </span>{" "}
              <p>70%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={70}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">
                MongoDB <BiLogoMongodb className="text-3xl" />
              </span>{" "}
              <p>70%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={70}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">
                Github <GrGithub className="text-3xl"></GrGithub>
              </span>{" "}
              <p>60%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={60}
              max="100"
            ></progress>
          </div>

          
        </div>

        <div className="w-11/12 mx-auto border-2 border-highlight mt-3 col-span-6">
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">
                HTML5 <GrHtml5 className="text-3xl"></GrHtml5>
              </span>{" "}
              <p>90%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={90}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">
                Css3 <GrCss3 className="text-3xl"></GrCss3>
              </span>{" "}
              <p>70%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={70}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">
                TailwindCss <RiTailwindCssLine className="text-3xl" />
              </span>{" "}
              <p>90%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={90}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">
                JavaScript <GrJs className="text-3xl"></GrJs>
              </span>{" "}
              <p>60%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={60}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-5 my-3">
            <div className="flex justify-between ">
              <span className="flex gap-1 items-center">
                React js <GrReactjs className="text-3xl"></GrReactjs>
              </span>{" "}
              <p>60%</p>
            </div>
            <progress
              className="progress progress-highlight text-highlight "
              value={60}
              max="100"
            ></progress>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
