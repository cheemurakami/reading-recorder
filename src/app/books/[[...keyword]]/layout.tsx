"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const BooksLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const txtKeyword = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    router.push(`/books/${txtKeyword.current?.value}`);
  };

  return (
    <>
      <form className="mt-2 mb-4">
        <input
          type="text"
          ref={txtKeyword}
          className="bg-gray-100 text-black border border0gray-600 rounded mr-2 px-2 py-2 focus:bg-white focus:outline-none focus:border-red-500"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500"
        >
          Search
        </button>
      </form>

      <hr />
      {children}
    </>
  );
};

export default BooksLayout;
