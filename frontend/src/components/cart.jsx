import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../redux/cartSlice";
import { GrLinkPrevious } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../style/product.css";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  console.log(cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = Object.values(cartData).reduce((total, item) => {
    return total + parseFloat(item.item.price) * item.quantity;
  }, 0);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <GrLinkPrevious
          onClick={handleGoBack}
          style={{ fontWeight: "800", width: "28px", Color: "black" }}
        />
      </div>

      <div className="cart-container">
        <h2>Cart</h2>
        <div className="cart-items">
          {Object.values(cartData).map((item) => (
            <div key={item.item.id} className="cart-item">
              <img className="item-image" src={item.item.imgSrc} alt="" />
              <div className="item-details">
                <div className="item-title">{item.item.title}</div>
                <div className="item-price">${item.item.price}</div>

                <div className="item-quantity">
                  <div className="cart-style">
                    <GrAdd
                      onClick={() => dispatch(incrementQuantity(item.item.id))}
                      className="quantity-icon"
                    />
                    <span
                      style={{
                        backgroundColor: "#007bff",
                        color: "#ffff",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      Product : {item.quantity}
                    </span>
                    <FaMinus
                      onClick={() => dispatch(decrementQuantity(item.item.id))}
                      className="quantity-icon"
                    />
                  </div>
                  <MdDelete
                    onClick={() => dispatch(removeItem(item.item.id))}
                    className="delete-icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">Total price: ${totalPrice.toFixed(2)}</div>
      </div>
    </>
  );
};

export default Cart;
