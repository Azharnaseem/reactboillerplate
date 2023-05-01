import React from "react";
import "./styles.css";
import Footer from "../../components/footer/footer";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/user";
import { Profile } from "../../assets";

const SuperAdminHome = () => {
  const data = useSelector(selectUserData);
  let userData = data?.data?.info;
  return (
    <>
      <div className="container  text-center ">
        {/* <img
          src={Profile}
          class="img h-50 w-50 img-thumbnail rounded-circle mx-auto d-block"
          alt="..."
        ></img> */}
        <h1> {`Name:${userData?.first_name}  ${userData?.last_name}`} </h1>
        <h1> {`E-mail: ${userData?.email}`} </h1>
      </div>
    </>
  );
};
export default SuperAdminHome;
