/**
 * Function formatDate
 * @param {string} type timestamp
 * @returns formated date
 */
export const formatDate = (str) => {
  const strDate = new Date()
  strDate.setTime(str)
  const mnth = ('0' + (strDate.getMonth() + 1)).slice(-2)
  const day = ('0' + strDate.getDate()).slice(-2)
  return [mnth, day, strDate.getFullYear()].join('/')
}
