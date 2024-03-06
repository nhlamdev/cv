import { CardInfoComponent } from './card-info'
import { NavigationComponent } from './navigation'

export const HeaderComponent = () => {
  return (
    <header
      className='w-screen h-screen flex flex-row items-center justify-around bg-slate-400
      bg-blend-multiply bg-cover bg-fixed bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url("/background/header.jfif")`
      }}
    >
      <NavigationComponent />
      <div className='absolute bottom-2 right-2  hidden  md:block'>
        <img src='/svg/code-think.svg' alt='code think' />
      </div>
      <CardInfoComponent />
    </header>
  )
}
