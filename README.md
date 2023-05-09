# Marvelous Todo - Client

![React.js](https://img.shields.io/badge/framework-React.js-brightgreen) ![Vite.js](https://img.shields.io/badge/bundler-Vite.js-646cff) ![Tailwind CSS](https://img.shields.io/badge/UI-Tailwind_CSS-15ddc1) ![Heroicons](https://img.shields.io/badge/icons-Heroicons-7928ca) ![MIT License](https://img.shields.io/badge/license-MIT-blue) [![Netlify Status](https://api.netlify.com/api/v1/badges/2f7b1a1f-33e7-439f-b014-16642eee5fc5/deploy-status)](https://app.netlify.com/sites/marvelous-todo/deploys)

Marvelous Todo is a simple, elegant, and user-friendly todo list application built using React.js and Tailwind CSS. The front-end is designed to interact seamlessly with the [Marvelous Todo - Server](https://github.com/Geebrox/marvelous-todo-server) built using Nest.js, Prisma, and MongoDB.

## Demo

The application is deployed to Netlify and can be accessed at [this](https://marvelous-todo.netlify.app) url.

## Features

- Public access: No login/authentication/authorization required.
- Two-column layout for Todo and Done tasks.
- Alphabetically sorted todo lists.
- Check and uncheck tasks, with automatic list reassignment.
- Unlimited "To Do" list.
- "Done" list displays the 10 most recently completed tasks.
- "Delete all tasks" button with user confirmation prompt.
- Dynamic search functionality that filters both lists based on user input.

## Getting Started

### Prerequisites

- Ensure that you have the latest version of [Node.js](https://nodejs.org/) installed.
- Install [Yarn](https://classic.yarnpkg.com/en/docs/install/) package manager.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Geebrox/marvelous-todo-client.git
   ```

2. Change to the project directory:

   ```bash
   cd marvelous-todo-client
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

4. Run the development server:

   ```bash
   yarn dev
   ```

5. Open your browser and navigate to **provided url** in your console.

## Available Scripts

- `yarn build`: Compiles the application for production, creating an optimized build ready for deployment.
- `yarn dev`: Starts the Vite development server, allowing you to work on the project with live updates as you make changes to the code.
- `yarn format`: Beautifies the codebase by applying consistent formatting using Prettier, making the code more readable and maintainable.
- `yarn lint`: Analyzes the codebase using ESLint to identify and fix potential issues, helping to ensure code quality and best practices.
- `yarn preview`: Starts a local server to preview the production build of the application, allowing you to test the final version before deploying it.

To run any of these scripts, simply open a terminal in the project directory and enter the corresponding command, for example:

```bash
yarn dev
```

## Technology Stack

- UI Framework: [React.js](https://reactjs.org/)
- Bundler: [Vite.js](https://vitejs.dev/)
- UI Library: [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Heroicons](https://heroicons.com/)
- Data fetching: [SWR](https://swr.vercel.app/) with [Axios](https://axios-http.com/)

## Repository

The project codebase is hosted on GitHub at [github.com/Geebrox/marvelous-todo-client](https://github.com/Geebrox/marvelous-todo-client).

## Contributing

Feel free to submit issues or pull requests. Make sure to follow the existing code style and formatting.

## License

This project is licensed under the MIT License.
