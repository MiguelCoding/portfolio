import { FaGithub } from "react-icons/fa";
import {FiEyeOff} from "react-icons/fi";
import {FcAndroidOs} from "react-icons/fc";


export const ProjectList = [
  {
    id: 1,
    icon: <FaGithub color="#0a1930" size={22} />,
    heading: "Autocomplete AI",
    text: "Using OpenAI autocomplete Davinci algorithm, the website completes an user backstory for a dungeons and dragons Character.",
    webAddress: "https://www.google.com/maps",
  },
  {
    id: 2,
    icon: <FcAndroidOs color="#0a1930" size={22} />,
    heading: "Android development",
    text: "Hangman game developed for a senior advanced mobile development course at Oregon State University.",
    webAddress: "/projectsExtended",
  },
  {
    id: 3,
    icon: <FiEyeOff color="#0a1930" size={22} />,
    heading: "To be updated.",
    text: "Robotic project in development using nvidia Jetson technology.",
    webAddress: "https://www.google.com/maps",
  },
  {
    id: 4,
    icon: <FiEyeOff color="#0a1930" size={22} />,
    heading: "To be updated.",
    text: "Point cloud simulation project in development.",
    webAddress: "https://www.google.com/maps",
  },
];
