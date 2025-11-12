import React from 'react'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import ProblemAgitation from './components/sections/ProblemAgitation'
import Transformation from './components/sections/Transformation'
import KnowledgePanel from './components/sections/KnowledgePanel'
import UniqueValue from './components/sections/UniqueValue'
import Pricing from './components/sections/Pricing'
import LeadForm from './components/sections/LeadForm'
import './index.css'

function App() {
  return (
    <main className="font-sans">
      <Hero />
      <SocialProof />
      <ProblemAgitation />
      <Transformation />
      <KnowledgePanel />
      <UniqueValue />
      <Pricing />
      <LeadForm />
      <footer className="bg-gray-900 py-12 text-center text-gray-300">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <p>&copy; {new Date().getFullYear()} ProtectMyBrand.com — All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
