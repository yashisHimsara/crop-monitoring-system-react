import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CountCard from "../components/CountCard";
import Chart from "../components/Chart";

export default function Dashboard() {
    // Fetch counts from Redux store
    const totalCrops = useSelector((state: RootState) => state.crop.length);
    const totalLogs = useSelector((state: RootState) => state.log.length);
    const totalStaff = useSelector((state: RootState) => state.staff.length);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                    <p className="text-gray-600 text-lg">Welcome to the Crop Monitoring Dashboard</p>
                </div>

                {/* Count Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <CountCard
                        title="Total Crops"
                        count={totalCrops}
                        color="bg-gradient-to-r from-green-500 to-green-600"
                    />
                    <CountCard
                        title="Total Logs"
                        count={totalLogs}
                        color="bg-gradient-to-r from-blue-500 to-blue-600"
                    />
                    <CountCard
                        title="Total Staff"
                        count={totalStaff}
                        color="bg-gradient-to-r from-yellow-500 to-yellow-600"
                    />
                </div>

                {/* Chart Section */}
                <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Crop Activity Overview</h2>
                    <Chart />
                </div>

                {/* Quick Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                        <div className="space-y-3">
                            {totalLogs > 0 ? (
                                <p className="text-gray-600">You have {totalLogs} log entries recorded</p>
                            ) : (
                                <p className="text-gray-600">No recent activity recorded</p>
                            )}
                            {totalCrops > 0 && (
                                <p className="text-gray-600">{totalCrops} crops are currently being monitored</p>
                            )}
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Staff Overview</h2>
                        <div className="space-y-3">
                            {totalStaff > 0 ? (
                                <p className="text-gray-600">You have {totalStaff} staff members registered</p>
                            ) : (
                                <p className="text-gray-600">No staff members registered yet</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}