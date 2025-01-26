import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Authors data
  const authorsData = [
    { name: "F. Scott Fitzgerald", email: "fscott@example.com" },
    { name: "Harper Lee", email: "harperlee@example.com" },
    { name: "George Orwell", email: "georgeorwell@example.com" },
    { name: "Aldous Huxley", email: "aldoushuxley@example.com" },
    { name: "J.K. Rowling", email: "jkrowling@example.com" },
  ];

  // Create Authors using a loop
  const authors = [];
  for (const author of authorsData) {
    const createdAuthor = await prisma.author.create({ data: author });
    authors.push(createdAuthor);
  }
  console.log("Created authors:", authors);

  // Books data
  const booksData = [
    {
      title: "A nagy Gatsby",
      genre: "Fikció",
      publishedAt: new Date("1925-04-10"),
      authorId: authors[0].id,
    },
    {
      title: "Ne bántsátok a feketerigót!",
      genre: "Fikció",
      publishedAt: new Date("1960-07-11"),
      authorId: authors[1].id,
    },
    {
      title: "1984",
      genre: "Fikció",
      publishedAt: new Date("1949-06-08"),
      authorId: authors[2].id,
    },
    {
      title: "Szép új világ",
      genre: "Fikció",
      publishedAt: new Date("1932-08-30"),
      authorId: authors[3].id,
    },
    {
      title: "Harry Potter és a bölcsek köve",
      genre: "Fantasy",
      publishedAt: new Date("1997-06-26"),
      authorId: authors[4].id,
    },
  ];

  // Create Books
  const books = [];
  for (const book of booksData) {
    const createdBook = await prisma.book.create({ data: book });
    books.push(createdBook);
  }
  console.log("Created books:", books);

  // Members data
  const membersData = [
    {
      name: "Alice",
      email: "alice@example.com",
      joinedAt: new Date("2023-01-01"),
    },
    { name: "Bob", email: "bob@example.com", joinedAt: new Date("2023-03-15") },
    {
      name: "Charlie",
      email: "charlie@example.com",
      joinedAt: new Date("2023-05-20"),
    },
    {
      name: "Diana",
      email: "diana@example.com",
      joinedAt: new Date("2022-11-10"),
    },
    { name: "Eve", email: "eve@example.com", joinedAt: new Date("2022-12-05") },
  ];

  // Create Members
  const members = [];
  for (const member of membersData) {
    const createdMember = await prisma.member.create({ data: member });
    members.push(createdMember);
  }
  console.log("Created members:", members);

  // Borrowed Books data
  const borrowedBooksData = [
    { memberId: members[0].id, bookId: books[1].id },
    { memberId: members[0].id, bookId: books[3].id },
    { memberId: members[1].id, bookId: books[0].id },
    { memberId: members[1].id, bookId: books[2].id },
    { memberId: members[2].id, bookId: books[4].id },
  ];

  // Create Borrowed Books
  for (const borrowedBook of borrowedBooksData) {
    await prisma.borrowedBook.create({ data: borrowedBook });
  }
  console.log("Seed data successfully created!");
}

main()
  .catch((e) => {
    console.error("Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })