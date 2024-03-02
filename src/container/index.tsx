import { HeaderComponent } from '@/components'
import { SummaryComponent } from '@/components/summary'

export const RootContainer = () => {
  return (
    <main className='flex flex-col'>
      <HeaderComponent />
      <SummaryComponent />
    </main>
  )
}
