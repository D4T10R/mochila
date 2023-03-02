const formulario = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = []

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})


function criaElemento(nome, quantidade) {

    //<li class="item"><strong>7</strong>Camisas</li>
    const li = document.createElement('li')
    li.classList.add('item')

    const strong = document.createElement('strong')
    strong.innerHTML = quantidade

    li.appendChild(strong)
    li.innerHTML += nome

    lista.appendChild(li)
    
    const itensAtuais = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itensAtuais)

    localStorage.setItem("item", JSON.stringify(itens))
}