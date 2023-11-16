import popularBooksData from "../assets/popular_df.json";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
        Top 50 Books
      </h1>

      {/* Grid layout for displaying popular books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map over the popular books data to create book cards */}
        {popularBooksData.map((item) => (
          <div key={item["Book-Title"]} className="mb-2">
            {/* Book cover image */}
            <img
              src={item["Image-URL-M"]}
              alt={item["Book-Title"]}
              className="object-cover h-64 sm:h-72 rounded"
            />

            {/* Book title */}
            <p className="font-bold text-lg lg:text-xl xl:text-2xl mt-3 mr-5 pr-10">
              {item["Book-Title"]}
            </p>

            {/* Book author */}
            <p className="font-medium text-base lg:text-lg xl:text-xl">
              {item["Book-Author"]}
            </p>

            {/* Book votes and rating */}
            <p className="text-sm lg:text-base xl:text-lg">
              Votes: <span className="font-medium">{item["num_rating"]}</span>{" "}
              &#8226; Rating:{" "}
              <span className="font-medium">
                {parseFloat(item["avg_rating"]).toFixed(2)}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
