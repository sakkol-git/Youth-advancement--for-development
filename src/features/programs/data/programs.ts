import type { Program } from "@/types";

export const programs: Program[] = [
  {
    id: "1",
    slug: "dormitory-youth-training",
    title: "Dormitory and Youth Training Program (DYTP)",
    shortTitle: "DYTP",
    description:
      "Providing safe housing, university education opportunities, and comprehensive youth development training for underprivileged students.",
    longDescription: `The Dormitory and Youth Training Program (DYTP) is our flagship initiative designed to support 
underprivileged Cambodian youth in pursuing higher education. We provide:

• Safe and supportive dormitory accommodation in Phnom Penh
• University scholarship support and academic guidance
• Leadership and personal development training
• English language and digital literacy courses
• Service-learning opportunities in local communities
• Career preparation and professional mentorship

Through DYTP, students not only receive the support they need to complete their university education but also 
develop into well-rounded individuals equipped with the skills and values to become future leaders in their communities.`,
    icon: "Home",
    image: "/images/programs/dytp.jpg",
    features: [
      "Safe dormitory housing",
      "University scholarship support",
      "Leadership training",
      "English language courses",
      "Digital literacy training",
      "Service-learning opportunities",
      "Career mentorship",
      "Personal development workshops",
    ],
  },
  {
    id: "2",
    slug: "digital-innovation",
    title: "Empowering Youth through Digital Innovation & IT Literacy",
    shortTitle: "Digital Innovation",
    description:
      "Equipping young Cambodians with essential digital skills and technological knowledge to thrive in the modern economy.",
    longDescription: `Our Digital Innovation & IT Literacy program aims to bridge the digital divide by providing 
comprehensive technology education to Cambodian youth. The program includes:

• Basic to advanced computer skills training
• Web development and programming fundamentals
• Digital marketing and social media literacy
• Online safety and digital citizenship
• Introduction to emerging technologies
• Practical project-based learning experiences

By empowering youth with digital skills, we're preparing them for the jobs of tomorrow while enabling them 
to leverage technology for positive community impact.`,
    icon: "Laptop",
    image: "/images/programs/digital.jpg",
    features: [
      "Computer skills training",
      "Web development basics",
      "Programming fundamentals",
      "Digital marketing",
      "Online safety education",
      "Project-based learning",
      "Technology workshops",
      "Industry mentorship",
    ],
  },
  {
    id: "3",
    slug: "slum-community-education",
    title: "Slum Community Education Initiative",
    shortTitle: "Community Education",
    description:
      "Bringing quality education and essential support services directly to underserved slum communities in Phnom Penh.",
    longDescription: `The Slum Community Education Initiative extends our reach to Cambodia's most vulnerable 
populations by providing education and support services directly in slum communities. Our approach includes:

• Free English language classes for children and adults
• Basic literacy and numeracy education
• Health awareness and hygiene education
• Life skills and financial literacy workshops
• Community development activities
• Family support and counseling services

Our DYTP residents actively participate as teaching assistants and mentors, creating a unique 
service-learning model that benefits both the students and the community members they serve.`,
    icon: "Users",
    image: "/images/programs/community.jpg",
    features: [
      "Free English classes",
      "Literacy education",
      "Health awareness",
      "Life skills training",
      "Financial literacy",
      "Family support services",
      "Community activities",
      "Youth mentorship",
    ],
  },
];
