import { useTranslation } from 'react-i18next'

export const SummaryComponent = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col p-8 gap-4 bg-summary-gradient' id='summary'>
      <h2 className='text-2xl text-center font-bold uppercase text-slate-900'>{t('SUMMARY')}</h2>

      <div className='flex flex-col gap-8'>
        <ol className='flex flex-col gap-4 mx-20'>
          <li className='text-slate-900'>
            👋 Hello there! I&rsquo;m Nguyen Hoang Lam, a passionate programmer on a journey of constant growth and
            exploration in the ever-evolving realm of technology.
          </li>
          <li className='text-slate-900'>
            🚀 With a fervent desire to expand my horizons, I immerse myself in learning about the latest and most
            exciting advancements in the tech world.
          </li>
          <li className='text-slate-900'>
            💡 Always seeking new challenges, I thrive in engaging debates and discussions, embracing different
            perspectives with an open mind.
          </li>
          <li className='text-slate-900'>
            💻 As a developer, I am committed to honing my skills, pushing boundaries, and contributing to innovative
            projects that make a difference.
          </li>
        </ol>

        <span className='text-right text-sm text-slate-900 font-semibold'>
          Let&rsquo;s connect and embark on this exciting journey together!
        </span>
      </div>
    </section>
  )
}
