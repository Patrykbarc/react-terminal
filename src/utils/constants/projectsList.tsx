import { ReactNode } from 'react'
import GALICJA_DASHBOARD from '/public/screenshots/dashboard.jpg'
import GALICJA_LOGIN_PAGE from '/public/screenshots/login-page.png'

export type ProjectsList = {
  name: string
  status: 'development' | 'finished'
  description: string | ReactNode
  techs: string | ReactNode
  gitUrl?: string
  deploy?: string
  image?: string[]
}

export const projectsList: ProjectsList[] = [
  {
    name: 'SecureKeyGen',
    status: 'finished',
    gitUrl: 'https://github.com/Patrykbarc/ts-password-generator',
    deploy: 'https://securekeygen.netlify.app/',
    description:
      'The SecureKeyGen is a simple React-based powered with TypeScript application that allows users to generate secure passwords based on their preferences. The application provides a user-friendly interface to customize password length and include or exclude different character types such as letters, capital letters, numbers, and special characters.',
    techs: 'React | TypeScript | Tailwind'
  },
  {
    name: 'Piotr Kukla Photo',
    status: 'finished',
    deploy: 'http://pkuklaphoto.pl/',
    description:
      "A professional photographer's personal website. The site provides a public content management panel and includes an administrator management panel.",
    techs: 'PHP | MySql | JavScript | Bootstrap'
  },
  {
    name: 'The Old Sailor Barber',
    status: 'finished',
    gitUrl: 'https://github.com/Patrykbarc/old-sailor-ts',
    deploy: 'https://old-sailor-barber.netlify.app/',
    description:
      'The "Old Sailor Barber" project is a showcase website for a barber shop, featuring an integrated online store where users can explore products, though purchases are currently unavailable. The site provides information about services, the team, and location, all presented with a stylish design, smooth animations, and optimized performance',
    techs: 'Next.js | Shopify | Tailwind | ShadCn'
  },
  {
    name: 'Galicja',
    status: 'finished',
    description:
      'The "Old Sailor Barber" project is a showcase website for a barber shop, featuring an integrated online store where users can explore products, though purchases are currently unavailable. The site provides information about services, the team, and location, all presented with a stylish design, smooth animations, and optimized performance',
    techs: 'Next.js | Shopify | Tailwind | ShadCn',
    image: [GALICJA_DASHBOARD, GALICJA_LOGIN_PAGE]
  }
]
