import Footer from "./components/footer/footer";
import Navbar from "./components/AdminNavbar/AdminNavbar";
import Login from "./pages/Login/Login";
import { BrowserRouter } from "react-router-dom";
import AdminHome from "./pages/Admin/AdminHome";
import AdminLayout from "./layout/Admin/AdminLayout";
import SuperAdminHome from "./pages/SuperAdminHome/SuperAdminHome";
import SuperAdminLayout from "./layout/superAdmin/SuperAdminLayout";
import { useSelector } from "react-redux";
// import { setIsLoggedIn, setToken, setUserData } from "~redux/slices/user";
import { selectIsLoggedIn, selectUserData } from "./redux/slices/user";
function App() {
  const isLogin = useSelector(selectIsLoggedIn);
  const data = useSelector(selectUserData);
  console.log("data is in redux after login", data?.data?.info?.role_key);
  let role = data?.data?.info?.role_key;
  console.log(isLogin, "============", role);

  return (
    <BrowserRouter>
      {/* <SuperAdminLayout /> */}

      {/* <AdminHome /> */}
      {/* <Login /> */}
      {!isLogin && role === undefined ? (
        <Login />
      ) : isLogin && role === "superadmin" ? (
        <SuperAdminLayout />
      ) : (
        <AdminLayout />
      )}
    </BrowserRouter>
  );
}

export default App;
