import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaBrush } from "react-icons/fa6";
import { FaBucket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";
import { BsQuestionCircle } from "react-icons/bs";

export const iconMap = {
  cleaning: FaBucket,
  repair: FaScrewdriverWrench,
  painting: FaBrush,
  shifting: FaTruck,
  plumbing: PiPipeFill,
  electric: FaLightbulb,
  defaultIcon: BsQuestionCircle,
};
