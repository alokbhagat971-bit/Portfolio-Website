import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { connectDB } from "./config/db.js"
import router from "./routes/hireRoutes.js"

const app = express();

connectDB();

app.use(cors())
app.use(express.json())

app.use('/api/hire', router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})