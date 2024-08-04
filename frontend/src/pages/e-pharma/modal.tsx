import React from 'react';

const Modal = ({ show, onClose, count, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Your Items</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {count > 0 ? (
                        <div className="modal-body flex">
                            {children}
                        </div>
                    ) : (
                        <h1 className='p-4'>No Item selected</h1>
                    )}
                    <button type="button"
                        className="btn btn-danger btn-sm" onClick={onClose}> Close</button>
                </div>
            </div>
        </div >
    );
};

export default Modal;