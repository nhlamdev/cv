import { navigation_data } from './navigation.data'
import { Children } from 'react'
import { LanguageButton, ThemeToggleButton } from '@/components/custom'
import { useTranslation } from 'react-i18next'

export const NavigationComponent = () => {
  const { t } = useTranslation()

  return (
    <nav
      className='flex fixed flex-row py-2 px-4 bg-slate-400 dark:bg-slate-800 
      shadow-md top-0 left-0 right-0 z-40 items-center hover:shadow-xl'
    >
      <div className='flex flex-row items-center flex-1 gap-2'>
        <div className='py-1 px-2 rounded-md bg-slate-100 bg-opacity-20'>
          <span className='text-sm font-semibold text-state-900 dark:text-slate-100'>Nguyễn Hoàng Lâm</span>
        </div>

        <ThemeToggleButton />
        <LanguageButton />
      </div>

      <div className='flex flex-row gap-2'>
        {Children.toArray(
          navigation_data.map((item) => {
            return (
              <a
                href={item.url}
                className='uppercase text-xs font-semibold 
                  text-state-900 dark:text-slate-100'
              >
                {t(item.text.toUpperCase())}
              </a>
            )
          })
        )}
      </div>
    </nav>
  )
}
