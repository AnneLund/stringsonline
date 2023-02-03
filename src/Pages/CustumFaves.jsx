import { useState, useEffect } from "react";
import { useShoppingCardStore } from "./ShoppingCart/useShoppingCard";
import { ProductCard } from "../Pages/Products/ProductCard";
import { ProductPage, Section } from "../Pages/Products/ProductPage";
import { BuyButton } from "../Styles/Button_Styled";
import News from "./News";

const CostumFaves = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://api.mediehuset.net/stringsonline/groups/${1}/subgroup/${3}`);
        const data = await response.json();
        setData(data.items.subgroup);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const { increaseCartQuantity } = useShoppingCardStore();

  return (
    <>
      <News />
      <ProductPage>
        <h2>Kundernes favoritter</h2>
        <Section>
          {data.products?.slice(0, 4).map((product, i) => (
            <ProductCard>
              <picture>
                <img src={product.image_fullpath} alt={product.name} />
              </picture>
              <figcaption>
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.description_short}</p>
                </div>

                <div className="info">
                  <p>Pris: {product.price}</p>
                  <BuyButton onClick={() => increaseCartQuantity(product.id, product.price, 1, product.name, product.image_fullpath)}>
                    Læg i kurv
                  </BuyButton>
                </div>
              </figcaption>
            </ProductCard>
          ))}
        </Section>
      </ProductPage>
    </>
  );
};

export default CostumFaves;
