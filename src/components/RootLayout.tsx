import { Navigation } from "../components/navigation.tsx";
import { Outlet } from "react-router";

export function RootLayout() {
    return (
        <div className="flex h-screen">
            {/* Left Side Navigation */}
            <aside className="w-64 bg-gray-800 text-white">
                <Navigation />
            </aside>

            {/* Right Side Main Content */}
            <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}
