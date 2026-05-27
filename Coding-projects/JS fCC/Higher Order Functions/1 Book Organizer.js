// Learning about higher order functions and different methods like filter(), map(), sort(), every(), etc.

const books = [
  {
    title: "Big Nate: In a Class by Himself",
    authorName: "Lincoln Peirce",
    releaseYear: 2010,
  },
  {
    title: "The Adventures of Captain Underpants",
    authorName: "Dav Pilkey",
    releaseYear: 1997,
  },
  {
    title: "Diary of a Wimpy Kid",
    authorName: "Jeff Kinney",
    releaseYear: 2007,
  },
  {
    title: "Dog Man",
    authorName: "Dav Pilkey",
    releaseYear: 2016,
  },
];

// callback function that accepts two books as parameter for sorting the array
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else if (book1.releaseYear === book2.releaseYear) {
    return 0;
  }
}

// filters book within the array of objects existed before 2014 from oldest to recent
const filteredBooks = books
  .filter((book) => book.releaseYear < 2014)
  .sort(sortByYear);

console.log(filteredBooks);
