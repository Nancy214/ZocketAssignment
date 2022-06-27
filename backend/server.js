import reviews from "./data/reviews.js";
import express from 'express'

const app = express()

app.get('/reviews', (req, res) => {
    res.send(reviews)
})

app.listen(5000, console.log('Server is running'))