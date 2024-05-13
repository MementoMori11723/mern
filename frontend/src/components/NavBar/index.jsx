import { SearchBar, Cart, Login, Logo } from "./import";

const NavBar = () => {
  return (
    <div className="flex items-center bg-amber-100">
      {/* Logo */}
      <Logo />
      {/* Search Bar */}
      <SearchBar />
      {/* Cart */}
      <Cart />
      {/* Login / Register */}
      <Login />
    </div>
  );
};

export default NavBar;
