import popularBooks from "../assets/popular_df.json";

const Home = () => {
  return (
    <div className="mx-14 mb-10">
      <h1 className="text-4xl font-semibold mb-8">Top 50 Books</h1>
      <div className="grid grid-cols-4 gap-4">
        {popularBooks.map((item) => (
          <div className="mb-2">
            <img
              src={item["Image-URL-M"]}
              alt={item["Book-Title"]}
              className="object-cover h-72 rounded"
            />
            <p className="font-bold text-xl mt-3 mr-5 pr-10">
              {item["Book-Title"]}
            </p>
            <p className="font-medium text-lg">{item["Book-Author"]}</p>
            <p>
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
