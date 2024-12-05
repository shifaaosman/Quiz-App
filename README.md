echo "# Online Quiz App

A modern, interactive quiz application built with **React**, **Tailwind CSS**, and **JavaScript**. This app allows users to take quizzes from multiple categories, see their scores at the end, and view the leaderboard with high scores. The quiz questions and answers are randomized to prevent cheating, and there is a timer for each question to add a sense of urgency.

## Features

- **Multiple Quiz Categories**: Users can select a category to take the quiz.
- **Randomized Questions & Answers**: The quiz questions and answers are shuffled each time the user starts a new session.
- **Timer**: Each question has a timer, making the quiz more engaging and competitive.
- **Score Calculation**: The user's score is calculated based on the number of correct answers.
- **Leaderboard**: The app stores high scores and displays a leaderboard.
- **Responsive Design**: Built using **Tailwind CSS**, ensuring the app is mobile-friendly.

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (https://nodejs.org/)
- **npm** (comes with Node.js)

### Steps to Run the App Locally

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**:
   \`\`\`bash
   npm start
   \`\`\`

   This will start the app on `http://localhost:3000`.

## How the App Works

### 1. **Start Screen**:
   - When you open the app, you'll see the landing page with a button to start the quiz. Upon clicking **Start Quiz**, you will be taken to the quiz page.

### 2. **Taking the Quiz**:
   - You can select your answer for each question.
   - After selecting an answer, the app will immediately check whether it’s correct and update the score
   - You’ll have a timer on each question. Once time runs out, the app will automatically move to the next question.

### 3. **Final Score**:
   - At the end of the quiz, your score will be displayed, and it will be added to the leaderboard if you have a high score.

### 4. **Leaderboard**:
   - View the top high scores stored locally. You can access the leaderboard anytime from the main menu.

## Tech Stack

- **React**: Frontend library to build the user interface.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **JavaScript**: For dynamic quiz functionality and state management.
- **LocalStorage**: Used to save the user's score and leaderboard locally.

## Contributing

1. **Fork the repository**.
2. Create a new branch for your feature (\`git checkout -b feature-name\`).
3. Commit your changes (\`git commit -am 'Add new feature'\`).
4. Push to the branch (\`git push origin feature-name\`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details." > README.md
