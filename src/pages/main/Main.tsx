import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/data/routes';
import Button from '@mui/material/Button';
import { ReactComponent as TestIcon } from '../../assets/svg/test.svg';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TestIcon width={35} />
      <Button variant="contained" onClick={() => navigate(ROUTES.SIGN_IN)}>
        Go to Sign In Page
      </Button>
    </>
  );
};

export default MainPage;
