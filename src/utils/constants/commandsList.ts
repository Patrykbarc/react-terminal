type Commands = {
  cmd: string
  description: string
}

export const commandsListArray: string[] = [
  'list',
  'help',
  'about',
  'skills',
  'experience',
  'projects',
  'contact',
  'github',
  'linkedin',
  'clear'
]

export const commandsList: Commands[] = [
  {
    cmd: 'list',
    description: 'Displays a list of all available commands'
  },
  {
    cmd: 'help',
    description: 'Displays a description of all commands'
  },
  {
    cmd: 'about',
    description: 'Displays information about me'
  },
  {
    cmd: 'skills',
    description: 'Displays information about my skills'
  },
  {
    cmd: 'experience',
    description: ' Displays information about my experience'
  },
  {
    cmd: 'projects',
    description: 'Displays a list of my projects'
  },
  {
    cmd: 'contact',
    description: 'Displays contact information'
  },
  {
    cmd: 'github',
    description: 'Displays the address to my Github page'
  },
  {
    cmd: 'linkedin',
    description: 'Displays the address to my Linkedin page'
  },
  {
    cmd: 'clear',
    description: 'Clears the entire chat window'
  }
]
