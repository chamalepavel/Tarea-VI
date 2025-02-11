document.getElementById("rollDice").addEventListener("click", function() {
    let userName = document.getElementById("userName").value.trim();

    let greeting = userName ? `¡Hola, ${userName}!` : "¡Hola!";
    console.log(greeting);

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    let sum = dice1 + dice2;

    let resultMessage;
    if (sum === 2) {
        resultMessage = "¡Doble uno! Mala suerte.";
    } else if (sum === 7 || sum === 11) {
        resultMessage = "¡Suerte! Has ganado esta ronda.";
    } else if (dice1 === dice2) {
        resultMessage = "¡Doble! Tienes un turno extra.";
    } else {
        resultMessage = "Nada especial, ¡intenta de nuevo!";
    }

    let finalMessage = `${greeting}\nSacaste un ${dice1} y un ${dice2} (Suma: ${sum}).\n${resultMessage}`;
    document.getElementById("result").textContent = finalMessage;
});
