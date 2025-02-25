import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import UserProvider from "./Context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </UserProvider>
  );
};
