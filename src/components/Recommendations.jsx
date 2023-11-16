import React, { useState } from "react";

import books from "../assets/books_modified.json";
import pt from "../assets/pt.json";
import similarityScores from "../assets/similarity_scores_list.json";

const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recom, setRecom] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const recommend = (bookName) => {
    if (bookName === "") return [];

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

  const handleClick = (event) => {
    event.preventDefault();
    setRecom(recommend(searchTerm));
  };

  return (
    <div className="mx-4 lg:mx-14 mb-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
        Book Recommendations
      </h1>
      <form action="/search" method="get" className="mb-12">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter book title"
          className="border-solid border-2 rounded py-2 px-5 mb-2 lg:mr-2 lg:mb-0 border-gray-200 w-full lg:w-96"
        />
        <button
          type="submit"
          onClick={handleClick}
          className="bg-blue-500 px-6 py-2 font-semibold text-white rounded w-full lg:w-auto"
        >
          Search
        </button>
      </form>
      {recom.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recom.map((item, index) => (
            <div key={index} className="mb-2">
              <img
                src={item[2]}
                alt={item[0]}
                className="object-cover h-64 sm:h-72 rounded"
              />
              <p className="font-bold text-lg lg:text-xl xl:text-2xl mt-3">
                {item[0]}
              </p>
              <p className="text-base lg:text-lg xl:text-xl">{item[1]}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-semibold text-lg lg:text-xl xl:text-2xl text-gray-300 pt-8">
          No books here. Try searching some!
        </p>
      )}
    </div>
  );
};

export default Recommendations;
