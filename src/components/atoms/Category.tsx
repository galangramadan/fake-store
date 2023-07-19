type Props = {
  category: string;
  onClick: () => void;
};
const Category = (props: Props) => {
  const { category, onClick } = props;
  return (
    <div className="bg-green-600 text-white font-semibold w-full h-16 rounded-lg">
      <button className="p-2" onClick={onClick}>
        {category}
      </button>
    </div>
  );
};

export default Category;
