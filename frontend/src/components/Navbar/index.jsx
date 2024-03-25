import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { CartBadge } from "../import";
const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <div className="flex justify-between items-center">
            <img
              alt="logo"
              className="mr-2 w-8 h-8"
              src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxnIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyI+PHBhdGggZmlsbD0iIzAwZWZkMSIgZD0iTTQ2Mi4xLDEyMS45LDQyNC44LDI0MC40YTUwLjAyOCw1MC4wMjgsMCwwLDEtNDcuNywzNUgxNDEuNmwtLjUuMUwxMTUsMTIybC40LS4xWiIvPjxwYXRoIGZpbGw9IiMwMGFjZWEiIGQ9Ik0zOTMuMSA0MDIuMWE0MC44IDQwLjggMCAxIDEtNDAuOCA0MC44QTQwLjg0MyA0MC44NDMgMCAwIDEgMzkzLjEgNDAyLjF6TTE3OS4yIDQwMi4xYTQwLjggNDAuOCAwIDEgMS00MC44IDQwLjhBNDAuNzc5IDQwLjc3OSAwIDAgMSAxNzkuMiA0MDIuMXpNNDIzLjkgMzU3LjhIMTk1LjdhNTkuOTE4IDU5LjkxOCAwIDAgMS01OS4yLTUwTDk2LjQgNzEuNkEzOS45MjkgMzkuOTI5IDAgMCAwIDU3IDM4LjNIMzkuOWExMCAxMCAwIDAgMSAwLTIwSDU3YTU5LjczNyA1OS43MzcgMCAwIDEgNTkuMSA1MGw0MC4xIDIzNi4zYTM5LjkyOSAzOS45MjkgMCAwIDAgMzkuNCAzMy4zSDQyMy44YTEwLjAyOSAxMC4wMjkgMCAwIDEgMTAgMTBBOS44NTkgOS44NTkgMCAwIDEgNDIzLjkgMzU3Ljh6Ii8+PC9nPjwvc3ZnPg=="
            />
            <h1 className="text-2xl font-medium">Logo</h1>
          </div>
          <div className="relative w-full max-w-[500px]">
            <input
              type="text"
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              placeholder="Search"
            />
            <BsSearch
              className="absolute top-0 right-0 mt-[15px] mr-5 text-gray-500"
              size={20}
            />
          </div>
          <div className="flex gap-4">
            <div className="icon__wrapper">
              <AiOutlineUser size={24} />
            </div>
            <div className="icon__wrapper relative">
              <AiOutlineShoppingCart size={24} />
              <CartBadge size="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
