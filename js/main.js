let dashBoard = document.querySelector('.dashBoard');
let turn = 'X';
let square = [];

function game(id) {
    let element = document.getElementById(id);
    if (turn == 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'O';
        dashBoard.innerHTML = 'O';
    }
    else if (turn == 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'X';
        dashBoard.innerHTML = 'X';
    }
    winner()
}
function winner() {
    for (let i = 1; i <= 9; i++) {
        square[i] = document.getElementById(`item${i}`).innerHTML;
    }
    if (square[1] == square[2] && square[2] == square[3] && square[1] != '') {
        endGame(1, 2, 3)
    }
    else if (square[4] == square[5] && square[5] == square[6] && square[4] != '') {
        endGame(4, 5, 6)
    }
    else if (square[7] == square[8] && square[8] == square[9] && square[7] != '') {
        endGame(7, 8, 9)
    }
    else if (square[1] == square[4] && square[4] == square[7] && square[1] != '') {
        endGame(1, 4, 7)
    }
    else if (square[2] == square[5] && square[5] == square[8] && square[2] != '') {
        endGame(2, 5, 8)
    }
    else if (square[3] == square[6] && square[6] == square[9] && square[3] != '') {
        endGame(3, 6, 9)
    }
    else if (square[1] == square[5] && square[5] == square[9] && square[1] != '') {
        endGame(1, 5, 9)
    }
    else if (square[3] == square[5] && square[5] == square[7] && square[3] != '') {
        endGame(3, 5, 7)
    }
}

function endGame(num1, num2, num3) {
    dashBoard.innerHTML = `${square[num1]} WINNER`;
    document.getElementById(`item${num1}`).style.background = 'black';
    document.getElementById(`item${num2}`).style.background = 'black';
    document.getElementById(`item${num3}`).style.background = 'black';

    setInterval(function () { dashBoard.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 3000);
}