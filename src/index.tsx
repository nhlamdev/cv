import '@/styles/global.scss'
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const RootContainer = lazy(() => import('@/container').then((mod) => ({ default: mod.RootContainer })))
import '@/language'

const RootComponent = () => {
  const emotionCache = createCache({ key: 'css' })

  return (
    <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <Suspense fallback={<div>Loading...</div>}>
          <RootContainer />
        </Suspense>
      </CacheProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RootComponent />)
