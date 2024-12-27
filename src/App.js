import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AboutMe } from "./components/AboutMe";
import "./App.css";

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
