import popularBooks from "../assets/popular_df.json";

const Home = () => {
  return (
    <div className="mx-4 lg:mx-14 mb-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
        Top 50 Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularBooks.map((item) => (
          <div key={item["Book-Title"]} className="mb-2">
            <img
              src={item["Image-URL-M"]}
              alt={item["Book-Title"]}
              className="object-cover h-64 sm:h-72 rounded"
            />
            <p className="font-bold text-lg lg:text-xl xl:text-2xl mt-3 mr-5 pr-10">
              {item["Book-Title"]}
            </p>
            <p className="font-medium text-base lg:text-lg xl:text-xl">
              {item["Book-Author"]}
            </p>
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
    </div>
  );
};
export default Home;
