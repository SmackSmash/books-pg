import { useState, type FC, type FormEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBook } from '../api';

const BookCreate: FC = () => {
  const [formState, setFormState] = useState({ title: '', author: '' });

  const queryClient = useQueryClient();

  const addBookMutation = useMutation({
    mutationFn: addBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['books'] })
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBookMutation.mutate(formState);
    setFormState({ title: '', author: '' });
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
          value={formState.title}
          placeholder='e.g. The Road'
          onChange={e => setFormState({ ...formState, title: e.target.value })}
          className='mb-4 grow rounded bg-slate-100 p-2 text-slate-950 outline-none'
        />
        <label htmlFor='author' className='mb-2'>
          Author
        </label>
        <input
          type='text'
          id='author'
          value={formState.author}
          placeholder='e.g. Cormac McCarthy'
          onChange={e => setFormState({ ...formState, author: e.target.value })}
          className='mb-4 grow rounded bg-slate-100 p-2 text-slate-950 outline-none'
        />
        <button
          type='submit'
          className='cursor-pointer rounded bg-amber-300 px-4 py-2 text-amber-950'
        >
          {addBookMutation.isPending ? 'Adding to list...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
