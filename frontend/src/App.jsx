import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Header = lazy(() => import("./components/Header/Header.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
const MyNotes = lazy(() => import("./pages/MyNotes.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const RegisterPage = lazy(() => import("./pages/RegisterPage.jsx"));

import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  return (
    <BrowserRouter>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
