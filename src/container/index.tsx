import { HeaderComponent, TechnicalSkillsComponent, ExperienceComponent } from '@/components'
import { SummaryComponent } from '@/components/summary'

export const RootContainer = () => {
  return (
    <main className='flex flex-col'>
      <HeaderComponent />
      <SummaryComponent />
      <TechnicalSkillsComponent />
      <ExperienceComponent />
    </main>
  )
}
