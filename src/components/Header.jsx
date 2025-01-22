import React from "react";
import ICON_SEARCH from "../assets/headersearch.svg";
import ICON_COMMAND from "../assets/command.svg";
import ICON_NOTIFY from "../assets/Notification.svg";
import ICON_WISHLIST from "../assets/Wishlist.svg";
const NavbarStyle = () => {
  const user = {
    name: "Neurotic Spy",
    email: "neurotic@taildo.com",
    avatar: "",
  };

  return (
    <nav className="flex w-[100%] h-[92px] items-center gap-[106px] p-6 bg-white shadow-md">
      <div className="w-[201px]">
        <h1 className="font-semibold text-xl text-slate-800">
          AI/ML Model Builder
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 px-3.5 py-3 bg-gray-100 rounded-lg w-[280px]">
        <img src={ICON_SEARCH} alt="serach" />
        <input
          type="text"
          placeholder="Search"
          className="border-0 bg-transparent focus:outline-none text-sm text-slate-700 flex-1"
        />
        <div className="flex items-center gap-1 text-slate-500">
          <img src={ICON_COMMAND} alt="command" />
          <span className="text-sm font-medium">K</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8 flex-1 justify-end">
        <div className="flex items-center gap-3.5">
          <img src={ICON_NOTIFY} alt="notification" />
          <img src={ICON_WISHLIST} alt="wishlist" />
        </div>

        <div className="w-[1px] h-10 bg-gray-300" />

        {/* User Profile */}
        <div className="flex items-center gap-2.5 w-[212px]">
          <div className="flex items-center gap-2 flex-1">
            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                "NS"
              )}
            </div>
            <div className="flex flex-col min-w-[130px]">
              <span className="font-semibold text-base text-slate-800">
                {user.name}
              </span>
              <span className="text-xs text-slate-500">{user.email}</span>
            </div>
          </div>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavbarStyle;
