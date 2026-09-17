import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Bio from "@/components/Bio";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Bio />
        <Process />
        <Services />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}