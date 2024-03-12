function Bookmark({ bookmark }) {
  const { title } = bookmark;
  return (
    <div>
      <h1 className="bg-[#FFFFFF] py-4 mb-4 mx-4 pl-2 rounded-xl">
        {title}
      </h1>
    </div>
  );
}

export default Bookmark;
