"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_server_1 = require("../src/utils/db.server");
async function seed() {
    await Promise.all(getAuthors().map((author) => {
        return db_server_1.db.author.create({
            data: {
                firstName: author.firstName,
                lastName: author.lastName,
            },
        });
    }));
    const author = await db_server_1.db.author.findFirst({
        where: {
            firstName: "Yuval Noah",
        },
    });
    await Promise.all(getBooks().map((book) => {
        const { title, isFiction, datePublished } = book;
        return db_server_1.db.book.create({
            data: {
                title,
                isFiction,
                datePublished,
                authorId: author.id,
            },
        });
    }));
}
seed();
function getAuthors() {
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
function getBooks() {
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
