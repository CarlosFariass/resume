import { t } from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const changeLanguage = async (lng: 'en' | 'pt') => {
    setIsLoading(true)
    await i18n.changeLanguage(lng)
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1A1A1A] z-50">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-12 border-4 border-[#4A5568] border-t-white rounded-full animate-spin mb-4"></div>
            <p className="text-white uppercase tracking-wider text-xs" data-testid="loading-text">{t('loading')}</p>
          </div>
        </div>
      )}

      <div className="flex gap-4 pt-2 mt-2">
        <button
          onClick={() => changeLanguage('en')}
          className="text-xl text-white text-xs pb-1 border-b border-[#4A5568] hover:border-white transition-colors focus:outline-none"
          disabled={isLoading}
        >
           EN
        </button>
        <button
          onClick={() => changeLanguage('pt')}
          className="text-xl text-white text-xs pb-1 border-b border-[#4A5568] hover:border-white transition-colors focus:outline-none"
          disabled={isLoading}
        >
           PT
        </button>
      </div>
    </>
  )
}
