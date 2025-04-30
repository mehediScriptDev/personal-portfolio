const Header = () => {
  return (
    <div id="header" className="bg-mainbg font-heading">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <p className="font-heading text-3xl font-bold">Mehedi<span className="text-highlight">.</span></p>
        </div>
        
        <div className="navbar-end">
          <a href="/Err.pdf" download type="application/pdf" className="btn duration-300 hover:bg-white hover:text-highlight bg-highlight text-white  text-[10px] md:text-[15px] rounded-full">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
