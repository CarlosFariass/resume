import { useTranslation } from 'react-i18next'

export default function About({ className = '' }) {
  const { t } = useTranslation()
  return (
    <div className={className}>
      <div>
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 md:ml-6 uppercase">
          <span className="font-bold">{t('name')} </span>
          <span>02</span>
        </div>

        <section className="p-6 pb-5 pl-0 md:pl-6">
          <h1 className="text-4xl font-bold text-white">Carlos Henrique de Farias, </h1>
          <p className="text-4xl font-bold">Software Engineer</p>
        </section>
      </div>

      <section className="md:pl-6 pb-6 pt-5 mb-4">
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 uppercase">
          <span className="font-bold">{t('about')} </span>
          <span>03</span>
        </div>
        <p className="pt-5">
          {t('aboutDescriptionTitle')}<br/><br/>
          {t('aboutDescription')}
        </p>
      </section>
    </div>
  );
}
