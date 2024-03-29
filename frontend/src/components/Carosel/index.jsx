const Carosel = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            src="/image.svg"
            alt="Carosel image"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute max-w-[470px] sm:ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% original product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
