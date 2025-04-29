import React from "react";
import profile from "../images/profile.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import 'animate.css';

const Hero = () => {
  return (
    <section className="grid md:grid-cols-10 min-h-screen grid-cols-1 gap-2  justify-center font-body items-center">
      <div className="col-span-6 max-w-2xl ">
        <h1 className="text-5xl font-semibold">Mehedi</h1>
        <p></p>
        <p className="text-highlight py-3 font-bold text-2xl lg:text-2xl md:text-3xl animate__animated animate__fadeInDown">A Junior Frontend Developer</p>
        <p className="space-y-2 md:text-2xl ">I currently pursuing a Diploma in CST at Tangail Polytechnic Institute. Coding is my oxygen!  I build robust web applications using MongoDB, Express, React, and Node.js, and I’m always eager to explore new technologies. My GitHub is my gym, where I flex my skills daily, building not just projects but also my mindset and wealth.</p>
      
      <div className="mt-6">
        <p>FIND ME ON</p>
      <div className="flex gap-2 md:gap-3 mt-5">
        <Link to="https://github.com/mehediScriptDev" target="_blank" className="bg-littlebg shadow-md px-3 py-3 rounded-full"><FaGithub></FaGithub></Link>
        <Link to="https://www.linkedin.com/in/mehedi-mehedi-09a088349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="bg-littlebg shadow-md px-3 py-3 rounded-full"><FaLinkedin></FaLinkedin></Link>
        <Link  className="bg-littlebg shadow-md px-3 py-3 rounded-full"><FaX></FaX></Link>
        <Link  className="bg-littlebg shadow-md px-3 py-3 rounded-full"><FaFacebook></FaFacebook></Link>
      </div>
      </div>
      </div>
      <div className="col-span-1 md:col-span-4 flex justify-center max-w-xl items-center">
        <img
          className="rounded-full  w-80 h-80  object-cover border-highlight border-4   "
          src={profile}
          alt="mehedi"
        />
      </div>
    </section>
  );
};

export default Hero;
