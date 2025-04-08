import { useState, useEffect } from "react"; // Ensure useState and useEffect are imported correctly
import BlogList from "./BlogList"; // Import BlogList component

const Home = () => {
  const [blogs, setBlogs] = useState([ // Initializing state with an array of blogs
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  const [name, setName] = useState('mario'); // State for the name

  // Function to handle blog deletion
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); // Filter out the blog with the specified id
    setBlogs(newBlogs); // Update the state with the new array
  };

  // Using useEffect to fetch blogs data when component mounts
  useEffect(() => {
    console.log('useEffect ran'); // This will run once when the component mounts
    fetch('http://localhost:8000/blogs') // Fetching blogs data from API
      .then(res => res.json()) // Converting response to JSON
      .then(data => {
        setBlogs(data); // Updating blogs state with fetched data
      });
  }, []); // The effect will run only once when the component mounts

  // Using useEffect to log when 'name' changes
  useEffect(() => {
    console.log('useEffect ran because name changed'); // This will run when 'name' changes
    console.log('Current name:', name); // Logs the current name state
  }, [name]); // The effect will only run when 'name' changes

  return (
    <div className="home">
      {/* Displaying all blogs with BlogList component */}
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      
      {/* Button to change the name */}
      <button onClick={() => setName('luigi')}>Change Name</button>
    </div>
  );
};

export default Home;
