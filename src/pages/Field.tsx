export function Field(){
    return(
        <>

            <div className="mb-4">
                <label htmlFor="FieldNameField" className="block text-sm font-medium text-gray-700">Field Name</label>
                <input type="text" id="FieldNameField"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-4">
                <label htmlFor="FieldLocationField" className="block text-sm font-medium text-gray-700">Field
                    Location</label>
                <input type="text" id="FieldLocationField"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-4">
                <label htmlFor="extentSizeField" className="block text-sm font-medium text-gray-700">Extent Size Of The
                    Field ( km<sup>2</sup> )</label>
                <input type="number" id="extentSizeField"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-4">
                <label htmlFor="fieldImage1" className="block text-sm font-medium text-gray-700">Add Field Image
                    1</label>
                <input type="file" id="fieldImage1"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-4">
                <label htmlFor="fieldImage2" className="block text-sm font-medium text-gray-700">Add Field Image
                    2</label>
                <input type="file" id="fieldImage2"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="mb-4">
                <label htmlFor="FieldIdField" className="block text-sm font-medium text-gray-700">Field ID</label>
                <input type="text" id="FieldIdField" placeholder="Only add for delete and update"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>

            <div className="flex justify-start space-x-4 mt-4 mb-6">
                <button id="saveFieldBtn" type="button"
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Save
                </button>
                <button id="updateFieldBtn" type="button"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Update
                </button>
                <button id="deleteFieldBtn" type="button"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete
                </button>
                <button id="clearFieldBtn" type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Clear
                </button>
            </div>

            <table id="FieldTable" className="table-auto w-full border-collapse border border-gray-200 text-left">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-200 px-4 py-2">Field ID</th>
                    <th className="border border-gray-200 px-4 py-2">Field Name</th>
                    <th className="border border-gray-200 px-4 py-2">Field Location</th>
                    <th className="border border-gray-200 px-4 py-2">Extent Size Of The Field ( km<sup>2</sup> )</th>
                    <th className="border border-gray-200 px-4 py-2">Field Image 1</th>
                    <th className="border border-gray-200 px-4 py-2">Field Image 2</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
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
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                </tr>
                </tbody>
            </table>


        </>
    )
}