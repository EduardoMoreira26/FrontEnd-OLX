import Cookies from "js-cookie";

const BASEAPI = "http://alunos.b7web.com.br:501";

const apiFetchPost = async (endpoint, body) => {
  //se token nao vier na requisição pegar o que tiver no cookie
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

const OlxAPI = {
  login: async (email, password) => {
    // fazer consulta ao WebService
    const json = await apiFetchPost("/user/signin", { email, password });
    return json;
  },
};

export default () => OlxAPI;
