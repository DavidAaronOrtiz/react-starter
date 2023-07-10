import { useState, useEffect } from "react";

import axios from "axios";

import NavHeader from "../components/Layout/NavHeader";
import styles from './Notifications.module.css';

const NotificationsPage = (props) => {
    const url = 'http://localhost:3030/bff/notifs/notifications';
    const [notifs, setNotifs] = useState(null);

    useEffect(() => {
        axios.get(url).then(response => {
            setNotifs(response.data);
        })
    }, []);

    if (!notifs) return null;

    return (
        <>
            <NavHeader>Notifications</NavHeader>
            {notifs.map((notif) => (
                <div className={styles.item} key={notif.id}>
                    <div className={styles.container}>
                        <div className={styles.column}>{notif.header}</div>
                        <div className={styles.column}>{notif.date}</div>
                    </div>
                    <p>{notif.description}</p>
                    <button>{notif.notifType === "coupon" ? 'View Coupon' : 'Acknowledge Contract'}</button>
                </div>
            ))}
        </>
    )
}

export default NotificationsPage;