import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Popular from "../components/Popular.jsx";
import TravelEnquiryForm from "../components/StepperForm.jsx";
import TravelMarquee from "../components/TravelMarquee.jsx";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      
      <Popular />
      
      <TravelEnquiryForm />
  
      <TravelMarquee />
    </main>
  )
}