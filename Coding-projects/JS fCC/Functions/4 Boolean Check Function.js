// If the argument is true  OR false, then the output will be true
// If the argument is not a Boolean true or false, then the output will be false

function booWho(argument) {
  if (argument === true || argument === false) {
    // Utilize equality operators to make sure the parament have the same type and data
    console.log(true);
  } else {
    console.log(false);
  }
}

booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ a: 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");
