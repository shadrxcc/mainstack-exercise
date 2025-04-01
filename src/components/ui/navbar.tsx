import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { NavIcons, NavLinks } from "../../services/models/shared.model";
import CustomAvatar from "../shared/custom-avatar";
import { useUserContext } from "../../context/user";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

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
          "flex py-2 px-[18px] items-center transition-all ease-in-out duration-500 rounded-100 gap-1",
          `${active ? "bg-main-black" : "hover:bg-main-lightgrey"}`
        )}
      >
        <img src={icon} className="object-cover" alt={`${label} icon`} />
        <p
          className={clsx(
            "text-base leading-6 font-semibold",
            `${active ? "text-white" : "text-main-grey"}`
          )}
        >
          {label}
        </p>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const { user } = useUserContext();
  const { pathname } = useLocation();

  return (
    <div className="p-4 fixed top-0 z-[999] w-full left-0">
      <nav className="py-3.5 bg-white w-full max-w-7xl mx-auto flex items-center justify-between shadow-custom rounded-100 border-2 border-white px-6">
        <Link to={`/`}>
          <img src="/mainstack-logo.svg" alt="mainstack logo" />
        </Link>

        <div className="hidden lg:flex items-center gap-x-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              label={item.name}
              path={item.path}
              icon={item.icon}
              active={item.path === pathname}
            />
          ))}
        </div>

        <div className="flex items-center gap-x-2 overflow-hidden">
          <button className="hover:scale-105 transition-all p-2.5 ease-in-out duration-500">
            <img src="/assets/notifications.svg" alt="notification icon" />
          </button>

          <button className="hover:scale-105 transition-all p-2.5 ease-in-out duration-500">
            <img src="/assets/chat.svg" alt="chat icon" />
          </button>

          <Popover className={`relative`}>
            <PopoverButton
              className={`rounded-100 bg-main-lightgrey cursor-pointer gap-x-2 pl-[5px] py-1 pr-3 flex items-center`}
            >
              <CustomAvatar
                fallBackClass="bg-gradient-to-r from-[#5C6670] to-[#131316] text-white text-sm"
                fallback={
                  user
                    ? `${user?.first_name
                        ?.charAt(0)
                        ?.toUpperCase()}${user?.last_name
                        ?.charAt(0)
                        ?.toUpperCase()}`
                    : "G"
                }
              />

              <img src="/assets/menu.svg" alt="menu icon" />
            </PopoverButton>

            <PopoverPanel
              anchor={"bottom"}
              className={`transition-all flex flex-col gap-y-5 z-[9999] w-full !max-w-76 shadow-custom mt-7 bg-white rounded-xl p-4 duration-500`}
            >
              <div className="flex items-center gap-x-2">
                <CustomAvatar
                  avatarClass="w-10 h-10"
                  fallBackClass="bg-gradient-to-r from-[#5C6670] to-[#131316] text-white text-sm"
                  fallback={
                    user
                      ? `${user?.first_name
                          ?.charAt(0)
                          ?.toUpperCase()}${user?.last_name
                          ?.charAt(0)
                          ?.toUpperCase()}`
                      : "G"
                  }
                />

                <div className="flex flex-col">
                  <h1 className="text-base font-semibold text-main-black">
                    {user ? `${user?.first_name} ${user?.last_name}` : "Guest"}
                  </h1>
                  {user && (
                    <p className="text-xs font-medium text-main-grey">
                      {user?.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-y-0.5">
                {accountDropdown.map((option) => (
                  <button
                    key={option.name}
                    className="p-3.5 text-sm font-medium text-main-black cursor-pointer flex items-center gap-x-3 hover:bg-main-lightgrey rounded-lg transition-all ease-in-out duration-500"
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const navItems = [
  {
    path: "/dashboard",
    name: NavLinks.Home,
    icon: NavIcons[NavLinks.Home],
  },
  {
    path: "/dashboard/analytics",
    name: NavLinks.Analytics,
    icon: NavIcons[NavLinks.Analytics],
  },
  {
    path: "/dashboard/revenue",
    name: NavLinks.Revenue,
    icon: NavIcons[NavLinks.Revenue],
  },
  {
    path: "/dashboard/crm",
    name: NavLinks.CRM,
    icon: NavIcons[NavLinks.CRM],
  },
  {
    path: "/dashboard/apps",
    name: NavLinks.Apps,
    icon: NavIcons[NavLinks.Apps],
  },
];

const accountDropdown = [
  {
    name: "Settings",
  },
  {
    name: "Purchase History",
  },
  {
    name: "Refer and Earn",
  },
  {
    name: "Integrations",
  },
  {
    name: "Report Bug",
  },
  {
    name: "Switch Account",
  },
  {
    name: "Sign Out",
  },
];
