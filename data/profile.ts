// Single source of truth for Swarup Das's portfolio content.

export interface ExperienceItem {
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  url?: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  activities?: string;
  finalYearProject?: string;
  skills?: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  displayRole: string;
  statement: string;
  wcagUrl: string;
  stackSignature: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const profile: ProfileData = {
  name: "Swarup Das",
  role: "Senior Fullstack Engineer",
  displayRole: "FULLSTACK ENGINEER",
  statement:
    "Engineered for absolute simplicity and WCAG AAA 21:1 contrast.",
  wcagUrl: "https://www.w3.org/TR/WCAG22/",
  stackSignature: "SEMANTIC HTML · CORE CSS",
  location: "Kolkata, West Bengal, India",
  email: "swarup@theqa.in",
  links: {
    github: "https://github.com/swarupdas02",
    linkedin: "https://www.linkedin.com/in/swarup-das-ba3610197/",
    email: "mailto:swarup@theqa.in",
  },
  experience: [
    {
      role: "Senior Fullstack Engineer",
      company: "The QA (Quatred Advertising)",
      employmentType: "Full-time",
      period: "Jun 2023 – Present",
      location: "Kolkata, West Bengal, India · On-site",
      url: "https://theqa.in",
      skills: ["Tailwind CSS", "Mantine", "Full-Stack Development"],
    },
    {
      role: "Software Engineer",
      company: "HobSpace",
      employmentType: "Full-time",
      period: "Jul 2022 – Jun 2023",
      location: "Bengaluru, Karnataka, India",
      skills: ["Redux.js", "HTML", "Frontend & Web Engineering"],
    },
    {
      role: "Software Engineer",
      company: "Danfoss",
      employmentType: "Full-time",
      period: "May 2020 – Jul 2022",
      location: "Chennai, Tamil Nadu, India",
      skills: ["Docker", "YAML", "Software Engineering"],
    },
    {
      role: "Graduate Engineering Trainee",
      company: "Danfoss",
      employmentType: "Full-time",
      period: "May 2019 – May 2020",
      location: "Chennai, Tamil Nadu, India",
      skills: ["HTML", "C++"],
    },
  ],
  education: [
    {
      institution: "Vellore Institute of Technology",
      degree:
        "Master of Computer Applications (MCA) — Computer Programming, Specific Applications",
      period: "2017 – 2019",
      grade: "8.51",
      activities: "Music Club Board Member",
      finalYearProject:
        "Effective ML Algorithm to find and detect social media users that exhibit depression",
      skills: ["Git", "Machine Learning"],
    },
    {
      institution: "Vellore Institute of Technology",
      degree:
        "Bachelor of Computer Applications (BCA) — Computer Programming, Specific Applications",
      period: "2014 – 2017",
      grade: "8.95",
      activities: "Music Club",
      finalYearProject: "Location-based social networking website",
      skills: ["Web Development"],
    },
    {
      institution: "La Martiniere for Boys, Kolkata",
      degree: "Computer and Information Sciences and Support Services",
      period: "Jan 2000 – Jun 2014",
      activities:
        "Choir, editorial board member for The Chronicle, Dramatics and general tomfoolery",
    },
  ],
};

