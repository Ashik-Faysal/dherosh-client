import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const Main = () => {
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 3000);
   }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
