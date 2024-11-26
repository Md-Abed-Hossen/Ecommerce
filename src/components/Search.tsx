import { atom, useAtom } from "jotai";

export const search = atom("");
const Search = () => {
  const [searchData, setSearchData] = useAtom(search)
  return (
    <form>
      <input type="text" 
      className="rounded-lg w-128" 
      value={searchData}
      onChange={(e)=>{setSearchData(e.target.value)}}/>
      <button type="submit" className="text-white bg-black w-36 ">
        Search
      </button>
    </form>
  );
};

export default Search;
