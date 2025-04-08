import { useState } from "react";
import BlogList from "./BlogList"; // Assuming BlogList is in a separate file

const Home = () => {
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('luigi');
    setAge(30);
  }

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
      
      {/* BlogList displaying all blogs */}
      <BlogList blogs={blogs} title="All Blogs" />
      
      {/* BlogList displaying only blogs authored by Mario */}
      <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" />
    </div>
  );
}

export default Home;
