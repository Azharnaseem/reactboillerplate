import Footer from "./components/footer/footer";
import Navbar from "./components/AdminNavbar/AdminNavbar";
import Login from "./pages/Login/Login";
import { BrowserRouter } from "react-router-dom";
import AdminHome from "./pages/Admin/AdminHome";
import AdminLayout from "./layout/Admin/AdminLayout";
import SuperAdminHome from "./pages/SuperAdminHome/SuperAdminHome";
import SuperAdminLayout from "./layout/superAdmin/SuperAdminLayout";

function App() {
  return (
    <BrowserRouter>
      {/* <SuperAdminLayout /> */}
      <AdminLayout />
      {/* <AdminHome /> */}
      {/* <Login /> */}
    </BrowserRouter>
  );
}

export default App;
