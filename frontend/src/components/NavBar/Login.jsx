import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/login" className="">
        <span>Login </span>
      </Link>
    </div>
  );
};

export default Login;
