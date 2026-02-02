//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const biciDaCorsa = [
    {
        nome: "pina",
        peso: 1.5,
    },
    {
        nome: "rello",
        peso: 7,
    },
    {
        nome: "graz",
        peso: 4.6,
    },
    {
        nome: "iella",
        peso: 10,
    },
    {
        nome: "cinelli",
        peso: 5.5,
    },
    {
        nome: "canyon",
        peso: 8.5,
    },
    {
        nome: "ion",
        peso: 6.8,
    },
    {
        nome: "fabricbike",
        peso: 7,
    }   
];

function getLightestBike(bikeList){
    if (bikeList <= 0){
        return {};
    }
    
    let biciLeggera = biciDaCorsa[0];
    
    for (let index = 1; index < biciDaCorsa.length; index++) {
        if (biciDaCorsa[index].peso <= biciLeggera.peso) {
            biciLeggera = biciDaCorsa[index]
        } 
        
    }
    return biciLeggera;
}

    console.log(getLightestBike(biciDaCorsa))

    
    
