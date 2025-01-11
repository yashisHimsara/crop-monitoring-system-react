export function Monitoring(){
    return(
        <>

            <div className="mb-4">
                <label htmlFor="MonitoringLogDateField" className="block text-sm font-medium text-gray-700">Monitoring
                    Log Date</label>
                <input type="date" id="MonitoringLogDateField"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-4">
                <label htmlFor="MonitoringLogDetailsField" className="block text-sm font-medium text-gray-700">Monitoring
                    Log Details</label>
                <textarea id="MonitoringLogDetailsField" rows="3"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="MonitoringLogFieldIdField" className="block text-sm font-medium text-gray-700">Monitoring
                    Log Field Id</label>
                <input type="text" id="MonitoringLogFieldIdField"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Optional"/>
            </div>

            <div className="mb-4">
                <label htmlFor="MonitoringLogStaffId" className="block text-sm font-medium text-gray-700">Monitoring Log
                    Staff Id</label>
                <input type="text" id="MonitoringLogStaffId"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Optional"/>
            </div>

            <div className="mb-4">
                <label htmlFor="monitoringLogIdField" className="block text-sm font-medium text-gray-700">Log ID</label>
                <input type="text" id="monitoringLogIdField"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Only add for delete and update"/>
            </div>

            <div className="flex justify-start space-x-4 mt-6 mb-8">
                <button id="saveMonitoringLogBtn" type="button"
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Save
                </button>
                <button id="updateMonitoringLogBtn" type="button"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Update
                </button>
                <button id="deleteMonitoringLogBtn" type="button"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete
                </button>
                <button id="clearMonitoringLogBtn" type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Clear
                </button>
            </div>

            <table id="MonitoringLogTable" className="min-w-full divide-y divide-gray-200 table-auto border-collapse">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Log ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Monitoring Log Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Monitoring Log Details</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Monitoring Log Field</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Monitoring Log Staff</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                </tr>
                </tbody>
            </table>

        </>
    )
}