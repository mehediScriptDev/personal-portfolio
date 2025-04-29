import React from "react";

const Footer = () => {
  return (
    <section className="w-11/12 mx-auto bg-littlebg">
      <footer className="footer sm:footer-horizontal  text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Mehedi</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
         
         
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
