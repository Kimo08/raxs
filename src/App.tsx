import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "../src/components/Dashboard";
import ErrorPage from "../src/pages/ErrorPage";
import Feed from "../src/pages/Feed";
import Message from "../src/pages/Message";
import "./App.css";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
