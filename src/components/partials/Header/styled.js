import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1040px;
    margin: auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 80px;

    .logo-1,
    .logo-2,
    .logo-3 {
      font-size: 27px;
      font-weight: bold;
    }
    .logo-1 {
      color: #ff0000;
    }
    .logo-2 {
      color: #00ff00;
    }
    .logo-3 {
      color: #0000ff;
    }
  }

  .user-icon {
    margin-right: 10px;
  }

  nav {
    padding: 10px 0;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 60px;
    }
    li {
      margin: 0 20px;

      a,
      button {
        border: 0;
        background: none;
        color: #000;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
        outline: 0;

        &:hover {
          color: #6e0ad6;
        }

        &.button {
          font-weight: bold;
          background-color: #ff8100;
          border-radius: 50px;
          color: #fff;
          padding: 10px 35px;
        }
        &.button:hover {
          background-color: #e57706;
        }
      }
    }
  }
`;
