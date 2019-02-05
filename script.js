var count = 0;
var check = [];
var buttons = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9"]

function reset() {
    for (let i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).innerHTML = "";
        document.getElementById(buttons[i]).style.backgroundColor = "white";
        document.getElementById(buttons[i]).style.borderColor = "#4CAF50";
        document.getElementById(buttons[i]).disabled = false;
    }
}

function gameEnd() {
    document.getElementById("restart").style.display = "block"
    setTimeout(() => {
        document.getElementById("restart").style.display = "none";
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML = "";
            document.getElementById(buttons[i]).style.backgroundColor = "white";
            document.getElementById(buttons[i]).style.borderColor = "#4CAF50";
            document.getElementById(buttons[i]).disabled = false;
        }
    }, 5000);
}

function onClick(id) {
    if (count % 2 == 0) {
        document.getElementById(id).innerHTML = "O"
    } else {
        document.getElementById(id).innerHTML = "X"
    }
    document.getElementById(id).disabled = true;
    for (let i = 0; i < buttons.length; i++) {
        if (document.getElementById(id).innerHTML == "X") {
            document.getElementById(id).style.backgroundColor = "#f44336";
            document.getElementById(id).style.borderColor = "#f44336";
        }
        if (document.getElementById(id).innerHTML == "O") {
            document.getElementById(id).style.backgroundColor = "#008CBA";
            document.getElementById(id).style.borderColor = "#008CBA";
        }
        check[i] = document.getElementById(buttons[i]).innerHTML;
    }
    increment(this.id);
}

function increment(id) {
    count++;
    winner(this.id);
}

function winner() {

    //For horizontal row 1 checking
    if ((check[0] == "O" && check[1] == "O" && check[2] == "O")) {
        alert("PLAYER O is the winner!!!");
        gameEnd();
    }
    if ((check[0] == "X" && check[1] == "X" && check[2] == "X")) {
        alert("PLAYER X is the winner!!!");
        gameEnd();
    }

    //For horizontal row 2 checking
    if ((check[3] == "X" && check[4] == "X" && check[5] == "X")) {
        alert("PLAYER X is the winner!!!");
        gameEnd();
    }
    if ((check[3] == "O" && check[4] == "O" && check[5] == "O")) {
        alert("PLAYER O is the winner!!!");
        gameEnd();
    }

    //For horizontal row 3 checking
    if ((check[6] == "X" && check[7] == "X" && check[8] == "X")) {
        alert("PLAYER X is the winner!!!");
        gameEnd();
    }
    if ((check[6] == "O" && check[7] == "O" && check[8] == "O")) {
        alert("PLAYER O is the winner!!!");
        gameEnd();
    }

    //For vertical column 1 checking
    if ((check[0] == "X" && check[3] == "X" && check[6] == "X")) {
        alert("PLAYER X is the winner!!!");
        gameEnd();
    }
    if ((check[0] == "O" && check[3] == "O" && check[6] == "O")) {
        alert("PLAYER O is the winner!!!");
        gameEnd();
    }

    //For vertical column 2 checking
    if ((check[1] == "X" && check[4] == "X" && check[7] == "X")) {
        alert("PLAYER X is the winner!!!");
        gameEnd();
    }
    if ((check[1] == "O" && check[4] == "O" && check[7] == "O")) {
        alert("PLAYER O is the winner!!!");
        gameEnd();
    }

    //For vertical column 3 checking
    if ((check[2] == "X" && check[6] == "X" && check[8] == "X")) {
        alert("PLAYER X is the winner!!!");
        gameEnd();
    }
    if ((check[2] == "O" && check[6] == "O" && check[8] == "O")) {
        alert("PLAYER O is the winner!!!");
        gameEnd();
    }

    //For diagonal checking(\)
    if ((check[0] == "X" && check[4] == "X" && check[8] == "X")) {
        alert("PLAYER X is the winner!!!");
        gameEnd();
    }
    if ((check[0] == "O" && check[4] == "O" && check[8] == "O")) {
        alert("PLAYER O is the winner!!!");
        gameEnd();
    }

    //For diagonal checking(/)
    if ((check[2] == "X" && check[4] == "X" && check[6] == "X")) {
        alert("PLAYER X is the winner!!!");
        gameEnd();
    }
    if ((check[2] == "O" && check[4] == "O" && check[6] == "O")) {
        alert("PLAYER O is the winner!!!");
        gameEnd();
    }
}