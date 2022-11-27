function star() {
    window.alert('bem vindo')
    var tech = window.prompt('Você quer seguir para Front-end ou Back-end?')


    if (tech == 'Front-end') {
        window.prompt('Perfeito! E você quer aprender React ou aprender Vue?')
    } else {
        window.prompt('Perfeito! E você quer aprender C# ou Java?')
    } 

    if (tech == 'React') {
        window.prompt('Você quer se especializar?')
    }


}