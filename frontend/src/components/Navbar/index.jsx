const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        {/* logo */}
        <img src="/image.svg" alt="logo" width="50px" height="70px" />
        {/* search */}
        <input type="text" placeholder="Search" />
        {/* dark mode toggle */}
        <button>🌙</button>
        {/* login */}
        <button>Login</button>
        {/* cart */}
        <button>🛒</button>
      </div>
    </div>
  );
};

export default Navbar;
