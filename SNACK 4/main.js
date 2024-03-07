// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.


const people = [
    {
        name: 'Giovanni',
        surname: 'Storti',
        age: '12'
    },
    {
        name: 'Giacomo',
        surname: 'Poretti',
        age: '58'
    },
    {
        name: 'Aldo',
        surname: 'Baglio',
        age: '15'
    },
    {
        name: 'Susanna',
        surname: 'Bianchi',
        age: '37'
    },
    {
        name: 'Amanda',
        surname: 'Longhi',
        age: '45'
    },
]

// Crea quindi un nuovo array inserendo, per ogni persona,
// una frase con il nome e cognome e l’indicazione se può guidare, 
// in base all’età.

const newArray = people.map((people) => {
    if (people.age > 18) {
        const message = `${people.name} is ${people.age} years old and can drive`;
        people.message = message
    } else {
        const message = `${people.name} is ${people.age} years old and cannot drive`;
        people.message = message
    } return people
})
console.log(newArray);