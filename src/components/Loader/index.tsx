// styles
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles['lds-dual-ring']} />
  );
};

export default Loader;
