import React, { useEffect, useRef } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import Layout from "./Layout";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import Jobs from "./components/Jobs";
import Community from "./components/Community";
// import WhyCodegene from './components/WhyCodegene';
// import Services from './components/Services';
import ContactUs from "./components/ContactUs";
import ApplyForm from "./components/ApplyForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import LoaderComponent from "./common/loaderComponent";
const AboutUs = React.lazy(() => import("./components/AboutUs"));
const WhyCodegene = React.lazy(() => import("./components/WhyCodegene"));
const Services = React.lazy(() => import("./components/Services"));

const App = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  // const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // slideControls.start("visible");
    }
  }, [isInView, mainControls]);

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
          element: (
            <React.Suspense
              fallback={
                <>
                  <LoaderComponent />
                </>
              }
            >
              <AboutUs />
            </React.Suspense>
          ),
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
          element: (
            <React.Suspense
              fallback={
                <>
                  <LoaderComponent />
                </>
              }
            >
              <WhyCodegene />
            </React.Suspense>
          ),
        },
        {
          path: "/services",
          element: (
            <React.Suspense
              fallback={
                <>
                  <LoaderComponent />
                </>
              }
            >
              <Services />
            </React.Suspense>
          ),
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
        {
          path: "applyform",
          element: <ApplyForm />,
        },
        {
          path: "privacy",
          element: <PrivacyPolicy />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
      ],
    },

    {
      path: "*",
      element: (
        <div className="text-center">
          <h3 className="mt-5 text-default-color">Page was not Found...😫</h3>
        </div>
      ),
    },
  ]);

  return (
    <div ref={ref} className="position-relative">
      <motion.div
        className="codegene_pvr"
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <RouterProvider router={router} />
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: "rgb(var(--primary-color))",
        }}
      /> */}
    </div>
  );
};

export default App;
