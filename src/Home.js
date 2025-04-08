import { useState, useEffect } from "react"; // Ensure useState and useEffect are imported correctly
import BlogList from "./BlogList"; // Import BlogList component

const Home = () => {
  const [blogs, setBlogs] = useState(null); // State to store the blogs data
  const [isPending, setIsPending] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  // Fetching data when component mounts
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) { // Check if response is okay
          throw new Error('Could not fetch the data for that resource');
        }
        return res.json(); // Parse response to JSON
      })
      .then(data => {
        setIsPending(false); // Set loading to false after data is fetched
        setBlogs(data); // Set blogs state with fetched data
        setError(null); // Reset error state if successful
      })
      .catch(err => {
        setIsPending(false); // Stop loading
        setError(err.message); // Set the error message if there's an issue
      });
  }, []); // The effect runs only once when the component mounts

  return (
    <div className="home">
      {error && <div className="error">{error}</div>} {/* Display error message if there's an error */}
      {isPending && <div>Loading...</div>} {/* Display loading message while fetching */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />} {/* Display blogs once data is fetched */}
    </div>
  );
};

export default Home;
