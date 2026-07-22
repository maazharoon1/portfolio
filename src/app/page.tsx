import Hero from "@/components/pagesComponents/hero";
import Navbar from "@/components/pagesComponents/Navbar";
import StarfieldBackgroundDemo from "@/components/ui/starfield";
import Seperator from "@/components/ui/seperator";
import AboutME from "@/components/pagesComponents/AboutME";
import Project from "@/components/pagesComponents/Project";
import TestimonialsSection from "@/components/pagesComponents/testemonails";
import ContactSection from "@/components/pagesComponents/ContactSection";
import Footer from "@/components/pagesComponents/Footer";
export default function Home() {
  return (
    <div className="md:mx-3 md:px-3 sm:mx-2 sm:px-2 lg:mx-4 lg:px-4 xl:mx-6 xl:px-6 px-1 mx-1 ">
      <StarfieldBackgroundDemo />
      {/* Header */}
      <section id="navbar">
        <div className="md:w-10/12 mx-auto">
          <Navbar />
        </div>
      </section>

       <section
      id="home"
      className="relative flex  w-full items-center overflow-hidden  md:px-0 sm:mt-10 mt-20 md:w-11/12 mx-auto"
    >
          <Hero />
      </section>
      {/* seperator */}
      < Seperator className="my-5" />
           <section
      id="about"
      className="relative flex w-full items-center overflow-hidden md:w-11/12 mx-auto  md:px-0 "
    >
          <AboutME />
      </section>
       < Seperator className="my-10" />
           <section
      id="projects"
      className="relative flex w-full items-center overflow-hidden md:w-11/12 mx-auto  md:px-0 "
    >
          <Project />
      </section>
       < Seperator className="my-10" />
           <section
      id="testimonials"
      className="relative flex w-full items-center overflow-hidden md:w-11/12 mx-auto md:px-0 "
    >
          <TestimonialsSection />
      </section>
       < Seperator className="my-10" />
           <section
      id="contact"
      className="relative flex w-full items-center overflow-hidden  md:w-11/12 mx-auto md:px-0 "
    >
          <ContactSection />
      </section>
       < Seperator className="mt-10 md:w-11/12 mx-auto" />
           <footer
      id="footer"
      className="relative flex w-full items-center overflow-hidden px-2 md:px-0 "
    >
          <Footer />
      </footer>

    </div>
  );
}
