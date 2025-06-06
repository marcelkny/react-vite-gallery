import { FaXTwitter } from "react-icons/fa6";
import { SocialsMenuIconProps } from "../SocialsMenu";

export default function XTwitterComponent({ iconProps }: { iconProps: SocialsMenuIconProps }) {
    return <div className={iconProps.iconClass}><FaXTwitter size={iconProps.size} color={iconProps.color}/></div>;
}