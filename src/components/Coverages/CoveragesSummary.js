import { Fragment, useEffect, useState } from "react";

import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faShieldHeart, faStethoscope, faTruckMedical } from '@fortawesome/free-solid-svg-icons';

import styles from './CoveragesSummary.module.css';

const CoveragesSummary = props => {
    const url = 'http://localhost:3030/bff/cov/summary';
    const [coverages, setCoverages] = useState(null);

    useEffect(() => {
        axios.get(url).then(response => {
            setCoverages(response.data);
        })
    }, []);

    if (!coverages) return null;

    return (
        <Fragment>
            <div className={styles.header}>Your total coverage from {coverages.count} policies</div>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.menuitem}>
                        <FontAwesomeIcon icon={faShieldHeart} size="xl" />
                        <p className={styles.title}>Life</p>
                        <p><strong>{coverages.lifeCoverage}</strong></p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.menuitem}>
                        <FontAwesomeIcon icon={faStethoscope} size="xl" />
                        <p className={styles.title}>Critical Illness</p>
                        <p>up to <strong>{coverages.critIllnessCoverage}</strong><sup>*</sup></p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.menuitem}>
                        <FontAwesomeIcon icon={faHospital} size="xl" />
                        <p className={styles.title}>Medical & Hosp</p>
                        <p>up to <strong>{coverages.medicalCoverage}</strong>/year,</p>
                        <p><strong>{coverages.hospitalizationCoverage}</strong>/disability</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.menuitem}>
                        <FontAwesomeIcon icon={faTruckMedical} size="xl" />
                        <p className={styles.title}>Accident</p>
                        <p>up to <strong>{coverages.accidentCoverage}</strong></p>
                    </div>
                </div>
            </div>
            <p><sup>*</sup> additional coverages detailed in provision</p>
        </Fragment>
    )
}

export default CoveragesSummary;