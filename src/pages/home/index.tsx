// components
import Table from './Table';

// styles
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles['home']}>
      <div className="container">
        <div className={styles['home-content']}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
