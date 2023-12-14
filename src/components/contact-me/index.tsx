import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export const ContactMeComponent = () => {
  return (
    <section className='flex flex-col p-4 gap-4 bg-amber-100'>
      <p className='text-xl font-semibold text-center'>contact me</p>
      <div className='flex flex-row'>
        <div className='flex-1 flex justify-center items-center'>
          <img src='/svg/contact.svg' width={400} height={400} style={{ objectFit: 'cover' }} alt='contact' />
        </div>

        <div className='flex-1 flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <div>
              <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Tiêu đề
              </label>
              <input
                type='text'
                id='first_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='John'
                required
              />
            </div>

            <div className=' bg-white rounded-t-lg dark:bg-gray-800'>
              <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Nội dung
              </label>
              <textarea
                id='message'
                rows={4}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                style={{ resize: 'none' }}
                placeholder='Write your thoughts here...'
              />
            </div>

            <button
              type='button'
              className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '
              style={{
                width: 'fit-content'
              }}
            >
              Gửi
            </button>
          </div>
          <div className='flex flex-row w-full gap-4 justify-center'>
            <BsFacebook
              style={{ fontSize: '30px' }}
              className='text-sky-500 cursor-pointer transition-transform hover:scale-110 hover:shadow-lg'
            />
            <AiFillGoogleCircle
              style={{ fontSize: '30px' }}
              className='text-red-500 cursor-pointer transition-transform hover:scale-110 hover:shadow-lg'
            />
            <AiFillGithub
              style={{ fontSize: '30px' }}
              className='text-slate-500-500 cursor-pointer transition-transform hover:scale-110 hover:shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
