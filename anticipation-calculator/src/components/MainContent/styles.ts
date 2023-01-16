import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  height: 520px;
  width: 800px;
  border: 1px solid #555555;

  .form {
    width: 50%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .form h1 {
    color: #555555;
    font-size: 28px;
  }

  .form form {
    width: 75%;
    margin: 20px;
  }

  .form form div {
    display: flex;
    flex-direction: column;
  }

  .form form div label {
    color: #555555;
  }

  .form form div label span {
    color: #ff0000;
  }

  .form form div input {
    padding: 15px;
    margin: 10px 0px;
    outline-color: #2789c3;
    font-size: 18px;
  }

  .form button {
    width: 100%;
    margin-top: 15px;
    border: none;
    background-color: #2789c3;
    color: #fff;
    padding: 10px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
  }

  .result {
    width: 50%;
    background-color: #efecec;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: italic;
    color: #2789c3;
  }

  .result p {
    margin: 20px 0px;
    font-size: 20px;
  }
`;
