import  express  from "express"
import mongoose from "mongoose"
import routes from "./routes"
require('dotenv/config')


const app = express()

mongoose.connect(<string>process.env.MONGO_URL)

app.use(express.json())

app.use(routes)


app.listen(3000, () => {
    console.log("Server listening on port 3000")
})