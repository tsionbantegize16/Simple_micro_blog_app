import { useState, useEffect } from "react";  // Ensure useState and useEffect are imported correctly
import BlogList from "./BlogList"; // Import BlogList component

const Home = () => {
  const [blogs, setBlogs] = useState([ // Initializing state with an array of blogs
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 }
  ]);

  // Function to handle blog deletion
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); // Filter out the blog with the specified id
    setBlogs(newBlogs); // Update the state with the new array
  };

  // Using useEffect to log the blogs whenever they change
  useEffect(() => {
    console.log('useEffect ran'); // This will run after the initial render and whenever the blogs array changes
    console.log(blogs); // Logs the current state of the blogs array
  }, [blogs]); // The effect will only run when 'blogs' changes

  return (
    <div className="home">
      {/* Displaying all blogs with BlogList component */}
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
