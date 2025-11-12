import React from 'react'
import Container from '../ui/Container'
import { Mail, Phone, MapPin, Linkedin, Twitter, Copyright } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <Container paddingY="large" className="bg-transparent">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-brand-orange" aria-hidden />
              <span className="text-lg font-semibold text-white">ProtectMyBrand</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">AI-powered reputation systems that turn searches into sales. We build durable authority across Google and social in weeks, not months.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#cases" className="hover:text-white">Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#assessment" className="hover:text-white">Free Assessment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Data Processing</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-orange" /><a href="tel:+18005551234" className="hover:text-white">(800) 555‑1234</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-orange" /><a href="mailto:hello@protectmybrand.com" className="hover:text-white">hello@protectmybrand.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-orange" /><span>600 Mission St, San Francisco, CA</span></li>
              <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li className="flex items-center gap-2"><Twitter className="h-4 w-4" /><a href="#" className="hover:text-white">Twitter/X</a></li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container paddingY="small" className="bg-transparent">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <div className="flex items-center gap-2"><Copyright className="h-4 w-4" /><span>{new Date().getFullYear()} ProtectMyBrand — All rights reserved.</span></div>
            <div className="flex items-center gap-4">
              <span>Do Not Sell My Info</span>
              <span>Cookie Settings</span>
              <span>Sitemap</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
