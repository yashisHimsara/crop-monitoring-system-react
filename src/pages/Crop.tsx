export function Crop() {
    return (
        <>
            <div className="mb-3">
                <label htmlFor="CropCommonNameField" className="block text-sm font-medium text-gray-700">Crop Common Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="CropCommonNameField" />
            </div>

            <div className="mb-3">
                <label htmlFor="CropCommonScientificNameField" className="block text-sm font-medium text-gray-700">Crop Common Scientific Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="CropCommonScientificNameField" />
            </div>

            <div className="mb-3">
                <label htmlFor="CropCategoryField" className="block text-sm font-medium text-gray-700">Crop Category</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="CropCategoryField" />
            </div>

            <div className="mb-3">
                <label htmlFor="CropImage" className="block text-sm font-medium text-gray-700">Crop Image</label>
                <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="file" id="CropImage" />
            </div>

            <div className="mb-3">
                <label htmlFor="CropSeasonField" className="block text-sm font-medium text-gray-700">Crop Season</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="CropSeasonField" />
            </div>

            <div className="mb-3">
                <label htmlFor="CropFieldIdField" className="block text-sm font-medium text-gray-700">Assign Crop Field Id</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="CropFieldIdField" placeholder="Optional" />
            </div>

            <div className="mb-3">
                <label htmlFor="cropIdField" className="block text-sm font-medium text-gray-700">Crop ID</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="cropIdField" placeholder="Only add for delete and update" />
            </div>

            <div className="flex justify-start space-x-4 mt-4 mb-5">
                <button id="saveCropBtn" type="button" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Save</button>
                <button id="updateCropBtn" type="button" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Update</button>
                <button id="deleteCropBtn" type="button" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                <button id="clearCropBtn" type="button" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Clear</button>
            </div>

            <table id="CropTable" className="table-auto w-full border-collapse border border-gray-200 text-left">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-200 px-4 py-2">Crop ID</th>
                    <th className="border border-gray-200 px-4 py-2">Crop Common Name</th>
                    <th className="border border-gray-200 px-4 py-2">Crop Scientific Name</th>
                    <th className="border border-gray-200 px-4 py-2">Crop Category</th>
                    <th className="border border-gray-200 px-4 py-2">Crop Image</th>
                    <th className="border border-gray-200 px-4 py-2">Crop Season</th>
                    <th className="border border-gray-200 px-4 py-2">Assigned Crop Field Id</th>
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
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
                </tr>
                <tr>
                    <td className="border border-gray-200 px-4 py-2">N/A</td>
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
    );
}
