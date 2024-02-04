import React from "react";
import Image from "next/image";
import { BookProps } from "../interface";

const BookDetails = ({ book, index }: { book: BookProps; index: number }) => {
  return (
    <div className="flex w-full mb-4">
      <div>
        <Image src={book.image} alt="" width={140} height={180} />
      </div>

      <div>
        <ul className="list-none text-black ml-4">
          <li>{index && index + "."}</li>
          <li>
            {book.title} ({book.price}円)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
