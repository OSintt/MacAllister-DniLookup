import icon from '../assets/icon.jpg';
import { Link } from 'react-router-dom';
const NavIcon = () => {
    return (
        <div className="nav-brand flex">
            <Link to="/">
                <img src={icon} alt="federales.info" />
            </Link>
        </div>
    )
}

export default NavIcon;