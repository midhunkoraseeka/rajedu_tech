export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Management Quota",
    href: "/management-quota",
    children: [
      { label: "BTech / Engineering", href: "/management-quota/engineering", description: "Engineering, all branches" },
      { label: "MBBS / Medical", href: "/management-quota/medical", description: "Medical, private colleges" },
      { label: "BBA/MBA / Management", href: "/management-quota/management", description: "Management & PGDM" },
    ],
  },
  {
    label: "Colleges",
    href: "/colleges",
    children: [
      { label: "Hyderabad", href: "/colleges/hyderabad" },
      { label: "Bangalore", href: "/colleges/bangalore" },
      { label: "Chennai", href: "/colleges/chennai" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admission-process" },
      { label: "Get Guidance", href: "/enquiry" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Raj Edutech", href: "/about" },
      { label: "Why Raj Edutech", href: "/why-raj-edutech" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Values", href: "/about/values" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    heading: "Quick Links",
    links: [
      { label: "About Raj Edutech", href: "/about" },
      { label: "Why Raj Edutech", href: "/why-raj-edutech" },
      { label: "Admission Process", href: "/admission-process" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "BTech / Engineering", href: "/management-quota/engineering" },
      { label: "MBBS / Medical", href: "/management-quota/medical" },
      { label: "BBA/MBA / Management", href: "/management-quota/management" },
    ],
  },
  {
    heading: "Colleges",
    links: [
      { label: "All colleges", href: "/colleges" },
      { label: "Hyderabad", href: "/colleges/hyderabad" },
      { label: "Bangalore", href: "/colleges/bangalore" },
      { label: "Chennai", href: "/colleges/chennai" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Get admission guidance", href: "/enquiry" },
      { label: "Contact us", href: "/contact" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms & conditions", href: "/terms-and-conditions" },
    ],
  },
];
