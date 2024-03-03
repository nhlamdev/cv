import { navigation_data } from './navigation.data'
import { Children } from 'react'
import { LanguageButton, ThemeToggleButton } from '@/components/custom'
import { useTranslation } from 'react-i18next'

export const NavigationComponent = () => {
  const { t } = useTranslation()

  return (
    <nav
      className='flex absolute flex-row py-2 px-4 bg-slate-400 shadow-md
        top-0 left-0 right-0 z-40 bg-opacity-40 items-center hover:shadow-xl'
    >
      <div className='flex flex-row items-center flex-1 gap-2'>
        <span className='text-md font-semibold'>Nguyễn Hoàng Lâm</span>
        <ThemeToggleButton />
        <LanguageButton />
      </div>

      <div className='flex flex-row gap-2'>
        {Children.toArray(
          navigation_data.map((item) => {
            return (
              <a href={item.url} className='uppercase text-sm font-semibold'>
                {t(item.text.toUpperCase())}
              </a>
            )
          })
        )}
      </div>
    </nav>
  )
}
