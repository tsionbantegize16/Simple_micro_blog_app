import { useState, useEffect } from "react"; // Ensure useState and useEffect are imported correctly
import BlogList from "./BlogList"; // Import BlogList component

const Home = () => {
  const [blogs, setBlogs] = useState(null); // State to store the blogs data
  const [isPending, setIsPending] = useState(true); // State to handle loading status

  // Fetching data when component mounts
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => res.json()) // Convert response to JSON
      .then(data => {
        setIsPending(false); // Set isPending to false after data is fetched
        setBlogs(data); // Set the blogs state with fetched data
      })
      .catch(err => {
        console.error('Error fetching blogs:', err); // Handle any errors
        setIsPending(false); // Stop loading if there's an error
      });
  }, []); // The effect runs only once when the component mounts

  return (
    <div className="home">
      { isPending && <div>Loading...</div> } {/* Display loading message while fetching */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />} {/* Display blogs once data is fetched */}
    </div>
  );
};

export default Home;
