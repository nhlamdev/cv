const MAIN_FRONTEND_DOMAIN = process.env.MAIN_FRONTEND_DOMAIN

export const HeaderComponent = () => {
  return (
    <header
      className='h-screen w-screen relative bg-slate-100
      bg-blend-multiply bg-cover bg-fixed bg-center bg-no-repeat'
      style={{
        backgroundImage: `url("/background/header.jfif")`
      }}
    >
      <div className='flex flex-row absolute top-4 left-4 items-center'>
        <a
          href={MAIN_FRONTEND_DOMAIN}
          className='w-[100px] md:w-[100px] h-[100px] md:h-[100px] relative 
  bg-slate-200 rounded-full'
        >
          <img
            src={`${MAIN_FRONTEND_DOMAIN}/logo/logo-none-crop.png`}
            sizes='100vw'
            alt='logo'
            style={{ filter: 'drop-shadow(5px 5px 5px #222)' }}
          />
        </a>
      </div>
      <div
        className='bottom-5 w-[400px] sm:w-[500px] md:w-[580px] h-fit'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)',
          left: '10px',
          backgroundColor: '#00000040',
          boxShadow: '5px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(2.5px)',
          padding: '40px 20px',
          borderRadius: '10px'
        }}
      >
        <span
          className='text-lg sm:text-2xl md:text-3xl italic'
          style={{
            background: 'linear-gradient(149deg, rgba(39, 174, 96, 0.80) 0%, rgba(236, 180, 182, 0.80) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Code your way to the future
          <br />
          with passion and perseverance !
        </span>
      </div>
      {/* ------------- */}
      <img
        src={`/svg/code-think.svg`}
        className='hidden md:block'
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          filter: 'drop-shadow(5px 5px 5px #222)'
        }}
        width={200}
        height={100}
        sizes='100vw'
        alt='code-think'
      />
    </header>
  )
}
