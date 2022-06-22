import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

// types
import IBusiness from '../../../../types/business';
import { RootState } from '../../../../store/configureStore';

// styles
import styles from './NearbyPlacesTable.module.scss';

interface INearbyPlacesTableProps {
  business: IBusiness;
}

const NearbyPlacesTable: FC<INearbyPlacesTableProps> = ({ business }) => {
  const { list, error } = useSelector((state: RootState) => state.business);

  const nearby = useMemo<IBusiness[]>(() => {
    return list.filter((item) => (item.address.city === business.address.city) && item.id !== business.id);
  }, [list, business]);

  if (error) {
    return <Navigate to="/404" />;
  }

  return (
    <div className={styles['table-wrapper']}>
      <table className={styles['table']}>
        <tbody>
          {nearby.map((business) => {
            return (
              <tr key={business.id}>
                <td>
                  <Link to={`/business/${business.id}`}>
                    {business.name}
                  </Link>
                </td>
                <td>
                  <Link to={`/business/${business.id}`}>
                    {business.address.street}, {business.address.number}, {business.address.country} {business.address.zip}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NearbyPlacesTable;
