let homeScore =0;
let guestScore = 0;
function homePlus1 () {
    homeScore+=1;
    document.getElementById("score-id").innerText=homeScore;
}
function homePlus2 () {
    homeScore+=2;
    document.getElementById("score-id").innerText=homeScore;
}
function homePlus4 () {
    homeScore+=4;
    document.getElementById("score-id").innerText=homeScore;
}
function guestPlus1 () {
    guestScore+=1;
    document.getElementById("guest-score-id").innerText=guestScore;
}
function guestPlus2 () {
    guestScore+=2;
    document.getElementById("guest-score-id").innerText=guestScore;
}
function guestPlus4 () {
    guestScore+=4;
    document.getElementById("guest-score-id").innerText=guestScore;
}
function resetGame(){
    homeScore=0, guestScore=0;
    document.getElementById("score-id").innerText=0;
    document.getElementById("guest-score-id").innerText=0;
    
}