import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const navTo = useCallback(
        (target: string) => {
            navigate(target);
        },
        [navigate]
    );
    const location = useLocation();
    const locationPath = location.pathname;
    return (
        <div className="bg-gray-700 text-gray-300 px-4 py-2 relative z-50 w-full">
            <div
                className="mx-auto w-full lg:w-[40%] flex justify-between items-center hover:cursor-pointer hover:text-gray-100"
                onClick={() => navTo("/")}
            >
                <div className="w-[30px] h-[3px] bg-gray-300"></div>
                <div className="font-medium">
                    {locationPath === "/" ? <span>© 2025 L E I P Z I G : V O I D</span> : <span>BACK</span>}
                </div>
                <div className="w-[30px] h-[3px] bg-gray-300"></div>
            </div>
            <div className="w-full text-xs pt-4 flex flex-col gap-2">
                <div className="w-full flex justify-evenly">
                    <div className="hover:cursor-pointer hover:text-gray-100" onClick={() => navTo("/privacy")}>
                        PRIVACY
                    </div>
                    <div className="hover:cursor-pointer hover:text-gray-100" onClick={() => navTo("/imprint")}>
                        IMPRINT
                    </div>
                </div>
            </div>
        </div>
    );
}
