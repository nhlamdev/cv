import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGithub, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const CardInfoComponent = () => {
  const { t } = useTranslation()
  return (
    <div
      className='flex flex-col md:flex-row gap-10 py-10 px-20 rounded-md bg-slate-200 bg-opacity-20 
            backdrop-filter backdrop-blur-lg items-center'
    >
      <img
        src='/image/avatar.jpg'
        alt='avatar'
        className='rounded-full size-44 sm:size-60 shadow-md'
        style={{ border: '4px solid black' }}
      />

      <div className='flex flex-col justify-around gap-2'>
        <div className='flex flex-col gap-1 items-center md:items-start'>
          <span className='text-md bold text-slate-100 sm:text-2xl'>Nguyễn Hoàng Lâm</span>
          <span className='text-sm italic text-slate-100'>25 {t('YEAR_OLD')}</span>
        </div>

        <div className='flex flex-col gap-1 '>
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

        <div className='flex flex-row gap-2 justify-center sm:justify-start'>
          <a href='https://www.facebook.com/'>
            <FaFacebook className='text-2xl text-slate-200' />
          </a>
          <a href='https://github.com/nhlamdev'>
            <FaGithub className='text-2xl text-slate-200' />
          </a>
        </div>
      </div>
    </div>
  )
}
