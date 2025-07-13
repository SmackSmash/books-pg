import { useState, type FC } from 'react';
import type { Book } from '../types';
import BookImage from '../assets/Closed_Book_Icon.svg';
import { IoPencilSharp, IoClose } from 'react-icons/io5';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBook } from '../api';
import BookEdit from './BookEdit';

const BookShow: FC<{ book: Book }> = ({ book }) => {
  const { id, title, author } = book;

  const [showEdit, setShowEdit] = useState(false);

  const queryClient = useQueryClient();

  const deleteBookMutation = useMutation({
    mutationFn: () => deleteBook(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['books'] })
  });

  const handleDelete = () => {
    deleteBookMutation.mutate();
    console.log(`Deleted book with id: ${id}`);
  };

  return (
    <div className='relative rounded bg-slate-100/50 p-4 text-slate-900'>
      <button
        onClick={handleDelete}
        className='absolute top-2 right-2 cursor-pointer rounded-full p-0.5 text-xl text-slate-100 hover:bg-slate-100 hover:text-slate-800'
      >
        <IoClose />
      </button>
      <button
        onClick={() => setShowEdit(!showEdit)}
        className={`absolute top-2 left-2 cursor-pointer rounded-full p-0.5 text-xl text-slate-100 hover:bg-slate-100 hover:text-slate-800 [&.active]:bg-slate-100 [&.active]:text-slate-800 ${showEdit && 'active'}`}
      >
        <IoPencilSharp />
      </button>
      <img src={BookImage} alt='Book icon' className='mx-auto mb-4 w-2/3' />
      {showEdit ? (
        <BookEdit book={book} setShowEdit={setShowEdit} />
      ) : (
        <>
          <h3 className='text-center'>{author}</h3>
          <h2 className='mt-2 text-center font-bold'>{title}</h2>
        </>
      )}
    </div>
  );
};

export default BookShow;
