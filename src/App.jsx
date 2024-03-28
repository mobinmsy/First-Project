import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import items from "./data";
import Footer from "./Footer";

const allCategories = ["Home", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = allCategories;

  const filterItems = (category) => {
    if (category === "Home") {
      setMenuItems(items);
      setStatus(true)
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <Header categories={categories} filterItems={filterItems} />
      <main className="w-4/5 m-auto pt-8 mt-12">
        <section>
          <Menu items={menuItems} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
