import { ReactNode } from 'react'

export interface Experience {
  company: string
  position: string
  timespan: string
  text: ReactNode
}

export const experience: Experience[] = [
  {
    company: 'modern forms',
    position: 'graphic designer',
    timespan: '2020 - 2023',
    text: (
      <>
        <li>
          Design of sports, business and occasional awards Visualization of
          products
        </li>
        <li>DTP</li>
        <li>Training of new graphic designers</li>
        <li>Creating marketing materials for the store and social media</li>
      </>
    )
  },
  {
    company: 'modern forms',
    position: 'fullstack developer',
    timespan: '04.2023 - current',
    text: (
      <>
        <li>
          I designed and created an internal product configurator, enabling the
          company's employees to create tasks quickly and easily
        </li>
        <li>
          Currently, I am actively involved in the process of migrating the old
          system to a new one, which I am coding myself using Next.js and MySql
          technologies
        </li>
        <li>
          I continue to play a key role in its development and customization to
          fit the company's needs. I also designed and created a tool for the
          production department to manage processes
        </li>
        <li>
          I focus on user experience by analyzing and adapting interfaces to
          meet user needs. I optimize the system for performance and user
          experience
        </li>
      </>
    )
  }
]
