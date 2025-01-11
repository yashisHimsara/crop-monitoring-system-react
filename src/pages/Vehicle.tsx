export function Vehicle() {
    return(
        <>

            <div className="mb-4">
                <label htmlFor="licensePlateNumberField" className="block text-sm font-medium text-gray-700">License
                    Plate Number</label>
                <input type="text"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       id="licensePlateNumberField"/>
            </div>

            <div className="mb-4">
                <label htmlFor="vehicleCategoryField" className="block text-sm font-medium text-gray-700">Vehicle
                    Category</label>
                <input type="text"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       id="vehicleCategoryField"/>
            </div>

            <div className="mb-4">
                <label htmlFor="fuelTypeField" className="block text-sm font-medium text-gray-700">Fuel Type</label>
                <input type="text"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       id="fuelTypeField"/>
            </div>

            <div className="mb-4">
                <label htmlFor="vehicleStatusSelect" className="block text-sm font-medium text-gray-700">Vehicle
                    Status</label>
                <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    id="vehicleStatusSelect">
                    <option selected>Select</option>
                    <option value="AVAILABLE">AVAILABLE</option>
                    <option value="UNAVAILABLE">UNAVAILABLE</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="remarksField" className="block text-sm font-medium text-gray-700">Remarks</label>
                <input type="text"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       id="remarksField"/>
            </div>

            <div className="mb-4">
                <label htmlFor="vehicleIdField" className="block text-sm font-medium text-gray-700">Vehicle ID</label>
                <input type="text"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       id="vehicleIdField" placeholder="Only add for delete and update"/>
            </div>

            <div className="flex justify-start space-x-4 mt-6 mb-8">
                <button id="saveVehicleBtn" type="button"
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Save
                </button>
                <button id="updateVehicleBtn" type="button"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Update
                </button>
                <button id="deleteVehicleBtn" type="button"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete
                </button>
                <button id="clearVehicleBtn" type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Clear
                </button>
            </div>

            <table id="vehicleTable" className="min-w-full divide-y divide-gray-200 table-auto border-collapse">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Vehicle ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">License Plate Number</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Vehicle Category</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Fuel Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Vehicle Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
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
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                </tr>
                </tbody>
            </table>


        </>
    )
}