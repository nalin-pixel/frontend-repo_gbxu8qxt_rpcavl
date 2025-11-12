import React from 'react'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import ProblemAgitation from './components/sections/ProblemAgitation'
import Transformation from './components/sections/Transformation'
import Testimonials from './components/sections/Testimonials'
import KnowledgePanel from './components/sections/KnowledgePanel'
import UniqueValue from './components/sections/UniqueValue'
import Pricing from './components/sections/Pricing'
import LeadForm from './components/sections/LeadForm'
import Footer from './components/sections/Footer'
import SectionDivider from './components/ui/SectionDivider'
import './index.css'

function App() {
  return (
    <main className="font-sans">
      <Hero />
      <SectionDivider />
      <SocialProof />
      <SectionDivider />
      <ProblemAgitation />
      <SectionDivider />
      <Transformation />
      <Testimonials />
      <SectionDivider />
      <KnowledgePanel />
      <SectionDivider />
      <UniqueValue />
      <SectionDivider />
      <Pricing />
      <LeadForm />
      <Footer />
    </main>
  )
}

export default App
