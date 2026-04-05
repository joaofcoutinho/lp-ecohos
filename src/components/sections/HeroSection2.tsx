import { HeroLanding } from '@/components/ui/hero-1'
import Image from 'next/image'

const navigation = [
  { name: 'Propósito', href: '#proposito' },
  { name: 'As três forças', href: '#tres-forcas' },
  { name: 'Encontros', href: '#encontros' },
  { name: 'Parceiros', href: '#incentivadores' },
]

export default function HeroSection2() {
  return (
    <HeroLanding
      logoSrc="/ecohos.png"
      logoAlt="ECOHOS Logo"
      navigation={navigation}
      title={
        <Image
          src="/pci-logo.png"
          alt="Programa Secretário Inovador"
          width={520}
          height={90}
          className="mx-auto w-full max-w-[480px] h-auto"
          priority
          style={{ filter: 'drop-shadow(0 0 32px rgba(168,255,62,0.25))' }}
        />
      }
      description="Conectando especialistas, gestores públicos e startups para transformar desafios da saúde pública em soluções tecnológicas que melhorem o atendimento à população."
      announcementBanner={{
        text: 'O Desenvolvimento de Pessoas através de Desafios',
        linkText: '',
        linkHref: '',
      }}
      callToActions={[
        { text: 'Quero fazer parte', href: '/cadastro', variant: 'primary' },
        { text: 'Saiba mais', href: '#proposito', variant: 'secondary' },
      ]}
      titleSize="large"
    />
  )
}
