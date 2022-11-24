window.alert('Bem-vindo(a)')

let nome = window.prompt('Qual é o seu nome?')
    let idade = window.prompt(`Olá, quantos anos você tem?`)
    let lin = window.prompt('Qual linguagem de programação você está estudando?')

    let hello = window.alert(`Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${lin}!`)

    let cont = window.prompt('Você gosta de estudar JavaScript? Responda 1 para SIM e 2 para NÃO')
    let res = document.querySelector('div#res')

    if (cont == 1) {
        res.innerHTML = ':) Muito bom! Continue estudando e você terá muito sucesso.'
    } else {
        res.innerHTML = ' :( Ahh que pena... Já tentou aprender outras linguagens?'
    } 
    

