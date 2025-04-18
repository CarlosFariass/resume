import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Education from './components/Education'
import Socials from './components/Socials'
import BackgroundImage from './assets/textures.jpg'
import Download from './components/Download'
import Hire from './components/Hire'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => setIsLoading(false)
    
    if (document.readyState === 'complete') {
      setIsLoading(false)
    } else {
      window.addEventListener('load', handleLoad)
    }
  
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#1A1A1A] z-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-[#4A5568] border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-white uppercase tracking-wider text-xs">{t('loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="flex justify-end items-center gap-4 px-6 py-4">
        <LanguageSwitcher />
        <Download />
      </div>
      <div className="min-h-screen text-gray-200 p-6 relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            opacity: '0.05' 
          }}
        ></div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 order-1 md:order-none">
            <Header />
            <About className="block md:hidden" /> 
            <Contacts />
            <Education />
            <Skills />
            <Languages />
          </div>

          <div className="md:w-2/3 order-2 md:order-none">
            <About className="hidden md:block" /> 
            <Experience />
            <Socials />
          </div>
        </div>
        <Hire />
      </div>
      <Analytics />
    </>
  )
}

export default App