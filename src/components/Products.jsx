import React, { useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Toast from "./Toast";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState({ isError: false, text: "" });

  const addToCart = (product) => {
    if (user.username != undefined)
      setMessage({ text: `${product.name} added to cart` });
    else setMessage({ isError: true, text: "Please login to add item to cart" });
  };
  return (
    <>
      <div className="container m-4">
        {message?.text && <Toast isError={message.isError} msg={message.text} />}
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
              {products?.categories?.map((category, index) => (
                <Link
                  key={index}
                  to={`/${category}`}
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  {category}
                </Link>
              ))}
            </div>
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p className="text-gray-500 dark:text-gray-300">
                  {products?.products.length} Items
                </p>
                <div className="flex items-center">
                  <p className="text-gray-500 dark:text-gray-300">Sort</p>
                  <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    {products?.sortType.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products?.products?.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="flex flex-col items-center justify-center w-full max-w-lg mx-auto"
                    >
                      <img
                        className="object-cover w-full rounded-md h-72 xl:h-80"
                        src={product.image}
                        alt={product.name}
                      />
                      <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                        {product.name}
                      </h4>
                      <p className="text-blue-500">${product.price}</p>

                      <button
                        onClick={() => addToCart(product)}
                        className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mx-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span className="mx-1 cursor-pointer">Add to cart</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
