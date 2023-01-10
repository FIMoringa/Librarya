import axios from "axios";
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const fetchBooks = async () => {
  const { data } = await axios.get("http://localhost:3000/books");
  return data;
};

export const fetchBook = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/books/${id}`);
  return data;
};

export const createBook = async (formData) => {
  const { data } = await axios.post("http://localhost:3000/books", formData);
  return data;
};

export const updateBook = async (id, formData) => {
  const { data } = await axios.put(
    `http://localhost:3000/books/${id}`,
    formData
  );
  return data;
};

export const deleteBook = async (id) => {
  const { data } = await axios.delete(`http://localhost:3000/books/${id}`);
  return data;
};



// export const books = [
//   {
//     id: 1,
//     title: "The Hobbit",
//     isbn: "9780547928227",
//     price: 10.99,
//     description:
//       "The Hobbit is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
//     year: 1937,
//     author_id: 1,
//     book_category_id: 2,
//   },
//   {
//     id: 2,
//     title: "The Lord of the Rings",
//     isbn: "9780547928227",
//     price: 10.99,
//     description:
//       "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
//     year: 1937,
//     author_id: 1,
//     book_category_id: 2,
//   },
//   {
//     id: 3,
//     title: "The Fellowship of the Ring",
//     isbn: "9780547928227",
//     price: 10.99,
//     description: "The first volume of The Lord of the Rings, by J.R.R. Tolkien.,  ",
//     year: 1937,
//     author_id: 1,
//     book_category_id: 2,
//   },

// //   generate 10 more books
// {
//     id: 4,
//     title: "Harry Potter and the Philosopher's Stone",
//     isbn: "9780547928227",
//     price: 10.99,
//     description:"Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
//     year: 1997,
//     author_id: 2,
//     book_category_id: 1,
// },

// {
//     id: 5,
//     title: "The Hobbit",
//     isbn: "9780547928227",
//     price: 10.99,
//     description:
//       "The Hobbit is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
//     year: 1937,
//     author_id: 1,
//     book_category_id: 2,
//   },
//   {
//     id: 6,
//     title: "The Lord of the Rings",
//     isbn: "9780547928227",
//     price: 10.99,
//     description:
//       "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
//     year: 1937,
//     author_id: 1,
//     book_category_id: 2,
//   },
//   {
//     id: 7,
//     title: "The Fellowship of the Ring",
//     isbn: "9780547928227",
//     price: 10.99,
//     description: "The first volume of The Lord of the Rings, by J.R.R. Tolkien.,  ",
//     year: 1937,
//     author_id: 1,
//     book_category_id: 2,
//   },

// ];

// export const authors = [
//   {
//     first_name: "J.R.R.",
//     last_name: "Tolkien",
//     bio: "John Ronald Reuel Tolkien, CBE FRSL was an English writer, poet, philologist, and university professor who is best known as the author of the classic high fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion.",
//   },
//   {
//     first_name: "J.K.",
//     last_name: "Rowling",
//     bio: "Joanne Rowling, CH, OBE, FRSL, pen names J. K. Rowling and Robert Galbraith, is a British novelist, philanthropist, film producer, television producer, and screenwriter, best known for writing the Harry Potter fantasy series.",
//   },
//   {
//     first_name: "George R.R.",
//     last_name: "Martin",
//     bio: "George Raymond Richard Martin is an American novelist and short-story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer. He is best known for his series of epic fantasy novels, A Song of Ice and Fire, which was later adapted into the HBO series Game of Thrones.",
//   },
//   {
//     first_name: "Stephen",
//     last_name: "King",
//     bio: "Stephen Edwin King is an American author of horror, supernatural fiction, suspense, science fiction, and fantasy. His books have sold more than 350 million copies, and many have been adapted into films, television series, miniseries, and comic books.",
//   },
// ];

// export const categories = [
//   { title: "Fantasy" },
//   { title: "Science Fiction" },
//   { title: "Horror" },
//   { title: "Mystery" },
//   { title: "Romance" },
//   { title: "Thriller" },
// ];
