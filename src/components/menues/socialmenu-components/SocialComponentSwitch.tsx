import { SocialsMenuComponentProps, SocialsMenuIconProps } from "../SocialsMenu";
import BlueskyComponent from "./BlueskyComponent";
import InstagramComponent from "./InstagramComponent";
import MastodonComponent from "./MastodonComponent";
import SoundCloudComponent from "./SoundCloudComponent";
import XTwitterComponent from "./XTwitterComponent";
import YoutubeComponent from "./YoutubeComponent";

export default function SocialsComponentSwitch({ componentProps, iconProps }: { componentProps: SocialsMenuComponentProps; iconProps: SocialsMenuIconProps }) {
    switch (componentProps.component) {
        case "Mastodon":
            return (
                <a href={componentProps.target} target="_blank">
                    <div className={componentProps.outerDivClass}>
                        <div className={componentProps.outerCircleClass}>
                            <div className={componentProps.innerCircleClass}>
                                <MastodonComponent iconProps={iconProps} />
                            </div>
                        </div>
                        <div>{componentProps.caption}</div>
                    </div>
                </a>
            );
        case "Soundcloud":
            return (
                <a href={componentProps.target} target="_blank">
                    <div className={componentProps.outerDivClass}>
                        <div className={componentProps.outerCircleClass}>
                            <div className={componentProps.innerCircleClass}>
                                <SoundCloudComponent iconProps={iconProps} />
                            </div>
                        </div>
                        <div>{componentProps.caption}</div>
                    </div>
                </a>
            );
            case "Instagram":
                return (
                    <a href={componentProps.target} target="_blank">
                        <div className={componentProps.outerDivClass}>
                            <div className={componentProps.outerCircleClass}>
                                <div className={componentProps.innerCircleClass}>
                                    <InstagramComponent iconProps={iconProps} />
                                </div>
                            </div>
                            <div>{componentProps.caption}</div>
                        </div>
                    </a>
                );
        case "Bluesky":
            return (
                <a href={componentProps.target} target="_blank">
                    <div className={componentProps.outerDivClass}>
                        <div className={componentProps.outerCircleClass}>
                            <div className={componentProps.innerCircleClass}>
                                <BlueskyComponent iconProps={iconProps} />
                            </div>
                        </div>
                        <div>{componentProps.caption}</div>
                    </div>
                </a>
            );
        case "XTwitter":
            return (
                <a href={componentProps.target} target="_blank">
                    <div className={componentProps.outerDivClass}>
                        <div className={componentProps.outerCircleClass}>
                            <div className={componentProps.innerCircleClass}>
                                <XTwitterComponent iconProps={iconProps} />
                            </div>
                        </div>
                        <div>{componentProps.caption}</div>
                    </div>
                </a>
            );
        case "Youtube":
            return (
                <a href={componentProps.target} target="_blank">
                    <div className={componentProps.outerDivClass}>
                        <div className={componentProps.outerCircleClass}>
                            <div className={componentProps.innerCircleClass}>
                                <YoutubeComponent iconProps={iconProps} />
                            </div>
                        </div>
                        <div>{componentProps.caption}</div>
                    </div>
                </a>
            );
        default:
            return <div></div>;
    }
}
