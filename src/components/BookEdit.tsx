import { useState, type FC, type FormEvent } from 'react';
import type { Book } from '../types';

const BookEdit: FC<{ book: Book }> = ({ book: { id, title, author } }) => {
  const [formState, setFormState] = useState({ title, author });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type='text'
        value={formState.author}
        onChange={e => setFormState({ ...formState, author: e.target.value })}
        autoFocus={true}
        className='mb-4 w-full grow rounded bg-slate-100 p-2 text-slate-950 outline-none'
      />
      <input
        type='text'
        value={formState.title}
        onChange={e => setFormState({ ...formState, title: e.target.value })}
        className='mb-4 w-full grow rounded bg-slate-100 p-2 text-slate-950 outline-none'
      />
      <button
        type='submit'
        className='mx-auto block cursor-pointer rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-700'
      >
        Submit
      </button>
    </form>
  );
};

export default BookEdit;
