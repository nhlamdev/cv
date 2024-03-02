import { FaFacebook, FaGithub, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const HeaderComponent = () => {
  return (
    <header
      className='w-screen h-screen flex items-center justify-center bg-slate-400
    bg-blend-multiply bg-cover bg-fixed bg-center bg-no-repeat'
      style={{
        backgroundImage: `url("/background/header.jfif")`
      }}
    >
      <div
        className='flex flex-row gap-4 py-4 px-8 rounded-md bg-slate-200 bg-opacity-20 
      backdrop-filter backdrop-blur-lg'
      >
        <img
          src='/image/avatar.jpg'
          alt='avatar'
          className='rounded-full size-48 shadow-md'
          style={{ border: '4px solid black' }}
        />

        <div className='flex flex-col justify-around'>
          <div className='flex flex-col gap-1'>
            <span className='text-2xl bold text-slate-100'>Nguyễn Hoàng Lâm</span>
            <span className='text-sm italic text-slate-100'>25 year old</span>
          </div>

          <div className='flex flex-col gap-1'>
            <div
              className='flex flex-row items-center gap-2 bg-slate-200 rounded-md 
            bg-opacity-40 p-1 shadow-sm'
            >
              <FaPhoneAlt className='text-xl' />
              <span className='text-sm font-semibold'>+84367695329</span>
            </div>
            <div
              className='flex flex-row items-center gap-2 bg-slate-200 rounded-md 
            bg-opacity-40 p-1 shadow-sm'
            >
              <MdEmail className='text-xl' />
              <span className='text-sm font-semibold '>dev.nhlam@gmail.com</span>
            </div>
          </div>

          <div className='flex flex-row gap-2'>
            <a href='/'>
              <FaFacebook className='text-2xl text-slate-200' />
            </a>
            <a href='/'>
              <FaGithub className='text-2xl text-slate-200' />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
