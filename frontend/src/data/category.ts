import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaBrush } from "react-icons/fa6";
import { FaBucket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";

export const categories = [
  { name: "cleaning", icon: FaBucket, color: "#b12fde" },
  { name: "repair", icon: FaScrewdriverWrench, color: "#ecbb3a" },
  { name: "painting", icon: FaBrush, color: "#e23e40" },
  { name: "shifting", icon: FaTruck, color: "#059e96" },
  { name: "plumbing", icon: PiPipeFill, color: "#ea9319" },
  { name: "electric", icon: FaLightbulb, color: "#1f71c5" },
];
