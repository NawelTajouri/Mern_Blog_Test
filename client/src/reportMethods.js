import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjBjMWU2OWMyOTA0NWM5NmUxMTRkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjMxNDIwOSwiZXhwIjoxNjQ2NTczNDA5fQ.7ID-QPNJ425uR9tNt815_dQLTVaa9C0GUJJT0rFrzDo"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
