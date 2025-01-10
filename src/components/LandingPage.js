import React from "react";
import Frame from "./Table";
import NavbarStyle from "./Header";
import SideBar from "./Sidebar";

const Box = ({ onOpenModal }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-40% p-4 space-y-4 bg-white">
        <SideBar />
      </aside>

      <main className="flex-1 w-1fr">
        <NavbarStyle />
        <div className="flex-1 p-2">
          <Frame onClick={onOpenModal} />
        </div>
      </main>
    </div>
  );
};

export default Box;
