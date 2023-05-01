import React from "react";
import "./styles.css";
import Footer from "../../components/footer/footer";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";

const Login = () => {
  return (
    <>
      {/* <AdminNavbar /> */}
      <div className="container-fluid text-center p-5">
        <div className="  container mx-auto p-5 w-md-25 bg-dark text-white rounded-4">
          <h1 className=""> Login Page</h1>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Login;
