import { useState } from "react";
import { login } from "../../services/auth.services";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };
    const data = {
      username: target.username.value,
      password: target.password.value,
    };

    login(data, (status: boolean, res) => {
      if (status) {
        localStorage.setItem("token", res as string);
        window.location.href = "/";
      } else {
        setLoginFailed(res as string);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <Label name="username">Username</Label>
      <Input type="text" placeholder="Masukan Username" name="username" />
      <Label name="password">Password</Label>
      <Input type="password" placeholder="******" name="password" />
      <Button type="submit">Masuk</Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{`${loginFailed}`}</p>
      )}
    </form>
  );
};

export default FormLogin;
