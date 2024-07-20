"use strict";

let numberFromUser = prompt("Введіть тризначне число:");

if (numberFromUser !== null && numberFromUser.length === 3 && Number.isInteger(Number(numberFromUser))) {
    let digit1 = numberFromUser[0];
    let digit2 = numberFromUser[1];
    let digit3 = numberFromUser[2];

    let allSame = (digit1 === digit2) && (digit2 === digit3);

    let hasSame = (digit1 === digit2) || (digit1 === digit3) || (digit2 === digit3);

    if (allSame) {
        alert("Всі цифри однакові.");
    } else if (hasSame) {
        alert("Серед цифр є однакові.");
    } else {
        alert("Серед цифр немає однакових.");
    }
} else {
    alert("Введено не тризначне ціле число.");
}
