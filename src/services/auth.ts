import axios from "axios";
import jwtDecode from "jwt-decode";

type Data = {
  username: string;
  password: string;
};

type CallbackLogin = (status: boolean, res: string | unknown) => void;

export const login = async (data: Data, callback: CallbackLogin) => {
  try {
    const res = await axios.post("https://fakestoreapi.com/auth/login", data);
    callback(true, res.data.token);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      callback(false, err.response?.data);
    } else {
      console.log(err);
    }
  }
};

type Decoded = {
  sub: number;
  user: string;
};
export const getUser = (token: string) => {
  const decoded: Decoded = jwtDecode(token);
  return decoded;
};

interface CallbackUserDetails {
  (res: UserDetails): void;
}

export const getUserDetails = async (
  sub: number,
  callback: CallbackUserDetails
) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/users/${sub}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};
