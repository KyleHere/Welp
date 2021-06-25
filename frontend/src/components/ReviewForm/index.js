import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { CreateReview } from '../../store/'

import './ReviewForm.css'

function ReviewForm(){
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [errors, setErrors] = useState([]);

  const updateRating = (e) => setRating(e.target.value);
  const updateReviewText = (e) => setReviewText(e.taraget.value)

  if(sessionUser) return <Redirect to="/"/>;

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      rating,
      reviewText
    }

    let createdReview = await dispatch(createReview(payload))

    if(createdReview) {
      // history.push(`/businesses/${}`) //Need to add api route to a specific business id

    }
    return(
      <div>
        <form onSubmit={handleSubmit}>
        
        </form>
      </div>

    )
  }

}
