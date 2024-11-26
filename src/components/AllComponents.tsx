import { atom, useAtom } from "jotai";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import ProductList from "./ProductList";

const hideShow = atom(false);

const AllComponents = () => {
  const [sidebar, setSidebar] = useAtom<boolean>(hideShow);

  return (
    <div>
      <SideBar sidebar={sidebar} />
      <Header setSidebar={setSidebar} sidebar={sidebar} />
    <div>
    <ProductList/>
    </div>
      <Footer/>
    </div>
  );
};

export default AllComponents;
