import React from 'react';
import { createPortal } from 'react-dom';

const Modal3 = ({ onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-purple-500">Modal 3 - Fancy Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 shadow-lg">
            Card 1
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg p-4 shadow-lg">
            Card 2
          </div>
        </div>
        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal3;
