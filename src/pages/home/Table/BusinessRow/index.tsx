import { FC } from 'react';
import { Link } from 'react-router-dom';

// types
import IBusiness from '../../../../types/business';

// styles
import styles from './BusinessRow.module.scss';

interface IBusinessRowProps {
  business: IBusiness;
}

const BusinessRow: FC<IBusinessRowProps> = ({ business }) => {
  return (
    <tr className={styles['table-row']}>
      <td className={styles['table-data']}>
        <Link to={`business/${business.id}`}>{business.name}</Link>
      </td>
      <td className={styles['table-data']}>
        <Link to={`business/${business.id}`}>{business.description}</Link>
      </td>
    </tr>
  );
};

export default BusinessRow;
