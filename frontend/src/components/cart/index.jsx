import PropTypes from "prop-types";

const CartBadge = ({ size }) => {
  return (
    <div
      className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
    >
      0
    </div>
  );
};

CartBadge.propTypes = {
  size: PropTypes.string.isRequired,
};

export default CartBadge;
