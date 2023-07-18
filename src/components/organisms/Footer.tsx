import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <div className="w-screen py-4">
      <div className="container mx-auto pt-8 flex flex-col gap-8">
        <ul className="flex justify-evenly text-lg font-semibold">
          <li>Transparan</li>
          <li>Aman</li>
          <li>Terpercaya</li>
        </ul>
        <div className="flex justify-center items-end gap-4">
          <Logo fontUp={-1} />
          <span className="font-bold text-lg text-green-600">2023</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
