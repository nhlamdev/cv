import { IconType } from 'react-icons'
import { BiLogoPostgresql, BiLogoSass } from 'react-icons/bi'
import { BsGitlab } from 'react-icons/bs'
import { DiRedis } from 'react-icons/di'
import { FaDocker, FaGulp, FaPython } from 'react-icons/fa'
import { HiQueueList } from 'react-icons/hi2'
import { IoLogoReact } from 'react-icons/io5'
import {
  SiMicrosoftsqlserver,
  SiMinio,
  SiMui,
  SiNestjs,
  SiNginx,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack
} from 'react-icons/si'
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
    title: 'framework & library',
    skills: [
      { text: 'reactjs', bgColor: '#61DAFB', textColor: '#282c34', icon: { default: IoLogoReact } },
      { text: 'react native', bgColor: '#61dafb', textColor: '#282c34', icon: { default: TbBrandReactNative } },
      { text: 'nextjs', bgColor: '#F0F8FF', textColor: '#000000', icon: { default: TbBrandNextjs } },
      { text: 'nestjs', bgColor: ' #E0234E', textColor: '#FFFFFF', icon: { default: SiNestjs } },
      { text: 'tailwind', bgColor: '#ffffff', textColor: '#377DFF', icon: { default: SiTailwindcss } },
      { text: 'mui', bgColor: '#1976d2', textColor: '#FFFFFF', icon: { default: SiMui } },
      { text: 'sass', bgColor: '#f5f7f9', textColor: '#cf649a', icon: { default: BiLogoSass } }
    ]
  },
  {
    title: 'database management',
    skills: [
      { text: 'mssql', bgColor: '#8b97a4', textColor: '#bf0f0e', icon: { default: SiMicrosoftsqlserver } },
      { text: 'postgres', bgColor: '#f7f7f7', textColor: '#305d8d', icon: { default: BiLogoPostgresql } }
    ]
  },
  {
    title: 'build tool',
    skills: [
      { text: 'webpack', bgColor: '#8acef2', textColor: '#1b74ba', icon: { default: SiWebpack } },
      { text: 'vite', bgColor: '#8b6af5', textColor: '#f6c523', icon: { default: SiVite } },
      { text: 'gulp', bgColor: '#d34446', textColor: '#f7f7f7', icon: { default: FaGulp } }
    ]
  },
  {
    title: 'another',
    skills: [
      { text: 'Ci/cd with gitlab', bgColor: '#da4127', textColor: '#f7f7f7', icon: { default: BsGitlab } },
      { text: 'docker', bgColor: '#f7f7f7', textColor: '#018cb7', icon: { default: FaDocker } },
      { text: 'Nginx', bgColor: '#0e9246', textColor: '#f7f7f7', icon: { default: SiNginx } },
      { text: 'Redis', bgColor: '#f7f7f7', textColor: '#9f1910', icon: { default: DiRedis } },
      {
        text: 'rabbitmq',
        bgColor: '#f7f7f7',
        textColor: '#f76300',
        icon: { default: HiQueueList }
      },
      {
        text: 'bullmq',
        bgColor: '#f7f7f7',
        textColor: '#16327a',
        icon: { default: HiQueueList }
      },
      { text: 'Minio', bgColor: '#f7f7f7', textColor: '#c72c48', icon: { default: SiMinio } }
    ]
  }
]
