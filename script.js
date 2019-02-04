var count = 0;
var check = [];
var buttons = ["button1","button2","button3","button4","button5","button6","button7","button8","button9"]

function onClick(id) {
    if(count%2==0){
        document.getElementById(id).innerHTML="O"
    }
    else{
        document.getElementById(id).innerHTML="X"
    }
    for (let i = 0; i < buttons.length; i++) {
        check[i]=document.getElementById(buttons[i]).innerHTML;
    }
    increment(this.id);
}

function increment(id) {
    count++;
    winner(this.id);
}

function winner() {

    //For horizontal row 1 checking
    if ((check[0]=="O"&&check[1]=="O"&&check[2]=="O")) {
        alert("PLAYER O is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    if ((check[0]=="X"&&check[1]=="X"&&check[2]=="X")) {
        alert("PLAYER X is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }

    //For horizontal row 2 checking
    if ((check[3]=="X"&&check[4]=="X"&&check[5]=="X")) {
        alert("PLAYER X is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    if ((check[3]=="O"&&check[4]=="O"&&check[5]=="O")) {
        alert("PLAYER O is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }

    //For horizontal row 3 checking
    if ((check[6]=="X"&&check[7]=="X"&&check[8]=="X")) {
        alert("PLAYER X is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    if ((check[6]=="O"&&check[7]=="O"&&check[8]=="O")) {
        alert("PLAYER O is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }

    //For vertical column 1 checking
    if ((check[0]=="X"&&check[3]=="X"&&check[6]=="X")) {
        alert("PLAYER X is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    if ((check[0]=="O"&&check[3]=="O"&&check[6]=="O")) {
        alert("PLAYER O is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    
    //For vertical column 2 checking
    if ((check[1]=="X"&&check[4]=="X"&&check[7]=="X")) {
        alert("PLAYER X is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    if ((check[1]=="O"&&check[4]=="O"&&check[7]=="O")) {
        alert("PLAYER O is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    } 

    //For vertical column 3 checking
    if ((check[2]=="X"&&check[6]=="X"&&check[8]=="X")) {
        alert("PLAYER X is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    if ((check[2]=="O"&&check[6]=="O"&&check[8]=="O")) {
        alert("PLAYER O is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    
    //For diagonal checking(\)
    if ((check[0]=="X"&&check[4]=="X"&&check[8]=="X")) {
        alert("PLAYER X is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    if ((check[0]=="O"&&check[4]=="O"&&check[8]=="O")) {
        alert("PLAYER O is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    
    //For diagonal checking(/)
    if ((check[2]=="X"&&check[4]=="X"&&check[6]=="X")) {
        alert("PLAYER X is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    if ((check[2]=="O"&&check[4]=="O"&&check[6]=="O")) {
        alert("PLAYER O is the winner!!!");
        for (let i = 0; i < buttons.length; i++) {
            document.getElementById(buttons[i]).innerHTML="";
        }
    }
    console.log(check);
}