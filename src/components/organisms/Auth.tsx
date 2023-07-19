type Props = {
  children: React.ReactNode;
  title: string;
};
const Auth = (props: Props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-6 text-green-600">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Auth;
