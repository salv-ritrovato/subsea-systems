import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../ui/Logo'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import { defaultTransition, fadeDown } from '../../lib/motionVariants'
import './navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const showBackdrop = scrolled || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeDown}
      transition={{ ...defaultTransition, delay: 0.15 }}
      className={[
        'fixed top-0 left-0 z-50 w-full px-8 py-7 transition-[background-color,backdrop-filter] duration-500 md:px-12 md:py-8',
        showBackdrop ? 'bg-[#060c12]/75 backdrop-blur-md' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link to="/" aria-label="Back to home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </Link>
          {!isHome && (
            <Link
              to="/"
              className="hidden font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 transition-opacity duration-300 hover:text-white/75 md:inline"
            >
              ← Home
            </Link>
          )}
        </div>

        <div className="flex items-center justify-end">
          <NavLinks className="hidden lg:block" />
          <MobileMenu className="lg:hidden" />
        </div>
      </div>
    </motion.header>
  )
}
