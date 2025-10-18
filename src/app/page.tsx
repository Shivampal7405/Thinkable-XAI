import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
