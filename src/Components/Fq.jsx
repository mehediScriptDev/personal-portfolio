import React from "react";

const Fq = () => {
  return (
    <section className=" mt-14 min-h-[70vh] rounded-lg py-3 " data-aos="fade-down">
      <h1 className=" text-3xl lg:text-4xl font-bold text-center animate__animated animate__slideInDown">
        Frequently asked questions
      </h1>
      <div className="w-11/12 mx-auto mt-6 ">
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-littlebg border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            What technologies do you specialize in?
          </div>
          <div className="collapse-content text-sm">
            I specialize in frontend development using React.js and Tailwind
            CSS, and I'm currently learning the MERN stack — MongoDB,
            Express.js, Node.js, and React.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-littlebg border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            What kind of projects have you worked on?
          </div>
          <div className="collapse-content text-sm">
            I’ve built responsive websites, dynamic user interfaces, and
            interactive UI components using React and Tailwind. I also have
            experience working with APIs and building CRUD apps.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-littlebg border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Are you still studying?
          </div>
          <div className="collapse-content text-sm">
            Yes, I'm currently completing my Diploma in Computer Science and
            Engineering, and I plan to pursue a BSc in CSE soon.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-littlebg border-base-300 border"
        >
          <div className="collapse-title font-semibold">
          Can you make a responsive site?
          </div>
          <div className="collapse-content text-sm">
          Yeah, of course I can! Creating responsive websites is one of my favorite things. I specialize in designing websites that automatically adapt to all screen sizes — whether it's desktop, tablet, or mobile. I love using modern tools like Tailwind CSS and React to ensure an awesome user experience across all devices.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-littlebg border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How can I contact you?
          </div>
          <div className="collapse-content text-sm">
            You can reach me directly [Email:<span className="text-red-600"> meheduvau@gmail.com</span>] or [WhatsApp: <span className="text-red-600 font-bold"> 01834393787</span>]
            
           
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Fq;
