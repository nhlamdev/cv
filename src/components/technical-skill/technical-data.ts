import { IconType } from 'react-icons'
import { BiLogoPostgresql, BiLogoSass } from 'react-icons/bi'
import { FaGulp, FaPython } from 'react-icons/fa'
import { IoLogoReact } from 'react-icons/io5'
import { SiMicrosoftsqlserver, SiMui, SiNestjs, SiTailwindcss, SiTypescript, SiVite, SiWebpack } from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'

interface ITechnicalSkills {
  text: string
  bgColor: string
  textColor: string
  icon: {
    default: IconType
    defaultColor?: '#fff'
  }
}

interface ITechnicalSkillsGroup {
  title: string
  skills: ITechnicalSkills[]
}

export const skillData: ITechnicalSkillsGroup[] = [
  {
    title: 'languages',
    skills: [
      { text: 'typescript', bgColor: '#3178c6', textColor: '#ffffff', icon: { default: SiTypescript } },
      { text: 'python', bgColor: '#F0F8FF', textColor: '#000000', icon: { default: FaPython } }
    ]
  },
  {
    title: 'framework',
    skills: [
      { text: 'reactjs', bgColor: '#61DAFB', textColor: '#fff', icon: { default: IoLogoReact } },
      { text: 'nextjs', bgColor: '#F0F8FF', textColor: '#000000', icon: { default: TbBrandNextjs } },
      { text: 'nestjs', bgColor: ' #E0234E', textColor: '#FFFFFF', icon: { default: SiNestjs } },
      { text: 'tailwind', bgColor: '#ffffff', textColor: '#377DFF', icon: { default: SiTailwindcss } },
      { text: 'mui', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiMui } },
      { text: 'sass', bgColor: '#0070f3', textColor: '#000000', icon: { default: BiLogoSass } },
      { text: 'react native', bgColor: '#0070f3', textColor: '#000000', icon: { default: TbBrandReactNative } }
    ]
  },
  {
    title: 'database management',
    skills: [
      { text: 'mssql', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiMicrosoftsqlserver } },
      { text: 'postgres', bgColor: '#0070f3', textColor: '#000000', icon: { default: BiLogoPostgresql } }
    ]
  },
  {
    title: 'build tool',
    skills: [
      { text: 'webpack', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiWebpack } },
      { text: 'vite', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiVite } },
      { text: 'gulp', bgColor: '#0070f3', textColor: '#000000', icon: { default: FaGulp } }
    ]
  },
  {
    title: 'another',
    skills: [
      { text: 'Ci/cd with gitlab', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiWebpack } },
      { text: 'docker', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiVite } },
      { text: 'Nginx', bgColor: '#0070f3', textColor: '#000000', icon: { default: FaGulp } },
      { text: 'Redis', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiWebpack } },
      { text: 'queue', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiVite } },
      { text: 'Minio', bgColor: '#0070f3', textColor: '#000000', icon: { default: SiWebpack } }
    ]
  }
]