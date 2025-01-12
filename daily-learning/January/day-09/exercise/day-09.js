// Create ana array called library with three book objects and each book object shoulf have the following properties: ttile, author and available.

// const library = [
//   {title: 'Eyes of the sun',
//    author: 'Chinua Achebe',
//    available: false
//    },

//    {
//     title: 'Moby Dick',
//     author: 'Herman Melville',
//     available: true
//    },

//    {
//     title: 1984,
//     author: 'George Orwell',
//     available: true 
//    }
// ];

// Add a anew book object to the library array.
// library.push({
//   title: 'The Road',
//   author: 'Cormac McCarthy',
//   available: true
// });

// console.log(library)

// Use filter to create a new array of all available books
// const availableBooks = library.filter(library => library.availableBooks);
// console.log(availableBooks);

// use find to locate a book by title
// const bookByTitle = 1984;
// const bookFound = library.find(library => library.title === bookByTitle);
// console.log(bookFound);

// Update the available status of a specific book to false
// const bookByTitle = 1984;
// const bookBorrowed = library.find(library => library.title === bookByTitle);

// if (bookBorrowed) {
//   bookBorrowed.available = false;
//   console.log('You have borrowed "${bookBorrowed.title}". ');
// } else {
//   console.log('Book not found.');
// }
// console.log(library);

// Use map to create a new array of strings that lists each book's title and author
// const titleAuthor = library.map(library => '${library.title} by ${library.author}');
// console.log(titleAuthor);