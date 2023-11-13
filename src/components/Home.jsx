import popularBooks from "../../ML/popular_df.json";

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Top 50 Books</h1>
      <div className="grid grid-cols-4 gap-4">
        {popularBooks.map((item) => (
          <div className="mb-2">
            <img
              src={item["Image-URL-M"]}
              alt={item["Book-Title"]}
              className="object-cover h-72 rounded"
            />
            <p className="font-bold text-xl mt-3">{item["Book-Title"]}</p>
            <p>{item["Book-Author"]}</p>
            <p>Votes: {item["num_rating"]}</p>
            <p>Rating: {parseFloat(item["avg_rating"]).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
