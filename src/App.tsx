import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from 'sonner';
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return(
    <HelmetProvider>
      <ThemeProvider storageKey="vite-ui-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop"/>
        <Toaster richColors />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}
