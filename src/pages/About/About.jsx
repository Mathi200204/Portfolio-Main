import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
         
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Mathiyalakan Arulkumaran, a passionate JavaScript
                developer specializing in creating innovative web solutions and
                user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                I am an Information Technology undergraduate with a strong
                interest in software development, databases, and web
                technologies. I am continuously building my skills in
                programming, problem-solving, and modern IT tools while working
                on academic and personal projects. I am eager to apply my
                knowledge in real-world applications and grow into a skilled IT
                professional.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I am a motivated IT undergraduate at the University of
                    Moratuwa with strong skills in software development and web
                    technologies. I demonstrate accuracy, ownership, and
                    adaptability in both collaborative and independent work. I
                    am committed to continuous learning and contributing
                    effectively to the tech industry
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Mathiyalakan Arulkumaran
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white"></span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
