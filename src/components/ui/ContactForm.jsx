import { useState } from 'react'
import { missionTypes } from '../../data/supportData'

const inputClass =
  'w-full border border-white/10 bg-white/[0.03] px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 transition-colors duration-300 focus:border-sky-400/40 focus:bg-white/[0.05] focus:outline-none aria-[invalid=true]:border-red-400/50'

function Field({ label, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={children?.[0]?.props?.id ?? children?.props?.id}
        className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-white/40"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="font-sans text-[10px] text-red-400/80">
      {message}
    </p>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = (form) => {
    const data = new FormData(form)
    const next = {}
    if (!data.get('name')?.trim()) next.name = 'Name is required'
    if (!data.get('company')?.trim()) next.company = 'Company is required'
    const email = data.get('email')?.trim()
    if (!email) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address'
    if (!data.get('mission')) next.mission = 'Select a mission type'
    if (!data.get('message')?.trim()) next.message = 'Message is required'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate(e.target)
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center border border-white/8 bg-white/[0.02] px-8 py-12">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/80">
          Message received
        </p>
        <p className="mt-4 max-w-sm font-serif text-2xl font-light text-white">
          Thank you — our engineering team will respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/50 transition-opacity duration-300 hover:text-white/80"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/8 bg-white/[0.02] px-8 py-10"
      noValidate
      aria-label="Contact engineering team"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input
            id="name" name="name" type="text"
            className={inputClass} placeholder="Your name"
            aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
          />
          <FieldError id="name-error" message={errors.name} />
        </Field>

        <Field label="Company">
          <input
            id="company" name="company" type="text"
            className={inputClass} placeholder="Organisation"
            aria-invalid={!!errors.company} aria-describedby={errors.company ? 'company-error' : undefined}
          />
          <FieldError id="company-error" message={errors.company} />
        </Field>
      </div>

      <Field label="Email" className="mt-5">
        <input
          id="email" name="email" type="email"
          className={inputClass} placeholder="you@company.com"
          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
        />
        <FieldError id="email-error" message={errors.email} />
      </Field>

      <Field label="Mission type" className="mt-5">
        <select
          id="mission" name="mission"
          className={`${inputClass} cursor-pointer`} defaultValue=""
          aria-invalid={!!errors.mission} aria-describedby={errors.mission ? 'mission-error' : undefined}
        >
          <option value="" disabled>Select mission type</option>
          {missionTypes.map((type) => (
            <option key={type} value={type} className="bg-[#060c12]">{type}</option>
          ))}
        </select>
        <FieldError id="mission-error" message={errors.mission} />
      </Field>

      <Field label="Message" className="mt-5">
        <textarea
          id="message" name="message" rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Describe your mission requirements…"
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
        />
        <FieldError id="message-error" message={errors.message} />
      </Field>

      <button
        type="submit"
        className="mt-8 w-full border border-sky-400/30 bg-sky-400/10 px-6 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-300 transition-all duration-300 hover:border-sky-400/55 hover:bg-sky-400/18 hover:shadow-[0_0_28px_rgba(56,189,248,0.12)]"
      >
        Contact engineering team
      </button>
    </form>
  )
}
