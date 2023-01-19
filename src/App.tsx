import React from "react";
import { Body } from "./styles/global";
import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes";


function App() {
  return (
    <Body>
      <GlobalStyle />
      <RoutesMain />
    </Body>
  );
}

export default App;
