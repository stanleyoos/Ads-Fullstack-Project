import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteAdRequest } from "../../../redux/subreducers/adRedux"
import { useEffect } from "react"

const AdRemove = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [dispatch, navigate])

  dispatch(deleteAdRequest(id))
}

export default AdRemove
