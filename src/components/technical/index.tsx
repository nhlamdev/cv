import { techSkill } from '@/constant'

export const TechnicalComponent = () => {
  return (
    <section className='flex flex-col gap-2 px-4 py-4 w-full bg-cyan-100 items-center'>
      <p className='text-center font-semibold text-xl w-full'>Techicel skill</p>

      <div className='flex flex-row flex-wrap w-4/5 p-10 rounded-lg gap-10' style={{ flex: 1 }}>
        {techSkill.map((skill) => {
          return (
            <div
              key={skill.text}
              className='flex flex-row gap-4 px-6 py-2 bg-slate-800 rounded-lg items-center w-40'
              style={{
                borderRadius: '1px solid black',
                height: 'fit-content'
              }}
            >
              <img
                src={skill.image}
                className='hover:scale-110 transition-transform cursor-pointer'
                width={30}
                height={30}
                style={{
                  objectFit: 'cover'
                }}
                alt='react-icon'
              />

              <span className='text-sm font-semibold text-slate-200'>{skill.text}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
