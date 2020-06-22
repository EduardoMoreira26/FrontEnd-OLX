import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchArea, PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import { FiSearch } from "react-icons/fi";

import { PageContainer } from "../../components/MainComponents";

const Page = () => {
  const api = useApi();

  //DECLARAÇÔES USESTATE
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };
    getStates();
  }, [api]);

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, [api]);

  //FUNÇÔES

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input
                type="text"
                name="q"
                placeholder="Estou procurando por..."
              />
              <select name="state">
                {stateList.map((i, k) => (
                  <option key={k} value="{i.name}">
                    {i.name}
                  </option>
                ))}
              </select>
              <button>
                <FiSearch />
              </button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((i, k) => (
              <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                <img src={i.img} alt="" />
                <br />
                <span>{i.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
};

export default Page;
