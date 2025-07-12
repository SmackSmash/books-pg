import type { FC } from 'react';
import type { Book } from '../types';
import BookShow from './BookShow';

const BookList: FC<{ books: [Book] }> = ({ books }) => {
  return (
    <div className='mb-2 grid grid-cols-2 gap-4 rounded bg-linear-to-br from-purple-500 to-pink-500 p-4'>
      {books.map(book => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
