var randNum=Math.floor(Math.random()*101)+19
console.log(randNum)

var randCrys1=Math.floor(Math.random()*11)+1
console.log(randCrys1)

var randCrys2=Math.floor(Math.random()*11)+1
console.log(randCrys2)

var randCrys3=Math.floor(Math.random()*11)+1
console.log(randCrys3)

var randCrys4=Math.floor(Math.random()*11)+1
console.log(randCrys4)

var userScore= 0;
var wins= 0;
var losses= 0;

$('.wins').html("Wins: " + wins);
$('.losses').html("Losses: " + losses);
$('total-score').html(userScore); 

//userScore goes in .total-score div

$('.numToGet').append([randNum]);


$('.purple').on('click', function () {
   userScore = userScore + randCrys1;
   console.log("New userScore= " + userScore);
   $('.total-score').html('Your total score is: ' + userScore);
   		if (userScore === randNum) {
   			alert("You win!");
   			$('.wins').html("Wins: " + wins++);
   		}
   		else if (userScore > randNum) {
   			alert("You lost!");
   			$('.losses').html("Losses: " + losses++);
   		}
   		//the update to wins and losses only works when I press the gem button one more time
   		//also need to somehow reset the game but keep the wins and losses!
});

$('.blue').on('click', function () {
   userScore = userScore + randCrys2;
   console.log("New userScore= " + userScore);
   $('.total-score').html('Your total score is: ' + userScore);
   		if (userScore === randNum) {
   			alert("You win!");
   			$('.wins').html("Wins: " + wins++);   			
   		}
   		else if (userScore > randNum) {
   			alert("You lost!");
   			$('.losses').html("Losses: " + losses++);   			
   		}

   // do more logic
});

$('.green').on('click', function () {
   userScore = userScore + randCrys3;
   console.log("New userScore= " + userScore);
   $('.total-score').html('Your total score is: ' + userScore);
   		if (userScore === randNum) {
   			alert("You win!");
   			$('.wins').html("Wins: " + wins++);
   		}
   		else if (userScore > randNum) {
   			alert("You lost!");
   			$('.losses').html("Losses: " + losses++);
   		}
   // do more logic
});

$('.red').on('click', function () {
   userScore = userScore + randCrys4;
   console.log("New userScore= " + userScore);
   $('.total-score').html('Your total score is: ' + userScore);
   		if (userScore === randNum) {
   			alert("You win!");
   			$('.wins').html("Wins: " + wins++);
   		}
   		else if (userScore > randNum) {
   			alert("You lost!");
   			$('.losses').html("Losses: " + losses++);
   		}
   // do more logic
});


