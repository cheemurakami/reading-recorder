import { getBooksByKeyword } from "@/lib/getter";
import LinkedBookDetails from "../../components/LinkedBookDetails";

const BookResults = async ({ params: { keyword = "React" } }) => {
  const books = await getBooksByKeyword(keyword);

  return (
    <>
      {books && books.map((book, i) => {
        return <LinkedBookDetails key={i} book={book} index={i} />;
      })}
    </>
  );
};

export default BookResults;
