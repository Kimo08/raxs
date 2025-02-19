import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "../src/components/Dashboard";
import ErrorPage from "../src/pages/ErrorPage";
import Feed from "../src/pages/Feed";
import Message from "../src/pages/Message";
import "./App.css";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dash",
      element: <Dashboard />,
      children: [
        {
          path: "feed",
          element: <Feed />,
        },
        {
          path: "message",
          element: <Message />,
        },
      ],
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
