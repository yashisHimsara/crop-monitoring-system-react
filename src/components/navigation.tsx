import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <header className="flex items-center justify-between bg-white p-4 shadow-md" id="header">
                <div className="cursor-pointer text-xl" id="header-toggle">
                    <i className="bx bx-menu"></i>
                </div>
            </header>
            <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white" id="nav-bar">
                <nav className="flex flex-col h-full">
                    <div>
                        <a href="#" className="flex items-center px-6 py-4 text-white hover:bg-gray-700">
                            <i className="bx bx-leaf text-2xl"></i>
                            <span className="ml-4 text-lg font-semibold">Green Shadow</span>
                        </a>

                        <div className="mt-4">
                            {/*<a id="UserBtn"*/}
                            {/*   className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700">*/}
                            {/*    <i className="bx bx-user-circle text-xl"></i>*/}
                            {/*    <span className="ml-4">Users</span>*/}
                            {/*</a>*/}

                            {/*<a id="vehicleBtn"*/}
                            {/*   className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700">*/}
                            {/*    <i className="bx bx-car text-xl"></i>*/}
                            {/*    <span className="ml-4">Vehicle</span>*/}
                            {/*</a>*/}

                            {/*<a id="staffBtn"*/}
                            {/*   className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700">*/}
                            {/*    <i className="bx bx-user text-xl"></i>*/}
                            {/*    <span className="ml-4">Staff</span>*/}
                            {/*</a>*/}

                            {/*<a id="fieldBtn"*/}
                            {/*   className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700">*/}
                            {/*    <i className="bx bx-square text-xl"></i>*/}
                            {/*    <span className="ml-4">Fields</span>*/}
                            {/*</a>*/}

                            {/*<a id="monitoringLogBtn"*/}
                            {/*   className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700">*/}
                            {/*    <i className="bx bx-detail text-xl"></i>*/}
                            {/*    <span className="ml-4">Monitoring Log</span>*/}
                            {/*</a>*/}

                            {/*<a id="equipmentBtn"*/}
                            {/*   className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700">*/}
                            {/*    <i className="bx bx-wrench text-xl"></i>*/}
                            {/*    <span className="ml-4">Equipments</span>*/}
                            {/*</a>*/}

                            {/*<a id="cropBtn"*/}
                            {/*   className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700">*/}
                            {/*    <i className="bx bxs-florist text-xl"></i>*/}
                            {/*    <span className="ml-4">Crops</span>*/}
                            {/*</a>*/}

                            <Link to='/vehicle'
                                  className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                User
                            </Link>

                            <Link to='/vehicle'
                                  className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                Vehicle
                            </Link>

                            <Link to='/staff'
                                  className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                Staff
                            </Link>

                            <Link to='/field'
                                  className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                Field
                            </Link>

                            <Link to='/monitoringLog'
                                  className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                                  >
                                Monitoring Log
                            </Link>

                            <Link to='/equipment'
                                  className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                                  >
                                Equipments
                            </Link>

                            <Link to='/crop'
                                  className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                <i className="bx bxs-florist text-xl"></i>
                                Crops
                            </Link>
                        </div>
                    </div>

                    <a
                        id="signOutBtn"
                        className="mt-auto flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        <i className="bx bx-log-out text-xl"></i>
                        <span className="ml-4">SignOut</span>
                    </a>
                </nav>
            </div>

        </>
    )
}