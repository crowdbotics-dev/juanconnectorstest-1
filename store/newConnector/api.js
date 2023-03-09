import axios from "axios"
const newConnector = axios.create({
  baseURL: "https://www.google.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function newconnector_get_test_read(payload) {
  return newConnector.get(`/test`)
}
export const apiService = { newconnector_get_test_read }
