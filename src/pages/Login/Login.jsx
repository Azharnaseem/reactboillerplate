import React, { useState } from "react";
import "./styles.css";
import Footer from "../../components/footer/footer";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/slices/user";
import { ApiManager } from "../../backend/ApiManager";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  async function HandldeLogin(e) {
    e.preventDefault();

    try {
      const data = {
        email: email,
        password: password,
      };
      const response = await ApiManager.post(`login`, data);
      dispatch(setUserData(response));
      console.log("responce data is:", response);
    } catch (error) {
      console.log("errror is ", error);
      console.log("login faied");
    }
  }
  return (
    <>
      <div className="container-fluid text-center p-5">
        <div className="  container mx-auto p-5 w-md-25 bg-dark text-white rounded-4">
          <h1 className=""> Login Page</h1>
          <form onSubmit={HandldeLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
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
            <button
              type="submit"
              className="btn btn-primary"
              // onClick={HandldeLogin}
            >
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
