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
    




/* function clicar() {
    let nome = window.prompt('Qual é o seu nome?')
    let idade = window.prompt(`Olá, quantos anos você tem?`)
    let lin = window.prompt('Qual linguagem de programação você está estudando?')

    let hello = window.alert(`Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${lin}!`)

    let cont = window.prompt('Você gosta de estudar JavaScript? Responda 1 para SIM e 2 para NÃO')
    let res = document.querySelector('div#res')

    if (cont == 1) {
        res.innerHTML = 'Muitoi bem!'
    }
    

}
 */

/* Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.
EXERCÍCIO OPCIONAL
Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

Mas ele é 100% opcional.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens? -->
*/