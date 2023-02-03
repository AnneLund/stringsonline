import { useLocation } from "react-router-dom";
import { PrimaryTemplate } from "../Styles/PageTemplates/Primary/PrimaryTemplate";
import CostumFaves from "../Pages/CustumFaves";

const Home = () => {
  function ComponentToConditionallyRender() {
    const location = useLocation();

    if (location.pathname === "/cart" || location.pathname === "/product" || location.pathname === "/login") {
      return null;
    }

    if (location.pathname === "/") {
      return <CostumFaves />;
    }
  }

  return (
    <PrimaryTemplate>
      <ComponentToConditionallyRender />
    </PrimaryTemplate>
  );
};

export default Home;
