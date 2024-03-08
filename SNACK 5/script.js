// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa 
// con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore 
// utilizzando destructuring e template literal


const bikes = [
    {
        name: 'A',
        weight: 1300,

    },
    {
        name: 'B',
        weight: 1700,

    },
    {
        name: 'C',
        weight: 1800,

    },
    {
        name: 'D',
        weight: 1200,

    },
    {
        name: 'E',
        weight: 2000,

    },
    {
        name: 'F',
        weight: 1600,

    },
]


const weights = bikes.map(bike => {
    let { weight } = bike
    return weight
});
console.log(weights);

function min(weights) {
    return Math.min.apply(Math, weights);


}
console.log(min(weights));
