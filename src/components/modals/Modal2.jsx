import React from 'react';
import { createPortal } from 'react-dom';

const Modal2 = ({ onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Modal 2 - Interactive List</h2>
        <ul className="list-disc space-y-2 p-4 bg-gray-100 rounded">
          <li>Element 1</li>
          <li>Element 2</li>
          <li>Element 3</li>
        </ul>
        <button onClick={onClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal2;
