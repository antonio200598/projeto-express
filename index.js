const express = require("express")
const app = express()
const port = 3000

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render("index.html", {});
})

app.get('/zoo.js', (req, res) => {
  res.render("/js/zoo.js", {});
})

app.get('/equipe', (req, res) => {
  res.render("equipe.html", {});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
