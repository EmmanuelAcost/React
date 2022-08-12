import React from "react";
import "./style.css";
function ProductSelect({ proSelect, deleteItem }) {
  const removeChannel = (itemChannel) => {
    deleteItem(proSelect.filter((item, index) => item.id !== itemChannel.id));
  };
  return (
    <div className="">
      {proSelect.map((elem) => {
        return (
          <div className="col-12 px-4 mb-2">
            <div className="row productCart py-3">
              <div className="col-9">
                <div className="text-center">
                  <p className="nameProductCart">{elem.title}</p>
                </div>
                <div className="">
                  <b className="priceProductCart">
                    $ {elem.price} X {elem.count}
                  </b>
                </div>
              </div>
              <div className="col-3 p-0 align-self-center text-center">
                <span
                  onClick={() => {
                    removeChannel(elem);
                  }}
                  className="px-2 align-bottom material-symbols-outlined text-danger"
                >
                  delete
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductSelect;
