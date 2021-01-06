import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/91sJmZFOIQL._AC_UL200_SR200,200_.jpg"
    alt="image"
  />
);

const Title = () => <h1>Word Power Made Easy Word Power Made Easy</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0,75rem", marginTop: "0.25rem" }}>
    Norman Lewis
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root"));
