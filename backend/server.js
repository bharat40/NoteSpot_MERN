const express = require('express');
const cors = require('cors');
const notes = require('./data/notes');
const connectDatabase = require('./config/db');
const app = express();
require('dotenv').config();
const userRouter = require('./routes/userRouter');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(cors());

connectDatabase();

app.get('/', (req, res) => {
    res.send('API is running...');
})

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// })


app.use('/api/users', userRouter);
app.use('/api/notes', noteRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    try {
        console.log(`Server started on port ${process.env.PORT}`);
    } catch (error) {
        console.log('error while starting server:', error);
    }
})