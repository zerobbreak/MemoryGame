# React Memory Game

Welcome to the React Memory Game project! This is a simple web application built with React that allows users to play a memory game with cards displaying images and informational text fetched from an external API.

## Features

- Display a scoreboard to keep track of the current score and the best score achieved.
- Cards are displayed in a random order every time a user clicks one.
- Fetch cards and text content from an external API (e.g., Giphy, Pokemon API).
- Stylish and responsive design for an enhanced user experience.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/zerobbreak/react-memory-game.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd react-memory-game
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

    Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Folder Structure

```plaintext
react-memory-game/
|-- public/
|-- src/
|   |-- components/
|   |   |-- Card.js
|   |   |-- Scoreboard.js
|   |   |-- ...
|   |-- services/
|   |   |-- api.js
|   |-- styles/
|   |   |-- App.css
|   |   |-- Card.css
|   |   |-- ...
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

- **public**: Contains the static assets and HTML template.
- **src**: The main source code folder.
  - **components**: React components used in the application.
  - **services**: API-related functions.
  - **styles**: Stylesheets for styling components.
  - **App.js**: The main React component.
  - **index.js**: Entry point for the React application.

## Styling

The application is styled using CSS, and styles are organized in the `styles` folder. Feel free to customize the styles based on your preferences.

## Deployment

Don't forget to deploy your application! You can use platforms like Netlify, Vercel, or GitHub Pages for seamless deployment.

## Contributing

Feel free to contribute to this project by submitting pull requests. If you encounter any issues, please open an issue on the GitHub repository.
