import { FaLongArrowAltUp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-11/12 mx-auto bg-littlebg">
      <footer className="footer flex justify-between sm:footer-horizontal  text-neutral-content items-center p-4">
        <div className=" items-center">
          
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Mehedi</p>
        </div>
        <div className="">
         
         <a className="bg-littleborder rounded-full p-2 border-2 border-gray-600 hover:text-white hover:bg-highlight" href="#hero"><FaLongArrowAltUp></FaLongArrowAltUp></a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
