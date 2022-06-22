import {useLocation, useNavigate} from 'react-router-dom';

// styles
import styles from './Back.module.scss';

const Back = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className={styles['back']} onClick={handleClick}>
      <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22,12a1,1,0,0,1-1,1H5.414l5.293,5.293a1,1,0,1,1-1.414,1.414l-7-7a1,1,0,0,1,0-1.414l7-7a1,1,0,1,1,1.414,1.414L5.414,11H21A1,1,0,0,1,22,12Z"/>
      </svg>
    </div>
  );
};

export default Back;
