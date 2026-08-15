const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(arrFragments) {
  for (const fragments of arrFragments) {
    if (!fragments) {
      console.log(`[COMPACTED]`);
    }
  }
  return arrFragments.filter((item) => item !== undefined);
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

// without using sort() method
function sortFragments(arr) {
  let sorted = [];
  // deep copy
  for (const a of arr) {
    sorted.push(a);
  }

  for (let i = 1; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[i].id < sorted[j].id) {
        sorted[j] = sorted.splice(i, 1, sorted[j])[0];
      }
    }
  }
  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(arr) {
  arr.forEach((item, index) => {
    if (index !== arr.findIndex((num) => num.id === item.id)) {
      console.log(`[DEDUPED]`);
    }
  });
  return arr.filter(
    (item, index) => arr.findIndex((num) => num.id === item.id) === index,
  );
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(arr) {
  // Another Js way to deep copy
  let fill = structuredClone(arr);

  fill.forEach((item, index) => {
    if (fill.findIndex((spot) => spot.id === item.id) + 1 !== item.id) {
      console.log(`[FILLED]`);
      fill.splice(index, 0, { id: index + 1, text: "[...]" });
    }
  });
  return fill;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(arr) {
  let result = ``;
  arr.forEach((item, index) => {
    const textLength = item.text.length;
    if (index + 1 === arr.length) {
      result += item.text;
    } else if ("" !== item.text[textLength] - 1) {
      result += `${item.text}\n`;
    }
  });
  return result;
}

console.log(assembleStory(filledFragments));
