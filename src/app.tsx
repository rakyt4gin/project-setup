import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import { ROUTES } from './data/routes';
import { MainPage } from './pages/main';
import { SignInPage } from './pages/sign-in';

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <MainPage />,
  },
  {
    path: ROUTES.SIGN_IN,
    element: <SignInPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
