import { Link } from 'react-router-dom';

// styles
import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles['error']}>
      <h2 className={styles['error-title']}>404 Not Found</h2>
      <Link to="/" className={styles['error-link']}>Go to homepage</Link>
    </div>
  );
};

export default Error;
