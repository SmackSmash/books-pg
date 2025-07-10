import type { FC } from 'react';
import BookCreate from './components/BookCreate';
import { useQuery } from '@tanstack/react-query';

const App: FC = () => {
  const { isFetching, error, data } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/');
      return await response.json();
    }
  });

  return (
    <div className='m-2 rounded bg-slate-700 p-4'>
      <h1 className='mb-2 border-b-2 border-b-slate-600 pb-2 text-2xl font-extrabold'>
        Reading List
      </h1>
      <BookCreate />
    </div>
  );
};

export default App;
