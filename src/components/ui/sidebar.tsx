const Sidebar = () => {
  return (
    <div className="bg-white w-12 flex fixed flex-col top-[35%] bottom-[50%] gap-y-2 rounded-100 h-full max-h-[184px] p-1 shadow-custom">
      {sideBarLinks.map((link) => (
        <button
          key={link.label}
          className="flex flex-col rounded-full items-center justify-center h-10 w-10 hover:bg-main-lightgrey transition ease-in-out duration-[400ms]"
        >
          <img
            className="grayscale hover:grayscale-0 transition ease-in-out duration-[400ms]"
            src={link.icon}
            alt={link.label}
          />
        </button>
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
