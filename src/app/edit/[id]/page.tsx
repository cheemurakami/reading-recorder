import React from "react";
import { getBookById, getReviewById } from "@/lib/getter";
import FormEdit from "@/app/components/FormEdit";

interface ParamsType {
  id: string;
}

const EditPage = async ({ params }: { params: ParamsType }) => {
  const book = await getBookById(params.id);
  const review = await getReviewById(params.id);

  const read = (review?.read || new Date()).toLocaleDateString("en-US");

  return (
    <div id="form">
      <hr />
      <FormEdit src={{ id: book.id, read, memo: review?.memo }} />
    </div>
  );
};

export default EditPage;
