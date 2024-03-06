import { navigation_data } from './navigation.data'
import { Children, useState } from 'react'
import { LanguageButton, ThemeToggleButton } from '@/components/custom'
import { useTranslation } from 'react-i18next'
import { TiThMenu } from 'react-icons/ti'
import { IoMdCloseCircle } from 'react-icons/io'

export const NavigationComponent = () => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  return (
    <nav
      className='flex fixed flex-row py-2 px-4 bg-slate-400 dark:bg-slate-800 
      shadow-md top-0 left-0 right-0 z-40 items-center hover:shadow-xl'
    >
      <div className='flex flex-row items-center flex-1 gap-2'>
        <div className='py-1 px-2 rounded-md bg-slate-100 bg-opacity-20'>
          <span className='text-sm font-semibold text-state-900 dark:text-slate-100'>Nguyễn Hoàng Lâm</span>
        </div>

        <div className='sm:flex hidden flex-row gap-2 items-center'>
          <ThemeToggleButton />
          <LanguageButton />
        </div>
      </div>

      <div className='sm:flex flex-row gap-2 hidden'>
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

      {/* -------------------------- */}

      <button className='cursor-pointer flex sm:hidden' onClick={() => setOpen(true)}>
        <TiThMenu className='text-slate-900 dark:text-slate-100 text-2xl' />
      </button>

      {open ? (
        <div className='fixed sm:hidden top-0 left-0 bottom-0 right-0 bg-slate-800 bg-opacity-40'>
          <div className='flex flex-row justify-between top-2 right-2 absolute z-10'>
            <IoMdCloseCircle
              className='text-2xl cursor-pointer text-slate-900 dark:text-slate-100'
              onClick={() => setOpen(false)}
            />
          </div>

          <div
            className='flex flex-col gap-4 absolute 
            right-0 bottom-0 top-0 px-2 py-8
          bg-slate-100 dark:bg-slate-900'
          >
            <div className='flex flex-col gap-4 flex-1'>
              {Children.toArray(
                navigation_data.map((item) => {
                  return (
                    <a
                      href={item.url}
                      className='uppercase text-xs font-semibold px-10 py-2 rounded-sm
                    text-slate-900 dark:text-slate-100 dark:hover:bg-slate-800
                    hover:bg-slate-200'
                      style={{ userSelect: 'none' }}
                    >
                      {t(item.text.toUpperCase())}
                    </a>
                  )
                })
              )}
            </div>
            <div className='flex sm:hidden flex-row gap-2 justify-between items-center px-2'>
              <ThemeToggleButton />
              <LanguageButton />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  )
}
