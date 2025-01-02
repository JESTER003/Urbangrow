import React from 'react'
import { Hero } from '../components/hero'
import { Features } from '../components/features'
import { Navbar } from '../components/Navbar'
import { HowItWorks } from '../components/HowltWorks'
import { MentorPreview } from '../components/MentorPreview'
import { Testimonials } from '../components/testimonials'
import { CTA } from '../components/cta'
import { Footer } from '../components/footer'




export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <main>
       
        <Hero />
        <Features/>
        <HowItWorks/>
        <MentorPreview/>
        <Testimonials/>
        <CTA/>
      </main>
      <Footer/>
    </div>
  )
}

