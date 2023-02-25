import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/data/routes';

const SignInPage = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(ROUTES.MAIN)}>Go to Main Page</button>;
};

export default SignInPage;
