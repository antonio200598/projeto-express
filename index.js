const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let zoo = [
  {animal:"DOG", name:"Pluto"},
  {animal:"CAT", name:"Hercules"},
  {animal:"BIRD", name:"Tweety"},
  {animal:"DOG", name:"Spiff"},
  {animal:"CAT", name:"Tom"},
  {animal:"BIRD", name:"Road Runner"}
]


let animals = [
  {animal:"DOG", name:"Pluto"},
  {animal:"CAT", name:"Hercules"},
  {animal:"BIRD", name:"Tweety"},
  {animal:"DOG", name:"Spiff"},
  {animal:"CAT", name:"Tom"},
  {animal:"BIRD", name:"Road Runner"}
]


app.get('/zoo', (req,res) => {

  if(req.query.animal){
    busca1 = req.query.animal
    respArray1 = []
      for(let j = 0; j < zoo.length; j++){
        const b = animals[j];
        if(b.animal.includes(busca1)){
          respArray1.push(b)
        }
      }
      res.send(respArray1);
    }
    else if(req.query.name){
      busca = req.query.name
      respArray = []
          for (let i = 0; i < zoo.length; i++) {
            const a = animals[i];
            if(a.name.includes(busca)){
              respArray.push(a)        
            }
          }
          res.send(respArray);
        }   
    else{
      res.send(animals);
    }   
})

app.post('/mirror', function (req, res, next) {
  console.log(req.body)
  res.send(req.body)
})


app.get('/', (req, res) => {
  res.send('UFC')
})

app.get('/querytojson', (req, res) => {
    console.log(req.query);
    res.send(req.query);
  })  

app.get('/paramtojson/name/:name/role/:role', (req, res) => {
    console.log(req.params);
    res.send(req.params);
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app1 = express()
const port1 = 8080

app1.use(express.static('public'));
app1.use(express.json())
app1.use(express.urlencoded({ extended: true }))

app1.listen(port1, () => {
  console.log(`Example app listening on port ${port1}`)
})