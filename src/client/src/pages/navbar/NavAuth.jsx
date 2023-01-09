import { AiOutlineUser, AiOutlineLogin } from "react-icons/ai";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavAuth = ({ user }) => {
  return (
    <>
      {user.auth ? (
        <div className="nav-auth-container flex">
          <div className="nav-username">Hi {user.user.username}!</div>
          <div className="nav-user-icon flex">
            <AiOutlineUser />
          </div>
        </div>
      ) : (
        <div className="nav-auth-container flex">
          <Link to="/">
            <Button
              sx={{
                color: "#fff",
                fontFamily: '"Montserrat", sans-serif',
                textTransform: "none",
              }}
              endIcon={<AiOutlineLogin />}
            >
              Login
            </Button>
          </Link>
        </div>
     
      )}
      
    </>
  );
};

export default NavAuth;
