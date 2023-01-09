import NavAuth from "./NavAuth";
import NavIcon from "./NavIcon";
import "../styles/css/navbar.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "../styles/css/index.css";

export const NavBar = () => {
  const { user } = useContext(UserContext);
  return (
      <div className="nav-container flex">
        <NavIcon />
        <NavAuth user={user} />
      </div>
  );
};
