const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 2006;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/servicios', (req, res) => {
  res.render('servicios');
});


app.get('/productos', (req, res) => {
  res.render('Productos');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(port, () => {
  console.log(`La aplicación de ejemplo está escuchando en el puerto ${port}`);
});
