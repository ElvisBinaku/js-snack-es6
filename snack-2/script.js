//Creare un array di oggetti di squadre.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti fatti” e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        nome: "venezia",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "juve",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "udinese",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "treviso",
        puntiFatti: 0,
        falliSubiti: 0,
        //per generare i numeri per i falli e punti mettendolo come metodo devo richiamarlo sempre sulla console
        //random() {
        /*for (let index = 0; index < squadre.length; index++) {
        this.falliSubiti = Math.floor(Math.random() * 5);
        this.puntiFatti = Math.floor(Math.random() * 30);
        }
        } */  
    },
    
]

const randomFalli = function() {
for (let index = 0; index < squadre.length; index++) {
squadre[index].puntiFatti = Math.floor(Math.random() * 30);
squadre[index].falliSubiti = Math.floor(Math.random() * 7);
}
}

randomFalli()

for (let index = 0; index < squadre.length; index++) { 
    let singPlur = "";
    if (squadre[index].falliSubiti === 1){
        singPlur = "fallo"
    } else {
        singPlur = "falli"
    }
    console.log(`${squadre[index].nome} ha subito ${squadre[index].falliSubiti} ${singPlur}`)
}
   
