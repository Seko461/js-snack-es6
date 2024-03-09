// SNACK 6

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà: 
// punti fatti e falli subiti.

// Infine usando la destrutturazione creiamo un nuovo array i cui 
// elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//     BONUS
// Stampare in pagina oltre che in console!


const teams = [
    {
        name: "Alba FC",
        points: "",
        fouls: "",
    },
    {
        name: "Birillo FC",
        points: "",
        fouls: "",
    },
    {
        name: "Castelletto FC",
        points: "",
        fouls: "",
    },
    {
        name: "Domus FC",
        points: "",
        fouls: "",
    },
    {
        name: "Elephant FC",
        points: "",
        fouls: "",
    },
    {
        name: "Fortuna FC",
        points: "",
        fouls: "",
    },
]



let newTeams = teams.map((team) => {

    let min = 0;
    let max = 33;
    team.points = Math.floor(Math.random() * (max - min + 1) + min);
    team.fouls = Math.floor(Math.random() * (max - min + 1) + min);
    return team
})

console.log(newTeams);




let newArr = newTeams.map(({ name, fouls }) => {


    console.log(name, fouls);

    return `
    <ul>
    <li>  Nome Squadra: ${name}
      --  Falli subiti: ${fouls}
    </li>
    </ul> `

})
console.log(newArr);

document.write(newArr);






