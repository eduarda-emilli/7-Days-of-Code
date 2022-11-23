console.log("false == '0' : ", false == '0');
console.log("null == undefined : ", null == undefined);
console.log('"\t\r\n" == 0 : ', "\t\r\n" == 0);
console.log("'' == 0 : ", '' == 0);
console.log("3 != '3' : ", 3 != '3');
console.log("3 !== '3' : ", 3 !== '3');


let numeroDez = 10
let stringDez = '10'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroVinte = 20
let stringVinte = '20'

if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroDez e stringUm não tem o mesmo valor')
}

if (numeroTrinta == stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
}

if(numeroVinte == stringVinte) {
    console.log('As variáveis numeroVinte e stringVinte tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroVinte e stringVinte tem o mesmo valor, mas tipos diferentes')
}