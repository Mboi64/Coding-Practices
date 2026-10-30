function mask(card) {
  const last4 = card.slice(-4);
  let stars = "";
  for (let i = 0; i < card.length - 4; i++) {
    if (card[i] === "-") {
      stars += "-";
    } else if (card[i] === " ") {
      stars += " ";
    } else {
      stars += "*";
    }
  }
  return stars + last4;
}

console.log(mask("4012-8888-8888-1881"));
console.log(mask("5105 1051 0510 5100"));
