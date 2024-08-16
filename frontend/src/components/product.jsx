// Items.js
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "../style/product.css";
import "../navbar/navbar.css";
const Product = ({ item1 }) => {
  const { cart } = useSelector((state) => state);
  console.log("cart", cart);
  const dispatch = useDispatch();

  const { id, title, imgSrc, price } = item1;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        imgSrc,
        price,
      })
    );
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="product-details">
        <div className="product-title">{title}</div>
        <div className="product-price">${price}</div>
        {cart?.[id] ? (
          <div style={{ marginTop: "10px" }}>
            <button
              className="btn"
              style={{
                width: "150px",
                height: "45px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() =>
                alert(" Item in cart Click on cart to add & remove ")
              }
            >
              Already added: {cart[id].quantity}
            </button>
          </div>
        ) : (
          <button
            style={{
              width: "150px",
              height: "45px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
            className="btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
