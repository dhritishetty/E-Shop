import React, { useState, useEffect } from "react";
import ApiClient from "../../client/ApiClient";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    ApiClient.get("/categories")      
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">All Categories</h2>
      <div class="row">
        {categories.map((category, index) => (
          <Category data={category} key={index} />
        ))}
      </div>
    </div>
  );
};
export default CategoryList;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import Category from "./Category";
// import { Row, Col } from "react-bootstrap";

// const CategoryList = () => {
//   const [categories, setCategories] = useState([]);
//   const token = localStorage.getItem("token"); // Retrieve JWT from localStorage

//   useEffect(() => {
//     if (!token) {
//       console.log("No token found, redirecting to login...");
//       return;
//     }

//     axios
//       .get("http://localhost:8080/api/categories", {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT in request
//         },
//       })
//       .then((response) => setCategories(response.data))
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, [token]); // Run effect when token changes

//   return (
//     <div>
//       <h3 className="text-center mb-4">Category Lists</h3>
//       <Row lg={5} className="g-4">
//         {categories.map((category) => (
//           <Col key={category.id}>
//             <Category data={category} />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default CategoryList;