import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Management from "./components/Management";
import Business from "./components/Business";
import Milestone from "./components/Milestone";
import Legality from "./components/Legality";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Management />
        <Business />
        <Milestone />
        <Legality />
      </main>
      <Footer />
    </>
  );
}
