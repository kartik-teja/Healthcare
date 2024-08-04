import React, { useState } from 'react';

const MedicineSchedule = () => {
    const [medicines, setMedicines] = useState([
        { id: 1, name: 'Paracetamol', time: '8:00 AM' },
        { id: 2, name: 'Ibuprofen', time: '12:00 PM' },
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [newMedicine, setNewMedicine] = useState({ name: '', time: '' });

    const handleAddMedicine = () => {
        setShowPopup(true);
    };

    const handleSaveMedicine = () => {
        const newMedicineId = medicines.length + 1;
        setMedicines([...medicines, { id: newMedicineId, name: newMedicine.name, time: newMedicine.time }]);
        setShowPopup(false);
        setNewMedicine({ name: '', time: '' });
    };

    const handleCancel = () => {
        setShowPopup(false);
        setNewMedicine({ name: '', time: '' });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewMedicine({ ...newMedicine, [name]: value });
    };

    const handleRemoveMedicine = (id) => {
        setMedicines(medicines.filter((medicine) => medicine.id !== id));
    };

    return (
        <div className="container">
            <h2 className="text-center">Medicine Schedule</h2>
            <ul className="list-group">
                {medicines.map((medicine) => (
                    <li key={medicine.id} className="list-group-item">
                        <span>{medicine.name}</span>
                        <span>{medicine.time}</span>
                        <button className="btn btn-danger" onClick={() => handleRemoveMedicine(medicine.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button className="btn btn-primary" onClick={handleAddMedicine}>Add Medicine</button>
            {showPopup && (
                <div className="modal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Medicine</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Medicine Name:</label>
                                        <input type="text" name="name" value={newMedicine.name} onChange={handleInputChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Time:</label>
                                        <input type="time" name="time" value={newMedicine.time} onChange={handleInputChange} className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={handleSaveMedicine}>Save</button>
                                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MedicineSchedule;