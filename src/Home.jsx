import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button className="add-book-btn">Add Book</button>
      </Link>
      {/* Display book list (if implemented) */}
    </div>
  );
};

export default Home;
