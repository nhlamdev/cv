import { useTranslation } from 'react-i18next'
import { FaUniversity } from 'react-icons/fa'

export const EducationComponent = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col p-8 gap-4' id='education'>
      <div
        className='w-full flex flex-row justify-center items-center
        gap-4 scroll-m-2'
      >
        <div className='h-[2px] w-20 bg-slate-900 dark:bg-slate-100' />
        <h2
          className='text-center font-semibold text-2xl uppercase 
        text-slate-900 dark:text-slate-100'
        >
          {t('EDUCATION')}
        </h2>
        <div className='h-[2px] w-20 bg-slate-900 dark:bg-slate-100' />
      </div>

      <div>
        <a
          href='https://tdmu.edu.vn/'
          className='flex flex-row gap-4 items-center py-4 px-8 rounded-md shadow-md 
        bg-cyan-600 w-fit relative'
        >
          <div>
            <FaUniversity className='text-2xl text-slate-100' />
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-sm font-semibold text-slate-100' style={{ userSelect: 'none' }}>
              Thu Dau Mot university
            </span>
            <span className='text-xs text-slate-100' style={{ userSelect: 'none' }}>
              Bình Dương - Việt Nam | 8/2018 - 6/2022
            </span>
            <span className='text-xs text-slate-100' style={{ userSelect: 'none' }}>
              GPA: 77%
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
