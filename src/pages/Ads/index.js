import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";

import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/partials/AdItem";

const Page = () => {
  const api = useApi();

  //DECLARAÇÔES USESTATE
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
            <input type="text" name="q" placeholder="Estou procurando por..." />

            <div className="filterName">Estado:</div>
            <select name="state">
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
                <li key={k} className="categoryItem">
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
