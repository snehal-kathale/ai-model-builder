import React from "react";

const navigationItems = [
  {
    title: "Model Library",
    items: [
      { label: "Model Library", icon: "../icons/1-menu.svg", active: true },
    ],
  },
  {
    title: "Extraction Builder",
    items: [
      { label: "Label Data", icon: "./icons/menu-2.svg" },
      { label: "Model", icon: "../icons/layers-round.svg" },
      { label: "Test", icon: "../icons/task.svg" },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "Setting", icon: "../icons/setting.svg" },
      { label: "Support", icon: "../icons/user.svg" },
    ],
  },
];

const SideBar = () => {
  return (
    <aside className="flex flex-col w-[264px] h-screen bg-white">
      <div className="relative h-[64px] flex items-center justify-center">
        <img src="../icons/company-logo.svg" alt="Logo" className="h-8" />
        <button className="absolute right-0 top-1/2 -translate-y-1/2">
          <img src="../icons/side-arrow.svg" alt="side-arrow" />
        </button>
      </div>

      <div className="w-full px-6 py-5 space-y-7">
        {navigationItems.map((section, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-sm font-semibold text-slate-900">
              {section.title}
            </div>

            <div className="flex flex-col gap-1">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className={`flex items-center gap-2 w-56 px-2.5 py-2 rounded-lg transition-colors
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
