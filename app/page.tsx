import Box from "./components/Box";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Study from "./components/study/Study";
import Living from "./components/Living/Living";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Gallery from "./components/Gallery/Gallery";

export default function Home() {
  return (
   <div>
    <Box>
      <div className="relative">
        <Navbar />
        <Hero/>
      </div>
      <Study/>
      <Living/>
      <Services />
      <Gallery />
      <Footer/>
    </Box>
   </div>
  )
}
