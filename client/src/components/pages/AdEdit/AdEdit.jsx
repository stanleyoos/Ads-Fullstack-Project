import AdForm from "../../features/AdForm/AdForm"
import { useSelector } from "react-redux"
import { getSingleAd } from "../../../redux/subreducers/adRedux"
import { Navigate, useNavigate, useParams } from "react-router-dom"

const AdEdit = () => {
  const { id } = useParams()

  const ad = useSelector((state) => getSingleAd(state, id))

  const handleAdEdit = (e) => {
    e.preventDefault()
    alert(id)
  }
  return <AdForm action={handleAdEdit} actionType="Edit AD" ad={ad} />
}

export default AdEdit
