"use client";

import React from "react";
import { addReview, removeReview } from "@/lib/actions";

interface FormType {
  id: string;
  read: string | null;
  memo: string | undefined | null;
}

const FormEdit = ({ src: { id, read, memo } }: { src: FormType }) => {
  return (
    <form action={addReview}>
      <input type="hidden" name="id" defaultValue={id} />
      <div className="mb-3">
        <label className="font-bold" htmlFor="read">
          読了日
        </label>
        <input
          type="date"
          id="read"
          name="read"
          className="block bg-gray-100 border-2 border-gray-600 rounded focus:bg-white focus:outline-none focus:border-red-500"
          defaultValue={read as string}
        />
      </div>
      <div className="mb-3">
        <label className="font-bold" htmlFor="memo">
          感想
        </label>
        <textarea
          id="memo"
          name="memo"
          rows={3}
          className="block bg-gray-100 border-2 border-gray-600 w-full rounded focus:bg-white focus:outline-none focus:border-red-500"
          defaultValue={memo ? memo : ""}
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500"
      >
        登録
      </button>
      <button
        type="submit"
        className="bg-red-600 text-white rounded px-4 py-2 mr-2 hover:bg-red-500"
        formAction={removeReview}
      >
        削除
      </button>
    </form>
  );
};

export default FormEdit;
