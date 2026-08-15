const poll = new Map();

function addOption(option) {
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  if (option === "" || option === undefined) {
    return `Option cannot be empty.`;
  }
  poll.set(option, new Set()); // the 'option' is the canidate and the 'new Set()' is the set of voters
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  const pollSet = poll.get(option); // This gives access to the new Set()
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  if (pollSet.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  pollSet.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let results = `Poll Results:`;
  poll.forEach((id, opt) => {
    results += `\n${opt}: ${id.size} votes`;
  });
  return results;
}

addOption("Turkey");
addOption("Algeria");
addOption("Nigeria");
vote("Turkey", "Mr.prince");
vote("Turkey", "Moss Head");
vote("Nigeria", "Lucy");
vote("Algeria", "Cat Burgerler");

console.log(displayResults());
