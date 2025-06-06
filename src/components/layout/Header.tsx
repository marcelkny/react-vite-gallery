import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
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
        <div className="bg-gray-700 flex justify-between items-center text-gray-300 px-4 py-2 hover:cursor-pointer hover:text-gray-100 relative z-50" onClick={() => navTo("/")}>
            <div className="mx-auto w-full lg:w-[40%] xl:w-[20%] flex justify-between items-center">
                <div className="w-[30px] h-[3px] bg-gray-300"></div>
                <div className="font-medium">
                {locationPath === "/" ? <span>L E I P Z I G : V O I D</span> : <span>BACK</span>}
                </div>
                <div className="w-[30px] h-[3px] bg-gray-300"></div>
            </div>
        </div>
    );
}
