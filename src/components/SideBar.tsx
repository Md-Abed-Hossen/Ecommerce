const SideBar = ({ sidebar }) => {
  const arr = ["Mens", "Womens", "jewelery", "electronics"];

  return (
    <aside
      className={`fixed top-28 left-0  h-[100vh] bg-black  ${
        sidebar ? "w-[300px] opacity100" : "w-0 opacity-0"
      } transition-all duration-300`}
    >
      <ul >
        {arr.map((data, index)=>
        <li key={index} className="text-white cursor-pointer">{data}</li>
        )}</ul>
    </aside>
  );
};

export default SideBar;
