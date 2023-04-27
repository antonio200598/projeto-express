const express = require("express")
const app = express()
const port = 3000

app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render("index", {});
})

app.get('/Js', (req, res) => {
  res.render("Js/index.js", {});
})

app.get('/equipe', (req, res) => {
  res.render("equipe", {});
})


const animaisCadastrados = [];

function cadastrarAnimal(event) 
{
    event.preventDefault(); 

    
    const nome = document.getElementById('nome').value;
    const animal = document.getElementById('animal').value;

  
    const novoAnimal = { nome, animal };

    animaisCadastrados.push(novoAnimal);

    document.getElementById('nome').value = '';
    document.getElementById('animal').value = '';

    atualizarTabelaAnimais();
}

function atualizarTabelaAnimais() 
{
    const tabelaAnimais = document.getElementById('listaAnimais');
    tabelaAnimais.innerHTML = ''; 

    for (const animal of animaisCadastrados) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${animal.nome}</td>
            <td>${animal.animal}</td>
        `;
        tabelaAnimais.appendChild(novaLinha);
    }
}

function buscarAnimais(event) {
    event.preventDefault(); 

    const buscaNome = document.getElementById('buscaNome').value.toLowerCase(); 
    const buscaAnimal = document.getElementById('buscaAnimal').value;

    const tabelaAnimais = document.getElementById('listaAnimais');
    tabelaAnimais.innerHTML = ''; 

    for (const animal of animaisCadastrados) 
    {
        const nomeAnimal = animal.nome.toLowerCase(); 

        if ((buscaNome === '' || nomeAnimal.includes(buscaNome)) && (buscaAnimal === 'Todos' || animal.animal === buscaAnimal)) 
        {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${animal.nome}</td>
                <td>${animal.animal}</td>
            `;
            tabelaAnimais.appendChild(novaLinha);
        }
      }
}
