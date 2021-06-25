import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBusinesses, getBusinessDetails } from '../../store/business';

function BusinessDetails(){
  const {businessId} = useParams();
  const [showEditBusiness, setShowEditBusiness] = useState(false);
  const dispatch = useDispatch();
  const business = useSelector((state) => {
    return state.businesses[businessId]
  })

  useEffect(() => {
    // setShowEditBusiness
    dispatch(getBusinessDetails(businessId))
  },[businessId])

  return(
    <div className="business-details">
      <div>
        <h1>{business?.title}</h1>
        <p>{business?.description}</p>
        <p>{business?.address}</p>
        <p>{business?.city}</p>
        <p>{business?.state}</p>
        <p>{business?.zipCode}</p>
      </div>
    </div>
  )
}

export default BusinessDetails;
