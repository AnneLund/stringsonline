import { ThemeProvider } from "styled-components";
import { Theme } from "./Styles/Themes/Theme";
import { Globals } from "./Styles/Globals.styled";
import Flashmessages from "./Components/FlashMessages/FlashMessages";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/Products/ProductDetails";
import { Cart } from "./Pages/ShoppingCart/Cart.styled";
import ProductIndex from "./Pages/Products/ProductIndex";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Flashmessages />
      <Globals />
      <Routes>
        <Route path="/*" element={<Home />} />

        <Route path="/products/*" element={<ProductIndex />} />

        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
