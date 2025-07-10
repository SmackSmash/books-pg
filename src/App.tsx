import type { FC } from 'react';
import BookCreate from './components/BookCreate';

const App: FC = () => {
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
