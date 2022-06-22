import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// components
import BusinessRow from './BusinessRow';
import Loader from '../../../components/Loader';

// actions
import { getBusinesses } from '../../../store/business/business.actions';

// types
import { AppDispatch, RootState } from '../../../store/configureStore';

// styles
import styles from './Table.module.scss';

const Table = () => {
  const dispatch: AppDispatch = useDispatch();

  const { list, loading, error } = useSelector((state: RootState) => state.business);

  useEffect(() => {
    dispatch(getBusinesses());
  }, []);

  if (error) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return (
      <div className={styles['table-loader']}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles['table-wrapper']}>
      <table className={styles['table']}>
        <thead>
        <tr>
          <th className={styles['table-heading']}>Name</th>
          <th className={styles['table-heading']}>Description</th>
        </tr>
        </thead>
        <tbody>
        {list.map((business) => {
          return (
            <BusinessRow key={business.id} business={business} />
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
