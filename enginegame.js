let optionsSelected = [];

const conditionsForWinner = [
    ['card-1', 'card-2', 'card-3'],
    ['card-4', 'card-5', 'card-6'],
    ['card-7', 'card-8', 'card-9'],
    ['card-1', 'card-4', 'card-7'],
    ['card-2', 'card-5', 'card-8'],
    ['card-3', 'card-6', 'card-9'],
    ['card-1', 'card-5', 'card-9'],
    ['card-7', 'card-5', 'card-3'],
];

function verifyWinner(simbol, cards) {
    return optionsSelected.filter((e) => e.simbol === simbol && e.card === cards);
}

function engineGame(cardNumber, playerSimbol = "X") {
    const divInner = document.getElementsByClassName(cardNumber);

    if (divInner[0].innerHTML !== "X" && divInner[0].innerHTML !== "O") {

        divInner[0].innerHTML = playerSimbol;
        optionsSelected.push({ card: cardNumber, simbol: playerSimbol });

        const goThroughMatriz = (contGoThrough) => {
            console.log('contGoThrough', contGoThrough)
            const arrResult = [];
            for (let i = 0; i < conditionsForWinner[contGoThrough].length; i++) {
                let resultFind = verifyWinner(playerSimbol, conditionsForWinner[contGoThrough][i]);
                if (resultFind.length > 0) {
                    arrResult.push(resultFind[0]);
                }               
                if(arrResult.length === 3){
                    for(let n = 0; n < arrResult.length; n++){
                        document.getElementsByClassName(arrResult[n].card)[0].style.background = "green";
                        document.getElementsByClassName(arrResult[n].card)[0].style.color = "#fff";
                    }
                }else{
                    if (i === 2 && contGoThrough <= 6) {                   
                        const contPlus = contGoThrough + 1;
                        goThroughMatriz(contPlus);
                    }
                }
            }
        }

        goThroughMatriz(0);

    }  
}