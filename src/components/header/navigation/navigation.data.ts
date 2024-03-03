interface INavigationItem {
  url: string
  text: string
}

export const navigation_data: INavigationItem[] = [
  { url: '/#summary', text: 'summary' },
  { url: '/#technical', text: 'technical' },
  { url: '/#education', text: 'education' },
  { url: '/#experience', text: 'experience' }
]
