import React from "react";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";
import heart from "../src/images/bx_bx-book-heart.png";
import bell from "../src/images/ic_round-notifications-none.png";
import diamond from "../src/images/fluent_premium-person-20-regular.png";
import { FaSistrix } from "react-icons/fa";

const App = () => {
  let [search, setSearch] = useState("");
  let [harryBooks, setharryBooks] = useState([]);
  let [sherlockBooks, setsherlockBooks] = useState([]);
  useEffect(() => {
    // console.log("I am working");
    getHarryBooks();
    getSherlockBooks();
  }, []);

  function bookSearch() {
    setharryBooks(
      allBooks.filter((book) => {
        return book.volumeInfo.title.includes(search);
      })
    );
  }
  async function getHarryBooks() {
    try {
      let request = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
      );
      console.log(request.data.items);
      setharryBooks(request.data.items);
      // console.log(response.data.items);
      // setharryBooks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSherlockBooks() {
    try {
      let response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
      );
      console.log(response.data.items);
      setsherlockBooks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }
  let allBooks = harryBooks.concat(sherlockBooks);
  return (
    <div>
      <div className="App">
        <div className="header">
          <span className="logo">BookShop</span>
          <div className="search-area">
            <div className="search-box">
              <span id="search-icon">
                <FaSistrix />
              </span>
              <input
                type="text"
                id="search-input"
                placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <button id="search-btn" onClick={bookSearch}>
            Search
          </button>
          <div className="other-icons">
            <span>
              <img src={heart} alt="" />
            </span>
            <span>
              <img src={bell} alt="" />
            </span>
            <span>
              <img src={diamond} alt="" />
            </span>
          </div>
        </div>
        {allBooks.length > 0 && <BookList books={allBooks} />}
      </div>
    </div>
  );
};

export default App;
