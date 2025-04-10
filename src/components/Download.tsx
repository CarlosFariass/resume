import { useTranslation } from 'react-i18next'

export default function Sidebar() {
  const { t, i18n } = useTranslation()
  
  const cvFiles = {
    pt: {
      path: "/resume-carlos-farias-pt.pdf",
      filename: "carlos-farias-resume-pt.pdf"
    },
    en: {
      path: "/resume-carlos-farias-en.pdf",
      filename: "carlos-farias-resume-en.pdf"
    },
  }

  const currentCv = cvFiles[i18n.language as keyof typeof cvFiles] || cvFiles.en

  return (
    <div className="flex justify-end">
      <a
        href={currentCv.path} 
        download={currentCv.filename} 
        className="
          mr-8 mt-2 
          text-white 
          text-xs
          tracking-wide
          uppercase 
          bg-transparent 
          border-b border-[#4A5568]
          hover:border-white 
          pb-1 pt-2
          transition-colors
          cursor-pointer
          focus:outline-none
        "
      >
        {t('downloadBtn')}
      </a>
    </div>
  )
}