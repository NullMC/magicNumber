function getRandomInt(min = 0, max = 100) {
    let number = Math.random();
    number = number * (max - min) + min;
    return Math.floor(number);
}

let vite = 5;
const guessNumber = getRandomInt(0, 100);

let body = document.querySelector("#body")

let btn = document.querySelector("#guessBtn");
let output = document.querySelector('#output');
output.innerHTML = `Hai ancora <strong> ${vite} </strong> vite`;

function handleClick() {
    const userField = document.querySelector("#guess");
    const userNumber = parseInt(userField.value);
    console.log(guessNumber)

    if (vite > 0) {
        if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) {
            output.innerHTML = "Inserisci un numero intero da 1 a 100.";
        } else if (userNumber === guessNumber) {
            output.innerHTML = "Bravo, hai indovinato!";
        } else {
            vite--;
            if (userNumber > guessNumber) {
                output.innerHTML = "Troppo grande. ";
            } else if (userNumber < guessNumber) {
                output.innerHTML = "Troppo piccolo. ";
            }
            output.innerHTML += `Hai ancora <strong>${vite}</strong> vite.`;

            if (vite === 3){
                body.classList.remove("greenBg")
                body.classList.add("yellowBg")

                btn.classList.remove("greenBtnBg")
                btn.classList.add("yellowBtnBg")
            }
            else{

                if (vite === 1){
                    body.classList.remove("yellowBg")
                    body.classList.add("redBg")
    
                    btn.classList.remove("yellowBtnBg")
                    btn.classList.add("redBtnBg")
                }
            }
        }

        if (vite === 0) {
            output.innerHTML = `Hai esaurito le vite. Il numero era ${guessNumber}.`;
        }
    }
}

btn.addEventListener("click", handleClick);