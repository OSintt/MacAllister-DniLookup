import FormData from 'form-data';
import axios from 'axios';
import { config } from 'dotenv';
config();

async function getToken() {
  const fd = new FormData();
  fd.append("username", process.env.RENAPER_USERNAME);
  fd.append("password", process.env.RENAPER_PASSWORD);
  let resp;
  try {
    resp = await axios.post(
      `http://150.136.1.69:8011/CHUTROFINAL/API_ABIS/Autorizacion/token.php`,
      fd,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (e) {
    throw e;
  }
  return resp.data.data.token;
}

export default getToken;
