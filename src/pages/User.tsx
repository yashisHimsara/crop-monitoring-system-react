export function User() {
    return(
        <>

            <div className="mb-4">
                <label htmlFor="UserEmailField2" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="UserEmailField2"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-4">
                <label htmlFor="UserPasswordField2" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="UserPasswordField2"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-4">
                <label htmlFor="UserRoleSelect" className="block text-sm font-medium text-gray-700">Role</label>
                <select id="UserRoleSelect"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value="ADMIN">ADMIN</option>
                    <option value="MANAGER">MANAGER</option>
                    <option value="SCIENTIST">SCIENTIST</option>
                </select>
            </div>

            <div className="mb-4">
                <button id="updateUserBtn" type="button"
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Update User Details
                </button>
            </div>

            <table id="UserTable" className="min-w-full divide-y divide-gray-200 table-auto border-collapse">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Role</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                    <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                </tr>
                </tbody>
            </table>


        </>
    )
}