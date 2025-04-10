import { useTranslation } from 'react-i18next'

export default function Tools() {
  const { t } = useTranslation()
    const tools = [
      t('education1'),
      t('education2'), 
      t('education3'),
      t('education4'),
    ]
    
    return (
      <section className="mb-8">
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
          <span className="font-bold">{t('education')} </span>
          <span>05</span>
        </div>
        <ul className="space-y-2">
          {tools.map((tool, index) => (
            <li key={index} className="text-[#E2E8F0]">{tool}</li>
          ))}
        </ul>
      </section>
    )
  }