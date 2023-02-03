import React, { useEffect, useState } from "react";
import { ProductPage } from "./ProductPage";
import { useShoppingCardStore } from "../ShoppingCart/useShoppingCard";
import { ProductCardDetails } from "./ProductCardDetails";
import { BuyButton } from "../../Styles/Button_Styled";

const ProductById = (props) => {
  // console.log(props.data);
  const { increaseCartQuantity } = useShoppingCardStore();

  return (
    <>
      {props && props.data ? (
        <ProductPage>
          {props?.data?.products.map((product, i) => (
            <ProductCardDetails key={i}>
              <picture>
                <img src={product.image_fullpath} alt={product.name} />
              </picture>
              <figcaption>
                <h2>{product.name}</h2>
                <p>{product.description_long}</p>
              </figcaption>
              <div className="info">
                <p>Pris: {product.price} DKK</p>
                <BuyButton onClick={() => increaseCartQuantity(product.id, product.price, 1, product.name, product.image_fullpath)}>
                  Læg i kurv
                </BuyButton>
                <p>{product.stock} på lager</p>
              </div>
            </ProductCardDetails>
          ))}
        </ProductPage>
      ) : (
        <p>hov</p>
      )}

      {/* <section>
        {props?.data ? (
          <Card>
            <picture>
              <img src={props.data.item.image.fullpath} alt={props.data.item.name} />
            </picture>
          </Card>
        ) : null}
      </section> */}
    </>
  );
};

export default ProductById;
