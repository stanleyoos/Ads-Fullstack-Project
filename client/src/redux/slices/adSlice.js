import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const adsSlice = createSlice({
  name: "ads",
  initialState: [],
  reducers: {
    updateAds: (state, action) => {
      state = action.payload
    },
  },
})

// SELECTORS
export const selectAllAds = (state) => state.ads
export const selectAdById = (state, adId) =>
  state.ads.find((ad) => ad.id === adId)

export const fetchAds = createAsyncThunk("ads/fetchAds", async () => {
  const response = await fetch("http://localhost:8000/api/ads")
  const data = await response.json()
  console.log(data)
})

export default adsSlice.reducer
