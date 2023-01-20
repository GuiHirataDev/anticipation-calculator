import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  height: 520px;
  width: 800px;

  border: 1px solid var(--color-gray);

  .form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    background-color: var(--color-white);
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
    padding: 10px;

    border: none;
    background-color: var(--color-primary);

    color: var(--color-white);
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
  }

  .result {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--color-white-2);
    
    color: var(--color-primary);
    font-style: italic;
  }

  .result h2 {
    margin-bottom: 5px;

    font-size: 22px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto auto;

    background-color: var(--color-white-2);

    font-style: italic;
    font-size: 20px;
    color: var(--color-primary);
  }
`;

export const SmallButton = styled(Link)`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: (--color-white-2);
  border: 3px solid var(--color-primary);
  border-radius: 10px;

  color: var(--color-primary);
  text-decoration: none;

  :hover {
    background-color: var(--color-primary);
    color: var(--color-white-2);
  }
`;

export const HistoryButton = styled(Link)`
  height: 40px;
  position: absolute;
  top: 120px;
  right: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  background-color: (--color-white-2);
  border: 3px solid var(--color-primary);
  border-radius: 10px;
  
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;

  :hover {
    background-color: var(--color-primary);
    color: var(--color-white-2);
  }
`