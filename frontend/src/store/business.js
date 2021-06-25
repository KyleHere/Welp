import { csrfFetch } from "./csrf"

const LOAD_BUSINESSES = 'businesses/LOAD_BUSINESSES';
const ADD_ONE = 'businesses/ADD_ONE'

export const load = (businesses) => ({
  type: LOAD_BUSINESSES,
  businesses
})

export const addOneBusiness = business => ({
  type: ADD_ONE,
  business
})

export const getBusinesses = () => async dispatch => {
  const res = await csrfFetch(`/api/businesses`);

  if(res.ok){
    const businesses = await res.json();
    dispatch(load(businesses))
  }
}

export const getBusinessDetails = (id) => async dispatch => {
  const res = await csrfFetch(`/api/businesses/${id}`);

  if(res.ok){
    const details = await res.json();
    dispatch(addOneBusiness(details))
  }
}

const startingState = {

};

const businessesReducer = (state = startingState, action) => {
  switch(action.type){
    case LOAD_BUSINESSES:{
      const allBusinesses = {};
      action.businesses.forEach(business => {
        allBusinesses[business.id] = business;
      })
      return{
        ...allBusinesses,
        ...state,
      }
    }

    case ADD_ONE: {
      return {
        [action.business.id]: action.business,
        ...state,
      };
    }
    // if(!state[action.business.id]){
    //   const newState = {
    //     ...state,
    //     [action.business.id]: action.business
    //   };

      // const businessList = newState.map(id => newState[id]);
      // businessList.push(action.business)

    default:
      return state;
  }
}

export default businessesReducer;
