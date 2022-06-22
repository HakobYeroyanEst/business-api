import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

// components
import BusinessInfo from './BusinessInfo';
import Loader from '../../components/Loader';

// actions
import { getBusinesses } from '../../store/business/business.actions';

// types
import { AppDispatch, RootState } from '../../store/configureStore';

// styles
import styles from './Business.module.scss';

const Business = () => {
  const dispatch: AppDispatch = useDispatch();
  const {id} = useParams();

  const { list, loading, error } = useSelector((state: RootState) => state.business);

  const business = list.find((business) => business.id === id);

  useEffect(() => {
    if (!list.length) {
      dispatch(getBusinesses());
    }
  }, [list]);

  console.log(list, loading, error);

  if (!list.length) {
    return null;
  }

  if (error || !business) {
    return <Navigate to="/404" />;
  }

  return (
    <div className={styles['business']}>
      <div className="container">
        <div className={styles['business-content']}>
          <div className={styles['business-image-wrapper']}>
            <img
              className={styles['business-image']}
              src={business.image}
              alt="Business"
            />
          </div>
          {loading
            ? <div className={styles['business-loader']}><Loader /></div>
            : <BusinessInfo business={business} />}
        </div>
      </div>
    </div>
  );
};

export default Business;
