import CTA from "../components/cta";
import { Features } from "../components/features";
import Footer from "../components/footer";
import { Hero } from "../components/hero";
import { HowItWorks } from "../components/how-it-works";
import { MentorPreview } from "../components/mentor-preview";
import { Navbar } from "../components/navbar";
import { Testimonials } from "../components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero/>
      <Features />
      <HowItWorks />
      <MentorPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

