import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // Destructuring the custom hook
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="error">{error}</div>} {/* Display error if any */}
      {isPending && <div>Loading...</div>} {/* Show loading message while data is being fetched */}
      {blogs && blogs.length > 0 ? (
        // Check if blogs are available
        <BlogList blogs={blogs} title="All Blogs" />
      ) : (
        !isPending && <div>No blogs available</div> // Display message if no blogs available
      )}
    </div>
  );
};

export default Home;
