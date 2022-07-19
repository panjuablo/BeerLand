import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


export default function BeerCard({ name, description, image, style, origin}) {
  
  return (
    <div>
      <h1>{name}</h1>
       <img src={image} alt="No img found :(" />
      <h4>{description}</h4>
      <h4>{style}</h4>
      <h4>{origin}</h4> 
    </div>
  );
}
