import React from "react";
import { Body } from "./styles/global";
import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes";
import { MainProvider } from "./contexts/MainContext";

function App() {
  return (
    <Body>
      <GlobalStyle />
      <MainProvider>
        <RoutesMain />
      </MainProvider>
    </Body>
  );
}

export default App;
