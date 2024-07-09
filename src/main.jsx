import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accueil from "./Pages/Accueil";
import Curriculum from "./Pages/Curriculum";
import Projet from "./Pages/Projet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },

      {
        path: "/curriculum",
        element: <Curriculum />,
      },

      {
        path: "/projet",
        element: <Projet />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
