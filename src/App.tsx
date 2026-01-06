import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return(
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop"/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  )
}
