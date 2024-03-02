import { experiences } from './experience-data'
import { Children } from 'react'
import { BsXDiamondFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'

export const ExperienceComponent = () => {
  return (
    <section className='flex flex-col p-8 gap-4'>
      <h2 className='text-2xl text-center font-bold uppercase'>professional experience</h2>
      <div className='flex flex-col gap-10'>
        {Children.toArray(
          experiences.map((ex) => {
            return (
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2 items-center'>
                  <BsXDiamondFill />

                  <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>
                      <span className='text-md font-semibold'>{ex.company_name}</span>|
                      <span className='text-sm'>
                        {ex.start} - {ex.end ? ex.end : 'Current'}
                      </span>
                    </div>

                    <span className='text-xs italic font-normal'>{ex.position}</span>
                  </div>
                </div>

                {/* ----------detail--------- */}
                <div className='flex flex-col gap-2'>
                  {Children.toArray(
                    ex.details.map((detail) => {
                      return (
                        <div className='flex flex-row gap-2 items-center ml-4'>
                          <div>
                            <MdWork className='text-md' />
                          </div>

                          <div>
                            <span className='capitalize text-sm font-semibold'>{detail.title}</span>:{' '}
                            <span className='lowercase text-sm '>{detail.description}</span>
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
