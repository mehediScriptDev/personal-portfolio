import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    
    const submitHandler = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        
        if(email && name){
            toast(`Thanks ${name} for reaching out.`);
            form.reset();
        }
        else{
            toast.error('Somethings not right!')
        }
    }
  return (
    <section className="min-h-screen mt-16  mb-5" data-aos="fade-end">
      <h1 className="text-3xl lg:text-4xl font-bold text-center animate__animated animate__slideInDown">
        Contact
      </h1>
      <div className="grid lg:grid-cols-12 grid-cols-1 justify-center gap-y-10 mx-auto w-11/12 mt-10">
        <div className="col-span-6">
          <p className="text-2xl font-bold ">Contact Informations</p>
          <p className="text-gray-400 py-3 pr-6">
            Feel free to reach out for collaboration opportunities or just to
            say hello!
          </p>
          <div className="flex flex-col gap-y-5 md:gap-y-10">
            <div>
              <p className="flex items-center text-2xl gap-2 font-bold">
                <span className="text-highlight text-3xl ">
                  <MdEmail />
                </span>{" "}
                Email:{" "}
              </p>
              <p className="text-gray-300 py-2">meheduvau@gmail.com</p>
            </div>
            <div>
              <p className="flex items-center text-2xl gap-2 font-bold">
                <span className="text-highlight text-3xl ">
                  <MdPhone />
                </span>{" "}
                Phone:{" "}
              </p>
              <p className="text-gray-300 py-2">+8801834393787</p>
            </div>

            <div>
              <p className="flex items-center text-2xl gap-2 font-bold">
                <span className="text-highlight text-3xl ">
                  <MdLocationOn />
                </span>{" "}
                Location:{" "}
              </p>
              <p className="text-gray-300 py-2">Tangail, Dhaka, Bangladesh</p>
            </div>
            <div className="flex gap-2 md:gap-3 mt-5 md:justify-start justify-center">
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
        {/* form */}
        <div className="col-span-6">
          <h1 className="text-2xl text-white font-bold text-center md:text-left pb-3">
            Send your Message
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col">
            <label className="text-xl" htmlFor="">
              Name:{" "}
              <input
                type="text"
                className="bg-littlebg rounded-md md:py-2 py-1 w-full border-2 border-littleborder"
                required
                name="name"
                id=""
              />
            </label>
            <br />
            <label className="text-xl" htmlFor="">
              Email:
              <input
                type="email"
                className="border-2 md:py-2 py-1 rounded-md bg-littlebg w-full border-littleborder"
                required
                name="email"
                id=""
              />
            </label>

            <br />
            <label className="text-xl" htmlFor="Subject">
              Subject:
              <input
                type="text"
                className="border-2 rounded-md bg-littlebg w-full border-littleborder md:py-2 py-1"
                name="subject"
                id=""
              />
            </label>

            <br />
            <label className="text-xl" htmlFor="">
              Message
              <textarea
                className="border-2 py-9 bg-littlebg w-full h-full border-littleborder"
                name=""
                required
                id=""
              ></textarea>
            </label>
            <label className="mt-3" htmlFor="">
              <input
              
                type="submit"
                
                className="btn w-full rounded-md bg-highlight text-white"
                value="Send"
              />
              
            </label>
          </form>
          
        </div>
        <ToastContainer 
              position="top-right"
              autoClose={1000}
              theme="dark"/>
      </div>
    </section>
  );
};

export default Contact;
