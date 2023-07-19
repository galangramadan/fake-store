type Props = {
  children: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

const Button = (props: Props) => {
  const { children, onClick, type } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md bg-green-600 text-white w-full mt-8`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
