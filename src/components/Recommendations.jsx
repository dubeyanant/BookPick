import { useState } from "react";

import books from "../../Ml/books_modified.json";
import pt from "../../Ml/pt.json";
import similarityScores from "../../Ml/similarity_scores_list.json";

const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const recommend = (bookName) => {
    const index = pt.indexOf(bookName);

    const similarItems = similarityScores[index]
      .map((score, i) => ({ index: i, score }))
      .sort((a, b) => b.score - a.score)
      .slice(1, 5);

    const data = [];
    for (const item of similarItems) {
      const tempIndex = item.index;
      const tempDF = books.filter(
        (book) => book["Book-Title"] === pt[tempIndex]
      );

      const tempItem = [];

      for (const book of tempDF) {
        if (!tempItem.includes(book["Book-Title"])) {
          tempItem.push(book["Book-Title"]);
        }
        if (!tempItem.includes(book["Book-Author"])) {
          tempItem.push(book["Book-Author"]);
        }
        if (!tempItem.includes(book["Image-URL-M"])) {
          tempItem.push(book["Image-URL-M"]);
        }
      }

      data.push(tempItem);
    }

    return data;
  };

  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Book Recommendations</h1>
      <form action="/search" method="get" className="mb-12">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter book title"
          className="border-solid border-2 rounded py-2 px-5 mr-6 border-gray-200 w-96"
        />
        <button
          type="submit"
          className="bg-blue-500 px-6 py-2 font-semibold text-white rounded"
        >
          Search
        </button>
      </form>
      {searchTerm ? (
        <div className="grid grid-cols-4 gap-4">
          <div className="mb-2">
            <img
              src="https://images.pexels.com/photos/18885164/pexels-photo-18885164/free-photo-of-wedding-couple-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Book Title"
              className="object-cover h-72 rounded"
            />
            <p className="font-bold text-xl mt-3">Book Title</p>
            <p>Book Author</p>
          </div>
        </div>
      ) : (
        <p>There are no books.</p>
      )}
    </>
  );
};
export default Recommendations;
