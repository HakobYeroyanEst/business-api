// components
import Back from '../../Back';

// assets
import logo from '../../../assets/images/logo.png';

// styles
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div className={styles['header-content']}>
          <Back />
          <div className={styles['header-logo']}>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
