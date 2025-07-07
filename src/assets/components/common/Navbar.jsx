const Navbar = () => {
  return (
    <nav className=" bg-[#ef8354]">
      <div className="max-w-[1200px] mx-auto w-11/12">
        <div className="flex items-center justify-between py-2">
          <img
            src="/weather.jpg"
            alt="weatherImg"
            className="h-10 rounded-full w-10 hover:scale-110 transition-all duration-200 cursor-pointer text-[#000000] hover:shadow-[1px_1px_20px_#000]"
          />
          <ul className="flex gap-20 font-medium font-sans">
            <li>home</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar