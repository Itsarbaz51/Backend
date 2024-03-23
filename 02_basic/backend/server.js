import express from 'express'

const app = express();

const port = process.env.PORT || 3000;

// app.get('/',(req, res) => {
//     res.send('Server is ready')
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A jokes',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another jokes',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A third jokes',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'A fourth jokes',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'A fifth jokes',
            content: 'This is a fifth joke'
        }
    ];
    res.json(jokes)
});


app.listen(port, () => {
    console.log(`Server at https://localhost${port}`);
})