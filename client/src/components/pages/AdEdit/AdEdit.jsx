import AdForm from "../../features/AdForm/AdForm"
import { useSelector } from "react-redux"
import { getSingleAd } from "../../../redux/subreducers/adRedux"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { editAdRequest } from "../../../redux/subreducers/adRedux"
import { ToastContainer } from "react-toastify"

const AdEdit = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const ad = useSelector((state) => getSingleAd(state, id))

  const handleAdEdit = (title, content, price, date, localization, image) => {
    dispatch(
      editAdRequest(
        {
          title,
          content,
          price: Number(price),
          date,
          localization,
          image,
        },
        id
      )
    )
  }
  return (
    <>
      <AdForm action={handleAdEdit} actionType="Edit AD" ad={ad} />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default AdEdit
