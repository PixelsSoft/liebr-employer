import GlobalStyles from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flatpickr/dist/themes/material_green.css";

import Dashboard from "./pages/dashboard/Dashboard";
import CreatePlannings from "./pages/dashboard/planning/createPlanning";
import Planning from "./pages/dashboard/planning/plannings";
import Projects from "./pages/dashboard/project/projects";
import FlexPools from "./pages/dashboard/flexPool/flexPools";
import CheckOut from "./pages/dashboard/checkout";
import Login from "./pages/auth/login.js";
import LoginWithoutPassword from "./pages/auth/loginWithoutPassword";
import ResetPassword from "./pages/auth/resetPassword";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/without-password" element={<LoginWithoutPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/planning" element={<Planning />} />

        <Route
          path="/planning/jobs/shifts/:create"
          element={<CreatePlannings />}
        />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/flexPools" element={<FlexPools />} />
        {/* <Route path="/Projects" element={<Projects />} /> */}

        <Route path="/projects" element={<Projects />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
