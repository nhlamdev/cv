import {
  HeaderComponent,
  TechnicalSkillsComponent,
  ExperienceComponent,
  WorkMakeComponent,
  EducationComponent
} from '@/components'
import { SummaryComponent } from '@/components/summary'

export const RootContainer = () => {
  return (
    <main className='flex flex-col bg-light-gradient dark:bg-dark-gradient'>
      <HeaderComponent />
      <SummaryComponent />
      <TechnicalSkillsComponent />
      <EducationComponent />
      <ExperienceComponent />
      <WorkMakeComponent />
    </main>
  )
}
