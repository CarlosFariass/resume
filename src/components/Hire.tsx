import { useTranslation } from 'react-i18next'

export default function Hire() {
  const { t } = useTranslation()
    return (
      <div className="flex justify-end p-4">
        <a
          href="https://wa.me/5511949260657"
          target="_blank"
          className="
            flex items-center gap-2
            text-white font-semibold
            text-base
            bg-[#000]
            border border-white
            rounded-lg
            px-4 py-2
            hover:border-green-400
            transition-colors
            cursor-pointer
            focus:outline-none
          "
        >
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          {t('hireMeBtn')}
        </a>
      </div>
    );
  }
  