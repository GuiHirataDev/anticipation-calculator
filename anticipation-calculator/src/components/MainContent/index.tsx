import { useState } from "react";
import { Main } from "./styles";

export const MainContent = () => {
  const [value, setValue] = useState("");
  const [installments, setInstallments] = useState("");
  const [percentage, setPercentage] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();

    console.log(value, installments, percentage)
  }

  return (
    <Main>
      <section className="form">
        <h1>Simule sua Antecipação</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="input1">
              Informe o valor da venda <span>*</span>
            </label>
            <input 
                type="text" 
                id="input1"
                placeholder="Ex: 1000"
                onChange={event => setValue(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input2">
              Em quantas parcelas <span>*</span>
            </label>
            <input 
                type="text"
                id="input2"
                placeholder="Ex: 10"
                onChange={event => setInstallments(event.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="input3">
              Informe o percentual de MDR <span>*</span>
            </label>
            <input 
                type="text" 
                id="input3"
                placeholder="Ex: 15"
                onChange={event => setPercentage(event.target.value)} 
            />
          </div>
          <button>Simular</button>
        </form>
      </section>
      <section className="result">
        <h2>VOCÊ RECEBERÁ:</h2>
        <p>Amanhã: R$</p>
        <p>Em 15 dias: R$</p>
        <p>Em 30 dias: R$</p>
        <p>Em 90 dias: R$</p>
      </section>
    </Main>
  );
};
