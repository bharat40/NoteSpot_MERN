const express = require('express');
const notes = require('./data/notes');
const connectDatabase = require('./config/db');
const app = express();
require('dotenv').config();
const userRouter = require('./routes/userRouter');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

app.use(express.json());

connectDatabase();

app.get('/', (req, res) => {
    res.send('API is running...');
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})


app.use('/api/users', userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    try {
        console.log(`Server started on port ${process.env.PORT}`);
    } catch (error) {
        console.log('error while starting server:', error);
    }
})

// custom error handler created (middleware created)
// registerUser route created
// hashed password function created