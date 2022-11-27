function clicou(opcao) {
    escolhaFrontBack = document.getElementById("escolhaFrontBack")
    if (opcao == 1) {

      seFrontBack.innerHTML = `Qual tecnologia gostaria de aprender`
     seFrontBack.innerHTML += `<button>React</button>`
    } else {
      seFrontBack.innerHTML
    }

    if (opcao == 1) {
         seFrontBack.innerHTML += '<p>Saiba mais em: <a href="https://www.alura.com.br/artigos/angular-vs-react-vs-vue-js?gclid=Cj0KCQiAsoycBhC6ARIsAPPbeLsoidW2RjgcIHReLiKbZbXSISl6ww9AJPzHlbiWpVG8XZUDr1cInXQaAnnQEALw_wcB" target="_blank">Angular vs React </a></p>'
    } else {
        seFrontBack.innerHTML += '<p>Saiba mais em: <a href="https://br.bitdegree.org/tutoriais/java-ou-c-sharp/">Qual deles combina com você?</a></p>'
    }
   
}

function escolha(opcao) {
    var escolhaTech = document.getElementById('escolhaTech')

    if (opcao == 1) {
      escolhaTech.innerHTML = '<p>muito bene</p>'
    }
}




  