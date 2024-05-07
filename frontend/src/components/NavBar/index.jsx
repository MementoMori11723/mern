import { SearchBar, Cart, Login } from "./import";

const Navbar = () => {
  return (
    <div>
      {/* Logo */}
      <div>
        <img src="/image.svg" alt="Logo" />
        <div>
          <a href="/">E-Cart</a>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Cart */}
      <Cart />

      {/* Login / Register */}
      <Login />
    </div>
  );
};

export default Navbar;
