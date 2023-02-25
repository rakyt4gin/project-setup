import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/data/routes';
import styles from './Main.module.css';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={() => navigate(ROUTES.SIGN_IN)}>
      Go to Sign In Page
    </button>
  );
};

export default MainPage;
