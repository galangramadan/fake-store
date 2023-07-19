type Props = {
  type: "text" | "password" | "email";
  placeholder?: string;
  name: string;
};

const Input = (props: Props) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 mb-2 text-slate-700"
      placeholder={placeholder}
      name={name}
      id={name}
    ></input>
  );
};

export default Input;
