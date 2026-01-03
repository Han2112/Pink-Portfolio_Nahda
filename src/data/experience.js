import nahdaImg from '../assets/nahda.jpeg';
import daskom from '../assets/daskom.png';

export const experienceData = [
  {
    id: 1,
    date: "2023 - 2025",
    icon: daskom, 
    role: "Practicum Assistance",
    company: "Basic Computing Laboratory",
    description: "Leading the frontend team in migrating legacy code to modern React hooks ....",
    fullDescription: "Leading the frontend team in migrating legacy code to modern React hooks. We improved the core web vitals by 40% and implemented a new design system. I also mentored 2 junior developers during this period.",
    gallery: [
       nahdaImg,
       "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=60",
       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=60"
    ],
    borderColor: "var(--color-dark)"
  },
  {
    id: 2,
    date: "2023 - 2024",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    role: "Web Design Intern",
    company: "Creative Agency",
    description: "Collaborated with UX researchers to design wireframes and prototypes for clients.",
    fullDescription: "Worked closely with the UI/UX team to translate wireframes into interactive high-fidelity prototypes using Figma. Participated in user testing sessions and iterated designs based on feedback.",
    gallery: [
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=60"
    ],
    borderColor: "var(--color-medium)"
  },
  {
    id: 3,
    date: "2022 - 2023",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    role: "Freelance Web Developer",
    company: "Self Employed",
    description: "Built portfolio websites for local SMEs and improved their digital presence.",
    fullDescription: "Successfully delivered over 5 website projects for local businesses including a coffee shop and a fashion boutique. Managed the entire lifecycle from requirement gathering to deployment.",
    gallery: [],
    borderColor: "var(--color-light)"
  }
];