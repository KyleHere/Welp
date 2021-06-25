import { csrfFetch } from "./csrf";
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch();
const ADD_ONE = 'reviews/ADD_ONE'

const addReview = review => ({
  type: ADD_ONE,
  review
})

export const createReview = (data) => async dispatch => {
  const response = await csrfFetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(data)
  })

  if(response.ok){
    const newReview = await response.json();

    dispatch(addReview(newReview))
    return newReview;
  }
}

const initialState = {

};

const reviewReducer = (state = initialState, action) => {
  let newState;

  switch(action.type){
    case ADD_ONE: {
      return{
        ...state,

      }
    }
    default:
      return state;
  }
}

export default reviewReducer;
