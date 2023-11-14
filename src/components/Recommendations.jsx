import { useState } from "react";

import books from "../../Ml/books.json";
import pt from "../../Ml/pt.json";
import similarity_scores from "../../Ml/similarity_scores_list.json";

const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(books);
  console.log(pt);
  console.log(similarity_scores);

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
