import "../styles/css/search.css";
import "../styles/css/error.css";
import "../styles/css/index.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { config } from "../../config";
import { HiIdentification } from "react-icons/hi";
import Button from "@mui/material/Button";
import { toast } from "react-hot-toast";
import Logout from "../search/Logout";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import down from '../assets/down.png';
import { Link } from "react-router-dom";



export const Admin = () => {
    const { user, logout } = useContext(UserContext);
    const [gender, selectGender] = useState("M");
    const [dniNumber, setDni] = useState(null);
    const [info, setInfo] = useState(null);

  if (user.auth === 'itscafu' || user.auth === 'OSint' ) {
 console.log('es cafu xd')
 return (
  
    <h1>panel admin</h1>

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