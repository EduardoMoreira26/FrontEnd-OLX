import React, { useState, useEffect } from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import {
  PageContainer,
  PageTitle,
} from "../../components/MainComponents";

const Page = () => {
  const api = useApi();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");

  const [stateList, setStateList] = useState([]);
  const [listToken, setListToken] = useState([]);

  useEffect(()=>{
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };

    getStates();
  }, [api])
  
  //FUNCAO  TRAZER DADOS USUARIO e anuncios
  useEffect(()=> {
    const getToken = async () => {
      const list = await api.getToken();
      setListToken(list);
    };

    getToken()
  }, [api]); 


  return (
    <>
    <PageContainer>

      <PageTitle>Minha conta</PageTitle>
      <PageArea>
        <form  >
          <label className="area">
            <div className="area--title">Nome</div>
              <div className="area--input">
                <input 
                placeholder={listToken.name}
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
              </div>
          </label>

            <label className="area">
              <div className="area--title">E-mail</div>
                <div className="area--input">
                  <input 
                  placeholder={listToken.email}
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
            </label>

            <label className="area">
              <div className="area--title">Estado</div>
                <div className="area--input">
                 <select
                  value={state}
                  onChange={(e)=>setState(e.target.value)}
                 >
                   <option></option>
                   {stateList.map((i, k) => (
                     <option key={k} value={i._id}>
                       {i.name}
                     </option>
                   ))}

                 </select>
                </div>
            </label>

            <label className="area">
              <div className="area--title">Senha</div>
                <div className="area--input">
                  <input 
                  placeholder={listToken.password}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
            </label>

            <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button>Salvar alterações</button>
            </div>
          </label>
        </form>



      </PageArea>
    </PageContainer>

    <PageContainer>
      <PageTitle>Meus anúncios</PageTitle>
      <PageArea>
        <div className="myAds">

        </div>
      </PageArea>
    </PageContainer>
    </>

  );
};

export default Page;
