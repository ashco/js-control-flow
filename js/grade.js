// Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

var score = 74;

switch(true) {
  case score > 100:
    console.log('Way to go, cheater!');
    break;
  case score > 90:
    console.log('A');
    break;
  case score > 80:
    console.log('B');
    break;
  case score > 70:
    console.log('C');
    break;
  case score > 60:
    console.log('D');
    break;
  default:
  	console.log('See you in summer school!');
}




// if(score > 100){
// 	console.log("Way to go, cheater!");
// }else if(score >= 90){
// 	console.log("A");
// }else if(score >= 80){
// 	console.log("B");
// }else if(score >= 70){
// 	console.log("C");
// }else if(score >= 60){
// 	console.log("D");
// }else{
// 	console.log("See you in summer school!");
// }

