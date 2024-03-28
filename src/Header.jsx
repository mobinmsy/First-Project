export default function Header({ categories, filterItems }) {
  return (
    <div className="w-full h-16 bg-slate-600 items-center flex justify-center ">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="font-sans text-xl	text-gray-100 px-12"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
