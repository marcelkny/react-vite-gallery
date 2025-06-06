import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function BackHomeLink() {
    const navigate = useNavigate();
    const navTo = useCallback(
        (target: string) => {
            navigate(target);
        },
        [navigate]
    );
    return (
        <div
            className="bg-gray-700 flex justify-between items-center text-gray-300 px-4 hover:cursor-pointer hover:text-gray-100"
            onClick={() => navTo("/")}
        >
            <div className="mx-auto w-full lg:w-[40%] xl:w-[20%] flex justify-between items-center">
                <div className="w-[30px] h-[3px] bg-gray-300"></div>
                <div className="font-medium">BACK</div>
                <div className="w-[30px] h-[3px] bg-gray-300"></div>
            </div>
        </div>
    );
}
