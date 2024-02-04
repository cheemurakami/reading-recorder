export interface BookProps {
  id: string;
  title: string;
  author: string;
  price: number;
  publisher: string;
  image: string;
  read: Date;
  memo?: string | null;
}
