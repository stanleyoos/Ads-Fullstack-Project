import { API_URL } from "../../config"

// SELECTORS
// Get all ads
export const getAllAds = (state) => state.ads

// Get single add
export const getSingleAd = (state, id) => state.ads.find((ad) => ad._id === id)

// ACTIONS
const createActionName = (actionName) => `app/ads/${actionName}`
const UPDATE_ADS = createActionName("UPDATE_ADS")

// ACTION CREATOR
export const updateAds = (payload) => ({ type: UPDATE_ADS, payload })

export const fetchAds = () => {
  return (dispatch) => {
    fetch(`${API_URL}/api/ads`)
      .then((res) => res.json())
      .then((ads) => dispatch(updateAds(ads)))
  }
}

const adReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_ADS:
      return [...action.payload]
    default:
      return statePart
  }
}

export default adReducer
