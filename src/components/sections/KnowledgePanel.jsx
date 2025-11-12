import React from 'react'
import Container from '../ui/Container'

export default function KnowledgePanel() {
  return (
    <Container paddingY="large" className="bg-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Own Your Google Knowledge Panel</h2>
          <p className="mt-4 text-gray-600">We engineer the entities, sources, and signals Google trusts so your panel appears fast and stays stable — transforming casual searches into instant authority.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            {[
              'Entity mapping and schema markup',
              'Verified sources and press graph',
              'Wikidata/Wikipedia advisory',
              'Continuous monitoring & updates',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-brand-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border bg-white shadow-xl">
            <img src="/images/google-panel.png" alt="Google Knowledge Panel mockup" className="w-full object-cover" loading="lazy" />
          </div>
          <p className="mt-3 text-center text-sm text-gray-500">Representative mock panel for demonstration purposes</p>
        </div>
      </div>
    </Container>
  )
}
