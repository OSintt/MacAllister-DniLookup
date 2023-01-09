import "../styles/css/search.css";
import "../styles/css/error.css";
import "../styles/css/index.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { config } from "../../config";
import { HiIdentification } from "react-icons/hi";
import Button from "@mui/material/Button";
import Result from "./Result";
import { toast } from "react-hot-toast";
import Logout from "./Logout";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import down from '../assets/down.png';
import { Link } from "react-router-dom";



export const Search = () => {
  const { user, logout } = useContext(UserContext);
  const [gender, selectGender] = useState("M");
  const [dniNumber, setDni] = useState(null);
  const [info, setInfo] = useState(null);

  const handleDni = (e) => {
    setDni(e.target.value);
  };
  const handleGender = (e) => {
    selectGender(e.target.value);
  };

  const submitForm = async () => {
    let toastLoaded;
    try {
      toastLoaded = toast.loading("Buscando ciudadano...");
      const res = await axios.get(
        config.DOMAIN + `/v1/dni/search/${dniNumber}/${gender}`,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      toast.dismiss(toastLoaded);
      setInfo(res.data.dni);
    } catch (e) {
      toast.dismiss(toastLoaded);
      toast.error(e.response.data.message);
    }
  };
  let navigate = useNavigate();
  if (user.auth) {

 return (
  
    <div className="container">
      <div className="search-titles flex">
        <h3>Introduzca el número de carnet y sexo a solicitar</h3>
        <Logout logout={logout} user={user} />
      </div>
      <div className="search-container flex">
        <div>
          <div className="search-input-wrapper flex">
            <div className="search-input-container flex">
              <span className="search-input-icon">
                <HiIdentification />
              </span>
              <input
                type="text"
                placeholder="Número de carnet..."
                onChange={handleDni}
              />
            </div>
          </div>
        </div>
        <div className="gender-select-container">
          <select name="gender" id="gender" onChange={handleGender}>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <Button
          sx={{
            color: "#fff",
            fontFamily: '"Montserrat", sans-serif',
            textTransform: "none",
            border: "1px solid #333",
          }}
          endIcon={<AiOutlineSearch />}
          onClick={submitForm}
        >
          Buscar
        </Button>
      </div>
      {info ? <Result info={info} /> : ""}
    </div>

  );
}else {
   return (

    <div className="error">
       <img src={down} className="down" alt="down" />
    <h3>No has iniciado session.</h3>
    </div>
   )
}
};