import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import BusinessCard from "../BusinessCard";
import { getBusinesses } from "../../store/business";

import './BusinessList.css'

function BusinessList(){
  const dispatch = useDispatch();
  const businesses = useSelector((state) => {
    return Object.values(state.businesses)
  })
  useEffect(()=> {
    dispatch(getBusinesses())
  },[])

  return(
    <div className='listContainer'>
      {businesses.map((business) => {
        return(
          <BusinessCard business={business}/>
        )
      })}
    </div>
  )
}

export default BusinessList;
