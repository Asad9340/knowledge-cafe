import { IoBookmarks } from 'react-icons/io5';
function Blog({ blog, handelBookmarks, handelCounter }) {
  const { title, author, author_img, cover, posted_date, reading_time } = blog;
  const handelOnClick = () => {
    handelBookmarks(blog);
    handelCounter()
  }
  return (
    <div className="space-y-6">
      <div>
        <img className="rounded-xl w-full" src={cover} alt="" />
      </div>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-4">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p className="text-[#11111199] font-bold">{reading_time}</p>
          <IoBookmarks onClick={handelOnClick} />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div>hastag</div>
        <div>
          <button className="py-2 px-4 bg-gray-950 rounded-xl text-white">
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
