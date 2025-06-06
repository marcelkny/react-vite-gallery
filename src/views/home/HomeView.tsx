import LeipzigVoidLogo from "../../components/images/LeipzigVoidLogo";
import SocialsMenu from "../../components/menues/SocialsMenu";

export default function HomeView() {
    return <div className="w-full lg:w-3/4 h-full py-4 mx-auto flex flex-col items-center gap-4 bg-gray-700">
        <SocialsMenu />
        <LeipzigVoidLogo />
    </div>
}