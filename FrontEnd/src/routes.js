import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
// import ListMeds from './Components/ListMeds';
import App from "./App";
import Medsdetails from "./Components/Medsdetails";
import Managemeds from "./Components/Manage-Meds/Managemeds";
import Addmeds from "./Components/Manage-Meds/Addmeds";
import Updatemeds from "./Components/Manage-Meds/Updatemeds";
import Managepatients from "./Components/Manage-Meds/Managepatients";
import UpdatePatients from "./Components/Manage-Meds/UpdatePatients";
import ViewPatients from "./Components/ViewPatients";
import AddPatient from "./Components/AddPatient";
import ManageCat from "./Components/manage-cat/ManageCat";
import UpdateCat from "./Components/manage-cat/UpdateCat";
import CatDetail from "./Components/manage-cat/CatDetail";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Medsdetails />,
      },

      {
        path: "/Login",
        element: <Login />,
      },

      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "",
        children: [
          {
            path: "/Managemeds",
            element: <Managemeds />,
          },
          {
            path: "/add",
            element: <Addmeds />,
          },
          {
            path: "/update",
            element: <Updatemeds />,
          },
          // {
          //   path:'/Managepatients',
          //   element: <Managepatients />,
          // },
          // {
          //   path:'/viewpatient',
          //   element: <viewpatient />,
          // },
          // {
          //   path:'/updatepatient',
          //   element: <updatepatient />,
          // },
        ],
      },

      {
        path: "",
        children: [
          {
            path: "/Managepatients",
            element: <Managepatients />,
          },
          // {
          //   path:'/add',
          //   element: <Addmeds />,
          // },

          {
            path: "/ViewPatients",
            element: <ViewPatients />,
          },
          {
            path: "/UpdatePatients",
            element: <UpdatePatients />,
          },
          {
            path: "/AddPatient",
            element: <AddPatient />,
          },
        ],
      },
      {
        path: "",
        children: [
          {
            path: "/managecat",
            element: <ManageCat></ManageCat>,
          },
          {
            path:"/UpdateCategory",
            element:<UpdateCat></UpdateCat>
          },
          {
            path: "/viewcat/:id",
            element: <CatDetail></CatDetail>,
          },
        ],
      },
    ],
  },
]);
