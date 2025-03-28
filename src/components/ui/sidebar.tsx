const Sidebar = () => {
  return (
    <div className="bg-white w-12 flex flex-col gap-y-2 rounded-100 h-full max-h-[184px] p-1 shadow-custom">
      {sideBarLinks.map((link) => (
        <div
          key={link.label}
          className="flex flex-col items-center justify-center p-2"
        >
          <img src={link.icon} alt={link.label} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

const sideBarLinks = [
  {
    label: "Link in Bio",
    icon: "/assets/link.svg",
  },
  {
    label: "Store",
    icon: "/assets/store.svg",
  },
  {
    label: "Media Kit",
    icon: "/assets/media.svg",
  },
  {
    label: "Invoicing",
    icon: "/assets/invoicing.svg",
  },
];
