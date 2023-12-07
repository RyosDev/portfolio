function Footer() {
  return (
    <section className="w-full  bg-[#191919] ">
      <div className="mx-40">
        <h2 className="font-bold text-xl text-white">CONTACT</h2>
        <div className="my-7">
          <div className="links">
            <div className=" flex py-1">
              <img src="./public/Email.png" alt="" />
              <h3 className="px-5 text-white">Gmail</h3>
            </div>
            <div className=" flex py-1">
              <img src="./public/github.png" alt="" />
              <h3 className="px-5 text-white">Github</h3>
            </div>
            <div className=" flex py-1">
              <img src="./public/instagram.png" alt="" />
              <h3 className="px-5 text-white">Instagram</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
