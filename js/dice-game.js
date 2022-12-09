function rollDice() {
    let goldCoins = 0;
    for (i=0; i<10; i++) {
    const roll = Math.floor(Math.random()*6)+1;
    alert('You have rolled a ' + roll + '!');
    if (roll ===1 ) {
        alert('Game over, no more rolls!');
        break;
    }
    if (roll<5) {
        continue;
    }
    // if (roll===4 && goldCoins>0)
    //     alert('Oh No! You rolled a ' + roll + ' you lose 1 Gold Coin.');
    //     goldCoins-=1;
    //     alert('Losing a coin has now given you ' + goldCoins + ' Gold Coins.');
    //     break;
    if (roll===5) {
        alert('Congrats, you win ' + roll + ' Gold Coins!');
        goldCoins+= roll;
        alert('You now have ' + goldCoins + ' Gold Coins.');
    }
    if (roll===6) {
        alert('Congrats, you win ' + roll + ' Gold Coins!');
        goldCoins+= roll;
        alert('You now have ' + goldCoins + ' Gold Coins.');
    }
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}