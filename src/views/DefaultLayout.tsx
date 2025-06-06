import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
export default function DefaultLayout() {
    return (
        <div className="flex flex-col h-screen w-full justify-between bg-gray-700 select-none margin-0">
            <header>
                <Header />
            </header>
            <main className="w-full flex-shrink-0 flex-grow mx-auto overflow-x-hidden overlow-y-scroll bg-gray-700">

                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
