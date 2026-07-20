import Hero from "@/components/pagesComponents/hero";
import Navbar from "@/components/pagesComponents/Navbar";
import StarfieldBackgroundDemo from "@/components/ui/starfield";
import Seperator from "@/components/ui/seperator";
import AboutME from "@/components/pagesComponents/AboutME";
import Project from "@/components/pagesComponents/Project";
import TestimonialsSection from "@/components/pagesComponents/testemonails";
export default function Home() {
  return (
    <div className="mx-5 px-5">
      <StarfieldBackgroundDemo />
      {/* Header */}
      <section id="navbar">
        <div className="md:w-10/12 mx-auto">
          <Navbar />
        </div>
      </section>

       <section
      id="home"
      className="relative flex min-h-screen  w-full items-center overflow-hidden md:w-10/12 md:mx-auto md:px-0 sm:mt-10 mt-20"
    >
          <Hero />
      </section>
      {/* seperator */}
      < Seperator className="my-5" />
           <section
      id="about"
      className="relative flex w-full items-center overflow-hidden md:w-10/12 md:mx-auto md:px-0 "
    >
          <AboutME />
      </section>
       < Seperator className="my-10" />
           <section
      id="projects"
      className="relative flex w-full items-center overflow-hidden md:w-10/12 md:mx-auto md:px-0 "
    >
          <Project />
      </section>
       < Seperator className="my-10" />
           <section
      id="testimonials"
      className="relative flex w-full items-center overflow-hidden md:w-10/12 md:mx-auto md:px-0 "
    >
          <TestimonialsSection />
      </section>

    </div>
  );
}
