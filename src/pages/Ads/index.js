import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";

import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/partials/AdItem";

const Page = () => {
  const api = useApi();

  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryString();

  //DECLARAÇÔES USESTATE
  const [q, setQ] = useState(query.get("q") != null ? query.get("q") : "");
  const [cat, setCat] = useState(
    query.get("cat") != null ? query.get("cat") : ""
  );
  const [state, setState] = useState(
    query.get("state") != null ? query.get("state") : ""
  );

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  //REQUISIÇÂO ESTADOS
  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };
    getStates();
  }, [api]);

  //REQUISICAO CATEGORIAS
  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, [api]);

  //REQUISICAO ANUNCIOS RECENTES
  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: "desc",
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, [api]);

  //FUNÇÔES

  return (
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <form method="GET">
            <input
              type="text"
              name="q"
              placeholder="Estou procurando por..."
              value={q}
            />

            <div className="filterName">Estado:</div>
            <select
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option></option>
              {stateList.map((i, k) => (
                <option key={k} value={i.name}>
                  {i.name}
                </option>
              ))}
            </select>

            <div className="filterName">Categorias:</div>
            <ul>
              {categories.map((i, k) => (
                <li
                  key={k}
                  className={
                    cat === i.slug ? "categoryItem active" : "categoryItem"
                  }
                >
                  <img src={i.img} alt="" />
                  <span>{i.name}</span>
                </li>
              ))}
            </ul>
          </form>
        </div>

        <div className="rightSide">Conteudo</div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
