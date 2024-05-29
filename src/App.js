import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Jobs from "./components/Jobs";
import Community from "./components/Community";
import WhyCodegene from "./components/WhyCodegene";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "community",
          element: <Community />,
        },
        {
          path: "/whycodegene",
          element: <WhyCodegene />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
      ],
    },

    {
      path: "*",
      element: (
        <>
          <div className="text-center">
            <h3 className="mt-5 text-default-color">Page was not Found...😫</h3>
          </div>
        </>
      ),
    },
  ]);

  return (
    <div className="codegene_pvr">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
