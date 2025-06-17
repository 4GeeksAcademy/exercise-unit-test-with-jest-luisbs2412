// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a Euros
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en Euros
    return valueInDollar;
}

const fromDollarToYen = function(valueInEuro) {
    // Convertimos el valor a Dólares
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en Dólares
    return valueInYen;
}

const fromYenToPound = function(valueInEuro) {
    // Convertimos el valor a Yenes
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el valor en Yenes
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromYenToPound };



