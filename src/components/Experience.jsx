function Experience() {
  return (
    <section className="flex flex-col">
      <div>
        <h2 className="flex justify-center font-extrabold text-4xl text-white">
          EXPERIENCE
        </h2>
      </div>
      <div className=" ">
        <div className="w-3/4  my-16 mx-40">
          <div className="flex justify-between ">
            <h3 className="font-bold text-xl text-white">PPV</h3>
            <p className="font-bold text-[#8491A0]">June 2022 - Demceber2022</p>
          </div>
          <p className="font-bold text-sm text-[#8491A0] my-5">
            I developed the backend of ppv, (production of sales pages) which
            consisted of creating web pages for entrepreneurs.
          </p>
        </div>
        <div className="w-3/4  my-16 mx-40">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl text-white">ReTrash</h3>
            <p className="font-bold text-[#8491A0]">May 2023 - Present</p>
          </div>
          <p className="font-bold text-sm text-[#8491A0] my-5">
            I am developing a trash can with artificial intelligence that
            separates recyclable garbage from non-recyclable garbage. I am in
            charge of the hardware and programming part within of the project.
          </p>
        </div>
        <div className="w-3/4  my-16 mx-40">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl text-white">SportShop</h3>
            <p className="font-bold text-[#8491A0]">Aug 2023 - Present </p>
          </div>
          <p className="font-bold text-sm text-[#8491A0] my-5">
            I am developing a dynamic website for a company sportswear. I am
            currently in charge of the Frontend and web design{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
