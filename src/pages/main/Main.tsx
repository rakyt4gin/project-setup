import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/data/routes';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(ROUTES.SIGN_IN)}>Go to Sign In Page</button>
  );
};

export default MainPage;
