import React, { useState } from "react";
import HeroSection from "./HeroSection";
import { useDispatch, useSelector } from "react-redux";
import { submitQuery, setResults } from "../features/querySlice";
import { generateMockData } from "../features/querySlice";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const [autoSuggestions, setAutoSuggestions] = useState([]);
  const dispatch = useDispatch();
  const mockData = useSelector((state) => state.query.mockData);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 1) {
      const filteredSuggestions = mockData.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setAutoSuggestions(filteredSuggestions.slice(0, 9));
    } else {
      setAutoSuggestions([]);
    }
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(submitQuery(query));
      setTimeout(() => {
        try {
          const data = generateMockData();
          dispatch(setResults(data));
        } catch (error) {
          dispatch(setError('Failed to generate data.'));
        }
      }, 1000);
      setQuery('');
      setAutoSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setAutoSuggestions([]);
  };

  return (
    <div className="flex flex-col justify-center items-center py-8">
      <HeroSection />
      <div className="w-11/12 max-w-lg mt-4 md:mt-4">
        <form onSubmit={handleSubmitQuery} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your query"
            value={query}
            onChange={handleInputChange}
            className="w-full bg-gray-600 rounded-full p-3 text-center text-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="w-2/5 md:w-full self-center sm:w-auto p-3 bg-gray-900 border-white border-2 rounded-full hover:bg-gray-950"
          >
            <span className="text-white">Search</span>
          </button>
        </form>

        {autoSuggestions.length > 0 && (
          <ul className="border rounded-md mt-2 w-full bg-white overflow-hidden">
            {autoSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QueryInput;
