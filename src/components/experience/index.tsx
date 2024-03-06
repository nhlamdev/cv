import { experiences } from './experience-data'
import { Children } from 'react'
import { useTranslation } from 'react-i18next'
import { BsXDiamondFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'

export const ExperienceComponent = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col p-2 sm:p-8 gap-4' id='experience'>
      <div
        className='w-full flex flex-row justify-center items-center
        gap-4 scroll-m-2'
      >
        <div className='h-[2px] w-20 bg-slate-900 dark:bg-slate-100' />
        <h2
          className='text-center font-semibold text-lg sm:text-xl md:text-2xl uppercase 
        text-slate-900 dark:text-slate-100'
        >
          {t('EXPERIENCE')}
        </h2>
        <div className='h-[2px] w-20 bg-slate-900 dark:bg-slate-100' />
      </div>
      <div className='flex flex-col gap-10'>
        {Children.toArray(
          experiences.map((ex) => {
            return (
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2 items-center'>
                  <BsXDiamondFill className='text-state-900 dark:text-slate-100' />

                  <div className='flex flex-col  text-state-900 dark:text-slate-100'>
                    <div className='flex flex-row items-center'>
                      {ex.company.url ? (
                        <a
                          href={ex.company.url}
                          className='text-md font-semibold  text-state-900 dark:text-slate-100
                        hover:text-slate-600'
                          style={{
                            transition: 'all ease .3s'
                          }}
                        >
                          {ex.company.name}
                        </a>
                      ) : (
                        <span className='text-md font-semibold  text-state-900 dark:text-slate-100 '>
                          {ex.company.name}
                        </span>
                      )}
                      |
                      <span className='text-  text-state-900 dark:text-slate-100'>
                        {ex.start} - {ex.end ? ex.end : 'Current'}
                      </span>
                    </div>

                    <span className='text-xs italic font-normal  text-state-900 dark:text-slate-100'>
                      {ex.position}
                    </span>
                  </div>
                </div>

                {/* ----------detail--------- */}
                <div className='flex flex-col gap-2'>
                  {Children.toArray(
                    ex.details.map((detail) => {
                      return (
                        <div className='flex flex-row gap-2 items-center ml-4'>
                          <div>
                            <MdWork className='text-md  text-state-900 dark:text-slate-100' />
                          </div>

                          <div>
                            <span className='capitalize text-sm font-semibold text-state-900 dark:text-slate-100'>
                              {detail.title}
                            </span>
                            :{' '}
                            <span className='lowercase text-sm text-state-900 dark:text-slate-100'>
                              {detail.description}
                            </span>
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
                {/* ----------detail--------- */}
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}
