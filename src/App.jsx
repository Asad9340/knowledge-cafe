import './App.css';
import Header from './components/header/Header';
import Blogs from './components/blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';
function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handelBookmarks = (blog) => {
    const newValue = [...bookmarks, blog];
    setBookmarks(newValue);
  }
  return (
    <div className="max-w-5xl mx-auto">
      <Header></Header>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <Blogs handelBookmarks={handelBookmarks}></Blogs>
        </div>
        <div className="col-span-4">
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
