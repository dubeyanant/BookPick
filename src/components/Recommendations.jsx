import React, { useState } from "react";

import books from "../assets/books_modified.json";
import pt from "../assets/pt.json";
import similarityScores from "../assets/similarity_scores_list.json";

const Recommendations = () => {
  // State for search term input and recommended books
  const [searchTerm, setSearchTerm] = useState("");
  const [recom, setRecom] = useState([]);

  // Handle input change in the search bar
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Recommendation algorithm based on similarity scores
  const recommend = (bookName) => {
    // If search term is empty, return an empty array
    if (bookName === "") return [];

    // Find the index of the selected book in the similarity list
    const index = pt.indexOf(bookName);

    // Sort similar items based on similarity scores
    const similarItems = similarityScores[index]
      .map((score, i) => ({ index: i, score }))
      .sort((a, b) => b.score - a.score)
      .slice(1, 5);

    // Prepare data for recommended books
    const data = [];
    for (const item of similarItems) {
      const tempIndex = item.index;
      const tempDF = books.filter(
        (book) => book["Book-Title"] === pt[tempIndex]
      );

      const tempItem = [];

      // Extract unique book titles, authors, and cover images
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

  // Handle search button click
  const handleClick = (event) => {
    event.preventDefault();
    setRecom(recommend(searchTerm));
  };

  return (
    <>
      {/* Page title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
        Book Recommendations
      </h1>

      {/* Search form */}
      <form action="/search" method="get" className="mb-12">
        {/* Input for book title search */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter book title"
          className="border-solid border-2 rounded py-2 px-5 mb-2 sm:mr-2 lg:mb-0 border-gray-200 w-full sm:w-96"
        />

        {/* Button to trigger the search */}
        <button
          type="submit"
          onClick={handleClick}
          className="bg-blue-500 px-6 py-2 font-semibold text-white rounded w-full sm:w-auto"
        >
          Search
        </button>
      </form>

      {/* Display recommended books */}
      {recom.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recom.map((item, index) => (
            <div key={index} className="mb-2">
              {/* Book cover image */}
              <img
                src={item[2]}
                alt={item[0]}
                className="object-cover h-64 sm:h-72 rounded"
              />

              {/* Book title */}
              <p className="font-bold text-lg lg:text-xl xl:text-2xl mt-3">
                {item[0]}
              </p>

              {/* Book author */}
              <p className="text-base lg:text-lg xl:text-xl">{item[1]}</p>
            </div>
          ))}
        </div>
      ) : (
        // Display a message if no books are recommended
        <p className="font-semibold text-lg lg:text-xl xl:text-2xl text-gray-300 pt-8">
          No books here. Try searching some!
        </p>
      )}
    </>
  );
};

export default Recommendations;
