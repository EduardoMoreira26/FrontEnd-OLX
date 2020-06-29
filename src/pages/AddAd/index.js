import React, { useState, useRef } from "react";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHandler";

import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";

const Page = () => {
  const api = useApi();

  //DECLARAÇÔES USESTATE
  const fileField = useRef();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [desc, setDesc] = useState("");

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  //FUNÇÔES
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    // const json = await api.login(email, password);

    // if (json.error) {
    //   setError(json.error);
    // } else {
    //   doLogin(json.token, rememberPassword);
    //   window.location.href = "/";
    // }

    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>O que você está anunciando?</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--input">
              <input
                placeholder="Título*"
                type="text"
                disabled={disabled}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--input ">
              <textarea
                placeholder="Descrição*"
                disabled={disabled}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </label>

          <label className="area">
            <div className="area--title">Categorias*</div>
            <div className="area--input">
              <select name="" id=""></select>
            </div>
          </label>

          <label className="area">
            <div className="area--title">Preço</div>
            <div className="area--input ">...</div>
          </label>

          <label className="area">
            <div className="area--title">Preço Negociável</div>
            <div className="area--input ">
              <input
                type="checkbox"
                disabled={disabled}
                checked={priceNegotiable}
                onChange={(e) => setPriceNegotiable(!priceNegotiable)}
              />
            </div>
          </label>

          <label className="area ">
            <div className="area-img">
              <div className="area--title">
                Fotos <br />
                Adicione até 20 fotos
              </div>
              <div className="area--input ">
                <input
                  className="input-img"
                  type="file"
                  disabled={disabled}
                  ref={fileField}
                  multiple
                />
              </div>
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Enviar anúncio</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
