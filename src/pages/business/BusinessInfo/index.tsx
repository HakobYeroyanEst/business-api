import { FC } from 'react';

// components
import NearbyPlacesTable from './NearbyPlacesTable';

// types
import IBusiness from '../../../types/business';

// styles
import styles from './BusinessInfo.module.scss';

interface IBusinessInfoProps {
  business: IBusiness;
}

const BusinessInfo: FC<IBusinessInfoProps> = ({ business }) => {
  return (
    <div className={styles['business-info']}>
      <div className={styles['business-info__contact']}>
        <div className={styles['business-info__contact_section']}>
          <h2 className={styles['business-info__contact_section_title']}>Address</h2>
          <p className={styles['business-info__contact_section_text']}>
            {business.address.number} {business.address.street}
          </p>
          <p className={styles['business-info__contact_section_text']}>
            {business.address.country}, {business.address.zip}
          </p>
        </div>
        <div className={styles['business-info__contact_section']}>
          <h2 className={styles['business-info__contact_section_title']}>Contact</h2>
          <p className={styles['business-info__contact_section_text']}>{business.email}</p>
          <p className={styles['business-info__contact_section_text']}>{business.phone}</p>
        </div>
      </div>

      <div className={styles['business-info__places']}>
        <h2 className={styles['business-info__places_title']}>Nearby Places</h2>
        <NearbyPlacesTable business={business} />
      </div>
    </div>
  );
};

export default BusinessInfo;
