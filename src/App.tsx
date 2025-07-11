import type { FC } from 'react';
import BookCreate from './components/BookCreate';
import { useQuery } from '@tanstack/react-query';
import BookList from './components/BookList';

const App: FC = () => {
  const {
    isPending,
    isError,
    error,
    data: books
  } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/');
      const data = await response.json();
      console.log(data);
      return data;
    }
  });

  return (
    <div className='m-2 rounded bg-slate-700 p-4'>
      <h1 className='mb-2 border-b-2 border-b-slate-600 pb-2 text-2xl font-extrabold'>
        Reading List
      </h1>
      {isPending && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {books && books.length ? <BookList books={books} /> : <p>No books to show</p>}
      <BookCreate />
    </div>
  );
};

export default App;
