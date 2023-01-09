import "../styles/css/login.css";
import icon from "../assets/icon2.png";
import { AiOutlineUser } from "react-icons/ai";
import Button from "@mui/material/Button";
import { useState } from "react";
import { config } from "../../config";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export const Login = () => {
  const captcha = useRef();

  const [token, setToken] = useState(null);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const { login, user } = useContext(UserContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (user.auth) {
    return navigate("/busqueda")
  }
  }, []);
  const writeUsername = (e) => {
    setUsername(e.target.value);
  };
  const writePassword = (e) => {
    setPassword(e.target.value);
  };
  const submitLogin = async () => {
    try {
      const res = await axios.post(config.DOMAIN + "/v1/auth/signin", {
        username,
        password,
        token,
      });
      localStorage.setItem("token", res.data.token);
      login(res.data.user);
      navigate("/busqueda");
      return toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container container">
        <div>
          <div className="login-logo">
            <img src={icon} alt="federales.info logo" />
          </div>
          <form>
            <div className="form-group-login">
              <div className="form-login">
                <input
                  placeholder="Username..."
                  type="text"
                  spellCheck="false"
                  autoFocus
                  onChange={writeUsername}
                />
              </div>
              <div className="form-login">
                <input
                  type="password"
                  spellCheck="false"
                  placeholder="Password..."
                  onChange={writePassword}
                />
              </div>
            </div>
            <div className="submit-login-button" onClick={submitLogin}>
              <Button
                variant="contained"
                sx={{
                  color: "#000",
                  fontFamily: '"Montserrat", sans-serif',
                  textTransform: "none",
                  background: "#fff",
                  borderRadius: '5px',
                  "&:hover": {
                    color: "#000",
                    background: "#fff",
                  },
                }}
                endIcon={<AiOutlineUser />}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="hcaptcha-container">
          <HCaptcha
            theme="dark"
            sitekey={config.HCAPTCHA_KEY}
            onVerify={(token) => setToken(token)}
            onExpire={(e) => setToken("")}
            ref={captcha}
          />
        </div>
      </div>
    </div>
  );
};
