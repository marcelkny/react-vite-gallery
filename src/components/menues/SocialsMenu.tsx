import { MdOutlineArrowCircleRight } from "react-icons/md";
import SocialsComponentSwitch from "./socialmenu-components/SocialComponentSwitch";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export interface SocialsMenuIconProps {
    iconClass: string;
    size: number;
    color: string;
}
export interface SocialsMenuComponentProps {
    outerDivClass: string;
    innerCircleClass: string;
    outerCircleClass: string;
    component?: string;
    caption?: string;
    target?: string;
}
export interface SocialsMenuClassProps {
    menuClass: string;
    componentProps: SocialsMenuComponentProps;
    iconProps: SocialsMenuIconProps;
}

const socialsMenuClass: SocialsMenuClassProps = {
    menuClass: "absolute z-50 rounded-[10px] w-[320px] lg:w-fit py-8 px-8 flex flex-col gap-8",
    componentProps: {
        outerDivClass: "flex items-center gap-4 text-3xl text-gray-300 hover:cursor-pointer hover:text-gray-100",
        outerCircleClass: "w-10 h-10 rounded-full bg-white hover:cursor-pointer",
        innerCircleClass: "w-8 h-8 top-1 left-1 border-2 border-[#374151] rounded-full bg-white relative",
    },
    iconProps: { iconClass: "absolute top-[3px] left-[3px]", size: 22, color: "#374151" },
};

export default function SocialsMenu() {
    const navigate = useNavigate();
    const navTo = useCallback(
        (target: string) => {
            navigate(target);
        },
        [navigate]
    );
    return (
        <div className={socialsMenuClass.menuClass}>
            <div className="bg-[rgba(38,45,56,0.8)] px-4 rounded-[10px] flex flex-col gap-8 py-4 backdrop-blur-[1px]">
                <SocialsComponentSwitch
                    componentProps={{
                        ...socialsMenuClass.componentProps,
                        component: "Soundcloud",
                        caption: "Soundcloud",
                        target: "https://soundcloud.com/leipzig-void",
                    }}
                    iconProps={socialsMenuClass.iconProps}
                />
                <SocialsComponentSwitch
                    componentProps={{
                        ...socialsMenuClass.componentProps,
                        component: "Instagram",
                        caption: "Instagram",
                        target: "https://www.instagram.com/leipzigvoid/",
                    }}
                    iconProps={socialsMenuClass.iconProps}
                />
                <SocialsComponentSwitch
                    componentProps={{
                        ...socialsMenuClass.componentProps,
                        component: "Youtube",
                        caption: "Youtube",
                        target: "https://www.youtube.com/@LEIPZIGVOID",
                    }}
                    iconProps={socialsMenuClass.iconProps}
                />
                <SocialsComponentSwitch
                    componentProps={{
                        ...socialsMenuClass.componentProps,
                        component: "Mastodon",
                        caption: "Mastodon",
                        target: "https://mastodon.social/@LeipzigVoid",
                    }}
                    iconProps={socialsMenuClass.iconProps}
                />
                <SocialsComponentSwitch
                    componentProps={{ ...socialsMenuClass.componentProps, component: "Bluesky", caption: "Bluesky", target: "https://bsky.app/profile/leipzigvoid.bsky.social" }}
                    iconProps={{...socialsMenuClass.iconProps, iconClass: "absolute top-[4px] left-[3px]"}}
                />
                {/* may be removed soon */}
                <SocialsComponentSwitch
                    componentProps={{ ...socialsMenuClass.componentProps, component: "XTwitter", caption: "X", target: "https://x.com/LeipzigVoid" }}
                    iconProps={socialsMenuClass.iconProps}
                />
            </div>
            <div className="bg-[rgba(38,45,56,0.8)] px-3 py-4 rounded-[10px] text-2xl text-gray-200 hover:cursor-pointer hover:text-white flex gap-4 items-center backdrop-blur-[1px]" onClick={()=>navTo("/about")}>
                <div>
                    <MdOutlineArrowCircleRight size={50} />
                </div>
                <div>About</div>
            </div>
        </div>
    );
}
