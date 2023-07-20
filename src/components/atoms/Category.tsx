type Props = {
  category: string;
  onClick: () => void;
};
const Category = (props: Props) => {
  const { category, onClick } = props;
  return (
    <div className="bg-green-600 text-white font-semibold w-full h-16 rounded-lg hover:bg-green-500 duration-300">
      <button className="p-2 w-full h-full text-left" onClick={onClick}>
        {category}
      </button>
    </div>
  );
};

export default Category;
