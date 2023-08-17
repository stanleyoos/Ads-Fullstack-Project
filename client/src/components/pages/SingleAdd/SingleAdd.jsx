import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import {getSingleAd} from '../../../redux/subreducers/adRedux'


const SingleAd = () => {
  
  const { id } = useParams()

  console.log(id)

  const ad = useSelector(state => getSingleAd(state, id))

  console.log(ad)

  const navigate = useNavigate()
  if (ad === undefined) navigate("/")
  return (
    <h1>{ad.title}</h1>
    //<h2>Single Add</h2>
  )
}

export default SingleAd