import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import styles from './NavHeader.module.css';

const NavHeader = props => {
    return (
        <>
            <div className={styles.header}>
                <div>
                    <Link to="/">
                        <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                    </Link>
                </div>
                <div className={styles.logocontainer}>
                    {props.children}
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default NavHeader;