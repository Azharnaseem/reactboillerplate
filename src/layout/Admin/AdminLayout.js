import AdminHome from "../../pages/Admin/AdminHome";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import Footer from "../../components/footer/footer";

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <AdminHome />
      <Footer />
    </>
  );
}

export default AdminLayout;
