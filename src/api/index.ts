import type { Book } from '../types';

// Book CRUD

export const addBook = (book: { title: string; author: string }) => {
  return fetch('http://localhost:5000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(book)
  });
};

export const getBooks = async () => {
  const response = await fetch('http://localhost:5000/books');
  const data = await response.json();
  return data;
};

export const editBook = ({ id, title, author }: Book) => {
  return fetch(`http://localhost:5000/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ title, author })
  });
};

export const deleteBook = (id: number) => {
  return fetch(`http://localhost:5000/books/${id}`, {
    method: 'DELETE'
  });
};
