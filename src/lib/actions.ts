"use server";

import prisma from "./prisma";
import { getBookById } from "./getter";
import { redirect } from "next/navigation";

export const addReview = async (data: FormData) => {
  const book = await getBookById(data.get("id") as string);
  const read = new Date(data.get("read") as string);

  const input = {
    title: book.title,
    author: book.author,
    price: parseInt(book.price),
    publisher: book.publisher,
    published: book.published,
    image: book.image,
    read: read,
    memo: data.get("memo") as string,
  };

  await prisma.review.upsert({
    update: input,
    create: Object.assign({}, input, { id: data.get("id") as string }),
    where: {
      id: data.get("id") as string,
    },
  });

  redirect("/");
};

export const removeReview = async (data: FormData) => {
  await prisma.review.delete({
    where: {
      id: data.get("id") as string,
    },
  });

  redirect("/");
};
