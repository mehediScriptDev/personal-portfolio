import { motion } from "framer-motion";
import { GrReactjs } from "react-icons/gr";

const Skills = () => {
  return (
    <section className="min-h-screen mt-10">
      <h1 className="text-left text-3xl font-bold">Skills</h1>
      <p className="text-highlight font-bold">2024-2025</p>
      <div className="w-11/12 mx-auto border-2 border-highlight mt-3">
        
       <div className="flex flex-col px-4 py-2 gap-y-2 border-gray-400 border-2 mx-4 my-2">
        
       <div className="flex justify-between ">
       <GrReactjs className="text-3xl"></GrReactjs> <p >40%</p>
       </div>
       <progress className="progress progress-highlight text-highlight " value={40} max="100"></progress>
       
       </div>
      </div>
    </section>
  );
};

export default Skills;
