let lunches = [];

function addLunchToEnd(lunches, str) {
    const end = lunches.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return end, lunches;
}

function addLunchToStart(lunches, str) {
    const end = lunches.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return end;
}

function removeLastLunch(lunches) {
    const poof = lunches.pop();
    let gone = poof ? console.log(`${poof} removed from the end of the lunch menu.`) : console.log("No lunches to remove.");
    return gone;
}

function removeFirstLunch(lunches) {
    const poof = lunches.shift();
    let gone = poof ? console.log(`${poof} removed from the start of the lunch menu.`) : console.log("No lunches to remove.");
    return gone;
}

function getRandomLunch(lunches) {
    let randomize = Math.floor(Math.random() * lunches.length);
    const choices = randomize >= 0 && lunches.length !== 0 ? console.log(`Randomly selected lunch: ${lunches[randomize]}`) : console.log("No lunches available.");
    return choices;
}

function showLunchMenu(lunches) {
  let space = lunches.join(", "); // .split is only able to change Strings, not objects (I can use .join or .reverse since they are more broader properties) 
  const showcase = lunches.length !== 0 ? console.log(`Menu items: ${space}`) : console.log("The menu is empty.");
  return showcase;
}

// The issue between the original and the current is that I didn't utilize console.log
// There's not much wrong with the original but I needed to have the lunches parament be able to use arrays






/*
function addLunchToEnd(lunches, str) {
  if (lunches.push(str)){
    return `${str} added to the end of the lunch menu.`
  }
}

function addLunchToStart(lunches, str) {
  if (lunches.unshift(str)){
    return `${str} added to the start of the lunch menu.`
  }
}

function removeLastLunch(lunches) {
  const removed = lunches.pop();
  const gone = removed ?  `${removed} removed from the end of the lunch menu.` : "No lunches to remove.";
  return gone;
}

function removeFirstLunch(lunches) {
  const removed = lunches.shift();
  const gone = removed ?  `${removed} removed from the end of the lunch menu.` : "No lunches to remove.";
  return gone;
}

function getRandomLunch(lunches) {
  const randomizer = Math.floor (Math.random() * lunches.length);
  if (randomizer >= 0 && lunches.length !== 0){
  return `Randomly selected lunch: ${lunches[randomizer]}`;
  }
  else {
    return "No Lunches Available";
  }
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    return "The menu is empty.";
  }
  else {
    return `Menu items: ${lunches}`;
  }
}
*/
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
console.log(removeFirstLunch(lunches));
console.log(showLunchMenu(lunches));
