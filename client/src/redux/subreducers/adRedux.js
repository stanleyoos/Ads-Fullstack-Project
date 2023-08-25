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

// search ads by phrase
export const searchAds = (phrase) => {
  return (dispatch) => {
    fetch(`${API_URL}/api/ads/phrase/${phrase}`)
      .then((res) => res.json())
      .then((ads) => dispatch(updateAds(ads)))
  }
}

export const addAdRequest = (ad) => {
  return (dispatch) => {
    const fd = new FormData()

    fd.append("title", ad.title)
    fd.append("content", ad.content)
    fd.append("date", ad.date)
    fd.append("price", ad.price)
    fd.append("localization", ad.localization)
    fd.append("image", ad.image)

    const options = {
      method: "POST",
      body: fd,
      credentials: "include",
    }

    fetch(`${API_URL}/api/ads`, options).then(() => dispatch(fetchAds()))
  }
}

export const deleteAdRequest = (id) => {
  return (dispatch) => {
    const options = {
      method: "DELETE",
      credentials: "include",
    }

    fetch(`${API_URL}/api/ads/${id}`, options).then(() => dispatch(fetchAds()))
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
