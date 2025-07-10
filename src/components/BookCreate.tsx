import { useState, type FC, type FormEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const BookCreate: FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (book: { title: string; author: string }) => {
      return fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(book)
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['books'] })
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <div className='rounded bg-slate-600 p-4 pt-2'>
      <h2 className='mb-4 text-xl font-bold'>Add a Book</h2>
      <form onSubmit={e => handleSubmit(e)} className='flex flex-col'>
        <label htmlFor='title' className='mb-2'>
          Title
        </label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='mb-4 grow rounded bg-slate-100 p-2 text-slate-950 outline-none'
        />
        <label htmlFor='author' className='mb-2'>
          Author
        </label>
        <input
          type='text'
          id='author'
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className='mb-4 grow rounded bg-slate-100 p-2 text-slate-950 outline-none'
        />
        <button
          type='submit'
          className='cursor-pointer rounded bg-amber-300 px-4 py-2 text-amber-950'
        >
          {mutation.isPending ? 'Adding to list...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
