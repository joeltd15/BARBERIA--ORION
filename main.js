const express = require('express')
const app = express()
const port = 3000

app.use(express.static('BARBERIA-ORION'))

app.get('/productos', (req, res) => {
  res.sendFile(__dirname+'/BARBERIA-ORION/Productos.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/BARBERIA-ORION/login.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/BARBERIA-ORION/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})