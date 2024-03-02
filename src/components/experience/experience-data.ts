interface IExperienceDetail {
  title: string
  description: string
}

interface IExperience {
  company: { name: string; url?: string }
  start: string
  end?: string
  position: string
  details: IExperienceDetail[]
}

export const experiences: IExperience[] = [
  {
    company: { name: 'Oryza Systems', url: 'https://oryza.vn/' },
    start: '18/4/2022',
    position: 'Software Engineer',
    details: [
      {
        title: 'application interface',
        description:
          'Develop user interfaces on web app platforms using Next.js with Material-UI and Tailwind CSS, or on mobile applications using React Native.'
      },
      {
        title: 'OAuth 2.0 Service',
        description:
          'Build a service with access token and refresh token. Integrate with SWR to periodically verify the token. Handle OAuth exception filtering along with Axios instance and authentication guard'
      },
      {
        title: 'Computer Vision',
        description:
          'Collect image data, evaluate and preprocess it using Roboflow platform, then pretrain the cleaned data with YOLOv8 model for object detection and MobileNet for classification. Deploy on Raspberry Pi environment.'
      },
      {
        title: 'sync and analysis data',
        description:
          'Synchronize and evaluate tracking results of the same object from multiple smart cameras returning asynchronous results.'
      },
      {
        title: 'odoo erp',
        description: 'Refine and enhance existing modules according to relevant business requirements.'
      }
    ]
  }
]
