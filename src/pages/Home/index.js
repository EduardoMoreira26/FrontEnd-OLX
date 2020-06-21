import React, { useState } from "react";
import { SearchArea, PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import { FiSearch } from "react-icons/fi";

import { PageContainer } from "../../components/MainComponents";

const Page = () => {
  const api = useApi();

  //DECLARAÇÔES USESTATE

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
              <select name="state"></select>
              <button>
                <FiSearch />
              </button>
            </form>
          </div>
          <div className="categoryList"></div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
};

export default Page;
