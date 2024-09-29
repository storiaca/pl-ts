import { db } from "../src/utils/db.server";

type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  title: string;
  isFiction: boolean;
  datePublished: Date;
};

async function seed() {
  await Promise.all(
    getAuthors().map((author) => {
      return db.author.create({
        data: {
          firstName: author.firstName,
          lastName: author.lastName,
        },
      });
    })
  );
  const author = await db.author.findFirst({
    where: {
      firstName: "Yuval Noah",
    },
  });
}

function getAuthors(): Array<Author> {
  return [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "William",
      lastName: "Shakespeare",
    },
    {
      firstName: "Yuval Noah",
      lastName: "Harari",
    },
  ];
}

function getBooks(): Array<Book> {
  return [
    {
      title: "Sapiens",
      isFiction: false,
      datePublished: new Date(),
    },
    {
      title: "Homo Deus",
      isFiction: false,
      datePublished: new Date(),
    },
    {
      title: "The Ugly Duckling",
      isFiction: true,
      datePublished: new Date(),
    },
  ];
}
