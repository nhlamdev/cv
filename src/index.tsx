import '@/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { SnackbarProvider } from 'notistack'
import { RootContainer } from './container'
import '@/language'

const RootComponent = () => {
  const emotionCache = createCache({ key: 'css' })

  return (
    <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <SnackbarProvider>
          <RootContainer />
        </SnackbarProvider>
      </CacheProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RootComponent />)
