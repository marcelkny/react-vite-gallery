import { FaYoutube } from "react-icons/fa6";
import { SocialsMenuIconProps } from "../SocialsMenu";

export default function YoutubeComponent({ iconProps }: { iconProps: SocialsMenuIconProps }) {
    return (
        <div className={iconProps.iconClass}>
            <FaYoutube size={iconProps.size} color={iconProps.color} />
        </div>
    );
}
