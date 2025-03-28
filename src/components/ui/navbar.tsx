import clsx from "clsx";
import { Link } from "react-router-dom";
import { NavIcons, NavLinks } from "../../services/models/shared.model";
import CustomAvatar from "../shared/custom-avatar";

const NavLink = ({
  label,
  path,
  icon,
  active,
}: {
  label: string;
  path: string;
  icon: string;
  active: boolean;
}) => {
  return (
    <Link to={path}>
      <div
        className={clsx(
          "flex py-2 px-[18px] items-center gap-1",
          `${active ? "bg-main-black rounded-100" : ""}`
        )}
      >
        <img src={icon} className="object-cover" alt={`${label} icon`} />
        <p
          className={clsx(
            "text-base leading-6 font-semibold",
            `${active ? "text-main-black" : "text-main-grey"}`
          )}
        >
          {label}
        </p>
      </div>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="p-4 fixed w-full left-0">
      <nav className="py-3.5 bg-white flex items-center justify-between shadow-custom rounded-100 border-2 border-white px-6">
        <Link to={`/`}>
          <img src="/mainstack-logo.svg" alt="mainstack logo" />
        </Link>

        <div className="flex items-center gap-x-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              label={item.name}
              path={item.path}
              icon={item.icon}
              active={item.name === NavLinks.Home}
            />
          ))}
        </div>

        <div className="flex items-center gap-x-[18px]">
          <button>
            <img src="/assets/notifications.svg" alt="notification icon" />
          </button>

          <button>
            <img src="/assets/chat.svg" alt="chat icon" />
          </button>

          <button className="rounded-100 bg-main-lightgrey gap-x-2 pl-[5px] py-1 pr-3 flex items-center">
            <CustomAvatar
              fallBackClass="bg-gradient-to-r from-[#5C6670] to-[#131316] text-white text-sm"
              fallback="OJ"
            />

            <img src="/assets/menu.svg" alt="menu icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const navItems = [
  {
    path: "/",
    name: NavLinks.Home,
    icon: NavIcons[NavLinks.Home],
  },
  {
    path: "/analytics",
    name: NavLinks.Analytics,
    icon: NavIcons[NavLinks.Analytics],
  },
  {
    path: "/revenue",
    name: NavLinks.Revenue,
    icon: NavIcons[NavLinks.Revenue],
  },
  {
    path: "/crm",
    name: NavLinks.CRM,
    icon: NavIcons[NavLinks.CRM],
  },
  {
    path: "/apps",
    name: NavLinks.Apps,
    icon: NavIcons[NavLinks.Apps],
  },
];
