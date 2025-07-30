Live Link - https://notespot-frontend.onrender.com/
# NoteSpot – Secure & Efficient Note-Keeping Application 📝

NoteSpot is a modern, secure, and user-friendly note-keeping web application built with the MERN stack (MongoDB, Express.js, ReactJS, Node.js). It enables users to create, manage, and organize their notes effortlessly while ensuring data security through robust authentication and authorization mechanisms.

## Key Features ✨

- 🔐 **Authentication & Authorization** – Secure login and registration using JWT (JSON Web Tokens) and bcryptjs for password hashing.
- ✏️ **Full CRUD Functionality** – Users can Create, Read, Update, and Delete their notes seamlessly.
- 🔒 **Private & Secure** – Each user has access only to their own notes, ensuring data privacy.
- 🌐 **Scalable RESTful API** – Powered by Express.js and Node.js, designed for high performance.
- 🛢️ **MongoDB Integration** – Secure and efficient data storage using Mongoose ODM.
- 🔄 **CORS Enabled** – Allows smooth API communication across different origins.
- 🔔 **Toast Notifications** – Integrated with React Toastify for real-time feedback on user actions.

## 🛠️ Technology Stack

### 🖥️ Backend (Node.js & Express.js)

The backend is structured with Node.js and Express.js, incorporating essential dependencies for security, performance, and maintainability:

- 🔑 bcryptjs – Secure password hashing.
- 🔐 jsonwebtoken – Token-based authentication.
- 📦 mongoose – Efficient MongoDB interactions.
- 🌍 cors & dotenv – Secure API communication and environment variable management.
- ⚙️ express-async-handler – Simplified error handling in asynchronous routes.

### 🎨 Frontend (ReactJS & Tailwind CSS)

The frontend is built with ReactJS, ensuring a seamless and interactive user experience. Key dependencies include:

- 🌐 axios – Handles API requests.
- 🚏 react-router-dom – Enables seamless navigation.
- 🎨 react-icons – Provides a variety of UI icons.
- 🔔 react-toastify & toastify – Implements real-time notifications.



# Installation
#### 1. Clone the repository
```
   git clone https://github.com/bharat40/NoteSpot_MERN.git
   cd NoteSpot_MERN
```
#### 2. Install dependencies for frontend & backend

   ### For frontend
   ```
   cd client
   npm install
```
   ### For backend
   ```
   cd ../server
   npm install
```
#### 3. Create `.env` files for both client and server
   Add your database URI, API keys, and environment variables.

#### 4. Run the app

   ### In /server directory
   ```
   npm run dev
   ```

   ### In /client directory
   ```
   npm start
   ```
    
## Contributing

- Contributions are always welcome!
- Please fork the repo, create a feature branch, and submit a pull request.


## Contact
### For any queries or collaboration:
- GitHub: [bharat40](https://github.com/bharat40)
- Email: bharatdhiman40@gmail.com
