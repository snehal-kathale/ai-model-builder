import ICON_MENU1 from "../assets/1-menu.svg";
import ICON_MENU2 from "../assets/menu-2.svg";
import ICON_MENU3 from "../assets/layers-round.svg";
import ICON_MENU4 from "../assets/task.svg";
import ICON_HELP1 from "../assets/setting.svg";
import ICON_HELP2 from "../assets/user.svg";

export const navigationItems = [
  {
    title: "Model Library",
    items: [
      {
        label: "Model Library",
        icon: ICON_MENU1,
        active: true,
      },
    ],
  },
  {
    title: "Extraction Builder",
    items: [
      { label: "Label Data", icon: ICON_MENU2 },
      { label: "Model", icon: ICON_MENU3 },
      { label: "Test", icon: ICON_MENU4 },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "Setting", icon: ICON_HELP1 },
      { label: "Support", icon: ICON_HELP2 },
    ],
  },
];
