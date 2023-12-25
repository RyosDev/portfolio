
function Header() {
  return (
    <header className="  items-center bg-[#222222] p-5 text-white ">
      <div className="flex justify-between gap-10">
        <h1 className="font-semibold text-2xl cursor-pointer">Ry0s</h1>
        <nav className="flex items-center py-0 px-6 gap-16 text-sm font-jakarta  ">
          <a
            className="transition duration-300 hover:text-[#9615db]"
            href="https://github.com/Ryos7x"
          >
            Github
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
