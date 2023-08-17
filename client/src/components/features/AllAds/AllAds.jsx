import {useSelector} from 'react-redux'
import { getAllAds } from '../../../redux/subreducers/adRedux'
import { Spinner } from "react-bootstrap"
import Add from '../Add/Add'


const AllAds = () => {
  const ads = useSelector(getAllAds)

  if (ads.length === 0) {
    return (
      <div className="text-center">
        <Spinner
          style={{
            height: "100px",
            width: "100px",
          }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden text-center">Loading...</span>
        </Spinner>
      </div>
    )
  }


  return (
    <>
    {ads.map(add => (<Add {...add} key={add._id}/>))}
    </>
  )
}

export default AllAds