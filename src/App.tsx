import type { FC } from 'react';
import BookCreate from './components/BookCreate';
import { useQuery } from '@tanstack/react-query';
import { getBooks } from './api';
import BookList from './components/BookList';

const App: FC = () => {
  const {
    isPending,
    isError,
    error,
    data: books
  } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  });

  return (
    <div className='m-2 rounded bg-slate-700 p-4'>
      <h1 className='mb-2 border-b-2 border-b-slate-600 pb-2 text-2xl font-extrabold'>
        Reading List
      </h1>
      {isPending && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {books && <BookList books={books} />}
      <BookCreate />
    </div>
  );
};

export default App;
