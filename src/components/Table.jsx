import { useState } from "react";
import { modelData } from "../constants/modelData";
import { tableHeaders } from "../constants/tableConstant";
import ICON_ADD from "../assets/Outline-plus-sm.svg";
import ICON_SEARCH from "../assets/Search.svg";
import ICON_FILTER from "../assets/Filter.svg";
import ICON_CALENDER from "../assets/calendar.svg";
import ICON_SORT from "../assets/sort-icons.svg";
import ICON_DOTS from "../assets/Outline-dots-vertical.svg";
import ICON_PREVIOUS from "../assets/previous.svg";
import ICON_NEXT from "../assets/next.svg";

export default function Frame({ onClick }) {
  const [data, setData] = useState(modelData);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);
    if (value === "") {
      setData(modelData);
      return;
    }
    const filtered = data.filter((item) => {
      const lowerValue = value.toLowerCase();
      return (
        item.name.toLowerCase().includes(lowerValue) ||
        item.id.toLowerCase().includes(lowerValue) ||
        item.type.toLowerCase().includes(lowerValue) ||
        item.description.toLowerCase().includes(lowerValue)
      );
    });

    setData(filtered);
  };

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };
  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="w-[100%] bg-white shadow-lg">
      <div className="flex flex-col gap-3 p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 text-xl font-semibold">Model Library</h2>
          <button
            className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white rounded-md"
            onClick={onClick}
          >
            <img src={ICON_ADD} alt="add-icon" />
            Create New Model
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <img src={ICON_SEARCH} alt="search" />
            <input
              className="flex-1 bg-transparent border-0 text-gray-500 placeholder-gray-500 focus:outline-none"
              placeholder="Search by Name, ID"
              value={searchText}
              onChange={handleSearch}
            />
          </div>

          <button className="flex gap-2 items-center px-4 py-2 bg-gray-50 rounded-lg">
            <img src={ICON_FILTER} alt="filter" />
            <span className="text-gray-500">Filters</span>
          </button>

          <button className="flex gap-2 items-center px-4 py-2 bg-gray-50 rounded-lg">
            <img src={ICON_CALENDER} alt="calender" />
            <span className="text-gray-500">April 11 - April 24</span>
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              {tableHeaders.map((header) => (
                <th
                  className="px-4 py-2 text-left items-center gap-2 cursor-pointer"
                  key={header.key}
                  onClick={() => header.sortable && handleSort(header.key)}
                >
                  <div className="flex items-center gap-[8px]">
                    {header.label}{" "}
                    {header.sortable && <img src={ICON_SORT} alt="sort" />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((model, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border-b px-4 py-2">
                  <div>
                    <div>{model.name}</div>
                    <div className="text-sm text-gray-500">ID: {model.id}</div>
                  </div>
                </td>
                <td className="border-b px-4 py-2">{model.type}</td>
                <td className="border-b px-4 py-2">{model.description}</td>
                <td className="border-b px-4 py-2">{model.createdOn}</td>
                <td className="border-b px-4 py-2">{model.lastTrainedOn}</td>
                <td className="border-b px-4 py-2">
                  <span className="bg-green-100 text-green-600 py-1 px-3 rounded-[8px]">
                    {model.status}
                  </span>
                </td>
                <td className="border-b px-4 py-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <img src={ICON_DOTS} alt="dots" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center pt-5">
          <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
            <div className="text-sm">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + rowsPerPage, data.length)} of {data.length}{" "}
              results
            </div>
            <div className="flex">
              <ul
                className="flex justify-center items-center gap-x-[10px] z-30"
                role="navigation"
                aria-label="Pagination"
              >
                <li
                  className={` prev-btn flex items-center justify-center w-[24px] rounded-[18px] h-[24px] bg-[#DBEAFE]  disabled] ${
                    currentPage === 1
                      ? "bg-[#DBEAFE] pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  disabled={currentPage === 1}
                  onClick={() => onChangePage(currentPage - 1)}
                >
                  <img src={ICON_PREVIOUS} alt="previous" />
                </li>
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <li
                    className={`flex items-center justify-center w-[24px] rounded-[18px] h-[24px]  bg-[#FFFFFF] cursor-pointer ${
                      page === currentPage
                        ? " bg-blue-500 text-white"
                        : "text-blue-600"
                    }`}
                    onClick={() => onChangePage(page)}
                    key={page}
                  >
                    {page}
                  </li>
                ))}
                <li
                  className={`flex items-center justify-center w-[24px] rounded-[18px] h-[24px] bg-[#DBEAFE] ${
                    totalPages === currentPage
                      ? "bg-[#DBEAFE] pointer-events-none"
                      : " cursor-pointer"
                  }`}
                  disabled={startIndex + rowsPerPage >= data.length}
                  onClick={() => onChangePage(currentPage + 1)}
                >
                  <img src={ICON_NEXT} alt="next" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
