interface IWorkMakeItem {
  url: string
  title: string
}

const mocks: IWorkMakeItem[] = [
  { title: 'Working', url: '/svg/developer.svg' },
  { title: 'Upgrade', url: '/svg/read-book.svg' },
  { title: 'Relax', url: '/svg/relax.svg' }
]

export const WorkMakeComponent = () => {
  return (
    <section className='flex flex-col gap-4 px-2 py-4 w-full'>
      <div
        className='w-full flex flex-row justify-center items-center
        gap-4 scroll-m-2 '
      >
        <div className='h-[2px] w-20 bg-slate-900' />
        <h2 className='text-center font-semibold text-2xl uppercase'>Work cycle</h2>
        <div className='h-[2px] w-20 bg-slate-900' />
      </div>

      <div className='flex flex-col gap-2 lg:flex-row justify-around w-full'>
        {mocks.map((v, k) => {
          return (
            <div
              key={`work-cycle-${k}`}
              className='flex flex-row lg:flex-col items-start
              relative justify-start lg:justify-center gap-2
              group w-full lg:w-auto lg:items-center '
            >
              <div
                className='hidden lg:block absolute bg-slate-900 bg-opacity-0 invisible 
              -top-10 -left-10 right-10 bottom-10 group-hover:bg-opacity-60 
              group-hover:visible group-hover:right-0 group-hover:left-0 
              group-hover:-top-0 group-hover:bottom-0 rounded-md blur-sm
              '
                style={{ transition: 'all ease .5s' }}
              />
              <div
                className='hidden lg:block absolute bg-slate-900 bg-opacity-0 invisible 
              top-10 left-10 -right-10 -bottom-10 group-hover:bg-opacity-60 
              group-hover:visible group-hover:right-0 group-hover:left-0 
              group-hover:-top-0 group-hover:bottom-0 rounded-md blur-sm
              '
                style={{ transition: 'all ease .5s' }}
              />

              <img
                className='shadow-xl p-2 rounded-md border-2 border-solid border-slate-600'
                src={v.url}
                alt={v.url}
              />

              <span
                className='font-semibold absolute select-none text-slate-200 translate-y-4
              group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible
              opacity-0 invisible rounded-md px-4 py-1 text-md hidden lg:inline'
                style={{ transition: 'all ease .5s', border: '1px solid white' }}
              >
                {v.title}
              </span>

              <span className='m-4 text-2xl text-slate-900 lg:hidden inline'>{v.title}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
