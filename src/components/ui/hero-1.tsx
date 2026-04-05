'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface NavigationItem {
  name: string
  href: string
}

interface AnnouncementBanner {
  text: string
  linkText: string
  linkHref: string
}

interface CallToAction {
  text: string
  href: string
  variant: 'primary' | 'secondary'
}

interface HeroLandingProps {
  logoSrc?: string
  logoAlt?: string
  navigation?: NavigationItem[]
  title: string | React.ReactNode
  description: string
  announcementBanner?: AnnouncementBanner
  callToActions?: CallToAction[]
  titleSize?: 'small' | 'medium' | 'large'
  className?: string
}

export function HeroLanding({
  logoSrc = '/images/logo-ecohos.png',
  logoAlt = 'ECOHOS Logo',
  navigation = [],
  title,
  description,
  announcementBanner,
  callToActions = [],
  titleSize = 'large',
  className = '',
}: HeroLandingProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const titleSizeClass = {
    small: 'text-3xl sm:text-4xl md:text-5xl',
    medium: 'text-3xl sm:text-5xl md:text-6xl',
    large: 'text-4xl sm:text-5xl md:text-7xl',
  }[titleSize]

  return (
    <div className={`w-full overflow-hidden relative bg-[#080808] ${className}`}>

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      >
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay over video */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Gradient blob top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '0 0 auto 0',
          top: '-160px',
          zIndex: 2,
          overflow: 'hidden',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: 'linear-gradient(to top right, #a8ff3e, #4a7c1f)',
            opacity: 0.25,
            position: 'relative',
            left: 'calc(50% - 30rem)',
            width: '72rem',
            aspectRatio: '1155/678',
            transform: 'translateX(-50%) rotate(30deg)',
          }}
        />
      </div>

      {/* Gradient blob bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-160px',
          left: 0,
          right: 0,
          zIndex: 2,
          overflow: 'hidden',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: 'linear-gradient(to top right, #a8ff3e, #2a5c0f)',
            opacity: 0.18,
            position: 'relative',
            left: 'calc(50% + 10rem)',
            width: '72rem',
            aspectRatio: '1155/678',
            transform: 'translateX(-50%)',
          }}
        />
      </div>


      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50" style={{ background: 'rgba(8,8,8,0.7)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
          <Link href="/" className="flex-shrink-0">
            <Image src={logoSrc} alt={logoAlt} width={200} height={60} className="object-contain h-14 w-auto" priority />
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#666] hover:text-[#a8ff3e] transition-colors"
            >
              <span className="sr-only">Abrir menu</span>
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop nav */}
          {navigation.length > 0 && (
            <div className="hidden lg:flex lg:gap-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-[#a0a0a0] hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          <div className="hidden lg:flex">
            <Link
              href="/cadastro"
              className="text-sm font-semibold px-5 py-2 rounded-lg transition-all"
              style={{
                background: '#a8ff3e',
                color: '#080808',
                boxShadow: '0 0 20px rgba(168,255,62,0.25)',
              }}
            >
              Participar →
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="absolute top-0 right-0 w-full sm:max-w-sm h-auto px-6 py-6 shadow-2xl"
              style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <Image src={logoSrc} alt={logoAlt} width={120} height={36} className="object-contain h-8 w-auto" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-[#666] hover:text-[#a8ff3e] transition-colors"
                >
                  <span className="sr-only">Fechar menu</span>
                  <X className="size-6" aria-hidden="true" />
                </button>
              </div>

              {navigation.length > 0 && (
                <div className="space-y-1 mb-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-base font-medium text-[#a0a0a0] hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/cadastro"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-[#080808] text-center"
                  style={{ background: '#a8ff3e' }}
                >
                  Participar
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero content */}
      <div className="relative px-10 pt-4 flex flex-col justify-center" style={{ zIndex: 3, minHeight: '80vh' }}>
        <div className="mx-auto max-w-3xl pt-28 pb-16 text-center">

          {/* Announcement banner */}
          {announcementBanner && (
            <motion.div
              className="mb-2 flex justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
            >
              <div
                className="relative rounded-full px-4 py-1.5 text-sm text-[#a0a0a0] transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {announcementBanner.text}{' '}
                <a href={announcementBanner.linkHref} className="font-semibold text-[#a8ff3e] hover:text-[#c8ff7e] transition-colors">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {announcementBanner.linkText} →
                </a>
              </div>
            </motion.div>
          )}

          {/* Title — aparece primeiro */}
          <motion.h1
            style={{ margin: 0, padding: 0, lineHeight: 0, fontSize: 0 }}
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-2 text-lg font-light text-[#a0a0a0] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
          >
            {description}
          </motion.p>

          {/* CTAs */}
          {callToActions.length > 0 && (
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-5 flex-wrap gap-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25, ease: 'easeOut' }}
            >
              {callToActions.map((cta, i) =>
                cta.variant === 'primary' ? (
                  <Link
                    key={i}
                    href={cta.href}
                    className="rounded-lg px-7 py-3 text-sm font-semibold transition-all"
                    style={{
                      background: '#a8ff3e',
                      color: '#080808',
                      boxShadow: '0 0 24px rgba(168,255,62,0.3)',
                    }}
                  >
                    {cta.text}
                  </Link>
                ) : (
                  <Link
                    key={i}
                    href={cta.href}
                    className="text-sm font-semibold text-[#a0a0a0] hover:text-white transition-colors"
                  >
                    {cta.text} →
                  </Link>
                )
              )}
            </motion.div>
          )}

        </div>
      </div>
    </div>
  )
}

export type { HeroLandingProps, NavigationItem, AnnouncementBanner, CallToAction }
