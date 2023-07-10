import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";

import styles from './Header.module.css';
// import logoImage from '../../assets/SL_BLU_RGB.png'
import logoImage from '../../assets/logo.png';

const Header = props => {
    return (
        <>
            <div className={styles.header}>
                <div>
                    <button>
                        <FontAwesomeIcon icon={faCircleUser} size="xl" />
                    </button>
                </div>
                <div className={styles.logocontainer}>
                    <img src={logoImage} />
                </div>
                <div>
                    <Link to="/notifications">
                        <FontAwesomeIcon icon={faBell} size="xl" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;