import React from "react";

function ListProduct({ list, actionSelect, selections }) {
  return (
    <div className="row">
      {list.map((elem) => {
        let filtro = selections.filter((i) => i.id === elem.id);
        let count = filtro.length >= 1 ? filtro[0].count : 0;
        return (
          <div className="col-3">
            <div className="product">
              <div className="card-product">
                <div className="p-2 text-center">
                  <img
                    src={elem.image}
                    className="img-product"
                    width="96px"
                    height="96px"
                    alt=""
                  ></img>
                </div>
                <div className="text-center">
                  <p className="nameProduct px-2">{elem.title}</p>
                </div>
                <div className="text-center">
                  <b>$ {elem.price}</b>
                </div>
              </div>
              <div className="count">
                <button
                  className="moreCount"
                  onClick={() => actionSelect(elem, "-")}
                  disabled={count <= 0 ? true : false}
                >
                  ➖
                </button>
                <p>{count}</p>
                <button
                  className="subtractCount"
                  onClick={() => actionSelect(elem, "+")}
                >
                  ➕
                </button>
                {/* <span className="cartColorImport"> ${currentImport}</span> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListProduct;
