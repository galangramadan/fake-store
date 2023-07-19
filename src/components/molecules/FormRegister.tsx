import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const FormRegister = () => {
  return (
    <form action="">
      <Label name="fullname">Nama Lengkap</Label>
      <Input type="text" placeholder="Masukan Nama Lengkap" name="fullname" />
      <Label name="email">Email</Label>
      <Input type="email" placeholder="email@mail.com" name="email" />
      <Label name="password">Password</Label>
      <Input type="password" placeholder="******" name="password" />
      <Label name="confirmPassword">Konfirmasi Password</Label>
      <Input type="password" placeholder="******" name="confirmPassword" />
      <Button type="submit">Daftar</Button>
    </form>
  );
};

export default FormRegister;
