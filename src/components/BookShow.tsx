import type { FC } from 'react';
import type { Book } from '../types';
import BookImage from '../assets/Closed_Book_Icon.svg';

const BookShow: FC<{ book: Book }> = ({ book: { title, author } }) => {
  return (
    <div className='border-box basis-1/2 p-4'>
      <img src={BookImage} alt='book' />
      <h2 className='mt-2 text-center font-bold'>{title}</h2>
      <h3 className='text-center'>{author}</h3>
    </div>
  );
};

export default BookShow;
