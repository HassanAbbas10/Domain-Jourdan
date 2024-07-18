import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Chambres from "./Pages/Chambres";
import "./App.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Evenements from "./Pages/Evenements";
import ServicesPage from "./Pages/ServicesPage";
import GalleryPage from "./Pages/GalleryPage";
import Contact from './Pages/Contact'

const Layout = () => {
  return (
    <div className="app">
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chambres",
        element: <Chambres />,
      },
      {
        path: "/events",
        element: <Evenements />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
