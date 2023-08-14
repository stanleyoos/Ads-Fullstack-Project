import { selectAllAds } from "../../../redux/slices/adSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchAds } from "../../../redux/slices/adSlice"

const AllAds = () => {
    const dispatch = useDispatch()
    const ads = useSelector(selectAllAds)
    console.log(ads)

    useEffect(() => {
        dispatch(fetchAds())
    }, [dispatch])
  return (
    <div>AllAds</div>
  )
}

export default AllAds