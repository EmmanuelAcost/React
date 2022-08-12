import React, { useState, useEffect } from "react";
import { getProducts } from "../../../API/product";
import ListProduct from "../../../components/ListProduct";
import ProductSelect from "../../../components/ProductSelect";
import "./showcase.css";

function Showcase(props) {
  const [listProducts, setListProducts] = useState([]);
  const [selectItems, setSelectItems] = useState([]);
  const [temp, setTemp] = useState([]);

  const getAllProduct = async () => {
    const res = await getProducts();
    setListProducts(res);
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  useEffect(() => {
    getTotal();
  }, [temp]);

  const selectProduct = (item, operation) => {
    let obj = {
      id: item.id,
      price: item.price,
      title: item.title,
      count: 1,
    };
    let listas = selectItems.find((i) => i.id === item.id);
    if (listas) {
      listas.count = operation === "+" ? listas.count + 1 : listas.count - 1;
      let dele = selectItems.filter((i) => i.count !== 0);
      if (dele.length <= 0) {
        setSelectItems(dele);
      } else {
        setTemp([...temp, listas]);
        temp.map((item) => {
          let validate = item?.find((i) => i.id === selectItems.id);
          if (validate) {
            setSelectItems([...selectItems, validate]);
          }
        });
      }
    } else {
      setTemp([...temp, obj]);
      setSelectItems([...selectItems, obj]);
    }
  };

  const getTotal = () => {
    let total = 0;
    selectItems.map((elem) => {
      total = total + elem.price * elem.count;
    });
    return total.toFixed(2);
  };

  return (
    <div className="px-5 py-3 ">
      <div>
        <div></div>
        <div className="row">
          <div className="col"></div>
          <div className="col-8 px-4">
            <div className="row">
              <ListProduct
                list={listProducts}
                actionSelect={selectProduct}
                selections={selectItems}
              />
            </div>
          </div>
          <div className="col">
            <div className="menu2">
              <div className="smartphone-menu-trigger"></div>
              <div className="avatar">
                <div className="d-flex containerTotal px-4 mb-3">
                  <span className="align-self-center material-symbols-outlined">
                    shopping_cart
                  </span>
                  <p
                    className="fw-bold mb-0"
                    style={{ color: "#FF5D54", fontSize: "21px" }}
                  >
                    Carrito de compras
                  </p>
                </div>
                <div className="total">
                  <p className="text-dark mb-0">Total</p>
                  <p className="text-dark fw-bold mb-0">$ {getTotal()}</p>
                </div>
              </div>
              <div className="content2">
                <ProductSelect proSelect={selectItems} deleteItem={setSelectItems} />
              </div>
              <div className="h-100 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
