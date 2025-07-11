import type { FC } from 'react';
import type { Book } from '../types';

const BookShow: FC<{ book: Book }> = ({ book: { title, author } }) => {
  return (
    <div className='basis-1/2 bg-slate-400'>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default BookShow;
