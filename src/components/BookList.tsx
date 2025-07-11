import type { FC } from 'react';
import type { Book } from '../types';
import BookShow from './BookShow';

const BookList: FC<{ books: [Book] }> = ({ books }) => {
  return (
    <div className='mb-2 flex flex-wrap rounded bg-slate-600 p-4'>
      {books.map(book => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
