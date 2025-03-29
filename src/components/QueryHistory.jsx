import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeQuery } from "../features/querySlice";

const QueryHistory = () => {
  const dispatch = useDispatch();
  const queries = useSelector((state) => state.query.queries);

  const handleDelete = (index) => {
    dispatch(removeQuery(index));
  };

  return (
    <div className="flex justify-center items-center flex-col mb-10 mt-10">
      <div className="bg-gray-900 border-[1px] border-white rounded-lg w-11/12 md:w-4/5">
        <p className="text-2xl text-white px-2 py-1">History</p>
      </div>
      <div className="border-x-[1px] border-white w-11/12 md:w-4/5 rounded-lg">
        <ul>
          {queries.map((q, index) => (
            <li
              key={index}
              className="p-2 text-white flex justify-between items-center"
            >
              {q}
              <button
                className="ml-3 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueryHistory;
