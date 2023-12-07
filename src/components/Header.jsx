import React from "react";

function Header() {
  return (
    <header class="  items-center bg-[#222222] p-5 text-white ">
      <div className="flex justify-between mx-52">
        <h1 className="font-semibold text-2xl cursor-pointer">Ry0s</h1>
        <nav class="flex items-center py-0 px-6 gap-20 text-sm font-jakarta  ">
          <a
            href="/"
            className="transition duration-300 hover:scale-100 hover:text-[#9615db]"
          >
            Home
          </a>
          <a
            class="transition duration-300 hover:scale-100 hover:text-[#9615db]"
            href=""
          >
            Projects
          </a>
          <a
            className="transition duration-300 hover:scale-100 hover:text-[#9615db]"
            href="https://github.com/Ryos7x"
          >
            Github
          </a>
          <a
            class="transition duration-300 hover:scale-100 hover:text-[#9615db]"
            href=""
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
