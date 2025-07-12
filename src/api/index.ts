export const getBooks = async () => {
  const response = await fetch('http://localhost:5000/books');
  const data = await response.json();
  console.log(data);
  return data;
};

export const addBook = (book: { title: string; author: string }) => {
  return fetch('http://localhost:5000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(book)
  });
};
