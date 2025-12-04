import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "1",
    title: "Annual Youth Leadership Summit",
    date: "2025-03-15",
    time: "9:00 AM - 5:00 PM",
    location: "Phnom Penh Conference Center",
    description:
      "Join us for our annual summit bringing together young leaders, mentors, and community partners to share insights and build connections.",
    image: "/images/events/summit.jpg",
    isUpcoming: true,
    registrationLink: "/events/register/leadership-summit",
  },
  {
    id: "2",
    title: "Digital Skills Workshop Series",
    date: "2025-02-20",
    time: "2:00 PM - 5:00 PM",
    location: "YAD Training Center",
    description:
      "A hands-on workshop series covering essential digital skills including web development, digital marketing, and online collaboration tools.",
    image: "/images/events/workshop.jpg",
    isUpcoming: true,
    registrationLink: "/events/register/digital-workshop",
  },
  {
    id: "3",
    title: "Community Outreach Day",
    date: "2025-01-25",
    time: "8:00 AM - 12:00 PM",
    location: "Boeung Salang Community",
    description:
      "Join our residents and volunteers for a day of community service, education activities, and family support in local slum communities.",
    image: "/images/events/outreach.jpg",
    isUpcoming: true,
    registrationLink: "/events/register/outreach-day",
  },
  {
    id: "4",
    title: "Alumni Networking Night",
    date: "2024-12-10",
    time: "6:00 PM - 9:00 PM",
    location: "Rosewood Phnom Penh",
    description:
      "An evening of networking and celebration bringing together YAD alumni, current residents, and supporters.",
    image: "/images/events/networking.jpg",
    isUpcoming: false,
  },
  {
    id: "5",
    title: "End of Year Celebration",
    date: "2024-11-20",
    time: "4:00 PM - 8:00 PM",
    location: "YAD Dormitory",
    description:
      "Celebrating the achievements of our residents and the impact of our programs throughout the year.",
    image: "/images/events/celebration.jpg",
    isUpcoming: false,
  },
];
