import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  height: 520px;
  width: 800px;
  border: 1px solid var(--color-gray);

  .form {
    width: 50%;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .form h1 {
    color: var(--color-gray);
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
    color: var(--color-gray);
  }

  .form form div label span {
    color: var(--color-red);
  }

  .form form div input {
    padding: 15px;
    margin: 10px 0px;
    outline-color: var(--color-primary);
    font-size: 18px;
    ::placeholder {
      opacity: 50%;
    }
  }

  input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  

  .form form .select {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }

  .form form .select select {
    padding: 15px;
    outline-color: var(--color-primary);
    font-size: 16px;
  }

  .form button {
    width: 100%;
    margin-top: 15px;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 10px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
  }

  .result {
    width: 50%;
    background-color: var(--color-white-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: italic;
    color: var(--color-primary);
  }

  .result h2 {
    font-size: 22px;
    margin-bottom: 5px;
    font-weight: 700;
  }

  .result p {
    margin: 20px 0px;
    font-size: 20px;
  }

  .result p span {
    font-weight: 700;
  }

  .loading {
    width: 50%;
    height: 100%;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: italic;
    color: var(--color-primary);
    margin: auto auto;
    font-size: 20px;
  }
`;

export const SmallButton = styled(Link)`
  background-color: (--color-white-2);
  color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 10px;
  height: 45px;
  width: 45px;
  position: absolute;
  top: 120px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--color-primary);
    color: var(--color-white-2);
  }
`;

export const HistoryButton = styled(Link)`
  background-color: (--color-white-2);
  color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 10px;
  height: 40px;
  position: absolute;
  top: 120px;
  right: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 5px;
  font-weight: 500;

  :hover {
    background-color: var(--color-primary);
    color: var(--color-white-2);
  }
`