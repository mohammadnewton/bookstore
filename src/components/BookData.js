/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const getInputs = (e) => {
    const { name, value } = e.target;
    const inputs = { [name]: value };
    setInput({ ...input, ...inputs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(addBook(book));
    setInput(input);
  };

  return (
    <form>
      <input
        type="text"
        onChange={getInputs}
        name="title"
        value={input.title}
        placeholder=" Book Title"
      />
      <br />
      <input
        type="text"
        name="author"
        onChange={getInputs}
        value={input.author}
        placeholder="Author"
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        ADD BOOK
      </button>
    </form>
  );
};

export default AddBook;
