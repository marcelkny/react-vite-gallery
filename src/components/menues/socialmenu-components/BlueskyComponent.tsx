import { FaBluesky } from "react-icons/fa6";
import { SocialsMenuIconProps } from "../SocialsMenu";

export default function BlueskyComponent({ iconProps }: { iconProps: SocialsMenuIconProps }) {
    return <div className={iconProps.iconClass}><FaBluesky size={iconProps.size} color={iconProps.color}/></div>;
}