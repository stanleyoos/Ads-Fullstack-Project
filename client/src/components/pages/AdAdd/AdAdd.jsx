import AdForm from "../../features/AdForm/AdForm"
import { API_URL } from "../../../config"

const AdAdd = () => {
  const handleAdAdd = (e) => {
    e.preventDefault()

    // const fd = new FormData()

    // fd.append("title", title)
    // fd.append("content", content)
    // fd.append("date", date)
    // fd.append("localization", localization)
    // fd.append("image", image)
    // fd.append("userInfo", { login: "JAMES" })

    // // LOGGED USER INFO

    // const options = {
    //   method: "POST",
    //   body: fd,
    // }

    // fetch(`${API_URL}/api/ads`, options)
  }
  return <AdForm action={handleAdAdd} actionType="Add new AD" />
}

export default AdAdd
