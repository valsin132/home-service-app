import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { ErrorPage } from './pages/ErrorPage.tsx/ErrorPage';
import { Login } from './pages/Login/Login';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { SearchCategory } from './pages/SearchCategory/SearchCategory';
import { Services } from './pages/Services/Services';
import { ROUTES } from "./constants";
import { RootLayout } from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
};
