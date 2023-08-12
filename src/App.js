import GlobalStyles from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login";
import Planning from "./pages/dashboard/Planning";
import CheckOut from "./pages/dashboard/CheckOut";
import FlexPool from "./pages/dashboard/FlexPool";
import Projects from "./pages/dashboard/Projects";
import Dashboard from "./pages/dashboard/Dashboard";
import CreatePlannings from "./pages/dashboard/planning/createPlanning";
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/planning" element={<Planning />} />

        <Route
          path="/planning/jobs/shifts/:create"
          element={<CreatePlannings />}
        />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/flexPools" element={<FlexPool />} />
        <Route path="/Projects" element={<Projects />} />
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
// ** Router Import

// import Router from './router/Router'

// const App = () => <Router />

// export default App
