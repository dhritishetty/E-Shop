import { useState } from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  const { id, name, image } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={image} alt="" className="card-top-img" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>

          <Link to="/products" class="btn btn-primary btn-block">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Category;

// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Category = (props) => {
//   const { id, name, image } = props.data; // Make sure to include id here

//   const handleClick = () => {
//     alert(`You clicked on ${name}`);
//   };

//   return (
//     <Card className="text-center shadow-sm">
//       <Card.Img variant="top" src={image} className="img-fluid p-3" />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         {/* Pass categoryId in the URL */}
//         <Link to={`/products/${id}`}>
//           <Button variant="primary">Select</Button>
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Category;
