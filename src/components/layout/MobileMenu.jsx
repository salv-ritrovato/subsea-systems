import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { navigationLinks, secondaryNavLinks } from '../../data/navigationData'
import './navbar.css'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function MobileMenu({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Move focus into panel when opened; restore to toggle when closed
  useEffect(() => {
    if (isOpen) {
      const first = panelRef.current?.querySelectorAll(FOCUSABLE)?.[0]
      first?.focus()
    } else {
      toggleRef.current?.focus()
    }
  }, [isOpen])

  // Escape closes; Tab cycles within panel
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
        return
      }
      if (e.key !== 'Tab') return

      const focusable = [...(panelRef.current?.querySelectorAll(FOCUSABLE) ?? [])]
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <div className={`relative ${className}`}>
      <button
        ref={toggleRef}
        type="button"
        className="mobile-menu__toggle relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={`mobile-menu__bar ${isOpen ? 'mobile-menu__bar--top-open' : ''}`} />
        <span className={`mobile-menu__bar ${isOpen ? 'mobile-menu__bar--mid-open' : ''}`} />
        <span className={`mobile-menu__bar ${isOpen ? 'mobile-menu__bar--bot-open' : ''}`} />
      </button>

      <div
        ref={panelRef}
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`mobile-menu__overlay ${isOpen ? 'mobile-menu__overlay--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-10">
            {[...navigationLinks, null, ...secondaryNavLinks].map((item, index) =>
              item === null ? (
                <li key="divider" aria-hidden="true" className="h-px w-12 bg-white/12" />
              ) : (
                <li
                  key={item.to}
                  className="mobile-menu__item"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-white transition-opacity duration-300 hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}
