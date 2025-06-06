import { FaMastodon } from "react-icons/fa6";
import { SocialsMenuIconProps } from "../SocialsMenu";

export default function MastodonComponent({ iconProps }: { iconProps: SocialsMenuIconProps }) {
    return <div className={iconProps.iconClass}><FaMastodon size={iconProps.size} color={iconProps.color}/></div>;
}