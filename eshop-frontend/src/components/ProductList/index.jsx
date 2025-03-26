// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Product from "./Product";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   const getProducts = () => {
//     axios
//       .get("https://api.escuelajs.co/api/v1/products")
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.log(error));
//   };
//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="text-center">All Products</h2>
//       <div class="row">
//         {
//             products.map((product, index) => <Product key={index} data={product} />)
//         }
//       </div>
//     </div>
//   );
// };
// export default ProductList;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import ApiClient from "../../client/ApiClient";
import Product from "./Product";

const ProductList = () => {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    ApiClient.get(`/products/category/${categoryId}`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return (
    <div className="container">
      <h2 className="text-center">Products in Category {categoryId}</h2>
      <div className="row">
        {products.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;