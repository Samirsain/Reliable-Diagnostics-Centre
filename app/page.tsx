import Navbar      from '@/components/layout/Navbar'
import Footer      from '@/components/layout/Footer'
import Hero        from '@/components/sections/Hero'
import TrustStrip  from '@/components/sections/TrustStrip'
import Ticker      from '@/components/sections/Ticker'
import Stats       from '@/components/sections/Stats'
import Features    from '@/components/sections/Features'
import About       from '@/components/sections/About'
import Services    from '@/components/sections/Services'
import Packages    from '@/components/sections/Packages'
import FAQ         from '@/components/sections/FAQ'
import Gallery     from '@/components/sections/Gallery'
import Reviews     from '@/components/sections/Reviews'
import HomeCollectionBanner from '@/components/sections/HomeCollection'
import Contact     from '@/components/sections/Contact'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { MobileBottomBar } from '@/components/layout/MobileBottomBar'
import { BackToTop } from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <main className="bg-white font-body antialiased selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <Stats />
      <Services />
      <About />
      <Packages />
      <FAQ />
      <Gallery />
      <Reviews />
      <HomeCollectionBanner />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
      <BackToTop />
    </main>
  )
}
