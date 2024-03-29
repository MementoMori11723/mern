import { BsSearch } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { CartBadge } from "../import";

const MobNavBar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <IoIosMenu size={30} />
            <BsSearch size={20} />
          </div>

          <div className="flex justify-center items-center">
            <img alt="logo" className="mr-2 w-8 h-8" src="/image.svg" />
            <h1 className="text-2xl">Logo</h1>
          </div>

          <div className="flex gap-4 text-[30px]">
            <AiOutlineUser size={25} />
            <div className="relative cursor-pointer">
              <AiOutlineShoppingCart size={25} />
              <CartBadge size="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobNavBar;
