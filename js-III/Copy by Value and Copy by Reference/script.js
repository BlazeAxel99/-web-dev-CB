
var quidditchWinner = "harry potter"

function changeWinner(winner){
    winner = " Draco "

}
console.log("the winner was "+ quidditchWinner );

changeWinner(quidditchWinner);

console.log("now the winner is " + quidditchWinner  );



var quidditchWinner = "harry potter"

function changeWinner(winner){
    console.log("original win "+ winner );
    winner = " Draco "
    console.log("changed win "+ winner );

}
console.log("the winner was "+ quidditchWinner );

changeWinner(quidditchWinner);

console.log("now the winner is " + quidditchWinner  );




var quidditchWinners = ["harry", "ron" , "hermoine"];

function changeWinner(winners){
    winners[0] = " Draco ";
    winners[1] = "crabbe";
    winners[2] = "pansy";

}
console.log("the winners were "+ quidditchWinners);

changeWinner(quidditchWinners);

console.log("now the winners are " + quidditchWinners);