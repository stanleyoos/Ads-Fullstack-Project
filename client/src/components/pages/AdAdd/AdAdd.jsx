import AdForm from "../../features/AdForm/AdForm"

const AdAdd = () => {
  const handleAdAdd = (e) => {
    e.preventDefault()
    alert("Added")
  }
  return <AdForm action={handleAdAdd} actionType="Add new AD" />
}

export default AdAdd
