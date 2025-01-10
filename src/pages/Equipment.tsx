export function Equipment(){
    return(
        <>

            <div className="mb-3">
                <label htmlFor="equipmentNameField" className="block text-sm font-medium text-gray-700">Equipment
                    Name</label>
                <input type="text" id="equipmentNameField"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-3">
                <label htmlFor="equipmentTypeSelect" className="block text-sm font-medium text-gray-700">Equipment
                    Type</label>
                <select id="equipmentTypeSelect"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option selected>Select</option>
                    <option value="ELECTRICAL">ELECTRICAL</option>
                    <option value="MECHANICAL">MECHANICAL</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="equipmentStatusSelect" className="block text-sm font-medium text-gray-700">Equipment
                    Status</label>
                <select id="equipmentStatusSelect"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option selected>Select</option>
                    <option value="AVAILABLE">AVAILABLE</option>
                    <option value="UNAVAILABLE">UNAVAILABLE</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="equipmentStaffIdField" className="block text-sm font-medium text-gray-700">Equipment
                    Staff Id</label>
                <input type="text" id="equipmentStaffIdField"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-3">
                <label htmlFor="equipmentIdField" className="block text-sm font-medium text-gray-700">Equipment
                    ID</label>
                <input type="text" id="equipmentIdField" placeholder="Only add for delete and update"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="flex justify-start space-x-4 mt-4 mb-5">
                <button id="saveEquipmentBtn" type="button"
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Save
                </button>
                <button id="updateEquipmentBtn" type="button"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Update
                </button>
                <button id="deleteEquipmentBtn" type="button"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete
                </button>
                <button id="clearEquipmentBtn" type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Clear
                </button>
            </div>

            <table id="EquipmentTable" className="table-auto w-full border-collapse border border-gray-200 text-left">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-200 px-4 py-2">Equipment ID</th>
                    <th className="border border-gray-200 px-4 py-2">Equipment Name</th>
                    <th className="border border-gray-200 px-4 py-2">Equipment Type</th>
                    <th className="border border-gray-200 px-4 py-2">Equipment Status</th>
                    <th className="border border-gray-200 px-4 py-2">Equipment Staff Id</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                </tr>
                <tr>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                </tr>
                </tbody>
            </table>


        </>
    );
}