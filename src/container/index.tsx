import {
  HeaderComponent,
  TechnicalSkillsComponent,
  ExperienceComponent,
  WorkMakeComponent,
  EducationComponent
} from '@/components'

import { SummaryComponent } from '@/components/summary'
import { footer_data } from '@/constant/footer'
import { Children } from 'react'
import { useTranslation } from 'react-i18next'

export const RootContainer = () => {
  const { t } = useTranslation()
  return (
    <main className='flex flex-col bg-light-gradient dark:bg-dark-gradient'>
      <HeaderComponent />z
      <SummaryComponent />
      <TechnicalSkillsComponent />
      <EducationComponent />
      <ExperienceComponent />
      <WorkMakeComponent />
      <footer
        className='flex flex-col items-center p-4 gap-4 bg-slate-200 dark:bg-slate-800 shadow-2xl'
        style={{ borderTop: '1px solid black' }}
      >
        <span className='text-sm font-semibold uppercase text-slate-900 dark:text-slate-200'>
          {t('Code your way to the future with passion and perseverance !'.toUpperCase())}
        </span>
        <div className='flex flex-row gap-4 justify-center items-center'>
          {Children.toArray(
            footer_data.map((v) => {
              return (
                <div
                  className='p-4 rounded-full shadow-xl aspect-square bg-slate-800
                    flex items-center justify-center size-20'
                >
                  <img src={v.url} className='w-full' alt={v.alt} />
                </div>
              )
            })
          )}
        </div>
      </footer>
    </main>
  )
}
