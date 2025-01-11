export function Staff(){
    return(
        <>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstNameField" className="block text-sm font-medium text-gray-700">First
                        Name</label>
                    <input type="text" id="firstNameField"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>

                <div>
                    <label htmlFor="roleSelect" className="block text-sm font-medium text-gray-700">Role</label>
                    <select id="roleSelect"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <option selected>Choose Role</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="SCIENTIST">SCIENTIST</option>
                        <option value="OTHER">OTHER</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="lastNameField" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastNameField"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>

                <div>
                    <label htmlFor="vehicleField" className="block text-sm font-medium text-gray-700">Vehicle</label>
                    <input type="text" id="vehicleField" placeholder="Optional when adding staff Member"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="designationField"
                           className="block text-sm font-medium text-gray-700">Designation</label>
                    <input type="text" id="designationField"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>

                <div>
                    <label htmlFor="addressField1" className="block text-sm font-medium text-gray-700">AddressLine
                        1</label>
                    <input type="text" id="addressField1"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="genderSelect" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select id="genderSelect"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <option selected>Choose Gender</option>
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="addressField2" className="block text-sm font-medium text-gray-700">AddressLine
                        2</label>
                    <input type="text" id="addressField2"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
            </div>

            <div className="flex justify-start space-x-4 mt-6">
                <button id="saveStaffMember" type="button"
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Save
                </button>
                <button id="updateStaffMember" type="button"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Update
                </button>
                <button id="deleteStaffMember" type="button"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete
                </button>
                <button id="clearStaffMember" type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Clear
                </button>
            </div>

            <table id="staffTable" className="table-auto w-full border-collapse border border-gray-300 mt-6">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Staff ID</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Gender</th>
                    <th className="border border-gray-300 px-4 py-2">Designation</th>
                    <th className="border border-gray-300 px-4 py-2">Role</th>
                    <th className="border border-gray-300 px-4 py-2">Joined date</th>
                    <th className="border border-gray-300 px-4 py-2">Vehicle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                </tr>
                </tbody>
            </table>


        </>
    )
}