import Bookmark from '../Bookmark/Bookmark';
function Bookmarks({ bookmarks ,counter}) {
  return (
    <div className="bg-[#1111110D] py-4 rounded-lg">
      <h2 className="text-2xl font-bold text-[#111111] mb-2 px-3">
        Bookmarked Blogs : {counter}
      </h2>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}
export default Bookmarks;
