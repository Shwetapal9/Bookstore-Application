import React, { useState,useEffect } from "react";
import axios from "axios";
const GetBook = () => {
  let [book, setBook] = useState("");

  

  

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search Book of your choice"
        onChange={(e) => setBook(e.target.value)}
        value={book}
      />
      <button type="submit" onClick={displayBook}>
        Search Book
      </button> */}
    </div>
  );
};

export default GetBook;
