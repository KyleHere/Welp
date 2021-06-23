import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import ShopCard from "../ShopCard";

import './ShopList.css'

function ShopList(){
  return(
    <div>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
    </div>
  )
}

export default ShopList;
