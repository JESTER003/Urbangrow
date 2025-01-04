import React from 'react'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Navbar } from '../components/Navbar'
import { HowItWorks } from '../components/HowltWorks'
import { MentorPreview } from '../components/MentorPreview'
import { Testimonials } from '../components/Testimonials'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'




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

