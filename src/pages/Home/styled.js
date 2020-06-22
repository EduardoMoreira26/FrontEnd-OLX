import styled from "styled-components";

export const SearchArea = styled.div`
  background-color: #6e0ad6;
  border-bottom: 1 px solid #ccc;
  padding: 20px 0;

  .searchBox {
    background-color: #fff;
    padding: 10px 15px;
    border-radius: 5px;

    display: flex;

    form {
      flex: 1;
      display: flex;

      input,
      select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: #000;
        margin-right: 20px;
        font-size: 18px;
      }

      input {
        flex: 1;
        padding: 0;
      }

      select {
        width: 100px;
      }

      button {
        background-color: #fff;
        font-size: 20px;
        border: 0;
        border-radius: 2px;
        color: #000;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
      }
    }
  }

  .categoryList {
    display: flex;

    flex-wrap: wrap;
    margin-top: 40px;

    .categoryItem {
      display: flex;
      justify-content: center;
      width: 25%;
      align-items: center;
      color: #fff;
      text-decoration: none;
      height: 50px;
      margin-bottom: 30px;

      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }
`;

export const PageArea = styled.div``;
