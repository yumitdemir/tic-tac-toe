
let player1Count = 0;
let player2Count =0;

let count = 0;
let box = document.getElementsByClassName("boxes")
function boxClick(){
    
    for (let a = 0; a<box.length; a++){
        box[a].addEventListener("click", function(){
            
            boxMarker(box[a],a)
            
        })
    }
}

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

let clickedboxes = [];
function boxMarker(boxclicked,number){
    
    
    if (isEven(count)== true && clickedboxes.indexOf(number) == -1 ){
        clickedboxes.push(number)
        boxclicked.innerHTML ="x"
        turnColor()
        count++
    }else if (isEven(count)== false && clickedboxes.indexOf(number) == -1){
        clickedboxes.push(number)
        boxclicked.innerHTML ="o"
        turnColor()
        count++
    }
    if (count == 9){
        clickedboxes = []
        for (let a = 0; a<box.length; a++){
            box[a].innerHTML = " ";
        }
        return
    }
    


    console.log(winnerChecker())
    if (winnerChecker() != false){
        winnerCount()
        winner()
        
    }
    drawChecker()

}
let palyer2 = document.getElementById("player2")
let palyer1 = document.getElementById("player1")
function turnColor(){

    if (isEven(count)== false){
        
        palyer2.classList.remove("turn")
        
        palyer1.classList.add("turn")
    }else{
        
        palyer1.classList.remove("turn")
        
        palyer2.classList.add("turn")
    }
}
let player1Wins = document.getElementById("player1Wins")
let player2Wins = document.getElementById("player2Wins")
function winnerCount(){
    if (player1Count == 5 || player2Count == 5){
        player1Count=0
        player2Count=0
        player1Wins.innerHTML = `Wins ${player1Count}`
        player2Wins.innerHTML = `Wins ${player2Count}`
    }
    let a = winnerChecker()
    if ( a == "x"){
        player1Count++
        player1Wins.innerHTML = `Wins ${player1Count}`
    }else{
        player2Count++
        player2Wins.innerHTML = `Wins ${player2Count}`
    }
}


function winner(){
    
    clearBoard()
}
function clearBoard(){
    count= 0
    clickedboxes = []
    for (let a = 0; a<box.length; a++){
        box[a].innerHTML = " ";
    }
}

function drawChecker(){
    if (clickedboxes.length == 9 && winnerChecker() == false){
        clearBoard()
    }

}

function winnerChecker(){
    if (rowandColumnChecker("x") != false){
        
        return rowandColumnChecker("x");
    }else if (rowandColumnChecker("y") != false){
        
        return rowandColumnChecker("y");
    }else if(rowandColumnChecker("d") != false){
        return rowandColumnChecker("d");
    }
    else{
        return false
    }
    

}


function rowandColumnChecker(xy){
    if (xy == "x"){
        if (threeBoxChecker(0,1,2) == "x" || threeBoxChecker(0,1,2) == "o"){
            return  threeBoxChecker(0,1,2);
        }if (threeBoxChecker(3,4,5) == "x" || threeBoxChecker(3,4,5) == "o"){
            return threeBoxChecker(3,4,5);
        }if (threeBoxChecker(6,7,8) == "x" || threeBoxChecker(6,7,8) == "o"){
            return threeBoxChecker(6,7,8);
        }else{
            return false;
        }
    } else if(xy == "y"){
        if (threeBoxChecker(0,3,6) == "x" || threeBoxChecker(0,3,6) == "o"){
            return threeBoxChecker(0,3,6);
        }if (threeBoxChecker(1,4,7) == "x" || threeBoxChecker(1,4,7) == "o"){
            return threeBoxChecker(1,4,7);
        }if (threeBoxChecker(2,5,8) == "x" || threeBoxChecker(2,5,8) == "o"){
            return threeBoxChecker(2,5,8);
        }else{
            return false;
        }
    }else if (xy == "d"){
        if (threeBoxChecker(6,4,2) == "x" ||threeBoxChecker(6,4,2) == "o"){
            return threeBoxChecker(6,4,2);
        }else if (threeBoxChecker(8,4,0) == "x" ||threeBoxChecker(8,4,0) == "o"){
            return threeBoxChecker(8,4,0)
        }else{
            return false;
        }
    }
    
}


function threeBoxChecker(a,b,c){
    
    if(box[a].innerHTML == box[b].innerHTML && box[a].innerHTML == box[c].innerHTML && box[a].innerHTML == "x"){
        return "x";
    }else if(box[a].innerHTML == box[b].innerHTML && box[a].innerHTML == box[c].innerHTML && box[a].innerHTML == "o" ){
        return "o";
    }else{
        return false
    }

}




boxClick()