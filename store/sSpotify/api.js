import axios from "axios"
import { SSPOTIFY_USERNAME, SSPOTIFY_PASSWORD } from "react-native-dotenv"
const sSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1",
  auth: { username: SSPOTIFY_USERNAME, password: SSPOTIFY_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
