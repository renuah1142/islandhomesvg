import Nav from "@/components/ui/Nav";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Models from "@/components/sections/Models";
import WhyChoose from "@/components/sections/WhyChoose";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollReveal from "@/components/animations/ScrollReveal";
export default function Home() {
  return <SmoothScroll><Preloader /><CustomCursor /><Nav /><main><Hero /><About /><Models /><WhyChoose /><Features /><Process /><Gallery /><Contact /></main><Footer /><ScrollReveal /></SmoothScroll>;
}
