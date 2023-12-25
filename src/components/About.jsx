function About() {
  return (
    <section className="w-full justify-center items-center text-center pt-20">
      <div className="font-black text-5xl text-[#9615db]">
        <h1>Hi, i'm Ry0s</h1>
        <h1>i'm a software developer</h1>
      </div>
      <div className="py-10  text-sm text-[#8491A0]">
        <p>i have 17 years old, i’m a programming student,</p>
        <p>I so passionate about web design and application development.</p>
      </div>
      <div className="py-10">
        <button
          type=""
          className=" py-3 text-white font-semibold border border-white w-40 rounded-3xl transition duration-300 hover:bg-white hover:text-black"
        >
          <a href="public/Elias-Tello.pdf" download={"public/Elias-Tello.pdf"}>
            Download CV
          </a>
        </button>
      </div>

      <div>
        <h3 className="font-semibold text-xl text-[#C5C5C5]">
          EXPERIENCE WITH
        </h3>
        <div className="flex justify-center gap-12 h-10 my-10">
          <img src="public/javascript.png" alt="JS" />
          <img src="public/html.png" alt="HTML" />
          <img src="public/css.png" alt="CSS" />
          <img src="public/reactjs.png" alt="REACT" />
        </div>
      </div>
    </section>
  );
}

export default About;
