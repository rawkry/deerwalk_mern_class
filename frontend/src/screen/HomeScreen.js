import React, {  useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";


import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../action/productAction";

// import { Col, Row } from "react-bootstrap";
// import Product from "../components/Product";
// import products from "../products";

// value - 12 (Small Screen - single product (take full 12))
// value - 6 (Medium Screen - 2 product)

const HomeScreen = () => {
  const productList = useSelector((state)=>state.productList);
  const dispatch = useDispatch();
    
  const{loading,error,products} = productList;


  useEffect(() => {
    
     dispatch(listProducts());
   
   
  }, [dispatch]);
  return (
    <>
      <h3>
        Latest Products
        <hr className="mt-2 mb-3 bg-white" />
      </h3>
      {loading?(
          <h2 className="d-flex align-items-center justify-content-center">loading...</h2>
        ): error ? (<h3>Error....</h3>) :(
      <Row>
       
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
        )}
    </>
  );
};

export default HomeScreen;
