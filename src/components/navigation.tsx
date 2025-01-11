import { Link } from "react-router";

export function Navigation() {
    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white">
            <nav className="flex flex-col h-full">
                {/* Logo and Brand */}
                <div className="flex items-center px-6 py-4 bg-gray-900">
                    <i className="bx bx-leaf text-2xl"></i>
                    <span className="ml-4 text-lg font-semibold">Green Shadow</span>
                </div>

                {/* Navigation Links */}
                <div className="mt-4 flex-grow">
                    <Link
                        to="/user"
                        className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bx-user-circle text-xl"></i>
                        <span className="ml-4">User</span>
                    </Link>

                    <Link
                        to="/vehicle"
                        className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bx-car text-xl"></i>
                        <span className="ml-4">Vehicle</span>
                    </Link>

                    <Link
                        to="/staff"
                        className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bx-user text-xl"></i>
                        <span className="ml-4">Staff</span>
                    </Link>

                    <Link
                        to="/field"
                        className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bx-square text-xl"></i>
                        <span className="ml-4">Field</span>
                    </Link>

                    <Link
                        to="/monitoringLog"
                        className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bx-detail text-xl"></i>
                        <span className="ml-4">Monitoring Log</span>
                    </Link>

                    <Link
                        to="/equipment"
                        className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bx-wrench text-xl"></i>
                        <span className="ml-4">Equipments</span>
                    </Link>

                    <Link
                        to="/crop"
                        className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bxs-florist text-xl"></i>
                        <span className="ml-4">Crops</span>
                    </Link>
                </div>

                {/* Sign Out */}
                <div className="mt-auto">
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bx-log-out text-xl"></i>
                        <span className="ml-4">Sign Out</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}
