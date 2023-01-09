import { Button } from "@mui/material";
import { AiOutlineLogout } from 'react-icons/ai';
import { toast } from "react-hot-toast";
import "../styles/css/index.css";

const Logout = ({ user, logout }) => {
  const handleLogout = () => {
    localStorage.setItem('token', null);
    logout();
    toast.success('Sesión cerrada con éxito');
  }

  return (
    <div className="logout-container">
      {user.auth ? (
        <Button
          sx={{
            color: "#fff",
            fontFamily: '"Montserrat", sans-serif',
            textTransform: "none",
          }}
          endIcon={<AiOutlineLogout />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : null}
    </div>
  );
};

export default Logout;
