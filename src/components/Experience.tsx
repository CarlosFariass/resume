import { useTranslation } from 'react-i18next'

export default function Experience() {
  const { t } = useTranslation()
  
  const experiences = [
    {
      period: t('experiencePeriod1'),
      position: t('experienceTitle1'),
      description: t('experienceDescription1')
    },
    {
      period: t('experiencePeriod2'),
      position: t('experienceTitle2'),
      description: t('experienceDescription2')
    },
    {
      period: t('experiencePeriod3'),
      position: t('experienceTitle3'),
      description: t('experienceDescription3')
    },
    {
      period: t('experiencePeriod4'),
      position: t('experienceTitle4'),
      description: t('experienceDescription4')
    },
    {
      period: t('experiencePeriod5'),
      position: t('experienceTitle5'),
      description: t('experienceDescription5')
    },
    {
      period: t('experiencePeriod6'),
      position: t('experienceTitle6'),
      description: t('experienceDescription6')
    }
  ]

  return (
    <section className="mb-8 md:ml-6">
      <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
        <span className="font-bold">{t('experience')}</span>
        <span>08</span>
      </div>
      <div className="space-y-6 overflow-y-auto" 
           style={{ 
             maxHeight: experiences.length > 3 ? '600px' : 'none',
             scrollbarWidth: 'thin',
             scrollbarColor: '#4A5568 #2D3748'
           }}>
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-primary pl-4 pb-4 pt-4">
            <h4 className="text-xl font-semibold">{exp.position}</h4>
            <p className="text-semibold">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}