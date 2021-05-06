import axios from "axios";

//action constant
export const SET_WORKOUTS = "SET_WORKOUTS";
//action creator
export const setWorkouts = (workouts) => {
  return {
    type: SET_WORKOUTS,
    workouts,
  };
};
//thunk
export const fetchWorkouts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/workouts");
      dispatch(setProducts(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//initial state
const initialState = [];
//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_WORKOUTS:
      return action.workouts;
    default:
      return state;
  }
}