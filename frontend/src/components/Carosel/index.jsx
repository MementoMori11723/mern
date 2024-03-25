const Carosel = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxnIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyI+PHBhdGggZmlsbD0iIzAwZWZkMSIgZD0iTTQ2Mi4xLDEyMS45LDQyNC44LDI0MC40YTUwLjAyOCw1MC4wMjgsMCwwLDEtNDcuNywzNUgxNDEuNmwtLjUuMUwxMTUsMTIybC40LS4xWiIvPjxwYXRoIGZpbGw9IiMwMGFjZWEiIGQ9Ik0zOTMuMSA0MDIuMWE0MC44IDQwLjggMCAxIDEtNDAuOCA0MC44QTQwLjg0MyA0MC44NDMgMCAwIDEgMzkzLjEgNDAyLjF6TTE3OS4yIDQwMi4xYTQwLjggNDAuOCAwIDEgMS00MC44IDQwLjhBNDAuNzc5IDQwLjc3OSAwIDAgMSAxNzkuMiA0MDIuMXpNNDIzLjkgMzU3LjhIMTk1LjdhNTkuOTE4IDU5LjkxOCAwIDAgMS01OS4yLTUwTDk2LjQgNzEuNkEzOS45MjkgMzkuOTI5IDAgMCAwIDU3IDM4LjNIMzkuOWExMCAxMCAwIDAgMSAwLTIwSDU3YTU5LjczNyA1OS43MzcgMCAwIDEgNTkuMSA1MGw0MC4xIDIzNi4zYTM5LjkyOSAzOS45MjkgMCAwIDAgMzkuNCAzMy4zSDQyMy44YTEwLjAyOSAxMC4wMjkgMCAwIDEgMTAgMTBBOS44NTkgOS44NTkgMCAwIDEgNDIzLjkgMzU3Ljh6Ii8+PC9nPjwvc3ZnPg=="
            alt="Carosel image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Carosel;
