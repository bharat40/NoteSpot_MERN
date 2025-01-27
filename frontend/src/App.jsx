import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Header = lazy(() => import("./components/Header/Header.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
const MyNotes = lazy(() => import("./pages/MyNotes.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const RegisterPage = lazy(() => import("./pages/RegisterPage.jsx"));
import { ToastContainer } from "react-toastify";

import Loader from "./components/Loader/Loader.jsx";
import CreateNotePage from "./pages/CreateNotePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        pauseOnHover={false}
        closeButton={false}
      />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path="/mynotes"
          element={
            <Suspense fallback={<Loader />}>
              <MyNotes />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <RegisterPage />
            </Suspense>
          }
        />
        <Route
          path="/createnote"
          element={
            <Suspense fallback={<Loader />}>
              <CreateNotePage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
