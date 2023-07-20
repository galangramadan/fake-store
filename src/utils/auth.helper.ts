const authorized = () => {
  return localStorage.getItem("token");
};
export default authorized;

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
