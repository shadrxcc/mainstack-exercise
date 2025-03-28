export enum NavLinks {
  Home = "Home",
  Analytics = "Analytics",
  Revenue = "Revenue",
  CRM = "CRM",
  Apps = "Apps",
}

export const NavIcons: Record<NavLinks, string> = {
  [NavLinks.Home]: "/assets/home.svg",
  [NavLinks.Analytics]: "/assets/insert_chart.svg",
  [NavLinks.Revenue]: "/assets/payments.svg",
  [NavLinks.CRM]: "/assets/group.svg",
  [NavLinks.Apps]: "/assets/widgets.svg",
};
