import type { FC } from 'react';
import type { Book } from '../types';

const BookEdit: FC<{ book: Book }> = ({ book: { id, title, author } }) => {
  return (
    <div>
      {id} {title} {author}
    </div>
  );
};

export default BookEdit;
