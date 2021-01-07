import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/91sJmZFOIQL._AC_UL200_SR200,200_.jpg",
    title: "Word Power Made Easy",
    author: " Norman Lewis",
  },
  {
    id: 2,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/91DBkHW1%2BtL._AC_UL200_SR200,200_.jpg",
    title: "Bhagavad Gita: Yatharoop (Hindi)",
    author: " A.C. Bhaktivendanta Swami Prabhupada",
  },
  {
    id: 3,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/8170Bj%2BbSOL._AC_UL200_SR200,200_.jpg",
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        // return <Book img={img} title={title} author={author}></Book>;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="face" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
