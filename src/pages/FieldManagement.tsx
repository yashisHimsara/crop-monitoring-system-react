import React, { useState, useEffect } from "react";
import TextField from "../components/TextField";
import SelectField from "../components/SelectField";
import DateField from "../components/DateField";
import InputTextWithImageUpload from "../components/InputTextWithImageUpload";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { saveField, getAllFields, deleteField, updateField } from "../redux/FieldSlice";

interface Field {
    fieldCode: string;
    fieldName: string;
    fieldLocation: string;
    size: string;
    crops: string;
    staff: string;
    image: string;
    dateAdded: string; // New field for date
}

export default function FieldManagement() {
    const dispatch = useDispatch();
    const fields = useSelector((state: RootState) => state.field);

    const [newField, setNewField] = useState<Field>({
        fieldCode: "",
        fieldName: "",
        fieldLocation: "",
        size: "",
        crops: "",
        staff: "",
        image: "",
        dateAdded: "", // Initialize date field
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedField, setSelectedField] = useState<Field | null>(null);
    const [editingField, setEditingField] = useState<Field | null>(null);

    // Fetch all fields on component mount
    useEffect(() => {
        dispatch(getAllFields());
    }, [dispatch]);

    const handleAddField = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(saveField(newField));
        setNewField({
            fieldCode: "",
            fieldName: "",
            fieldLocation: "",
            size: "",
            crops: "",
            staff: "",
            image: "",
            dateAdded: "",
        });
    };

    const handleUpdateField = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingField) {
            dispatch(updateField(newField));
            setEditingField(null);
            setNewField({
                fieldCode: "",
                fieldName: "",
                fieldLocation: "",
                size: "",
                crops: "",
                staff: "",
                image: "",
                dateAdded: "",
            });
        }
    };

    const handleRowClick = (field: Field) => {
        setNewField(field);
        setEditingField(field);
    };

    const handleDelete = (fieldCode: string) => {
        dispatch(deleteField(fieldCode));
    };

    const handleSeeMore = (field: Field) => {
        setSelectedField(field);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedField(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setNewField({ ...newField, [id]: value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        setNewField({ ...newField, [id]: value });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNewField({ ...newField, dateAdded: value });
    };

    const handleImageChange = (imageUrl: string) => {
        setNewField({ ...newField, image: imageUrl });
    };

    const columns = [
        { header: "Field Code", accessor: "fieldCode" },
        { header: "Field Name", accessor: "fieldName" },
        { header: "Crops", accessor: "crops" },
        { header: "Staff", accessor: "staff" },
        { header: "Date Added", accessor: "dateAdded" },
    ];

    const actions = [
        {
            label: "See More",
            onClick: (row: Field) => handleSeeMore(row),
            className: "bg-blue-600 text-white hover:bg-blue-700",
        },
        {
            label: "Delete",
            onClick: (row: Field) => handleDelete(row.fieldCode),
            className: "bg-red-600 text-white hover:bg-red-700",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Field Management</h2>
            <form onSubmit={handleAddField}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextField
                        id="fieldCode"
                        label="Field Code"
                        value={newField.fieldCode}
                        placeholder="Enter field code"
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        id="fieldName"
                        label="Field Name"
                        value={newField.fieldName}
                        placeholder="Enter field name"
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        id="fieldLocation"
                        label="Field Location"
                        value={newField.fieldLocation}
                        placeholder="Enter field location"
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        id="size"
                        label="Size"
                        value={newField.size}
                        placeholder="Enter field size"
                        onChange={handleInputChange}
                        required
                    />
                    <SelectField
                        id="crops"
                        label="Crops"
                        value={newField.crops}
                        options={["Wheat", "Corn", "Rice"]}
                        onChange={handleSelectChange}
                        required
                    />
                    <SelectField
                        id="staff"
                        label="Staff"
                        value={newField.staff}
                        options={["John Doe", "Jane Smith", "Alice Johnson"]}
                        onChange={handleSelectChange}
                        required
                    />
                    <DateField
                        id="dateAdded"
                        label="Date Added"
                        value={newField.dateAdded}
                        onChange={handleDateChange}
                        required
                    />
                    <InputTextWithImageUpload
                        label="Field Image"
                        onImageChange={handleImageChange}
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md mr-4"
                >
                    Add Field
                </button>
                <button
                    type="button"
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md mr-4"
                    onClick={handleUpdateField}
                >
                    Update Field
                </button>
            </form>

            <div className="mt-8">
                <Table columns={columns} data={fields} actions={actions} onRowClick={handleRowClick} />
            </div>

            {selectedField && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title="Field Details"
                >
                    <div className="space-y-4">
                        <p><strong>Field Code:</strong> {selectedField.fieldCode}</p>
                        <p><strong>Field Name:</strong> {selectedField.fieldName}</p>
                        <p><strong>Field Location:</strong> {selectedField.fieldLocation}</p>
                        <p><strong>Size:</strong> {selectedField.size}</p>
                        <p><strong>Crops:</strong> {selectedField.crops}</p>
                        <p><strong>Staff:</strong> {selectedField.staff}</p>
                        <p><strong>Date Added:</strong> {selectedField.dateAdded}</p>
                        <img
                            src={selectedField.image}
                            alt={selectedField.fieldName}
                            className="w-32 h-32 object-cover rounded-md mt-2"
                        />
                        <button
                            onClick={handleCloseModal}
                            className="bg-red-600 text-white px-4 py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
}