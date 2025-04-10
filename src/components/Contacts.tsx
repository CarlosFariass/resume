import { useTranslation } from 'react-i18next'

export default function Contacts() {
  const { t } = useTranslation()
  return (
    <section className="mb-6 pb-6 pt-5">
      <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
        <span className="font-bold">{t('contacts')} </span>
        <span>04</span>
      </div>
      <ul className="text-sm space-y-1 uppercase">
        <li>{t('email')}</li>
        <li>{t('phone')}</li>
      </ul>
    </section>
  );
}