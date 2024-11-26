import Search from "./Search";

const Header = ({ setSidebar, sidebar }) => {
  return (
    <div>
      <header className="fixed top-0 bg-blue-900 p-10 flex justify-between w-full  ">
        <button
          className="text-white"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {sidebar ? "Hide" : "Show"}
        </button>
        <Search />
      </header>
    </div>
  );
};

export default Header;
