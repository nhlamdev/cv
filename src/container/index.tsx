import {
  ContactMeComponent,
  HeaderComponent,
  PositionComponent,
  SummaryComponent,
  TechnicalComponent,
  WhyMakeComponent,
  WorkMakeComponent
} from '@/components'

export const RootContainer = () => {
  return (
    <main className='flex flex-col'>
      <HeaderComponent />
      <WorkMakeComponent />
      <PositionComponent />
      <SummaryComponent />
      <TechnicalComponent />
      <WhyMakeComponent />
      <ContactMeComponent />
    </main>
  )
}
