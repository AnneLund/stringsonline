import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Link_Styled } from "../../Styles/Link_Styled";
import ProductDetails from "../../Pages/Products/ProductDetails";
import { DropUl, List_Styled, Navbar } from "../Products/Sidebar_Styled";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProductById from "./ProductById";
import Login from "../Login/Login";
import CheckOut from "../ShoppingCart/CheckOut";

const ProductIndex = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://api.mediehuset.net/stringsonline/`);
        const data = await response.json();
        setGroups(data.productgroups.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (i) => {
    setDropdownOpen({
      ...dropdownOpen,
      [i]: !dropdownOpen[i],
    });
  };

  useEffect(() => {
    setDropdownOpen({});
  }, []);

  return (
    <>
      <Navbar>
        <List_Styled>
          <nav>
            <ul>
              {groups &&
                groups?.map((item, i) => (
                  <li key={i}>
                    <Link_Styled to={item.id} onClick={() => toggleDropdown(i)}>
                      {item.title}
                    </Link_Styled>
                    {dropdownOpen[i] && (
                      <DropUl>
                        {item.subgroups.map((subgroup, j) => (
                          <Link_Styled onClick={() => toggleDropdown(i)} key={`${i}-${j}`} to={subgroup.id}>
                            {subgroup.title}
                          </Link_Styled>
                        ))}
                      </DropUl>
                    )}
                  </li>
                ))}
            </ul>
          </nav>
        </List_Styled>

        <Routes>
          <Route path="/*" element={""} />
          {groups.map((group, i) =>
            group.subgroups.map((subgroup, j) => (
              <>
                <Route key={`${i}-${j}`} path={subgroup.id} element={<ProductDetails id={subgroup.id} />} />
                <Route path="/product" element={<ProductById id={subgroup.id} data={subgroup} />} />
              </>
            ))
          )}
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product" element={<ProductById />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />

          <Route path="*" element={<p>Ikke fundet</p>} />
        </Routes>
      </Navbar>
      <Outlet />
    </>
  );
};

export default ProductIndex;
