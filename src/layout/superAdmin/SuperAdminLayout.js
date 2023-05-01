import AdminHome from "../../pages/Admin/AdminHome";
import Footer from "../../components/footer/footer";
import SuperAdminNavbar from "../../components/SuperAdminNavbar/AdminNavbar";
import SuperAdminHome from "../../pages/SuperAdminHome/SuperAdminHome";

function SuperAdminLayout() {
  return (
    <>
      <SuperAdminNavbar />
      <SuperAdminHome />
      <Footer />
    </>
  );
}

export default SuperAdminLayout;
