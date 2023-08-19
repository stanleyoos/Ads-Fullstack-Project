const dateToString = (date) => {
  const convertedDate = new Date(date)
  let day = convertedDate.getDate()
  let year = convertedDate.getFullYear()
  let month = convertedDate.getMonth() + 1

  if (day < 10) day = "0" + day.toString()
  if (month < 10) month = "0" + month.toString()
  //
  return `${day}-${month}-${year}`
}

export default dateToString
