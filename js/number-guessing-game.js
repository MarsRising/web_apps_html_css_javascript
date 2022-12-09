function runGame() {

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries= 0;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;
    //const target= Math.floor(Math.random() * 100) + 1;

    do {
        guessString = prompt('I am thinking of a number in the rangle 1 to 100. \n\nWhat is the number?');
        guessNumber = +guessString;
        numTries +=1;
        correct = checkGuess (guessNumber, target);
    } while (!correct);

    alert('You Got it! The number was ' + target + '\n\n it took you ' + numTries + 'tries to guess correctly.');

}

function checkGuess(guessNumber, target) {
    let correct = false;

    if(isNaN(guessNumber)) {
        alert('You have not entered a number. \n\nPlease enter a number in the 1-100 range.');
    } else if ((guessNumber<1) || (guessNumber >100)) {
        alert('Please enter an integer in the 1-100 range.');
    } else if (guessNumber > target) {
        alert('Your number is too large!'); 
    }else if (guessNumber < target) {
        alert('Your number is too small!')
    } else {
        correct = true;
    }
    return correct;
}