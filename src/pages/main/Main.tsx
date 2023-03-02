import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/data/routes';
import Button from '@mui/material/Button';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Button variant="contained" onClick={() => navigate(ROUTES.SIGN_IN)}>
      Go to Sign In Page
    </Button>
  );
};

export default MainPage;
