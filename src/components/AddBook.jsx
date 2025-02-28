import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    coverImageUrl: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Submitted:", book);
    navigate("/"); // Redirect back to Home
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={book.description}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="coverImageUrl"
          placeholder="Cover Image URL"
          value={book.coverImageUrl}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
