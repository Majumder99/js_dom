let count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count = count + 1;
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    count = count - 1;
  }

  if (count) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

console.log(cc(10));
console.log(cc("J"));
console.log(cc("Q"));
console.log(cc("K"));
console.log(cc("A"));
