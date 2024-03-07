// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
//     Es:
// ``` javascript
//  [
//    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
//  ]
// ```



const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'oca', famiglia: 'Anatidae', classe: 'uccelli' },
    { nome: 'balena', famiglia: 'balenidi', classe: 'mammiferi' },
    { nome: 'pitone', famiglia: 'pythonidae', classe: 'ovipari' },
]
// Crea un nuovo array con la lista dei mammiferi.

const mammiferi = animals.filter((mammifero) => {
    return mammifero.classe === 'mammiferi'
})
console.log(mammiferi);