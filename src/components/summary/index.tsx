import { useTranslation } from 'react-i18next'

export const SummaryComponent = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col p-2 sm:p-8 gap-4' id='summary'>
      <div
        className='w-full flex flex-row justify-center items-center
        gap-4 scroll-m-2'
      >
        <div className='h-[2px] w-20 bg-slate-900 dark:bg-slate-100' />
        <h2
          className='text-center font-semibold text-lg sm:text-xl md:text-2xl uppercase 
        text-slate-900 dark:text-slate-100'
        >
          {t('SUMMARY')}
        </h2>
        <div className='h-[2px] w-20 bg-slate-900 dark:bg-slate-100' />
      </div>

      <div className='flex flex-col gap-8'>
        <ol className='flex flex-col gap-4 sm:mx-6 lg:mx-20 mx-2'>
          <li className='text-slate-900 dark:text-slate-100 text-sm sm:text-md'>{t('SUMMARY_1')}</li>
          <li className='text-slate-900 dark:text-slate-100 text-sm sm:text-md'>{t('SUMMARY_2')}</li>
          <li className='text-slate-900 dark:text-slate-100 text-sm sm:text-md'>{t('SUMMARY_3')}</li>
        </ol>

        <span
          className='text-right text-xs sm:text-sm text-slate-900 dark:text-slate-100
         font-semibold'
        >
          {t('SUMMARY_4')}
        </span>
      </div>
    </section>
  )
}
