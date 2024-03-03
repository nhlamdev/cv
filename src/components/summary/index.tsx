import { useTranslation } from 'react-i18next'

export const SummaryComponent = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col p-8 gap-4 bg-summary-gradient' id='summary'>
      <h2 className='text-2xl text-center font-bold uppercase text-slate-900'>{t('SUMMARY')}</h2>

      <div className='flex flex-col gap-8'>
        <ol className='flex flex-col gap-4 mx-20'>
          <li className='text-slate-900'>👋 {t('SUMMARY_1')}</li>
          <li className='text-slate-900'>🚀 {t('SUMMARY_2')}</li>
          <li className='text-slate-900'>💡 {t('SUMMARY_3')}</li>
          <li className='text-slate-900'>💻 {t('SUMMARY_4')}</li>
        </ol>

        <span className='text-right text-sm text-slate-900 font-semibold'>{t('SUMMARY_5')}</span>
      </div>
    </section>
  )
}
