import { getAllReviews } from "@/lib/getter";
import LinkedBookDetails from "./components/LinkedBookDetails";

export const dynamic = 'force-dynamic'
export default async function Home() {
  const reviews = await getAllReviews()

  return (
    <>
      {reviews.map((review, i) => (
        <LinkedBookDetails book={review} index={i + 1} key={i} />
      ))}
    </>
  );
}
