import React from "react";
import { StyledPrimary } from "./Primary.styled";
import Breadcrumbs from "../../../Components/Partials/BreadCrumbs/Breadcrumbs";
import Header from "../../../Components/Partials/Header/Header";
import Footer from "../../../Components/Partials/Footer";
import { Page } from "../../../Components/Layout/Page";
import SearchBar from "../../../Components/Partials/SearchBar";
import ProductIndex from "../../../Pages/Products/ProductIndex";

export const PrimaryTemplate = (props) => {
  return (
    <StyledPrimary>
      <div>
        <Header />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Breadcrumbs />
      </div>
      <div>
        <ProductIndex />
      </div>
      {/* <div>
        <News />
      </div> */}
      <Page>{props.children}</Page>
      <div>
        <Footer />
      </div>
    </StyledPrimary>
  );
};

export default PrimaryTemplate;
