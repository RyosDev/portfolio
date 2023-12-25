function Footer() {
  return (
    <section className="flex w-full bg-[#191919] pt-5">
      <div className="justify-start mx-40 max-sm:mx-20">
        <h2 className="font-bold text-xl text-white">CONTACT</h2>
        <div className="mt-7">
          <div className="links">
            <div className=" flex py-1">
              <img src="../public/Email.png" alt="" />
              <h3 className="px-5 text-white"><a href="mailto:eliastello.dev@gmail.com">eliastello.dev@gmail.com</a></h3>
            </div>
            <div className=" flex py-1">
              <img src="../public/github.png" alt="" />
              <h3 className="px-5 text-white"><a href="https://github.com/Ryos7x">Ryos7x</a></h3>
            </div>
            <div className=" flex py-1">
              <img src="../public/instagram.png" alt="" />
              <h3 className="px-5 text-white"><a href="https://www.instagram.com/tesh_ry/?next=%2F">Tesh_ry</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
