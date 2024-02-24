import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto px-4 py-8">
      {cart.length > 0 ? (
        <div className="flex justify-between max-w-6xl mx-auto gap-8">
          <div className="w-3/4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-1/4">
            <div className="bg-green-100 p-4 rounded-md">
              <div className="text-green-700 text-2xl font-bold uppercase">
                Your Cart
              </div>
              <div className="text-green-700 text-5xl font-bold uppercase">
                Summary
              </div>
              <p className="text-gray-700 font-semibold text-xl mt-5">
                <span>Total Items: {cart.length}</span>
              </p>
              <p className="text-gray-600 font-semibold text-xl">
                Total Amount:{" "}
                <span className="text-black font-bold">
                  ${totalAmount.toFixed(2)}
                </span>
              </p>
              <button className="bg-green-700 text-white font-bold p-2 rounded-md w-full py-3 text-lg mt-5">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="bg-green-700 text-white font-bold px-4 py-2 rounded-md mt-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
