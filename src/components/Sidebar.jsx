import React from "react";
import { navigationItems } from "../constants/sidebarContants";
import ICON_LOGO from "../assets/company-logo.svg";
import ICON_SIDEARROW from "../assets/side-arrow.svg";

const SideBar = () => {
  return (
    <aside className="flex flex-col w-[264px] h-screen bg-white">
      <div className="relative h-[64px] flex items-center ">
        <img src={ICON_LOGO} alt="Logo" />
        <button className="absolute right-0 ">
          <img src={ICON_SIDEARROW} alt="side-arrow" />
        </button>
      </div>

      <div className="w-full  py-5 space-y-7">
        {navigationItems.map((section, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-sm font-semibold text-slate-900">
              {section.title}
            </div>

            <div className="flex flex-col gap-1">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className={`flex  gap-2 w-56 px-2.5 py-2 rounded-lg transition-colors
                    ${
                      item.active
                        ? "bg-secondary text-slate-50"
                        : "hover:bg-slate-100 text-colors-lead-600"
                    }`}
                >
                  <img src={item.icon} alt={item.label} />
                  <span
                    className={`text-base ${
                      item.active ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
