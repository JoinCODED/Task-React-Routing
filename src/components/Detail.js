import React from "react";
import { Redirect, useParams } from "react-router-dom";
import products from "../products";
function Detail() {
  const Productslug = useParams().Productslug;
  // i'm calling a const called productslug the slugname from the url of each component

  const cookie = products.find((cookie) => cookie.slugs === Productslug);
  // for go through each product is in products array, look at each element in the array, is the slug element = to the Productslugs
  if (!cookie) return <Redirect to="/home" />;

  return (
    <div className="detail">
      {cookie && ( // if there is cookie show its data
        <>
          <h5>{cookie.name}</h5>
          <img src={cookie.image} alt="cookie" />
          <p>{cookie.price} KD</p>
          <p>{cookie.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
