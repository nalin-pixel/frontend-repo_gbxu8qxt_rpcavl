import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Container from '../ui/Container'
import Button from '../ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().optional(),
  website: z.string().url('Enter a valid URL').optional().or(z.literal('')),
  budget: z.string().optional(),
  message: z.string().max(2000).optional(),
})

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to submit')
      reset()
      alert('Thanks — we will reach out shortly!')
    } catch (e) {
      alert('Something went wrong. Please try again later.')
    }
  }

  return (
    <Container paddingY="large" className="scroll-mt-24" id="assessment">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Free Brand Domination Blueprint</h2>
        <p className="mt-3 text-gray-600">Get a custom 90‑day plan to own page one for your name and brand.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10 max-w-3xl rounded-xl border bg-white p-8 shadow-md">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input {...register('name')} className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Jane Doe" />
            {errors.name && <p className="mt-1 text-sm text-brand-alert">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input {...register('email')} className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="jane@company.com" />
            {errors.email && <p className="mt-1 text-sm text-brand-alert">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Company</label>
            <input {...register('company')} className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Acme Inc." />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Website</label>
            <input {...register('website')} className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="https://example.com" />
            {errors.website && <p className="mt-1 text-sm text-brand-alert">{errors.website.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Budget</label>
            <select {...register('budget')} className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange">
              <option value="">Select a range</option>
              <option value="$2,500-$5,000">$2,500 - $5,000</option>
              <option value="$5,000-$10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">What are you trying to achieve?</label>
            <textarea {...register('message')} rows={4} className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Tell us about your goals and challenges..." />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-gray-600">By submitting, you agree to our privacy policy.</p>
          <Button as="button" type="submit" size="md" disabled={isSubmitting}>Request Blueprint</Button>
        </div>
      </form>
    </Container>
  )
}
