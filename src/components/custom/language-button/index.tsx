import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import '@/language'

export const LanguageButton = () => {
  const { i18n } = useTranslation()

  return (
    <button
      className='px-4 py-1 shadow-md w-12 bg-slate-800 flex justify-center items-center rounded-md'
      onClick={() => {
        if (i18n.language === 'en') {
          i18n.changeLanguage('vi')
        } else {
          i18n.changeLanguage('en')
        }
      }}
    >
      <span className='text-xs font-semibold text-center'>{i18next.language}</span>
    </button>
  )
}
