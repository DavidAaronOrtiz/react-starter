import { Fragment, useEffect, useState } from "react";

import axios from "axios";

import styles from './AssetsSummary.module.css';

const AssetsSummary = (props) => {
    const url = 'http://localhost:3030/bff/assets/summary';
    const [assets, setAssets] = useState(null);

    useEffect(() => {
        axios.get(url).then(response => {
            setAssets(response.data);
        })
    }, []);

    if (!assets) return null;

    return (
        <Fragment>
            <div className={styles.header}>Your total assets - <strong>{assets.totalAssets}</strong></div>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.menuitem}>
                        <p><strong>{assets.investmentLinkedAmount}</strong></p>
                        <p>Investment-Linked</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.menuitem}>
                        <p><strong>{assets.savingsAmount}</strong></p>
                        <p>Savings</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AssetsSummary;