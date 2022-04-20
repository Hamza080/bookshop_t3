import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './App.css';

const BookList = () => {
  const [bookList, setbookList] = useState([]);
  const [page, setpage] = useState([1]);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    fetchList();
  }, [page]);

  const fetchList = () => {
    axios.get(`https://gutendex.com/books/?page=${page}`)
    .then((res) => {
      setbookList([...bookList, ...res.data.results]);
    });
  };
  return (
    <div>
      <h1 className="h1">
        Booklist
      </h1>
      {bookList.map((book) => {
        return (
          <p 
          className="p"
          onClick={() => navigate("/detail", { state: book })} key={book.id}>
            {book.title}
          </p>
        );
      })}
      <button className="btn"
      onClick={() => setpage(page + 1)}>LoadMore</button>
      
    </div>
  );
};
export default BookList;
