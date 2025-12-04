export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Programs",
    href: "/programs",
    items: [
      {
        title: "Dormitory and Youth Training Program",
        href: "/programs/dormitory-youth-training",
      },
      {
        title: "Digital Innovation & IT Literacy",
        href: "/programs/digital-innovation",
      },
      {
        title: "Slum Community Education Initiative",
        href: "/programs/slum-community-education",
      },
    ],
  },
  { title: "Events", href: "/events" },
  {
    title: "About Us",
    href: "#",
    items: [
      { title: "Governance", href: "/about/governance" },
      { title: "Residents", href: "/about/residents" },
      { title: "Alumni", href: "/about/alumni" },
    ],
  },
  { title: "Our Support", href: "/partners" },
];

export const footerNavigation = {
  about: [
    { title: "Our Story", href: "/#story" },
    { title: "Mission", href: "/#mission" },
    { title: "Vision", href: "/#vision" },
    { title: "Core Values", href: "/#core-values" },
    { title: "Goals & Objectives", href: "/#goals" },
    { title: "Governance", href: "/about/governance" },
  ],
  getInvolved: [
    { title: "Donate", href: "/donate" },
    { title: "Volunteer", href: "/donate#volunteer" },
    { title: "Alumni Network", href: "/about/alumni" },
  ],
  resources: [
    { title: "Program Details", href: "/programs" },
    { title: "Impact Reports", href: "/#impact" },
  ],
};
