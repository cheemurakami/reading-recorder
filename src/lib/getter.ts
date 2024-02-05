import prisma from "./prisma";
import { BookProps } from "@/app/interface";

export const getAllReviews = async () => {
  return await prisma.review.findMany({
    orderBy: {
      read: "desc",
    },
  });
};

export const getBooksByKeyword = async (keywords: string) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keywords}&languageRestrict=ja&maxResults=10&printType=books`
  );

  const data = await res.json();
  const result = await data.items;

  let books: BookProps[] = [];
  result.forEach((bookData: any) => {
    books.push(createBook(bookData));
  });

  return books;
};

const createBook = (book: any) => {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const image = book.volumeInfo.imageLinks;

  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(",") : null,
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: image ? image.thumbnail : "/vercel.svg",
  };
};

export const getBookById = async (bookId: string | null) => {
  const resp = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}`
  );

  const result = await resp.json();

  return createBook(result);
};

export const getReviewById = async (bookId: string) => {
  return await prisma.review.findUnique({
    where: {
      id: bookId,
    },
  });
};
