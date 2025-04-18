import { useTranslation } from 'react-i18next'

export default function Languages() {
  const { t } = useTranslation()
    const languages = [
      t('portuguese'),
      t('english'),
    ]
    
    return (
      <section className="mb-8">
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
            <span className="font-bold">{t('languages')} </span>
            <span>07</span>
        </div>
        <ul className="space-y-2">
          {languages.map((language, index) => (
            <li key={index} className="text-[#E2E8F0]">{language}</li>
          ))}
        </ul>
      </section>
    )
  }