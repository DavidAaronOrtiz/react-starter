import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract, faHandHoldingDollar, faListCheck, faMoneyCheckDollar, faPhone, faReceipt } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.css';
import Header from '../components/Layout/Header'
import AssetsSummary from '../components/Assets/AssetsSummary';
import CoveragesSummary from '../components/Coverages/CoveragesSummary';

function HomePage() {
  return (
    <>
      <Header></Header>
      <div className={styles.banner}>
        <div className={styles.bannerimage}></div>
        <p className={styles.attribution}>Image by Rochak Shukla on Freepik</p>
        <p>Welcome to Abstract Mobile App.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.menuitem}>
          <div>
            <FontAwesomeIcon icon={faHandHoldingDollar} size="xl" />
            <p>Manage Funds</p>
          </div>
        </div>
        <div className={styles.menuitem}>
          <div>
            <FontAwesomeIcon icon={faReceipt} size="xl" />
            <p>Claims</p>
          </div>
        </div>
        <div className={styles.menuitem}>
          <div>
            <FontAwesomeIcon icon={faFileContract} size="xl" />
            <p>My Policies</p>
          </div>
        </div>
        <div className={styles.menuitem}>
          <div>
            <FontAwesomeIcon icon={faListCheck} size="xl" />
            <p>Service Requests</p>
          </div>
        </div>
        <div className={styles.menuitem}>
          <div>
            <FontAwesomeIcon icon={faMoneyCheckDollar} size="xl" />
            <p>Quick Pay</p>
          </div>
        </div>
        <div className={styles.menuitem}>
          <div>
            <FontAwesomeIcon icon={faPhone} size="xl" />
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.column}>
          <CoveragesSummary></CoveragesSummary>
        </div>
        <div className={styles.column}>
          <AssetsSummary></AssetsSummary>
        </div>
      </div>
    </>
  );
}

export default HomePage;