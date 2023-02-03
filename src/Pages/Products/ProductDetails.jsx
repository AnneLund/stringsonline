import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Card } from "./Card.Styled";
import { BuyButton } from "../../Styles/Button_Styled";
import { useShoppingCardStore } from "../ShoppingCart/useShoppingCard";
import { ProductPage, Section } from "./ProductPage";
import { Link_Styled } from "../../Styles/Link_Styled";

const ProductDetails = (props) => {
  const { increaseCartQuantity } = useShoppingCardStore();
  const [group, setGroup] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://api.mediehuset.net/stringsonline/products/group/${props.id}`);
        const data = await response.json();
        setGroup(data.group);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <ProductPage>
      {products && group ? (
        <>
          <header>
            <h1>{group.title}</h1>
          </header>
          {products.map((product, i) => (
            <Card key={i}>
              <picture>
                <img src={product.image_fullpath} alt={product.name} />
              </picture>
              <figcaption>
                <div>
                  <h3>{product.name}</h3>
                  <p>
                    {product.description_short}
                    <Link_Styled to="/product">Læs mere</Link_Styled>
                  </p>
                </div>
              </figcaption>
              <div className="info">
                <p>Pris: {product.price} DKK</p>
                <BuyButton onClick={() => increaseCartQuantity(product.id, product.price, 1, product.name, product.image_fullpath)}>
                  Læg i kurv
                </BuyButton>
                <p>{product.stock} på lager</p>
              </div>
            </Card>
          ))}
        </>
      ) : null}
    </ProductPage>
  );
};

export default ProductDetails;
