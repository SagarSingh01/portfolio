import type { IconType } from "react-icons";
import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

type Skill = {
  id: number;
  name: string;
  level: string;
  percentage: number;
  color: string;
  icon: IconType;
}

export const Skills: Skill[] = [
  {
    id: 1,
    name: "HTML",
    level: "Advanced",
    percentage: 95,
    color: "#E34F26",
    icon: FaHtml5
  },

  {
    id: 2,
    name: "CSS",
    level: "Advanced",
    percentage: 92,
    color: "#1572B6",
    icon: FaCss3Alt
  },

  {
    id: 3,
    name: "JavaScript",
    level: "Advanced",
    percentage: 90,
    color: "#F7DF1E",
    icon: FaJs
  },

  {
    id: 4,
    name: "React",
    level: "Advanced",
    percentage: 90,
    color: "#61DAFB",
    icon: FaReact
  },

  {
    id: 5,
    name: "TypeScript",
    level: "Intermediate",
    percentage: 75,
    color: "#3178C6",
    icon: SiTypescript
  },

  {
    id: 6,
    name: "Tailwind CSS",
    level: "Advanced",
    percentage: 88,
    color: "#38BDF8",
    icon: SiTailwindcss
  },

  {
    id: 7,
    name: "Git & GitHub",
    level: "Intermediate",
    percentage: 78,
    color: "#fff",
    icon: FaGithub
  }
];

export default Skills