import React from "react";
import Typewriter from "typewriter-effect";
import profile from "../images/profile.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "animate.css";
import "../index.css";
import ShiningText from 'shiny-text';
import { div } from "framer-motion/client";



const Hero = () => {
  return (
    <div className="lg:mt-20 md:mt-14 ">
      <section className="grid md:grid-cols-10 mt-10  grid-cols-1 gap-2  justify-center font-body items-center">
      <div className="col-span-6 max-w-3xl w-full" data-aos="fade-right">
        <h1 className="md:text-5xl text-3xl pb-2 space-y-2 text-gray-300 font-semibold">
          I'm Mehedi,
        </h1>
        <p className="text-highlight py-3 font-bold text-xl lg:text-2xl md:text-3xl animate__animated animate__fadeInDown">
          <Typewriter
            options={{
              strings: ["A Junior Frontend Developer"],
              autoStart: true,
              loop: true,
              delay: 30,
            }}
          />
        </p>
        <ShiningText duration="2s" textColor="rgba(156, 163, 175, 0.8)" className="md:text-[17px] text-xs  py-4 ">
        I currently pursuing a Diploma in CST at Tangail Polytechnic
          Institute. Coding is my oxygen! I build responsive web applications
          using React and Tailwind CSS, and I'm currently learning Node.js and
          Express to complete the MERN stack and I’m always eager to explore new
          technologies. My GitHub is my gym, where I flex my skills daily,
          building not just projects but also my mindset and wealth.
        </ShiningText>
        {/* <p className=" md:text-[17px]  py-4 text-gray-300">
          I currently pursuing a Diploma in CST at Tangail Polytechnic
          Institute. Coding is my oxygen! I build responsive web applications
          using React and Tailwind CSS, and I'm currently learning Node.js and
          Express to complete the MERN stack and I’m always eager to explore new
          technologies. My GitHub is my gym, where I flex my skills daily,
          building not just projects but also my mindset and wealth.
        </p> */}

        <div className="mt-6">
          <p className="text-gray-400">FIND ME ON</p>
          <div className="flex gap-2 md:gap-3 mt-5 ">
            <Link
              to="https://github.com/mehediScriptDev"
              target="_blank"
              className="bg-littlebg hover:text-black duration-200 shadow-md px-3 py-3 rounded-full"
            >
              <FaGithub></FaGithub>
            </Link>
            <Link
              to="https://www.linkedin.com/in/mehedi-mehedi-09a088349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="bg-littlebg hover:text-black duration-200 shadow-md px-3 py-3 rounded-full"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link
              to="https://x.com/mehediscript_x"
              target="_blank"
              className="bg-littlebg hover:text-black duration-200 shadow-md px-3 py-3 rounded-full"
            >
              <FaX></FaX>
            </Link>
            <Link
              to="https://www.facebook.com/mehediScript404"
              target="_blank"
              className="bg-littlebg hover:text-black duration-200 shadow-md px-3 py-3 rounded-full"
            >
              <FaFacebook></FaFacebook>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="col-span-1 md:col-span-4 flex mt-10 md:mt-0 lg:mt-0 xl:mt-0 justify-center items-center"
        data-aos="fade-left"
      >
        <img
          className="lg:w-2/4 w-2/4 mx-auto rounded-xl hover:border-white p-1 border-2 border-highlight shadow-2xl shadow-slate-900"
          src={profile}
          alt="mehedi"
        />
      </div>
    </section>
    </div>
  );
};

export default Hero;
