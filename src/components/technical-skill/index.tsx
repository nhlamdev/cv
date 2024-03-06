import { BsXDiamondFill } from 'react-icons/bs'
import { skillData } from './technical-data'

import { Children } from 'react'
import { useTranslation } from 'react-i18next'

export const TechnicalSkillsComponent = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col p-2 sm:p-8 gap-4' id='technical'>
      <div
        className='w-full flex flex-row justify-center items-center
        gap-4 scroll-m-2'
      >
        <div className='h-[2px] w-20 bg-slate-900 dark:bg-slate-100' />
        <h2
          className='text-center font-semibold text-lg sm:text-xl md:text-2xl uppercase 
        text-slate-900 dark:text-slate-100'
        >
          {t('TECHNICAL')}
        </h2>
        <div className='h-[2px] w-20 bg-slate-900 dark:bg-slate-100' />
      </div>

      <div
        className='flex flex-col gap-6 p-8 bg-slate-800 dark:bg-slate-400
      bg-opacity-20 rounded-md shadow-2xl'
      >
        {Children.toArray(
          skillData.map((group) => {
            return (
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-2 items-center'>
                  <BsXDiamondFill />

                  <h3 className='font-semibold text-xs sm:text-sm uppercase'>{group.title}</h3>
                </div>

                <div className='flex flex-row gap-2 pl-2 flex-wrap'>
                  {Children.toArray(
                    group.skills.map((skill) => {
                      return (
                        <div
                          className={`flex flex-row gap-2 items-center px-2 sm:px-4 py-1 sm:py-2 
                          rounded-md shadow-md`}
                          style={{ backgroundColor: skill.bgColor }}
                        >
                          <skill.icon.default style={{ color: skill.textColor }} />

                          <span
                            className='text-xs sm:text-sm font-semibold capitalize select-none '
                            style={{ color: skill.textColor }}
                          >
                            {skill.text}
                          </span>
                        </div>
                      )
                    })
                  )}
                </div>
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}
