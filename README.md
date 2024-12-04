# Terminal Project

## Project Overview

This project is a terminal-like web application built using React and TypeScript. It showcases various functionalities, including command handling, project descriptions, and a user-friendly interface. The application is designed to simulate a terminal experience, allowing users to interact with it through commands.

## Deploy

You can view the live application at: [Terminal App](https://patrykbarc-terminal.netlify.app/)

## Key Features

- **Command Handling**: Users can input commands to navigate through different sections of the application, such as viewing projects, skills, and experience.
- **Dynamic Content**: The application dynamically renders content based on user input, providing a responsive and interactive experience.
- **Custom Hooks**: Utilizes custom React hooks for managing state and side effects, enhancing code reusability and organization.
- **Dark Mode**: Implemented a dark mode feature using Tailwind CSS, improving accessibility and user experience.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite
- **Testing**:
  - Playwright for end-to-end testing
  - Jest for unit testing
- **Linting and Formatting**:
  - ESLint
  - Prettier

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Patrykbarc/terminal.git
   cd terminal
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Commands

The following commands are available in the terminal:

- `list`: Displays a list of all available commands.
- `help`: Provides descriptions of all commands.
- `about`: Displays information about the developer.
- `skills`: Shows the developer's skills.
- `experience`: Lists the developer's work experience.
- `projects`: Displays a list of projects.
- `contact`: Shows contact information.
- `github`: Links to the developer's GitHub page.
- `linkedin`: Links to the developer's LinkedIn profile.
- `secret`: Displays a secret message. 🤫
- `clear`: Clears the terminal chat.

## Key Learnings and Achievements

- **Component Handling**: Improved skills in managing React components, including efficient prop passing and typing.
- **Data Structure Logic**: Developed logical data structures for easy data manipulation and mapping.
- **Custom Hooks**: Created custom hooks to abstract component logic and enhance reusability.
- **Dark Mode Implementation**: Successfully integrated a dark mode feature using Tailwind CSS.
