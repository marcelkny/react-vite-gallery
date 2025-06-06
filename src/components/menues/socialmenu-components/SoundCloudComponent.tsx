import { FaSoundcloud } from "react-icons/fa6";
import { SocialsMenuIconProps } from "../SocialsMenu";

export default function SoundCloudComponent({ iconProps }: { iconProps: SocialsMenuIconProps }) {
    return <div className={iconProps.iconClass}><FaSoundcloud size={iconProps.size} color={iconProps.color}/></div>;
}