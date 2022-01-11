const express = require('express')
const app = express()
const path = require('path')
const PORT = 3141

app.use(express.static('public'))
app.use((req, _, next) => {
    console.log('Neue Request:', req.url, ' ,Methode:', req.method)
    next()
})
// Regeln der Ausnahmen für '/' & '404'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/home.html'))
})

app.use((_, res) => {
    res.sendFile(__dirname + '/public/html/notFound.html')
})

// Routing
app.get('/solution', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/solutions.html'))
})
app.get('/community', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/community.html'))
})


app.listen(PORT, () => console.log('Listening on Port:', PORT))