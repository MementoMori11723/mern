import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center p-[15px]">
        <img src="/image.svg" alt="logo" width={30} height={30} />
        <h1>E - Cart </h1>
      </Link>
    </div>
  );
};

export default Logo;
