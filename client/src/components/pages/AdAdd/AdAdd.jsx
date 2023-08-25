import AdForm from "../../features/AdForm/AdForm"
import { useDispatch } from "react-redux"
import { addAdRequest } from "../../../redux/subreducers/adRedux"
import { ToastContainer } from "react-toastify"

const AdAdd = () => {
  const dispatch = useDispatch()
  const handleAdAdd = (title, content, price, date, localization, image) => {
    dispatch(
      addAdRequest({
        title,
        content,
        price: Number(price),
        date,
        localization,
        image,
      })
    )
  }
  return (
    <>
      <AdForm action={handleAdAdd} actionType="Add new AD" />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default AdAdd
