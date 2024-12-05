
# CSEC-ASTU Development Division: Generative AI Chatbot

Welcome to the CSEC-ASTU Development Division's Generative AI Chatbot project! This project utilizes cutting-edge technologies to create an engaging and interactive chatbot experience.

Key Features:

Powered by MERN Stack: Leverages the robust MERN stack (MongoDB, Express.js, React.js, Node.js) for a scalable and efficient backend and frontend architecture.
State-of-the-Art AI: Employs Gemini AI to deliver intelligent and natural language processing capabilities.
Secure Authentication: Utilizes Clerk for secure user authentication, ensuring data integrity and user privacy.
Flexible Data Storage: Employs MongoDB Atlas, a NoSQL database, for flexible and efficient storage of user conversations and project data.
Seamless Image Management: Integrates with ImageKit.io for effortless image handling and optimization.
Getting Started:

Excited to try out this amazing chatbot? Here's how to set it up:

Clone or Download the Project:

Open your terminal or command prompt.
Navigate to the desired directory where you want to clone the project.
Run the following command to clone the project from a Git repository: git clone <https://github.com/Moges-Tesema/Generative-AI-Chatbot-FullStack-Web-App>
Alternatively, download the project as a ZIP file and extract it into a suitable location.
Install Node.js and Package Manager:

Node.js: Ensure you have a recent version of Node.js installed on your system. Download and install it from the official website (https://nodejs.org/).
Package Manager: With Node.js installed, you'll have access to either npm (Node Package Manager) or yarn.
Install Project Dependencies:

Frontend (React):

Navigate to the frontend directory within your project.
Run npm install (or yarn install) to install all necessary frontend dependencies listed in the package.json file. Note: Be aware that this project utilizes React 19, a potentially unstable version.
Backend (Node.js):

Navigate to the backend directory within your project.
Run npm install (or yarn install) to install all required backend dependencies listed in the package.json file.
Environment Variables:

Create a file named .env (ensure the dot at the beginning) in both the frontend and backend directories.
Inside the .env files, add the following environment variables with your respective keys:
GEMINI_PASSKEY: Your unique Gemini AI passkey.
MONGO_URI: Your MongoDB connection URI.
CLERK_FRONTEND_API: Your Clerk frontend API key.
CLERK_BACKEND_API: Your Clerk backend API key.
IMAGEKIT_PUBLIC_KEY: Your ImageKit.io public API key.
IMAGEKIT_PRIVATE_KEY: Your ImageKit.io private API key.
IMAGEKIT_ENDPOINT: Your ImageKit.io endpoint URL.
Run the Project:

Backend:

Open a terminal window in the backend directory.
Run npm start (or yarn start) to start the backend server.
Frontend:

Open another terminal window in the frontend directory.
Run npm run dev (or yarn dev) to launch the frontend application.
Deployment (Optional):

Consider utilizing a cloud platform like Heroku, AWS, or Google Cloud Platform for deployment to make the chatbot publicly accessible. Refer to their respective documentation for specific instructions.
Further Resources:

MERN Stack: https://www.mongodb.com/resources/languages/mean-stack
Gemini AI: https://gemini.google.com/
Clerk: https://clerk.com/
MongoDB Atlas: https://www.mongodb.com/cloud/atlas/register
ImageKit.io: https://imagekit.io/
Thank you for your interest in this project!