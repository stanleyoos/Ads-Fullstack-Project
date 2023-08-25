import AllAds from "../../features/AllAds/AllAds"
import SearchBox from "../../features/SearchBox/SearchBox"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const HomePage = () => {
  return (
    <>
      <SearchBox />
      <AllAds />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default HomePage
