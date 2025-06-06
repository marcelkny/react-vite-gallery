import { FaInstagram } from "react-icons/fa6";
import { SocialsMenuIconProps } from "../SocialsMenu";

export default function InstagramComponent({ iconProps }: { iconProps: SocialsMenuIconProps }) {
    return <div className={iconProps.iconClass}><FaInstagram size={iconProps.size} color={iconProps.color}/></div>;
}