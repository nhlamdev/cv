import { BsXDiamondFill } from 'react-icons/bs'
import { skillData } from './technical-data'

import { Children } from 'react'

export const TechnicalSkillsComponent = () => {
  return (
    <section className='flex flex-col p-8 gap-4'>
      <h2 className='text-2xl text-center font-bold uppercase'>technical skill</h2>

      <div className='flex flex-col gap-6 p-8 bg-slate-200 rounded-md shadow-md'>
        {Children.toArray(
          skillData.map((group) => {
            return (
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-2 items-center'>
                  <BsXDiamondFill />

                  <h3 className='font-semibold text-md capitalize'>{group.title}</h3>
                </div>

                <div className='flex flex-row gap-2 pl-2 flex-wrap'>
                  {Children.toArray(
                    group.skills.map((skill) => {
                      return (
                        <div
                          className={`flex flex-row gap-2 items-center px-4 py-2 
                          rounded-md shadow-md`}
                          style={{ backgroundColor: skill.bgColor }}
                        >
                          <skill.icon.default />

                          <span
                            className='text-sm font-semibold lowercase select-none'
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
