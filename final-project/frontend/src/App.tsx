import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { AuthLayout } from "./layout/AuthLayout";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { SearchCategory } from "./pages/SearchCategory/SearchCategory";
import { Services } from "./pages/Services/Services";
import { BusinessPage } from "./pages/BusinessPage/BusinessPage";
import { ROUTES } from "./constants";
import { RootLayout } from "./layout/RootLayout";
import UserContextProvider from "./contexts/UserContext";
import { Bookings } from "./pages/Bookings/Bookings";

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
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
      {
        path: ROUTES.BUSINESS,
        element: <BusinessPage />,
      },
      {
        path: ROUTES.MY_BOOKING,
        element: <Bookings />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  );
}
