import Cookies from "js-cookie";

//verifica se o usuário ja possui um cadastro
export const isLogged = () => {
  let token = Cookies.get("token");
  return token ? true : false;
};
