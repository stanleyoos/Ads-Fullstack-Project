import { redirect, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getSingleAd } from "../../../redux/subreducers/adRedux"
import Image from "react-bootstrap/Image"

const SingleAd = () => {
  const { id } = useParams()

  const ad = useSelector((state) => getSingleAd(state, id))

  if (ad === undefined) redirect("/")
  return (
    <>
      <Image src={`/uploads/${ad.image}`} fluid />
      <h1 className="text-center">{ad.title}</h1>
    </>
  )
}

export default SingleAd
