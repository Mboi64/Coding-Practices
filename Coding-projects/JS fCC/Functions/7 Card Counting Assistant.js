let count = 0;

function cc(card) {
  if (card >= 1 && card <= 6) {
    return ++count + " Bet";
  }
  /*else if (card >= 7 && card <= 9) {
    return count + " Hold";
  }
  */
 else if (card <= 10) {
  return --count + " Bet";
 }
  else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    return --count + " Hold";
  }

 return count + (count > 0 ? " Bet" : " Hold");
}

/*
console.log(cc(2));
console.log(cc(3));
console.log(cc(4));
console.log(cc(5));
console.log(cc(6));
*/

/*
console.log(cc(7));
console.log(cc(8));
console.log(cc(9));
*/

/*
console.log(cc(10));
console.log(cc("J"));
console.log(cc("Q"));
console.log(cc("K"));
console.log(cc("A"));
*/

/*
console.log(cc(3));
console.log(cc(7));
console.log(cc("Q"));
console.log(cc(8));
console.log(cc("A"));
*/

/*
console.log(cc(2));
console.log(cc("J"));
console.log(cc(9));
console.log(cc(2));
console.log(cc(7));
*/


console.log(cc(2));
console.log(cc(2));
console.log(cc(10));


/*
console.log(cc(3));
console.log(cc(2));
console.log(cc("A"));
console.log(cc(10));
console.log(cc("K"));
*/


// This was my original code before I asked for help 

/* 
function cc(card) {
  if (card >= 1 && card <= 6) {
    return ++count + " Bet";
  }
  else if (card >= 7 && card <= 9) {
    return count + " Hold";
  }
 else if (card <= 10) {          The whole time I was confused on how to have the count be both "<= 10" and "= 10"
  return --count + " Bet";
 }
  else if (card === "J" || card === "Q" || card === "K" || card === "A") {
    return --count + " Hold";
  }
  
  flipped flopped on adding this if statement but didn't understand how to add it to the code
  if (count > 0) {
  return count + " Bet";
}
else {
  return count + " Hold"
}
  I didn't think to add a return condition when the code was added

}

*/