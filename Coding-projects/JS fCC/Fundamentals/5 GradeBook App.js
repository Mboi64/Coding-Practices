// return average score of an array (student scores)
const getAverage = (arr) => {
  let result = 0;
  for (const num of arr) {
    result += num;
  }
  return result / arr.length;
};

// returns letter grade based on score
const getGrade = (score) => {
  if (score >= 100) {
    return "A+";
  } else if (90 <= score && score <= 99) {
    return "A";
  } else if (80 <= score && score <= 89) {
    return "B";
  } else if (70 <= score && score <= 79) {
    return "C";
  } else if (60 <= score && score <= 69) {
    return "D";
  }

  return "F";
};

// returns if letter grade is passing or not
const hasPassingGrade = (score) => (getGrade(score) !== "F" ? true : false);

// returns a message of the class average and if the student has pass the course based on their score
const studentMsg = (arr, score) => {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`;
  }

  return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`;
};

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

console.log(getGrade(100));
console.log(getGrade(70));
console.log(getGrade(80));

console.log(hasPassingGrade(70));
console.log(hasPassingGrade(59));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
