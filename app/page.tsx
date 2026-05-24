import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <main className="lg:pl-60 xl:pl-64">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Footer />
      </main>
    </>
  );
}
