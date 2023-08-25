import AdForm from "../../features/AdForm/AdForm"
import { useDispatch } from "react-redux"
import { addAdRequest } from "../../../redux/subreducers/adRedux"

const AdAdd = () => {
  const dispatch = useDispatch()
  const handleAdAdd = (title, content, price, date, localization, image) => {
    console.log(title, content, date, localization, image)
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
  return <AdForm action={handleAdAdd} actionType="Add new AD" />
}

export default AdAdd
