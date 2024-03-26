import express from 'express'

const app = express()

const port = process.env.PORT || 4000

app.get('/', () => {
    console.log(`Server is ready`);
})

app.listen(port, () => {
    console.log(`Server at https://localhost${port}`);
})