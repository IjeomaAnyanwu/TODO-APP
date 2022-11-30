import express from 'express'
import logger from 'morgan'
import todoRouter from './routes/todoRoute'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

mongoose.connect(process.env.DATABASE_URL!, ()=>{
    console.log('Connected to database')
})

app.use(express.json())
app.use(logger('dev'))
app.use('/todo', todoRouter)

const Port = 4000

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
}
)
