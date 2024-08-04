
import React, { useState } from 'react';
import Items from './items';
import Modal from './modal';

type medicine = {
    "name": string,
    "dosage": String,
    "price": number
}

export let cartitems = [] as medicine[];


const medicines = [
    { "name": "dolo", "dosage": "500mg", "price": 10 },
    { "name": "paracetamol", "dosage": "325mg", "price": 8 },
    { "name": "ibuprofen", "dosage": "200mg", "price": 12 },
    { "name": "aspirin", "dosage": "75mg", "price": 9 },
    { "name": "amoxicillin", "dosage": "500mg", "price": 15 },
    { "name": "azithromycin", "dosage": "250mg", "price": 18 },
    { "name": "omeprazole", "dosage": "20mg", "price": 11 },
    { "name": "esomeprazole", "dosage": "40mg", "price": 14 },
    { "name": "ranitidine", "dosage": "150mg", "price": 10 },
    { "name": "famotidine", "dosage": "20mg", "price": 12 },
];

const Pharma = () => {
    const [count, setCount] = useState(medicines.length);
    const [cart, setCart] = useState([] as medicine[])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMedicines, setFilteredMedicines] = useState(medicines);
    const [showModal, setShowModal] = useState(false);

    const updateResults = () => {
        const filtered = medicines.filter(medicine => medicine.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredMedicines(filtered);
        setCount(filtered.length);
    }

    const addItemToCart = (medicine) => {
        setCart([...cart, medicine])
        cartitems = cart;
    }

    const removeItem = (medicine) => {
        setCart(cart.filter((item) => item !== medicine));
        cartitems = cart;
    };

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div>
                <div>{`${count} results found`}</div>
                <div>
                    <input type="text" className='form-control' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className='btn btn-info' onClick={updateResults}>Search</button>
                </div>
                <div>
                    <button className='btn btn-info' onClick={openModal}>View Cart ({cart.length})</button>
                    <Modal show={showModal} onClose={closeModal} count={count}>
                        <h2>Cart</h2>
                        <ul className="list-inline">
                            {cart.map((medicine, index) => (
                                <li key={index} className="list-inline-item d-flex justify-content-between">
                                    <span>{medicine.name} - {medicine.price}</span>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removeItem(medicine)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </Modal>
                </div>
                {filteredMedicines.map((medicine, index) => (
                    <Items key={index} item={medicine} addtoCart={addItemToCart} />
                ))}
            </div>
        </>
    );
}

export default Pharma;