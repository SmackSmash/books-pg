import type { FC } from 'react';

const BookCreate: FC = () => {
  return (
    <div>
      <h2 className='mb-4 text-xl font-bold'>Add a Book</h2>
      <form className='flex flex-col'>
        <label htmlFor='title' className='mb-2'>
          Title
        </label>
        <div className='flex'>
          <input
            type='text'
            id='title'
            className='grow basis-1 bg-slate-100 p-2 text-slate-950 outline-none'
          />
          <button type='submit' className='cursor-pointer bg-amber-300 px-4 py-2 text-amber-950'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookCreate;
