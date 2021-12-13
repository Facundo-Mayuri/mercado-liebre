const express = require('express')
const path = require ('path')

const app = express()

app.use( express.static (path.resolve(__dirname, 'public')))

app.listen(3050, () => {
    console.log('Servidor corriendo en el puerto 3050')
})

app.get('/', (req, res) => {
    let htmlPath = path.join(__dirname, 'views/home.html')
    res.sendFile(htmlPath)
})

app.get('/login', (req, res) => {
    let htmlPath = path.join(__dirname, 'views/login.html')
    res.sendFile(htmlPath)
})

app.get('/register', (req, res) => {
    let htmlPath = path.join(__dirname, 'views/register.html')
    res.sendFile(htmlPath)
})

