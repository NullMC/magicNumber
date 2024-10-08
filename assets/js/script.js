function generateRandomInteger(min = 0,  max = 100){
    let number = Math.random()
    number = number * (max - min) + min
    return Math.floor(number)
}

const numeroSegreto = generateRandomInteger(0, 100);
let tentativi = 5;

let btn = document.querySelector("#guessBTN")

function handleClick(event){
    console.log(event)

    const inputUtente = document.querySelector("#guess")
    const numeroUtente = parseInt(inputUtente.value)
    
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
        console.log("Inserisci un numero da 1 a 100.");
    }
    
    if (numeroUtente > numeroSegreto) {
        console.log("Troppo grande");
    } else if (numeroUtente < numeroSegreto) {
         console.log("Troppo piccolo");
    } else if (numeroUtente === numeroSegreto) {
        console.log("Sei Cane, hai vinto!");
    }
    
    tentativi--;
    console.log(`Tentativi rimasti: ${tentativi}`);
    
    if (tentativi === 0) {
        console.log(`Hai perso! Il numero segreto era ${numeroSegreto}.`);
    }
}

btn.addEventListener("click", handleClick)